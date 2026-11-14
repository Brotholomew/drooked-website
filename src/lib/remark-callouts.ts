/**
 * remark plugin: Obsidian callouts.
 *
 * A blockquote whose first paragraph starts with `[!type] Title` becomes
 *   <aside class="callout callout--type" data-callout-title="Title">...
 * Obsidian's `abstract`, `summary` and `tip` are cyan, `warning` is yellow,
 * `danger` is magenta, and unknown types fall back to `note` (cyan).
 */

import { visit } from 'unist-util-visit';
import type { Blockquote, Paragraph, Root, Text } from 'mdast';
import type { Plugin } from 'unified';

const CALLOUT_MARKER = /^\[!([A-Za-z][\w-]*)\](?:[ \t]+([^\n]*))?/;

const KNOWN_TYPES = new Set([
  'abstract',
  'summary',
  'tip',
  'warning',
  'danger',
  'note',
  'info',
  'important',
  'success',
  'question',
  'quote',
  'example',
  'failure',
  'bug',
  'todo',
  'caution',
  'error',
  'hint',
  'check',
  'done',
]);

function textNode(value: string): Text {
  return { type: 'text', value };
}

function makeTitle(title: string): Paragraph {
  return {
    type: 'paragraph',
    children: [textNode(title)],
    data: {
      hName: 'p',
      hProperties: { className: ['callout__title'] },
    },
  };
}

const remarkCallouts: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'blockquote', (node: Blockquote) => {
      const first = node.children[0];
      if (!first || first.type !== 'paragraph') return;

      const firstText = first.children[0];
      if (!firstText || firstText.type !== 'text') return;

      const match = CALLOUT_MARKER.exec(firstText.value);
      if (!match) return;

      const rawType = match[1].toLowerCase();
      const type = KNOWN_TYPES.has(rawType) ? rawType : 'note';
      const title = (match[2] ?? '').trim() || rawType.toUpperCase();

      // Remove the marker (and its title) from the paragraph. A soft line
      // break after the marker is part of the same text node, so drop the
      // leading newline as well.
      const rest = firstText.value
        .slice(match[0].length)
        .replace(/^\r?\n/, '');

      if (rest) {
        firstText.value = rest;
      } else {
        first.children.shift();
        if (first.children.length === 0) {
          node.children.shift();
        }
      }

      node.data = {
        hName: 'aside',
        hProperties: {
          className: ['callout', `callout--${type}`],
          'data-callout-type': rawType,
          'data-callout-title': title,
        },
      };

      node.children.unshift(makeTitle(title));
    });
  };
};

export default remarkCallouts;
