import fs from 'fs';

const cities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

const targetIds = ['yanam', 'chennai', 'pondicherry-mahe', 'rameshwaram', 'tuticorin', 'vellore', 'kanyakumari', 'madurai', 'pondicherry-karaikal'];
const puducherryCities = ['yanam', 'pondicherry-mahe', 'pondicherry-karaikal'];

let allGood = true;

targetIds.forEach(id => {
  const city = cities.find(c => c.id === id || c.slug?.en === id);
  if (!city) {
    console.error(`ERROR: City ${id} not found!`);
    allGood = false;
    return;
  }

  if (puducherryCities.includes(id)) {
    if (city.stateId !== 'puducherry') {
      console.error(`ERROR: City ${id} stateId is ${city.stateId}, expected 'puducherry'!`);
      allGood = false;
    } else {
      console.log(`PASS: City ${id} stateId is correctly 'puducherry'.`);
    }
  }

  const places = city.touristPlaces || [];
  if (places.length !== 5) {
    console.error(`ERROR: ${id} has ${places.length} places, expected 5!`);
    allGood = false;
  } else {
    console.log(`PASS: ${id} has 5 places.`);
  }

  // Check for HTML tags in tourist places
  places.forEach((p, idx) => {
    ['en', 'es', 'pt'].forEach(lang => {
      const desc = p.description?.[lang] || '';
      if (/<[^>]+>/.test(desc)) {
        console.error(`ERROR: ${id} place #${idx+1} [${lang}] description contains HTML tags: ${desc}`);
        allGood = false;
      }
    });
  });
});

if (allGood) {
  console.log('\n--- ALL VERIFICATION CHECKS PASSED PERFECTLY ---');
} else {
  console.error('\n--- VERIFICATION FAILED ---');
  process.exit(1);
}
