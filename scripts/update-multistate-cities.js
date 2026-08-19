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

// ======================== PUNJAB CITIES ========================

const amritsarDetails = {
  tagline: {
    en: "Amritsar is the spiritual and cultural heart of Punjab, famous for the Golden Temple, historic heritage, vibrant markets and rich Punjabi cuisine.",
    es: "Amritsar es el corazón espiritual y cultural de Punjab, famoso por el Templo Dorado, su patrimonio histórico, mercados vibrantes y rica gastronomía punyabí.",
    pt: "Amritsar é o coração espiritual e cultural do Punjab, famoso pelo Templo Dourado, patrimônio histórico, mercados vibrantes e rica culinária punjabi."
  },
  overview: {
    en: "Amritsar is one of India's most important spiritual and cultural destinations. The city is home to the magnificent Golden Temple, Jallianwala Bagh, the Partition Museum and the famous Wagah-Attari Border ceremony. Its historic streets, colourful markets and authentic Punjabi food make it an excellent destination for cultural, spiritual and culinary experiences.",
    es: "Amritsar es uno de los destinos espirituales y culturales más importantes de India. La ciudad alberga el magnífico Templo Dorado, Jallianwala Bagh, el Partition Museum y la famosa ceremonia de la frontera Wagah-Attari. Sus calles históricas, mercados coloridos y auténtica gastronomía punyabí la convierten en un excelente destino cultural, espiritual y gastronómico.",
    pt: "Amritsar é um dos destinos espirituais e culturais mais importantes da Índia. A cidade abriga o magnífico Templo Dourado, Jallianwala Bagh, o Partition Museum e a famosa cerimônia da fronteira Wagah-Attari. Suas ruas históricas, mercados coloridos e autêntica culinária punjabi fazem dela um excelente destino cultural, espiritual e gastronômico."
  },
  highlights: [
    {
      title: { en: "Golden Temple", es: "Templo Dorado", pt: "Templo Dourado" },
      desc: {
        en: "Visit the magnificent Golden Temple and experience its peaceful atmosphere and spiritual significance.",
        es: "Visita el magnífico Templo Dorado y disfruta de su ambiente tranquilo e importancia espiritual.",
        pt: "Visite o magnífico Templo Dourado e vivencie sua atmosfera tranquila e importância espiritual."
      }
    },
    {
      title: { en: "Jallianwala Bagh", es: "Jallianwala Bagh", pt: "Jallianwala Bagh" },
      desc: {
        en: "Explore this important historical memorial connected with India's freedom struggle.",
        es: "Explora este importante monumento histórico relacionado con la lucha por la independencia de India.",
        pt: "Explore este importante memorial histórico ligado à luta pela independência da Índia."
      }
    },
    {
      title: { en: "Wagah-Attari Border", es: "Frontera Wagah-Attari", pt: "Fronteira Wagah-Attari" },
      desc: {
        en: "Experience the famous border ceremony and its energetic atmosphere.",
        es: "Vive la famosa ceremonia fronteriza y su ambiente lleno de energía.",
        pt: "Vivencie a famosa cerimônia da fronteira e sua atmosfera vibrante."
      }
    },
    {
      title: { en: "Partition Museum", es: "Partition Museum", pt: "Partition Museum" },
      desc: {
        en: "Learn about the history and human stories surrounding the Partition of India.",
        es: "Conoce la historia y las historias humanas relacionadas con la Partición de India.",
        pt: "Conheça a história e os relatos humanos relacionados à Partição da Índia."
      }
    },
    {
      title: { en: "Old City Markets", es: "Mercados de la Ciudad Vieja", pt: "Mercados da Cidade Antiga" },
      desc: {
        en: "Explore traditional markets filled with handicrafts, textiles, sweets and Punjabi food.",
        es: "Explora los mercados tradicionales llenos de artesanías, textiles, dulces y comida punyabí.",
        pt: "Explore os mercados tradicionais repletos de artesanato, tecidos, doces e comida punjabi."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit the Golden Temple", es: "Visitar el Templo Dorado", pt: "Visitar o Templo Dourado" },
      desc: {
        en: "Visit the Golden Temple early in the morning.",
        es: "Visita el Templo Dorado temprano por la mañana.",
        pt: "Visite o Templo Dourado de manhã cedo."
      }
    },
    {
      name: { en: "Explore Jallianwala Bagh", es: "Explorar Jallianwala Bagh", pt: "Explore Jallianwala Bagh" },
      desc: {
        en: "Explore Jallianwala Bagh and its historical memorials.",
        es: "Explora Jallianwala Bagh y sus monumentos históricos.",
        pt: "Explore Jallianwala Bagh e seus memoriais históricos."
      }
    },
    {
      name: { en: "Attend Wagah Border Ceremony", es: "Asistir a la Ceremonia de Wagah", pt: "Assistir à Cerimônia de Wagah" },
      desc: {
        en: "Attend the Wagah-Attari Border ceremony.",
        es: "Asiste a la ceremonia de la frontera Wagah-Attari.",
        pt: "Assista à cerimônia da fronteira Wagah-Attari."
      }
    },
    {
      name: { en: "Explore Partition Museum", es: "Explorar el Partition Museum", pt: "Explorar o Partition Museum" },
      desc: {
        en: "Explore the Partition Museum.",
        es: "Visita el Partition Museum.",
        pt: "Visite o Partition Museum."
      }
    },
    {
      name: { en: "Taste Authentic Street Food", es: "Probar Comida Callejera", pt: "Experimentar Comida de Rua" },
      desc: {
        en: "Taste authentic Amritsari street food.",
        es: "Prueba la auténtica comida callejera de Amritsar.",
        pt: "Experimente a autêntica comida de rua de Amritsar."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Sri Guru Ram Dass Jee International Airport provides domestic and international connectivity. Amritsar Junction has regular train services.",
      es: "El aeropuerto ofrece conexiones nacionales e internacionales.",
      pt: "O aeroporto oferece conexões domésticas e internacionais."
    },
    nearestAirport: "Sri Guru Ram Dass Jee International Airport (ATQ)",
    nearestRailway: "Amritsar Junction (ASR)",
    transportOptions: "Auto-rickshaws, App-based Taxis, Cycle-rickshaws, Buses",
    distanceFromMajorCities: "Chandigarh (230 km), Delhi (450 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "10°C - 34°C",
    currency: "INR",
    localLanguage: "Punjabi, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe pilgrimage city. Cover your head and remove shoes before entering the temple.",
      es: "Ciudad muy segura y sagrada.",
      pt: "Cidade muito segura e sagrada."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are convenient for short distances.",
        es: "Los auto-rickshaws son prácticos para distancias cortas.",
        pt: "Os auto-rickshaws são convenientes para distâncias curtas."
      },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxi por Aplicativo" },
      desc: {
        en: "App-based taxis are useful for comfortable city travel.",
        es: "Los taxis mediante aplicaciones son útiles para viajar cómodamente.",
        pt: "Táxis por aplicativo são úteis para deslocamentos confortáveis."
      },
      recommended: true
    },
    {
      transportType: "Cycle-Rickshaw",
      title: { en: "Cycle-Rickshaw", es: "Bici-Rickshaw", pt: "Bici-riquixá" },
      desc: {
        en: "Cycle-rickshaws are suitable around local markets.",
        es: "Los cycle-rickshaws son adecuados para los mercados locales.",
        pt: "Os cycle-rickshaws são adequados para os mercados locais."
      },
      recommended: false
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Local buses connect different parts of the city.",
        es: "Los autobuses locales conectan diferentes partes de la ciudad.",
        pt: "Os ônibus locais conectam diferentes partes da cidade."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is convenient around the Golden Temple heritage area.",
        es: "Caminar es práctico alrededor de la zona patrimonial del Templo Dorado.",
        pt: "Caminhar é conveniente na área histórica ao redor do Templo Dourado."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Dress Modestly", es: "Viste de manera modesta", pt: "Vista-se de maneira discreta" },
      desc: {
        en: "Dress modestly when visiting the Golden Temple.",
        es: "Viste de manera modesta al visitar el Templo Dorado.",
        pt: "Vista-se de maneira discreta ao visitar o Templo Dourado."
      }
    },
    {
      title: { en: "Cover Head", es: "Cúbrete la cabeza", pt: "Cubra a cabeça" },
      desc: {
        en: "Cover your head inside the Golden Temple complex.",
        es: "Cúbrete la cabeza dentro del complejo del Templo Dorado.",
        pt: "Cubra a cabeça dentro do complexo do Templo Dourado."
      }
    },
    {
      title: { en: "Remove Footwear", es: "Quítate el calzado", pt: "Retire os calçados" },
      desc: {
        en: "Remove your footwear before entering the shrine.",
        es: "Quítate el calzado antes de entrar al santuario.",
        pt: "Retire os calçados antes de entrar no santuário."
      }
    },
    {
      title: { en: "Early Start", es: "Comienza temprano", pt: "Comece cedo" },
      desc: {
        en: "Start sightseeing early to avoid crowds and heat.",
        es: "Comienza las visitas temprano para evitar multitudes y calor.",
        pt: "Comece os passeios cedo para evitar multidões e calor."
      }
    },
    {
      title: { en: "Security Checks", es: "Controles de seguridad", pt: "Controles de segurança" },
      desc: {
        en: "Keep some extra time for security checks at popular attractions.",
        es: "Reserva tiempo adicional para los controles de seguridad en lugares populares.",
        pt: "Reserve tempo extra para os controles de segurança em locais populares."
      }
    }
  ],
  hotels: [
    {
      name: "Taj Swarna",
      tier: "Luxury",
      desc: {
        en: "A luxury hotel offering modern facilities and comfortable rooms.",
        es: "Un hotel de lujo con instalaciones modernas y habitaciones confortables.",
        pt: "Um hotel de luxo com instalações modernas e quartos confortáveis."
      },
      image: ""
    },
    {
      name: "Hyatt Regency Amritsar",
      tier: "Luxury",
      desc: {
        en: "A premium hotel suitable for both leisure and business travellers.",
        es: "Un hotel premium adecuado para viajeros de ocio y negocios.",
        pt: "Um hotel premium adequado para viajantes de lazer e negócios."
      },
      image: ""
    },
    {
      name: "Ramada by Wyndham Amritsar",
      tier: "Premium",
      desc: {
        en: "A convenient upscale stay close to the Golden Temple area.",
        es: "Un alojamiento elegante cerca de la zona del Templo Dorado.",
        pt: "Uma hospedagem confortável próxima à região do Templo Dourado."
      },
      image: ""
    },
    {
      name: "Radisson Blu Hotel Amritsar",
      tier: "Premium",
      desc: {
        en: "A comfortable premium hotel with modern amenities.",
        es: "Un hotel premium confortable con instalaciones modernas.",
        pt: "Um hotel premium confortável com comodidades modernas."
      },
      image: ""
    },
    {
      name: "Welcomhotel by ITC Hotels",
      tier: "Premium",
      desc: {
        en: "An upscale accommodation offering a comfortable city stay.",
        es: "Un alojamiento de categoría superior para una estancia confortable.",
        pt: "Uma hospedagem sofisticada para uma estadia confortável."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Amritsari Kulcha, Amritsari Fish, Chole Bhature, Dal Makhani and Lassi.",
    es: "Pruebe Amritsari Kulcha, Amritsari Fish, Chole Bhature, Dal Makhani y Lassi.",
    pt: "Prove Amritsari Kulcha, Amritsari Fish, Chole Bhature, Dal Makhani e Lassi."
  },
  localFoodDishes: [
    {
      name: { en: "Amritsari Kulcha", es: "Amritsari Kulcha", pt: "Amritsari Kulcha" },
      desc: {
        en: "Crispy stuffed flatbread traditionally served with chole and chutney.",
        es: "Pan plano relleno y crujiente servido tradicionalmente con chole y chutney.",
        pt: "Pão achatado recheado e crocante, tradicionalmente servido com chole e chutney."
      }
    },
    {
      name: { en: "Amritsari Fish", es: "Pescado Amritsari", pt: "Peixe Amritsari" },
      desc: {
        en: "Crispy spiced fish prepared in the traditional Amritsari style.",
        es: "Pescado crujiente condimentado preparado al estilo tradicional de Amritsar.",
        pt: "Peixe crocante e temperado preparado ao estilo tradicional de Amritsar."
      }
    },
    {
      name: { en: "Chole Bhature", es: "Chole Bhature", pt: "Chole Bhature" },
      desc: {
        en: "Spicy chickpea curry served with fluffy fried bread.",
        es: "Curry de garbanzos picante servido con pan frito y esponjoso.",
        pt: "Curry de grão-de-bico picante servido com pão frito e macio."
      }
    },
    {
      name: { en: "Dal Makhani", es: "Dal Makhani", pt: "Dal Makhani" },
      desc: {
        en: "Slow-cooked creamy lentils and a classic Punjabi comfort food.",
        es: "Lentejas cremosas cocinadas lentamente, un clásico de la cocina punyabí.",
        pt: "Lentilhas cremosas cozidas lentamente, um clássico da culinária punjabi."
      }
    },
    {
      name: { en: "Lassi", es: "Lassi", pt: "Lassi" },
      desc: {
        en: "Thick traditional yogurt-based drink, often served sweet.",
        es: "Bebida tradicional espesa a base de yogur, normalmente dulce.",
        pt: "Bebida tradicional espessa à base de iogurte, geralmente doce."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally the most comfortable period for sightseeing.",
    es: "De octubre a marzo suele ser el período más agradable para hacer turismo.",
    pt: "De outubro a março geralmente é o período mais confortável para passeios."
  },
  faqs: [
    {
      q: { en: "What is Amritsar famous for?", es: "¿Por qué es famosa Amritsar?", pt: "Pelo que Amritsar é famosa?" },
      a: {
        en: "Amritsar is famous for the Golden Temple, Punjabi culture, Jallianwala Bagh and its delicious food.",
        es: "Amritsar es famoso por el Templo Dorado, la cultura punyabí, Jallianwala Bagh y su deliciosa gastronomía.",
        pt: "Amritsar é famoso pelo Templo Dourado, cultura punjabi, Jallianwala Bagh e sua deliciosa gastronomia."
      }
    },
    {
      q: { en: "How many days are enough for Amritsar?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Two to three days are ideal for exploring the city's major attractions.",
        es: "Dos o tres días son ideales para explorar las principales atracciones de la ciudad.",
        pt: "Dois a três dias são ideais para explorar as principais atrações da cidade."
      }
    },
    {
      q: { en: "Is Amritsar good for families?", es: "¿Es adecuada para familias?", pt: "Amritsar é adequada para famílias?" },
      a: {
        en: "Yes, Amritsar offers historical, cultural, spiritual and food experiences suitable for families.",
        es: "Sí, Amritsar ofrece experiencias históricas, culturales, espirituales y gastronómicas adecuadas para familias.",
        pt: "Sim, Amritsar oferece experiências históricas, culturais, espirituais e gastronômicas adequadas para famílias."
      }
    },
    {
      q: { en: "What should I wear at the Golden Temple?", es: "¿Qué debo vestir?", pt: "O que devo vestir?" },
      a: {
        en: "Wear modest clothing and cover your head inside the Golden Temple complex.",
        es: "Usa ropa modesta y cúbrete la cabeza dentro del complejo del Templo Dorado.",
        pt: "Use roupas discretas e cubra a cabeça dentro do complexo do Templo Dourado."
      }
    },
    {
      q: { en: "Is Wagah Border worth visiting?", es: "¿Vale la pena visitar la frontera Wagah?", pt: "Vale a pena visitar a fronteira Wagah?" },
      a: {
        en: "Yes, the border ceremony is a popular cultural experience, subject to current timings and arrangements.",
        es: "Sí, la ceremonia fronteriza es una experiencia cultural popular, sujeta a los horarios y condiciones vigentes.",
        pt: "Sim, a cerimônia da fronteira é uma experiência cultural popular, sujeita aos horários e condições vigentes."
      }
    }
  ]
};

const chandigarhDetails = {
  tagline: {
    en: "Chandigarh is India's beautifully planned modern city, known for its architecture, gardens, wide boulevards, museums and relaxed urban atmosphere.",
    es: "Chandigarh es una ciudad moderna cuidadosamente planificada, conocida por su arquitectura, jardines, amplias avenidas, museos y ambiente urbano relajado.",
    pt: "Chandigarh é uma cidade moderna cuidadosamente planejada, conhecida por sua arquitetura, jardins, avenidas largas, museus e atmosfera urbana tranquila."
  },
  overview: {
    en: "Chandigarh is one of India's most distinctive planned cities, associated with the architectural vision of Le Corbusier. Its organized sectors, modernist buildings, green spaces and cultural attractions create a unique travel experience. Rock Garden, Sukhna Lake, Capitol Complex, Rose Garden and Sector 17 are among its major attractions.",
    es: "Chandigarh es una de las ciudades planificadas más singulares de India y está asociada con la visión arquitectónica de Le Corbusier. Sus sectores organizados, edificios modernistas, espacios verdes y atracciones culturales crean una experiencia única.",
    pt: "Chandigarh é uma das cidades planejadas mais distintas da Índia e está associada à visão arquitetônica de Le Corbusier. Seus setores organizados, edifícios modernistas, áreas verdes e atrações culturais criam uma experiência única."
  },
  highlights: [
    {
      title: { en: "Rock Garden", es: "Rock Garden", pt: "Rock Garden" },
      desc: {
        en: "A fascinating garden created using recycled materials.",
        es: "Un fascinante jardín creado con materiales reciclados.",
        pt: "Um fascinante jardim criado com materiais reciclados."
      }
    },
    {
      title: { en: "Sukhna Lake", es: "Lago Sukhna", pt: "Lago Sukhna" },
      desc: {
        en: "A peaceful lake popular for walks and leisure.",
        es: "Un lago tranquilo popular para paseos y ocio.",
        pt: "Um lago tranquilo popular para caminhadas e lazer."
      }
    },
    {
      title: { en: "Capitol Complex", es: "Capitol Complex", pt: "Capitol Complex" },
      desc: {
        en: "An important example of modernist architecture.",
        es: "Un importante ejemplo de arquitectura modernista.",
        pt: "Um importante exemplo de arquitetura modernista."
      }
    },
    {
      title: { en: "Rose Garden", es: "Rose Garden", pt: "Rose Garden" },
      desc: {
        en: "A beautiful garden with extensive varieties of roses.",
        es: "Un hermoso jardín con numerosas variedades de rosas.",
        pt: "Um belo jardim com diversas variedades de rosas."
      }
    },
    {
      title: { en: "Sector 17", es: "Sector 17", pt: "Sector 17" },
      desc: {
        en: "A popular shopping and dining district.",
        es: "Una popular zona comercial y gastronómica.",
        pt: "Uma popular área de compras e gastronomia."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Rock Garden", es: "Explorar Rock Garden", pt: "Explore o Rock Garden" },
      desc: {
        en: "Explore the unique sculptures and rock layouts made of industrial wastes.",
        es: "Explora esculturas hechas con materiales reciclados.",
        pt: "Explore esculturas feitas com materiais reciclados."
      }
    },
    {
      name: { en: "Walk Sukhna Lake", es: "Pasear por Sukhna Lake", pt: "Caminhar no Sukhna Lake" },
      desc: {
        en: "Walk around Sukhna Lake and enjoy boating activities.",
        es: "Pasea alrededor del lago y disfruta de paseos en bote.",
        pt: "Caminhe ao redor do lago e faça passeios de barco."
      }
    },
    {
      name: { en: "Discover Le Corbusier Landmarks", es: "Descubrir Arquitectura Modernista", pt: "Conhecer Marcos Modernistas" },
      desc: {
        en: "Discover Le Corbusier's architectural landmarks such as Capitol Complex.",
        es: "Descubre los monumentos de Le Corbusier.",
        pt: "Conheça os marcos arquitetônicos de Le Corbusier."
      }
    },
    {
      name: { en: "Visit the Rose Garden", es: "Visitar el Rose Garden", pt: "Visitar o Rose Garden" },
      desc: {
        en: "Walk around the rose beds and landscaped lawns.",
        es: "Visita el Rose Garden y pasea entre las rosas.",
        pt: "Visite o Rose Garden e caminhe entre as rosas."
      }
    },
    {
      name: { en: "Shop & Dine Sector 17", es: "Compras en Sector 17", pt: "Compras no Sector 17" },
      desc: {
        en: "Shop and dine in Sector 17 central markets.",
        es: "Compra y come en el céntrico Sector 17.",
        pt: "Faça compras e coma no central Sector 17."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Chandigarh International Airport connects with domestic lines. Chandigarh Railway Station connects with Delhi Express trains.",
      es: "Chandigarh es accesible por avión, tren y carretera.",
      pt: "Chandigarh é acessível por avião, trem e estrada."
    },
    nearestAirport: "Chandigarh International Airport (IXC)",
    nearestRailway: "Chandigarh Junction (CDG)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Delhi (250 km), Shimla (110 km)",
    recommendedStay: "2 Days",
    avgTemp: "9°C - 33°C",
    currency: "INR",
    localLanguage: "Punjabi, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe planned city. Walk freely around designated sectors.",
      es: "Ciudad muy segura y ordenada.",
      pt: "Cidade muito segura e ordenada."
    }
  },
  gettingAround: [
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Use local buses for economical travel.",
        es: "Usa autobuses locales para viajar económicamente.",
        pt: "Use ônibus locais para viagens econômicas."
      },
      recommended: false
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are convenient for short distances.",
        es: "Los auto-rickshaws son prácticos para distancias cortas.",
        pt: "Os auto-rickshaws são convenientes para distâncias curtas."
      },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "App-based taxis are useful for comfortable travel.",
        es: "Los taxis por aplicación son útiles para viajar cómodamente.",
        pt: "Táxis por aplicativo são úteis para deslocamentos confortáveis."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Private cars are useful for nearby destinations.",
        es: "Los coches privados son útiles para destinos cercanos.",
        pt: "Carros particulares são úteis para destinos próximos."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is pleasant in many planned sectors.",
        es: "Caminar es agradable en muchos sectores planificados.",
        pt: "Caminhar é agradável em muitos setores planejados."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Sector System", es: "Sistema de sectores", pt: "Sistema de setores" },
      desc: {
        en: "Use the sector system to navigate easily.",
        es: "Usa el sistema de sectores para orientarte fácilmente.",
        pt: "Use o sistema de setores para se locomover facilmente."
      }
    },
    {
      title: { en: "Avoid Noon Heat", es: "Evita el calor del mediodía", pt: "Evite o calor do meio-dia" },
      desc: {
        en: "Visit outdoor attractions in the morning or evening.",
        es: "Visita las atracciones al aire libre por la mañana o por la tarde.",
        pt: "Visite atrações ao ar livre pela manhã ou no final da tarde."
      }
    },
    {
      title: { en: "Sun Protection", es: "Protección solar", pt: "Proteção solar" },
      desc: {
        en: "Carry sun protection during summer.",
        es: "Lleva protección solar durante el verano.",
        pt: "Leve proteção solar durante o verão."
      }
    },
    {
      title: { en: "Rock Garden Time", es: "Tiempo para Rock Garden", pt: "Tempo no Rock Garden" },
      desc: {
        en: "Keep enough time for Rock Garden.",
        es: "Reserva suficiente tiempo para Rock Garden.",
        pt: "Reserve tempo suficiente para o Rock Garden."
      }
    },
    {
      title: { en: "Relaxed Pace", es: "Ritmo tranquilo", pt: "Ritmo tranquilo" },
      desc: {
        en: "Enjoy Chandigarh at a relaxed pace.",
        es: "Disfruta Chandigarh a un ritmo tranquilo.",
        pt: "Aproveite Chandigarh em um ritmo tranquilo."
      }
    }
  ],
  hotels: [
    {
      name: "The Oberoi Sukhvilas Spa Resort",
      tier: "Luxury",
      desc: {
        en: "Luxury nature retreat.",
        es: "Retiro de lujo rodeado de naturaleza.",
        pt: "Refúgio de luxo em meio à natureza."
      },
      image: ""
    },
    {
      name: "JW Marriott Hotel Chandigarh",
      tier: "Luxury",
      desc: {
        en: "Premium city hotel.",
        es: "Hotel premium en la ciudad.",
        pt: "Hotel premium na cidade."
      },
      image: ""
    },
    {
      name: "Hyatt Centric Sector 17 Chandigarh",
      tier: "Premium",
      desc: {
        en: "Upscale central accommodation.",
        es: "Alojamiento elegante en una zona céntrica.",
        pt: "Hospedagem sofisticada em localização central."
      },
      image: ""
    },
    {
      name: "Taj Chandigarh",
      tier: "Luxury",
      desc: {
        en: "Luxury hotel in the city centre.",
        es: "Hotel de lujo en el centro.",
        pt: "Hotel de luxo no centro da cidade."
      },
      image: ""
    },
    {
      name: "Hyatt Regency Chandigarh",
      tier: "Premium",
      desc: {
        en: "Premium modern accommodation.",
        es: "Alojamiento moderno de categoría superior.",
        pt: "Hospedagem moderna e sofisticada."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Chole Bhature, Amritsari Kulcha, Rajma Chawal, Butter Chicken and Lassi.",
    es: "Pruebe Chole Bhature, Amritsari Kulcha, Rajma Chawal, Butter Chicken y Lassi.",
    pt: "Prove Chole Bhature, Amritsari Kulcha, Rajma Chawal, Butter Chicken e Lassi."
  },
  localFoodDishes: [
    {
      name: { en: "Chole Bhature", es: "Chole Bhature", pt: "Chole Bhature" },
      desc: {
        en: "Spiced chickpeas with fried bread.",
        es: "Garbanzos especiados con pan frito.",
        pt: "Grão-de-bico temperado com pão frito."
      }
    },
    {
      name: { en: "Amritsari Kulcha", es: "Amritsari Kulcha", pt: "Amritsari Kulcha" },
      desc: {
        en: "Stuffed Punjabi flatbread.",
        es: "Pan plano punyabí relleno.",
        pt: "Pão achatado punjabi recheado."
      }
    },
    {
      name: { en: "Rajma Chawal", es: "Rajma Chawal", pt: "Rajma Chawal" },
      desc: {
        en: "Kidney bean curry served with rice.",
        es: "Curry de frijoles rojos servido con arroz.",
        pt: "Curry de feijão vermelho servido com arroz."
      }
    },
    {
      name: { en: "Butter Chicken", es: "Pollo de Mantequilla", pt: "Frango com Manteiga" },
      desc: {
        en: "Creamy spiced chicken curry.",
        es: "Curry de pollo cremoso y especiado.",
        pt: "Curry de frango cremoso e temperado."
      }
    },
    {
      name: { en: "Lassi", es: "Lassi", pt: "Lassi" },
      desc: {
        en: "Traditional yogurt-based drink.",
        es: "Bebida tradicional a base de yogur.",
        pt: "Bebida tradicional à base de iogurte."
      }
    }
  ],
  bestTime: {
    en: "October to March offers comfortable weather for sightseeing.",
    es: "De octubre a marzo ofrece un clima agradable para hacer turismo.",
    pt: "De outubro a março oferece um clima confortável para passeios."
  },
  faqs: [
    {
      q: { en: "What is Chandigarh famous for?", es: "¿Por qué es famosa Chandigarh?", pt: "Pelo que Chandigarh é famosa?" },
      a: {
        en: "Chandigarh is famous for planned urban design, Le Corbusier architecture, Rock Garden and Sukhna Lake.",
        es: "Chandigarh es famosa por su diseño urbano, arquitectura de Le Corbusier, Rock Garden y Sukhna Lake.",
        pt: "Chandigarh é famosa pelo planejamento urbano, arquitetura de Le Corbusier, Rock Garden e Sukhna Lake."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Two days are sufficient for the major attractions.",
        es: "Dos días son suficientes para las principales atracciones.",
        pt: "Dois dias são suficientes para as principais atrações."
      }
    },
    {
      q: { en: "Is Chandigarh family-friendly?", es: "¿Es adecuada para familias?", pt: "Chandigarh é adequada para famílias?" },
      a: {
        en: "Yes, parks, gardens, the lake and museums make it suitable for families.",
        es: "Sí, sus parques, jardines, lago y museos son adecuados para familias.",
        pt: "Sim, seus parques, jardins, lago e museus são adequados para famílias."
      }
    },
    {
      q: { en: "Is Chandigarh easy to navigate?", es: "¿Es fácil orientarse?", pt: "É fácil se locomover?" },
      a: {
        en: "Yes, its planned sector system makes navigation relatively easy.",
        es: "Sí, su sistema de sectores facilita bastante la orientación.",
        pt: "Sim, seu sistema de setores facilita bastante a locomoção."
      }
    },
    {
      q: { en: "Can Chandigarh be combined with Shimla?", es: "¿Se puede combinar con Shimla?", pt: "Pode ser combinada com Shimla?" },
      a: {
        en: "Yes, Chandigarh is a popular gateway for Shimla.",
        es: "Sí, Chandigarh es una puerta de entrada popular a Shimla.",
        pt: "Sim, Chandigarh é uma porta de entrada popular para Shimla."
      }
    }
  ]
};

const ludhianaDetails = {
  tagline: {
    en: "Ludhiana is one of Punjab's major commercial cities, known for its textile industry, Punjabi culture, bustling markets and delicious traditional food.",
    es: "Ludhiana es una de las principales ciudades comerciales de Punjab, conocida por su industria textil, cultura punyabí, mercados animados y deliciosa gastronomía tradicional.",
    pt: "Ludhiana é uma das principais cidades comerciais do Punjab, conhecida por sua indústria têxtil, cultura punjabi, mercados movimentados e deliciosa culinária tradicional."
  },
  overview: {
    en: "Ludhiana offers travellers an authentic glimpse into modern Punjabi city life. The city is an important industrial and textile centre, while its cultural attractions, markets, restaurants and historical sites provide plenty to explore. Visitors can discover Punjab Agricultural University, Maharaja Ranjit Singh War Museum, Nehru Rose Garden and nearby heritage sites while enjoying classic Punjabi cuisine.",
    es: "Ludhiana ofrece a los viajeros una auténtica visión de la vida urbana moderna de Punjab. La ciudad es un importante centro industrial y textil, mientras que sus atracciones culturales, mercados, restaurantes y lugares históricos ofrecen mucho por descubrir. Los visitantes pueden conocer Punjab Agricultural University, Maharaja Ranjit Singh War Museum, Nehru Rose Garden y otros lugares patrimoniales.",
    pt: "Ludhiana oferece aos viajantes uma visão autêntica da vida urbana moderna do Punjab. A cidade é um importante centro industrial e têxtil, enquanto suas atrações culturais, mercados, restaurantes e locais históricos oferecem muito para explorar. Os visitantes podem conhecer a Punjab Agricultural University, Maharaja Ranjit Singh War Museum, Nehru Rose Garden e outros locais históricos."
  },
  highlights: [
    {
      title: { en: "Punjab Agricultural University", es: "Punjab Agricultural University", pt: "Punjab Agricultural University" },
      desc: {
        en: "Explore one of Punjab's leading agricultural and educational institutions, set within a green campus.",
        es: "Explora una de las principales instituciones agrícolas y educativas de Punjab, ubicada en un campus verde.",
        pt: "Explore uma das principais instituições agrícolas e educacionais do Punjab, localizada em um campus arborizado."
      }
    },
    {
      title: { en: "Maharaja Ranjit Singh War Museum", es: "Maharaja Ranjit Singh War Museum", pt: "Maharaja Ranjit Singh War Museum" },
      desc: {
        en: "Discover India's military history through displays, artefacts and memorials.",
        es: "Descubre la historia militar de India mediante exposiciones, objetos históricos y monumentos.",
        pt: "Conheça a história militar da Índia por meio de exposições, objetos históricos e memoriais."
      }
    },
    {
      title: { en: "Nehru Rose Garden", es: "Nehru Rose Garden", pt: "Nehru Rose Garden" },
      desc: {
        en: "A peaceful urban garden featuring colourful roses and landscaped spaces.",
        es: "Un tranquilo jardín urbano con rosas coloridas y espacios ajardinados.",
        pt: "Um tranquilo jardim urbano com rosas coloridas e áreas paisagísticas."
      }
    },
    {
      title: { en: "Phillaur Fort", es: " Phillaur Fort", pt: "Phillaur Fort" },
      desc: {
        en: "Visit this historic fort associated with Punjab's military and colonial history.",
        es: "Visita esta fortaleza histórica relacionada con la historia militar y colonial de Punjab.",
        pt: "Visite este forte histórico ligado à história militar e colonial do Punjab."
      }
    },
    {
      title: { en: "Punjabi Markets", es: "Mercados de Punjab", pt: "Mercados do Punjab" },
      desc: {
        en: "Experience lively markets filled with textiles, clothing, handicrafts and local food.",
        es: "Vive los animados mercados llenos de textiles, ropa, artesanías y comida local.",
        pt: "Conheça os mercados movimentados repletos de tecidos, roupas, artesanato e comida local."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore PA University", es: "Explorar la Universidad Agrícola", pt: "Explore a Universidade Agrícola" },
      desc: {
        en: "Explore Punjab Agricultural University campus and local museums.",
        es: "Explora el campus de la universidad agrícola.",
        pt: "Explore o campus da universidade agrícola."
      }
    },
    {
      name: { en: "Visit War Museum", es: "Visitar el Museo de Guerra", pt: "Visitar o Museu de Guerra" },
      desc: {
        en: "Visit Maharaja Ranjit Singh War Museum.",
        es: "Visita Maharaja Ranjit Singh War Museum.",
        pt: "Visite o Maharaja Ranjit Singh War Museum."
      }
    },
    {
      name: { en: "Relax at Rose Garden", es: "Relajarse en Rose Garden", pt: "Relaxe no Rose Garden" },
      desc: {
        en: "Relax at Nehru Rose Garden.",
        es: "Relájate en Nehru Rose Garden.",
        pt: "Relaxe no Nehru Rose Garden."
      }
    },
    {
      name: { en: "Visit Phillaur Fort", es: "Visitar Phillaur Fort", pt: "Visitar o Phillaur Fort" },
      desc: {
        en: "Visit Phillaur Fort and nearby heritage attractions.",
        es: "Visita Phillaur Fort y lugares patrimoniales cercanos.",
        pt: "Visite Phillaur Fort e atrações históricas próximas."
      }
    },
    {
      name: { en: "Explore Markets & Street Food", es: "Mercados y Comida", pt: "Mercados e Gastronomia" },
      desc: {
        en: "Explore local markets and try authentic Punjabi food.",
        es: "Explora los mercados locales y prueba auténtica comida punyabí.",
        pt: "Explore os mercados locais e experimente a autêntica culinária punjabi."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Ludhiana Junction is a major railway station. The city has road connections to Chandigarh and Delhi highways.",
      es: "Ludhiana es accesible por tren y carretera.",
      pt: "Ludhiana é acessível por trem e estrada."
    },
    nearestAirport: "Chandigarh Airport (IXC) / Ludhiana Airport (LUH)",
    nearestRailway: "Ludhiana Junction (LDH)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Chandigarh (100 km), Amritsar (140 km)",
    recommendedStay: "1-2 Days",
    avgTemp: "10°C - 35°C",
    currency: "INR",
    localLanguage: "Punjabi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Safe commercial city. Keep bags secure in crowded markets.",
      es: "Ciudad comercial segura.",
      pt: "Cidade comercial segura."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are convenient for short journeys.",
        es: "Los auto-rickshaws son prácticos para trayectos cortos.",
        pt: "Os auto-rickshaws são convenientes para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "App-based taxis provide comfortable city transportation.",
        es: "Los taxis mediante aplicaciones ofrecen transporte cómodo.",
        pt: "Táxis por aplicativo oferecem transporte confortável."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Local buses connect major parts of the city.",
        es: "Los autobuses locales conectan las principales zonas de la ciudad.",
        pt: "Os ônibus locais conectam as principais áreas da cidade."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Private cars are convenient for nearby attractions.",
        es: "Los coches privados son prácticos para visitar atracciones cercanas.",
        pt: "Carros particulares são convenientes para atrações próximas."
      },
      recommended: true
    },
    {
      transportType: "Cycle-Rickshaw",
      title: { en: "Cycle-Rickshaw", es: "Bici-Rickshaw", pt: "Bici-riquixá" },
      desc: {
        en: "Cycle-rickshaws can be useful in selected local areas.",
        es: "Los cycle-rickshaws pueden ser útiles en algunas zonas locales.",
        pt: "Os cycle-rickshaws podem ser úteis em algumas áreas locais."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Traditional Food", es: "Comida punyabí", pt: "Comida punjabi" },
      desc: {
        en: "Try authentic Punjabi food at local restaurants.",
        es: "Prueba auténtica comida punyabí en restaurantes locales.",
        pt: "Experimente a autêntica culinária punjabi em restaurantes locais."
      }
    },
    {
      title: { en: "Avoid Summer Noon", es: "Evita tardes calurosas", pt: "Evite tardes quentes" },
      desc: {
        en: "Avoid outdoor sightseeing during peak summer afternoons.",
        es: "Evita las visitas al aire libre durante las tardes calurosas de verano.",
        pt: "Evite passeios ao ar livre durante as tardes quentes de verão."
      }
    },
    {
      title: { en: "Secure Valuables", es: "Bolsos y carteras", pt: "Segurança de pertences" },
      desc: {
        en: "Keep valuables secure in crowded markets.",
        es: "Mantén tus objetos de valor seguros en mercados de la ciudad.",
        pt: "Mantenha seus pertences seguros nos mercados movimentados."
      }
    },
    {
      title: { en: "Footwear", es: "Zapatos cómodos", pt: "Calçados confortáveis" },
      desc: {
        en: "Carry comfortable footwear for sightseeing.",
        es: "Lleva calzado cómodo para hacer turismo.",
        pt: "Leve calçados confortáveis para os passeios."
      }
    },
    {
      title: { en: "Outstation Trips", es: "Transporte privado", pt: "Transporte particular" },
      desc: {
        en: "Use private transport for attractions outside the city centre.",
        es: "Utiliza transporte privado para las atracciones fuera del centro.",
        pt: "Use transporte particular para atrações fora do centro."
      }
    }
  ],
  hotels: [
    {
      name: "Hyatt Regency Ludhiana",
      tier: "Luxury",
      desc: {
        en: "Premium hotel with modern facilities.",
        es: "Hotel premium con instalaciones modernas.",
        pt: "Hotel premium com instalações modernas."
      },
      image: ""
    },
    {
      name: "Radisson Blu Hotel MBD Ludhiana",
      tier: "Luxury",
      desc: {
        en: "Upscale accommodation in a convenient location.",
        es: "Alojamiento elegante en una ubicación conveniente.",
        pt: "Hospedagem sofisticada em localização conveniente."
      },
      image: ""
    },
    {
      name: "Park Plaza Ludhiana",
      tier: "Premium",
      desc: {
        en: "Comfortable premium city hotel.",
        es: "Cómodo hotel premium en la ciudad.",
        pt: "Hotel premium confortável na cidade."
      },
      image: ""
    },
    {
      name: "Nirvana Luxury Hotel",
      tier: "Premium",
      desc: {
        en: "Resort-style accommodation with peaceful surroundings.",
        es: "Alojamiento tipo resort en un entorno tranquilo.",
        pt: "Hospedagem estilo resort em ambiente tranquilo."
      },
      image: ""
    },
    {
      name: "Keys Select by Lemon Tree Hotels",
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
    en: "Try Amritsari Kulcha, Sarson Da Saag, Makki Di Roti, Chole Bhature and Lassi.",
    es: "Pruebe Amritsari Kulcha, Sarson Da Saag, Makki Di Roti, Chole Bhature y Lassi.",
    pt: "Prove Amritsari Kulcha, Sarson Da Saag, Makki Di Roti, Chole Bhature e Lassi."
  },
  localFoodDishes: [
    {
      name: { en: "Amritsari Kulcha", es: "Amritsari Kulcha", pt: "Amritsari Kulcha" },
      desc: {
        en: "Crispy stuffed Punjabi flatbread.",
        es: "Pan plano punyabí relleno y crujiente.",
        pt: "Pão achatado punjabi recheado e crocante."
      }
    },
    {
      name: { en: "Sarson Da Saag", es: "Sarson Da Saag", pt: "Sarson Da Saag" },
      desc: {
        en: "Mustard greens cooked with traditional Punjabi spices.",
        es: "Hojas de mostaza cocinadas con especias tradicionales punyabíes.",
        pt: "Folhas de mostarda cozidas com temperos tradicionais punjabi."
      }
    },
    {
      name: { en: "Makki Di Roti", es: "Makki Di Roti", pt: "Makki Di Roti" },
      desc: {
        en: "Traditional cornmeal flatbread usually served with saag.",
        es: "Pan plano tradicional de harina de maíz servido normalmente con saag.",
        pt: "Pão achatado tradicional de farinha de milho geralmente servido com saag."
      }
    },
    {
      name: { en: "Chole Bhature", es: "Chole Bhature", pt: "Chole Bhature" },
      desc: {
        en: "Spiced chickpeas served with fluffy fried bread.",
        es: "Garbanzos especiados servidos con pan frito y esponjoso.",
        pt: "Grão-de-bico temperado servido com pão frito e macio."
      }
    },
    {
      name: { en: "Lassi", es: "Lassi", pt: "Lassi" },
      desc: {
        en: "Thick yogurt-based traditional Punjabi drink.",
        es: "Bebida tradicional punyabí espesa a base de yogur.",
        pt: "Bebida tradicional punjabi espessa à base de iogurte."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally the most comfortable period for sightseeing in Ludhiana.",
    es: "De octubre a marzo suele ser el período más cómodo para visitar Ludhiana.",
    pt: "De outubro a março geralmente é o período mais confortável para visitar Ludhiana."
  },
  faqs: [
    {
      q: { en: "What is Ludhiana famous for?", es: "¿Por qué es famosa Ludhiana?", pt: "Pelo que Ludhiana é famosa?" },
      a: {
        en: "Ludhiana is famous for its textile industry, Punjabi culture, markets and traditional food.",
        es: "Ludhiana es famosa por su industria textil, cultura punyabí, mercados y gastronomía tradicional.",
        pt: "Ludhiana é famosa por sua indústria têxtil, cultura punjabi, mercados e culinária tradicional."
      }
    },
    {
      q: { en: "How many days are enough for Ludhiana?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "One to two days are enough to explore the main attractions.",
        es: "Uno o dos días son suficientes para explorar las principales atracciones.",
        pt: "Um a dois dias são suficientes para explorar as principais atrações."
      }
    },
    {
      q: { en: "Is Ludhiana worth visiting?", es: "¿Vale la pena visitarla?", pt: "Vale a pena visitar?" },
      a: {
        en: "Yes, especially for travellers interested in Punjabi culture, food, shopping and urban life.",
        es: "Sí, especialmente para viajeros interesados en la cultura, gastronomía, compras y vida urbana de Punjab.",
        pt: "Sim, especialmente para viajantes interessados na cultura, gastronomia, compras e vida urbana do Punjab."
      }
    },
    {
      q: { en: "What food should I try in Ludhiana?", es: "¿Qué comida local debo probar?", pt: "Que comida local devo provar?" },
      a: {
        en: "Try Amritsari kulcha, sarson da saag, makki di roti, chole bhature and lassi.",
        es: "Prueba Amritsari kulcha, sarson da saag, makki di roti, chole bhature y lassi.",
        pt: "Experimente Amritsari kulcha, sarson da saag, makki di roti, chole bhature e lassi."
      }
    },
    {
      q: { en: "Can Ludhiana be included in a Punjab tour?", es: "¿Se puede incluir en la ruta?", pt: "Pode ser incluída no roteiro?" },
      a: {
        en: "Yes, it can be conveniently included between Chandigarh, Amritsar and other Punjab destinations.",
        es: "Sí, puede incluirse fácilmente entre Chandigarh, Amritsar y otros destinos de Punjab.",
        pt: "Sim, pode ser facilmente incluída entre Chandigarh, Amritsar e outros destinos do Punjab."
      }
    }
  ]
};

const patialaDetails = {
  tagline: {
    en: "Patiala is a historic royal city in Punjab known for magnificent palaces, forts, gardens, traditional Punjabi culture, handicrafts and distinctive cuisine.",
    es: "Patiala es una histórica ciudad real de Punjab conocida por sus magníficos palacios, fortalezas, jardines, cultura punyabí, artesanía y gastronomía tradicional.",
    pt: "Patiala é uma histórica cidade real do Punjab, conhecida por seus magníficos palácios, fortes, jardins, cultura punjabi, artesanato e culinária tradicional."
  },
  overview: {
    en: "Patiala was once the capital of the princely Patiala State and remains an important heritage destination in Punjab. The city reflects its royal past through attractions such as Qila Mubarak, Moti Bagh Palace and Sheesh Mahal. Patiala is also known for traditional Punjabi music, textiles, handicrafts and food. Its relaxed atmosphere makes it an excellent destination for travellers interested in history and culture.",
    es: "Patiala fue la capital del antiguo estado principesco de Patiala y sigue siendo un importante destino patrimonial de Punjab. La ciudad refleja su pasado real a través de lugares como Qila Mubarak, Moti Bagh Palace y Sheesh Mahal. También es conocida por la música punyabí, textiles, artesanía y gastronomía tradicional.",
    pt: "Patiala foi a capital do antigo estado principesco de Patiala e continua sendo um primeiro destino histórico do Punjab. A cidade preserva seu passado real em atrações como Qila Mubarak, Moti Bagh Palace e Sheesh Mahal. Também é conhecida pela música punjabi, tecidos, artesanato e culinária tradicional."
  },
  highlights: [
    {
      title: { en: "Qila Mubarak", es: "Qila Mubarak", pt: "Qila Mubarak" },
      desc: {
        en: "Historic fort complex showcasing Patiala's royal heritage.",
        es: "Complejo histórico que representa el patrimonio real de Patiala.",
        pt: "Complexo histórico que representa o patrimônio real de Patiala."
      }
    },
    {
      title: { en: "Moti Bagh Palace", es: "Palacio Moti Bagh", pt: "Palácio Moti Bagh" },
      desc: {
        en: "Elegant royal palace surrounded by heritage architecture.",
        es: "Elegante palacio real rodeado de arquitectura histórica.",
        pt: "Elegante palácio real cercado por arquitetura histórica."
      }
    },
    {
      title: { en: "Sheesh Mahal", es: "Sheesh Mahal", pt: "Sheesh Mahal" },
      desc: {
        en: "Palace known for decorative interiors and royal heritage.",
        es: "Palacio conocido por sus interiores decorativos y patrimonio real.",
        pt: "Palácio conhecido por seus interiores decorativos e patrimônio real."
      }
    },
    {
      title: { en: "Baradari Gardens", es: "Jardines Baradari", pt: "Baradari Gardens" },
      desc: {
        en: "Peaceful historic gardens ideal for a relaxed walk.",
        es: "Jardines históricos tranquilos ideales para pasear.",
        pt: "Jardins históricos tranquilos, ideais para caminhadas."
      }
    },
    {
      title: { en: "Patiala Markets", es: "Mercados de Patiala", pt: "Mercados de Patiala" },
      desc: {
        en: "Traditional markets offering textiles, handicrafts and local products.",
        es: "Mercados tradicionales con textiles, artesanías y productos locales.",
        pt: "Mercados tradicionais com tecidos, artesanato e produtos locais."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Qila Mubarak", es: "Explorar Qila Mubarak", pt: "Explore Qila Mubarak" },
      desc: {
        en: "Explore Qila Mubarak historical fort complex ruins.",
        es: "Explora las ruinas históricas del fuerte Qila Mubarak.",
        pt: "Explore as ruínas históricas do forte Qila Mubarak."
      }
    },
    {
      name: { en: "Visit Moti Bagh Palace", es: "Visitar el Palacio Moti Bagh", pt: "Visitar o Palácio Moti Bagh" },
      desc: {
        en: "Visit Moti Bagh Palace and check out its beautiful gardens.",
        es: "Visita Moti Bagh Palace y admira sus jardines.",
        pt: "Visite o Moti Bagh Palace e aprecie seus jardins."
      }
    },
    {
      name: { en: "Discover Sheesh Mahal", es: "Descubrir Sheesh Mahal", pt: "Conhecer Sheesh Mahal" },
      desc: {
        en: "Discover Sheesh Mahal painted glass galleries.",
        es: "Descubre las galerías decoradas de Sheesh Mahal.",
        pt: "Conheça as galerias decoradas de Sheesh Mahal."
      }
    },
    {
      name: { en: "Relax at Baradari Gardens", es: "Relajarse en Baradari Gardens", pt: "Relaxe nos Baradari Gardens" },
      desc: {
        en: "Relax at Baradari Gardens.",
        es: "Relájate en Baradari Gardens.",
        pt: "Relaxe nos Baradari Gardens."
      }
    },
    {
      name: { en: "Shop Punjabi Handicrafts", es: "Comprar Artesanías", pt: "Comprar Artesanato" },
      desc: {
        en: "Shop for traditional Punjabi handicrafts like Phulkari and Juttis.",
        es: "Compra artesanías tradicionales como Phulkari y Juttis.",
        pt: "Compre artesanato tradicional como Phulkari e Juttis."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Nearest major airport is Chandigarh. Patiala station connects with Northern Railway routes, well linked by roads to Delhi.",
      es: "Patiala es accesible por tren o desde Chandigarh por carretera.",
      pt: "Patiala é acessível por trem ou a partir de Chandigarh por estrada."
    },
    nearestAirport: "Chandigarh Airport (IXC) / Patiala Airport",
    nearestRailway: "Patiala Railway Station (PTA)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Chandigarh (70 km), Delhi (250 km)",
    recommendedStay: "1-2 Days",
    avgTemp: "10°C - 34°C",
    currency: "INR",
    localLanguage: "Punjabi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe heritage city. Respect dress protocols at royal sites.",
      es: "Ciudad real muy segura.",
      pt: "Cidade real muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are useful for short distances.",
        es: "Los auto-rickshaws son útiles para distancias cortas.",
        pt: "Os auto-rickshaws são úteis para distâncias curtas."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Local buses provide economical transportation.",
        es: "Los autobuses locales ofrecen transporte económico.",
        pt: "Os ônibus locais oferecem transporte econômico."
      },
      recommended: false
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "App-based taxis can be used where available.",
        es: "Se pueden utilizar taxis por aplicación cuando estén disponibles.",
        pt: "Táxis por aplicativo podem ser usados quando disponíveis."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Private cars are convenient for heritage attractions outside the centre.",
        es: "Los coches privados son prácticos para atracciones fuera del centro.",
        pt: "Carros particulares são convenientes para atrações fora do centro."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is enjoyable around selected heritage areas.",
        es: "Caminar es agradable en algunas zonas patrimoniales.",
        pt: "Caminhar é agradável em algumas áreas históricas."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Comfortable Footwear", es: "Zapatos cómodos", pt: "Calçados confortáveis" },
      desc: {
        en: "Wear comfortable footwear for palace and fort visits.",
        es: "Lleva calzado cómodo para visitar palacios y fortalezas.",
        pt: "Use calçados confortáveis para visitar palácios e fortes."
      }
    },
    {
      title: { en: "Check Opening Hours", es: "Horarios", pt: "Horários" },
      desc: {
        en: "Check monument opening hours before visiting.",
        es: "Comprueba los horarios de apertura antes de visitar los monumentos.",
        pt: "Verifique os horários de funcionamento antes de visitar os monumentos."
      }
    },
    {
      title: { en: "Local Dining", es: "Comida punyabí", pt: "Comida punjabi" },
      desc: {
        en: "Try traditional Punjabi food at local restaurants.",
        es: "Prueba comida tradicional punyabí en restaurantes locales.",
        pt: "Experimente a culinária tradicional punjabi em restaurantes locais."
      }
    },
    {
      title: { en: "Sun Protection", es: "Protección solar", pt: "Proteção solar" },
      desc: {
        en: "Carry sun protection during warmer months.",
        es: "Lleva protección solar durante los meses más cálidos.",
        pt: "Leve proteção solar durante os meses mais quentes."
      }
    },
    {
      title: { en: "Time Buffer", es: "Tiempo para recorrer", pt: "Tempo de visita" },
      desc: {
        en: "Allow enough time to explore the city's royal heritage.",
        es: "Reserva suficiente tiempo para conocer el patrimonio real de la ciudad.",
        pt: "Reserve tempo suficiente para conhecer o patrimônio real da cidade."
      }
    }
  ],
  hotels: [
    {
      name: "Neemrana's Baradari Palace",
      tier: "Luxury",
      desc: {
        en: "Heritage palace accommodation.",
        es: "Alojamiento en un palacio histórico.",
        pt: "Hospedagem em um palácio histórico."
      },
      image: ""
    },
    {
      name: "The Mohan Continental",
      tier: "Premium",
      desc: {
        en: "Comfortable city hotel.",
        es: "Cómodo hotel urbano.",
        pt: "Hotel confortável na cidade."
      },
      image: ""
    },
    {
      name: "Clarion Inn",
      tier: "Premium",
      desc: {
        en: "Premium accommodation with modern facilities.",
        es: "Alojamiento premium con instalaciones modernas.",
        pt: "Hospedagem premium com instalações modernas."
      },
      image: ""
    },
    {
      name: "Eqbal Inn",
      tier: "Premium",
      desc: {
        en: "Convenient upscale city stay.",
        es: "Alojamiento elegante y conveniente.",
        pt: "Hospedagem sofisticada e conveniente."
      },
      image: ""
    },
    {
      name: "Hotel Narain Continental",
      tier: "Mid-range",
      desc: {
        en: "Practical accommodation in the city.",
        es: "Alojamiento práctico en la ciudad.",
        pt: "Hospedagem prática na cidade."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Patiala Lassi, Chole Bhature, Amritsari Kulcha, Makki Di Roti and Sarson Da Saag.",
    es: "Pruebe Patiala Lassi, Chole Bhature, Amritsari Kulcha, Makki Di Roti y Sarson Da Saag.",
    pt: "Prove Patiala Lassi, Chole Bhature, Amritsari Kulcha, Makki Di Roti e Sarson Da Saag."
  },
  localFoodDishes: [
    {
      name: { en: "Patiala Lassi", es: "Patiala Lassi", pt: "Patiala Lassi" },
      desc: {
        en: "Thick and refreshing Punjabi yogurt drink.",
        es: "Bebida punyabí espesa y refrescante a base de yogur.",
        pt: "Bebida punjabi espessa e refrescante à base de iogurte."
      }
    },
    {
      name: { en: "Chole Bhature", es: "Chole Bhature", pt: "Chole Bhature" },
      desc: {
        en: "Spiced chickpeas with fried bread.",
        es: "Garbanzos especiados con pan frito.",
        pt: "Grão-de-bico temperado com pão frito."
      }
    },
    {
      name: { en: "Amritsari Kulcha", es: "Amritsari Kulcha", pt: "Amritsari Kulcha" },
      desc: {
        en: "Stuffed tasty Punjabi flatbread.",
        es: "Pan plano punyabí relleno y crujiente.",
        pt: "Pão achatado punjabi recheado e crocante."
      }
    },
    {
      name: { en: "Makki Di Roti", es: "Makki Di Roti", pt: "Makki Di Roti" },
      desc: {
        en: "Traditional cornmeal flatbread.",
        es: "Pan plano tradicional de harina de maíz.",
        pt: "Pão achatado tradicional de farinha de milho."
      }
    },
    {
      name: { en: "Sarson Da Saag", es: "Sarson Da Saag", pt: "Sarson Da Saag" },
      desc: {
        en: "Mustard greens prepared with Punjabi spices.",
        es: "Hojas de mostaza preparadas con especias punyabíes.",
        pt: "Folhas de mostarda preparadas com temperos punjabi."
      }
    }
  ],
  bestTime: {
    en: "October to March offers pleasant weather for exploring Patiala's heritage attractions.",
    es: "De octubre a marzo ofrece un clima agradable para explorar el patrimonio de Patiala.",
    pt: "De outubro a março oferece um clima agradável para explorar o patrimônio de Patiala."
  },
  faqs: [
    {
      q: { en: "What is Patiala famous for?", es: "¿Por qué es famosa Patiala?", pt: "Pelo que Patiala é famosa?" },
      a: {
        en: "Patiala is famous for royal palaces, forts, Punjabi culture, handicrafts and traditional food.",
        es: "Patiala es famosa por sus palacios reales, fortalezas, cultura punyabí, artesanía y gastronomía tradicional.",
        pt: "Patiala é famosa por seus palácios reais, fortes, cultura punjabi, artesanato e culinária tradicional."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "One to two days are enough for the main attractions.",
        es: "Uno o dos días son suficientes para las principales atracciones.",
        pt: "Um a dois dias são suficientes para as principais atrações."
      }
    },
    {
      q: { en: "Is Patiala good for history lovers?", es: "¿Es adecuada para amantes de la historia?", pt: "É adequada para amantes de história?" },
      a: {
        en: "Yes, its royal palaces, forts and museums make it an excellent heritage destination.",
        es: "Sí, sus palacios reales, fortalezas y museos la convierten en un excelente destino histórico.",
        pt: "Sim, seus palácios reais, fortes e museus fazem dela um excelente destino histórico."
      }
    },
    {
      q: { en: "What food should I try in Patiala?", es: "¿Qué comida local debo probar?", pt: "Que comida local devo provar?" },
      a: {
        en: "Try Patiala lassi, chole bhature, kulcha, makki di roti and sarson da saag.",
        es: "Prueba la lassi de Patiala, chole bhature, kulcha, makki di roti y sarson da saag.",
        pt: "Experimente a lassi de Patiala, chole bhature, kulcha, makki di roti e sarson da saag."
      }
    },
    {
      q: { en: "Can Patiala be combined with Chandigarh?", es: "¿Se puede combinar con Chandigarh?", pt: "Pode ser combinada com Chandigarh?" },
      a: {
        en: "Yes, Patiala and Chandigarh can easily be included in the same Punjab itinerary.",
        es: "Sí, Patiala y Chandigarh pueden incluirse fácilmente en el mismo itinerario por Punjab.",
        pt: "Sim, Patiala e Chandigarh podem ser facilmente incluídas no mesmo roteiro pelo Punjab."
      }
    }
  ]
};

// ======================== GUJARAT CITIES ========================

const ahmedabadDetails = {
  tagline: {
    en: "Ahmedabad is Gujarat's vibrant heritage and commercial centre, known for historic architecture, Sabarmati Ashram, traditional markets, textiles and Gujarati cuisine.",
    es: "Ahmedabad es el vibrante centro histórico y comercial de Gujarat, conocido por su arquitectura histórica, Sabarmati Ashram, mercados tradicionales, textiles y gastronomía gujarati.",
    pt: "Ahmedabad é o vibrante centro histórico e comercial de Gujarat, conhecido por sua arquitetura histórica, Sabarmati Ashram, mercados tradicionais, tecidos e culinária gujarati."
  },
  overview: {
    en: "Ahmedabad offers a fascinating combination of heritage, architecture, culture, food and modern city life. The historic old city is known for its traditional pol houses, intricate wooden architecture and lively streets. Visitors can explore Sabarmati Ashram, Adalaj Stepwell, Sidi Saiyyed Mosque, Kankaria Lake and textile museums. Ahmedabad is also an excellent base for exploring Gujarat's wider cultural and heritage circuit.",
    es: "Ahmedabad ofrece una fascinante combinación de patrimonio, arquitectura, cultura, gastronomía y vida urbana moderna. La ciudad antigua es conocida por sus tradicionales casas pol, arquitectura de madera y calles animadas. Los visitantes pueden explorar Sabarmati Ashram, Adalaj Stepwell, Sidi Saiyyed Mosque, Kankaria Lake y museos textiles.",
    pt: "Ahmedabad oferece uma fascinante combinação de patrimônio, arquitetura, cultura, gastronomia e vida urbana moderna. A cidade antiga é conhecida por suas tradicionais casas pol, arquitetura de madeira e ruas movimentadas. Os visitantes podem explorar Sabarmati Ashram, Adalaj Stepwell, Sidi Saiyyed Mosque, Kankaria Lake e museus têxteis."
  },
  highlights: [
    {
      title: { en: "Sabarmati Ashram", es: "Sabarmati Ashram", pt: "Sabarmati Ashram" },
      desc: {
        en: "Historic site associated with Mahatma Gandhi and India's independence movement.",
        es: "Lugar histórico asociado con Mahatma Gandhi y el movimiento de independencia de India.",
        pt: "Local histórico associado a Mahatma Gandhi e ao movimento de independência da Índia."
      }
    },
    {
      title: { en: "Adalaj Stepwell", es: "Adalaj Stepwell", pt: "Adalaj Stepwell" },
      desc: {
        en: "Beautifully carved historic stepwell showcasing Gujarati architecture.",
        es: "Hermoso pozo escalonado histórico que muestra la arquitectura gujarati.",
        pt: "Belo poço escalonado histórico que representa a arquitetura gujarati."
      }
    },
    {
      title: { en: "Sidi Saiyyed Mosque", es: "Mezquita Sidi Saiyyed", pt: "Mesquita Sidi Saiyyed" },
      desc: {
        en: "Historic mosque famous for its intricate stone latticework.",
        es: "Mezquita histórica famosa por sus intrincados trabajos de piedra.",
        pt: "Mesquita histórica famosa por seus delicados trabalhos em pedra."
      }
    },
    {
      title: { en: "Old City", es: "Ciudad Antigua", pt: "Cidade Antiga" },
      desc: {
        en: "Explore traditional pol houses, markets and heritage streets.",
        es: "Explora casas pol tradicionales, mercados y calles históricas.",
        pt: "Explore casas pol tradicionais, mercados e ruas históricas."
      }
    },
    {
      title: { en: "Kankaria Lake", es: "Lago Kankaria", pt: "Lago Kankaria" },
      desc: {
        en: "Popular recreational area with attractions and lakeside activities.",
        es: "Popular zona recreativa con atracciones y actividades junto al lago.",
        pt: "Popular área recreativa com atrações e atividades junto ao lago."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Sabarmati Ashram", es: "Visitar Sabarmati Ashram", pt: "Visite o Sabarmati Ashram" },
      desc: {
        en: "Visit Sabarmati Ashram.",
        es: "Visita Sabarmati Ashram.",
        pt: "Visite o Sabarmati Ashram."
      }
    },
    {
      name: { en: "Old City Heritage Walk", es: "Paseo por la Ciudad Antigua", pt: "Caminhada na Cidade Antiga" },
      desc: {
        en: "Take a heritage walk through the old city.",
        es: "Haz un recorrido patrimonial por la ciudad antigua.",
        pt: "Faça uma caminhada histórica pela cidade antiga."
      }
    },
    {
      name: { en: "Explore Adalaj Stepwell", es: "Explorar Adalaj Stepwell", pt: "Explore Adalaj Stepwell" },
      desc: {
        en: "Explore Adalaj Stepwell.",
        es: "Explora Adalaj Stepwell.",
        pt: "Explore Adalaj Stepwell."
      }
    },
    {
      name: { en: "Visit Textile Museums", es: "Visitar Museos Textiles", pt: "Visitar Museus Têxteis" },
      desc: {
        en: "Visit textile and cultural museums.",
        es: "Visita museos textiles y culturales.",
        pt: "Visite museus têxteis e culturais."
      }
    },
    {
      name: { en: "Enjoy Gujarati Thali", es: "Probar Thali Gujarati", pt: "Experimentar Thali Gujarati" },
      desc: {
        en: "Enjoy an authentic Gujarati thali.",
        es: "Disfruta de un auténtico thali gujarati.",
        pt: "Experimente um autêntico thali gujarati."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Sardar Vallabhbhai Patel International Airport has extensive flights. Ahmedabad junction is a major railway hub linked with national routes.",
      es: "Ahmedabad es accesible por el aeropuerto internacional, tren o carretera.",
      pt: "Ahmedabad é acessível pelo aeroporto internacional, trem ou estrada."
    },
    nearestAirport: "Sardar Vallabhbhai Patel International Airport (AMD)",
    nearestRailway: "Ahmedabad Junction (ADI)",
    transportOptions: "Metro, BRTS Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Vadodara (110 km), Rajkot (220 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "15°C - 36°C",
    currency: "INR",
    localLanguage: "Gujarati, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and business-friendly city. Dry state: alcohol restrictions apply.",
      es: "Ciudad muy segura. Estado seco (prohibición de alcohol).",
      pt: "Cidade muito segura. Estado seco (proibição de álcool)."
    }
  },
  gettingAround: [
    {
      transportType: "Metro",
      title: { en: "Metro", es: "Metro", pt: "Metrô" },
      desc: {
        en: "Ahmedabad Metro is useful on available routes.",
        es: "El metro de Ahmedabad es útil en las rutas disponibles.",
        pt: "O metrô de Ahmedabad é útil nas rotas disponíveis."
      },
      recommended: true
    },
    {
      transportType: "BRTS Bus",
      title: { en: "BRTS Bus", es: "Autobús BRTS", pt: "Ônibus BRTS" },
      desc: {
        en: "BRTS buses provide economical city transportation.",
        es: "Los autobuses BRTS ofrecen transporte económico.",
        pt: "Os ônibus BRTS oferecem transporte econômico."
      },
      recommended: false
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are useful for short journeys.",
        es: "Los auto-rickshaws son útiles para trayectos cortos.",
        pt: "Os auto-rickshaws são úteis para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "App-based taxis are convenient for sightseeing.",
        es: "Los taxis por aplicación son prácticos para hacer turismo.",
        pt: "Táxis por aplicativo são convenientes para passeios."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is ideal for selected heritage streets.",
        es: "Caminar es ideal para algunas calles patrimoniales.",
        pt: "Caminhar é ideal para algumas ruas históricas."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Guided Walks", es: "Recorridos guiados", pt: "Caminhadas guiadas" },
      desc: {
        en: "Join a guided heritage walk to understand the old city better.",
        es: "Haz un recorrido guiado para conocer mejor la ciudad antigua.",
        pt: "Faça uma caminhada guiada para conhecer melhor a cidade antiga."
      }
    },
    {
      title: { en: "Vegetarian Thali", es: "Comida vegetariana", pt: "Culinária vegetariana" },
      desc: {
        en: "Try local vegetarian Gujarati cuisine.",
        es: "Prueba la cocina vegetariana local de Gujarat.",
        pt: "Experimente a culinária vegetariana local de Gujarat."
      }
    },
    {
      title: { en: "Sun Protection", es: "Sol y Agua", pt: "Sol e Água" },
      desc: {
        en: "Carry water during outdoor sightseeing.",
        es: "Lleva agua durante las visitas al aire libre.",
        pt: "Leve água durante os passeios ao ar livre."
      }
    },
    {
      title: { en: "Dress Code", es: "Vestimenta", pt: "Vestimenta" },
      desc: {
        en: "Dress respectfully when visiting religious sites.",
        es: "Viste de manera respetuosa al visitar lugares religiosos.",
        pt: "Vista-se de forma respeitosa ao visitar locais religiosos."
      }
    },
    {
      title: { en: "Shopping", es: "Compras", pt: "Compras" },
      desc: {
        en: "Keep extra time for shopping in traditional markets.",
        es: "Reserva tiempo adicional para comprar en los mercados tradicionales.",
        pt: "Reserve tempo extra para compras nos mercados tradicionais."
      }
    }
  ],
  hotels: [
    {
      name: "ITC Narmada",
      tier: "Luxury",
      desc: {
        en: "Luxury hotel with premium facilities.",
        es: "Hotel de lujo con instalaciones premium.",
        pt: "Hotel de luxo com instalações premium."
      },
      image: ""
    },
    {
      name: "Hyatt Regency Ahmedabad",
      tier: "Luxury",
      desc: {
        en: "Modern premium accommodation.",
        es: "Alojamiento premium moderno.",
        pt: "Hospedagem premium moderna."
      },
      image: ""
    },
    {
      name: "Courtyard by Marriott Ahmedabad",
      tier: "Premium",
      desc: {
        en: "Comfortable upscale hotel.",
        es: "Hotel elegante y confortable.",
        pt: "Hotel sofisticado e confortável."
      },
      image: ""
    },
    {
      name: "The House of MG",
      tier: "Luxury",
      desc: {
        en: "Heritage-style boutique hotel in the old city.",
        es: "Hotel boutique de estilo patrimonial en la ciudad antigua.",
        pt: "Hotel boutique em estilo histórico na cidade antiga."
      },
      image: ""
    },
    {
      name: "The Fern Ahmedabad",
      tier: "Premium",
      desc: {
        en: "Modern upscale accommodation.",
        es: "Alojamiento moderno de categoría superior.",
        pt: "Hospedagem moderna e sofisticada."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Gujarati Thali, Khaman, Dhokla, Fafda-Jalebi and Thepla.",
    es: "Pruebe Gujarati Thali, Khaman, Dhokla, Fafda-Jalebi y Thepla.",
    pt: "Prove Gujarati Thali, Khaman, Dhokla, Fafda-Jalebi e Thepla."
  },
  localFoodDishes: [
    {
      name: { en: "Gujarati Thali", es: "Gujarati Thali", pt: "Gujarati Thali" },
      desc: {
        en: "A traditional meal featuring multiple vegetarian dishes.",
        es: "Comida tradicional con múltiples platos vegetarianos.",
        pt: "Refeição tradicional com diversos pratos vegetarianos."
      }
    },
    {
      name: { en: "Khaman", es: "Khaman", pt: "Khaman" },
      desc: {
        en: "Soft steamed savoury snack made from gram flour.",
        es: "Aperitivo salado y esponjoso al vapor hecho con harina de garbanzo.",
        pt: "Petisco salgado e macio feito com farinha de grão-de-bico."
      }
    },
    {
      name: { en: "Dhokla", es: "Dhokla", pt: "Dhokla" },
      desc: {
        en: "Light steamed fermented savoury cake.",
        es: "Pastel salado ligero, fermentado y cocido al vapor.",
        pt: "Bolo salgado leve, fermentado e cozido no vapor."
      }
    },
    {
      name: { en: "Fafda-Jalebi", es: "Fafda-Jalebi", pt: "Fafda-Jalebi" },
      desc: {
        en: "Crispy savoury snack paired with sweet jalebi.",
        es: "Aperitivo crujiente acompañado de dulce jalebi.",
        pt: "Petisco crocante acompanhado de jalebi doce."
      }
    },
    {
      name: { en: "Thepla", es: "Thepla", pt: "Thepla" },
      desc: {
        en: "Spiced Gujarati flatbread, often made with fenugreek.",
        es: "Pan plano gujarati especiado, a menudo preparado con fenogreco.",
        pt: "Pão achatado gujarati temperado, geralmente preparado com feno-grego."
      }
    }
  ],
  bestTime: {
    en: "October to February is generally the most comfortable time to explore Ahmedabad.",
    es: "De octubre a febrero suele ser la época más cómoda para explorar Ahmedabad.",
    pt: "De outubro a fevereiro geralmente é a época mais confortável para explorar Ahmedabad."
  },
  faqs: [
    {
      q: { en: "What is Ahmedabad famous for?", es: "¿Por qué es famosa Ahmedabad?", pt: "Pelo que Ahmedabad é famosa?" },
      a: {
        en: "Ahmedabad is famous for its heritage architecture, Sabarmati Ashram, textiles and Gujarati cuisine.",
        es: "Ahmedabad es famosa por su arquitectura histórica, Sabarmati Ashram, textiles y gastronomía gujarati.",
        pt: "Ahmedabad é famosa por sua arquitetura histórica, Sabarmati Ashram, tecidos e culinária gujarati."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Two to three days are ideal for the major attractions.",
        es: "Dos o tres días son ideales para las principales atracciones.",
        pt: "Dois a três dias são ideais para as principais atrações."
      }
    },
    {
      q: { en: "Is Ahmedabad vegetarian-friendly?", es: "¿Es adecuada para vegetarianos?", pt: "É adequada para vegetarianos?" },
      a: {
        en: "Yes, vegetarian Gujarati cuisine is widely available throughout the city.",
        es: "Sí, la cocina vegetariana gujarati está ampliamente disponible en toda la ciudad.",
        pt: "Sim, a culinária vegetariana gujarati está amplamente disponível pela cidade."
      }
    },
    {
      q: { en: "What is the best heritage experience?", es: "¿Mejor experiencia histórica?", pt: "Melhor experiência histórica?" },
      a: {
        en: "A guided walk through Ahmedabad's historic old city offers an excellent heritage experience.",
        es: "Un recorrido guiado por la ciudad antigua ofrece una excelente experiencia patrimonial.",
        pt: "Uma caminhada guiada pela cidade antiga oferece uma excelente experiência histórica."
      }
    },
    {
      q: { en: "Can Ahmedabad be combined with Vadodara?", es: "¿Se puede combinar con Vadodara?", pt: "Pode ser combinada com Vadodara?" },
      a: {
        en: "Yes, the two cities are well connected and work well together in a Gujarat itinerary.",
        es: "Sí, ambas ciudades están bien conectadas y funcionan muy bien juntas en un itinerario por Gujarat.",
        pt: "Sim, as duas cidades são bem conectadas e combinam muito bem em um roteiro por Gujarat."
      }
    }
  ]
};

const bhujDetails = {
  tagline: {
    en: "Bhuj is the cultural gateway to Kutch, famous for traditional handicrafts, textiles, palaces, museums and the spectacular landscapes of the Great Rann of Kutch.",
    es: "Bhuj es la puerta cultural de Kutch, famosa por su artesanía tradicional, textiles, palacios, museos y los espectaculares paisajes del Great Rann of Kutch.",
    pt: "Bhuj é a porta cultural de Kutch, famosa por seu artesanato tradicional, tecidos, palácios, museus e pelas paisagens espetaculares do Great Rann of Kutch."
  },
  overview: {
    en: "Bhuj is an excellent base for discovering the cultural and artistic heritage of the Kutch region. The city is surrounded by villages known for embroidery, weaving, pottery, leatherwork and other traditional crafts. Visitors can explore Prag Mahal, Aina Mahal and Kutch Museum before venturing towards the Great Rann. The region is particularly rewarding for photographers and travellers interested in Indian folk culture and craftsmanship.",
    es: "Bhuj es una excelente base para descubrir el patrimonio cultural y artístico de Kutch. La ciudad está rodeada de pueblos conocidos por sus bordados, tejidos, cerámica, trabajos en cuero y otras artesanías tradicionales. Los visitantes pueden explorar Prag Mahal, Aina Mahal y Kutch Museum antes de dirigirse al Great Rann.",
    pt: "Bhuj é uma excelente base para descobrir o patrimônio cultural e artístico de Kutch. A cidade é cercada por vilarejos conhecidos por bordados, tecelagem, cerâmica, trabalhos em couro e outros artesanatos tradicionais. Os visitantes podem explorar Prag Mahal, Aina Mahal e Kutch Museum antes de seguir para o Great Rann."
  },
  highlights: [
    {
      title: { en: "Aina Mahal", es: "Aina Mahal", pt: "Aina Mahal" },
      desc: {
        en: "Historic palace known for its decorative interiors and royal heritage.",
        es: "Palacio histórico conocido por sus interiores decorativos y patrimonio real.",
        pt: "Palácio histórico conhecido por seus interiores decorativos e patrimônio real."
      }
    },
    {
      title: { en: "Prag Mahal", es: "Prag Mahal", pt: "Prag Mahal" },
      desc: {
        en: "Impressive palace showcasing European Gothic influences.",
        es: "Impresionante palacio que muestra influencias del estilo gótico europeo.",
        pt: "Impressionante palácio que apresenta influências do estilo gótico europeu."
      }
    },
    {
      title: { en: "Kutch Museum", es: "Museo de Kutch", pt: "Museu de Kutch" },
      desc: {
        en: "Museum showcasing the region's culture, crafts and history.",
        es: "Museo que presenta la cultura, artesanía e historia de la región.",
        pt: "Museu que apresenta a cultura, artesanato e história da região."
      }
    },
    {
      title: { en: "Great Rann of Kutch", es: "Great Rann of Kutch", pt: "Great Rann of Kutch" },
      desc: {
        en: "Vast white salt desert with striking landscapes.",
        es: "Enorme desierto de sal blanco con paisajes impresionantes.",
        pt: "Vasto deserto de sal branco com paisagens impressionantes."
      }
    },
    {
      title: { en: "Craft Villages", es: "Pueblos de Artesanos", pt: "Vilas de Artesãos" },
      desc: {
        en: "Meet artisans and discover traditional Kutch handicrafts.",
        es: "Conoce a artesanos y descubre la artesanía tradicional de Kutch.",
        pt: "Conheça artesãos e descubra o artesanato tradicional de Kutch."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Prag & Aina Mahal", es: "Explorar Prag y Aina Mahal", pt: "Explore o Prag e Aina Mahal" },
      desc: {
        en: "Explore Prag Mahal and Aina Mahal.",
        es: "Explora Prag Mahal y Aina Mahal.",
        pt: "Explore Prag Mahal e Aina Mahal."
      }
    },
    {
      name: { en: "Visit Kutch Museum", es: "Visitar Kutch Museum", pt: "Visite o Kutch Museum" },
      desc: {
        en: "Visit Kutch Museum.",
        es: "Visita Kutch Museum.",
        pt: "Visite o Kutch Museum."
      }
    },
    {
      name: { en: "Experience Great Rann", es: "Vivir el Great Rann", pt: "Vivenciar o Great Rann" },
      desc: {
        en: "Experience the Great Rann of Kutch.",
        es: "Vive la experiencia del Great Rann of Kutch.",
        pt: "Vivencie o Great Rann of Kutch."
      }
    },
    {
      name: { en: "Visit Artisan Villages", es: "Visitar Pueblos Artesanales", pt: "Visitar Vilas de Artesãos" },
      desc: {
        en: "Visit artisan villages.",
        es: "Visita pueblos de artesanos.",
        pt: "Visite vilarejos de artesãos."
      }
    },
    {
      name: { en: "Shop Kutch Textiles", es: "Comprar Artesanías", pt: "Comprar Artesanato" },
      desc: {
        en: "Shop for traditional Kutch textiles and handicrafts.",
        es: "Compra textiles y artesanías tradicionales de Kutch.",
        pt: "Compre tecidos e artesanato tradicional de Kutch."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Bhuj Airport operates regional flights. Bhuj station connects with Ahmedabad. Public/private buses connect Kutch highways.",
      es: "Bhuj es accesible por avión, tren o carretera.",
      pt: "Bhuj é acessível por avião, trem ou estrada."
    },
    nearestAirport: "Bhuj Airport (BHJ)",
    nearestRailway: "Bhuj Railway Station (BHUJ)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Ahmedabad (340 km), Rajkot (230 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "14°C - 34°C",
    currency: "INR",
    localLanguage: "Kutchi, Gujarati & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe and scenic. Permits required for Rann desert zones (Dhordo).",
      es: "Región muy segura. Requiere permisos para el Rann.",
      pt: "Região muito segura. Exige autorização para o Rann."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are useful around Bhuj town.",
        es: "Los auto-rickshaws son útiles dentro de Bhuj.",
        pt: "Os auto-rickshaws são úteis pela cidade de Bhuj."
      },
      recommended: true
    },
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Local taxis are suitable for sightseeing.",
        es: "Los taxis locales son adecuados para hacer turismo.",
        pt: "Táxis locais são adequados para passeios."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Private cars are recommended for longer Kutch excursions.",
        es: "Se recomiendan coches privados para excursiones largas por Kutch.",
        pt: "Carros particulares são recomendados para excursões longas por Kutch."
      },
      recommended: true
    },
    {
      transportType: "Rental Vehicle",
      title: { en: "Rental Vehicle", es: "Coche de Alquiler", pt: "Carro de Aluguel" },
      desc: {
        en: "Rental vehicles provide flexibility for remote villages.",
        es: "Los vehículos de alquiler ofrecen flexibilidad para pueblos remotos.",
        pt: "Veículos alugados oferecem flexibilidade para vilarejos remotos."
      },
      recommended: false
    },
    {
      transportType: "Guided Transport",
      title: { en: "Guided Transport", es: "Transporte con guía", pt: "Transporte com guia" },
      desc: {
        en: "Guided transport can be useful for artisan villages and desert excursions.",
        es: "El transporte con guía puede ser útil para pueblos artesanales y excursiones al desierto.",
        pt: "Transporte com guia pode ser útil para vilarejos de artesãos e excursões pelo deserto."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Sun Protection", es: "Protección solar", pt: "Proteção solar" },
      desc: {
        en: "Carry sun protection for desert excursions.",
        es: "Lleva protección solar para las excursiones al desierto.",
        pt: "Leve proteção solar para excursões no deserto."
      }
    },
    {
      title: { en: "Warm Layers", es: "Ropa abrigada", pt: "Roupas quentes" },
      desc: {
        en: "Carry warm layers for winter evenings in the Rann.",
        es: "Lleva ropa abrigada para las noches de invierno en el Rann.",
        pt: "Leve roupas quentes para as noites de inverno no Rann."
      }
    },
    {
      title: { en: "Support Artisans", es: "Apoya a artesanos", pt: "Apoie os artesãos" },
      desc: {
        en: "Support local artisans by purchasing directly from craft communities.",
        es: "Apoya a los artesanos locales comprando directamente a las comunidades.",
        pt: "Apoie artesãos locais comprando diretamente das comunidades."
      }
    },
    {
      title: { en: "Carry Water", es: "Agua en zonas remotas", pt: "Leve água" },
      desc: {
        en: "Carry enough water when visiting remote areas.",
        es: "Lleva suficiente agua al visitar zonas remotas.",
        pt: "Leve água suficiente ao visitar áreas remotas."
      }
    },
    {
      title: { en: "Rann Permits", es: "Planificación al Rann", pt: "Planejamento Rann" },
      desc: {
        en: "Plan your Rann excursion in advance.",
        es: "Planifica tu excursión al Rann con antelación.",
        pt: "Planeje sua excursão ao Rann com antecedência."
      }
    }
  ],
  hotels: [
    {
      name: "Regenta Resort Bhuj",
      tier: "Premium",
      desc: {
        en: "Comfortable resort-style accommodation.",
        es: "Alojamiento confortable tipo resort.",
        pt: "Hospedagem confortável em estilo resort."
      },
      image: ""
    },
    {
      name: "The Fern Residency Bhuj",
      tier: "Premium",
      desc: {
        en: "Modern premium accommodation.",
        es: "Alojamiento moderno de categoría superior.",
        pt: "Hospedagem moderna e sofisticada."
      },
      image: ""
    },
    {
      name: "Click Hotel Bhuj",
      tier: "Mid-range",
      desc: {
        en: "Contemporary city hotel.",
        es: "Hotel urbano contemporáneo.",
        pt: "Hotel urbano contemporâneo."
      },
      image: ""
    },
    {
      name: "Hotel Prince",
      tier: "Mid-range",
      desc: {
        en: "Convenient accommodation in Bhuj.",
        es: "Alojamiento conveniente en Bhuj.",
        pt: "Hospedagem conveniente em Bhuj."
      },
      image: ""
    },
    {
      name: "Bhuj House",
      tier: "Premium",
      desc: {
        en: "Heritage-style accommodation with local character.",
        es: "Alojamiento de estilo patrimonial con carácter local.",
        pt: "Hospedagem em estilo histórico com identidade local."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Kutchi Dabeli, Bajra Rotla, Gujarati Kadhi, Khichdi and Thepla.",
    es: "Pruebe Kutchi Dabeli, Bajra Rotla, Gujarati Kadhi, Khichdi y Thepla.",
    pt: "Prove Kutchi Dabeli, Bajra Rotla, Gujarati Kadhi, Khichdi e Thepla."
  },
  localFoodDishes: [
    {
      name: { en: "Kutchi Dabeli", es: "Kutchi Dabeli", pt: "Kutchi Dabeli" },
      desc: {
        en: "Spiced potato filling served inside a soft bun with chutneys and toppings.",
        es: "Relleno de patata especiado servido en un pan suave con chutneys y toppings.",
        pt: "Recheio de batata temperado servido em pão macio com chutneys e acompanhamentos."
      }
    },
    {
      name: { en: "Bajra Rotla", es: "Bajra Rotla", pt: "Bajra Rotla" },
      desc: {
        en: "Traditional millet flatbread.",
        es: "Pan plano tradicional de mijo.",
        pt: "Pão achatado tradicional de milheto."
      }
    },
    {
      name: { en: "Gujarati Kadhi", es: "Gujarati Kadhi", pt: "Gujarati Kadhi" },
      desc: {
        en: "Light yogurt-based curry with a sweet and tangy flavour.",
        es: "Curry ligero a base de yogur con sabor dulce y ácido.",
        pt: "Curry leve à base de iogurte com sabor levemente doce e ácido."
      }
    },
    {
      name: { en: "Khichdi", es: "Khichdi", pt: "Khichdi" },
      desc: {
        en: "Comforting rice and lentil dish.",
        es: "Plato reconfortante de arroz y lentejas.",
        pt: "Prato reconfortante de arroz e lentilhas."
      }
    },
    {
      name: { en: "Thepla", es: "Thepla", pt: "Thepla" },
      desc: {
        en: "Spiced Gujarati flatbread, convenient for travel.",
        es: "Pan plano gujarati especiado, ideal para viajar.",
        pt: "Pão achatado gujarati temperado, ideal para viagens."
      }
    }
  ],
  bestTime: {
    en: "November to February is generally the best period for exploring Bhuj and the Great Rann of Kutch.",
    es: "De noviembre a febrero suele ser el mejor período para explorar Bhuj y el Great Rann of Kutch.",
    pt: "De novembro a fevereiro geralmente é o melhor período para explorar Bhuj e o Great Rann of Kutch."
  },
  faqs: [
    {
      q: { en: "What is Bhuj famous for?", es: "¿Por qué es famosa Bhuj?", pt: "Pelo que Bhuj é famosa?" },
      a: {
        en: "Bhuj is famous for Kutch handicrafts, historic palaces, museums and access to the Great Rann.",
        es: "Bhuj es famosa por la artesanía de Kutch, sus palacios históricos, museos y acceso al Great Rann.",
        pt: "Bhuj é famosa pelo artesanato de Kutch, palácios históricos, museus e acesso ao Great Rann."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Three to four days are ideal for Bhuj and nearby Kutch attractions.",
        es: "Tres o cuatro días son ideales para Bhuj y las atracciones cercanas de Kutch.",
        pt: "Três a quatro dias são ideais para Bhuj e atrações próximas de Kutch."
      }
    },
    {
      q: { en: "When is the best time to visit the Rann?", es: "¿Mejor época para visitar el Rann?", pt: "Melhor época para visitar o Rann?" },
      a: {
        en: "Winter is generally the most comfortable season for visiting the Great Rann.",
        es: "El invierno suele ser la época más cómoda para visitar el Great Rann.",
        pt: "O inverno geralmente é a época mais confortável para visitar o Great Rann."
      }
    },
    {
      q: { en: "What should I buy in Bhuj?", es: "¿Qué comprar en Bhuj?", pt: "O que comprar em Bhuj?" },
      a: {
        en: "Embroidery, textiles, pottery and traditional Kutch handicrafts are popular purchases.",
        es: "Los bordados, textiles, cerámica y artesanía tradicional de Kutch son compras populares.",
        pt: "Bordados, tecidos, cerâmica e artesanato tradicional de Kutch são compras populares."
      }
    },
    {
      q: { en: "Is Bhuj good for photography?", es: "¿Es buena para fotografía?", pt: "É boa para fotografia?" },
      a: {
        en: "Yes, its desert landscapes, crafts, villages and historic architecture offer excellent photography opportunities.",
        es: "Sí, sus paisajes desérticos, artesanías, pueblos y arquitectura histórica ofrecen excelentes oportunidades fotográficas.",
        pt: "Sim, suas paisagens desérticas, artesanato, vilarejos e arquitetura histórica oferecem excelentes oportunidades para fotografia."
      }
    }
  ]
};

const dwarkaDetails = {
  tagline: {
    en: "Dwarka is one of India's most important Hindu pilgrimage destinations, famous for Dwarkadhish Temple, sacred coastal sites, ancient traditions and Arabian Sea views.",
    es: "Dwarka es uno de los destinos de peregrinación hindú más importantes de India, famoso por el Templo Dwarkadhish, lugares sagrados costeros, antiguas tradiciones y vistas del mar Arábigo.",
    pt: "Dwarka é um dos destinos de peregrinação hindu mais importantes da Índia, famoso pelo Templo Dwarkadhish, locais sagrados costeiros, antigas tradições e vistas do Mar Arábico."
  },
  overview: {
    en: "Dwarka is an ancient sacred city on Gujarat's western coast and is traditionally associated with Lord Krishna. The magnificent Dwarkadhish Temple is the centre of the city's spiritual identity, while Nageshwar Jyotirlinga, Bet Dwarka and Gomti Ghat add to its pilgrimage significance. The destination also offers a peaceful coastal setting, making it suitable for spiritual, cultural and family travel.",
    es: "Dwarka es una antigua ciudad sagrada situada en la costa occidental de Gujarat y tradicionalmente asociada con Lord Krishna. El magnífico Templo Dwarkadhish es el centro espiritual de la ciudad, mientras que Nageshwar Jyotirlinga, Bet Dwarka y Gomti Ghat aumentan su importancia como destino de peregrinación.",
    pt: "Dwarka é uma antiga cidade sagrada na costa oeste de Gujarat, tradicionalmente associada ao Senhor Krishna. O magnífico Templo Dwarkadhish é o centro espiritual da cidade, enquanto Nageshwar Jyotirlinga, Bet Dwarka e Gomti Ghat aumentam sua importância como destino de peregrinação."
  },
  highlights: [
    {
      title: { en: "Dwarkadhish Temple", es: "Templo Dwarkadhish", pt: "Templo Dwarkadhish" },
      desc: {
        en: "One of Gujarat's most important Krishna temples.",
        es: "Uno de los templos de Krishna más importantes de Gujarat.",
        pt: "Um dos templos de Krishna mais importantes de Gujarat."
      }
    },
    {
      title: { en: "Nageshwar Jyotirlinga", es: "Nageshwar Jyotirlinga", pt: "Nageshwar Jyotirlinga" },
      desc: {
        en: "Important Shiva pilgrimage site near Dwarka.",
        es: "Importante lugar de peregrinación dedicado a Shiva cerca de Dwarka.",
        pt: "Importante local de peregrinação dedicado a Shiva perto de Dwarka."
      }
    },
    {
      title: { en: "Bet Dwarka", es: "Bet Dwarka", pt: "Bet Dwarka" },
      desc: {
        en: "Sacred island destination associated with Krishna traditions.",
        es: "Isla sagrada asociada con las tradiciones de Krishna.",
        pt: "Ilha sagrada associada às tradições de Krishna."
      }
    },
    {
      title: { en: "Gomti Ghat", es: "Gomti Ghat", pt: "Gomti Ghat" },
      desc: {
        en: "Sacred riverside area near Dwarkadhish Temple.",
        es: "Zona sagrada junto al río cerca del Templo Dwarkadhish.",
        pt: "Área sagrada junto ao rio perto do Templo Dwarkadhish."
      }
    },
    {
      title: { en: "Dwarka Coast", es: "Costa de Dwarka", pt: "Costa de Dwarka" },
      desc: {
        en: "Enjoy peaceful coastal scenery and sea views.",
        es: "Disfruta de paisajes costeros y vistas al mar.",
        pt: "Aproveite paisagens costeiras e vistas para o mar."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Dwarkadhish Temple", es: "Visitar el Templo Dwarkadhish", pt: "Visite o Templo Dwarkadhish" },
      desc: {
        en: "Visit Dwarkadhish Temple.",
        es: "Visita el Templo Dwarkadhish.",
        pt: "Visite o Templo Dwarkadhish."
      }
    },
    {
      name: { en: "Explore Gomti Ghat", es: "Explorar Gomti Ghat", pt: "Explore Gomti Ghat" },
      desc: {
        en: "Explore Gomti Ghat.",
        es: "Explora Gomti Ghat.",
        pt: "Explore Gomti Ghat."
      }
    },
    {
      name: { en: "Visit Nageshwar Jyotirlinga", es: "Visitar Nageshwar Jyotirlinga", pt: "Visite Nageshwar Jyotirlinga" },
      desc: {
        en: "Visit Nageshwar Jyotirlinga.",
        es: "Visita Nageshwar Jyotirlinga.",
        pt: "Visite Nageshwar Jyotirlinga."
      }
    },
    {
      name: { en: "Trip to Bet Dwarka", es: "Excursión a Bet Dwarka", pt: "Viagem a Bet Dwarka" },
      desc: {
        en: "Take a trip to Bet Dwarka.",
        es: "Haz una excursión a Bet Dwarka.",
        pt: "Faça uma viagem a Bet Dwarka."
      }
    },
    {
      name: { en: "Enjoy Coast & Sunsets", es: "Disfrutar del mar y atardecer", pt: "Aproveitar o mar e pôr do sol" },
      desc: {
        en: "Enjoy the coastal atmosphere and sunset views.",
        es: "Disfruta del ambiente costero y las vistas del atardecer.",
        pt: "Aproveite a atmosfera costeira e as vistas do pôr do sol."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Nearest major airport is Jamnagar. Dwarka railway station connects with Jamnagar routes, easily accessible by road.",
      es: "Dwarka es accesible por el aeropuerto de Jamnagar, tren o carretera.",
      pt: "Dwarka é acessível pelo aeroporto de Jamnagar, trem ou estrada."
    },
    nearestAirport: "Jamnagar Airport (JGA)",
    nearestRailway: "Dwarka Railway Station (DWK)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Jamnagar (140 km), Rajkot (220 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "16°C - 33°C",
    currency: "INR",
    localLanguage: "Gujarati & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe temple town. Dress respectfully at all sacred spots.",
      es: "Ciudad sagrada muy segura.",
      pt: "Cidade sagrada muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are useful for short journeys.",
        es: "Los auto-rickshaws son útiles para trayectos cortos.",
        pt: "Os auto-rickshaws são úteis para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Local taxis are convenient for temple visits.",
        es: "Los taxis locales son prácticos para visitar los templos.",
        pt: "Táxis locais são convenientes para visitar os templos."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Private cars are useful for Nageshwar and Bet Dwarka trips.",
        es: "Los coches privados son útiles para visitar Nageshwar y Bet Dwarka.",
        pt: "Carros particulares são úteis para visitar Nageshwar e Bet Dwarka."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Local buses provide economical transportation.",
        es: "Los autobuses locales ofrecen transporte económico.",
        pt: "Os ônibus locais oferecem transporte econômico."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is convenient around temple and ghat areas.",
        es: "Caminar es práctico en las zonas de templos y ghats.",
        pt: "Caminhar é conveniente nas áreas de templos e ghats."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Dress Modestly", es: "Vestimenta", pt: "Vestimenta" },
      desc: {
        en: "Dress modestly when visiting temples.",
        es: "Viste de manera modesta al visitar los templos.",
        pt: "Vista-se de forma discreta ao visitar os templos."
      }
    },
    {
      title: { en: "Check Timings", es: "Horarios", pt: "Horários" },
      desc: {
        en: "Check temple timings before visiting.",
        es: "Comprueba los horarios de los templos antes de visitarlos.",
        pt: "Verifique os horários dos templos antes da visita."
      }
    },
    {
      title: { en: "Festival Crowds", es: "Multitudes en festivales", pt: "Festivais e multidões" },
      desc: {
        en: "Expect larger crowds during major festivals.",
        es: "Espera más multitudes durante los grandes festivales.",
        pt: "Espere maiores multidões durante os grandes festivais."
      }
    },
    {
      title: { en: "Carry Water", es: "Sol y Agua", pt: "Sol e Água" },
      desc: {
        en: "Carry water during outdoor sightseeing.",
        es: "Lleva agua durante las visitas al aire libre.",
        pt: "Leve água durante os passeios ao ar livre."
      }
    },
    {
      title: { en: "Bet Dwarka Excursion", es: "Excursión a Bet Dwarka", pt: "Viagem a Bet Dwarka" },
      desc: {
        en: "Plan the Bet Dwarka excursion in advance.",
        es: "Planifica la excursión a Bet Dwarka con antelación.",
        pt: "Planeje a viagem a Bet Dwarka com antecedência."
      }
    }
  ],
  hotels: [
    {
      name: "Hawthorn Suites by Wyndham Dwarka",
      tier: "Luxury",
      desc: {
        en: "Premium accommodation with modern facilities.",
        es: "Alojamiento premium con instalaciones modernas.",
        pt: "Hospedagem premium com instalações modernas."
      },
      image: ""
    },
    {
      name: "VITS Devbhumi Hotel",
      tier: "Premium",
      desc: {
        en: "Comfortable modern city hotel.",
        es: "Cómodo hotel moderno.",
        pt: "Hotel moderno e confortável."
      },
      image: ""
    },
    {
      name: "Dwarkadhish Lords Eco Inn",
      tier: "Premium",
      desc: {
        en: "Convenient accommodation for temple visits.",
        es: "Alojamiento conveniente para visitar los templos.",
        pt: "Hospedagem conveniente para visitar os tempos."
      },
      image: ""
    },
    {
      name: "Hotel Roma Kristo",
      tier: "Premium",
      desc: {
        en: "Comfortable city accommodation.",
        es: "Alojamiento cómodo en la ciudad.",
        pt: "Hospedagem confortável na cidade."
      },
      image: ""
    },
    {
      name: "Hotel Damji",
      tier: "Mid-range",
      desc: {
        en: "Practical option for pilgrimage travellers.",
        es: "Opción práctica para viajeros de peregrinación.",
        pt: "Opção prática para viajantes em peregrinação."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Gujarati Thali, Fafda-Jalebi, Thepla, Khichdi-Kadhi and Dhokla.",
    es: "Pruebe Gujarati Thali, Fafda-Jalebi, Thepla, Khichdi-Kadhi y Dhokla.",
    pt: "Prove Gujarati Thali, Fafda-Jalebi, Thepla, Khichdi-Kadhi e Dhokla."
  },
  localFoodDishes: [
    {
      name: { en: "Gujarati Thali", es: "Gujarati Thali", pt: "Gujarati Thali" },
      desc: {
        en: "Traditional vegetarian meal with multiple regional dishes.",
        es: "Comida vegetariana tradicional con varios platos regionales.",
        pt: "Refeição vegetariana tradicional com diversos pratos regionais."
      }
    },
    {
      name: { en: "Fafda-Jalebi", es: "Fafda-Jalebi", pt: "Fafda-Jalebi" },
      desc: {
        en: "Crispy savoury snack paired with sweet jalebi.",
        es: "Aperitivo salado crujiente acompañado de jalebi dulce.",
        pt: "Petisco salgado crocante acompanhado de jalebi doce."
      }
    },
    {
      name: { en: "Thepla", es: "Thepla", pt: "Thepla" },
      desc: {
        en: "Spiced Gujarati flatbread.",
        es: "Pan plano gujarati especiado.",
        pt: "Pão achatado gujarati temperado."
      }
    },
    {
      name: { en: "Khichdi-Kadhi", es: "Khichdi-Kadhi", pt: "Khichdi-Kadhi" },
      desc: {
        en: "Comforting rice-lentil dish served with yogurt-based curry.",
        es: "Plato reconfortante de arroz y lentejas servido con curry de yogur.",
        pt: "Prato reconfortante de arroz e lentilhas servido com curry à base de iogurte."
      }
    },
    {
      name: { en: "Dhokla", es: "Dhokla", pt: "Dhokla" },
      desc: {
        en: "Light steamed savoury snack.",
        es: "Aperitivo salado ligero cocido al vapor.",
        pt: "Petisco salgado leve cozido no vapor."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally comfortable for pilgrimage and sightseeing.",
    es: "De octubre a marzo suele ser cómodo para peregrinaciones y turismo.",
    pt: "De outubro a março geralmente é confortável para peregrinação e passeios."
  },
  faqs: [
    {
      q: { en: "What is Dwarka famous for?", es: "¿Por qué es famosa Dwarka?", pt: "Pelo que Dwarka é famosa?" },
      a: {
        en: "Dwarka is famous for Dwarkadhish Temple and its importance in Hindu pilgrimage traditions.",
        es: "Dwarka es famosa por el Templo Dwarkadhish y su importancia en las tradiciones de peregrinación hindú.",
        pt: "Dwarka é famosa pelo Templo Dwarkadhish e sua importância nas tradições de peregrinação hindu."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Two to three days are suitable for exploring the major religious sites.",
        es: "Dos o tres días son adecuados para conocer los principales lugares religiosos.",
        pt: "Dois a três dias são adequados para conhecer os principais locais religiosos."
      }
    },
    {
      q: { en: "Can Dwarka be visited with other Gujarat destinations?", es: "¿Se puede combinar Dwarka?", pt: "Dwarka pode ser combinada?" },
      a: {
        en: "Yes, Dwarka can be combined with Somnath, Porbandar and other destinations in Gujarat.",
        es: "Sí, Dwarka puede combinarse con Somnath, Porbandar y otros destinos de Gujarat.",
        pt: "Sim, Dwarka pode ser combinada com Somnath, Porbandar e outros destinos de Gujarat."
      }
    },
    {
      q: { en: "What should I wear at Dwarkadhish Temple?", es: "¿Qué vestir en el templo?", pt: "O que vestir no templo?" },
      a: {
        en: "Modest and respectful clothing is recommended.",
        es: "Se recomienda ropa modesta y respetuosa.",
        pt: "Recomenda-se usar roupas discretas e respeitosas."
      }
    },
    {
      q: { en: "Is Dwarka suitable for families?", es: "¿Dwarka es adecuada para familias?", pt: "Dwarka é adequada para famílias?" },
      a: {
        en: "Yes, it is especially suitable for families interested in spirituality, culture and heritage.",
        es: "Sí, es especialmente adecuada para familias interesadas en espiritualidad, cultura y patrimonio.",
        pt: "Sim, é especialmente adequada para famílias interessadas em espiritualidade, cultura e patrimônio."
      }
    }
  ]
};

const vadodaraDetails = {
  tagline: {
    en: "Vadodara is a cultural and heritage-rich city in Gujarat, famous for royal palaces, museums, art, gardens and the legacy of the Gaekwad dynasty.",
    es: "Vadodara es una ciudad cultural e histórica de Gujarat, famosa por sus palacios reales, museos, arte, jardines y el legado de la dinastía Gaekwad.",
    pt: "Vadodara é uma cidade cultural e histórica de Gujarat, famosa por seus palácios reais, museus, arte, jardins e pelo legado da dinastia Gaekwad."
  },
  overview: {
    en: "Vadodara is one of Gujarat's leading cultural centres and was historically associated with the Gaekwad royal family. The city is home to the magnificent Laxmi Vilas Palace, museums, galleries and landscaped gardens. Its combination of royal heritage, education, art and Gujarati traditions makes it an appealing destination for history and culture lovers.",
    es: "Vadodara es uno de los principales centros culturales de Gujarat y estuvo históricamente vinculada a la familia real Gaekwad. La ciudad alberga el magnífico Laxmi Vilas Palace, museos, galerías y jardines. Su combinación de patrimonio real, educación, arte y tradiciones gujarati la convierte en un destino atractivo para los amantes de la historia y la cultura.",
    pt: "Vadodara é um dos principais centros culturais de Gujarat e esteve historicamente ligada à família real Gaekwad. A cidade abriga o magnífico Laxmi Vilas Palace, museus, galerias e jardins. Sua combinação de patrimônio real, educação, arte e tradições gujarati faz dela um destino atraente para amantes de história e cultura."
  },
  highlights: [
    {
      title: { en: "Laxmi Vilas Palace", es: "Laxmi Vilas Palace", pt: "Laxmi Vilas Palace" },
      desc: {
        en: "Magnificent royal residence and the city's most famous landmark.",
        es: "Magnífica residencia real y monumento más famoso de la ciudad.",
        pt: "Magnífica residência real e principal marco da cidade."
      }
    },
    {
      title: { en: "Baroda Museum", es: "Baroda Museum", pt: "Baroda Museum" },
      desc: {
        en: "Museum displaying art, archaeology and cultural collections.",
        es: "Museo con colecciones de arte, arqueología y cultura.",
        pt: "Museu com coleções de arte, arqueologia e cultura."
      }
    },
    {
      title: { en: "Sayaji Garden", es: "Jardín Sayaji", pt: "Sayaji Garden" },
      desc: {
        en: "Large landscaped garden in the heart of the city.",
        es: "Gran jardín paisajístico en el corazón de la ciudad.",
        pt: "Grande jardim paisagístico no coração da cidade."
      }
    },
    {
      title: { en: "Maharaja Fateh Singh Museum", es: "Maharaja Fateh Singh Museum", pt: "Maharaja Fateh Singh Museum" },
      desc: {
        en: "Museum housed within the royal heritage complex.",
        es: "Museo situado dentro del complejo del patrimonio real.",
        pt: "Museu localizado dentro do complexo do patrimônio real."
      }
    },
    {
      title: { en: "EME Temple", es: "Templo EME", pt: "Templo EME" },
      desc: {
        en: "Unique modern temple known for its distinctive architecture.",
        es: "Templo moderno conocido por su arquitectura distintiva.",
        pt: "Templo moderno conhecido por sua arquitetura distinta."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Laxmi Vilas Palace", es: "Explorar Laxmi Vilas Palace", pt: "Explore Laxmi Vilas Palace" },
      desc: {
        en: "Explore Laxmi Vilas Palace.",
        es: "Explora Laxmi Vilas Palace.",
        pt: "Explore Laxmi Vilas Palace."
      }
    },
    {
      name: { en: "Visit Baroda Museum", es: "Visitar el Baroda Museum", pt: "Visitar o Baroda Museum" },
      desc: {
        en: "Visit Baroda Museum.",
        es: "Visita Baroda Museum.",
        pt: "Visite o Baroda Museum."
      }
    },
    {
      name: { en: "Walk through Sayaji Garden", es: "Pasear por Sayaji Garden", pt: "Caminhar pelo Sayaji Garden" },
      desc: {
        en: "Walk through Sayaji Garden.",
        es: "Pasea por Sayaji Garden.",
        pt: "Caminhe pelo Sayaji Garden."
      }
    },
    {
      name: { en: "Discover Art & Heritage", es: "Descubrir Arte y Patrimonio", pt: "Conhecer Arte e Patrimônio" },
      desc: {
        en: "Discover the city's art and royal heritage.",
        es: "Descubre el arte y patrimonio real de la ciudad.",
        pt: "Conheça a arte e o patrimônio real da cidade."
      }
    },
    {
      name: { en: "Enjoy Gujarati Food", es: "Probar Comida Local", pt: "Experimentar Comida Local" },
      desc: {
        en: "Enjoy traditional Gujarati food.",
        es: "Disfruta de la gastronomía tradicional gujarati.",
        pt: "Experimente a culinária tradicional gujarati."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Vadodara Airport runs domestic flights. Vadodara Junction is a major railway station connecting routes to Ahmedabad and Mumbai.",
      es: "Vadodara es accesible por avión, tren o carretera.",
      pt: "Vadodara é acessível por avião, trem ou estrada."
    },
    nearestAirport: "Vadodara Airport (BDQ)",
    nearestRailway: "Vadodara Junction (BRC)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Ahmedabad (110 km), Surat (150 km)",
    recommendedStay: "2 Days",
    avgTemp: "15°C - 35°C",
    currency: "INR",
    localLanguage: "Gujarati, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe cultural city. Plan visits to the palace early to ensure entry slots.",
      es: "Ciudad muy segura y tranquila.",
      pt: "Cidade muito segura e tranquila."
    }
  },
  gettingAround: [
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
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "App-based taxis provide comfortable transportation.",
        es: "Los taxis por aplicación ofrecen transporte cómodo.",
        pt: "Táxis por aplicativo oferecem transporte confortável."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Local buses are economical.",
        es: "Los autobuses locales son económicos.",
        pt: "Os ônibus locais são econômicos."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Private cars are convenient for attractions spread across the city.",
        es: "Los coches privados son prácticos para atracciones alejadas.",
        pt: "Carros particulares são convenientes para atrações espalhadas pela cidade."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is pleasant around central heritage areas.",
        es: "Caminar es agradable en las zonas patrimoniales centrales.",
        pt: "Caminhar é agradável nas áreas históricas centrais."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Palace Hours", es: "Horarios del Palacio", pt: "Horários de Visita" },
      desc: {
        en: "Check palace visiting hours before planning your day.",
        es: "Comprueba los horarios del palacio antes de planificar el día.",
        pt: "Verifique os horários de visita do palácio antes de planejar o dia."
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
      title: { en: "Gujarati Cuisine", es: "Comida gujarati", pt: "Comida gujarati" },
      desc: {
        en: "Try authentic Gujarati cuisine.",
        es: "Prueba la auténtica gastronomía gujarati.",
        pt: "Experimente a autêntica culinária gujarati."
      }
    },
    {
      title: { en: "Visit Buffer", es: "Tiempo para visitas", pt: "Tempo de visita" },
      desc: {
        en: "Allow enough time for museums and palace visits.",
        es: "Reserva suficiente tiempo para museos y palacios.",
        pt: "Reserve tempo suficiente para museus e palácios."
      }
    },
    {
      title: { en: "Combine Travels", es: "Combina destinos", pt: "Combine roteiros" },
      desc: {
        en: "Combine Vadodara with Ahmedabad for a richer heritage trip.",
        es: "Combina Vadodara con Ahmedabad para un viaje patrimonial más completo.",
        pt: "Combine Vadodara com Ahmedabad para uma viagem histórica mais completa."
      }
    }
  ],
  hotels: [
    {
      name: "Welcomhotel by ITC Hotels",
      tier: "Luxury",
      desc: {
        en: "Premium city accommodation.",
        es: "Alojamiento premium en la ciudad.",
        pt: "Hospedagem premium na cidade."
      },
      image: ""
    },
    {
      name: "Grand Mercure Vadodara Surya Palace",
      tier: "Premium",
      desc: {
        en: "Upscale central hotel.",
        es: "Hotel elegante en una ubicación céntrica.",
        pt: "Hotel sofisticado em localização central."
      },
      image: ""
    },
    {
      name: "Courtyard by Marriott Vadodara",
      tier: "Premium",
      desc: {
        en: "Modern premium accommodation.",
        es: "Alojamiento moderno de categoría superior.",
        pt: "Hospedagem moderna e sofisticada."
      },
      image: ""
    },
    {
      name: "Hyatt Place Vadodara",
      tier: "Premium",
      desc: {
        en: "Contemporary hotel with modern facilities.",
        es: "Hotel contemporáneo con instalaciones modernas.",
        pt: "Hotel contemporâneo com instalações modernas."
      },
      image: ""
    },
    {
      name: "Sayaji Vadodara",
      tier: "Premium",
      desc: {
        en: "Established premium city hotel.",
        es: "Hotel premium consolidado en la ciudad.",
        pt: "Hotel premium tradicional na cidade."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Gujarati thali, Sev Usal, Khaman, Fafda-Jalebi and Handvo.",
    es: "Pruebe thali gujarati, sev usal, khaman, fafda-jalebi y handvo.",
    pt: "Prove thali gujarati, sev usal, khaman, fafda-jalebi e handvo."
  },
  localFoodDishes: [
    {
      name: { en: "Gujarati Thali", es: "Gujarati Thali", pt: "Gujarati Thali" },
      desc: {
        en: "Traditional vegetarian meal with numerous regional dishes.",
        es: "Comida vegetariana tradicional con numerosos platos regionales.",
        pt: "Refeição vegetariana tradicional com diversos pratos regionais."
      }
    },
    {
      name: { en: "Sev Usal", es: "Sev Usal", pt: "Sev Usal" },
      desc: {
        en: "Spicy curry topped with crispy sev.",
        es: "Curry picante cubierto con sev crujiente.",
        pt: "Curry picante coberto com sev crocante."
      }
    },
    {
      name: { en: "Khaman", es: "Khaman", pt: "Khaman" },
      desc: {
        en: "Soft steamed savoury snack.",
        es: "Aperitivo salado suave cocido al vapor.",
        pt: "Petisco salgado macio cozido no vapor."
      }
    },
    {
      name: { en: "Fafda-Jalebi", es: "Fafda-Jalebi", pt: "Fafda-Jalebi" },
      desc: {
        en: "Crispy savoury snack paired with sweet jalebi.",
        es: "Aperitivo salado crujiente acompañado de jalebi dulce.",
        pt: "Petisco salgado crocante acompanhado de jalebi doce."
      }
    },
    {
      name: { en: "Handvo", es: "Handvo", pt: "Handvo" },
      desc: {
        en: "Savoury baked Gujarati lentil and rice cake.",
        es: "Pastel salado gujarati horneado a base de arroz y lentejas.",
        pt: "Bolo salgado gujarati assado à base de arroz e lentilhas."
      }
    }
  ],
  bestTime: {
    en: "October to February is generally the most comfortable period for sightseeing.",
    es: "De octubre a febrero suele ser el período más cómodo para hacer turismo.",
    pt: "De outubro a fevereiro geralmente é o período mais confortável para passeios."
  },
  faqs: [
    {
      q: { en: "What is Vadodara famous for?", es: "¿Por qué es famosa Vadodara?", pt: "Pelo que Vadodara é famosa?" },
      a: {
        en: "Vadodara is famous for Laxmi Vilas Palace, royal heritage, museums, art and Gujarati culture.",
        es: "Vadodara es famosa por Laxmi Vilas Palace, su patrimonio real, museos, arte y cultura gujarati.",
        pt: "Vadodara é famosa pelo Laxmi Vilas Palace, patrimônio real, museus, arte e cultura gujarati."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Two days are enough for the main attractions.",
        es: "Dos días son suficientes para las principales atracciones.",
        pt: "Dois dias são suficientes para as principais atrações."
      }
    },
    {
      q: { en: "Is Vadodara good for families?", es: "¿Es adecuada para familias?", pt: "Vadodara é adequada para famílias?" },
      a: {
        en: "Yes, its palaces, gardens and museums are suitable for family sightseeing.",
        es: "Sí, sus palacios, jardines y museos son adecuados para familias.",
        pt: "Sim, seus palácios, jardins e museus são adequados para famílias."
      }
    },
    {
      q: { en: "What is Vadodara's main attraction?", es: "¿Principal atracción?", pt: "Principal atração?" },
      a: {
        en: "Laxmi Vilas Palace is the city's most famous heritage attraction.",
        es: "Laxmi Vilas Palace es la atracción patrimonial más famosa de la ciudad.",
        pt: "O Laxmi Vilas Palace é a atração histórica mais famosa da cidade."
      }
    },
    {
      q: { en: "What food should I try?", es: "¿Qué comida local se recomienda?", pt: "Que comida local se recomenda?" },
      a: {
        en: "Gujarati thali, sev usal, khaman, fafda-jalebi and handvo are worth trying.",
        es: "Vale la pena probar el thali gujarati, sev usal, khaman, fafda-jalebi y handvo.",
        pt: "Vale a pena experimentar thali gujarati, sev usal, khaman, fafda-jalebi e handvo."
      }
    }
  ]
};

// ======================== UTTARAKHAND CITIES ========================

const dehradunDetails = {
  tagline: {
    en: "Dehradun is a scenic valley city and an important gateway to Uttarakhand's Himalayan destinations, known for waterfalls, caves, monasteries, educational institutions and pleasant surroundings.",
    es: "Dehradun es una pintoresca ciudad situada en un valle y una importante puerta de entrada a los destinos del Himalaya de Uttarakhand, conocida por sus cascadas, cuevas, monasterios e instituciones educativas.",
    pt: "Dehradun é uma pitoresca cidade localizada em um vale e uma importante porta de entrada para os destinos do Himalaia em Uttarakhand, conhecida por cachoeiras, cavernas, mosteiros e instituições educacionais."
  },
  overview: {
    en: "Dehradun sits in the Doon Valley at the foothills of the Himalayas and combines nature, education, spirituality and easy access to nearby mountain destinations. Visitors can explore Robber's Cave, Sahastradhara, Forest Research Institute, Mindrolling Monastery and Tapkeshwar Temple. The city is also a convenient base for trips to Mussoorie, Rishikesh and Haridwar.",
    es: "Dehradun se encuentra en el valle de Doon, al pie del Himalaya, y combina naturaleza, educación, espiritualidad y fácil acceso a destinos montañosos cercanos. Los visitantes pueden explorar Robber's Cave, Sahastradhara, Forest Research Institute, Mindrolling Monastery y Tapkeshwar Temple.",
    pt: "Dehradun está localizado no Vale de Doon, aos pés do Himalaia, combinando natureza, educação, espiritualidade e fácil acesso a destinos montanhosos próximos. Os visitantes podem explorar Robber's Cave, Sahastradhara, Forest Research Institute, Mindrolling Monastery e Tapkeshwar Temple."
  },
  highlights: [
    {
      title: { en: "Robber's Cave", es: "Robber's Cave", pt: "Robber's Cave" },
      desc: {
        en: "Natural cave formation with a stream flowing through it.",
        es: "Formación natural de cuevas con un arroyo que la atraviesa.",
        pt: "Formação natural de cavernas com um riacho passando por seu interior."
      }
    },
    {
      title: { en: "Sahastradhara", es: "Sahastradhara", pt: "Sahastradhara" },
      desc: {
        en: "Scenic waterfall and natural spring area surrounded by hills.",
        es: "Cascada y zona de manantiales rodeada de colinas.",
        pt: "Cachoeira e área de nascentes cercada por colinas."
      }
    },
    {
      title: { en: "Forest Research Institute", es: "Forest Research Institute", pt: "Forest Research Institute" },
      desc: {
        en: "Historic institution known for its grand colonial-era architecture.",
        es: "Institución histórica conocida por su magnífica arquitectura colonial.",
        pt: "Instituição histórica conhecida por sua magnífica arquitetura colonial."
      }
    },
    {
      title: { en: "Mindrolling Monastery", es: "Monasterio Mindrolling", pt: "Mosteiro Mindrolling" },
      desc: {
        en: "Peaceful Tibetan Buddhist monastery with striking architecture.",
        es: "Tranquilo monasterio budista tibetano con una arquitectura impresionante.",
        pt: "Tranquilo mosteiro budista tibetano com arquitetura impressionante."
      }
    },
    {
      title: { en: "Tapkeshwar Temple", es: "Templo Tapkeshwar", pt: "Templo Tapkeshwar" },
      desc: {
        en: "Cave temple associated with Lord Shiva.",
        es: "Templo en una cueva asociado con Lord Shiva.",
        pt: "Templo em uma caverna associado ao Senhor Shiva."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Robber's Cave", es: "Explorar Robber's Cave", pt: "Explore Robber's Cave" },
      desc: {
        en: "Explore Robber's Cave.",
        es: "Explora Robber's Cave.",
        pt: "Explore Robber's Cave."
      }
    },
    {
      name: { en: "Visit Sahastradhara", es: "Visitar Sahastradhara", pt: "Visite Sahastradhara" },
      desc: {
        en: "Visit Sahastradhara.",
        es: "Visita Sahastradhara.",
        pt: "Visite Sahastradhara."
      }
    },
    {
      name: { en: "Admire FRI Architecture", es: "Admirar Arquitectura del FRI", pt: "Admirar Arquitetura do FRI" },
      desc: {
        en: "Admire the architecture of Forest Research Institute.",
        es: "Admira la arquitectura de Forest Research Institute.",
        pt: "Admire a arquitetura do Forest Research Institute."
      }
    },
    {
      name: { en: "Visit Mindrolling Monastery", es: "Visitar el Monasterio Mindrolling", pt: "Visite o Mosteiro Mindrolling" },
      desc: {
        en: "Visit Mindrolling Monastery.",
        es: "Visita Mindrolling Monastery.",
        pt: "Visite o Mindrolling Monastery."
      }
    },
    {
      name: { en: "Mussoorie Day Trip", es: "Excursión a Mussoorie", pt: "Passeio a Mussoorie" },
      desc: {
        en: "Take a day trip to Mussoorie.",
        es: "Haz una excursión de un día a Mussoorie.",
        pt: "Faça uma viagem de um dia a Mussoorie."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Jolly Grant Airport operates domestic connections. Dehradun Junction has trains linking with Delhi, alongside highway buses.",
      es: "Dehradun es accesible por avión, tren o carretera.",
      pt: "Dehradun é acessível por avião, trem ou estrada."
    },
    nearestAirport: "Jolly Grant Airport (DED)",
    nearestRailway: "Dehradun Railway Station (DDN)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Delhi (250 km), Mussoorie (35 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "10°C - 32°C",
    currency: "INR",
    localLanguage: "Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe valley town. Check mountain road advisories during monsoon seasons.",
      es: "Ciudad muy segura en el valle.",
      pt: "Cidade muito segura no vale."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are useful for short city trips.",
        es: "Los auto-rickshaws son útiles para trayectos cortos.",
        pt: "Os auto-rickshaws são úteis para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "App-based taxis provide convenient city travel.",
        es: "Los taxis por aplicación ofrecen desplazamientos cómodos.",
        pt: "Táxis por aplicativo oferecem deslocamentos convenientes."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Local buses are economical.",
        es: "Los autobuses locales son económicos.",
        pt: "Os ônibus locais são econômicos."
      },
      recommended: false
    },
    {
      transportType: "Private Taxi",
      title: { en: "Private Taxi", es: "Taxi Privado", pt: "Táxi Particular" },
      desc: {
        en: "Private taxis are useful for hill destinations.",
        es: "Los taxis privados son útiles para destinos de montaña.",
        pt: "Táxis particulares são úteis para destinos de montanha."
      },
      recommended: true
    },
    {
      transportType: "Rental Vehicle",
      title: { en: "Rental Vehicle", es: "Coche de Alquiler", pt: "Carro de Aluguel" },
      desc: {
        en: "Rental/private cars provide flexibility for nearby excursions.",
        es: "Los coches de alquiler o privados ofrecen flexibilidad para excursiones cercanas.",
        pt: "Carros alugados ou particulares oferecem flexibilidade para excursões próximas."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Light Jacket", es: "Chaqueta ligera", pt: "Casaco leve" },
      desc: {
        en: "Carry a light jacket for cooler evenings.",
        es: "Lleva una chaqueta ligera para las noches frescas.",
        pt: "Leve uma jaqueta leve para as noites mais frescas."
      }
    },
    {
      title: { en: "Comfortable Shoes", es: "Zapatos cómodos", pt: "Calçados confortáveis" },
      desc: {
        en: "Wear comfortable footwear for caves and waterfalls.",
        es: "Lleva calzado cómodo para cuevas y cascadas.",
        pt: "Use calçados confortáveis para cavernas e cachoeiras."
      }
    },
    {
      title: { en: "Early Sightseeing", es: "Comienzo Temprano", pt: "Comece Cedo" },
      desc: {
        en: "Start outdoor sightseeing early.",
        es: "Comienza temprano las actividades al aire libre.",
        pt: "Comece cedo os passeios ao ar livre."
      }
    },
    {
      title: { en: "Mountain Traffic", es: "Tráfico de montaña", pt: "Trânsito de montanha" },
      desc: {
        en: "Allow extra time for mountain traffic.",
        es: "Reserva tiempo adicional para el tráfico de montaña.",
        pt: "Reserve tempo extra para o trânsito nas montanhas."
      }
    },
    {
      title: { en: "Weather Checks", es: "Verificar clima", pt: "Verificar o clima" },
      desc: {
        en: "Check weather conditions before travelling to nearby hill areas.",
        es: "Comprueba las condiciones meteorológicas antes de viajar a las zonas montañosas cercanas.",
        pt: "Verifique as condições climáticas antes de viajar para áreas montanhosas próximas."
      }
    }
  ],
  hotels: [
    {
      name: "Hyatt Regency Dehradun",
      tier: "Luxury",
      desc: {
        en: "Premium mountain-facing accommodation.",
        es: "Alojamiento premium con vistas a las montañas.",
        pt: "Hospedagem premium com vista para as montanhas."
      },
      image: ""
    },
    {
      name: "Seyfert Sarovar Premiere",
      tier: "Premium",
      desc: {
        en: "Upscale city hotel.",
        es: "Hotel elegante en la ciudad.",
        pt: "Hotel sofisticado na cidade."
      },
      image: ""
    },
    {
      name: "Four Points by Sheraton Dehradun",
      tier: "Premium",
      desc: {
        en: "Modern premium accommodation.",
        es: "Alojamiento moderno de categoría superior.",
        pt: "Hospedagem moderna e sofisticada."
      },
      image: ""
    },
    {
      name: "Lemon Tree Hotel Dehradun",
      tier: "Premium",
      desc: {
        en: "Comfortable modern hotel.",
        es: "Cómodo hotel moderno.",
        pt: "Hotel moderno e confortável."
      },
      image: ""
    },
    {
      name: "Hotel Madhuban",
      tier: "Premium",
      desc: {
        en: "Established city hotel with convenient facilities.",
        es: "Hotel consolidado con instalaciones convenientes.",
        pt: "Hotel tradicional com instalações convenientes."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Aloo Ke Gutke, Kandalee Ka Saag, Bal Mithai, Singori and Garhwali Thali.",
    es: "Pruebe Aloo Ke Gutke, Kandalee Ka Saag, Bal Mithai, Singori y Thali Garhwali.",
    pt: "Prove Aloo Ke Gutke, Kandalee Ka Saag, Bal Mithai, Singori e Garhwali Thali."
  },
  localFoodDishes: [
    {
      name: { en: "Aloo Ke Gutke", es: "Aloo Ke Gutke", pt: "Aloo Ke Gutke" },
      desc: {
        en: "Spiced potato dish popular in Uttarakhand.",
        es: "Plato de patatas especiadas popular en Uttarakhand.",
        pt: "Prato de batatas temperadas popular em Uttarakhand."
      }
    },
    {
      name: { en: "Kandalee Ka Saag", es: "Kandalee Ka Saag", pt: "Kandalee Ka Saag" },
      desc: {
        en: "Traditional leafy green preparation.",
        es: "Preparación tradicional de hojas verdes.",
        pt: "Preparação tradicional de folhas verdes."
      }
    },
    {
      name: { en: "Bal Mithai", es: "Bal Mithai", pt: "Bal Mithai" },
      desc: {
        en: "Traditional Uttarakhand sweet made with khoya and sugar coating.",
        es: "Dulce tradicional de Uttarakhand elaborado con khoya y cobertura de azúcar.",
        pt: "Doce tradicional de Uttarakhand feito com khoya e cobertura de açúcar."
      }
    },
    {
      name: { en: "Singori", es: "Singori", pt: "Singori" },
      desc: {
        en: "Traditional sweet wrapped in a leaf.",
        es: "Dulce tradicional envuelto en una hoja.",
        pt: "Doce tradicional envolto em uma folha."
      }
    },
    {
      name: { en: "Garhwali Thali", es: "Thali Garhwali", pt: "Thali Garhwali" },
      desc: {
        en: "Traditional regional meal featuring local dishes.",
        es: "Comida regional tradicional con platos locales.",
        pt: "Refeição regional tradicional com pratos locais."
      }
    }
  ],
  bestTime: {
    en: "March to June and September to November are generally pleasant for sightseeing and outdoor activities.",
    es: "De marzo a junio y de septiembre a noviembre suelen ser agradables para hacer turismo y actividades al aire libre.",
    pt: "De março a junho e de setembro a novembro geralmente são agradáveis para passeios e atividades ao ar livre."
  },
  faqs: [
    {
      q: { en: "What is Dehradun famous for?", es: "¿Por qué es famosa Dehradun?", pt: "Pelo que Dehradun é famosa?" },
      a: {
        en: "Dehradun is known for its valley setting, caves, waterfalls, educational institutions and proximity to Himalayan destinations.",
        es: "Dehradun es conocida por su valle, cuevas, cascadas, instituciones educativas y cercanía a destinos del Himalaya.",
        pt: "Dehradun é conhecida por seu vale, cavernas, cachoeiras, instituições educacionais e proximidade de destinos do Himalaia."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Two to three days are suitable for exploring Dehradun.",
        es: "Dos o tres días son adecuados para explorar Dehradun.",
        pt: "Dois a três dias são adequados para explorar Dehradun."
      }
    },
    {
      q: { en: "Can Dehradun be combined with Mussoorie?", es: "¿Se puede combinar con Mussoorie?", pt: "Pode ser combinada com Mussoorie?" },
      a: {
        en: "Yes, Mussoorie is one of the easiest nearby destinations to add.",
        es: "Sí, Mussoorie es uno de los destinos cercanos más fáciles de añadir.",
        pt: "Sim, Mussoorie é um dos destinos próximos mais fáceis de incluir."
      }
    },
    {
      q: { en: "Is Dehradun family-friendly?", es: "¿Es adecuada para familias?", pt: "Dehradun é adequada para famílias?" },
      a: {
        en: "Yes, families can enjoy its caves, waterfalls, museums and nearby attractions.",
        es: "Sí, las familias pueden disfrutar de sus cuevas, cascadas, museos y atracciones cercanas.",
        pt: "Sim, famílias podem aproveitar suas cavernas, cachoeiras, museus e atrações próximas."
      }
    },
    {
      q: { en: "What is the best nearby hill station?", es: "¿Mejor estación de montaña cercana?", pt: "Melhor estação de montanha próxima?" },
      a: {
        en: "Mussoorie is the most popular nearby hill station.",
        es: "Mussoorie es la estación de montaña cercana más popular.",
        pt: "Mussoorie é a estação de montanha próxima mais popular."
      }
    }
  ]
};

const rishikeshDetails = {
  tagline: {
    en: "Rishikesh is India's renowned yoga and spiritual destination, famous for the Ganges, ashrams, meditation, temples and adventure activities.",
    es: "Rishikesh es uno de los principales destinos de yoga y espiritualidad de India, famoso por el Ganges, sus ashrams, meditación, templos y actividades de aventura.",
    pt: "Rishikesh é um dos principais destinos de yoga e espiritualidade da Índia, famoso pelo Ganges, ashrams, meditação, templos e atividades de aventura."
  },
  overview: {
    en: "Rishikesh is a unique destination where spirituality, wellness and adventure come together along the Ganges. The city is internationally recognised for yoga and meditation retreats and has a long tradition of ashrams and spiritual learning. At the same time, its surrounding Himalayan landscape provides opportunities for rafting, trekking, camping and nature experiences. Rishikesh is ideal for wellness travellers, spiritual seekers, families and adventure enthusiasts.",
    es: "Rishikesh es un destino único donde espiritualidad, bienestar y aventura se encuentran a orillas del Ganges. La ciudad es reconocida internacionalmente por sus retiros de yoga y meditación y cuenta con una larga tradición de ashrams y aprendizaje espiritual. Sus alrededores también ofrecen rafting, trekking, camping y experiencias en la naturaleza.",
    pt: "Rishikesh é um destino único onde espiritualidade, bem-estar e aventura se encontram às margens do Ganges. A cidade é internacionalmente reconhecida por seus retiros de yoga e meditação e possui uma longa tradição de ashrams e aprendizado espiritual. A região também oferece rafting, trekking, camping e experiências na natureza."
  },
  highlights: [
    {
      title: { en: "Ganges River", es: "Río Ganges", pt: "Rio Ganges" },
      desc: {
        en: "The sacred river flowing through the city.",
        es: "El río sagrado que atraviesa la ciudad.",
        pt: "O rio sagrado que atravessa a cidade."
      }
    },
    {
      title: { en: "Triveni Ghat", es: "Triveni Ghat", pt: "Triveni Ghat" },
      desc: {
        en: "Important river location known for evening Ganga Aarti.",
        es: "Importante lugar junto al río conocido por la Ganga Aarti nocturna.",
        pt: "Importante local às margens do rio conhecido pela Ganga Aarti noturna."
      }
    },
    {
      title: { en: "Ram Jhula", es: "Ram Jhula", pt: "Ram Jhula" },
      desc: {
        en: "Iconic suspension bridge and landmark.",
        es: "Icónico puente colgante y monumento de la ciudad.",
        pt: "Icônica ponte suspensa e marco da cidade."
      }
    },
    {
      title: { en: "Yoga & Ashrams", es: "Yoga y Ashrams", pt: "Yoga e Ashrams" },
      desc: {
        en: "Experience yoga, meditation and spiritual learning.",
        es: "Vive experiencias de yoga, meditación y aprendizaje espiritual.",
        pt: "Experimente yoga, meditação e aprendizado espiritual."
      }
    },
    {
      title: { en: "Adventure Activities", es: "Actividades de Aventura", pt: "Atividades de Aventura" },
      desc: {
        en: "Enjoy rafting, trekking and other outdoor experiences.",
        es: "Disfruta de rafting, trekking y otras actividades al aire libre.",
        pt: "Aproveite rafting, trekking e outras atividades ao ar livre."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Attend Ganga Aarti", es: "Asistir a la Ganga Aarti", pt: "Assistir à Ganga Aarti" },
      desc: {
        en: "Attend Ganga Aarti at Triveni Ghat.",
        es: "Asiste a la Ganga Aarti en Triveni Ghat.",
        pt: "Assista à Ganga Aarti em Triveni Ghat."
      }
    },
    {
      name: { en: "Yoga & Meditation Session", es: "Sesión de Yoga y Meditación", pt: "Sessão de Yoga e Meditação" },
      desc: {
        en: "Join a yoga or meditation session.",
        es: "Participa en una sesión de yoga o meditación.",
        pt: "Participe de uma sessão de yoga ou meditação."
      }
    },
    {
      name: { en: "Explore Ashrams", es: "Explorar los Ashrams", pt: "Explore os Ashrams" },
      desc: {
        en: "Explore traditional ashrams.",
        es: "Explora los ashrams tradicionales.",
        pt: "Explore os ashrams tradicionais."
      }
    },
    {
      name: { en: "River Rafting", es: "Rafting en el Río", pt: "Rafting no Rio" },
      desc: {
        en: "Experience river rafting with an authorised operator.",
        es: "Practica rafting con un operador autorizado.",
        pt: "Faça rafting com um operador autorizado."
      }
    },
    {
      name: { en: "Explore Waterfalls & Trails", es: "Cascadas y Senderos", pt: "Cachoeiras e Trilhas" },
      desc: {
        en: "Explore nearby waterfalls and nature trails.",
        es: "Explora cascadas y senderos naturales cercanos.",
        pt: "Explore cachoeiras e trilhas naturais próximas."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Jolly Grant Airport in Dehradun is 35 km away. Haridwar is the major rail gateway connecting nearby Rishikesh routes.",
      es: "Rishikesh es accesible por el aeropuerto de Dehradun, tren o carretera.",
      pt: "Rishikesh é acessível pelo aeroporto de Dehradun, trem ou estrada."
    },
    nearestAirport: "Jolly Grant Airport (DED) in Dehradun",
    nearestRailway: "Rishikesh Railway Station (RKSH) / Haridwar Junction",
    transportOptions: "Auto-rickshaws, E-rickshaws, Taxis, Buses",
    distanceFromMajorCities: "Dehradun (45 km), Haridwar (25 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "12°C - 35°C",
    currency: "INR",
    localLanguage: "Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe spiritual town. Ensure licensed operators for river rafting.",
      es: "Ciudad espiritual muy segura.",
      pt: "Cidade espiritual muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are useful for short journeys.",
        es: "Los auto-rickshaws son útiles para trayectos cortos.",
        pt: "Os auto-rickshaws são úteis para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "E-Rickshaw",
      title: { en: "E-Rickshaw", es: "E-Rickshaw", pt: "E-riquixá" },
      desc: {
        en: "E-rickshaws are available in selected areas.",
        es: "Los e-rickshaws están disponibles en algunas zonas.",
        pt: "E-rickshaws estão disponíveis em algumas áreas."
      },
      recommended: true
    },
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Local taxis are useful for sightseeing.",
        es: "Los taxis locales son útiles para hacer turismo.",
        pt: "Táxis locais são úteis para passeios."
      },
      recommended: true
    },
    {
      transportType: "Rental Scooter",
      title: { en: "Rental Scooter", es: "Alquiler de Moto", pt: "Aluguel de Moto" },
      desc: {
        en: "Rental scooters can be convenient where permitted and appropriate.",
        es: "Las scooters de alquiler pueden ser prácticas cuando estén permitidas y sean adecuadas.",
        pt: "Scooters alugadas podem ser convenientes quando permitidas e apropriadas."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is ideal around Tapovan and riverfront areas.",
        es: "Caminar es ideal por Tapovan y las zonas junto al río.",
        pt: "Caminhar é ideal em Tapovan e nas áreas às margens do rio."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Dress Code", es: "Vestimenta", pt: "Vestimenta" },
      desc: {
        en: "Dress respectfully around temples and ashrams.",
        es: "Viste respetuosamente cerca de templos y ashrams.",
        pt: "Vista-se de forma respeitosa perto de templos e ashrams."
      }
    },
    {
      title: { en: "River Safety", es: "Seguridad en el río", pt: "Segurança no rio" },
      desc: {
        en: "Follow safety instructions near the Ganges.",
        es: "Sigue las instrucciones de seguridad cerca del Ganges.",
        pt: "Siga as instruções de segurança perto do Ganges."
      }
    },
    {
      title: { en: "Licensed Operators", es: "Operadores autorizados", pt: "Operadores autorizados" },
      desc: {
        en: "Use authorised operators for rafting and adventure activities.",
        es: "Utiliza operadores autorizados para rafting y actividades de aventura.",
        pt: "Use operadores autorizados para rafting e atividades de aventura."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado Cómodo", pt: "Calçados" },
      desc: {
        en: "Carry comfortable footwear for walking.",
        es: "Lleva calzado cómodo para caminar.",
        pt: "Leve calçados confortáveis para caminhar."
      }
    },
    {
      title: { en: "Clean River", es: "Mantener la limpieza", pt: "Manter a limpeza" },
      desc: {
        en: "Help keep the river and surrounding areas clean.",
        es: "Ayuda a mantener limpio el río y sus alrededores.",
        pt: "Ajude a manter o rio e seus arredores limpos."
      }
    }
  ],
  hotels: [
    {
      name: "Ananda in the Himalayas",
      tier: "Luxury",
      desc: {
        en: "Luxury wellness retreat.",
        es: "Retiro de bienestar de lujo.",
        pt: "Retiro de bem-estar de luxo."
      },
      image: ""
    },
    {
      name: "Taj Rishikesh Resort & Spa",
      tier: "Luxury",
      desc: {
        en: "Premium riverside resort.",
        es: "Resort premium junto al río.",
        pt: "Resort premium às margens do rio."
      },
      image: ""
    },
    {
      name: "Aloha on the Ganges",
      tier: "Premium",
      desc: {
        en: "Popular riverside resort.",
        es: "Popular resort junto al río.",
        pt: "Popular resort às margens do rio."
      },
      image: ""
    },
    {
      name: "Ganga Kinare",
      tier: "Premium",
      desc: {
        en: "Riverside hotel with wellness-focused facilities.",
        es: "Hotel junto al río con enfoque en bienestar.",
        pt: "Hotel às margens do rio com foco em bem-estar."
      },
      image: ""
    },
    {
      name: "Divya Retreat",
      tier: "Mid-range",
      desc: {
        en: "Comfortable accommodation near major areas.",
        es: "Alojamiento confortable cerca de las principales zonas.",
        pt: "Hospedagem confortável perto das principais áreas."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Aloo Puri, Kachori, Garhwali Thali, Pahadi Rajma and Chai & Pakora.",
    es: "Pruebe Aloo Puri, Kachori, Thali Garhwali, Pahadi Rajma y Chai con Pakora.",
    pt: "Prove Aloo Puri, Kachori, Garhwali Thali, Pahadi Rajma e Chai com Pakora."
  },
  localFoodDishes: [
    {
      name: { en: "Aloo Puri", es: "Aloo Puri", pt: "Aloo Puri" },
      desc: {
        en: "Spiced potato curry served with fried puris.",
        es: "Curry de patata especiado servido con puris fritos.",
        pt: "Curry de batata temperado servido com puris fritos."
      }
    },
    {
      name: { en: "Kachori", es: "Kachori", pt: "Kachori" },
      desc: {
        en: "Crispy stuffed savoury pastry.",
        es: "Pastel salado crujiente y relleno.",
        pt: "Pastel salgado crocante e recheado."
      }
    },
    {
      name: { en: "Garhwali Thali", es: "Thali Garhwali", pt: "Thali Garhwali" },
      desc: {
        en: "Traditional regional meal featuring local mountain dishes.",
        es: "Comida regional tradicional con platos de montaña.",
        pt: "Refeição regional tradicional com pratos das montanhas."
      }
    },
    {
      name: { en: "Pahadi Rajma", es: "Pahadi Rajma", pt: "Pahadi Rajma" },
      desc: {
        en: "Regional kidney bean preparation.",
        es: "Preparación regional de frijoles rojos.",
        pt: "Preparação regional de feijão vermelho."
      }
    },
    {
      name: { en: "Chai & Pakora", es: "Chai y Pakora", pt: "Chai e Pakora" },
      desc: {
        en: "Popular tea and fried snack combination.",
        es: "Popular combinación de té y aperitivos fritos.",
        pt: "Popular combinação de chá e petiscos fritos."
      }
    }
  ],
  bestTime: {
    en: "September to November and February to April are generally excellent for sightseeing, yoga and outdoor activities.",
    es: "De septiembre a noviembre y de febrero a abril suelen ser excelentes para turismo, yoga y actividades al aire libre.",
    pt: "Setembro a novembro e fevereiro a abril geralmente são excelentes para passeios, yoga e atividades ao ar livre."
  },
  faqs: [
    {
      q: { en: "What is Rishikesh famous for?", es: "¿Por qué es famosa Rishikesh?", pt: "Pelo que Rishikesh é famosa?" },
      a: {
        en: "Rishikesh is famous for yoga, meditation, spirituality, the Ganges and adventure activities.",
        es: "Rishikesh es famosa por el yoga, la meditación, la espiritualidad, el Ganges y las actividades de aventura.",
        pt: "Rishikesh é famosa por yoga, meditação, espiritualidade, Ganges e atividades de aventura."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Three to four days are ideal for experiencing the main attractions.",
        es: "Tres o cuatro días son ideales para conocer las principales atracciones.",
        pt: "Três a quatro dias são ideais para conhecer as principais atrações."
      }
    },
    {
      q: { en: "Is Rishikesh good for families?", es: "¿Es adecuada para familias?", pt: "Rishikesh é adequada para famílias?" },
      a: {
        en: "Yes, families can choose from spiritual, cultural, nature and suitable adventure activities.",
        es: "Sí, las familias pueden elegir entre actividades espirituales, culturales, naturales y de aventura adecuadas.",
        pt: "Sim, famílias podem escolher entre atividades espirituais, culturais, naturais e de aventura adequadas."
      }
    },
    {
      q: { en: "Can beginners try rafting in Rishikesh?", es: "¿Pueden principiantes hacer rafting?", pt: "Iniciantes podem fazer rafting?" },
      a: {
        en: "Yes, suitable rafting routes are available, subject to operator and safety requirements.",
        es: "Sí, existen rutas adecuadas para principiantes, sujetas a los requisitos de seguridad del operador.",
        pt: "Sim, existem rotas adequadas para iniciantes, sujeitas aos requisitos de segurança do operador."
      }
    },
    {
      q: { en: "Is vegetarian food available in Rishikesh?", es: "¿Hay comida vegetariana?", pt: "Há comida vegetariana?" },
      a: {
        en: "Yes, vegetarian food is widely available throughout the destination.",
        es: "Sí, la comida vegetariana está ampliamente disponible en todo el destino.",
        pt: "Sim, comida vegetariana está amplamente disponível em todo o destino."
      }
    }
  ]
};

const haridwarDetails = {
  tagline: {
    en: "Haridwar is one of India's most sacred Hindu pilgrimage cities, famous for the Ganges, Har Ki Pauri, temples and the spectacular Ganga Aarti.",
    es: "Haridwar es una de las ciudades de peregrinación hindú más sagradas de India, famosa por el Ganges, Har Ki Pauri, sus templos y la espectacular Ganga Aarti.",
    pt: "Haridwar é uma das cidades de peregrinação hindu mais sagradas da Índia, famosa pelo Ganges, Har Ki Pauri, templos e pela espetacular Ganga Aarti."
  },
  overview: {
    en: "Haridwar is an ancient spiritual centre where the Ganges emerges from the Himalayan foothills and enters the plains. Har Ki Pauri is the heart of the city's pilgrimage experience, attracting visitors for sacred rituals and the evening Ganga Aarti. The city is also associated with major Hindu festivals and the Kumbh Mela. Its temples, ghats, markets and spiritual atmosphere make it an important destination for cultural and religious travel.",
    es: "Haridwar es un antiguo centro espiritual donde el Ganges sale de las estribaciones del Himalaya y entra en las llanuras. Har Ki Pauri es el corazón de la experiencia de peregrinación de la ciudad y atrae a visitantes para rituales sagrados y la Ganga Aarti nocturna. La ciudad también está asociada con importantes festivales hindúes y Kumbh Mela.",
    pt: "Haridwar é um antigo centro espiritual onde o Ganges deixa os sopés do Himalaia e entra nas planícies. Har Ki Pauri é o coração da experiência de peregrinação da cidade, atraindo visitantes para rituais sagrados e para a Ganga Aarti noturna. A cidade também está associada a importantes festivais hindus e ao Kumbh Mela."
  },
  highlights: [
    {
      title: { en: "Har Ki Pauri", es: "Har Ki Pauri", pt: "Har Ki Pauri" },
      desc: {
        en: "Sacred riverside ghat and the city's most important pilgrimage landmark.",
        es: "Ghats sagrado junto al río y principal lugar de peregrinación.",
        pt: "Ghat sagrado às margens do rio e principal local de peregrinação."
      }
    },
    {
      title: { en: "Ganga Aarti", es: "Ganga Aarti", pt: "Ganga Aarti" },
      desc: {
        en: "Beautiful evening river ceremony with lamps and prayers.",
        es: "Hermosa ceremonia nocturna junto al río con lámparas y oraciones.",
        pt: "Bela cerimônia noturna junto ao rio com lamparinas e orações."
      }
    },
    {
      title: { en: "Mansa Devi Temple", es: "Templo Mansa Devi", pt: "Templo Mansa Devi" },
      desc: {
        en: "Important hilltop temple accessible by ropeway and other routes.",
        es: "Importante templo en la colina accesible por teleférico y otras rutas.",
        pt: "Importante templo no alto da colina acessível por teleférico e outras rotas."
      }
    },
    {
      title: { en: "Chandi Devi Temple", es: "Templo Chandi Devi", pt: "Templo Chandi Devi" },
      desc: {
        en: "Sacred temple overlooking the city and river.",
        es: "Templo sagrado con vistas a la ciudad y al río.",
        pt: "Templo sagrado com vista para a cidade e o rio."
      }
    },
    {
      title: { en: "Ganges Ghats", es: "Ghats del Ganges", pt: "Ghats do Ganges" },
      desc: {
        en: "Experience the spiritual atmosphere along the sacred river.",
        es: "Vive el ambiente espiritual a lo largo del río sagrado.",
        pt: "Vivencie a atmosfera espiritual ao longo do rio sagrado."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Ganga Aarti at Har Ki Pauri", es: "Asistir a la Ganga Aarti", pt: "Assistir à Ganga Aarti" },
      desc: {
        en: "Attend Ganga Aarti at Har Ki Pauri.",
        es: "Asiste a la Ganga Aarti en Har Ki Pauri.",
        pt: "Assista à Ganga Aarti em Har Ki Pauri."
      }
    },
    {
      name: { en: "Visit Mansa Devi Temple", es: "Visitar Mansa Devi Temple", pt: "Visitar o Mansa Devi Temple" },
      desc: {
        en: "Visit Mansa Devi Temple.",
        es: "Visita Mansa Devi Temple.",
        pt: "Visite o Mansa Devi Temple."
      }
    },
    {
      name: { en: "Visit Chandi Devi Temple", es: "Visitar Chandi Devi Temple", pt: "Visitar o Chandi Devi Temple" },
      desc: {
        en: "Visit Chandi Devi Temple.",
        es: "Visita Chandi Devi Temple.",
        pt: "Visite o Chandi Devi Temple."
      }
    },
    {
      name: { en: "Explore Ghats & Markets", es: "Explorar Ghats y Mercados", pt: "Explorar Ghats e Mercados" },
      desc: {
        en: "Explore the historic ghats and markets.",
        es: "Explora los ghats y mercados históricos.",
        pt: "Explore os ghats e mercados históricos."
      }
    },
    {
      name: { en: "Pilgrimage Experience", es: "Experiencia de Peregrinación", pt: "Experiência de Peregrinação" },
      desc: {
        en: "Experience traditional Hindu pilgrimage culture.",
        es: "Vive la cultura tradicional de peregrinación hindú.",
        pt: "Vivencie a cultura tradicional de peregrinação hindu."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Jolly Grant Airport in Dehradun is 35 km away. Haridwar Junction connects with major routes, well linked by national highways.",
      es: "Haridwar es accesible por el aeropuerto de Dehradun, tren o carretera.",
      pt: "Haridwar é acessível pelo aeroporto de Dehradun, trem ou estrada."
    },
    nearestAirport: "Jolly Grant Airport (DED) in Dehradun",
    nearestRailway: "Haridwar Junction (HW)",
    transportOptions: "E-rickshaws, Auto-rickshaws, Buses, Taxis",
    distanceFromMajorCities: "Dehradun (50 km), Delhi (210 km)",
    recommendedStay: "2 Days",
    avgTemp: "12°C - 35°C",
    currency: "INR",
    localLanguage: "Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe pilgrimage city. Arrive early for evening Ganga Aarti seats.",
      es: "Ciudad de peregrinación muy segura.",
      pt: "Cidade de peregrinação muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "E-Rickshaw",
      title: { en: "E-Rickshaw", es: "E-Rickshaw", pt: "E-riquixá" },
      desc: {
        en: "E-rickshaws are convenient around central areas.",
        es: "Los e-rickshaws son prácticos en las zonas céntricas.",
        pt: "Os e-rickshaws são convenientes nas áreas centrais."
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
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Local buses provide economical transport.",
        es: "Los autobuses locales ofrecen transporte económico.",
        pt: "Os ônibus locais oferecem transporte econômico."
      },
      recommended: false
    },
    {
      transportType: "Private Taxi",
      title: { en: "Private Taxi", es: "Taxi Privado", pt: "Táxi Particular" },
      desc: {
        en: "Private taxis are useful for temple visits outside the centre.",
        es: "Los taxis privados son útiles para templos fuera del centro.",
        pt: "Táxis particulares são úteis para templos fora do centro."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is ideal around Har Ki Pauri and nearby markets.",
        es: "Caminar es ideal alrededor de Har Ki Pauri y los mercados cercanos.",
        pt: "Caminhar é ideal ao redor de Har Ki Pauri e dos mercados próximos."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Dress modestly", es: "Vestimenta", pt: "Vestimenta" },
      desc: {
        en: "Dress modestly near temples and ghats.",
        es: "Viste modestamente cerca de templos y ghats.",
        pt: "Vista-se de forma discreta perto de templos e ghats."
      }
    },
    {
      title: { en: "River Safety", es: "Seguridad", pt: "Segurança" },
      desc: {
        en: "Follow safety instructions near the river.",
        es: "Sigue las instrucciones de seguridad cerca del río.",
        pt: "Siga as instruções de segurança perto do rio."
      }
    },
    {
      title: { en: "Arrive Early", es: "Llegar temprano", pt: "Chegue cedo" },
      desc: {
        en: "Arrive early for popular religious ceremonies.",
        es: "Llega temprano a las ceremonias religiosas populares.",
        pt: "Chegue cedo para cerimônias religiosas populares."
      }
    },
    {
      title: { en: "Belongings Safety", es: "Cuidado de pertenencias", pt: "Segurança de pertences" },
      desc: {
        en: "Keep your belongings secure in crowded areas.",
        es: "Mantén tus pertenencias seguras en zonas concurridas.",
        pt: "Mantenha seus pertences seguros em áreas movimentadas."
      }
    },
    {
      title: { en: "Local Customs", es: "Respeto a costumbres", pt: "Respeito a costumes" },
      desc: {
        en: "Respect local religious customs and photography restrictions.",
        es: "Respeta las costumbres religiosas locales y las restricciones de fotografía.",
        pt: "Respeite os costumes religiosos locais e as restrições de fotografia."
      }
    }
  ],
  hotels: [
    {
      name: "Pilibhit House, Haridwar – IHCL SeleQtions",
      tier: "Luxury",
      desc: {
        en: "Heritage-style luxury accommodation.",
        es: "Alojamiento de lujo de estilo patrimonial.",
        pt: "Hospedagem de luxo em estilo histórico."
      },
      image: ""
    },
    {
      name: "Amatra by the Ganges",
      tier: "Luxury",
      desc: {
        en: "Peaceful riverside resort.",
        es: "Tranquilo resort junto al río.",
        pt: "Resort tranquilo às margens do rio."
      },
      image: ""
    },
    {
      name: "Radisson Blu Hotel Haridwar",
      tier: "Luxury",
      desc: {
        en: "Premium modern hotel.",
        es: "Hotel moderno de categoría superior.",
        pt: "Hotel moderno e sofisticado."
      },
      image: ""
    },
    {
      name: "Ganga Kinare",
      tier: "Premium",
      desc: {
        en: "Riverside hotel with a wellness atmosphere.",
        es: "Hotel junto al río con ambiente de bienestar.",
        pt: "Hotel às margens do rio com atmosfera de bem-estar."
      },
      image: ""
    },
    {
      name: "Regenta Orko's Haridwar",
      tier: "Premium",
      desc: {
        en: "Comfortable modern city accommodation.",
        es: "Alojamiento moderno y confortable.",
        pt: "Hospedagem moderna e confortável."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Aloo Puri, Kachori, Jalebi, Samosa and Kheer.",
    es: "Pruebe Aloo Puri, Kachori, Jalebi, Samosa y Kheer.",
    pt: "Prove Aloo Puri, Kachori, Jalebi, Samosa e Kheer."
  },
  localFoodDishes: [
    {
      name: { en: "Aloo Puri", es: "Aloo Puri", pt: "Aloo Puri" },
      desc: {
        en: "Spiced potato curry served with puris.",
        es: "Curry de patata especiado servido con puris.",
        pt: "Curry de batata temperado servido com puris."
      }
    },
    {
      name: { en: "Kachori", es: "Kachori", pt: "Kachori" },
      desc: {
        en: "Crispy stuffed savoury pastry.",
        es: "Pastel salado crujiente y relleno.",
        pt: "Pastel salgado crocante e recheado."
      }
    },
    {
      name: { en: "Jalebi", es: "Jalebi", pt: "Jalebi" },
      desc: {
        en: "Crispy spiral-shaped sweet soaked in syrup.",
        es: "Dulce crujiente en forma de espiral bañado en almíbar.",
        pt: "Doce crocante em formato de espiral mergulhado em calda."
      }
    },
    {
      name: { en: "Samosa", es: "Samosa", pt: "Samosa" },
      desc: {
        en: "Fried pastry filled with spiced potatoes and other fillings.",
        es: "Masa frita rellena de patata especiada y otros ingredientes.",
        pt: "Massa frita recheada com batata temperada e outros ingredientes."
      }
    },
    {
      name: { en: "Kheer", es: "Kheer", pt: "Kheer" },
      desc: {
        en: "Traditional creamy rice pudding.",
        es: "Tradicional postre cremoso de arroz.",
        pt: "Tradicional sobremesa cremosa de arroz."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally comfortable for sightseeing and pilgrimage, although major religious festivals can bring very large crowds.",
    es: "De octubre a marzo suele ser cómodo para turismo y peregrinación, aunque los grandes festivales religiosos pueden atraer enormes multitudes.",
    pt: "De outubro a março geralmente é confortável para passeios e peregrinação, embora grandes festivais religiosos possam atrair multidões."
  },
  faqs: [
    {
      q: { en: "What is Haridwar famous for?", es: "¿Por qué es famosa Haridwar?", pt: "Pelo que Haridwar é famosa?" },
      a: {
        en: "Haridwar is famous for the Ganges, Har Ki Pauri, Ganga Aarti and Hindu pilgrimage traditions.",
        es: "Haridwar es famosa por el Ganges, Har Ki Pauri, Ganga Aarti y las tradiciones de peregrinación hindú.",
        pt: "Haridwar é famosa pelo Ganges, Har Ki Pauri, Ganga Aarti e tradições de peregrinação hindu."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Two days are generally sufficient for the major attractions.",
        es: "Dos días suelen ser suficientes para las principales atracciones.",
        pt: "Dois dias geralmente são suficientes para as principais atrações."
      }
    },
    {
      q: { en: "Can Haridwar and Rishikesh be combined?", es: "¿Se pueden combinar?", pt: "Podem ser combinadas?" },
      a: {
        en: "Yes, they are commonly included together in Uttarakhand travel itineraries.",
        es: "Sí, suelen incluirse juntos en los itinerarios de viaje por Uttarakhand.",
        pt: "Sim, geralmente são incluídas juntas em roteiros por Uttarakhand."
      }
    },
    {
      q: { en: "What is the main attraction in Haridwar?", es: "¿Atracción principal?", pt: "Atração principal?" },
      a: {
        en: "Har Ki Pauri and the evening Ganga Aarti are among the city's most important experiences.",
        es: "Har Ki Pauri y la Ganga Aarti nocturna están entre las experiencias más importantes de la ciudad.",
        pt: "Har Ki Pauri e a Ganga Aarti noturna estão entre as experiências mais importantes da cidade."
      }
    },
    {
      q: { en: "Is Haridwar family-friendly?", es: "¿Es adecuada para familias?", pt: "Haridwar é adequada para famílias?" },
      a: {
        en: "Yes, especially for families interested in spirituality, culture and Indian traditions.",
        es: "Sí, especialmente para familias interesadas en espiritualidad, cultura y tradiciones indias.",
        pt: "Sim, especialmente para famílias interessadas em espiritualidade, cultura e tradições indianas."
      }
    }
  ]
};

const nainitalDetails = {
  tagline: {
    en: "Nainital is a picturesque Himalayan hill station in Uttarakhand, famous for Naini Lake, mountain views, boating, colonial heritage and scenic viewpoints.",
    es: "Nainital es una pintoresca estación de montaña del Himalaya en Uttarakhand, famosa por Naini Lake, vistas de montaña, paseos en barco, patrimonio colonial y miradores.",
    pt: "Nainital é uma pitoresca estação de montanha do Himalaia em Uttarakhand, famosa pelo Naini Lake, vistas das montanhas, passeios de barco, patrimônio colonial e mirantes."
  },
  overview: {
    en: "Nainital is one of India's best-known Himalayan lake destinations, centred around the beautiful Naini Lake and surrounded by forested hills. The town combines scenic landscapes with boating, temples, shopping, viewpoints and colonial-era architecture. Visitors can explore Mall Road, Naina Devi Temple, Snow View Point and Tiffin Top, while nearby Bhimtal, Sattal and Naukuchiatal can be added to a longer trip.",
    es: "Nainital es uno de los destinos lacustres más conocidos del Himalaya indio, situado alrededor del hermoso Naini Lake y rodeado de colinas boscosas. La ciudad combina paisajes panorámicos con paseos en barco, templos, compras, miradores y arquitectura colonial. Los visitantes pueden explorar Mall Road, Naina Devi Temple, Snow View Point y Tiffin Top.",
    pt: "Nainital é um dos destinos de lagos mais conhecidos do Himalaia indiano, localizado ao redor do belo Naini Lake e cercado por colinas arborizadas. A cidade combina paisagens panorâmicas com passeios de barco, templos, compras, mirantes e arquitetura colonial. Os visitantes podem explorar Mall Road, Naina Devi Temple, Snow View Point e Tiffin Top."
  },
  highlights: [
    {
      title: { en: "Naini Lake", es: "Naini Lake", pt: "Naini Lake" },
      desc: {
        en: "Scenic lake and the heart of Nainital's tourism experience.",
        es: "Lago panorámico y corazón de la experiencia turística de Nainital.",
        pt: "Lago panorâmico e coração da experiência turística de Nainital."
      }
    },
    {
      title: { en: "Naina Devi Temple", es: "Templo Naina Devi", pt: "Templo Naina Devi" },
      desc: {
        en: "Important temple located beside Naini Lake.",
        es: "Importante templo situado junto a Naini Lake.",
        pt: "Importante templo localizado próximo ao Naini Lake."
      }
    },
    {
      title: { en: "Snow View Point", es: "Snow View Point", pt: "Snow View Point" },
      desc: {
        en: "Popular viewpoint offering mountain scenery, subject to weather conditions.",
        es: "Popular mirador con vistas de montaña, sujeto a las condiciones climáticas.",
        pt: "Popular mirante com vistas das montanhas, sujeito às condições climáticas."
      }
    },
    {
      title: { en: "Mall Road", es: "Mall Road", pt: "Mall Road" },
      desc: {
        en: "Lively area for shopping, dining and lakeside walks.",
        es: "Zona animada para compras, gastronomía y paseos junto al lago.",
        pt: "Área movimentada para compras, gastronomia e caminhadas junto ao lago."
      }
    },
    {
      title: { en: "Tiffin Top", es: "Tiffin Top", pt: "Tiffin Top" },
      desc: {
        en: "Scenic hill viewpoint offering panoramic views.",
        es: "Mirador de montaña con vistas panorámicas.",
        pt: "Mirante nas montanhas com vistas panorâmicas."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Boat Ride on Naini Lake", es: "Paseo en barco en Naini Lake", pt: "Passeio de barco no Naini Lake" },
      desc: {
        en: "Enjoy boating on Naini Lake.",
        es: "Disfruta de un paseo en barco por Naini Lake.",
        pt: "Faça um passeio de barco no Naini Lake."
      }
    },
    {
      name: { en: "Visit Naina Devi Temple", es: "Visitar Naina Devi Temple", pt: "Visite o Naina Devi Temple" },
      desc: {
        en: "Visit Naina Devi Temple.",
        es: "Visita Naina Devi Temple.",
        pt: "Visite o Naina Devi Temple."
      }
    },
    {
      name: { en: "Explore Mall Road", es: "Explorar Mall Road", pt: "Explore Mall Road" },
      desc: {
        en: "Explore Mall Road.",
        es: "Explora Mall Road.",
        pt: "Explore Mall Road."
      }
    },
    {
      name: { en: "Visit Snow View Point", es: "Visitar Snow View Point", pt: "Visite o Snow View Point" },
      desc: {
        en: "Visit Snow View Point.",
        es: "Visita Snow View Point.",
        pt: "Visite Snow View Point."
      }
    },
    {
      name: { en: "Scenic Walks & Hikes", es: "Caminatas en las Colinas", pt: "Caminhadas nas Colinas" },
      desc: {
        en: "Take a scenic walk or hike around the hills.",
        es: "Disfruta de una caminata panorámica por las colinas.",
        pt: "Faça uma caminhada panorâmica pelas colinas."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Nearest rail station is Kathgodam (35 km away). Pantnagar Airport operates regional connections, well linked by roads to Delhi.",
      es: "Nainital es accesible por la estación de Kathgodam o carretera.",
      pt: "Nainital é acessível pela estação de Kathgodam ou estrada."
    },
    nearestAirport: "Pantnagar Airport (PGH)",
    nearestRailway: "Kathgodam Railway Station (KGM)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Dehradun (280 km), Delhi (300 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "5°C - 20°C",
    currency: "INR",
    localLanguage: "Kumaoni, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe hills station. Expect high traffic and parking rules during peak seasons.",
      es: "Estación de montaña muy segura.",
      pt: "Estação de montanha muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Local taxis are convenient for sightseeing.",
        es: "Los taxis locales son prácticos para hacer turismo.",
        pt: "Táxis locais são convenientes para passeios."
      },
      recommended: true
    },
    {
      transportType: "Shared Taxi",
      title: { en: "Shared Taxi", es: "Taxi Compartido", pt: "Táxi Compartilhado" },
      desc: {
        en: "Shared taxis can be useful for nearby destinations.",
        es: "Los taxis compartidos pueden ser útiles para destinos cercanos.",
        pt: "Táxis compartilhados podem ser úteis para destinos próximos."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws operate in selected areas.",
        es: "Los auto-rickshaws funcionan en algunas zonas.",
        pt: "Auto-rickshaws circulam em algumas áreas."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is ideal around Mall Road and the lakefront.",
        es: "Caminar es ideal alrededor de Mall Road y el lago.",
        pt: "Caminhar é ideal ao redor de Mall Road e do lago."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Private cars are useful for Bhimtal, Sattal and other nearby destinations.",
        es: "Los coches privados son útiles para Bhimtal, Sattal y otros destinos cercanos.",
        pt: "Carros particulares são úteis para Bhimtal, Sattal e outros destinos próximos."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Warm Layers", es: "Ropa de abrigo", pt: "Roupas de frio" },
      desc: {
        en: "Carry warm layers, even during summer evenings.",
        es: "Lleva ropa abrigada incluso durante las noches de verano.",
        pt: "Leve roupas quentes mesmo durante as noites de verão."
      }
    },
    {
      title: { en: "Book Early", es: "Reservar con antelación", pt: "Reservar com antecedência" },
      desc: {
        en: "Book accommodation early during peak seasons.",
        es: "Reserva el alojamiento con antelación durante las temporadas altas.",
        pt: "Reserve a hospedagem com antecedência durante a alta temporada."
      }
    },
    {
      title: { en: "Shoes", es: "Calzado cómodo", pt: "Calçados confortáveis" },
      desc: {
        en: "Wear comfortable shoes for steep roads and walks.",
        es: "Lleva calzado cómodo para las pendientes y caminatas.",
        pt: "Use calçados confortáveis para as ruas íngremes e caminhadas."
      }
    },
    {
      title: { en: "Weather Check", es: "Verificar clima", pt: "Verificar o clima" },
      desc: {
        en: "Check weather conditions before visiting high viewpoints.",
        es: "Comprueba las condiciones meteorológicas antes de visitar miradores elevados.",
        pt: "Verifique as condições climáticas antes de visitar mirantes elevados."
      }
    },
    {
      title: { en: "Mountain Roads Time", es: "Tiempo de viaje", pt: "Tempo de deslocamento" },
      desc: {
        en: "Allow extra travel time on mountain roads.",
        es: "Reserva tiempo adicional para los desplazamientos por carretera.",
        pt: "Reserve tempo extra para deslocamentos pelas estradas de montanha."
      }
    }
  ],
  hotels: [
    {
      name: "The Naini Retreat",
      tier: "Luxury",
      desc: {
        en: "Heritage hotel with views towards Naini Lake.",
        es: "Hotel histórico con vistas hacia Naini Lake.",
        pt: "Hotel histórico com vista para o Naini Lake."
      },
      image: ""
    },
    {
      name: "Shervani Hilltop",
      tier: "Premium",
      desc: {
        en: "Peaceful hillside accommodation.",
        es: "Alojamiento tranquilo en las colinas.",
        pt: "Hospedagem tranquila nas colinas."
      },
      image: ""
    },
    {
      name: "The Manu Maharani",
      tier: "Luxury",
      desc: {
        en: "Premium hotel close to the lake.",
        es: "Hotel premium cerca del lago.",
        pt: "Hotel premium próximo ao lago."
      },
      image: ""
    },
    {
      name: "Welcomheritage Ashdale",
      tier: "Premium",
      desc: {
        en: "Heritage-style accommodation surrounded by greenery.",
        es: "Alojamiento de estilo patrimonial rodeado de vegetación.",
        pt: "Hospedagem em estilo histórico cercada por vegetação."
      },
      image: ""
    },
    {
      name: "Vikram Vintage Inn",
      tier: "Premium",
      desc: {
        en: "Comfortable hillside hotel.",
        es: "Cómodo hotel en la ladera.",
        pt: "Hotel confortável nas encostas."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Aloo Ke Gutke, Bhatt Ki Churkani, Ras, Bal Mithai and Singori.",
    es: "Pruebe Aloo Ke Gutke, Bhatt Ki Churkani, Ras, Bal Mithai y Singori.",
    pt: "Prove Aloo Ke Gutke, Bhatt Ki Churkani, Ras, Bal Mithai e Singori."
  },
  localFoodDishes: [
    {
      name: { en: "Aloo Ke Gutke", es: "Aloo Ke Gutke", pt: "Aloo Ke Gutke" },
      desc: {
        en: "Spiced potato preparation popular in Uttarakhand.",
        es: "Preparación de patatas especiadas popular en Uttarakhand.",
        pt: "Preparação de batatas temperadas popular em Uttarakhand."
      }
    },
    {
      name: { en: "Bhatt Ki Churkani", es: "Bhatt Ki Churkani", pt: "Bhatt Ki Churkani" },
      desc: {
        en: "Traditional black soybean curry from the Kumaon region.",
        es: "Curry tradicional de soja negra de la región de Kumaon.",
        pt: "Curry tradicional de soja preta da região de Kumaon."
      }
    },
    {
      name: { en: "Ras", es: "Ras", pt: "Ras" },
      desc: {
        en: "Traditional Kumaoni lentil-based dish.",
        es: "Plato tradicional de Kumaon preparado a base de legumbres.",
        pt: "Prato tradicional de Kumaon preparado à base de leguminosas."
      }
    },
    {
      name: { en: "Bal Mithai", es: "Bal Mithai", pt: "Bal Mithai" },
      desc: {
        en: "Traditional Uttarakhand sweet coated with sugar pearls.",
        es: "Dulce tradicional de Uttarakhand cubierto con pequeñas perlas de azúcar.",
        pt: "Doce tradicional de Uttarakhand coberto com pequenas pérolas de açúcar."
      }
    },
    {
      name: { en: "Singori", es: "Singori", pt: "Singori" },
      desc: {
        en: "Traditional sweet wrapped in a fragrant leaf.",
        es: "Dulce tradicional envuelto en una hoja aromática.",
        pt: "Doce tradicional envolto em uma folha aromática."
      }
    }
  ],
  bestTime: {
    en: "March to June is popular for pleasant summer weather, while September to November offers clear skies and good mountain views. Winter can bring cold weather and occasional snowfall.",
    es: "De marzo a junio es popular por su clima agradable, mientras que de septiembre a noviembre suele haber cielos despejados y buenas vistas de las montañas. El invierno puede traer frío y nevadas ocasionales.",
    pt: "Março a junho é popular pelo clima agradável, enquanto setembro a novembro costuma oferecer céu limpo e boas vistas das montanhas. O inverno pode trazer frio e neve ocasional."
  },
  faqs: [
    {
      q: { en: "What is Nainital famous for?", es: "¿Por qué es famosa Nainital?", pt: "Pelo que Nainital é famosa?" },
      a: {
        en: "Nainital is famous for Naini Lake, mountain scenery, boating, Mall Road and colonial heritage.",
        es: "Nainital es famosa por Naini Lake, paisajes montañosos, paseos en barco, Mall Road y patrimonio colonial.",
        pt: "Nainital é famosa pelo Naini Lake, paisagens montanhosas, passeios de barco, Mall Road e patrimônio colonial."
      }
    },
    {
      q: { en: "How many days are enough?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "Three to four days are ideal for Nainital and nearby attractions.",
        es: "Tres o cuatro días son ideales para Nainital y sus atracciones cercanas.",
        pt: "Três a quatro dias são ideais para Nainital e atrações próximas."
      }
    },
    {
      q: { en: "Is Nainital good for families?", es: "¿Es adecuada para familias?", pt: "Nainital é adequada para famílias?" },
      a: {
        en: "Yes, boating, viewpoints, shopping and easy sightseeing make it popular with families.",
        es: "Sí, los paseos en barco, miradores, compras y actividades turísticas lo hacen popular entre familias.",
        pt: "Sim, passeios de barco, mirantes, compras e atrações turísticas tornam o destino popular entre famílias."
      }
    },
    {
      q: { en: "Does Nainital receive snowfall?", es: "¿Nieva en Nainital?", pt: "Neva em Nainital?" },
      a: {
        en: "Snowfall can occur during winter, although timing and intensity vary each year.",
        es: "Puede nevar durante el invierno, aunque el momento y la intensidad varían cada año.",
        pt: "Pode haver neve durante o inverno, mas o período e a intensidade variam a cada ano."
      }
    },
    {
      q: { en: "Which places can be visited near Nainital?", es: "¿Qué lugares visitar cerca?", pt: "Que lugares visitar perto?" },
      a: {
        en: "Bhimtal, Sattal and Naukuchiatal are popular nearby lake destinations.",
        es: "Bhimtal, Sattal y Naukuchiatal son populares destinos lacustres cercanos.",
        pt: "Bhimtal, Sattal e Naukuchiatal são destinos de lagos próximos bastante populares."
      }
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

  const updatedPunjab = updateStateCities("punjab", {
    "amritsar": amritsarDetails,
    "chandigarh": chandigarhDetails,
    "ludhiana": ludhianaDetails,
    "patiala": patialaDetails
  });

  const updatedGujarat = updateStateCities("gujarat", {
    "ahmedabad": ahmedabadDetails,
    "bhuj-kutch": bhujDetails,
    "dwarka": dwarkaDetails,
    "vadodara": vadodaraDetails
  });

  const updatedUttarakhand = updateStateCities("uttarakhand", {
    "dehradun": dehradunDetails,
    "rishikesh": rishikeshDetails,
    "haridwar": haridwarDetails,
    "nainital": nainitalDetails
  });

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for all states and cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const uploadPromises = [];

    if (updatedPunjab) {
      const docRef = doc(firestore, "states", "punjab");
      uploadPromises.push(setDoc(docRef, updatedPunjab).then(() => console.log("🚀 SUCCESS: Remote Firestore 'punjab' document updated!")));
    }
    if (updatedGujarat) {
      const docRef = doc(firestore, "states", "gujarat");
      uploadPromises.push(setDoc(docRef, updatedGujarat).then(() => console.log("🚀 SUCCESS: Remote Firestore 'gujarat' document updated!")));
    }
    if (updatedUttarakhand) {
      const docRef = doc(firestore, "states", "uttarakhand");
      uploadPromises.push(setDoc(docRef, updatedUttarakhand).then(() => console.log("🚀 SUCCESS: Remote Firestore 'uttarakhand' document updated!")));
    }

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
