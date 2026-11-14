/**
 * Build-time product catalogue.
 *
 * Reads the three JSON sources in `products/` once, validates them with Zod,
 * resolves every producer/storefront reference, and exposes the data the
 * product routes render. There is no runtime catalogue and no page file per
 * product: `/products/[id].astro` calls `getStaticPaths()` from this data.
 *
 * `links[].link` is intentionally allowed to be empty. An empty string means
 * the affiliate URL has not been supplied yet and renders as LINK PENDING.
 */

import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

export const PRODUCTS_DIR = path.resolve(process.cwd(), 'products');
export const PRODUCTS_ROUTE = '/products/';

const requiredString = (label: string) =>
  z
    .string()
    .min(1, `${label} must not be empty`)
    .refine((value) => value.trim().length > 0, `${label} must not be blank`);

const idSchema = z
  .string()
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    'must be a lowercase kebab-case id',
  );

const urlSchema = z
  .url()
  .refine(
    (value) => value.startsWith('https://') || value.startsWith('http://'),
    'must use http or https',
  );

const productLinkSchema = z.object({
  'storefront-id': idSchema,
  link: z
    .string()
    .refine(
      (value) => value === '' || /^https?:\/\/\S+$/.test(value),
      'must be empty or an absolute http(s) URL',
    ),
  affiliated: z.boolean(),
});

const productSchema = z.object({
  id: idSchema,
  name: requiredString('name'),
  subtitle: requiredString('subtitle'),
  icon: requiredString('icon'),
  description: requiredString('description'),
  'producer-id': idSchema,
  links: z.array(productLinkSchema).min(1, 'at least one link is required'),
});

const producerSchema = z.object({
  id: idSchema,
  name: requiredString('name'),
  url: urlSchema,
  icon: requiredString('icon'),
  description: requiredString('description'),
});

const storefrontSchema = z.object({
  id: idSchema,
  name: requiredString('name'),
  url: urlSchema,
  icon: requiredString('icon'),
  description: requiredString('description'),
});

function uniqueIdList<T extends { id: string }>(
  schema: z.ZodType<T>,
  label: string,
) {
  return z.array(schema).min(1).superRefine((items, ctx) => {
    const seen = new Set<string>();
    items.forEach((item, index) => {
      if (seen.has(item.id)) {
        ctx.addIssue({
          code: 'custom',
          path: [index, 'id'],
          message: `duplicate ${label} id "${item.id}"`,
        });
      }
      seen.add(item.id);
    });
  });
}

const productListSchema = uniqueIdList(productSchema, 'product');
const producerListSchema = uniqueIdList(producerSchema, 'producer');
const storefrontListSchema = uniqueIdList(storefrontSchema, 'storefront');

export type RawProduct = z.infer<typeof productSchema>;
export type Producer = z.infer<typeof producerSchema>;
export type Storefront = z.infer<typeof storefrontSchema>;

export interface ResolvedLink {
  storefront: Storefront;
  /** Raw outbound URL. Empty means the URL has not been supplied yet. */
  link: string;
  affiliated: boolean;
  pending: boolean;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  description: string;
  producer: Producer;
  links: ResolvedLink[];
}

export interface PendingLink {
  productId: string;
  productName: string;
  storefrontId: string;
  storefrontName: string;
}

export interface ProductSourceReport {
  failures: string[];
  warnings: string[];
  products: Product[];
  producers: Producer[];
  storefronts: Storefront[];
  pendingLinks: PendingLink[];
  counts: {
    products: number;
    producers: number;
    storefronts: number;
    links: number;
    liveLinks: number;
    pendingLinks: number;
  };
}

export interface ProductsData {
  products: Product[];
  producers: Producer[];
  storefronts: Storefront[];
  pendingLinks: PendingLink[];
}

const FILES = {
  products: 'products.json',
  producers: 'producers.json',
  storefronts: 'storefronts.json',
} as const;

type SourceName = keyof typeof FILES;

