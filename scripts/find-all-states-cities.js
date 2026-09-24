const fs = require('fs');
const path = require('path');

// Inspect mockData.ts and additionalData.ts
const mockDataText = fs.readFileSync('src/data/mockData.ts', 'utf8');
const addDataText = fs.readFileSync('src/data/additionalData.ts', 'utf8');

// Find all state IDs or names
const mockStateIds = [...mockDataText.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);
const addStateIds = [...addDataText.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);

console.log("Mock data IDs count:", mockStateIds.length);
console.log("Additional data IDs count:", addStateIds.length);

// Let's check update scripts in scripts folder
const scripts = fs.readdirSync('scripts');
let totalScriptCities = [];

scripts.forEach(s => {
  if (s.startsWith('update-') && s.endsWith('.js')) {
    const text = fs.readFileSync('scripts/' + s, 'utf8');
    const matches = [...text.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);
    console.log(`Script ${s}: ${matches.length} IDs`);
  }
});
