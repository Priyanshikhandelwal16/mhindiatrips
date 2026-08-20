import fs from "fs";
import path from "path";

const htmlPath = path.join(process.cwd(), "scripts", "pinterest-sample.html");
if (!fs.existsSync(htmlPath)) {
  console.log("HTML file not found!");
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, "utf-8");

// Look for __PWS_DATA__ or any JSON script tag
const pwsMatch = html.match(/<script[^>]+id="initial-state"[^>]*>([\s\S]*?)<\/script>/i) || 
                 html.match(/<script[^>]+id="__PWS_DATA__"[^>]*>([\s\S]*?)<\/script>/i) ||
                 html.match(/<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/i);

if (pwsMatch) {
  console.log("Found JSON script tag!");
  const jsonText = pwsMatch[1].trim();
  console.log("JSON Length:", jsonText.length);
  try {
    const data = JSON.parse(jsonText);
    console.log("JSON parsed successfully!");
    // Dump top level keys
    console.log("Keys:", Object.keys(data).slice(0, 10));
    
    // Write sample to verify
    fs.writeFileSync(path.join(process.cwd(), "scripts", "pinterest-json.json"), JSON.stringify(data, null, 2), "utf-8");
    console.log("Saved JSON to scripts/pinterest-json.json");
  } catch (err) {
    console.error("Error parsing JSON:", err.message);
  }
} else {
  console.log("No JSON script tag found!");
}
