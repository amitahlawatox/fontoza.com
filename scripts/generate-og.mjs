/**
 * Generates a simple SVG-based OG image and favicon for Fontoza
 * Run: node scripts/generate-og.mjs
 */
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');

// OG Image: 1200x630 SVG
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0f"/>
      <stop offset="100%" style="stop-color:#111118"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#a855f7"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- Decorative circles -->
  <circle cx="1050" cy="120" r="200" fill="#6366f1" opacity="0.08"/>
  <circle cx="150" cy="520" r="150" fill="#a855f7" opacity="0.06"/>
  <!-- Logo text -->
  <text x="600" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="96" font-weight="800" text-anchor="middle" fill="url(#accent)">Fontoza</text>
  <!-- Tagline -->
  <text x="600" y="320" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="400" text-anchor="middle" fill="#94a3b8">Fancy Text Generator — 50+ Unicode Font Styles</text>
  <!-- Sample fonts preview -->
  <text x="600" y="430" font-family="serif" font-size="42" text-anchor="middle" fill="#6366f1" opacity="0.9">𝒞𝑜𝓅𝓎 &amp; 𝒫𝒶𝓈𝓉𝑒 𝒻𝒶𝓃𝒸𝓎 𝓉𝑒𝓍𝓉</text>
  <!-- URL -->
  <text x="600" y="560" font-family="system-ui, -apple-system, sans-serif" font-size="24" text-anchor="middle" fill="#475569">fontoza.com</text>
</svg>`;

writeFileSync(join(publicDir, 'og-image.svg'), ogSvg);
console.log('✓ og-image.svg generated');

// Favicon SVG
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#a855f7"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="url(#g)"/>
  <text x="16" y="23" font-family="serif" font-size="20" font-weight="bold" text-anchor="middle" fill="white">𝓕</text>
</svg>`;

writeFileSync(join(publicDir, 'favicon.svg'), faviconSvg);
console.log('✓ favicon.svg generated');

// Update og-image reference — also save as .png placeholder note
writeFileSync(join(publicDir, 'og-image.png'), Buffer.from(
  // Minimal 1x1 transparent PNG as placeholder — real OG image is og-image.svg
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
));
console.log('✓ og-image.png placeholder written (use og-image.svg for real OG)');
