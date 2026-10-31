# Deployment report

## Verified account state

- Vercel CLI 65.9.0; account `jesusz7x`; Hobby team `jesus-69f4`.
- Vercel project: `jacobo-digital-lab-jesusz7x`.
- GitHub CLI account was authenticated and the Vercel deployment token was added as the repository Actions secret `VERCEL_TOKEN`; secret value is never stored in this repository.
- Supabase organization `Jacobo Digital Lab` exists. It has no project; the static portfolio and client-side demo adaptations do not need a shared database.

## Preview verification

- Preview URL: https://jacobo-digital-lab-jesusz7x-dq9mgfc56-jesus-69f4.vercel.app/
- Preview deployment ID: `dpl_DZC76LPmF5FtE33ym92joCDpiMwK`.
- Preview protection is disabled so public reviewers can access it.
- Opened routes returned HTTP 200: home, HealthOps case, HealthOps demo, Business Sales Dashboard demo, CV PDF and embedded demo screenshot.
- Playwright exercised project cards, all 11 case pages, embedded screenshots and core demo flows. See `FINAL_QA_REPORT.md`.

## Production and Git status

Production publication from the reviewed repository commit and GitHub Actions run is pending. Do not treat the Preview URL as the production URL. Update this section with the final production URL, commit, workflow run and public browser verification after deployment.
