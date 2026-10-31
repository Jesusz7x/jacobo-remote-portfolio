# Environment variables

The portfolio and browser demos need no runtime environment variables. `.env.example` contains comments only. The static Vercel deployment has no database URL, API key, `service_role`, or other client secret.

For CI/CD, `VERCEL_TOKEN` belongs in the GitHub Actions secret store. Vercel team and project identifiers are stored in `.vercel/project.json` and are not secrets. None should be placed in public browser code. No Supabase values exist because no Supabase project is needed.
