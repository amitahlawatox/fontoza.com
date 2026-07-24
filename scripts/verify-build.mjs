import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const ORIGIN = 'https://www.fontoza.com';
const failures = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}

const files = await walk(DIST);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const canonicalUrls = new Set();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  if (html.includes('https://fontoza.com')) {
    failures.push(`${file}: contains the non-canonical apex origin`);
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const is404 = file.endsWith(`${join('', '404.html')}`);
  if (!canonical && !is404) {
    failures.push(`${file}: missing canonical link`);
    continue;
  }
  if (is404) {
    if (canonical) failures.push(`${file}: 404 page should not declare a canonical URL`);
    continue;
  }
  if (!canonical.startsWith(`${ORIGIN}/`)) {
    failures.push(`${file}: canonical is not on the HTTPS www origin (${canonical})`);
  }
  if (new URL(canonical).pathname !== '/' && !new URL(canonical).pathname.endsWith('/')) {
    failures.push(`${file}: HTML canonical is missing its trailing slash (${canonical})`);
  }
  if (!is404) canonicalUrls.add(canonical);
}

const sitemapFiles = files.filter((file) => /sitemap.*\.xml$/.test(file));
const sitemapUrls = new Set();
for (const file of sitemapFiles) {
  const xml = await readFile(file, 'utf8');
  for (const [, url] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    if (!url.endsWith('.xml')) sitemapUrls.add(url);
  }
}

for (const url of sitemapUrls) {
  if (!canonicalUrls.has(url)) failures.push(`sitemap URL has no matching canonical page: ${url}`);
}

const vercel = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
for (const redirect of vercel.redirects ?? []) {
  if (redirect.destination !== '/' && !redirect.destination.endsWith('/')) {
    failures.push(`redirect target is not canonical: ${redirect.destination}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

const sitemapCount = sitemapUrls.size;
console.log(`Verified ${htmlFiles.length} HTML files and ${sitemapCount} canonical sitemap URLs.`);
