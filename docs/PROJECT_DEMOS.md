# Project demo registry

Every project card links to a case study. Each case study exposes `LIVE DEMO`, `SOURCE CODE`, and `TECHNICAL DOCUMENTATION` links. Demo routes are all hosted by the same static deployment and remain separate paths.

| Project | Demo route | Public data / behavior |
|---|---|---|
| HealthOps Intelligence | `/demo/healthops-intelligence/` | Synthetic, read-only dashboard, module tabs, appointment/status filter, stock filter, reset. |
| StockPilot | `/demo/stockpilot/` | Synthetic products, stock movements, search/filter, CSV, reset. |
| Python Office Tools | `/demo/python-office-tools/` | Browser-only CSV clean/reconcile and fictional tracker; no uploads to server. |
| REMOTECAREER-LAB | `/demo/remote-career-lab/` | Index with direct links to six module demos. |
| CSV Data Cleaner | `/demo/csv-data-cleaner/` | Local CSV preview, trim/missing/duplicate report, downloadable output. |
| Business Sales Dashboard | `/demo/business-sales-dashboard/` | Original static project with real calculations, filters and CSV. |
| Automation Toolkit | `/demo/automation-toolkit/` | File metadata and rename plan preview; no filesystem mutation. |
| Task Management API | `/demo/task-management-api/` | In-memory contract sandbox; not a public API service. |
| Inventory System | `/demo/inventory-system/` | Synthetic stock ledger adaptation and reset. |
| Job Application Tracker | `/demo/job-tracker/` | Fictional records, stage updates, filters, CSV and reset. |
| Quality Assurance Lab | `/demo/qa-lab/` | Browser assertions against the actual dashboard core; report download. |

All demos should pass `docs/FINAL_QA_REPORT.md` checks before the project is marked deployed. Static status alone does not prove interaction correctness.
