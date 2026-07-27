# Agent 2 — SEO Manager Report

**Site:** https://www.fontoza.com/  
**Data date:** 24 July 2026  
**Primary inputs:** Google Search Console exports and Ahrefs Site Audit exports supplied by the owner  
**Audience:** Agents 3, 4, 6, and 1

## Executive decision

Fontoza should not add more indexable pages until its canonical host, redirect targets, sitemap, internal links, and thin legacy inventory agree. The current repository is already moving in the correct direction by reducing hundreds of generated combinations to a curated set and redirecting the rest.

The immediate ranking opportunity is to:

1. deploy the repository’s consolidated 96-URL sitemap instead of the live 480-URL footprint;
2. make `https://www.fontoza.com/.../` the only canonical/internal/sitemap form;
3. preserve demand from retired combination URLs through direct one-hop redirects and useful sections on the true parent pages;
4. improve a small group of pages that already have impressions, rather than creating new programmatic variants; and
5. keep ads off thin, automatically generated, redirected, error, and non-indexable screens.

## Data scope and limitations

The three Search Console performance ZIPs are different time windows, not duplicates:

| Export | Window | Clicks | Impressions | CTR |
|---|---:|---:|---:|---:|
| `Performance-on-Search-2026-07-24.zip` | Last 24 hours | 0 | 103 | 0.00% |
| `Performance-on-Search-2026-07-24 (1).zip` | Last 7 days | 15 | 934 | 1.61% |
| `Performance-on-Search-2026-07-24 (2).zip` | Last 3 months | 51 | 3,790 | 1.35% |

The three-month export is the primary demand source because the daily and weekly samples are too small for page-retention decisions. Search Console position is an average, not a fixed rank, and the query export is privacy-thresholded; totals will not always reconcile exactly to listed rows.

## Search Console coverage

The 24 July coverage export reports:

- **449 discovered, currently not indexed**
- **2 crawled, currently not indexed**
- **17 pages with redirect**

The discovered-not-indexed drilldown is dominated by the old apex-host and generated style footprint. The live sitemap still exposes hundreds of URLs, while Google is declining to index most of them. This is a quality and canonical-consistency problem, not a request-indexing problem.

Do not submit the 449 URLs individually. Deploy the consolidated sitemap, keep only canonical 200-status pages in it, and allow Google to recrawl the direct redirects.

## Ahrefs technical findings

| Issue | Evidence | Required action | Owner |
|---|---:|---|---|
| Canonicals point to redirects | 8 rows | Replace apex canonicals with final `www` HTTPS URLs and one slash convention | Agents 1 and 3 |
| Non-canonical pages in sitemap | 6 rows: About, Accessibility, Fonts, Privacy, Terms, Tools | Sitemap and page canonical must use the same final URL | Agents 1 and 2 |
| Redirecting URLs crawled | 10 rows; `http://fontoza.com/` takes two hops | Configure direct HTTP/apex → HTTPS/www redirects | Agent 3 / Vercel |
| Pages with links to redirects | Privacy page links to apex homepage | Update internal links to final canonical URLs | Agent 1 |
| Canonical URL has no incoming internal links | 442 rows in the old live footprint | Do not manufacture links to all 442; retire thin combinations and create intentional links only for approved pages | Agents 2 and 4 |
| Orphan page | Snapchat platform page | Add a relevant contextual link if retained by demand/content gate; otherwise noindex or retire | Agents 2 and 4 |
| Only one dofollow inlink | 7 tool pages plus one privacy variant | Add workflow-based contextual links to valuable tools; do not inflate generic utility pages | Agent 4 |
| Homepage exceeds Googlebot page-size warning | 2,150,328 bytes uncompressed in Ahrefs crawl | Reduce initial rendered style inventory and hydration payload | Agents 1 and 3 |

## Three-month demand evidence

### Strongest near-term query opportunities

| Query | Clicks | Impressions | CTR | Avg. position | Decision |
|---|---:|---:|---:|---:|---|
| crown symbol text font | 4 | 66 | 6.06% | 6.91 | Preserve a strong crown intent on the canonical Crown page |
| gothic underline | 1 | 29 | 3.45% | 6.21 | Retain/strengthen the demand-backed Gothic underline destination or consolidate carefully |
| cursive underline | 0 | 21 | 0% | 9.05 | Improve snippet/content before deciding to retire |
| double underline | 1 | 19 | 5.26% | 19.26 | Strengthen the distinct Double Underline page |
| rainbow in cursive | 0 | 12 | 0% | 7.17 | Preserve the term within a useful Cursive/decorations experience; avoid a thin standalone page unless value is added |
| bold small caps font | 1 | 9 | 11.11% | 15.00 | Redirect alias to Small Caps and cover the alias naturally on that page |
| moon in cursive | 1 | 9 | 11.11% | 9.67 | Keep Cursive Moon; it has a recurring demand signal |

### Highest-impression page opportunities

