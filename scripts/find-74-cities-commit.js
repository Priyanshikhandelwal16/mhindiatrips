const { execSync } = require('child_process');

const commitsRaw = execSync('git log --format="%H %s" -- src/data/fallback/cities.json').toString().trim().split('\n');

console.log("Found", commitsRaw.length, "commits modifying src/data/fallback/cities.json");

commitsRaw.forEach(line => {
  if (!line.trim()) return;
  const spaceIdx = line.indexOf(' ');
  const hash = line.substring(0, spaceIdx);
  const msg = line.substring(spaceIdx + 1);

  try {
    const jsonStr = execSync(`git show ${hash}:src/data/fallback/cities.json`).toString();
    const data = JSON.parse(jsonStr);
    console.log(`Commit ${hash.slice(0, 7)} -> Cities: ${data.length} | States: ${new Set(data.map(c => c.stateId)).size} | Msg: ${msg}`);
  } catch (e) {
    console.log(`Commit ${hash.slice(0, 7)} -> Error reading file | Msg: ${msg}`);
  }
});
