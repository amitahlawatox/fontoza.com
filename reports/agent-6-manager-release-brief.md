# Agent 6 — Manager Release Brief

**Site:** https://www.fontoza.com/  
**Repository:** `amitahlawatox/fontoza.com`  
**Branch:** `codex/seo-adsense-readiness`  
**Date:** 24 July 2026

## Decision

Proceed with one hardening-and-consolidation release. Do **not** enable AdSense or submit the site for review until the account-specific CMP, publisher ID, `ads.txt`, privacy/controller details, and production verification are complete.

The reports agree on the same strategy:

- deploy the repository’s smaller canonical inventory instead of the live 480-URL/448-font footprint;
- do not recreate hundreds of thin combination pages;
- preserve proven search demand through direct redirects, filters, and stronger parent pages;
- fix host/canonical/redirect consistency, dependency advisories, type checks, security headers, inaccurate claims, and navigation accessibility;
- improve only demand-backed pages before adding content or ad inventory.

## Agent handoffs

### Agent 2 — SEO

- Three-month GSC baseline: 51 clicks, 3,790 impressions, 1.35% CTR.
- Coverage: 449 discovered-not-indexed, 2 crawled-not-indexed, 17 redirects.
- Primary demand pages: Crown, Double Underline, Cursive Moon, Small Caps, Cursive, Italic, Bold Italic, and Aesthetic/Vaporwave.
- Ahrefs confirms apex/non-`www` canonicals, sitemap conflicts, redirect links, an orphan Snapchat page, shallow tool links, and a 2.15 MB live homepage.

### Agent 3 — CTO

- Baseline build passes with 97 static pages; sitemap contains 96 URLs.
- `astro check` has one blocking type error and 10 hints.
- Production dependency audit reports 4 high and 1 low advisory.
- Existing cookie UI is not a certified CMP and does not gate anything.
- Strong headers in `public/_headers` should not be assumed active on Vercel; effective policy belongs in `vercel.json`.

### Agent 4 — Content

- The live site’s generated combination inventory is the largest content/AdSense risk.
- The repository already retires roughly 390 combinations and retains only a small demand-backed set.
- Indexable pages must have distinct utility, demand, unique reviewed content, evidence, intentional internal links, and maintenance ownership.
- Replace “400+/447+” and absolute rendering/compatibility claims.

### Agent 5 — Analytics and competitors

- Leading competitors win through narrow task completion, symbols/emoji/text faces, platform guidance, localisation, compatibility help, and repeat-use features.
- Revenue is not publicly defensible; do not invent estimates.
- Top product opportunities: style search/filter/favourites, platform previews, Unicode cleaner, symbol/emoji/kaomoji composer, and bio/username workflows.
- Measure copy success and non-brand landing-page performance before ad yield.

## Agent 1 implementation scope

### Implement now

1. Upgrade dependencies to patched compatible versions and regenerate the lockfile.
2. Make build and `astro check` clean.
3. Centralise the canonical site origin and ensure all public URLs use HTTPS `www` and one slash policy.
4. Fix redirect destinations/chains and sitemap header targeting.
5. Reconcile claims about style count, tracking, cookies, analytics, ads, and Unicode compatibility with current code.
6. Remove the cosmetic cookie banner until a real certified CMP is selected; the site currently loads no AdSense code.
7. Move safe effective security headers into `vercel.json`; stage CSP separately rather than risk breaking future CMP/ads.
8. Fix the desktop dropdown’s keyboard/click/ARIA behavior.
9. Remove unsupported structured-data claims and inactive site-search markup.
10. Add automated checks where practical for build/type health and URL consistency.

### Do not guess or fabricate

- AdSense publisher ID or `ads.txt` line.
- Consent vendor/configuration or TCF strings.
- Business/controller identity, legal basis, retention periods, or legal sign-off.
- Analytics product or consent mode.
- Competitor revenue.
- Ratings/review counts.
- Platform compatibility or performance claims without evidence.

## Release acceptance

- `npm ci`, `astro check`, and production build pass.
- `npm audit --omit=dev` has no high or critical findings.
- Sitemap contains only canonical 200-status pages.
- No canonical or internal link points to an apex-host or redirect URL.
- Legacy redirects reach final canonical destinations in one hop.
- Page copy accurately describes local text processing and current absence of configured advertising/analytics.
- No placeholder is represented as compliant consent.
- Header/menu navigation works with keyboard, Escape, focus, and accurate `aria-expanded`.
- Search/FAQ/schema output describes real visible functionality only.
- Production is recrawled before Search Console validation or AdSense submission.

## Owner actions before AdSense submission

1. Provide the exact AdSense publisher ID after account setup.
2. Select/configure Google Privacy & Messaging or another Google-certified TCF CMP.
3. Confirm the legal owner/controller name, contact address, actual vendors, data retention, and desired analytics product with appropriate legal review.
4. Deploy the branch and allow Agent 3 to verify live headers, network requests, canonical redirects, sitemap, mobile/keyboard flows, and consent behavior.
5. Only then add verified `ads.txt`, enable consent-gated ad requests, and submit for review.

## Implementation outcome

Agent 1 completed the repository-safe scope on `codex/seo-adsense-readiness`:

- upgraded Astro and its React integration and regenerated the lockfile;
- standardised canonical URLs, breadcrumbs, Open Graph URLs, sitemap URLs, redirect destinations, and trailing slashes;
- corrected privacy, advertising, analytics, style-count, and compatibility claims;
- removed the cosmetic cookie banner and kept advertising disabled;
- removed unsupported site-search and aggregate-rating structured data;
- added effective Vercel security headers with CSP in report-only mode;
- repaired the desktop font dropdown for click, keyboard, Escape, focus, and ARIA state;
- added automated build verification for canonical URLs, sitemap membership, and redirect targets;
- removed all Astro diagnostic errors, warnings, and hints.

Final local verification:

- `npm run check`: 0 errors, 0 warnings, 0 hints
- `npm run build`: 97 static pages
- `npm run verify:build`: 97 HTML files and 96 canonical sitemap URLs verified
- `npm audit --omit=dev`: 0 vulnerabilities
- `git diff --check`: passed

The branch has not been committed, pushed, deployed, or submitted to AdSense. The account-specific and legal owner actions above remain mandatory.
