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

// Panaji Details
const panajiDetails = {
  tagline: {
    en: "Panaji, the capital of Goa, is a charming riverside city where Portuguese heritage, colourful neighbourhoods, historic churches and Goan culture come together. Located along the Mandovi River, Panaji offers a relaxed introduction to Goa beyond its beaches.",
    es: "Panaji, la capital de Goa, es una encantadora ciudad junto al río donde se combinan el patrimonio portugués, los barrios coloridos, las iglesias históricas y la cultura de Goa. Situada a orillas del río Mandovi, ofrece una introducción tranquila a Goa más allá de sus playas.",
    pt: "Panaji, a capital de Goa, é uma charmosa cidade às margens do rio onde o patrimônio português, os bairros coloridos, as igrejas históricas e a cultura goesa se encontram. Localizada junto ao rio Mandovi, oferece uma introdução tranquila a Goa além de suas praias."
  },
  overview: {
    en: "Panaji is the cultural and administrative heart of Goa, offering a fascinating blend of colonial history, Goan traditions and modern urban life. The colourful Fontainhas quarter, historic churches, riverside promenades and Mandovi River create a distinctive atmosphere. Visitors can explore heritage streets, local markets, museums, cafés and riverfront attractions while using Panaji as a convenient base for Old Goa and North Goa.",
    es: "Panaji es el corazón cultural y administrativo de Goa y combina historia colonial, tradiciones locales y vida urbana moderna. El colorido barrio de Fontainhas, las iglesias históricas, los paseos junto al río y el río Mandovi crean una atmósfera única. Los visitantes pueden explorar calles históricas, mercados, museos, cafés y atracciones junto al río.",
    pt: "Panaji é o coração cultural e administrativo de Goa, combinando história colonial, tradições goesas e vida urbana moderna. O colorido bairro de Fontainhas, as igrejas históricas, os passeios às margens do rio e o Mandovi criam uma atmosfera única. Os visitantes podem explorar ruas históricas, mercados, museus, cafés e atrações ribeirinhas."
  },
  highlights: [
    {
      title: { en: "Fontainhas Heritage Quarter", es: "Barrio Histórico de Fontainhas", pt: "Bairro Histórico de Fontainhas" },
      desc: {
        en: "Explore colourful Portuguese-style houses, narrow lanes and charming heritage architecture.",
        es: "Explora casas coloridas de estilo portugués, calles estrechas y encantadora arquitectura histórica.",
        pt: "Explore casas coloridas de estilo português, ruas estreitas e uma charmosa arquitetura histórica."
      }
    },
    {
      title: { en: "Mandovi River", es: "Río Mandovi", pt: "Rio Mandovi" },
      desc: {
        en: "Enjoy scenic river views, peaceful walks and evening cruises along the Mandovi waterfront.",
        es: "Disfruta de vistas panorámicas, tranquilos paseos y cruceros por el río Mandovi.",
        pt: "Aprecie belas vistas, caminhadas tranquilas e cruzeiros pelo rio Mandovi."
      }
    },
    {
      title: { en: "Immaculate Conception Church", es: "Iglesia de la Inmaculada Concepción", pt: "Igreja da Imaculada Conceição" },
      desc: {
        en: "Admire one of Panaji's most recognisable landmarks and its impressive historic architecture.",
        es: "Admira uno de los monumentos más reconocibles de Panaji y su impresionante arquitectura histórica.",
        pt: "Admire um dos monumentos mais conhecidos de Panaji e sua impressionante arquitetura histórica."
      }
    },
    {
      title: { en: "Goan-Portuguese Culture", es: "Cultura Goana-Portuguesa", pt: "Cultura Goesa-Portuguesa" },
      desc: {
        en: "Discover the unique combination of Indian and Portuguese influences in architecture, food and traditions.",
        es: "Descubre la combinación única de influencias indias y portuguesas en la arquitectura, gastronomía y tradiciones.",
        pt: "Descubra a combinação única de influências indianas e portuguesas na arquitetura, culinária e tradições."
      }
    },
    {
      title: { en: "Riverside Atmosphere", es: "Ambiente junto al Río", pt: "Atmosfera Ribeirinha" },
      desc: {
        en: "Experience Panaji's relaxed side through cafés, markets, heritage streets and riverside evenings.",
        es: "Disfruta del ambiente relajado de Panaji a través de cafés, mercados, calles históricas y tardes junto al río.",
        pt: "Conheça o lado tranquilo de Panaji através de cafés, mercados, ruas históricas e noites à beira do rio."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Fontainhas", es: "Explorar Fontainhas", pt: "Explorar Fontainhas" },
      desc: {
        en: "Walk through colourful heritage lanes and admire Portuguese-inspired architecture.",
        es: "Recorre las coloridas calles históricas y admira la arquitectura de influencia portuguesa.",
        pt: "Caminhe pelas coloridas ruas históricas e admire a arquitetura de influência portuguesa."
      }
    },
    {
      name: { en: "Visit Immaculate Conception Church", es: "Visitar la Iglesia de la Inmaculada Concepción", pt: "Visitar a Igreja da Imaculada Conceição" },
      desc: {
        en: "Explore the historic church and enjoy views over central Panaji.",
        es: "Explora la iglesia histórica y disfruta de las vistas sobre el centro de Panaji.",
        pt: "Explore a igreja histórica e aprecie as vistas sobre o centro de Panaji."
      }
    },
    {
      name: { en: "Take a Mandovi River Cruise", es: "Hacer un Crucero por el Río Mandovi", pt: "Fazer um Cruzeiro pelo Rio Mandovi" },
      desc: {
        en: "Enjoy scenic river views and Goan cultural performances.",
        es: "Disfruta de vistas del río y espectáculos culturales tradicionales de Goa.",
        pt: "Aprecie as vistas do rio e apresentações culturais tradicionais de Goa."
      }
    },
    {
      name: { en: "Explore Local Bazaars", es: "Explorar Mercados Locales", pt: "Explorar Mercados Locais" },
      desc: {
        en: "Shop for spices, handicrafts, souvenirs and local products.",
        es: "Compra especias, artesanías, recuerdos y productos locales.",
        pt: "Compre especiarias, artesanato, lembranças e produtos locais."
      }
    },
    {
      name: { en: "Walk Along the Waterfront", es: "Pasear junto a la Ribera", pt: "Caminhar à Beira-Rio" },
      desc: {
        en: "Enjoy a relaxing walk along the Mandovi River, especially during the evening.",
        es: "Disfruta de un paseo relajante junto al río Mandovi, especialmente al atardecer.",
        pt: "Faça uma caminhada relaxante às margens do Mandovi, especialmente ao entardecer."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Heritage Walking Experience", es: "Experiencia de Paseo Histórico", pt: "Experiência de Caminhada Histórica" },
      desc: {
        en: "Discover Panaji's history through its architecture, churches and colourful neighbourhoods.",
        es: "Descubre la historia de Panaji a través de su arquitectura, iglesias y barrios coloridos.",
        pt: "Conheça a história de Panaji através de sua arquitetura, igrejas e bairros coloridos."
      }
    },
    {
      title: { en: "Mandovi Sunset Cruise", es: "Crucero al Atardecer por el Mandovi", pt: "Cruzeiro ao Pôr do Sol no Mandovi" },
      desc: {
        en: "Enjoy the changing colours of the sky over the river during sunset.",
        es: "Disfruta de los colores del cielo sobre el río durante el atardecer.",
        pt: "Aprecie as cores do céu sobre o rio durante o pôr do sol."
      }
    },
    {
      title: { en: "Goan Culinary Experience", es: "Experiencia Gastronómica de Goa", pt: "Experiência Gastronômica de Goa" },
      desc: {
        en: "Taste traditional Goan seafood, curries, snacks and desserts.",
        es: "Prueba mariscos, currys, aperitivos y postres tradicionales de Goa.",
        pt: "Experimente frutos do mar, curries, petiscos e sobremesas tradicionais de Goa."
      }
    },
    {
      title: { en: "Heritage Photography Experience", es: "Experiencia Fotográfica del Patrimonio", pt: "Experiência Fotográfica do Patrimônio" },
      desc: {
        en: "Capture colourful houses, historic churches and atmospheric streets.",
        es: "Fotografía casas coloridas, iglesias históricas y calles llenas de ambiente.",
        pt: "Fotografe casas coloridas, igrejas históricas e ruas cheias de personalidade."
      }
    },
    {
      title: { en: "Local Culture Experience", es: "Experiencia de la Cultura Local", pt: "Experiência de Cultura Local" },
      desc: {
        en: "Discover Goan music, traditions, markets and everyday city life.",
        es: "Descubre la música, tradiciones, mercados y vida cotidiana de Goa.",
        pt: "Descubra a música, tradições, mercados e vida cotidiana de Goa."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Goa is served by Dabolim Airport and Mopa Airport, with good road connectivity to Panaji.",
      es: "Dabolim y Mopa son los aeropuertos principales de Goa.",
      pt: "Dabolim e Mopa são os principais aeroportos de Goa."
    },
    nearestAirport: "Dabolim Airport (GOI) / Manohar International Airport (GOX)",
    nearestRailway: "Karmali Railway Station (KRMI)",
    transportOptions: "Taxis, Auto-rickshaws, Scooters, Private Cars",
    distanceFromMajorCities: "Margao (35 km), Vasco da Gama (30 km)",
    recommendedStay: "1-2 Days",
    avgTemp: "20°C - 33°C",
    currency: "INR",
    localLanguage: "Konkani, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe city. Use registered taxis and follow local rules.",
      es: "Ciudad muy segura. Utilice taxis registrados.",
      pt: "Cidade muito segura. Use táxis registrados."
    }
  },
  gettingAround: [
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Convenient for sightseeing and transfers.",
        es: "Cómodo para visitas y traslados.",
        pt: "Conveniente para passeios e traslados."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short local journeys.",
        es: "Útil para trayectos cortos.",
        pt: "Útil para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "Scooter Rental",
      title: { en: "Scooter Rental", es: "Alquiler de Scooter", pt: "Aluguel de Scooter" },
      desc: {
        en: "Convenient for independent exploration where legally permitted and safely operated.",
        es: "Conveniente para explorar por cuenta propia cuando esté permitido legalmente y se conduzca de forma segura.",
        pt: "Conveniente para explorar de forma independente quando permitido legalmente e conduzido com segurança."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Comfortable for families and sightseeing across multiple areas.",
        es: "Cómodo para familias y visitas a diferentes zonas.",
        pt: "Confortável para famílias e passeios por diferentes áreas."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Excellent for Fontainhas and central heritage areas.",
        es: "Excelente para Fontainhas y las zonas históricas del centro.",
        pt: "Excelente para Fontainhas e áreas históricas centrais."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Footwear", es: "Calzado", pt: "Calçado" },
      desc: {
        en: "Wear comfortable shoes for heritage walks.",
        es: "Usa calzado cómodo para los paseos históricos.",
        pt: "Use calçados confortáveis para caminhadas históricas."
      }
    },
    {
      title: { en: "Sun & Hydration", es: "Sol e Hidratación", pt: "Sol e Hidratação" },
      desc: {
        en: "Carry sunscreen, sunglasses and water.",
        es: "Lleva protector solar, gafas de sol y agua.",
        pt: "Leve protetor solar, óculos de sol e água."
      }
    },
    {
      title: { en: "Respect Code", es: "Vestimenta Respetuosa", pt: "Vestimenta Respeitosa" },
      desc: {
        en: "Dress respectfully when visiting churches.",
        es: "Viste respetuosamente al visitar iglesias.",
        pt: "Vista-se de forma respeitosa ao visitar igrejas."
      }
    },
    {
      title: { en: "Extra Time", es: "Tiempo Adicional", pt: "Tempo Extra" },
      desc: {
        en: "Allow extra travel time during busy periods.",
        es: "Reserva tiempo adicional para los desplazamientos durante los períodos de mayor afluencia.",
        pt: "Reserve tempo extra para deslocamentos durante períodos movimentados."
      }
    },
    {
      title: { en: "Fontainhas Timing", es: "Visita Temprana", pt: "Visita Cedo" },
      desc: {
        en: "Visit Fontainhas early for a quieter experience.",
        es: "Visita Fontainhas temprano para disfrutar de una experiencia más tranquila.",
        pt: "Visite Fontainhas cedo para uma experiência mais tranquila."
      }
    }
  ],
  faqs: [
    {
      q: { en: "What is Panaji famous for?", es: "¿Por qué es famosa Panaji?", pt: "Pelo que Panaji é famosa?" },
      a: {
        en: "Panaji is famous for Fontainhas, Portuguese heritage, churches and the Mandovi River.",
        es: "Panaji es famosa por Fontainhas, su patrimonio portugués, iglesias y el río Mandovi.",
        pt: "Panaji é famosa por Fontainhas, seu patrimônio português, igrejas e o rio Mandovi."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "One to two days are enough for the main attractions.",
        es: "Uno o dos días son suficientes.",
        pt: "Um ou dois dias são suficientes."
      }
    },
    {
      q: { en: "Is Panaji good for families?", es: "¿Es Panaji buena para familias?", pt: "Panaji é boa para famílias?" },
      a: {
        en: "Yes, especially for families interested in culture and heritage.",
        es: "Sí, especialmente para familias interesadas en cultura y patrimonio.",
        pt: "Sim, especialmente para famílias interessadas em cultura e patrimônio."
      }
    },
    {
      q: { en: "Can Panaji and Old Goa be combined?", es: "¿Se pueden combinar Panaji y Old Goa?", pt: "Panaji e Old Goa podem ser combinadas?" },
      a: {
        en: "Yes, they can easily be visited on the same itinerary.",
        es: "Sí, pueden visitarse fácilmente en el mismo itinerario.",
        pt: "Sim, podem ser facilmente visitados no mesmo roteiro."
      }
    },
    {
      q: { en: "Is Panaji near North Goa beaches?", es: "¿Está Panaji cerca de las playas del norte?", pt: "Panaji fica perto das praias do norte?" },
      a: {
        en: "Yes, several North Goa beaches can be reached by road from Panaji.",
        es: "Sí, varias playas de North Goa son accesibles por carretera desde Panaji.",
        pt: "Sim, várias praias de North Goa podem ser alcançadas por estrada a partir de Panaji."
      }
    }
  ],
  hotels: [
    {
      name: "Vivanta Goa, Panaji",
      tier: "Luxury",
      desc: {
        en: "Premium city hotel offering comfortable rooms and convenient access to Panaji attractions.",
        es: "Hotel urbano premium con habitaciones cómodas y fácil acceso a las atracciones de Panaji.",
        pt: "Hotel urbano premium com quartos confortáveis e fácil acesso às atrações de Panaji."
      },
      image: ""
    },
    {
      name: "Novotel Goa Panjim",
      tier: "Premium",
      desc: {
        en: "Modern accommodation suitable for travellers seeking comfort in the city centre.",
        es: "Alojamiento moderno ideal para viajeros que buscan comodidad en la ciudad.",
        pt: "Hospedagem moderna ideal para viajantes que procuram conforto na cidade."
      },
      image: ""
    },
    {
      name: "The Crown Goa",
      tier: "Mid-range",
      desc: {
        en: "Central hotel option with convenient access to heritage and city attractions.",
        es: "Hotel céntrico con fácil acceso al patrimonio y las atracciones de la ciudad.",
        pt: "Hotel central com fácil acesso ao patrimônio e às atrações da cidade."
      },
      image: ""
    },
    {
      name: "The White Balcao",
      tier: "Boutique",
      desc: {
        en: "Boutique-style accommodation in the historic Fontainhas area.",
        es: "Alojamiento de estilo boutique en la histórica zona de Fontainhas.",
        pt: "Hospedagem de estilo boutique na histórica região de Fontainhas."
      },
      image: ""
    },
    {
      name: "Taj Cidade de Goa Horizon",
      tier: "Luxury",
      desc: {
        en: "Luxury seaside accommodation offering a premium coastal experience near Panaji.",
        es: "Alojamiento costero de lujo que ofrece una experiencia premium cerca de Panaji.",
        pt: "Hospedagem costeira de luxo que oferece uma experiência premium perto de Panaji."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Goan Fish Curry, Prawn Balchão, Chicken Cafreal, Pork Vindaloo and Bebinca.",
    es: "Pruebe el curry de pescado de Goa, Prawn Balchão, Chicken Cafreal, Pork Vindaloo y Bebinca.",
    pt: "Prove o curry de peixe de Goa, Prawn Balchão, Chicken Cafreal, Pork Vindaloo e Bebinca."
  },
  localFoodDishes: [
    {
      name: { en: "Goan Fish Curry", es: "Curry de Pescado de Goa", pt: "Curry de Peixe de Goa" },
      desc: {
        en: "Fish cooked in a coconut-based curry with traditional Goan spices.",
        es: "Pescado cocinado en un curry de coco con especias tradicionales de Goa.",
        pt: "Peixe preparado em curry à base de coco com especiarias tradicionais de Goa."
      }
    },
    {
      name: { en: "Prawn Balchão", es: "Prawn Balchão", pt: "Prawn Balchão" },
      desc: {
        en: "Spicy and tangy prawns prepared with a rich Goan masala.",
        es: "Gambas picantes y ácidas preparadas con un rico masala de Goa.",
        pt: "Camarões picantes e aromáticos preparados com um rico masala goês."
      }
    },
    {
      name: { en: "Chicken Cafreal", es: "Chicken Cafreal", pt: "Chicken Cafreal" },
      desc: {
        en: "Chicken prepared with green herbs and aromatic spices.",
        es: "Pollo preparado con hierbas verdes y especias aromáticas.",
        pt: "Frango preparado com ervas verdes e especiarias aromáticas."
      }
    },
    {
      name: { en: "Pork Vindaloo", es: "Pork Vindaloo", pt: "Pork Vindaloo" },
      desc: {
        en: "A famous Goan dish combining meat, vinegar, garlic and spices.",
        es: "Famoso plato de Goa que combina carne, vinagre, ajo y especias.",
        pt: "Famoso prato goês que combina carne, vinagre, alho e especiarias."
      }
    },
    {
      name: { en: "Bebinca", es: "Bebinca", pt: "Bebinca" },
      desc: {
        en: "Traditional layered dessert made with coconut milk, eggs and flour.",
        es: "Postre tradicional en capas elaborado con leche de coco, huevos y harina.",
        pt: "Sobremesa tradicional em camadas feita com leite de coco, ovos e farinha."
      }
    }
  ]
};

// Old Goa Details
const oldGoaDetails = {
  tagline: {
    en: "Old Goa is the historic heart of Goa's Portuguese-era heritage, famous for magnificent churches, basilicas and centuries-old monuments. It offers a fascinating journey through Goa's religious, architectural and colonial history.",
    es: "Old Goa es el corazón histórico del patrimonio portugués de Goa, famoso por sus magníficas iglesias, basílicas y monumentos centenarios. Ofrece un fascinante recorrido por la historia religiosa, arquitectónica y colonial de Goa.",
    pt: "Old Goa é o coração histórico do patrimônio português de Goa, famoso por suas magníficas igrejas, basílicas e monumentos centenários. Oferece uma fascinante viagem pela história religiosa, arquitetônica e colonial de Goa."
  },
  overview: {
    en: "Old Goa was once a major centre of Portuguese power in Asia and today preserves an exceptional collection of churches and religious monuments. The Basilica of Bom Jesus, Sé Cathedral and other historic churches create one of Goa's most important heritage landscapes. The area is ideal for travellers interested in architecture, history, religion, photography and culture.",
    es: "Old Goa fue uno de los principales centros del poder portugués en Asia y hoy conserva una extraordinaria colección de iglesias y monumentos religiosos. La Basílica del Buen Jesús, la Catedral de Sé y otras iglesias históricas forman uno de los paisajes patrimoniales más importantes de Goa.",
    pt: "Old Goa foi um importante centro do poder português na Ásia e hoje preserva uma extraordinária coleção de igrejas e monumentos religiosos. A Basílica do Bom Jesus, a Sé Catedral e outras igrejas históricas formam uma das paisagens patrimoniais mais importantes de Goa."
  },
  highlights: [
    {
      title: { en: "Basilica of Bom Jesus", es: "Basílica del Buen Jesús", pt: "Basílica do Bom Jesus" },
      desc: {
        en: "Discover one of Goa's most important historic churches.",
        es: "Descubre una de las iglesias históricas más importantes de Goa.",
        pt: "Conheça uma das igrejas históricas mais importantes de Goa."
      }
    },
    {
      title: { en: "Sé Cathedral", es: "Catedral de Sé", pt: "Sé Catedral" },
      desc: {
        en: "Admire its grand scale and historic architecture.",
        es: "Admira su impresionante arquitectura histórica.",
        pt: "Admire sua impressionante arquitetura histórica."
      }
    },
    {
      title: { en: "Church of St. Francis of Assisi", es: "Iglesia de San Francisco de Asís", pt: "Igreja de São Francisco de Assis" },
      desc: {
        en: "Discover historic religious art and architecture.",
        es: "Descubre arte religioso y arquitectura histórica.",
        pt: "Descubra arte religiosa e arquitetura histórica."
      }
    },
    {
      title: { en: "Historic Church Complex", es: "Complejo de Iglesias Históricas", pt: "Complexo de Igrejas Históricas" },
      desc: {
        en: "Explore a remarkable concentration of colonial-era religious monuments.",
        es: "Explora una extraordinaria concentración de monumentos religiosos coloniales.",
        pt: "Explore uma extraordinária concentração de monumentos religiosos coloniais."
      }
    },
    {
      title: { en: "Portuguese Heritage", es: "Patrimonio Portugués", pt: "Patrimônio Português" },
      desc: {
        en: "Experience centuries of Portuguese influence through architecture and religious history.",
        es: "Descubre siglos de influencia portuguesa a través de la arquitectura y la historia religiosa.",
        pt: "Conheça séculos de influência portuguesa através da arquitetura e história religiosa."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Basilica of Bom Jesus", es: "Visitar la Basílica del Buen Jesús", pt: "Visitar a Basílica do Bom Jesus" },
      desc: {
        en: "Explore the historic basilica and its religious heritage.",
        es: "Explora la basílica histórica y su patrimonio religioso.",
        pt: "Explore a basílica histórica e seu patrimônio religioso."
      }
    },
    {
      name: { en: "Visit Sé Cathedral", es: "Visitar la Catedral de Sé", pt: "Visitar a Sé Catedral" },
      desc: {
        en: "Admire its grand architecture and historic interiors.",
        es: "Admira su grandiosa arquitectura e interiores históricos.",
        pt: "Admire sua grandiosa arquitetura e interiores históricos."
      }
    },
    {
      name: { en: "Walk the Heritage Complex", es: "Pasear por el Complejo Histórico", pt: "Caminhar pelo Complexo Histórico" },
      desc: {
        en: "Explore several churches and historic structures on foot.",
        es: "Explora varias iglesias y estructuras históricas a pie.",
        pt: "Explore várias igrejas e estruturas históricas a pé."
      }
    },
    {
      name: { en: "Visit Archaeological Museum", es: "Visitar el Museo Arqueológico", pt: "Visitar o Museu Arqueológico" },
      desc: {
        en: "Discover artefacts and historical collections connected to Goa's past.",
        es: "Descubre objetos y colecciones relacionados con la historia de Goa.",
        pt: "Conheça artefatos e coleções relacionadas ao passado de Goa."
      }
    },
    {
      name: { en: "Combine with Panaji", es: "Combinar con Panaji", pt: "Combinar com Panaji" },
      desc: {
        en: "Visit Old Goa together with Panaji and Fontainhas for a complete heritage day.",
        es: "Combina Old Goa con Panaji y Fontainhas para una experiencia patrimonial completa.",
        pt: "Combine Old Goa com Panaji e Fontainhas para um dia completo de patrimônio."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Heritage Walking Tour", es: "Recorrido a Pie del Patrimonio", pt: "Caminhada pelo Patrimônio" },
      desc: {
        en: "Discover Old Goa's religious and architectural history.",
        es: "Descubre la historia religiosa y arquitectónica de Old Goa.",
        pt: "Conheça a história religiosa e arquitetônica de Old Goa."
      }
    },
    {
      title: { en: "Church Architecture Experience", es: "Experiencia de Arquitectura de Iglesias", pt: "Experiência com Arquitetura de Igrejas" },
      desc: {
        en: "Study Portuguese-era design, carvings and craftsmanship.",
        es: "Descubre el diseño, las tallas y la artesanía de la época portuguesa.",
        pt: "Observe o design, esculturas e artesanato da época portuguesa."
      }
    },
    {
      title: { en: "Photography Experience", es: "Experiencia de Fotografía", pt: "Experiência com Fotografia" },
      desc: {
        en: "Capture historic façades, interiors and heritage landscapes.",
        es: "Fotografía fachadas, interiores y paisajes históricos.",
        pt: "Fotografe fachadas, interiores e paisagens históricas."
      }
    },
    {
      title: { en: "Spiritual Heritage Experience", es: "Experiencia de Patrimonio Espiritual", pt: "Experiência de Patrimônio Espiritual" },
      desc: {
        en: "Enjoy the peaceful atmosphere of Goa's historic churches.",
        es: "Disfruta del ambiente tranquilo de las iglesias históricas de Goa.",
        pt: "Aprecie a atmosfera tranquila das igrejas históricas de Goa."
      }
    },
    {
      title: { en: "Goa History Experience", es: "Experiencia de Historia de Goa", pt: "Experiência com a História de Goa" },
      desc: {
        en: "Learn about Goa's Portuguese-era history and cultural development.",
        es: "Conoce la historia de Goa durante la época portuguesa y su evolución cultural.",
        pt: "Conheça a história de Goa durante o período português e sua evolução cultural."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Old Goa is located 10 km from Panaji, easily accessible by taxi, auto-rickshaw, or bus.",
      es: "Old Goa está situada a 10 km de Panaji.",
      pt: "Old Goa está localizada a 10 km de Panaji."
    },
    nearestAirport: "Dabolim Airport (GOI) / Mopa Airport (GOX)",
    nearestRailway: "Karmali Railway Station (KRMI)",
    transportOptions: "Taxis, Buses, Auto-rickshaws, Private Cars",
    distanceFromMajorCities: "Panaji (10 km), Margao (30 km)",
    recommendedStay: "Half a Day to One Day",
    avgTemp: "20°C - 33°C",
    currency: "INR",
    localLanguage: "Konkani, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe heritage complex. Dress codes apply in places of worship.",
      es: "Complejo histórico muy seguro.",
      pt: "Complexo histórico muito seguro."
    }
  },
  gettingAround: [
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Best within the heritage complex.",
        es: "La mejor opción para recorrer el complejo histórico.",
        pt: "A melhor opção para recorrer o complexo histórico."
      },
      recommended: true
    },
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Convenient for Old Goa and nearby attractions.",
        es: "Cómodo para visitar Old Goa y atracciones cercanas.",
        pt: "Conveniente para conhecer Old Goa e atrações próximas."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Ideal for combining Old Goa with Panaji.",
        es: "Ideal para combinar Old Goa con Panaji.",
        pt: "Ideal para combinar Old Goa com Panaji."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short local journeys.",
        es: "Útil para trayectos cortos.",
        pt: "Útil para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "Guided Tour",
      title: { en: "Guided Tour", es: "Visita Guiada", pt: "Visita Guiada" },
      desc: {
        en: "Best for travellers wanting historical context.",
        es: "La mejor opción para viajeros que desean contexto histórico.",
        pt: "A melhor opção para viajantes que desejam contexto histórico."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Dress Code", es: "Código de Vestimenta", pt: "Código de Vestimenta" },
      desc: {
        en: "Dress respectfully inside churches.",
        es: "Viste respetuosamente dentro de las iglesias.",
        pt: "Vista-se respeitosamente dentro das igrejas."
      }
    },
    {
      title: { en: "Silence", es: "Silencio", pt: "Silêncio" },
      desc: {
        en: "Maintain silence during religious services.",
        es: "Mantén silencio durante los servicios religiosos.",
        pt: "Mantenha silêncio durante os serviços religiosos."
      }
    },
    {
      title: { en: "Comfortable Shoes", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Wear comfortable shoes.",
        es: "Usa calzado cómodo.",
        pt: "Use calçados confortáveis."
      }
    },
    {
      title: { en: "Hydration", es: "Hidratación", pt: "Hidratação" },
      desc: {
        en: "Carry water and sun protection.",
        es: "Lleva agua y protección solar.",
        pt: "Leve água e proteção solar."
      }
    },
    {
      title: { en: "Photography Restrictions", es: "Restricciones de Fotos", pt: "Restrições de Fotos" },
      desc: {
        en: "Follow photography restrictions at individual sites.",
        es: "Respeta las restricciones de fotografía de cada lugar.",
        pt: "Respeite as restrições de fotografia de cada local."
      }
    }
  ],
  faqs: [
    {
      q: { en: "What is Old Goa famous for?", es: "¿Por qué es famosa Old Goa?", pt: "Pelo que Old Goa é famosa?" },
      a: {
        en: "Historic churches, basilicas and Portuguese-era heritage.",
        es: "Iglesias históricas, basílicas y patrimonio portugués.",
        pt: "Igrejas históricas, basílicas e patrimônio português."
      }
    },
    {
      q: { en: "How long should I spend here?", es: "¿Cuánto tiempo debo estar aquí?", pt: "Quanto tempo devo passar aqui?" },
      a: {
        en: "Half a day is enough for the major monuments; one day allows a slower visit.",
        es: "Medio día es suficiente; un día permite una visita más relajada.",
        pt: "Meio dia é suficiente; um dia permite uma visita mais tranquila."
      }
    },
    {
      q: { en: "Is Old Goa good for history lovers?", es: "¿Es buena para amantes de la historia?", pt: "Old Goa é boa para amantes da história?" },
      a: {
        en: "Yes, it is one of Goa's key heritage destinations.",
        es: "Sí, es uno de los principales destinos históricos de Goa.",
        pt: "Sim, é um dos principais destinos históricos de Goa."
      }
    },
    {
      q: { en: "Can Old Goa be visited from Panaji?", es: "¿Se puede visitar desde Panaji?", pt: "Pode ser visitada a partir de Panaji?" },
      a: {
        en: "Yes, it is an easy excursion from Panaji.",
        es: "Sí, es una excursión sencilla desde Panaji.",
        pt: "Sim, é um passeio fácil a partir de Panaji."
      }
    },
    {
      q: { en: "Is Old Goa family-friendly?", es: "¿Es adecuada para familias?", pt: "Old Goa é adequada para famílias?" },
      a: {
        en: "Yes, particularly for families interested in history and architecture.",
        es: "Sí, especialmente para familias interesadas en historia y arquitectura.",
        pt: "Sim, especialmente para famílias interessadas em história e arquitetura."
      }
    }
  ],
  hotels: [
    {
      name: "Old Goa Residency",
      tier: "Budget",
      desc: {
        en: "Convenient budget-oriented accommodation close to the heritage area.",
        es: "Alojamiento económico y conveniente cerca de la zona histórica.",
        pt: "Hospedagem econômica e conveniente perto da área histórica."
      },
      image: ""
    },
    {
      name: "DoubleTree by Hilton Goa – Panaji",
      tier: "Luxury",
      desc: {
        en: "Premium hotel convenient for exploring both Old Goa and Panaji.",
        es: "Hotel premium conveniente para explorar Old Goa y Panaji.",
        pt: "Hotel premium conveniente para explorar Old Goa e Panaji."
      },
      image: ""
    },
    {
      name: "Vivanta Goa, Panaji",
      tier: "Luxury",
      desc: {
        en: "Modern premium stay with easy access to nearby heritage attractions.",
        es: "Alojamiento moderno premium con fácil acceso a las atracciones históricas cercanas.",
        pt: "Hospedagem moderna premium com fácil acesso às atrações históricas próximas."
      },
      image: ""
    },
    {
      name: "The Fern Kadamba Hotel & Spa",
      tier: "Premium",
      desc: {
        en: "Comfortable accommodation located conveniently for Old Goa sightseeing.",
        es: "Alojamiento confortable y conveniente para visitar Old Goa.",
        pt: "Hospedagem confortável e conveniente para conhecer Old Goa."
      },
      image: ""
    },
    {
      name: "Heritage Guesthouses",
      tier: "Budget",
      desc: {
        en: "Smaller local properties can offer a more personal cultural experience.",
        es: "Las pequeñas propiedades locales pueden ofrecer una experiencia cultural más personal.",
        pt: "Pequenas propriedades locais podem oferecer uma experiência cultural mais pessoal."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Goan Fish Curry, Prawn Balchão, Chicken Cafreal, Pork Vindaloo and Bebinca.",
    es: "Pruebe el curry de pescado de Goa, Prawn Balchão, Chicken Cafreal, Pork Vindaloo y Bebinca.",
    pt: "Prove o curry de peixe de Goa, Prawn Balchão, Chicken Cafreal, Pork Vindaloo e Bebinca."
  },
  localFoodDishes: [
    {
      name: { en: "Goan Fish Curry", es: "Curry de Pescado de Goa", pt: "Curry de Peixe de Goa" },
      desc: {
        en: "Fish cooked in a coconut-based curry with traditional Goan spices.",
        es: "Pescado cocinado en un curry de coco con especias tradicionales de Goa.",
        pt: "Peixe preparado em curry à base de coco com especiarias tradicionais de Goa."
      }
    },
    {
      name: { en: "Prawn Balchão", es: "Prawn Balchão", pt: "Prawn Balchão" },
      desc: {
        en: "Spicy and tangy prawns prepared with a rich Goan masala.",
        es: "Gambas picantes y ácidas preparadas con un rico masala de Goa.",
        pt: "Camarões picantes e aromáticos preparados com um rico masala goês."
      }
    },
    {
      name: { en: "Chicken Cafreal", es: "Chicken Cafreal", pt: "Chicken Cafreal" },
      desc: {
        en: "Chicken prepared with green herbs and aromatic spices.",
        es: "Pollo preparado con hierbas verdes y especias aromáticas.",
        pt: "Frango preparado com ervas verdes e especiarias aromáticas."
      }
    },
    {
      name: { en: "Pork Vindaloo", es: "Pork Vindaloo", pt: "Pork Vindaloo" },
      desc: {
        en: "A famous Goan dish combining meat, vinegar, garlic and spices.",
        es: "Famoso plato de Goa que combina carne, vinagre, ajo y especias.",
        pt: "Famoso prato goês que combina carne, vinagre, alho e especiarias."
      }
    },
    {
      name: { en: "Bebinca", es: "Bebinca", pt: "Bebinca" },
      desc: {
        en: "Traditional layered dessert made with coconut milk, eggs and flour.",
        es: "Postre tradicional en capas elaborado con leche de coco, huevos y harina.",
        pt: "Sobremesa tradicional em camadas feita com leite de coco, ovos e farinha."
      }
    }
  ]
};

// South Goa Details
const southGoaDetails = {
  tagline: {
    en: "South Goa is known for quieter beaches, lush landscapes, relaxed coastal villages and premium resorts. It is ideal for couples, families and travellers looking for peaceful beach holidays, nature and wellness.",
    es: "South Goa es conocida por sus playas tranquilas, paisajes verdes, pueblos costeros relajados y resorts premium. Es ideal para parejas, familias y viajeros que buscan vacaciones tranquilas junto al mar, naturaleza y bienestar.",
    pt: "South Goa é conhecida por suas praias tranquilas, paisagens verdes, vilarejos costeiros relaxantes e resorts premium. É ideal para casais, famílias e viajantes que procuram férias tranquilas na praia, natureza e bem-estar."
  },
  overview: {
    en: "South Goa offers a slower and more peaceful side of Goa, with palm-lined beaches, coastal villages, lagoons and scenic landscapes. Beaches such as Palolem, Colva and Benaulim provide different experiences, from lively local beaches to peaceful stretches of sand. South Goa is particularly attractive for honeymooners, families, wellness travellers and anyone seeking a relaxed coastal escape.",
    es: "South Goa ofrece un lado más tranquilo de Goa, con playas bordeadas de palmeras, pueblos costeros, lagunas y paisajes naturales. Playas como Palolem, Colva y Benaulim ofrecen experiencias diferentes, desde zonas locales animadas hasta extensiones de arena más tranquilas.",
    pt: "South Goa oferece um lado mais tranquilo de Goa, com praias cercadas por coqueiros, vilarejos costeiros, lagoas e paisagens naturais. Praias como Palolem, Colva e Benaulim oferecem experiências diferentes, desde áreas mais animadas até trechos de areia tranquilos."
  },
  highlights: [
    {
      title: { en: "Palolem Beach", es: "Playa de Palolem", pt: "Praia de Palolem" },
      desc: {
        en: "Enjoy a scenic curved beach surrounded by greenery and peaceful coastal landscapes.",
        es: "Disfruta de una hermosa playa curva rodeada de vegetación y paisajes costeros tranquilos.",
        pt: "Aprecie uma bela praia curva cercada por vegetação e paisagens costeiras tranquilas."
      }
    },
    {
      title: { en: "Colva Beach", es: "Playa de Colva", pt: "Praia de Colva" },
      desc: {
        en: "Experience one of South Goa's best-known beaches with local restaurants and coastal activities.",
        es: "Descubre una de las playas más conocidas de South Goa con restaurantes locales y actividades costeras.",
        pt: "Conheça uma das praias mais conhecidas de South Goa, com restaurantes locais e atividades costeiras."
      }
    },
    {
      title: { en: "Benaulim Beach", es: "Playa de Benaulim", pt: "Praia de Benaulim" },
      desc: {
        en: "Relax on a peaceful beach known for its laid-back atmosphere.",
        es: "Relájate en una playa tranquila conocida por su ambiente relajado.",
        pt: "Relaxe em uma praia tranquila conhecida por sua atmosfera descontraída."
      }
    },
    {
      title: { en: "Cavelossim & Mobor", es: "Cavelossim y Mobor", pt: "Cavelossim e Mobor" },
      desc: {
        en: "Explore scenic coastal areas with premium resorts, waterways and beautiful landscapes.",
        es: "Explora zonas costeras con resorts premium, vías fluviales y hermosos paisajes.",
        pt: "Explore áreas costeiras com resorts premium, canais e belas paisagens."
      }
    },
    {
      title: { en: "Peaceful Coastal Lifestyle", es: "Estilo de Vida Costero Tranquilo", pt: "Estilo de Vida Costeiro Tranquilo" },
      desc: {
        en: "Enjoy slow mornings, beach walks, sunsets and relaxed dining.",
        es: "Disfruta de mañanas tranquilas, paseos por la playa, atardeceres y gastronomía relajada.",
        pt: "Desfrute de manhãs tranquilas, caminhadas na praia, pores do sol e refeições descontraídas."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Relax at Palolem", es: "Relajarse en Palolem", pt: "Relaxar em Palolem" },
      desc: {
        en: "Spend a peaceful day enjoying the beach and surrounding scenery.",
        es: "Pasa un día tranquilo disfrutando de la playa y sus paisajes.",
        pt: "Passe um dia tranquilo aproveitando a praia e seus arredores."
      }
    },
    {
      name: { en: "Explore Colva", es: "Explorar Colva", pt: "Explorar Colva" },
      desc: {
        en: "Discover the beach, local restaurants and nearby areas.",
        es: "Descubre la playa, restaurantes locales y zonas cercanas.",
        pt: "Explore a praia, restaurantes locais e áreas próximas."
      }
    },
    {
      name: { en: "Visit Benaulim", es: "Visitar Benaulim", pt: "Visitar Benaulim" },
      desc: {
        en: "Enjoy a quieter beach atmosphere away from busier areas.",
        es: "Disfruta de un ambiente más tranquilo lejos de las zonas concurridas.",
        pt: "Aproveite uma atmosfera mais tranquila longe das áreas movimentadas."
      }
    },
    {
      name: { en: "Explore Cavelossim", es: "Explorar Cavelossim", pt: "Explorar Cavelossim" },
      desc: {
        en: "Discover the beach, riverside scenery and resort areas.",
        es: "Descubre la playa, paisajes junto al río y zonas de resorts.",
        pt: "Explore a praia, paisagens ribeirinhas e áreas de resorts."
      }
    },
    {
      name: { en: "Enjoy a Sunset Walk", es: "Pasear al Atardecer", pt: "Caminhar no Pôr do Sol" },
      desc: {
        en: "Take a peaceful walk along the Arabian Sea during sunset.",
        es: "Da un paseo tranquilo junto al mar Arábigo durante el atardecer.",
        pt: "Faça uma caminhada tranquila junto ao Mar Arábico durante o pôr do sol."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Romantic Beach Escape", es: "Escapada Romántica a la Playa", pt: "Escapada Romântica na Praia" },
      desc: {
        en: "Enjoy sunsets, beach walks and peaceful resort stays.",
        es: "Disfruta de atardeceres, paseos y resorts tranquilos.",
        pt: "Desfrute de pores do sol, caminhadas e resorts tranquilos."
      }
    },
    {
      title: { en: "Luxury Coastal Experience", es: "Experiencia Costera de Lujo", pt: "Experiência Costeira de Luxo" },
      desc: {
        en: "Stay at premium resorts and enjoy wellness facilities.",
        es: "Alójate en resorts premium y disfruta de instalaciones de bienestar.",
        pt: "Hospede-se em resorts premium e aproveite instalações de bem-estar."
      }
    },
    {
      title: { en: "Sunset Experience", es: "Experiencia del Atardecer", pt: "Experiência do Pôr do Sol" },
      desc: {
        en: "Watch the sun set over the Arabian Sea.",
        es: "Observa el atardecer sobre el mar Arábigo.",
        pt: "Observe o pôr do sol sobre o Mar Arábico."
      }
    },
    {
      title: { en: "Goan Food Experience", es: "Experiencia Culinaria de Goa", pt: "Experiência Culinária de Goa" },
      desc: {
        en: "Explore traditional seafood and local Goan cuisine.",
        es: "Descubre mariscos y gastronomía tradicional de Goa.",
        pt: "Explore frutos do mar e culinária tradicional goesa."
      }
    },
    {
      title: { en: "Nature & Wellness Experience", es: "Experiencia de Naturaleza y Bienestar", pt: "Experiência de Natureza e Bem-estar" },
      desc: {
        en: "Combine beaches, greenery, wellness and peaceful surroundings.",
        es: "Combina playas, naturaleza, bienestar y tranquilidad.",
        pt: "Combine praias, natureza, bem-estar e tranquilidade."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "South Goa is served by Dabolim and Mopa Airports, with Madgaon station as a major rail head.",
      es: "Madgaon es la principal estación de tren de la región.",
      pt: "Madgaon é a principal estação de trem da região."
    },
    nearestAirport: "Dabolim Airport (GOI) / Mopa Airport (GOX)",
    nearestRailway: "Madgaon Junction Railway Station (MAO)",
    transportOptions: "Taxis, Private Cars, Scooters, Auto-rickshaws",
    distanceFromMajorCities: "Panaji (35 km), Vasco da Gama (25 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "21°C - 33°C",
    currency: "INR",
    localLanguage: "Konkani, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe coastal area. Pay attention to safety flags and lifeguards on beaches.",
      es: "Zona costera muy segura. Respete las banderas de seguridad.",
      pt: "Região costeira muito segura. Observe as bandeiras de segurança."
    }
  },
  gettingAround: [
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Best for exploring multiple beaches.",
        es: "La mejor opción para recorrer varias playas.",
        pt: "A melhor opção para explorar várias praias."
      },
      recommended: true
    },
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Convenient for transfers and sightseeing.",
        es: "Cómodo para traslados y visitas.",
        pt: "Conveniente para traslados e passeios."
      },
      recommended: true
    },
    {
      transportType: "Scooter",
      title: { en: "Scooter", es: "Scooter", pt: "Scooter" },
      desc: {
        en: "Popular for independent travel where legally permitted.",
        es: "Popular para recorrer por cuenta propia cuando esté permitido legalmente.",
        pt: "Popular para explorar de forma independente quando permitido legalmente."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for shorter journeys.",
        es: "Útil para trayectos más cortos.",
        pt: "Útil para trajetos mais curtos."
      },
      recommended: false
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Affordable for travel between towns.",
        es: "Económico para viajar entre ciudades.",
        pt: "Econômico para viajar entre cidades."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Peak Booking", es: "Reserva Anticipada", pt: "Reserve com Antecedência" },
      desc: {
        en: "Book beachfront accommodation early during peak season.",
        es: "Reserva alojamiento frente al mar con anticipación.",
        pt: "Reserve hospedagem à beira-mar com antecedência."
      }
    },
    {
      title: { en: "Sun Protection", es: "Protección Solar", pt: "Proteção Solar" },
      desc: {
        en: "Carry sunscreen and water.",
        es: "Lleva protector solar y agua.",
        pt: "Leve protetor solar e água."
      }
    },
    {
      title: { en: "Valuables Safety", es: "Seguridad de Objetos", pt: "Segurança de Objetos" },
      desc: {
        en: "Keep valuables secure at beaches.",
        es: "Mantén tus objetos de valor seguros en las playas.",
        pt: "Mantenha seus objetos de valor seguros nas praias."
      }
    },
    {
      title: { en: "Swim Warnings", es: "Seguridad en el Mar", pt: "Segurança no Mar" },
      desc: {
        en: "Follow beach safety and swimming advisories.",
        es: "Sigue las recomendaciones de seguridad y natación.",
        pt: "Siga as orientações de segurança e banho de mar."
      }
    },
    {
      title: { en: "Quiet Beaches", es: "Playas Tranquilas", pt: "Praias Tranquilas" },
      desc: {
        en: "Explore quieter beaches beyond the busiest tourist areas.",
        es: "Explora playas más tranquilas fuera de las zonas turísticas más concurrida.",
        pt: "Explore praias mais tranquilas além das áreas turísticas mais movimentadas."
      }
    }
  ],
  faqs: [
    {
      q: { en: "What is South Goa famous for?", es: "¿Por qué es famosa South Goa?", pt: "Pelo que South Goa é famosa?" },
      a: {
        en: "Quiet beaches, resorts, nature and relaxed holidays.",
        es: "Playas tranquilas, resorts, naturaleza y vacaciones relajadas.",
        pt: "Praias tranquilas, resorts, natureza e férias relaxantes."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Three to four days are ideal.",
        es: "Tres a cuatro días son ideales.",
        pt: "Três a quatro dias são ideais."
      }
    },
    {
      q: { en: "Is South Goa good for honeymoon?", es: "¿Es buena para luna de miel?", pt: "South Goa é boa para lua de mel?" },
      a: {
        en: "Yes, especially for couples seeking peaceful beaches and premium stays.",
        es: "Sí, especialmente para parejas que buscan playas tranquilas y alojamientos premium.",
        pt: "Sim, especialmente para casais que procuram praias tranquilas e hospedagens premium."
      }
    },
    {
      q: { en: "Is South Goa family-friendly?", es: "¿Es adecuada para familias?", pt: "South Goa é adequada para famílias?" },
      a: {
        en: "Yes, many beaches and resorts are suitable for families.",
        es: "Sí, muchas playas y resorts son adecuados para familias.",
        pt: "Sim, muitas praias e resorts são adequados para famílias."
      }
    },
    {
      q: { en: "Is South Goa quieter than North Goa?", es: "¿Es más tranquila que el norte?", pt: "South Goa é mais tranquila que o norte?" },
      a: {
        en: "Generally, many areas offer a more relaxed atmosphere.",
        es: "En general, muchas zonas ofrecen un ambiente más tranquilo.",
        pt: "Em geral, muitas áreas oferecem uma atmosfera mais tranquila."
      }
    }
  ],
  hotels: [
    {
      name: "ITC Grand Goa",
      tier: "Luxury",
      desc: {
        en: "Luxury resort offering a premium coastal escape.",
        es: "Resort de lujo para una experiencia costera premium.",
        pt: "Resort de luxo para uma experiência costeira premium."
      },
      image: ""
    },
    {
      name: "The Zuri White Sands, Goa Resort & Casino",
      tier: "Luxury",
      desc: {
        en: "Premium resort with extensive facilities and beach access.",
        es: "Resort premium con excelentes instalaciones y acceso a la playa.",
        pt: "Resort premium com excelentes instalações e acesso à praia."
      },
      image: ""
    },
    {
      name: "Beleza By The Beach",
      tier: "Premium",
      desc: {
        en: "Relaxed resort option near the South Goa coast.",
        es: "Resort tranquilo cerca de la costa de South Goa.",
        pt: "Resort tranquilo perto da costa de South Goa."
      },
      image: ""
    },
    {
      name: "Nanu Beach Resort & Spa",
      tier: "Mid-range",
      desc: {
        en: "Comfortable beach-oriented accommodation near Betalbatim.",
        es: "Alojamiento cómodo cerca de la playa en Betalbatim.",
        pt: "Hospedagem confortável perto da praia em Betalbatim."
      },
      image: ""
    },
    {
      name: "Novotel Goa Dona Sylvia Resort",
      tier: "Premium",
      desc: {
        en: "Premium resort option around Cavelossim.",
        es: "Resort premium en la zona de Cavelossim.",
        pt: "Resort premium na região de Cavelossim."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Goan Fish Curry, Prawn Balchão, Chicken Cafreal, Sorpotel and Bebinca.",
    es: "Pruebe el curry de pescado de Goa, Prawn Balchão, Chicken Cafreal, Sorpotel y Bebinca.",
    pt: "Prove o curry de peixe de Goa, Prawn Balchão, Chicken Cafreal, Sorpotel e Bebinca."
  },
  localFoodDishes: [
    {
      name: { en: "Goan Fish Curry", es: "Curry de Pescado de Goa", pt: "Curry de Peixe de Goa" },
      desc: {
        en: "Fish cooked in a coconut-based curry with traditional Goan spices.",
        es: "Pescado cocinado en un curry de coco con especias tradicionales de Goa.",
        pt: "Peixe preparado em curry à base de coco com especiarias tradicionais de Goa."
      }
    },
    {
      name: { en: "Prawn Balchão", es: "Prawn Balchão", pt: "Prawn Balchão" },
      desc: {
        en: "Spicy and tangy prawns prepared with a rich Goan masala.",
        es: "Gambas picantes y ácidas preparadas con un rico masala de Goa.",
        pt: "Camarões picantes e aromáticos preparados com um rico masala goês."
      }
    },
    {
      name: { en: "Chicken Cafreal", es: "Chicken Cafreal", pt: "Chicken Cafreal" },
      desc: {
        en: "Chicken prepared with green herbs and aromatic spices.",
        es: "Pollo preparado con hierbas verdes y especias aromáticas.",
        pt: "Frango preparado com ervas verdes e especiarias aromáticas."
      }
    },
    {
      name: { en: "Sorpotel", es: "Sorpotel", pt: "Sorpotel" },
      desc: {
        en: "Traditional Goan meat preparation with Portuguese influence.",
        es: "Preparación tradicional de carne con influencia portuguesa.",
        pt: "Preparação tradicional de carne com influência portuguesa."
      }
    },
    {
      name: { en: "Bebinca", es: "Bebinca", pt: "Bebinca" },
      desc: {
        en: "Traditional layered Goan dessert.",
        es: "Postre tradicional en capas.",
        pt: "Sobremesa tradicional em camadas."
      }
    }
  ]
};

// North Goa Details
const northGoaDetails = {
  tagline: {
    en: "North Goa is the energetic side of Goa, famous for lively beaches, cafés, nightlife, markets, forts and outdoor activities. From Baga and Calangute to Anjuna, Vagator and Arambol, each area offers a distinct atmosphere.",
    es: "North Goa es el lado más animado de Goa, famoso por sus playas, cafés, vida nocturna, mercados, fuertes y actividades al aire libre. Desde Baga y Calangute hasta Anjuna, Vagator y Arambol, cada zona ofrece un ambiente diferente.",
    pt: "North Goa é o lado mais animado de Goa, famoso por suas praias, cafés, vida noturna, mercados, fortes e atividades ao ar livre. De Baga e Calangute a Anjuna, Vagator e Arambol, cada área oferece uma atmosfera diferente."
  },
  overview: {
    en: "North Goa combines beaches, entertainment, heritage and adventure across a diverse coastline. Baga and Calangute offer energetic beach experiences, Anjuna is known for its creative and market culture, Vagator provides dramatic coastal scenery and Chapora Fort, while Arambol offers a more relaxed and bohemian atmosphere.",
    es: "North Goa combina playas, entretenimiento, patrimonio y aventura. Baga y Calangute ofrecen experiencias animadas, Anjuna destaca por sus mercados y cultura creativa, Vagator por sus paisajes costeros y el Fuerte de Chapora, mientras que Arambol ofrece un ambiente más relajado y bohemio.",
    pt: "North Goa combina praias, entretenimento, patrimônio e aventura. Baga e Calangute oferecem experiências animadas, Anjuna é conhecida por seus mercados e cultura criativa, Vagator por suas paisagens costeiras e Forte de Chapora, enquanto Arambol oferece uma atmosfera mais relaxada e boêmia."
  },
  highlights: [
    {
      title: { en: "Baga Beach", es: "Playa de Baga", pt: "Praia de Baga" },
      desc: {
        en: "Enjoy a lively beach environment with restaurants, activities and entertainment.",
        es: "Disfruta de una playa animada con restaurantes, actividades y entretenimiento.",
        pt: "Aproveite uma praia animada com restaurantes, atividades e entretenimento."
      }
    },
    {
      title: { en: "Calangute Beach", es: "Playa de Calangute", pt: "Praia de Calangute" },
      desc: {
        en: "Experience one of Goa's most popular beaches with shops and restaurants nearby.",
        es: "Descubre una de las playas más populares de Goa con tiendas y restaurantes cercanos.",
        pt: "Conheça uma das praias mais populares de Goa, com lojas e restaurantes próximos."
      }
    },
    {
      title: { en: "Vagator & Chapora", es: "Vagator y Chapora", pt: "Vagator e Chapora" },
      desc: {
        en: "Explore dramatic cliffs, beaches and the historic Chapora Fort.",
        es: "Explora acantilados, playas y el histórico Fuerte de Chapora.",
        pt: "Explore falésias, praias e o histórico Forte de Chapora."
      }
    },
    {
      title: { en: "Anjuna", es: "Anjuna", pt: "Anjuna" },
      desc: {
        en: "Discover beach cafés, markets and Goa's creative coastal culture.",
        es: "Descubre cafés de playa, mercados y la cultura costera creativa de Goa.",
        pt: "Descubra cafés de praia, mercados e a cultura costeira criativa de Goa."
      }
    },
    {
      title: { en: "Arambol", es: "Arambol", pt: "Arambol" },
      desc: {
        en: "Enjoy a relaxed coastal atmosphere with a distinctive bohemian character.",
        es: "Disfruta de un ambiente costero relajado con un marcado carácter bohemio.",
        pt: "Aproveite uma atmosfera costeira tranquila com um forte caráter boêmio."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Baga Beach", es: "Visitar la Playa de Baga", pt: "Visitar a Praia de Baga" },
      desc: {
        en: "Enjoy the beach, restaurants and coastal activities.",
        es: "Disfruta de la playa, restaurantes y actividades.",
        pt: "Aproveite a praia, restaurantes e atividades."
      }
    },
    {
      name: { en: "Explore Calangute", es: "Explorar Calangute", pt: "Explorar Calangute" },
      desc: {
        en: "Discover the beach, shops and local dining.",
        es: "Descubre la playa, tiendas y gastronomía local.",
        pt: "Explore a praia, lojas e gastronomia local."
      }
    },
    {
      name: { en: "Visit Chapora Fort", es: "Visitar el Fuerte de Chapora", pt: "Visitar o Forte de Chapora" },
      desc: {
        en: "Enjoy historic architecture and coastal views.",
        es: "Disfruta de arquitectura histórica y vistas costeras.",
        pt: "Aprecie a arquitetura histórica e as vistas costeiras."
      }
    },
    {
      name: { en: "Explore Anjuna", es: "Explorar Anjuna", pt: "Explorar Anjuna" },
      desc: {
        en: "Visit local markets, cafés and creative spaces.",
        es: "Visita mercados, cafés y espacios creativos.",
        pt: "Visite mercados, cafés e espaços criativos."
      }
    },
    {
      name: { en: "Watch Sunset at Vagator", es: "Ver el Atardecer en Vagator", pt: "Ver o Pôr do Sol em Vagator" },
      desc: {
        en: "Enjoy dramatic sunset views along the coast.",
        es: "Disfruta de espectaculares atardeceres junto a la costa.",
        pt: "Aprecie espetaculares pores do sol ao longo da costa."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Beach Experience", es: "Experiencia de Playa", pt: "Experiência de Praia" },
      desc: {
        en: "Enjoy North Goa's lively beaches and coastal atmosphere.",
        es: "Disfruta de las animadas playas y el ambiente costero.",
        pt: "Aproveite as praias animadas e a atmosfera costeira."
      }
    },
    {
      title: { en: "Nightlife & Entertainment Experience", es: "Vida Nocturna y Entretenimiento", pt: "Vida Noturna e Entretenimento" },
      desc: {
        en: "Discover restaurants, live entertainment and evening venues.",
        es: "Descubre restaurantes, entretenimiento y locales nocturnos.",
        pt: "Descubra restaurantes, entretenimento e locais noturnos."
      }
    },
    {
      title: { en: "Fort & Heritage Experience", es: "Experiencia de Fuertes y Patrimonio", pt: "Experiência com Fortes e Patrimônio" },
      desc: {
        en: "Combine Chapora and Aguada with coastal sightseeing.",
        es: "Combina Chapora y Aguada con visitas por la costa.",
        pt: "Combine Chapora e Aguada com passeios costeiros."
      }
    },
    {
      title: { en: "Anjuna Market Experience", es: "Experiencia del Mercado de Anjuna", pt: "Experiência no Mercado de Anjuna" },
      desc: {
        en: "Explore local handicrafts, clothing, souvenirs and lifestyle products.",
        es: "Explora artesanías, ropa, recuerdos y productos locales.",
        pt: "Explore artesanato, roupas, lembranças e produtos locais."
      }
    },
    {
      title: { en: "Sunset Café Experience", es: "Experiencia de Café al Atardecer", pt: "Experiência em Café no Pôr do Sol" },
      desc: {
        en: "Enjoy sunset views followed by relaxed coastal dining.",
        es: "Disfruta del atardecer seguido de una cena relajada junto a la costa.",
        pt: "Aprecie o pôr do sol seguido de uma refeição descontraída na costa."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "North Goa is easily reachable from Mopa Airport (closer) or Dabolim Airport, with good local taxi hubs.",
      es: "Mopa es el aeropuerto más cercano para las playas del norte.",
      pt: "Mopa é o aeroporto mais próximo para as praias do norte."
    },
    nearestAirport: "Manohar International Airport (GOX) / Dabolim Airport (GOI)",
    nearestRailway: "Thivim Railway Station (THVM) / Karmali (KRMI)",
    transportOptions: "Scooters, Taxis, Private Cars, Auto-rickshaws",
    distanceFromMajorCities: "Panaji (15 km), Mapusa (8 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "21°C - 33°C",
    currency: "INR",
    localLanguage: "Konkani, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Lively areas with high tourist traffic. Watch out for safety warnings on swimming and late-night transport.",
      es: "Zonas muy concurridas. Tenga precaución al nadar.",
      pt: "Regiões muito movimentadas. Cuidado ao nadar."
    }
  },
  gettingAround: [
    {
      transportType: "Scooter / Motorbike",
      title: { en: "Scooter / Motorbike", es: "Scooter / Motocicleta", pt: "Scooter / Motocicleta" },
      desc: {
        en: "Popular for independent exploration where legally permitted.",
        es: "Popular para recorrer por cuenta propia cuando esté permitido legalmente.",
        pt: "Popular para explorar de forma independente quando permitido legalmente."
      },
      recommended: true
    },
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Convenient for sightseeing and transfers.",
        es: "Cómodo para visitas y traslados.",
        pt: "Conveniente para passeios e traslados."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Comfortable for families and groups.",
        es: "Cómodo para familias y grupos.",
        pt: "Confortável para famílias e grupos."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short distances.",
        es: "Útil para distancias cortas.",
        pt: "Útil para curtas distâncias."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal within individual beach and market areas.",
        es: "Ideal en cada playa y mercado.",
        pt: "Ideal dentro de cada praia e mercado."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Crowd Warning", es: "Multitudes", pt: "Multidões" },
      desc: {
        en: "Popular beaches can become crowded during peak season.",
        es: "Las playas populares pueden estar muy concurridas durante la temporada alta.",
        pt: "As praias populares podem ficar muito movimentadas na alta temporada."
      }
    },
    {
      title: { en: "Water Safety", es: "Seguridad Acuática", pt: "Segurança na Água" },
      desc: {
        en: "Follow local swimming and water-activity safety instructions.",
        es: "Sigue las normas locales de seguridad para nadar y realizar actividades acuáticas.",
        pt: "Siga as regras locais de segurança para nadar e praticar atividades aquáticas."
      }
    },
    {
      title: { en: "Belongings", es: "Objetos de Valor", pt: "Objetos de Valor" },
      desc: {
        en: "Keep valuables secure in crowded areas.",
        es: "Mantén tus objetos de valor seguros en zonas concurridas.",
        pt: "Mantenha seus objetos de valor seguros em áreas movimentadas."
      }
    },
    {
      title: { en: "Night Transport", es: "Transporte Nocturno", pt: "Transporte Noturno" },
      desc: {
        en: "Arrange transport in advance for late-night travel.",
        es: "Organiza el transporte con anticipación para viajes nocturnos.",
        pt: "Organize o transporte com antecedência para viagens noturnas."
      }
    },
    {
      title: { en: "Respect Environment", es: "Respeto Ambiental", pt: "Respeito ao Meio Ambiente" },
      desc: {
        en: "Respect beaches, local communities and the environment.",
        es: "Respeta las playas, comunidades locales y el medio ambiente.",
        pt: "Respeite as praias, comunidades locais e o meio ambiente."
      }
    }
  ],
  faqs: [
    {
      q: { en: "What is North Goa famous for?", es: "¿Por qué es famosa North Goa?", pt: "Pelo que North Goa é famosa?" },
      a: {
        en: "Beaches, nightlife, markets, forts, cafés and outdoor activities.",
        es: "Playas, vida nocturna, mercados, fuertes, cafés y actividades al aire libre.",
        pt: "Praias, vida noturna, mercados, fortes, cafés e atividades ao ar livre."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Three to four days are ideal.",
        es: "Tres a cuatro días son ideales.",
        pt: "Três a quatro dias são ideais."
      }
    },
    {
      q: { en: "Is North Goa good for families?", es: "¿Es buena para familias?", pt: "North Goa é boa para famílias?" },
      a: {
        en: "Yes, especially around family-friendly beaches and resorts.",
        es: "Sí, especialmente alrededor de playas y resorts familiares.",
        pt: "Sim, especialmente em praias e resorts adequados para famílias."
      }
    },
    {
      q: { en: "Is North Goa good for nightlife?", es: "¿Es buena para la vida nocturna?", pt: "North Goa é boa para a vida noturna?" },
      a: {
        en: "Yes, it generally offers more nightlife options than South Goa.",
        es: "Sí, generalmente ofrece más opciones de vida nocturna que South Goa.",
        pt: "Sim, geralmente oferece mais opções de vida noturna do que South Goa."
      }
    },
    {
      q: { en: "Can North Goa and Panaji be combined?", es: "¿Se pueden combinar North Goa y Panaji?", pt: "North Goa e Panaji podem ser combinadas?" },
      a: {
        en: "Yes, they can easily be included in the same itinerary.",
        es: "Sí, pueden incluirse fácilmente en el mismo itinerario.",
        pt: "Sim, podem ser facilmente incluídos no mesmo roteiro."
      }
    }
  ],
  hotels: [
    {
      name: "Taj Fort Aguada Resort & Spa",
      tier: "Luxury",
      desc: {
        en: "Luxury coastal accommodation near the historic Aguada Fort area.",
        es: "Alojamiento costero de lujo cerca del histórico Fuerte de Aguada.",
        pt: "Hospedagem costeira de luxo perto do histórico Forte de Aguada."
      },
      image: ""
    },
    {
      name: "Hyatt Centric Candolim Goa",
      tier: "Premium",
      desc: {
        en: "Modern premium hotel in the Candolim area.",
        es: "Hotel moderno premium en la zona de Candolim.",
        pt: "Hotel moderno premium na região de Candolim."
      },
      image: ""
    },
    {
      name: "Le Méridien Goa, Calangute",
      tier: "Premium",
      desc: {
        en: "Premium accommodation close to Calangute's beach and attractions.",
        es: "Alojamiento premium cerca de la playa y atracciones de Calangute.",
        pt: "Hospedagem premium perto da praia e atrações de Calangute."
      },
      image: ""
    },
    {
      name: "W Goa",
      tier: "Luxury",
      desc: {
        en: "Luxury resort-style stay around Vagator with a premium coastal atmosphere.",
        es: "Alojamiento de lujo en la zona de Vagator con ambiente costero premium.",
        pt: "Hospedagem de luxo na região de Vagator com atmosfera costeira premium."
      },
      image: ""
    },
    {
      name: "La Cabana Beach & Spa",
      tier: "Mid-range",
      desc: {
        en: "Relaxed beach-oriented accommodation around the Ashwem/Mandrem area.",
        es: "Alojamiento tranquilo orientado a la playa en la zona de Ashwem/Mandrem.",
        pt: "Hospedagem tranquila próxima à praia na região de Ashwem/Mandrem."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Fish Thali, Goan Prawn Curry, Chicken Cafreal, Pork Vindaloo and Bebinca.",
    es: "Pruebe el Fish Thali, Goan Prawn Curry, Chicken Cafreal, Pork Vindaloo y Bebinca.",
    pt: "Prove o Fish Thali, Goan Prawn Curry, Chicken Cafreal, Pork Vindaloo e Bebinca."
  },
  localFoodDishes: [
    {
      name: { en: "Fish Thali", es: "Thali de Pescado", pt: "Thali de Peixe" },
      desc: {
        en: "Traditional meal with rice, fish curry and local sides.",
        es: "Comida tradicional con arroz, curry de pescado y acompañamientos.",
        pt: "Refeição tradicional com arroz, curry de peixe e acompanhamentos."
      }
    },
    {
      name: { en: "Goan Prawn Curry", es: "Curry de Gambas de Goa", pt: "Curry de Camarão de Goa" },
      desc: {
        en: "Prawns cooked in a fragrant coconut-based curry.",
        es: "Gambas cocinadas en un aromático curry de coco.",
        pt: "Camarões preparados em um aromático curry de coco."
      }
    },
    {
      name: { en: "Chicken Cafreal", es: "Chicken Cafreal", pt: "Chicken Cafreal" },
      desc: {
        en: "Chicken cooked with green herbs and spices.",
        es: "Pollo preparado con hierbas verdes y especias.",
        pt: "Frango preparado com ervas verdes e especiarias."
      }
    },
    {
      name: { en: "Pork Vindaloo", es: "Pork Vindaloo", pt: "Pork Vindaloo" },
      desc: {
        en: "Famous tangy and spicy Goan-Portuguese preparation.",
        es: "Famosa preparación picante y ácida de influencia portuguesa.",
        pt: "Famosa preparação picante e ácida de influência portuguesa."
      }
    },
    {
      name: { en: "Bebinca", es: "Bebinca", pt: "Bebinca" },
      desc: {
        en: "Traditional layered coconut-based dessert.",
        es: "Postre tradicional en capas a base de coco.",
        pt: "Sobremesa tradicional em camadas à base de coco."
      }
    }
  ]
};

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  const goaIdx = states.findIndex(s => s.slug === "goa");
  if (goaIdx !== -1) {
    console.log("Updating Goa cities in local file...");
    const goaState = states[goaIdx];
    goaState.cities = goaState.cities || [];
    
    // Update function helper
    const updateCity = (slug, details) => {
      const cityIdx = goaState.cities.findIndex(c => c.slug === slug);
      if (cityIdx !== -1) {
        goaState.cities[cityIdx] = { ...goaState.cities[cityIdx], ...details };
        console.log(`Updated city details: ${slug}`);
      } else {
        console.error(`City slug '${slug}' not found under Goa!`);
      }
    };

    updateCity("panaji", panajiDetails);
    updateCity("old-goa", oldGoaDetails);
    updateCity("south-goa", southGoaDetails);
    updateCity("north-goa", northGoaDetails);

    states[goaIdx] = goaState;
  } else {
    console.error("Goa state not found in states.json!");
  }

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for Goa cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const docRef = doc(firestore, "states", "goa");
    setDoc(docRef, states[goaIdx]).then(() => {
      console.log("🚀 SUCCESS: Remote Firestore 'goa' document successfully updated!");
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
