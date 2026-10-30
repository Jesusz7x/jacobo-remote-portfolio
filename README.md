# Remote Technology Portfolio

A lightweight bilingual portfolio site built with static HTML, CSS, and JavaScript. It presents project evidence in Python, SQLite, data quality, automation, QA, and web work. The local portfolio source also documents HEALTHOPS INTELLIGENCE as a tested synthetic-data build; its independent source repository and live browser review remain pending.

## Run locally

Open `index.html` in a modern browser, or run `python3 -m http.server 8000` from this folder and visit `http://127.0.0.1:8000`. No Node build or third-party dependency is required.

## Publish with GitHub Pages

This repository includes a GitHub Actions workflow. After creating the public repository, select **Settings → Pages → GitHub Actions**. Pushes to `main` deploy the static root.

## Platzi learning

The portfolio lists seven bilingual learning areas, courses reported completed by the student, and related technology areas separately. Course links point to official Platzi catalog pages; they do not verify the student's account or issue a credential. No certificate is claimed as verified. The cybersecurity entry is identified as a Platzi learning path, not an individual course.

Run the lightweight content checks with `python3 -m unittest discover -s tests -v`.

## Contact and profile fields

The public email supplied by the owner is configured in `data.js`. The owner-confirmed public name, UES studies, GitHub username, and contact email are configured. Language levels, availability, LinkedIn, and CV download remain unset pending confirmation; the GitHub account link is user-provided and has not been verified from this network-restricted environment. Do not add draft CV PDFs containing placeholders.

## Evidence and limitations

Project descriptions link to the included local detail pages, including a transparent HEALTHOPS INTELLIGENCE case study. Its 18 automated tests passed, but the sandbox prevented live socket/browser checks; no hosted demo or source-repository link is claimed. The HealthOps source repo and browser/deployment evidence remain pending. Some projects require their separate local source repositories to run; each detail page explains local source paths and relevant tests. A real public repository link and browser/deployment check are pending GitHub account authentication. No screenshots were fabricated.

## License

MIT; see `LICENSE`.

---

# Portafolio tecnológico remoto

Sitio bilingüe ligero hecho con HTML, CSS y JavaScript estáticos. Para probarlo localmente, abra `index.html` o ejecute `python3 -m http.server 8000`.

El sitio documenta HEALTHOPS INTELLIGENCE como proyecto local con datos ficticios y 18 pruebas aprobadas; el navegador, la demo pública y el repositorio fuente aún están pendientes.

Están configurados el nombre público, los estudios en UES, el usuario GitHub y el correo confirmados por el propietario. Los niveles de idioma, disponibilidad, LinkedIn y descarga del CV siguen pendientes; este entorno no pudo verificar remotamente el enlace de GitHub. El workflow de GitHub Pages está listo; falta autenticar y crear el repositorio. No se usaron capturas ficticias. Licencia MIT.
