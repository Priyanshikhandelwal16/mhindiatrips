const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/en/destinations-in-india/rajasthan',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  
  let body = '';
  res.on('data', (chunk) => {
    body += chunk;
  });
  
  res.on('end', () => {
    console.log("Raw HTML body:", body.substring(0, 1000));
    process.exit(0);
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
  process.exit(1);
});

req.end();
