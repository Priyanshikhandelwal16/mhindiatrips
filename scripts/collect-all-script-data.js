const fs = require('fs');
const path = require('path');

// Let's create a script that extracts all cities and states from all update scripts
const updateFiles = fs.readdirSync(path.join(__dirname)).filter(f => f.startsWith('update-') && (f.endsWith('.js') || f.endsWith('.mjs')));

console.log("Found update scripts:", updateFiles);

let allCityObjects = [];
let allStateIds = new Set();

updateFiles.forEach(file => {
  const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
  
  // Find city details object patterns like "id": "..." or "cityId": "..." or object keys
  const cityKeyMatches = [...content.matchAll(/["']([a-z0-9-]+Details|details|city)["']\s*:\s*\{/gi)];
  
  // Find state IDs
  const stateMatches = [...content.matchAll(/updateStateCities\s*\(\s*["']([^"']+)["']/gi)];
  stateMatches.forEach(m => allStateIds.add(m[1]));
});

console.log("\nTotal Unique States Found in Update Scripts:", allStateIds.size);
console.log("States:", Array.from(allStateIds));
