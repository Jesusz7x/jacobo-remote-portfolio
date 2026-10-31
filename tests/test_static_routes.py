from html.parser import HTMLParser
from pathlib import Path
import unittest
ROOT=Path(__file__).parents[1]
class Parser(HTMLParser):
    pass
class StaticRoutesTests(unittest.TestCase):
    def test_html_assets_parse(self):
        for path in ROOT.rglob('*.html'):
            with self.subTest(path=path.relative_to(ROOT)):
                parser=Parser(); parser.feed(path.read_text(encoding='utf-8')); parser.close()
    def test_local_case_and_demo_links_exist(self):
        for page in (ROOT/'projects').glob('*/index.html'):
            slug=page.parent.name
            self.assertTrue((ROOT/'demo'/slug/'index.html').exists(),slug)
            self.assertIn(f'../../demo/{slug}/',page.read_text())
    def test_no_placeholder_project_actions(self):
        data=(ROOT/'data.js').read_text()
        self.assertNotIn('More project notes',data)
        self.assertNotIn('href: "#"',data)
if __name__=='__main__': unittest.main(verbosity=2)
