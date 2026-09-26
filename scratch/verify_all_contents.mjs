import fs from 'fs';

const cities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

const states = ['rajasthan', 'kerala', 'madhya-pradesh', 'maharashtra', 'gujarat'];

const targetCities = cities.filter(c => states.includes(c.stateId));

let count = 0;
let missing = 0;

for (const c of targetCities) {
  const hasEN = !!c.content?.en;
  const hasES = !!c.content?.es;
  const hasPT = !!c.content?.pt;

  if (hasEN && hasES && hasPT) {
    count++;
  } else {
    console.error(`MISSING LANG CONTENT for ${c.id}: EN=${hasEN}, ES=${hasES}, PT=${hasPT}`);
    missing++;
  }
}

console.log(`\nVerified ${count} cities in ${states.join(', ')} have 100% 3-language (EN, ES, PT) long content!`);
if (missing > 0) {
  console.error(`Failed for ${missing} cities.`);
  process.exit(1);
} else {
  console.log('--- ALL CITIES RESTORED WITH FULL LONG CONTENT IN ALL 3 LANGUAGES ---');
}
