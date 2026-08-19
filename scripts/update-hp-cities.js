const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const statesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'states.json');

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

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// 1. SHIMLA DETAILS
const shimlaDetails = {
  tagline: {
    en: "Shimla is a charming hill station in Himachal Pradesh, known for its colonial architecture, scenic Himalayan views, pleasant weather, bustling markets and beautiful mountain surroundings.",
    es: "Shimla es una encantadora estación de montaña de Himachal Pradesh, conocida por su arquitectura colonial, vistas del Himalaya, clima agradable, mercados y hermosos paisajes montañosos.",
    pt: "Shimla é uma charmosa estação de montanha em Himachal Pradesh, conhecida por sua arquitetura colonial, vistas do Himalaia, clima agradável, mercados movimentados e belas paisagens montanhosas."
  },
  overview: {
    en: "Shimla, the former summer capital of British India, is one of India's most popular Himalayan hill stations. Surrounded by pine-covered hills and snow-capped mountains, the city combines colonial heritage with scenic beauty. Visitors can explore the historic Ridge, Mall Road, Christ Church and Viceregal Lodge, while nearby destinations such as Kufri and Mashobra offer nature and adventure experiences. Shimla is ideal for couples, families, honeymooners and travellers looking for a relaxing mountain escape.",
    es: "Shimla, antigua capital de verano de la India británica, es una de las estaciones de montaña más populares del Himalaya. Rodeada de colinas cubiertas de pinos y montañas nevadas, la ciudad combina patrimonio colonial con belleza natural. Los visitantes pueden explorar The Ridge, Mall Road, Christ Church y Viceregal Lodge, mientras que lugares cercanos como Kufri y Mashobra ofrecen experiencias de naturaleza y aventura. Shimla es ideal para parejas, familias, lunamieleros y viajeros que buscan una escapada tranquila a las montañas.",
    pt: "Shimla, antiga capital de verão da Índia britânica, é uma das estações de montanha mais populares do Himalaia. Cercada por colinas cobertas de pinheiros e montanhas nevadas, a cidade combina patrimônio colonial com beleza natural. Os visitantes podem explorar The Ridge, Mall Road, Christ Church e Viceregal Lodge, enquanto destinos próximos como Kufri e Mashobra oferecem experiências de natureza e aventura. Shimla é ideal para casais, famílias, lua de mel e viajantes que procuram uma tranquila escapada para as montanhas."
  },
  highlights: [
    {
      title: { en: "The Ridge", es: "The Ridge", pt: "The Ridge" },
      desc: {
        en: "Enjoy panoramic mountain views and Shimla's lively central promenade.",
        es: "Disfruta de vistas panorámicas de las montañas y del animado paseo central de Shimla.",
        pt: "Aprecie vistas panorâmicas das montanhas e o movimentado passeio central de Shimla."
      }
    },
    {
      title: { en: "Mall Road", es: "Mall Road", pt: "Mall Road" },
      desc: {
        en: "Explore shops, cafés, restaurants and colonial-era surroundings.",
        es: "Explora tiendas, cafeterías, restaurantes y edificios de la época colonial.",
        pt: "Explore lojas, cafés, restaurantes e construções da época colonial."
      }
    },
    {
      title: { en: "Christ Church", es: "Christ Church", pt: "Christ Church" },
      desc: {
        en: "Visit one of Shimla's most recognizable historic landmarks.",
        es: "Visita uno de los monumentos históricos más reconocibles de Shimla.",
        pt: "Visite um dos marcos históricos mais conhecidos de Shimla."
      }
    },
    {
      title: { en: "Kufri", es: "Kufri", pt: "Kufri" },
      desc: {
        en: "Enjoy mountain scenery, outdoor activities and seasonal snow experiences.",
        es: "Disfruta de paisajes montañosos, actividades al aire libre y nieve durante la temporada.",
        pt: "Aproveite paisagens montanhosas, atividades ao ar livre e neve durante a temporada."
      }
    },
    {
      title: { en: "Viceregal Lodge", es: "Viceregal Lodge", pt: "Viceregal Lodge" },
      desc: {
        en: "Discover Shimla's colonial history and grand architectural heritage.",
        es: "Descubre la historia colonial y el patrimonio arquitectónico de Shimla.",
        pt: "Conheça a história colonial e o patrimônio arquitetônico de Shimla."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Walk Mall Road & The Ridge", es: "Pasear por Mall Road y The Ridge", pt: "Caminhar pela Mall Road e The Ridge" },
      desc: {
        en: "Walk along Mall Road and The Ridge to enjoy cafés, shops and beautiful historic views.",
        es: "Camina por Mall Road y The Ridge para disfrutar de cafés, tiendas y hermosas vistas históricas.",
        pt: "Caminhe pela Mall Road e The Ridge para desfrutar de cafés, lojas e belas vistas históricas."
      }
    },
    {
      name: { en: "Visit Historic Landmarks", es: "Visitar Lugares Históricos", pt: "Visitar Marcos Históricos" },
      desc: {
        en: "Visit Christ Church and Viceregal Lodge to discover Shimla's royal colonial legacy.",
        es: "Visita Christ Church y Viceregal Lodge para descubrir el legado colonial de Shimla.",
        pt: "Visite a Christ Church e o Viceregal Lodge para descobrir o legado colonial de Shimla."
      }
    },
    {
      name: { en: "Day Trip to Kufri", es: "Excursión a Kufri", pt: "Passeio de um Dia a Kufri" },
      desc: {
        en: "Take a day trip to Kufri for mountain landscapes, parks, and seasonal winter snow.",
        es: "Haz una excursión a Kufri para ver paisajes de montaña y disfrutar de la nieve invernal.",
        pt: "Faça um passeio a Kufri para ver paisagens montanhosas e aproveitar a neve no inverno."
      }
    },
    {
      name: { en: "Ride the Toy Train", es: "Viajar en el Tren de Juguete", pt: "Viajar no Trem de Brinquedo" },
      desc: {
        en: "Ride the historic Kalka–Shimla toy train, a UNESCO heritage scenic mountain journey.",
        es: "Viaja en el histórico tren Kalka-Shimla, un viaje escénico por las montañas catalogado por la UNESCO.",
        pt: "Viaje no histórico trem Kalka-Shimla, um passeio panorâmico pelas montanhas reconhecido pela UNESCO."
      }
    },
    {
      name: { en: "Cafés, Shopping & Views", es: "Cafés, Compras y Vistas", pt: "Cafés, Compras e Vistas" },
      desc: {
        en: "Enjoy local cafés, shopping in traditional bazaars, and beautiful panoramic mountain views.",
        es: "Disfruta de cafés locales, compras en bazares y vistas panorámicas espectaculares.",
        pt: "Desfrute de cafés locais, compras nos bazares e belas vistas panorâmicas."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Shimla is accessible by road, narrow-gauge train (Toy Train) from Kalka, or flights via Chandigarh and Shimla Airports.",
      es: "Shimla es accesible por carretera, tren de Kalka o avión.",
      pt: "Shimla é acessível por estrada, trem a partir de Kalka ou avião."
    },
    nearestAirport: "Shimla Airport (SLN) / Chandigarh International Airport (IXC)",
    nearestRailway: "Shimla Railway Station / Kalka (KLK) broad-gauge",
    transportOptions: "Buses, Taxis, Auto-rickshaws, Toy Train",
    distanceFromMajorCities: "Chandigarh (115 km), Delhi (340 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "5°C - 25°C",
    currency: "INR",
    localLanguage: "Pahari, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Safe mountain destination. Avoid walking late on deserted forest trails.",
      es: "Destino de montaña seguro.",
      pt: "Destino de montanha seguro."
    }
  },
  gettingAround: [
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Convenient for sightseeing and visiting nearby points of interest.",
        es: "Convenientes para traslados y visitas turísticas.",
        pt: "Convenientes para transfers e passeios."
      },
      recommended: true
    },
    {
      transportType: "HRTC & Private Buses",
      title: { en: "Buses", es: "Autobuses", pt: "Ônibus" },
      desc: {
        en: "HRTC and private buses connect major nearby towns and destinations.",
        es: "Los autobuses conectan las principales ciudades cercanas.",
        pt: "Os ônibus conectam as principais cidades próximas."
      },
      recommended: false
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for selected local routes outside pedestrian zones.",
        es: "Útil para rutas seleccionadas.",
        pt: "Útil para rotas selecionadas."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Best option around Mall Road and The Ridge pedestrian zones.",
        es: "La mejor opción para recorrer Mall Road y The Ridge.",
        pt: "A melhor opção para caminhar pela Mall Road e The Ridge."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Ideal for visiting Kufri, Mashobra and surrounding areas.",
        es: "Ideal para visitar Kufri, Mashobra y alrededores.",
        pt: "Ideal para visitar Kufri, Mashobra e arredores."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Warm Layers", es: "Ropa de Abrigo", pt: "Roupas Quentes" },
      desc: {
        en: "Carry warm layers, especially during winter.",
        es: "Lleva ropa abrigada, especialmente en invierno.",
        pt: "Leve roupas quentes, especialmente no inverno."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Wear comfortable shoes for steep roads and walking.",
        es: "Usa calzado cómodo para las calles empinadas y caminatas.",
        pt: "Use calçados confortáveis para as ruas íngremes e caminhadas."
      }
    },
    {
      title: { en: "Early Booking", es: "Reservar Temprano", pt: "Reserve Cedo" },
      desc: {
        en: "Book accommodation early during peak seasons.",
        es: "Reserva alojamiento con anticipación durante la temporada alta.",
        pt: "Reserve hospedagem com antecedência durante a alta temporada."
      }
    },
    {
      title: { en: "Weather Check", es: "Clima y Carreteras", pt: "Clima e Estradas" },
      desc: {
        en: "Check weather and road conditions before travelling.",
        es: "Verifica el clima y el estado de las carreteras antes de viajar.",
        pt: "Verifique o clima e as condições das estradas antes de viajar."
      }
    },
    {
      title: { en: "Traffic Buffer", es: "Tráfico de Montaña", pt: "Trânsito de Montanha" },
      desc: {
        en: "Keep some time for traffic delays on mountain roads.",
        es: "Reserva tiempo adicional por posibles retrasos en las carreteras de montaña.",
        pt: "Reserve um tempo extra devido a possíveis atrasos nas estradas de montanha."
      }
    }
  ],
  hotels: [
    {
      name: "The Oberoi Cecil",
      tier: "Luxury",
      desc: {
        en: "Luxury colonial-style stay with premium facilities.",
        es: "Alojamiento de lujo de estilo colonial con servicios premium.",
        pt: "Hospedagem de luxo em estilo colonial com comodidades premium."
      },
      image: ""
    },
    {
      name: "Wildflower Hall",
      tier: "Luxury",
      desc: {
        en: "Luxury mountain retreat near Shimla.",
        es: "Retiro de montaña de lujo cerca de Shimla.",
        pt: "Refúgio de montanha de luxo perto de Shimla."
      },
      image: ""
    },
    {
      name: "Clarkes Hotel",
      tier: "Premium",
      desc: {
        en: "Historic heritage accommodation near Mall Road.",
        es: "Alojamiento histórico patrimonial cerca de Mall Road.",
        pt: "Hospedagem histórica perto da Mall Road."
      },
      image: ""
    },
    {
      name: "Radisson Hotel Shimla",
      tier: "Premium",
      desc: {
        en: "Comfortable premium stay with city access.",
        es: "Alojamiento cómodo de categoría superior con fácil acceso a la ciudad.",
        pt: "Hospedagem confortável de categoria superior com fácil acesso à cidade."
      },
      image: ""
    },
    {
      name: "Hotel Willow Banks",
      tier: "Mid-range",
      desc: {
        en: "Convenient accommodation close to Mall Road.",
        es: "Alojamiento conveniente cerca de Mall Road.",
        pt: "Hospedagem conveniente perto da Mall Road."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Chana Madra, Dhaam, Siddu, Tudkiya Bhath and Babru.",
    es: "Pruebe Chana Madra, Dhaam, Siddu, Tudkiya Bhath y Babru.",
    pt: "Prove Chana Madra, Dhaam, Siddu, Tudkiya Bhath e Babru."
  },
  localFoodDishes: [
    {
      name: { en: "Chana Madra", es: "Chana Madra", pt: "Chana Madra" },
      desc: {
        en: "Traditional Himachali chickpea curry cooked in yoghurt and spices.",
        es: "Curry tradicional de garbanzos de Himachal cocinado con yogur y especias.",
        pt: "Curry tradicional de grão-de-bico do Himachal cozido com iogurte e especiarias."
      }
    },
    {
      name: { en: "Dhaam", es: "Dhaam", pt: "Dhaam" },
      desc: {
        en: "Traditional Himachali festive meal serving curries, rice and lentils.",
        es: "Comida festiva tradicional de Himachal con currys, arroz y lentejas.",
        pt: "Refeição festiva tradicional do Himachal com curries, arroz e lentilhas."
      }
    },
    {
      name: { en: "Siddu", es: "Siddu", pt: "Siddu" },
      desc: {
        en: "Steamed local bread often served with ghee or curry.",
        es: "Pan local al vapor servido con ghee o curry.",
        pt: "Pão local cozido no vapor servido com ghee ou curry."
      }
    },
    {
      name: { en: "Tudkiya Bhath", es: "Tudkiya Bhath", pt: "Tudkiya Bhath" },
      desc: {
        en: "Himachali-style rice preparation cooked with lentils and spices.",
        es: "Preparación de arroz al estilo de Himachal cocinado con lentejas y especias.",
        pt: "Prato de arroz ao estilo do Himachal cozido com lentilhas e especiarias."
      }
    },
    {
      name: { en: "Babru", es: "Babru", pt: "Babru" },
      desc: {
        en: "Crispy Himachali stuffed bread similar to kachori.",
        es: "Pan crujiente relleno estilo Himachal similar a una kachori.",
        pt: "Pão recheado crocante estilo Himachal semelhante a uma kachori."
      }
    }
  ],
  bestTime: {
    en: "March to June is ideal for pleasant weather and sightseeing. October to February is suitable for winter and snow experiences, subject to weather conditions.",
    es: "De marzo a junio es ideal para disfrutar de un clima agradable y hacer turismo. De octubre a febrero es adecuado para experiencias de invierno y nieve, dependiendo de las condiciones climáticas.",
    pt: "De março a junho é ideal para clima agradável e passeios. De outubro a fevereiro é adequado para experiências de inverno e neve, dependendo das condições climáticas."
  },
  faqs: [
    {
      q: { en: "What is Shimla famous for?", es: "¿Por qué es famosa Shimla?", pt: "Pelo que Shimla é famosa?" },
      a: {
        en: "Shimla is famous for colonial architecture, Himalayan scenery, Mall Road, The Ridge and its mountain atmosphere.",
        es: "Shimla es famosa por su arquitectura colonial, paisajes del Himalaya, Mall Road, The Ridge y ambiente montañoso.",
        pt: "Shimla é famosa por sua arquitetura colonial, paisagens do Himalaia, Mall Road, The Ridge e ambiente montanhoso."
      }
    },
    {
      q: { en: "How many days are enough for Shimla?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "3–4 days are generally suitable for Shimla and nearby attractions.",
        es: "3–4 días suelen ser suficientes.",
        pt: "3–4 dias geralmente são suficientes."
      }
    },
    {
      q: { en: "Is Shimla good for families?", es: "¿Es Shimla adecuada para familias?", pt: "Shimla é boa para famílias?" },
      a: {
        en: "Yes, Shimla offers sightseeing, nature, shopping and family-friendly attractions.",
        es: "Sí, Shimla ofrece turismo, naturaleza, compras y atracciones familiares.",
        pt: "Sim, Shimla oferece passeios, natureza, compras e atrações para famílias."
      }
    },
    {
      q: { en: "Does Shimla receive snowfall?", es: "¿Nieva en Shimla?", pt: "Neva em Shimla?" },
      a: {
        en: "Yes, snowfall can occur during winter, but timing and intensity vary each year.",
        es: "Sí, puede nevar durante el invierno, aunque el momento y la intensidad varían cada año.",
        pt: "Sim, pode haver neve durante o inverno, mas o período e a intensidade variam a cada ano."
      }
    },
    {
      q: { en: "Is Shimla suitable for a honeymoon?", es: "¿Es adecuada para una luna de miel?", pt: "Shimla é adequada para lua de mel?" },
      a: {
        en: "Yes, its mountain views, cafés, scenic walks and romantic atmosphere make it popular with honeymooners.",
        es: "Sí, sus vistas montañosas, cafeterías, paseos y ambiente romántico la hacen popular entre parejas.",
        pt: "Sim, suas vistas montanhosas, cafés, passeios e atmosfera romântica fazem de Shimla um destino popular para casais."
      }
    }
  ]
};

// 2. KASOL DETAILS
const kasolDetails = {
  tagline: {
    en: "Kasol is a scenic Himalayan village in Himachal Pradesh's Parvati Valley, known for mountain landscapes, rivers, trekking routes, cafés and a relaxed backpacker atmosphere.",
    es: "Kasol es un pintoresco pueblo del Himalaya en el valle de Parvati, conocido por sus paisajes montañosos, ríos, rutas de trekking, cafeterías y ambiente relajado.",
    pt: "Kasol é uma vila cênica do Himalaia no Vale de Parvati, conhecida por suas montanhas, rios, trilhas, cafés e atmosfera descontraída."
  },
  overview: {
    en: "Kasol is a popular mountain destination located along the Parvati River. Surrounded by pine forests and dramatic Himalayan peaks, it is a favourite base for travellers exploring the Parvati Valley. Nearby villages such as Manikaran, Tosh and Chalal offer opportunities for trekking, nature walks and cultural exploration. Kasol is particularly popular among backpackers, young travellers, photographers and adventure enthusiasts.",
    es: "Kasol es un popular destino de montaña situado junto al río Parvati. Rodeado de bosques de pinos y espectaculares picos del Himalaya, es una base favorita para explorar el valle de Parvati. Pueblos cercanos como Manikaran, Tosh y Chalal ofrecen oportunidades para trekking, caminatas y experiencias culturales. Kasol es especialmente popular entre mochileros, jóvenes viajeros, fotógrafos y amantes de la aventura.",
    pt: "Kasol é um popular destino de montanha localizado às margens do rio Parvati. Cercado por florestas de pinheiros e impressionantes picos do Himalaia, é uma excelente base para explorar o Vale de Parvati. Vilas próximas como Manikaran, Tosh e Chalal oferecem oportunidades para trekking, caminhadas e experiências culturais. Kasol é especialmente popular entre mochileiros, jovens viajantes, fotógrafos e amantes de aventura."
  },
  highlights: [
    {
      title: { en: "Parvati River", es: "Río Parvati", pt: "Rio Parvati" },
      desc: {
        en: "Enjoy scenic views, riverside walks and peaceful natural spots along the Parvati River.",
        es: "Disfruta de las vistas y paseos junto al río Parvati.",
        pt: "Aprecie belas vistas e caminhadas às margens do rio Parvati."
      }
    },
    {
      title: { en: "Chalal Village", es: "Aldea Chalal", pt: "Vila de Chalal" },
      desc: {
        en: "Trek to this quiet village known for pine forests, local homes and riverside trails.",
        es: "Haz una caminata a esta aldea tranquila rodeada de pinos.",
        pt: "Faça uma caminhada a esta vila tranquila cercada por pinheiros."
      }
    },
    {
      title: { en: "Manikaran Sahib", es: "Manikaran Sahib", pt: "Manikaran Sahib" },
      desc: {
        en: "Visit the famous gurudwara known for hot springs, spiritual heritage and mountain views.",
        es: "Visita la famosa gurudwara conocida por sus aguas termales.",
        pt: "Visite o famoso templo Sikh conhecido por suas fontes termais."
      }
    },
    {
      title: { en: "Tosh Valley", es: "Valle de Tosh", pt: "Vale de Tosh" },
      desc: {
        en: "Explore the nearby village of Tosh for dramatic views, traditional architecture and trekking routes.",
        es: "Explora la aldea cercana de Tosh para ver arquitectura tradicional y paisajes.",
        pt: "Explore a vila vizinha de Tosh para ver arquitetura tradicional e belas paisagens."
      }
    },
    {
      title: { en: "Trekking Routes", es: "Rutas de Trekking", pt: "Trilhas do Himalaia" },
      desc: {
        en: "Kasol serves as a base for beautiful Himalayan trails, including Kheerganga and Sar Pass.",
        es: "Kasol es una excelente base para realizar senderismo por el Himalaya.",
        pt: "Kasol é uma excelente base para realizar trilhas pelo Himalaia."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Walk Parvati River", es: "Pasear junto al Río Parvati", pt: "Caminhar às Margens do Rio Parvati" },
      desc: {
        en: "Walk along the Parvati River for peaceful scenery and beautiful mountain views.",
        es: "Camina junto al río Parvati para disfrutar de paisajes tranquilos y hermosas vistas.",
        pt: "Caminhe às margens do rio Parvati para apreciar paisagens tranquilas e belas vistas."
      }
    },
    {
      name: { en: "Trek to Chalal Village", es: "Senderismo a la Aldea Chalal", pt: "Trilha para a Vila de Chalal" },
      desc: {
        en: "Enjoy a short trek through pine forests to reach the quiet village of Chalal.",
        es: "Disfruta de una caminata corta a través de bosques de pinos hasta la tranquila aldea de Chalal.",
        pt: "Faça uma trilha curta por florestas de pinheiros para chegar à pacífica vila de Chalal."
      }
    },
    {
      name: { en: "Visit Manikaran Sahib", es: "Visitar Manikaran Sahib", pt: "Visitar Manikaran Sahib" },
      desc: {
        en: "Explore the historic gurudwara, famous for spiritual heritage and natural hot springs.",
        es: "Explora la famosa gurudwara, conocida por sus aguas termales y espiritualidad.",
        pt: "Explore a famosa gurudwara, conhecida por suas águas termais e espiritualidade."
      }
    },
    {
      name: { en: "Explore Tosh Valley", es: "Explorar el Valle de Tosh", pt: "Explorar o Vale de Tosh" },
      desc: {
        en: "Explore Tosh and other nearby mountain villages to experience traditional Himachali lifestyle.",
        es: "Explora Tosh y otras aldeas cercanas para conocer el estilo de vida tradicional de Himachal.",
        pt: "Explore Tosh e outras vilas próximas para conhecer o estilo de vida tradicional do Himachal."
      }
    },
    {
      name: { en: "Cafés & Himalayan Views", es: "Cafeterías y Vistas del Himalaya", pt: "Cafés e Vistas do Himalaia" },
      desc: {
        en: "Relax at local cafés and enjoy scenic Himalayan views in Parvati Valley.",
        es: "Relájate en cafeterías locales y disfruta de hermosas vistas del Himalaya.",
        pt: "Relaxe nos cafés locais e aprecie belas vistas do Himalaia."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Kasol is accessible by road from Bhuntar Airport (30 km away) or broad-gauge railway stations like Chandigarh, followed by road transit.",
      es: "Kasol es accesible por carretera desde Bhuntar o Chandigarh.",
      pt: "Kasol é acessível por estrada a partir de Bhuntar ou Chandigarh."
    },
    nearestAirport: "Bhuntar Airport (KUU)",
    nearestRailway: "Joginder Nagar / Chandigarh Junction (CDG)",
    transportOptions: "Buses, Taxis, Treks",
    distanceFromMajorCities: "Manali (75 km), Chandigarh (270 km)",
    recommendedStay: "3-5 Days",
    avgTemp: "5°C - 25°C",
    currency: "INR",
    localLanguage: "Pahari, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Backpacker destination. Take care during river treks and slippery roads.",
      es: "Destino mochilero seguro.",
      pt: "Destino mochileiro seguro."
    }
  },
  gettingAround: [
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "The best way to explore Kasol town and central market areas.",
        es: "Caminar es la mejor opción para recorrer Kasol.",
        pt: "Caminhar é a melhor maneira de explorar Kasol."
      },
      recommended: true
    },
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Convenient for visiting nearby villages and trailheads.",
        es: "Cómodo para visitar pueblos cercanos.",
        pt: "Conveniente para visitar vilas próximas."
      },
      recommended: true
    },
    {
      transportType: "Buses",
      title: { en: "Buses", es: "Autobuses", pt: "Ônibus" },
      desc: {
        en: "Buses are available connecting Kasol with major nearby towns.",
        es: "Los autobuses conectan con las principales ciudades cercanas.",
        pt: "Os ônibus conectam com as principais cidades próximas."
      },
      recommended: false
    },
    {
      transportType: "Private Taxi",
      title: { en: "Private Taxi", es: "Taxi Privado", pt: "Táxi Particular" },
      desc: {
        en: "Recommended for Manikaran and Tosh routes where regular transport is limited.",
        es: "Se recomienda taxi privado para rutas a Manikaran y Tosh.",
        pt: "Recomenda-se táxi particular para rotas até Manikaran e Tosh."
      },
      recommended: true
    },
    {
      transportType: "Trekking",
      title: { en: "Trekking", es: "Trekking", pt: "Trekking" },
      desc: {
        en: "Best for reaching selected nearby villages and high Parvati Valley trails.",
        es: "La mejor opción para llegar a determinados senderos y pueblos.",
        pt: "A melhor opção para chegar a vilas e trilhas montanhosas."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Shoes", es: "Calzado", pt: "Calçado" },
      desc: {
        en: "Wear proper trekking shoes.",
        es: "Usa calzado de trekking adecuado.",
        pt: "Use calçados de trekking adequados."
      }
    },
    {
      title: { en: "Warm Layers", es: "Ropa de Abrigo", pt: "Roupas Quentes" },
      desc: {
        en: "Carry warm layers even outside winter.",
        es: "Lleva ropa abrigada, incluso fuera de invierno.",
        pt: "Leve roupas quentes, mesmo fora do inverno."
      }
    },
    {
      title: { en: "Cash", es: "Efectivo", pt: "Dinheiro em Espécie" },
      desc: {
        en: "Keep cash for smaller villages and local businesses.",
        es: "Lleva efectivo para los pueblos más pequeños.",
        pt: "Leve dinheiro para as vilas menores."
      }
    },
    {
      title: { en: "Road Status", es: "Estado de Rutas", pt: "Estado das Estradas" },
      desc: {
        en: "Check trekking and road conditions before heading to remote areas.",
        es: "Verifica las condiciones de las carreteras antes de ir a zonas remotas.",
        pt: "Verifique as condições das estradas antes de ir para áreas remotas."
      }
    },
    {
      title: { en: "Cleanliness", es: "Respeto y Limpieza", pt: "Respeito e Limpeza" },
      desc: {
        en: "Respect local communities and keep mountain areas clean.",
        es: "Respeta a las comunidades locales y mantén limpias las montañas.",
        pt: "Respeite as comunidades locais e mantenha as montanhas limpas."
      }
    }
  ],
  hotels: [
    {
      name: "The Himalayan Village",
      tier: "Luxury",
      desc: {
        en: "Traditional-style resort near Kasol.",
        es: "Resort de estilo tradicional cerca de Kasol.",
        pt: "Resort em estilo tradicional perto de Kasol."
      },
      image: ""
    },
    {
      name: "Parvati Woods Cottage",
      tier: "Premium",
      desc: {
        en: "Peaceful mountain accommodation.",
        es: "Alojamiento tranquilo en la montaña.",
        pt: "Hospedagem tranquila na montanha."
      },
      image: ""
    },
    {
      name: "Whoopers Hostel Kasol",
      tier: "Budget",
      desc: {
        en: "Popular budget-friendly hostel option.",
        es: "Albergue económico muy popular.",
        pt: "Albergue econômico muito popular."
      },
      image: ""
    },
    {
      name: "The Hosteller Kasol",
      tier: "Budget",
      desc: {
        en: "Social stay popular with young travellers.",
        es: "Alojamiento social popular entre viajeros jóvenes.",
        pt: "Hospedagem social popular entre jovens viajantes."
      },
      image: ""
    },
    {
      name: "Kasol Heights",
      tier: "Premium",
      desc: {
        en: "Comfortable accommodation surrounded by mountain scenery.",
        es: "Alojamiento confortable rodeado de paisajes de montaña.",
        pt: "Hospedagem confortável cercada por paisagens montanhosas."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Siddu, Chana Madra, Himachali Dham, Momos and Thukpa.",
    es: "Pruebe Siddu, Chana Madra, Himachali Dham, Momos y Thukpa.",
    pt: "Prove Siddu, Chana Madra, Himachali Dham, Momos e Thukpa."
  },
  localFoodDishes: [
    {
      name: { en: "Siddu", es: "Siddu", pt: "Siddu" },
      desc: {
        en: "Steamed yeast bread stuffed with local fillings, served with ghee.",
        es: "Pan al vapor relleno al estilo de Himachal, servido con ghee.",
        pt: "Pão cozido no vapor recheado ao estilo do Himachal, servido com ghee."
      }
    },
    {
      name: { en: "Chana Madra", es: "Chana Madra", pt: "Chana Madra" },
      desc: {
        en: "Traditional chickpea curry in yoghurt gravy.",
        es: "Curry tradicional de garbanzos en salsa de yogur.",
        pt: "Curry tradicional de grão-de-bico em molho de iogurte."
      }
    },
    {
      name: { en: "Himachali Dham", es: "Himachali Dham", pt: "Himachali Dham" },
      desc: {
        en: "Traditional festive thali with rice, dal and local curries.",
        es: "Thali festivo tradicional con arroz, dal y currys locales.",
        pt: "Thali festivo tradicional com arroz, dal e curries locais."
      }
    },
    {
      name: { en: "Momos", es: "Momos", pt: "Momos" },
      desc: {
        en: "Steamed or fried dumplings filled with vegetables or meat.",
        es: "Empanadillas al vapor o fritas rellenas de verduras o carne.",
        pt: "Bolinhos cozidos no vapor ou fritos recheados de vegetais ou carne."
      }
    },
    {
      name: { en: "Thukpa", es: "Thukpa", pt: "Thukpa" },
      desc: {
        en: "Tibetan-style noodle soup with vegetables and traditional spices.",
        es: "Sopa de fideos de estilo tibetano con verduras y especias.",
        pt: "Sopa de macarrão em estilo tibetano com vegetais e especiarias."
      }
    }
  ],
  bestTime: {
    en: "March to June and September to November are generally good periods for trekking and exploring the valley. Winter can bring cold temperatures and difficult road conditions.",
    es: "De marzo a junio y de septiembre a noviembre suelen ser buenos períodos para hacer trekking y explorar el valle. El invierno puede traer temperaturas muy bajas y condiciones difíciles en las carreteras.",
    pt: "Março a junho e setembro a novembro geralmente são bons períodos para trekking e exploração do vale. O inverno pode trazer temperaturas baixas e condições difíceis nas estradas."
  },
  faqs: [
    {
      q: { en: "What is Kasol famous for?", es: "¿Por qué es famosa Kasol?", pt: "Pelo que Kasol é famosa?" },
      a: {
        en: "Kasol is famous for the Parvati Valley, mountain scenery, trekking and relaxed backpacker culture.",
        es: "Kasol es famoso por el valle de Parvati, sus paisajes montañosos, trekking y ambiente mochilero.",
        pt: "Kasol é famoso pelo Vale de Parvati, paisagens montanhosas, trekking e cultura mochileira."
      }
    },
    {
      q: { en: "How many days are enough for Kasol?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "3–5 days are ideal for Kasol and nearby villages.",
        es: "3–5 días son ideales para Kasol y sus pueblos cercanos.",
        pt: "3–5 dias são ideais para Kasol e as vilas próximas."
      }
    },
    {
      q: { en: "Is Kasol suitable for families?", es: "¿Es adecuada para familias?", pt: "Kasol é adequada para famílias?" },
      a: {
        en: "Yes, but families should choose easier walks and comfortable accommodation.",
        es: "Sí, pero las familias deberían elegir caminatas sencillas y alojamiento cómodo.",
        pt: "Sim, mas famílias devem escolher trilhas mais fáceis e hospedagem confortável."
      }
    },
    {
      q: { en: "Can you visit Kasol in winter?", es: "¿Se puede visitar en invierno?", pt: "Pode ser visitada no inverno?" },
      a: {
        en: "Yes, but winter weather can be cold and road conditions may change.",
        es: "Sí, pero el invierno puede ser muy frío y las condiciones de las carreteras pueden cambiar.",
        pt: "Sim, mas o inverno pode ser muito frio e as condições das estradas podem mudar."
      }
    },
    {
      q: { en: "What are popular places near Kasol?", es: "¿Qué lugares recomendados hay cerca?", pt: "Quais os locais próximos recomendados?" },
      a: {
        en: "Manikaran, Chalal, Tosh and other Parvati Valley villages are popular nearby destinations.",
        es: "Manikaran, Chalal, Tosh y otros pueblos del valle de Parvati son destinos cercanos populares.",
        pt: "Manikaran, Chalal, Tosh e outras vilas do Vale de Parvati são destinos próximos populares."
      }
    }
  ]
};

// 3. MANALI DETAILS
const manaliDetails = {
  tagline: {
    en: "Manali is a popular Himalayan resort town known for snow-covered mountains, valleys, rivers, adventure activities, temples and scenic landscapes.",
    es: "Manali es una popular ciudad turística del Himalaya conocida por sus montañas nevadas, valles, ríos, actividades de aventura, templos y paisajes naturales.",
    pt: "Manali é uma popular cidade turística do Himalaia conhecida por suas montanhas nevadas, vales, rios, atividades de aventura, templos e belas paisagens."
  },
  overview: {
    en: "Manali is one of Himachal Pradesh's most popular mountain destinations, surrounded by the Beas River, pine forests and high Himalayan peaks. The town offers a mix of nature, adventure, culture and relaxation. Visitors can explore Old Manali, Hadimba Temple, Solang Valley and nearby mountain routes, while winter brings opportunities for snow experiences. Manali is suitable for families, couples, honeymooners and adventure travellers.",
    es: "Manali es uno de los destinos de montaña más populares de Himachal Pradesh, rodeado por el río Beas, bosques de pinos y altos picos del Himalaya. La ciudad ofrece una combinación de naturaleza, aventura, cultura y relajación. Los visitantes pueden explorar Old Manali, el templo de Hadimba, el valle de Solang y las rutas montañosas cercanas. Manali es ideal para familias, parejas, lunamieleros y viajeros de aventura.",
    pt: "Manali é um dos destinos de montanha mais populares de Himachal Pradesh, cercado pelo rio Beas, florestas de pinheiros e altos picos do Himalaia. A cidade oferece uma combinação de natureza, aventura, cultura e relaxamento. Os visitantes podem explorar Old Manali, o Templo de Hadimba, o Vale de Solang e as rotas montanhosas próximas. Manali é ideal para famílias, casais, lua de mel e viajantes de aventura."
  },
  highlights: [
    {
      title: { en: "Solang Valley", es: "Valle de Solang", pt: "Vale de Solang" },
      desc: {
        en: "Enjoy adventure sports, cable car rides and beautiful valley landscapes.",
        es: "Disfruta de deportes de aventura, teleférico y paisajes del valle.",
        pt: "Aproveite esportes de aventura, teleférico e belas paisagens."
      }
    },
    {
      title: { en: "Old Manali", es: "Old Manali", pt: "Old Manali" },
      desc: {
        en: "Explore historic streets, local cafés, traditional wooden architecture and a relaxed atmosphere.",
        es: "Explora calles históricas, cafés y arquitectura tradicional de madera.",
        pt: "Explore ruas históricas, cafés locais e arquitetura de madeira."
      }
    },
    {
      title: { en: "Hadimba Temple", es: "Templo de Hadimba", pt: "Templo de Hadimba" },
      desc: {
        en: "Visit the famous historic wooden temple surrounded by tall pine forests.",
        es: "Visita el famoso templo histórico de madera rodeado de pinos.",
        pt: "Visite o famoso templo histórico de madeira cercado por pinheiros."
      }
    },
    {
      title: { en: "Rohtang Pass Region", es: "Región del Paso de Rohtang", pt: "Região do Passo de Rohtang" },
      desc: {
        en: "Discover high-altitude mountain landscapes, views and seasonal snow conditions.",
        es: "Descubre paisajes de alta montaña y nieve durante la temporada.",
        pt: "Descubra paisagens de alta montanha e neve durante a temporada."
      }
    },
    {
      title: { en: "Beas River & Scenery", es: "Río Beas y Paisajes", pt: "Rio Beas e Paisagens" },
      desc: {
        en: "Admire beautiful river views, pine forests and surrounding Himalayan peaks.",
        es: "Admira las vistas del río, bosques de pinos y los picos del Himalaya.",
        pt: "Observe belas vistas do rio, florestas de pinheiros e os picos do Himalaia."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Old Manali", es: "Explorar Old Manali", pt: "Explorar Old Manali" },
      desc: {
        en: "Walk through Old Manali's streets, enjoying local cafés, wooden houses and a relaxed atmosphere.",
        es: "Camina por las calles de Old Manali, disfrutando de cafeterías locales y casas de madera.",
        pt: "Caminhe pelas ruas de Old Manali, desfrutando de cafés locais e casas de madeira."
      }
    },
    {
      name: { en: "Visit Hadimba Temple", es: "Visitar el Templo de Hadimba", pt: "Visitar o Templo de Hadimba" },
      desc: {
        en: "Visit the historic temple built inside the peaceful Dhungri Van Vihar pine forest.",
        es: "Visita el templo histórico construido en el tranquilo bosque de pinos.",
        pt: "Visite o templo histórico construído na pacífica floresta de pinheiros."
      }
    },
    {
      name: { en: "Solang Valley Adventures", es: "Aventuras en el Valle de Solang", pt: "Aventuras no Vale de Solang" },
      desc: {
        en: "Enjoy paragliding, zorbing, and other outdoor adventure activities in Solang Valley.",
        es: "Disfruta de parapente, zorbing y otras actividades de aventura al aire libre.",
        pt: "Aproveite paragliding, zorbing e outras atividades de aventura ao ar livre."
      }
    },
    {
      name: { en: "Winter Snow Experience", es: "Experiencias de Nieve", pt: "Experiência de Neve no Inverno" },
      desc: {
        en: "Experience winter sports, snow walks, and seasonal mountain landscapes.",
        es: "Disfruta de deportes de invierno y nieve en los paisajes montañosos.",
        pt: "Aproveite esportes de inverno e neve nas paisagens montanhosas."
      }
    },
    {
      name: { en: "Walks Along Beas River", es: "Paseos junto al Río Beas", pt: "Caminhadas no Rio Beas" },
      desc: {
        en: "Take relaxing walks along the Beas River to admire surrounding peaks and scenery.",
        es: "Da paseos relajantes junto al río Beas para admirar los picos circundantes.",
        pt: "Faça caminhadas relaxantes às margens do rio Beas para admirar os picos."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Manali is reached by road from Chandigarh (310 km) or Delhi, or via Bhuntar Airport (50 km away).",
      es: "Manali es accesible por carretera desde Chandigarh o Delhi.",
      pt: "Manali é acessível por estrada a partir de Chandigarh ou Delhi."
    },
    nearestAirport: "Bhuntar Airport (KUU)",
    nearestRailway: "Chandigarh Junction (CDG) / Kalka (KLK)",
    transportOptions: "Taxis, HRTC Buses, Private Cars",
    distanceFromMajorCities: "Shimla (250 km), Chandigarh (310 km)",
    recommendedStay: "4-5 Days",
    avgTemp: "2°C - 25°C",
    currency: "INR",
    localLanguage: "Pahari, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Lively mountain resort. Take care on Rohtang pass and adventure sites.",
      es: "Resort de montaña muy popular.",
      pt: "Resort de montanha muito popular."
    }
  },
  gettingAround: [
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Convenient for sightseeing and visiting popular local attractions.",
        es: "Cómodo para visitas y traslados turísticos locales.",
        pt: "Conveniente para passeios e transfers locais."
      },
      recommended: true
    },
    {
      transportType: "HRTC Buses",
      title: { en: "HRTC Buses", es: "Autobuses HRTC", pt: "Ônibus HRTC" },
      desc: {
        en: "Affordable options for travel between major towns in the valley.",
        es: "Opciones económicas para viajar por el valle.",
        pt: "Opções econômicas para viajar pelo vale."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Comfortable for families and larger groups seeking custom itineraries.",
        es: "Cómodo para familias y grupos grandes.",
        pt: "Confortável para famílias e grupos grandes."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal in Old Manali, markets and central areas.",
        es: "Ideal en Old Manali, mercados y el centro.",
        pt: "Ideal em Old Manali, mercados e região central."
      },
      recommended: false
    },
    {
      transportType: "Rental Vehicles",
      title: { en: "Rental Vehicles", es: "Alquiler de Vehículos", pt: "Aluguel de Veículos" },
      desc: {
        en: "Rental scooters and cars where permitted and suitable for the route.",
        es: "Alquiler de scooters y coches donde esté permitido.",
        pt: "Aluguel de scooters e carros onde for permitido."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Layers", es: "Ropa de Abrigo", pt: "Roupas em Camadas" },
      desc: {
        en: "Carry layers because temperatures can change quickly.",
        es: "Lleva capas de ropa, ya que las temperaturas pueden cambiar rápido.",
        pt: "Leve roupas em camadas, pois as temperaturas podem mudar rapidamente."
      }
    },
    {
      title: { en: "Shoes", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Wear comfortable shoes for mountain walks.",
        es: "Usa calzado cómodo para las caminatas por la montaña.",
        pt: "Use calçados confortáveis para as caminhadas na montanha."
      }
    },
    {
      title: { en: "Road Status", es: "Carreteras y Clima", pt: "Estradas e Clima" },
      desc: {
        en: "Check road and weather conditions before travelling to high-altitude areas.",
        es: "Verifica las carreteras antes de ir a zonas de gran altitud.",
        pt: "Verifique as estradas antes de ir para áreas de grande altitude."
      }
    },
    {
      title: { en: "Peak Bookings", es: "Reserva Anticipada", pt: "Reserva Antecipada" },
      desc: {
        en: "Book hotels early during peak summer and winter seasons.",
        es: "Reserva hoteles con anticipación en temporada alta de verano e invierno.",
        pt: "Reserve hotéis com antecedência na alta temporada de verão e inverno."
      }
    },
    {
      title: { en: "Basics", es: "Elementos Básicos", pt: "Itens Básicos" },
      desc: {
        en: "Carry sunscreen, water and basic medicines for outdoor trips.",
        es: "Lleva protector solar, agua y medicinas básicas para tus salidas.",
        pt: "Leve protetor solar, água e medicamentos básicos para os passeios."
      }
    }
  ],
  hotels: [
    {
      name: "The Himalayan",
      tier: "Luxury",
      desc: {
        en: "Heritage-style luxury accommodation offering castle vibes and high-end services.",
        es: "Alojamiento de lujo de estilo patrimonial con excelentes servicios.",
        pt: "Hospedagem de luxo em estilo clássico com excelentes serviços."
      },
      image: ""
    },
    {
      name: "The Anantmaya Resort",
      tier: "Luxury",
      desc: {
        en: "Premium mountain resort featuring spa services and spectacular views.",
        es: "Resort de montaña premium con spa y vistas espectaculares.",
        pt: "Resort de montanha premium com spa e vistas espetaculares."
      },
      image: ""
    },
    {
      name: "Shivadya Resort & Spa",
      tier: "Luxury",
      desc: {
        en: "Peaceful luxury stay built using local wood and stone.",
        es: "Alojamiento de lujo tranquilo construido con madera y piedra local.",
        pt: "Hospedagem de luxo tranquila construída com madeira e pedra locais."
      },
      image: ""
    },
    {
      name: "Johnson Lodge & Spa",
      tier: "Premium",
      desc: {
        en: "Comfortable central option with a popular restaurant and spa.",
        es: "Opción céntrica y cómoda con un restaurante popular y spa.",
        pt: "Opção central e confortável com um restaurante popular e spa."
      },
      image: ""
    },
    {
      name: "Manali Heights",
      tier: "Mid-range",
      desc: {
        en: "Popular hotel with mountain views located near Dhungri forest.",
        es: "Hotel popular con vistas a la montaña cerca del bosque de Dhungri.",
        pt: "Hotel popular com vista para a montanha perto da floresta de Dhungri."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Siddu, Chana Madra, Dham, Tudkiya Bhath and Momos.",
    es: "Pruebe Siddu, Chana Madra, Dham, Tudkiya Bhath y Momos.",
    pt: "Prove Siddu, Chana Madra, Dham, Tudkiya Bhath e Momos."
  },
  localFoodDishes: [
    {
      name: { en: "Siddu", es: "Siddu", pt: "Siddu" },
      desc: {
        en: "Local steamed bread stuffed with sweet or savory poppy seeds, served with ghee.",
        es: "Pan local al vapor relleno, servido con ghee.",
        pt: "Pão local cozido no vapor recheado, servido com ghee."
      }
    },
    {
      name: { en: "Chana Madra", es: "Chana Madra", pt: "Chana Madra" },
      desc: {
        en: "Chickpeas prepared in a rich spiced yoghurt-based gravy.",
        es: "Garbanzos preparados en una salsa de yogur especiado.",
        pt: "Grão-de-bico preparado em molho de iogurte temperado."
      }
    },
    {
      name: { en: "Dham", es: "Dham", pt: "Dham" },
      desc: {
        en: "Festive meal showcasing local curries, pulses, rice and desserts.",
        es: "Comida festiva que incluye currys locales, arroz y postres.",
        pt: "Refeição festiva que inclui curries locais, arroz e sobremesas."
      }
    },
    {
      name: { en: "Tudkiya Bhath", es: "Tudkiya Bhath", pt: "Tudkiya Bhath" },
      desc: {
        en: "Traditional spiced rice cooked with lentils, potatoes and local spices.",
        es: "Arroz especiado tradicional cocinado con lentejas y patatas.",
        pt: "Arroz temperado tradicional cozido com lentilhas e batatas."
      }
    },
    {
      name: { en: "Momos", es: "Momos", pt: "Momos" },
      desc: {
        en: "Himalayan-style dumplings filled with vegetables or meat, served with spicy chutney.",
        es: "Empanadillas al estilo del Himalaya rellenas de verduras o carne.",
        pt: "Bolinhos em estilo do Himalaia recheados de vegetais ou carne."
      }
    }
  ],
  bestTime: {
    en: "March to June is ideal for pleasant weather and outdoor activities. December to February is popular for snow experiences, depending on snowfall and road conditions.",
    es: "De marzo a junio es ideal para disfrutar de un clima agradable y actividades al aire libre. De diciembre a febrero es popular para experiencias de nieve, dependiendo de las nevadas y las condiciones de las carreteras.",
    pt: "De março a junho é ideal para clima agradável e atividades ao ar livre. Dezembro a fevereiro é popular para experiências com neve, dependendo da quantidade de neve e das condições das estradas."
  },
  faqs: [
    {
      q: { en: "What is Manali famous for?", es: "¿Por qué es famosa Manali?", pt: "Pelo que Manali é famosa?" },
      a: {
        en: "Manali is famous for Himalayan scenery, snow, Solang Valley, adventure activities and scenic valleys.",
        es: "Manali es famoso por sus paisajes del Himalaya, nieve, valle de Solang y actividades de aventura.",
        pt: "Manali é famoso pelas paisagens do Himalaia, neve, Vale de Solang e atividades de aventura."
      }
    },
    {
      q: { en: "How many days are enough for Manali?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "4–5 days are ideal for exploring Manali and nearby attractions.",
        es: "4–5 días son ideales para explorar Manali y sus alrededores.",
        pt: "4–5 dias são ideais para explorar Manali e seus arredores."
      }
    },
    {
      q: { en: "Is Manali good for a honeymoon?", es: "¿Es adecuada para una luna de miel?", pt: "Manali é adequada para lua de mel?" },
      a: {
        en: "Yes, Manali is a popular honeymoon destination because of its mountain scenery, resorts and romantic experiences.",
        es: "Sí, es un destino popular por sus paisajes, resorts y experiencias románticas.",
        pt: "Sim, é um destino popular por suas paisagens, resorts e experiências românticas."
      }
    },
    {
      q: { en: "When can you see snow in Manali?", es: "¿Cuándo se puede ver nieve?", pt: "Quando se pode ver neve?" },
      a: {
        en: "Snow is most likely during winter, although exact snowfall varies each year.",
        es: "La nieve es más probable durante el invierno, aunque varía cada año.",
        pt: "A neve é mais provável durante o inverno, embora varie a cada ano."
      }
    },
    {
      q: { en: "Is Manali suitable for families?", es: "¿Es adecuada para familias?", pt: "Manali é adequada para famílias?" },
      a: {
        en: "Yes, families can enjoy sightseeing, nature, temples, scenic drives and selected adventure activities.",
        es: "Sí, las familias pueden disfrutar de turismo, naturaleza, templos, recorridos panorámicos y actividades de aventura seleccionadas.",
        pt: "Sim, famílias podem aproveitar passeios, natureza, templos, viagens panorâmicas e algumas atividades de aventura."
      }
    }
  ]
};

// 4. DHARAMSHALA DETAILS
const dharamshalaDetails = {
  tagline: {
    en: "Dharamshala is a peaceful Himalayan destination known for Tibetan culture, monasteries, mountain scenery, pine forests and the nearby hill town of McLeod Ganj.",
    es: "Dharamshala es un tranquilo destino del Himalaya conocido por su cultura tibetana, monasterios, paisajes montañosos, bosques de pinos y la cercana localidad de McLeod Ganj.",
    pt: "Dharamshala é um tranquilo destino do Himalaia conhecido pela cultura tibetana, mosteiros, paisagens montanhosas, florestas de pinheiros e pela vizinha cidade de McLeod Ganj."
  },
  overview: {
    en: "Dharamshala is one of Himachal Pradesh's most distinctive mountain destinations, combining Himalayan landscapes with Tibetan culture and spiritual traditions. McLeod Ganj, located in the upper part of the destination, is known for Tibetan monasteries, cafés, meditation centres and the residence of the Dalai Lama. Nearby attractions such as Bhagsu Waterfall, Dharamkot and Triund make the region popular among nature lovers, trekkers and travellers seeking a peaceful mountain retreat.",
    es: "Dharamshala es uno de los destinos de montaña más singulares de Himachal Pradesh, donde los paisajes del Himalaya se combinan con la cultura tibetana y las tradiciones espirituales. McLeod Ganj, situado en la parte alta, es conocido por sus monasterios tibetanos, cafeterías, centros de meditación y por ser la residencia del Dalai Lama. Lugares cercanos como la cascada de Bhagsu, Dharamkot y Triund hacen que la región sea popular entre amantes de la naturaleza, excursionistas y viajeros que buscan tranquilidad.",
    pt: "Dharamshala é um dos destinos de montanha mais distintos de Himachal Pradesh, combinando paisagens do Himalaia com cultura tibetana e tradições espirituais. McLeod Ganj, localizado na parte alta do destino, é conhecido por seus mosteiros tibetanos, cafés, centros de meditação e por ser a residência do Dalai Lama. Atrações próximas como a Cachoeira de Bhagsu, Dharamkot e Triund tornam a região popular entre amantes da natureza, trekkers e viajantes que procuram um refúgio tranquilo nas montanhas."
  },
  highlights: [
    {
      title: { en: "McLeod Ganj", es: "McLeod Ganj", pt: "McLeod Ganj" },
      desc: {
        en: "Explore the famous upper town filled with Tibetan monasteries, cafés, and markets.",
        es: "Explora la famosa localidad alta con templos, cafeterías y mercados tibetanos.",
        pt: "Explore a famosa vila alta com templos, cafés e mercados tibetanos."
      }
    },
    {
      title: { en: "Namgyal Monastery", es: "Monasterio de Namgyal", pt: "Mosteiro Namgyal" },
      desc: {
        en: "Visit the spiritual home of the Dalai Lama and learn about Tibetan Buddhism.",
        es: "Visita el hogar espiritual del Dalai Lama y conoce el budismo tibetano.",
        pt: "Visite a residência espiritual do Dalai Lama e conheça o budismo tibetano."
      }
    },
    {
      title: { en: "Bhagsu Waterfall", es: "Cascada de Bhagsu", pt: "Cachoeira de Bhagsu" },
      desc: {
        en: "Enjoy scenic views, mountain walks, and refreshing waters near McLeod Ganj.",
        es: "Disfruta de vistas, paseos por la montaña y el entorno de la cascada.",
        pt: "Aprecie belas vistas, caminhadas e o ambiente da cachoeira."
      }
    },
    {
      title: { en: "Triund Trek", es: "Triund Trek", pt: "Trilha de Triund" },
      desc: {
        en: "Experience one of Himachal's best-known day treks, offering views of the Dhauladhar Range.",
        es: "Disfruta de una de las rutas de senderismo más conocidas con vistas espectaculares.",
        pt: "Aproveite uma das trilhas mais conhecidas com vistas espetaculares."
      }
    },
    {
      title: { en: "Tibetan Culture & Food", es: "Cultura y Gastronomía Tibetana", pt: "Cultura e Gastronomia Tibetana" },
      desc: {
        en: "Taste momos, thukpa, and explore traditional Tibetan arts, crafts, and heritage.",
        es: "Prueba momos, thukpa y descubre artesanías y arte tradicional.",
        pt: "Prove momos, thukpa e descubra artesanato e arte tradicional."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore McLeod Ganj", es: "Explorar McLeod Ganj", pt: "Explorar McLeod Ganj" },
      desc: {
        en: "Discover McLeod Ganj's streets, markets, cafés and unique Tibetan atmosphere.",
        es: "Descubre las calles, bazares, cafeterías y el ambiente tibetano de McLeod Ganj.",
        pt: "Descubra as ruas, mercados, cafés e a atmosfera tibetana de McLeod Ganj."
      }
    },
    {
      name: { en: "Visit Namgyal Monastery", es: "Visitar el Monasterio Namgyal", pt: "Visitar o Mosteiro Namgyal" },
      desc: {
        en: "Explore the monastery complex and discover Tibetan Buddhist spiritual traditions.",
        es: "Explora el complejo del monasterio y conoce las tradiciones budistas tibetanas.",
        pt: "Explore o complexo do mosteiro e conheça as tradições budistas tibetanas."
      }
    },
    {
      name: { en: "Walk to Bhagsu Waterfall", es: "Caminar a la Cascada de Bhagsu", pt: "Caminhar até a Cachoeira de Bhagsu" },
      desc: {
        en: "Take a scenic walk to Bhagsu Waterfall and visit the nearby historic Bhagsunath Temple.",
        es: "Disfruta de una caminata panorámica a la cascada y visita el templo cercano.",
        pt: "Faça uma caminhada cênica até a cachoeira e visite o templo próximo."
      }
    },
    {
      name: { en: "Tibetan Food & Culture", es: "Gastronomía y Cultura Tibetana", pt: "Comida e Cultura Tibetana" },
      desc: {
        en: "Experience Tibetan culture through local food, handicrafts and heritage libraries.",
        es: "Experimenta la cultura tibetana con su comida local, artesanías y bibliotecas.",
        pt: "Vivencie a cultura tibetana com comida local, artesanato e bibliotecas."
      }
    },
    {
      name: { en: "Triund Trek", es: "Trekking a Triund", pt: "Trilha de Triund" },
      desc: {
        en: "Trek towards Triund for panoramic mountain views, subject to current trail conditions.",
        es: "Haz una caminata hacia Triund para ver vistas panorámicas del Himalaya.",
        pt: "Faça uma trilha rumo a Triund para apreciar vistas panorâmicas do Himalaia."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Dharamshala is accessible by flights to Kangra Airport, trains to Pathankot (85 km), or direct road buses from major cities.",
      es: "Dharamshala es accesible por avión al aeropuerto de Kangra, tren a Pathankot o autobús.",
      pt: "Dharamshala é acessível por avião ao aeroporto de Kangra, trem a Pathankot ou ônibus."
    },
    nearestAirport: "Kangra Airport (DHM)",
    nearestRailway: "Pathankot Junction (PTK)",
    transportOptions: "Taxis, Auto-rickshaws, Buses",
    distanceFromMajorCities: "Chandigarh (250 km), Delhi (480 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "8°C - 26°C",
    currency: "INR",
    localLanguage: "Pahari, Tibetan, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and spiritual environment. Take care on steep steps.",
      es: "Entorno muy seguro y espiritual.",
      pt: "Ambiente muito seguro e espiritual."
    }
  },
  gettingAround: [
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Convenient for travel between lower Dharamshala and upper McLeod Ganj.",
        es: "Cómodo para trasladarse entre Dharamshala y McLeod Ganj.",
        pt: "Conveniente para se deslocar entre Dharamshala e McLeod Ganj."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short routes in lower Dharamshala areas.",
        es: "Útil para trayectos cortos en la zona baja de Dharamshala.",
        pt: "Útil para trajetos curtos na parte baixa de Dharamshala."
      },
      recommended: false
    },
    {
      transportType: "Local Buses",
      title: { en: "Local Buses", es: "Autobuses Locales", pt: "Ônibus Locais" },
      desc: {
        en: "Affordable options for travel to nearby destinations like Kangra and Palampur.",
        es: "Opciones muy económicas para ir a Kangra y Palampur.",
        pt: "Opções muito econômicas para ir a Kangra e Palampur."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal around McLeod Ganj markets, temples and Dharamkot lanes.",
        es: "Ideal para recorrer los mercados de McLeod Ganj y Dharamkot.",
        pt: "Ideal para explorar os mercados de McLeod Ganj e Dharamkot."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Convenient for day trips to Kangra Fort, Palampur tea gardens and Bir Billing.",
        es: "Cómodo para excursiones de un día a fuertes y plantaciones.",
        pt: "Conveniente para passeios de um dia a fortes e plantações."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Layers", es: "Ropa de Abrigo", pt: "Roupas Quentes" },
      desc: {
        en: "Carry warm layers, especially during winter.",
        es: "Lleva ropa abrigada, especialmente en invierno.",
        pt: "Leve roupas quentes, especialmente no inverno."
      }
    },
    {
      title: { en: "Shoes", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Wear good walking shoes for steep streets and trails.",
        es: "Usa calzado cómodo para las cuestas y senderos.",
        pt: "Use calçados confortáveis para as ruas íngremes e trilhas."
      }
    },
    {
      title: { en: "Monastery Code", es: "Respeto en Templos", pt: "Respeito nos Templos" },
      desc: {
        en: "Dress respectfully when visiting monasteries and religious sites.",
        es: "Viste respetuosamente al visitar templos y monasterios.",
        pt: "Vista-se com respeito ao visitar templos e mosteiros."
      }
    },
    {
      title: { en: "Triund Check", es: "Ruta de Triund", pt: "Caminhada a Triund" },
      desc: {
        en: "Check trekking conditions before starting the Triund route.",
        es: "Verifica las condiciones de la ruta de Triund antes de salir.",
        pt: "Verifique as condições da trilha de Triund antes de sair."
      }
    },
    {
      title: { en: "Transit Time", es: "Tiempo Adicional", pt: "Tempo de Viagem" },
      desc: {
        en: "Keep extra travel time because mountain roads can be slow.",
        es: "Reserva tiempo adicional, las carreteras de montaña pueden ser lentas.",
        pt: "Reserve um tempo extra, pois o trânsito nas montanhas pode ser lento."
      }
    }
  ],
  hotels: [
    {
      name: "Norbu The Montanna",
      tier: "Luxury",
      desc: {
        en: "Premium mountain resort offering modern high-end services.",
        es: "Resort de montaña premium con excelentes servicios modernos.",
        pt: "Resort de montanha premium com excelentes serviços modernos."
      },
      image: ""
    },
    {
      name: "Hyatt Regency Dharamshala Resort",
      tier: "Luxury",
      desc: {
        en: "Luxury resort with mountain surroundings and pine forest layouts.",
        es: "Resort de lujo rodeado de pinos y vistas espectaculares.",
        pt: "Resort de luxo cercado por pinheiros e vistas espetaculares."
      },
      image: ""
    },
    {
      name: "Fortune Park Moksha",
      tier: "Premium",
      desc: {
        en: "Comfortable premium accommodation with high-end recreational spots.",
        es: "Alojamiento confortable de categoría superior con spa y piscina.",
        pt: "Hospedagem confortável de categoria superior com spa e piscina."
      },
      image: ""
    },
    {
      name: "D's Casa",
      tier: "Mid-range",
      desc: {
        en: "Popular stay in McLeod Ganj with easy access to monasteries.",
        es: "Alojamiento popular en McLeod Ganj cerca de los templos.",
        pt: "Hospedagem popular em McLeod Ganj perto dos templos."
      },
      image: ""
    },
    {
      name: "Hotel Inclover",
      tier: "Mid-range",
      desc: {
        en: "Convenient accommodation in Dharamshala city centre.",
        es: "Alojamiento conveniente en el centro de Dharamshala.",
        pt: "Hospedagem conveniente no centro de Dharamshala."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Tibetan Momos, Thukpa, Tingmo, Shapta and Himachali Dham.",
    es: "Pruebe Momos, Thukpa, Tingmo, Shapta y Himachali Dham.",
    pt: "Prove Momos, Thukpa, Tingmo, Shapta e Himachali Dham."
  },
  localFoodDishes: [
    {
      name: { en: "Tibetan Momos", es: "Momos Tibetanos", pt: "Momos Tibetanos" },
      desc: {
        en: "Steamed or fried dumplings filled with local vegetables or meat, served with spicy chutney.",
        es: "Empanadillas al vapor o fritas con verduras o carne y salsa picante.",
        pt: "Bolinhos cozidos no vapor ou fritos com vegetais ou carne e molho picante."
      }
    },
    {
      name: { en: "Thukpa", es: "Thukpa", pt: "Thukpa" },
      desc: {
        en: "A comforting Tibetan-style noodle soup prepared with fresh vegetables or meat in a warm spiced broth.",
        es: "Sopa de fideos al estilo tibetano con verduras o carne.",
        pt: "Sopa de macarrão em estilo tibetano com vegetais ou carne."
      }
    },
    {
      name: { en: "Tingmo", es: "Tingmo", pt: "Tingmo" },
      desc: {
        en: "Steamed yeast-leavened Tibetan bread, soft and layered, served with spicy curries.",
        es: "Pan tibetano al vapor, suave y en capas, servido con currys.",
        pt: "Pão tibetano cozido no vapor, macio e em camadas, servido com curries."
      }
    },
    {
      name: { en: "Shapta", es: "Shapta", pt: "Shapta" },
      desc: {
        en: "Traditional Tibetan stir-fried meat cooked with onions, ginger and chillies.",
        es: "Carne salteada al estilo tibetano con cebolla, jengibre y chiles.",
        pt: "Carne salteada em estilo tibetano com cebola, gengibre e pimentas."
      }
    },
    {
      name: { en: "Himachali Dham", es: "Himachali Dham", pt: "Himachali Dham" },
      desc: {
        en: "Traditional festive thali presenting local curries, pulses and rice cooked in special methods.",
        es: "Thali festivo tradicional con arroz, legumbres y currys locales.",
        pt: "Thali festivo tradicional com arroz, leguminosas e curries locais."
      }
    }
  ],
  bestTime: {
    en: "March to June is ideal for pleasant weather and outdoor activities. September to November is also excellent for clear mountain views. Winter is suitable for cold-weather experiences, while trekking conditions can vary.",
    es: "De marzo a junio es ideal para disfrutar de un clima agradable y actividades al aire libre. De septiembre a noviembre también es excelente para disfrutar de vistas claras de las montañas. El invierno es adecuado para experiencias de frío, aunque las condiciones de trekking pueden variar.",
    pt: "De março a junho é ideal para clima agradável e atividades ao ar livre. Setembro a novembro também é excelente para vistas claras das montanhas. O inverno é adequado para experiências de frio, embora as condições para trekking possam variar."
  },
  faqs: [
    {
      q: { en: "What is Dharamshala famous for?", es: "¿Por qué es famosa Dharamshala?", pt: "Pelo que Dharamshala é famosa?" },
      a: {
        en: "Dharamshala is famous for Tibetan culture, monasteries, Himalayan scenery and McLeod Ganj.",
        es: "Dharamshala es famosa por la cultura tibetana, monasterios, paisajes del Himalaya y McLeod Ganj.",
        pt: "Dharamshala é famosa pela cultura tibetana, mosteiros, paisagens do Himalaia e McLeod Ganj."
      }
    },
    {
      q: { en: "How many days are enough for Dharamshala?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "3–4 days are generally enough for Dharamshala, McLeod Ganj and nearby attractions.",
        es: "3–4 días suelen ser suficientes para Dharamshala, McLeod Ganj y sus alrededores.",
        pt: "3–4 dias geralmente são suficientes para Dharamshala, McLeod Ganj e atrações próximas."
      }
    },
    {
      q: { en: "Is Dharamshala good for families?", es: "¿Es adecuada para familias?", pt: "Dharamshala é adequada para famílias?" },
      a: {
        en: "Yes, families can enjoy monasteries, waterfalls, scenic viewpoints, cafés and cultural attractions.",
        es: "Sí, las familias pueden disfrutar de monasterios, cascadas, miradores, cafeterías y atracciones culturales.",
        pt: "Sim, famílias podem aproveitar mosteiros, cachoeiras, mirantes, cafés e atrações culturais."
      }
    },
    {
      q: { en: "Is Dharamshala good for trekking?", es: "¿Es buena para hacer trekking?", pt: "Dharamshala é boa para trekking?" },
      a: {
        en: "Yes, the region offers trekking opportunities including the popular Triund route, subject to weather and trail conditions.",
        es: "Sí, la región ofrece rutas como el popular sendero de Triund, dependiendo del clima y las condiciones del camino.",
        pt: "Sim, a região oferece trilhas como a popular rota de Triund, dependendo do clima e das condições da trilha."
      }
    },
    {
      q: { en: "What is the best place to experience Tibetan culture?", es: "¿Cuál es el mejor lugar?", pt: "Qual o melhor local?" },
      a: {
        en: "McLeod Ganj is one of the best areas for Tibetan monasteries, cuisine, handicrafts and cultural experiences.",
        es: "McLeod Ganj es una de las mejores zonas para conocer monasterios, gastronomía, artesanías y cultura tibetana.",
        pt: "McLeod Ganj é uma das melhores áreas para conhecer mosteiros, culinária, artesanato e cultura tibetana."
      }
    }
  ]
};

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  const hpIdx = states.findIndex(s => s.slug === "himachal-pradesh");
  if (hpIdx !== -1) {
    console.log("Updating Himachal Pradesh cities in local file...");
    const hpState = states[hpIdx];
    hpState.cities = hpState.cities || [];
    
    // Update function helper
    const updateCity = (slug, details) => {
      const cityIdx = hpState.cities.findIndex(c => c.slug === slug);
      if (cityIdx !== -1) {
        hpState.cities[cityIdx] = { ...hpState.cities[cityIdx], ...details };
        console.log(`Updated city details: ${slug}`);
      } else {
        console.error(`City slug '${slug}' not found under Himachal Pradesh!`);
      }
    };

    updateCity("shimla", shimlaDetails);
    updateCity("kasol", kasolDetails);
    updateCity("manali", manaliDetails);
    updateCity("dharamshala", dharamshalaDetails);

    states[hpIdx] = hpState;
  } else {
    console.error("Himachal Pradesh state not found in states.json!");
  }

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for Himachal Pradesh cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const docRef = doc(firestore, "states", "himachal-pradesh");
    setDoc(docRef, states[hpIdx]).then(() => {
      console.log("🚀 SUCCESS: Remote Firestore 'himachal-pradesh' document successfully updated!");
      process.exit(0);
    }).catch(err => {
      console.error("❌ FAILED to upload to Firestore:", err);
      process.exit(1);
    });
  } else {
    console.log("Firebase API Key is missing. Local file updated. Skipping Firestore update.");
    process.exit(0);
  }
} else {
  console.error("Local states.json not found at:", statesPath);
  process.exit(1);
}
