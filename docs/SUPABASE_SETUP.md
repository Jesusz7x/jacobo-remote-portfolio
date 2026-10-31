# Supabase setup decision

No Supabase project or migration is created for V3. Inspection found no public demo flow that needs shared persistence, authentication, an API, or uploaded storage. The portfolio and all demos are static; their datasets are fictional and local to each browser page. Creating tables would add a public data boundary and maintenance cost without serving a current feature.

## Access verification

The existing CLI session listed organization `Jacobo Digital Lab` (`kljlisuwzenuzeiznnas`). `supabase projects list` returned no projects. No second organization or database was created.

## Revisit when needed

If a future project needs shared multi-user data, create an isolated Supabase project in the existing organization, use a dedicated schema, enable RLS before exposing tables, define explicit read/write policies, and test anon/authenticated access. Do not reuse this public demo state for real or sensitive data. A free project may be paused after a week of low activity; see the official [Supabase pausing guide](https://supabase.com/docs/guides/platform/free-project-pausing).


The Free plan currently allows two free projects across the owner's organizations, and low-activity projects may be paused after seven days. Since these demos have no shared state, leaving Supabase unprovisioned avoids an unnecessary database and inactivity risk. See official billing details (https://supabase.com/docs/guides/platform/billing-on-supabase).
