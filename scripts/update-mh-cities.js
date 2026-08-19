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

// 1. MUMBAI DETAILS
const mumbaiDetails = {
  tagline: {
    en: "Mumbai is India's vibrant financial and entertainment capital, famous for its coastal setting, Bollywood, colonial landmarks, street food, bustling markets and energetic city life.",
    es: "Mumbai es la vibrante capital financiera y del entretenimiento de India, famosa por su ubicación costera, Bollywood, monumentos coloniales, comida callejera, mercados y animada vida urbana.",
    pt: "Mumbai é a vibrante capital financeira e do entretenimento da Índia, famosa por sua localização costeira, Bollywood, monumentos coloniais, comida de rua, mercados e vida urbana movimentada."
  },
  overview: {
    en: "Mumbai is a dynamic metropolis where history, culture, business and entertainment come together along the Arabian Sea. From the iconic Gateway of India and Chhatrapati Shivaji Maharaj Terminus to Marine Drive, Colaba and the city's vibrant markets, Mumbai offers an exciting mix of heritage and modern urban life. Visitors can explore Bollywood culture, museums, art spaces, historic neighbourhoods and some of India's most famous street foods. Mumbai is ideal for first-time visitors, families, couples, food lovers and travellers interested in culture and city life.",
    es: "Mumbai es una metrópolis dinámica donde la historia, la cultura, los negocios y el entretenimiento se unen junto al mar Arábigo. Desde la icónica Puerta de la India y la estación Chhatrapati Shivaji Maharaj Terminus hasta Marine Drive, Colaba y sus animados mercados, Mumbai ofrece una fascinante combinación de patrimonio y vida urbana moderna. Los visitantes pueden descubrir Bollywood, museos, espacios de arte, barrios históricos y algunas de las comidas callejeras más famosas de India.",
    pt: "Mumbai é uma metrópole dinâmica onde história, cultura, negócios e entretenimento se encontram às margens do Mar Arábico. Do icônico Gateway of India e da estação Chhatrapati Shivaji Maharaj Terminus a Marine Drive, Colaba e seus mercados movimentados, Mumbai oferece uma fascinante combinação de patrimônio e vida urbana moderna. Os visitantes podem conhecer Bollywood, museus, espaços de arte, bairros históricos e algumas das comidas de rua mais famosas da Índia."
  },
  highlights: [
    {
      title: { en: "Gateway of India", es: "Puerta de la India", pt: "Portal da Índia" },
      desc: {
        en: "Iconic waterfront monument and symbol of Mumbai.",
        es: "Monumento emblemático frente al mar y símbolo de Mumbai.",
        pt: "Monumento icônico à beira-mar e símbolo de Mumbai."
      }
    },
    {
      title: { en: "Marine Drive", es: "Marine Drive", pt: "Marine Drive" },
      desc: {
        en: "Famous coastal promenade offering beautiful sunset and evening views.",
        es: "Famoso paseo marítimo con hermosas vistas del atardecer y la ciudad.",
        pt: "Famoso calçadão à beira-mar com belas vistas do pôr do sol e da cidade."
      }
    },
    {
      title: { en: "Chhatrapati Shivaji Maharaj Terminus", es: "Chhatrapati Shivaji Maharaj Terminus", pt: "Chhatrapati Shivaji Maharaj Terminus" },
      desc: {
        en: "Magnificent UNESCO-listed railway heritage landmark.",
        es: "Magnífico monumento ferroviario declarado Patrimonio de la Humanidad por la UNESCO.",
        pt: "Magnífico marco ferroviário reconhecido como Patrimônio Mundial pela UNESCO."
      }
    },
    {
      title: { en: "Colaba", es: "Colaba", pt: "Colaba" },
      desc: {
        en: "Historic neighbourhood known for heritage buildings, cafés and shopping.",
        es: "Barrio histórico conocido por sus edificios patrimoniales, cafeterías y tiendas.",
        pt: "Bairro histórico conhecido por edifícios patrimoniais, cafés e lojas."
      }
    },
    {
      title: { en: "Bollywood", es: "Bollywood", pt: "Bollywood" },
      desc: {
        en: "Discover the city's famous film and entertainment culture.",
        es: "Descubre la famosa cultura cinematográfica y de entretenimiento de la ciudad.",
        pt: "Conheça a famosa cultura cinematográfica e de entretenimento da cidade."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Gateway of India & Colaba", es: "Explorar la Puerta de la India y Colaba", pt: "Explorar o Portal da Índia e Colaba" },
      desc: {
        en: "Visit Gateway of India and explore Colaba historic neighbourhood.",
        es: "Visita la Puerta de la India y explora el barrio histórico de Colaba.",
        pt: "Visite o Portal da Índia e explore o bairro histórico de Colaba."
      }
    },
    {
      name: { en: "Marine Drive Sunset Walk", es: "Pasear por Marine Drive", pt: "Caminhar pela Marine Drive" },
      desc: {
        en: "Walk along Marine Drive at sunset to enjoy ocean views.",
        es: "Camina por Marine Drive al atardecer para disfrutar de vistas al mar.",
        pt: "Caminhe pela Marine Drive ao pôr do sol para apreciar o mar."
      }
    },
    {
      name: { en: "Explore CSM Terminus", es: "Explorar la Estación Central", pt: "Explorar a Estação Central" },
      desc: {
        en: "Explore Chhatrapati Shivaji Maharaj Terminus architectural monument.",
        es: "Explora el magnífico monumento arquitectónico de la estación central.",
        pt: "Explore o magnífico monumento arquitetônico da estação central."
      }
    },
    {
      name: { en: "Art Galleries & Museums", es: "Galerías y Museos", pt: "Galerias e Museus" },
      desc: {
        en: "Visit museums and art galleries to discover Mumbai's rich creative heritage.",
        es: "Visita museos y galerías para descubrir el patrimonio creativo de la ciudad.",
        pt: "Visite museus e galerias para conhecer o patrimônio criativo da cidade."
      }
    },
    {
      name: { en: "Try Local Street Food", es: "Probar Comida Callejera", pt: "Experimentar Comida de Rua" },
      desc: {
        en: "Try Mumbai's famous street foods such as Vada Pav and Pav Bhaji.",
        es: "Prueba la famosa comida callejera como el Vada Pav y Pav Bhaji.",
        pt: "Experimente a famosa comida de rua como o Vada Pav e Pav Bhaji."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Chhatrapati Shivaji Maharaj International Airport provides extensive domestic and international connectivity. Mumbai is also one of India's major railway hubs and is well connected by road.",
      es: "El aeropuerto de Mumbai ofrece conexiones nacionales e internacionales.",
      pt: "O aeroporto de Mumbai oferece voos domésticos e internacionais."
    },
    nearestAirport: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
    nearestRailway: "CSMT / Mumbai Central (MMCT)",
    transportOptions: "Local Trains, Metro, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Pune (150 km), Nashik (170 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "20°C - 33°C",
    currency: "INR",
    localLanguage: "Marathi, Hindi, Gujarati & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe cosmopolitan city. Keep bags secure in overcrowded trains.",
      es: "Ciudad cosmopolita muy segura.",
      pt: "Cidade cosmopolita muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Local Train",
      title: { en: "Local Train", es: "Tren Local", pt: "Trem Local" },
      desc: {
        en: "Mumbai local trains, fast but highly crowded during peak hours.",
        es: "Trenes locales de Mumbai, muy concurridos.",
        pt: "Trens locais de Mumbai, muito movimentados."
      },
      recommended: true
    },
    {
      transportType: "Metro",
      title: { en: "Metro", es: "Metro", pt: "Metrô" },
      desc: {
        en: "Modern and comfortable metro services connecting suburbs.",
        es: "Servicio de metro moderno y cómodo.",
        pt: "Serviço de metrô moderno e confortável."
      },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxi de Aplicación", pt: "Táxi de Aplicativo" },
      desc: {
        en: "App-based taxis offering comfortable point-to-point city journeys.",
        es: "Taxis por aplicación cómodos para traslados.",
        pt: "Táxis por aplicativo confortáveis para deslocamentos."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short routes within suburban districts (not allowed in South Mumbai).",
        es: "Útil en los suburbios de la ciudad.",
        pt: "Útil nos subúrbios da cidade."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Excellent around Colaba, Fort, and historic heritage districts.",
        es: "Ideal para explorar Colaba y el casco histórico.",
        pt: "Ideal para explorar Colaba e o centro histórico."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Peak Hours", es: "Horas Pico", pt: "Horários de Pico" },
      desc: {
        en: "Avoid peak traffic hours whenever possible.",
        es: "Evita las horas de mayor congestión de tráfico.",
        pt: "Evite os horários de maior congestionamento."
      }
    },
    {
      title: { en: "Local Transit", es: "Transporte Local", pt: "Transporte Local" },
      desc: {
        en: "Use local trains or metro for longer city journeys.",
        es: "Utiliza los trenes locales o el metro para distancias largas.",
        pt: "Use os trens locais ou o metrô para distâncias longas."
      }
    },
    {
      title: { en: "Monsoon", es: "Monzón", pt: "Monção" },
      desc: {
        en: "Carry an umbrella during the monsoon.",
        es: "Lleva paraguas durante el monzón.",
        pt: "Leve guarda-chuva durante a monção."
      }
    },
    {
      title: { en: "Valuables", es: "Objetos de Valor", pt: "Objetos de Valor" },
      desc: {
        en: "Keep valuables secure in crowded areas.",
        es: "Mantén seguros tus objetos de valor en zonas concurridas.",
        pt: "Mantenha seus objetos de valor seguros em áreas movimentadas."
      }
    },
    {
      title: { en: "Bookings", es: "Reservas", pt: "Reservas" },
      desc: {
        en: "Book popular attractions and hotels in advance.",
        es: "Reserva atracciones populares y hoteles con anticipación.",
        pt: "Reserve atrações populares e hotéis com antecedência."
      }
    }
  ],
  hotels: [
    {
      name: "The Taj Mahal Palace",
      tier: "Luxury",
      desc: {
        en: "Iconic luxury hotel overlooking the Gateway of India.",
        es: "Icónico hotel de lujo con vistas a la Puerta de la India.",
        pt: "Icônico hotel de luxo com vista para o Portal da Índia."
      },
      image: ""
    },
    {
      name: "The Oberoi Mumbai",
      tier: "Luxury",
      desc: {
        en: "Luxury stay near Marine Drive.",
        es: "Estancia de lujo cerca de Marine Drive.",
        pt: "Hospedagem de luxo perto da Marine Drive."
      },
      image: ""
    },
    {
      name: "Trident Nariman Point",
      tier: "Premium",
      desc: {
        en: "Premium accommodation with sea views.",
        es: "Alojamiento de categoría superior con vistas al mar.",
        pt: "Hospedagem de categoria superior com vista para o mar."
      },
      image: ""
    },
    {
      name: "Taj Santacruz",
      tier: "Luxury",
      desc: {
        en: "Convenient luxury option near the airport.",
        es: "Conveniente opción de lujo cerca del aeropuerto.",
        pt: "Conveniente opção de luxo perto do aeroporto."
      },
      image: ""
    },
    {
      name: "ITC Maratha",
      tier: "Premium",
      desc: {
        en: "Premium hotel close to Mumbai airport.",
        es: "Hotel de categoría superior cerca del aeropuerto.",
        pt: "Hotel de categoria superior perto do aeroporto."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Vada Pav, Pav Bhaji, Misal Pav, Bombay Sandwich and Bhel Puri.",
    es: "Pruebe Vada Pav, Pav Bhaji, Misal Pav, Bombay Sandwich y Bhel Puri.",
    pt: "Prove Vada Pav, Pav Bhaji, Misal Pav, Bombay Sandwich e Bhel Puri."
  },
  localFoodDishes: [
    {
      name: { en: "Vada Pav", es: "Vada Pav", pt: "Vada Pav" },
      desc: {
        en: "Spicy potato fritter served inside a soft bread bun with chutneys.",
        es: "Buñuelo picante de patata servido en panecillo suave con chutneys.",
        pt: "Bolinho de batata apimentado servido em pão macio com chutneys."
      }
    },
    {
      name: { en: "Pav Bhaji", es: "Pav Bhaji", pt: "Pav Bhaji" },
      desc: {
        en: "Thick vegetable curry cooked in butter, served with soft bread rolls.",
        es: "Curry espeso de verduras cocinado con mantequilla, servido con pan.",
        pt: "Curry espesso de vegetais cozido com manteiga, servido com pão."
      }
    },
    {
      name: { en: "Misal Pav", es: "Misal Pav", pt: "Misal Pav" },
      desc: {
        en: "Spicy curry made from sprouted moth beans, topped with farsan and served with bread.",
        es: "Curry picante de legumbres germinadas servido con farsan y pan.",
        pt: "Curry apimentado de leguminosas germinadas servido com farsan e pão."
      }
    },
    {
      name: { en: "Bombay Sandwich", es: "Sándwich de Bombay", pt: "Sanduíche de Bombaim" },
      desc: {
        en: "Sandwich filled with fresh vegetables, mint chutney and local spices.",
        es: "Sándwich relleno de verduras frescas, chutney de menta y especias.",
        pt: "Sanduíche recheado com vegetais frescos, chutney de hortelã e especiarias."
      }
    },
    {
      name: { en: "Bhel Puri", es: "Bhel Puri", pt: "Bhel Puri" },
      desc: {
        en: "Savoury snack made of puffed rice, vegetables and sweet-tangy tamarind chutney.",
        es: "Aperitivo de arroz inflado, verduras y chutney de tamarindo.",
        pt: "Petisco de arroz inflado, vegetais e chutney de tamarindo."
      }
    }
  ],
  bestTime: {
    en: "November to February is generally the most comfortable period for sightseeing. The monsoon from June to September brings heavy rainfall but also a greener city.",
    es: "De noviembre a febrero suele ser el período más agradable para hacer turismo. El monzón, de junio a septiembre, trae fuertes lluvias, pero también paisajes más verdes.",
    pt: "De novembro a fevereiro geralmente é o período mais confortável para passeios. A temporada de monções, de junho a setembro, traz chuvas fortes, mas também deixa a cidade mais verde."
  },
  faqs: [
    {
      q: { en: "What is Mumbai famous for?", es: "¿Por qué es famosa Mumbai?", pt: "Pelo que Mumbai é famosa?" },
      a: {
        en: "Mumbai is famous for Bollywood, Marine Drive, Gateway of India, street food and its vibrant urban culture.",
        es: "Mumbai es famosa por Bollywood, Marine Drive, Gateway of India, su comida callejera y su vibrante cultura urbana.",
        pt: "Mumbai é famosa por Bollywood, Marine Drive, Gateway of India, sua comida de rua e sua vibrante cultura urbana."
      }
    },
    {
      q: { en: "How many days are enough for Mumbai?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "3–4 days are ideal for exploring the city's major attractions.",
        es: "3–4 días son ideales para conocer las principales atracciones de la ciudad.",
        pt: "3–4 dias são ideais para conhecer as principais atrações da cidade."
      }
    },
    {
      q: { en: "Is Mumbai good for families?", es: "¿Es adecuada para familias?", pt: "Mumbai é adequada para famílias?" },
      a: {
        en: "Yes, Mumbai offers museums, landmarks, parks, shopping and family-friendly attractions.",
        es: "Sí, ofrece museos, monumentos, parques, compras y atracciones familiares.",
        pt: "Sim, oferece museus, monumentos, parques, compras e atrações para famílias."
      }
    },
    {
      q: { en: "Is Mumbai expensive for tourists?", es: "¿Es cara para los turistas?", pt: "Mumbai é cara para turistas?" },
      a: {
        en: "Mumbai offers accommodation, food and experiences across different budgets.",
        es: "Mumbai ofrece alojamiento, comida y experiencias para diferentes presupuestos.",
        pt: "Mumbai oferece hospedagem, alimentação e experiências para diferentes orçamentos."
      }
    },
    {
      q: { en: "What should I try in Mumbai?", es: "¿Qué comida local se recomienda?", pt: "O que se recomenda comer?" },
      a: {
        en: "Vada pav, pav bhaji, misal pav and bhel puri are popular local choices.",
        es: "Vada pav, pav bhaji, misal pav y bhel puri son opciones locales populares.",
        pt: "Vada pav, pav bhaji, misal pav e bhel puri são opções locais populares."
      }
    }
  ]
};

// 2. PUNE DETAILS
const puneDetails = {
  tagline: {
    en: "Pune is a lively cultural and educational city in Maharashtra, known for its historic forts, Maratha heritage, pleasant surroundings, cafés, museums and vibrant student culture.",
    es: "Pune es una ciudad cultural y educativa de Maharashtra, conocida por sus fortalezas históricas, patrimonio Maratha, cafés, museos y vibrante ambiente estudiantil.",
    pt: "Pune é uma cidade cultural e educacional de Maharashtra, conhecida por seus fortes históricos, patrimônio Maratha, cafés, museus e vibrante ambiente universitário."
  },
  overview: {
    en: "Pune blends Maratha history, colonial heritage, modern education and a lively cultural scene. The city is associated with the history of the Maratha Empire and offers attractions such as Shaniwar Wada, Aga Khan Palace, Sinhagad Fort and Pataleshwar Cave Temple. Pune's pleasant climate, cafés, markets and proximity to the Western Ghats make it an excellent destination for history lovers, families and weekend travellers.",
    es: "Pune combina historia Maratha, patrimonio colonial, educación moderna y una animada escena cultural. La ciudad está profundamente vinculada a la historia del Imperio Maratha y ofrece lugares como Shaniwar Wada, Aga Khan Palace, Sinhagad Fort y Pataleshwar Cave Temple. Su clima agradable, cafeterías, mercados y proximidad a los Ghats Occidentales la convierten en un excelente destino para amantes de la historia y viajeros de fin de semana.",
    pt: "Pune combina história Maratha, patrimônio colonial, educação moderna e uma cena cultural vibrante. A cidade está profundamente ligada à história do Império Maratha e oferece atrações como Shaniwar Wada, Aga Khan Palace, Sinhagad Fort e Pataleshwar Cave Temple. Seu clima agradável, cafés, mercados e proximidade dos Gates Ocidentais fazem de Pune um excelente destino para amantes de história e viajantes de fim de semana."
  },
  highlights: [
    {
      title: { en: "Shaniwar Wada", es: "Shaniwar Wada", pt: "Shaniwar Wada" },
      desc: {
        en: "Historic fortified palace seat of the Peshwas of the Maratha Empire.",
        es: "Palacio fortificado histórico de los Peshwas del Imperio Maratha.",
        pt: "Palácio fortificado histórico dos Peshwas do Império Maratha."
      }
    },
    {
      title: { en: "Aga Khan Palace", es: "Palacio de Aga Khan", pt: "Palácio de Aga Khan" },
      desc: {
        en: "Magnificent palace associated with India's independence movement.",
        es: "Magnífico palacio asociado con el movimiento de independencia.",
        pt: "Magnífico palácio associado ao movimento de independência."
      }
    },
    {
      title: { en: "Sinhagad Fort", es: "Fuerte Sinhagad", pt: "Forte Sinhagad" },
      desc: {
        en: "Historic hill fortress offering beautiful views of the surrounding hills.",
        es: "Fortaleza histórica en colina con hermosas vistas.",
        pt: "Fortaleza histórica na colina com belas vistas."
      }
    },
    {
      title: { en: "Pataleshwar Cave Temple", es: "Templo de la Cueva Pataleshwar", pt: "Templo da Caverna Pataleshwar" },
      desc: {
        en: "Ancient 8th-century rock-cut temple dedicated to Lord Shiva.",
        es: "Antiguo templo excavado en roca dedicado a Shiva.",
        pt: "Antigo templo escavado em rocha dedicado a Shiva."
      }
    },
    {
      title: { en: "Café & Cultural Scene", es: "Cultura y Cafeterías", pt: "Cafés e Cultura" },
      desc: {
        en: "Explore Pune's vibrant café culture, historic museums, and lively youth spirit.",
        es: "Explora la cultura de cafés, museos y el ambiente joven.",
        pt: "Explore a cultura de cafés, museus e o ambiente jovem."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Shaniwar Wada", es: "Explorar Shaniwar Wada", pt: "Explorar Shaniwar Wada" },
      desc: {
        en: "Walk through the historic ruins and learn about Maratha Peshwas history.",
        es: "Recorre las ruinas históricas y conoce la historia de los Peshwas.",
        pt: "Caminhe pelas ruínas históricas e conheça a história dos Peshwas."
      }
    },
    {
      name: { en: "Visit Aga Khan Palace", es: "Visitar el Palacio de Aga Khan", pt: "Visitar o Palácio de Aga Khan" },
      desc: {
        en: "Explore the Italian arches, lush gardens, and historic archives of Mahatma Gandhi.",
        es: "Explora los arcos, jardines y los archivos de Mahatma Gandhi.",
        pt: "Explore os arcos, jardins e os arquivos de Mahatma Gandhi."
      }
    },
    {
      name: { en: "Trek to Sinhagad Fort", es: "Senderismo al Fuerte Sinhagad", pt: "Trilha para o Forte Sinhagad" },
      desc: {
        en: "Trek up the historic hill fort to enjoy views and traditional local snacks.",
        es: "Sube a la fortaleza para disfrutar de vistas y aperitivos locales.",
        pt: "Suba a fortaleza para apreciar belas vistas e petiscos locais."
      }
    },
    {
      name: { en: "Museums & Cultural Sites", es: "Monumentos y Museos", pt: "Monumentos e Museus" },
      desc: {
        en: "Visit Raja Dinkar Kelkar Museum and other historic cultural landmarks.",
        es: "Visita el Museo Raja Dinkar Kelkar y otros monumentos importantes.",
        pt: "Visite o Museu Raja Dinkar Kelkar e outros marcos importantes."
      }
    },
    {
      name: { en: "Try Maharashtrian Cuisine", es: "Probar Comida Local", pt: "Experimentar Comida Local" },
      desc: {
        en: "Taste traditional dishes such as Misal Pav, Bhakri, and Puran Poli.",
        es: "Prueba los platos tradicionales como el Misal Pav y Puran Poli.",
        pt: "Experimente os pratos tradicionais como o Misal Pav e Puran Poli."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Pune International Airport offers domestic connectivity. Pune Junction connects the city with Mumbai via Expressways and rail routes.",
      es: "El aeropuerto de Pune ofrece conexiones nacionales.",
      pt: "O aeroporto de Pune oferece voos domésticos."
    },
    nearestAirport: "Pune International Airport (PNQ)",
    nearestRailway: "Pune Junction (PUNE)",
    transportOptions: "Metro, Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Mumbai (150 km), Nashik (210 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "15°C - 35°C",
    currency: "INR",
    localLanguage: "Marathi, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe educational hub. Take standard precautions during night treks.",
      es: "Ciudad universitaria muy segura.",
      pt: "Cidade universitária muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Metro",
      title: { en: "Pune Metro", es: "Metro de Pune", pt: "Metrô de Pune" },
      desc: {
        en: "Clean and fast transit linking residential and commercial zones.",
        es: "Metro limpio y rápido.",
        pt: "Metrô limpo e rápido."
      },
      recommended: true
    },
    {
      transportType: "PMPML Buses",
      title: { en: "PMPML Buses", es: "Autobuses PMPML", pt: "Ônibus PMPML" },
      desc: {
        en: "Local municipal bus network spanning across the metropolitan area.",
        es: "Autobuses locales que cubren la ciudad.",
        pt: "Ônibus locais que cobrem a cidade."
      },
      recommended: false
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short local transfers inside main city limits.",
        es: "Útil para distancias cortas.",
        pt: "Útil para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "Convenient point-to-point travel with clear pricing structures.",
        es: "Cómodo con tarifas claras.",
        pt: "Conveniente com tarifas claras."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado / Alquiler", pt: "Carro Particular" },
      desc: {
        en: "Highly recommended for visiting Sinhagad Fort and nearby hill stations.",
        es: "Recomendado para visitar fortalezas y montañas.",
        pt: "Recomendado para visitar fortes e serras."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Early Fort Trek", es: "Treks de Mañana", pt: "Trilhas de Manhã" },
      desc: {
        en: "Start fort visits early in the morning to avoid heat.",
        es: "Comienza los treks temprano por la mañana para evitar el calor.",
        pt: "Comece as trilhas cedo pela manhã para evitar o calor."
      }
    },
    {
      title: { en: "Footwear", es: "Zapatos de Trekking", pt: "Calçados de Trilha" },
      desc: {
        en: "Carry water and comfortable shoes for trekking.",
        es: "Lleva agua y calzado adecuado para caminatas.",
        pt: "Leve água e calçados adequados para caminhadas."
      }
    },
    {
      title: { en: "Avoid Peak Traffic", es: "Evitar Tráfico", pt: "Evitar Trânsito" },
      desc: {
        en: "Avoid peak traffic hours around central junctions.",
        es: "Evita las horas punta en los cruces céntricos.",
        pt: "Evite os horários de pico nos cruzamentos centrais."
      }
    },
    {
      title: { en: "Local Food", es: "Comida Local", pt: "Comida Local" },
      desc: {
        en: "Try local Maharashtrian food at traditional restaurants.",
        es: "Prueba la gastronomía tradicional de Maharashtra.",
        pt: "Prove a culinária tradicional de Maharashtra."
      }
    },
    {
      title: { en: "Monsoon Gear", es: "Clima Monzónico", pt: "Clima de Monções" },
      desc: {
        en: "Keep an umbrella during the monsoon.",
        es: "Lleva paraguas durante el monzón.",
        pt: "Leve guarda-chuva durante a monção."
      }
    }
  ],
  hotels: [
    {
      name: "The Westin Pune Koregaon Park",
      tier: "Luxury",
      desc: {
        en: "Premium urban stay along the Mula Mutha river layout.",
        es: "Alojamiento urbano premium junto al río.",
        pt: "Hospedagem urbana premium à beira do rio."
      },
      image: ""
    },
    {
      name: "JW Marriott Hotel Pune",
      tier: "Luxury",
      desc: {
        en: "Luxury accommodation featuring modern premium facilities.",
        es: "Hotel de lujo con servicios modernos de primer nivel.",
        pt: "Hotel de luxo com excelentes serviços modernos."
      },
      image: ""
    },
    {
      name: "Conrad Pune",
      tier: "Luxury",
      desc: {
        en: "Premium central hotel offering Art Deco layouts.",
        es: "Hotel céntrico premium con hermosos diseños.",
        pt: "Hotel central de alto padrão com excelentes instalações."
      },
      image: ""
    },
    {
      name: "Hyatt Pune",
      tier: "Premium",
      desc: {
        en: "Convenient luxury option close to Kalyani Nagar.",
        es: "Opción cómoda y de lujo cerca de Kalyani Nagar.",
        pt: "Opção confortável e luxuosa perto de Kalyani Nagar."
      },
      image: ""
    },
    {
      name: "Sheraton Grand Pune Bund Garden Hotel",
      tier: "Premium",
      desc: {
        en: "Comfortable city stay with classic heritage style and services.",
        es: "Cómodo hotel urbano con estilo y servicios clásicos.",
        pt: "Confortável hotel urbano com estilo e serviços clássicos."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Misal Pav, Bhakri, Puran Poli, Bharli Vangi and Sabudana Khichdi.",
    es: "Pruebe Misal Pav, Bhakri, Puran Poli, Bharli Vangi y Sabudana Khichdi.",
    pt: "Prove Misal Pav, Bhakri, Puran Poli, Bharli Vangi e Sabudana Khichdi."
  },
  localFoodDishes: [
    {
      name: { en: "Misal Pav", es: "Misal Pav", pt: "Misal Pav" },
      desc: {
        en: "Spicy sprouts curry served with bread rolls, garnished with onions and sev.",
        es: "Curry picante de legumbres germinadas servido con pan.",
        pt: "Curry apimentado de leguminosas germinadas servido com pão."
      }
    },
    {
      name: { en: "Bhakri", es: "Bhakri", pt: "Bhakri" },
      desc: {
        en: "Traditional flatbread made from millet flour, served with spicy local chutneys.",
        es: "Pan plano tradicional hecho de harina de mijo.",
        pt: "Pão achatado tradicional feito com farinha de milhete."
      }
    },
    {
      name: { en: "Puran Poli", es: "Puran Poli", pt: "Puran Poli" },
      desc: {
        en: "Sweet flatbread stuffed with a sweet lentil and jaggery mixture.",
        es: "Pan dulce relleno con una mezcla de lentejas y jaggery.",
        pt: "Pão doce recheado com uma mistura de lentilhas e jaggery."
      }
    },
    {
      name: { en: "Bharli Vangi", es: "Bharli Vangi", pt: "Bharli Vangi" },
      desc: {
        en: "Stuffed baby eggplants prepared in a spiced coconut and peanut gravy.",
        es: "Berenjenas rellenas en una salsa de coco y cacahuete.",
        pt: "Berinjelas recheadas em molho de coco e amendoim."
      }
    },
    {
      name: { en: "Sabudana Khichdi", es: "Sabudana Khichdi", pt: "Sabudana Khichdi" },
      desc: {
        en: "A popular dish made of sago pearls, roasted peanuts, potatoes and green chillies.",
        es: "Plato popular elaborado con perlas de sagú, patatas y cacahuetes.",
        pt: "Prato popular preparado com sagu, batatas e amendoim."
      }
    }
  ],
  bestTime: {
    en: "October to February is generally comfortable for sightseeing. June to September is attractive for greenery and waterfalls but brings monsoon rain.",
    es: "De octubre a febrero suele ser agradable para hacer turismo. De junio a septiembre es atractivo por los paisajes verdes y las cascadas, aunque hay lluvias monzónicas.",
    pt: "De outubro a fevereiro geralmente é confortável para passeios. De junho a setembro é interessante pela vegetação e cachoeiras, mas há chuvas de monções."
  },
  faqs: [
    {
      q: { en: "What is Pune famous for?", es: "¿Por qué es famosa Pune?", pt: "Pelo que Pune é famosa?" },
      a: {
        en: "Pune is famous for Maratha history, forts, education, culture and food.",
        es: "Pune es famosa por su historia Maratha, fortalezas, educación, cultura y gastronomía.",
        pt: "Pune é famosa por sua história Maratha, fortes, educação, cultura e gastronomia."
      }
    },
    {
      q: { en: "How many days are enough for Pune?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are suitable for the city's major attractions.",
        es: "2–3 días son adecuados para conocer las principales atracciones.",
        pt: "2–3 dias são adequados para conhecer as principais atrações."
      }
    },
    {
      q: { en: "Is Pune good for a weekend trip?", es: "¿Es adecuada para un viaje de fin de semana?", pt: "Pune é boa para uma viagem de fim de semana?" },
      a: {
        en: "Yes, Pune is an excellent base for exploring nearby forts and hill destinations.",
        es: "Sí, es una excelente base para explorar fortalezas y destinos de montaña cercanos.",
        pt: "Sim, é um excelente ponto de partida para explorar fortes e destinos serranos."
      }
    },
    {
      q: { en: "What food is Pune famous for?", es: "¿Qué comida típica tiene Pune?", pt: "Qual a comida típica de Pune?" },
      a: {
        en: "Misal pav, bhakri and puran poli are popular local dishes.",
        es: "Misal pav, bhakri y puran poli son platos locales populares.",
        pt: "Misal pav, bhakri e puran poli são pratos locais populares."
      }
    },
    {
      q: { en: "Is Pune family-friendly?", es: "¿Es adecuada para familias?", pt: "Pune é adequada para famílias?" },
      a: {
        en: "Yes, Pune has museums, historic sites, parks and cultural attractions suitable for families.",
        es: "Sí, tiene museos, lugares históricos, parques y atracciones culturales para familias.",
        pt: "Sim, possui museus, locais históricos, parques e atrações culturais para famílias."
      }
    }
  ]
};

// 3. NASHIK DETAILS
const nashikDetails = {
  tagline: {
    en: "Nashik is a historic and spiritual city in Maharashtra, famous for temples, the Godavari River, vineyards, wine tourism, caves and scenic landscapes.",
    es: "Nashik es una ciudad histórica y espiritual de Maharashtra, famosa por sus templos, el río Godavari, viñedos, turismo del vino, cuevas y paisajes naturales.",
    pt: "Nashik é uma cidade histórica e espiritual de Maharashtra, famosa por seus templos, pelo rio Godavari, vinhedos, enoturismo, cavernas e paisagens naturais."
  },
  overview: {
    en: "Nashik offers a unique combination of spirituality, history, agriculture and wine culture. The city is an important pilgrimage destination associated with the Kumbh Mela and the Ramayana tradition, while the surrounding countryside has become one of India's notable wine-producing regions. Visitors can explore Panchavati, Trimbakeshwar, ancient caves and vineyards, making Nashik suitable for spiritual journeys, cultural holidays, food and wine experiences and relaxed weekend trips.",
    es: "Nashik ofrece una combinación única de espiritualidad, historia, agricultura y cultura del vino. La ciudad es un importante destino de peregrinación asociado con el Kumbh Mela y la tradición del Ramayana, mientras que sus alrededores se han convertido en una de las regiones vinícolas destacadas de India. Los visitantes pueden explorar Panchavati, Trimbakeshwar, antiguas cuevas y viñedos.",
    pt: "Nashik oferece uma combinação única de espiritualidade, história, agricultura e cultura do vinho. A cidade é um importante destino de peregrinação associado ao Kumbh Mela e à tradição do Ramayana, enquanto a região ao redor se tornou uma das áreas produtoras de vinho de destaque da Índia. Os visitantes podem explorar Panchavati, Trimbakeshwar, cavernas antigas e vinhedos."
  },
  highlights: [
    {
      title: { en: "Trimbakeshwar Temple", es: "Templo de Trimbakeshwar", pt: "Templo de Trimbakeshwar" },
      desc: {
        en: "Ancient temple housing one of the twelve sacred Jyotirlingas.",
        es: "Antiguo templo que alberga uno de los doce sagrados Jyotirlingas.",
        pt: "Antigo templo que abriga um dos doze sagrados Jyotirlingas."
      }
    },
    {
      title: { en: "Panchavati", es: "Panchavati", pt: "Panchavati" },
      desc: {
        en: "Spiritual temple quarter associated with the exile of Lord Rama.",
        es: "Barrio espiritual asociado con el exilio del Señor Rama.",
        pt: "Bairro espiritual associado ao exílio do Senhor Rama."
      }
    },
    {
      title: { en: "Sula Vineyards", es: "Viñedos Sula", pt: "Vinhedos Sula" },
      desc: {
        en: "Famous vineyards showcasing India's growing wine industry and tours.",
        es: "Famosos viñedos que muestran la industria vitivinícola de India.",
        pt: "Famosos vinhedos que apresentam a indústria de vinhos da Índia."
      }
    },
    {
      title: { en: "Pandavleni Caves", es: "Cuevas de Pandavleni", pt: "Cavernas de Pandavleni" },
      desc: {
        en: "Ancient 3rd-century BC Buddhist rock-cut cave monument complex.",
        es: "Antiguo complejo de cuevas budistas excavadas en roca.",
        pt: "Antigo complexo de cavernas budistas escavadas na rocha."
      }
    },
    {
      title: { en: "Godavari River", es: "Río Godavari", pt: "Rio Godavari" },
      desc: {
        en: "Peaceful riverside ghats and Ram Kund spiritual bathing spot.",
        es: "Tranquilas riberas del río y el sagrado Ram Kund.",
        pt: "Tranquilas margens do rio e o sagrado Ram Kund."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Trimbakeshwar Temple", es: "Visitar el Templo Trimbakeshwar", pt: "Visitar o Templo Trimbakeshwar" },
      desc: {
        en: "Visit the historic temple and discover one of India's sacred Jyotirlingas.",
        es: "Visita el templo histórico y conoce uno de los sagrados Jyotirlingas.",
        pt: "Visite o templo histórico e conheça um dos sagrados Jyotirlingas."
      }
    },
    {
      name: { en: "Explore Panchavati & Ram Kund", es: "Explorar Panchavati y Ram Kund", pt: "Explorar Panchavati e Ram Kund" },
      desc: {
        en: "Explore the historic temple quarter and see the holy bathing pools.",
        es: "Explora el barrio histórico de templos y el sagrado estanque.",
        pt: "Explore o bairro histórico de templos e o tanque sagrado."
      }
    },
    {
      name: { en: "Tour a Vineyard", es: "Recorrer un Viñedo", pt: "Visitar um Vinhedo" },
      desc: {
        en: "Tour local vineyards to learn about Indian winemaking and grape farming.",
        es: "Recorre los viñedos locales para conocer la elaboración de vinos.",
        pt: "Visite os vinhedos locais para conhecer a produção de vinhos."
      }
    },
    {
      name: { en: "Explore Pandavleni Caves", es: "Explorar las Cuevas de Pandavleni", pt: "Explorar as Cavernas de Pandavleni" },
      desc: {
        en: "Explore the ancient rock-cut caves offering beautiful views of the valley.",
        es: "Explora las cuevas excavadas en la roca con hermosas vistas.",
        pt: "Explore as cavernas escavadas na rocha com belas vistas."
      }
    },
    {
      name: { en: "Walk Godavari Ghats", es: "Pasear junto al Río Godavari", pt: "Caminhar nas Margens do Godavari" },
      desc: {
        en: "Take a peaceful walk around the Godavari riverside steps and ghat landmarks.",
        es: "Da un paseo tranquilo junto a las riberas del río Godavari.",
        pt: "Faça uma caminhada tranquila nas margens do rio Godavari."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Nashik is accessible via regional flights, train connections to Nashik Road Station, or road transfers from Mumbai and Pune.",
      es: "Nashik es accesible por avión, tren o carretera.",
      pt: "Nashik é acessível por avião, trem ou estrada."
    },
    nearestAirport: "Nashik Airport (ISK) / Mumbai Airport (BOM)",
    nearestRailway: "Nashik Road Railway Station (NK)",
    transportOptions: "Auto-rickshaws, Taxis, Private Cars, Buses",
    distanceFromMajorCities: "Mumbai (170 km), Pune (210 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "14°C - 34°C",
    currency: "INR",
    localLanguage: "Marathi, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and spiritual town. Follow rules at bathing ghats.",
      es: "Ciudad muy segura y espiritual.",
      pt: "Cidade muito segura e espiritual."
    }
  },
  gettingAround: [
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Convenient for sightseeing routes across the city outskirts.",
        es: "Cómodo para trayectos turísticos locales.",
        pt: "Conveniente para passeios turísticos locais."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short routes around old town bazaars and central areas.",
        es: "Útil para distancias cortas.",
        pt: "Útil para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "Convenient app cab services where available inside city limits.",
        es: "Taxis por aplicación cómodos.",
        pt: "Táxis por aplicativo confortáveis."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Highly recommended for visiting surrounding vineyards and Trimbakeshwar Temple.",
        es: "Recomendado para visitar viñedos y templos lejanos.",
        pt: "Recomendado para visitar vinhedos e templos distantes."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Affordable options for budget-conscious travellers exploring the region.",
        es: "Opción muy económica para trayectos.",
        pt: "Opção muito econômica para deslocamentos."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Dress Code", es: "Vestimenta", pt: "Vestimenta" },
      desc: {
        en: "Dress respectfully when visiting temples.",
        es: "Viste de forma respetuosa al visitar templos.",
        pt: "Vista-se de forma respeitosa ao visitar templos."
      }
    },
    {
      title: { en: "Temple Timing", es: "Horarios", pt: "Horários" },
      desc: {
        en: "Start temple visits early to avoid long queues.",
        es: "Comienza las visitas a los templos temprano para evitar filas.",
        pt: "Comece as visitas aos templos cedo para evitar filas."
      }
    },
    {
      title: { en: "Vineyard Tours", es: "Visitas a Viñedos", pt: "Visita aos Vinhedos" },
      desc: {
        en: "Book vineyard tours in advance during peak periods.",
        es: "Reserva las visitas a los viñedos con anticipación.",
        pt: "Reserve as visitas aos vinhedos com antecedência."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Carry comfortable footwear for temple steps and cave treks.",
        es: "Lleva calzado cómodo para las cuestas y templos.",
        pt: "Use calçados confortáveis para subidas e templos."
      }
    },
    {
      title: { en: "Festival Crowds", es: "Festivales", pt: "Festivais" },
      desc: {
        en: "Check local festival crowds before planning your trip.",
        es: "Verifica las festividades locales antes de planificar tu viaje.",
        pt: "Verifique os festivais locais antes de planejar sua viagem."
      }
    }
  ],
  hotels: [
    {
      name: "The Source at Sula",
      tier: "Luxury",
      desc: {
        en: "Vineyard stay surrounded by countryside and hills.",
        es: "Alojamiento en el viñedo rodeado de naturaleza.",
        pt: "Hospedagem no vinhedo cercada por natureza."
      },
      image: ""
    },
    {
      name: "Courtyard by Marriott Nashik",
      tier: "Premium",
      desc: {
        en: "Premium city accommodation offering modern high-end services.",
        es: "Alojamiento urbano premium con servicios modernos.",
        pt: "Hospedagem urbana premium com serviços modernos."
      },
      image: ""
    },
    {
      name: "Radisson Blu Hotel & Spa Nashik",
      tier: "Luxury",
      desc: {
        en: "Luxury stay with modern facilities and beautiful settings.",
        es: "Alojamiento de lujo con excelentes instalaciones y spa.",
        pt: "Hospedagem de luxo com excelentes instalações e spa."
      },
      image: ""
    },
    {
      name: "Gateway by Taj Nashik",
      tier: "Premium",
      desc: {
        en: "Comfortable premium option surrounded by gardens.",
        es: "Cómodo hotel de categoría superior rodeado de jardines.",
        pt: "Hospedagem confortável de categoria superior cercada por jardins."
      },
      image: ""
    },
    {
      name: "Express Inn",
      tier: "Mid-range",
      desc: {
        en: "Convenient city accommodation with modern amenities.",
        es: "Alojamiento urbano cómodo con servicios prácticos.",
        pt: "Hospedagem urbana confortável com serviços práticos."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Misal Pav, Sabudana Vada, Puran Poli, Thalipeeth and Kanda Bhaji.",
    es: "Pruebe Misal Pav, Sabudana Vada, Puran Poli, Thalipeeth y Kanda Bhaji.",
    pt: "Prove Misal Pav, Sabudana Vada, Puran Poli, Thalipeeth e Kanda Bhaji."
  },
  localFoodDishes: [
    {
      name: { en: "Misal Pav", es: "Misal Pav", pt: "Misal Pav" },
      desc: {
        en: "Spicy curry of sprouted pulses served with bread rolls.",
        es: "Curry picante de legumbres germinadas servido con pan.",
        pt: "Curry apimentado de leguminosas germinadas servido com pão."
      }
    },
    {
      name: { en: "Sabudana Vada", es: "Sabudana Vada", pt: "Sabudana Vada" },
      desc: {
        en: "Deep-fried sago pearls patties served with fresh yoghurt chutney.",
        es: "Pastel frito de perlas de sagú servido con salsa de yogur.",
        pt: "Bolinho frito de sagu servido com molho de iogurte."
      }
    },
    {
      name: { en: "Puran Poli", es: "Puran Poli", pt: "Puran Poli" },
      desc: {
        en: "Sweet flatbread filled with chickpea flour and sweet jaggery.",
        es: "Pan plano dulce relleno con lentejas y jaggery.",
        pt: "Pão achatado doce recheado com lentilhas e jaggery."
      }
    },
    {
      name: { en: "Thalipeeth", es: "Thalipeeth", pt: "Thalipeeth" },
      desc: {
        en: "Savoury flatbread prepared from multi-grain flour, spices and onions.",
        es: "Pan plano salado elaborado con harina de varios cereales y especias.",
        pt: "Pão achatado salgado preparado com farinha de vários cereais e especiarias."
      }
    },
    {
      name: { en: "Kanda Bhaji", es: "Kanda Bhaji", pt: "Kanda Bhaji" },
      desc: {
        en: "Crispy onion fritters prepared in gram flour batter and spices.",
        es: "Buñuelos crujientes de cebolla rebozados con harina de garbanzo.",
        pt: "Bolinhos crocantes de cebola fritos em massa de farinha de grão-de-bico."
      }
    }
  ],
  bestTime: {
    en: "October to February is generally pleasant for sightseeing and vineyard visits. The monsoon season brings greenery and fuller waterfalls.",
    es: "De octubre a febrero suele ser agradable para hacer turismo y visitar viñedos. La temporada de monzones aporta paisajes verdes y cascadas más abundantes.",
    pt: "De outubro a fevereiro geralmente é agradável para passeios e visitas aos vinhedos. A temporada de monções traz paisagens verdes e cachoeiras mais volumosas."
  },
  faqs: [
    {
      q: { en: "What is Nashik famous for?", es: "¿Por qué es famosa Nashik?", pt: "Pelo que Nashik é famosa?" },
      a: {
        en: "Nashik is famous for temples, the Kumbh Mela, vineyards, wine tourism and the Godavari River.",
        es: "Nashik es famoso por sus templos, Kumbh Mela, viñedos, turismo del vino y el río Godavari.",
        pt: "Nashik é famoso por seus templos, Kumbh Mela, vinhedos, enoturismo e pelo rio Godavari."
      }
    },
    {
      q: { en: "How many days are enough for Nashik?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are ideal for exploring Nashik and major nearby attractions.",
        es: "2–3 días son ideales.",
        pt: "2–3 dias são ideais."
      }
    },
    {
      q: { en: "Is Nashik good for a family trip?", es: "¿Es adecuada para familias?", pt: "Nashik é adequada para famílias?" },
      a: {
        en: "Yes, families can explore temples, caves, nature and cultural attractions.",
        es: "Sí, las familias pueden explorar templos, cuevas, naturaleza y atracciones culturales.",
        pt: "Sim, famílias podem explorar templos, cavernas, natureza e atrações culturais."
      }
    },
    {
      q: { en: "Can tourists visit vineyards in Nashik?", es: "¿Se pueden visitar los viñedos?", pt: "Os vinhedos podem ser visitados?" },
      a: {
        en: "Yes, several vineyards offer tours and experiences, subject to their current schedules and policies.",
        es: "Sí, varios viñedos ofrecen visitas y experiencias, según sus horarios y políticas actuales.",
        pt: "Sim, vários vinhedos oferecem visitas e experiências, dependendo de seus horários e políticas atuais."
      }
    },
    {
      q: { en: "What is the best spiritual attraction in Nashik?", es: "¿Cuál es la mejor atracción espiritual?", pt: "Qual a melhor atração espiritual?" },
      a: {
        en: "Trimbakeshwar Temple and the Panchavati area are among the city's major spiritual attractions.",
        es: "El templo de Trimbakeshwar y la zona de Panchavati son importantes lugares espirituales.",
        pt: "O Templo de Trimbakeshwar e a região de Panchavati estão entre os principais locais espirituais da cidade."
      }
    }
  ]
};

// 4. CHHATRAPATI SAMBHAJINAGAR DETAILS
const csDetails = {
  tagline: {
    en: "Chhatrapati Sambhajinagar is a historic city in Maharashtra, famous for the UNESCO World Heritage Sites of Ajanta and Ellora, Mughal-era architecture, caves, forts and rich cultural heritage.",
    es: "Chhatrapati Sambhajinagar es una ciudad histórica de Maharashtra, famosa por los sitios Patrimonio Mundial de la UNESCO de Ajanta y Ellora, su arquitectura histórica, cuevas, fortalezas y rico patrimonio cultural.",
    pt: "Chhatrapati Sambhajinagar é uma cidade histórica de Maharashtra, famosa pelos Patrimônios Mundiais da UNESCO de Ajanta e Ellora, arquitetura histórica, cavernas, fortes e rico patrimônio cultural."
  },
  overview: {
    en: "Chhatrapati Sambhajinagar is one of Maharashtra's most important heritage destinations and a gateway to the remarkable cave complexes of Ajanta and Ellora. The city and its surrounding region showcase Buddhist, Hindu and Jain artistic traditions through ancient rock-cut architecture, sculptures and murals. Visitors can also explore Bibi Ka Maqbara, Daulatabad Fort, Panchakki and local markets. The destination is particularly appealing to history lovers, photographers, architecture enthusiasts and cultural travellers.",
    es: "Chhatrapati Sambhajinagar es uno de los destinos patrimoniales más importantes de Maharashtra y una puerta de entrada a los extraordinarios complejos de cuevas de Ajanta y Ellora. La ciudad y su región muestran tradiciones artísticas budistas, hindúes y jainistas a través de arquitectura excavada en roca, esculturas y pinturas murales. Los visitantes también pueden explorar Bibi Ka Maqbara, Daulatabad Fort, Panchakki y los mercados locales.",
    pt: "Chhatrapati Sambhajinagar é um dos destinos históricos mais importantes de Maharashtra e uma porta de entrada para os extraordinários complexos de cavernas de Ajanta e Ellora. A cidade e sua região apresentam tradições artísticas budistas, hindus e jainistas por meio de arquitetura escavada em rocha, esculturas e pinturas murais. Os visitantes também podem conhecer Bibi Ka Maqbara, Daulatabad Fort, Panchakki e os mercados locais."
  },
  highlights: [
    {
      title: { en: "Ajanta Caves", es: "Cuevas de Ajanta", pt: "Cavernas de Ajanta" },
      desc: {
        en: "UNESCO World Heritage Site with ancient Buddhist art and murals.",
        es: "Sitio Patrimonio Mundial de la UNESCO con antiguo arte budista.",
        pt: "Patrimônio Mundial da UNESCO com arte e pinturas budistas."
      }
    },
    {
      title: { en: "Ellora Caves", es: "Cuevas de Ellora", pt: "Cavernas de Ellora" },
      desc: {
        en: "UNESCO-listed rock-cut cave complex representing Buddhist, Hindu and Jain traditions.",
        es: "Complejo de cuevas excavadas en roca budistas, hindúes y jainistas (UNESCO).",
        pt: "Complexo de cavernas escavadas em rocha budistas, hindus e jainistas (UNESCO)."
      }
    },
    {
      title: { en: "Bibi Ka Maqbara", es: "Bibi Ka Maqbara", pt: "Bibi Ka Maqbara" },
      desc: {
        en: "Historic monument often called the 'Taj of the Deccan.'",
        es: "Monumento histórico a menudo llamado el 'Taj del Decán'.",
        pt: "Monumento histórico frequentemente chamado de 'Taj do Decã'."
      }
    },
    {
      title: { en: "Daulatabad Fort", es: "Fuerte de Daulatabad", pt: "Forte Daulatabad" },
      desc: {
        en: "Dramatic medieval hill fortress offering spectacular panoramic views.",
        es: "Impresionante fortaleza medieval en la colina con hermosas vistas.",
        pt: "Impressionante fortaleza medieval na colina com belas vistas."
      }
    },
    {
      title: { en: "Panchakki", es: "Panchakki", pt: "Panchakki" },
      desc: {
        en: "Historic water mill complex showcasing medieval Indian engineering.",
        es: "Complejo histórico de molino de agua de la época medieval.",
        pt: "Complexo histórico de moinho de água da época medieval."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Ajanta Caves", es: "Explorar las Cuevas de Ajanta", pt: "Explorar as Cavernas de Ajanta" },
      desc: {
        en: "Explore the ancient rock-cut Buddhist temples and see the famous murals.",
        es: "Explora los templos budistas excavados en la roca y sus pinturas murales.",
        pt: "Explore os templos budistas escavados na rocha e suas pinturas."
      }
    },
    {
      name: { en: "Discover Ellora Caves", es: "Descubrir las Cuevas de Ellora", pt: "Descobrir as Cavernas de Ellora" },
      desc: {
        en: "Discover the spectacular Kailash Temple and other caves cut into the hillside.",
        es: "Descubre el espectacular templo Kailash y cuevas excavadas en la colina.",
        pt: "Descubra o espetacular Templo Kailash e cavernas escavadas na colina."
      }
    },
    {
      name: { en: "Visit Bibi Ka Maqbara", es: "Visitar Bibi Ka Maqbara", pt: "Visitar Bibi Ka Maqbara" },
      desc: {
        en: "Explore the beautiful Mughal monument built as a tribute to Aurangzeb's wife.",
        es: "Explora el hermoso monumento mogol construido en memoria de la esposa de Aurangzeb.",
        pt: "Explore o belo monumento mogol construído em memória da esposa de Aurangzeb."
      }
    },
    {
      name: { en: "Explore Daulatabad Fort", es: "Explorar el Fuerte Daulatabad", pt: "Explorar o Forte Daulatabad" },
      desc: {
        en: "Climb the medieval hill fortress to enjoy panoramic views and historic gateways.",
        es: "Sube a la fortaleza medieval para disfrutar de vistas panorámicas y puertas.",
        pt: "Suba a fortaleza medieval para apreciar vistas panorâmicas e portões."
      }
    },
    {
      name: { en: "Shop Traditional Textiles", es: "Comprar Textiles Tradicionales", pt: "Comprar Tecidos Tradicionais" },
      desc: {
        en: "Shop for traditional Himroo and Paithani handloom textiles in the local markets.",
        es: "Compra tejidos tradicionales de Himroo y Paithani en los bazares.",
        pt: "Compre tecidos tradicionais de Himroo e Paithani nos bazares locais."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Chhatrapati Sambhajinagar has a domestic airport and railway station, with highway road connections to Pune, Nashik and Mumbai.",
      es: "La ciudad cuenta con aeropuerto nacional y estación de tren.",
      pt: "A cidade possui aeroporto doméstico e estação ferroviária."
    },
    nearestAirport: "Chhatrapati Sambhajinagar Airport (IXU)",
    nearestRailway: "Chhatrapati Sambhajinagar Railway Station (AWB)",
    transportOptions: "Taxis, Auto-rickshaws, Buses",
    distanceFromMajorCities: "Pune (240 km), Nashik (190 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "15°C - 35°C",
    currency: "INR",
    localLanguage: "Marathi, Urdu, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Safe heritage city. Hire registered guides at Ajanta and Ellora caves.",
      es: "Ciudad histórica muy segura.",
      pt: "Cidade histórica muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "Convenient app cab services where available inside city limits.",
        es: "Taxis por aplicación cómodos.",
        pt: "Táxis por aplicativo confortáveis."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short routes around the old gates and markets.",
        es: "Útil para distancias cortas.",
        pt: "Útil para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Local municipal bus service connecting parts of the city.",
        es: "Servicios de autobuses municipales.",
        pt: "Serviços de ônibus municipais."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Highly recommended for visiting Ajanta and Ellora Cave complexes.",
        es: "Muy recomendado para visitar las cuevas de Ajanta y Ellora.",
        pt: "Muito recomendado para visitar as cavernas de Ajanta e Ellora."
      },
      recommended: true
    },
    {
      transportType: "Guided Tour",
      title: { en: "Guided Tour", es: "Visitas Guiadas", pt: "Visitas Guiadas" },
      desc: {
        en: "Organised heritage tours providing historical and art history context.",
        es: "Visitas organizadas con guías locales.",
        pt: "Visitas organizadas com guias locais."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Early Start", es: "Comienzo Temprano", pt: "Comece Cedo" },
      desc: {
        en: "Start Ajanta and Ellora visits early to avoid afternoon heat.",
        es: "Comienza las visitas a las cuevas temprano por la mañana.",
        pt: "Comece as visitas às cavernas cedo pela manhã."
      }
    },
    {
      title: { en: "Comfortable Shoes", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Wear comfortable shoes because cave complexes involve extensive walking.",
        es: "Usa calzado cómodo, los complejos requieren caminar bastante.",
        pt: "Use calçados confortáveis, as visitas exigem caminhadas."
      }
    },
    {
      title: { en: "Sun & Water", es: "Sol y Agua", pt: "Sol e Água" },
      desc: {
        en: "Carry water and sun protection.",
        es: "Lleva agua y protección solar.",
        pt: "Leve água e proteção solar."
      }
    },
    {
      title: { en: "Separate Days", es: "Días Separados", pt: "Dias Separados" },
      desc: {
        en: "Keep separate days for Ajanta and Ellora to avoid exhaustion.",
        es: "Visita Ajanta y Ellora en días diferentes.",
        pt: "Visite Ajanta e Ellora em dias diferentes."
      }
    },
    {
      title: { en: "Preservation Rules", es: "Normas de Foto", pt: "Regras de Foto" },
      desc: {
        en: "Respect photography and preservation rules at heritage monuments.",
        es: "Respeta las reglas de fotografía y conservación.",
        pt: "Respeite as regras de fotografia e conservação."
      }
    }
  ],
  hotels: [
    {
      name: "Welcomhotel by ITC Hotels, Rama International",
      tier: "Luxury",
      desc: {
        en: "Premium city accommodation offering comfortable rooms and gardens.",
        es: "Alojamiento urbano premium con habitaciones cómodas y jardines.",
        pt: "Hospedagem urbana premium com quartos confortáveis e jardins."
      },
      image: ""
    },
    {
      name: "Vivanta Aurangabad",
      tier: "Luxury",
      desc: {
        en: "Luxury heritage-style stay with excellent facilities.",
        es: "Alojamiento de lujo estilo patrimonial con excelentes servicios.",
        pt: "Hospedagem de luxo em estilo clássico com excelentes serviços."
      },
      image: ""
    },
    {
      name: "The Fern Residency Aurangabad",
      tier: "Premium",
      desc: {
        en: "Comfortable modern hotel with high-end rooms.",
        es: "Hotel moderno confortable con habitaciones de categoría superior.",
        pt: "Hotel moderno confortável com quartos de categoria superior."
      },
      image: ""
    },
    {
      name: "Lemon Tree Hotel Aurangabad",
      tier: "Premium",
      desc: {
        en: "Practical premium accommodation close to the airport.",
        es: "Alojamiento práctico de categoría superior cerca del aeropuerto.",
        pt: "Hospedagem prática de categoria superior perto do aeroporto."
      },
      image: ""
    },
    {
      name: "Ambassador Ajanta",
      tier: "Mid-range",
      desc: {
        en: "Convenient city stay with traditional designs and services.",
        es: "Cómodo hotel urbano con estilo y servicios tradicionales.",
        pt: "Confortável hotel urbano com estilo e serviços tradicionais."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Naan Qalia, Tahri, local sweets, Misal Pav and Puran Poli.",
    es: "Pruebe Naan Qalia, Tahri, dulces locales, Misal Pav y Puran Poli.",
    pt: "Prove Naan Qalia, Tahri, doces locais, Misal Pav e Puran Poli."
  },
  localFoodDishes: [
    {
      name: { en: "Naan Qalia", es: "Naan Qalia", pt: "Naan Qalia" },
      desc: {
        en: "A historic dish combining spiced meat curry cooked with herbs and served with local naan bread.",
        es: "Plato tradicional de carne especiada servido con pan naan local.",
        pt: "Prato tradicional de carne temperada servido com pão naan local."
      }
    },
    {
      name: { en: "Tahri", es: "Tahri", pt: "Tahri" },
      desc: {
        en: "A traditional aromatic rice dish cooked with spices, lentils or meat.",
        es: "Plato de arroz aromático cocinado con especias y carne o legumbres.",
        pt: "Prato de arroz aromático cozido com especiarias e carne ou leguminosas."
      }
    },
    {
      name: { en: "Himroo Snacks", es: "Dulces Locales", pt: "Doces Locais" },
      desc: {
        en: "Local sweets and snacks associated with the heritage city.",
        es: "Dulces locales y aperitivos de la ciudad histórica.",
        pt: "Doces locais e petiscos da cidade histórica."
      }
    },
    {
      name: { en: "Misal Pav", es: "Misal Pav", pt: "Misal Pav" },
      desc: {
        en: "Spicy sprouted bean curry topped with farsan and served with bread.",
        es: "Curry picante de legumbres germinadas servido con pan.",
        pt: "Curry apimentado de leguminosas germinadas servido com pão."
      }
    },
    {
      name: { en: "Puran Poli", es: "Puran Poli", pt: "Puran Poli" },
      desc: {
        en: "Sweet flatbread stuffed with cooked lentils and cardamom-infused jaggery.",
        es: "Pan plano dulce relleno con lentejas y jaggery.",
        pt: "Pão achatado doce recheado com lentilhas e jaggery."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally the most comfortable period for exploring the caves, forts and heritage sites. The monsoon can make the surrounding landscapes greener but may affect travel conditions.",
    es: "De octubre a marzo suele ser el período más cómodo para explorar las cuevas, fortalezas y monumentos históricos. El monzón puede hacer que los paisajes sean más verdes, pero puede afectar las condiciones de viaje.",
    pt: "De outubro a março geralmente é o período mais confortável para explorar cavernas, fortes e monumentos históricos. A temporada de monções deixa as paisagens mais verdes, mas pode afetar as condições de viagem."
  },
  faqs: [
    {
      q: { en: "What is Chhatrapati Sambhajinagar famous for?", es: "¿Por qué es famosa?", pt: "Pelo que é famosa?" },
      a: {
        en: "It is famous for Ajanta and Ellora Caves, Bibi Ka Maqbara, Daulatabad Fort and its rich heritage.",
        es: "Es famoso por las cuevas de Ajanta y Ellora, Bibi Ka Maqbara, Daulatabad Fort y su rico patrimonio.",
        pt: "É famoso pelas Cavernas de Ajanta e Ellora, Bibi Ka Maqbara, Daulatabad Fort e seu rico patrimônio."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "3–4 days are ideal for the city and major nearby heritage sites.",
        es: "3–4 días son ideales para la ciudad y sus principales lugares históricos cercanos.",
        pt: "3–4 dias são ideais para a cidade e os principais locais históricos próximos."
      }
    },
    {
      q: { en: "Are Ajanta and Ellora close to each other?", es: "¿Ajanta y Ellora están cerca?", pt: "Ajanta e Ellora ficam próximas?" },
      a: {
        en: "No. They are separate cave complexes and are best planned as separate excursions.",
        es: "No. Son complejos de cuevas separados y es mejor visitarlos en excursiones diferentes.",
        pt: "Não. São complexos de cavernas separados e é melhor planejá-los como excursões diferentes."
      }
    },
    {
      q: { en: "Is Chhatrapati Sambhajinagar good for history lovers?", es: "¿Es adecuada para amantes de la historia?", pt: "É adequada para amantes de história?" },
      a: {
        en: "Yes, it is one of Maharashtra's best destinations for ancient art, architecture and heritage.",
        es: "Sí, es uno de los mejores destinos de Maharashtra para arte, arquitectura y patrimonio histórico.",
        pt: "Sim, é um dos melhores destinos de Maharashtra para arte, arquitetura e patrimônio histórico."
      }
    },
    {
      q: { en: "What is the best time to visit Ajanta and Ellora?", es: "¿Mejor época para visitarlas?", pt: "Melhor época para visitar?" },
      a: {
        en: "October to March is generally comfortable for exploring the cave complexes and surrounding heritage sites.",
        es: "De octubre a marzo suele ser cómodo para explorar los complejos de cuevas y lugares históricos cercanos.",
        pt: "De outubro a março geralmente é confortável para explorar os complexos de cavernas e locais históricos próximos."
      }
    }
  ]
};

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  const mhIdx = states.findIndex(s => s.slug === "maharashtra");
  if (mhIdx !== -1) {
    console.log("Updating Maharashtra cities in local file...");
    const mhState = states[mhIdx];
    mhState.cities = mhState.cities || [];
    
    // Update function helper
    const updateCity = (slug, details) => {
      const cityIdx = mhState.cities.findIndex(c => c.slug === slug);
      if (cityIdx !== -1) {
        mhState.cities[cityIdx] = { ...mhState.cities[cityIdx], ...details };
        console.log(`Updated city details: ${slug}`);
      } else {
        console.error(`City slug '${slug}' not found under Maharashtra!`);
      }
    };

    updateCity("mumbai", mumbaiDetails);
    updateCity("pune", puneDetails);
    updateCity("nashik", nashikDetails);
    updateCity("chhatrapati-sambhajinagar", csDetails);

    states[mhIdx] = mhState;
  } else {
    console.error("Maharashtra state not found in states.json!");
  }

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for Maharashtra cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const docRef = doc(firestore, "states", "maharashtra");
    setDoc(docRef, states[mhIdx]).then(() => {
      console.log("🚀 SUCCESS: Remote Firestore 'maharashtra' document successfully updated!");
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
