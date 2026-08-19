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

// 1. JAIPUR DETAILS
const jaipurDetails = {
  thingsToDo: [
    {
      name: { en: "Explore Amber Fort", es: "Explorar el Fuerte de Amber", pt: "Explorar o Forte de Amber" },
      desc: {
        en: "Explore the magnificent Amber Fort, its grand courtyards, royal chambers and impressive Rajput architecture while enjoying views of the surrounding Aravalli Hills.",
        es: "Explora el magnífico Fuerte de Amber, sus grandes patios, cámaras reales y arquitectura Rajput mientras disfrutas de las vistas de las colinas de Aravalli.",
        pt: "Explore o magnífico Forte de Amber, seus grandes pátios, câmaras reais e impressionante arquitetura Rajput enquanto aprecia as vistas das colinas de Aravalli."
      }
    },
    {
      name: { en: "Visit City Palace", es: "Visitar el Palacio de la Ciudad", pt: "Visitar o Palácio da Cidade" },
      desc: {
        en: "Discover royal courtyards, museums, gateways and historic residences that showcase Jaipur's royal heritage.",
        es: "Descubre patios reales, museos, puertas y residencias históricas que muestran el patrimonio real de Jaipur.",
        pt: "Descubra pátios reais, museus, portões e residências históricas que mostram o patrimônio real de Jaipur."
      }
    },
    {
      name: { en: "See Hawa Mahal", es: "Ver el Hawa Mahal", pt: "Ver o Hawa Mahal" },
      desc: {
        en: "Admire Jaipur's iconic Palace of Winds and its distinctive honeycomb façade filled with intricate architectural details.",
        es: "Admira el icónico Palacio de los Vientos de Jaipur y su distintiva fachada en forma de panal con elaborados detalles arquitectónicos.",
        pt: "Admire o icônico Palácio dos Ventos de Jaipur e sua distinta fachada em formato de colmeia com detalhes arquitetônicos elaborados."
      }
    },
    {
      name: { en: "Explore Jantar Mantar", es: "Explorar Jantar Mantar", pt: "Explorar Jantar Mantar" },
      desc: {
        en: "Discover remarkable astronomical instruments and learn about the scientific achievements of historic Jaipur.",
        es: "Descubre extraordinarios instrumentos astronómicos y conoce los logros científicos del Jaipur histórico.",
        pt: "Descubra impressionantes instrumentos astronômicos e conheça os avanços científicos da Jaipur histórica."
      }
    },
    {
      name: { en: "Shop at Traditional Bazaars", es: "Comprar en Bazares Tradicionales", pt: "Comprar nos Bazares Tradicionais" },
      desc: {
        en: "Explore Johari Bazaar and Bapu Bazaar for jewellery, textiles, handicrafts, block prints, footwear and traditional souvenirs.",
        es: "Explora Johari Bazaar y Bapu Bazaar para descubrir joyería, textiles, artesanías, estampados, calzado y recuerdos tradicionales.",
        pt: "Explore Johari Bazaar e Bapu Bazaar para descobrir joias, tecidos, artesanato, estampas, calçados e lembranças tradicionais."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Royal Heritage Experience", es: "Experiencia de Patrimonio Real", pt: "Experiência de Patrimônio Real" },
      desc: {
        en: "Experience Jaipur's royal legacy through its palaces, forts, museums and traditional architecture.",
        es: "Descubre el legado real de Jaipur a través de sus palacios, fuertes, museos y arquitectura tradicional.",
        pt: "Conheça o legado real de Jaipur através de seus palácios, fortes, museus e arquitetura tradicional."
      }
    },
    {
      title: { en: "Rajasthani Culinary Experience", es: "Experiencia Culinaria de Rajasthan", pt: "Experiência Culinária do Rajasthan" },
      desc: {
        en: "Enjoy authentic Rajasthani cuisine through traditional restaurants, local thalis and regional specialities.",
        es: "Disfruta de la auténtica gastronomía de Rajasthan en restaurantes tradicionales, thalis locales y especialidades regionales.",
        pt: "Desfrute da autêntica culinária do Rajasthan em restaurantes tradicionais, thalis locais e especialidades regionais."
      }
    },
    {
      title: { en: "Jaipur Bazaar Experience", es: "Experiencia en los Bazares de Jaipur", pt: "Experiência nos Bazares de Jaipur" },
      desc: {
        en: "Explore colourful bazaars and discover traditional jewellery, textiles, handicrafts and handmade products.",
        es: "Explora los coloridos bazares y descubre joyería, textiles, artesanías y productos hechos a mano.",
        pt: "Explore os coloridos bazares e descubra joias, tecidos, artesanato e produtos feitos à mão."
      }
    },
    {
      title: { en: "Heritage Photography Experience", es: "Experiencia Fotográfica del Patrimonio", pt: "Experiência Fotográfica do Patrimônio" },
      desc: {
        en: "Capture Jaipur's forts, palaces, colourful streets and traditional architecture through a memorable photography journey.",
        es: "Captura los fuertes, palacios, calles coloridas y arquitectura tradicional de Jaipur en una experiencia fotográfica memorable.",
        pt: "Fotografe os fortes, palácios, ruas coloridas e arquitetura tradicional de Jaipur em uma experiência fotográfica inesquecível."
      }
    },
    {
      title: { en: "Royal Cultural Evening", es: "Noche Cultural Real", pt: "Noite Cultural Real" },
      desc: {
        en: "Enjoy traditional Rajasthani folk music, dance, local cuisine and cultural performances.",
        es: "Disfruta de música folclórica, danzas, gastronomía y espectáculos culturales tradicionales de Rajasthan.",
        pt: "Desfrute de música folclórica, danças, culinária e apresentações culturais tradicionais do Rajasthan."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Jaipur is well connected by air, rail and road. Jaipur International Airport connects the city with major Indian cities and selected international destinations. The railway station is an important connection for travellers exploring the Golden Triangle. The city can also be reached comfortably by road from Delhi and Agra.",
      es: "Jaipur está bien conectada por avión, tren y carretera. Su aeropuerto internacional ofrece conexiones con importantes ciudades de India y algunos destinos internacionales. La estación de tren es una conexión importante para quienes recorren el Triángulo Dorado.",
      pt: "Jaipur possui boas conexões aéreas, ferroviárias e rodoviárias. O Aeroporto Internacional de Jaipur conecta a cidade a importantes cidades indianas e alguns destinos internacionais. A estação ferroviária é uma importante conexão para viajantes que exploram o Triângulo Dourado."
    },
    nearestAirport: "Jaipur International Airport (JAI)",
    nearestRailway: "Jaipur Junction (JP)",
    transportOptions: "Taxis, Auto-rickshaws, Local Buses, Metro",
    distanceFromMajorCities: "Delhi (270 km), Agra (240 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "15°C - 36°C",
    currency: "INR",
    localLanguage: "Rajasthani, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly tourist-friendly. Standard safety precautions in crowded bazaars apply.",
      es: "Muy amigable con los turistas.",
      pt: "Muito amigável com os turistas."
    }
  },
  gettingAround: [
    {
      transportType: "Taxis & App Cabs",
      title: { en: "Taxis & App Cabs", es: "Taxis y Aplicaciones", pt: "Táxis e Aplicativos" },
      desc: {
        en: "Convenient for city sightseeing and longer transfers.",
        es: "Convenientes para visitar la ciudad y traslados más largos.",
        pt: "Convenientes para conhecer a cidade e traslados mais longos."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short local journeys and negotiating narrow bazaar lanes.",
        es: "Útil para trayectos locales cortos.",
        pt: "Útil para trajetos curtos locais."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Recommended when visiting Amber Fort, Jaigarh Fort and Nahargarh Fort.",
        es: "Se recomienda para visitar Amber, Jaigarh y Nahargarh.",
        pt: "Recomenda-se para visitar Amber, Jaigarh e Nahargarh."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal for exploring local markets and selected heritage areas.",
        es: "Ideal para explorar mercados y zonas históricas.",
        pt: "Ideal para explorar mercados e áreas históricas."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Early Start", es: "Comienzo Temprano", pt: "Comece Cedo" },
      desc: {
        en: "Start fort visits early to avoid crowds and daytime heat.",
        es: "Comienza las visitas a los fuertes temprano para evitar las multitudes y el calor.",
        pt: "Comece as visitas aos fortes cedo para evitar multidões e o calor."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Wear comfortable shoes because many heritage sites involve walking.",
        es: "Usa calzado cómodo porque muchos lugares históricos requieren caminar bastante.",
        pt: "Use calçados confortáveis, pois muitos locais históricos exigem bastante caminhada."
      }
    },
    {
      title: { en: "Sun & Hydration", es: "Protección Solar", pt: "Sol e Hidratação" },
      desc: {
        en: "Carry sunscreen, sunglasses and water during outdoor sightseeing.",
        es: "Lleva protector solar, gafas de sol y agua durante las visitas al aire libre.",
        pt: "Leve protetor solar, óculos de sol e água durante os passeios ao ar livre."
      }
    },
    {
      title: { en: "Bargaining", es: "Regateo", pt: "Negociação" },
      desc: {
        en: "Bargain politely when shopping in local markets.",
        es: "Negocia de forma respetuosa al comprar en los mercados locales.",
        pt: "Negocie de forma respeitosa ao fazer compras nos mercados locais."
      }
    },
    {
      title: { en: "Book in Advance", es: "Reservar con Anticipación", pt: "Reserve com Antecedência" },
      desc: {
        en: "Book heritage experiences and popular accommodations in advance during peak season.",
        es: "Reserva con anticipación las experiencias patrimoniales y alojamientos populares durante la temporada alta.",
        pt: "Reserve com antecedência experiências de patrimônio e hospedagens populares durante a alta temporada."
      }
    }
  ],
  hotels: [
    {
      name: "Luxury Heritage Hotels",
      tier: "Luxury",
      desc: {
        en: "Stay in restored royal-style properties for a premium heritage experience.",
        es: "Alójate en propiedades restauradas de estilo real para disfrutar de una experiencia patrimonial premium.",
        pt: "Hospede-se em propriedades restauradas de estilo real para uma experiência premium de patrimônio."
      },
      image: ""
    },
    {
      name: "Old City Boutique Hotels",
      tier: "Boutique",
      desc: {
        en: "Ideal for travellers who want easy access to markets and historic landmarks.",
        es: "Ideales para quienes desean estar cerca de mercados y monumentos históricos.",
        pt: "Ideais para viajantes que desejam ficar perto de mercados e monumentos históricos."
      },
      image: ""
    },
    {
      name: "Luxury City Hotels",
      tier: "Luxury",
      desc: {
        en: "Comfortable modern accommodation with premium facilities and convenient city access.",
        es: "Alojamiento moderno y confortable con excelentes instalaciones y fácil acceso a la ciudad.",
        pt: "Hospedagem moderna e confortável com excelentes instalações e fácil acesso à cidade."
      },
      image: ""
    },
    {
      name: "Boutique Guesthouses",
      tier: "Budget",
      desc: {
        en: "A good option for travellers seeking a more personal and intimate stay.",
        es: "Una buena opción para quienes buscan una estancia más personal e íntima.",
        pt: "Uma boa opção para viajantes que procuram uma estadia mais pessoal e intimista."
      },
      image: ""
    },
    {
      name: "Heritage Havelis",
      tier: "Premium",
      desc: {
        en: "Experience traditional Rajasthani architecture through beautifully restored havelis.",
        es: "Vive la arquitectura tradicional de Rajasthan en havelis cuidadosamente restauradas.",
        pt: "Experimente a arquitetura tradicional do Rajasthan em havelis cuidadosamente restauradas."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Dal Baati Churma, Ghewar, Pyaaz Kachori, Gatte Ki Sabzi and Laal Maas.",
    es: "Pruebe Dal Baati Churma, Ghewar, Pyaaz Kachori, Gatte Ki Sabzi y Laal Maas.",
    pt: "Prove Dal Baati Churma, Ghewar, Pyaaz Kachori, Gatte Ki Sabzi e Laal Maas."
  },
  localFoodDishes: [
    {
      name: { en: "Dal Baati Churma", es: "Dal Baati Churma", pt: "Dal Baati Churma" },
      desc: {
        en: "Traditional Rajasthani dish combining baked baati, lentils and sweet churma.",
        es: "Plato tradicional de Rajasthan que combina baati horneado, lentejas y churma dulce.",
        pt: "Prato tradicional do Rajasthan que combina baati assado, lentilhas e churma doce."
      }
    },
    {
      name: { en: "Ghewar", es: "Ghewar", pt: "Ghewar" },
      desc: {
        en: "A famous Rajasthani sweet with a distinctive honeycomb-like texture.",
        es: "Dulce famoso de Rajasthan con una característica textura similar a un panal.",
        pt: "Doce famoso do Rajasthan com uma característica textura semelhante a uma colmeia."
      }
    },
    {
      name: { en: "Pyaaz Kachori", es: "Pyaaz Kachori", pt: "Pyaaz Kachori" },
      desc: {
        en: "Crispy pastry filled with a spicy onion mixture.",
        es: "Pastel crujiente relleno de una mezcla especiada de cebolla.",
        pt: "Pastel crocante recheado com uma mistura temperada de cebola."
      }
    },
    {
      name: { en: "Gatte Ki Sabzi", es: "Gatte Ki Sabzi", pt: "Gatte Ki Sabzi" },
      desc: {
        en: "Gram-flour dumplings cooked in a flavourful yoghurt-based curry.",
        es: "Albóndigas de harina de garbanzo cocinadas en una sabrosa salsa a base de yogur.",
        pt: "Bolinhos de farinha de grão-de-bico cozidos em um saboroso molho à base de iogurte."
      }
    },
    {
      name: { en: "Laal Maas", es: "Laal Maas", pt: "Laal Maas" },
      desc: {
        en: "A traditional spicy Rajasthani mutton preparation known for its rich flavours.",
        es: "Preparación tradicional de cordero de Rajasthan conocida por sus intensos sabores.",
        pt: "Preparação tradicional de carneiro do Rajasthan conhecida por seus sabores intensos."
      }
    }
  ]
};

// 2. JODHPUR DETAILS
const jodhpurDetails = {
  thingsToDo: [
    {
      name: { en: "Explore Mehrangarh Fort", es: "Explorar el Fuerte de Mehrangarh", pt: "Explorar o Forte de Mehrangarh" },
      desc: {
        en: "Discover one of Rajasthan's most impressive forts, with grand courtyards, museums and spectacular views of the Blue City.",
        es: "Descubre uno de los fuertes más impresionantes de Rajasthan, con grandes patios, museos y vistas espectaculares de la Ciudad Azul.",
        pt: "Explore um dos fortes mais impressionantes do Rajasthan, com grandes pátios, museus e vistas espetaculares da Cidade Azul."
      }
    },
    {
      name: { en: "Visit Jaswant Thada", es: "Visitar Jaswant Thada", pt: "Visitar Jaswant Thada" },
      desc: {
        en: "Admire this elegant marble memorial surrounded by peaceful gardens and views of Jodhpur.",
        es: "Admira este elegante monumento de mármol rodeado de jardines tranquilos y vistas de Jodhpur.",
        pt: "Admire este elegante memorial de mármore cercado por jardins tranquilos e vistas de Jodhpur."
      }
    },
    {
      name: { en: "Explore Blue City", es: "Explorar la Ciudad Azul", pt: "Explorar a Cidade Azul" },
      desc: {
        en: "Walk through the historic lanes of Jodhpur and discover its famous blue-painted houses.",
        es: "Recorre las calles históricas de Jodhpur y descubre sus famosas casas pintadas de azul.",
        pt: "Caminhe pelas ruas históricas de Jodhpur e descubra suas famosas casas pintadas de azul."
      }
    },
    {
      name: { en: "Visit Umaid Bhawan Palace", es: "Visitar el Palacio Umaid Bhawan", pt: "Visitar o Palácio Umaid Bhawan" },
      desc: {
        en: "Explore the magnificent palace and discover the royal history of the former Jodhpur state.",
        es: "Explora el magnífico palacio y descubre la historia real del antiguo estado de Jodhpur.",
        pt: "Explore o magnífico palácio e descubra a história real do antigo estado de Jodhpur."
      }
    },
    {
      name: { en: "Explore Sardar Market", es: "Explorar el Mercado Sardar", pt: "Explorar o Mercado Sardar" },
      desc: {
        en: "Shop for spices, textiles, handicrafts, jewellery and traditional Rajasthani products around the Clock Tower.",
        es: "Compra especias, textiles, artesanías, joyas y productos tradicionales de Rajasthan cerca de la Torre del Reloj.",
        pt: "Compre especiarias, tecidos, artesanato, joias e produtos tradicionais do Rajasthan perto da Torre do Relógio."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Blue City Heritage Experience", es: "Experiencia del Patrimonio de la Ciudad Azul", pt: "Experiência de Patrimônio da Cidade Azul" },
      desc: {
        en: "Explore the blue-painted neighbourhoods and historic lanes around Mehrangarh Fort.",
        es: "Explora los barrios pintados de azul y las calles históricas alrededor de Mehrangarh.",
        pt: "Explore os bairros pintados de azul e as ruas históricas ao redor de Mehrangarh."
      }
    },
    {
      title: { en: "Royal Palace Experience", es: "Experiencia del Palacio Real", pt: "Experiência de Palácio Real" },
      desc: {
        en: "Discover the royal lifestyle, architecture and history of Jodhpur's former rulers.",
        es: "Descubre el estilo de vida, la arquitectura y la historia de los antiguos gobernantes de Jodhpur.",
        pt: "Conheça o estilo de vida, a arquitetura e a história dos antigos governantes de Jodhpur."
      }
    },
    {
      title: { en: "Spice Market Experience", es: "Experiencia del Mercado de Especias", pt: "Experiência no Mercado de Especiarias" },
      desc: {
        en: "Experience the colours, aromas and flavours of traditional Jodhpur markets.",
        es: "Experimenta los colores, aromas y sabores de los mercados tradicionales de Jodhpur.",
        pt: "Vivencie as cores, aromas e sabores dos mercados tradicionais de Jodhpur."
      }
    },
    {
      title: { en: "Desert Culture Experience", es: "Experiencia de la Cultura del Desierto", pt: "Experiência da Cultura do Deserto" },
      desc: {
        en: "Combine Jodhpur's heritage with a desert excursion and traditional Rajasthani cultural performance.",
        es: "Combina el patrimonio de Jodhpur con una excursión al desierto y espectáculos culturales tradicionales.",
        pt: "Combine o patrimônio de Jodhpur com uma excursão ao deserto e apresentações culturais tradicionais."
      }
    },
    {
      title: { en: "Sunset View Experience", es: "Experiencia de Vistas al Atardecer", pt: "Experiência de Vistas do Pôr do Sol" },
      desc: {
        en: "Enjoy beautiful sunset views over the Blue City from selected viewpoints around the fort area.",
        es: "Disfruta de hermosas vistas del atardecer sobre la Ciudad Azul desde diferentes miradores.",
        pt: "Aprecie belas vistas do pôr do sol sobre a Cidade Azul a partir de diferentes mirantes."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Jodhpur is well connected by air, rail and road. Jodhpur Airport offers domestic connections, while the railway station connects the city with Delhi, Jaipur, Mumbai and other major destinations. Jodhpur is also easily accessible by road and is an important stop on Rajasthan heritage circuits.",
      es: "Jodhpur está bien conectado por avión, tren y carretera. Su aeropuerto ofrece conexiones nacionales y la estación ferroviaria conecta la ciudad con Delhi, Jaipur, Mumbai y otros destinos importantes.",
      pt: "Jodhpur possui boas conexões aéreas, ferroviárias e rodoviárias. Seu aeroporto oferece conexões domésticas e a estação ferroviária conecta a cidade a Delhi, Jaipur, Mumbai e outros destinos importantes."
    },
    nearestAirport: "Jodhpur Airport (JDH)",
    nearestRailway: "Jodhpur Junction (JU)",
    transportOptions: "Auto-rickshaws, Taxis, Private Cars",
    distanceFromMajorCities: "Jaipur (340 km), Udaipur (260 km)",
    recommendedStay: "2 Days",
    avgTemp: "15°C - 36°C",
    currency: "INR",
    localLanguage: "Rajasthani, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Safe destination. Take care when walking on busy markets.",
      es: "Destino seguro.",
      pt: "Destino seguro."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Convenient for central sightseeing and navigating narrow old city streets.",
        es: "Los rickshaws son convenientes para visitar el centro.",
        pt: "Autorriquixás são convenientes para passeios pelo centro."
      },
      recommended: true
    },
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Convenient for sightseeing and transfers to and from the airport.",
        es: "Los taxis son convenientes para traslados y visitas.",
        pt: "Táxis são convenientes para transfers e passeios."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Excellent for exploring the old city and blue lanes.",
        es: "Caminar es ideal para explorar la ciudad antigua y sus calles azules.",
        pt: "Caminhar é excelente para explorar a Cidade Antiga e suas ruas azuis."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Recommended for attractions spread outside the central area.",
        es: "Se recomienda coche privado para atracciones más alejadas.",
        pt: "Recomenda-se carro particular para atrações mais distantes."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Early Fort Visit", es: "Fuerte Temprano", pt: "Forte Cedo" },
      desc: {
        en: "Visit Mehrangarh early for comfortable sightseeing.",
        es: "Visita Mehrangarh temprano para disfrutar de un recorrido más cómodo.",
        pt: "Visite Mehrangarh cedo para um passeio mais confortável."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado", pt: "Calçado" },
      desc: {
        en: "Wear comfortable footwear for the old city and fort areas.",
        es: "Usa calzado cómodo para recorrer la ciudad antigua y los fuertes.",
        pt: "Use calçados confortáveis para explorar a Cidade Antiga e os fortes."
      }
    },
    {
      title: { en: "Sun & Water", es: "Sol y Agua", pt: "Sol e Água" },
      desc: {
        en: "Carry sun protection and water during daytime exploration.",
        es: "Lleva protección solar y agua durante las visitas diurnas.",
        pt: "Leve proteção solar e água durante os passeios durante o dia."
      }
    },
    {
      title: { en: "Markets", es: "Mercados", pt: "Mercados" },
      desc: {
        en: "Explore local markets with time for shopping and photography.",
        es: "Dedica tiempo a los mercados locales para comprar y tomar fotografías.",
        pt: "Reserve tempo para explorar os mercados locais, fazer compras e fotografar."
      }
    },
    {
      title: { en: "Advance Booking", es: "Reserva de Hoteles", pt: "Reserva de Hotéis" },
      desc: {
        en: "Book heritage hotels in advance during the high season.",
        es: "Reserva hoteles patrimoniales con anticipación durante la temporada alta.",
        pt: "Reserve hotéis históricos com antecedência durante a alta temporada."
      }
    }
  ],
  hotels: [
    {
      name: "Heritage Havelis",
      tier: "Premium",
      desc: {
        en: "Best for experiencing traditional Jodhpur architecture.",
        es: "Havelis patrimoniales — Para experimentar la arquitectura tradicional.",
        pt: "Havelis históricas — Para vivenciar a arquitetura tradicional."
      },
      image: ""
    },
    {
      name: "Luxury Palace Hotels",
      tier: "Luxury",
      desc: {
        en: "Ideal for a premium royal experience.",
        es: "Hoteles palaciegos de lujo — Para una experiencia real premium.",
        pt: "Hotéis-palácio de luxo — Para uma experiência real premium."
      },
      image: ""
    },
    {
      name: "Old City Boutique Hotels",
      tier: "Boutique",
      desc: {
        en: "Convenient for markets and Mehrangarh.",
        es: "Hoteles boutique del casco antiguo — Cerca de mercados y Mehrangarh.",
        pt: "Hotéis boutique na Cidade Antiga — Próximos aos mercados e Mehrangarh."
      },
      image: ""
    },
    {
      name: "Modern City Hotels",
      tier: "Premium",
      desc: {
        en: "Comfortable for families and business travellers.",
        es: "Hoteles modernos — Cómodos para familias y viajeros de negocios.",
        pt: "Hotéis modernos — Confortáveis para famílias e viajantes de negócios."
      },
      image: ""
    },
    {
      name: "Heritage Guesthouses",
      tier: "Budget",
      desc: {
        en: "Suitable for travellers seeking a local atmosphere.",
        es: "Casas de huéspedes patrimoniales — Para una experiencia más local.",
        pt: "Guesthouses históricas — Para uma experiência mais local."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Makhaniya Lassi, Mirchi Bada, Pyaaz Kachori, Mawa Kachori and Dal Baati Churma.",
    es: "Pruebe Makhaniya Lassi, Mirchi Bada, Pyaaz Kachori, Mawa Kachori y Dal Baati Churma.",
    pt: "Prove Makhaniya Lassi, Mirchi Bada, Pyaaz Kachori, Mawa Kachori e Dal Baati Churma."
  },
  localFoodDishes: [
    {
      name: { en: "Makhaniya Lassi", es: "Makhaniya Lassi", pt: "Makhaniya Lassi" },
      desc: {
        en: "Rich and creamy traditional yoghurt drink.",
        es: "Bebida tradicional de yogur cremosa.",
        pt: "Bebida tradicional cremosa de iogurte."
      }
    },
    {
      name: { en: "Mirchi Bada", es: "Mirchi Bada", pt: "Mirchi Bada" },
      desc: {
        en: "Spicy green chilli fritter filled with a savoury mixture.",
        es: "Buñuelo picante de chile verde.",
        pt: "Bolinho picante de pimenta verde."
      }
    },
    {
      name: { en: "Pyaaz Kachori", es: "Pyaaz Kachori", pt: "Pyaaz Kachori" },
      desc: {
        en: "Crispy pastry filled with spiced onion.",
        es: "Pastel crujiente relleno de cebolla especiada.",
        pt: "Pastel crocante recheado com cebola temperada."
      }
    },
    {
      name: { en: "Mawa Kachori", es: "Mawa Kachori", pt: "Mawa Kachori" },
      desc: {
        en: "Sweet version filled with rich mawa and nuts.",
        es: "Dulce relleno de mawa y frutos secos.",
        pt: "Doce recheado com mawa e frutos secos."
      }
    },
    {
      name: { en: "Dal Baati Churma", es: "Dal Baati Churma", pt: "Dal Baati Churma" },
      desc: {
        en: "Classic Rajasthani combination of baati, dal and churma.",
        es: "Clásica combinación de baati, dal y churma.",
        pt: "Clássica combinação de baati, dal e churma."
      }
    }
  ]
};

// 3. UDAIPUR DETAILS
const udaipurDetails = {
  thingsToDo: [
    {
      name: { en: "Visit City Palace", es: "Visitar el Palacio de la Ciudad", pt: "Visitar o City Palace" },
      desc: {
        en: "Explore the magnificent palace complex overlooking Lake Pichola and discover royal courtyards, museums and balconies.",
        es: "Explora el magnífico complejo palaciego sobre el lago Pichola y descubre patios reales, museos y balcones.",
        pt: "Explore o magnífico complexo palaciano sobre o Lago Pichola e descubra pátios reais, museus e varandas."
      }
    },
    {
      name: { en: "Enjoy a Lake Pichola Boat Ride", es: "Paseo en Barco por el Lago Pichola", pt: "Passeio de Barco no Lago Pichola" },
      desc: {
        en: "Take a scenic boat ride across Lake Pichola and enjoy beautiful views of the City Palace and surrounding hills.",
        es: "Disfruta de un paseo en barco por el lago Pichola con hermosas vistas del City Palace y las colinas.",
        pt: "Faça um passeio de barco pelo Lago Pichola e aprecie belas vistas do City Palace e das colinas."
      }
    },
    {
      name: { en: "Explore Jagdish Temple", es: "Explorar el Templo Jagdish", pt: "Explorar o Templo Jagdish" },
      desc: {
        en: "Visit this historic Hindu temple known for its detailed carvings and impressive architecture.",
        es: "Visita este histórico templo hindú conocido por sus elaboradas tallas y arquitectura.",
        pt: "Visite este histórico templo hindu conhecido por suas esculturas detalhadas e arquitetura."
      }
    },
    {
      name: { en: "Visit Saheliyon-ki-Bari", es: "Visitar Saheliyon-ki-Bari", pt: "Visitar Saheliyon-ki-Bari" },
      desc: {
        en: "Walk through the elegant gardens created for the royal women of Udaipur.",
        es: "Pasea por los elegantes juzgados y jardines creados para las mujeres reales de Udaipur.",
        pt: "Caminhe pelos elegantes jardins criados para as mulheres da família real de Udaipur."
      }
    },
    {
      name: { en: "Watch Sunset at Sajjangarh", es: "Ver el Atardecer en Sajjangarh", pt: "Ver o Pôr do Sol em Sajjangarh" },
      desc: {
        en: "Enjoy spectacular sunset and panoramic views of Udaipur from Sajjangarh, also known as Monsoon Palace.",
        es: "Disfruta de espectaculares vistas del atardecer desde Sajjangarh, también conocido como Palacio del Monzón.",
        pt: "Aprecie vistas espetaculares do pôr do sol a partir de Sajjangarh, também conhecido como Palácio das Monções."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Romantic Lake Experience", es: "Experiencia Romántica en el Lago", pt: "Experiência Romântica nos Lagos" },
      desc: {
        en: "Enjoy a peaceful boat ride, lakeside dining and beautiful sunset views across Udaipur's romantic lakes.",
        es: "Disfruta de paseos en barco, cenas junto al lago y hermosos atardeceres en los románticos lagos de Udaipur.",
        pt: "Desfrute de passeios de barco, jantares à beira do lago e belos pores do sol nos românticos lagos de Udaipur."
      }
    },
    {
      title: { en: "Royal Heritage Experience", es: "Experiencia del Patrimonio Real", pt: "Experiência de Patrimônio Real" },
      desc: {
        en: "Discover the history, architecture and lifestyle of the Mewar royal family through palaces and museums.",
        es: "Descubre la historia, arquitectura y estilo de vida de la familia real de Mewar a través de palacios y museos.",
        pt: "Conheça a história, arquitetura e estilo de vida da família real de Mewar através de palácios e museus."
      }
    },
    {
      title: { en: "Rajasthani Cultural Experience", es: "Experiencia Cultural de Rajasthan", pt: "Experiência Cultural do Rajasthan" },
      desc: {
        en: "Experience folk music, traditional dance, crafts and authentic regional cuisine.",
        es: "Disfruta de música folclórica, danzas tradicionales, artesanías y auténtica gastronomía regional.",
        pt: "Vivencie música folclórica, danças tradicionais, artesanato e autêntica culinária regional."
      }
    },
    {
      title: { en: "Lake Sunset Experience", es: "Experiencia del Atardecer en el Lago", pt: "Experiência de Pôr do Sol no Lago" },
      desc: {
        en: "Watch the changing colours of the sky over Lake Pichola from a scenic rooftop or boat.",
        es: "Observa cómo cambia el color del cielo sobre el lago Pichola desde una terraza panorámica o un barco.",
        pt: "Observe as cores do céu mudarem sobre o Lago Pichola a partir de um rooftop panorâmico ou barco."
      }
    },
    {
      title: { en: "Art & Craft Experience", es: "Experiencia de Arte y Artesanía", pt: "Experiência de Arte e Artesanato" },
      desc: {
        en: "Discover miniature paintings, traditional textiles, jewellery and local handicrafts.",
        es: "Descubre pinturas en miniatura, textiles tradicionales, joyería y artesanías locales.",
        pt: "Descubra pinturas em miniatura, tecidos tradicionais, joias e artesanato local."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Udaipur is connected by air, rail and road. Maharana Pratap Airport offers domestic flights to major Indian cities. The railway station provides connections to Jaipur, Delhi, Mumbai and other destinations. Udaipur is also an important stop on Rajasthan heritage circuits.",
      es: "Udaipur está conectado por avión, tren y carretera. Su aeropuerto ofrece vuelos nacionales a importantes ciudades de India y la estación ferroviaria conecta con Jaipur, Delhi, Mumbai y otros destinos.",
      pt: "Udaipur possui conexões aéreas, ferroviárias e rodoviárias. Seu aeroporto oferece voos domésticos para importantes cidades indianas e a estação ferroviária conecta a cidade a Jaipur, Delhi, Mumbai e outros destinos."
    },
    nearestAirport: "Maharana Pratap Airport (UDR)",
    nearestRailway: "Udaipur City Railway Station (UDZ)",
    transportOptions: "Taxis, Auto-rickshaws, Boats, Private Cars",
    distanceFromMajorCities: "Jaipur (390 km), Jodhpur (260 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "16°C - 35°C",
    currency: "INR",
    localLanguage: "Rajasthani, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and romantic city. Watch out on boat boards and narrow streets.",
      es: "Ciudad muy segura y romántica.",
      pt: "Cidade muito segura e romântica."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short trips around city streets and bazaar zones.",
        es: "Los rickshaws son útiles para recorrer la ciudad.",
        pt: "Autorriquixás são úteis para conhecer a cidade."
      },
      recommended: true
    },
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Convenient for sightseeing routes and transfer options.",
        es: "Los taxis son útiles para recorrer la ciudad y traslados.",
        pt: "Táxis são úteis para passeios e traslados."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal around the old city and lakeside areas.",
        es: "Caminar es ideal en el casco antiguo y las zonas junto al lago.",
        pt: "Caminhar é ideal na Cidade Antiga e nas áreas próximas aos lagos."
      },
      recommended: false
    },
    {
      transportType: "Boat Ride",
      title: { en: "Boat Ride", es: "Paseo en Barco", pt: "Passeio de Barco" },
      desc: {
        en: "An essential way to experience Lake Pichola's scenic layouts.",
        es: "Los paseos en barco son esenciales para conocer el lago Pichola.",
        pt: "Passeios de barco são essenciais para conhecer o Lago Pichola."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Useful for Sajjangarh and attractions outside the centre.",
        es: "El coche privado es útil para Sajjangarh y traslados lejanos.",
        pt: "Carros particulares são úteis para Sajjangarh."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Lakeside Booking", es: "Vistas al Lago", pt: "Vista para o Lago" },
      desc: {
        en: "Book lake-view accommodation early during peak season.",
        es: "Reserva con anticipación alojamientos con vistas al lago durante la temporada alta.",
        pt: "Reserve hospedagens com vista para o lago com antecedência durante a alta temporada."
      }
    },
    {
      title: { en: "Sunset Boat Ride", es: "Paseos al Atardecer", pt: "Pôr do Sol no Barco" },
      desc: {
        en: "Plan boat rides around sunset for the most scenic experience.",
        es: "Programa los paseos en barco cerca del atardecer para disfrutar de las mejores vistas.",
        pt: "Planeje passeios de barco perto do pôr do sol para obter as melhores vistas."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Wear comfortable footwear for palace and old-city exploration.",
        es: "Usa calzado cómodo para explorar palacios y la ciudad antigua.",
        pt: "Use calçados confortáveis para explorar palácios e a Cidade Antiga."
      }
    },
    {
      title: { en: "Sun Protection", es: "Protección Solar", pt: "Proteção Solar" },
      desc: {
        en: "Carry sun protection during daytime sightseeing.",
        es: "Lleva protección solar durante las visitas diurnas.",
        pt: "Leve proteção solar durante os passeios durante o dia."
      }
    },
    {
      title: { en: "Art Studios", es: "Tiendas y Arte", pt: "Estúdios de Arte" },
      desc: {
        en: "Explore local handicraft shops and miniature art studios.",
        es: "Explora tiendas de artesanías y estudios de pintura en miniatura.",
        pt: "Explore lojas de artesanato e estúdios de pintura em miniatura."
      }
    }
  ],
  hotels: [
    {
      name: "Lake Pichola Luxury Hotels",
      tier: "Luxury",
      desc: {
        en: "Best for romantic lake views.",
        es: "Hoteles de lujo junto al lago Pichola — Para vistas románticas.",
        pt: "Hotéis de luxo junto ao Lago Pichola — Para vistas românticas."
      },
      image: ""
    },
    {
      name: "Heritage Palace Hotels",
      tier: "Luxury",
      desc: {
        en: "Ideal for a royal experience.",
        es: "Hoteles palaciegos patrimoniales — Para una experiencia real.",
        pt: "Hotéis-palácio históricos — Para uma experiência real."
      },
      image: ""
    },
    {
      name: "Old City Boutique Hotels",
      tier: "Boutique",
      desc: {
        en: "Great for culture and sightseeing.",
        es: "Hoteles boutique del casco antiguo — Para cultura y visitas.",
        pt: "Hotéis boutique na Cidade Antiga — Para cultura e passeios."
      },
      image: ""
    },
    {
      name: "Lake-view Guesthouses",
      tier: "Budget",
      desc: {
        en: "Suitable for budget-conscious travellers.",
        es: "Casas de huéspedes con vistas al lago — Para viajeros con presupuesto.",
        pt: "Guesthouses com vista para o lago — Para viajantes com orçamento limitado."
      },
      image: ""
    },
    {
      name: "Modern City Hotels",
      tier: "Premium",
      desc: {
        en: "Comfortable for families and longer stays.",
        es: "Hoteles modernos — Cómodos para familias y estancias largas.",
        pt: "Hotéis modernos — Confortáveis para famílias e estadias longas."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Dal Baati Churma, Gatte Ki Sabzi, Laal Maas, Kachori and Ghewar.",
    es: "Pruebe Dal Baati Churma, Gatte Ki Sabzi, Laal Maas, Kachori y Ghewar.",
    pt: "Prove Dal Baati Churma, Gatte Ki Sabzi, Laal Maas, Kachori e Ghewar."
  },
  localFoodDishes: [
    {
      name: { en: "Dal Baati Churma", es: "Dal Baati Churma", pt: "Dal Baati Churma" },
      desc: {
        en: "Traditional Rajasthani staple.",
        es: "Plato tradicional de Rajasthan.",
        pt: "Prato tradicional do Rajasthan."
      }
    },
    {
      name: { en: "Gatte Ki Sabzi", es: "Gatte Ki Sabzi", pt: "Gatte Ki Sabzi" },
      desc: {
        en: "Gram-flour dumplings in yoghurt-based curry.",
        es: "Albóndigas de harina de garbanzo con salsa de yogur.",
        pt: "Bolinhos de farinha de grão-de-bico em molho de iogurte."
      }
    },
    {
      name: { en: "Laal Maas", es: "Laal Maas", pt: "Laal Maas" },
      desc: {
        en: "Rich and spicy Rajasthani meat preparation.",
        es: "Preparación de carne rica y especiada.",
        pt: "Preparação de carne rica e picante."
      }
    },
    {
      name: { en: "Kachori", es: "Kachori", pt: "Kachori" },
      desc: {
        en: "Crispy savoury pastry filled with spiced ingredients.",
        es: "Pastel crujiente relleno de ingredientes especiados.",
        pt: "Pastel crocante recheado com ingredientes temperados."
      }
    },
    {
      name: { en: "Ghewar", es: "Ghewar", pt: "Ghewar" },
      desc: {
        en: "Traditional sweet with a delicate honeycomb texture.",
        es: "Dulce tradicional con textura de panal.",
        pt: "Doce tradicional com textura delicada de colmeia."
      }
    }
  ]
};

// 4. JAISALMER DETAILS
const jaisalmerDetails = {
  thingsToDo: [
    {
      name: { en: "Explore Jaisalmer Fort", es: "Explorar el Fuerte de Jaisalmer", pt: "Explore o Forte de Jaisalmer" },
      desc: {
        en: "Explore the magnificent living fort, its narrow lanes, temples, havelis, shops and panoramic views.",
        es: "Explora el magnífico fuerte habitado, sus calles estrechas, templos, havelis, tiendas y vistas panorámicas.",
        pt: "Explore o magnífico forte habitado, suas ruas estreitas, templos, havelis, lojas e vistas panorâmicas."
      }
    },
    {
      name: { en: "Visit Patwon Ki Haveli", es: "Visitar Patwon Ki Haveli", pt: "Visitar Patwon Ki Haveli" },
      desc: {
        en: "Admire the intricate architecture and craftsmanship of one of Jaisalmer's most famous haveli complexes.",
        es: "Admira la arquitectura y artesanía de uno de los complejos de havelis más famosos de Jaisalmer.",
        pt: "Admire a arquitetura e o artesanato de um dos mais famosos complexos de havelis de Jaisalmer."
      }
    },
    {
      name: { en: "Experience the Sam Sand Dunes", es: "Visitar Sam Sand Dunes", pt: "Conhecer Sam Sand Dunes" },
      desc: {
        en: "Experience the golden Thar Desert through camel rides, jeep safaris and spectacular sunset views.",
        es: "Descubre el desierto del Thar con paseos en camello, safaris en jeep y espectaculares atardeceres.",
        pt: "Explore o deserto de Thar com passeios de camelo, safáris de jipe e espetaculares pores do sol."
      }
    },
    {
      name: { en: "Explore Gadisar Lake", es: "Explorar el Lago Gadisar", pt: "Explorar o Lago Gadisar" },
      desc: {
        en: "Enjoy a peaceful visit to the historic lake surrounded by temples, shrines and traditional architecture.",
        es: "Disfruta de una visita tranquila al histórico lago rodeado de templos, santuarios y arquitectura tradicional.",
        pt: "Desfrute de uma visita tranquila ao lago histórico cercado por templos, santuários e arquitetura tradicional."
      }
    },
    {
      name: { en: "Discover Salim Singh Ki Haveli", es: "Descubrir Salim Singh Ki Haveli", pt: "Descobrir Salim Singh Ki Haveli" },
      desc: {
        en: "Admire the distinctive architecture and beautifully carved details of this historic haveli.",
        es: "Admira la arquitectura distintiva y los hermosos detalles tallados de esta histórica haveli.",
        pt: "Admire a arquitetura distinta e os belos detalhes esculpidos desta histórica haveli."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Desert Safari Experience", es: "Experiencia de Safari en el Desierto", pt: "Experiência de Safári no Deserto" },
      desc: {
        en: "Explore the Thar Desert by jeep or camel and experience its vast golden landscape.",
        es: "Explora el desierto del Thar en jeep o camello y disfruta de sus vastos paisajes dorados.",
        pt: "Explore o deserto de Thar de jipe ou camelo e aprecie sua vasta paisagem dourada."
      }
    },
    {
      title: { en: "Desert Sunset Experience", es: "Experiencia de Atardecer en el Desierto", pt: "Experiência do Pôr do Sol no Deserto" },
      desc: {
        en: "Watch the sun disappear over the dunes while enjoying the peaceful atmosphere of the desert.",
        es: "Observa cómo el sol desaparece sobre las dunas mientras disfrutas de la tranquilidad del desierto.",
        pt: "Observe o sol desaparecer sobre as dunas enquanto aprecia a atmosfera tranquila do deserto."
      }
    },
    {
      title: { en: "Rajasthani Folk Culture Experience", es: "Experiencia de la Cultura Folclórica", pt: "Experiência de Cultura Folclórica do Rajasthan" },
      desc: {
        en: "Enjoy traditional music, Kalbelia dance, local food and cultural performances at a desert camp.",
        es: "Disfruta de música tradicional, danza Kalbelia, gastronomía local y espectáculos culturales en un campamento del desierto.",
        pt: "Desfrute de música tradicional, dança Kalbelia, culinária local e apresentações culturais em um acampamento no deserto."
      }
    },
    {
      title: { en: "Living Fort Heritage Experience", es: "Experiencia del Patrimonio del Fuerte Vivo", pt: "Experiência do Forte Vivo" },
      desc: {
        en: "Walk through Jaisalmer Fort and discover the unique experience of a historic fort that continues to function as a living community.",
        es: "Recorre el Fuerte de Jaisalmer y descubre la experiencia única de un fuerte histórico que continúa siendo una comunidad viva.",
        pt: "Caminhe pelo Forte de Jaisalmer e descubra a experiência única de um forte histórico que continua funcionando como uma comunidade viva."
      }
    },
    {
      title: { en: "Desert Stargazing Experience", es: "Experiencia de Observación de Estrellas", pt: "Experiência de Observação de Estrelas no Deserto" },
      desc: {
        en: "Spend an evening away from city lights and enjoy the spectacular night sky over the Thar Desert.",
        es: "Pasa una noche lejos de las luces de la ciudad y disfruta del espectacular cielo nocturno sobre el desierto del Thar.",
        pt: "Passe uma noite longe das luzes da cidade e admire o espetacular céu noturno sobre o deserto de Thar."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Jaisalmer is connected by air, rail and road, although flight options are more limited than major Rajasthan cities. Trains connect Jaisalmer with Jodhpur, Jaipur, Delhi and other cities. Road travel is an important part of Rajasthan itineraries, especially when combining Jaisalmer with Jodhpur.",
      es: "Jaisalmer está conectado por avión, tren y carretera, aunque las opciones de vuelo son más limitadas que en otras grandes ciudades de Rajasthan. Los trenes conectan Jaisalmer con Jodhpur, Jaipur, Delhi y otras ciudades.",
      pt: "Jaisalmer possui conexões aéreas, ferroviárias e rodoviárias, embora as opções de voo sejam mais limitadas do que em outras grandes cidades do Rajasthan. Os trens conectam Jaisalmer a Jodhpur, Jaipur, Delhi e outras cidades."
    },
    nearestAirport: "Jaisalmer Airport (JSA)",
    nearestRailway: "Jaisalmer Railway Station (JSM)",
    transportOptions: "Auto-rickshaws, Taxis, Private Vehicles",
    distanceFromMajorCities: "Jodhpur (280 km), Bikaner (330 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "14°C - 38°C",
    currency: "INR",
    localLanguage: "Rajasthani, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and scenic desert town. Follow guides advice during safaris.",
      es: "Ciudad desértica muy segura.",
      pt: "Cidade desértica muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is the best way to explore Jaisalmer Fort and the old city.",
        es: "Caminar es la mejor forma de explorar el Fuerte de Jaisalmer y la ciudad antigua.",
        pt: "Caminhar é a melhor maneira de explorar o Forte de Jaisalmer e a Cidade Antiga."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Convenient for city attractions outside the fort gates.",
        es: "Los rickshaws son convenientes para las atracciones urbanas.",
        pt: "Autorriquixás são convenientes para as atrações urbanas."
      },
      recommended: false
    },
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Convenient for transfers to hotels and desert resorts.",
        es: "Taxis son convenientes para las atracciones urbanas y traslados.",
        pt: "Táxis são convenientes para as atrações urbanas e traslados."
      },
      recommended: true
    },
    {
      transportType: "Private Vehicle / Organised Tour",
      title: { en: "Private Vehicle", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Recommended for Sam Sand Dunes and other desert experiences.",
        es: "Se recomienda coche privado o excursión organizada para Sam Sand Dunes.",
        pt: "Recomenda-se carro particular ou excursão organizada para Sam Sand Dunes."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Desert Nights", es: "Noches Frías", pt: "Noites Frias" },
      desc: {
        en: "Carry warm clothing for cold desert nights.",
        es: "Lleva ropa abrigada para las frías noches del desierto.",
        pt: "Leve roupas quentes para as noites frias do deserto."
      }
    },
    {
      title: { en: "Reputable Operators", es: "Operadores de Confianza", pt: "Operadores Confiáveis" },
      desc: {
        en: "Choose reputable operators for camel rides and desert safaris.",
        es: "Elige operadores de confianza para paseos en camello y safaris por el desierto.",
        pt: "Escolha operadores confiáveis para passeios de camelo e safáris no deserto."
      }
    },
    {
      title: { en: "Desert Protection", es: "Protección Solar", pt: "Proteção Solar" },
      desc: {
        en: "Carry sunscreen, sunglasses and a hat for daytime desert activities.",
        es: "Lleva protector solar, gafas de sol y sombrero para las actividades diurnas en el desierto.",
        pt: "Leve protetor solar, óculos de sol e chapéu para atividades no deserto durante o dia."
      }
    },
    {
      title: { en: "Desert Camps Booking", es: "Reservar Campamentos", pt: "Reserve Acampamentos" },
      desc: {
        en: "Book desert camps in advance during the peak season.",
        es: "Reserva los campamentos del desierto con anticipación durante la temporada alta.",
        pt: "Reserve os acampamentos no deserto com antecedência durante a alta temporada."
      }
    },
    {
      title: { en: "Respect Sites", es: "Respetar Lugares", pt: "Respeite os Locais" },
      desc: {
        en: "Respect the living communities and religious sites inside Jaisalmer Fort.",
        es: "Respeta las comunidades locales y los lugares religiosos dentro del Fuerte de Jaisalmer.",
        pt: "Respeite as comunidades locais e os locais religiosos dentro do Forte de Jaisalmer."
      }
    }
  ],
  hotels: [
    {
      name: "Luxury Desert Camps",
      tier: "Luxury",
      desc: {
        en: "Premium desert experience with cultural performances.",
        es: "Campamentos de lujo en el desierto — Experiencia premium con espectáculos culturales.",
        pt: "Acampamentos de luxo no deserto — Experiência premium com apresentações culturais."
      },
      image: ""
    },
    {
      name: "Heritage Havelis",
      tier: "Premium",
      desc: {
        en: "Traditional architecture with modern comforts.",
        es: "Havelis patrimoniales — Arquitectura tradicional con comodidades modernas.",
        pt: "Havelis históricas — Arquitetura tradicional com conforto moderno."
      },
      image: ""
    },
    {
      name: "Jaisalmer Fort Heritage Stays",
      tier: "Premium",
      desc: {
        en: "Best for experiencing the historic city centre.",
        es: "Alojamientos patrimoniales dentro del fuerte — Para vivir el centro histórico.",
        pt: "Hospedagens históricas dentro do forte — Para vivenciar o centro histórico."
      },
      image: ""
    },
    {
      name: "Modern City Hotels",
      tier: "Premium",
      desc: {
        en: "Comfortable for families and longer stays.",
        es: "Hoteles modernos — Cómodos para familias.",
        pt: "Hotéis modernos — Confortáveis para famílias."
      },
      image: ""
    },
    {
      name: "Boutique Desert Resorts",
      tier: "Boutique",
      desc: {
        en: "Peaceful option outside the main city.",
        es: "Resorts boutique en el desierto — Opción tranquila fuera de la ciudad.",
        pt: "Resorts boutique no deserto — Opção tranquila fora da cidade."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Ker Sangri, Gatte Ki Sabzi, Dal Baati Churma, Pyaaz Kachori and Ghotua Ladoo.",
    es: "Pruebe Ker Sangri, Gatte Ki Sabzi, Dal Baati Churma, Pyaaz Kachori y Ghotua Ladoo.",
    pt: "Prove Ker Sangri, Gatte Ki Sabzi, Dal Baati Churma, Pyaaz Kachori e Ghotua Ladoo."
  },
  localFoodDishes: [
    {
      name: { en: "Ker Sangri", es: "Ker Sangri", pt: "Ker Sangri" },
      desc: {
        en: "Traditional desert vegetable preparation.",
        es: "Preparación tradicional de verduras del desierto.",
        pt: "Preparação tradicional de vegetais do deserto."
      }
    },
    {
      name: { en: "Gatte Ki Sabzi", es: "Gatte Ki Sabzi", pt: "Gatte Ki Sabzi" },
      desc: {
        en: "Gram-flour dumplings in a spiced yoghurt curry.",
        es: "Albóndigas de harina de garbanzo en curry de yogur especiado.",
        pt: "Bolinhos de farinha de grão-de-bico em curry de iogurte temperado."
      }
    },
    {
      name: { en: "Dal Baati Churma", es: "Dal Baati Churma", pt: "Dal Baati Churma" },
      desc: {
        en: "Famous Rajasthani combination of lentils, baati and sweet churma.",
        es: "Famosa combinación de lentejas, baati y churma dulce.",
        pt: "Famosa combinação de lentilhas, baati e churma doce."
      }
    },
    {
      name: { en: "Pyaaz Kachori", es: "Pyaaz Kachori", pt: "Pyaaz Kachori" },
      desc: {
        en: "Crispy onion-filled pastry.",
        es: "Pastel crujiente relleno de cebolla.",
        pt: "Pastel crocante recheado com cebola."
      }
    },
    {
      name: { en: "Ghotua Ladoo", es: "Ghotua Ladoo", pt: "Ghotua Ladoo" },
      desc: {
        en: "Traditional Jaisalmer sweet known for its rich texture.",
        es: "Dulce tradicional de Jaisalmer de textura rica.",
        pt: "Doce tradicional de Jaisalmer com textura rica."
      }
    }
  ]
};

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  const rajIdx = states.findIndex(s => s.slug === "rajasthan");
  if (rajIdx !== -1) {
    console.log("Updating Rajasthan cities in local file...");
    const rajState = states[rajIdx];
    rajState.cities = rajState.cities || [];
    
    // Update function helper
    const updateCity = (slug, details) => {
      const cityIdx = rajState.cities.findIndex(c => c.slug === slug);
      if (cityIdx !== -1) {
        rajState.cities[cityIdx] = { ...rajState.cities[cityIdx], ...details };
        console.log(`Updated city details: ${slug}`);
      } else {
        console.error(`City slug '${slug}' not found under Rajasthan!`);
      }
    };

    updateCity("jaipur", jaipurDetails);
    updateCity("jodhpur", jodhpurDetails);
    updateCity("udaipur", UdaipurDetails = udaipurDetails);
    updateCity("jaisalmer", jaisalmerDetails);

    states[rajIdx] = rajState;
  } else {
    console.error("Rajasthan state not found in states.json!");
  }

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for Rajasthan cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const docRef = doc(firestore, "states", "rajasthan");
    setDoc(docRef, states[rajIdx]).then(() => {
      console.log("🚀 SUCCESS: Remote Firestore 'rajasthan' document successfully updated!");
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
