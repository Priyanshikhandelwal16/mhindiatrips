const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const citiesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'cities.json');
const statesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'states.json');

console.log("=== BUILDING FULL 74 CITIES DATABASE WITH 3-LANGUAGE TOURIST PLACES ===");

// 1. Load baseline 54 cities from git commit dc199bf
let baselineCities = [];
try {
  const jsonStr = execSync('git show dc199bf:src/data/fallback/cities.json').toString();
  baselineCities = JSON.parse(jsonStr);
  console.log(`Loaded ${baselineCities.length} baseline cities from commit dc199bf`);
} catch (e) {
  console.error("Error reading dc199bf cities:", e);
}

// Map by city id
const citiesMap = new Map();
baselineCities.forEach(c => {
  if (c && c.id) {
    citiesMap.set(c.id, c);
  }
});

// Helper function to normalize text to { en, es, pt }
function to3Lang(val, defaultEn = "") {
  if (!val) {
    const text = defaultEn || "Destination detail";
    return { en: text, es: text, pt: text };
  }
  if (typeof val === 'string') {
    return { en: val, es: val, pt: val };
  }
  return {
    en: val.en || val.es || val.pt || defaultEn || "",
    es: val.es || val.en || val.pt || defaultEn || "",
    pt: val.pt || val.en || val.es || defaultEn || ""
  };
}

// 2. Load cities from current fallback files if available
let currentCities = [];
if (fs.existsSync(citiesPath)) {
  try {
    currentCities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));
    currentCities.forEach(c => {
      if (c && c.id && !citiesMap.has(c.id)) {
        citiesMap.set(c.id, c);
      }
    });
  } catch(e) {}
}

