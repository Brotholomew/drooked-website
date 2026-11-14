#!/usr/bin/env node
/**
 * UTM link generator for droocked.origins.
 *
 * Convention (see docs/utm.md):
 *   utm_source   youtube | instagram | tiktok
 *   utm_medium   full_length | reel | social
 *   utm_campaign u1_1, u1_2, filaments_01, ...
 *   utm_content  desc_link | qr | bio
 *   utm_id       yt_f_u1_1_desc, yt_sh_u1_1_desc, ig_r_u1_1_desc, ...
 *
 * Usage:
 *   node scripts/utm.mjs --path /products/snapmaker-u1/ \
 *     --source youtube --medium full_length --campaign u1_1 \
 *     --content desc_link --id yt_f_u1_1_desc
 */

const BASE_URL = 'https://origins.droocked.com';

const SOURCES = ['youtube', 'instagram', 'tiktok'];
const MEDIUMS = ['full_length', 'reel', 'social'];
const CONTENTS = ['desc_link', 'qr', 'bio'];

const TOKEN = /^[a-z0-9]+(?:_[a-z0-9]+)*$/;

/** Expected utm_id prefix for a source/medium pair. Used as a soft warning. */
const ID_PREFIX = {
  'youtube:full_length': 'yt_f',
  'youtube:reel': 'yt_sh',
  'youtube:social': 'yt',
  'instagram:full_length': 'ig_f',
  'instagram:reel': 'ig_r',
  'instagram:social': 'ig',
  'tiktok:full_length': 'tt_f',
  'tiktok:reel': 'tt_r',
  'tiktok:social': 'tt',
};

const CANONICAL = [
  {
    label: 'YouTube full-length description',
    path: '/products/snapmaker-u1/',
    source: 'youtube',
    medium: 'full_length',
    campaign: 'u1_1',
    content: 'desc_link',
    id: 'yt_f_u1_1_desc',
  },
  {
    label: 'YouTube Short description',
    path: '/products/snapmaker-u1/',
    source: 'youtube',
    medium: 'reel',
    campaign: 'u1_1',
    content: 'desc_link',
    id: 'yt_sh_u1_1_desc',
  },
  {
    label: 'Instagram link in bio',
    path: '/',
    source: 'instagram',
    medium: 'social',
    campaign: 'u1_1',
    content: 'bio',
    id: 'ig_bio',
  },
  {
    label: 'YouTube full-length QR code',
    path: '/products/snapmaker-u1/',
    source: 'youtube',
    medium: 'full_length',
    campaign: 'u1_1',
    content: 'qr',
    id: 'yt_f_u1_1_qr',
  },
  {
    label: 'TikTok Reel description',
    path: '/products/snapmaker-u1/',
    source: 'tiktok',
    medium: 'reel',
    campaign: 'u1_1',
    content: 'desc_link',
    id: 'tt_r_u1_1_desc',
  },
];

const HELP = `droocked.origins UTM link generator

Usage:
  node scripts/utm.mjs --path <path> --source <source> --medium <medium> \\
    --campaign <campaign> --content <content> --id <id>

Required:
  --path      Site path to link to, e.g. /products/snapmaker-u1/ or /
  --source    ${SOURCES.join(' | ')}
  --medium    ${MEDIUMS.join(' | ')}
  --campaign  Campaign token, e.g. u1_1, u1_2, filaments_01
  --content   ${CONTENTS.join(' | ')}
  --id        Unique link id, e.g. yt_f_u1_1_desc, ig_bio

Optional:
  --base      Base URL (default ${BASE_URL})
  --table     Print the canonical examples and exit
  --help, -h  Show this help and exit

Rules:
  Source, medium and content must use the values above; campaign and id are
  lowercase tokens joined by underscores. Paths are normalised to a trailing
  slash. Never add these parameters to internal links: they start a new
  session and overwrite the original source/campaign attribution.

Examples:
  node scripts/utm.mjs --path /products/snapmaker-u1/ --source youtube \\
    --medium full_length --campaign u1_1 --content desc_link --id yt_f_u1_1_desc
  node scripts/utm.mjs --path / --source instagram --medium social \\
    --campaign u1_1 --content bio --id ig_bio
`;

