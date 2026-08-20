import fs from "fs";
import path from "path";

const statesPath = path.join(process.cwd(), "src", "data", "fallback", "states.json");
const states = JSON.parse(fs.readFileSync(statesPath, "utf-8"));

const checkStates = ["rajasthan", "goa", "kerala"];

for (const slug of checkStates) {
  const state = states.find(s => s.slug === slug);
  if (!state) {
    console.log(`State not found: ${slug}`);
    continue;
  }
  console.log(`\n=== STATE: ${state.slug.toUpperCase()} ===`);
  console.log(`State Image: ${state.image}`);
  console.log(`State Gallery:`, state.gallery);
  if (state.cities) {
    console.log(`Cities (${state.cities.length}):`);
    for (const city of state.cities) {
      console.log(`  - City: ${city.slug}`);
      console.log(`    City Image: ${city.image}`);
      if (city.attractions) {
        console.log(`    Attractions:`, city.attractions.map(a => ({ name: a.name?.en, image: a.image })));
      }
      if (city.localFoodDishes) {
        console.log(`    Local Food:`, city.localFoodDishes.map(f => ({ name: f.name?.en, image: f.image })));
      }
      if (city.hotels) {
        console.log(`    Hotels:`, city.hotels.map(h => ({ name: h.name?.en, image: h.image })));
      }
      if (city.gallery) {
        console.log(`    Gallery:`, city.gallery.map(g => ({ title: g.title?.en, url: g.url })));
      }
    }
  }
}
