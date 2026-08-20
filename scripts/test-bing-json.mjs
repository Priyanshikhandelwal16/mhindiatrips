async function test() {
  try {
    const query = "Gatte Ki Sabzi";
    const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      }
    });
    const html = await res.text();
    
    // Bing images metadata is stored in <a class="iusc" m="{...}">
    // Let's use a regex to extract all m attribute values
    const regex = /class="iusc"\s+[^>]*m="([^"]+)"/g;
    const results = [];
    let match;
    while ((match = regex.exec(html)) !== null) {
      try {
        // The attribute is HTML-encoded JSON, so decode it
        const decodedJson = match[1]
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>');
        const meta = JSON.parse(decodedJson);
        results.push(meta);
      } catch (e) {
        // Ignored
      }
    }
    
    console.log("Found metadata items:", results.length);
    if (results.length > 0) {
      console.log("Sample metadata:", results[0]);
    }
  } catch (err) {
    console.error(err);
  }
}

test();
