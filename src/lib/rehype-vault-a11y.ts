/**
 * rehype plugin: accessibility fixes for rendered vault notes.
 *
 * - The page owns the only `h1` (the subpage header), so a note that starts
 *   its body with `#` gets that heading demoted to `h2`. Only this vault note
 *   does so today, but the rule keeps every future note valid.
 * - GFM task lists render disabled checkbox inputs. They are not interactive,
 *   but a disabled input still needs an accessible name; label each one with
 *   its own task text and completion state.
 */

import { visit } from 'unist-util-visit';
import { toString } from 'hast-util-to-string';
import type { Element, Root } from 'hast';
import type { Plugin } from 'unified';

const MAX_LABEL = 140;

function mathAnnotation(node: Element): string | null {
  let found: string | null = null;

  visit(node, 'element', (child: Element) => {
    if (found) return;
    if (child.tagName !== 'annotation') return;
    if (child.properties?.encoding !== 'application/x-tex') return;
    const value = toString(child).trim();
    if (value) found = value;
  });

  return found;
}

const rehypeVaultA11y: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node: Element, _index, parent) => {
      // Body headings sit under the page's single h1.
      if (node.tagName === 'h1') {
        node.tagName = 'h2';
        return;
      }

      // KaTeX hides its HTML layer from assistive technology and axe treats a
      // header cell that contains only maths as empty. Use the TeX annotation
      // as the column name so the table keeps a real header.
      if (node.tagName === 'th' && !node.properties?.['aria-label']) {
        const annotation = mathAnnotation(node);
        if (annotation) {
          node.properties = node.properties ?? {};
          node.properties['aria-label'] = annotation;
          // axe's empty-table-header rule only accepts real text, so add a
          // visually hidden copy for the header cell.
          node.children.push({
            type: 'element',
            tagName: 'span',
            properties: { className: ['visually-hidden'] },
            children: [{ type: 'text', value: annotation }],
          });
          return;
        }
      }

      if (
        node.tagName !== 'input' ||
        node.properties?.type !== 'checkbox'
      ) {
        return;
      }

      const checked =
        node.properties.checked === true ||
        node.properties.checked === '';
      const task =
        parent?.type === 'element'
          ? toString(parent).replace(/\s+/g, ' ').trim()
          : '';
      const label = `${checked ? 'Completed' : 'Not completed'}${
        task ? `: ${task}` : ' task'
      }`;

      node.properties = node.properties ?? {};
      node.properties['aria-label'] =
        label.length > MAX_LABEL ? `${label.slice(0, MAX_LABEL - 1)}…` : label;
    });
  };
};

export default rehypeVaultA11y;
