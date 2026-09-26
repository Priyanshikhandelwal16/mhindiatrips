import fs from 'fs';
import path from 'path';

const citiesPath = path.join(process.cwd(), 'src', 'data', 'fallback', 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

console.log(`Total Cities in fallback: ${cities.length}`);

const statesMap = {};
for (const city of cities) {
  statesMap[city.stateId] = (statesMap[city.stateId] || 0) + 1;
}

console.log("City counts per state:", statesMap);
