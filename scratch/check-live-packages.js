const https = require('https');

https.get('https://mhindiatrips.netlify.app/en/packages', (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    // Search for package titles
    const matches = [...body.matchAll(/<h3[^>]*>([^<]+)<\/h3>/gi)];
    console.log(`Found ${matches.length} package titles in HTML:`);
    matches.slice(0, 15).forEach((m, idx) => {
      console.log(`${idx + 1}: ${m[1].trim()}`);
    });
    process.exit(0);
  });
}).on('error', (e) => {
  console.error("Error fetching live packages:", e);
  process.exit(1);
});
