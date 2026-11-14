/**
 * rehype plugin: link presentation and overflow wrappers.
 *
 * - external links open in a new tab and get the CMYK treatment
 * - internal links get the CMYK text/underline treatment
 * - tables are wrapped in `.table-wrap` so wide tables scroll inside their
 *   own box instead of scrolling the page
 * - display maths gets a `.math-wrap` with the same guarantee
 */

import { visit } from 'unist-util-visit';
import { toString } from 'hast-util-to-string';
import type { Element, Root } from 'hast';
import type { Plugin } from 'unified';

function classList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === 'string') return value.split(/\s+/).filter(Boolean);
  return [];
}

function addClasses(
  node: Element,
  classes: string[],
): void {
  const properties = (node.properties ??= {});
  const current = classList(properties.className);
  for (const name of classes) {
    if (!current.includes(name)) current.push(name);
  }
  properties.className = current;
}

function isExternal(href: string): boolean {
  return /^(?:https?:)?\/\//i.test(href);
}

const rehypeLinkAttrs: Plugin<[], Root> = () => {
  return (tree) => {
    // Links: CMYK effect + external link attributes.
    visit(tree, 'element', (node: Element) => {
      if (node.tagName !== 'a') return;

      const href = node.properties?.href;
      if (typeof href !== 'string') return;

      const classes = classList(node.properties?.className);
      if (classes.includes('heading-anchor')) return;

      addClasses(node, ['cmyk-link']);

      const text = toString(node).trim();
      if (text && !node.properties?.['data-text']) {
        node.properties = node.properties ?? {};
        node.properties['data-text'] = text;
      }

      if (isExternal(href)) {
        node.properties = node.properties ?? {};
        node.properties.target = '_blank';
        const rel = classList(node.properties.rel);
        for (const value of ['noopener', 'noreferrer']) {
          if (!rel.includes(value)) rel.push(value);
        }
        node.properties.rel = rel;
      }
    });

    // Tables: horizontal overflow belongs to the table, not the page.
    visit(tree, 'element', (node: Element, index, parent) => {
      if (node.tagName !== 'table') return;
      if (!parent || typeof index !== 'number') return;
      if (parent.type !== 'root' && parent.type !== 'element') return;

      const parentClasses =
        parent.type === 'element'
          ? classList(parent.properties?.className)
          : [];
      if (parentClasses.includes('table-wrap')) return;

      const wrapper: Element = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrap'] },
        children: [node],
      };

      parent.children[index] = wrapper;
    });

    // Display maths: keep wide equations inside their own scroll box.
    visit(tree, 'element', (node: Element, index, parent) => {
      if (!parent || typeof index !== 'number') return;
      if (parent.type !== 'root' && parent.type !== 'element') return;

      const classes = classList(node.properties?.className);
      if (
        !classes.includes('katex-display') &&
        !classes.includes('math-display')
      ) {
        return;
      }

      const parentClasses =
        parent.type === 'element'
          ? classList(parent.properties?.className)
          : [];
      if (parentClasses.includes('math-wrap')) return;

      const wrapper: Element = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['math-wrap'] },
        children: [node],
      };

      parent.children[index] = wrapper;
    });
  };
};

export default rehypeLinkAttrs;
