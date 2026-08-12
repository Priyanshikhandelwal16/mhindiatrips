/**
 * Generates states.json from TypeScript source data.
 * Imports mockData and additionalData, merges, and saves.
 * Run: node scripts/generate-states-json.mjs
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const FALLBACK_DIR = path.join(process.cwd(), "src", "data", "fallback");
if (!fs.existsSync(FALLBACK_DIR)) fs.mkdirSync(FALLBACK_DIR, { recursive: true });

// Use tsx to run a TS extraction script
const extractScript = `
import { statesData } from "./src/data/mockData";
import { additionalStates } from "./src/data/additionalData";
const merged = [...statesData, ...additionalStates];
process.stdout.write(JSON.stringify(merged));
`;

const tmpFile = path.join(process.cwd(), "_tmp_extract.ts");
fs.writeFileSync(tmpFile, extractScript);

try {
  const result = execSync("npx tsx _tmp_extract.ts", { encoding: "utf-8", maxBuffer: 50 * 1024 * 1024 });
  const states = JSON.parse(result);
  const outFile = path.join(FALLBACK_DIR, "states.json");
  fs.writeFileSync(outFile, JSON.stringify(states, null, 2), "utf-8");
  console.log(`Generated states.json with ${states.length} states.`);
} catch (e) {
  console.error("Error:", e.message);
} finally {
  fs.unlinkSync(tmpFile);
}
