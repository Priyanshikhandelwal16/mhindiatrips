import fs from "fs";

async function testBing() {
  try {
    const query = "Gatte Ki Sabzi";
    const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
    
    console.log("Fetching Bing Images...");
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });
    
    const html = await res.text();
    
    // Look for any image extension (.jpg, .png, .jpeg) url or any string containing "th.bing.com"
    const regex = /"murl":"(https?:\/\/[^"]+)"/g; // Bing images are typically stored in JSON structure like {"murl":"https://..."}
    const urls = [];
    let match;
    while ((match = regex.exec(html)) !== null) {
      urls.push(match[1]);
    }
    
    console.log("JSON murl matches found:", urls.length);
    console.log("Sample murl matches:", urls.slice(0, 10));
  } catch (err) {
    console.error("Error:", err);
  }
}

testBing();
