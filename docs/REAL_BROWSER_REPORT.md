# Real browser QA report

Date: 2026-10-31
Browser: Playwright CLI with Firefox (installed locally)
Site: static HTML/CSS/JavaScript served from a temporary local HTTP server

## Result

All checks listed below passed. The browser recorded no JavaScript errors, console errors, console warnings, or failed local requests.

## Checks performed

- Initial load, title, single page-level `h1`, project rendering, and local static resources.
- Top navigation links resolve to existing sections; the first keyboard Tab reaches the skip link.
- Spanish/English toggle updates page language and copy. Theme toggle switches between dark and light.
- Learning filters show the selected category (one backend card) and restore all seven categories.
- Copy email announces success; the footer “Back to top” button returns to the top, including with reduced motion enabled.
- Mobile menu opens, closes with Escape, and closes after following a section link.
- External project links use `noopener noreferrer`.
- GitHub Pages `404.html` loads and has a page-specific title.
- All four internal project pages load with the JC header; the HealthOps project page language toggle was checked.
- `prefers-reduced-motion: reduce` shortens the entrance animation to `0.00001s`.
- No horizontal overflow at 390×844, 768×1024, 1366×768, or 1920×1080.
- Main landmarks, labeled navigation, skip link, keyboard focus, and announced copy status checked. There are no raster content images requiring alt text; the decorative CSS illustration is hidden from assistive technology.
- Key text and accent colors were checked against each theme background. Measured contrast ratios were at least 5.10:1 for normal text and 5.41:1 for the green accent in light theme; dark theme ratios were at least 7.78:1 for muted text.

## Problems found and corrected

- The abstract hero geometry caused 9 px of overflow at 390 px and 31 px at 768 px. The artwork is now clipped within its container and resized at tablet widths; all four viewport checks now report no overflow.
- Firefox reported a scroll-linked effect while the optional scroll progress indicator updated on every scroll event. That indicator was removed. The accessible footer button still returns the visitor to the top.
- An existing content test expected the previous project data shape. It now checks the current project content and retained project-note links.

## Remote link and deployment limits

- The StockPilot, Python Office Tools, and REMOTECAREER-LAB GitHub pages were reachable during inspection. The supplied HealthOps source URL returned 404 from the web inspection service, and the Render demo host could not be fetched; neither endpoint's public availability was confirmed. Both owner-supplied URLs remain on the project detail page for follow-up.
- This report covers the local browser run. GitHub Pages deployment and public URL status must be recorded after the push and Actions deployment.

## Captures

- `docs/captures/desktop-1366x768.png` — desktop hero at 1366×768.
- `docs/captures/mobile-390x844.png` — mobile hero at 390×844.
- `og-image.png` — 1200×630 Open Graph image.

The five portfolio content tests pass with `python3 -m unittest discover -s tests -v`. `node --check` passes for the portfolio scripts. The parent repository's full `scripts/run_checks.py` suite also passed: 53 Python/Node tests plus three JavaScript syntax checks.
