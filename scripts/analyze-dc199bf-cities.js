const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

try {
  const gitCitiesJson = execSync('git show dc199bf:src/data/fallback/cities.json').toString();
  const gitCities = JSON.parse(gitCitiesJson);
  console.log(`Cities in git dc199bf: ${gitCities.length}`);
  
  const gitStatesJson = execSync('git show dc199bf:src/data/fallback/states.json').toString();
  const gitStates = JSON.parse(gitStatesJson);
  console.log(`States in git dc199bf: ${gitStates.length}`);

  const byState = {};
  gitCities.forEach(c => {
    byState[c.stateId] = (byState[c.stateId] || 0) + 1;
  });
  console.log("Cities count by state in git dc199bf:\n", JSON.stringify(byState, null, 2));

  // Print all state IDs and city IDs in dc199bf
  console.log("\nDetailed list of cities in dc199bf:");
  gitCities.forEach(c => {
    console.log(`[${c.stateId}] id: ${c.id} | name: ${c.name?.en || c.name} | touristPlaces: ${c.touristPlaces ? c.touristPlaces.length : 0}`);
  });

} catch (err) {
  console.error("Error reading git commit:", err);
}
