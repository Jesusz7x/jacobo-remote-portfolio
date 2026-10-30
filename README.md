# Remote Technology Portfolio

A lightweight bilingual portfolio site built with static HTML, CSS, and JavaScript. It presents project evidence in Python, SQLite, data quality, automation, QA, and web work.

## Run locally

Open `index.html` in a modern browser, or run `python3 -m http.server 8000` from this folder and visit `http://127.0.0.1:8000`. No Node build or third-party dependency is required.

## Publish with GitHub Pages

This repository includes a GitHub Actions workflow. After creating the public repository, select **Settings → Pages → GitHub Actions**. Pushes to `main` deploy the static root.

## Platzi learning

The portfolio lists seven bilingual learning areas, courses reported completed by the student, and related technology areas separately. Course links point to official Platzi catalog pages; they do not verify the student's account or issue a credential. No certificate is claimed as verified. The cybersecurity entry is identified as a Platzi learning path, not an individual course.

Run the lightweight content checks with `python3 -m unittest discover -s tests -v`.

## Contact and profile fields

The public email supplied by the owner is configured in `data.js`. Identity, education, language levels, availability, GitHub/LinkedIn URLs and CV links remain unset until confirmed. Do not add draft CV PDFs containing placeholders.

## Evidence and limitations

Project descriptions link to the included local detail pages. Some projects require their separate local source repositories to run; each detail page explains local source paths and relevant tests. A real public repository link and browser/deployment check are pending GitHub account authentication. No screenshots were fabricated.

## License

MIT; see `LICENSE`.

---

# Portafolio tecnológico remoto

Sitio bilingüe ligero hecho con HTML, CSS y JavaScript estáticos. Para probarlo localmente, abra `index.html` o ejecute `python3 -m http.server 8000`.

El correo público proporcionado por el propietario está configurado. Nombre, formación, niveles de idioma, disponibilidad, perfiles sociales y CV permanecen sin publicar hasta confirmarse. El workflow de GitHub Pages está listo; falta autenticar y crear el repositorio. No se usaron capturas ficticias. Licencia MIT.
