import fs from "fs";

async function saveHtml() {
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
    fs.writeFileSync("C:\\Users\\dell\\Downloads\\MH India Trips\\scripts\\pinterest-sample.html", html, "utf-8");
    console.log("Saved sample HTML!");
  } catch (err) {
    console.error("Error:", err);
  }
}

saveHtml();
