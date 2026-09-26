import fs from 'fs';
import { execSync } from 'child_process';

// Get git commit history for src/data/fallback/cities.json
const log = execSync('git log --oneline -n 20 src/data/fallback/cities.json', { encoding: 'utf8' });
console.log('Git log for cities.json:\n', log);

const currentCities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

const statesOfConcern = ['rajasthan', 'kerala', 'madhya-pradesh', 'maharashtra', 'gujarat'];

const targetCities = currentCities.filter(c => statesOfConcern.includes(c.stateId));

console.log('\nTarget Cities in concern states count:', targetCities.length);

for (const c of targetCities) {
  console.log(`\nID: ${c.id}, Name: ${c.name?.en}, StateId: ${c.stateId}`);
  console.log('Description:', JSON.stringify(c.description));
  console.log('Content:', c.content ? Object.keys(c.content) : 'none');
}
