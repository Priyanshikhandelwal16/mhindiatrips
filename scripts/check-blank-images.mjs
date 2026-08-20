import fs from "fs";
import path from "path";

const statesPath = path.join(process.cwd(), "src", "data", "fallback", "states.json");
const states = JSON.parse(fs.readFileSync(statesPath, "utf-8"));

const blanks = [];

for (const state of states) {
  if (!state.image || state.image.trim() === "") {
    blanks.push({ type: "State Image", state: state.slug, name: state.title?.en || state.slug });
  }
  
  if (state.cities) {
    for (const city of state.cities) {
      if (!city.image || city.image.trim() === "") {
        blanks.push({ type: "City Image", state: state.slug, city: city.slug, name: city.name?.en || city.slug });
      }
      
      if (city.attractions) {
        for (const attr of city.attractions) {
          if (!attr.image || attr.image.trim() === "") {
            blanks.push({ type: "Attraction Image", state: state.slug, city: city.slug, name: attr.name?.en || attr.name || "Unknown" });
          }
        }
      }
      
      if (city.localFoodDishes) {
        for (const food of city.localFoodDishes) {
          if (!food.image || food.image.trim() === "") {
            blanks.push({ type: "Local Food Image", state: state.slug, city: city.slug, name: food.name?.en || food.name || "Unknown" });
          }
        }
      }
      
      if (city.hotels) {
        for (const hotel of city.hotels) {
          if (!hotel.image || hotel.image.trim() === "") {
            blanks.push({ type: "Hotel Image", state: state.slug, city: city.slug, name: hotel.name?.en || hotel.name || "Unknown" });
          }
        }
      }
    }
  }
}

console.log(`Total Blank/Empty Images found: ${blanks.length}`);
if (blanks.length > 0) {
  console.log("Samples of Blank/Empty Images:");
  console.log(blanks.slice(0, 20));
  fs.writeFileSync(path.join(process.cwd(), "scripts", "blank-images.json"), JSON.stringify(blanks, null, 2), "utf-8");
}
