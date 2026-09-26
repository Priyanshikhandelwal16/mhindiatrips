import fs from 'fs';

const cities = JSON.parse(fs.readFileSync('src/data/fallback/cities.json', 'utf8'));

const targetIds = ['nashik', 'amravati', 'solapur', 'jamnagar', 'thane', 'pune', 'nagpur', 'mumbai'];

let allGood = true;

targetIds.forEach(id => {
  const city = cities.find(c => c.id === id || c.slug?.en === id);
  if (!city) {
    console.error(`ERROR: City ${id} not found!`);
    allGood = false;
    return;
  }

  if (id === 'jamnagar') {
    if (city.stateId !== 'gujarat') {
      console.error(`ERROR: Jamnagar stateId is ${city.stateId}, expected 'gujarat'!`);
      allGood = false;
    } else {
      console.log(`PASS: Jamnagar stateId is correctly 'gujarat'.`);
    }
  }

  const places = city.touristPlaces || [];
  if (places.length !== 5) {
    console.error(`ERROR: ${id} has ${places.length} places, expected 5!`);
    allGood = false;
  } else {
    console.log(`PASS: ${id} has 5 places.`);
  }

  // Check for HTML tags
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
