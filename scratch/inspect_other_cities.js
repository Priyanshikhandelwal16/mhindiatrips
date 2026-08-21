const fs = require('fs');
const path = require('path');

const statesFilePath = path.join('c:', 'Users', 'dell', 'Downloads', 'MH India Trips', 'src', 'data', 'fallback', 'states.json');
const data = JSON.parse(fs.readFileSync(statesFilePath, 'utf8'));

const targetSlugs = [
  'pushkar', 'ranthambore', 'mount-abu', 'sariska',
  'kasargod', 'kottayam', 'kollam', 'thrissur', 'thekkady', 'kochi',
  'pachmarhi', 'dhar', 'jabalpur', 'pench', 'kanha', 'gwalior',
  'salem', 'yanam', 'pondicherry', 'rameshwaram', 'tuticorin', 'vellore', 'kanyakumari',
  'mathura', 'kanpur', 'jhansi', 'allahabad', 'prayagraj', 'aligarh',
  'kolhapur', 'amravati', 'solapur', 'jamnagar', 'thane', 'nagpur'
];

targetSlugs.forEach(slug => {
  let found = false;
  // Search in states
  data.forEach(s => {
    if (s.slug === slug) {
      console.log(`Found state with slug: ${slug} (title: ${s.title.en})`);
      found = true;
    }
    // Search in cities
    s.cities?.forEach(c => {
      if (c.slug === slug || c.slug.includes(slug)) {
        console.log(`Found city with slug: ${c.slug} under state: ${s.slug} (title: ${c.title.en})`);
        found = true;
      }
    });
  });
  
  if (!found) {
    // Search raw string in whole file
    const txt = JSON.stringify(data).toLowerCase();
    const count = (txt.match(new RegExp(slug, 'g')) || []).length;
    if (count > 0) {
      console.log(`Slug '${slug}' not matching direct object but mentioned in file ${count} times.`);
    }
  }
});
