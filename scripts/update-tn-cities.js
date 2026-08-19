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

// 1. CHENNAI DETAILS
const chennaiDetails = {
  tagline: {
    en: "Chennai is the cultural gateway to South India, known for its classical music and dance, historic temples, colonial heritage, beaches, traditional cuisine and vibrant urban life.",
    es: "Chennai es la puerta cultural del sur de India, conocida por su música y danza clásicas, templos históricos, patrimonio colonial, playas, gastronomía tradicional y vibrante vida urbana.",
    pt: "Chennai é a porta cultural do sul da Índia, conhecida por sua música e dança clássicas, templos históricos, patrimônio colonial, praias, culinária tradicional e vida urbana vibrante."
  },
  overview: {
    en: "Chennai is one of India's major cultural and commercial centres, located along the Bay of Bengal. The city offers a fascinating combination of ancient temple traditions, colonial architecture, vibrant arts and a long coastline. Visitors can explore Marina Beach, Kapaleeshwarar Temple, Fort St. George, San Thome Basilica and colourful local markets. Chennai is also an excellent starting point for exploring Tamil Nadu's temples, heritage towns and coastal destinations.",
    es: "Chennai es uno de los principales centros culturales y comerciales de India, situado junto a la bahía de Bengala. La ciudad combina tradiciones antiguas de templos, arquitectura colonial, artes vibrantes y una extensa costa. Los visitantes pueden explorar Marina Beach, el templo de Kapaleeshwarar, Fort St. George, la basílica de San Thome y los mercados locales.",
    pt: "Chennai é um dos principais centros culturais e comerciais da Índia, localizado às margens da Baía de Bengala. A cidade oferece uma fascinante combinação de antigas tradições religiosas, arquitetura colonial, artes vibrantes e um extenso litoral. Os visitantes podem explorar Marina Beach, o Templo de Kapaleeshwarar, Fort St. George, a Basílica de San Thome e os mercados locais."
  },
  highlights: [
    {
      title: { en: "Marina Beach", es: "Marina Beach", pt: "Marina Beach" },
      desc: {
        en: "One of India's most famous urban beaches.",
        es: "Una de las playas urbanas más famosas de India.",
        pt: "Uma das praias urbanas mais famosas da Índia."
      }
    },
    {
      title: { en: "Kapaleeshwarar Temple", es: "Templo Kapaleeshwarar", pt: "Templo Kapaleeshwarar" },
      desc: {
        en: "Iconic Dravidian temple architecture.",
        es: "Arquitectura icónica de templo dravídico.",
        pt: "Arquitetura icônica de templo dravidiano."
      }
    },
    {
      title: { en: "Fort St. George", es: "Fort St. George", pt: "Fort St. George" },
      desc: {
        en: "Important colonial-era landmark.",
        es: "Monumento importante de la época colonial.",
        pt: "Marco importante do período colonial."
      }
    },
    {
      title: { en: "San Thome Basilica", es: "Basílica de San Thome", pt: "Basílica de San Thome" },
      desc: {
        en: "Historic Christian pilgrimage site.",
        es: "Sitio histórico de peregrinación cristiana.",
        pt: "Local histórico de peregrinação cristã."
      }
    },
    {
      title: { en: "Mylapore", es: "Mylapore", pt: "Mylapore" },
      desc: {
        en: "Historic neighbourhood known for temples, culture and local life.",
        es: "Barrio histórico conocido por sus templos, cultura y vida local.",
        pt: "Bairro histórico conhecido por seus templos, cultura e vida local."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Walk along Marina Beach", es: "Pasear por Marina Beach", pt: "Caminhar na Marina Beach" },
      desc: {
        en: "Walk along Marina Beach to enjoy the sea breeze and sunset views.",
        es: "Pasea por Marina Beach para disfrutar de la brisa marina.",
        pt: "Caminhe pela Marina Beach para apreciar a brisa do mar."
      }
    },
    {
      name: { en: "Visit Kapaleeshwarar Temple", es: "Visitar el Templo Kapaleeshwarar", pt: "Visitar o Templo Kapaleeshwarar" },
      desc: {
        en: "Admire the towering gopuram and Dravidian architecture of the historic Shiva temple.",
        es: "Admira el gopuram y la arquitectura dravídica del templo de Shiva.",
        pt: "Admire o gopuram e a arquitetura dravidiana do templo de Shiva."
      }
    },
    {
      name: { en: "Explore Fort St. George", es: "Explorar Fort St. George", pt: "Explorar o Fort St. George" },
      desc: {
        en: "Discover the colonial-era history at St. Mary's Church and the Fort Museum.",
        es: "Explora la historia colonial en la iglesia y el museo del fuerte.",
        pt: "Explore a história colonial na igreja e no museu do forte."
      }
    },
    {
      name: { en: "Mylapore Heritage Walk", es: "Caminar por Mylapore", pt: "Caminhar por Mylapore" },
      desc: {
        en: "Discover Mylapore's heritage, traditional shops, and bustling market lanes.",
        es: "Descubre el patrimonio y mercados tradicionales de Mylapore.",
        pt: "Descubra o patrimônio e os mercados tradicionais de Mylapore."
      }
    },
    {
      name: { en: "Traditional South Indian Food", es: "Probar Comida del Sur", pt: "Provar Comida do Sul" },
      desc: {
        en: "Enjoy traditional South Indian breakfast foods like Idli, Dosa, and Filter Coffee.",
        es: "Disfruta de la comida tradicional del sur como Idli y Dosa.",
        pt: "Desfrute da comida tradicional do sul como Idli e Dosa."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Chennai International Airport offers extensive domestic and international connectivity. Major train terminals include Chennai Central and Egmore.",
      es: "Chennai es accesible por el aeropuerto internacional, tren o carretera.",
      pt: "Chennai é acessível pelo aeroporto internacional, trem ou estrada."
    },
    nearestAirport: "Chennai International Airport (MAA)",
    nearestRailway: "Chennai Central (MAS) / Chennai Egmore (MS)",
    transportOptions: "Metro, Local Trains, Taxis, Auto-rickshaws, Buses",
    distanceFromMajorCities: "Pondicherry (150 km), Mahabalipuram (55 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "22°C - 35°C",
    currency: "INR",
    localLanguage: "Tamil & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and hospitable city. Take standard precautions during hot summers.",
      es: "Ciudad muy segura.",
      pt: "Cidade muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Metro",
      title: { en: "Chennai Metro", es: "Metro de Chennai", pt: "Metrô de Chennai" },
      desc: {
        en: "Fast and air-conditioned transit system connecting key city zones.",
        es: "Metro rápido y con aire acondicionado.",
        pt: "Metrô rápido e climatizado."
      },
      recommended: true
    },
    {
      transportType: "Local Train",
      title: { en: "Suburban Train", es: "Tren Suburbano", pt: "Trem Suburbano" },
      desc: {
        en: "Economical local trains connecting suburbs with central stations.",
        es: "Trenes suburbanos muy económicos.",
        pt: "Trens suburbanos muito econômicos."
      },
      recommended: false
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short routes around markets and temple lanes.",
        es: "Útil para distancias cortas.",
        pt: "Útil para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "Convenient app cab services inside Chennai city limits.",
        es: "Taxis cómodos dentro de la ciudad.",
        pt: "Táxis confortáveis dentro da cidade."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Extensive public bus services connecting different corners of the city.",
        es: "Servicio de autobús urbano.",
        pt: "Serviço de ônibus urbano."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Clothing", es: "Ropa", pt: "Roupas" },
      desc: {
        en: "Carry light cotton clothing during warmer months.",
        es: "Lleva ropa ligera de algodón durante los meses calurosos.",
        pt: "Use roupas leves de algodão durante os meses quentes."
      }
    },
    {
      title: { en: "Dress Code", es: "Respeto en Templos", pt: "Respeito nos Templos" },
      desc: {
        en: "Dress respectfully when visiting temples.",
        es: "Viste de forma respetuosa al visitar templos.",
        pt: "Vista-se de forma respeitosa ao visitar templos."
      }
    },
    {
      title: { en: "Early Start", es: "Comienzo Temprano", pt: "Comece Cedo" },
      desc: {
        en: "Start outdoor sightseeing early to avoid afternoon heat.",
        es: "Comienza las visitas temprano para evitar el calor.",
        pt: "Comece os passeios cedo para evitar o calor."
      }
    },
    {
      title: { en: "Use Metro", es: "Uso del Metro", pt: "Uso do Metrô" },
      desc: {
        en: "Use metro services where convenient to avoid traffic.",
        es: "Usa el metro para evitar los atascos de tráfico.",
        pt: "Use o metrô para evitar congestionamentos."
      }
    },
    {
      title: { en: "Sun & Water", es: "Sol y Agua", pt: "Sol e Água" },
      desc: {
        en: "Carry water and sun protection.",
        es: "Lleva agua y protección solar.",
        pt: "Leve água e proteção solar."
      }
    }
  ],
  hotels: [
    {
      name: "ITC Grand Chola",
      tier: "Luxury",
      desc: {
        en: "Luxury hotel with grand South Indian-inspired architecture and fine dining.",
        es: "Hotel de lujo inspirado en la arquitectura del sur de India.",
        pt: "Hotel de luxo inspirado na arquitetura do sul da Índia."
      },
      image: ""
    },
    {
      name: "Taj Coromandel",
      tier: "Luxury",
      desc: {
        en: "Classic luxury accommodation in Nungambakkam center.",
        es: "Alojamiento clásico y lujoso en el centro de la ciudad.",
        pt: "Hospedagem clássica e luxuosa no centro da cidade."
      },
      image: ""
    },
    {
      name: "The Leela Palace Chennai",
      tier: "Luxury",
      desc: {
        en: "Premium seaside luxury stay overlooking the Bay of Bengal.",
        es: "Estancia premium de lujo frente al mar.",
        pt: "Hospedagem premium de luxo frente ao mar."
      },
      image: ""
    },
    {
      name: "The Raintree, St. Mary's Road",
      tier: "Premium",
      desc: {
        en: "Comfortable upscale option with eco-friendly services.",
        es: "Hotel moderno premium con servicios ecológicos.",
        pt: "Hotel moderno premium com serviços ecológicos."
      },
      image: ""
    },
    {
      name: "Radisson Blu Hotel GRT Chennai",
      tier: "Premium",
      desc: {
        en: "Convenient premium accommodation close to the airport.",
        es: "Alojamiento conveniente cerca del aeropuerto.",
        pt: "Hospedagem conveniente perto do aeroporto."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Idli & Sambar, Masala Dosa, Pongal, Chettinad Chicken and Filter Coffee.",
    es: "Pruebe Idli y Sambar, Masala Dosa, Pongal, Pollo Chettinad y Café de Filtro.",
    pt: "Prove Idli e Sambar, Masala Dosa, Pongal, Frango Chettinad e Café de Filtro."
  },
  localFoodDishes: [
    {
      name: { en: "Idli & Sambar", es: "Idli y Sambar", pt: "Idli e Sambar" },
      desc: {
        en: "Steamed rice cakes served with spiced lentil soup and coconut chutneys.",
        es: "Pastelitos de arroz al vapor con sopa de lentejas y chutneys.",
        pt: "Bolinhos de arroz no vapor com sopa de lentilhas e chutneys."
      }
    },
    {
      name: { en: "Masala Dosa", es: "Masala Dosa", pt: "Masala Dosa" },
      desc: {
        en: "Crispy rice crepe stuffed with spiced potato mash, served with sambar.",
        es: "Crepe crujiente de arroz relleno de patatas condimentadas.",
        pt: "Crepe crocante de arroz recheado com batatas temperadas."
      }
    },
    {
      name: { en: "Pongal", es: "Pongal", pt: "Pongal" },
      desc: {
        en: "Traditional rice and lentil dish seasoned with black pepper, cumin and ghee.",
        es: "Plato tradicional de arroz y lentejas sazonado con ghee y especias.",
        pt: "Prato tradicional de arroz e lentilhas temperado com ghee e especiarias."
      }
    },
    {
      name: { en: "Chettinad Chicken", es: "Pollo Chettinad", pt: "Frango Chettinad" },
      desc: {
        en: "Spicy chicken curry prepared with freshly ground Chettinad masala.",
        es: "Curry picante de pollo elaborado con especias Chettinad.",
        pt: "Curry apimentado de frango preparado com especiarias Chettinad."
      }
    },
    {
      name: { en: "Filter Coffee", es: "Café de Filtro", pt: "Café de Filtro" },
      desc: {
        en: "Traditional South Indian frothy milk coffee prepared in brass filters.",
        es: "Café con leche tradicional servido espumoso en vasos de latón.",
        pt: "Café com leite tradicional servido espumoso em copos de latão."
      }
    }
  ],
  bestTime: {
    en: "November to February is generally more comfortable for sightseeing. December and January are also popular for experiencing Chennai's cultural season.",
    es: "De noviembre a febrero suele ser más cómodo para hacer turismo. Diciembre y enero también son populares para disfrutar de la temporada cultural de Chennai.",
    pt: "De novembro a fevereiro geralmente é mais confortável para passeios. Dezembro e janeiro também são populares para vivenciar a temporada cultural de Chennai."
  },
  faqs: [
    {
      q: { en: "What is Chennai famous for?", es: "¿Por qué es famosa Chennai?", pt: "Pelo que Chennai é famosa?" },
      a: {
        en: "Chennai is famous for temples, classical arts, Marina Beach, South Indian cuisine and Tamil culture.",
        es: "Chennai es famoso por sus templos, artes clásicas, Marina Beach, gastronomía del sur de India y cultura tamil.",
        pt: "Chennai é famoso por seus templos, artes clássicas, Marina Beach, culinária do sul da Índia e cultura tâmil."
      }
    },
    {
      q: { en: "How many days are enough for Chennai?", es: "¿Cuántos days son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are suitable for the city's main attractions.",
        es: "2–3 días son adecuados para conocer las principales atracciones.",
        pt: "2–3 dias são adequados para conhecer as principais atrações."
      }
    },
    {
      q: { en: "Is Chennai good for families?", es: "¿Es adecuada para familias?", pt: "Chennai é adequada para famílias?" },
      a: {
        en: "Yes, Chennai offers beaches, museums, temples and family-friendly attractions.",
        es: "Sí, ofrece playas, museos, templos y atracciones familiares.",
        pt: "Sim, oferece praias, museus, templos e atrações para famílias."
      }
    },
    {
      q: { en: "What should visitors wear to Chennai temples?", es: "¿Qué vestir en los templos?", pt: "O que vestir nos templos?" },
      a: {
        en: "Modest and respectful clothing is recommended at religious sites.",
        es: "Se recomienda ropa modesta y respetuosa.",
        pt: "Recomenda-se roupas discretas e respeitosas."
      }
    },
    {
      q: { en: "Can Chennai be combined with Mahabalipuram?", es: "¿Se puede combinar con Mahabalipuram?", pt: "Pode ser combinada com Mahabalipuram?" },
      a: {
        en: "Yes, Mahabalipuram is a popular coastal heritage destination that can easily be added to a Chennai itinerary.",
        es: "Sí, Mahabalipuram puede incorporarse fácilmente a un itinerario por Chennai.",
        pt: "Sim, Mahabalipuram pode ser facilmente incluída em um roteiro por Chennai."
      }
    }
  ]
};

// 2. MADURAI DETAILS
const maduraiDetails = {
  tagline: {
    en: "Madurai is one of Tamil Nadu's oldest cultural cities, famous for the magnificent Meenakshi Amman Temple, traditional markets, Tamil heritage and distinctive South Indian cuisine.",
    es: "Madurai es una de las ciudades culturales más antiguas de Tamil Nadu, famosa por el magnífico templo Meenakshi Amman, sus mercados tradicionales, patrimonio tamil y gastronomía del sur de India.",
    pt: "Madurai é uma das cidades culturais mais antigas de Tamil Nadu, famosa pelo magnífico Templo Meenakshi Amman, mercados tradicionais, patrimônio tâmil e culinária do sul da Índia."
  },
  overview: {
    en: "Madurai is a historic temple city built around the sacred Meenakshi Amman Temple. Known as one of South India's great cultural centres, the city has a long history of Tamil literature, architecture, trade and religious traditions. Visitors can explore the Meenakshi Temple, Thirumalai Nayak Palace, Gandhi Memorial Museum and lively bazaars. Madurai is an excellent destination for travellers interested in temples, architecture, culture and authentic Tamil cuisine.",
    es: "Madurai es una histórica ciudad de templos construida alrededor del sagrado templo Meenakshi Amman. Conocida como uno de los grandes centros culturales del sur de India, la ciudad posee una larga historia de literatura tamil, arquitectura, comercio y tradiciones religiosas. Los visitantes pueden explorar el templo Meenakshi, el palacio Thirumalai Nayak, el Gandhi Memorial Museum y sus animados mercados.",
    pt: "Madurai é uma histórica cidade-templo construída ao redor do sagrado Templo Meenakshi Amman. Conhecida como um dos grandes centros culturais do sul da Índia, a cidade possui uma longa história de literatura tâmil, arquitetura, comércio e tradições religiosas. Os visitantes podem explorar o Templo Meenakshi, o Palácio Thirumalai Nayak, o Gandhi Memorial Museum e os mercados movimentados."
  },
  highlights: [
    {
      title: { en: "Meenakshi Amman Temple", es: "Templo Meenakshi Amman", pt: "Templo Meenakshi Amman" },
      desc: {
        en: "Magnificent Dravidian temple complex displaying towering sculpted gopurams.",
        es: "Magnífico complejo de templos dravídicos con enormes gopurams.",
        pt: "Magnífico complexo de templos dravidianos com enormes gopurams."
      }
    },
    {
      title: { en: "Thirumalai Nayak Palace", es: "Palacio Thirumalai Nayak", pt: "Palácio Thirumalai Nayak" },
      desc: {
        en: "Grand historic palace building presenting Dravidian-Islamic styles.",
        es: "Gran palacio histórico con estilos dravídico e islámico.",
        pt: "Grande palácio histórico com estilos dravidiano e islâmico."
      }
    },
    {
      title: { en: "Gandhi Memorial Museum", es: "Gandhi Memorial Museum", pt: "Gandhi Memorial Museum" },
      desc: {
        en: "Important cultural and historical museum representing independence archives.",
        es: "Importante museo con archivos del movimiento de independencia.",
        pt: "Importante museu com arquivos do movimento de independência."
      }
    },
    {
      title: { en: "Vandiyur Mariamman Teppakulam", es: "Vandiyur Mariamman Teppakulam", pt: "Vandiyur Mariamman Teppakulam" },
      desc: {
        en: "Historic giant temple tank with central island temple.",
        es: "Histórico y enorme estanque con templo en la isla central.",
        pt: "Histórico e enorme tanque com templo na ilha central."
      }
    },
    {
      title: { en: "Night Markets", es: "Mercados Nocturnos", pt: "Mercados Noturnos" },
      desc: {
        en: "Vibrant local shopping and food atmosphere around temple corridors.",
        es: "Ambiente animado de compras y comida local junto al templo.",
        pt: "Ambiente animado de compras e comida local junto ao templo."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Meenakshi Temple", es: "Explorar el Templo Meenakshi", pt: "Explorar o Templo Meenakshi" },
      desc: {
        en: "Explore the halls, columns, and beautiful shrines of the Meenakshi temple complex.",
        es: "Explora los salones, columnas y santuarios del complejo Meenakshi.",
        pt: "Explore os salões, colunas e santuários do complexo Meenakshi."
      }
    },
    {
      name: { en: "Visit Thirumalai Nayak Palace", es: "Visitar el Palacio Thirumalai Nayak", pt: "Visitar o Palácio Thirumalai Nayak" },
      desc: {
        en: "Explore the grand pillars, halls, and evening light show inside the palace.",
        es: "Explora los grandes pilares, salones y el espectáculo de luces.",
        pt: "Explore os grandes pilares, salões e o espetáculo de luzes."
      }
    },
    {
      name: { en: "Explore Gandhi Museum", es: "Explorar el Museo Gandhi", pt: "Explorar o Museu Gandhi" },
      desc: {
        en: "Learn about Mahatma Gandhi's history and see the preserved archives.",
        es: "Conoce la historia de Gandhi y los archivos conservados.",
        pt: "Conheça a história de Gandhi e os arquivos preservados."
      }
    },
    {
      name: { en: "Discover Local Markets", es: "Descubrir los Mercados", pt: "Descobrir os Mercados" },
      desc: {
        en: "Explore colorful markets around the temple to shop for brassware, textiles, and jasmine.",
        es: "Explora mercados coloridos cerca del templo para comprar recuerdos.",
        pt: "Explore mercados coloridos perto do templo para comprar lembranças."
      }
    },
    {
      name: { en: "Taste Madurai Cuisine", es: "Probar Comida Local", pt: "Experimentar Comida Local" },
      desc: {
        en: "Taste unique local foods such as Jigarthanda, Kari Dosa, and Parotta.",
        es: "Prueba bocadillos locales únicos como Jigarthanda y Kari Dosa.",
        pt: "Experimente petiscos locais únicos como Jigarthanda e Kari Dosa."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Madurai Airport operates domestic flights. Madurai Junction railway links connect with Chennai and Coimbatore, alongside public buses.",
      es: "Madurai es accesible por avión, tren y carretera.",
      pt: "Madurai é acessível por avião, trem e estrada."
    },
    nearestAirport: "Madurai Airport (IXM)",
    nearestRailway: "Madurai Junction (MDU)",
    transportOptions: "Taxis, Auto-rickshaws, Buses",
    distanceFromMajorCities: "Chennai (460 km), Coimbatore (250 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "23°C - 36°C",
    currency: "INR",
    localLanguage: "Tamil & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe temple city. Use official queues at Meenakshi temple.",
      es: "Ciudad de templos muy segura.",
      pt: "Cidade de templos muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Convenient for short routes around the old city gates and markets.",
        es: "Rickshaws cómodos para distancias cortas.",
        pt: "Autorriquixás convenientes para distâncias curtas."
      },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "Convenient app cab services inside Madurai city limits.",
        es: "Taxis cómodos dentro de la ciudad.",
        pt: "Táxis confortáveis dentro da cidade."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Municipal local bus network connecting suburban districts.",
        es: "Servicios de autobuses municipales.",
        pt: "Serviços de ônibus municipais."
      },
      recommended: false
    },
    {
      transportType: "Private Taxi",
      title: { en: "Private Taxi", es: "Taxi Privado", pt: "Táxi Particular" },
      desc: {
        en: "Highly recommended for outstation trips like Rameshwaram.",
        es: "Recomendado para viajes fuera de la ciudad.",
        pt: "Recomendado para viagens fora da cidade."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal around the pedestrian pathways of Meenakshi temple complex.",
        es: "Ideal para recorrer el complejo del templo y sus alrededores.",
        pt: "Ideal para explorar o complexo do templo e arredores."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Dress Code", es: "Vestimenta", pt: "Vestimenta" },
      desc: {
        en: "Dress modestly for temple visits.",
        es: "Viste de forma modesta al visitar los templos.",
        pt: "Vista-se de forma modesta ao visitar os templos."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado", pt: "Calçados" },
      desc: {
        en: "Remove footwear where required around temple complexes.",
        es: "Quítate los zapatos donde se requiera cerca del templo.",
        pt: "Retire os sapatos onde for solicitado perto do templo."
      }
    },
    {
      title: { en: "Early Sightseeing", es: "Visitas Tempranas", pt: "Passeios Cedo" },
      desc: {
        en: "Start sightseeing early due to warm weather.",
        es: "Comienza las visitas temprano debido al calor.",
        pt: "Comece os passeios cedo devido ao calor."
      }
    },
    {
      title: { en: "Cash", es: "Efectivo", pt: "Dinheiro" },
      desc: {
        en: "Keep cash for smaller local shops and vendors.",
        es: "Lleva efectivo para tiendas pequeñas y vendedores.",
        pt: "Leve dinheiro para lojas pequenas e vendedores."
      }
    },
    {
      title: { en: "Temple Queues", es: "Filas del Templo", pt: "Filas do Templo" },
      desc: {
        en: "Leave enough time for temple queues.",
        es: "Reserva suficiente tiempo por las filas del templo.",
        pt: "Reserve tempo suficiente devido a filas no templo."
      }
    }
  ],
  hotels: [
    {
      name: "The Gateway Hotel Pasumalai",
      tier: "Luxury",
      desc: {
        en: "Heritage-style luxury stay on Pasumalai hill offering views of the city.",
        es: "Alojamiento de lujo estilo histórico con vistas a la ciudad.",
        pt: "Hospedagem de luxo em estilo clássico com vista para a cidade."
      },
      image: ""
    },
    {
      name: "Courtyard by Marriott Madurai",
      tier: "Premium",
      desc: {
        en: "Premium modern hotel close to commercial and historic centers.",
        es: "Hotel moderno premium en el centro de la ciudad.",
        pt: "Hotel moderno premium no centro da cidade."
      },
      image: ""
    },
    {
      name: "Heritage Madurai",
      tier: "Luxury",
      desc: {
        en: "Resort-style heritage accommodation surrounded by gardens and pool.",
        es: "Resort histórico de lujo rodeado de jardines.",
        pt: "Resort clássico de luxo cercado por jardins."
      },
      image: ""
    },
    {
      name: "Fortune Pandiyan Hotel",
      tier: "Premium",
      desc: {
        en: "Comfortable premium option offering traditional services.",
        es: "Cómodo hotel de categoría superior con servicios tradicionales.",
        pt: "Confortável hotel de categoria superior com serviços tradicionais."
      },
      image: ""
    },
    {
      name: "Hotel Supreme",
      tier: "Mid-range",
      desc: {
        en: "Convenient city accommodation with rooftop dining views.",
        es: "Alojamiento urbano cómodo con restaurante en la terraza.",
        pt: "Hospedagem urbana confortável com restaurante na cobertura."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Jigarthanda, Kari Dosa, Parotta & Salna, Idiyappam and Madurai Biriyani.",
    es: "Pruebe Jigarthanda, Kari Dosa, Parotta y Salna, Idiyappam y Biriyani de Madurai.",
    pt: "Prove Jigarthanda, Kari Dosa, Parotta e Salna, Idiyappam e Biriyani de Madurai."
  },
  localFoodDishes: [
    {
      name: { en: "Jigarthanda", es: "Jigarthanda", pt: "Jigarthanda" },
      desc: {
        en: "Sweet cold beverage made of milk, almond gum, sarsaparilla syrup and ice cream.",
        es: "Bebida dulce y fría elaborada con leche, goma de almendras y helado.",
        pt: "Bebida doce e fria preparada com leite, goma de amêndoas e sorvete."
      }
    },
    {
      name: { en: "Kari Dosa", es: "Kari Dosa", pt: "Kari Dosa" },
      desc: {
        en: "Thick dosa topped with egg and spiced minced mutton or chicken.",
        es: "Dosa gruesa con huevo y carne picada especiada.",
        pt: "Dosa espessa com ovo e carne moída temperada."
      }
    },
    {
      name: { en: "Parotta & Salna", es: "Parotta y Salna", pt: "Parotta e Salna" },
      desc: {
        en: "Layered flatbread served with spicy local gravy.",
        es: "Pan plano de capas servido con salsa picante local.",
        pt: "Pão achatado folhado servido com molho apimentado local."
      }
    },
    {
      name: { en: "Idiyappam", es: "Idiyappam", pt: "Idiyappam" },
      desc: {
        en: "Steamed rice noodles served with sweet coconut milk or spicy curry.",
        es: "Fideos de arroz al vapor servidos con leche de coco.",
        pt: "Macarrão de arroz no vapor servido com leite de coco."
      }
    },
    {
      name: { en: "Madurai Biriyani", es: "Biriyani de Madurai", pt: "Biriyani de Madurai" },
      desc: {
        en: "Spiced aromatic rice dish cooked with mutton or chicken and local spices.",
        es: "Plato de arroz aromático con carne y especias locales.",
        pt: "Prato de arroz aromático com carne e especiarias locais."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally more comfortable for sightseeing and temple visits.",
    es: "De octubre a marzo suele ser más cómodo para hacer turismo y visitar templos.",
    pt: "De outubro a março geralmente é mais confortável para passeios e visitas aos templos."
  },
  faqs: [
    {
      q: { en: "What is Madurai famous for?", es: "¿Por qué es famosa Madurai?", pt: "Pelo que Madurai é famosa?" },
      a: {
        en: "Madurai is famous for Meenakshi Amman Temple, Tamil culture, historic architecture and local food.",
        es: "Madurai es famosa por el templo Meenakshi Amman, la cultura tamil, la arquitectura histórica y su gastronomía.",
        pt: "Madurai é famosa pelo Templo Meenakshi Amman, cultura tâmil, arquitetura histórica e gastronomia local."
      }
    },
    {
      q: { en: "How many days are enough for Madurai?", es: "¿Cuántos days son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are ideal for exploring Madurai and its main attractions.",
        es: "2–3 días son ideales.",
        pt: "2–3 dias são ideais."
      }
    },
    {
      q: { en: "Is Madurai suitable for families?", es: "¿Es adecuada para familias?", pt: "Madurai é adequada para famílias?" },
      a: {
        en: "Yes, families can enjoy temples, museums, palaces and local markets.",
        es: "Sí, las familias pueden disfrutar de templos, museos, palacios y mercados.",
        pt: "Sim, famílias podem aproveitar templos, museus, palácios e mercados."
      }
    },
    {
      q: { en: "What food is Madurai famous for?", es: "¿Qué comida local destaca?", pt: "Que comida local se destaca?" },
      a: {
        en: "Jigarthanda, kari dosa, parotta and Madurai-style biriyani are popular choices.",
        es: "Jigarthanda, kari dosa, parotta y biriyani al estilo Madurai son opciones populares.",
        pt: "Jigarthanda, kari dosa, parotta e biriyani ao estilo Madurai são opções populares."
      }
    },
    {
      q: { en: "Is Madurai a good cultural destination?", es: "¿Es un buen destino cultural?", pt: "É um bom destino cultural?" },
      a: {
        en: "Yes, it is one of the best places to experience Tamil temple culture and heritage.",
        es: "Sí, es uno de los mejores lugares para conocer la cultura y el patrimonio de los templos de Tamil Nadu.",
        pt: "Sim, é um dos melhores lugares para conhecer a cultura e o patrimônio dos templos de Tamil Nadu."
      }
    }
  ]
};

// 3. MAHABALIPURAM DETAILS
const mahabalipuramDetails = {
  tagline: {
    en: "Mahabalipuram, also known as Mamallapuram, is a historic coastal town in Tamil Nadu famous for its UNESCO-listed temples, rock-cut monuments, stone sculptures and beautiful Bay of Bengal coastline.",
    es: "Mahabalipuram, también conocido como Mamallapuram, es una histórica ciudad costera de Tamil Nadu famosa por sus templos, monumentos excavados en roca, esculturas de piedra y costa de la bahía de Bengala.",
    pt: "Mahabalipuram, também conhecida como Mamallapuram, é uma histórica cidade costeira de Tamil Nadu famosa por seus templos, monumentos escavados em rocha, esculturas de pedra e litoral da Baía de Bengala."
  },
  overview: {
    en: "Mahabalipuram is one of South India's most remarkable heritage destinations, known for its Pallava-era monuments carved from granite. The UNESCO World Heritage Group of Monuments includes the Shore Temple, Pancha Rathas and magnificent rock reliefs. Located along the Bay of Bengal, Mahabalipuram combines history with beaches, traditional stone carving and relaxed coastal scenery. It is an excellent destination for architecture lovers, photographers and travellers exploring Tamil Nadu's heritage.",
    es: "Mahabalipuram es uno de los destinos patrimoniales más destacados del sur de India, conocido por sus monumentos de la época Pallava tallados en granito. El conjunto declarado Patrimonio Mundial por la UNESCO incluye Shore Temple, Pancha Rathas y magníficos relieves en roca. Situado junto a la bahía de Bengala, combina historia, playas, artesanía tradicional en piedra y paisajes costeros.",
    pt: "Mahabalipuram é um dos destinos históricos mais impressionantes do sul da Índia, conhecido pelos monumentos da era Pallava esculpidos em granito. O conjunto reconhecido como Patrimônio Mundial pela UNESCO inclui Shore Temple, Pancha Rathas e magníficos relevos em pedra. Localizada junto à Baía de Bengala, a cidade combina história, praias, escultura tradicional em pedra e paisagens costeiras."
  },
  highlights: [
    {
      title: { en: "Shore Temple", es: "Shore Temple", pt: "Shore Temple" },
      desc: {
        en: "Famous 8th-century stone temple standing on the Bay of Bengal waterfront.",
        es: "Famoso templo de piedra del siglo VIII frente al mar.",
        pt: "Famoso templo de pedra do século VIII frente ao mar."
      }
    },
    {
      title: { en: "Pancha Rathas", es: "Pancha Rathas", pt: "Pancha Rathas" },
      desc: {
        en: "Five monolithic stone monuments carved in the shape of chariots.",
        es: "Cinco monumentos monolíticos tallados en forma de carros.",
        pt: "Cinco monumentos monolíticos esculpidos em forma de carros."
      }
    },
    {
      title: { en: "Arjuna's Penance", es: "Penitencia de Arjuna", pt: "Penitência de Arjuna" },
      desc: {
        en: "Magnificent giant rock relief depicting stories from Indian epics.",
        es: "Magnífico relieve gigante en roca que representa la epopeya india.",
        pt: "Magnífico relevo gigante na rocha que representa a epopeia indiana."
      }
    },
    {
      title: { en: "Krishna's Butter Ball", es: "Krishna's Butter Ball", pt: "Krishna's Butter Ball" },
      desc: {
        en: "Famous giant balancing granite boulder resting on a hillside slope.",
        es: "Famosa roca gigante de granito en equilibrio sobre una colina.",
        pt: "Famosa rocha gigante de granito em equilíbrio sobre uma colina."
      }
    },
    {
      title: { en: "Mahabalipuram Beach", es: "Playa de Mahabalipuram", pt: "Praia de Mahabalipuram" },
      desc: {
        en: "Scenic coastal areas along the historical Shore Temple landmark.",
        es: "Hermosa zona costera junto al templo histórico.",
        pt: "Bela área costeira próxima ao templo histórico."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Shore Temple", es: "Visitar Shore Temple", pt: "Visitar o Shore Temple" },
      desc: {
        en: "Explore the Pallava-era stone temple overlooking the waves.",
        es: "Explora el templo de piedra con vistas a las olas.",
        pt: "Explore o templo de pedra com vista para as ondas."
      }
    },
    {
      name: { en: "Explore Pancha Rathas", es: "Explorar Pancha Rathas", pt: "Explorar o Pancha Rathas" },
      desc: {
        en: "Walk around the five monolithic chariot monuments to admire Dravidian carvings.",
        es: "Recorre los cinco templos monolíticos tallados en piedra.",
        pt: "Caminhe pelos cinco templos monolíticos esculpidos em pedra."
      }
    },
    {
      name: { en: "Admire Arjuna's Penance", es: "Admirar la Penitencia de Arjuna", pt: "Admirar a Penitência de Arjuna" },
      desc: {
        en: "Admire the giant rock-cut relief panels detailing gods and wildlife.",
        es: "Admira el relieve gigante tallado en roca con deidades y animales.",
        pt: "Admire o relevo gigante esculpido na rocha com divindades e animais."
      }
    },
    {
      name: { en: "Photograph Butter Ball", es: "Fotografiar Krishna's Butter Ball", pt: "Fotografar a Butter Ball" },
      desc: {
        en: "See and photograph the famous giant granite boulder balancing on the slope.",
        es: "Fotografía la famosa roca gigante en equilibrio.",
        pt: "Fotografe a famosa rocha gigante em equilíbrio."
      }
    },
    {
      name: { en: "Relax at Coastal Areas", es: "Relajarse en la Playa", pt: "Relaxar na Praia" },
      desc: {
        en: "Take a walk along the sandy coast and see traditional stone-carver shops.",
        es: "Pasea por la playa y visita los talleres de escultura.",
        pt: "Caminhe pela praia e visite as oficinas de escultura."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Nearest major airport is Chennai (55 km away). Mahabalipuram is connected with Chennai via the scenic East Coast Road (ECR).",
      es: "Mahabalipuram es accesible desde Chennai por carretera.",
      pt: "Mahabalipuram é acessível a partir de Chennai por estrada."
    },
    nearestAirport: "Chennai International Airport (MAA)",
    nearestRailway: "Chengalpattu Junction (CGL) / Chennai Central",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Chennai (55 km), Pondicherry (100 km)",
    recommendedStay: "1-2 Days",
    avgTemp: "22°C - 34°C",
    currency: "INR",
    localLanguage: "Tamil & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe coastal village. Exercise caution near strong ocean currents.",
      es: "Pueblo costero muy seguro.",
      pt: "Vila costeira muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short transfers between separate monument groups.",
        es: "Rickshaws cómodos para distancias cortas.",
        pt: "Autorriquixás convenientes para distâncias curtas."
      },
      recommended: true
    },
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Convenient for day tours along East Coast Road.",
        es: "Cómodo para visitas turísticas por la costa.",
        pt: "Conveniente para passeios turísticos no litoral."
      },
      recommended: true
    },
    {
      transportType: "Rental Scooter",
      title: { en: "Rental Scooter", es: "Alquiler de Moto", pt: "Aluguel de Moto" },
      desc: {
        en: "Affordable option for independent travellers exploring coastal lines.",
        es: "Opción económica para recorrer la zona.",
        pt: "Opção econômica para explorar a região."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Highly recommended for combining with Chennai or Pondicherry travels.",
        es: "Recomendado para combinar con viajes a Pondicherry.",
        pt: "Recomendado para combinar com viagens a Pondicherry."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Excellent way to move between central monument spots and local bazaars.",
        es: "La mejor opción para recorrer los templos cercanos.",
        pt: "A melhor opção para caminhar pelos templos próximos."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Early Start", es: "Visitas Tempranas", pt: "Visitas Cedo" },
      desc: {
        en: "Start monument visits early to avoid heat.",
        es: "Comienza las visitas a los templos temprano para evitar el calor.",
        pt: "Comece as visitas aos templos cedo para evitar o calor."
      }
    },
    {
      title: { en: "Sunscreen & Water", es: "Sol y Agua", pt: "Sol e Água" },
      desc: {
        en: "Carry sunscreen and water during walks.",
        es: "Lleva protector solar y agua durante tus paseos.",
        pt: "Leve protetor solar e água durante as caminhadas."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Wear comfortable footwear because monuments involve walking.",
        es: "Usa calzado cómodo para las zonas de arena y roca.",
        pt: "Use calçados confortáveis para as áreas de areia e pedra."
      }
    },
    {
      title: { en: "Preservation", es: "Conservación", pt: "Conservação" },
      desc: {
        en: "Respect monument protection and preservation rules.",
        es: "Respeta las reglas de conservación de los monumentos.",
        pt: "Respeite as regras de conservação dos monumentos."
      }
    },
    {
      title: { en: "Combination", es: "Combinar Destinos", pt: "Combinar Destinos" },
      desc: {
        en: "Combine the trip with nearby coastal destinations.",
        es: "Combina el viaje con otros destinos de la costa.",
        pt: "Combine a viagem com outros destinos do litoral."
      }
    }
  ],
  hotels: [
    {
      name: "Radisson Blu Resort Temple Bay Mamallapuram",
      tier: "Luxury",
      desc: {
        en: "Luxury beachfront resort with large pool and views of Shore Temple.",
        es: "Resort de lujo frente al mar con gran piscina.",
        pt: "Resort de luxo frente ao mar com grande piscina."
      },
      image: ""
    },
    {
      name: "InterContinental Chennai Mahabalipuram Resort",
      tier: "Luxury",
      desc: {
        en: "Premium coastal stay located on East Coast Road.",
        es: "Alojamiento premium de lujo en la costa.",
        pt: "Hospedagem premium de luxo no litoral."
      },
      image: ""
    },
    {
      name: "Taj Fisherman's Cove Resort & Spa",
      tier: "Luxury",
      desc: {
        en: "Historic luxury beach resort built on Dutch fort ramparts.",
        es: "Resort de lujo construido sobre un antiguo fuerte.",
        pt: "Resort de luxo construído sobre um antigo forte."
      },
      image: ""
    },
    {
      name: "Welcomhotel by ITC Hotels, Kences Palm Beach",
      tier: "Premium",
      desc: {
        en: "Comfortable premium stay offering beachfront villas and lawns.",
        es: "Alojamiento de categoría superior frente al mar.",
        pt: "Hospedagem de categoria superior frente ao mar."
      },
      image: ""
    },
    {
      name: "Chariot Beach Resort",
      tier: "Premium",
      desc: {
        en: "Beachside accommodation with views of Pancha Rathas coastline.",
        es: "Resort costero con hermosas vistas.",
        pt: "Resort costeiro com belas vistas."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Fish Curry, Prawn Masala, traditional South Indian Idli, Dosa and Filter Coffee.",
    es: "Pruebe Curry de Pescado, Masala de Camarones, Idli, Dosa y Café de Filtro.",
    pt: "Prove Curry de Peixe, Masala de Camarão, Idli, Dosa e Café de Filtro."
  },
  localFoodDishes: [
    {
      name: { en: "Fish Curry", es: "Curry de Pescado", pt: "Curry de Peixe" },
      desc: {
        en: "Fresh local fish prepared in spiced tangy tamarind and coconut gravy.",
        es: "Pescado fresco del día cocinado con tamarindo y coco.",
        pt: "Peixe fresco do dia preparado com tamarindo e coco."
      }
    },
    {
      name: { en: "Prawn Masala", es: "Masala de Camarones", pt: "Masala de Camarão" },
      desc: {
        en: "Local prawns cooked with curry leaves, onions, garlic and ground spices.",
        es: "Camarones salteados con especias locales y hojas de curry.",
        pt: "Camarões salteados com especiarias locais e folhas de curry."
      }
    },
    {
      name: { en: "Idli & Sambar", es: "Idli y Sambar", pt: "Idli e Sambar" },
      desc: {
        en: "Steamed rice cakes served with hot lentil soup and coconut chutney.",
        es: "Pastelitos de arroz al vapor con sambar de lentejas.",
        pt: "Bolinhos de arroz no vapor com sambar de lentilhas."
      }
    },
    {
      name: { en: "Dosa", es: "Dosa", pt: "Dosa" },
      desc: {
        en: "Thin crispy rice crepe served with sambar and traditional chutneys.",
        es: "Crepe crujiente de arroz servido con chutneys.",
        pt: "Crepe crocante de arroz servido com chutneys."
      }
    },
    {
      name: { en: "Filter Coffee", es: "Café de Filtro", pt: "Café de Filtro" },
      desc: {
        en: "Traditional South Indian frothy milk coffee prepared in brass filters.",
        es: "Café de filtro tradicional servido caliente.",
        pt: "Café de filtro tradicional servido quente."
      }
    }
  ],
  bestTime: {
    en: "November to February is generally the most comfortable period for exploring the monuments and coast.",
    es: "De noviembre a febrero suele ser el período más cómodo para explorar los monumentos y la costa.",
    pt: "De novembro a fevereiro geralmente é o período mais confortável para explorar os monumentos e o litoral."
  },
  faqs: [
    {
      q: { en: "What is Mahabalipuram famous for?", es: "¿Por qué es famoso Mahabalipuram?", pt: "Pelo que Mahabalipuram é famoso?" },
      a: {
        en: "Mahabalipuram is famous for its UNESCO-listed Pallava monuments and Shore Temple.",
        es: "Es famoso por sus monumentos Pallava declarados Patrimonio Mundial y Shore Temple.",
        pt: "É famoso pelos monumentos Pallava reconhecidos pela UNESCO e pelo Shore Temple."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "1–2 days are enough for the main attractions.",
        es: "1–2 días son suficientes para las principales atracciones.",
        pt: "1–2 dias são suficientes para as principais atrações."
      }
    },
    {
      q: { en: "Is Mahabalipuram good for families?", es: "¿Es adecuada para familias?", pt: "Mahabalipuram é adequada para famílias?" },
      a: {
        en: "Yes, families can enjoy heritage monuments, beaches and local food.",
        es: "Sí, las familias pueden disfrutar de monumentos, playas y gastronomía local.",
        pt: "Sim, famílias podem aproveitar monumentos, praias e culinária local."
      }
    },
    {
      q: { en: "Can Mahabalipuram be visited from Chennai?", es: "¿Se puede visitar desde Chennai?", pt: "Pode ser visitada a partir de Chennai?" },
      a: {
        en: "Yes, it is a popular day trip or overnight trip from Chennai.",
        es: "Sí, es una excursión popular de un día o una noche desde Chennai.",
        pt: "Sim, é um passeio popular de um dia ou uma noite saindo de Chennai."
      }
    },
    {
      q: { en: "What is the best attraction in Mahabalipuram?", es: "¿Principal atracción?", pt: "Principal atração?" },
      a: {
        en: "Shore Temple is one of the destination's most iconic landmarks.",
        es: "Shore Temple es uno de los monumentos más emblemáticos del destino.",
        pt: "O Shore Temple é um dos monumentos mais emblemáticos do destino."
      }
    }
  ]
};

// 4. OOTY DETAILS
const ootyDetails = {
  tagline: {
    en: "Ooty, also known as Udhagamandalam, is a scenic hill station in the Nilgiri Hills, famous for tea plantations, cool weather, colonial heritage, gardens, lakes and mountain landscapes.",
    es: "Ooty, también conocida como Udhagamandalam, es una pintoresca estación de montaña en las colinas Nilgiri, famosa por sus plantaciones de té, clima fresco, patrimonio colonial, jardines, lagos y paisajes montañosos.",
    pt: "Ooty, também conhecida como Udhagamandalam, é uma charmosa estação de montanha nas colinas Nilgiri, famosa por suas plantações de chá, clima fresco, patrimônio colonial, jardins, lagos e paisagens montanhosas."
  },
  overview: {
    en: "Ooty is one of South India's best-known hill stations, surrounded by rolling tea estates, eucalyptus forests and misty mountain landscapes. The town offers a relaxing escape from the warmer plains and is popular with families, couples and nature lovers. Highlights include Ooty Lake, Government Botanical Garden, Doddabetta Peak and the historic Nilgiri Mountain Railway. Visitors can also explore nearby Coonoor and enjoy the region's famous tea culture.",
    es: "Ooty es una de las estaciones de montaña más conocidas del sur de India, rodeada de plantaciones de té, bosques de eucaliptos y paisajes montañosos cubiertos de niebla. La ciudad ofrece una escapada tranquila de las zonas más cálidas y es popular entre familias, parejas y amantes de la naturaleza. Entre sus principales atracciones están Ooty Lake, Government Botanical Garden, Doddabetta Peak y el histórico Nilgiri Mountain Railway.",
    pt: "Ooty é uma das estações de montanha mais conhecidas do sul da Índia, cercada por plantações de chá, florestas de eucalipto e paisagens montanhosas cobertas de neblina. A cidade oferece uma escapada tranquila das regiões mais quentes e é popular entre famílias, casais e amantes da natureza. Os destaques incluem Ooty Lake, Government Botanical Garden, Doddabetta Peak e a histórica Nilgiri Mountain Railway."
  },
  highlights: [
    {
      title: { en: "Ooty Lake", es: "Ooty Lake", pt: "Ooty Lake" },
      desc: {
        en: "Scenic artificial lake located in Nilgiri Hills offering boating.",
        es: "Hermoso lago artificial rodeado de pinos con paseos en bote.",
        pt: "Belo lago artificial cercado por pinheiros com passeios de barco."
      }
    },
    {
      title: { en: "Doddabetta Peak", es: "Pico Doddabetta", pt: "Pico Doddabetta" },
      desc: {
        en: "Highest point in the Nilgiri Hills offering panoramic valley views.",
        es: "El punto más alto de las colinas Nilgiri con vistas panorámicas.",
        pt: "O ponto mais alto das colinas Nilgiri com vistas panorâmicas."
      }
    },
    {
      title: { en: "Botanical Garden", es: "Jardín Botánico", pt: "Jardim Botânico" },
      desc: {
        en: "Spacious government garden housing rare trees and fossils.",
        es: "Extenso jardín botánico con especies exóticas de plantas.",
        pt: "Extenso jardim botânico com espécies exóticas de plantas."
      }
    },
    {
      title: { en: "Nilgiri Mountain Railway", es: "Nilgiri Mountain Railway", pt: "Nilgiri Mountain Railway" },
      desc: {
        en: "UNESCO-listed historic steam toy train running through hills.",
        es: "Histórico tren de vapor declarado Patrimonio de la Humanidad (UNESCO).",
        pt: "Histórica ferrovia a vapor declarada Patrimônio Mundial (UNESCO)."
      }
    },
    {
      title: { en: "Tea Plantations", es: "Plantaciones de Té", pt: "Plantações de Chá" },
      desc: {
        en: "Scenic green hillsides dedicated to Nilgiri tea estates.",
        es: "Hermosas colinas verdes cubiertas de cultivos de té.",
        pt: "Belas colinas verdes cobertas de plantações de chá."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Boat Ride on Ooty Lake", es: "Paseo en bote en Ooty Lake", pt: "Passeio de barco no Ooty Lake" },
      desc: {
        en: "Rent a paddle or motor boat to enjoy scenic lakeside views.",
        es: "Alquila un bote a pedal o motor para disfrutar del lago.",
        pt: "Alugue um pedalinho ou barco a motor para curtir o lago."
      }
    },
    {
      name: { en: "Visit Doddabetta Peak", es: "Visitar el Pico Doddabetta", pt: "Visitar o Pico Doddabetta" },
      desc: {
        en: "Visit the telescope house to get panoramic views of the Nilgiri forests.",
        es: "Visita la casa del telescopio para ver los valles Nilgiri.",
        pt: "Visite a casa do telescópio para ver os vales Nilgiri."
      }
    },
    {
      name: { en: "Explore Botanical Garden", es: "Explorar el Jardín Botánico", pt: "Explorar o Jardim Botânico" },
      desc: {
        en: "Explore green lawns, glass houses, and the fossil tree trunk.",
        es: "Explora los prados verdes y colecciones del jardín botánico.",
        pt: "Explore os gramados verdes e coleções do jardim botânico."
      }
    },
    {
      name: { en: "Ride Toy Train", es: "Viajar en el Tren de Juguete", pt: "Passear no Trem de Brinquedo" },
      desc: {
        en: "Ride the historic steam railway toy train to enjoy scenic hillside bridges.",
        es: "Viaja en el tren histórico para disfrutar de paisajes de montaña.",
        pt: "Viaje no trem histórico para apreciar paisagens de montanha."
      }
    },
    {
      name: { en: "Visit a Tea Estate", es: "Visitar una Finca de Té", pt: "Visitar uma Fazenda de Chá" },
      desc: {
        en: "Visit a local tea factory and plantation to learn about manufacturing and taste fresh tea.",
        es: "Visita una fábrica de té local para conocer el proceso.",
        pt: "Visite uma fábrica de chá local para conhecer o processo."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Coimbatore International Airport is 85 km away. Toy train starts from Mettupalayam rail junction. Highway bus transit connects with Mysuru and Bangalore.",
      es: "Ooty es accesible por el aeropuerto de Coimbatore, tren de montaña o carretera.",
      pt: "Ooty é acessível pelo aeroporto de Coimbatore, trem de montanha ou estrada."
    },
    nearestAirport: "Coimbatore International Airport (CJB)",
    nearestRailway: "Mettupalayam (MTP) / Ooty Railway Station (UAM)",
    transportOptions: "Buses, Taxis, Toy Train, Auto-rickshaws",
    distanceFromMajorCities: "Coimbatore (85 km), Bangalore (270 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "5°C - 20°C",
    currency: "INR",
    localLanguage: "Tamil, Kannada & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe hill station. Drive carefully on mountain hairpin bends.",
      es: "Estación de montaña muy segura.",
      pt: "Estação de montanha muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Convenient for sightseeing routes across Doddabetta and Pykara Lake.",
        es: "Cómodo para las colinas y lagos lejanos.",
        pt: "Conveniente para as colinas e lagos distantes."
      },
      recommended: true
    },
    {
      transportType: "Tourist Bus",
      title: { en: "Tourist Bus", es: "Autobús Turístico", pt: "Ônibus Turístico" },
      desc: {
        en: "Organised local municipal bus tours covering standard city points.",
        es: "Visitas organizadas en autobús.",
        pt: "Visitas organizadas em ônibus."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Recommended for exploring Coonoor and surrounding tea gardens.",
        es: "Recomendado para visitar Coonoor y alrededores.",
        pt: "Recomendado para visitar Coonoor e arredores."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short transfers between central hotels and Ooty markets.",
        es: "Útil en el centro urbano.",
        pt: "Útil no centro urbano."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal around the botanical gardens, lakeside walk, and tea garden trails.",
        es: "Excelente para pasear por los jardines y senderos de té.",
        pt: "Excelente para caminhar pelos jardins e trilhas de chá."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Warm Clothes", es: "Ropa de Abrigo", pt: "Roupas de Frio" },
      desc: {
        en: "Carry warm layers throughout the year.",
        es: "Lleva prendas de abrigo durante todo el año.",
        pt: "Leve roupas de frio durante todo o ano."
      }
    },
    {
      title: { en: "Shoes", es: "Zapatos Cómodos", pt: "Calçados" },
      desc: {
        en: "Wear comfortable shoes for hilly terrain.",
        es: "Usa zapatos cómodos para caminar por pendientes.",
        pt: "Use calçados confortáveis para caminhar em subidas."
      }
    },
    {
      title: { en: "Toy Train Booking", es: "Reserva de Tren", pt: "Reserva do Trem" },
      desc: {
        en: "Book the toy train well in advance during peak season.",
        es: "Reserva los billetes del tren de juguete con bastante anticipación.",
        pt: "Reserve as passagens do trem de brinquedo com antecedência."
      }
    },
    {
      title: { en: "Rain Gear", es: "Clima Cambiante", pt: "Clima Instável" },
      desc: {
        en: "Carry rain protection because weather can change quickly.",
        es: "Lleva protección para la lluvia, el clima cambia rápido.",
        pt: "Leve capa de chuva, o clima muda rapidamente."
      }
    },
    {
      title: { en: "Souvenirs", es: "Recuerdos Locales", pt: "Lembranças Locais" },
      desc: {
        en: "Buy locally produced tea and chocolates as souvenirs.",
        es: "Compra té y chocolates caseros locales como recuerdo.",
        pt: "Compre chá e chocolates artesanais como lembrança."
      }
    }
  ],
  hotels: [
    {
      name: "Savoy Ooty - IHCL SeleQtions",
      tier: "Luxury",
      desc: {
        en: "Historic luxury hotel built in British cottage style with beautiful gardens.",
        es: "Hotel histórico de lujo con estilo de cabaña británica y hermosos jardines.",
        pt: "Hotel histórico de luxo em estilo chalé britânico com belos jardins."
      },
      image: ""
    },
    {
      name: "Sterling Ooty Elk Hill",
      tier: "Premium",
      desc: {
        en: "Resort overlooking Ooty valley, offering comfortable rooms.",
        es: "Resort con vistas al valle de Ooty.",
        pt: "Resort com vista para o vale de Ooty."
      },
      image: ""
    },
    {
      name: "Fortune Resort Sullivan Court",
      tier: "Premium",
      desc: {
        en: "Comfortable premium stay with colonial design and modern services.",
        es: "Cómodo hotel premium con diseño clásico.",
        pt: "Confortável hotel premium com design clássico."
      },
      image: ""
    },
    {
      name: "Gem Park Ooty",
      tier: "Premium",
      desc: {
        en: "Premium hotel with scenic valley views near the botanical gardens.",
        es: "Hotel con hermosas vistas al valle y buenas instalaciones.",
        pt: "Hotel com belas vistas para o vale e excelentes instalações."
      },
      image: ""
    },
    {
      name: "Sinclairs Retreat Ooty",
      tier: "Premium",
      desc: {
        en: "Peaceful hillside accommodation surrounded by nature.",
        es: "Alojamiento tranquilo rodeado de naturaleza.",
        pt: "Hospedagem tranquila cercada por natureza."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Ooty Varkey, Homemade Chocolates, South Indian Thali, Vegetable Stew and fresh Nilgiri Tea.",
    es: "Pruebe Ooty Varkey, Chocolates Caseros, Thali del Sur, Estofado de Verduras y Té Nilgiri.",
    pt: "Prove Ooty Varkey, Chocolates Artesanais, Thali do Sul, Ensopado de Vegetais e Chá Nilgiri."
  },
  localFoodDishes: [
    {
      name: { en: "Ooty Varkey", es: "Ooty Varkey", pt: "Ooty Varkey" },
      desc: {
        en: "Traditional crispy puffed biscuit prepared from wheat, butter and water.",
        es: "Galleta crujiente tradicional elaborada con trigo y mantequilla.",
        pt: "Biscoito crocante tradicional preparado com trigo e manteiga."
      }
    },
    {
      name: { en: "Homemade Chocolates", es: "Chocolates Caseros", pt: "Chocolates Artesanais" },
      desc: {
        en: "Local fudge and cocoa chocolates prepared in traditional Ooty kitchens.",
        es: "Chocolates artesanales y trufas elaborados en la región.",
        pt: "Chocolates artesanais e trufas preparados na região."
      }
    },
    {
      name: { en: "South Indian Thali", es: "Thali del Sur", pt: "Thali do Sul" },
      desc: {
        en: "A platter of rice served with sambar, rasam, curds, vegetables and papad.",
        es: "Plato tradicional con arroz, sambar, verduras y yogur.",
        pt: "Prato tradicional com arroz, sambar, vegetais e iogurte."
      }
    },
    {
      name: { en: "Vegetable Stew", es: "Estofado de Verduras", pt: "Ensopado de Vegetais" },
      desc: {
        en: "Fresh local vegetables cooked in mild spiced coconut milk gravy.",
        es: "Verduras locales cocinadas en una suave salsa de leche de coco.",
        pt: "Vegetais locais cozidos em molho suave de leite de coco."
      }
    },
    {
      name: { en: "Nilgiri Tea", es: "Té de Nilgiri", pt: "Chá de Nilgiri" },
      desc: {
        en: "Freshly brewed aromatic black tea cultivated on the surrounding estates.",
        es: "Té negro aromático fresco cultivado en los valles.",
        pt: "Chá preto aromático fresco cultivado nos vales."
      }
    }
  ],
  bestTime: {
    en: "March to June is popular for pleasant weather and summer escapes. September to November is also excellent for greenery and clear mountain scenery.",
    es: "De marzo a junio es popular por su clima agradable y como escapada de verano. De septiembre a noviembre también es excelente por la vegetación y los paisajes montañosos.",
    pt: "Março a junho é popular pelo clima agradável e como destino de verão. Setembro a novembro também é excelente pela vegetação e pelas paisagens montanhosas."
  },
  faqs: [
    {
      q: { en: "What is Ooty famous for?", es: "¿Por qué es famosa Ooty?", pt: "Pelo que Ooty é famosa?" },
      a: {
        en: "Ooty is famous for tea plantations, cool weather, gardens, lakes and the Nilgiri Mountain Railway.",
        es: "Ooty es famoso por sus plantaciones de té, clima fresco, jardines, lagos y el Nilgiri Mountain Railway.",
        pt: "Ooty é famoso por suas plantações de chá, clima fresco, jardins, lagos e pela Nilgiri Mountain Railway."
      }
    },
    {
      q: { en: "How many days are enough for Ooty?", es: "¿Cuántos days son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "3–4 days are ideal for exploring Ooty and nearby Coonoor.",
        es: "3–4 días son ideales para explorar Ooty y la cercana Coonoor.",
        pt: "3–4 dias são ideais para explorar Ooty e a vizinha Coonoor."
      }
    },
    {
      q: { en: "Is Ooty good for families?", es: "¿Es adecuada para familias?", pt: "Ooty é adequada para famílias?" },
      a: {
        en: "Yes, Ooty offers gardens, lakes, scenic train rides and family-friendly attractions.",
        es: "Sí, ofrece jardines, lagos, viajes en tren panorámicos y atracciones familiares.",
        pt: "Sim, oferece jardins, lagos, passeios de trem panorâmicos e atrações para famílias."
      }
    },
    {
      q: { en: "Does Ooty get cold?", es: "¿Hace frío en Ooty?", pt: "Faz frio em Ooty?" },
      a: {
        en: "Yes, temperatures can be cool throughout the year, particularly during winter nights.",
        es: "Sí, las temperaturas pueden ser frescas durante todo el año, especialmente por las noches de invierno.",
        pt: "Sim, as temperaturas podem ser baixas durante todo o ano, especialmente nas noites de inverno."
      }
    },
    {
      q: { en: "What should I buy in Ooty?", es: "¿Qué comprar en Ooty?", pt: "O que comprar em Ooty?" },
      a: {
        en: "Tea, homemade chocolates and locally produced products are popular souvenirs.",
        es: "El té, los chocolates caseros y productos locales son recuerdos populares.",
        pt: "Chá, chocolates artesanais e produtos locais são souvenirs populares."
      }
    }
  ]
};

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  const tnIdx = states.findIndex(s => s.slug === "tamil-nadu");
  if (tnIdx !== -1) {
    console.log("Updating Tamil Nadu cities in local file...");
    const tnState = states[tnIdx];
    tnState.cities = tnState.cities || [];
    
    // Update function helper
    const updateCity = (slug, details) => {
      const cityIdx = tnState.cities.findIndex(c => c.slug === slug);
      if (cityIdx !== -1) {
        tnState.cities[cityIdx] = { ...tnState.cities[cityIdx], ...details };
        console.log(`Updated city details: ${slug}`);
      } else {
        console.error(`City slug '${slug}' not found under Tamil Nadu!`);
      }
    };

    updateCity("chennai", chennaiDetails);
    updateCity("madurai", maduraiDetails);
    updateCity("mahabalipuram", mahabalipuramDetails);
    updateCity("ooty", ootyDetails);

    states[tnIdx] = tnState;
  } else {
    console.error("Tamil Nadu state not found in states.json!");
  }

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for Tamil Nadu cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const docRef = doc(firestore, "states", "tamil-nadu");
    setDoc(docRef, states[tnIdx]).then(() => {
      console.log("🚀 SUCCESS: Remote Firestore 'tamil-nadu' document successfully updated!");
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
