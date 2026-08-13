const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const pagesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'pages.json');

// Read .env.local
const envPath = path.join(projectRoot, '.env.local');
if (!fs.existsSync(envPath)) {
  console.error("Missing .env.local at", envPath);
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    }
    env[match[1]] = value;
  }
});

// Define the 10 slides
const newSlides = [
  {
    "image": "/images/taj_mahal_sunrise.png",
    "title": { "en": "Experience India in Absolute Luxury", "es": "Viaje a India en Lujo Absoluto", "pt": "Viaje para a Índia em Luxo Absoluto" },
    "desc": { "en": "Curated itineraries featuring private guides, heritage palace hotels, and bespoke travel arrangements.", "es": "Itinerarios a medida con guías privados, hoteles palacio y servicios exclusivos.", "pt": "Itinerários à medida com guias privados, hotéis palácio e serviços exclusivos." },
    "location": { "en": "Taj Mahal, Agra", "es": "Taj Mahal, Agra", "pt": "Taj Mahal, Agra" },
    "sub": { "en": "BESPOKE PRIVATE TOURS", "es": "TOURS PRIVADOS A MEDIDA", "pt": "TOURS PRIVADOS SOB MEDIDA" },
    "cta1Text": { "en": "See Our Packages", "es": "Ver Paquetes", "pt": "Ver Pacotes" },
    "cta1Link": "/packages",
    "cta2Text": { "en": "Inquire Now", "es": "Consultar Ahora", "pt": "Consultar Agora" },
    "cta2Link": "/contact"
  },
  {
    "image": "/images/rajasthan_fort_sunset.png",
    "title": { "en": "The Royal Magic of Rajasthan", "es": "La Magia Real de Rajastán", "pt": "A Magia Real do Rajastão" },
    "desc": { "en": "Explore desert dunes, medieval forts, and dine inside authentic royal lakeside palaces.", "es": "Explore dunas de arena, fuertes medievales y cene dentro de auténticos palacios reales.", "pt": "Explore dunas de areia, fortes medievais e jante dentro de autênticos palácios reais." },
    "location": { "en": "Mehrangarh Fort, Jodhpur", "es": "Fuerte Mehrangarh, Jodhpur", "pt": "Forte Mehrangarh, Jodhpur" },
    "sub": { "en": "HERITAGE PALACES", "es": "PALACIOS HISTÓRICOS", "pt": "PALÁCIOS HISTÓRICOS" },
    "cta1Text": { "en": "Explore Rajasthan", "es": "Explorar Rajastán", "pt": "Explorar Rajastão" },
    "cta1Link": "/destinations/rajasthan",
    "cta2Text": { "en": "Royal Packages", "es": "Paquetes Reales", "pt": "Pacotes Reais" },
    "cta2Link": "/packages"
  },
  {
    "image": "/images/kerala_backwaters_houseboat.png",
    "title": { "en": "Tropical Serenity in Kerala", "es": "Serenidad Tropical en Kerala", "pt": "Serenidade Tropical em Kerala" },
    "desc": { "en": "Cruise through emerald backwaters and rejuvenate with authentic wellness Ayurvedic rituals.", "es": "Navegue por canales de esmeralda y rejuvenezca con auténticos rituales ayurvédicos.", "pt": "Navegue por canais de esmeralda e rejuvenesça com autênticos rituais ayurvédicos." },
    "location": { "en": "Backwaters, Alleppey", "es": "Remansos de Alleppey, Kerala", "pt": "Canais de Alleppey, Kerala" },
    "sub": { "en": "HOLISTIC RETREATS", "es": "RETIROS HOLÍSTICOS", "pt": "RETIROS HOLÍSTICOS" },
    "cta1Text": { "en": "Kerala Retreats", "es": "Kerala Retiros", "pt": "Retiros Kerala" },
    "cta1Link": "/destinations/kerala",
    "cta2Text": { "en": "Plan My Trip", "es": "Planear mi Viaje", "pt": "Planear minha Viagem" },
    "cta2Link": "/contact"
  },
  {
    "image": "/images/Jaipur.jpg",
    "title": { "en": "Pink City Wonders of Jaipur", "es": "Maravillas de la Ciudad Rosa de Jaipur", "pt": "Maravilhas da Cidade Rosa de Jaipur" },
    "desc": { "en": "Marvel at the astronomical Jantar Mantar and the beautiful honeycomb structure of Hawa Mahal.", "es": "Maravíllate con el astronómico Jantar Mantar y la hermosa estructura de Hawa Mahal.", "pt": "Maravilhe-se com o astronômico Jantar Mantar e a bela estrutura de Hawa Mahal." },
    "location": { "en": "Hawa Mahal, Jaipur", "es": "Hawa Mahal, Jaipur", "pt": "Hawa Mahal, Jaipur" },
    "sub": { "en": "ROYAL ARCHITECTURE", "es": "ARQUITECTURA REAL", "pt": "ARQUITETURA REAL" },
    "cta1Text": { "en": "Explore Jaipur", "es": "Explorar Jaipur", "pt": "Explorar Jaipur" },
    "cta1Link": "/destinations/rajasthan",
    "cta2Text": { "en": "Inquire Now", "es": "Planear Ahora", "pt": "Planejar Agora" },
    "cta2Link": "/contact"
  },
  {
    "image": "/images/Udaipur.jpg",
    "title": { "en": "Udaipur: Venice of the East", "es": "Udaipur: La Venecia del Este", "pt": "Udaipur: A Veneza do Oriente" },
    "desc": { "en": "Sail across shimmering Lake Pichola and stay in floating marble palaces under the stars.", "es": "Navega por el reluciente lago Pichola y alójate en palacios de mármol flotantes.", "pt": "Navegue pelo brilhante Lago Pichola e hospede-se em palácios de mármore flutuantes." },
    "location": { "en": "Lake Pichola, Udaipur", "es": "Lago Pichola, Udaipur", "pt": "Lago Pichola, Udaipur" },
    "sub": { "en": "ROMANTIC ESCAPES", "es": "ESCAPADAS ROMÁNTICAS", "pt": "ESCAPADAS ROMÂNTICAS" },
    "cta1Text": { "en": "See Packages", "es": "Ver Paquetes", "pt": "Ver Pacotes" },
    "cta1Link": "/packages",
    "cta2Text": { "en": "Inquire Now", "es": "Planear Ahora", "pt": "Planejar Agora" },
    "cta2Link": "/contact"
  },
  {
    "image": "/images/varanasi.jpg",
    "title": { "en": "Spiritual Awakenings in Varanasi", "es": "Despertar Espiritual en Varanasi", "pt": "Despertar Espiritual em Varanasi" },
    "desc": { "en": "Witness the intense devotion of evening Ganga Aarti ceremonies by the sacred ghats.", "es": "Presencie la intensa devoción de las ceremonias nocturnas de Ganga Aarti junto a los ghats.", "pt": "Assista à intensa devoção das cerimônias noturnas de Ganga Aarti junto aos ghats." },
    "location": { "en": "Ganga Ghats, Varanasi", "es": "Ghats del Ganges, Varanasi", "pt": "Ghats do Ganges, Varanasi" },
    "sub": { "en": "SACRED PLACES", "es": "LUGARES SAGRADOS", "pt": "LUGARES SAGRADOS" },
    "cta1Text": { "en": "Spiritual Itineraries", "es": "Itinerarios Espirituales", "pt": "Roteiros Espirituais" },
    "cta1Link": "/destinations/uttar-pradesh",
    "cta2Text": { "en": "Inquire Now", "es": "Planear Ahora", "pt": "Planejar Agora" },
    "cta2Link": "/contact"
  },
  {
    "image": "/images/goa.jpg",
    "title": { "en": "Golden Sands & Heritage of Goa", "es": "Arenas Doradas y Patrimonio de Goa", "pt": "Areias Douradas e Patrimônio de Goa" },
    "desc": { "en": "Relax on pristine tropical beaches and explore colonial Portuguese churches in old Goa.", "es": "Relájese en playas tropicales y explore las iglesias coloniales portuguesas en el viejo Goa.", "pt": "Relaxe em praias tropicais e explore as iglesias coloniales portuguesas na antiga Goa." },
    "location": { "en": "Baga & Old Goa, Goa", "es": "Playas e Historia, Goa", "pt": "Praias e História, Goa" },
    "sub": { "en": "BEACH LUXURY", "es": "LUJO DE PLAYA", "pt": "LUXO DE PRAIA" },
    "cta1Text": { "en": "Explore Goa", "es": "Explorar Goa", "pt": "Explorar Goa" },
    "cta1Link": "/destinations/goa",
    "cta2Text": { "en": "Plan Itinerary", "es": "Planear Viaje", "pt": "Planejar Roteiro" },
    "cta2Link": "/contact"
  },
  {
    "image": "/images/munnar.jpg",
    "title": { "en": "Misty Tea Hills of Munnar", "es": "Colinas de Té de Munnar", "pt": "Colinas de Chá de Munnar" },
    "desc": { "en": "Breathe the fresh mountain air of rolling tea estates and misty peaks in South India.", "es": "Respire el aire fresco de la montaña en las plantaciones de té en el sur de la India.", "pt": "Respire o ar fresco da montanha nas plantações de chá no sul da Índia." },
    "location": { "en": "Munnar Tea Estates, Kerala", "es": "Plantaciones de Munnar, Kerala", "pt": "Plantações de Munnar, Kerala" },
    "sub": { "en": "HIMALAYAS & HILLS", "es": "MONTAÑAS Y COLINAS", "pt": "MONTANHAS E COLINAS" },
    "cta1Text": { "en": "Kerala Guides", "es": "Guías de Kerala", "pt": "Guias de Kerala" },
    "cta1Link": "/destinations/kerala",
    "cta2Text": { "en": "Inquire Now", "es": "Planear Ahora", "pt": "Planejar Agora" },
    "cta2Link": "/contact"
  },
  {
    "image": "/images/ranthambore.jpg",
    "title": { "en": "Tiger Safaris in Ranthambore", "es": "Safari de Tigres en Ranthambore", "pt": "Safáris de Tigre em Ranthambore" },
    "desc": { "en": "Search for the majestic Royal Bengal Tiger in the ancient hunting grounds of Maharajas.", "es": "Busque al tigre de Bengala en los antiguos campos de caza de los Maharajás.", "pt": "Procure o tigre de Bengala nos antigos campos de caça dos Maharajas." },
    "location": { "en": "National Park, Ranthambore", "es": "Parque Ranthambore, Rajasthan", "pt": "Parque Ranthambore, Rajastão" },
    "sub": { "en": "WILDLIFE ADVENTURES", "es": "SAFARIS SALVAJES", "pt": "SAFÁRIS SELVAGENS" },
    "cta1Text": { "en": "Wildlife Packages", "es": "Paquetes de Vida Silvestre", "pt": "Pacotes de Vida Selvagem" },
    "cta1Link": "/packages",
    "cta2Text": { "en": "Inquire Now", "es": "Planear Ahora", "pt": "Planejar Agora" },
    "cta2Link": "/contact"
  },
  {
    "image": "/images/andaman islands.jpg",
    "title": { "en": "Andaman Islands: Tropical Blue Havens", "es": "Islas Andamán: Paraíso Azul Tropical", "pt": "Ilhas Andaman: Paraíso Azul Tropical" },
    "desc": { "en": "Swim in turquoise waters and dive into the pristine marine life and coral reefs of Havelock.", "es": "Nade en aguas turquesas y explore los arrecifes de coral en la isla Havelock.", "pt": "Nade em águas turquesas e explore os recifes de coral na ilha Havelock." },
    "location": { "en": "Radhanagar Beach, Havelock", "es": "Playa Radhanagar, Havelock", "pt": "Praia Radhanagar, Havelock" },
    "sub": { "en": "ISLAND GETAWAYS", "es": "ESCAPADAS DE ISLAS", "pt": "ESCAPADAS EM ILHAS" },
    "cta1Text": { "en": "Island Tours", "es": "Tours de Islas", "pt": "Tours nas Ilhas" },
    "cta1Link": "/packages",
    "cta2Text": { "en": "Inquire Now", "es": "Planear Ahora", "pt": "Planejar Agora" },
    "cta2Link": "/contact"
  }
];

