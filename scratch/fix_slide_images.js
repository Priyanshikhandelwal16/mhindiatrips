const fs = require('fs');
const path = require('path');

const pagesPath = path.join(__dirname, '..', 'src', 'data', 'fallback', 'pages.json');

const rawPages = fs.readFileSync(pagesPath, 'utf8');
let pages = JSON.parse(rawPages);

const homepageIdx = pages.findIndex(p => p.id === 'homepage');
if (homepageIdx !== -1) {
  const slides = pages[homepageIdx].content.slides;
  
  const hdImages = [
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2800&q=95", // 1 Taj Mahal
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2800&q=95", // 2 Jaipur
    "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=2800&q=95", // 3 Jaisalmer
    "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=2800&q=95", // 4 Udaipur
    "https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=2800&q=95", // 5 Jodhpur
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2800&q=95", // 6 Kerala Backwaters
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2800&q=95", // 7 Munnar
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2800&q=95", // 8 Varanasi
    "https://images.unsplash.com/photo-1609828913642-c55f7659f710?auto=format&fit=crop&w=2800&q=95", // 9 Rann of Kutch
    "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=2800&q=95", // 10 Golden Temple
    "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=2800&q=95", // 11 Khajuraho
    "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2800&q=95", // 12 Ranthambore
    "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=2800&q=95", // 13 Jim Corbett
    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2800&q=95", // 14 Mumbai
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2800&q=95", // 15 Madurai
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2800&q=95", // 16 Goa
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2800&q=95", // 17 Dubai
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2800&q=95", // 18 Maldives
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2800&q=95", // 19 Bali
    "https://images.unsplash.com/photo-1506665531195-3566fe2b4dfa?auto=format&fit=crop&w=2800&q=95"  // 20 Thailand
  ];

  slides.forEach((slide, i) => {
    if (hdImages[i]) {
      slide.image = hdImages[i];
    }
  });

  fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2), 'utf8');
  console.log('Successfully updated pages.json homepage slides with ultra-HD 4K images!');
}
