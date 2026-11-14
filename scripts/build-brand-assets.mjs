#!/usr/bin/env node
/**
 * Build the committed brand assets from the exact VectorCraft composition.
 *
 * The source SVGs in `brand/source/` are read-only masters. This script never
 * edits them; it crops/recolours copies into `public/brand/` so the website can
 * place every layer in one shared 3840 x 1320 coordinate box.
 */
import { existsSync } from 'node:fs';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(root, 'brand', 'source');
const brandDir = path.join(root, 'public', 'brand');
const layoutPath = path.join(root, 'brand', 'layout.json');

const SOURCE_FILES = [
  'droocked-origins-lockup.svg',
  'droocked-wordmark.svg',
  'caliper.svg',
  'detail_d.svg',
  'o_measure.svg',
  'sketches.svg',
];

const fail = (message) => {
  throw new Error(`brand:build failed: ${message}`);
};

const readSource = async (name) => {
  const file = path.join(sourceDir, name);
  if (!existsSync(file)) {
    fail(`missing source file ${path.relative(root, file)}`);
  }
  return readFile(file, 'utf8');
};

/** Replace the artboard root width/height/viewBox with the header crop. */
const cropRoot = (svg, crop, label) => {
  const rootTag = svg.match(/<svg\b[^>]*>/);
  if (!rootTag) {
    fail(`${label}: no <svg> root element`);
  }

  const original = rootTag[0];
  const expectedArtboard = 'viewBox="0 0 3840 2160"';
  if (!original.includes('width="3840"') || !original.includes('height="2160"')) {
    fail(`${label}: expected a 3840 x 2160 root element`);
  }
  if (!original.includes(expectedArtboard)) {
    fail(`${label}: expected ${expectedArtboard}`);
  }

  const replacement = original
    .replace('width="3840"', `width="${crop.width}"`)
    .replace('height="2160"', `height="${crop.height}"`)
    .replace(expectedArtboard, `viewBox="${crop.x} ${crop.y} ${crop.width} ${crop.height}"`);

  if (replacement === original) {
    fail(`${label}: root crop did not change the SVG`);
  }

  return svg.replace(original, replacement);
};

const replaceOnce = (input, search, replacement, label) => {
  if (!input.includes(search)) {
    fail(`${label}: expected markup was not found`);
  }
  const output = input.replace(search, replacement);
  if (output === input) {
    fail(`${label}: expected replacement did not happen`);
  }
  return output;
};

/** Format a scaled path coordinate without exponent noise. */
const formatNumber = (value) => Number(value.toFixed(6)).toString();

/**
 * The lockup subtitle is outlined at 260 px while the VectorCraft composition
 * uses "origins" at 450 px. Scale every number in the absolute path data rather
 * than scaling the group, so `stroke-width="2.4"` stays a real 2.4 units.
 */
const scaleAbsolutePath = (d, scale, label) => {
  if (/[a-z]/.test(d)) {
    fail(`${label}: expected an absolute-only path (found a lowercase command)`);
  }
  const scaled = d.replace(/-?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/gi, (number) =>
    formatNumber(Number(number) * scale),
  );
  if (scaled === d) {
    fail(`${label}: path scaling did not change the path`);
  }
  return scaled;
};

const layout = JSON.parse(await readFile(layoutPath, 'utf8'));
const { artboard, headerCrop, layers } = layout;

if (
  !artboard ||
  !headerCrop ||
  artboard.width !== 3840 ||
  artboard.height !== 2160 ||
  headerCrop.x !== 0 ||
  headerCrop.y !== 550 ||
  headerCrop.width !== 3840 ||
  headerCrop.height !== 1320
) {
  fail('brand/layout.json does not describe the expected 3840 x 2160 artboard and 0 550 3840 1320 header crop');
}

for (const name of ['caliper', 'detail_d', 'o_measure', 'wordmark', 'origins']) {
  if (!layers?.[name]) {
    fail(`brand/layout.json is missing the "${name}" layer`);
  }
}

await mkdir(brandDir, { recursive: true });

// 1. Header lockup: crop, recolour the wordmark, outline the subtitle.
const lockup = await readSource('droocked-origins-lockup.svg');
const wordmarkOpen = '<g id="wordmark" transform="translate(709.917,1180)">';
const subtitleOpen = '<g id="subtitle" transform="translate(1602.540,1520)">';

if (!lockup.includes(wordmarkOpen)) {
  fail('lockup: expected wordmark group was not found');
}
if (!lockup.includes(subtitleOpen)) {
  fail('lockup: expected subtitle group was not found');
}

const wordmarkGroup = lockup.match(/<g id="wordmark"[\s\S]*?<\/g>/)?.[0];
const subtitleGroup = lockup.match(/<g id="subtitle"[\s\S]*?<\/g>/)?.[0];
if (!wordmarkGroup || !subtitleGroup) {
  fail('lockup: could not extract the wordmark/subtitle groups');
}