| Page | Clicks | Impressions | CTR | Avg. position | Action |
|---|---:|---:|---:|---:|---|
| `/fonts/small-caps/` | 0 | 462 | 0% | 66.77 | Rewrite title/intro around “small caps generator” and “small capital letters”; add coverage limitations |
| `/fonts/italic-font` | 0 | 351 | 0% | 73.93 | Canonical slash fix; improve intent match and page-specific value |
| `/fonts/cursive-font/` | 1 | 272 | 0.37% | 75.28 | Core priority page; test a stronger snippet and unique examples |
| `/fonts/bold-italic-font/` | 0 | 259 | 0% | 64.39 | Consolidate duplicate slash variants and strengthen one canonical |
| `/fonts/crown-text` | 7 | 197 | 3.55% | 17.15 | Highest proven page; preserve URL equity and improve content/links |
| `/tools/lorem-ipsum-generator/` | 0 | 149 | 0% | 71.46 | Peripheral topic; retain only if materially improved and useful |
| `/fonts/aesthetic-text` | 0 | 142 | 0% | 68.44 | Clarify unique intent versus Vaporwave/Fullwidth |
| `/fonts/vaporwave-text/` | 0 | 71 | 0% | 49.96 | Decide canonical relationship with Fullwidth; do not duplicate |
| `/fonts/double-underline-text` | 2 | 63 | 3.17% | 16.67 | High-priority distinct effect page |
| `/fonts/cursive-moon` | 2 | 45 | 4.44% | 9.98 | Keep and improve; demand-backed combination |

Several retired combination URLs received a handful of clicks. That does not justify keeping hundreds of pages. Preserve their relevant terms through direct redirects, parent-page copy, filters, and anchor links. Retain a standalone combination only when it has recurring demand **and** enough distinct utility and manually reviewed content.

## Device and country signals

- Mobile: **34 clicks / 1,016 impressions / 3.35% CTR / position 10.5**
- Desktop: **14 clicks / 2,745 impressions / 0.51% CTR / position 57.28**
- Tablet: **3 clicks / 29 impressions**

The site is substantially more competitive on mobile despite more desktop impressions. Mobile usability and copy completion should remain the product priority, while desktop snippets/content need improvement.

Leading countries by clicks include Indonesia (10), United States (8), India (5), Philippines (3), Pakistan (3), and United Kingdom (2). Do not create country or language pages from this small sample. First improve the English product, then use a longer data window before localization.

## URL action policy

1. **Keep/index:** materially distinct tools or transformations with demand, useful original content, limitations, internal links, and a maintained owner.
2. **Redirect:** aliases or combinations that produce substantially the same outcome as a stronger canonical page.
3. **Noindex/exclude from sitemap:** usable filters or experiments that do not yet meet the content/demand bar.
4. **Remove/410:** obsolete pages with no close replacement or user value.

All redirect destinations must be final HTTPS `www` URLs with the chosen trailing slash. Do not create redirect chains.

## Ranking and reach plan

### P0 — release and recrawl

- Deploy the current generated-page consolidation.
- Correct all apex/non-`www` canonicals and internal links.
- Generate redirect rules from a reviewed migration map and test every destination.
- Submit only `https://www.fontoza.com/sitemap-index.xml`.
- After deployment, request validation for the relevant Search Console coverage issue; do not repeatedly submit individual URLs.
- Review Manual Actions and Security Issues before AdSense submission.

### P1 — improve proven pages

Start with Crown, Double Underline, Cursive Moon, Small Caps, Cursive, Italic, Bold Italic, Gothic/underline, and Aesthetic/Vaporwave. Each page needs:

- a distinct transformation or task;
- the working generator above the fold;
- unique examples and character-coverage limitations;
- qualified compatibility and accessibility guidance;
- concise, page-specific FAQs only where useful;
- contextual links to the parent hub, related canonical styles, and the next relevant tool.

### P2 — broaden useful workflows

From competitor and query evidence, test useful product features before new SEO pages:

- search/filter/favourites for styles;
- compatibility-aware platform previews;
- Unicode cleaner/unstyle;
- symbols/emoji/kaomoji composition;
- bio and username workflows;
- character-count and platform constraints with sourced “last verified” dates.

## AdSense and Search policy decision

Do not submit for AdSense yet. Google’s current eligibility guidance requires original, high-quality content, and Publisher Policies prohibit Google-served ads on low-value or automatically generated screens without manual review. Google Search’s spam policies also warn against substantially similar doorway pages and scaled pages created primarily to rank.

Before review:

- thin/alias inventory must be removed or redirected;
- privacy, tracking, analytics, and ad claims must match actual behavior;
- a Google-certified TCF CMP must be configured for relevant UK/EEA/Swiss ad serving;
- ad placements must be separated from generator controls and copy buttons;
- no ads should appear on 404, redirect, noindex, navigation-only, or underdeveloped pages;
- ownership/contact and editorial/testing practices must be clear.

## Handoff to Agent 6

Approve a hardening release, not a content-volume release. Agent 1 should implement canonical, redirect, claims, dependency, header, type-check, and accessibility fixes. Agent 4 should then improve the small set of pages supported by this report. Agent 5 should measure Search Console clusters, successful copy interactions, engagement, and return use after consent-compatible analytics is configured.

## Official guidance

- Google Search: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Spam policies: https://developers.google.com/search/docs/essentials/spam-policies
- AdSense eligibility: https://support.google.com/adsense/answer/9724
- Google-certified CMP requirement: https://support.google.com/adsense/answer/13554116
- Publisher-content policy: https://support.google.com/publisherpolicies/answer/11112688

