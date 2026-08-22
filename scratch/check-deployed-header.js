const https = require('https');

https.get('https://mhindiatrips.netlify.app/en', (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    // Search for header tag
    const headerMatch = body.match(/<header[^>]*>/i);
    if (headerMatch) {
      console.log("Deployed header tag:", headerMatch[0]);
    } else {
      console.log("Header tag not found in HTML!");
    }
    
    // Search for title tag
    const titleMatch = body.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      console.log("Page Title:", titleMatch[1]);
    }
    
    // Check if the page body contains "Explore Diverse Horizons"
    console.log("Contains 'Explore Diverse Horizons':", body.includes("Explore Diverse Horizons"));
    console.log("Contains 'Destinations in India':", body.includes("Destinations in India"));
    process.exit(0);
  });
}).on('error', (e) => {
  console.error("Error fetching live site:", e);
  process.exit(1);
});