// 3. Extract cities from multistate update scripts
const additionalCitiesToMerge = [
  // Punjab
  {
    id: "amritsar",
    stateId: "punjab",
    displayOrder: 1,
    isPublished: true,
    isDeleted: false,
    name: { en: "Amritsar", es: "Amritsar", pt: "Amritsar" },
    slug: { en: "amritsar", es: "amritsar", pt: "amritsar" },
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=900&q=80",
    description: {
      en: "Spiritual and cultural heart of Punjab, famous for the Golden Temple, historic heritage, and rich Punjabi cuisine.",
      es: "El corazón espiritual y cultural de Punjab, famoso por el Templo Dorado, su patrimonio histórico y rica gastronomía.",
      pt: "O coração espiritual e cultural do Punjab, famoso pelo Templo Dourado, patrimônio histórico e rica culinária."
    },
    seoTitle: { en: "Amritsar Travel Guide | Golden Temple & Wagah Border", es: "Guía de Viaje de Amritsar | Templo Dorado", pt: "Guia de Viagem de Amritsar | Templo Dourado" },
    seoDesc: { en: "Plan your trip to Amritsar: Golden Temple, Jallianwala Bagh, Wagah border ceremony and Punjabi street food.", es: "Planifique su viaje a Amritsar: Templo Dorado y ceremonia de Wagah.", pt: "Planeje sua viagem para Amritsar: Templo Dourado e cerimônia de Wagah." },
    touristPlaces: [
      {
        name: { en: "Golden Temple (Sri Harmandir Sahib)", es: "Templo Dorado", pt: "Templo Dourado" },
        image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=900&q=80",
        description: { en: "Holiest gurdwara of Sikhism coated in gold leaf surrounded by the sacred Amrit Sarovar tank.", es: "El gurdwara más sagrado del sikhismo revestido de pan de oro.", pt: "O gurdwara mais sagrado do sikhismo revestido com folhas de ouro." }
      },
      {
        name: { en: "Wagah-Attari Border Ceremony", es: "Ceremonia de la Frontera Wagah-Attari", pt: "Cerimônia da Fronteira Wagah-Attari" },
        image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
        description: { en: "Famous military drill ceremony conducted daily at sunset by Indian BSF and Pakistan Rangers.", es: "Famosa ceremonia militar diaria al atardecer en la frontera.", pt: "Famosa cerimônia militar diária ao pôr do sol na fronteira." }
      },
      {
        name: { en: "Jallianwala Bagh", es: "Jallianwala Bagh", pt: "Jallianwala Bagh" },
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80",
        description: { en: "Historic memorial public garden honoring victims of the 1919 massacre during British rule.", es: "Jardín conmemorativo histórico en honor a las víctimas de 1919.", pt: "Jardim memorial histórico em homenagem às vítimas de 1919." }
      }
    ]
  },
  // Gujarat
  {
    id: "bhuj-kutch",
    stateId: "gujarat",
    displayOrder: 2,
    isPublished: true,
    isDeleted: false,
    name: { en: "Bhuj & Kutch", es: "Bhuj y Kutch", pt: "Bhuj e Kutch" },
    slug: { en: "bhuj-kutch", es: "bhuj-kutch", pt: "bhuj-kutch" },
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80",
    description: {
      en: "Gateway to the White Rann salt desert, Aina Mahal palace, Prag Mahal, and authentic Kutchi handicrafts.",
      es: "Puerta de entrada al desierto de sal de Rann, palacios reales Aina Mahal y artesanías de Kutch.",
      pt: "Portal de entrada para o deserto de sal de Rann, palácios Aina Mahal e artesanato de Kutch."
    },
    seoTitle: { en: "Bhuj & Kutch Travel Guide | White Desert & Palaces", es: "Guía de Viaje de Bhuj y Kutch | Desierto Blanco", pt: "Guia de Viagem de Bhuj e Kutch | Deserto Branco" },
    seoDesc: { en: "Explore Bhuj: Aina Mahal, Prag Mahal, Great Rann salt marsh and Kutchi embroidery villages.", es: "Explore Bhuj: Aina Mahal, Prag Mahal y el gran desierto de sal de Rann.", pt: "Explore Bhuj: Aina Mahal, Prag Mahal e o grande deserto de sal de Rann." },
    touristPlaces: [
      {
        name: { en: "Aina Mahal & Prag Mahal", es: "Palacios Aina Mahal y Prag Mahal", pt: "Palácios Aina Mahal e Prag Mahal" },
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80",
        description: { en: "18th-century Palace of Mirrors built in Venetian style alongside Gothic Prag Mahal bell tower.", es: "Palacio de los Espejos del siglo XVIII construido en estilo veneciano.", pt: "Palácio dos Espelhos do século XVIII construído em estilo veneziano." }
      },
      {
        name: { en: "Kutch Handicrafts Villages (Nirona & Bhujodi)", es: "Aldeas Artesanales de Kutch", pt: "Aldeias de Artesanato de Kutch" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: { en: "Heritage artisan villages famous for Rogan art, copper bell making and Kutchi embroidery.", es: "Aldeas artesanales famosas por la pintura Rogan y bordados de Kutch.", pt: "Aldeias artesanais famosas pela pintura Rogan e bordados de Kutch." }
      }
    ]
  },
  {
    id: "dwarka",
    stateId: "gujarat",
    isPublished: true,
    isDeleted: false,
    name: { en: "Dwarka", es: "Dwarka", pt: "Dwarka" },
    slug: { en: "dwarka", es: "dwarka", pt: "dwarka" },
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80",
    description: {
      en: "Ancient holy kingdom of Lord Krishna, featuring Dwarkadhish temple along the Arabian Sea shore.",
      es: "Antiguo reino sagrado del Señor Krishna, con el templo Dwarkadhish a orillas del Mar Arábigo.",
      pt: "Antigo reino sagrado do Senhor Krishna, com o templo Dwarkadhish às margens do Mar Arábico."
    },
    seoTitle: { en: "Dwarka Travel Guide | Dwarkadhish Temple & Bet Dwarka", es: "Guía de Viaje de Dwarka | Templo Dwarkadhish", pt: "Guia de Viagem de Dwarka | Templo Dwarkadhish" },
    seoDesc: { en: "Discover Dwarka pilgrimage: 5-story Dwarkadhish temple, Bet Dwarka island and Rukmini Devi temple.", es: "Descubra la peregrinación a Dwarka: templo Dwarkadhish e isla de Bet Dwarka.", pt: "Descubra a peregrinação a Dwarka: templo Dwarkadhish e ilha de Bet Dwarka." },
    touristPlaces: [
      {
        name: { en: "Dwarkadhish Temple (Jagat Mandir)", es: "Templo Dwarkadhish", pt: "Templo Dwarkadhish" },
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80",
        description: { en: "5-story main temple supported by 72 pillars dedicated to Lord Krishna, one of the Char Dham.", es: "Templo principal de 5 pisos apoyado en 72 pilares dedicado al Señor Krishna.", pt: "Templo principal de 5 andares apoiado em 72 pilares dedicado ao Senhor Krishna." }
      },
      {
        name: { en: "Bet Dwarka Island", es: "Isla de Bet Dwarka", pt: "Ilha de Bet Dwarka" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: { en: "Sacred island located in the Gulf of Kutch believed to be the original residence of Krishna.", es: "Sagrada isla en el Golfo de Kutch considerada la residencia original de Krishna.", pt: "Sagrada ilha no Golfo de Kutch considerada a residência original de Krishna." }
      }
    ]
  },
  {
    id: "vadodara",
    stateId: "gujarat",
    isPublished: true,
    isDeleted: false,
    name: { en: "Vadodara (Baroda)", es: "Vadodara", pt: "Vadodara" },
    slug: { en: "vadodara", es: "vadodara", pt: "vadodara" },
    image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
    description: {
      en: "Cultural capital of Gujarat, home to the magnificent Laxmi Vilas Palace and UNESCO Champaner-Pavagadh.",
      es: "Capital cultural de Gujarat, hogar del magnífico Palacio Laxmi Vilas y Champaner-Pavagadh.",
      pt: "Capital cultural de Gujarat, lar do magnífico Palácio Laxmi Vilas e Champaner-Pavagadh."
    },
    seoTitle: { en: "Vadodara Travel Guide | Laxmi Vilas Palace & Champaner", es: "Guía de Viaje de Vadodara | Palacio Laxmi Vilas", pt: "Guia de Viagem de Vadodara | Palácio Laxmi Vilas" },
    seoDesc: { en: "Explore Vadodara: Laxmi Vilas Palace four times larger than Buckingham, Sayaji Baug and UNESCO Champaner.", es: "Explore Vadodara: Palacio Laxmi Vilas, jardines Sayaji Baug y la UNESCO Champaner.", pt: "Explore Vadodara: Palácio Laxmi Vilas, jardins Sayaji Baug e a UNESCO Champaner." },
    touristPlaces: [
      {
        name: { en: "Laxmi Vilas Palace", es: "Palacio Laxmi Vilas", pt: "Palácio Laxmi Vilas" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: { en: "Extravagant Indo-Saracenic royal residence four times the size of Buckingham Palace.", es: "Extravagante residencia real de estilo indo-saracénico cuatro veces mayor que el Palacio de Buckingham.", pt: "Extravagante residência real em estilo indo-saracênico quatro vezes maior que o Palácio de Buckingham." }
      }
    ]
  },
  // Uttarakhand
  {
    id: "dehradun",
    stateId: "uttarakhand",
    displayOrder: 1,
    isPublished: true,
    isDeleted: false,
    name: { en: "Dehradun", es: "Dehradun", pt: "Dehradun" },
    slug: { en: "dehradun", es: "dehradun", pt: "dehradun" },
    image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=900&q=80",
    description: {
      en: "Picturesque capital in the Doon Valley, gateway to Mussoorie featuring Robber's Cave and Mindrolling Monastery.",
      es: "Pintoresca capital en el Valle Doon, puerta de entrada a Mussoorie con Robber's Cave.",
      pt: "Pintoresca capital no Vale Doon, portal de entrada para Mussoorie com Robber's Cave."
    },
    seoTitle: { en: "Dehradun Travel Guide | Robber's Cave & Mindrolling Monastery", es: "Guía de Viaje de Dehradun | Robber's Cave", pt: "Guia de Viagem de Dehradun | Robber's Cave" },
    seoDesc: { en: "Plan Dehradun holiday: Robber's Cave river walk, Sahastradhara springs & Mindrolling monastery.", es: "Planifique vacaciones en Dehradun: paseo por Robber's Cave y manantiales Sahastradhara.", pt: "Planeje férias em Dehradun: passeio por Robber's Cave e nascentes Sahastradhara." },
    touristPlaces: [
      {
        name: { en: "Robber's Cave (Guchhupani)", es: "Cueva de los Ladrones (Guchhupani)", pt: "Caverna dos Ladrões (Guchhupani)" },
        image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=900&q=80",
        description: { en: "Natural river cave formation where water flows inside narrow limestone gorges.", es: "Formación natural de cueva sobre el río donde el agua fluye entre desfiladeros.", pt: "Formação natural de caverna no rio onde a água flui entre desfiladeiros." }
      }
    ]
  },
  {
    id: "haridwar",
    stateId: "uttarakhand",
    displayOrder: 2,
    isPublished: true,
    isDeleted: false,
    name: { en: "Haridwar", es: "Haridwar", pt: "Haridwar" },
    slug: { en: "haridwar", es: "haridwar", pt: "haridwar" },
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&q=80",
    description: {
      en: "Gateway to the Gods, ancient pilgrimage destination famous for Har Ki Pauri Ganga Aarti & Mansa Devi temple.",
      es: "Puerta de los Dioses, antiguo destino de peregrinación famoso por Har Ki Pauri Ganga Aarti.",
      pt: "Portal dos Deuses, antigo destino de peregrinação famoso por Har Ki Pauri Ganga Aarti."
    },
    seoTitle: { en: "Haridwar Travel Guide | Har Ki Pauri & Mansa Devi Temple", es: "Guía de Viaje de Haridwar | Har Ki Pauri", pt: "Guia de Viagem de Haridwar | Har Ki Pauri" },
    seoDesc: { en: "Explore Haridwar: Har Ki Pauri sunset Aarti, Mansa Devi cable car ride and sacred Ganges bath.", es: "Explore Haridwar: ceremonia Aarti al atardecer en Har Ki Pauri y templo Mansa Devi.", pt: "Explore Haridwar: cerimônia Aarti ao pôr do sol em Har Ki Pauri e templo Mansa Devi." },
    touristPlaces: [
      {
        name: { en: "Har Ki Pauri Ghat & Ganga Aarti", es: "Har Ki Pauri y Ganga Aarti", pt: "Har Ki Pauri e Ganga Aarti" },
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&q=80",
        description: { en: "Sacred ghat built by King Vikramaditya where thousands gather for evening fire lamp rituals.", es: "Sagrado ghat a orillas del Ganges donde miles se reúnen para el ritual de lámparas de fuego.", pt: "Sagrado ghat às margens do Ganges onde milhares se reúnem para o ritual de lâmpadas." }
      }
    ]
  }
];

// Add additional cities to citiesMap
additionalCitiesToMerge.forEach(c => {
  if (c && c.id) {
    citiesMap.set(c.id, c);
  }
});

// Process all cities in citiesMap to ensure EVERY single city has valid 3-language touristPlaces
const finalCitiesList = [];

for (const [id, c] of citiesMap.entries()) {
  const name = to3Lang(c.name, id);
  const slug = to3Lang(c.slug, id);
  const description = to3Lang(c.description, `Explore the beautiful city of ${name.en}.`);
  const image = c.image || "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80";

  let touristPlaces = [];
  if (Array.isArray(c.touristPlaces) && c.touristPlaces.length > 0) {
    touristPlaces = c.touristPlaces.map(tp => ({
      name: to3Lang(tp.name, "Sightseeing Spot"),
      image: tp.image || image,
      description: to3Lang(tp.description, "A popular attraction for visitors.")
    }));
  } else if (Array.isArray(c.highlights) && c.highlights.length > 0) {
    touristPlaces = c.highlights.map(h => ({
      name: to3Lang(h.title || h.name, "Highlight Spot"),
      image: image,
      description: to3Lang(h.desc || h.description, "An important attraction in the city.")
    }));
  } else {
    // Generate 2 default 3-language tourist places for cities lacking them
    touristPlaces = [
      {
        name: { en: `${name.en} Heritage Site`, es: `Sitio Histórico de ${name.es}`, pt: `Local Histórico de ${name.pt}` },
        image: image,
        description: { en: `Explore the historical monuments and cultural heritage of ${name.en}.`, es: `Explore los monumentos históricos y patrimonio cultural de ${name.es}.`, pt: `Explore os monumentos históricos e patrimônio cultural de ${name.pt}.` }
      },
      {
        name: { en: `${name.en} City Center & Markets`, es: `Centro Ciudad y Mercados de ${name.es}`, pt: `Centro Urbano e Mercados de ${name.pt}` },
        image: image,
        description: { en: `Experience local life, handicrafts, and vibrant bazaars in ${name.en}.`, es: `Disfrute de la vida local, artesanías y bazares en ${name.es}.`, pt: `Experimente a vida local, artesanato e bazares em ${name.pt}.` }
      }
    ];
  }

  finalCitiesList.push({
    id: c.id,
    stateId: c.stateId || "other",
    isPublished: c.isPublished !== undefined ? c.isPublished : true,
    isDeleted: false,
    displayOrder: c.displayOrder || 1,
    name,
    slug,
    image,
    description,
    seoTitle: to3Lang(c.seoTitle, `${name.en} Travel Guide`),
    seoDesc: to3Lang(c.seoDesc, `Discover ${name.en} with top attractions and tour packages.`),
    seoKeywords: to3Lang(c.seoKeywords, `${name.en} travel, ${name.en} tourism`),
    touristPlaces
  });
}

console.log(`\n🎉 FINAL COMPILED CITIES COUNT: ${finalCitiesList.length}`);

// Group by stateId to verify state coverage
const byState = {};
finalCitiesList.forEach(c => {
  byState[c.stateId] = (byState[c.stateId] || 0) + 1;
});
console.log("\nCities count per state:", JSON.stringify(byState, null, 2));

// Save to src/data/fallback/cities.json
fs.writeFileSync(citiesPath, JSON.stringify(finalCitiesList, null, 2), 'utf8');
console.log(`\n✅ Saved ${finalCitiesList.length} cities to ${citiesPath}`);

