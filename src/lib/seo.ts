/**
 * SEO and structured-data helpers.
 *
 * The site is a static build served from GitHub Pages at the custom domain, so
 * every canonical/OG/sitemap URL must use the production origin even when the
 * build runs locally. Keep that origin here and nowhere else.
 */

export const SITE_URL = 'https://origins.droocked.com';
export const SITE_NAME = 'DROOCKED.ORIGINS';
export const SITE_HOME_TITLE =
  'DROOCKED.ORIGINS — 3D printing, filament and the Snapmaker U1';
export const SITE_DESCRIPTION =
  'DROOCKED.ORIGINS follows Lenny building a 3D printing brand — the Snapmaker U1, filament guides, product notes and the knowledge gathered along the way.';

export const OG_IMAGE_PATH = '/og-image.png';
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT =
  'DROOCKED.ORIGINS blueprint wordmark with a caliper measuring the first o';

export const SOCIAL_PROFILES = [
  'https://www.instagram.com/droocked.origins',
  'https://www.tiktok.com/@droocked.origins',
  'https://www.youtube.com/@droocked.origins',
];

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Keep meta descriptions short enough for a search result snippet. */
export const MAX_DESCRIPTION_LENGTH = 158;

export type JsonLd = Record<string, unknown>;

/**
 * Normalise a route to a production canonical path: leading slash, no query or
 * hash, no `index.html`, and always a trailing slash.
 */
export function canonicalPath(pathname = '/'): string {
  let path = String(pathname || '/');

  if (/^https?:\/\//i.test(path)) {
    try {
      path = new URL(path).pathname;
    } catch {
      path = '/';
    }
  }

  path = path.split('?')[0].split('#')[0].replace(/\\/g, '/');

  if (!path.startsWith('/')) path = `/${path}`;
  path = path.replace(/\/index\.html?$/i, '/').replace(/\.html?$/i, '/');
  path = path.replace(/\/{2,}/g, '/');

  if (!path.endsWith('/')) path = `${path}/`;
  return path;
}

/** Absolute production URL for a route. */
export function canonicalUrl(pathname = '/'): string {
  return `${SITE_URL}${canonicalPath(pathname)}`;
}

/** Absolute production URL for a public asset such as `/icons/...svg`. */
export function absoluteAssetUrl(assetPath = '/'): string {
  const path = String(assetPath || '/');
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Collapse whitespace and clamp to a sentence-friendly snippet length. */
export function clampText(input: string, maxLength = MAX_DESCRIPTION_LENGTH): string {
  const text = String(input ?? '')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLength) return text;

  const slice = text.slice(0, Math.max(1, maxLength - 1));
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace >= Math.floor(maxLength * 0.55) ? slice.slice(0, lastSpace) : slice;

  return `${cut.trimEnd()}…`;
}

/**
 * Turn a markdown note into a plain-text excerpt for meta descriptions.
 *
 * Obsidian-specific syntax (wikilinks/embeds), headings, tables, callouts,
 * code, math, task lists, markdown links/images, and inline emphasis are
 * stripped rather than rendered.
 */
export function plainTextExcerpt(
  markdown: string,
  maxLength = MAX_DESCRIPTION_LENGTH,
): string {
  const text = String(markdown ?? '')
    // Frontmatter is not part of the note body in the vault, but be defensive.
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
    // Fenced code blocks.
    .replace(/(?:^|\n)[ \t]*(```|~~~)[\s\S]*?\1[ \t]*(?=\n|$)/g, ' ')
    // Wikilink embeds and wikilinks: keep aliases or targets.
    .replace(/!?\[\[([^[\]\n]+?)\]\]/g, (_raw, inner: string) => {
      const cleaned = inner.replace(/\\\|/g, '|');
      const pipe = cleaned.indexOf('|');
      const left = pipe === -1 ? cleaned : cleaned.slice(0, pipe);
      const alias = pipe === -1 ? '' : cleaned.slice(pipe + 1);
      const target = left.split('#')[0].trim();
      return alias.trim() || target.replace(/^\d+\s*[-–]\s*/, '');
    })
    // Markdown images and links.
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<((?:https?:\/\/|mailto:)[^>]+)>/g, '$1')
    // Raw HTML.
    .replace(/<\/?[^>]+>/g, ' ')
    // Table rows and separators.
    .replace(/^[ \t]*\|.*$[ \t]*/gm, ' ')
    .replace(/^[ \t]*[-:| ]{3,}[ \t]*$/gm, ' ')
    // Heading, blockquote, callout, and list markers.
    .replace(/^[ \t]{0,3}#{1,6}[ \t]+/gm, '')
    .replace(/^[ \t]*>[ \t]*\[![^\]]+\][^\n]*$/gm, ' ')
    .replace(/^[ \t]*>[ \t]?/gm, '')
    .replace(/\[\![a-zA-Z]+\][+-]?[ \t]*/g, '')
    .replace(/^[ \t]*[-*+][ \t]+\[[ xX]\][ \t]+/gm, '')
    .replace(/^[ \t]*(?:[-*+]|\d+\.)[ \t]+/gm, '')
    // Display and inline math.
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$\n]+\$/g, ' ')
    // Inline code, emphasis, and escapes.
    .replace(/(`+)([\s\S]*?)\1/g, '$2')
    .replace(/[*_~]+/g, '')
    .replace(/\\([\\`*{}[\]()#+\-.!_|>])/g, '$1');

  return clampText(text, maxLength);
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Schema.org BreadcrumbList for a page's visible breadcrumb. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

/** Schema.org WebSite for the site root. */
export function websiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    alternateName: 'droocked.origins',
    url: canonicalUrl('/'),
    description: SITE_DESCRIPTION,
    inLanguage: 'en',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/** Schema.org Organization for the brand behind the site. */
export function organizationJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: 'droocked.origins',
    url: canonicalUrl('/'),
    email: 'contact@droocked.com',
    logo: {
      '@type': 'ImageObject',
      url: absoluteAssetUrl('/apple-touch-icon.png'),
      width: 180,
      height: 180,
    },
    sameAs: SOCIAL_PROFILES,
  };
}

export interface ItemPageInput {
  name: string;
  description: string;
  path: string;
  product: {
    name: string;
    description: string;
    category?: string;
    image?: string;
    brand?: string;
  };
}

/**
 * Schema.org ItemPage for a product detail page. Deliberately no `offers` or
 * `price`: no prices are published or invented on this site.
 */
export function itemPageJsonLd(input: ItemPageInput): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.path),
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: {
      '@type': 'Product',
      name: input.product.name,
      description: input.product.description,
      ...(input.product.category
        ? { category: input.product.category }
        : {}),
      ...(input.product.image
        ? { image: absoluteAssetUrl(input.product.image) }
        : {}),
      ...(input.product.brand
        ? { brand: { '@type': 'Brand', name: input.product.brand } }
        : {}),
    },
  };
}

export interface ArticleInput {
  headline: string;
  description: string;
  path: string;
}

/** Schema.org Article for a knowledgebase note. */
export function articleJsonLd(input: ArticleInput): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    url: canonicalUrl(input.path),
    mainEntityOfPage: canonicalUrl(input.path),
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en',
    publisher: { '@id': ORGANIZATION_ID },
    author: { '@id': ORGANIZATION_ID },
  };
}
