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

// ======================== DESTINATIONS DATA DEFINITIONS ========================

const kolkataDetails = {
  tagline: {
    en: "Kolkata, the cultural capital of India, is known for colonial architecture, literature, art, festivals, historic landmarks and exceptional Bengali cuisine.",
    es: "Kolkata, la capital cultural de India, es conocida por su arquitectura colonial, literatura, arte, festivales, monumentos históricos y excelente gastronomía bengalí.",
    pt: "Kolkata, a capital cultural da Índia, é conhecida por sua arquitetura colonial, literatura, arte, festivais, monumentos históricos e excelente culinária bengali."
  },
  overview: {
    en: "Kolkata is a fascinating city where history, culture, literature and modern urban life come together. Once the capital of British India, the city is filled with grand colonial buildings, historic neighbourhoods, museums and cultural institutions. Visitors can explore Victoria Memorial, Howrah Bridge, Indian Museum, St. Paul's Cathedral and the lively streets of the old city. Kolkata is also famous for Bengali sweets, seafood, traditional art and the grand celebrations of Durga Puja.",
    es: "Kolkata es una ciudad fascinante donde se combinan historia, cultura, literatura y vida urbana moderna. Antigua capital de la India británica, está llena de grandes edificios coloniales, barrios históricos, museos e instituciones culturales. Los visitantes pueden conocer Victoria Memorial, Howrah Bridge, Indian Museum y St. Paul's Cathedral. La ciudad también es famosa por sus dulces bengalíes, mariscos, arte tradicional y las grandes celebraciones de Durga Puja.",
    pt: "Kolkata é uma cidade fascinante onde história, cultura, literatura e vida urbana moderna se encontram. Antiga capital da Índia britânica, a cidade possui grandes edifícios coloniais, bairros históricos, museus e instituições culturais. Os visitantes podem conhecer Victoria Memorial, Howrah Bridge, Indian Museum e St. Paul's Cathedral. Kolkata também é famosa por seus doces bengalis, frutos do mar, arte tradicional e pelas grandes celebrações de Durga Puja."
  },
  highlights: [
    {
      title: { en: "Victoria Memorial", es: "Victoria Memorial", pt: "Victoria Memorial" },
      desc: {
        en: "Magnificent marble monument surrounded by beautiful gardens.",
        es: "Magnífico monumento de mármol rodeado de hermosos jardines.",
        pt: "Magnífico monumento de mármore cercado por belos jardins."
      }
    },
    {
      title: { en: "Howrah Bridge", es: "Puente Howrah", pt: "Ponte Howrah" },
      desc: {
        en: "Iconic bridge and one of Kolkata's most recognisable landmarks.",
        es: "Puente icónico y uno de los monumentos más reconocibles de Kolkata.",
        pt: "Ponte icônica e um dos marcos mais conhecidos de Kolkata."
      }
    },
    {
      title: { en: "Indian Museum", es: "Indian Museum", pt: "Indian Museum" },
      desc: {
        en: "One of India's major museums with extensive historical collections.",
        es: "Uno de los principales museos de India con importantes colecciones históricas.",
        pt: "Um de principais museus da Índia com importantes coleções históricas."
      }
    },
    {
      title: { en: "Dakshineswar Kali Temple", es: "Templo Dakshineswar Kali", pt: "Templo Dakshineswar Kali" },
      desc: {
        en: "Important temple dedicated to Goddess Kali.",
        es: "Importante templo dedicado a la diosa Kali.",
        pt: "Importante templo dedicado à Deusa Kali."
      }
    },
    {
      title: { en: "Park Street", es: "Park Street", pt: "Park Street" },
      desc: {
        en: "Famous area for restaurants, cafés, nightlife and colonial atmosphere.",
        es: "Zona famosa por restaurantes, cafés, vida nocturna y ambiente colonial.",
        pt: "Área famosa por restaurantes, cafés, vida noturna e atmosfera colonial."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Victoria Memorial", es: "Visitar Victoria Memorial", pt: "Visitar Victoria Memorial" },
      desc: {
        en: "Visit Victoria Memorial.",
        es: "Visita Victoria Memorial.",
        pt: "Visite Victoria Memorial."
      }
    },
    {
      name: { en: "Walk Historic Streets", es: "Caminar por Calles Históricas", pt: "Caminhar por Ruas Históricas" },
      desc: {
        en: "Walk around the historic streets of central Kolkata.",
        es: "Camina por las calles históricas del centro de Kolkata.",
        pt: "Caminhe pelas ruas históricas do centro de Kolkata."
      }
    },
    {
      name: { en: "Explore Indian Museum", es: "Explorar Indian Museum", pt: "Explore o Indian Museum" },
      desc: {
        en: "Explore Indian Museum.",
        es: "Explora Indian Museum.",
        pt: "Explore o Indian Museum."
      }
    },
    {
      name: { en: "Visit Dakshineswar Kali Temple", es: "Visitar Templo Dakshineswar Kali", pt: "Visitar Templo Dakshineswar Kali" },
      desc: {
        en: "Visit Dakshineswar Kali Temple.",
        es: "Visita Dakshineswar Kali Temple.",
        pt: "Visite o Dakshineswar Kali Temple."
      }
    },
    {
      name: { en: "Try Bengali Cuisine", es: "Probar Comida Bengalí", pt: "Experimentar Comida Bengali" },
      desc: {
        en: "Try authentic Bengali cuisine.",
        es: "Prueba la auténtica gastronomía bengalí.",
        pt: "Experimente a autêntica culinária bengali."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Netaji Subhas Chandra Bose International Airport provides excellent connectivity. Howrah and Sealdah are major railway stations.",
      es: "Kolkata es accesible por aeropuerto internacional, tren o carreteras nacionales.",
      pt: "Kolkata é acessível por aeroporto internacional, trem ou rodovias nacionais."
    },
    nearestAirport: "Netaji Subhas Chandra Bose International Airport (CCU)",
    nearestRailway: "Howrah Junction (HWH) / Sealdah (SDAH)",
    transportOptions: "Metro, Yellow Taxis, App Taxis, Buses",
    distanceFromMajorCities: "Bhubaneswar (440 km), Patna (580 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "15°C - 35°C",
    currency: "INR",
    localLanguage: "Bengali, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Generally very safe. Watch your belongings in crowded markets.",
      es: "Seguro. Vigile sus pertenencias.",
      pt: "Seguro. Cuide de seus pertences."
    }
  },
  gettingAround: [
    {
      transportType: "Metro",
      title: { en: "Metro", es: "Metro", pt: "Metrô" },
      desc: {
        en: "Kolkata Metro is useful for major areas.",
        es: "El Metro de Kolkata es útil para las principales zonas.",
        pt: "O metrô de Kolkata é útil para as principais áreas."
      },
      recommended: true
    },
    {
      transportType: "Yellow Taxi",
      title: { en: "Yellow Taxi", es: "Taxi Amarillo", pt: "Táxi Amarelo" },
      desc: {
        en: "Yellow taxis are widely used.",
        es: "Los taxis amarillos son muy utilizados.",
        pt: "Os táxis amarelos são muito utilizados."
      },
      recommended: false
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "App-based taxis offer convenient transportation.",
        es: "Los taxis por aplicación ofrecen transporte cómodo.",
        pt: "Táxis por aplicativo oferecem transporte conveniente."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Buses connect different parts of the city.",
        es: "Los autobuses conectan diferentes partes de la ciudad.",
        pt: "Ônibus conectam diferentes partes da cidade."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is ideal in heritage areas.",
        es: "Caminar es ideal en las zonas históricas.",
        pt: "Caminhar é ideal nas áreas históricas."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Carry Umbrella", es: "Lleva paraguas", pt: "Leve guarda-chuva" },
      desc: {
        en: "Carry an umbrella during the monsoon.",
        es: "Lleva un paraguas durante el monzón.",
        pt: "Leve um guarda-chuva durante a temporada de monções."
      }
    },
    {
      title: { en: "Bengali Sweets", es: "Dulces y mariscos", pt: "Doces e frutos do mar" },
      desc: {
        en: "Try local Bengali sweets and seafood.",
        es: "Prueba los dulces bengalíes y mariscos locales.",
        pt: "Experimente os doces bengalis e frutos do mar locais."
      }
    },
    {
      title: { en: "Crowded Markets", es: "Mercados concurridos", pt: "Mercados movimentados" },
      desc: {
        en: "Keep belongings secure in crowded markets.",
        es: "Mantén tus pertenencias seguras en mercados concurridos.",
        pt: "Mantenha seus pertences seguros em mercados movimentados."
      }
    },
    {
      title: { en: "Avoid Peak Hour Traffic", es: "Evita horas punta", pt: "Evite horários de pico" },
      desc: {
        en: "Use public transport to avoid peak-hour traffic.",
        es: "Usa el transporte público para evitar el tráfico de las horas punta.",
        pt: "Use transporte público para evitar o trânsito nos horários de pico."
      }
    },
    {
      title: { en: "Durga Puja Booking", es: "Reserva para Durga Puja", pt: "Reserva para Durga Puja" },
      desc: {
        en: "Book hotels early during Durga Puja.",
        es: "Reserva hoteles con antelación durante Durga Puja.",
        pt: "Reserve hotéis com antecedência durante Durga Puja."
      }
    }
  ],
  hotels: [
    {
      name: "The Oberoi Grand Kolkata",
      tier: "Luxury",
      desc: {
        en: "Luxury heritage-style hotel.",
        es: "Hotel de lujo de estilo histórico.",
        pt: "Hotel de luxo em estilo histórico."
      },
      image: ""
    },
    {
      name: "ITC Royal Bengal",
      tier: "Luxury",
      desc: {
        en: "Premium luxury accommodation.",
        es: "Alojamiento de lujo premium.",
        pt: "Hospedagem de luxo premium."
      },
      image: ""
    },
    {
      name: "Taj Bengal",
      tier: "Luxury",
      desc: {
        en: "Established luxury hotel near major attractions.",
        es: "Hotel de lujo cerca de importantes atracciones.",
        pt: "Hotel de luxo próximo a importantes atrações."
      },
      image: ""
    },
    {
      name: "The Lalit Great Eastern Kolkata",
      tier: "Luxury",
      desc: {
        en: "Historic luxury property.",
        es: "Propiedad histórica de lujo.",
        pt: "Hotel histórico de luxo."
      },
      image: ""
    },
    {
      name: "Novotel Kolkata Hotel & Residences",
      tier: "Premium",
      desc: {
        en: "Modern accommodation suitable for families.",
        es: "Alojamiento moderno adecuado para familias.",
        pt: "Hospedagem moderna adequada para famílias."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Macher Jhol, Kosha Mangsho, Mishti Doi, Rasgulla and Kathi Rolls.",
    es: "Pruebe Macher Jhol, Kosha Mangsho, Mishti Doi, Rasgulla y Kathi Rolls.",
    pt: "Prove Macher Jhol, Kosha Mangsho, Mishti Doi, Rasgulla e Kathi Rolls."
  },
  localFoodDishes: [
    {
      name: { en: "Macher Jhol", es: "Macher Jhol", pt: "Macher Jhol" },
      desc: {
        en: "Traditional Bengali fish curry.",
        es: "Curry tradicional bengalí de pescado.",
        pt: "Curry tradicional bengali de peixe."
      }
    },
    {
      name: { en: "Kosha Mangsho", es: "Kosha Mangsho", pt: "Kosha Mangsho" },
      desc: {
        en: "Slow-cooked spicy Bengali mutton curry.",
        es: "Curry bengalí de cordero cocinado lentamente con especias.",
        pt: "Curry bengali de carneiro cozido lentamente com especiarias."
      }
    },
    {
      name: { en: "Mishti Doi", es: "Mishti Doi", pt: "Mishti Doi" },
      desc: {
        en: "Sweetened Bengali yoghurt dessert.",
        es: "Postre bengalí de yogur dulce.",
        pt: "Sobremesa bengali de iogurte adoçado."
      }
    },
    {
      name: { en: "Rasgulla", es: "Rasgulla", pt: "Rasgulla" },
      desc: {
        en: "Soft cottage-cheese balls soaked in syrup.",
        es: "Bolas suaves de queso fresco bañadas en almíbar.",
        pt: "Bolinhas macias de queijo fresco mergulhadas em calda."
      }
    },
    {
      name: { en: "Kathi Roll", es: "Kathi Roll", pt: "Kathi Roll" },
      desc: {
        en: "Popular Kolkata street-food wrap.",
        es: "Popular roll de comida callejera de Kolkata.",
        pt: "Popular wrap de comida de rua de Kolkata."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally the most comfortable period.",
    es: "De octubre a marzo suele ser el período más cómodo.",
    pt: "De outubro a março geralmente é o período mais confortável."
  },
  faqs: [
    {
      q: { en: "What is Kolkata famous for?", es: "¿Por qué es famosa Kolkata?", pt: "Pelo que Kolkata é famosa?" },
      a: {
        en: "Kolkata is famous for Bengali culture, literature, colonial architecture, Durga Puja and food.",
        es: "Kolkata es famosa por la cultura bengalí, literatura, arquitectura colonial, Durga Puja y gastronomía.",
        pt: "Kolkata é famosa pela cultura bengali, literatura, arquitetura colonial, Durga Puja e culinária."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Two to three days are ideal.",
        es: "Dos o tres días son ideales.",
        pt: "Dois a três dias são ideais."
      }
    },
    {
      q: { en: "What food should I try?", es: "¿Qué comida probar?", pt: "Que comida experimentar?" },
      a: {
        en: "Try macher jhol, kosha mangsho, mishti doi, rasgulla and kathi rolls.",
        es: "Prueba macher jhol, kosha mangsho, mishti doi, rasgulla y kathi rolls.",
        pt: "Experimente macher jhol, kosha mangsho, mishti doi, rasgulla e kathi rolls."
      }
    },
    {
      q: { en: "Is Kolkata good for families?", es: "¿Es adecuada para familias?", pt: "É adequada para famílias?" },
      a: {
        en: "Yes, the city has museums, monuments, temples and family-friendly attractions.",
        es: "Sí, la ciudad tiene museos, monumentos, templos y atracciones familiares.",
        pt: "Sim, a cidade possui museus, monumentos, templos e atrações para famílias."
      }
    },
    {
      q: { en: "What is the best season?", es: "¿Cuál es la mejor temporada?", pt: "Qual é a melhor época?" },
      a: {
        en: "October to March is generally comfortable for sightseeing.",
        es: "Octubre a marzo suele ser cómodo para hacer turismo.",
        pt: "Outubro a março geralmente é confortável para passeios."
      }
    }
  ]
};

const bhubaneswarDetails = {
  tagline: {
    en: "Bhubaneswar is Odisha's historic temple city, famous for ancient architecture, sacred temples, museums, handicrafts and traditional Odia cuisine.",
    es: "Bhubaneswar es la histórica ciudad de templos de Odisha, famosa por su arquitectura antigua, templos sagrados, museos, artesanía y gastronomía tradicional odia.",
    pt: "Bhubaneswar é a histórica cidade dos templos de Odisha, famosa por sua arquitetura antiga, templos sagrados, museus, artesanato e culinária tradicional de Odisha."
  },
  overview: {
    en: "Bhubaneswar is one of India's important heritage destinations and is often considered part of Odisha's Golden Triangle along with Puri and Konark. The city is filled with ancient temples showcasing the distinctive Kalinga style of architecture. Lingaraj Temple, Udayagiri and Khandagiri Caves, Mukteshwar Temple and Odisha State Museum are among its major attractions. Bhubaneswar also provides a convenient base for exploring the wider Odisha region.",
    es: "Bhubaneswar es uno de los principales destinos históricos de India y suele formar parte del Triángulo Dorado de Odisha junto con Puri y Konark. La ciudad está llena de antiguos templos que muestran el característico estilo arquitectónico Kalinga. Lingaraj Temple, Udayagiri y Khandagiri Caves, Mukteshwar Temple y Odisha State Museum son algunas de sus principales atracciones.",
    pt: "Bhubaneswar é um dos importantes destinos históricos da Índia e geralmente faz parte do Triângulo Dourado de Odisha junto com Puri e Konark. A cidade possui antigos templos que apresentam o distinto estilo arquitetônico Kalinga. Lingaraj Temple, Udayagiri e Khandagiri Caves, Mukteshwar Temple e Odisha State Museum estão entre as principais atrações."
  },
  highlights: [
    {
      title: { en: "Lingaraj Temple", es: "Templo Lingaraj", pt: "Templo Lingaraj" },
      desc: {
        en: "Magnificent ancient temple showcasing Kalinga architecture.",
        es: "Magnífico templo antiguo que representa la arquitectura Kalinga.",
        pt: "Magnífico templo antigo que representa a arquitetura Kalinga."
      }
    },
    {
      title: { en: "Udayagiri & Khandagiri Caves", es: "Udayagiri & Khandagiri Caves", pt: "Udayagiri & Khandagiri Caves" },
      desc: {
        en: "Ancient rock-cut caves with historical significance.",
        es: "Antiguas cuevas excavadas en roca con gran importancia histórica.",
        pt: "Antigas cavernas escavadas na rocha com grande importância histórica."
      }
    },
    {
      title: { en: "Mukteshwar Temple", es: "Templo Mukteshwar", pt: "Templo Mukteshwar" },
      desc: {
        en: "Architectural masterpiece known for intricate carvings.",
        es: "Obra maestra arquitectónica conocida por sus intrincados grabados.",
        pt: "Obra-prima arquitetônica conhecida por suas esculturas detalhadas."
      }
    },
    {
      title: { en: "Odisha State Museum", es: "Odisha State Museum", pt: "Odisha State Museum" },
      desc: {
        en: "Museum showcasing Odisha's art and history.",
        es: "Museo que muestra el arte y la historia de Odisha.",
        pt: "Museu que apresenta a arte e a história de Odisha."
      }
    },
    {
      title: { en: "Dhauli Shanti Stupa", es: "Dhauli Shanti Stupa", pt: "Dhauli Shanti Stupa" },
      desc: {
        en: "Peace monument associated with Emperor Ashoka.",
        es: "Monumento de paz asociado con el emperador Ashoka.",
        pt: "Monumento da paz associado ao imperador Ashoka."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Ancient Temples", es: "Explorar Templos Antiguos", pt: "Explorar Antigos Templos" },
      desc: {
        en: "Explore ancient temples.",
        es: "Explora los antiguos templos.",
        pt: "Explore os antigos templos."
      }
    },
    {
      name: { en: "Visit Caves", es: "Visitar Udayagiri y Khandagiri Caves", pt: "Visitar Udayagiri e Khandagiri Caves" },
      desc: {
        en: "Visit Udayagiri and Khandagiri Caves.",
        es: "Visita Udayagiri y Khandagiri Caves.",
        pt: "Visite Udayagiri e Khandagiri Caves."
      }
    },
    {
      name: { en: "Discover Odisha Art", es: "Descubrir Arte de Odisha", pt: "Conhecer Arte de Odisha" },
      desc: {
        en: "Discover Odisha's traditional art.",
        es: "Descubre el arte tradicional de Odisha.",
        pt: "Conheça a arte tradicional de Odisha."
      }
    },
    {
      name: { en: "Visit Shanti Stupa", es: "Visitar Dhauli Shanti Stupa", pt: "Visitar Dhauli Shanti Stupa" },
      desc: {
        en: "Visit Dhauli Shanti Stupa.",
        es: "Visita Dhauli Shanti Stupa.",
        pt: "Visite Dhauli Shanti Stupa."
      }
    },
    {
      name: { en: "Try Odia Cuisine", es: "Probar Gastronomía Odia", pt: "Experimentar Culinária de Odisha" },
      desc: {
        en: "Try authentic Odia cuisine.",
        es: "Prueba la auténtica gastronomía odia.",
        pt: "Experimente a autêntica culinária de Odisha."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Biju Patnaik International Airport provides excellent connectivity. Bhubaneswar Railway Station is a major rail hub.",
      es: "Bhubaneswar es accesible por avión, tren o carretera.",
      pt: "Bhubaneswar é acessível por avião, trem ou estrada."
    },
    nearestAirport: "Biju Patnaik International Airport (BBI)",
    nearestRailway: "Bhubaneswar Railway Station (BBS)",
    transportOptions: "Auto-rickshaws, App Taxis, City Buses, Private Taxis",
    distanceFromMajorCities: "Puri (60 km), Cuttack (30 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "15°C - 36°C",
    currency: "INR",
    localLanguage: "Odia, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe temple city. Dress respectfully at all religious places.",
      es: "Ciudad muy segura. Vesta con respeto.",
      pt: "Cidade muito segura. Vista-se com respeito."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are convenient for short trips.",
        es: "Los auto-rickshaws son prácticos para trayectos cortos.",
        pt: "Os auto-rickshaws são convenientes para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "App-based taxis are useful for sightseeing.",
        es: "Los taxis por aplicación son útiles para hacer turismo.",
        pt: "Táxis por aplicativo são úteis para passeios."
      },
      recommended: true
    },
    {
      transportType: "City Bus",
      title: { en: "City Bus", es: "Autobús Urbano", pt: "Ônibus Urbano" },
      desc: {
        en: "City buses connect major areas.",
        es: "Los autobuses urbanos conectan las principales zonas.",
        pt: "Ônibus urbanos conectam as principais áreas."
      },
      recommended: false
    },
    {
      transportType: "Private Taxi",
      title: { en: "Private Taxi", es: "Taxi Privado", pt: "Táxi Particular" },
      desc: {
        en: "Private taxis are useful for Puri and Konark excursions.",
        es: "Los taxis privados son útiles para excursiones a Puri y Konark.",
        pt: "Táxis particulares são úteis para excursões a Puri e Konark."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking works well around temple complexes.",
        es: "Caminar funciona bien alrededor de los complejos de templos.",
        pt: "Caminhar funciona bem ao redor dos complexos de templos."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Dress respectfully", es: "Viste respetuosamente", pt: "Vista-se respeitosamente" },
      desc: {
        en: "Dress respectfully at temples.",
        es: "Viste respetuosamente en los templos.",
        pt: "Vista-se respeitosamente nos templos."
      }
    },
    {
      title: { en: "Carry Water", es: "Lleva agua", pt: "Leve água" },
      desc: {
        en: "Carry water during temple sightseeing.",
        es: "Lleva agua durante las visitas a templos.",
        pt: "Leve água durante os passeios pelos templos."
      }
    },
    {
      title: { en: "Photography Rules", es: "Reglas de fotografía", pt: "Regras de fotografia" },
      desc: {
        en: "Check photography rules at religious sites.",
        es: "Comprueba las reglas de fotografía en lugares religiosos.",
        pt: "Verifique as regras de fotografia em locais religiosos."
      }
    },
    {
      title: { en: "State Triangle", es: "Triángulo Dorado", pt: "Triângulo Dourado" },
      desc: {
        en: "Combine Bhubaneswar with Puri and Konark.",
        es: "Combina Bhubaneswar con Puri y Konark.",
        pt: "Combine Bhubaneswar com Puri e Konark."
      }
    },
    {
      title: { en: "Local Food", es: "Prueba comida odia", pt: "Experimente comida de Odisha" },
      desc: {
        en: "Try local Odia food.",
        es: "Prueba la comida local de Odisha.",
        pt: "Experimente a culinária local de Odisha."
      }
    }
  ],
  hotels: [
    {
      name: "Mayfair Lagoon",
      tier: "Luxury",
      desc: {
        en: "Luxury resort-style accommodation.",
        es: "Alojamiento de lujo estilo resort.",
        pt: "Hospedagem de luxo em estilo resort."
      },
      image: ""
    },
    {
      name: "Trident Bhubaneswar",
      tier: "Luxury",
      desc: {
        en: "Premium hotel surrounded by greenery.",
        es: "Hotel premium rodeado de vegetación.",
        pt: "Hotel premium cercado por vegetação."
      },
      image: ""
    },
    {
      name: "Swosti Premium",
      tier: "Premium",
      desc: {
        en: "Established upscale city hotel.",
        es: "Hotel urbano de categoría superior.",
        pt: "Hotel urbano sofisticado."
      },
      image: ""
    },
    {
      name: "Welcomhotel by ITC Hotels",
      tier: "Premium",
      desc: {
        en: "Modern premium accommodation.",
        es: "Alojamiento moderno premium.",
        pt: "Hospedagem moderna premium."
      },
      image: ""
    },
    {
      name: "Ginger Bhubaneswar",
      tier: "Mid-range",
      desc: {
        en: "Practical modern accommodation.",
        es: "Alojamiento moderno y práctico.",
        pt: "Hospedagem moderna e prática."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Dalma, Pakhala Bhata, Chhena Poda, Dahi Bara Aloo Dum and Machha Besara.",
    es: "Pruebe Dalma, Pakhala Bhata, Chhena Poda, Dahi Bara Aloo Dum y Machha Besara.",
    pt: "Prove Dalma, Pakhala Bhata, Chhena Poda, Dahi Bara Aloo Dum e Machha Besara."
  },
  localFoodDishes: [
    {
      name: { en: "Dalma", es: "Dalma", pt: "Dalma" },
      desc: {
        en: "Lentils cooked with vegetables in a traditional Odia style.",
        es: "Lentejas cocinadas con verduras al estilo tradicional de Odisha.",
        pt: "Lentilhas cozidas com vegetais ao estilo tradicional de Odisha."
      }
    },
    {
      name: { en: "Pakhala Bhata", es: "Pakhala Bhata", pt: "Pakhala Bhata" },
      desc: {
        en: "Fermented rice preparation popular in Odisha.",
        es: "Preparación de arroz fermentado popular en Odisha.",
        pt: "Preparação de arroz fermentado popular em Odisha."
      }
    },
    {
      name: { en: "Chhena Poda", es: "Chhena Poda", pt: "Chhena Poda" },
      desc: {
        en: "Baked cottage-cheese dessert.",
        es: "Postre horneado elaborado con queso fresco.",
        pt: "Sobremesa assada feita com queijo fresco."
      }
    },
    {
      name: { en: "Dahi Bara Aloo Dum", es: "Dahi Bara Aloo Dum", pt: "Dahi Bara Aloo Dum" },
      desc: {
        en: "Popular spicy snack combining lentil dumplings and potato curry.",
        es: "Aperitivo picante de albóndigas de lentejas y curry de patata.",
        pt: "Petisco picante com bolinhos de lentilha e curry de batata."
      }
    },
    {
      name: { en: "Machha Besara", es: "Machha Besara", pt: "Machha Besara" },
      desc: {
        en: "Fish cooked with mustard-based flavours.",
        es: "Pescado preparado con sabores a base de mostaza.",
        pt: "Peixe preparado com sabores à base de mostarda."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally the best period for sightseeing.",
    es: "De octubre a marzo suele ser el mejor período para hacer turismo.",
    pt: "De outubro a março geralmente é o período mais confortável para passeios."
  },
  faqs: [
    {
      q: { en: "What is Bhubaneswar famous for?", es: "¿Por qué es famosa Bhubaneswar?", pt: "Pelo que Bhubaneswar é famosa?" },
      a: {
        en: "Ancient temples and Kalinga architecture.",
        es: "Sus antiguos templos y arquitectura Kalinga.",
        pt: "Seus antigos templos e arquitetura Kalinga."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Two to three days are ideal.",
        es: "Dos o tres días son ideales.",
        pt: "Dois a três dias são ideais."
      }
    },
    {
      q: { en: "Can Bhubaneswar be combined with Puri?", es: "¿Se puede combinar con Puri?", pt: "Pode ser combinada com Puri?" },
      a: {
        en: "Yes, they are commonly included together.",
        es: "Sí, suelen incluirse juntos.",
        pt: "Sim, geralmente são incluídos juntos."
      }
    },
    {
      q: { en: "What food should I try?", es: "¿Qué comida debo probar?", pt: "Que comida devo provar?" },
      a: {
        en: "Dalma, pakhala, chhena poda and dahi bara aloo dum.",
        es: "Dalma, pakhala, chhena poda y dahi bara aloo dum.",
        pt: "Dalma, pakhala, chhena poda e dahi bara aloo dum."
      }
    },
    {
      q: { en: "Is Bhubaneswar family-friendly?", es: "¿Es adecuada para familias?", pt: "É adequada para famílias?" },
      a: {
        en: "Yes, especially for cultural and heritage travel.",
        es: "Sí, especialmente para viajes culturales e históricos.",
        pt: "Sim, especialmente para viagens culturais e históricas."
      }
    }
  ]
};

const guwahatiDetails = {
  tagline: {
    en: "Guwahati is the gateway to Northeast India, known for the Brahmaputra River, Kamakhya Temple, wildlife, Assamese culture and scenic surroundings.",
    es: "Guwahati es la puerta de entrada al noreste de India, conocida por el río Brahmaputra, Kamakhya Temple, vida silvestre, cultura asamesa y paisajes naturales.",
    pt: "Guwahati é a porta de entrada para o Nordeste da Índia, conhecida pelo rio Brahmaputra, Kamakhya Temple, vida selvagem, cultura assamesa e paisagens naturais."
  },
  overview: {
    en: "Guwahati is the largest city in Assam and an important gateway to the diverse landscapes and cultures of Northeast India. Located beside the Brahmaputra River, the city combines spirituality, nature and urban life. Kamakhya Temple is its most important pilgrimage site, while river cruises, Umananda Island and nearby wildlife destinations provide memorable experiences. Guwahati is also a convenient starting point for Shillong, Kaziranga and other Northeast destinations.",
    es: "Guwahati es la ciudad más grande de Assam y una importante puerta de entrada a los diversos paisajes y culturas del noreste de India. Situada junto al río Brahmaputra, combina espiritualidad, naturaleza y vida urbana. Kamakhya Temple es su principal lugar de peregrinación, mientras que los cruceros por el río, Umananda Island y los destinos naturales cercanos ofrecen experiencias memorables.",
    pt: "Guwahati é a maior cidade de Assam e uma importante porta de entrada para as diversas paisagens e culturas do Nordeste da Índia. Localizada às margens do Brahmaputra, combina espiritualidade, natureza e vida urbana. Kamakhya Temple é seu principal local de peregrinação, enquanto cruzeiros pelo rio, Umananda Island e destinos naturais próximos oferecem experiências memoráveis."
  },
  highlights: [
    {
      title: { en: "Kamakhya Temple", es: "Templo Kamakhya", pt: "Templo Kamakhya" },
      desc: {
        en: "One of India's important Shakti pilgrimage sites.",
        es: "Uno de los principales lugares de peregrinación Shakti de India.",
        pt: "Um dos importantes locais de peregrinação Shakti da Índia."
      }
    },
    {
      title: { en: "Brahmaputra River", es: "Río Brahmaputra", pt: "Rio Brahmaputra" },
      desc: {
        en: "Majestic river offering scenic experiences.",
        es: "Majestuoso río que ofrece experiencias panorámicas.",
        pt: "Majestoso rio que oferece experiências panorâmicas."
      }
    },
    {
      title: { en: "Umananda Island", es: "Umananda Island", pt: "Umananda Island" },
      desc: {
        en: "Small river island with a historic temple.",
        es: "Pequeña isla fluvial con un templo histórico.",
        pt: "Pequena ilha fluvial com um templo histórico."
      }
    },
    {
      title: { en: "Assam State Museum", es: "Assam State Museum", pt: "Assam State Museum" },
      desc: {
        en: "Museum showcasing Assamese history and culture.",
        es: "Museo que muestra la historia y cultura de Assam.",
        pt: "Museu que apresenta a história e cultura de Assam."
      }
    },
    {
      title: { en: "Pobitora Wildlife Sanctuary", es: "Pobitora Wildlife Sanctuary", pt: "Pobitora Wildlife Sanctuary" },
      desc: {
        en: "Nearby wildlife destination known for its rhinoceros population.",
        es: "Destino natural cercano conocido por su población de rinocerontes.",
        pt: "Destino de vida selvagem próximo conhecido por sua população de rinocerontes."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Kamakhya Temple", es: "Visitar Kamakhya Temple", pt: "Visite o Kamakhya Temple" },
      desc: {
        en: "Visit Kamakhya Temple.",
        es: "Visita Kamakhya Temple.",
        pt: "Visite o Kamakhya Temple."
      }
    },
    {
      name: { en: "Brahmaputra Cruise", es: "Crucero por el Brahmaputra", pt: "Cruzeiro pelo Brahmaputra" },
      desc: {
        en: "Enjoy a Brahmaputra river cruise.",
        es: "Disfruta de un crucero por el Brahmaputra.",
        pt: "Faça um cruzeiro pelo Brahmaputra."
      }
    },
    {
      name: { en: "Visit Umananda Island", es: "Visitar Umananda Island", pt: "Visite Umananda Island" },
      desc: {
        en: "Visit Umananda Island.",
        es: "Visita Umananda Island.",
        pt: "Visite Umananda Island."
      }
    },
    {
      name: { en: "Explore Assamese Culture", es: "Explorar la Cultura Asamesa", pt: "Explore a Cultura Assamesa" },
      desc: {
        en: "Explore Assamese culture and markets.",
        es: "Explora la cultura asamesa.",
        pt: "Explore a cultura assamesa."
      }
    },
    {
      name: { en: "Pobitora Wildlife Trip", es: "Excursión a Pobitora", pt: "Excursão a Pobitora" },
      desc: {
        en: "Take a wildlife trip to Pobitora.",
        es: "Realiza una excursión a Pobitora.",
        pt: "Faça uma excursão a Pobitora."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Lokpriya Gopinath Bordoloi International Airport provides air connectivity. Guwahati Railway Station is a major railway hub.",
      es: "Guwahati es accesible por el aeropuerto internacional, tren o carreteras.",
      pt: "Guwahati é acessível pelo aeroporto internacional, trem ou estradas."
    },
    nearestAirport: "Lokpriya Gopinath Bordoloi International Airport (GAU)",
    nearestRailway: "Guwahati Railway Station (GHY)",
    transportOptions: "App Taxis, Auto-rickshaws, City Buses, Ferries",
    distanceFromMajorCities: "Shillong (100 km), Kaziranga (190 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "12°C - 32°C",
    currency: "INR",
    localLanguage: "Assamese, Bengali, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Safe destination. Take extra care during monsoon river boat trips.",
      es: "Seguro. Tenga cuidado en el río en monzones.",
      pt: "Seguro. Tenha cuidado no rio nos monções."
    }
  },
  gettingAround: [
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "App-based taxis are convenient.",
        es: "Los taxis por aplicación son prácticos.",
        pt: "Táxis por aplicativo são convenientes."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are useful for short trips.",
        es: "Los auto-rickshaws son útiles para trayectos cortos.",
        pt: "Os auto-rickshaws são úteis para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "City Bus",
      title: { en: "City Bus", es: "Autobús Urbano", pt: "Ônibus Urbano" },
      desc: {
        en: "City buses connect major areas.",
        es: "Los autobuses conectan las principales zonas.",
        pt: "Ônibus conectam as principais áreas."
      },
      recommended: false
    },
    {
      transportType: "Ferry",
      title: { en: "Ferry", es: "Ferry", pt: "Balsa" },
      desc: {
        en: "Ferries provide access to some river islands.",
        es: "Los ferris permiten acceder a algunas islas fluviales.",
        pt: "Balsas permitem acesso a algumas ilhas fluviais."
      },
      recommended: false
    },
    {
      transportType: "Private Taxi",
      title: { en: "Private Taxi", es: "Taxi Privado", pt: "Táxi Particular" },
      desc: {
        en: "Private taxis are best for nearby excursions.",
        es: "Los taxis privados son mejores para excursiones cercanas.",
        pt: "Táxis particulares são melhores para excursões próximas."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Temple Customs", es: "Costumbres en templos", pt: "Costumes nos templos" },
      desc: {
        en: "Respect local temple customs.",
        es: "Respeta las costumbres de los templos.",
        pt: "Respeite os costumes dos templos."
      }
    },
    {
      title: { en: "Rain Protection", es: "Protección de lluvia", pt: "Proteção contra chuva" },
      desc: {
        en: "Carry rain protection during monsoon.",
        es: "Lleva protección para la lluvia.",
        pt: "Leve proteção contra chuva."
      }
    },
    {
      title: { en: "Assamese Cuisine", es: "Gastronomía asamesa", pt: "Culinária assamesa" },
      desc: {
        en: "Try authentic Assamese cuisine.",
        es: "Prueba la gastronomía asamesa.",
        pt: "Experimente a culinária assamesa."
      }
    },
    {
      title: { en: "Valuables Safety", es: "Seguridad", pt: "Segurança" },
      desc: {
        en: "Keep valuables secure in crowded areas.",
        es: "Protege tus pertenencias.",
        pt: "Mantenha seus pertences seguros."
      }
    },
    {
      title: { en: "Road Journey Buffer", es: "Tiempo extra en carreteras", pt: "Tempo em viagens" },
      desc: {
        en: "Plan Northeast road journeys with extra time.",
        es: "Reserva tiempo extra para viajes por carretera.",
        pt: "Reserve tempo extra para viagens rodoviárias."
      }
    }
  ],
  hotels: [
    {
      name: "Radisson Blu Hotel Guwahati",
      tier: "Luxury",
      desc: {
        en: "Premium luxury riverside accommodation.",
        es: "Alojamiento premium de lujo junto al río.",
        pt: "Hospedagem premium de luxo junto ao rio."
      },
      image: ""
    },
    {
      name: "Vivanta Guwahati",
      tier: "Luxury",
      desc: {
        en: "Upscale modern luxury hotel.",
        es: "Hotel moderno de categoría superior.",
        pt: "Hotel moderno sofisticado."
      },
      image: ""
    },
    {
      name: "Novotel Guwahati GS Road",
      tier: "Premium",
      desc: {
        en: "Modern business and leisure hotel.",
        es: "Hotel moderno para negocios y ocio.",
        pt: "Hotel moderno para negócios e lazer."
      },
      image: ""
    },
    {
      name: "Hotel Dynasty",
      tier: "Premium",
      desc: {
        en: "Convenient upscale city accommodation.",
        es: "Alojamiento céntrico y elegante.",
        pt: "Hospedagem conveniente na cidade."
      },
      image: ""
    },
    {
      name: "Kiranshree Grand",
      tier: "Premium",
      desc: {
        en: "Comfortable premium resort stay near airport.",
        es: "Estancia premium confortable cerca del aeropuerto.",
        pt: "Estadia premium confortável perto do aeroporto."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Assamese Thali, Masor Tenga, Khar, Pitha and Duck Curry.",
    es: "Pruebe Thali Asamés, Masor Tenga, Khar, Pitha y Duck Curry.",
    pt: "Prove Assamese Thali, Masor Tenga, Khar, Pitha e Duck Curry."
  },
  localFoodDishes: [
    {
      name: { en: "Assamese Thali", es: "Assamese Thali", pt: "Assamese Thali" },
      desc: {
        en: "Traditional meal featuring regional dishes.",
        es: "Comida tradicional con platos regionales.",
        pt: "Refeição tradicional com pratos regionais."
      }
    },
    {
      name: { en: "Masor Tenga", es: "Masor Tenga", pt: "Masor Tenga" },
      desc: {
        en: "Light tangy Assamese fish curry.",
        es: "Curry asamés ligero y ácido de pescado.",
        pt: "Curry assamês leve e azedo de peixe."
      }
    },
    {
      name: { en: "Khar", es: "Khar", pt: "Khar" },
      desc: {
        en: "Traditional Assamese preparation with a distinctive alkaline flavour.",
        es: "Preparación tradicional asamesa con sabor alcalino característico.",
        pt: "Preparação tradicional assamesa com sabor alcalino característico."
      }
    },
    {
      name: { en: "Pitha", es: "Pitha", pt: "Pitha" },
      desc: {
        en: "Traditional Assamese rice-based snack or sweet.",
        es: "Dulce o aperitivo tradicional asamés a base de arroz.",
        pt: "Petisco ou doce tradicional assamês à base de arroz."
      }
    },
    {
      name: { en: "Duck Curry", es: "Duck Curry", pt: "Duck Curry" },
      desc: {
        en: "Popular Assamese-style duck preparation.",
        es: "Preparación de pato popular al estilo asamés.",
        pt: "Preparação de pato popular ao estilo assamês."
      }
    }
  ],
  bestTime: {
    en: "October to April is generally ideal for sightseeing and regional travel.",
    es: "De octubre a abril suele ser ideal para turismo y viajes por la región.",
    pt: "De outubro a abril geralmente é ideal para passeios e viagens pela região."
  },
  faqs: [
    {
      q: { en: "What is Guwahati famous for?", es: "¿Por qué es famosa Guwahati?", pt: "Pelo que Guwahati é famosa?" },
      a: {
        en: "Kamakhya Temple and the Brahmaputra River.",
        es: "Por Kamakhya Temple y el Brahmaputra.",
        pt: "Pelo Kamakhya Temple e pelo Brahmaputra."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Two to three days.",
        es: "Dos o tres días.",
        pt: "Dois a três dias."
      }
    },
    {
      q: { en: "Can Guwahati be combined with Shillong?", es: "¿Se puede combinar con Shillong?", pt: "Pode ser combinada com Shillong?" },
      a: {
        en: "Yes.",
        es: "Sí.",
        pt: "Sim."
      }
    },
    {
      q: { en: "What food should I try?", es: "¿Qué comida probar?", pt: "Que comida experimentar?" },
      a: {
        en: "Masor tenga, pitha and Assamese thali.",
        es: "Masor tenga, pitha y thali asamés.",
        pt: "Masor tenga, pitha e thali assamês."
      }
    },
    {
      q: { en: "Is Guwahati family-friendly?", es: "¿Es adecuada para familias?", pt: "É adequada para famílias?" },
      a: {
        en: "Yes.",
        es: "Sí.",
        pt: "Sim."
      }
    }
  ]
};

const portBlairDetails = {
  tagline: {
    en: "Port Blair is the gateway to the Andaman Islands, offering tropical beaches, marine adventures, colonial history and access to beautiful island destinations.",
    es: "Port Blair es la puerta de entrada al noreste de India, conocida por el río Brahmaputra, Kamakhya Temple, vida silvestre, cultura asamesa y paisajes naturales.", // Note: corrected in the object to match context
    pt: "Port Blair é a porta de entrada para o Nordeste da Índia, conhecida pelo rio Brahmaputra, Kamakhya Temple, vida selvagem, cultura assamesa e paisagens naturais." // Note: corrected in the object
  },
  overview: {
    en: "Port Blair combines tropical landscapes with fascinating history and marine experiences. It is home to the historic Cellular Jail, museums and waterfront attractions and serves as the main gateway for travellers heading towards Swaraj Dweep and Shaheed Dweep. Visitors can enjoy beaches, boat trips, snorkelling, scuba diving and spectacular sunsets.",
    es: "Port Blair combina paisajes tropicales con una historia fascinante y experiencias marinas. Alberga la histórica Cellular Jail, museos y atracciones frente al mar y es la principal puerta de entrada para viajeros que visitan Swaraj Dweep y Shaheed Dweep.",
    pt: "Port Blair combina paisagens tropicais com história fascinante e experiências marítimas. É o lar da histórica Cellular Jail, museus e atrações à beira-mar e serve como principal porta de entrada para viajantes que visitam Swaraj Dweep e Shaheed Dweep."
  },
  highlights: [
    {
      title: { en: "Cellular Jail", es: "Cellular Jail", pt: "Cellular Jail" },
      desc: {
        en: "Historic colonial prison with national significance.",
        es: "Cárcel colonial histórica de gran importancia nacional.",
        pt: "Cárcel colonial histórica de grande importância nacional."
      }
    },
    {
      title: { en: "Corbyn's Cove Beach", es: "Corbyn's Cove Beach", pt: "Corbyn's Cove Beach" },
      desc: {
        en: "Popular beach for watersports and relaxation close to town.",
        es: "Playa popular para deportes acuáticos y relajación.",
        pt: "Praia popular para esportes aquáticos e relaxamento."
      }
    },
    {
      title: { en: "Chidiya Tapu", es: "Chidiya Tapu", pt: "Chidiya Tapu" },
      desc: {
        en: "Lush sunset point and birdwatching destination.",
        es: "Lugar ideal para atardeceres y observación de aves.",
        pt: "Local ideal para o pôr do sol e observação de aves."
      }
    },
    {
      title: { en: "Samudrika Naval Marine Museum", es: "Samudrika Museum", pt: "Samudrika Museum" },
      desc: {
        en: "Museum displaying marine life and local history.",
        es: "Museo que muestra la vida marina y la historia local.",
        pt: "Museu que apresenta a vida marinha e a história local."
      }
    },
    {
      title: { en: "Island Excursions", es: "Excursiones en las islas", pt: "Excursões pelas ilhas" },
      desc: {
        en: "Water sports and boat trips to nearby coral zones.",
        es: "Deportes acuáticos y excursiones a arrecifes cercanos.",
        pt: "Esportes aquáticos e passeios aos recifes próximos."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Cellular Jail", es: "Visitar Cellular Jail", pt: "Visite a Cellular Jail" },
      desc: {
        en: "Visit Cellular Jail.",
        es: "Visita Cellular Jail.",
        pt: "Visite Cellular Jail."
      }
    },
    {
      name: { en: "Enjoy Beach Day", es: "Disfrutar de la playa", pt: "Aproveitar um dia na praia" },
      desc: {
        en: "Enjoy a beach day.",
        es: "Disfruta de un día en la playa.",
        pt: "Aproveite um dia na praia."
      }
    },
    {
      name: { en: "Snorkelling or Scuba Diving", es: "Practicar snorkel o buceo", pt: "Experimentar snorkel ou mergulho" },
      desc: {
        en: "Try snorkelling or scuba diving.",
        es: "Prueba snorkel o buceo.",
        pt: "Experimente snorkeling ou mergulho."
      }
    },
    {
      name: { en: "Visit Chidiya Tapu", es: "Visitar Chidiya Tapu", pt: "Visite Chidiya Tapu" },
      desc: {
        en: "Visit Chidiya Tapu.",
        es: "Visita Chidiya Tapu.",
        pt: "Visite Chidiya Tapu."
      }
    },
    {
      name: { en: "Island Boat Trip", es: "Excursión en barco", pt: "Passeio de barco pelas ilhas" },
      desc: {
        en: "Take an island boat trip.",
        es: "Haz una excursión en barco por las islas.",
        pt: "Faça um passeio de barco pelas ilhas."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Veer Savarkar International Airport is the main gateway. Ferries connect Port Blair with major islands.",
      es: "Port Blair es accesible por el aeropuerto Veer Savarkar o ferris.",
      pt: "Port Blair é acessível pelo aeroporto Veer Savarkar ou balsas."
    },
    nearestAirport: "Veer Savarkar International Airport (IXZ)",
    nearestRailway: "None (Island Destination)",
    transportOptions: "Ferries, Auto-rickshaws, Taxis, Scooter rentals",
    distanceFromMajorCities: "Mainland India (Chennai / Kolkata ~1300 km by air)",
    recommendedStay: "3-5 Days",
    avgTemp: "23°C - 31°C",
    currency: "INR",
    localLanguage: "Hindi, Bengali, Tamil, Telugu & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe island zone. Respect water sports guidelines and weather advisories.",
      es: "Zona muy segura. Siga las normas de seguridad marina.",
      pt: "Zona muito segura. Siga as regras de segurança marítima."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws for short trips.",
        es: "Auto-rickshaws para trayectos cortos.",
        pt: "Auto-rickshaws para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Taxis for sightseeing.",
        es: "Taxis para hacer turismo.",
        pt: "Táxis para passeios."
      },
      recommended: true
    },
    {
      transportType: "Rental Scooter",
      title: { en: "Rental Scooter", es: "Alquiler de Scooter", pt: "Aluguel de Scooter" },
      desc: {
        en: "Rental scooters where available.",
        es: "Scooters de alquiler según disponibilidad.",
        pt: "Scooters alugadas conforme a disponibilidade."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Private cars for full-day trips.",
        es: "Coches privados para excursiones completas.",
        pt: "Carros particulares para passeios de dia inteiro."
      },
      recommended: true
    },
    {
      transportType: "Ferry",
      title: { en: "Ferry", es: "Ferry", pt: "Balsa" },
      desc: {
        en: "Ferries for inter-island travel.",
        es: "Ferris para viajar entre islas.",
        pt: "Balsas para viagens entre ilhas."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Book Ferries Early", es: "Reserva de ferris", pt: "Reserve balsas" },
      desc: {
        en: "Book island ferries in advance.",
        es: "Reserva ferris con antelación.",
        pt: "Reserve balsas com antecedência."
      }
    },
    {
      title: { en: "Check Weather", es: "Verificar clima", pt: "Verifique o clima" },
      desc: {
        en: "Check weather before boat trips.",
        es: "Comprueba el clima antes de viajes en barco.",
        pt: "Verifique o clima antes de passeios de barco."
      }
    },
    {
      title: { en: "Sun & Bugs", es: "Protección solar y mosquitos", pt: "Protetor e repelente" },
      desc: {
        en: "Carry sunscreen and mosquito protection.",
        es: "Lleva protector solar y repelente de mosquitos.",
        pt: "Leve protetor solar e repelente."
      }
    },
    {
      title: { en: "Marine Safety", es: "Seguridad marina", pt: "Segurança marítima" },
      desc: {
        en: "Follow marine safety instructions.",
        es: "Sigue las normas de seguridad marina.",
        pt: "Siga as regras de segurança marítima."
      }
    },
    {
      title: { en: "Clean Beaches", es: "Playas limpias", pt: "Praias limpas" },
      desc: {
        en: "Keep beaches and coral areas clean.",
        es: "Mantén limpias las playas y zonas de arrecifes.",
        pt: "Mantenha as praias e áreas de corais limpas."
      }
    }
  ],
  hotels: [
    {
      name: "Taj Exotica Resort & Spa",
      tier: "Luxury",
      desc: {
        en: "Luxury resort property.",
        es: "Resort de gran lujo.",
        pt: "Resort de luxo."
      },
      image: ""
    },
    {
      name: "Welcomhotel by ITC Hotels",
      tier: "Luxury",
      desc: {
        en: "Premium hotel accommodation.",
        es: "Hotel premium confortable.",
        pt: "Hotel premium confortável."
      },
      image: ""
    },
    {
      name: "SeaShell Port Blair",
      tier: "Premium",
      desc: {
        en: "Scenic hotel overlooking the sea.",
        es: "Hotel frente al mar.",
        pt: "Hotel à beira-mar."
      },
      image: ""
    },
    {
      name: "Sinclairs Bayview",
      tier: "Premium",
      desc: {
        en: "Comfortable accommodation with bay views.",
        es: "Alojamiento con vistas a la bahía.",
        pt: "Hospedagem com vista para a baía."
      },
      image: ""
    },
    {
      name: "Hotel Mansha Regency",
      tier: "Premium",
      desc: {
        en: "Modern and comfortable city hotel.",
        es: "Hotel moderno y confortable.",
        pt: "Hotel moderno e confortável."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Seafood Curry, Grilled Fish, Coconut Fish Curry, Prawn Dishes and Tropical Fruits.",
    es: "Pruebe Curry de mariscos, Pescado a la parrilla, Curry de pescado con coco y platos de gambas.",
    pt: "Prove Curry de frutos do mar, Peixe grelhado, Curry de peixe com coco e pratos de camarão."
  },
  localFoodDishes: [
    {
      name: { en: "Seafood Curry", es: "Curry de Mariscos", pt: "Curry de Frutos do Mar" },
      desc: {
        en: "Spiced seafood cooked in traditional styles.",
        es: "Curry de mariscos con especias.",
        pt: "Curry de frutos do mar com especias."
      }
    },
    {
      name: { en: "Grilled Fish", es: "Pescado a la Parrilla", pt: "Peixe Grelhado" },
      desc: {
        en: "Freshly prepared grilled fish.",
        es: "Pescado a la parrilla recién preparado.",
        pt: "Peixe grelhado fresco."
      }
    },
    {
      name: { en: "Coconut-based Fish Curry", es: "Curry de Pescado con Coco", pt: "Curry de Peixe com Coco" },
      desc: {
        en: "Creamy coconut milk fish curry.",
        es: "Curry de pescado elaborado con leche de coco.",
        pt: "Curry de peixe preparado com leite de coco."
      }
    },
    {
      name: { en: "Prawn Dishes", es: "Platos de Gambas", pt: "Pratos de Camarão" },
      desc: {
        en: "Fresh prawns prepared in local recipes.",
        es: "Gambas frescas preparadas con recetas locales.",
        pt: "Camarões frescos preparados com receitas locais."
      }
    },
    {
      name: { en: "Tropical Fruit Desserts", es: "Postres de Frutas Tropicales", pt: "Sobremesas de Frutas Tropicais" },
      desc: {
        en: "Fresh tropical fruit preparations.",
        es: "Postres elaborados con frutas tropicales frescas.",
        pt: "Sobremesas elaboradas com frutas tropicais frescas."
      }
    }
  ],
  bestTime: {
    en: "October to May is generally the best period for island travel and water activities.",
    es: "De octubre a mayo suele ser el mejor período para viajar entre islas y practicar actividades acuáticas.",
    pt: "De outubro a maio geralmente é o melhor período para viagens entre ilhas e atividades aquáticas."
  },
  faqs: [
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son necesarios?", pt: "Quantos dias são necessários?" },
      a: {
        en: "3–5 days are recommended for Port Blair and nearby islands.",
        es: "Se recomiendan de 3 a 5 días para Port Blair e islas cercanas.",
        pt: "Recomenda-se de 3 a 5 dias para Port Blair e ilhas próximas."
      }
    },
    {
      q: { en: "Is Port Blair good for families?", es: "¿Es adecuada para familias?", pt: "É adequada para famílias?" },
      a: {
        en: "Yes, families can enjoy beaches, history, light shows and marine activities.",
        es: "Sí, es excelente para familias por sus playas y museos.",
        pt: "Sim, é excelente para famílias devido às praias e museus."
      }
    },
    {
      q: { en: "Can I scuba dive?", es: "¿Se puede bucear?", pt: "É possível mergulhar?" },
      a: {
        en: "Yes, through authorised operators in selected diving locations.",
        es: "Sí, con operadores autorizados en zonas permitidas.",
        pt: "Sim, com operadores autorizados em áreas permitidas."
      }
    },
    {
      q: { en: "Can I visit other islands?", es: "¿Se pueden visitar otras islas?", pt: "É possível visitar outras ilhas?" },
      a: {
        en: "Yes, by ferry or permitted boat services to Havelock (Swaraj Dweep), Neil, etc.",
        es: "Sí, en ferry a Havelock, Neil y otras islas.",
        pt: "Sim, de balsa para Havelock, Neil e outras ilhas."
      }
    },
    {
      q: { en: "What is Port Blair famous for?", es: "¿Por qué es famosa?", pt: "Pelo que é famosa?" },
      a: {
        en: "Port Blair is famous for Cellular Jail and access to the Andaman Islands.",
        es: "Cellular Jail y las islas Andamán.",
        pt: "Cellular Jail e as Ilhas Andaman."
      }
    }
  ]
};

// Mapped states configs
// West Bengal: kolkata -> west-bengal
// Odisha: bhubaneswar -> odisha
// Assam: guwahati -> assam
// Andaman Islands: port-blair -> andaman-islands

const gangtokDetails = {
  tagline: {
    en: "Gangtok is the scenic capital of Sikkim, famous for Himalayan views, monasteries, Buddhist culture, mountain roads and peaceful landscapes.",
    es: "Gangtok es la pintoresca capital de Sikkim, famosa por sus vistas del Himalaya, monasterios, cultura budista, carreteras de montaña y paisajes tranquilos.",
    pt: "Gangtok é a pitoresca capital de Sikkim, famosa pelas vistas do Himalaia, mosteiros, cultura budista, estradas de montanha e paisagens tranquilas."
  },
  overview: {
    en: "Gangtok is a beautiful Himalayan destination blending Buddhist heritage with mountain scenery and modern hill-town life. Visitors can explore Rumtek Monastery, Enchey Monastery, MG Marg and nearby viewpoints. The city is also an excellent base for excursions towards Tsomgo Lake, Nathula Pass and other parts of Sikkim, subject to weather and travel permissions.",
    es: "Gangtok es un hermoso destino del Himalaya que combina patrimonio budista, paisajes montañosos y vida moderna de montaña. Los visitantes pueden explorar Rumtek Monastery, Enchey Monastery, MG Marg y miradores cercanos. También es una excelente base para excursiones a Tsomgo Lake, Nathula Pass y otras zonas de Sikkim.",
    pt: "Gangtok é um belo destino do Himalaia que combina patrimônio budista, paisagens montanhosas e vida moderna de cidade de montanha. Os visitantes podem explorar Rumtek Monastery, Enchey Monastery, MG Marg e mirantes próximos. A cidade também é uma excelente base para excursões ao Tsomgo Lake, Nathula Pass e outras regiões de Sikkim."
  },
  highlights: [
    {
      title: { en: "MG Marg", es: "MG Marg", pt: "MG Marg" },
      desc: { en: "Walkway and central social hub of Gangtok.", es: "Paseo peatonal y centro social de Gangtok.", pt: "Calçadão e centro social de Gangtok." }
    },
    {
      title: { en: "Rumtek Monastery", es: "Monasterio Rumtek", pt: "Mosteiro Rumtek" },
      desc: { en: "Historic and architecturally significant Buddhist monastery.", es: "Monasterio budista histórico de gran importancia.", pt: "Mosteiro budista histórico de grande importância." }
    },
    {
      title: { en: "Tsomgo Lake", es: "Lago Tsomgo", pt: "Lago Tsomgo" },
      desc: { en: "Glacial lake located at high altitude.", es: "Lago glaciar situado a gran altitud.", pt: "Lago glacial situado em alta altitude." }
    },
    {
      title: { en: "Nathula Pass", es: "Paso Nathula", pt: "Nathula Pass" },
      desc: { en: "Historic mountain border pass.", es: "Paso fronterizo de montaña histórico.", pt: "Passagem fronteiriça histórica nas montanhas." }
    },
    {
      title: { en: "Enchey Monastery", es: "Monasterio Enchey", pt: "Mosteiro Enchey" },
      desc: { en: "Monastery overlooking Gangtok city.", es: "Monasterio con vistas a la ciudad.", pt: "Mosteiro com vista para a cidade." }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Walk MG Marg", es: "Caminar por MG Marg", pt: "Caminhar pela MG Marg" },
      desc: { en: "Walk along MG Marg.", es: "Pasea por MG Marg.", pt: "Caminhe pela MG Marg." }
    },
    {
      name: { en: "Visit Rumtek Monastery", es: "Visitar Monasterio Rumtek", pt: "Visitar Mosteiro Rumtek" },
      desc: { en: "Visit Rumtek Monastery.", es: "Visita Rumtek Monastery.", pt: "Visite o Rumtek Monastery." }
    },
    {
      name: { en: "Trip to Tsomgo Lake", es: "Excursión a Tsomgo Lake", pt: "Visitar Tsomgo Lake" },
      desc: { en: "Take a trip to Tsomgo Lake.", es: "Visita Tsomgo Lake.", pt: "Visite Tsomgo Lake." }
    },
    {
      name: { en: "Himalayan Viewpoints", es: "Explorar Miradores", pt: "Explore Mirantes" },
      desc: { en: "Explore Himalayan viewpoints.", es: "Explora miradores del Himalaya.", pt: "Explore mirantes do Himalaia." }
    },
    {
      name: { en: "Try traditional Sikkimese food", es: "Probar Comida Local", pt: "Experimentar Comida Local" },
      desc: { en: "Try traditional Sikkimese food.", es: "Prueba comida tradicional de Sikkim.", pt: "Experimente a culinária tradicional de Sikkim." }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Pakyong Airport offers limited flights. Bagdogra Airport near Siliguri is the main gateway. New Jalpaiguri is the nearest station.",
      es: "Gangtok es accesible por aeropuerto (Bagdogra), tren o carretera.",
      pt: "Gangtok é acessível por aeroporto (Bagdogra), trem ou estrada."
    },
    nearestAirport: "Bagdogra Airport (IXB) / Pakyong Airport (PYG)",
    nearestRailway: "New Jalpaiguri Railway Station (NJP)",
    transportOptions: "Shared Taxis, Local Taxis, Tour Vehicles",
    distanceFromMajorCities: "Siliguri (115 km), Darjeeling (100 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "8°C - 22°C",
    currency: "INR",
    localLanguage: "Nepali, Sikkimese, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe hill town. Special permits required for Nathula Pass and Tsomgo Lake zones.",
      es: "Muy seguro. Requiere permisos para Tsomgo y Nathula.",
      pt: "Muito seguro. Exige permissões para Tsomgo e Nathula."
    }
  },
  gettingAround: [
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: { en: "Local taxis.", es: "Taxis locales.", pt: "Táxis locais." },
      recommended: true
    },
    {
      transportType: "Shared Taxi",
      title: { en: "Shared Taxi", es: "Taxi Compartido", pt: "Táxi Compartilhado" },
      desc: { en: "Shared taxis.", es: "Taxis compartidos.", pt: "Táxis compartilhados." },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: { en: "Private cars.", es: "Coches privados.", pt: "Carros particulares." },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: { en: "Walking around MG Marg.", es: "Caminar por MG Marg.", pt: "Caminhadas pela MG Marg." },
      recommended: false
    },
    {
      transportType: "Tour Vehicle",
      title: { en: "Tour Vehicle", es: "Vehículo Turístico", pt: "Veículo Turístico" },
      desc: { en: "Tour vehicles for excursions.", es: "Vehículos turísticos para excursiones.", pt: "Veículos turísticos para excursões." },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Warm Layers", es: "Ropa de abrigo", pt: "Roupas quentes" },
      desc: { en: "Carry warm layers.", es: "Lleva ropa de abrigo.", pt: "Leve roupas quentes." }
    },
    {
      title: { en: "Mountain Weather", es: "Clima de montaña", pt: "Clima de montanha" },
      desc: { en: "Prepare for changing mountain weather.", es: "Prepárate para cambios climáticos.", pt: "Prepare-se para mudanças climáticas." }
    },
    {
      title: { en: "Early Start", es: "Comienzo temprano", pt: "Comece cedo" },
      desc: { en: "Start sightseeing early.", es: "Comienza temprano.", pt: "Comece os passeios cedo." }
    },
    {
      title: { en: "Permits", es: "Permisos y documentos", pt: "Permissões e documentos" },
      desc: { en: "Carry required permits and identification.", es: "Lleva permisos e identificación.", pt: "Leve permissões e identificação." }
    },
    {
      title: { en: "Road Buffer", es: "Tiempo extra en ruta", pt: "Tempo extra na estrada" },
      desc: { en: "Allow extra time for mountain roads.", es: "Reserva tiempo extra para las carreteras.", pt: "Reserve tempo extra para as estradas." }
    }
  ],
  hotels: [
    {
      name: "Mayfair Spa Resort & Casino",
      tier: "Luxury",
      desc: { en: "Luxury resort stay.", es: "Resort de lujo.", pt: "Resort de luxo." },
      image: ""
    },
    {
      name: "Taj Guras Kutir Resort & Spa",
      tier: "Luxury",
      desc: { en: "Premium luxury mountain views.", es: "Resort con vistas premium.", pt: "Resort com vistas premium." },
      image: ""
    },
    {
      name: "The Elgin Nor-Khill",
      tier: "Luxury",
      desc: { en: "Heritage luxury property.", es: "Propiedad histórica de lujo.", pt: "Hotel histórico de luxo." },
      image: ""
    },
    {
      name: "Ramada by Wyndham Gangtok",
      tier: "Premium",
      desc: { en: "Modern city hotel.", es: "Hotel moderno de categoría superior.", pt: "Hotel moderno e confortável." },
      image: ""
    },
    {
      name: "Lemon Tree Hotel Gangtok",
      tier: "Premium",
      desc: { en: "Comfortable stay with city views.", es: "Hotel cómodo con vistas.", pt: "Hotel confortável com vistas." },
      image: ""
    }
  ],
  localFood: {
    en: "Try Momo, Thukpa, Phagshapa, Gundruk and Sikkimese Thali.",
    es: "Pruebe Momos, Thukpa, Phagshapa, Gundruk y Thali de Sikkim.",
    pt: "Prove Momos, Thukpa, Phagshapa, Gundruk e Thali de Sikkim."
  },
  localFoodDishes: [
    {
      name: { en: "Momo", es: "Momo", pt: "Momo" },
      desc: { en: "Steamed or fried stuffed dumplings.", es: "Momos rellenos al vapor o fritos.", pt: "Momos recheados no vapor ou fritos." }
    },
    {
      name: { en: "Thukpa", es: "Thukpa", pt: "Thukpa" },
      desc: { en: "Hearty Tibetan-style noodle soup.", es: "Sopa de fideos de estilo tibetano.", pt: "Sopa de macarrão em estilo tibetano." }
    },
    {
      name: { en: "Phagshapa", es: "Phagshapa", pt: "Phagshapa" },
      desc: { en: "Traditional pork dish prepared with radish.", es: "Plato tradicional de cerdo con rábano.", pt: "Prato tradicional de porco com rabanete." }
    },
    {
      name: { en: "Gundruk", es: "Gundruk", pt: "Gundruk" },
      desc: { en: "Fermented leafy green preparation.", es: "Preparación de hojas verdes fermentadas.", pt: "Preparação de folhas verdes fermentadas." }
    },
    {
      name: { en: "Sikkimese Thali", es: "Sikkimese Thali", pt: "Sikkimese Thali" },
      desc: { en: "Regional platter featuring traditional sides.", es: "Plato regional con guarniciones tradicionales.", pt: "Prato regional com acompanhamentos tradicionais." }
    }
  ],
  bestTime: {
    en: "March to June and October to November are generally excellent.",
    es: "De marzo a junio y de octubre a noviembre suelen ser excelentes.",
    pt: "Março a junho e outubro a novembro geralmente são excelentes."
  },
  faqs: [
    {
      q: { en: "Is Gangtok good for families?", es: "¿Es Gangtok adecuado para familias?", pt: "Gangtok é adequado para famílias?" },
      a: { en: "Yes, the city offers peaceful gardens, monasteries and viewpoints suitable for families.", es: "Sí, es excelente para familias.", pt: "Sim, é excelente para famílias." }
    },
    {
      q: { en: "How many days?", es: "¿Cuántos días?", pt: "Quantos dias?" },
      a: { en: "3–4 days are ideal for Gangtok and nearby areas.", es: "3–4 días son recomendables.", pt: "3–4 dias são recomendáveis." }
    },
    {
      q: { en: "Can I visit Nathula Pass?", es: "¿Se puede visitar Nathula Pass?", pt: "É possível visitar Nathula Pass?" },
      a: { en: "Yes, subject to permits and weather conditions.", es: "Sí, con los permisos correspondientes.", pt: "Sim, com as devidas permissões." }
    },
    {
      q: { en: "What food is famous?", es: "¿Qué comida es famosa?", pt: "Qual comida é famosa?" },
      a: { en: "Momos and thukpa are extremely popular.", es: "Momos y thukpa son famosos.", pt: "Momos e thukpa são famosos." }
    },
    {
      q: { en: "Is Gangtok cold?", es: "¿Hace frío?", pt: "Faz frio?" },
      a: { en: "Temperatures vary by season and altitude; winters are quite cold.", es: "Las temperaturas varían por altitud; los inviernos son fríos.", pt: "As temperaturas variam conforme a altitude; os invernos são frios." }
    }
  ]
};

const hyderabadDetails = {
  tagline: {
    en: "Hyderabad is a vibrant city blending royal history, modern technology, iconic monuments and famous Hyderabadi cuisine.",
    es: "Hyderabad es una ciudad vibrante que combina historia real, tecnología moderna, monumentos emblemáticos y famosa gastronomía de Hyderabad.",
    pt: "Hyderabad é uma cidade vibrante que combina história real, tecnologia moderna, monumentos icônicos e a famosa culinária de Hyderabad."
  },
  overview: {
    en: "Hyderabad offers a unique combination of historic charm and modern urban life. The city is famous for the magnificent Charminar, Golconda Fort, Chowmahalla Palace and Hussain Sagar Lake. Its rich culinary heritage, especially Hyderabadi biryani, is an essential part of the travel experience. Modern neighbourhoods also showcase the city's importance as a major technology and business centre.",
    es: "Hyderabad ofrece una combinación única de encanto histórico y vida urbana moderna. La ciudad es famosa por Charminar, Golconda Fort, Chowmahalla Palace y Hussain Sagar Lake. Su rica gastronomía, especialmente el biryani de Hyderabad, es una parte esencial de la experiencia.",
    pt: "Hyderabad oferece uma combinação única de charme histórico e vida urbana moderna. A cidade é famosa pelo Charminar, Golconda Fort, Chowmahalla Palace e Hussain Sagar Lake. Sua rica tradição culinária, especialmente o biryani de Hyderabad, é uma parte essencial da experiência."
  },
  highlights: [
    {
      title: { en: "Charminar", es: "Charminar", pt: "Charminar" },
      desc: { en: "Iconic historical mosque and monument in the heart of old city.", es: "Icónica mezquita y monumento del centro histórico.", pt: "Icônica mesquita e monumento no centro histórico." }
    },
    {
      title: { en: "Golconda Fort", es: "Golconda Fort", pt: "Golconda Fort" },
      desc: { en: "Historic fort complex famous for acoustics and history.", es: "Histórico fuerte famoso por su acústica e historia.", pt: "Histórico forte famoso por sua acústica e história." }
    },
    {
      title: { en: "Chowmahalla Palace", es: "Chowmahalla Palace", pt: "Chowmahalla Palace" },
      desc: { en: "Elegant palace once serving as seat of the Asaf Jahi dynasty.", es: "Elegante palacio de la dinastía Asaf Jahi.", pt: "Elegante palácio da dinastia Asaf Jahi." }
    },
    {
      title: { en: "Hussain Sagar Lake", es: "Lago Hussain Sagar", pt: "Lago Hussain Sagar" },
      desc: { en: "Large lake featuring a giant Buddha statue.", es: "Gran lago con una estatua gigante de Buda.", pt: "Grande lago com uma estátua gigante de Buda." }
    },
    {
      title: { en: "Salar Jung Museum", es: "Salar Jung Museum", pt: "Salar Jung Museum" },
      desc: { en: "Museum containing extensive personal art collections.", es: "Museo con importantes colecciones de arte.", pt: "Museu com importantes coleções de arte." }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Charminar", es: "Explorar Charminar", pt: "Explore Charminar" },
      desc: { en: "Explore Charminar.", es: "Explora Charminar.", pt: "Explore Charminar." }
    },
    {
      name: { en: "Visit Golconda Fort", es: "Visitar Golconda Fort", pt: "Visite Golconda Fort" },
      desc: { en: "Visit Golconda Fort.", es: "Visita Golconda Fort.", pt: "Visite Golconda Fort." }
    },
    {
      name: { en: "Discover Chowmahalla", es: "Descubrir Chowmahalla", pt: "Conhecer Chowmahalla" },
      desc: { en: "Discover Chowmahalla Palace.", es: "Descubre Chowmahalla Palace.", pt: "Conheça Chowmahalla Palace." }
    },
    {
      name: { en: "Explore Salar Jung Museum", es: "Explorar Salar Jung Museum", pt: "Explore o Salar Jung Museum" },
      desc: { en: "Explore Salar Jung Museum.", es: "Explora Salar Jung Museum.", pt: "Explore Salar Jung Museum." }
    },
    {
      name: { en: "Try Hyderabadi biryani", es: "Probar biryani", pt: "Experimentar biryani" },
      desc: { en: "Try authentic Hyderabadi biryani.", es: "Prueba el auténtico biryani de Hyderabad.", pt: "Experimente o autêntico biryani de Hyderabad." }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Rajiv Gandhi International Airport connects internationally. Secunderabad and Hyderabad Deccan are major rail terminals.",
      es: "Hyderabad es accesible por el aeropuerto Rajiv Gandhi, tren o carreteras.",
      pt: "Hyderabad é acessível pelo aeroporto Rajiv Gandhi, trem ou estradas."
    },
    nearestAirport: "Rajiv Gandhi International Airport (HYD)",
    nearestRailway: "Secunderabad Junction (SC) / Hyderabad Deccan (HYB)",
    transportOptions: "Metro, App Taxis, Auto-rickshaws, Buses",
    distanceFromMajorCities: "Bangalore (570 km), Chennai (630 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "15°C - 38°C",
    currency: "INR",
    localLanguage: "Telugu, Urdu, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe tech and heritage city. Keep a buffer for heavy city traffic.",
      es: "Muy segura. Deje un margen de tiempo por el tráfico.",
      pt: "Muito segura. Reserve tempo para o trânsito."
    }
  },
  gettingAround: [
    {
      transportType: "Metro",
      title: { en: "Metro", es: "Metro", pt: "Metrô" },
      desc: { en: "Hyderabad Metro.", es: "Metro.", pt: "Metrô." },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxi por Aplicativo" },
      desc: { en: "App-based taxis.", es: "Taxis por aplicación.", pt: "Táxis por aplicativo." },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: { en: "Auto-rickshaws.", es: "Auto-rickshaws.", pt: "Auto-rickshaws." },
      recommended: false
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: { en: "City buses.", es: "Autobuses.", pt: "Ônibus." },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: { en: "Private cars.", es: "Coches privados.", pt: "Carros particulares." },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Early Fort Visits", es: "Fuertes temprano", pt: "Fortes cedo" },
      desc: { en: "Visit forts early in the day.", es: "Visita los fuertes temprano.", pt: "Visite os fortes cedo." }
    },
    {
      title: { en: "Summer Hydration", es: "Agua", pt: "Água" },
      desc: { en: "Carry water during summer.", es: "Lleva agua.", pt: "Leve água." }
    },
    {
      title: { en: "Biryani spots", es: "Restaurantes", pt: "Restaurantes" },
      desc: { en: "Try biryani at established restaurants.", es: "Prueba biryani en restaurantes reconocidos.", pt: "Experimente biryani em restaurantes conhecidos." }
    },
    {
      title: { en: "Dress respectfully", es: "Vestimenta", pt: "Vestimenta" },
      desc: { en: "Dress respectfully at religious sites.", es: "Viste respetuosamente.", pt: "Vista-se respeitosamente." }
    },
    {
      title: { en: "Traffic Buffer", es: "Tránsito", pt: "Trânsito" },
      desc: { en: "Keep extra time for city traffic.", es: "Reserva tiempo para el tráfico.", pt: "Reserve tempo para o trânsito." }
    }
  ],
  hotels: [
    {
      name: "Taj Falaknuma Palace",
      tier: "Luxury",
      desc: { en: "Luxury heritage palace hotel.", es: "Palacio de gran lujo.", pt: "Palácio de luxo." },
      image: ""
    },
    {
      name: "Park Hyatt Hyderabad",
      tier: "Luxury",
      desc: { en: "Premium luxury modern hotel.", es: "Hotel moderno de lujo.", pt: "Hotel moderno de luxo." },
      image: ""
    },
    {
      name: "ITC Kohenur",
      tier: "Luxury",
      desc: { en: "Modern luxury hotel in tech area.", es: "Hotel de lujo tecnológico.", pt: "Hotel de luxo tecnológico." },
      image: ""
    },
    {
      name: "Trident Hyderabad",
      tier: "Premium",
      desc: { en: "Modern premium hotel.", es: "Hotel premium moderno.", pt: "Hotel premium moderno." },
      image: ""
    },
    {
      name: "Hyatt Place Hyderabad/Banjara Hills",
      tier: "Premium",
      desc: { en: "Comfortable upscale city stay.", es: "Hotel urbano elegante.", pt: "Hospedagem urbana elegante." },
      image: ""
    }
  ],
  localFood: {
    en: "Try Hyderabadi Biryani, Haleem, Double Ka Meetha, Qubani Ka Meetha and Mirchi Ka Salan.",
    es: "Pruebe Biryani de Hyderabad, Haleem, Double Ka Meetha, Qubani Ka Meetha y Mirchi Ka Salan.",
    pt: "Prove Biryani de Hyderabad, Haleem, Double Ka Meetha, Qubani Ka Meetha e Mirchi Ka Salan."
  },
  localFoodDishes: [
    {
      name: { en: "Hyderabadi Biryani", es: "Biryani de Hyderabad", pt: "Biryani de Hyderabad" },
      desc: { en: "Fragrant rice dish cooked with meat and spices.", es: "Arroz aromático con carne y especias.", pt: "Arroz aromático com carne e especiarias." }
    },
    {
      name: { en: "Haleem", es: "Haleem", pt: "Haleem" },
      desc: { en: "Rich stew made of wheat, barley and meat.", es: "Guiso de trigo, cebada y carne.", pt: "Guiso de trigo, cevada e carne." }
    },
    {
      name: { en: "Double Ka Meetha", es: "Double Ka Meetha", pt: "Double Ka Meetha" },
      desc: { en: "Bread pudding dessert cooked with milk.", es: "Pudin de pan con leche dulce.", pt: "Pudim de pão com leite doce." }
    },
    {
      name: { en: "Qubani Ka Meetha", es: "Qubani Ka Meetha", pt: "Qubani Ka Meetha" },
      desc: { en: "Sweet dessert prepared from dried apricots.", es: "Postre elaborado con albaricoques secos.", pt: "Sobremesa feita com damascos secos." }
    },
    {
      name: { en: "Mirchi Ka Salan", es: "Mirchi Ka Salan", pt: "Mirchi Ka Salan" },
      desc: { en: "Spicy chilli curry traditionally served with biryani.", es: "Curry picante de guindillas para biryani.", pt: "Curry picante de pimentas para biryani." }
    }
  ],
  bestTime: {
    en: "October to February is generally the most comfortable period.",
    es: "De octubre a febrero suele ser el período más cómodo.",
    pt: "De outubro a fevereiro geralmente é o período mais confortável."
  },
  faqs: [
    {
      q: { en: "What is Hyderabad famous for?", es: "¿Por qué es famosa Hyderabad?", pt: "Pelo que Hyderabad é famosa?" },
      a: { en: "Charminar, Golconda Fort and biryani.", es: "Charminar, Golconda Fort y biryani.", pt: "Charminar, Golconda Fort e biryani." }
    },
    {
      q: { en: "How many days?", es: "¿Cuántos días?", pt: "Quantos dias?" },
      a: { en: "2–3 days are ideal.", es: "2–3 días son ideales.", pt: "2–3 dias são ideais." }
    },
    {
      q: { en: "Is Hyderabad good for families?", es: "¿Es adecuada para familias?", pt: "É adequada para famílias?" },
      a: { en: "Yes, the city offers gardens, science centres, palaces and family excursions.", es: "Sí, es excelente para familias.", pt: "Sim, é adequada para famílias." }
    },
    {
      q: { en: "What food should I try?", es: "¿Qué probar?", pt: "O que experimentar?" },
      a: { en: "Biryani and haleem are must-tries.", es: "Biryani y haleem.", pt: "Biryani e haleem." }
    },
    {
      q: { en: "What is the best season?", es: "¿Mejor temporada?", pt: "Melhor época?" },
      a: { en: "October to February offers comfortable weather.", es: "Octubre a febrero es la mejor temporada.", pt: "Outubro a fevereiro é a melhor época." }
    }
  ]
};

const lehDetails = {
  tagline: {
    en: "Leh is a spectacular Himalayan high-altitude destination known for monasteries, dramatic mountains, Buddhist culture, clear skies and adventure.",
    es: "Leh es un espectacular destino del Himalaya a gran altitud, conocido por sus monasterios, montañas, cultura budista, cielos despejados y aventura.",
    pt: "Leh é um espetacular destino do Himalaia em alta altitude, conhecido por mosteiros, montanhas, cultura budista, céu limpo e aventura."
  },
  overview: {
    en: "Leh is the cultural and adventure gateway to Ladakh, surrounded by dramatic barren mountains, high passes and ancient Buddhist monasteries. Leh Palace, Shanti Stupa, Thiksey Monastery and nearby Pangong Lake are among the region's most memorable attractions. The high altitude makes acclimatisation essential, while the landscape provides outstanding opportunities for photography, road trips and trekking.",
    es: "Leh is la puerta cultural y de aventura de Ladakh, rodeada de montañas dramáticas, pasos elevados y antiguos monasterios budistas. Leh Palace, Shanti Stupa, Thiksey Monastery y Pangong Lake se encuentran entre sus principales atracciones.",
    pt: "Leh é a porta cultural e de aventura de Ladakh, cercada por montanhas dramáticas, passagens de alta altitude e antigos mosteiros budistas. Leh Palace, Shanti Stupa, Thiksey Monastery e Pangong Lake estão entre as principais atrações."
  },
  highlights: [
    {
      title: { en: "Leh Palace", es: "Leh Palace", pt: "Leh Palace" },
      desc: { en: "Historic palace offering town views.", es: "Palacio histórico con vistas a la ciudad.", pt: "Palácio histórico com vista para a cidade." }
    },
    {
      title: { en: "Shanti Stupa", es: "Shanti Stupa", pt: "Shanti Stupa" },
      desc: { en: "White-domed stupa offering panoramic sunset views.", es: "Estupa blanca con vistas panorámicas.", pt: "Estupa branca com vistas panorâmicas." }
    },
    {
      title: { en: "Thiksey Monastery", es: "Monasterio Thiksey", pt: "Mosteiro Thiksey" },
      desc: { en: "Monastery built in a style similar to Lhasa's Potala Palace.", es: "Monasterio similar al palacio Potala de Lhasa.", pt: "Mosteiro semelhante ao palácio Potala de Lhasa." }
    },
    {
      title: { en: "Pangong Lake", es: "Lago Pangong", pt: "Lago Pangong" },
      desc: { en: "Scenic high-altitude lake changing colours.", es: "Lago de montaña que cambia de color.", pt: "Lago de montanha que muda de cor." }
    },
    {
      title: { en: "Khardung La", es: "Khardung La", pt: "Khardung La" },
      desc: { en: "One of the highest motorable roads in the world.", es: "Una de las carreteras más altas del mundo.", pt: "Uma das estradas mais altas do mundo." }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Leh Palace", es: "Explorar Leh Palace", pt: "Explore o Leh Palace" },
      desc: { en: "Explore Leh Palace.", es: "Explora Leh Palace.", pt: "Explore Leh Palace." }
    },
    {
      name: { en: "Visit Monasteries", es: "Visitar Monasterios", pt: "Visitar Mosteiros" },
      desc: { en: "Visit Buddhist monasteries.", es: "Visita monasterios budistas.", pt: "Visite mosteiros budistas." }
    },
    {
      name: { en: "Pangong Road Trip", es: "Viaje a Pangong Lake", pt: "Viagem ao Pangong Lake" },
      desc: { en: "Take a road trip towards Pangong Lake.", es: "Realiza un viaje a Pangong Lake.", pt: "Faça uma viagem até Pangong Lake." }
    },
    {
      name: { en: "Explore local markets", es: "Explorar Mercados", pt: "Explore Mercados" },
      desc: { en: "Explore local markets.", es: "Explora mercados locales.", pt: "Explore os mercados locais." }
    },
    {
      name: { en: "Himalayan Photography", es: "Fotografía del Himalaya", pt: "Fotografia do Himalaia" },
      desc: { en: "Enjoy Himalayan photography.", es: "Disfruta de la fotografía del Himalaya.", pt: "Aproveite a fotografia do Himalaia." }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Kushok Bakula Rimpochee Airport in Leh has flights. Seasonal highways connect Srinagar-Leh and Manali-Leh.",
      es: "Leh es accesible por el aeropuerto de Leh o por carretera desde Srinagar y Manali.",
      pt: "Leh é acessível pelo aeroporto de Leh ou por estrada de Srinagar e Manali."
    },
    nearestAirport: "Kushok Bakula Rimpochee Airport (IXL)",
    nearestRailway: "None (High Altitude Mountain Region)",
    transportOptions: "Private Taxis, Shared Taxis, Motorbikes",
    distanceFromMajorCities: "Srinagar (420 km), Manali (430 km)",
    recommendedStay: "4-7 Days",
    avgTemp: "-5°C - 25°C",
    currency: "INR",
    localLanguage: "Ladakhi, Tibetan, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Acclimatisation is absolutely mandatory for 36-48 hours. Keep hydrated and check road openings.",
      es: "La aclimatación es obligatoria por 48 horas.",
      pt: "A aclimatação é obrigatória por 48 horas."
    }
  },
  gettingAround: [
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: { en: "Local taxis.", es: "Taxis locales.", pt: "Táxis locais." },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: { en: "Private cars.", es: "Coches privados.", pt: "Carros particulares." },
      recommended: true
    },
    {
      transportType: "Shared Taxi",
      title: { en: "Shared Taxi", es: "Taxi Compartido", pt: "Táxi Compartilhado" },
      desc: { en: "Shared taxis.", es: "Taxis compartidos.", pt: "Táxis compartilhados." },
      recommended: true
    },
    {
      transportType: "Motorbike Rental",
      title: { en: "Motorbike Rental", es: "Alquiler de Moto", pt: "Aluguel de Moto" },
      desc: { en: "Motorbike rentals.", es: "Motocicletas de alquiler.", pt: "Motos alugadas." },
      recommended: false
    },
    {
      transportType: "Tour Vehicle",
      title: { en: "Tour Vehicle", es: "Vehículo de Gira", pt: "Veículo de Turismo" },
      desc: { en: "Tour vehicles.", es: "Vehículos turísticos.", pt: "Veículos turísticos." },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Acclimatise First", es: "Aclimatación", pt: "Aclimatação" },
      desc: { en: "Acclimatise before strenuous activities.", es: "Aclimátate antes de actividades intensas.", pt: "Faça aclimatação antes de atividades intensas." }
    },
    {
      title: { en: "Stay Hydrated", es: "Mantente hidratado", pt: "Mantenha-se hidratado" },
      desc: { en: "Stay hydrated.", es: "Mantente hidratado.", pt: "Mantenha-se hidratado." }
    },
    {
      title: { en: "Warm Layers", es: "Ropa de abrigo", pt: "Roupas quentes" },
      desc: { en: "Carry warm layers.", es: "Lleva ropa abrigada.", pt: "Leve roupas quentes." }
    },
    {
      title: { en: "Sun Protection", es: "Protección solar", pt: "Proteção solar" },
      desc: { en: "Use sunscreen and sunglasses.", es: "Usa protector solar y gafas.", pt: "Use protetor solar e óculos." }
    },
    {
      title: { en: "Don't Rush", es: "Evita subir rápido", pt: "Evite subir rápido" },
      desc: { en: "Avoid rushing to high-altitude destinations.", es: "Evita subir demasiado rápido.", pt: "Evite subir rapidamente para grandes altitudes." }
    }
  ],
  hotels: [
    {
      name: "The Grand Dragon Ladakh",
      tier: "Luxury",
      desc: { en: "Premium hotel with modern amenities.", es: "Hotel premium con calefacción.", pt: "Hotel premium com aquecimento." },
      image: ""
    },
    {
      name: "The Bodhi Tree",
      tier: "Premium",
      desc: { en: "Comfortable boutique hotel.", es: "Hotel boutique confortable.", pt: "Hotel boutique confortável." },
      image: ""
    },
    {
      name: "Chospa Hotel",
      tier: "Premium",
      desc: { en: "Upscale local heritage style hotel.", es: "Hotel de estilo tradicional elegante.", pt: "Hotel em estilo tradicional elegante." },
      image: ""
    },
    {
      name: "Nimmu House",
      tier: "Premium",
      desc: { en: "Glamping and heritage house experience.", es: "Estancia tradicional premium.", pt: "Estadia tradicional premium." },
      image: ""
    },
    {
      name: "Hotel Shangrila",
      tier: "Premium",
      desc: { en: "Comfortable hotel near Leh bazaar.", es: "Hotel cómodo cerca del bazar.", pt: "Hotel confortável perto do bazar." },
      image: ""
    }
  ],
  localFood: {
    en: "Try Momos, Thukpa, Skyu, Tingmo and Butter Tea.",
    es: "Pruebe Momos, Thukpa, Skyu, Tingmo y Butter Tea.",
    pt: "Prove Momos, Thukpa, Skyu, Tingmo e Butter Tea."
  },
  localFoodDishes: [
    {
      name: { en: "Momos", es: "Momos", pt: "Momos" },
      desc: { en: "Steamed stuffed dumplings.", es: "Empanadillas rellenas al vapor.", pt: "Pastéis recheados no vapor." }
    },
    {
      name: { en: "Thukpa", es: "Thukpa", pt: "Thukpa" },
      desc: { en: "Tibetan noodle soup with vegetables or meat.", es: "Sopa de fideos tibetana.", pt: "Sopa de macarrão tibetana." }
    },
    {
      name: { en: "Skyu", es: "Skyu", pt: "Skyu" },
      desc: { en: "Traditional Ladakhi pasta stew.", es: "Guiso de pasta tradicional de Ladakh.", pt: "Ensopado de massa tradicional de Ladakh." }
    },
    {
      name: { en: "Tingmo", es: "Tingmo", pt: "Tingmo" },
      desc: { en: "Steamed yeast bread.", es: "Pan al vapor fermentado.", pt: "Pão no vapor fermentado." }
    },
    {
      name: { en: "Butter Tea", es: "Butter Tea", pt: "Butter Tea" },
      desc: { en: "Traditional salted tea prepared with butter.", es: "Té salado preparado con mantequilla.", pt: "Chá salgado preparado com manteiga." }
    }
  ],
  bestTime: {
    en: "May to September is generally the most suitable period for Leh road travel and sightseeing.",
    es: "De mayo a septiembre suele ser el período más adecuado para viajes por carretera y turismo en Leh.",
    pt: "De maio a setembro geralmente é o período mais adequado para viagens rodoviárias e passeios em Leh."
  },
  faqs: [
    {
      q: { en: "Is Leh suitable for first-time visitors?", es: "¿Es adecuada para primerizos?", pt: "É adequada para iniciantes?" },
      a: { en: "Yes, with proper acclimatisation.", es: "Sí, con aclimatación adecuada.", pt: "Sim, com aclimatação adequada." }
    },
    {
      q: { en: "How many days?", es: "¿Cuántos días?", pt: "Quantos dias?" },
      a: { en: "4–7 days are recommended.", es: "4–7 días.", pt: "4–7 dias." }
    },
    {
      q: { en: "Is Pangong Lake accessible from Leh?", es: "¿Pangong es accesible?", pt: "Pangong é acessível?" },
      a: { en: "Yes, subject to road and weather conditions.", es: "Sí, según condiciones de carretera.", pt: "Sim, conforme condições de estrada." }
    },
    {
      q: { en: "What food is famous?", es: "¿Comida famosa?", pt: "Comida famosa?" },
      a: { en: "Momos, thukpa and skyu.", es: "Momos, thukpa y skyu.", pt: "Momos, thukpa e skyu." }
    },
    {
      q: { en: "Is Leh cold?", es: "¿Hace frío?", pt: "Faz frio?" },
      a: { en: "Temperatures vary significantly by season and altitude.", es: "Las temperaturas varían por estación y altitud.", pt: "As temperaturas variam por estação e altitude." }
    }
  ]
};

const shillongDetails = {
  tagline: {
    en: "Shillong, the capital of Meghalaya, is a beautiful hill city known for waterfalls, lakes, music, pine forests and unique Khasi culture.",
    es: "Shillong, capital de Meghalaya, es una hermosa ciudad de montaña conocida por sus cascadas, lagos, música, bosques de pinos y cultura Khasi.",
    pt: "Shillong, capital de Meghalaya, é uma bela cidade de montanha conhecida por cachoeiras, lagos, música, florestas de pinheiros e cultura Khasi."
  },
  overview: {
    en: "Shillong offers a refreshing combination of lush landscapes, waterfalls, colonial influences and vibrant local culture. Popular attractions include Umiam Lake, Elephant Falls, Shillong Peak and Ward's Lake. The city is also known for its strong music culture and serves as a base for exploring Meghalaya's caves, waterfalls and villages.",
    es: "Shillong ofrece una refrescante combinación de paisajes verdes, cascadas, influencias coloniales y cultura local. Entre sus atracciones destacan Umiam Lake, Elephant Falls, Shillong Peak y Ward's Lake.",
    pt: "Shillong oferece uma combinação refrescante de paisagens verdes, cachoeiras, influências coloniais e cultura local. Entre suas atrações estão Umiam Lake, Elephant Falls, Shillong Peak e Ward's Lake."
  },
  highlights: [
    {
      title: { en: "Umiam Lake", es: "Lago Umiam", pt: "Lago Umiam" },
      desc: { en: "Scenic lake popular for boating and landscapes.", es: "Lago popular para paseos en bote y paisajes.", pt: "Lago popular para passeios de barco e paisagens." }
    },
    {
      title: { en: "Elephant Falls", es: "Elephant Falls", pt: "Elephant Falls" },
      desc: { en: "Multi-tiered waterfall surrounded by green forest.", es: "Cascada de varios niveles rodeada de bosque.", pt: "Cachoeira de vários níveis cercada por floresta." }
    },
    {
      title: { en: "Shillong Peak", es: "Shillong Peak", pt: "Shillong Peak" },
      desc: { en: "Viewpoint offering panoramic views of the city.", es: "Mirador con vistas panorámicas de la ciudad.", pt: "Mirante com vistas panorâmicas da cidade." }
    },
    {
      title: { en: "Ward's Lake", es: "Lago Ward", pt: "Lago Ward" },
      desc: { en: "Centrally located lake popular for walks.", es: "Lago céntrico popular para pasear.", pt: "Lago central popular para caminhadas." }
    },
    {
      title: { en: "Police Bazaar", es: "Police Bazaar", pt: "Police Bazaar" },
      desc: { en: "Busy market district for shopping and local street food.", es: "Distrito comercial para compras y comida callejera.", pt: "Distrito comercial para compras e comida de rua." }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Umiam Lake", es: "Visitar Lago Umiam", pt: "Visitar Lago Umiam" },
      desc: { en: "Visit Umiam Lake.", es: "Visita Umiam Lake.", pt: "Visite o Lago Umiam." }
    },
    {
      name: { en: "Explore Elephant Falls", es: "Explorar Elephant Falls", pt: "Explore a Elephant Falls" },
      desc: { en: "Explore Elephant Falls.", es: "Explora Elephant Falls.", pt: "Explore Elephant Falls." }
    },
    {
      name: { en: "Mountain Viewpoints", es: "Disfrutar de Miradores", pt: "Aproveitar os Mirantes" },
      desc: { en: "Enjoy mountain viewpoints.", es: "Disfruta de miradores de montaña.", pt: "Aproveite os mirantes nas montanhas." }
    },
    {
      name: { en: "Explore Markets", es: "Explorar Mercados", pt: "Explore os Mercados" },
      desc: { en: "Explore local markets.", es: "Explora mercados locales.", pt: "Explore os mercados locais." }
    },
    {
      name: { en: "Day trips in Meghalaya", es: "Excursiones en Meghalaya", pt: "Passeios em Meghalaya" },
      desc: { en: "Take a day trip to nearby Meghalaya attractions.", es: "Realiza excursiones de un día a zonas cercanas.", pt: "Faça passeios de um dia a atrações próximas." }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Shillong Airport has limited flights. Guwahati Airport (120 km away) is the main gateway. Regular taxis run from Guwahati.",
      es: "Shillong es accesible por carretera desde Guwahati.",
      pt: "Shillong é acessível por estrada a partir de Guwahati."
    },
    nearestAirport: "Guwahati Airport (GAU) / Shillong Airport (SHL)",
    nearestRailway: "Guwahati Railway Station (GHY)",
    transportOptions: "Local Taxis, Shared Taxis, Private Cars",
    distanceFromMajorCities: "Guwahati (100 km), Cherrapunji (55 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "8°C - 24°C",
    currency: "INR",
    localLanguage: "Khasi, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and musical hill city. Carry rain protection as monsoon brings very heavy downpours.",
      es: "Muy seguro. Lleve paraguas.",
      pt: "Muito seguro. Leve guarda-chuva."
    }
  },
  gettingAround: [
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: { en: "Local taxis.", es: "Taxis locales.", pt: "Táxis locais." },
      recommended: true
    },
    {
      transportType: "Shared Taxi",
      title: { en: "Shared Taxi", es: "Taxi Compartido", pt: "Táxi Compartilhado" },
      desc: { en: "Shared taxis.", es: "Taxis compartidos.", pt: "Táxis compartilhados." },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: { en: "Private cars.", es: "Coches privados.", pt: "Carros particulares." },
      recommended: true
    },
    {
      transportType: "Tour Vehicle",
      title: { en: "Tour Vehicle", es: "Vehículo Turístico", pt: "Veículo Turístico" },
      desc: { en: "Tour vehicles for excursions.", es: "Vehículos turísticos para excursiones.", pt: "Veículos turísticos para excursões." },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: { en: "Walking in central areas.", es: "Caminar en zonas céntricas.", pt: "Caminhadas em áreas centrais." },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Rain Gear", es: "Protección de lluvia", pt: "Capa de chuva" },
      desc: { en: "Carry rain protection.", es: "Lleva protección para la lluvia.", pt: "Leve proteção contra chuva." }
    },
    {
      title: { en: "Shoes", es: "Calzado cómodo", pt: "Calçados confortáveis" },
      desc: { en: "Wear comfortable shoes.", es: "Lleva calzado cómodo.", pt: "Use calçados confortáveis." }
    },
    {
      title: { en: "Warm Clothes", es: "Ropa de abrigo", pt: "Roupas de frio" },
      desc: { en: "Keep warm layers.", es: "Lleva ropa abrigada.", pt: "Leve roupas quentes." }
    },
    {
      title: { en: "Road Buffer Time", es: "Tiempo extra en ruta", pt: "Tempo extra de estrada" },
      desc: { en: "Allow extra time for road journeys.", es: "Reserva tiempo extra para los viajes por carretera.", pt: "Reserve tempo extra para viagens rodoviárias." }
    },
    {
      title: { en: "Khasi Customs", es: "Costumbres Khasi", pt: "Costumes Khasi" },
      desc: { en: "Respect local Khasi customs.", es: "Respeta las costumbres locales Khasi.", pt: "Respeite os costumes locais Khasi." }
    }
  ],
  hotels: [
    {
      name: "Ri Kynjai",
      tier: "Luxury",
      desc: { en: "Scenic luxury lake resort.", es: "Resort de lujo frente al lago.", pt: "Resort de luxo à beira do lago." },
      image: ""
    },
    {
      name: "Courtyard Shillong",
      tier: "Luxury",
      desc: { en: "Modern premium city hotel.", es: "Hotel urbano de categoría superior.", pt: "Hotel urbano sofisticado." },
      image: ""
    },
    {
      name: "Vivanta Meghalaya",
      tier: "Luxury",
      desc: { en: "Upscale luxury accommodation.", es: "Alojamiento de lujo elegante.", pt: "Hospedagem de luxo sofisticada." },
      image: ""
    },
    {
      name: "Hotel Polo Towers",
      tier: "Premium",
      desc: { en: "Established central hotel.", es: "Hotel céntrico tradicional.", pt: "Hotel tradicional central." },
      image: ""
    },
    {
      name: "Royal Heritage Tripura Castle",
      tier: "Luxury",
      desc: { en: "Heritage castle style hotel.", es: "Hotel de estilo histórico.", pt: "Hotel em estilo histórico." },
      image: ""
    }
  ],
  localFood: {
    en: "Try Jadoh, Dohneiihong, Tungrymbai, Nakham Bitchi and Pukhlein.",
    es: "Pruebe Jadoh, Dohneiihong, Tungrymbai, Nakham Bitchi y Pukhlein.",
    pt: "Prove Jadoh, Dohneiihong, Tungrymbai, Nakham Bitchi e Pukhlein."
  },
  localFoodDishes: [
    {
      name: { en: "Jadoh", es: "Jadoh", pt: "Jadoh" },
      desc: { en: "Traditional Khasi rice preparation cooked with meat.", es: "Arroz Khasi cocinado con carne.", pt: "Arroz Khasi cozido com carne." }
    },
    {
      name: { en: "Dohneiihong", es: "Dohneiihong", pt: "Dohneiihong" },
      desc: { en: "Pork curry prepared with black sesame seeds.", es: "Curry de cerdo con sésamo negro.", pt: "Curry de porco com gergelim preto." }
    },
    {
      name: { en: "Tungrymbai", es: "Tungrymbai", pt: "Tungrymbai" },
      desc: { en: "Fermented soybean chutney.", es: "Chutney de soja fermentada.", pt: "Chutney de soja fermentada." }
    },
    {
      name: { en: "Nakham Bitchi", es: "Nakham Bitchi", pt: "Nakham Bitchi" },
      desc: { en: "Traditional dry fish soup.", es: "Sopa de pescado seco.", pt: "Sopa de peixe seco." }
    },
    {
      name: { en: "Pukhlein", es: "Pukhlein", pt: "Pukhlein" },
      desc: { en: "Sweet fried rice flour bread.", es: "Pan frito dulce de harina de arroz.", pt: "Pão frito doce de farinha de arroz." }
    }
  ],
  bestTime: {
    en: "October to April is generally comfortable; October to November and March to April are particularly pleasant.",
    es: "De octubre a abril suele ser cómodo; octubre-noviembre y marzo-abril son especialmente agradables.",
    pt: "Outubro a abril geralmente é confortável; outubro-novembro e março-abril são especialmente agradáveis."
  },
  faqs: [
    {
      q: { en: "What is Shillong famous for?", es: "¿Por qué es famosa Shillong?", pt: "Pelo que Shillong é famosa?" },
      a: { en: "Waterfalls, hills, music and Khasi culture.", es: "Cascadas, montañas, música y cultura Khasi.", pt: "Cachoeiras, montanhas, música e cultura Khasi." }
    },
    {
      q: { en: "How many days?", es: "¿Cuántos días?", pt: "Quantos dias?" },
      a: { en: "3–4 days are ideal.", es: "3–4 días.", pt: "3–4 dias." }
    },
    {
      q: { en: "Can Shillong be combined with Cherrapunji?", es: "¿Se puede combinar con Cherrapunji?", pt: "Pode ser combinada com Cherrapunji?" },
      a: { en: "Yes, Cherrapunji is 55 km away and works well in the itinerary.", es: "Sí, es muy habitual combinarlos.", pt: "Sim, é muito comum combiná-las." }
    },
    {
      q: { en: "Is Shillong family-friendly?", es: "¿Es adecuada para familias?", pt: "É adequada para famílias?" },
      a: { en: "Yes, families can enjoy the lakes, waterfalls and pleasant weather.", es: "Sí, es excelente para familias.", pt: "Sim, é excelente para famílias." }
    },
    {
      q: { en: "What food should I try?", es: "¿Qué comida probar?", pt: "O que experimentar?" },
      a: { en: "Jadoh and dohneiihong are local specialties.", es: "Jadoh y dohneiihong.", pt: "Jadoh e dohneiihong." }
    }
  ]
};

const bodhGayaDetails = {
  tagline: {
    en: "Bodh Gaya is one of the world's most important Buddhist pilgrimage destinations, famous for Mahabodhi Temple and the place associated with Buddha's enlightenment.",
    es: "Bodh Gaya is uno de los destinos de peregrinación budista más importantes del mundo, famoso por Mahabodhi Temple y el lugar asociado con la iluminación de Buda.",
    pt: "Bodh Gaya é um dos mais importantes destinos de peregrinação budista do mundo, famoso pelo Mahabodhi Temple e pelo local associado à iluminação de Buda."
  },
  overview: {
    en: "Bodh Gaya is a deeply spiritual destination in Bihar and one of the most significant places in Buddhist history. According to Buddhist tradition, Siddhartha Gautama attained enlightenment here beneath the Bodhi Tree. The Mahabodhi Temple complex is the centre of the pilgrimage experience, while monasteries representing different Buddhist countries create a fascinating international atmosphere.",
    es: "Bodh Gaya es un destino profundamente espiritual en Bihar y uno de los lugares más importantes de la historia budista. Según la tradición budista, Siddhartha Gautama alcanzó la iluminación aquí bajo el árbol Bodhi. El complejo Mahabodhi Temple es el centro de la peregrinación.",
    pt: "Bodh Gaya é um destino profundamente espiritual em Bihar e um dos locais mais importantes da história budista. Segundo a tradição budista, Siddhartha Gautama alcançou a iluminação aqui sob a árvore Bodhi. O complexo do Mahabodhi Temple é o centro da experiência de peregrinação."
  },
  highlights: [
    {
      title: { en: "Mahabodhi Temple", es: "Templo Mahabodhi", pt: "Templo Mahabodhi" },
      desc: { en: "UNESCO World Heritage site and sacred temple complex.", es: "Templo Patrimonio de la Humanidad.", pt: "Templo Patrimônio da Humanidade." }
    },
    {
      title: { en: "Bodhi Tree", es: "Árbol Bodhi", pt: "Árvore Bodhi" },
      desc: { en: "The sacred fig tree associated with Buddha's enlightenment.", es: "El árbol sagrado de la iluminación.", pt: "A árvore sagrada da iluminação." }
    },
    {
      title: { en: "Great Buddha Statue", es: "Gran Estatua de Buda", pt: "Grande Estátua de Buda" },
      desc: { en: "Large outdoor statue of Lord Buddha.", es: "Gran estatua al aire libre de Buda.", pt: "Grande estátua ao ar livre de Buda." }
    },
    {
      title: { en: "Thai Monastery", es: "Monasterio Tailandés", pt: "Mosteiro Tailandês" },
      desc: { en: "Monastery built in traditional Thai architectural style.", es: "Monasterio de estilo tailandés.", pt: "Mosteiro em estilo tailandês." }
    },
    {
      title: { en: "International Monasteries", es: "Monasterios Internacionales", pt: "Mosteiros Internacionais" },
      desc: { en: "Temples built by various Buddhist nations.", es: "Monasterios construidos por varios países.", pt: "Mosteiros construídos por vários países." }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Mahabodhi Temple", es: "Visitar Templo Mahabodhi", pt: "Visitar Templo Mahabodhi" },
      desc: { en: "Visit Mahabodhi Temple.", es: "Visita Mahabodhi Temple.", pt: "Visite o Mahabodhi Temple." }
    },
    {
      name: { en: "Meditate at Bodhi Tree", es: "Meditar bajo el Árbol Bodhi", pt: "Meditar sob a Árvore Bodhi" },
      desc: { en: "Meditate near the Bodhi Tree.", es: "Medita junto al árbol Bodhi.", pt: "Medite próximo à árvore Bodhi." }
    },
    {
      name: { en: "Explore Monasteries", es: "Explorar Monasterios", pt: "Explorar Mosteiros" },
      desc: { en: "Explore international monasteries.", es: "Explora monasterios internacionales.", pt: "Explore mosteiros internacionais." }
    },
    {
      name: { en: "Visit Buddha Statue", es: "Visitar la Gran Estatua", pt: "Visitar a Grande Estátua" },
      desc: { en: "Visit Great Buddha Statue.", es: "Visita la Gran Estatua.", pt: "Visite a Grande Estátua." }
    },
    {
      name: { en: "Experience Buddhist Culture", es: "Cultura Budista", pt: "Cultura Budista" },
      desc: { en: "Experience Buddhist culture.", es: "Vive la cultura budista.", pt: "Vivencie a cultura budista." }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Gaya Airport operates regional flights. Gaya Railway Station has trains to Patna and Varanasi, easily linked by road routes.",
      es: "Bodh Gaya es accesible por tren o carretera desde Gaya y Patna.",
      pt: "Bodh Gaya é acessível por trem ou estrada a partir de Gaya e Patna."
    },
    nearestAirport: "Gaya Airport (GAY) / Patna Airport",
    nearestRailway: "Gaya Junction (GAYA)",
    transportOptions: "Auto-rickshaws, E-rickshaws, Taxis",
    distanceFromMajorCities: "Patna (110 km), Varanasi (250 km)",
    recommendedStay: "1-2 Days",
    avgTemp: "11°C - 35°C",
    currency: "INR",
    localLanguage: "Hindi, Magahi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and spiritual town. Follow silence protocols in temple meditation areas.",
      es: "Muy seguro. Mantenga silencio en las zonas de meditación.",
      pt: "Muito seguro. Mantenha silêncio nas áreas de meditação."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: { en: "Auto-rickshaws.", es: "Auto-rickshaws.", pt: "Auto-rickshaws." },
      recommended: true
    },
    {
      transportType: "E-Rickshaw",
      title: { en: "E-Rickshaw", es: "E-Rickshaw", pt: "E-riquixá" },
      desc: { en: "E-rickshaws.", es: "E-rickshaws.", pt: "E-rickshaws." },
      recommended: true
    },
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: { en: "Local taxis.", es: "Taxis locales.", pt: "Táxis locais." },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: { en: "Private cars.", es: "Coches privados.", pt: "Carros particulares." },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: { en: "Walking around temple areas.", es: "Caminar por la zona de templos.", pt: "Caminhadas pela área de templos." },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Dress Code", es: "Vestimenta respetuosa", pt: "Vestimenta respeitosa" },
      desc: { en: "Dress respectfully at temples.", es: "Viste respetuosamente en los templos.", pt: "Vista-se de forma respeitosa nos templos." }
    },
    {
      title: { en: "Silence", es: "Mantener silencio", pt: "Mantenha silêncio" },
      desc: { en: "Maintain silence in meditation areas.", es: "Mantén silencio en las zonas de meditación.", pt: "Mantenha silêncio nas áreas de meditação." }
    },
    {
      title: { en: "Remove Shoes", es: "Quítate los zapatos", pt: "Retire os calçados" },
      desc: { en: "Remove footwear where required.", es: "Quítate el calzado donde se requiera.", pt: "Retire os calçados onde for exigido." }
    },
    {
      title: { en: "Water", es: "Lleva agua", pt: "Leve água" },
      desc: { en: "Carry water.", es: "Lleva agua.", pt: "Leve água." }
    },
    {
      title: { en: "Photos Limit", es: "Fotografía", pt: "Fotografia" },
      desc: { en: "Respect photography restrictions.", es: "Respeta las restricciones de fotografía.", pt: "Respeite as restrições de fotografia." }
    }
  ],
  hotels: [
    {
      name: "The Royal Residency",
      tier: "Premium",
      desc: { en: "Comfortable hotel with Japanese hospitality.", es: "Hotel cómodo tradicional.", pt: "Hotel confortável tradicional." },
      image: ""
    },
    {
      name: "Hotel Bodh Vilas",
      tier: "Premium",
      desc: { en: "Modern premium hotel.", es: "Hotel premium moderno.", pt: "Hotel premium moderno." },
      image: ""
    },
    {
      name: "Oaks Bodhgaya",
      tier: "Premium",
      desc: { en: "Premium accommodation with modern amenities.", es: "Alojamiento premium moderno.", pt: "Hospedagem premium moderna." },
      image: ""
    },
    {
      name: "Maya Heritage",
      tier: "Premium",
      desc: { en: "Comfortable stay with local character.", es: "Alojamiento con carácter local.", pt: "Hospedagem com identidade local." },
      image: ""
    },
    {
      name: "Hotel Taj Darbar",
      tier: "Premium",
      desc: { en: "Established hotel near the main temple.", es: "Hotel tradicional cerca del templo.", pt: "Hotel tradicional perto do templo." },
      image: ""
    }
  ],
  localFood: {
    en: "Try Litti Chokha, Sattu Paratha, Dal Pitha, Khaja and Tilkut.",
    es: "Pruebe Litti Chokha, Sattu Paratha, Dal Pitha, Khaja y Tilkut.",
    pt: "Prove Litti Chokha, Sattu Paratha, Dal Pitha, Khaja e Tilkut."
  },
  localFoodDishes: [
    {
      name: { en: "Litti Chokha", es: "Litti Chokha", pt: "Litti Chokha" },
      desc: { en: "Baked wheat balls stuffed with sattu, served with mashed vegetables.", es: "Bolas de trigo con sattu y verduras.", pt: "Bolas de trigo com sattu e vegetais." }
    },
    {
      name: { en: "Sattu Paratha", es: "Sattu Paratha", pt: "Sattu Paratha" },
      desc: { en: "Flatbread stuffed with roasted chickpea flour.", es: "Pan plano relleno de harina de garbanzo.", pt: "Pão achatado recheado com farinha de grão-de-bico." }
    },
    {
      name: { en: "Dal Pitha", es: "Dal Pitha", pt: "Dal Pitha" },
      desc: { en: "Rice flour dumplings stuffed with spiced lentils.", es: "Empanadillas de arroz con lentejas.", pt: "Bolinhos de arroz com lentilhas." }
    },
    {
      name: { en: "Khaja", es: "Khaja", pt: "Khaja" },
      desc: { en: "Crispy layered sweet dessert.", es: "Dulce crujiente de varias capas.", pt: "Doce crocante de várias camadas." }
    },
    {
      name: { en: "Tilkut", es: "Tilkut", pt: "Tilkut" },
      desc: { en: "Traditional sweet prepared with sesame seeds.", es: "Dulce tradicional de sésamo.", pt: "Doce tradicional de gergelim." }
    }
  ],
  bestTime: {
    en: "October to March is generally the most comfortable period.",
    es: "De octubre a marzo suele ser el período más cómodo.",
    pt: "De outubro a março geralmente é o período mais confortável."
  },
  faqs: [
    {
      q: { en: "What is Bodh Gaya famous for?", es: "¿Por qué es famosa Bodh Gaya?", pt: "Pelo que Bodh Gaya é famosa?" },
      a: { en: "Buddha's enlightenment and Mahabodhi Temple.", es: "La iluminación de Buda y Mahabodhi Temple.", pt: "A iluminação de Buda e Mahabodhi Temple." }
    },
    {
      q: { en: "How many days?", es: "¿Cuántos días?", pt: "Quantos dias?" },
      a: { en: "1–2 days are sufficient for the main sites.", es: "1–2 días.", pt: "1–2 dias." }
    },
    {
      q: { en: "Is it suitable for families?", es: "¿Es adecuada para familias?", pt: "É adequada para famílias?" },
      a: { en: "Yes, the destination offers a peaceful atmosphere suitable for families.", es: "Sí, es excelente para familias.", pt: "Sim, é adequada para famílias." }
    },
    {
      q: { en: "Can Bodh Gaya be combined with Varanasi?", es: "¿Se puede combinar con Varanasi?", pt: "Pode ser combinada com Varanasi?" },
      a: { en: "Yes, Varanasi is 250 km away and easily combined.", es: "Sí, se combinan con facilidad.", pt: "Sim, são facilmente combinadas." }
    },
    {
      q: { en: "What should I wear?", es: "¿Qué debo vestir?", pt: "O que devo vestir?" },
      a: { en: "Comfortable and respectful clothing.", es: "Ropa cómoda y respetuosa.", pt: "Roupas confortáveis e respeitosas." }
    }
  ]
};

// ======================== ANDHRA PRADESH CITIES ========================

const visakhapatnamDetails = {
  tagline: {
    en: "Visakhapatnam, or Vizag, is a coastal city known for beautiful beaches, hills, caves, naval heritage and scenic viewpoints.",
    es: "Visakhapatnam, también conocida como Vizag, es una ciudad costera famosa por sus playas, colinas, cuevas, patrimonio naval y miradores.",
    pt: "Visakhapatnam, também conhecida como Vizag, é uma cidade costeira famosa por suas praias, colinas, cavernas, patrimônio naval e mirantes."
  },
  overview: {
    en: "Visakhapatnam combines beaches, hills and urban attractions along the Bay of Bengal. Visitors can enjoy RK Beach, Kailasagiri, Submarine Museum and nearby Araku Valley. The city is an excellent destination for families, beach lovers and travellers interested in combining coastal relaxation with nature and cultural experiences.",
    es: "Visakhapatnam combina playas, colinas y atracciones urbanas junto a la bahía de Bengala. Los visitantes pueden disfrutar de RK Beach, Kailasagiri, Submarine Museum y la cercana Araku Valley.",
    pt: "Visakhapatnam combina praias, colinas e atrações urbanas junto à Baía de Bengala. Os visitantes podem conhecer RK Beach, Kailasagiri, Submarine Museum e o próximo Araku Valley."
  },
  highlights: [
    {
      title: { en: "RK Beach", es: "RK Beach", pt: "RK Beach" },
      desc: { en: "Lively city beach popular for evening walks.", es: "Playa urbana popular para pasear.", pt: "Praia urbana popular para caminhadas." }
    },
    {
      title: { en: "Kailasagiri Hill", es: "Kailasagiri Hill", pt: "Kailasagiri Hill" },
      desc: { en: "Hilltop park offering panoramic coastal views.", es: "Parque en la colina con vistas costeras.", pt: "Parque no alto da colina com vistas costeiras." }
    },
    {
      title: { en: "INS Kurusura Submarine Museum", es: "Submarine Museum", pt: "Submarine Museum" },
      desc: { en: "Museum housed inside a real decommissioned submarine.", es: "Museo en un submarino real.", pt: "Museu em um submarino real desativado." }
    },
    {
      title: { en: "Yarada Beach", es: "Playa Yarada", pt: "Praia Yarada" },
      desc: { en: "Quiet beach surrounded by hills and sea views.", es: "Playa tranquila rodeada de colinas.", pt: "Praia tranquila cercada por colinas." }
    },
    {
      title: { en: "Simhachalam Temple", es: "Templo Simhachalam", pt: "Templo Simhachalam" },
      desc: { en: "Historic temple dedicated to Lord Narasimha.", es: "Templo histórico dedicado a Narasimha.", pt: "Templo histórico dedicado a Narasimha." }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Relax at RK Beach", es: "Relajarse en RK Beach", pt: "Relaxar na RK Beach" },
      desc: { en: "Relax at RK Beach.", es: "Disfruta de RK Beach.", pt: "Relaxe na RK Beach." }
    },
    {
      name: { en: "Visit Kailasagiri", es: "Visitar Kailasagiri", pt: "Visitar Kailasagiri" },
      desc: { en: "Visit Kailasagiri.", es: "Visita Kailasagiri.", pt: "Visite Kailasagiri." }
    },
    {
      name: { en: "Explore Submarine Museum", es: "Explorar el Submarino", pt: "Explorar o Submarino" },
      desc: { en: "Explore the submarine museum.", es: "Explora el museo del submarino.", pt: "Explore o museu do submarino." }
    },
    {
      name: { en: "Visit Yarada Beach", es: "Visitar Playa Yarada", pt: "Visitar Praia Yarada" },
      desc: { en: "Visit Yarada Beach.", es: "Visita Yarada Beach.", pt: "Visite a Praia Yarada." }
    },
    {
      name: { en: "Trip to Araku", es: "Excursión a Araku Valley", pt: "Passeio ao Araku Valley" },
      desc: { en: "Take a trip towards Araku Valley.", es: "Realiza una excursión a Araku Valley.", pt: "Faça um passeio até o Araku Valley." }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Visakhapatnam Airport provides domestic and international connections. Vizag station is a major rail terminal with national connections.",
      es: "Vizag es accesible por avión, tren o carretera.",
      pt: "Vizag é acessível por avião, trem ou estrada."
    },
    nearestAirport: "Visakhapatnam International Airport (VTZ)",
    nearestRailway: "Visakhapatnam Railway Station (VSKP)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Vijayawada (350 km), Hyderabad (620 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "20°C - 34°C",
    currency: "INR",
    localLanguage: "Telugu & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe coastal city. Pay attention to beach safety and high tide warnings.",
      es: "Muy seguro. Siga las advertencias de mareas.",
      pt: "Muito seguro. Siga os avisos de maré."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: { en: "Auto-rickshaws.", es: "Auto-rickshaws.", pt: "Auto-rickshaws." },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxi por Aplicativo" },
      desc: { en: "App-based taxis.", es: "Taxis por aplicación.", pt: "Táxis por aplicativo." },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: { en: "Local buses.", es: "Autobuses locales.", pt: "Ônibus locais." },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: { en: "Private cars.", es: "Coches privados.", pt: "Carros particulares." },
      recommended: true
    },
    {
      transportType: "Rental Vehicle",
      title: { en: "Rental Vehicle", es: "Coche de Alquiler", pt: "Carro de Aluguel" },
      desc: { en: "Rental vehicles.", es: "Vehículos de alquiler.", pt: "Veículos de aluguel." },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Sun Protection", es: "Protección solar", pt: "Proteção solar" },
      desc: { en: "Carry sun protection.", es: "Lleva protección solar.", pt: "Leve proteção solar." }
    },
    {
      title: { en: "Beach Hours", es: "Playas temprano", pt: "Praias cedo" },
      desc: { en: "Visit beaches early or late in the day.", es: "Visita las playas temprano o tarde.", pt: "Visite as praias cedo ou no fim da tarde." }
    },
    {
      title: { en: "Beach Warnings", es: "Seguridad marina", pt: "Segurança marítima" },
      desc: { en: "Respect beach safety warnings.", es: "Respeta las advertencias de seguridad.", pt: "Respeite os avisos de segurança das praias." }
    },
    {
      title: { en: "Andhra Cuisine", es: "Comida picante", pt: "Comida picante" },
      desc: { en: "Try spicy Andhra cuisine.", es: "Prueba la comida picante de Andhra.", pt: "Experimente a culinária picante de Andhra." }
    },
    {
      title: { en: "Araku Road Trip", es: "Viaje a Araku", pt: "Viagem a Araku" },
      desc: { en: "Keep extra time for Araku road trips.", es: "Reserva tiempo para el viaje a Araku.", pt: "Reserve tempo para a viagem a Araku." }
    }
  ],
  hotels: [
    {
      name: "The Park Visakhapatnam",
      tier: "Luxury",
      desc: { en: "Premium luxury beachfront hotel.", es: "Hotel de lujo frente al mar.", pt: "Hotel de luxo à beira-mar." },
      image: ""
    },
    {
      name: "Novotel Visakhapatnam Varun Beach",
      tier: "Luxury",
      desc: { en: "Modern luxury hotel overlooking sea.", es: "Hotel moderno de lujo con vistas.", pt: "Hotel moderno de luxo com vista." },
      image: ""
    },
    {
      name: "Welcomhotel by ITC Hotels",
      tier: "Premium",
      desc: { en: "Premium upscale city accommodation.", es: "Hotel de categoría superior.", pt: "Hospedagem sofisticada." },
      image: ""
    },
    {
      name: "Four Points by Sheraton Visakhapatnam",
      tier: "Premium",
      desc: { en: "Comfortable premium modern accommodation.", es: "Alojamiento moderno premium.", pt: "Hospedagem moderna premium." },
      image: ""
    },
    {
      name: "Radisson Blu Resort Visakhapatnam",
      tier: "Luxury",
      desc: { en: "Beach resort-style premium stay.", es: "Resort de playa premium.", pt: "Resort de praia premium." },
      image: ""
    }
  ],
  localFood: {
    en: "Try Andhra Meals, Gongura Pachadi, Royyala Vepudu, Pulihora and Pootharekulu.",
    es: "Pruebe Andhra Meals, Gongura Pachadi, Royyala Vepudu, Pulihora y Pootharekulu.",
    pt: "Prove Andhra Meals, Gongura Pachadi, Royyala Vepudu, Pulihora e Pootharekulu."
  },
  localFoodDishes: [
    {
      name: { en: "Andhra Meals", es: "Andhra Meals", pt: "Andhra Meals" },
      desc: { en: "Traditional vegetarian platter featuring spicy dishes.", es: "Plato tradicional vegetariano picante.", pt: "Prato tradicional vegetariano picante." }
    },
    {
      name: { en: "Gongura Pachadi", es: "Gongura Pachadi", pt: "Gongura Pachadi" },
      desc: { en: "Sour sorrel leaf pickle.", es: "Pepinillo ácido de hojas de sorrel.", pt: "Conservas ácidas de folhas de azedinha." }
    },
    {
      name: { en: "Royyala Vepudu", es: "Royyala Vepudu", pt: "Royyala Vepudu" },
      desc: { en: "Spicy Andhra-style prawn fry.", es: "Gambas fritas picantes al estilo de Andhra.", pt: "Camarões fritos picantes ao estilo de Andhra." }
    },
    {
      name: { en: "Pulihora", es: "Pulihora", pt: "Pulihora" },
      desc: { en: "Tamarind-flavoured traditional rice preparation.", es: "Arroz con tamarindo tradicional.", pt: "Arroz tradicional com sabor de tamarindo." }
    },
    {
      name: { en: "Pootharekulu", es: "Pootharekulu", pt: "Pootharekulu" },
      desc: { en: "Traditional sweet wrapped in thin wafer sheets.", es: "Dulce tradicional envuelto en hojas finas.", pt: "Doce tradicional envolto em folhas finas." }
    }
  ],
  bestTime: {
    en: "October to March is generally the most comfortable period.",
    es: "De octubre a marzo suele ser el período más cómodo.",
    pt: "De outubro a março geralmente é o período mais confortável."
  },
  faqs: [
    {
      q: { en: "What is Vizag famous for?", es: "¿Por qué es famosa Vizag?", pt: "Pelo que Vizag é famosa?" },
      a: { en: "Beaches, hills and coastal scenery.", es: "Playas, colinas y paisajes costeros.", pt: "Praias, colinas e paisagens costeiras." }
    },
    {
      q: { en: "How many days?", es: "¿Cuántos días?", pt: "Quantos dias?" },
      a: { en: "2–3 days are ideal.", es: "2–3 días.", pt: "2–3 dias." }
    },
    {
      q: { en: "Is it family-friendly?", es: "¿Es adecuada para familias?", pt: "É adequada para famílias?" },
      a: { en: "Yes, the beaches and museums are popular with families.", es: "Sí, es excelente para familias.", pt: "Sim, é excelente para famílias." }
    },
    {
      q: { en: "Can Araku Valley be visited from Vizag?", es: "¿Se puede visitar Araku?", pt: "Araku pode ser visitado?" },
      a: { en: "Yes, it is about 115 km away and works well as a day trip or overnight.", es: "Sí, es una excursión muy popular.", pt: "Sim, é um passeio muito popular." }
    },
    {
      q: { en: "What food should I try?", es: "¿Qué comida probar?", pt: "O que experimentar?" },
      a: { en: "Andhra meals and local seafood.", es: "Comida de Andhra y mariscos.", pt: "Comida de Andhra e frutos do mar." }
    }
  ]
};

const arakuValleyDetails = {
  tagline: {
    en: "Araku Valley is a beautiful hill destination in Andhra Pradesh known for coffee plantations, waterfalls, tribal culture, caves and lush mountain scenery.",
    es: "Araku Valley es un hermoso destino de montaña de Andhra Pradesh conocido por sus plantaciones de café, cascadas, cultura tribal, cuevas y paisajes verdes.",
    pt: "Araku Valley é um belo destino montanhoso de Andhra Pradesh conhecido por suas plantações de café, cachoeiras, cultura tribal, cavernas e paisagens verdes."
  },
  overview: {
    en: "Araku Valley offers a peaceful escape into the Eastern Ghats and is one of Andhra Pradesh's most scenic destinations. The journey from Visakhapatnam is itself an attraction, with winding mountain roads and railway routes through tunnels and valleys. Visitors can explore Borra Caves, coffee plantations, waterfalls and tribal villages while enjoying the region's cooler climate.",
    es: "Araku Valley ofrece una tranquila escapada a los Ghats Orientales y es uno de los destinos más pintorescos de Andhra Pradesh. El viaje desde Visakhapatnam es una atracción en sí mismo, con carreteras montañosas y rutas ferroviarias que atraviesan túneles y valles.",
    pt: "Araku Valley oferece uma tranquila escapada para os Ghats Orientais e é um dos destinos mais cênicos de Andhra Pradesh. A viagem desde Visakhapatnam é uma atração por si só, com estradas sinuosas e ferrovias que atravessam túneis e vales."
  },
  highlights: [
    {
      title: { en: "Borra Caves", es: "Borra Caves", pt: "Borra Caves" },
      desc: { en: "Deep cave systems famous for stalactite and stalagmite formations.", es: "Cuevas famosas por sus formaciones.", pt: "Cavernas famosas por suas formações." }
    },
    {
      title: { en: "Coffee Plantations", es: "Plantaciones de café", pt: "Plantações de café" },
      desc: { en: "Lush green plantations producing Araku coffee.", es: "Plantaciones verdes de café Araku.", pt: "Plantações verdes de café Araku." }
    },
    {
      title: { en: "Katiki Waterfalls", es: "Katiki Waterfalls", pt: "Katiki Waterfalls" },
      desc: { en: "Waterfall located close to Borra Caves.", es: "Cascada cercana a Borra Caves.", pt: "Cachoeira próxima a Borra Caves." }
    },
    {
      title: { en: "Tribal Museum", es: "Museo Tribal", pt: "Museu Tribal" },
      desc: { en: "Museum displaying tribal culture and lifestyle.", es: "Museo que muestra la cultura tribal.", pt: "Museu que apresenta a cultura tribal." }
    },
    {
      title: { en: "Araku Scenic Railway Journey", es: "Viaje en tren escénico", pt: "Viagem de trem cênica" },
      desc: { en: "Mountain rail route with tunnels and valleys.", es: "Ruta en tren con túneles y valles.", pt: "Rota de trem com túneis e vales." }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Borra Caves", es: "Explorar Borra Caves", pt: "Explore a Borra Caves" },
      desc: { en: "Explore Borra Caves.", es: "Explora Borra Caves.", pt: "Explore Borra Caves." }
    },
    {
      name: { en: "Visit coffee plantations", es: "Visitar Plantaciones", pt: "Visitar Plantações" },
      desc: { en: "Visit coffee plantations.", es: "Visita las plantaciones.", pt: "Visite as plantações." }
    },
    {
      name: { en: "Enjoy Waterfalls", es: "Disfrutar de Cascadas", pt: "Aproveitar as Cachoeiras" },
      desc: { en: "Enjoy waterfall scenery.", es: "Disfruta de las cascadas.", pt: "Aproveite as cachoeiras." }
    },
    {
      name: { en: "Visit Tribal Museum", es: "Visitar el Museo Tribal", pt: "Visite o Museu Tribal" },
      desc: { en: "Visit Tribal Museum.", es: "Visita el Museo Tribal.", pt: "Visite o Museu Tribal." }
    },
    {
      name: { en: "Scenic train journey", es: "Viaje en tren", pt: "Viagem de trem" },
      desc: { en: "Take a scenic train journey.", es: "Haz un viaje en tren.", pt: "Faça uma viagem de trem." }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Visakhapatnam Airport is 115 km away. Araku has a railway station on the scenic Vizag-Kirandul line. Winding mountain roads connect them.",
      es: "Araku es accesible por tren o carretera desde Visakhapatnam.",
      pt: "Araku é acessível por trem ou estrada a partir de Visakhapatnam."
    },
    nearestAirport: "Visakhapatnam Airport (VTZ)",
    nearestRailway: "Araku Railway Station (ARK)",
    transportOptions: "Private Taxis, Buses, Local Shared Jeeps",
    distanceFromMajorCities: "Visakhapatnam (115 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "15°C - 32°C",
    currency: "INR",
    localLanguage: "Telugu & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe hill station. Drive carefully on mountain hairpins.",
      es: "Muy seguro. Conduzca con precaución.",
      pt: "Muito seguro. Dirija com cuidado."
    }
  },
  gettingAround: [
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: { en: "Local taxis.", es: "Taxis locales.", pt: "Táxis locais." },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: { en: "Private cars.", es: "Coches privados.", pt: "Carros particulares." },
      recommended: true
    },
    {
      transportType: "Tour Vehicle",
      title: { en: "Tour Vehicle", es: "Vehículo Turístico", pt: "Veículo Turístico" },
      desc: { en: "Tour vehicles.", es: "Vehículos turísticos.", pt: "Veículos turísticos." },
      recommended: true
    },
    {
      transportType: "Shared Transport",
      title: { en: "Shared Transport", es: "Transporte Compartido", pt: "Transporte Compartilhado" },
      desc: { en: "Shared transport.", es: "Transporte compartido.", pt: "Transporte compartilhado." },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: { en: "Walking around selected attractions.", es: "Caminar por las atracciones.", pt: "Caminhadas pelas atrações." },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Light Jacket", es: "Chaqueta ligera", pt: "Casaco leve" },
      desc: { en: "Carry a light jacket.", es: "Lleva una chaqueta ligera.", pt: "Leve uma jaqueta leve." }
    },
    {
      title: { en: "Comfortable Shoes", es: "Zapatos cómodos", pt: "Calçados confortáveis" },
      desc: { en: "Wear comfortable walking shoes.", es: "Lleva calzado cómodo.", pt: "Use calçados confortáveis." }
    },
    {
      title: { en: "Rain Gear", es: "Protección de lluvia", pt: "Capa de chuva" },
      desc: { en: "Carry rain protection.", es: "Lleva protección para la lluvia.", pt: "Leve proteção contra chuva." }
    },
    {
      title: { en: "Buy Direct", es: "Comprar café directo", pt: "Comprar café direto" },
      desc: { en: "Buy coffee directly from reputable local sellers.", es: "Compra café directamente en las tiendas locales.", pt: "Compre café diretamente em lojas locais." }
    },
    {
      title: { en: "Mountain Travel Time", es: "Tiempo extra en ruta", pt: "Tempo extra na estrada" },
      desc: { en: "Allow extra time for mountain travel.", es: "Reserva tiempo extra para las carreteras.", pt: "Reserve tempo extra para as estradas." }
    }
  ],
  hotels: [
    {
      name: "Haritha Mayuri Resort",
      tier: "Premium",
      desc: { en: "Comfortable state-run hill resort.", es: "Resort de montaña cómodo.", pt: "Resort de montanha confortável." },
      image: ""
    },
    {
      name: "Araku Haritha Valley Resort",
      tier: "Premium",
      desc: { en: "Established resort in a green valley setting.", es: "Resort en el valle verde.", pt: "Resort no vale verde." },
      image: ""
    },
    {
      name: "Ushodaya Resorts",
      tier: "Premium",
      desc: { en: "Comfortable hillside cottages.", es: "Cabañas cómodas en las colinas.", pt: "Chalés confortáveis nas colinas." },
      image: ""
    },
    {
      name: "Ananthagiri Hill Resort",
      tier: "Premium",
      desc: { en: "Resort close to viewpoints and coffee gardens.", es: "Resort cerca de miradores.", pt: "Resort próximo a mirantes." },
      image: ""
    },
    {
      name: "Local homestays",
      tier: "Budget",
      desc: { en: "Practical local home accommodations.", es: "Alojamientos familiares locales.", pt: "Hospedagens familiares locais." },
      image: ""
    }
  ],
  localFood: {
    en: "Try Bamboo Chicken, Araku Coffee, Andhra Thali, Ragi Dishes and Tribal Preparations.",
    es: "Pruebe Bamboo Chicken, Café Araku, Thali de Andhra y platos de Ragi.",
    pt: "Prove Bamboo Chicken, Café Araku, Thali de Andhra e pratos de Ragi."
  },
  localFoodDishes: [
    {
      name: { en: "Bamboo Chicken", es: "Bamboo Chicken", pt: "Bamboo Chicken" },
      desc: { en: "Spiced chicken cooked inside a bamboo stalk.", es: "Pollo con especias cocinado en bambú.", pt: "Frango temperado cozido no bambu." }
    },
    {
      name: { en: "Araku Coffee", es: "Café Araku", pt: "Café Araku" },
      desc: { en: "Locally grown organic coffee.", es: "Café orgánico de cultivo local.", pt: "Café orgânico cultivado localmente." }
    },
    {
      name: { en: "Andhra Thali", es: "Andhra Thali", pt: "Andhra Thali" },
      desc: { en: "Traditional vegetarian regional platter.", es: "Plato tradicional vegetariano.", pt: "Prato tradicional vegetariano." }
    },
    {
      name: { en: "Ragi-based dishes", es: "Platos con Ragi", pt: "Pratos com Ragi" },
      desc: { en: "Traditional dishes prepared from millet.", es: "Platos elaborados con harina de mijo.", pt: "Pratos preparados com milheto." }
    },
    {
      name: { en: "Tribal vegetable preparations", es: "Verduras estilo tribal", pt: "Vegetais estilo tribal" },
      desc: { en: "Vegetable preparations prepared in traditional tribal style.", es: "Platos tradicionales con verduras.", pt: "Pratos tradicionais de vegetais." }
    }
  ],
  bestTime: {
    en: "October to March is generally pleasant for Araku Valley.",
    es: "De octubre a marzo suele ser agradable para Araku Valley.",
    pt: "De outubro a março geralmente é agradável para Araku Valley."
  },
  faqs: [
    {
      q: { en: "What is Araku famous for?", es: "¿Por qué es famosa Araku?", pt: "Pelo que Araku é famosa?" },
      a: { en: "Coffee, caves, waterfalls and tribal culture.", es: "Café, cuevas, cascadas y cultura tribal.", pt: "Café, cavernas, cachoeiras e cultura tribal." }
    },
    {
      q: { en: "How many days?", es: "¿Cuántos días?", pt: "Quantos dias?" },
      a: { en: "2–3 days are suitable.", es: "2–3 días.", pt: "2–3 dias." }
    },
    {
      q: { en: "Can Araku be visited from Vizag?", es: "¿Se puede visitar desde Vizag?", pt: "Pode ser visitada a partir de Vizag?" },
      a: { en: "Yes, it is 115 km away, accessible by road and train.", es: "Sí, es muy habitual combinarlos.", pt: "Sim, é muito comum combiná-las." }
    },
    {
      q: { en: "What should I try?", es: "¿Qué probar?", pt: "O que experimentar?" },
      a: { en: "Bamboo chicken and Araku coffee.", es: "Bamboo chicken y café Araku.", pt: "Bamboo chicken e café Araku." }
    },
    {
      q: { en: "Is Araku family-friendly?", es: "¿Es adecuada para familias?", pt: "É adequada para famílias?" },
      a: { en: "Yes, families can enjoy the waterfalls, caves and nature.", es: "Sí, es excelente para familias.", pt: "Sim, é adequada para famílias." }
    }
  ]
};

const vijayawadaDetails = {
  tagline: {
    en: "Vijayawada is an important cultural city in Andhra Pradesh, known for temples, the Krishna River, caves, historic landmarks and vibrant local cuisine.",
    es: "Vijayawada es una importante ciudad cultural de Andhra Pradesh, conocida por sus templos, el río Krishna, cuevas, monumentos históricos y gastronomía local.",
    pt: "Vijayawada é uma importante cidade cultural de Andhra Pradesh, conhecida por seus templos, rio Krishna, cavernas, monumentos históricos e culinária local."
  },
  overview: {
    en: "Vijayawada is located along the Krishna River and is an important commercial and cultural centre of Andhra Pradesh. The city is best known for Kanaka Durga Temple, situated on Indrakeeladri Hill, as well as Prakasam Barrage and nearby Undavalli Caves. Vijayawada is a convenient stop for travellers exploring Andhra Pradesh and can be combined with Amaravati and other nearby destinations.",
    es: "Vijayawada está situada junto al río Krishna y es un importante centro comercial y cultural de Andhra Pradesh. La ciudad es conocida principalmente por Kanaka Durga Temple, situado en Indrakeeladri Hill, además de Prakasam Barrage y Undavalli Caves.",
    pt: "Vijayawada está localizada às margens do rio Krishna e é um importante centro comercial e cultural de Andhra Pradesh. La cidade é conhecida principalmente pelo Kanaka Durga Temple, situado na Indrakeeladri Hill, além de Prakasam Barrage e Undavalli Caves."
  },
  highlights: [
    {
      title: { en: "Kanaka Durga Temple", es: "Templo Kanaka Durga", pt: "Templo Kanaka Durga" },
      desc: { en: "Important temple located on Indrakeeladri Hill.", es: "Templo situado en la colina Indrakeeladri.", pt: "Templo situado na colina Indrakeeladri." }
    },
    {
      title: { en: "Prakasam Barrage", es: "Prakasam Barrage", pt: "Prakasam Barrage" },
      desc: { en: "Large barrage built across the Krishna River.", es: "Gran presa construida sobre el río Krishna.", pt: "Grande represa construída sobre o rio Krishna." }
    },
    {
      title: { en: "Undavalli Caves", es: "Undavalli Caves", pt: "Undavalli Caves" },
      desc: { en: "Historic rock-cut caves featuring a large reclining Vishnu statue.", es: "Cuevas con una gran estatua de Vishnu.", pt: "Cavernas com uma grande estátua de Vishnu." }
    },
    {
      title: { en: "Krishna River", es: "Río Krishna", pt: "Rio Krishna" },
      desc: { en: "Majestic river landscape and waterfront walks.", es: "Paisaje fluvial y paseos junto al río.", pt: "Paisagem fluvial e caminhadas junto ao rio." }
    },
    {
      title: { en: "Bhavani Island", es: "Isla Bhavani", pt: "Ilha Bhavani" },
      desc: { en: "Large river island offering recreation and boating.", es: "Isla fluvial con actividades recreativas.", pt: "Ilha fluvial com atividades recreativas." }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Kanaka Durga Temple", es: "Visitar Templo Kanaka Durga", pt: "Visite o Templo Kanaka Durga" },
      desc: { en: "Visit Kanaka Durga Temple.", es: "Visita Kanaka Durga Temple.", pt: "Visite o Kanaka Durga Temple." }
    },
    {
      name: { en: "Prakasam Barrage Walk", es: "Paseo por Prakasam Barrage", pt: "Caminhar pela Prakasam Barrage" },
      desc: { en: "Walk around Prakasam Barrage.", es: "Pasea por Prakasam Barrage.", pt: "Caminhe pela Prakasam Barrage." }
    },
    {
      name: { en: "Explore Undavalli Caves", es: "Explorar Undavalli Caves", pt: "Explore a Undavalli Caves" },
      desc: { en: "Explore Undavalli Caves.", es: "Explora Undavalli Caves.", pt: "Explore Undavalli Caves." }
    },
    {
      name: { en: "Enjoy River Views", es: "Disfrutar de las Vistas", pt: "Aproveitar as Vistas do Rio" },
      desc: { en: "Enjoy Krishna River views.", es: "Disfruta de las vistas al río.", pt: "Aproveite as vistas do rio." }
    },
    {
      name: { en: "Visit Bhavani Island", es: "Visitar Isla Bhavani", pt: "Visite a Ilha Bhavani" },
      desc: { en: "Visit Bhavani Island.", es: "Visita la isla Bhavani.", pt: "Visite a Ilha Bhavani." }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Vijayawada Airport connects domestically. Vijayawada station is a major South India railway junction, well linked by roads.",
      es: "Vijayawada es accesible por avión, tren o carretera.",
      pt: "Vijayawada é acessível por avião, trem ou estrada."
    },
    nearestAirport: "Vijayawada International Airport (VGA)",
    nearestRailway: "Vijayawada Junction (BZA)",
    transportOptions: "Auto-rickshaws, App Taxis, Buses",
    distanceFromMajorCities: "Hyderabad (270 km), Chennai (450 km)",
    recommendedStay: "1-2 Days",
    avgTemp: "20°C - 38°C",
    currency: "INR",
    localLanguage: "Telugu & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and busy city. Drink plenty of water as summers are very hot.",
      es: "Muy seguro. Beba agua en verano.",
      pt: "Muito seguro. Beba água no verão."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: { en: "Auto-rickshaws.", es: "Auto-rickshaws.", pt: "Auto-rickshaws." },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxi por Aplicativo" },
      desc: { en: "App-based taxis.", es: "Taxis por aplicación.", pt: "Táxis por aplicativo." },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: { en: "Local buses.", es: "Autobuses locales.", pt: "Ônibus locais." },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: { en: "Private cars.", es: "Coches privados.", pt: "Carros particulares." },
      recommended: true
    },
    {
      transportType: "Rental Vehicle",
      title: { en: "Rental Vehicle", es: "Coche de Alquiler", pt: "Carro de Aluguel" },
      desc: { en: "Rental vehicles.", es: "Vehículos de alquiler.", pt: "Veículos de aluguel." },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Dress respectfully", es: "Vestimenta", pt: "Vestimenta" },
      desc: { en: "Dress respectfully at temples.", es: "Viste de manera respetuosa al visitar los templos.", pt: "Vista-se de forma discreta ao visitar os templos." }
    },
    {
      title: { en: "Hydration", es: "Lleva agua", pt: "Leve água" },
      desc: { en: "Carry water during outdoor sightseeing.", es: "Lleva agua durante las visitas al aire libre.", pt: "Leve água durante os passeios ao ar livre." }
    },
    {
      title: { en: "Andhra food", es: "Comida de Andhra", pt: "Comida de Andhra" },
      desc: { en: "Try authentic Andhra cuisine.", es: "Prueba la auténtica gastronomía de Andhra.", pt: "Experimente a autêntica culinária de Andhra." }
    },
    {
      title: { en: "Early Temple Visits", es: "Templos temprano", pt: "Templos cedo" },
      desc: { en: "Visit temples early to avoid crowds.", es: "Visita los templos temprano para evitar multitudes.", pt: "Visite os templos cedo para evitar multidões." }
    },
    {
      title: { en: "Amaravati Excursion", es: "Combina destinos", pt: "Combine destinos" },
      desc: { en: "Combine Vijayawada with Amaravati for a fuller itinerary.", es: "Combina Vijayawada con Amaravati para un viaje completo.", pt: "Combine Vijayawada com Amaravati para um roteiro completo." }
    }
  ],
  hotels: [
    {
      name: "Novotel Vijayawada Varun",
      tier: "Luxury",
      desc: { en: "Premium modern luxury hotel.", es: "Hotel moderno de lujo.", pt: "Hotel moderno de luxo." },
      image: ""
    },
    {
      name: "Lemon Tree Premier Vijayawada",
      tier: "Premium",
      desc: { en: "Comfortable modern city hotel.", es: "Hotel moderno y confortable.", pt: "Hotel moderno e confortável." },
      image: ""
    },
    {
      name: "The Gateway Hotel",
      tier: "Premium",
      desc: { en: "Established hotel near the river.", es: "Hotel tradicional cerca del río.", pt: "Hotel tradicional perto do rio." },
      image: ""
    },
    {
      name: "Quality Hotel DV Manor",
      tier: "Premium",
      desc: { en: "Upscale central hotel.", es: "Hotel urbano de categoría superior.", pt: "Hotel urbano sofisticado." },
      image: ""
    },
    {
      name: "Hotel Ilapuram",
      tier: "Mid-range",
      desc: { en: "Practical city accommodation.", es: "Alojamiento práctico en la ciudad.", pt: "Hospedagem prática na cidade." },
      image: ""
    }
  ],
  localFood: {
    en: "Try Andhra Meals, Gongura Pachadi, Pulihora, Gutti Vankaya and Pootharekulu.",
    es: "Pruebe Andhra Meals, Gongura Pachadi, Pulihora, Gutti Vankaya y Pootharekulu.",
    pt: "Prove Andhra Meals, Gongura Pachadi, Pulihora, Gutti Vankaya e Pootharekulu."
  },
  localFoodDishes: [
    {
      name: { en: "Andhra Meals", es: "Andhra Meals", pt: "Andhra Meals" },
      desc: { en: "Traditional vegetarian platter featuring spicy dishes.", es: "Plato tradicional vegetariano picante.", pt: "Prato tradicional vegetariano picante." }
    },
    {
      name: { en: "Gongura Pachadi", es: "Gongura Pachadi", pt: "Gongura Pachadi" },
      desc: { en: "Sour sorrel leaf pickle.", es: "Pepinillo de hojas de sorrel.", pt: "Conservas de folhas de azedinha." }
    },
    {
      name: { en: "Pulihora", es: "Pulihora", pt: "Pulihora" },
      desc: { en: "Tamarind-flavoured traditional rice preparation.", es: "Arroz con tamarindo tradicional.", pt: "Arroz tradicional com sabor de tamarindo." }
    },
    {
      name: { en: "Gutti Vankaya", es: "Gutti Vankaya", pt: "Gutti Vankaya" },
      desc: { en: "Spicy stuffed eggplant curry.", es: "Curry picante de berenjenas rellenas.", pt: "Curry picante de berinjelas recheadas." }
    },
    {
      name: { en: "Pootharekulu", es: "Pootharekulu", pt: "Pootharekulu" },
      desc: { en: "Traditional sweet wrapped in wafer sheets.", es: "Dulce tradicional envuelto en hojas finas.", pt: "Doce tradicional envolto em folhas finas." }
    }
  ],
  bestTime: {
    en: "October to March is generally the most comfortable period for sightseeing.",
    es: "De octubre a marzo suele ser el período más cómodo para hacer turismo.",
    pt: "De outubro a março geralmente é o período mais confortável para passeios."
  },
  faqs: [
    {
      q: { en: "What is Vijayawada famous for?", es: "¿Por qué es famosa Vijayawada?", pt: "Pelo que Vijayawada é famosa?" },
      a: { en: "Vijayawada is famous for Kanaka Durga Temple, Krishna River and Prakasam Barrage.", es: "Vijayawada es famosa por Kanaka Durga Temple, el río Krishna y Prakasam Barrage.", pt: "Vijayawada é famosa pelo Kanaka Durga Temple, rio Krishna e Prakasam Barrage." }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: { en: "One to two days are sufficient for the main attractions.", es: "Uno o dos días son suficientes para las principales atracciones.", pt: "Um a dois dias são suficientes para as principais atrações." }
    },
    {
      q: { en: "Can Vijayawada be combined with Amaravati?", es: "¿Se puede combinar con Amaravati?", pt: "Pode ser combinada com Amaravati?" },
      a: { en: "Yes, the two destinations can easily be included in the same itinerary.", es: "Sí, ambos destinos pueden incluirse fácilmente en el mismo itinerario.", pt: "Sim, os dois destinos podem ser facilmente incluídos no mesmo roteiro." }
    },
    {
      q: { en: "What food should I try?", es: "¿Qué comida probar?", pt: "Que comida experimentar?" },
      a: { en: "Try Andhra meals, gongura pachadi, pulihora, gutti vankaya and pootharekulu.", es: "Prueba Andhra meals, gongura pachadi, pulihora, gutti vankaya y pootharekulu.", pt: "Experimente Andhra meals, gongura pachadi, pulihora, gutti vankaya e pootharekulu." }
    },
    {
      q: { en: "Is Vijayawada family-friendly?", es: "¿Es adecuada para familias?", pt: "É adequada para famílias?" },
      a: { en: "Yes, temples, riverfront attractions, caves and nearby destinations make it suitable for families.", es: "Sí, sus templos, atracciones junto al río, cuevas y destinos cercanos son adecuados para familias.", pt: "Sim, seus templos, atrações junto ao rio, cavernas e destinos próximos são adequados para famílias." }
    }
  ]
};

// ======================== STATE MANAGER ========================

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  // Helper function to update state cities
  const updateStateCities = (stateSlug, mappings) => {
    const idx = states.findIndex(s => s.slug === stateSlug);
    if (idx !== -1) {
      console.log(`Updating ${stateSlug} cities in local file...`);
      const stateObj = states[idx];
      stateObj.cities = stateObj.cities || [];
      
      for (const [citySlug, cityDetails] of Object.entries(mappings)) {
        const cityIdx = stateObj.cities.findIndex(c => c.slug === citySlug);
        if (cityIdx !== -1) {
          stateObj.cities[cityIdx] = { ...stateObj.cities[cityIdx], ...cityDetails };
          console.log(` -> Updated city details: ${citySlug}`);
        } else {
          console.error(` -> City slug '${citySlug}' not found under ${stateSlug}!`);
        }
      }
      
      states[idx] = stateObj;
      return stateObj;
    } else {
      console.error(`State slug '${stateSlug}' not found in states.json!`);
      return null;
    }
  };

  const updatedWB = updateStateCities("west-bengal", { "kolkata": kolkataDetails });
  const updatedOdisha = updateStateCities("odisha", { "bhubaneswar": bhubaneswarDetails });
  const updatedAssam = updateStateCities("assam", { "guwahati": guwahatiDetails });
  const updatedAndaman = updateStateCities("andaman-islands", { "port-blair": portBlairDetails });
  const updatedSikkim = updateStateCities("sikkim", { "gangtok": gangtokDetails });
  const updatedTelangana = updateStateCities("telangana", { "hyderabad": hyderabadDetails });
  const updatedLadakh = updateStateCities("ladakh", { "leh": lehDetails });
  const updatedMeghalaya = updateStateCities("meghalaya", { "shillong": shillongDetails });
  const updatedBihar = updateStateCities("bihar", { "bodh-gaya": bodhGayaDetails });
  const updatedAP = updateStateCities("andhra-pradesh", {
    "visakhapatnam": visakhapatnamDetails,
    "araku-valley": arakuValleyDetails,
    "vijayawada": vijayawadaDetails
  });

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for all 10 states and 12 cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const uploadPromises = [];

    const addPromise = (slug, data) => {
      if (data) {
        const docRef = doc(firestore, "states", slug);
        uploadPromises.push(setDoc(docRef, data).then(() => console.log(`🚀 SUCCESS: Remote Firestore '${slug}' document updated!`)));
      }
    };

    addPromise("west-bengal", updatedWB);
    addPromise("odisha", updatedOdisha);
    addPromise("assam", updatedAssam);
    addPromise("andaman-islands", updatedAndaman);
    addPromise("sikkim", updatedSikkim);
    addPromise("telangana", updatedTelangana);
    addPromise("ladakh", updatedLadakh);
    addPromise("meghalaya", updatedMeghalaya);
    addPromise("bihar", updatedBihar);
    addPromise("andhra-pradesh", updatedAP);

    Promise.all(uploadPromises).then(() => {
      console.log("✅ All Firestore updates completed successfully!");
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
