import fs from 'fs';
import { execSync } from 'child_process';

const currentCities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));
const headCitiesJson = execSync('git show HEAD:src/data/fallback/cities.json', { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
const headCities = JSON.parse(headCitiesJson);

console.log('Total head cities:', headCities.length);
console.log('Total current cities:', currentCities.length);

let diffCount = 0;
for (const c of headCities) {
  const cur = currentCities.find(x => x.id === c.id);
  if (cur) {
    const headDesc = c.description;
    const curDesc = cur.description;
    if (JSON.stringify(headDesc) !== JSON.stringify(curDesc)) {
      console.log(`\n--- City ID: ${c.id} (${c.name?.en}) ---`);
      console.log('HEAD Description:', JSON.stringify(headDesc, null, 2));
      console.log('CUR Description:', JSON.stringify(curDesc, null, 2));
      diffCount++;
    }
  }
}
console.log(`\nTotal cities with description diff: ${diffCount}`);
