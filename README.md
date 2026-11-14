# droocked.origins website

Static marketing site for **droocked.origins** — [`origins.droocked.com`](https://origins.droocked.com).

Built with [Astro](https://astro.build) (static output, TypeScript strict, no client framework).

The full implementation plan lives at
`/Users/brotholomew/.opencode/plan/droocked-origins-website.md`.
Stage 0 (this bootstrap) covers repository setup only; pages, vault rendering,
products, analytics, and CI/CD are implemented in later stages.

## Requirements

- Node.js 22 or newer
- npm (the project uses `npm`, not pnpm)

## Local commands

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies (use `npm ci` on CI). |
| `npm run dev` | Start the Astro dev server. |
| `npm run build` | Build the static site into `dist/`. |
| `npm run preview` | Preview the built site locally. |
| `npm run check` | Run `astro check` (TypeScript + Astro diagnostics). |
| `npm run validate` | Run content validation (`scripts/validate-content.mjs`). |
| `npm run brand:build` | Build brand/header assets (placeholder until Stage 1). |
| `npm run utm` | Print UTM links (placeholder until Stage 7). |

## Project layout

```text
knowledgebase/   Obsidian vault (content source, kept from before bootstrap)
products/        Product/producer/storefront JSON sources
scripts/         Build and validation scripts
src/pages/       Astro routes
src/styles/      Global styles and design tokens
public/          Static assets served as-is
```

## Environment and secrets

`.env` and `origin-prompt.md` are local-only and gitignored. Never commit them.
`GH_TOKEN` from `.env` is only used for local GitHub setup.

## Branches

- `develop` — integration trunk (default branch)
- `main` — production; GitHub Pages deploys from `main`

## Notes

- Fonts are self-hosted via Fontsource: Roboto Slab (`@fontsource/roboto-slab`)
  and DejaVu Mono (`@fontsource/dejavu-mono`, the DejaVu Sans Mono family).
- The site is configured for `trailingSlash: 'always'` and directory-format
  builds, with `@astrojs/sitemap` enabled for `https://origins.droocked.com`.
