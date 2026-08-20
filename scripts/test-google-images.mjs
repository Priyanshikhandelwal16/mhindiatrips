async function testGoogleImages() {
  try {
    const query = "Gatte Ki Sabzi";
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`;
    
    console.log("Fetching Google Images search page...");
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });
    
    const html = await res.text();
    console.log("HTML length:", html.length);
    
    // Google Images search results typically have img tags with src starting with https://encrypted-tbn0.gstatic.com/images?
    const regex = /https:\/\/encrypted-tbn0\.gstatic\.com\/images\?[^\s"'<>]+/g;
    const matches = html.match(regex) || [];
    
    console.log("Matches found:", matches.length);
    console.log("Sample matches:", matches.slice(0, 5));
  } catch (err) {
    console.error("Error:", err);
  }
}

testGoogleImages();
