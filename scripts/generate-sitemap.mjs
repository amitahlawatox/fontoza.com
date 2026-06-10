import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://fontoza.com';
const TODAY = '2026-06-10';

// ── All style IDs from src/lib/registry.ts ──────────────────────────────────
// Tier 1 (priority 0.9) — top 10 by search volume
const TIER_1_STYLE_IDS = [
  'cursive-font',
  'bold-text',
  'italic-font',
  'bold-italic-font',
  'gothic-font',
  'strikethrough-text',
  'small-caps',
  'double-struck',
  'upside-down-text',
  'vaporwave-text',
];

// Tier 2 (priority 0.8) — next 10 by search volume
const TIER_2_STYLE_IDS = [
  'bold-cursive-font',
  'monospace-font',
  'circled-text',
  'bold-gothic-font',
  'fullwidth-text',
  'underline-text',
  'sans-serif-font',
  'zalgo-text',
  'superscript-text',
  'negative-circled',
];

// Tier 3–4 (priority 0.5) — remaining styles
const TIER_3_4_STYLE_IDS = [
  'sans-bold',
  'sans-italic',
  'sans-bold-italic',
  'squared-text',
  'negative-squared',
  'parenthesized-text',
  'double-underline-text',
  'subscript-text',
  'mirrored-text',
  'zalgo-light',
  'zalgo-heavy',
  'hearts-text',
  'stars-text',
  'sparkles-text',
  'flowers-text',
  'crown-text',
  'wavy-text',
  'aesthetic-text',
  'bold-sans-italic',
  'bold-underline-text',
  'italic-strikethrough',
  'bold-strikethrough',
  'cursive-underline',
  'gothic-bold-underline',
  'double-struck-bold',
  'small-caps-bold',
  'monospace-underline',
  'circled-bold',
  'vaporwave-cursive',
  'bold-hearts',
  'gothic-strikethrough',
  'double-struck-strikethrough',
  'cursive-bold-strikethrough',
  'upside-down-bold',
  'fullwidth-bold',
  'superscript-italic',
  'parenthesized-bold',
  'monospace-bold',
];

// ── Category IDs from src/lib/categories.ts (7 categories) ──────────────────
const CATEGORY_IDS = [
  'script-fonts',
  'decorative-fonts',
  'geometric-fonts',
  'effect-fonts',
  'width-styles',
  'transform-styles',
  'bold-styles',
];

// ── Platform IDs from src/lib/platforms.ts (6 platforms) ────────────────────
const PLATFORM_IDS = [
  'instagram-font-generator',
  'tiktok-font-generator',
  'discord-font-generator',
  'twitter-font-generator',
  'facebook-font-generator',
  'whatsapp-font-generator',
  'youtube-font-generator',
];

// ── Tool IDs (7 tools) ───────────────────────────────────────────────────────
const TOOL_IDS = [
  'unicode-text-cleaner',
  'font-tester',
  'text-repeater',
  'letter-spacing',
  'text-counter',
  'zalgo-decoder',
  'bio-generator',
];

// ── Static pages ─────────────────────────────────────────────────────────────
const STATIC_PAGES = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'monthly' },
  { path: '/terms', priority: '0.5', changefreq: 'monthly' },
];

// ── Build URL entries ─────────────────────────────────────────────────────────
const urls = [];

// Static pages
for (const page of STATIC_PAGES) {
  urls.push({
    loc: `${BASE_URL}${page.path}`,
    lastmod: TODAY,
    changefreq: page.changefreq,
    priority: page.priority,
  });
}

// Tier 1 style pages
for (const id of TIER_1_STYLE_IDS) {
  urls.push({
    loc: `${BASE_URL}/fonts/${id}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.9',
  });
}

// Tier 2 style pages
for (const id of TIER_2_STYLE_IDS) {
  urls.push({
    loc: `${BASE_URL}/fonts/${id}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.8',
  });
}

// Tier 3–4 style pages
for (const id of TIER_3_4_STYLE_IDS) {
  urls.push({
    loc: `${BASE_URL}/fonts/${id}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.5',
  });
}

// Category pages
for (const id of CATEGORY_IDS) {
  urls.push({
    loc: `${BASE_URL}/category/${id}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.7',
  });
}

// Platform pages
for (const id of PLATFORM_IDS) {
  urls.push({
    loc: `${BASE_URL}/platform/${id}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.7',
  });
}

// Tool pages
for (const id of TOOL_IDS) {
  urls.push({
    loc: `${BASE_URL}/tools/${id}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.6',
  });
}

// ── Generate XML ──────────────────────────────────────────────────────────────
function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const xmlEntries = urls
  .map(
    url => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>
`;

// ── Write output ──────────────────────────────────────────────────────────────
const outputPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outputPath, xml, 'utf-8');

console.log(`Sitemap generated: ${outputPath}`);
console.log(`Total URLs written: ${urls.length}`);
