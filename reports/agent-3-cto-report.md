# Agent 3 — CTO Technical, SEO, Security and AdSense Readiness Review

**Site:** https://www.fontoza.com/  
**Branch reviewed:** `codex/seo-adsense-readiness`  
**Review date:** 24 July 2026  
**Audience:** Agent 6 (Manager), Agent 1 (Developer), Agent 2 (SEO)

## Executive decision

**Recommendation: do not request AdSense review or enable ad code yet.**

The branch has a sound static-Astro base, a generated sitemap, crawlable content, clear navigation, legal pages, local text processing, and labelled ad placeholders. It is not release-ready because:

1. Several important pages still declare the non-`www` host as canonical while the production host redirects to `www`.
2. The consent banner is only a local UI acknowledgement. It is not a Google-certified TCF CMP, does not transmit consent signals, does not block ad requests, and offers no usable preference/withdrawal flow.
3. The installed Astro dependency tree has disclosed vulnerabilities with fixes available.
4. The checked-in Vercel configuration omits the CSP and other policies present in `public/_headers`; Vercel custom response headers belong in `vercel.json`.
5. Type checking is not clean, redirect configuration is oversized and weakly governed, and key pages ship unnecessarily large HTML/client payloads.

These are fixable without changing the product direction. The highest-value action is a short P0 release-hardening pass, followed by a controlled SEO/content rollout consistent with Agent 4 and Agent 5’s reports.

## Scope and evidence

Reviewed:

- Astro configuration, layouts, page templates, SEO/schema helpers, React islands, styles, public assets, `robots.txt`, `_headers`, `vercel.json`, `package.json`, and lockfile.
- `reports/agent-4-content-taxonomy-report.md` and `reports/agent-5-competitor-report.md`.
- The supplied Ahrefs exports, especially canonical/redirect/internal-link findings.
- Generated `dist` output from the baseline build: 97 HTML pages; 96 sitemap URLs (correctly excluding the 404 page).

Checks run:

- Baseline `npm run build`: the team’s clean baseline completed with 97 static pages. One concurrent local rerun in the OneDrive workspace failed while Astro attempted to import a missing transient `.prerender` file; treat this as a local-workspace/parallel-build warning and require a clean CI build before merge.
- `npx astro check`: **failed with 1 error and 10 hints**. The blocking error is the unresolved side-effect type declaration for `@fontsource-variable/inter` in `src/layouts/Layout.astro:3`.
- `npm audit --omit=dev`: **5 findings: 4 high, 1 low**, all fix-available.
- Redirect inventory: 386 redirect objects, of which 384 are generated legacy font-combination rules using an optional trailing slash pattern.
- Static output sizing from the reviewed build: homepage about 354 KB HTML, `/fonts/` about 323 KB HTML, the largest platform pages about 140–194 KB HTML, and the shared client bundle about 186 KB uncompressed.

## Release gates: P0

### P0.1 — Make `www` the single source of truth

**Evidence**

- `astro.config.mjs:8`, `src/lib/seo/meta.ts:5`, `src/lib/seo/schema.ts:1`, and `public/robots.txt:3` correctly use `https://www.fontoza.com`.
- Hardcoded non-`www` URLs remain in:
  - `src/pages/about.astro`
  - `src/pages/accessibility.astro`
  - `src/pages/privacy.astro`
  - `src/pages/terms.astro`
  - `src/pages/404.astro`
  - `src/pages/fonts/index.astro`
  - `src/pages/tools/index.astro`
  - breadcrumb/schema values in `src/pages/index.astro`, `src/pages/fonts/[style].astro`, `src/pages/category/[category].astro`, and `src/pages/platform/[platform].astro`
- The supplied crawl confirms the defect: non-canonical and “canonical points to redirect” exports show the `www` page returning 200 while its canonical targets `https://fontoza.com/...`, which then 308-redirects to `www`.
- Some internal links omit the canonical trailing slash, for example `src/components/tool/StyleGrid.tsx:67`, creating avoidable duplicate-path or redirect requests depending on platform behavior.

**Required implementation**

