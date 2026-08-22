const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'data', 'fallback', 'pages.json');
let pages = JSON.parse(fs.readFileSync(file, 'utf8'));

// Filter out old plan-your-trip
pages = pages.filter(p => p.id !== 'plan-your-trip');

const newPages = [
  {
    id: "attractions",
    isCustom: false,
    title: { en: "Attractions", es: "Atracciones", pt: "Atrações" },
    heroImage: "/images/rajasthan_fort_sunset.png",
    content: {
      heroTitle: { en: "Top Attractions in India", es: "Principales Atracciones en la India", pt: "Principais Atrações na Índia" },
      heroSubtitle: { en: "Explore India's most breathtaking sites, temples, and palaces", es: "Explore los sitios, templos y palacios más impresionantes de la India", pt: "Explore os locais, templos e palácios mais impressionantes da Índia" },
      featuredAttractions: [
        { name: "Taj Mahal", city: "Agra", state: "Uttar Pradesh", image: "/images/taj_mahal_sunrise.png", desc: "The legendary white marble monument of love, a UNESCO World Heritage site and global icon." },
        { name: "Amber Fort", city: "Jaipur", state: "Rajasthan", image: "/images/Jaipur.jpg", desc: "A magnificent hilltop fortress featuring detailed royal palace halls, courts, and lake views." },
        { name: "Mehrangarh Fort", city: "Jodhpur", state: "Rajasthan", image: "/images/rajasthan_fort_sunset.png", desc: "A massive fort overlooking the Blue City, housing royal relics, courtyards, and palace galleries." },
        { name: "Kerala Backwaters", city: "Alleppey", state: "Kerala", image: "/images/kerala_backwaters_houseboat.png", desc: "A serene network of canals, lakes, and rivers traversed by traditional luxury houseboats." },
        { name: "Ranthambore Tiger Reserve", city: "Sawai Madhopur", state: "Rajasthan", image: "/images/ranthambore_tiger_safari.png", desc: "A world-renowned wildlife sanctuary, home to the Royal Bengal Tigers and ancient fortress ruins." },
        { name: "Hampi Ruins", city: "Hampi", state: "Karnataka", image: "/images/hampi-ruins.jpg", desc: "The ancient capital of the Vijayanagara Empire, showcasing dramatic boulder landscapes and temples." }
      ]
    }
  },
  {
    id: "blog",
    isCustom: false,
    title: { en: "Travel Blog", es: "Blog de Viajes", pt: "Blog de Viagens" },
    heroImage: "/images/varanasi_ghats_aarti.png",
    content: {
      heroTitle: { en: "Stories & Insights", es: "Historias e Ideas", pt: "Histórias e Inspirações" },
      heroSubtitle: { en: "Expert tips, cultural insights, and luxury travel secrets", es: "Consejos de expertos, ideas culturales y secretos de viajes de lujo", pt: "Dicas de especialistas, insights culturais e segredos de viagem" }
    }
  },
  {
    id: "destinations",
    isCustom: false,
    title: { en: "Destinations Catalog", es: "Catálogo de Destinos", pt: "Catálogo de Destinos" },
    heroImage: "/images/rajasthan_fort_sunset.png",
    content: {
      heroTitle: { en: "Explore India's Regions", es: "Explore las Regiones de la India", pt: "Explore as Regiões da Índia" },
      heroSubtitle: { en: "From the grand palaces of Rajasthan to the serene canals of Kerala", es: "Desde los grandes palacios de Rajastán hasta los canales de Kerala", pt: "Dos grandes palácios do Rajastão aos canais de Kerala" }
    }
  },
  {
    id: "packages",
    isCustom: false,
    title: { en: "Travel Packages Catalog", es: "Catálogo de Paquetes", pt: "Catálogo de Pacotes" },
    heroImage: "/images/luxury_palace_train.png",
    content: {
      heroTitle: { en: "Travel Packages", es: "Paquetes de Viaje", pt: "Pacotes de Viagem" },
      heroSubtitle: { en: "Elite itineraries hand-designed by our specialist managers", es: "Itinerarios de élite diseñados a mano por nuestros expertos", pt: "Roteiros de elite desenhados por nossos especialistas" }
    }
  },
  {
    id: "food",
    isCustom: false,
    title: { en: "Food Guide", es: "Guía de Comida", pt: "Guia Gastronômico" },
    heroImage: "/images/indian_cuisine_feast.png",
    content: {
      heroTitle: { en: "Taste of India Culinary Guide", es: "Guía Culinaria Sabor de la India", pt: "Guia Culinário Sabor da Índia" },
      heroSubtitle: { en: "Explore the rich culinary heritage and regional flavors of India", es: "Explore el rico patrimonio culinario y sabores de la India", pt: "Explore o rico patrimônio culinário e sabores da Índia" }
    }
  }
];

newPages.forEach(np => {
  const existingIdx = pages.findIndex(p => p.id === np.id);
  if (existingIdx !== -1) {
    pages[existingIdx] = np;
  } else {
    pages.push(np);
  }
});

fs.writeFileSync(file, JSON.stringify(pages, null, 2), 'utf8');
console.log('Seeded pages in local pages.json successfully!');
