import fs from 'fs';

const cities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));
const nashik = cities.find(c => c.id === 'nashik');
console.log('Nashik keys:', Object.keys(nashik));
if (nashik.touristPlaces && nashik.touristPlaces.length > 0) {
  console.log('Sample tourist place:', JSON.stringify(nashik.touristPlaces[0], null, 2));
}
