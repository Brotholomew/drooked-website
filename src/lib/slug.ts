/**
 * Slug rules for the knowledgebase vault.
 *
 * Obsidian filenames carry a human ordering prefix (`01 - Drying Filament`).
 * URLs and display titles drop that prefix; the number is rendered separately
 * as a blueprint index. The rest of the slug is deterministic so build output
 * does not depend on the filesystem or locale:
 *
 *   strip `^\d+\s*[-–]\s*`
 *   NFKD normalize and drop combining marks
 *   lowercase
 *   `&` -> `and`, `+` -> `plus`
 *   every non-alphanumeric run -> `-`
 *   collapse and trim dashes
 */

const ORDER_PREFIX = /^\d+\s*[-–]\s*/;

/** Remove a leading `NN - ` / `NN – ` ordering prefix. */
export function stripOrderPrefix(name: string): string {
  return name.replace(ORDER_PREFIX, '').trim();
}

/** Numeric ordering prefix, or null when the name has none. */
export function getOrder(name: string): number | null {
  const match = /^(\d+)\s*[-–]\s*/.exec(name.trim());
  return match ? Number.parseInt(match[1], 10) : null;
}

/** Blueprint-style index label (`0` -> `00`, `24` -> `24`, `100` -> `100`). */
export function formatOrder(order: number | null): string | null {
  if (order === null) return null;
  return String(order).padStart(2, '0');
}

/** Deterministic URL slug for a folder name or note basename. */
export function slugify(input: string): string {
  return stripOrderPrefix(input)
    .normalize('NFKD')
    .replace(/\p{M}+/gu, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\+/g, ' plus ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}
