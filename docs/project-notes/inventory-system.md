# Inventory System — technical notes

## Verified source

- **Source:** `REMOTECAREER-LAB/projects/05-inventory-system`
- **Technologies:** Python + SQLite.
- **Observed functionality:** Transactional product stock, receive/issue movements, before/after audit, low stock and CSV export.
- **Run/check:** `python3 -m unittest discover -s projects/05-inventory-system -v`
- **Demo boundary:** CLI has no multiwarehouse, valuation, auth or web concurrency. Web demo is synthetic, client-side and resettable.

## Public V3 route

- Case study: `/projects/inventory-system/`
- Browser demo: `/demo/inventory-system/`
- Data: synthetic examples only; no shared backend is configured.
