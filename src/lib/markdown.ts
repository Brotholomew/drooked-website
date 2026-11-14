/**
 * Markdown -> HTML pipeline for the knowledgebase vault.
 *
 * Obsidian basics only: GFM, math, wikilinks, callouts, heading anchors.
 * KaTeX ships its fonts through the package, so nothing is loaded from a CDN.
 */

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import 'katex/dist/katex.min.css';

import remarkWikilinks, {
  type WikilinkReport,
} from './remark-wikilinks';
import remarkCallouts from './remark-callouts';
import rehypeLinkAttrs from './rehype-link-attrs';
import rehypeVaultA11y from './rehype-vault-a11y';
import { vault, type Vault, type VaultNote } from './vault';

export interface RenderResult {
  html: string;
  report: WikilinkReport;
}

export interface RenderOptions {
  vault?: Vault;
}

/**
 * Obsidian accepts `$$formula$$` on one line as display maths, while
 * remark-math needs the fences on their own lines. Currency in the vault is
 * written with a bare `$` (`US$35`, `$149.99`), so escape a dollar sign that
 * is followed by a digit before parsing; genuine inline maths in this vault
 * starts with a letter or symbol.
 */
function normaliseVaultMath(body: string): string {
  const displayMath = body.replace(
    /^([ \t]*)\$\$(.+?)\$\$[ \t]*$/gm,
    (_match, indent: string, expression: string) =>
      `${indent}$$\n${expression.trim()}\n${indent}$$`,
  );

  return displayMath.replace(/\$(?=\d)/g, '\\$');
}

export async function renderMarkdown(
  note: VaultNote,
  options: RenderOptions = {},
): Promise<RenderResult> {
  const vaultData = options.vault ?? vault;
  const report: WikilinkReport = { resolved: 0, missingLinks: [] };

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkWikilinks, { vault: vaultData, note, report })
    .use(remarkCallouts)
    .use(remarkRehype)
    .use(rehypeKatex, {
      throwOnError: false,
      strict: false,
      trust: false,
    })
    .use(rehypeVaultA11y)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['heading-anchor'],
      },
    })
    .use(rehypeLinkAttrs)
    .use(rehypeStringify)
    .process(normaliseVaultMath(note.body));

  return { html: String(file), report };
}
