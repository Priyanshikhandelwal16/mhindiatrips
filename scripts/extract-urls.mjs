import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.join(process.cwd(), "scripts", "pinterest-sample.html"), "utf-8");
console.log("HTML length:", html.length);

const regex = /https?:\/\/[^\s"'<>\(\)]+/g;
const urls = html.match(regex) || [];
console.log("Total URLs found:", urls.length);

const imgUrls = urls.filter(u => u.includes(".jpg") || u.includes(".png") || u.includes(".webp") || u.includes("pinimg"));
console.log("Image/Pinimg URLs found:", imgUrls.length);
console.log("Samples:", imgUrls.slice(0, 10));
