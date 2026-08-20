import fs from "fs";
import path from "path";

const statesPath = path.join(process.cwd(), "src", "data", "fallback", "states.json");
const states = JSON.parse(fs.readFileSync(statesPath, "utf-8"));

let localStates = 0;
let localCities = 0;
let localAttractions = 0;
let localFoods = 0;
let localHotels = 0;

for (const state of states) {
  if (state.image && state.image.startsWith("/images/")) {
    localStates++;
  }
  if (state.cities) {
    for (const city of state.cities) {
      if (city.image && city.image.startsWith("/images/")) {
        localCities++;
      }
      if (city.attractions) {
        for (const attr of city.attractions) {
          if (attr.image && attr.image.startsWith("/images/")) {
            localAttractions++;
          }
        }
      }
      if (city.localFoodDishes) {
        for (const food of city.localFoodDishes) {
          if (food.image && food.image.startsWith("/images/")) {
            localFoods++;
          }
        }
      }
      if (city.hotels) {
        for (const hotel of city.hotels) {
          if (hotel.image && hotel.image.startsWith("/images/")) {
            localHotels++;
          }
        }
      }
    }
  }
}

console.log("--- LOCAL IMAGES (/images/...) ---");
console.log(`States: ${localStates}`);
console.log(`Cities: ${localCities}`);
console.log(`Attractions: ${localAttractions}`);
console.log(`Foods: ${localFoods}`);
console.log(`Hotels: ${localHotels}`);
