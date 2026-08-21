const fs = require('fs');
const path = require('path');

const dbPath = path.join('c:', 'Users', 'dell', 'Downloads', 'MH India Trips', 'src', 'data', 'database.ts');
const txt = fs.readFileSync(dbPath, 'utf8');

// Find all export const declarations
const matches = txt.matchAll(/export const (\w+):/g);
console.log("Exported variables:");
for (const match of matches) {
  console.log(` - ${match[1]}`);
}

// Let's check if we can run ts-node or just parse the JS arrays using a simple trick
// Since database.ts is TypeScript, let's write a script that transpiles it or reads the content of the exported arrays
