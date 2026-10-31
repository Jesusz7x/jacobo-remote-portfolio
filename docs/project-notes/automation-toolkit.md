# Automation Toolkit — technical notes

## Verified source

- **Source:** `python-office-tools/tools/automation_toolkit.py and REMOTECAREER-LAB project documentation`
- **Technologies:** Python standard library CLI.
- **Observed functionality:** Preview organization by extension/date; regex rename plan; duplicate SHA-256 groups without deletion; recursive inventory CSV; folder validation; simple CSV/JSON conversion.
- **Run/check:** `python3 tools/automation_toolkit.py --help`
- **Demo boundary:** Browser demo can preview filenames and export a plan but cannot move/rename local files. CLI must be run on a copied folder first.

## Public V3 route

- Case study: `/projects/automation-toolkit/`
- Browser demo: `/demo/automation-toolkit/`
- Data: synthetic examples only; no shared backend is configured.