const wordmarkPath = wordmarkGroup.match(/<path\b[^>]*\bd="([^"]+)"/)?.[1];
const subtitlePath = subtitleGroup.match(/<path\b[^>]*\bd="([^"]+)"/)?.[1];
if (!wordmarkPath) {
  fail('lockup: wordmark path was not found');
}
if (!subtitlePath) {
  fail('lockup: subtitle path was not found');
}

// VectorCraft text origins for the composed lockup. The standalone lockup SVG
// is centred differently, so these are the exact composition positions.
const WORDMARK_ORIGIN = { x: 724.932, y: 1074.303 };
const ORIGINS_ORIGIN = { x: 2167.531, y: 1392.193 };
const LOCKUP_SUBTITLE_SIZE = 260;
const COMPOSITION_SUBTITLE_SIZE = 450;

const newWordmarkGroup = replaceOnce(
  wordmarkGroup,
  wordmarkOpen,
  `<g id="wordmark" transform="translate(${WORDMARK_ORIGIN.x},${WORDMARK_ORIGIN.y})" fill="#2b2c2c">`,
  'lockup wordmark group',
);

const scaledSubtitlePath = scaleAbsolutePath(
  subtitlePath,
  COMPOSITION_SUBTITLE_SIZE / LOCKUP_SUBTITLE_SIZE,
  'lockup subtitle path',
);

const newSubtitleGroup = replaceOnce(
  replaceOnce(
    subtitleGroup,
    subtitleOpen,
    `<g id="subtitle" transform="translate(${ORIGINS_ORIGIN.x},${ORIGINS_ORIGIN.y})" fill="none" stroke="#ababab" stroke-width="2.4">`,
    'lockup subtitle group',
  ),
  subtitlePath,
  scaledSubtitlePath,
  'lockup subtitle path',
);

let headerLockup = cropRoot(lockup, headerCrop, 'lockup');
headerLockup = replaceOnce(headerLockup, wordmarkGroup, newWordmarkGroup, 'lockup wordmark');
headerLockup = replaceOnce(headerLockup, subtitleGroup, newSubtitleGroup, 'lockup subtitle');

// 2. Header sketches: only the root viewBox changes.
const sketches = await readSource('sketches.svg');
const headerSketches = cropRoot(sketches, headerCrop, 'sketches');

// 3. Layer SVGs that already live in their own tight boxes.
for (const name of ['caliper', 'detail_d', 'o_measure']) {
  const source = path.join(sourceDir, `${name}.svg`);
  if (!existsSync(source)) {
    fail(`missing source file ${path.relative(root, source)}`);
  }
  await copyFile(source, path.join(brandDir, `${name}.svg`));
}

// 4. Favicon: the first `d` of the wordmark, in white on blueprint blue.
const secondGlyphIndex = wordmarkPath.indexOf('M451.660');
if (secondGlyphIndex <= 0) {
  fail('favicon: could not split the first `d` glyph from the wordmark path');
}
const firstD = wordmarkPath.slice(0, secondGlyphIndex).trim();
if (!firstD.endsWith('Z')) {
  fail('favicon: the first `d` glyph is not a closed path');
}

const favicon = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 420 420">
  <rect width="420" height="420" fill="#1e4469"/>
  <g transform="translate(34 392)" fill="#ffffff">
    <path d="${firstD}"/>
  </g>
</svg>
`;

// 5. Write everything.
await writeFile(path.join(brandDir, 'header-lockup.svg'), headerLockup);
await writeFile(path.join(brandDir, 'header-sketches.svg'), headerSketches);
await writeFile(path.join(root, 'public', 'favicon.svg'), favicon);

const appleTouchIcon = path.join(root, 'public', 'apple-touch-icon.png');
await sharp(Buffer.from(favicon), { density: 576 })
  .resize(180, 180, { fit: 'fill' })
  .png()
  .toFile(appleTouchIcon);

const appleMeta = await sharp(appleTouchIcon).metadata();
if (appleMeta.width !== 180 || appleMeta.height !== 180) {
  fail(`apple-touch-icon.png is ${appleMeta.width}x${appleMeta.height}, expected 180x180`);
}

for (const name of SOURCE_FILES) {
  if (!existsSync(path.join(sourceDir, name))) {
    fail(`source file disappeared: ${name}`);
  }
}

console.log('brand:build complete');
console.log(`  ${path.relative(root, path.join(brandDir, 'header-lockup.svg'))}`);
console.log(`  ${path.relative(root, path.join(brandDir, 'header-sketches.svg'))}`);
console.log(`  ${path.relative(root, path.join(brandDir, 'caliper.svg'))}`);
console.log(`  ${path.relative(root, path.join(brandDir, 'detail_d.svg'))}`);
console.log(`  ${path.relative(root, path.join(brandDir, 'o_measure.svg'))}`);
console.log('  public/favicon.svg');
console.log('  public/apple-touch-icon.png');
