# Final QA report

## Automated checks

- Python unittest discovery: 12/12 passed.
- Business Sales Dashboard Node tests: 6/6 passed.
- JavaScript syntax: 18 files passed `node --check`.
- `git diff --check`: passed.
- HTML parsing, sitemap parsing, route/artwork/documentation coverage, CV file checks and no-placeholder action checks: passed.
- CV PDFs: both Spanish and English files are one-page A4 PDFs with editable HTML and Markdown sources.

## Real browser checks on Vercel Preview

- Browser: Playwright with Firefox.
- Portfolio interactions: navigation, language, theme, project category filtering, mobile menu/Escape, clipboard confirmation, reduced-motion setting, case study links and all 11 technical case sections passed.
- Responsive widths tested: 390, 768, 1366 and 1920 pixels; no horizontal overflow after fixing the HealthOps toolbar wrap.
- Case studies: 11/11 routes opened, each with eight required sections, a live demo and embedded Preview screenshot. Clicking project art/title navigates to the case study.
- Demo flows passed: HealthOps tabs/filters/reset; StockPilot and Inventory create, receive, issue, reject overdraw, search and reset; Python Office CSV cleaning/reconciliation/tracker; Business dashboard filters/language/CSV export; CSV Cleaner deduplication/export; Automation Toolkit safe plan; Task API validation/create; Job Tracker create/filter/export; QA Lab six runnable checks; RemoteCareerLab module navigation.
- Mobile demos: all 11 routes checked at 390px; no horizontal overflow.
- Console/page errors in the final browser run: zero.
- Public URLs are opened as browsers and exercised; HTTP status alone was not counted as a demo test.

## Captures

`docs/captures/v3/` contains desktop and mobile portfolio captures, 11 case study captures, desktop and mobile captures for each of the 11 demos, and the architecture diagram capture.

## Limitations and deployment gate

- Browser demos use fictional client-side data and explicitly identify adaptations where the source project needs a local backend or filesystem. They do not expose source project databases or claim to be the original backend deployment.
- No Supabase project was created because no public demo needs shared persistence, authentication or server-side storage.
- Vercel Preview passed. Production and GitHub Actions validation are pending; update this report after the final deployment and public URL checks.
