const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'src', 'app', 'globals.css');
let content = fs.readFileSync(cssPath, 'utf8');

const blogCssRules = `

/* === LUXURY BLOG TYPOGRAPHY & UNCROPPED IMAGE STYLING === */
.blog-content-rich img,
.blog-content-rich figure img,
article img {
  border-radius: 1.5rem !important;
  margin: 2.5rem auto !important;
  box-shadow: 0 20px 45px rgba(10, 42, 30, 0.15) !important;
  max-width: 100% !important;
  max-height: 580px !important;
  object-fit: contain !important;
  border: 2px solid rgba(197, 168, 98, 0.3) !important;
  display: block !important;
  background-color: #0A2A1E !important;
}

.blog-content-rich h2 {
  font-family: var(--font-serif), Georgia, serif !important;
  font-size: 1.95rem !important;
  font-weight: 800 !important;
  color: #0A2A1E !important;
  border-left: 4px solid #C5A862 !important;
  padding-left: 1rem !important;
  margin-top: 3rem !important;
  margin-bottom: 1.25rem !important;
  line-height: 1.3 !important;
}

.blog-content-rich h3 {
  font-family: var(--font-serif), Georgia, serif !important;
  font-size: 1.5rem !important;
  font-weight: 750 !important;
  color: #0A2A1E !important;
  margin-top: 2.25rem !important;
  margin-bottom: 1rem !important;
  line-height: 1.35 !important;
}

.blog-content-rich p {
  font-size: 1.1rem !important;
  line-height: 1.95 !important;
  color: rgba(27, 27, 27, 0.88) !important;
  font-weight: 300 !important;
  margin-bottom: 1.75rem !important;
}

.blog-content-rich ul li::marker,
.blog-content-rich ol li::marker {
  color: #C5A862 !important;
  font-weight: bold !important;
}
`;

if (!content.includes('LUXURY BLOG TYPOGRAPHY & UNCROPPED IMAGE STYLING')) {
  fs.appendFileSync(cssPath, blogCssRules, 'utf8');
  console.log('Successfully appended blog CSS rules to globals.css');
} else {
  console.log('Blog CSS rules already present');
}
