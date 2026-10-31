# Vercel setup

One Vercel Hobby project serves the portfolio and static demos from repository root. Framework: Other/static. Build command: none. Output directory: repository root. `vercel.json` applies security headers. No Vercel Functions, storage, analytics, or paid features are used. GitHub Actions creates Preview deployments for pull requests and Production deployments on `main`.

The local Vercel CLI was found at `/home/jezus/.local/npm/bin/vercel` (version 65.9.0) and authenticated as `jesusz7x`; the active team is Hobby. The project inventory was empty before this setup.

The workflow requires the GitHub Actions secret `VERCEL_TOKEN`. Non-secret team/project IDs are stored in `.vercel/project.json`. The access token is not stored in the repository. Production canonical domain and the generated project URL are recorded in `DEPLOYMENT_REPORT.md` after verification.


## Free-tier guardrails checked 2026-10-31

The Hobby plan is intended for personal projects and includes static deployments, automatic HTTPS and Preview support. Current published limits include 100 deployments per day, 2,048 routes per deployment, and a 100 MB static file-upload limit; static file hosting is not counted as a build. This project is a single static deployment with no Functions, paid domains, paid add-ons, or storage. See the official Hobby plan (https://vercel.com/docs/plans/hobby) and platform limits (https://vercel.com/docs/limits). Recheck current limits before adding services or increasing traffic.