- Create one exported site-origin constant and one URL builder; remove all manually typed production origins from pages and schema.
- Emit `https://www.fontoza.com/.../` consistently in canonical, Open Graph, JSON-LD, breadcrumb URLs, sitemap, and internal links.
- Confirm the Vercel production-domain setting permanently redirects HTTP and apex-host traffic directly to the final HTTPS `www` URL in one hop.
- Decide and configure one trailing-slash policy in `astro.config.mjs` and `vercel.json`; match all generated routes, internal links, redirects, canonicals, and sitemap URLs to it.
- The 404 page should be `noindex, follow` rather than `noindex, nofollow`, and its canonical should not imply that `/404/` is a normal indexable resource.

**Acceptance**

- A crawl finds zero canonical targets that redirect, zero sitemap/canonical host mismatches, and zero internal links to redirects.
- `http://fontoza.com/path`, `https://fontoza.com/path`, and the wrong slash variant reach the canonical URL in at most one redirect.

Google treats redirects and `rel="canonical"` as strong canonical signals and recommends linking internally to the canonical URL: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

### P0.2 — Replace the cosmetic banner with a real consent system before loading ads

**Evidence**

- `src/components/layout/CookieBanner.astro:41-61` only writes `accepted` or `dismissed` to `localStorage`.
- Accept and dismiss have no behavioral effect. There is no purpose/vendor disclosure, TCF string, Google consent signal, region handling, granular preferences, or “change choices” control.
- `src/layouts/Layout.astro:94` loads the banner globally, but no code gates advertising or analytics.
- `src/components/ads/AdSlot.astro` renders labelled empty containers in production, but contains no publisher ID, AdSense script, `<ins>` unit, or consent-aware loader.
- `public/ads.txt` is absent.
- The site is UK-facing and the stated production plan includes AdSense. Google requires a Google-certified CMP integrated with IAB TCF for serving personalised ads in the EEA, UK, and Switzerland: https://support.google.com/adsense/answer/13554020

**Required implementation**

- Configure Google Privacy & Messaging CMP or another Google-certified TCF CMP. Do not represent the existing banner as GDPR/AdSense consent.
- Do not request ads before the CMP has established the appropriate signal. Test accept, reject, granular choice, revisit/withdraw, and no-JavaScript/failure behavior.
- Keep necessary local preferences (theme and draft input) separate from advertising consent.
- Add a permanent “Privacy choices”/“Cookie settings” link in the footer.
- Add the exact AdSense publisher disclosure and `ads.txt` record only after the publisher ID is known and verified in the account.
- Keep ad units visually distinct and separated from text inputs, generated results, copy controls, and navigation. Reassess all three insertions on `src/pages/fonts/[style].astro`; dense tool-result placement raises accidental-click risk.

**Acceptance**

- No request to Google advertising endpoints occurs before the applicable CMP state permits it.
- TCF/consent diagnostics pass for UK/EEA/Swiss traffic; users can reject as easily as accept and later change their choice.
- Privacy policy, actual network behavior, CMP configuration, and AdSense account settings agree.

Google requires privacy disclosure of cookies/identifiers and third-party collection: https://support.google.com/adsense/answer/10502938  
Google prohibits ads that can be confused with navigation or controls and warns about accidental-click placements: https://support.google.com/adsense/answer/1346295

### P0.3 — Make privacy and trust claims factually match deployed behavior

**Evidence**

- Homepage `src/pages/index.astro:303` says “Zero tracking. No cookies, no personal data, no ads that follow you.”
- `src/pages/about.astro:56-62` simultaneously says no tracking cookies and says Vercel Analytics and AdSense may be used.
- `src/pages/privacy.astro:77,99-104` says Vercel Analytics is in use, but there is no `@vercel/analytics` dependency or integration in the repository.
- The cookie banner says analytics are used and ads “may” use cookies. This ambiguity is inappropriate for a consent decision.
- The privacy policy contains precise operational/legal assertions (including retention and international-transfer language) that must be verified against the real Vercel plan, AdSense/CMP configuration, and legal owner details.

**Required implementation**

