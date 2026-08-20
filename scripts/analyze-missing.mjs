import fs from "fs";
import path from "path";

const projectRoot = process.cwd();
const statesPath = path.join(projectRoot, "src", "data", "fallback", "states.json");
const states = JSON.parse(fs.readFileSync(statesPath, "utf-8"));

const publicImagesDir = path.join(projectRoot, "public", "images");
const localImages = new Set(
  fs.existsSync(publicImagesDir) ? fs.readdirSync(publicImagesDir).map(f => f.toLowerCase()) : []
);

console.log(`Total local images in public/images: ${localImages.size}`);

let missingStates = 0;
let missingCities = 0;
let missingAttractions = 0;
let missingFoods = 0;
let missingHotels = 0;

let mappedAttractions = 0;
let mappedFoods = 0;
let mappedHotels = 0;

for (const state of states) {
  if (!state.image || state.image.includes("fallback") || state.image === "") {
    missingStates++;
  }

  if (state.cities) {
    for (const city of state.cities) {
      if (!city.image || city.image === "") {
        missingCities++;
      }

      if (city.attractions) {
        for (const attr of city.attractions) {
          const name = attr.name?.en || "";
          const imgFile = `${name}.jpg`.toLowerCase();
          const pngFile = `${name}.png`.toLowerCase();
          
          if (localImages.has(imgFile) || localImages.has(pngFile)) {
            mappedAttractions++;
          } else if (!attr.image || attr.image === "") {
            missingAttractions++;
          }
        }
      }

      if (city.localFoodDishes) {
        for (const food of city.localFoodDishes) {
          const name = food.name?.en || "";
          const imgFile = `${name}.jpg`.toLowerCase();
          const pngFile = `${name}.png`.toLowerCase();
          
          if (localImages.has(imgFile) || localImages.has(pngFile)) {
            mappedFoods++;
          } else if (!food.image || food.image === "") {
            missingFoods++;
          }
        }
      }

      if (city.hotels) {
        for (const hotel of city.hotels) {
          const name = hotel.name?.en || "";
          const imgFile = `${name}.jpg`.toLowerCase();
          const pngFile = `${name}.png`.toLowerCase();
          
          if (localImages.has(imgFile) || localImages.has(pngFile)) {
            mappedHotels++;
          } else if (!hotel.image || hotel.image === "") {
            missingHotels++;
          }
        }
      }
    }
  }
}

console.log("\n--- STATISTICS ---");
console.log(`Missing State Images: ${missingStates}`);
console.log(`Missing City Images: ${missingCities}`);
console.log(`Missing Attraction Images: ${missingAttractions} (Mapped from local: ${mappedAttractions})`);
console.log(`Missing Food Images: ${missingFoods} (Mapped from local: ${mappedFoods})`);
console.log(`Missing Hotel Images: ${missingHotels} (Mapped from local: ${mappedHotels})`);
