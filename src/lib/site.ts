export const SITE_ORIGIN = 'https://www.fontoza.com';

/**
 * Build a canonical public URL. HTML routes use a trailing slash while file
 * assets retain their extension.
 */
export function siteUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const hasFileExtension = /\/[^/]+\.[a-z0-9]+$/i.test(normalized);
  const canonicalPath =
    normalized === '/' || hasFileExtension || normalized.endsWith('/')
      ? normalized
      : `${normalized}/`;

  return `${SITE_ORIGIN}${canonicalPath}`;
}
