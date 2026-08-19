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

// Full Tirupati Data
const tirupatiDetails = {
  slug: "tirupati",
  title: { en: "Tirupati", es: "Tirupati", pt: "Tirupati" },
  tagline: {
    en: "Tirupati is one of India's most important pilgrimage destinations, renowned for the sacred Sri Venkateswara Temple at Tirumala. Surrounded by the Eastern Ghats, Tirupati combines spiritual heritage, ancient temples, scenic landscapes and South Indian culture, making it an important destination for pilgrims and cultural travellers.",
    es: "Tirupati es uno de los destinos de peregrinación más importantes de India, famoso por el sagrado templo de Sri Venkateswara en Tirumala. Rodeado por los Ghats Orientales, Tirupati combina patrimonio espiritual, templos antiguos, paisajes naturales y cultura del sur de India.",
    pt: "Tirupati é um dos destinos de peregrinação mais importantes da Índia, famoso pelo sagrado Templo de Sri Venkateswara, em Tirumala. Cercada pelos Gates Orientais, Tirupati combina patrimônio espiritual, templos antigos, paisagens naturais e cultura do sul da Índia."
  },
  image: "/images/andhra pradesh.jpg",
  gallery: [],
  overview: {
    en: "Tirupati is a major spiritual and cultural destination in Andhra Pradesh and serves as the gateway to the sacred hill town of Tirumala. The Sri Venkateswara Temple, dedicated to Lord Venkateswara, attracts millions of devotees and is the centrepiece of the region's religious heritage. Beyond the main temple, visitors can explore other historic temples, peaceful gardens, waterfalls and viewpoints around Tirupati and the Tirumala hills.\n\nThe destination offers more than a pilgrimage experience. Travellers can discover traditional South Indian architecture, local cuisine, devotional traditions and the natural beauty of the Eastern Ghats. Tirupati is suitable for spiritual journeys, family trips, cultural exploration and travellers interested in India's living religious traditions.",
    es: "Tirupati es un importante destino espiritual y cultural de Andhra Pradesh y sirve como puerta de entrada a la sagrada ciudad de montaña de Tirumala. El templo de Sri Venkateswara, dedicado al dios Venkateswara, recibe a millones de peregrinos y constituye el centro del patrimonio religioso de la región. Además del templo principal, los visitantes pueden explorar otros templos históricos, jardines, cascadas y miradores alrededor de Tirupati y las colinas de Tirumala.\n\nEl destino ofrece mucho más que una experiencia de peregrinación. Los viajeros pueden descubrir la arquitectura tradicional del sur de India, la gastronomía local, las tradiciones devocionales y la belleza natural de los Ghats Orientales. Tirupati es ideal para viajes espirituales, familiares y culturales.",
    pt: "Tirupati é um importante destino espiritual e cultural de Andhra Pradesh e funciona como porta de entrada para a sagrada cidade montanhosa de Tirumala. O Templo de Sri Venkateswara, dedicado ao Senhor Venkateswara, recebe milhões de peregrinos e é o centro do patrimônio religioso da região. Além do templo principal, os visitantes podem explorar outros templos históricos, jardins, cachoeiras e mirantes ao redor de Tirupati e das colinas de Tirumala.\n\nO destino oferece muito mais do que uma experiência de peregrinação. Os viajantes podem conhecer a arquitetura tradicional do sul da Índia, a culinária local, as tradições devocionais e a beleza natural dos Gates Orientais. Tirupati é ideal para viagens espirituais, familiares e culturais."
  },
  history: {
    en: "A rich past dating back centuries, connected deeply to the Vijayanagara Empire and Pallava rulers.",
    es: "Un pasado rico que se remonta a siglos, conectado profundamente con el Imperio Vijayanagara.",
    pt: "Um passado rico que remonta a séculos, conectado profundamente ao Império Vijayanagara."
  },
  culture: {
    en: "Famous for traditional South Indian music, temple arts, and spiritual rituals.",
    es: "Famoso por la música tradicional del sur de India y las artes de los templos.",
    pt: "Famoso pela música tradicional do sul da Índia e artes dos templos."
  },
  highlights: [
    {
      title: { en: "Sri Venkateswara Temple, Tirumala", es: "Templo de Sri Venkateswara, Tirumala", pt: "Templo de Sri Venkateswara, Tirumala" },
      desc: {
        en: "Visit the iconic hilltop temple dedicated to Lord Venkateswara and experience one of India's most significant pilgrimage traditions.",
        es: "Visita el icónico templo situado en las colinas y dedicado al dios Venkateswara, y vive una de las tradiciones de peregrinación más importantes de India.",
        pt: "Visite o icônico templo nas colinas dedicado ao Senhor Venkateswara e vivencie uma das mais importantes tradições de peregrinação da Índia."
      }
    },
    {
      title: { en: "Tirumala Hills", es: "Colinas de Tirumala", pt: "Colinas de Tirumala" },
      desc: {
        en: "Enjoy the scenic Eastern Ghats landscape surrounding the temple town, with winding roads, forests and viewpoints.",
        es: "Disfruta de los paisajes de los Ghats Orientales que rodean la ciudad-templo, con carreteras sinuosas, bosques y miradores.",
        pt: "Aprecie as paisagens dos Gates Orientais ao redor da cidade-templo, com estradas sinuosas, florestas e mirantes."
      }
    },
    {
      title: { en: "Kapila Theertham", es: "Kapila Theertham", pt: "Kapila Theertham" },
      desc: {
        en: "Visit this sacred temple and waterfall site located at the foothills of Tirumala.",
        es: "Visita este lugar sagrado con templo y cascada situado al pie de las colinas de Tirumala.",
        pt: "Visite este local sagrado com templo e cachoeira situado ao pé das colinas de Tirumala."
      }
    },
    {
      title: { en: "Sri Govindaraja Swamy Temple", es: "Templo de Sri Govindaraja Swamy", pt: "Templo de Sri Govindaraja Swamy" },
      desc: {
        en: "Explore one of Tirupati's important historic temples and admire its traditional South Indian architecture.",
        es: "Explora uno de los templos históricos más importantes de Tirupati y admira su arquitectura tradicional del sur de India.",
        pt: "Explore um dos importantes templos históricos de Tirupati e admire sua arquitetura tradicional do sul da Índia."
      }
    },
    {
      title: { en: "Sri Padmavathi Ammavari Temple", es: "Templo de Sri Padmavathi Ammavari", pt: "Templo de Sri Padmavathi Ammavari" },
      desc: {
        en: "Visit the important temple dedicated to Goddess Padmavathi in nearby Tiruchanur and experience its devotional atmosphere.",
        es: "Visita el importante templo dedicado a la diosa Padmavathi en la cercana localidad de Tiruchanur y disfruta de su ambiente devocional.",
        pt: "Visite o importante templo dedicado à Deusa Padmavathi, na cidade próxima de Tiruchanur, e vivencie sua atmosfera devocional."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Tirumala Temple", es: "Visitar el Templo de Tirumala", pt: "Visitar o Templo de Tirumala" },
      desc: {
        en: "Experience the spiritual atmosphere of Sri Venkateswara Temple and follow the official darshan and visitor procedures.",
        es: "Vive la atmósfera espiritual del templo de Sri Venkateswara y sigue los procedimientos oficiales de darshan y visita.",
        pt: "Vivencie a atmosfera espiritual do Templo de Sri Venkateswara e siga os procedimentos oficiais de darshan e visitação."
      }
    },
    {
      name: { en: "Explore Tirumala Hills", es: "Explorar las Colinas de Tirumala", pt: "Explorar as Colinas de Tirumala" },
      desc: {
        en: "Enjoy scenic drives, forest landscapes and viewpoints around the Tirumala hills.",
        es: "Disfruta de recorridos panorámicos, bosques y miradores alrededor de las colinas de Tirumala.",
        pt: "Aproveite passeios panorâmicos, florestas e mirantes ao redor das colinas de Tirumala."
      }
    },
    {
      name: { en: "Visit Kapila Theertham", es: "Visitar Kapila Theertham", pt: "Visitar Kapila Theertham" },
      desc: {
        en: "Explore the temple and natural surroundings at this sacred site near Tirupati.",
        es: "Explora el templo y el entorno natural de este lugar sagrado cerca de Tirupati.",
        pt: "Explore o templo e os arredores naturais deste local sagrado próximo a Tirupati."
      }
    },
    {
      name: { en: "Explore Tiruchanur", es: "Explorar Tiruchanur", pt: "Explorar Tiruchanur" },
      desc: {
        en: "Visit Sri Padmavathi Ammavari Temple and discover the religious traditions of Tiruchanur.",
        es: "Visita el templo de Sri Padmavathi Ammavari y descubre las tradiciones religiosas de Tiruchanur.",
        pt: "Visite o Templo de Sri Padmavathi Ammavari e conheça as tradições religiosas de Tiruchanur."
      }
    },
    {
      name: { en: "Explore Local Markets", es: "Explorar Mercados Locales", pt: "Explorar Mercados Locais" },
      desc: {
        en: "Shop for devotional items, traditional handicrafts, sweets, souvenirs and locally made products.",
        es: "Compra artículos religiosos, artesanías tradicionales, dulces, recuerdos y productos locales.",
        pt: "Compre artigos religiosos, artesanato tradicional, doces, souvenirs e produtos locais."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Spiritual Pilgrimage Experience", es: "Experiencia de Peregrinación Espiritual", pt: "Experiência de Peregrinação Espiritual" },
      desc: {
        en: "Experience the devotion, rituals and traditions surrounding one of India's most important pilgrimage centres.",
        es: "Vive la devoción, los rituales y las tradiciones de uno de los centros de peregrinación más importantes de India.",
        pt: "Vivencie a devoção, os rituais e as tradições de um dos mais importantes centros de peregrinação da Índia."
      }
    },
    {
      title: { en: "Temple Architecture Experience", es: "Experiencia de Arquitectura de Templos", pt: "Experiência de Arquitetura de Templos" },
      desc: {
        en: "Admire traditional Dravidian-style temple architecture, intricate carvings and monumental gateways.",
        es: "Admira la arquitectura tradicional de los templos de estilo dravídico, sus tallas y sus monumentales entradas.",
        pt: "Admire a arquitetura tradicional dos tempos de estilo dravidiano, seus detalhes esculpidos e portões monumentais."
      }
    },
    {
      title: { en: "Tirumala Hills Experience", es: "Experiencia de Colinas de Tirumala", pt: "Experiência de Colinas de Tirumala" },
      desc: {
        en: "Combine spiritual visits with peaceful mountain scenery and the natural beauty of the Eastern Ghats.",
        es: "Combina las visitas espirituales con los tranquilos paisajes montañosos y la belleza natural de los Ghats Orientales.",
        pt: "Combine visitas espirituais com paisagens montanhosas tranquilas e a beleza natural dos Gates Orientais."
      }
    },
    {
      title: { en: "South Indian Food Experience", es: "Experiencia de Comida del Sur de India", pt: "Experiência de Comida do Sul da Índia" },
      desc: {
        en: "Taste traditional South Indian meals, temple-style preparations, sweets and regional snacks.",
        es: "Prueba comidas tradicionales del sur de India, preparaciones de estilo tradicional, dulces y aperitivos regionales.",
        pt: "Experimente refeições tradicionais do sul da Índia, preparações tradicionais, doces e petiscos regionais."
      }
    },
    {
      title: { en: "Temple Festival Experience", es: "Experiencia de Festivales de Templos", pt: "Experiência de Festivais de Templos" },
      desc: {
        en: "If your visit coincides with a festival, experience the colourful decorations, rituals and cultural celebrations while respecting local temple guidelines.",
        es: "Si tu visita coincide con un festival, disfruta de las decoraciones, rituales y celebraciones culturales respetando las normas locales de los templos.",
        pt: "Se sua visita coincidir com um festival, vivencie as decorações, rituais e celebrações culturais, respeitando as regras locais dos templos."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Tirupati is accessible by air, train, and road, and connects major South Indian hubs.",
      es: "Accesible por aire, tren y carretera.",
      pt: "Acessível por ar, trem e estrada."
    },
    nearestAirport: "Tirupati Airport (TIR)",
    nearestRailway: "Tirupati Main Railway Station",
    transportOptions: "Taxis, Buses, Auto-rickshaws",
    distanceFromMajorCities: "Chennai (135 km), Bengaluru (250 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "22°C - 38°C",
    currency: "INR",
    localLanguage: "Telugu & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly secure and safe temple town with excellent pilgrim facilities.",
      es: "Ciudad muy segura con excelentes instalaciones para peregrinos.",
      pt: "Cidade altamente segura com excelentes instalações para peregrinos."
    }
  },
  gettingAround: [
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Taxis are convenient for airport transfers and visiting multiple temples and attractions.",
        es: "Los taxis son cómodos para traslados al aeropuerto y para visitar varios templos y atracciones.",
        pt: "Os táxis são convenientes para traslados do aeroporto e para visitar vários templos e atrações."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are useful for shorter journeys around Tirupati.",
        es: "Los autorickshaws son útiles para trayectos cortos por Tirupati.",
        pt: "Os autorriquixás são úteis para trajetos curtos em Tirupati."
      },
      recommended: false
    },
    {
      transportType: "Bus",
      title: { en: "Bus", es: "Autobús", pt: "Ônibus" },
      desc: {
        en: "Public and organised bus services connect Tirupati with Tirumala and other nearby destinations.",
        es: "Los servicios de autobús públicos y organizados conectan Tirupati con Tirumala y otros destinos cercanos.",
        pt: "Serviços de ônibus públicos e organizados conectam Tirupati a Tirumala e outros destinos próximos."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "A private car is convenient for families visiting multiple temples and nearby attractions.",
        es: "Un coche privado es conveniente para familias que visitan varios templos y atracciones cercanas.",
        pt: "Um carro particular é conveniente para famílias que visitam vários templos e atrações próximas."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Walking is suitable around selected temple areas, markets and local neighbourhoods.",
        es: "Caminar es adecuado en determinadas zonas de templos, mercados y barrios locales.",
        pt: "Caminhar é adequado em algumas áreas de templos, mercados e bairros locais."
      },
      recommended: false
    }
  ],
  hotels: [
    {
      name: "Taj Tirupati",
      tier: "Luxury",
      desc: {
        en: "A premium hotel offering comfortable accommodation and convenient access to Tirupati's pilgrimage and city attractions.",
        es: "Hotel premium con alojamiento confortable y fácil acceso a los lugares de peregrinación y atracciones de Tirupati.",
        pt: "Hotel premium com hospedagem confortável e fácil acesso aos locais de peregrinação e atrações de Tirupati."
      },
      image: ""
    },
    {
      name: "Marasa Sarovar Premiere",
      tier: "Luxury",
      desc: {
        en: "A modern premium hotel offering comfortable rooms, dining and leisure facilities.",
        es: "Hotel moderno premium con habitaciones confortables, restaurantes e instalaciones de ocio.",
        pt: "Hotel moderno premium com quartos confortáveis, restaurantes e instalações de lazer."
      },
      image: ""
    },
    {
      name: "Fortune Select Grand Ridge",
      tier: "Premium",
      desc: {
        en: "A full-service hotel suitable for families, pilgrims and leisure travellers.",
        es: "Hotel con servicios completos, adecuado para familias, peregrinos y viajeros de ocio.",
        pt: "Hotel com serviços completos, adequado para famílias, peregrinos e viajantes de lazer."
      },
      image: ""
    },
    {
      name: "Ekante Bliss",
      tier: "Mid-range",
      desc: {
        en: "A comfortable city accommodation option with convenient access to Tirupati's major attractions.",
        es: "Una opción de alojamiento confortable con fácil acceso a las principales atracciones de Tirupati.",
        pt: "Uma opção de hospedagem confortável com fácil acesso às principais atrações de Tirupati."
      },
      image: ""
    },
    {
      name: "Hotel Pai Viceroy",
      tier: "Mid-range",
      desc: {
        en: "A well-located hotel offering comfortable accommodation for pilgrims and leisure travellers.",
        es: "Hotel bien ubicado que ofrece alojamiento confortable para peregrinos y viajeros de ocio.",
        pt: "Hotel bien ubicado que ofrece alojamiento confortable para peregrinos y viajeros de ocio."
      },
      image: ""
    }
  ],
  localFoodDishes: [
    {
      name: { en: "Tirupati Laddu", es: "Tirupati Laddu", pt: "Tirupati Laddu" },
      desc: {
        en: "The famous temple prasadam associated with Sri Venkateswara Temple and one of Tirupati's best-known traditional offerings.",
        es: "El famoso prasadam del templo asociado con el templo de Sri Venkateswara y una de las especialidades tradicionales más conocidas de Tirupati.",
        pt: "O famoso prasadam do templo associado ao Templo de Sri Venkateswara e uma das especialidades tradicionais mais conhecidas de Tirupati."
      }
    },
    {
      name: { en: "South Indian Thali", es: "Thali del Sur de India", pt: "Thali do Sul da Índia" },
      desc: {
        en: "A traditional meal featuring rice, sambar, rasam, vegetables, chutneys and other regional preparations.",
        es: "Comida tradicional que incluye arroz, sambar, rasam, verduras, chutneys y otras preparaciones regionales.",
        pt: "Refeição tradicional com arroz, sambar, rasam, vegetais, chutneys e outras preparações regionais."
      }
    },
    {
      name: { en: "Pulihora", es: "Pulihora", pt: "Pulihora" },
      desc: {
        en: "A tangy tamarind rice preparation flavoured with spices, curry leaves and peanuts.",
        es: "Preparación de arroz con tamarindo de sabor ácido, condimentada con especias, hojas de curry y cacahuetes.",
        pt: "Preparação de arroz com tamarindo, de sabor ácido, temperada com especiarias, folhas de curry e amendoim."
      }
    },
    {
      name: { en: "Pongal", es: "Pongal", pt: "Pongal" },
      desc: {
        en: "A comforting South Indian rice-and-lentil dish prepared in savoury and traditional variations.",
        es: "Un reconfortante plato del sur de India elaborado con arroz y lentejas, disponible en versiones tradicionales y saladas.",
        pt: "Um reconfortante prato do sul da Índia feito com arroz e lentilhas, preparado em versões tradicionais e salgadas."
      }
    },
    {
      name: { en: "Dosa & Idli", es: "Dosa e Idli", pt: "Dosa e Idli" },
      desc: {
        en: "Popular South Indian staples often served with sambar and chutneys.",
        es: "Platos básicos populares del sur de India, normalmente servidos con sambar y chutneys.",
        pt: "Pratos tradicionais populares do sul da Índia, geralmente servidos com sambar e chutneys."
      }
    }
  ],
  travelTips: [
    {
      title: { en: "Plan Darshan in Advance", es: "Planificar Darshan con Anticipación", pt: "Planejar Darshan com Antecedência" },
      desc: {
        en: "Check the official Tirumala Tirupati Devasthanams (TTD) website for current darshan, accommodation and visitor arrangements before travelling.",
        es: "Consulta el sitio oficial de Tirumala Tirupati Devasthanams (TTD) para conocer las normas actuales de darshan, alojamiento y visitas antes de viajar.",
        pt: "Consulte o site oficial da Tirumala Tirupati Devasthanams (TTD) para verificar as regras atuais de darshan, hospedagem e visitação antes da viagem."
      }
    },
    {
      title: { en: "Dress Respectfully", es: "Vestir con Respeto", pt: "Vestir-se com Respeito" },
      desc: {
        en: "Wear modest and traditional-appropriate clothing when visiting temples and religious sites.",
        es: "Usa ropa modesta y apropiada para las tradiciones locales al visitar templos y lugares religiosos.",
        pt: "Use roupas discretas e apropriadas às tradições locais ao visitar templos e locais religiosos."
      }
    },
    {
      title: { en: "Allow Extra Time", es: "Reservar Tiempo Adicional", pt: "Reserve Tempo Extra" },
      desc: {
        en: "Pilgrimage areas can become crowded, especially during weekends, holidays and festivals, so keep extra time in your itinerary.",
        es: "Las zonas de peregrinación pueden estar muy concurridas, especialmente durante fines de semana, días festivos y festivales, por lo que conviene reservar tiempo adicional.",
        pt: "As áreas de peregrinação podem ficar muito movimentadas, especialmente nos fins de semana, feriados e festivais, por isso reserve tempo extra no roteiro."
      }
    },
    {
      title: { en: "Follow Temple Rules", es: "Seguir las Reglas del Templo", pt: "Seguir as Regras do Templo" },
      desc: {
        en: "Follow security procedures, photography restrictions, dress codes and other instructions at religious sites.",
        es: "Sigue los procedimientos de seguridad, las restricciones de fotografía, los códigos de vestimenta y demás instrucciones en los lugares religiosos.",
        pt: "Siga os procedimentos de segurança, restrições de fotografia, códigos de vestimenta e outras orientações nos locais religiosos."
      }
    },
    {
      title: { en: "Carry Water & Comfortable Footwear", es: "Llevar Agua y Calzado Cómodo", pt: "Levar Água e Calçados Confortáveis" },
      desc: {
        en: "Carry drinking water and comfortable footwear, particularly if your itinerary includes walking around temple complexes and hill areas.",
        es: "Lleva agua potable y calzado cómodo, especialmente si tu itinerario incluye caminar por complejos de templos y zonas montañosas.",
        pt: "Leve água potável e calçados confortáveis, especialmente se o roteiro incluir caminhadas por complexos de tempos e áreas montanhosas."
      }
    }
  ],
  attractions: [
    {
      slug: "sri-venkateswara-temple-tirumala",
      name: { en: "Sri Venkateswara Temple, Tirumala", es: "Templo de Sri Venkateswara, Tirumala", pt: "Templo de Sri Venkateswara, Tirumala" },
      desc: {
        en: "The principal pilgrimage attraction and spiritual landmark of the region.",
        es: "La principal atracción de peregrinación y lugar espiritual de la región.",
        pt: "A principal atração de peregrinação e marco espiritual da região."
      }
    },
    {
      slug: "sri-govindaraja-swamy-temple",
      name: { en: "Sri Govindaraja Swamy Temple", es: "Templo de Sri Govindaraja Swamy", pt: "Templo de Sri Govindaraja Swamy" },
      desc: {
        en: "Historic temple known for its traditional South Indian architecture.",
        es: "Templo histórico conocido por su arquitectura tradicional del sur de India.",
        pt: "Templo histórico conhecido por sua arquitetura tradicional do sul da Índia."
      }
    },
    {
      slug: "sri-padmavathi-ammavari-temple",
      name: { en: "Sri Padmavathi Ammavari Temple", es: "Templo de Sri Padmavathi Ammavari", pt: "Templo de Sri Padmavathi Ammavari" },
      desc: {
        en: "Important temple dedicated to Goddess Padmavathi in Tiruchanur.",
        es: "Importante templo dedicado a la diosa Padmavathi en Tiruchanur.",
        pt: "Importante templo dedicado à Deusa Padmavathi em Tiruchanur."
      }
    },
    {
      slug: "kapila-theertham",
      name: { en: "Kapila Theertham", es: "Kapila Theertham", pt: "Kapila Theertham" },
      desc: {
        en: "Sacred temple and natural attraction located near the foothills of Tirumala.",
        es: "Templo sagrado y atractivo natural situado cerca de las colinas de Tirumala.",
        pt: "Templo sagrado e atração natural localizado perto das colinas de Tirumala."
      }
    },
    {
      slug: "akasaganga",
      name: { en: "Akasaganga", es: "Akasaganga", pt: "Akasaganga" },
      desc: {
        en: "Scenic sacred water attraction in the Tirumala hills.",
        es: "Lugar natural y sagrado con agua en las colinas de Tirumala.",
        pt: "Local natural e sagrado com água nas colinas de Tirumala."
      }
    },
    {
      slug: "talakona-waterfall",
      name: { en: "Talakona Waterfall", es: "Cascada Talakona", pt: "Cachoeira Talakona" },
      desc: {
        en: "A scenic waterfall and nature destination located in the broader Tirupati region.",
        es: "Una cascada panorámica y destino natural situado en la región más amplia de Tirupati.",
        pt: "Uma cachoeira panorâmica e destino natural localizado na região de Tirupati."
      }
    },
    {
      slug: "chandragiri-fort",
      name: { en: "Chandragiri Fort", es: "Fuerte Chandragiri", pt: "Forte Chandragiri" },
      desc: {
        en: "Historic fort complex offering insight into the region's royal and architectural history.",
        es: "Complejo histórico que permite conocer la historia real y arquitectónica de la región.",
        pt: "Complexo histórico que oferece uma visão da história real e arquitetônica da região."
      }
    },
    {
      slug: "sri-venkateswara-zoological-park",
      name: { en: "Sri Venkateswara Zoological Park", es: "Sri Venkateswara Zoological Park", pt: "Sri Venkateswara Zoological Park" },
      desc: {
        en: "A large zoological park offering a nature-oriented experience for families and wildlife enthusiasts.",
        es: "Un gran parque zoológico que ofrece una experiencia relacionada con la naturaleza para familias y amantes de la fauna.",
        pt: "Um grande parque zoológico que oferece uma experiência ligada à natureza para famílias e amantes da vida selvagem."
      }
    }
  ],
  bestTimeToVisit: {
    bestTime: {
      en: "October to March: Generally the most comfortable period for sightseeing, temple visits and exploring nearby attractions.",
      es: "Octubre a marzo: Generalmente es el período más cómodo para hacer turismo, visitar templos y explorar las atracciones cercanas.",
      pt: "Outubro a março: Geralmente é o período mais confortável para passeios, visitas aos templos e exploração das atrações próximas."
    },
    peakSeason: "December - January",
    shoulderSeason: "October - November, February - March",
    offSeason: "April - June",
    weatherDesc: {
      en: "October to March: Comfortable; April to June: Hot; Monsoon Season: Rain makes surrounding landscapes greener.",
      es: "Octubre a marzo: Agradable; Abril a junio: Cálido; Monzón: Lluvioso.",
      pt: "Outubro a março: Confortável; Abril a junho: Quente; Monção: Chuvoso."
    },
    monthlyInfo: []
  },
  faqs: [
    {
      q: { en: "What is Tirupati famous for?", es: "¿Por qué es famoso Tirupati?", pt: "Pelo que Tirupati é famoso?" },
      a: {
        en: "Tirupati is primarily famous for the Sri Venkateswara Temple at Tirumala, one of India's most important pilgrimage destinations.",
        es: "Tirupati es principalmente famoso por el templo de Sri Venkateswara en Tirumala, uno de los destinos de peregrinación más importantes de India.",
        pt: "Tirupati é principalmente famoso pelo Templo de Sri Venkateswara, em Tirumala, um dos destinos de peregrinação mais importantes da Índia."
      }
    },
    {
      q: { en: "How many days are enough for Tirupati?", es: "¿Cuántos días son suficientes para Tirupati?", pt: "Quantos dias são suficientes para Tirupati?" },
      a: {
        en: "Two to three days are generally enough to visit Tirumala, major temples and nearby attractions.",
        es: "Dos o tres días suelen ser suficientes para visitar Tirumala, los principales templos y las atracciones cercanas.",
        pt: "Dois a três dias geralmente são suficientes para conhecer Tirumala, os principais templos e as atrações próximas."
      }
    },
    {
      q: { en: "Is Tirupati suitable for families?", es: "¿Tirupati es adecuado para familias?", pt: "Tirupati é adequado para famílias?" },
      a: {
        en: "Yes. Tirupati is suitable for family pilgrimage trips and cultural holidays, with temples, nature attractions and family-friendly accommodation options.",
        es: "Sí. Tirupati es adecuado para viajes familiares de peregrinación y vacaciones culturales, con templos, atracciones naturales y opciones de alojamiento para familias.",
        pt: "Sim. Tirupati é adequado para viagens familiares de peregrinação e férias culturais, com templos, atrações naturais e opções de hospedagem para famílias."
      }
    },
    {
      q: { en: "Can tourists visit Tirumala without advance planning?", es: "¿Se puede visitar Tirumala sin planificación previa?", pt: "É possível visitar Tirumala sem planejamento prévio?" },
      a: {
        en: "It is better to check current TTD darshan, accommodation and transport arrangements in advance, especially during weekends, festivals and holidays.",
        es: "Es mejor consultar con anticipación las opciones actuales de darshan, alojamiento y transporte de TTD, especialmente durante fines de semana, festivales y días festivos.",
        pt: "É melhor verificar com antecedência as opções atuais de darshan, hospedagem e transporte da TTD, especialmente nos fins de semana, festivais e feriados."
      }
    },
    {
      q: { en: "What food is Tirupati famous for?", es: "¿Qué comida es famosa en Tirupati?", pt: "Por qual comida Tirupati é famoso?" },
      a: {
        en: "Tirupati is known for Tirupati Laddu, South Indian meals, pulihora, pongal, dosa, idli and other regional vegetarian dishes.",
        es: "Tirupati es conocido por el Tirupati Laddu, las comidas del sur de India, pulihora, pongal, dosa, idli y otros platos vegetarianos regionales.",
        pt: "Tirupati é conhecido pelo Tirupati Laddu, refeições do sul da Índia, pulihora, pongal, dosa, idli e outros pratos vegetarianos regionais."
      }
    }
  ]
};

