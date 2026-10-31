# Task Management Api — technical notes

## Verified source

- **Source:** `REMOTECAREER-LAB/projects/04-task-management-api`
- **Technologies:** Python WSGI + SQLite.
- **Observed functionality:** Create/read/update/delete tasks, validate status/priority/dates and payload size, search/filter/pagination, parameterized SQL.
- **Run/check:** `python3 -m unittest discover -s projects/04-task-management-api -v`
- **Demo boundary:** Source API is loopback-only, lacks auth/TLS and is expressly documented as unsuitable for internet exposure. No public endpoint is created.

## Public V3 route

- Case study: `/projects/task-management-api/`
- Browser demo: `/demo/task-management-api/`
- Data: synthetic examples only; no shared backend is configured.
