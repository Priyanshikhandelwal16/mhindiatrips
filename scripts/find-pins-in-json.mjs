import fs from "fs";
import path from "path";

const jsonPath = path.join(process.cwd(), "scripts", "pinterest-json.json");
const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

// Recurse object to find pin objects or urls
const foundUrls = [];

function recurse(obj) {
  if (!obj) return;
  if (typeof obj === "string") {
    if (obj.includes("i.pinimg.com") && (obj.includes("/736x/") || obj.includes("/564x/"))) {
      foundUrls.push(obj);
    }
    return;
  }
  if (Array.isArray(obj)) {
    for (const item of obj) {
      recurse(item);
    }
  } else if (typeof obj === "object") {
    for (const key of Object.keys(obj)) {
      recurse(obj[key]);
    }
  }
}

recurse(data);
console.log("Found pinimg URLs inside JSON:", foundUrls.length);
console.log("Unique pinimg URLs inside JSON:", [...new Set(foundUrls)].length);
console.log("Sample URLs:", [...new Set(foundUrls)].slice(0, 10));
