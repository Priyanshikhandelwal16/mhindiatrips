import fs from 'fs';
import { execSync } from 'child_process';

const currentCities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

// Fetch cities from commit dc199bf where content existed for original 54 cities
const oldJsonStr = execSync('git show dc199bf:src/data/fallback/cities.json', { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
const oldCities = JSON.parse(oldJsonStr);

console.log('Old cities count:', oldCities.length);

let restoredCount = 0;

for (const oldC of oldCities) {
  if (oldC.content && (oldC.content.en || oldC.content.es || oldC.content.pt)) {
    const cur = currentCities.find(x => x.id === oldC.id);
    if (cur) {
      cur.content = oldC.content;
      restoredCount++;
      console.log(`Restored content for city: ${cur.id} (${cur.name?.en}) - EN length: ${cur.content.en?.length}`);
    } else {
      console.log(`City in old commit not found in current: ${oldC.id}`);
    }
  }
}

console.log(`\nTotal cities with restored content: ${restoredCount}`);

fs.writeFileSync('src/data/fallback/cities.json', JSON.stringify(currentCities, null, 2), 'utf8');
console.log('Saved updated cities to src/data/fallback/cities.json');
