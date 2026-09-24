const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const fallbackDir = path.join(projectRoot, 'src', 'data', 'fallback');

// 1. Get baseline cities from git commit dc199bf
let dc199bfCities = [];
try {
  const jsonStr = execSync('git show dc199bf:src/data/fallback/cities.json').toString();
  dc199bfCities = JSON.parse(jsonStr);
  console.log("Baseline cities from git dc199bf:", dc199bfCities.length);
} catch (e) {
  console.error("Error reading dc199bf cities:", e);
}

// Map by ID
const citiesMap = new Map();
dc199bfCities.forEach(c => {
  if (c && c.id) citiesMap.set(c.id, c);
});

// Also check states.json from dc199bf
let dc199bfStates = [];
try {
  const jsonStr = execSync('git show dc199bf:src/data/fallback/states.json').toString();
  dc199bfStates = JSON.parse(jsonStr);
  console.log("Baseline states from git dc199bf:", dc199bfStates.length);
} catch(e) {}

// Print summary of baseline
console.log(`Initial cities map size: ${citiesMap.size}`);

// Print all city IDs in baseline
console.log("Baseline city IDs:", Array.from(citiesMap.keys()));