// Full Jagdalpur Data
const jagdalpurDetails = {
  slug: "jagdalpur",
  title: { en: "Jagdalpur", es: "Jagdalpur", pt: "Jagdalpur" },
  tagline: {
    en: "Gateway to Bastar Tribal Country",
    es: "Descubre la magia de Jagdalpur",
    pt: "Descubra a magia de Jagdalpur"
  },
  image: "https://res.cloudinary.com/irrjgm1b/image/upload/v1787072519/mhindiatrips/rnas4tglwlbfoehc2gkn.jpg",
  gallery: [],
  overview: {
    en: "Jagdalpur is the cultural and natural heart of Bastar in Chhattisgarh, surrounded by dense forests, waterfalls, caves, rivers and vibrant tribal traditions. The city is an excellent base for exploring Bastar's spectacular natural attractions, including Chitrakote Waterfall, Tirathgarh Waterfall and Kanger Valley National Park. Jagdalpur also offers opportunities to discover Bastar's traditional handicrafts, local cuisine, tribal art and unique cultural heritage.",
    es: "Jagdalpur es el corazón cultural y natural de Bastar, en Chhattisgarh, rodeado de densos bosques, cascadas, cuevas, ríos y vibrantes tradiciones tribales. La ciudad es una excelente base para explorar las impresionantes atracciones naturales de Bastar, como la cascada de Chitrakote, la cascada de Tirathgarh y el Parque Nacional del Valle de Kanger. Jagdalpur también ofrece la oportunidad de descubrir la artesanía tradicional, la gastronomía local, el arte tribal y el rico patrimonio cultural de Bastar.",
    pt: "Jagdalpur é o coração cultural e natural de Bastar, em Chhattisgarh, cercado por densas florestas, cachoeiras, cavernas, rios e vibrantes tradições tribais. A cidade é uma excelente base para explorar as espetaculares atrações naturais de Bastar, incluindo a Cachoeira de Chitrakote, a Cachoeira de Tirathgarh e o Parque Nacional do Vale de Kanger. Jagdalpur também oferece oportunidades para conhecer o artesanato tradicional, a culinária local, a arte tribal e o rico patrimônio cultural de Bastar."
  },
  history: {
    en: "Historically was the capital of the Bastar Princely State, retaining the rich history of Kakatiya dynasty.",
    es: "Históricamente fue la capital del estado principesco de Bastar.",
    pt: "Historicamente foi a capital do Estado Principesco de Bastar."
  },
  culture: {
    en: "Bastar tribal traditions, unique arts and crafts, woodcarvings, bell metal (Dhokra) art.",
    es: "Tradiciones tribales de Bastar y arte Dhokra en metal.",
    pt: "Tradições tribais de Bastar e arte Dhokra em metal."
  },
  highlights: [
    {
      title: { en: "Chitrakote Waterfall", es: "Cascada Chitrakote", pt: "Cachoeira Chitrakote" },
      desc: {
        en: "Known as one of India's most spectacular waterfalls, Chitrakote is famous for its wide horseshoe-shaped cascade and beautiful forest surroundings.",
        es: "Considerada una de las cascadas más espectaculares de India, Chitrakote es famosa por su amplia caída en forma de herradura y sus hermosos alrededores boscosos.",
        pt: "Considerada uma das cachoeiras mais espetaculares da Índia, Chitrakote é famosa por sua ampla queda em forma de ferradura e pelos belos bosques ao redor."
      }
    },
    {
      title: { en: "Tirathgarh Waterfall", es: "Cascada Tirathgarh", pt: "Cachoeira Tirathgarh" },
      desc: {
        en: "A beautiful multi-level waterfall surrounded by lush greenery, making it an excellent destination for nature lovers and photographers.",
        es: "Una hermosa cascada de varios niveles rodeada de exuberante vegetación, ideal para amantes de la naturaleza y la fotografía.",
        pt: "Uma bela cachoeira de vários níveis cercada por uma vegetação exuberante, ideal para amantes da natureza e fotografia."
      }
    },
    {
      title: { en: "Kanger Valley National Park", es: "Parque Nacional Valle de Kanger", pt: "Parque Nacional do Vale de Kanger" },
      desc: {
        en: "A biodiverse protected area known for forests, wildlife, caves, streams and dramatic natural landscapes.",
        es: "Un área protegida rica en biodiversidad, conocida por sus bosques, fauna, cuevas, arroyos y espectaculares paisajes naturales.",
        pt: "Uma área protegida rica em biodiversidade, conhecida por suas florestas, vida selvagem, cavernas, riachos e paisagens naturais impressionantes."
      }
    },
    {
      title: { en: "Bastar Tribal Culture", es: "Cultura Tribal de Bastar", pt: "Cultura Tribal de Bastar" },
      desc: {
        en: "Experience the distinctive traditions, festivals, music, dance, crafts and lifestyle of Bastar's indigenous communities.",
        es: "Conoce las tradiciones, festivales, música, danzas, artesanías y formas de vida de las comunidades indígenas de Bastar.",
        pt: "Conheça as tradições, festivais, música, danças, artesanato e modos de vida das comunidades indígenas de Bastar."
      }
    },
    {
      title: { en: "Bastar Handicrafts", es: "Artesanías de Bastar", pt: "Artesanato de Bastar" },
      desc: {
        en: "Discover traditional Bastar metal craft, terracotta, wooden artwork, bamboo products and other locally made handicrafts.",
        es: "Descubre la artesanía tradicional de Bastar, incluyendo trabajos en metal, terracota, madera, bambú y otros productos hechos localmente.",
        pt: "Descubra o artesanato tradicional de Bastar, incluindo trabalhos em metal, terracota, madeira, bambu e outros produtos feitos localmente."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Chitrakote Waterfall", es: "Visitar la Cascada Chitrakote", pt: "Visitar a Cachoeira Chitrakote" },
      desc: {
        en: "Admire the dramatic waterfall, surrounding forests and scenic viewpoints, especially during the monsoon and post-monsoon seasons.",
        es: "Admira la espectacular cascada, los bosques cercanos y los miradores panorámicos, especialmente durante y después de la temporada de monzones.",
        pt: "Admire a espetacular cachoeira, as florestas ao redor e os mirantes panorâmicos, especialmente durante e após a temporada de monções."
      }
    },
    {
      name: { en: "Explore Kanger Valley National Park", es: "Explorar el Parque Valle de Kanger", pt: "Explorar o Parque do Vale de Kanger" },
      desc: {
        en: "Explore forest landscapes, wildlife habitats, caves and natural formations with a permitted local guide or organised tour.",
        es: "Explora bosques, hábitats de fauna, cuevas y formaciones naturales con un guía local autorizado o mediante un tour organizado.",
        pt: "Explore florestas, habitats de vida selvagem, cavernas e formações naturais com um guia local autorizado ou por meio de um passeio organizado."
      }
    },
    {
      name: { en: "Discover Tirathgarh Waterfall", es: "Descubrir la Cascada Tirathgarh", pt: "Conhecer a Cachoeira Tirathgarh" },
      desc: {
        en: "Enjoy the peaceful surroundings, forest scenery and cascading water at this picturesque natural attraction.",
        es: "Disfruta del entorno tranquilo, los paisajes boscosos y las cascadas de este hermoso atractivo natural.",
        pt: "Aproveite o ambiente tranquilo, as paisagens florestais e as águas em cascata desta bela atração natural."
      }
    },
    {
      name: { en: "Explore Bastar Handicrafts", es: "Explorar Artesanías de Bastar", pt: "Conhecer o Artesanato de Bastar" },
      desc: {
        en: "Browse traditional metalwork, wooden crafts, bamboo products and other locally made souvenirs.",
        es: "Explora trabajos tradicionales en metal, artesanías de madera, productos de bambú y otros recuerdos locales.",
        pt: "Explore trabalhos tradicionais em metal, artesanato em madeira, produtos de bambu e outras lembranças locais."
      }
    },
    {
      name: { en: "Experience Local Culture", es: "Vivir la Cultura Local", pt: "Vivenciar a Cultura Local" },
      desc: {
        en: "Discover Bastar's traditional music, dance, festivals, markets and indigenous cultural traditions.",
        es: "Descubre la música, danzas, festivales, mercados y tradiciones culturales indígenas de Bastar.",
        pt: "Conheça a música, danças, festivais, mercados e tradições culturais indígenas de Bastar."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Waterfall & Nature Experience", es: "Experiencia de Cascadas y Naturaleza", pt: "Experiência de Cachoeiras e Natureza" },
      desc: {
        en: "Spend time surrounded by forests, flowing water and dramatic landscapes at Chitrakote and Tirathgarh.",
        es: "Disfruta de bosques, agua en movimiento y paisajes espectaculares en Chitrakote y Tirathgarh.",
        pt: "Desfrute de florestas, águas correntes e paisagens impressionantes em Chitrakote e Tirathgarh."
      }
    },
    {
      title: { en: "Tribal Culture Experience", es: "Experiencia de Cultura Tribal", pt: "Experiência de Cultura Tribal" },
      desc: {
        en: "Learn about Bastar's indigenous traditions, community life, festivals, music and artistic heritage.",
        es: "Conoce las tradiciones indígenas, la vida comunitaria, los festivales, la música y el patrimonio artístico de Bastar.",
        pt: "Conheça as tradições indígenas, a vida comunitária, os festivais, a música e o patrimônio artístico de Bastar."
      }
    },
    {
      title: { en: "Bastar Art & Craft Experience", es: "Experiencia de Arte y Artesanía de Bastar", pt: "Experiência de Arte e Artesanato de Bastar" },
      desc: {
        en: "Discover the craftsmanship behind Bastar's famous metal, wood, terracotta and bamboo artworks.",
        es: "Descubre la artesanía detrás de las famosas obras de metal, madera, terracota y bambú de Bastar.",
        pt: "Conheça o trabalho artesanal por trás das famosas peças de metal, madeira, terracota e bambu de Bastar."
      }
    },
    {
      title: { en: "Forest Exploration Experience", es: "Experiencia de Exploración de Bosques", pt: "Experiência de Exploração de Florestas" },
      desc: {
        en: "Explore the rich landscapes of Bastar's forests and discover its unique natural environment.",
        es: "Explora los ricos paisajes de los bosques de Bastar y descubre su singular entorno natural.",
        pt: "Explore as ricas paisagens das florestas de Bastar e descubra seu ambiente natural único."
      }
    },
    {
      title: { en: "Local Food Experience", es: "Experiencia de Comida Local", pt: "Experiência de Comida Local" },
      desc: {
        en: "Taste traditional Bastar and Chhattisgarhi dishes prepared with locally available ingredients and regional flavours.",
        es: "Prueba platos tradicionales de Bastar y Chhattisgarh preparados con ingredientes locales y sabores regionales.",
        pt: "Experimente pratos tradicionais de Bastar e Chhattisgarh preparados com ingredientes locais e sabores regionais."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Jagdalpur has regional road and rail connections. Bastar exploration requires road travel.",
      es: "Jagdalpur cuenta con conexiones regionales de carretera y tren.",
      pt: "Jagdalpur possui conexões regionais rodoviárias e ferroviárias."
    },
    nearestAirport: "Jagdalpur Airport (JGB) / Raipur Airport (RPR)",
    nearestRailway: "Jagdalpur Railway Station",
    transportOptions: "Private Cars, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Raipur (290 km), Visakhapatnam (300 km)",
    recommendedStay: "3-4 Days",
    avgTemp: "18°C - 35°C",
    currency: "INR",
    localLanguage: "Halbi, Bhatri, Hindi",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Travel with local guides and follow designated routes for remote forest/cave areas.",
      es: "Viaje con guías locales y siga las rutas designadas en áreas forestales.",
      pt: "Viaje com guias locais e siga as rotas indicadas nas áreas de floresta."
    }
  },
  gettingAround: [
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "A private car with a driver is one of the most convenient options for visiting waterfalls, caves and forest attractions outside Jagdalpur.",
        es: "Un coche privado con conductor es una de las opciones más cómodas para visitar cascadas, cuevas y atracciones forestales fuera de Jagdalpur.",
        pt: "Um carro particular com motorista é uma das opções mais convenientes para visitar cachoeiras, cavernas e atrações florestais fora de Jagdalpur."
      },
      recommended: true
    },
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Taxis are useful for airport transfers, sightseeing and longer journeys around Bastar.",
        es: "Los taxis son útiles para traslados al aeropuerto, visitas turísticas y viajes largos por Bastar.",
        pt: "Os táxis são úteis para traslados do aeroporto, passeios e viagens mais longas por Bastar."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Auto-rickshaws are convenient for shorter journeys within Jagdalpur.",
        es: "Los autorickshaws son prácticos para trayectos cortos dentro de Jagdalpur.",
        pt: "Os autorriquixás são convenientes para trajetos curtos dentro de Jagdalpur."
      },
      recommended: false
    },
    {
      transportType: "Local Transport",
      title: { en: "Local Transport", es: "Transporte Local", pt: "Transporte Local" },
      desc: {
        en: "Local buses and shared transport can be useful for budget-conscious travellers, although schedules may be less frequent for remote attractions.",
        es: "Los autobuses locales y el transporte compartido pueden ser útiles para viajeros con presupuesto limitado, aunque los servicios pueden ser menos frecuentes hacia lugares remotos.",
        pt: "Ônibus locais e transporte compartilhado podem ser úteis para viajantes com orçamento limitado, embora os serviços possam ser menos frequentes para atrações remotas."
      },
      recommended: false
    },
    {
      transportType: "Guided Tours",
      title: { en: "Guided Tours", es: "Tours Guiados", pt: "Passeios Guiados" },
      desc: {
        en: "Organised tours or local guides are recommended when exploring national park areas, caves and remote natural attractions.",
        es: "Se recomiendan tours organizados o guías locales para explorar parques nacionales, cuevas y atracciones naturales remotas.",
        pt: "Passeios organizados ou guias locais são recomendados para explorar áreas de parques nacionais, cavernas e atrações naturais remotas."
      },
      recommended: true
    }
  ],
  hotels: [
    {
      name: "Naman Heights",
      tier: "Mid-range",
      desc: {
        en: "A comfortable accommodation option in Jagdalpur suitable for travellers exploring Bastar.",
        es: "Una opción de alojamiento confortable en Jagdalpur, adecuada para viajeros que exploran Bastar.",
        pt: "Uma opção de hospedagem confortável em Jagdalpur, adequada para viajantes que exploram Bastar."
      },
      image: ""
    },
    {
      name: "Hotel Devansh",
      tier: "Mid-range",
      desc: {
        en: "A practical city accommodation option for travellers looking for convenient access to Jagdalpur's attractions.",
        es: "Una opción práctica de alojamiento urbano para viajeros que buscan fácil acceso a las atracciones de Jagdalpur.",
        pt: "Uma opção prática de hospedagem na cidade para viajantes que procuram fácil acesso às atrações de Jagdalpur."
      },
      image: ""
    },
    {
      name: "Bastar Jungle Resort",
      tier: "Boutique",
      desc: {
        en: "A nature-oriented stay suitable for travellers looking for a quieter environment close to Bastar's natural landscapes.",
        es: "Un alojamiento orientado a la naturaleza, ideal para viajeros que buscan un ambiente tranquilo cerca de los paisajes naturales de Bastar.",
        pt: "Uma hospedagem voltada para a natureza, ideal para viajantes que procuram um ambiente tranquilo próximo às paisagens naturais de Bastar."
      },
      image: ""
    },
    {
      name: "Hotel Akanksha",
      tier: "Mid-range",
      desc: {
        en: "A convenient local accommodation option for short stays in Jagdalpur.",
        es: "Una opción de alojamiento local conveniente para estancias cortas en Jagdalpur.",
        pt: "Uma opção de hospedagem local conveniente para estadias curtas em Jagdalpur."
      },
      image: ""
    },
    {
      name: "Hotel Rainbow",
      tier: "Mid-range",
      desc: {
        en: "A practical accommodation option for travellers using Jagdalpur as a base for exploring Bastar.",
        es: "Una opción práctica para viajeros que utilizan Jagdalpur como base para explorar Bastar.",
        pt: "Uma opção prática para viajantes que utilizam Jagdalpur como base para explorar Bastar."
      },
      image: ""
    }
  ],
  localFoodDishes: [
    {
      name: { en: "Chila", es: "Chila", pt: "Chila" },
      desc: {
        en: "A traditional savoury pancake-style dish prepared using a rice or lentil-based batter and local seasonings.",
        es: "Un plato tradicional similar a una tortita salada, preparado con una mezcla a base de arroz o lentejas y condimentos locales.",
        pt: "Um prato tradicional semelhante a uma panqueca salgada, preparado com massa à base de arroz ou lentilhas e temperos locais."
      }
    },
    {
      name: { en: "Fara", es: "Fara", pt: "Fara" },
      desc: {
        en: "A traditional steamed preparation made from rice flour, commonly enjoyed as a light regional snack or meal.",
        es: "Una preparación tradicional al vapor elaborada con harina de arroz, que suele disfrutarse como aperitivo o comida ligera regional.",
        pt: "Uma preparação tradicional cozida no vapor feita com farinha de arroz, geralmente apreciada como lanche ou refeição leve regional."
      }
    },
    {
      name: { en: "Muthiya", es: "Muthiya", pt: "Muthiya" },
      desc: {
        en: "A regional steamed or cooked snack prepared with flour, spices and local ingredients.",
        es: "Un aperitivo regional cocido al vapor o preparado con harina, especias e ingredientes locales.",
        pt: "Um petisco regional cozido no vapor ou preparado com farinha, especiarias e ingredientes locais."
      }
    },
    {
      name: { en: "Bafauri", es: "Bafauri", pt: "Bafauri" },
      desc: {
        en: "A traditional steamed snack made from a spiced lentil mixture and enjoyed across Chhattisgarh.",
        es: "Un aperitivo tradicional al vapor elaborado con una mezcla de lentejas especiada, popular en Chhattisgarh.",
        pt: "Um petisco tradicional cozido no vapor feito com uma mistura temperada de lentilhas, popular em Chhattisgarh."
      }
    },
    {
      name: { en: "Mahua-Based Traditional Foods", es: "Alimentos Tradicionales de Mahua", pt: "Alimentos Tradicionais de Mahua" },
      desc: {
        en: "Mahua is an important traditional ingredient in Bastar and is used in various local culinary and cultural preparations.",
        es: "El mahua es un ingrediente tradicional importante de Bastar y se utiliza en diversas preparaciones culinarias y culturales locales.",
        pt: "Mahua é um ingrediente tradicional importante de Bastar e é utilizado em diversas preparações culinárias e culturais locais."
      }
    }
  ],
  travelTips: [
    {
      title: { en: "Carry Essentials for Nature Trips", es: "Llevar Elementos Esenciales", pt: "Levar Itens Essenciais" },
      desc: {
        en: "Carry drinking water, sunscreen, insect repellent, a hat and basic medicines when visiting forests and waterfalls.",
        es: "Lleva agua potable, protector solar, repelente de insectos, sombrero y medicamentos básicos al visitar bosques y cascadas.",
        pt: "Leve água potável, protetor solar, repelente de insetos, chapéu e medicamentos básicos ao visitar florestas e cachoeiras."
      }
    },
    {
      title: { en: "Wear Comfortable Footwear", es: "Usar Calzado Cómodo", pt: "Usar Calçados Confortáveis" },
      desc: {
        en: "Wear sturdy and comfortable footwear when visiting waterfalls, caves, forests and natural spots.",
        es: "Lleva ropa ligera y cómoda y calzado resistente al visitar cascadas y bosques.",
        pt: "Use calçados resistentes e confortáveis ao visitar cachoeiras, florestas e cavernas."
      }
    },
    {
      title: { en: "Respect Tribal Traditions", es: "Respetar Tradiciones Tribales", pt: "Respeitar Tradições Tribais" },
      desc: {
        en: "Respect local customs, traditions and photography guidelines when visiting tribal communities.",
        es: "Respeta las costumbres, tradiciones y normas de fotografía locales al visitar comunidades tribales.",
        pt: "Respeite os costumes, tradições e regras locais de fotografia ao visitar comunidades tribais."
      }
    },
    {
      title: { en: "Plan Route & Transport in Advance", es: "Planificar Ruta y Transporte", pt: "Planejar Rota e Transporte" },
      desc: {
        en: "Some of Bastar's most beautiful spots are located away from major cities, so plan your route and transport in advance.",
        es: "Muchos de los atractivos están alejados de las ciudades principales, planea tu transporte con anticipación.",
        pt: "Muitos locais ficam afastados das cidades principais, planeje a rota e o transporte com antecedência."
      }
    },
    {
      title: { en: "Hire Local Guides for Caves", es: "Contratar Guías Locales para Cuevas", pt: "Contratar Guias Locais para Cavernas" },
      desc: {
        en: "For exploring caves and national park areas, hire permitted local guides for safety and detailed information.",
        es: "Contrata guías locales autorizados para explorar parques nacionales y cuevas.",
        pt: "Contrate guias locais credenciados para explorar parques nacionais e cavernas."
      }
    }
  ],
  attractions: [
    {
      slug: "chitrakote-waterfall-bastar",
      name: { en: "Chitrakote Waterfall", es: "Cascada Chitrakote", pt: "Cachoeira Chitrakote" },
      desc: {
        en: "Spectacular horseshoe-shaped waterfall surrounded by forests.",
        es: "Espectacular cascada en forma de herradura rodeada de bosques.",
        pt: "Espetacular cachoeira em forma de ferradura cercada por florestas."
      }
    },
    {
      slug: "tirathgarh-waterfall-bastar",
      name: { en: "Tirathgarh Waterfall", es: "Cascada Tirathgarh", pt: "Cachoeira Tirathgarh" },
      desc: {
        en: "Beautiful multi-level waterfall surrounded by lush greenery.",
        es: "Hermosa cascada de varios niveles rodeada de vegetación.",
        pt: "Bela cachoeira de vários níveis cercada por vegetação."
      }
    },
    {
      slug: "kanger-valley-national-park-bastar",
      name: { en: "Kanger Valley National Park", es: "Parque Nacional Valle de Kanger", pt: "Parque Nacional do Vale de Kanger" },
      desc: {
        en: "Biodiverse national park known for forests, caves and natural beauty.",
        es: "Parque nacional rico en biodiversidad con bosques, cuevas y paisajes.",
        pt: "Parque nacional rico em biodiversidade com florestas, cavernas e paisagens."
      }
    },
    {
      slug: "kutumsar-cave-bastar",
      name: { en: "Kutumsar Cave", es: "Cueva Kutumsar", pt: "Caverna Kutumsar" },
      desc: {
        en: "Famous limestone cave known for its stalactite and stalagmite formations.",
        es: "Famosa cueva de piedra caliza con estalactitas y estalagmitas.",
        pt: "Famosa caverna de calcário com estalactites e estalagmites."
      }
    },
    {
      slug: "dandak-cave-bastar",
      name: { en: "Dandak Cave", es: "Cueva Dandak", pt: "Caverna Dandak" },
      desc: {
        en: "Historic limestone cave featuring natural formations and chambers.",
        es: "Cueva histórica de piedra caliza con formaciones naturales.",
        pt: "Caverna histórica de calcário com formações naturais."
      }
    },
    {
      slug: "kailash-cave-bastar",
      name: { en: "Kailash Cave", es: "Cueva Kailash", pt: "Caverna Kailash" },
      desc: {
        en: "A scenic cave destination known for natural formations and spiritual significance.",
        es: "Cueva pintoresca conocida por sus formaciones y significado espiritual.",
        pt: "Caverna pitoresca conhecida por suas formações e significado espiritual."
      }
    },
    {
      slug: "bastar-palace-jagdalpur",
      name: { en: "Bastar Palace", es: "Palacio de Bastar", pt: "Palácio de Bastar" },
      desc: {
        en: "Historic palace showcasing the heritage and royal history of Bastar.",
        es: "Palacio histórico que muestra el patrimonio y la historia de Bastar.",
        pt: "Palácio histórico que mostra o patrimônio e a história de Bastar."
      }
    },
    {
      slug: "danteshwari-temple-dantewada",
      name: { en: "Danteshwari Temple, Dantewada", es: "Templo Danteshwari, Dantewada", pt: "Templo Danteshwari, Dantewada" },
      desc: {
        en: "Ancient temple dedicated to Goddess Danteshwari and an important spiritual site.",
        es: "Templo antiguo dedicado a la diosa Danteshwari, importante lugar espiritual.",
        pt: "Templo antigo dedicado à Deusa Danteshwari, importante local espiritual."
      }
    }
  ],
  bestTimeToVisit: {
    bestTime: {
      en: "October to March is generally comfortable for sightseeing. The monsoon and post-monsoon period can offer spectacular waterfall views.",
      es: "De octubre a marzo suele ser una época agradable para hacer turismo. La temporada de monzones ofrece vistas espectaculares de las cascadas.",
      pt: "De outubro a março geralmente é uma época agradável para passeios. A temporada de monções oferece vistas espetaculares das cachoeiras."
    },
    peakSeason: "October - February",
    shoulderSeason: "March, September",
    offSeason: "April - June",
    weatherDesc: {
      en: "October to March: Cool and pleasant; Monsoon: Rich greenery and full waterfalls.",
      es: "Octubre a marzo: Fresco; Monzones: Paisajes verdes y cascadas caudalosas.",
      pt: "Outubro a março: Fresco; Monções: Paisagens verdes e cachoeiras cheias."
    },
    monthlyInfo: []
  },
  faqs: [
    {
      q: { en: "What is Jagdalpur famous for?", es: "¿Por qué es famoso Jagdalpur?", pt: "Pelo que Jagdalpur é famoso?" },
      a: {
        en: "Jagdalpur is famous for its natural attractions like Chitrakote and Tirathgarh waterfalls, caves, and Bastar tribal culture and handicrafts.",
        es: "Jagdalpur es famoso por atractivos naturales como las cascadas de Chitrakote y Tirathgarh, cuevas y la cultura y artesanías tribales de Bastar.",
        pt: "Jagdalpur é famoso por atrações naturais como as cachoeiras de Chitrakote e Tirathgarh, cavernas e a cultura e artesanato tribal de Bastar."
      }
    },
    {
      q: { en: "How many days are enough to explore Jagdalpur?", es: "¿Cuántos días son suficientes para explorar Jagdalpur?", pt: "Quantos dias são suficientes para explorar Jagdalpur?" },
      a: {
        en: "Three to four days are recommended for exploring Jagdalpur and major nearby attractions.",
        es: "Se recomiendan tres o cuatro días para explorar Jagdalpur y sus principales atracciones cercanas.",
        pt: "Recomenda-se uma viagem de três a quatro dias para conhecer Jagdalpur e suas principais atrações próximas."
      }
    }
  ]
};

