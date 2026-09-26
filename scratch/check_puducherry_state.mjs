import fs from 'fs';

const states = JSON.parse(fs.readFileSync('src/data/fallback/states.json', 'utf8'));

const puducherry = states.find(s => s.id === 'puducherry' || s.id?.includes('puducherry') || s.name?.en?.toLowerCase().includes('puducherry') || s.name?.en?.toLowerCase().includes('pondicherry'));

if (puducherry) {
  console.log('Found Puducherry State:', puducherry.id, puducherry.name?.en);
} else {
  console.log('Puducherry State NOT FOUND in states.json! Available states:', states.map(s => `${s.id} (${s.name?.en})`).join(', '));
}
