import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const ORIGIN = 'https://www.fontoza.com';
const failures = [];
const requiredRedirects = new Map([
  ['/fonts/bold/', '/fonts/bold-text/'],
  ['/fonts/cursive/', '/fonts/cursive-font/'],
  ['/fonts/bold-sans-italic/', '/fonts/sans-bold-italic/'],
  ['/fonts/bold-underline/', '/fonts/bold-underline-text/'],
  ['/fonts/gothic-underline/', '/fonts/gothic-bold-underline/'],
]);

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
const redirectSources = new Set();
const redirectsBySource = new Map();

for (const redirect of vercel.redirects ?? []) {
  const { source, destination, permanent } = redirect;

  if (typeof source !== 'string' || !source.startsWith('/') || source.startsWith('//') || /[?#]/.test(source)) {
    failures.push(`redirect source is not a safe local path: ${source}`);
    continue;
  }
  if (
    typeof destination !== 'string' ||
    !destination.startsWith('/') ||
    destination.startsWith('//') ||
    /[?#]/.test(destination)
  ) {
    failures.push(`redirect target is not a safe local path: ${destination}`);
    continue;
  }
  if (redirectSources.has(source)) failures.push(`duplicate redirect source: ${source}`);
  redirectSources.add(source);
  redirectsBySource.set(source, redirect);

  if (permanent !== true) failures.push(`redirect must be permanent: ${source}`);
  if (source === destination) failures.push(`redirect source and target are identical: ${source}`);
  if (redirect.destination !== '/' && !redirect.destination.endsWith('/')) {
    failures.push(`redirect target is not canonical: ${redirect.destination}`);
  }
  if (canonicalUrls.has(`${ORIGIN}${source}`)) {
    failures.push(`redirect source conflicts with a canonical page: ${source}`);
  }
  if (!canonicalUrls.has(`${ORIGIN}${destination}`)) {
    failures.push(`redirect target has no matching canonical page: ${destination}`);
  }
}

for (const [source, destination] of requiredRedirects) {
  const redirect = redirectsBySource.get(source);
  if (!redirect) failures.push(`required redirect is missing: ${source} -> ${destination}`);
  else if (redirect.destination !== destination) {
    failures.push(`required redirect has the wrong target: ${source} -> ${redirect.destination} (expected ${destination})`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

const sitemapCount = sitemapUrls.size;
console.log(`Verified ${htmlFiles.length} HTML files and ${sitemapCount} canonical sitemap URLs.`);
