# Jacobo Castillo Pacheco — Portfolio

A bilingual, responsive portfolio for Jacobo de Jesús Castillo Pacheco, a Systems Engineering student at Universidad de El Salvador (UES). The site uses static HTML, CSS, and JavaScript with no runtime dependencies.

## Run locally

Open `index.html` or serve this directory with `python3 -m http.server 8000`. The portfolio is a static root deployment; no Node build is required.

## Site features

- Spanish/English content and persistent light/dark theme.
- Mobile navigation, keyboard skip link, visible focus, reduced-motion support, and a back-to-top button.
- Project scope reviewed against available repository documentation. StockPilot and Python Office Tools are local tools; only HealthOps is configured with a demo URL (current uptime not verified). HealthOps uses fictional data, its demo is described as read-only, and it is not certified clinical software.
- Learning content grouped into seven categories. Courses are student-reported; course catalog links do not verify a personal credential. No certificates, grades, dates, or durations are claimed.
- Education, academic practice, current availability, and contact details based on information supplied by the owner.
- SEO metadata, Open Graph image, favicon, `robots.txt`, `sitemap.xml`, and a GitHub Pages `404.html`.

## Deploy with GitHub Pages

The workflow in `.github/workflows/deploy.yml` publishes the repository root on pushes to `main`. Configure **Settings → Pages → GitHub Actions**.

## Checks

Run the content checks with `python3 -m unittest discover -s tests -v`. The browser validation report and screenshots are in `docs/REAL_BROWSER_REPORT.md` and `docs/captures/`.

## License

MIT; see `LICENSE`.

---

# Portafolio de Jacobo Castillo Pacheco

Sitio bilingüe y adaptable para Jacobo de Jesús Castillo Pacheco, estudiante de Ingeniería de Sistemas en la Universidad de El Salvador (UES). Está construido con HTML, CSS y JavaScript estáticos y no necesita dependencias en tiempo de ejecución.

## Ejecución local

Abre `index.html` o sirve este directorio con `python3 -m http.server 8000`. El sitio no requiere compilación de Node.

Incluye selección de idioma, tema claro/oscuro, navegación móvil, accesibilidad de teclado y movimiento reducido, proyectos con alcances revisados contra la documentación disponible, formación, SEO, Open Graph, favicon, `robots.txt`, `sitemap.xml` y página 404. La ficha de HealthOps explica el uso de datos ficticios y el alcance de solo lectura. La formación de Platzi se presenta como declarada por el estudiante y no como certificación verificada.

Ejecuta las pruebas de contenido con `python3 -m unittest discover -s tests -v`. El informe de navegador y las capturas están en `docs/REAL_BROWSER_REPORT.md` y `docs/captures/`.
