# Business Sales Dashboard demo

This is the original static dashboard from `REMOTECAREER-LAB/projects/02-business-dashboard`, published at this portfolio's `/demo/business-sales-dashboard/` route. The sales dataset and calculations are the project's own deterministic synthetic fixture; no server, customer data, or external service is used.

Try the inclusive date, category, and region filters; inspect calculated revenue, order, and unit KPIs; sort the detail table; switch English/Spanish; and export the filtered rows as CSV. Reset restores the full 2025 sample.

## Verification

Run `node dashboard.test.js` from the original project directory. Its tests cover fixture determinism, revenue calculations, combined filters, monthly totals, product ranking, stable sorting, CSV escaping, and localized labels. The browser demo is static; it does not persist edits or connect to a real business system.
