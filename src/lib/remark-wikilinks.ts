/**
 * remark plugin: Obsidian wikilinks -> real links.
 *
 * Supports `[[Note]]`, `[[Note|Alias]]`, `[[Note\|Alias]]`,
 * `[[Note#Heading]]`, `[[Note#Heading|Alias]]` and `[[#Heading]]`.
 * Targets resolve by full basename, stripped basename, relative path or
 * generated route. Unresolved targets become a `.vault-link--missing` span
 * and are collected in the report so the build/validator can print them.
 */

import { visit } from 'unist-util-visit';
import type {
  Emphasis,
  Link,
  Parent,
  Root,
  Strong,
  Text,
} from 'mdast';
import type { Plugin } from 'unified';
import {
  parseWikilinkInner,
  resolveEntry,
  resolveHeading,
  slugifyHeading,
  type MissingLink,
  type Vault,
  type VaultNote,
} from './vault';

export interface WikilinkReport {
  resolved: number;
  missingLinks: MissingLink[];
}

export interface RemarkWikilinksOptions {
  vault: Vault;
  note: VaultNote;
  report: WikilinkReport;
}

const WIKILINK_RE = /!?\[\[([^[\]\n]+?)\]\]/g;

function textNode(value: string): Text {
  return { type: 'text', value };
}

function resolvedLink(
  url: string,
  label: string,
  extraClass: string[] = [],
): Link {
  return {
    type: 'link',
    url,
    children: [textNode(label)],
    data: {
      hProperties: {
        className: ['cmyk-link', ...extraClass],
        'data-text': label,
      },
    },
  };
}

function missingSpan(label: string, title: string): Emphasis {
  return {
    type: 'emphasis',
    children: [textNode(label)],
    data: {
      hName: 'span',
      hProperties: {
        className: ['vault-link--missing'],
        title,
      },
    },
  };
}

function embedCard(url: string, label: string, missing = false): Emphasis {
  const badge: Strong = {
    type: 'strong',
    children: [textNode('EMBED')],
    data: { hProperties: { className: ['vault-embed__label'] } },
  };

  return {
    type: 'emphasis',
    children: [
      badge,
      missing
        ? missingSpan(label, `Unresolved embed: ${label}`)
        : resolvedLink(url, label, ['vault-embed__link']),
    ],
    data: {
      hName: 'span',
      hProperties: { className: ['vault-embed'] },
    },
  };
}

const remarkWikilinks: Plugin<[RemarkWikilinksOptions], Root> = (options) => {
  const { vault, note, report } = options;

  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;
      if (parent.type === 'link') return;
      if (!node.value.includes('[[')) return;

      WIKILINK_RE.lastIndex = 0;
      const replacements: Parent['children'] = [];
      let cursor = 0;
      let match: RegExpExecArray | null;

      while ((match = WIKILINK_RE.exec(node.value)) !== null) {
        const before = node.value.slice(cursor, match.index);
        if (before) replacements.push(textNode(before));

        const embed = match[0].startsWith('!');
        const parsed = parseWikilinkInner(match[1], embed);
        if (!parsed) {
          replacements.push(textNode(match[0]));
          cursor = match.index + match[0].length;
          continue;
        }

        const target = parsed.target ? resolveEntry(vault, parsed.target) : note;
        const label =
          parsed.alias ??
          (parsed.target
            ? target?.displayTitle ?? parsed.target
            : parsed.heading ?? 'link');

        if (!target) {
          report.missingLinks.push({
            source: note.relPath,
            sourceRoute: note.route,
            target: parsed.target,
            alias: parsed.alias,
            heading: parsed.heading,
            reason: 'missing-note',
          });
          replacements.push(
            embed
              ? embedCard('#', label, true)
              : missingSpan(label, `Unresolved wikilink: ${parsed.target}`),
          );
          cursor = match.index + match[0].length;
          continue;
        }

        let anchor = '';
        if (parsed.heading && target.type === 'note') {
          const heading = resolveHeading(target, parsed.heading);
          if (!heading) {
            report.missingLinks.push({
              source: note.relPath,
              sourceRoute: note.route,
              target: parsed.target,
              alias: parsed.alias,
              heading: parsed.heading,
              reason: 'missing-heading',
            });
          }
          anchor = `#${heading?.id ?? slugifyHeading(parsed.heading)}`;
        }

        const sameNote = target.route === note.route;
        const url = sameNote && anchor ? anchor : `${target.route}${anchor}`;

        report.resolved += 1;
        replacements.push(
          embed ? embedCard(url, label) : resolvedLink(url, label),
        );

        cursor = match.index + match[0].length;
      }

      if (replacements.length === 0) return;

      const after = node.value.slice(cursor);
      if (after) replacements.push(textNode(after));

      parent.children.splice(index, 1, ...replacements);
      return index + replacements.length;
    });
  };
};

export default remarkWikilinks;
