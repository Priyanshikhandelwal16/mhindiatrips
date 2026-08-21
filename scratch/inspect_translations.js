const fs = require('fs');
const path = require('path');

const statesFilePath = path.join('c:', 'Users', 'dell', 'Downloads', 'MH India Trips', 'src', 'data', 'fallback', 'states.json');
const data = JSON.parse(fs.readFileSync(statesFilePath, 'utf8'));

const state = data.find(s => s.slug === 'rajasthan');
if (state) {
  console.log("State Rajasthan fields:", Object.keys(state));
  console.log("State Rajasthan title:", state.title);
  console.log("State Rajasthan description:", state.description);
  
  if (state.cities && state.cities.length > 0) {
    const city = state.cities[0];
    console.log("City fields:", Object.keys(city));
    console.log("City title:", city.title);
    console.log("City description:", city.description);
    console.log("City overview:", city.overview);
    console.log("City history:", city.history);
  }
}
