# Stockpilot — technical notes

## Verified source

- **Source:** `https://github.com/Jesusz7x/stockpilot`
- **Technologies:** Python standard library + SQLite CLI.
- **Observed functionality:** Product catalog with unique SKU, edits, receive/issue movements, guarded balances, movement history, low stock/search and CSV export.
- **Run/check:** `python3 -m unittest discover -s . -v`
- **Demo boundary:** No web server, multi-user service, warehouse valuation or public persistence in the source CLI. Browser adaptation uses synthetic local state.

## Public V3 route

- Case study: `/projects/stockpilot/`
- Browser demo: `/demo/stockpilot/`
- Data: synthetic examples only; no shared backend is configured.
