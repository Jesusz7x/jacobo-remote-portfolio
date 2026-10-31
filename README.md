# Jacobo Digital Lab — Portfolio V3

Bilingual static portfolio and project demo catalog for Jacobo de Jesús Castillo Pacheco, Systems Engineering student at UES. Built with HTML, CSS and vanilla JavaScript.

## Run locally

`python3 -m http.server 8000` then visit `http://127.0.0.1:8000/`. No app runtime environment variables or shared database are required.

## Project routes

Each card opens a technical case study at `/projects/<slug>/` and an interactive browser demo at `/demo/<slug>/`. The demos use fictional local data. CLI and API ports are labeled as browser adaptations; the original Task API remains local-only. See `docs/PROJECT_CATALOG.md`, `docs/PROJECT_DEMOS.md`, and `docs/ARCHITECTURE.md`.

## Deploy

Static root project for Vercel; Preview on PR and Production on `main` through `.github/workflows/vercel.yml`. GitHub Pages remains a mirror workflow. No Supabase database is configured because current demos need no shared persistence. See `docs/VERCEL_SETUP.md` and `docs/SUPABASE_SETUP.md`.

## Quality

Portfolio/unit/browser results and deployment URLs are recorded in `docs/FINAL_QA_REPORT.md` and `docs/DEPLOYMENT_REPORT.md`. Screenshots: `docs/captures/v3/`. Do not infer demo functionality from HTTP 200 alone.

## CV

Editable HTML/Markdown and downloadable PDF versions in `cv/`, in English and Spanish.
