const fs = require('fs');
const path = require('path');

const blogsPath = 'c:/Users/dell/Downloads/MH India Trips/src/data/fallback/blogs.json';
if (fs.existsSync(blogsPath)) {
  const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf-8'));
  console.log("TOTAL LOCAL FALLBACK BLOGS:", blogs.length);
  blogs.forEach((b, idx) => {
    console.log(`\n--- LOCAL BLOG ${idx+1}: ${b.slug} ---`);
    console.log("Title (en):", b.title?.en || "null");
    console.log("Is Deleted:", b.isDeleted);
    console.log("Content keys/type:", typeof b.content, b.content ? Object.keys(b.content) : "null");
    if (b.content) {
      if (typeof b.content === "object") {
        Object.keys(b.content).forEach(lang => {
          const val = b.content[lang] || "";
          console.log(`  Content [${lang}]: length=${val.length}, preview="${val.substring(0, 100).replace(/\n/g, ' ')}..."`);
        });
      } else {
        console.log(`  Content (string): length=${String(b.content).length}, preview="${String(b.content).substring(0, 100).replace(/\n/g, ' ')}..."`);
      }
    }
  });
} else {
  console.log("blogs.json not found at", blogsPath);
}