// 3 Placeholder Cities for Andhra Pradesh
const placeholderCities = [
  {
    slug: "visakhapatnam",
    title: { en: "Visakhapatnam", es: "Visakhapatnam", pt: "Visakhapatnam" },
    tagline: { en: "Coastal Beauty, Beaches & Ancient Buddhist Sites", es: "Belleza costera, playas y sitios budistas antiguos", pt: "Beleza costeira, praias e antigos sítios budistas" },
    image: "",
    gallery: [],
    overview: { en: "A beautiful coastal port city in Andhra Pradesh, Visakhapatnam is famous for its clean beaches, scenic Araku valley nearby, and rich maritime heritage.", es: "Una hermosa ciudad portuaria costera en Andhra Pradesh.", pt: "Uma bela cidade portuária costeira em Andhra Pradesh." },
    history: { en: "Dating back to the Kalinga empire, featuring ancient Buddhist sites at Thotlakonda and Bavikonda.", es: "Historia que se remonta al imperio Kalinga.", pt: "História que remonta ao império Kalinga." },
    culture: { en: "A mix of modern coastal lifestyle and traditional Telugu cultural heritage.", es: "Mezcla de vida costera moderna y patrimonio tradicional.", pt: "Mistura de vida costeira moderna e patrimônio tradicional." },
    attractions: [],
    thingsToDo: [],
    hotels: [],
    localFoodDishes: [],
    travelTips: [],
    gettingAround: []
  },
  {
    slug: "vijayawada",
    title: { en: "Vijayawada", es: "Vijayawada", pt: "Vijayawada" },
    tagline: { en: "Historic Caves, Kanaka Durga Temple & Krishna River Views", es: "Cuevas históricas, templo Kanaka Durga y vistas al río Krishna", pt: "Cavernas históricas, Templo Kanaka Durga e vistas do Rio Krishna" },
    image: "",
    gallery: [],
    overview: { en: "Located on the banks of the Krishna River, Vijayawada is a major commercial hub and home to the sacred Kanaka Durga Temple and ancient Undavalli rock-cut caves.", es: "Situada a orillas del río Krishna, Vijayawada es un importante centro comercial.", pt: "Localizada às margens do rio Krishna, Vijayawada é um importante centro comercial." },
    history: { en: "An ancient city associated with Arjuna's penance, showing rock-cut architecture from the Vishnukundina dynasty.", es: "Ciudad antigua con arquitectura rupestre.", pt: "Cidade antiga com arquitetura rupestre." },
    culture: { en: "Rich in arts, classical Telugu literature, and bustling festival celebrations.", es: "Rica en arts y literatura clásica telugu.", pt: "Rica em artes e literatura clássica telugu." },
    attractions: [],
    thingsToDo: [],
    hotels: [],
    localFoodDishes: [],
    travelTips: [],
    gettingAround: []
  },
  {
    slug: "araku-valley",
    title: { en: "Araku Valley", es: "Valle de Araku", pt: "Vale de Araku" },
    tagline: { en: "Misty Coffee Hills, Tribal Culture & Borra Caves Exploration", es: "Colinas de café neblinosas, cultura tribal y cuevas de Borra", pt: "Colinas de café enevoadas, cultura tribal e cavernas de Borra" },
    image: "",
    gallery: [],
    overview: { en: "Araku Valley is a scenic hill station in the Eastern Ghats, famous for its lush coffee plantations, misty hills, waterfalls, and the spectacular million-year-old Borra Caves.", es: "Araku Valley es una pintoresca estación de montaña en los Ghats Orientales.", pt: "Araku Valley é uma pitoresca estação montanhosa nos Gates Orientais." },
    history: { en: "Inhabited by local indigenous tribes and home to the ancient Borra limestone caves.", es: "Habitado por tribus indígenas y hogar de las cuevas de Borra.", pt: "Habitado por tribus indígenas e lar das cavernas de Borra." },
    culture: { en: "Distinctive tribal music, Dhimsa dance, coffee-making traditions, and tribal handicrafts.", es: "Danza tradicional Dhimsa y artesanía tribal.", pt: "Dança tradicional Dhimsa e artesanato tribal." },
    attractions: [],
    thingsToDo: [],
    hotels: [],
    localFoodDishes: [],
    travelTips: [],
    gettingAround: []
  }
];

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  // 1. Update Andhra Pradesh
  const apIdx = states.findIndex(s => s.slug === "andhra-pradesh");
  if (apIdx !== -1) {
    console.log("Updating Andhra Pradesh state in local file...");
    const apState = states[apIdx];
    apState.cities = apState.cities || [];
    
    // Replace Tirupati
    const tiruIdx = apState.cities.findIndex(c => c.slug === "tirupati");
    if (tiruIdx !== -1) {
      apState.cities[tiruIdx] = { ...apState.cities[tiruIdx], ...tirupatiDetails };
    } else {
      apState.cities.push(tirupatiDetails);
    }

    // Add 3 Placeholders
    placeholderCities.forEach(pc => {
      const pIdx = apState.cities.findIndex(c => c.slug === pc.slug);
      if (pIdx === -1) {
        apState.cities.push(pc);
        console.log(`Added placeholder city: ${pc.slug}`);
      }
    });

    states[apIdx] = apState;
  } else {
    console.error("Andhra Pradesh state not found in states.json!");
  }

  // 2. Update Chhattisgarh
  const cgIdx = states.findIndex(s => s.slug === "chhattisgarh");
  if (cgIdx !== -1) {
    console.log("Updating Chhattisgarh state in local file...");
    const cgState = states[cgIdx];
    cgState.cities = cgState.cities || [];
    
    // Replace Jagdalpur
    const jagIdx = cgState.cities.findIndex(c => c.slug === "jagdalpur");
    if (jagIdx !== -1) {
      cgState.cities[jagIdx] = { ...cgState.cities[jagIdx], ...jagdalpurDetails };
    } else {
      cgState.cities.push(jagdalpurDetails);
    }

    states[cgIdx] = cgState;
  } else {
    console.error("Chhattisgarh state not found in states.json!");
  }

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const uploadAP = apIdx !== -1 ? setDoc(doc(firestore, "states", "andhra-pradesh"), states[apIdx]) : Promise.resolve();
    const uploadCG = cgIdx !== -1 ? setDoc(doc(firestore, "states", "chhattisgarh"), states[cgIdx]) : Promise.resolve();

    Promise.all([uploadAP, uploadCG]).then(() => {
      console.log("🚀 SUCCESS: Remote Firestore 'states' database successfully updated!");
      process.exit(0);
    }).catch(err => {
      console.error("❌ FAILED to upload to Firestore:", err);
      process.exit(1);
    });
  } else {
    console.log("Firebase API Key is missing in environment. Local file updated. Skipping Firestore update.");
    process.exit(0);
  }
} else {
  console.error("Local states.json not found at:", statesPath);
  process.exit(1);
}
