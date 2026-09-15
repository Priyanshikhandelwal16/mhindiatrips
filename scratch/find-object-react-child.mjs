import fs from "fs";
import path from "path";

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(path.join(process.cwd(), "src"));

console.log(`Scanning ${files.length} ts/tsx files for unextracted multilingual objects in JSX...`);

const patterns = [
  /\{[a-zA-Z0-9_\.]+\.(title|tagline|desc|description|overview|history|culture|localFood|bestTime|quote)\}/g,
  /\{item\}/g,
  /\{hl\}/g,
  /\{inc\}/g,
  /\{exc\}/g,
  /\{bullet\}/g,
  /\{faq\}/g,
  /\{tip\}/g,
  /\{attraction\}/g,
  /\{experience\}/g,
  /\{hotel\}/g
];

files.forEach(file => {
  const content = fs.readFileSync(file, "utf-8");
  const lines = content.split("\n");

  lines.forEach((line, idx) => {
    // Skip comments
    if (line.trim().startsWith("//") || line.trim().startsWith("/*")) return;

    patterns.forEach(pat => {
      let match;
      const regex = new RegExp(pat.source, "g");
      while ((match = regex.exec(line)) !== null) {
        console.log(`${path.relative(process.cwd(), file)}:${idx + 1} -> ${line.trim()}`);
      }
    });
  });
});
