# Jacobo Digital Lab — Portfolio V3

V3 expands the bilingual JC portfolio into a static project catalog with one technical case study and one functional browser demo per verified project. The design continues the existing dark editorial visual system, adds project-specific original SVG artwork, category filters, project case links, career opportunities and bilingual downloadable CVs.

## Content

Profile, education, academic practice and contact use owner-confirmed information. Platzi learning is attributed to the learner and not described as independently verified credentials. Project cards distinguish source tools from browser adaptations. No proficiency percentages, graduation date or employment outcome are claimed.

## Routes

- `/` — bilingual home/catalog
- `/projects/<slug>/` — eight-part case study
- `/demo/<slug>/` — independent app demo
- `/cv/jacobo-castillo-en.html` and `/cv/jacobo-castillo-es.html` — editable CV source; PDF downloads alongside
- `/404.html` — not found

## Run locally

`python3 -m http.server 8000` then open `http://127.0.0.1:8000/`.
