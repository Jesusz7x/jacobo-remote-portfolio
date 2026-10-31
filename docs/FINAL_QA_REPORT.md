# Final QA report

## Automated checks

- Python unittest discovery: 12/12 passed.
- Business Sales Dashboard Node tests: 6/6 passed.
- JavaScript syntax: 18 files passed `node --check`.
- `git diff --check`: passed.
- HTML parsing, sitemap parsing, route/artwork/documentation coverage, CV file checks and no-placeholder action checks: passed.
- Spanish and English CV PDFs: one-page A4; editable HTML and Markdown sources included.
- GitHub Actions run 41227060141 on commit `2908584`: validation and production deployment succeeded.

## Preview browser testing

Playwright Firefox was used against the public Vercel Preview:

- Portfolio: initial load, navigation, language selector, theme, project category filters, mobile menu and Escape handling, clipboard confirmation, reduced-motion setting, case study links and all 11 case study routes passed.
- Responsive widths: 390×844, 768×1024, 1366×768 and 1920×1080; no horizontal overflow after correcting the HealthOps mobile toolbar.
- Case studies: all 11 open, each has eight technical sections, a live demo link and a real embedded browser screenshot. Project artwork/title click through to the case study.
- Demo workflows passed: HealthOps tabs/filters/reset; StockPilot and Inventory create, receive, issue, overdraw rejection, search and reset; Python Office CSV clean/reconcile/tracker; Business Dashboard filters/language/CSV export; CSV Cleaner deduplication/export; Automation Toolkit safe file plan; Task API validation/create; Job Tracker create/filter/export; QA Lab six executable checks; RemoteCareerLab module navigation.
- All 11 demos were checked at 390px with no horizontal overflow.
- Final Preview browser run reported zero console/page errors.

## Production verification

- Playwright Firefox opened the final production home page: title correct, 11 catalog cards present, no desktop overflow; at 390px, `scrollWidth` equaled the 390px viewport.
- The live StockPilot production demo loaded with its interactive controls.
- HTTPS returned 200 for all 11 project case pages and all 11 demo routes, the home page, CV PDF, robots.txt and sitemap.xml.

## Captures

`docs/captures/v3/` contains desktop and mobile home captures, 11 case study captures, desktop and mobile captures of each demo, and an architecture diagram. Demo and case captures are from the public Vercel Preview; production was separately checked after promotion.

## Scope and limitations

- Browser demos use fictional client-side state and clearly identify adaptations when a source project depends on a local backend or filesystem. They do not expose source project databases or claim to be a deployment of those backends.
- HealthOps is a read-only portfolio demo with synthetic data, not certified clinical software.
- No Supabase project was created because the published site has no shared persistence/authentication/backend requirement.
- The inherited GitHub Pages workflow was preserved. Vercel is the primary production host.
