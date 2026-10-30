import re, unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
class HealthOpsPortfolioEntryTests(unittest.TestCase):
    def test_featured_card_links_to_existing_detail(self):
        data=(ROOT/'data.js').read_text()
        self.assertIn('HealthOps Intelligence',data)
        self.assertIn('projects/healthops-intelligence.html',data)
        self.assertTrue((ROOT/'projects/healthops-intelligence.html').is_file())
        self.assertIn('PUBLIC READ-ONLY DEMO · 18 TESTS PASSED',data)
    def test_detail_has_bilingual_evidence_and_honest_limitations(self):
        page=(ROOT/'projects/healthops-intelligence.html').read_text()
        self.assertIn('data-lang="en"',page); self.assertIn('data-lang="es"',page)
        self.assertIn('not implemented',page); self.assertIn('healthops-intelligence-demo.onrender.com',page)
        self.assertIn('read-only',page.lower()); self.assertIn('solo lectura',page.lower())
        self.assertIn('Python 3.11+ standard library',page)
        self.assertIn('sqlite3',page)
        self.assertIn('not a clinical product',page)
        self.assertIn('LIVE DEMO',page); self.assertIn('SOURCE CODE',page)
        self.assertEqual(page.count('href="https://healthops-intelligence-demo.onrender.com"'),4)
        self.assertEqual(page.count('href="https://github.com/Jesusz7x/healthops-intelligence"'),4)
        public_hrefs=re.findall(r'href="([^"]+)"',page)
        self.assertFalse(any('localhost' in href or '127.0.0.1' in href for href in public_hrefs))
        for url in ('https://healthops-intelligence-demo.onrender.com','https://github.com/Jesusz7x/healthops-intelligence'):
            self.assertRegex(page, re.escape(url)+r'[^>]*target="_blank"[^>]*rel="noopener noreferrer"')
        self.assertIn('healthops-intelligence/blob/main/docs/CASE_STUDY.md',page)
        self.assertIn('healthops-intelligence/blob/main/docs/openapi.yaml',page)
        self.assertNotIn('Angular is implemented',page)
    def test_language_script_has_page_metadata(self):
        script=(ROOT/'projects/project-language.js').read_text()
        self.assertIn("'healthops-intelligence.html'",script)
        self.assertIn('fictional operations platform built with Python, SQLite, HTML, CSS and JavaScript',script)
if __name__=='__main__': unittest.main(verbosity=2)
