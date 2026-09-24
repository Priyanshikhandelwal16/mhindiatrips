const fs = require('fs');
const path = require('path');

const scriptsDir = path.join(__dirname);

// Let's inspect states.json from commit dc199bf vs current states.json
const { execSync } = require('child_process');

let dc199bfStates = [];
try {
  dc199bfStates = JSON.parse(execSync('git show dc199bf:src/data/fallback/states.json').toString());
} catch(e) {}

console.log("dc199bf states count:", dc199bfStates.length);

let totalCitiesCount = 0;
dc199bfStates.forEach(s => {
  if (s.cities) {
    console.log(`State: ${s.id} (${s.name?.en || s.name}) -> embedded cities: ${s.cities.length}`);
    totalCitiesCount += s.cities.length;
  }
});
console.log("Total cities inside dc199bf states.json:", totalCitiesCount);