// Step 1: Update local pages.json file
if (fs.existsSync(pagesPath)) {
  const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));
  const homepageIndex = pages.findIndex(p => p.id === 'homepage');
  if (homepageIndex !== -1) {
    pages[homepageIndex].content.slides = newSlides;
    fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2), 'utf8');
    console.log("Local pages.json updated with 10 slides.");
  } else {
    console.error("Homepage not found in pages.json");
  }
} else {
  console.error("Local pages.json does not exist at:", pagesPath);
}

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Step 2: Push changes directly to remote Firestore database
if (firebaseConfig.apiKey) {
  const { initializeApp } = require('firebase/app');
  const { getFirestore, doc, getDoc, updateDoc } = require('firebase/firestore');
  
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  
  const docRef = doc(firestore, "pages", "homepage");
  getDoc(docRef).then(snap => {
    if (snap.exists()) {
      const pageData = snap.data();
      const content = pageData.content || {};
      content.slides = newSlides;
      
      updateDoc(docRef, { content }).then(() => {
        console.log("SUCCESS: Firestore 'homepage' document successfully updated with exactly 10 slides!");
        process.exit(0);
      }).catch(err => {
        console.error("FAILED to update document in Firestore:", err);
        process.exit(1);
      });
    } else {
      console.error("Homepage document does not exist in Firestore.");
      process.exit(1);
    }
  }).catch(err => {
    console.error("FAILED to fetch document from Firestore:", err);
    process.exit(1);
  });
} else {
  console.log("Firebase API Key is missing. Skipping Firestore update.");
  process.exit(0);
}