function readJson(
  source: SourceName,
  failures: string[],
): { value: unknown; label: string } {
  const file = FILES[source];
  const filePath = path.join(PRODUCTS_DIR, file);
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return { value: JSON.parse(raw), label: file };
  } catch (error) {
    failures.push(
      `${file}: could not be read: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
    return { value: null, label: file };
  }
}

/** Collect every string still starting with/containing TODO, with its path. */
function findTodoValues(
  value: unknown,
  label: string,
  valuePath: string,
  out: string[],
) {
  if (typeof value === 'string') {
    if (/TODO/i.test(value)) out.push(`${label}: TODO remains at ${valuePath}`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      findTodoValues(item, label, `${valuePath}[${index}]`, out),
    );
    return;
  }
  if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      findTodoValues(
        child,
        label,
        valuePath ? `${valuePath}.${key}` : key,
        out,
      );
    }
  }
}

function formatZodFailure(
  label: string,
  error: z.ZodError,
  failures: string[],
) {
  for (const issue of error.issues) {
    const issuePath = issue.path.length > 0 ? issue.path.join('.') : '(root)';
    failures.push(`${label}: ${issuePath}: ${issue.message}`);
  }
}

function publicIconPath(icon: string): string {
  const relative = icon.replace(/^\/+/, '');
  return path.resolve(process.cwd(), 'public', relative);
}

/**
 * Validate the raw JSON without throwing, so the content script can print
 * every problem at once. `loadProducts()` turns the same report into a hard
 * build failure.
 */
export function validateProductSources(): ProductSourceReport {
  const failures: string[] = [];
  const warnings: string[] = [];

  const rawProducts = readJson('products', failures);
  const rawProducers = readJson('producers', failures);
  const rawStorefronts = readJson('storefronts', failures);

  for (const source of [rawProducts, rawProducers, rawStorefronts]) {
    if (source.value !== null) {
      findTodoValues(source.value, source.label, '', failures);
    }
  }

  const productResult = productListSchema.safeParse(rawProducts.value);
  const producerResult = producerListSchema.safeParse(rawProducers.value);
  const storefrontResult = storefrontListSchema.safeParse(rawStorefronts.value);

  if (!productResult.success) {
    formatZodFailure(rawProducts.label, productResult.error, failures);
  }
  if (!producerResult.success) {
    formatZodFailure(rawProducers.label, producerResult.error, failures);
  }
  if (!storefrontResult.success) {
    formatZodFailure(rawStorefronts.label, storefrontResult.error, failures);
  }

  const rawProductItems = Array.isArray(rawProducts.value)
    ? (rawProducts.value as unknown[])
    : [];
  const rawProducerItems = Array.isArray(rawProducers.value)
    ? (rawProducers.value as unknown[])
    : [];
  const rawStorefrontItems = Array.isArray(rawStorefronts.value)
    ? (rawStorefronts.value as unknown[])
    : [];

  const producers = producerResult.success ? producerResult.data : [];
  const storefronts = storefrontResult.success ? storefrontResult.data : [];
  const producerMap = new Map(producers.map((item) => [item.id, item]));
  const storefrontMap = new Map(storefronts.map((item) => [item.id, item]));

  let linkCount = 0;
  let liveLinkCount = 0;

  if (productResult.success) {
    for (const product of productResult.data) {
      if (!producerMap.has(product['producer-id'])) {
        failures.push(
          `${rawProducts.label}: product "${product.id}" references unknown producer "${product['producer-id']}"`,
        );
      }
      for (const [index, link] of product.links.entries()) {
        linkCount += 1;
        if (link.link !== '') liveLinkCount += 1;
        if (!storefrontMap.has(link['storefront-id'])) {
          failures.push(
            `${rawProducts.label}: product "${product.id}" links[${index}] references unknown storefront "${link['storefront-id']}"`,
          );
        }
      }
    }
  } else {
    for (const item of rawProductItems) {
      if (item && typeof item === 'object' && Array.isArray((item as any).links)) {
        linkCount += (item as any).links.length;
      }
    }
  }

  // Icon files must exist in `public/` so a missing asset cannot ship.
  const icons = [
    ...producers.map((item) => ({
      source: rawProducers.label,
      owner: `producer "${item.id}"`,
      icon: item.icon,
    })),
    ...storefronts.map((item) => ({
      source: rawStorefronts.label,
      owner: `storefront "${item.id}"`,
      icon: item.icon,
    })),
    ...(productResult.success
      ? productResult.data.map((item) => ({
          source: rawProducts.label,
          owner: `product "${item.id}"`,
          icon: item.icon,
        }))
      : []),
  ];
  for (const { source, owner, icon } of icons) {
    if (!icon.startsWith('/')) {
      failures.push(`${source}: ${owner} icon must be a public path: "${icon}"`);
      continue;
    }
    const absolute = publicIconPath(icon);
    if (!fs.existsSync(absolute)) {
      failures.push(
        `${source}: ${owner} icon does not exist: public${icon}`,
      );
    }
  }

  const refsResolve =
    productResult.success &&
    producerResult.success &&
    storefrontResult.success &&
    !failures.some(
      (failure) =>
        failure.includes('references unknown producer') ||
        failure.includes('references unknown storefront'),
    );

  const products: Product[] = refsResolve
    ? productResult.data.map((product) => {
        const producer = producerMap.get(product['producer-id']);
        if (!producer) {
          throw new Error(
            `products: unresolved producer "${product['producer-id']}"`,
          );
        }
        return {
          id: product.id,
          name: product.name,
          subtitle: product.subtitle,
          icon: product.icon,
          description: product.description,
          producer,
          links: product.links.map((link) => {
            const storefront = storefrontMap.get(link['storefront-id']);
            if (!storefront) {
              throw new Error(
                `products: unresolved storefront "${link['storefront-id']}"`,
              );
            }
            return {
              storefront,
              link: link.link,
              affiliated: link.affiliated,
              pending: link.link === '',
            };
          }),
        };
      })
    : [];

  const pendingLinks: PendingLink[] = [];
  for (const product of products) {
    for (const link of product.links) {
      if (!link.pending) continue;
      pendingLinks.push({
        productId: product.id,
        productName: product.name,
        storefrontId: link.storefront.id,
        storefrontName: link.storefront.name,
      });
    }
  }

  if (products.length > 0) {
    if (liveLinkCount === 0) {
      warnings.push(
        'every product link is still empty; detail pages render LINK PENDING',
      );
    }
    for (const pending of pendingLinks) {
      warnings.push(
        `link pending: ${pending.productId} -> ${pending.storefrontId}`,
      );
    }
  }

  return {
    failures,
    warnings,
    products,
    producers,
    storefronts,
    pendingLinks,
    counts: {
      products: productResult.success
        ? productResult.data.length
        : rawProductItems.length,
      producers: producerResult.success
        ? producerResult.data.length
        : rawProducerItems.length,
      storefronts: storefrontResult.success
        ? storefrontResult.data.length
        : rawStorefrontItems.length,
      links: linkCount,
      liveLinks: liveLinkCount,
      pendingLinks: pendingLinks.length,
    },
  };
}

/**
 * Hard build-time loader. Throws with every validation failure so Astro fails
 * the build instead of shipping a broken catalogue.
 */
export function loadProducts(): ProductsData {
  const report = validateProductSources();
  if (report.failures.length > 0) {
    throw new Error(
      `products: ${report.failures.length} validation failure(s)\n${report.failures
        .map((failure) => `  - ${failure}`)
        .join('\n')}`,
    );
  }

  return {
    products: report.products,
    producers: report.producers,
    storefronts: report.storefronts,
    pendingLinks: report.pendingLinks,
  };
}

export function productRoute(product: Pick<Product, 'id'>): string {
  return `${PRODUCTS_ROUTE}${product.id}/`;
}

/** Strip the protocol and a trailing slash for on-page URL labels. */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/+$/, '');
}
