import fs from 'fs';
import path from 'path';

const citiesPath = path.join(process.cwd(), 'src', 'data', 'fallback', 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

const goaIds = ['panaji', 'margao', 'vasco-da-gama', 'mapusa', 'ponda', 'bicholim', 'pernem'];

let updatedCount = 0;
for (const city of cities) {
  if (goaIds.includes(city.id)) {
    const descObj = city.fullDescription || city.overview || city.content;
    if (descObj) {
      city.overview = descObj;
      city.fullDescription = descObj;
      city.content = descObj;
      city.updatedAt = new Date().toISOString();
      updatedCount++;
    }
  }
}

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf8');
console.log(`Updated content, overview, fullDescription, and updatedAt for ${updatedCount} Goa cities in cities.json.`);
