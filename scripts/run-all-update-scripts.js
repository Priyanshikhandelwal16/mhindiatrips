const fs = require('fs');
const path = require('path');

const updateFiles = [
  'update-rajasthan-cities.js',
  'update-kerala-cities.js',
  'update-up-cities-full.js',
  'update-mp-cities.js',
  'update-mh-cities.js',
  'update-tn-cities.js',
  'update-goa-cities-user.js',
  'update-hp-cities.js',
  'update-ka-cities.js',
  'update-user-cities.js',
  'update-more-states-cities.js',
  'update-multistate-cities.js'
];

let mockStates = {};

// We can read each script file and see what state IDs and city IDs are updated
updateFiles.forEach(file => {
  const p = path.join(__dirname, file);
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');

  // find keys in updateStateCities
  const stateMatch = content.match(/updateStateCities\s*\(\s*["']([^"']+)["']/g);
  if (stateMatch) {
    stateMatch.forEach(m => {
      const sId = m.match(/["']([^"']+)["']/)[1];
      console.log(`File ${file} updates state: ${sId}`);
    });
  }
});
