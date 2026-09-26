import fs from 'fs';
import path from 'path';

const citiesPath = path.join(process.cwd(), 'src', 'data', 'fallback', 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

const targetStates = ['rajasthan', 'kerala', 'maharashtra', 'tamil-nadu', 'madhya-pradesh'];

for (const stateId of targetStates) {
  console.log(`\n=================== STATE: ${stateId.toUpperCase()} ===================`);
  const stateCities = cities.filter(c => c.stateId === stateId);
  for (const c of stateCities) {
    console.log(`\nCity: [${c.id}] ${c.name?.en || c.name}`);
    console.log(`  City Image: ${c.image ? c.image.slice(0, 60) + '...' : 'MISSING'}`);
    const tps = Array.isArray(c.touristPlaces) ? c.touristPlaces : [];
    console.log(`  Tourist Places Count: ${tps.length}`);
    tps.forEach((tp, idx) => {
      const name = typeof tp.name === 'object' ? (tp.name.en || tp.name.es || tp.name.pt) : tp.name;
      const img = tp.image || tp.img;
      const desc = typeof tp.description === 'object' ? (tp.description.en || tp.description.es) : (tp.description || tp.desc);
      console.log(`    ${idx + 1}. Name: "${name}" | Img: ${img ? 'YES (' + img.slice(0, 40) + '...)' : 'NO'} | Desc: ${desc ? desc.slice(0, 50) + '...' : 'NO'}`);
    });
  }
}
