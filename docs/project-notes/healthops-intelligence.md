# Healthops Intelligence — technical notes

## Verified source

- **Source:** `https://github.com/Jesusz7x/healthops-intelligence`
- **Technologies:** Python stdlib HTTP server + SQLite; HTML/CSS/JS dashboard.
- **Observed functionality:** Dashboard, appointment/staff/inventory information, CSV import validation, data-quality inspection, reporting and audit history.
- **Run/check:** `python3 scripts/run_checks.py`
- **Demo boundary:** The local API has a read-only mode intended for fictional public demo data. The V3 web route is a static browser adaptation and does not expose the API/database. Not certified clinical software.

## Public V3 route

- Case study: `/projects/healthops-intelligence/`
- Browser demo: `/demo/healthops-intelligence/`
- Data: synthetic examples only; no shared backend is configured.
