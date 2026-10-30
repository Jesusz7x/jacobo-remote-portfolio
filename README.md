# Remote Technology Portfolio

A lightweight bilingual portfolio built with static HTML, CSS, and JavaScript. It presents project evidence in Python, SQLite, data quality, automation, QA, and web development.

## Run locally

Open `index.html` in a modern browser, or run `python3 -m http.server 8000` from this folder and visit `http://127.0.0.1:8000`. No Node build or third-party dependency is required.

## Featured project: HEALTHOPS INTELLIGENCE

The featured project page links to the public demonstration at <https://healthops-intelligence-demo.onrender.com> and its source repository at <https://github.com/Jesusz7x/healthops-intelligence>. The demo is read-only and contains fictional data; it is not certified clinical software. The project uses Python standard library, SQLite, HTML, CSS, and JavaScript. It does not implement Angular, Express, or PostgreSQL. The portfolio reports 18 automated tests recorded by the project README; live verification of the hosted service depends on network availability.

## Publish with GitHub Pages

This repository includes a GitHub Actions workflow. Configure **Settings → Pages → GitHub Actions**. Pushes to `main` deploy the static root.

## Platzi learning

The portfolio lists seven bilingual learning areas, courses reported completed by the student, and related technology areas separately. Course links point to official Platzi catalog pages; they do not verify the student's account or issue a credential. No certificate is claimed as verified. The cybersecurity entry is identified as a Platzi learning path, not an individual course.

## Contact and profile fields

The public email supplied by the owner is configured in `data.js`. The owner-confirmed public name, UES studies, GitHub username, and contact email are configured. Language levels, availability, LinkedIn, and CV download remain unset pending confirmation. Do not add draft CV PDFs containing placeholders.

## Evidence and limitations

The HealthOps project page links to its technical documentation and explains its synthetic-data safety scope. This checkout's content tests verify local links, bilingual safety wording, stack claims, and the external demo/source targets. They do not establish remote service uptime or successful GitHub Pages deployment. No screenshots were fabricated. Some projects require their separate source repositories to run.

Run the lightweight content checks with `python3 -m unittest discover -s tests -v`.

## License

MIT; see `LICENSE`.

---

# Portafolio tecnológico remoto

Sitio bilingüe ligero con HTML, CSS y JavaScript estáticos. Para probarlo localmente, abra `index.html` o ejecute `python3 -m http.server 8000`.

## Proyecto destacado: HEALTHOPS INTELLIGENCE

La ficha del proyecto enlaza la demostración pública <https://healthops-intelligence-demo.onrender.com> y su código fuente <https://github.com/Jesusz7x/healthops-intelligence>. La demo es de solo lectura y usa datos ficticios; no es software clínico certificado. Implementa biblioteca estándar de Python, SQLite, HTML, CSS y JavaScript. No implementa Angular, Express ni PostgreSQL. Se informan 18 pruebas automatizadas consignadas en el README del proyecto; la comprobación del servicio alojado depende de la conectividad disponible.

Los cursos de Platzi se muestran como formación declarada y las áreas tecnológicas como conocimientos o intereses, sin atribuir certificados no verificados. Nombre, correo, usuario GitHub y estudios en UES se basan en datos confirmados por el propietario. Los CV borrador no se publican.

Las pruebas de contenido verifican enlaces locales, textos bilingües de seguridad, tecnologías y destinos de la demo/código; no demuestran disponibilidad remota ni que Pages se haya actualizado. Licencia MIT.
