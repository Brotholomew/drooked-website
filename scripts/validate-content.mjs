#!/usr/bin/env node
/**
 * Content validation for the knowledgebase vault.
 *
 * Checks:
 *   - every `knowledgebase/**\/*.md` parses (frontmatter included)
 *   - every wikilink resolves to a note/folder and, when present, an anchor
 *   - generated routes and slugs are unique
 *   - every note has a title (frontmatter, or filename-derived fallback)
 *   - every note and folder produces a route
 *
 * Exits non-zero on broken wikilinks, duplicate routes/slugs, unreadable
 * markdown, missing titles, or missing routes.
 */

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';

const ROOT = process.cwd();
const VAULT_DIR = path.join(ROOT, 'knowledgebase');

const failures = [];
const warnings = [];

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function walkMarkdown(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === '.DS_Store') continue;
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkMarkdown(absolute));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      files.push(absolute);
    }
  }
  return files.sort();
}

let vaultModule;
try {
  vaultModule = await import('../src/lib/vault.ts');
} catch (error) {
  console.error('validate-content: failed to build the vault');
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

const {
  buildVault,
  extractWikilinks,
  resolveEntry,
  resolveHeading,
  VAULT_ROUTE,
} = vaultModule;

const { slugify } = await import('../src/lib/slug.ts');

// --- Markdown / frontmatter parsing ---------------------------------------

const markdownFiles = walkMarkdown(VAULT_DIR);
const parsedFiles = [];
const markdownParser = unified().use(remarkParse);

for (const file of markdownFiles) {
  const relPath = path.relative(ROOT, file).split(path.sep).join('/');
  try {
    const raw = fs.readFileSync(file, 'utf8');
    const parsed = matter(raw);
    markdownParser.parse(parsed.content);
    parsedFiles.push({ relPath, parsed });
  } catch (error) {
    fail(
      `markdown parse failed: ${relPath}: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
}

let vault;
try {
  vault = buildVault();
} catch (error) {
  console.error('validate-content: vault build failed');
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

// --- Titles ---------------------------------------------------------------

let derivedTitles = 0;
for (const note of vault.notes) {
  if (!note.title || !note.title.trim()) {
    fail(`note has no title: ${note.relPath}`);
    continue;
  }
  if (!note.frontmatterTitle) {
    derivedTitles += 1;
    warn(
      `note has no frontmatter title; using filename "${note.displayTitle}": ${note.relPath}`,
    );
  }
}

// --- Wikilinks ------------------------------------------------------------

let wikilinkCount = 0;
let embedCount = 0;
const missing = [];

for (const note of vault.notes) {
  for (const link of extractWikilinks(note.body)) {
    wikilinkCount += 1;
    if (link.embed) embedCount += 1;

    const targetNote = link.target ? resolveEntry(vault, link.target) : note;

    if (!targetNote) {
      missing.push({
        source: note.relPath,
        raw: link.raw,
        reason: `target note not found: "${link.target}"`,
      });
      continue;
    }

    if (link.heading && targetNote.type === 'note') {
      if (!resolveHeading(targetNote, link.heading)) {
        missing.push({
          source: note.relPath,
          raw: link.raw,
          reason: `heading not found in ${targetNote.relPath}: "${link.heading}"`,
        });
      }
    }
  }
}

if (missing.length > 0) {
  const grouped = new Map();
  for (const item of missing) {
    const list = grouped.get(item.source) ?? [];
    list.push(item);
    grouped.set(item.source, list);
  }

  fail(`unresolved wikilinks: ${missing.length}`);
  console.error(`\nUNRESOLVED WIKILINKS (${missing.length})`);
  for (const [source, items] of grouped) {
    console.error(`  ${source}`);
    for (const item of items) {
      console.error(`    ${item.raw} — ${item.reason}`);
    }
  }
  console.error('');
}

// --- Routes and slugs -----------------------------------------------------

const routes = [vault.root.route, ...vault.folders.map((f) => f.route), ...vault.notes.map((n) => n.route)];
const routeSet = new Set(routes);
let duplicateSlugs = 0;

if (routeSet.size !== routes.length) {
  const seen = new Set();
  const duplicates = new Set();
  for (const route of routes) {
    if (seen.has(route)) duplicates.add(route);
    seen.add(route);
  }
  fail(`duplicate routes: ${[...duplicates].join(', ')}`);
}

for (const folder of vault.folders) {
  const childSlugs = new Map();
  for (const child of folder.children) {
    const existing = childSlugs.get(child.slug);
    if (existing) {
      duplicateSlugs += 1;
      fail(
        `duplicate slug in ${folder.route}: "${existing.name}" and "${child.name}" both -> "${child.slug}"`,
      );
    }
    childSlugs.set(child.slug, child);
  }
}

for (const entry of [vault.root, ...vault.folders, ...vault.notes]) {
  if (!entry.route.startsWith(VAULT_ROUTE)) {
    fail(`route outside the vault: ${entry.route} (${entry.relPath})`);
  }
  if (entry.type === 'note') {
    if (entry.route !== `${entry.parentRoute}${entry.slug}/`) {
      fail(`note route does not follow its parent: ${entry.route}`);
    }
    if (entry.order !== null && entry.slug !== slugify(entry.displayTitle)) {
      fail(
        `note slug does not strip its numeric prefix: ${entry.relPath} -> "${entry.slug}"`,
      );
    }
  } else if (entry.route !== VAULT_ROUTE) {
    if (entry.route !== `${entry.parentRoute}${entry.slug}/`) {
      fail(`folder route does not follow its parent: ${entry.route}`);
    }
  }
}

const requiredRoutes = [
  '/knowledgebase/',
  '/knowledgebase/filaments/',
  '/knowledgebase/filaments/types/',
  '/knowledgebase/snapmaker-u1/',
];
for (const route of requiredRoutes) {
  if (!routeSet.has(route)) fail(`required route was not generated: ${route}`);
}

const expectedRouteCount = 1 + vault.folders.length + vault.notes.length;
if (routes.length !== expectedRouteCount) {
  fail(
    `expected ${expectedRouteCount} routes (root + folders + notes), got ${routes.length}`,
  );
}

// --- Summary --------------------------------------------------------------

const noteRoutes = vault.notes.length;
const folderRoutes = vault.folders.length;

console.log('validate-content');
console.log(`  markdown files:      ${markdownFiles.length}`);
console.log(`  parsed:              ${parsedFiles.length}`);
console.log(`  notes:               ${vault.notes.length}`);
console.log(`  folders:             ${folderRoutes}`);
console.log(`  routes:              ${routes.length} (1 root + ${folderRoutes} folders + ${noteRoutes} notes)`);
console.log(`  wikilinks:           ${wikilinkCount} (${wikilinkCount - missing.length} resolved, ${missing.length} unresolved, ${embedCount} embeds)`);
console.log(`  titles:              ${vault.notes.length - derivedTitles} from frontmatter, ${derivedTitles} derived from filename`);
console.log(`  duplicate routes:    ${routeSet.size === routes.length ? 0 : routes.length - routeSet.size}`);
console.log(`  duplicate slugs:     ${duplicateSlugs}`);

if (warnings.length > 0) {
  console.log('\nWARNINGS');
  for (const warning of warnings) console.log(`  - ${warning}`);
}

if (failures.length > 0) {
  console.error(`\n✗ content invalid: ${failures.length} failure(s)`);
  for (const failure of failures) {
    if (!failure.startsWith('unresolved wikilinks')) {
      console.error(`  - ${failure}`);
    }
  }
  process.exit(1);
}

console.log('\n✓ content valid');
