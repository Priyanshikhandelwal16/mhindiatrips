import fs from "fs";

async function test() {
  const query = "Gatte Ki Sabzi";
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    }
  });
  const html = await res.text();
  
  // Find all matches for tse*.mm.bing.net/th?id= or similar
  const regex = /https:\/\/tse[0-9]\.mm\.bing\.net\/th\/id\/[a-zA-Z0-9._-]+/g;
  const matches = html.match(regex) || [];
  
  console.log("Large Bing Image matches found:", matches.length);
  console.log("Sample:", [...new Set(matches)].slice(0, 10));
}

test();
