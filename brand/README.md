# Brand assets

Committed source copies and the generated header composition for droocked.origins.

## Source

`brand/source/` is a read-only copy of the masters used by the site:

- `droocked-origins-lockup.svg` — outlined wordmark + subtitle
- `droocked-wordmark.svg` — tight wordmark
- `caliper.svg` — diagonal VectorCraft caliper
- `detail_d.svg` — construction sketch around the first `d`
- `o_measure.svg` — dashed measurements
- `sketches.svg` — full-artboard letter sketches

The originals live in the droocked branding folder and must not be edited here.
`brand/layout.json` holds the original 3840 x 2160 artboard, the header crop
(`0 550 3840 1320`), and the exact VectorCraft layer bounds.

## Generated

```sh
npm run brand:build
node scripts/render-brand-preview.mjs
```

`npm run brand:build` writes:

- `public/brand/header-lockup.svg` — cropped to the header; wordmark `#2b2c2c`,
  subtitle `fill:none`, `stroke:#ababab`, `stroke-width:2.4`
- `public/brand/header-sketches.svg` — cropped to the header
- `public/brand/caliper.svg`, `detail_d.svg`, `o_measure.svg` — copied layer SVGs
- `public/favicon.svg` — first `d` of the wordmark, white on `#1e4469`
- `public/apple-touch-icon.png` — 180 x 180 raster of the favicon

The standalone lockup is centred differently from the VectorCraft composition
and its subtitle is outlined at 260 px. The build script therefore moves the
wordmark to the composition text origin and scales the absolute subtitle path to
450 px, so the combined lockup lands at the exact layer positions recorded in
`brand/layout.json`.

`brand/preview.png` is a 3840 x 1320 visual check only; it is not shipped.
