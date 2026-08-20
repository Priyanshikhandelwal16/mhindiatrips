import fs from "fs";
import path from "path";

const statesPath = path.join(process.cwd(), "src", "data", "fallback", "states.json");
const states = JSON.parse(fs.readFileSync(statesPath, "utf-8"));

for (const state of states) {
  if (state.cities) {
    for (const city of state.cities) {
      if (city.hotels && city.hotels.length > 0) {
        console.log(`State: ${state.slug}, City: ${city.slug}`);
        console.log("Hotel keys:", Object.keys(city.hotels[0]));
        console.log("First hotel sample:", city.hotels[0]);
        break;
      }
    }
  }
}
