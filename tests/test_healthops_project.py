import unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
class PortfolioCatalogTests(unittest.TestCase):
    def test_healthops_is_first_and_has_live_case_and_safe_demo(self):
        data=(ROOT/'data.js').read_text()
        first=data.split('projects: [',1)[1].split('\n  ],',1)[0].split('\n    {',1)[1]
        self.assertIn('name: "HealthOps Intelligence"',first)
        self.assertIn('number: "01"',first)
        self.assertIn('href: "projects/healthops-intelligence/"',first)
        self.assertIn('demo: "demo/healthops-intelligence/"',first)
        self.assertTrue((ROOT/'demo/healthops-intelligence/index.html').is_file())
        self.assertTrue((ROOT/'projects/healthops-intelligence/index.html').is_file())
    def test_healthops_demo_uses_fictional_read_only_browser_state(self):
        page=(ROOT/'demo/healthops-intelligence/index.html').read_text()
        script=(ROOT/'demo/healthops-intelligence/app.js').read_text()
        self.assertIn('Synthetic records only',page)
        self.assertIn('aria-selected',page)
        self.assertIn("data-tab",script)
        self.assertIn('appointments-rows',script)
        self.assertNotIn('fetch(',script)
        self.assertIn('not clinical software',page)
if __name__=='__main__': unittest.main(verbosity=2)
