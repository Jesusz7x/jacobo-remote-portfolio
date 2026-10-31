# Deployment report

## Account and architecture

- Vercel CLI 65.9.0; account `jesusz7x`, Hobby team `jesus-69f4`.
- Vercel project: `jacobo-digital-lab-jesusz7x`; its GitHub Actions workflow deploys `main` to Production and PRs to Preview.
- The GitHub Actions secret `VERCEL_TOKEN` is configured without storing its value in this repository.
- Supabase organization `Jacobo Digital Lab` exists. No project was created because the public demos use local fictional browser data and need no shared persistence, authentication or server-side storage.

## Production

- URL: https://jacobo-digital-lab-jesusz7x.vercel.app/
- Commit: `29085840b57334f9b1ce1ddf2cad82f40fa0e6af` (`Build Jacobo Digital Lab portfolio and live demos`).
- GitHub Actions: [run 41227060141](https://github.com/Jesusz7x/jacobo-remote-portfolio/actions/runs/41227060141), success. Validation and Vercel production deployment both completed.
- Public browser check (Playwright Firefox): home loaded with 11 project cards; at 390px the document had no horizontal overflow; StockPilot demo loaded and exposed its interactive controls.
- HTTPS checks returned 200 for all 11 case study routes and all 11 corresponding demo routes, plus home, HealthOps case/demo, Business Sales Dashboard demo, English CV PDF, robots.txt and sitemap.xml.

## Preview

- URL: https://jacobo-digital-lab-jesusz7x-dq9mgfc56-jesus-69f4.vercel.app/
- Deployment ID: `dpl_DZC76LPmF5FtE33ym92joCDpiMwK`.
- Preview is publicly accessible. Browser interaction suites and capture screenshots were generated against the Preview before promotion; see `FINAL_QA_REPORT.md`.

## GitHub Pages

The repository’s existing GitHub Pages workflow was preserved and completed successfully on the final documentation push ([run 41227415838](https://github.com/Jesusz7x/jacobo-remote-portfolio/actions/runs/41227415838)). Vercel Production is the primary host and was independently verified above.
