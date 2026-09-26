import fs from 'fs';

const cities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

const targetQueries = ['yanam', 'chennai', 'mahe', 'pondicherry-mahe', 'rameshwaram', 'tuticorin', 'thoothukudi', 'vellore', 'kanyakumari', 'madurai', 'karaikal', 'pondicherry-karaikal'];

console.log('--- MATCHING CITIES IN FALLBACK DATA ---');
for (const q of targetQueries) {
  const match = cities.find(c => c.id === q || c.slug?.en === q || c.name?.en?.toLowerCase().includes(q));
  if (match) {
    console.log(`Query: ${q} => ID: ${match.id}, Name: ${match.name?.en}, StateId: ${match.stateId}`);
  } else {
    console.log(`Query: ${q} => NOT FOUND`);
  }
}