/** Read `--flag value` and `--flag=value` pairs. */
function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith('-')) continue;

    if (arg === '--help' || arg === '-h') {
      args.help = true;
      continue;
    }
    if (arg === '--table') {
      args.table = true;
      continue;
    }

    const match = /^--([a-z-]+)(?:=(.*))?$/.exec(arg);
    if (!match) continue;
    const [, name, inlineValue] = match;
    if (inlineValue !== undefined) {
      args[name] = inlineValue;
      continue;
    }

    const value = argv[index + 1];
    if (value === undefined || value.startsWith('--')) {
      args[name] = '';
      continue;
    }
    args[name] = value;
    index += 1;
  }
  return args;
}

function fail(message) {
  console.error(`utm: ${message}`);
  console.error('Run `node scripts/utm.mjs --help` for usage.');
  process.exit(1);
}

function normaliseBase(base) {
  let url;
  try {
    url = new URL(base);
  } catch {
    fail(`--base is not a valid URL: ${base}`);
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    fail(`--base must use http or https: ${base}`);
  }
  return `${url.origin}${url.pathname}`.replace(/\/+$/, '');
}

function normalisePath(rawPath) {
  if (!rawPath) fail('--path is required');
  if (rawPath.includes('?')) {
    fail('--path must not contain a query string; build the UTM parameters here');
  }
  if (rawPath.includes('#')) {
    fail('--path must not contain a fragment');
  }

  let path = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  path = path.replace(/\/{2,}/g, '/');

  const lastSegment = path.slice(path.lastIndexOf('/') + 1);
  if (!lastSegment.includes('.')) {
    path = path.replace(/\/?$/, '/');
  }
  return path;
}

function requireEnum(name, value, allowed) {
  if (!value) fail(`--${name} is required`);
  if (!allowed.includes(value)) {
    fail(`--${name} must be one of ${allowed.join(', ')} (got "${value}")`);
  }
  return value;
}

function requireToken(name, value) {
  if (!value) fail(`--${name} is required`);
  if (!TOKEN.test(value)) {
    fail(
      `--${name} must be lowercase letters, digits and single underscores (got "${value}")`,
    );
  }
  return value;
}

function buildUrl(parts) {
  const base = normaliseBase(parts.base || BASE_URL);
  const path = normalisePath(parts.path);

  const query = new URLSearchParams({
    utm_source: parts.source,
    utm_medium: parts.medium,
    utm_campaign: parts.campaign,
    utm_content: parts.content,
    utm_id: parts.id,
  });

  return `${base}${path}?${query.toString()}`;
}

function printTable() {
  const rows = CANONICAL.map((example) => ({
    label: example.label,
    id: example.id,
    url: buildUrl(example),
  }));

  const labelWidth = Math.max(...rows.map((row) => row.label.length));
  const idWidth = Math.max(...rows.map((row) => row.id.length));

  console.log('Canonical droocked.origins UTM links\n');
  for (const row of rows) {
    console.log(`${row.label.padEnd(labelWidth)}  ${row.id.padEnd(idWidth)}`);
    console.log(`  ${row.url}`);
  }
}

const args = parseArgs(process.argv.slice(2));

if (args.help) {
  console.log(HELP);
  process.exit(0);
}

if (args.table) {
  printTable();
  process.exit(0);
}

const source = requireEnum('source', args.source, SOURCES);
const medium = requireEnum('medium', args.medium, MEDIUMS);
const content = requireEnum('content', args.content, CONTENTS);
const campaign = requireToken('campaign', args.campaign);
const id = requireToken('id', args.id);
const path = normalisePath(args.path);

const expectedPrefix = ID_PREFIX[`${source}:${medium}`];
if (expectedPrefix && !id.startsWith(expectedPrefix)) {
  console.error(
    `utm: warning: --id "${id}" does not start with "${expectedPrefix}" for ${source}/${medium}`,
  );
}

const url = buildUrl({
  base: args.base,
  path,
  source,
  medium,
  campaign,
  content,
  id,
});

console.log(url);
