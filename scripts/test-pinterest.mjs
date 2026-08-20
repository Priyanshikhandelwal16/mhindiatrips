import fs from "fs";

async function testPinterest() {
  try {
    const query = "Bara Imambara Lucknow";
    const url = `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}`;
    
    console.log("Fetching Pinterest search page...");
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });
    
    const html = await res.text();
    
    // Find all occurrences of "pinimg.com"
    let index = 0;
    let count = 0;
    while ((index = html.indexOf("pinimg.com", index)) !== -1) {
      count++;
      // Print context around the match
      const start = Math.max(0, index - 100);
      const end = Math.min(html.length, index + 200);
      console.log(`Match ${count}:`, html.substring(start, end));
      index += "pinimg.com".length;
      if (count >= 5) break;
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

testPinterest();
