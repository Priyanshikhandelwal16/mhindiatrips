import fs from 'fs';
import path from 'path';

const citiesPath = path.join(process.cwd(), 'src', 'data', 'fallback', 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

console.log(`Total cities: ${cities.length}`);

for (const city of cities) {
  const tpCount = Array.isArray(city.touristPlaces) ? city.touristPlaces.length : 0;
  console.log(`City ID: ${city.id} (${city.stateId}) -> Image: ${!!city.image}, TouristPlaces count: ${tpCount}`);
  if (tpCount > 0) {
    city.touristPlaces.forEach((tp, idx) => {
      console.log(`   - TP ${idx + 1}: ${tp.name?.en || tp.name?.es || tp.name} | Img: ${!!tp.image || !!tp.img}`);
    });
  }
}
