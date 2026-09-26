import fs from 'fs';

const cities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

const jaipur = cities.find(c => c.id === 'jaipur');
console.log('--- JAIPUR CONTENT SAMPLE (EN) ---');
console.log(jaipur.content?.en?.substring(0, 500));

console.log('\n--- JAIPUR CONTENT SAMPLE (ES) ---');
console.log(jaipur.content?.es?.substring(0, 500));

console.log('\n--- JAIPUR CONTENT SAMPLE (PT) ---');
console.log(jaipur.content?.pt?.substring(0, 500));
