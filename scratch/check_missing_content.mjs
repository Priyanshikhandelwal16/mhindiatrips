import fs from 'fs';

const currentCities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

const targetStates = ['rajasthan', 'kerala', 'madhya-pradesh', 'maharashtra', 'gujarat'];

console.log('--- CITIES WITHOUT CONTENT IN TARGET STATES ---');
const missing = currentCities.filter(c => targetStates.includes(c.stateId) && (!c.content || !c.content.en));

for (const c of missing) {
  console.log(`ID: ${c.id}, Name: ${c.name?.en || c.id}, State: ${c.stateId}`);
}
console.log('Total missing content:', missing.length);
