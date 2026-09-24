const fs = require('fs');
const path = require('path');

const scriptsDir = path.join(__dirname);
const files = fs.readdirSync(scriptsDir);

console.log("Analyzing scripts for cities...");

let totalFoundCities = [];

files.forEach(file => {
  if ((file.startsWith('update-') || file.startsWith('populate-')) && (file.endsWith('.js') || file.endsWith('.mjs'))) {
    const content = fs.readFileSync(path.join(scriptsDir, file), 'utf8');
    
    // Look for city objects in JS arrays or JSON
    const stateMatches = content.match(/stateId:\s*["']([^"']+)["']/g);
    const idMatches = content.match(/id:\s*["']([^"']+)["']/g);

    if (stateMatches || idMatches) {
      console.log(`File: ${file} | stateId matches: ${stateMatches ? stateMatches.length : 0} | id matches: ${idMatches ? idMatches.length : 0}`);
    }
  }
});
