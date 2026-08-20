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

function cleanString(str) {
  if (!str) return "";
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

let missingStates = 0;
let missingCities = 0;
let missingAttractions = 0;
let missingFoods = 0;
let missingHotels = 0;

let mappedStates = 0;
let mappedCities = 0;
let mappedAttractions = 0;
let mappedFoods = 0;
let mappedHotels = 0;

const missingItemsList = [];

for (const state of states) {
  const stateName = state.title?.en || state.title || "";
  const cleanedStateName = cleanString(stateName);
  
  let stateHasImg = false;
  for (const ext of [".jpg", ".png", ".jpeg"]) {
    if (localImages.has((stateName + ext).toLowerCase()) || localImages.has((state.slug + ext).toLowerCase())) {
      stateHasImg = true;
      break;
    }
  }

  if (stateHasImg) {
    mappedStates++;
  } else if (!state.image || state.image === "") {
    missingStates++;
  }

  if (state.cities) {
    for (const city of state.cities) {
      const cityName = city.name?.en || city.name || city.title?.en || city.title || "";
      const cleanedCityName = cleanString(cityName);
      
      let cityHasImg = false;
      for (const ext of [".jpg", ".png", ".jpeg"]) {
        if (localImages.has((cityName + ext).toLowerCase()) || localImages.has((city.slug + ext).toLowerCase())) {
          cityHasImg = true;
          break;
        }
      }

      if (cityHasImg) {
        mappedCities++;
      } else if (!city.image || city.image === "") {
        missingCities++;
      }

      if (city.attractions) {
        for (const attr of city.attractions) {
          const attrName = attr.name?.en || attr.name || "";
          let found = false;
          for (const ext of [".jpg", ".png", ".jpeg"]) {
            if (localImages.has((attrName + ext).toLowerCase())) {
              found = true;
              break;
            }
          }
          
          if (found) {
            mappedAttractions++;
          } else if (!attr.image || attr.image === "") {
            missingAttractions++;
            missingItemsList.push({ type: "Attraction", state: state.slug, city: city.slug, name: attrName });
          }
        }
      }

      if (city.localFoodDishes) {
        for (const food of city.localFoodDishes) {
          const foodName = food.name?.en || food.name || "";
          let found = false;
          for (const ext of [".jpg", ".png", ".jpeg"]) {
            if (localImages.has((foodName + ext).toLowerCase())) {
              found = true;
              break;
            }
          }
          
          if (found) {
            mappedFoods++;
          } else if (!food.image || food.image === "") {
            missingFoods++;
            missingItemsList.push({ type: "Food", state: state.slug, city: city.slug, name: foodName });
          }
        }
      }

      if (city.hotels) {
        for (const hotel of city.hotels) {
          const hotelName = hotel.name?.en || hotel.name || "";
          let found = false;
          for (const ext of [".jpg", ".png", ".jpeg"]) {
            if (localImages.has((hotelName + ext).toLowerCase())) {
              found = true;
              break;
            }
          }
          
          if (found) {
            mappedHotels++;
          } else if (!hotel.image || hotel.image === "") {
            missingHotels++;
            missingItemsList.push({ type: "Hotel", state: state.slug, city: city.slug, name: hotelName });
          }
        }
      }
    }
  }
}

console.log("\n--- STATISTICS V2 ---");
console.log(`State Images: Missing ${missingStates}, Mapped ${mappedStates}`);
console.log(`City Images: Missing ${missingCities}, Mapped ${mappedCities}`);
console.log(`Attraction Images: Missing ${missingAttractions}, Mapped ${mappedAttractions}`);
console.log(`Food Images: Missing ${missingFoods}, Mapped ${mappedFoods}`);
console.log(`Hotel Images: Missing ${missingHotels}, Mapped ${mappedHotels}`);

console.log(`\nTotal Missing Items: ${missingItemsList.length}`);
console.log("First 15 missing items:");
console.log(missingItemsList.slice(0, 15));
fs.writeFileSync(path.join(projectRoot, "scripts", "missing-items.json"), JSON.stringify(missingItemsList, null, 2), "utf-8");
