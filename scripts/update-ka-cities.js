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

// 1. BENGALURU DETAILS
const bengaluruDetails = {
  tagline: {
    en: "Bengaluru is Karnataka's vibrant capital, known for its technology industry, pleasant climate, beautiful gardens, historic landmarks, modern cafés and lively cultural scene.",
    es: "Bengaluru es la vibrante capital de Karnataka, conocida por su industria tecnológica, clima agradable, hermosos jardines, monumentos históricos, cafeterías modernas y animada escena cultural.",
    pt: "Bengaluru é a vibrante capital de Karnataka, conhecida por sua indústria tecnológica, clima agradável, belos jardins, monumentos históricos, cafés modernos e vida cultural movimentada."
  },
  overview: {
    en: "Bengaluru is one of India's most cosmopolitan cities, combining a globally connected technology industry with historic neighbourhoods, royal heritage and abundant green spaces. Visitors can explore Bangalore Palace, Vidhana Soudha, Cubbon Park and Lalbagh Botanical Garden while enjoying the city's cafés, restaurants, shopping districts and contemporary arts scene. Bengaluru is also an excellent starting point for exploring Karnataka's heritage and nature destinations.",
    es: "Bengaluru es una de las ciudades más cosmopolitas de India, donde una importante industria tecnológica se combina con barrios históricos, patrimonio real y numerosos espacios verdes. Los visitantes pueden explorar Bangalore Palace, Vidhana Soudha, Cubbon Park y Lalbagh Botanical Garden, además de disfrutar de cafeterías, restaurantes, zonas comerciales y una moderna escena artística.",
    pt: "Bengaluru é uma das cidades mais cosmopolitas da Índia, combinando uma importante indústria tecnológica com bairros históricos, patrimônio real e muitos espaços verdes. Os visitantes podem explorar Bangalore Palace, Vidhana Soudha, Cubbon Park e Lalbagh Botanical Garden, além de aproveitar cafés, restaurantes, áreas comerciais e uma cena artística contemporânea."
  },
  highlights: [
    {
      title: { en: "Bangalore Palace", es: "Palacio de Bangalore", pt: "Palácio de Bangalore" },
      desc: {
        en: "Grand historic palace inspired by European architecture.",
        es: "Gran palacio histórico inspirado en la arquitectura europea.",
        pt: "Grande palácio histórico inspirado na arquitetura europeia."
      }
    },
    {
      title: { en: "Lalbagh Botanical Garden", es: "Jardín Botánico Lalbagh", pt: "Jardim Botânico Lalbagh" },
      desc: {
        en: "Famous botanical garden with diverse plants and landscapes.",
        es: "Famoso jardín botánico con gran diversidad de plantas.",
        pt: "Famoso jardim botânico com grande diversidade de plantas."
      }
    },
    {
      title: { en: "Cubbon Park", es: "Cubbon Park", pt: "Cubbon Park" },
      desc: {
        en: "Large green space in the heart of the city.",
        es: "Extenso parque verde en el corazón de la ciudad.",
        pt: "Extenso parque verde no coração da cidade."
      }
    },
    {
      title: { en: "Vidhana Soudha", es: "Vidhana Soudha", pt: "Vidhana Soudha" },
      desc: {
        en: "Impressive landmark showcasing Neo-Dravidian architecture.",
        es: "Impresionante edificio gubernamental de arquitectura neodravídica.",
        pt: "Impressionante edifício governamental de arquitetura neodravidiana."
      }
    },
    {
      title: { en: "Church Street", es: "Church Street", pt: "Church Street" },
      desc: {
        en: "Popular area for cafés, restaurants, shopping and nightlife.",
        es: "Calle peatonal popular por sus cafés, tiendas y vida nocturna.",
        pt: "Rua de pedestres popular por seus cafés, lojas e vida noturna."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Bangalore Palace", es: "Explorar el Palacio de Bangalore", pt: "Explorar o Palácio de Bangalore" },
      desc: {
        en: "Explore Bangalore Palace to see royal galleries and grand wooden interiors.",
        es: "Explora las salas y galerías de arte del palacio real.",
        pt: "Explore as salas e galerias de arte do palácio real."
      }
    },
    {
      name: { en: "Lalbagh Garden Walk", es: "Pasear por Lalbagh", pt: "Caminhar por Lalbagh" },
      desc: {
        en: "Walk through Lalbagh Botanical Garden and see the historic Glass House.",
        es: "Pasea por el jardín botánico y ve el invernadero de cristal.",
        pt: "Caminhe pelo jardim botânico e veja o palácio de cristal."
      }
    },
    {
      name: { en: "Relax at Cubbon Park", es: "Relajarse en Cubbon Park", pt: "Relaxar no Cubbon Park" },
      desc: {
        en: "Enjoy peaceful walks and museum visits inside the lush Cubbon Park grounds.",
        es: "Disfruta del parque y los museos en el corazón de la ciudad.",
        pt: "Desfrute do parque e dos museus no coração da cidade."
      }
    },
    {
      name: { en: "Visit Vidhana Soudha", es: "Visitar Vidhana Soudha", pt: "Visitar o Vidhana Soudha" },
      desc: {
        en: "Visit the grand legislative building to see its imposing Neo-Dravidian facade.",
        es: "Visita la fachada monumental del palacio legislativo.",
        pt: "Visite a fachada monumental do palácio legislativo."
      }
    },
    {
      name: { en: "Explore Cafés & Shopping", es: "Explorar Cafeterías y Compras", pt: "Explorar Cafés e Compras" },
      desc: {
        en: "Explore Bengaluru's famous craft breweries, coffee shops, and shopping streets.",
        es: "Explora la animada cultura de cafés, cervecerías y tiendas.",
        pt: "Explore a vibrante cultura de cafés, cervejarias e lojas."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Kempegowda International Airport provides extensive domestic and international flights. KSR Bengaluru City connects with main national rail networks.",
      es: "Bengaluru es accesible por el aeropuerto internacional, tren o carretera.",
      pt: "Bengaluru é acessível pelo aeroporto internacional, trem ou estrada."
    },
    nearestAirport: "Kempegowda International Airport (BLR)",
    nearestRailway: "KSR Bengaluru City Railway Station (SBC)",
    transportOptions: "Metro, Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Mysuru (145 km), Coorg (250 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "16°C - 34°C",
    currency: "INR",
    localLanguage: "Kannada & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and modern metropolis. Plan travel to avoid heavy road traffic.",
      es: "Metrópolis muy segura.",
      pt: "Metrópole muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Metro",
      title: { en: "Namma Metro", es: "Metro de Bengaluru", pt: "Metrô de Bengaluru" },
      desc: {
        en: "Clean and fast metro transit connecting east-west and north-south lines.",
        es: "Metro rápido y limpio.",
        pt: "Metrô rápido e limpo."
      },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "Convenient app cab services inside Bengaluru city limits.",
        es: "Taxis cómodos dentro de la ciudad.",
        pt: "Táxis confortáveis dentro da cidade."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short local transfers between neighbourhoods.",
        es: "Útil para distancias cortas.",
        pt: "Útil para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "BMTC Bus",
      title: { en: "BMTC City Bus", es: "Autobús BMTC", pt: "Ônibus BMTC" },
      desc: {
        en: "Extensive city bus system connecting all areas (including airport routes).",
        es: "Autobuses urbanos muy frecuentes.",
        pt: "Ônibus urbanos muito frequentes."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Best around compact pedestrian quarters like Church Street and Indiranagar lanes.",
        es: "Apropiado en zonas peatonales como Church Street.",
        pt: "Apropriado em áreas de pedestres como a Church Street."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Traffic Planning", es: "Evitar Tráfico", pt: "Evitar Trânsito" },
      desc: {
        en: "Plan sightseeing around traffic conditions.",
        es: "Organiza tus visitas según las condiciones del tráfico.",
        pt: "Organize seus passeios de acordo com o trânsito."
      }
    },
    {
      title: { en: "Use Metro", es: "Uso del Metro", pt: "Uso do Metrô" },
      desc: {
        en: "Use the metro where it is convenient to save travel time.",
        es: "Usa el metro para ahorrar tiempo en tus trayectos.",
        pt: "Use o metrô para economizar tempo em seus trajetos."
      }
    },
    {
      title: { en: "Light Jacket", es: "Ropa de Abrigo", pt: "Roupas de Frio" },
      desc: {
        en: "Carry a light jacket because evenings can be pleasant and cool.",
        es: "Lleva una chaqueta ligera, las noches pueden ser frescas.",
        pt: "Leve um casaco leve, as noites podem ser frescas."
      }
    },
    {
      title: { en: "Local Food", es: "Comida Local", pt: "Comida Local" },
      desc: {
        en: "Explore local cafés and traditional South Indian restaurants.",
        es: "Prueba la gastronomía tradicional del sur de India.",
        pt: "Experimente a culinária tradicional do sul da Índia."
      }
    },
    {
      title: { en: "Peak Hours", es: "Horas Punta", pt: "Horários de Pico" },
      desc: {
        en: "Keep additional travel time during peak hours.",
        es: "Reserva tiempo adicional durante las horas de mayor congestión.",
        pt: "Reserve um tempo extra durante os horários de maior movimento."
      }
    }
  ],
  hotels: [
    {
      name: "The Leela Palace Bengaluru",
      tier: "Luxury",
      desc: {
        en: "Luxury heritage-inspired accommodation with grand South Indian style gardens.",
        es: "Alojamiento de lujo de estilo clásico con jardines hermosos.",
        pt: "Hospedagem de luxo em estilo clássico com belos jardins."
      },
      image: ""
    },
    {
      name: "Taj West End",
      tier: "Luxury",
      desc: {
        en: "Historic luxury hotel surrounded by lush heritage trees and lawns.",
        es: "Hotel histórico de lujo rodeado de zonas verdes.",
        pt: "Hotel histórico de luxo cercado por áreas verdes."
      },
      image: ""
    },
    {
      name: "The Oberoi Bengaluru",
      tier: "Luxury",
      desc: {
        en: "Premium city-centre stay with private balconies overlooking gardens.",
        es: "Alojamiento céntrico premium con hermosas vistas.",
        pt: "Hospedagem central premium com belas vistas."
      },
      image: ""
    },
    {
      name: "ITC Gardenia",
      tier: "Luxury",
      desc: {
        en: "Luxury hotel in a central location near UB City shopping complex.",
        es: "Hotel céntrico de lujo cerca del complejo UB City.",
        pt: "Hotel central de luxo perto do complexo UB City."
      },
      image: ""
    },
    {
      name: "Shangri-La Bengaluru",
      tier: "Premium",
      desc: {
        en: "Premium modern accommodation with panoramic city view pools.",
        es: "Hotel moderno de categoría superior con excelentes servicios.",
        pt: "Hotel moderno de categoria superior com excelentes serviços."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Masala Dosa, Bisi Bele Bath, Ragi Mudde, Benne Dosa and Mysore Pak.",
    es: "Pruebe Masala Dosa, Bisi Bele Bath, Ragi Mudde, Benne Dosa y Mysore Pak.",
    pt: "Prove Masala Dosa, Bisi Bele Bath, Ragi Mudde, Benne Dosa e Mysore Pak."
  },
  localFoodDishes: [
    {
      name: { en: "Masala Dosa", es: "Masala Dosa", pt: "Masala Dosa" },
      desc: {
        en: "Crispy rice crepe filled with spiced potato mash and served with chutneys.",
        es: "Crepe de arroz crujiente relleno de patatas condimentadas.",
        pt: "Crepe de arroz crocante recheado com batatas temperadas."
      }
    },
    {
      name: { en: "Bisi Bele Bath", es: "Bisi Bele Bath", pt: "Bisi Bele Bath" },
      desc: {
        en: "Traditional hot dish combining rice, lentils, vegetables and special spices.",
        es: "Plato tradicional picante de arroz, verduras y lentejas.",
        pt: "Prato tradicional picante de arroz, vegetais e lentilhas."
      }
    },
    {
      name: { en: "Ragi Mudde", es: "Ragi Mudde", pt: "Ragi Mudde" },
      desc: {
        en: "Healthy finger millet flour dough balls served with traditional sambar.",
        es: "Bolas tradicionales elaboradas con harina de mijo ragi.",
        pt: "Bolas tradicionais preparadas com farinha de painço ragi."
      }
    },
    {
      name: { en: "Benne Dosa", es: "Benne Dosa", pt: "Benne Dosa" },
      desc: {
        en: "Famous crispy dosa prepared with generous butter toppings, originating from Davanagere.",
        es: "Dosa crujiente cocinada con mantequilla tradicional.",
        pt: "Dosa crocante preparada com manteiga tradicional."
      }
    },
    {
      name: { en: "Mysore Pak", es: "Mysore Pak", pt: "Mysore Pak" },
      desc: {
        en: "Traditional sweet made of gram flour, ghee and sugar.",
        es: "Dulce tradicional elaborado con harina de garbanzo, ghee y azúcar.",
        pt: "Doce tradicional preparado com farinha de grão-de-bico, ghee e açúcar."
      }
    }
  ],
  bestTime: {
    en: "October to February is generally the most comfortable period for sightseeing, although Bengaluru can be visited throughout the year.",
    es: "De octubre a febrero suele ser el período más agradable para hacer turismo, aunque Bengaluru puede visitarse durante todo el año.",
    pt: "De outubro a fevereiro geralmente é o período mais confortável para passeios, embora Bengaluru possa ser visitada durante todo o ano."
  },
  faqs: [
    {
      q: { en: "What is Bengaluru famous for?", es: "¿Por qué es famoso Bengaluru?", pt: "Pelo que Bengaluru é famoso?" },
      a: {
        en: "Bengaluru is famous for technology, gardens, cafés, pleasant weather and its modern urban culture.",
        es: "Bengaluru es famoso por la tecnología, sus jardines, cafeterías, clima agradable y cultura urbana moderna.",
        pt: "Bengaluru é famoso por tecnologia, jardins, cafés, clima agradável e cultura urbana moderna."
      }
    },
    {
      q: { en: "How many days are enough for Bengaluru?", es: "¿Cuántos days son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are suitable for exploring the city's major attractions.",
        es: "2–3 días son adecuados para conocer las principales atracciones.",
        pt: "2–3 dias são adequados para conhecer as principais atrações."
      }
    },
    {
      q: { en: "Is Bengaluru good for families?", es: "¿Es adecuada para familias?", pt: "Bengaluru é adequada para famílias?" },
      a: {
        en: "Yes, the city has parks, museums, palaces and family-friendly attractions.",
        es: "Sí, cuenta con parques, museos, palacios y atracciones familiares.",
        pt: "Sim, possui parques, museus, palácios e atrações para famílias."
      }
    },
    {
      q: { en: "Is Bengaluru expensive for tourists?", es: "¿Es cara para los turistas?", pt: "Bengaluru é cara para turistas?" },
      a: {
        en: "Bengaluru offers accommodation, dining and activities across different budgets.",
        es: "Ofrece alojamiento, restaurantes y actividades para diferentes presupuestos.",
        pt: "A cidade oferece hospedagem, restaurantes e atividades para diferentes orçamentos."
      }
    },
    {
      q: { en: "Can Bengaluru be combined with Mysuru?", es: "¿Se puede combinar con Mysuru?", pt: "Pode ser combinada com Mysuru?" },
      a: {
        en: "Yes, Bengaluru and Mysuru are commonly combined in Karnataka itineraries.",
        es: "Sí, ambos destinos se combinan fácilmente en itinerarios por Karnataka.",
        pt: "Sim, os dois destinos combinam facilmente em roteiros por Karnataka."
      }
    }
  ]
};

// 2. MYSURU DETAILS
const mysuruDetails = {
  tagline: {
    en: "Mysuru is a royal heritage city in Karnataka, famous for its magnificent palace, traditional culture, colourful markets, gardens, yoga heritage and Mysore silk.",
    es: "Mysuru es una ciudad de patrimonio real en Karnataka, famosa por su magnífico palacio, cultura tradicional, mercados coloridos, jardines, tradición del yoga y seda de Mysore.",
    pt: "Mysuru é uma cidade de patrimônio real em Karnataka, famosa por seu magnífico palácio, cultura tradicional, mercados coloridos, jardins, tradição do yoga e seda de Mysore."
  },
  overview: {
    en: "Mysuru, formerly known as Mysore, is one of South India's most elegant heritage destinations. The city is closely associated with the Wadiyar dynasty and is dominated by the spectacular Mysore Palace. Visitors can explore Chamundi Hill, St. Philomena's Church, Devaraja Market and beautiful gardens while discovering Mysuru's traditions of handicrafts, silk, sandalwood and yoga. The city is especially vibrant during the annual Dasara celebrations.",
    es: "Mysuru, anteriormente conocida como Mysore, es uno de los destinos patrimoniales más elegantes del sur de India. La ciudad está estrechamente vinculada a la dinastía Wadiyar y destaca por el espectacular Mysore Palace. Los visitantes pueden explorar Chamundi Hill, St. Philomena's Church, Devaraja Market y hermosos jardines, además de conocer las tradiciones de seda, sándalo, artesanía y yoga.",
    pt: "Mysuru, anteriormente conhecida como Mysore, é um dos destinos históricos mais elegantes do sul da Índia. A cidade está profundamente ligada à dinastia Wadiyar e é dominada pelo espetacular Mysore Palace. Os visitantes podem explorar Chamundi Hill, St. Philomena's Church, Devaraja Market e belos jardins, além de conhecer as tradições de seda, sândalo, artesanato e yoga."
  },
  highlights: [
    {
      title: { en: "Mysore Palace", es: "Palacio de Mysore", pt: "Palácio de Mysore" },
      desc: {
        en: "Magnificent royal residence and city landmark displaying Indo-Saracenic style.",
        es: "Palacio monumental y símbolo de la ciudad de estilo indo-sarraceno.",
        pt: "Palácio monumental e símbolo da cidade em estilo indo-sarraceno."
      }
    },
    {
      title: { en: "Chamundi Hill", es: "Chamundi Hill", pt: "Chamundi Hill" },
      desc: {
        en: "Sacred hill offering panoramic views of Mysuru city and forests.",
        es: "Colina sagrada con hermosas vistas panorámicas.",
        pt: "Colina sagrada com belas vistas panorâmicas."
      }
    },
    {
      title: { en: "Devaraja Market", es: "Mercado Devaraja", pt: "Mercado Devaraja" },
      desc: {
        en: "Colourful traditional market selling flowers, spices and sandalwood.",
        es: "Mercado tradicional colorido con flores, especias y sándalo.",
        pt: "Mercado tradicional colorido com flores, especiarias e sândalo."
      }
    },
    {
      title: { en: "St. Philomena's Church", es: "Iglesia de Santa Filomena", pt: "Igreja de Santa Filomena" },
      desc: {
        en: "Striking Gothic-style church, one of India's tallest churches.",
        es: "Impresionante iglesia de arquitectura gótica.",
        pt: "Impressionante igreja de arquitetura gótica."
      }
    },
    {
      title: { en: "Brindavan Gardens", es: "Jardines Brindavan", pt: "Jardins Brindavan" },
      desc: {
        en: "Famous landscaped gardens near Mysuru with musical fountain light shows.",
        es: "Famosos jardines con espectáculo de fuentes y luces.",
        pt: "Famosos jardins com show de fontes e luzes."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Mysore Palace", es: "Explorar el Palacio de Mysore", pt: "Explorar o Palácio de Mysore" },
      desc: {
        en: "Walk inside the royal chambers and admire the paintings and chandeliers.",
        es: "Recorre las salas reales y admira las pinturas del palacio.",
        pt: "Caminhe pelas salas reais e admire as pinturas do palácio."
      }
    },
    {
      name: { en: "Visit Chamundi Hill", es: "Visitar Chamundi Hill", pt: "Visitar o Chamundi Hill" },
      desc: {
        en: "Explore the Chamundeshwari Temple and see the giant Nandi monolith sculpture.",
        es: "Visita el templo de la colina y la escultura monolítica de Nandi.",
        pt: "Visite o templo da colina e a escultura monolítica de Nandi."
      }
    },
    {
      name: { en: "Explore Devaraja Market", es: "Explorar el Mercado Devaraja", pt: "Explorar o Mercado Devaraja" },
      desc: {
        en: "Walk through colorful lanes of flowers, perfumes, fruits, and incense.",
        es: "Recorre los pasillos coloridos de flores, frutas e inciensos.",
        pt: "Explore os corredores coloridos de flores, frutas e incensos."
      }
    },
    {
      name: { en: "Walk through Brindavan Gardens", es: "Pasear por los Jardines Brindavan", pt: "Passear nos Jardins Brindavan" },
      desc: {
        en: "Walk around the terrace layouts and watch the evening musical fountain show.",
        es: "Disfruta de las fuentes iluminadas y el espectáculo musical nocturno.",
        pt: "Desfrute das fontes iluminadas e do show musical noturno."
      }
    },
    {
      name: { en: "Shop Mysore Specialties", es: "Comprar Especialidades", pt: "Comprar Especialidades" },
      desc: {
        en: "Shop for authentic Mysore Silk sarees, sandalwood carvings, and sweets.",
        es: "Compra saris de seda auténticos de Mysore y artesanías.",
        pt: "Compre saris de seda legítimos de Mysore e artesanato."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Mysuru is connected by railway services to Bangalore, or road transfers via the Expressway from Bengaluru Airport (145 km away).",
      es: "Mysuru es accesible por carretera o tren desde Bangalore.",
      pt: "Mysuru é acessível por estrada ou trem a partir de Bangalore."
    },
    nearestAirport: "Kempegowda Airport (BLR) in Bengaluru / Mysuru Airport",
    nearestRailway: "Mysuru Junction (MYS)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Bengaluru (145 km), Ooty (125 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "17°C - 33°C",
    currency: "INR",
    localLanguage: "Kannada & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe heritage destination. Dress appropriately at temple locations.",
      es: "Ciudad histórica muy segura.",
      pt: "Cidade histórica muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short routes around markets and central heritage buildings.",
        es: "Útil para distancias cortas.",
        pt: "Útil para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "Convenient app cab services inside Mysuru city limits.",
        es: "Taxis cómodos dentro de la ciudad.",
        pt: "Táxis confortáveis dentro da cidade."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Affordable public bus options linking central town with Chamundi Hill.",
        es: "Autobuses locales que cubren la ciudad.",
        pt: "Ônibus locais que cobrem a cidade."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Recommended for day trips to Srirangapatna and Somnathpur temples.",
        es: "Recomendado para visitar templos y alrededores.",
        pt: "Recomendado para visitar templos e arredores."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Excellent around the immediate pedestrian areas of Mysore Palace.",
        es: "Ideal para recorrer el casco histórico a pie.",
        pt: "Ideal para explorar o centro histórico a pé."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Early Palace", es: "Visitas Tempranas", pt: "Passeios Cedo" },
      desc: {
        en: "Visit Mysore Palace early to avoid afternoon crowds.",
        es: "Visita el Palacio de Mysore temprano para evitar multitudes.",
        pt: "Visite o Palácio de Mysore cedo para evitar multidões."
      }
    },
    {
      title: { en: "Illumination", es: "Iluminación Nocturna", pt: "Iluminação Noturna" },
      desc: {
        en: "Check palace illumination timings before planning an evening visit.",
        es: "Verifica los horarios de iluminación del palacio antes de ir.",
        pt: "Verifique os horários de iluminação do palácio antes de ir."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado Cómodo", pt: "Calçados" },
      desc: {
        en: "Carry comfortable footwear for walks and temple steps.",
        es: "Lleva calzado cómodo para las cuestas y escaleras.",
        pt: "Use calçados confortáveis para subidas e escadas."
      }
    },
    {
      title: { en: "Mysuru Sweets", es: "Dulces Típicos", pt: "Doces Típicos" },
      desc: {
        en: "Try authentic Mysuru sweets like Mysore Pak and local cuisine.",
        es: "Prueba el dulce tradicional Mysore Pak y la comida local.",
        pt: "Prove o doce tradicional Mysore Pak e a culinária local."
      }
    },
    {
      title: { en: "Dasara Season", es: "Época de Dasara", pt: "Época de Dasara" },
      desc: {
        en: "Book accommodation early during Dasara festival season.",
        es: "Reserva tu hotel con anticipación durante la fiesta de Dasara.",
        pt: "Reserve seu hotel com antecedência durante a festa de Dasara."
      }
    }
  ],
  hotels: [
    {
      name: "Radisson Blu Plaza Hotel Mysore",
      tier: "Luxury",
      desc: {
        en: "Premium modern hotel with comfortable rooms, pool and views of Chamundi Hills.",
        es: "Hotel moderno de lujo cerca de los centros de interés.",
        pt: "Hotel moderno de luxo perto das principais atrações."
      },
      image: ""
    },
    {
      name: "Royal Orchid Metropole",
      tier: "Luxury",
      desc: {
        en: "Historic heritage accommodation with colonial design and balconies.",
        es: "Alojamiento histórico de estilo colonial y jardines.",
        pt: "Hospedagem histórica em estilo colonial e jardins."
      },
      image: ""
    },
    {
      name: "The Windflower Resorts & Spa",
      tier: "Premium",
      desc: {
        en: "Peaceful resort experience offering spacious villas and spa.",
        es: "Resort tranquilo con spa y cómodas villas.",
        pt: "Resort tranquilo com spa e confortáveis chalés."
      },
      image: ""
    },
    {
      name: "Grand Mercure Mysore",
      tier: "Premium",
      desc: {
        en: "Premium city hotel located close to central heritage spots.",
        es: "Hotel premium con estilo clásico e instalaciones modernas.",
        pt: "Hotel premium com estilo clássico e instalações modernas."
      },
      image: ""
    },
    {
      name: "Southern Star Mysore",
      tier: "Premium",
      desc: {
        en: "Convenient upscale stay with large gardens and pool.",
        es: "Cómodo hotel de categoría superior con piscina y jardines.",
        pt: "Confortável hotel de categoria superior com piscina e jardins."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Mysore Masala Dosa, Mysore Pak, Ragi Mudde, Mysore Churumuri and Mysore Bonda.",
    es: "Pruebe Mysore Masala Dosa, Mysore Pak, Ragi Mudde, Mysore Churumuri y Mysore Bonda.",
    pt: "Prove Mysore Masala Dosa, Mysore Pak, Ragi Mudde, Mysore Churumuri e Mysore Bonda."
  },
  localFoodDishes: [
    {
      name: { en: "Mysore Masala Dosa", es: "Mysore Masala Dosa", pt: "Mysore Masala Dosa" },
      desc: {
        en: "Crispy rice crepe smeared with hot red chutney, filled with potato mash.",
        es: "Crepe de arroz crujiente untado con salsa roja picante.",
        pt: "Crepe de arroz crocante untado com molho vermelho picante."
      }
    },
    {
      name: { en: "Mysore Pak", es: "Mysore Pak", pt: "Mysore Pak" },
      desc: {
        en: "Traditional sweet made of gram flour, ghee and sugar.",
        es: "Dulce tradicional elaborado con harina de garbanzo, ghee y azúcar.",
        pt: "Doce tradicional preparado com farinha de grão-de-bico, ghee e açúcar."
      }
    },
    {
      name: { en: "Ragi Mudde", es: "Ragi Mudde", pt: "Ragi Mudde" },
      desc: {
        en: "Healthy finger millet flour dough balls served with hot local sambar.",
        es: "Bolas de harina de mijo ragi servidas con sambar.",
        pt: "Bolas de farinha de painço ragi servidas com sambar."
      }
    },
    {
      name: { en: "Mysore Churumuri", es: "Mysore Churumuri", pt: "Mysore Churumuri" },
      desc: {
        en: "Spiced puffed rice snack mixed with raw mango, onions and grated carrots.",
        es: "Aperitivo de arroz inflado picante con mango verde.",
        pt: "Petisco de arroz inflado apimentado com manga verde."
      }
    },
    {
      name: { en: "Mysore Bonda", es: "Mysore Bonda", pt: "Mysore Bonda" },
      desc: {
        en: "Crispy fried dumpling made of black gram batter, spices and coconut chunks.",
        es: "Buñuelo frito crujiente elaborado con lentejas y especias.",
        pt: "Bolinho frito crocante preparado com lentilhas e especiarias."
      }
    }
  ],
  bestTime: {
    en: "October to February is generally ideal for sightseeing. September to October can be especially interesting for travellers who want to experience the Dasara season.",
    es: "De octubre a febrero es generalmente ideal para hacer turismo. Septiembre y octubre pueden ser especialmente interesantes para vivir la temporada de Dasara.",
    pt: "De outubro a fevereiro geralmente é ideal para passeios. Setembro e outubro podem ser especialmente interessantes para quem deseja conhecer a temporada de Dasara."
  },
  faqs: [
    {
      q: { en: "What is Mysuru famous for?", es: "¿Por qué es famosa Mysuru?", pt: "Pelo que Mysuru é famosa?" },
      a: {
        en: "Mysuru is famous for its palace, Dasara celebrations, silk, sandalwood and traditional cuisine.",
        es: "Mysuru es famoso por su palacio, las celebraciones de Dasara, la seda, el sándalo y la gastronomía tradicional.",
        pt: "Mysuru é famoso por seu palácio, celebrações de Dasara, seda, sândalo e culinária tradicional."
      }
    },
    {
      q: { en: "How many days are enough for Mysuru?", es: "¿Cuántos days son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are ideal for exploring the main attractions.",
        es: "2–3 días son ideales para explorar las principales atracciones.",
        pt: "2–3 dias são ideais para explorar as principais atrações."
      }
    },
    {
      q: { en: "Is Mysuru good for families?", es: "¿Es adecuada para familias?", pt: "Mysuru é adequada para famílias?" },
      a: {
        en: "Yes, the city has palaces, gardens, markets and cultural attractions for families.",
        es: "Sí, cuenta con palacios, jardines, mercados y atracciones culturales.",
        pt: "Sim, possui palácios, jardins, mercados e atrações culturais."
      }
    },
    {
      q: { en: "What is Mysore Palace famous for?", es: "¿Por qué destaca el palacio?", pt: "Por que o palácio se destaca?" },
      a: {
        en: "It is famous for its grand Indo-Saracenic architecture, royal interiors and cultural heritage.",
        es: "Es famoso por su arquitectura indo-sarracena, interiores reales y patrimonio cultural.",
        pt: "É famoso por sua arquitetura indo-sarracena, interiores reais e patrimônio cultural."
      }
    },
    {
      q: { en: "Can Mysuru be visited from Bengaluru?", es: "¿Se puede visitar desde Bengaluru?", pt: "Pode ser visitada a partir de Bengaluru?" },
      a: {
        en: "Yes, Mysuru is a popular addition to a Bengaluru itinerary.",
        es: "Sí, es una incorporación popular a un itinerario por Bengaluru.",
        pt: "Sim, é uma combinação popular em roteiros por Bengaluru."
      }
    }
  ]
};

// 3. HAMPI DETAILS
const hampiDetails = {
  tagline: {
    en: "Hampi is a spectacular UNESCO World Heritage destination in Karnataka, known for the ruins of the Vijayanagara Empire, ancient temples, massive boulders and dramatic landscapes.",
    es: "Hampi es un espectacular destino declarado Patrimonio Mundial de la UNESCO en Karnataka, famoso por las ruinas del Imperio Vijayanagara, templos antiguos, enormes rocas y paisajes impresionantes.",
    pt: "Hampi é um espetacular destino reconhecido como Patrimônio Mundial da UNESCO em Karnataka, famoso pelas ruínas do Império Vijayanagara, templos antigos, enormes formações rochosas e paisagens impressionantes."
  },
  overview: {
    en: "Hampi is one of India's most extraordinary archaeological and cultural landscapes. Once the capital of the powerful Vijayanagara Empire, the region is filled with monumental temples, royal complexes, ancient markets and stone structures spread across a dramatic landscape of granite boulders and the Tungabhadra River. The Virupaksha Temple, Vittala Temple and Stone Chariot are among its most famous attractions. Hampi is ideal for history lovers, photographers, architecture enthusiasts and adventure-minded travellers.",
    es: "Hampi es uno de los paisajes arqueológicos y culturales más extraordinarios de India. Antigua capital del poderoso Imperio Vijayanagara, la región está llena de templos monumentales, complejos reales, antiguos mercados y estructuras de piedra rodeadas de enormes formaciones de granito y el río Tungabhadra. El templo Virupaksha, el templo Vittala y el Stone Chariot son algunas de sus principales atracciones.",
    pt: "Hampi é uma das paisagens arqueológicas e culturais mais extraordinárias da Índia. Antiga capital do poderoso Império Vijayanagara, a região é repleta de templos monumentais, complexos reais, antigos mercados e estruturas de pedra espalhadas por uma paisagem de enormes rochas de granito e pelo rio Tungabhadra. O Templo Virupaksha, o Templo Vittala e o Stone Chariot estão entre as principais atrações."
  },
  highlights: [
    {
      title: { en: "Virupaksha Temple", es: "Templo Virupaksha", pt: "Templo Virupaksha" },
      desc: {
        en: "Historic temple and one of Hampi's most important active religious landmarks.",
        es: "Templo histórico activo y uno de los principales monumentos.",
        pt: "Templo histórico ativo e um dos principais monumentos."
      }
    },
    {
      title: { en: "Vittala Temple", es: "Templo Vittala", pt: "Templo Vittala" },
      desc: {
        en: "Famous for its architectural details, musical pillars, and Stone Chariot.",
        es: "Famoso por sus columnas musicales y detalles arquitectónicos.",
        pt: "Famoso por suas colunas musicais e detalhes arquitetônicos."
      }
    },
    {
      title: { en: "Stone Chariot", es: "Stone Chariot", pt: "Stone Chariot" },
      desc: {
        en: "Iconic symbol of Hampi carved in granite stone.",
        es: "Monumento icónico de Hampi tallado en granito.",
        pt: "Monumento icônico de Hampi esculpido em granito."
      }
    },
    {
      title: { en: "Hemakuta Hill", es: "Colina Hemakuta", pt: "Colina Hemakuta" },
      desc: {
        en: "Excellent hilltop viewpoint over the ancient temple ruins.",
        es: "Colina con excelentes vistas panorámicas sobre las ruinas.",
        pt: "Colina com excelentes vistas panorâmicas sobre as ruínas."
      }
    },
    {
      title: { en: "Royal Enclosure", es: "Recinto Real", pt: "Recinto Real" },
      desc: {
        en: "Historic remains of the Vijayanagara palace complex and platforms.",
        es: "Ruinas del palacio real y plataformas históricas.",
        pt: "Ruínas do palácio real e plataformas históricas."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Virupaksha Temple", es: "Explorar el Templo Virupaksha", pt: "Explorar o Templo Virupaksha" },
      desc: {
        en: "Explore the ancient temple corridors, shrines, and towering gateway.",
        es: "Explora los santuarios y el gopuram de este templo activo.",
        pt: "Explore os santuários e o gopuram deste templo ativo."
      }
    },
    {
      name: { en: "Visit Vittala & Stone Chariot", es: "Visitar Vittala y Stone Chariot", pt: "Visitar Vittala e Stone Chariot" },
      desc: {
        en: "Explore the carved pillars and photograph the famous Stone Chariot.",
        es: "Admira las columnas talladas y fotografía el Stone Chariot.",
        pt: "Admire as colunas esculpidas e fotografe o Stone Chariot."
      }
    },
    {
      name: { en: "Sunrise/Sunset on Hill", es: "Ver el Atardecer en Colina", pt: "Pôr do sol na Colina" },
      desc: {
        en: "Climb Hemakuta Hill or Matanga Hill to enjoy beautiful sunsets over the ruins.",
        es: "Sube a las colinas para ver vistas espectaculares al atardecer.",
        pt: "Suba as colinas para ver vistas espetaculares ao pôr do sol."
      }
    },
    {
      name: { en: "Explore Royal Enclosure", es: "Explorar el Recinto Real", pt: "Explorar o Recinto Real" },
      desc: {
        en: "Explore the ancient structures, step well, and Queen's Bath ruins.",
        es: "Explora el pozo escalonado y el Baño de la Reina.",
        pt: "Explore o poço escalonado e as ruínas do Banho da Rainha."
      }
    },
    {
      name: { en: "Walk or Cycle the Landscape", es: "Caminar o Ir en Bici", pt: "Caminhar ou Ir de Bicicleta" },
      desc: {
        en: "Rent a bicycle to explore the vast spread of monuments and riverside boulder layouts.",
        es: "Alquila una bicicleta para recorrer las amplias ruinas.",
        pt: "Alugue uma bicicleta para percorrer as amplas ruínas."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Hospet (Hosapete) railway junction is the main train link. Local taxis and public buses connect with Bangalore and Hyderabad highways.",
      es: "Hampi es accesible por la estación de tren de Hospet.",
      pt: "Hampi é acessível pela estação de trem de Hospet."
    },
    nearestAirport: "Jindal Vijayanagar Airport (VDY) / Hubballi Airport (HBX)",
    nearestRailway: "Hosapete Junction (HPT)",
    transportOptions: "Bicycles, Scooters, Auto-rickshaws, Taxis",
    distanceFromMajorCities: "Bengaluru (340 km), Hyderabad (380 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "18°C - 38°C",
    currency: "INR",
    localLanguage: "Kannada & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe heritage destination. Take care when climbing slippery boulders.",
      es: "Sitio histórico muy seguro.",
      pt: "Local histórico muito seguro."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for traveling between separate monument zones across Hampi.",
        es: "Rickshaws cómodos para ir de un grupo a otro.",
        pt: "Autorriquixás convenientes para ir de um grupo a outro."
      },
      recommended: true
    },
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Convenient for sightseeing tours in warmer afternoons.",
        es: "Cómodo para visitas turísticas por la tarde.",
        pt: "Conveniente para passeios turísticos à tarde."
      },
      recommended: true
    },
    {
      transportType: "Bicycle",
      title: { en: "Rental Bicycle", es: "Alquiler de Bici", pt: "Aluguel de Bicicleta" },
      desc: {
        en: "Highly popular and affordable option for exploring heritage pathways.",
        es: "Opción muy popular y económica para recorrer las ruinas.",
        pt: "Opção muito popular e barata para explorar as ruínas."
      },
      recommended: true
    },
    {
      transportType: "Scooter",
      title: { en: "Rental Scooter", es: "Alquiler de Moto", pt: "Aluguel de Moto" },
      desc: {
        en: "Useful for crossing the river and exploring the Sanapur Lake countryside.",
        es: "Útil al otro lado del río y embalses.",
        pt: "Útil no outro lado do rio e represas."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Excellent way to explore individual temple grounds and riverside hills.",
        es: "Excelente para recorrer los templos y los cerros de roca.",
        pt: "Excelente para caminhar pelos templos e morros de pedra."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Early Sightseeing", es: "Comienzo Temprano", pt: "Comece Cedo" },
      desc: {
        en: "Start sightseeing early because afternoons can be hot.",
        es: "Comienza las visitas temprano por la mañana para evitar el calor.",
        pt: "Comece os passeios cedo pela manhã para evitar o calor."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado Cómodo", pt: "Calçados" },
      desc: {
        en: "Wear comfortable walking shoes.",
        es: "Usa calzado cómodo para caminar entre las rocas.",
        pt: "Use calçados confortáveis para caminhar entre as pedras."
      }
    },
    {
      title: { en: "Sun & Water", es: "Sol y Agua", pt: "Sol e Água" },
      desc: {
        en: "Carry plenty of water and sun protection.",
        es: "Lleva abundante agua y protección solar.",
        pt: "Leve bastante água e proteção solar."
      }
    },
    {
      title: { en: "Rules", es: "Conservación", pt: "Conservação" },
      desc: {
        en: "Respect the heritage site's preservation rules.",
        es: "Respeta las reglas de conservación del sitio arqueológico.",
        pt: "Respeite as regras de conservação do sítio arqueológico."
      }
    },
    {
      title: { en: "Guide", es: "Guías Oficiales", pt: "Guias Credenciados" },
      desc: {
        en: "Hire a knowledgeable guide for a deeper understanding of Hampi's history.",
        es: "Contrata un guía oficial para conocer la historia detallada.",
        pt: "Contrate um guia credenciado para conhecer a história detalhada."
      }
    }
  ],
  hotels: [
    {
      name: "Evolve Back Hampi",
      tier: "Luxury",
      desc: {
        en: "Luxury heritage-inspired resort with royal Vijayanagara palace layouts.",
        es: "Resort de lujo inspirado en el diseño del palacio real.",
        pt: "Resort de luxo inspirado no design do palácio real."
      },
      image: ""
    },
    {
      name: "Hampi's Boulder Resort",
      tier: "Premium",
      desc: {
        en: "Unique nature-focused accommodation located along the Tungabhadra river rocks.",
        es: "Alojamiento único de naturaleza junto al río y las rocas.",
        pt: "Hospedagem única integrada à natureza junto ao rio e às pedras."
      },
      image: ""
    },
    {
      name: "Clarks Inn Hampi",
      tier: "Premium",
      desc: {
        en: "Comfortable hotel located close to the main ASI museum and ruins.",
        es: "Cómodo hotel situado cerca de las ruinas.",
        pt: "Confortável hotel localizado próximo às ruínas."
      },
      image: ""
    },
    {
      name: "Hyatt Place Hampi",
      tier: "Luxury",
      desc: {
        en: "Modern premium option located in Vidyanagar township close to Hampi.",
        es: "Hotel moderno de categoría superior con excelentes servicios.",
        pt: "Hotel moderno de categoria superior com excelentes serviços."
      },
      image: ""
    },
    {
      name: "Heritage Resort Hampi",
      tier: "Premium",
      desc: {
        en: "Peaceful resort-style stay offering independent cottages and pool.",
        es: "Resort tranquilo con piscina y cómodas cabañas.",
        pt: "Resort tranquilo com piscina e confortáveis chalés."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Bisi Bele Bath, Jolada Rotti, Ragi Mudde, Obbattu and South Indian Thali.",
    es: "Pruebe Bisi Bele Bath, Jolada Rotti, Ragi Mudde, Obbattu y Thali del Sur.",
    pt: "Prove Bisi Bele Bath, Jolada Rotti, Ragi Mudde, Obbattu e Thali do Sul."
  },
  localFoodDishes: [
    {
      name: { en: "Bisi Bele Bath", es: "Bisi Bele Bath", pt: "Bisi Bele Bath" },
      desc: {
        en: "Hot lentil rice dish prepared with vegetables, tamarind and special spices.",
        es: "Plato picante de arroz, verduras y lentejas.",
        pt: "Prato picante de arroz, vegetais e lentilhas."
      }
    },
    {
      name: { en: "Jolada Rotti", es: "Jolada Rotti", pt: "Jolada Rotti" },
      desc: {
        en: "Traditional unleavened flatbread made of jowar flour, popular in Karnataka.",
        es: "Pan plano tradicional hecho de harina de sorgo.",
        pt: "Pão achatado tradicional feito com farinha de sorgo."
      }
    },
    {
      name: { en: "Ragi Mudde", es: "Ragi Mudde", pt: "Ragi Mudde" },
      desc: {
        en: "Nutritious cooked ragi flour balls served with spiced local sambar.",
        es: "Bolas de mijo ragi tradicionales servidas con sambar.",
        pt: "Bolas de ragi tradicional servidas com sambar."
      }
    },
    {
      name: { en: "Obbattu", es: "Obbattu", pt: "Obbattu" },
      desc: {
        en: "Sweet flatbread stuffed with a sweet mixture of lentils, cardamom and jaggery.",
        es: "Pan dulce plano relleno de lentejas y jaggery.",
        pt: "Pão doce achatado recheado com lentilhas e jaggery."
      }
    },
    {
      name: { en: "South Indian Thali", es: "Thali del Sur", pt: "Thali do Sul" },
      desc: {
        en: "Traditional meal plate serving rice, sambar, rasam, curd and vegetables.",
        es: "Plato tradicional con arroz, sambar, verduras y yogur.",
        pt: "Prato tradicional com arroz, sambar, vegetais e iogurte."
      }
    }
  ],
  bestTime: {
    en: "October to February is generally the best period for exploring Hampi comfortably. The monsoon can make the landscape greener but may affect some outdoor activities.",
    es: "De octubre a febrero suele ser el mejor período para explorar Hampi cómodamente. El monzón hace que el paisaje sea más verde, pero puede afectar algunas actividades al aire libre.",
    pt: "De outubro a fevereiro geralmente é o melhor período para explorar Hampi confortavelmente. A temporada de monções deixa a paisagem mais verde, mas pode afetar algumas atividades ao ar livre."
  },
  faqs: [
    {
      q: { en: "What is Hampi famous for?", es: "¿Por qué es famosa Hampi?", pt: "Pelo que Hampi é famosa?" },
      a: {
        en: "Hampi is famous for the ruins of the Vijayanagara Empire, ancient temples and dramatic boulder landscapes.",
        es: "Hampi es famoso por las ruinas del Imperio Vijayanagara, sus antiguos templos y paisajes de enormes rocas.",
        pt: "Hampi é famoso pelas ruínas do Império Vijayanagara, antigos templos e paisagens de grandes formações rochosas."
      }
    },
    {
      q: { en: "How many days are enough for Hampi?", es: "¿Cuántos days son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are ideal for exploring the main heritage areas.",
        es: "2–3 días son ideales para explorar las principales zonas históricas.",
        pt: "2–3 dias são ideais para explorar as principais áreas históricas."
      }
    },
    {
      q: { en: "Is Hampi suitable for families?", es: "¿Es adecuada para familias?", pt: "Hampi é adequada para famílias?" },
      a: {
        en: "Yes, although visitors should be prepared for considerable walking and outdoor sightseeing.",
        es: "Sí, aunque hay que estar preparado para caminar bastante y realizar actividades al aire libre.",
        pt: "Sim, embora seja necessário estar preparado para bastante caminhada e passeios ao ar livre."
      }
    },
    {
      q: { en: "Is Hampi a UNESCO World Heritage Site?", es: "¿Es Patrimonio de la UNESCO?", pt: "É Patrimônio da UNESCO?" },
      a: {
        en: "Yes, the Group of Monuments at Hampi is a UNESCO World Heritage Site.",
        es: "Sí, el Grupo de Monumentos de Hampi está reconocido por la UNESCO.",
        pt: "Sim, o Grupo de Monumentos de Hampi é reconhecido pela UNESCO."
      }
    },
    {
      q: { en: "What is the most famous monument in Hampi?", es: "¿Monumento más famoso?", pt: "Monumento mais famoso?" },
      a: {
        en: "The Vittala Temple and its Stone Chariot are among Hampi's most iconic monuments.",
        es: "El templo Vittala y su Stone Chariot están entre los monumentos más emblemáticos.",
        pt: "O Templo Vittala e seu Stone Chariot estão entre os monumentos mais emblemáticos."
      }
    }
  ]
};

// 4. COORG DETAILS
const coorgDetails = {
  tagline: {
    en: "Coorg, officially Kodagu, is a beautiful hill region in Karnataka famous for coffee plantations, misty hills, waterfalls, forests, Kodava culture and peaceful countryside.",
    es: "Coorg, oficialmente Kodagu, es una hermosa región montañosa de Karnataka famosa por sus plantaciones de café, colinas cubiertas de niebla, cascadas, bosques, cultura Kodava y paisajes tranquilos.",
    pt: "Coorg, oficialmente Kodagu, é uma bela região montanhosa de Karnataka famosa por suas plantações de café, colinas cobertas de neblina, cachoeiras, florestas, cultura Kodava e paisagens tranquilas."
  },
  overview: {
    en: "Coorg is one of Karnataka's most scenic nature destinations, surrounded by coffee estates, evergreen forests, rolling hills and waterfalls. The region is known for its distinctive Kodava culture, traditional cuisine and warm hospitality. Visitors can explore Abbey Falls, Raja's Seat, Mandalpatti and coffee plantations, while nearby attractions such as Dubare and Nagarhole offer opportunities for wildlife and nature experiences. Coorg is particularly popular with couples, families, photographers and travellers seeking a peaceful escape.",
    es: "Coorg es uno de los destinos naturales más pintorescos de Karnataka, rodeado de plantaciones de café, bosques, colinas y cascadas. La región es conocida por su distintiva cultura Kodava, gastronomía tradicional y hospitalidad. Los visitantes pueden explorar Abbey Falls, Raja's Seat, Mandalpatti y plantaciones de café, mientras que lugares cercanos como Dubare y Nagarhole ofrecen experiencias de naturaleza y vida silvestre.",
    pt: "Coorg é um dos destinos naturais mais bonitos de Karnataka, cercado por plantações de café, florestas, colinas e cachoeiras. A região é conhecida por sua distinta cultura Kodava, culinária tradicional e hospitalidade. Os visitantes podem explorar Abbey Falls, Raja's Seat, Mandalpatti e plantações de café, enquanto destinos próximos como Dubare e Nagarhole oferecem experiências de natureza e vida selvagem."
  },
  highlights: [
    {
      title: { en: "Coffee Plantations", es: "Plantaciones de Café", pt: "Plantações de Café" },
      desc: {
        en: "Experience Coorg's famous coffee-growing landscape and processing.",
        es: "Disfruta de las plantaciones de café y conoce el proceso de elaboración.",
        pt: "Aproveite as plantações de café e conheça o processo de fabricação."
      }
    },
    {
      title: { en: "Abbey Falls", es: "Abbey Falls", pt: "Abbey Falls" },
      desc: {
        en: "Scenic waterfall surrounded by spice gardens and greenery.",
        es: "Hermosa cascada rodeada de vegetación y plantaciones de especias.",
        pt: "Bela cachoeira cercada por vegetação e plantações de especiarias."
      }
    },
    {
      title: { en: "Raja's Seat", es: "Raja's Seat", pt: "Raja's Seat" },
      desc: {
        en: "Beautiful viewpoint over the hills, mist and valleys.",
        es: "Mirador espectacular sobre las colinas y valles.",
        pt: "Mirante espetacular sobre as colinas e vales."
      }
    },
    {
      title: { en: "Mandalpatti", es: "Mandalpatti", pt: "Mandalpatti" },
      desc: {
        en: "Popular highland viewpoint with dramatic mountains.",
        es: "Punto de montaña con espectaculares paisajes y niebla.",
        pt: "Ponto de montanha com espetaculares paisagens e neblina."
      }
    },
    {
      title: { en: "Dubare Elephant Camp", es: "Campamento Dubare", pt: "Acampamento Dubare" },
      desc: {
        en: "Nature and wildlife experience near the Kaveri river banks.",
        es: "Experiencia de naturaleza junto a los elefantes y el río.",
        pt: "Experiência integrada à natureza com elefantes à beira-rio."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Coffee Plantation", es: "Visitar Plantación de Café", pt: "Visitar Fazenda de Chá" },
      desc: {
        en: "Walk through coffee estates to learn about harvesting arabica and robusta grains.",
        es: "Recorre las plantaciones de café y conoce su cosecha.",
        pt: "Caminhe pelas plantações de café e conheça sua colheita."
      }
    },
    {
      name: { en: "Explore Abbey Falls", es: "Explorar Abbey Falls", pt: "Explorar o Abbey Falls" },
      desc: {
        en: "Walk down steps to view the waterfall from the hanging bridge.",
        es: "Camina hasta el puente colgante para ver la cascada.",
        pt: "Caminhe até a ponte pênsil para ver a cachoeira."
      }
    },
    {
      name: { en: "Sunset at Raja's Seat", es: "Atardecer en Raja's Seat", pt: "Pôr do sol no Raja's Seat" },
      desc: {
        en: "Enjoy beautiful sunset views over misty green hillsides.",
        es: "Disfruta de las vistas al atardecer sobre las colinas.",
        pt: "Desfrute das vistas ao pôr do sol sobre as colinas."
      }
    },
    {
      name: { en: "Trip to Mandalpatti", es: "Excursión a Mandalpatti", pt: "Passeio a Mandalpatti" },
      desc: {
        en: "Take a jeep ride up the mountain trails to see scenic panoramic valley views.",
        es: "Realiza una ruta en jeep hacia el mirador de montaña.",
        pt: "Faça uma trilha de jipe em direção ao mirante da montanha."
      }
    },
    {
      name: { en: "Dubare Wildlife Camp", es: "Campamento Dubare", pt: "Acampamento Dubare" },
      desc: {
        en: "Interact with elephants and enjoy rafting along the Kaveri river.",
        es: "Conoce a los elefantes y realiza rafting en el río Kaveri.",
        pt: "Conheça os elefantes e pratique rafting no rio Kaveri."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Kannur Airport (95 km) or Bangalore Airport connects with domestic lines, followed by road transits.",
      es: "Coorg es accesible por el aeropuerto de Kannur o carretera.",
      pt: "Coorg é acessível pelo aeroporto de Kannur ou estrada."
    },
    nearestAirport: "Kannur International Airport (CNN) / Bangalore Airport",
    nearestRailway: "Mysuru Junction (MYS) / Mangaluru Junction (MAJN)",
    transportOptions: "Buses, Taxis, Private Cars",
    distanceFromMajorCities: "Bengaluru (250 km), Mysuru (120 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "14°C - 28°C",
    currency: "INR",
    localLanguage: "Kodava, Kannada & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe hills destination. Take care during heavy monsoon rains.",
      es: "Región montañosa muy segura.",
      pt: "Região montanhosa muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Private Taxi",
      title: { en: "Private Taxi", es: "Taxi Privado", pt: "Táxi Particular" },
      desc: {
        en: "Highly recommended for exploring the scattered tourist spots of Coorg.",
        es: "Muy recomendado para ir de una atracción a otra.",
        pt: "Muito recomendado para ir de uma atração a outra."
      },
      recommended: true
    },
    {
      transportType: "Rental Car",
      title: { en: "Rental Car", es: "Coche de Alquiler", pt: "Carro de Aluguel" },
      desc: {
        en: "Convenient option for self-driven road trips around coffee hills.",
        es: "Opción cómoda para viajar por libre.",
        pt: "Opção confortável para viajar por conta própria."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Public buses connecting Madikeri with other main regional towns.",
        es: "Autobuses que unen los pueblos principales.",
        pt: "Ônibus que ligam as principais vilas."
      },
      recommended: false
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short routes within central Madikeri town boundaries.",
        es: "Útil dentro del pueblo de Madikeri.",
        pt: "Útil dentro da vila de Madikeri."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal inside coffee estates, garden resorts, and nature trails.",
        es: "Ideal para pasear por los senderos y cafetales.",
        pt: "Ideal para caminhar pelas trilhas e cafezais."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Rain Protection", es: "Clima Cambiante", pt: "Clima Instável" },
      desc: {
        en: "Carry light rain protection because weather can change quickly.",
        es: "Lleva protección para la lluvia, el clima cambia rápido.",
        pt: "Leve capa de chuva, o clima muda rapidamente."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado Cómodo", pt: "Calçados" },
      desc: {
        en: "Wear comfortable shoes for waterfalls and plantation walks.",
        es: "Lleva calzado cómodo para las caminatas por las fincas.",
        pt: "Use calçados confortáveis para as caminhadas nas fazendas."
      }
    },
    {
      title: { en: "Plantation Stays", es: "Reservas", pt: "Reservas" },
      desc: {
        en: "Book plantation stays in advance during peak periods.",
        es: "Reserva los alojamientos en fincas con anticipación.",
        pt: "Reserve as hospedagens em fazendas com antecedência."
      }
    },
    {
      title: { en: "Repellent", es: "Repelente", pt: "Repelente" },
      desc: {
        en: "Carry mosquito repellent for outdoor nature activities.",
        es: "Lleva repelente de mosquitos para las actividades al aire libre.",
        pt: "Leve repelente de mosquitos para as atividades ao ar livre."
      }
    },
    {
      title: { en: "Weather Check", es: "Clima Local", pt: "Clima Local" },
      desc: {
        en: "Check local weather before visiting viewpoints and waterfalls.",
        es: "Verifica el clima antes de ir a cascadas o miradores.",
        pt: "Verifique o clima antes de ir a cachoeiras ou mirantes."
      }
    }
  ],
  hotels: [
    {
      name: "Evolve Back Coorg",
      tier: "Luxury",
      desc: {
        en: "Luxury coffee plantation resort with traditional Kodava design villas.",
        es: "Resort de lujo en plantación de café con villas tradicionales.",
        pt: "Resort de luxo em fazenda de café com chalés tradicionais."
      },
      image: ""
    },
    {
      name: "The Tamara Coorg",
      tier: "Luxury",
      desc: {
        en: "Premium nature retreat located inside a valley estate with pool.",
        es: "Alojamiento premium rodeado de naturaleza y valles.",
        pt: "Hospedagem premium cercada por natureza e vales."
      },
      image: ""
    },
    {
      name: "Coorg Wilderness Resort",
      tier: "Luxury",
      desc: {
        en: "Luxury forest-style accommodation offering large rooms and trails.",
        es: "Resort de lujo integrado en el bosque con senderos.",
        pt: "Resort de luxo integrado à floresta com trilhas."
      },
      image: ""
    },
    {
      name: "Taj Madikeri Resort & Spa",
      tier: "Luxury",
      desc: {
        en: "Premium hillside resort with panoramic views and spa services.",
        es: "Resort de lujo en la colina con spa e inmejorables vistas.",
        pt: "Resort de luxo na colina com spa e excelentes vistas."
      },
      image: ""
    },
    {
      name: "Club Mahindra Madikeri Resort",
      tier: "Premium",
      desc: {
        en: "Family-friendly resort built in traditional Kodava architectural style.",
        es: "Resort familiar cómodo y con actividades.",
        pt: "Resort familiar confortável com atividades."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Pandi Curry, Kadambuttu, Noolputtu, Bamboo Shoot Curry and Akki Rotti.",
    es: "Pruebe Pandi Curry, Kadambuttu, Noolputtu, Curry de Brotes de Bambú y Akki Rotti.",
    pt: "Prove Pandi Curry, Kadambuttu, Noolputtu, Curry de Broto de Bambu e Akki Rotti."
  },
  localFoodDishes: [
    {
      name: { en: "Pandi Curry", es: "Pandi Curry", pt: "Pandi Curry" },
      desc: {
        en: "Traditional pork dish prepared in local spices and sour Kachampuli vinegar.",
        es: "Plato tradicional de carne de cerdo cocinado con especias y vinagre local.",
        pt: "Prato tradicional de porco cozido com especiarias e vinagre local."
      }
    },
    {
      name: { en: "Kadambuttu", es: "Kadambuttu", pt: "Kadambuttu" },
      desc: {
        en: "Steamed round rice dumplings, commonly served with spicy gravies.",
        es: "Bolas de arroz al vapor que acompañan a los curries.",
        pt: "Bolinhos de arroz no vapor que acompanham os curries."
      }
    },
    {
      name: { en: "Noolputtu", es: "Noolputtu", pt: "Noolputtu" },
      desc: {
        en: "Traditional string hoppers made of rice flour, served with coconut milk.",
        es: "Fideos de arroz tradicionales servidos con leche de coco.",
        pt: "Macarrão de arroz tradicional servido com leite de coco."
      }
    },
    {
      name: { en: "Bamboo Shoot Curry", es: "Curry de Bambú", pt: "Curry de Bambu" },
      desc: {
        en: "Seasonal curry made of tender bamboo shoots cooked with spices.",
        es: "Curry de temporada elaborado con brotes tiernos de bambú.",
        pt: "Curry de temporada preparado com brotos tenros de bambu."
      }
    },
    {
      name: { en: "Akki Rotti", es: "Akki Rotti", pt: "Akki Rotti" },
      desc: {
        en: "Traditional flatbread made of cooked rice and rice flour.",
        es: "Pan plano hecho con arroz y harina de arroz.",
        pt: "Pão achatado feito com arroz e farinha de arroz."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally ideal for pleasant weather and sightseeing. June to September is lush and green but brings heavier monsoon rainfall.",
    es: "De octubre a marzo suele ser ideal por su clima agradable y para hacer turismo. De junio a septiembre el paisaje es muy verde, pero hay lluvias monzónicas más intensas.",
    pt: "De outubro a março geralmente é ideal pelo clima agradável e para passeios. De junho a setembro a região fica muito verde, mas recebe chuvas de monções mais intensas."
  },
  faqs: [
    {
      q: { en: "What is Coorg famous for?", es: "¿Por qué es famoso Coorg?", pt: "Pelo que Coorg é famoso?" },
      a: {
        en: "Coorg is famous for coffee plantations, misty hills, Kodava culture, waterfalls and scenic landscapes.",
        es: "Coorg es famoso por sus plantaciones de café, colinas cubiertas de niebla, cultura Kodava, cascadas y paisajes.",
        pt: "Coorg é famoso por suas plantações de café, colinas cobertas de neblina, cultura Kodava, cachoeiras e paisagens."
      }
    },
    {
      q: { en: "How many days are enough for Coorg?", es: "¿Cuántos days son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "3–4 days are ideal for exploring Coorg and nearby attractions.",
        es: "3–4 días son ideales para explorar Coorg y sus alrededores.",
        pt: "3–4 dias são ideais para explorar Coorg e seus arredores."
      }
    },
    {
      q: { en: "Is Coorg good for a honeymoon?", es: "¿Es adecuada para una luna de miel?", pt: "É adequada para lua de mel?" },
      a: {
        en: "Yes, Coorg's peaceful resorts, coffee estates and mountain scenery make it popular with couples.",
        es: "Sí, sus resorts tranquilos, plantaciones de café y paisajes montañosos son populares entre parejas.",
        pt: "Sim, seus resorts tranquilos, plantações de café e paisagens montanhosas são populares entre casais."
      }
    },
    {
      q: { en: "What food is Coorg famous for?", es: "¿Qué comida típica destaca?", pt: "Que comida típica se destaca?" },
      a: {
        en: "Pandi curry, kadambuttu, noolputtu and akki rotti are popular Kodava dishes.",
        es: "Pandi curry, kadambuttu, noolputtu y akki rotti son platos populares de la cocina Kodava.",
        pt: "Pandi curry, kadambuttu, noolputtu e akki rotti são pratos populares da culinária Kodava."
      }
    },
    {
      q: { en: "Can Coorg be combined with Mysuru?", es: "¿Se puede combinar con Mysuru?", pt: "Pode ser combinada com Mysuru?" },
      a: {
        en: "Yes, Mysuru and Coorg are commonly combined in Karnataka travel itineraries.",
        es: "Sí, ambos destinos se combinan fácilmente en itinerarios por Karnataka.",
        pt: "Sim, os dois destinos combinam facilmente em roteiros por Karnataka."
      }
    }
  ]
};

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  const kaIdx = states.findIndex(s => s.slug === "karnataka");
  if (kaIdx !== -1) {
    console.log("Updating Karnataka cities in local file...");
    const kaState = states[kaIdx];
    kaState.cities = kaState.cities || [];
    
    // Update function helper
    const updateCity = (slug, details) => {
      const cityIdx = kaState.cities.findIndex(c => c.slug === slug);
      if (cityIdx !== -1) {
        kaState.cities[cityIdx] = { ...kaState.cities[cityIdx], ...details };
        console.log(`Updated city details: ${slug}`);
      } else {
        console.error(`City slug '${slug}' not found under Karnataka!`);
      }
    };

    updateCity("bengaluru", bengaluruDetails);
    updateCity("mysuru", mysuruDetails);
    updateCity("hampi", hampiDetails);
    updateCity("coorg", coorgDetails);

    states[kaIdx] = kaState;
  } else {
    console.error("Karnataka state not found in states.json!");
  }

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for Karnataka cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const docRef = doc(firestore, "states", "karnataka");
    setDoc(docRef, states[kaIdx]).then(() => {
      console.log("🚀 SUCCESS: Remote Firestore 'karnataka' document successfully updated!");
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
