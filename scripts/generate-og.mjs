#!/usr/bin/env node
/**
 * Generate the 1200 x 630 Open Graph / social card.
 *
 * The card is built from the same committed header layers as the site, on the
 * blueprint-blue ground, with a light wordmark and a plain monospace label so
 * it stays readable when social platforms scale it down.
 *
 * Run with: npm run og:build
 */
import { existsSync } from 'node:fs';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brandDir = path.join(root, 'public', 'brand');
const layoutPath = path.join(root, 'brand', 'layout.json');
const output = path.join(root, 'public', 'og-image.png');

const WIDTH = 1200;
const HEIGHT = 630;

const fail = (message) => {
  throw new Error(`og:build failed: ${message}`);
};

const readBrand = async (name) => {
  const file = path.join(brandDir, name);
  if (!existsSync(file)) fail(`missing ${path.relative(root, file)}`);
  return readFile(file, 'utf8');
};

const layout = JSON.parse(await readFile(layoutPath, 'utf8'));
const { headerCrop, layers } = layout;

if (!headerCrop || !layers) {
  fail('brand/layout.json has no headerCrop/layers');
}

/** The site wordmark is dark ink; on the OG card it needs light ink. */
const lightenLockup = (svg) =>
  svg
    .replaceAll('#2b2c2c', '#f3f3f8')
    .replaceAll('fill="#000000"', 'fill="#f3f3f8"');

const backgroundSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <pattern id="minor" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="#f3f3f8" stroke-opacity="0.09" stroke-width="1"/>
    </pattern>
    <pattern id="major" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M120 0H0V120" fill="none" stroke="#f3f3f8" stroke-opacity="0.2" stroke-width="1.5"/>
    </pattern>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#1e4469"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#minor)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#major)"/>
  <rect x="12" y="12" width="${WIDTH - 24}" height="${HEIGHT - 24}" fill="none" stroke="#f3f3f8" stroke-opacity="0.85" stroke-width="1.5"/>
  <rect x="26" y="26" width="${WIDTH - 52}" height="${HEIGHT - 52}" fill="none" stroke="#f3f3f8" stroke-opacity="0.35" stroke-width="1"/>
  <g fill="none" stroke="#f3f3f8" stroke-opacity="0.7" stroke-width="1">
    <path d="M12 46V12h34"/>
    <path d="M${WIDTH - 46} 12h34v34"/>
    <path d="M12 ${HEIGHT - 46}v34h34"/>
    <path d="M${WIDTH - 46} ${HEIGHT - 12}h34v-34"/>
  </g>
</svg>`;

const headerWidth = 1000;
const headerHeight = (headerWidth * headerCrop.height) / headerCrop.width;
const headerX = (WIDTH - headerWidth) / 2;
const headerY = 36;
const scale = headerWidth / headerCrop.width;

const layerSvg = async (name) => {
  const svg = await readBrand(name);
  return name === 'header-lockup.svg' ? lightenLockup(svg) : svg;
};

const rasterise = async (svg, width, height) =>
  sharp(Buffer.from(svg), { density: 144 })
    .resize(Math.max(1, Math.round(width)), Math.max(1, Math.round(height)), {
      fit: 'fill',
    })
    .png()
    .toBuffer();

const composition = [];
for (const name of [
  'header-sketches.svg',
  'caliper.svg',
  'detail_d.svg',
  'o_measure.svg',
]) {
  const svg = await layerSvg(name);
  const bounds =
    name === 'header-sketches.svg'
      ? {
          x: headerCrop.x,
          y: headerCrop.y,
          width: headerCrop.width,
          height: headerCrop.height,
        }
      : layers[name.replace('.svg', '')];

  if (!bounds) fail(`layout.json has no bounds for ${name}`);

  composition.push({
    input: await rasterise(svg, bounds.width * scale, bounds.height * scale),
    left: Math.round(headerX + (bounds.x - headerCrop.x) * scale),
    top: Math.round(headerY + (bounds.y - headerCrop.y) * scale),
  });
}

// The lockup contains both the `droocked` wordmark and the outlined `origins`.
composition.push({
  input: await rasterise(
    await layerSvg('header-lockup.svg'),
    headerWidth,
    headerHeight,
  ),
  left: Math.round(headerX),
  top: Math.round(headerY),
});

const labelSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <text x="600" y="478" text-anchor="middle" font-family="DejaVu Sans Mono, Menlo, Courier New, monospace" font-size="46" font-weight="700" letter-spacing="5" fill="#ffffff">DROOCKED.ORIGINS</text>
  <line x1="430" y1="503" x2="770" y2="503" stroke="#00c4c4" stroke-width="2"/>
  <text x="600" y="544" text-anchor="middle" font-family="DejaVu Sans Mono, Menlo, Courier New, monospace" font-size="19" font-weight="700" letter-spacing="4" fill="#f3f3f8" fill-opacity="0.82">3D PRINTING · FILAMENT · SNAPMAKER U1</text>
</svg>`;

await mkdir(path.dirname(output), { recursive: true });

const base = await sharp(Buffer.from(backgroundSvg)).png().toBuffer();
const label = await rasterise(labelSvg, WIDTH, HEIGHT);

await sharp(base)
  .composite([...composition, { input: label, left: 0, top: 0 }])
  .flatten({ background: '#1e4469' })
  .png({ compressionLevel: 9 })
  .toFile(output);

const metadata = await sharp(output).metadata();
if (metadata.width !== WIDTH || metadata.height !== HEIGHT) {
  fail(
    `public/og-image.png is ${metadata.width}x${metadata.height}, expected ${WIDTH}x${HEIGHT}`,
  );
}

console.log('og:build complete');
console.log(`  public/og-image.png (${metadata.width}x${metadata.height})`);
