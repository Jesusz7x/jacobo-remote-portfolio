# Architecture

## Deployment shape

A single static Vercel project serves the bilingual portfolio, case studies (`/projects/<slug>/`), and independent web demos (`/demo/<slug>/`). Each static app has its own page and local asset boundary. This avoids relying on unsupported multi-project rewrites and keeps each path addressable.

## Data boundaries

- Each public demo uses fictional, deterministic seed rows.
- Read-only dashboards calculate or filter in browser memory.
- CSV uploads use the browser File API; files are not sent to a server.
- Demo edits use only local page state or browser storage and provide a reset.
- The original Task Management API remains loopback-only. Its demo exercises the documented contract in browser memory; it is not represented as a public API.
- HealthOps is not presented as clinical software. Its portfolio dashboard adaptation is static, synthetic and read-only.
- There is no shared database, authentication service, or storage service because the inspected public use cases do not require them.

## Main technologies

HTML, CSS, vanilla JavaScript, Python CLI source projects, SQLite in local applications, static hosting on Vercel, GitHub Actions, and Playwright for browser QA. The Business Sales Dashboard demo serves the original static project assets and runs the original dashboard calculations.

## Request flow

Visitor → Vercel static asset/CDN → HTML/CSS/JS in browser → local demo fixtures/state. No visitor data is sent to a backend. External links go to the source repositories. No runtime API routes or secrets are required.

## Limitations

StockPilot, Python Office Tools, Inventory System, Job Tracker, and Task Management API source implementations remain local CLI/API programs. Their browser demos are explicitly identified as adaptations and do not provide shared persistence or an Internet API.
