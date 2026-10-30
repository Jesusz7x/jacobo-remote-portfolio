import json
import unittest
from pathlib import Path

ROOT = Path(__file__).parents[1]


class PlatziLearningTests(unittest.TestCase):
    def setUp(self):
        source = (ROOT / "learning.js").read_text(encoding="utf-8")
        payload = source.removeprefix("window.PLATZI_LEARNING = ").strip().removesuffix(";")
        self.learning = json.loads(payload)

    def test_seven_categories_are_bilingual_and_all_courses_link_to_platzi(self):
        self.assertEqual(len(self.learning["areas"]), 7)
        self.assertIn("SOFTWARE ENGINEERING, TECHNOLOGY & CONTINUOUS LEARNING", self.learning["heading"]["en"])
        self.assertIn("INGENIERÍA DE SOFTWARE, TECNOLOGÍA Y APRENDIZAJE CONTINUO", self.learning["heading"]["es"])
        for area in self.learning["areas"]:
            self.assertTrue(area["title"]["en"] and area["title"]["es"])
            for course in area["courses"]:
                self.assertTrue(course["href"].startswith("https://platzi.com/"))

    def test_declared_learning_is_not_misrepresented_as_verified_certification(self):
        self.assertIn("No Platzi certificates", self.learning["certificateText"]["en"])
        self.assertIn("No se han proporcionado certificados", self.learning["certificateText"]["es"])
        security = self.learning["areas"][5]
        self.assertEqual(security["courses"], [])
        self.assertIn("learning path", security["catalogPaths"][0]["title"]["en"])
        self.assertIn("ruta de aprendizaje", security["catalogPaths"][0]["title"]["es"])


if __name__ == "__main__":
    unittest.main()
