import json
import re
import unittest
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).parents[1]
SLUGS = [
    'healthops-intelligence', 'stockpilot', 'python-office-tools', 'remote-career-lab',
    'csv-data-cleaner', 'business-sales-dashboard', 'automation-toolkit',
    'task-management-api', 'inventory-system', 'job-tracker', 'qa-lab',
]

class PortfolioV3Tests(unittest.TestCase):
    def test_every_catalog_item_has_case_demo_artwork_and_documentation(self):
        source = (ROOT / 'data.js').read_text()
        projects = source.split('projects: [', 1)[1].split('\n  ],', 1)[0]
        self.assertEqual(projects.count('slug: "'), len(SLUGS))
        for slug in SLUGS:
            with self.subTest(slug=slug):
                self.assertTrue((ROOT / 'projects' / slug / 'index.html').is_file())
                self.assertTrue((ROOT / 'demo' / slug / 'index.html').is_file())
                self.assertTrue((ROOT / 'assets/project-art' / f'{slug}.svg').is_file())
                self.assertTrue((ROOT / 'docs/captures/v3' / f'demo-{slug}.png').is_file())
                self.assertTrue((ROOT / 'docs/project-notes' / f'{slug}.md').is_file())
                page = (ROOT / 'projects' / slug / 'index.html').read_text()
                self.assertEqual(page.count('<section id="case-'), 8)
                self.assertIn(f'../../demo/{slug}/', page)
                self.assertIn('SOURCE CODE', page)
                self.assertIn('TECHNICAL DOCUMENTATION', page)

    def test_project_art_and_external_links_are_safe(self):
        app = (ROOT / 'app.js').read_text()
        self.assertIn('project-visual-link', app)
        self.assertIn('noopener noreferrer', app)
        self.assertIn('data-project-filter', app)
        self.assertIn('aria-pressed', app)

    def test_vercel_is_static_and_has_no_unneeded_environment_values(self):
        config = json.loads((ROOT / 'vercel.json').read_text())
        self.assertTrue(config['trailingSlash'])
        env = (ROOT / '.env.example').read_text()
        self.assertNotRegex(env, r'(?i)(service_role|api[_-]?key|password|secret)\s*=')

    def test_sitemap_is_valid_and_covers_routes(self):
        tree = ET.parse(ROOT / 'sitemap.xml')
        urls = [e.text for e in tree.findall('.//{*}loc')]
        for slug in SLUGS:
            self.assertIn(f'https://jacobo-digital-lab.vercel.app/projects/{slug}/', urls)
            self.assertIn(f'https://jacobo-digital-lab.vercel.app/demo/{slug}/', urls)

    def test_cv_html_pdf_and_editable_source_exist(self):
        for lang in ('en', 'es'):
            self.assertTrue((ROOT / f'cv/jacobo-castillo-{lang}.html').is_file())
            self.assertTrue((ROOT / f'cv/jacobo-castillo-{lang}.md').is_file())
            pdf = ROOT / f'cv/jacobo-castillo-{lang}.pdf'
            self.assertTrue(pdf.is_file())
            self.assertGreater(pdf.stat().st_size, 1000)

if __name__ == '__main__':
    unittest.main(verbosity=2)
