# SEO, metadata, and social assets

The site is a static Astro build served from GitHub Pages at
**https://origins.droocked.com**. Every canonical, Open Graph, Twitter, JSON-LD,
and sitemap URL uses that production origin, even when a build runs locally.

All shared helpers live in `src/lib/seo.ts`.

## Title conventions

`BaseLayout` receives the **complete** document title. Pages add the brand
suffix themselves; the layout never appends one, so titles cannot be doubled.

| Route | Title |
|---|---|
| `/` | `DROOCKED.ORIGINS — 3D printing, filament and the Snapmaker U1` |
| `/projects/` | `Projects — DROOCKED.ORIGINS` |
| `/products/` | `Products — DROOCKED.ORIGINS` |
| `/products/<id>/` | `<Product name> — DROOCKED.ORIGINS` |
| `/contact/` | `Contact — DROOCKED.ORIGINS` |
| `/privacy/` | `Privacy — DROOCKED.ORIGINS` |
| `/knowledgebase/` | `KNOWLEDGEBASE — DROOCKED.ORIGINS` |
| knowledgebase folder/note | `KNOWLEDGEBASE — <Display title> — DROOCKED.ORIGINS` |
| `/404/` | `Sheet not found — DROOCKED.ORIGINS` |

Rules:

- Keep the page-specific part first and the brand last, except on the homepage.
- Use the vault's `displayTitle` (without the `NN - ` order prefix).
- Vault pages always carry the `KNOWLEDGEBASE — ` prefix so a note title cannot
  collide with a product, static page, or another section.
- Titles must stay unique across the generated site.

## Description conventions

- One unique description per page, roughly **120–160 characters**.
- `src/lib/seo.ts` exports `clampText` and `plainTextExcerpt`; the latter strips
  Obsidian wikilinks/embeds, headings, tables, callouts, task lists, code, math,
  markdown links/images, inline emphasis, and raw HTML before clamping.
- Knowledgebase notes use the first prose in the note (headings skipped);
  folders use their pinned index note, or a list of direct children.
- Product descriptions use the product subtitle plus its short description and
  never invent prices or offers.
- 404 has a unique title and description but is `noindex, nofollow`.

## Canonical URLs

- `canonicalUrl(path)` normalises a route to one canonical production URL.
- Paths always have a leading slash and a trailing slash (`/products/u1/`).
- Query strings, fragments, and `index.html` are removed.
- `BaseLayout` defaults `canonicalPath` to `Astro.url.pathname`; static pages can
  pass an explicit path when needed.
- `astro.config.mjs` sets `trailingSlash: 'always'` and `build.format: 'directory'`.

## Open Graph, Twitter, and icons

`BaseLayout` emits:

- `og:site_name`, `og:type`, `og:title`, `og:description`, `og:url`,
  `og:image`, `og:image:type`, `og:image:width/height/alt`, `og:locale`
- `twitter:card=summary_large_image`, `twitter:title`,
  `twitter:description`, `twitter:image`, `twitter:image:alt`
- `<link rel="canonical">`
- `/favicon.svg` and a 180 × 180 `/apple-touch-icon.png`
- `theme-color` `#1e4469`

The social image is always the absolute URL
`https://origins.droocked.com/og-image.png`.

### Regenerating the OG image

```bash
npm run og:build
```

`scripts/generate-og.mjs` uses `sharp` to compose a 1200 × 630 card from the
same committed header layers as the site: blueprint-blue ground, grid, frame,
lightened wordmark and caliper composition, plus a plain monospace
`DROOCKED.ORIGINS` label and `3D PRINTING · FILAMENT · SNAPMAKER U1` strap line.
The generated `public/og-image.png` is committed so CI and deployments do not
need to regenerate it.

## JSON-LD

Structured data is emitted as `application/ld+json` from `BaseLayout`.

| Route | Schema |
|---|---|
| `/` | `WebSite` + `Organization` |
| `/products/<id>/` | `ItemPage` (with a `Product` `mainEntity`, no offers/prices) + `BreadcrumbList` |
| `/knowledgebase/` | `BreadcrumbList` |
| knowledgebase folder | `BreadcrumbList` |
| knowledgebase note | `Article` + `BreadcrumbList` |
| other static pages | none |

Breadcrumbs are built from the same route chain rendered in the page UI.

## Sitemap and robots

- `@astrojs/sitemap` generates `dist/sitemap-index.xml` → `dist/sitemap-0.xml`.
- The sitemap is generated from `site` in `astro.config.mjs`, so URLs are always
  production URLs.
- 404 is excluded explicitly with the integration `filter`.
- `public/robots.txt` allows all crawlers and points to
  `https://origins.droocked.com/sitemap-index.xml`.
- Privacy is indexable (there is no reason to hide it).
- 404 has no sitemap entry.

Expected sitemap coverage: home, 4 static pages (`/projects/`, `/products/`,
`/contact/`, `/privacy/`), the knowledgebase root plus 3 folders and 39 notes
(43 URLs), and 3 product detail pages.

## Validation

```bash
npm run validate
npm run check
PUBLIC_GA_ID=G-SZ67XVNMM4 npm run build
```

After a build, check that every `dist/**/index.html` and `dist/404.html` has one
non-empty `<title>`, one meta description, one canonical link, the OG/Twitter
tags, and parseable JSON-LD, and that no canonical or OG URL contains
`localhost` or `127.0.0.1`.
