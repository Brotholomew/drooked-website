#!/usr/bin/env node
/**
 * Render a visual verification sheet for the generated header composition.
 *
 * This is not a website asset. It composites the same five layers, at the same
 * coordinates, on the blueprint-blue background so the geometry can be checked
 * as a single 3840 x 1320 PNG.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const layout = JSON.parse(await readFile(path.join(root, 'brand', 'layout.json'), 'utf8'));
const { headerCrop, layers } = layout;

const fail = (message) => {
  throw new Error(`brand:preview failed: ${message}`);
};

const composites = [];

/**
 * Render a layer at its composition bounds and return a composite entry.
 * `bounds` uses artboard coordinates; the preview uses header-crop coordinates.
 */
const addLayer = async (file, bounds) => {
  const input = path.join(root, 'public', 'brand', file);
  if (!existsSync(input)) {
    fail(`missing generated asset ${path.relative(root, input)} — run npm run brand:build first`);
  }

  const width = Math.max(1, Math.round(bounds.width));
  const height = Math.max(1, Math.round(bounds.height));
  const buffer = await sharp(input, { density: 96 })
    .resize({ width, height, fit: 'fill' })
    .png()
    .toBuffer();

  composites.push({
    input: buffer,
    left: Math.round(bounds.x - headerCrop.x),
    top: Math.round(bounds.y - headerCrop.y),
  });
};

// Bottom-to-top: sketches, caliper, detail_d, o_measure, lockup.
await addLayer('header-sketches.svg', {
  x: headerCrop.x,
  y: headerCrop.y,
  width: headerCrop.width,
  height: headerCrop.height,
});
await addLayer('caliper.svg', layers.caliper);
await addLayer('detail_d.svg', layers.detail_d);
await addLayer('o_measure.svg', layers.o_measure);
await addLayer('header-lockup.svg', {
  x: headerCrop.x,
  y: headerCrop.y,
  width: headerCrop.width,
  height: headerCrop.height,
});

const output = path.join(root, 'brand', 'preview.png');
await sharp({
  create: {
    width: headerCrop.width,
    height: headerCrop.height,
    channels: 4,
    background: '#1e4469',
  },
})
  .composite(composites)
  .png()
  .toFile(output);

const meta = await sharp(output).metadata();
if (meta.width !== headerCrop.width || meta.height !== headerCrop.height) {
  fail(`preview is ${meta.width}x${meta.height}, expected ${headerCrop.width}x${headerCrop.height}`);
}

console.log(`brand:preview written to ${path.relative(root, output)} (${meta.width}x${meta.height})`);