- Replace absolute marketing claims with an accurate, testable description of current processing.
- Either implement the disclosed analytics product with a documented lawful configuration or remove all claims that it is active.
- Describe local storage keys, server/CDN logs, analytics, ads, recipients, purposes, retention, transfers, contact/controller identity, and withdrawal mechanism based on the real deployment.
- Obtain legal review for UK GDPR/ePrivacy wording; this technical review is not legal advice.

### P0.4 — Upgrade and verify the dependency tree

**Current resolved versions**

- Astro 6.4.5
- esbuild 0.27.7
- sharp 0.34.5
- js-yaml 4.2.0
- svgo 4.0.1

`npm audit --omit=dev` reports Astro SSRF/XSS advisories and vulnerable build transitive packages. A dry-run of plain `npm audit fix` proposes Astro 6.4.8, js-yaml 4.3.0, and svgo 4.0.2, but Astro 6.4.8 does **not** clear every current Astro advisory. On the review date, npm reports Astro 7.1.3, `@astrojs/react` 6.0.1, sharp 0.35.3, esbuild 0.28.1, js-yaml 5.2.2, and svgo 4.0.2 as current.

**Exploitability assessment**

- The site is statically generated, so Astro’s server-side SSRF path is not exposed as a long-running production server. Current production exploitability is low.
- No view-transition directive or untrusted spread-attribute source was found; the reported Astro XSS paths are low-likelihood in the current templates.
- esbuild, sharp, js-yaml, and svgo are principally build/dev-time risks here; there is no endpoint accepting attacker-controlled images, YAML, or SVG.
- Risk is still unacceptable as technical debt before launch: developer machines and CI process repository content and dependencies, and future CMS/user-generated content would change the threat model.

**Required implementation**

- Prefer an explicit tested upgrade branch: `astro` to at least 7.1.3 and `@astrojs/react` to the compatible 6.0.1 line, keeping `@astrojs/sitemap` current.
- Regenerate `package-lock.json`; do not force transitive overrides blindly.
- Run migration notes, clean install, `astro check`, production build, route/sitemap diff, page smoke tests, and `npm audit --omit=dev`.
- If the major upgrade cannot ship immediately, update at least to the latest patched Astro 6 release and patched transitive packages as a temporary reduction, document residual advisories, and block untrusted content from all build inputs.

**Acceptance**

- Production audit has no high/critical findings, the lockfile is committed, and CI reproduces the build using a supported pinned Node LTS version.
- GitHub Dependabot/security updates and a scheduled audit job are enabled.

Advisory references:  
https://github.com/advisories/GHSA-2pvr-wf23-7pc7  
https://github.com/advisories/GHSA-jrpj-wcv7-9fh9  
https://github.com/advisories/GHSA-4g3v-8h47-v7g6  
https://github.com/advisories/GHSA-f48w-9m4c-m7f5  
https://github.com/advisories/GHSA-7pw4-f3q4-r2p2  
https://github.com/advisories/GHSA-g7r4-m6w7-qqqr  
https://github.com/advisories/GHSA-52cp-r559-cp3m  
https://github.com/advisories/GHSA-f88m-g3jw-g9cj  
https://github.com/advisories/GHSA-2p49-hgcm-8545

### P0.5 — Put the real security policy in `vercel.json`

**Evidence**

