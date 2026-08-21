const fs = require('fs');
const path = require('path');

const dbPath = path.join('c:', 'Users', 'dell', 'Downloads', 'MH India Trips', 'src', 'data', 'database.ts');
let content = fs.readFileSync(dbPath, 'utf8');

// Strip interface blocks
content = content.replace(/export interface [\s\S]+?\n}/g, '');

// Strip types like ": string", ": State[]", etc.
// Replace typed function signatures: (stateId: string) =>
content = content.replace(/\((\w+):\s*[^)]+\)/g, '($1)');

// Replace ES module exports with CommonJS exports
content = content.replace(/export const (\w+)(:\s*[A-Za-z0-9_\[\]]+)?\s*=/g, 'exports.$1 =');

// Strip any other export statement at the bottom
content = content.replace(/export { [\s\S]+?};/g, '');

// Save to temp file
const tempJsPath = path.join('c:', 'Users', 'dell', 'Downloads', 'MH India Trips', 'scratch', 'temp_database.js');
fs.writeFileSync(tempJsPath, content, 'utf8');

console.log("Transpiled database.ts to temporary JS.");

// Load the temp JS file
const db = require('./temp_database.js');

console.log("Loaded temporary JS database.");

console.log("States in database.ts:");
console.log(db.states.map(s => ({ id: s.id, slug: s.slug, name: s.name.en })));

console.log("\nDestinations in database.ts:");
console.log(db.destinations.map(d => ({ id: d.id, stateId: d.stateId, slug: d.slug, name: d.name.en })));
