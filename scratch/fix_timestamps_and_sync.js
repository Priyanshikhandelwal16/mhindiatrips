const fs = require('fs');
const path = require('path');

const citiesPath = path.join(__dirname, '..', 'src', 'data', 'fallback', 'cities.json');
let cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

const now = new Date().toISOString();

cities = cities.map(city => {
  if (city.stateId === 'uttar-pradesh') {
    return {
      ...city,
      updatedAt: now
    };
  }
  return city;
});

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf-8');
console.log(`Updated updatedAt timestamp (${now}) for all Uttar Pradesh cities in cities.json.`);