- `public/_headers` contains CSP, Permissions Policy, COOP, CORP, and HSTS directives.
- `vercel.json:2-22` contains only `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and obsolete `X-XSS-Protection`.
- Vercel documents custom response headers through the `headers` property in `vercel.json`: https://vercel.com/docs/project-configuration/vercel-json
- Therefore the strong policy in `public/_headers` should be treated as inactive on Vercel unless an external deployment layer explicitly consumes that file.
- The proposed CSP includes broad `'unsafe-inline'`, yet the layout contains several inline scripts and inline event handlers, so tightening it needs staged testing. AdSense and the selected CMP will add further script, frame, image, and connection origins.

**Required implementation**

- Move the effective policies to `vercel.json`; add the official schema URL for validation.
- Remove `X-XSS-Protection`; retain `nosniff`, clickjacking protection, strict referrer policy, and Vercel’s HSTS behavior.
- Start CSP in report-only mode, inventory Astro, AdSense, and CMP sources, then enforce. Prefer nonces/hashes and external event listeners over permanent `'unsafe-inline'`.
- Validate COOP/CORP against Google ad/CMP frames before enabling them; an over-strict cross-origin policy can silently break ads.
- Add an automated post-deploy header test.

## P1 — High-priority quality and scale work

### P1.1 — Fix type/build health and establish CI

- Fix the `@fontsource-variable/inter` side-effect import diagnostic in `src/layouts/Layout.astro:3` through a supported import/type configuration rather than suppressing all side-effect import checks.
- Clear the remaining 10 Astro hints, especially the implicit inline script in `src/components/seo/StructuredData.astro:6`, deprecated `document.execCommand` fallback in `src/components/tool/CopyButton.tsx:24`, and unused declarations.
- Add CI gates: `npm ci`, `astro check`, build, audit threshold, sitemap validation, broken-link/canonical crawl, and a small browser smoke suite.
- Build outside a sync-on-demand folder in CI. Prevent simultaneous jobs from sharing `dist`.

### P1.2 — Reduce HTML and hydration cost

- The homepage and font index embed the full style catalogue and hydrate it with `client:load`. Current uncompressed artifacts are large for a simple text utility.
- Render a useful curated first set, then progressively expose/filter the rest. Keep indexable navigation separate from hundreds of hydrated cards.
- Avoid serializing the same Unicode maps into multiple pages/islands. Split tool bundles and hydrate below-fold experiences with `client:visible` or `client:idle` where interaction timing allows.
- Remove nonessential global cursor, sparkle, ripple, and tilt listeners from low-end/touch experiences; reduced-motion handling already exists and should be retained.
- Add Vercel Speed Insights or another privacy-consistent real-user measurement only after its data behavior is documented and consent requirements are settled.
- Performance acceptance should use field Core Web Vitals plus Lighthouse budgets, not only file size.

### P1.3 — Repair keyboard navigation and verify accessibility

- `src/components/layout/Header.astro:95-146` opens the desktop menu only with `group-hover`; `aria-expanded` stays false. Keyboard users cannot reliably reveal the menu.
- Implement click/keyboard/focus behavior, update expanded state, support Escape and focus return, and avoid unnecessary ARIA menu semantics for ordinary site navigation.
- Test mobile `<details>` focus behavior, consent focus/order, copy announcements, 200% zoom/reflow, high contrast, and both color themes with keyboard plus axe.
- Maintain the skip link and reduced-motion CSS, which are good foundations.
- Continue warning users that styled Unicode may be announced poorly and should not replace essential accessible text.

### P1.4 — Govern redirects rather than expanding `vercel.json`

- `vercel.json` contains 386 redirects; 384 map decorative combination URLs to a smaller set of base styles.
- This matches Agent 4’s recommendation not to index hundreds of aliases, but the rules are difficult to review and easy to drift from the registry.
- Generate redirects from an explicit migration map with tests for: valid destination, no loop, no chain, canonical slash, unique source, and expected 308 status.
- Consider Vercel `bulkRedirectsPath` if the plan supports it; Vercel documents this mechanism for large static migrations: https://vercel.com/docs/project-configuration/vercel-json
- Cache headers target `/sitemap.xml`, but the build emits `/sitemap-index.xml` and `/sitemap-0.xml`; correct the header target.

### P1.5 — Keep the indexable footprint deliberately small and useful

- The sitemap is technically correct at 96 URLs, but many style/platform pages share templates and claims. Agent 4’s content audit finds scale exceeds distinct value; Agent 5 similarly warns against formulaic doorway pages.
- Do not reintroduce the 384 redirected combinations as indexable pages.
- Apply Agent 4’s indexation gate: distinct intent, tested output, unique guidance/examples/limitations, internal links, and ongoing ownership.
- Add `noindex, follow` or omit from generation/sitemap until a page meets the bar. A sitemap is a canonical hint, not a quality waiver.
- Robots are currently permissive and the sitemap declaration is valid. Do not use `robots.txt` to remove low-value URLs; Google says `robots.txt` controls crawling, not reliable deindexing: https://developers.google.com/search/docs/crawling-indexing/robots/intro

## Architecture and schema notes

### Strengths

- Static output materially limits server-side attack surface.
- User-entered text is processed and persisted locally; no application API or database is present.
- Pages have one main landmark/H1 in the inspected templates, a skip link, semantic headings, labels, reduced-motion support, and responsive controls.
- Canonicals and schemas are centralized for generated style/category/platform/tool pages.
- `robots.txt` points to the generated sitemap index and does not block AdsBot/Googlebot.
- Ad placeholders use an “Advertisement” label and reserve space, reducing layout shift.
- No secrets or tokens were found in source files reviewed.

### Corrections

- Remove or keep unused `softwareAppSchema()` private until needed. It contains an unsubstantiated aggregate rating (`4.8`, `1247`) in `src/lib/seo/schema.ts:112-118`. Publishing fabricated review markup would be a serious trust/spam risk.
- `webSiteSchema()` advertises a `SearchAction` URL (`/?q=`) even though the homepage does not implement a site-search result route. Remove unsupported structured behavior.
- Update stale “50+” schema copy in `src/lib/seo/schema.ts:77` to match the actual, defensible product claim.
- Validate all emitted JSON-LD with Google Rich Results Test/Schema validator, but do not expect FAQ rich results for a general commercial utility site.
- Open Graph defaults in `src/layouts/Layout.astro` are relative; ensure every social image is emitted as an absolute canonical URL.

## AdSense approval checklist for Agent 6

Before submission:

- [ ] P0 canonical/redirect fixes deployed and recrawled.
- [ ] Google-certified CMP deployed, tested by region, and linked from every page.
- [ ] Privacy, About, Terms, marketing claims, network traffic, and actual vendors agree.
- [ ] No ad request before applicable consent; no ad is adjacent to copy/input/navigation controls.
- [ ] Real publisher ID and `ads.txt` verified after account setup.
- [ ] No empty/placeholder ad UI shown as if advertising is active.
- [ ] High/critical dependency audit clear; `astro check` and clean CI build pass.
- [ ] Effective Vercel response headers verified on production.
- [ ] Thin/alias pages excluded; priority pages contain original, useful, tested content.
- [ ] Contact email, controller/business identity, ownership, and policy links work.
- [ ] Search Console property, sitemap, manual actions, security issues, Core Web Vitals, and coverage reviewed after deployment.
- [ ] A human tests mobile/desktop navigation, generator/copy flows, consent, keyboard access, and 404 behavior.

Google’s eligibility guidance calls for unique, high-quality, policy-compliant content: https://support.google.com/adsense/answer/9724  
Google’s program policies also require navigable, non-deceptive pages and prohibit ads on non-content pages or pages made mainly to show ads: https://support.google.com/adsense/answer/48182

## Recommended ownership and sequence

1. **Agent 1 + Agent 3:** dependency upgrade, URL/canonical utility, Vercel headers, CI, type-check fixes.
2. **Agent 2 + Agent 1:** redirect/internal-link migration, sitemap validation, production crawl and Search Console resubmission.
3. **Agent 6 + site owner + legal reviewer:** select/configure CMP and approve exact privacy/controller text.
4. **Agent 4 + Agent 2:** apply the content/indexation gate to the 96-page footprint; improve priority pages before expanding.
5. **Agent 5:** establish consent-compatible field analytics and weekly landing-cluster reporting.
6. **Agent 3:** final production verification, then approve AdSense submission.

## Final risk rating

| Area | Current rating | After P0 |
|---|---|---|
| Technical SEO | High | Low |
| Privacy/consent | Critical | Medium pending legal/account validation |
| Dependency/build security | High | Low |
| Runtime application security | Low–medium | Low |
| Performance | Medium | Medium pending field data |
| Accessibility | Medium | Low–medium after keyboard/axe testing |
| AdSense approval readiness | Not ready | Ready for final human review |

The codebase is recoverable and directionally strong. The release should be treated as a **hardening and consolidation project**, not a page-volume project.
