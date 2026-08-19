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

// Agra Updates
const agraDetails = {
  highlights: [
    {
      title: { en: "Taj Mahal", es: "Taj Mahal", pt: "Taj Mahal" },
      desc: {
        en: "Visit the iconic Taj Mahal, a magnificent marble monument and one of the world's most celebrated symbols of love and Mughal architecture.",
        es: "Visita el icónico Taj Mahal, un magnífico monumento de mármol y uno de los símbolos del amor y la arquitectura mogola más famosos del mundo.",
        pt: "Visite o icônico Taj Mahal, um magnífico monumento de mármore e um dos símbolos mais famosos do amor e da arquitetura mogol no mundo."
      }
    },
    {
      title: { en: "Agra Fort", es: "Fuerte de Agra", pt: "Forte de Agra" },
      desc: {
        en: "Explore the impressive red sandstone fort that once served as the principal residence of the Mughal emperors.",
        es: "Explora el impresionante fuerte de arenisca roja que fue residencia principal de los emperadores mogoles.",
        pt: "Explore o impressionante forte de arenito vermelho que já foi a principal residência dos imperadores mogóis."
      }
    },
    {
      title: { en: "Fatehpur Sikri", es: "Fatehpur Sikri", pt: "Fatehpur Sikri" },
      desc: {
        en: "Discover the historic Mughal city of Fatehpur Sikri, known for its grand gateways, courtyards and architectural details.",
        es: "Descubre la histórica ciudad mogola de Fatehpur Sikri, conocida por sus grandes puertas, patios y detalles arquitectónicos.",
        pt: "Descubra a histórica cidade mogol de Fatehpur Sikri, conhecida por seus grandes portões, pátios e detalhes arquitetônicos."
      }
    },
    {
      title: { en: "Mehtab Bagh", es: "Mehtab Bagh", pt: "Mehtab Bagh" },
      desc: {
        en: "Enjoy beautiful views of the Taj Mahal from the gardens across the Yamuna River, especially around sunset.",
        es: "Disfruta de hermosas vistas del Taj Mahal desde los jardines al otro lado del río Yamuna, especialmente al atardecer.",
        pt: "Aprecie belas vistas do Taj Mahal a partir dos jardins do outro lado do rio Yamuna, especialmente ao pôr do sol."
      }
    },
    {
      title: { en: "Mughal Arts & Crafts", es: "Artes y Artesanías Mogoles", pt: "Artes e Artesanato Mogol" },
      desc: {
        en: "Discover Agra's traditional marble inlay work, leather goods, carpets, handicrafts and local markets.",
        es: "Descubre el tradicional trabajo de incrustación en mármol, artículos de cuero, alfombras, artesanías y mercados locales de Agra.",
        pt: "Descubra o tradicional trabalho de incrustação em mármore, artigos de couro, tapetes, artesanato e mercados locais de Agra."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore the Taj Mahal", es: "Explorar el Taj Mahal", pt: "Explorar o Taj Mahal" },
      desc: {
        en: "Walk through the gardens and admire the intricate marble architecture, decorative details and reflecting pools.",
        es: "Recorre los jardines y admira la arquitectura de mármol, los detalles decorativos y las piscinas reflectantes.",
        pt: "Caminhe pelos jardins e admire a arquitetura de mármore, os detalhes decorativos e os espelhos d'água."
      }
    },
    {
      name: { en: "Visit Agra Fort", es: "Visitar el Fuerte de Agra", pt: "Visitar o Forte de Agra" },
      desc: {
        en: "Explore royal halls, courtyards, mosques and viewpoints overlooking the Yamuna River.",
        es: "Explora salones reales, patios, mezquitas y miradores con vistas al río Yamuna.",
        pt: "Explore salões reais, pátios, mesquitas e mirantes com vista para o rio Yamuna."
      }
    },
    {
      name: { en: "Visit Fatehpur Sikri", es: "Visitar Fatehpur Sikri", pt: "Visitar Fatehpur Sikri" },
      desc: {
        en: "Take a heritage excursion to the former Mughal capital and explore its remarkable architecture.",
        es: "Haz una excursión histórica a la antigua capital mogola y explora su extraordinaria arquitectura.",
        pt: "Faça uma excursão histórica à antiga capital mogol e explore sua extraordinária arquitetura."
      }
    },
    {
      name: { en: "Explore Local Bazaars", es: "Explorar Bazares Locales", pt: "Explorar os Bazaares Locais" },
      desc: {
        en: "Shop for marble souvenirs, handicrafts, leather products, textiles and traditional sweets.",
        es: "Compra recuerdos de mármol, artesanías, artículos de cuero, textiles y dulces tradicionales.",
        pt: "Compre souvenirs de mármore, artesanato, artigos de couro, tecidos e doces tradicionais."
      }
    },
    {
      name: { en: "Enjoy a Taj Sunset View", es: "Disfrutar del Atardecer en el Taj", pt: "Apreciar o Pôr do Sol no Taj" },
      desc: {
        en: "Visit Mehtab Bagh or another suitable viewpoint to enjoy the Taj Mahal in changing evening light.",
        es: "Visita Mehtab Bagh u otro mirador adecuado para contemplar el Taj Mahal con la luz del atardecer.",
        pt: "Visite Mehtab Bagh ou outro mirante adequado para apreciar o Taj Mahal sob a luz do entardecer."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Mughal Heritage Experience", es: "Experiencia del Patrimonio Mogol", pt: "Experiência do Patrimônio Mogol" },
      desc: {
        en: "Travel through Agra's magnificent monuments and discover the history of the Mughal Empire.",
        es: "Recorre los magníficos monumentos de Agra y descubre la historia del Imperio mogol.",
        pt: "Conheça os magníficos monumentos de Agra e descubra a história do Império Mogol."
      }
    },
    {
      title: { en: "Sunrise Taj Mahal Experience", es: "Experiencia del Taj Mahal al Amanecer", pt: "Experiência do Taj Mahal no Nascer do Sol" },
      desc: {
        en: "Experience the Taj Mahal in the soft morning light before the city becomes busy.",
        es: "Vive la experiencia del Taj Mahal con la suave luz de la mañana antes de que la ciudad se llene de visitantes.",
        pt: "Vivencie o Taj Mahal sob a suave luz da manhã antes que a cidade fique movimentada."
      }
    },
    {
      title: { en: "Marble Craft Experience", es: "Experiencia de Artesanía de Mármol", pt: "Experiência com Artesanato de Mármore" },
      desc: {
        en: "Learn about the traditional marble inlay craftsmanship for which Agra is famous.",
        es: "Conoce la tradicional artesanía de incrustación en mármol por la que Agra es famosa.",
        pt: "Conheça o tradicional artesanato de incrustação em mármore pelo qual Agra é famosa."
      }
    },
    {
      title: { en: "Agra Food Experience", es: "Experiencia Culinaria de Agra", pt: "Experiência Culinária de Agra" },
      desc: {
        en: "Taste Mughlai cuisine, Agra's famous petha and traditional North Indian snacks.",
        es: "Prueba la cocina mogola, el famoso petha de Agra y los aperitivos tradicionales del norte de India.",
        pt: "Experimente a culinária mogol, o famoso petha de Agra e os tradicionais petiscos do norte da Índia."
      }
    },
    {
      title: { en: "Heritage Photography Experience", es: "Experiencia Fotográfica del Patrimonio", pt: "Experiência Fotográfica do Patrimônio" },
      desc: {
        en: "Capture Mughal architecture, marble details, historic streets and the Taj Mahal from different viewpoints.",
        es: "Fotografía la arquitectura mogola, los detalles de mármol, las calles históricas y el Taj Mahal desde diferentes perspectivas.",
        pt: "Fotografe a arquitetura mogol, detalhes de mármore, ruas históricas e o Taj Mahal de diferentes ângulos."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Agra has Kheria Airport, and is easily accessible via expressway from Delhi or by express trains.",
      es: "Agra cuenta con el aeropuerto de Kheria, de fácil acceso por carretera y tren.",
      pt: "Agra possui o Aeroporto de Kheria, de fácil acesso por estrada e trem."
    },
    nearestAirport: "Agra Kheria Airport (AGR) / Delhi Airport (DEL)",
    nearestRailway: "Agra Cantt Railway Station (AGC)",
    transportOptions: "Taxis, Auto-rickshaws, E-rickshaws",
    distanceFromMajorCities: "Delhi (230 km), Jaipur (240 km)",
    recommendedStay: "2 Days",
    avgTemp: "15°C - 38°C",
    currency: "INR",
    localLanguage: "Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Generally safe. Beware of commission agents and unofficial guides around monuments.",
      es: "Generalmente seguro. Tenga cuidado con los guías no autorizados.",
      pt: "Geralmente seguro. Cuidado com guias não autorizados."
    }
  },
  gettingAround: [
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Comfortable for visiting multiple monuments in one day.",
        es: "Cómodo para visitar varios monumentos en un día.",
        pt: "Confortável para visitar vários monumentos em um dia."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short-distance journeys around the city.",
        es: "Útil para trayectos cortos por la ciudad.",
        pt: "Útil para trajetos curtos pela cidade."
      },
      recommended: false
    },
    {
      transportType: "E-Rickshaw",
      title: { en: "E-Rickshaw", es: "E-Rickshaw", pt: "E-Rickshaw" },
      desc: {
        en: "An economical option for short local journeys.",
        es: "Una opción económica para trayectos cortos.",
        pt: "Uma opção econômica para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Ideal for families and travellers combining Agra with Fatehpur Sikri.",
        es: "Ideal para familias y viajeros que combinan Agra con Fatehpur Sikri.",
        pt: "Ideal para famílias e viajantes que combinam Agra com Fatehpur Sikri."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Suitable around selected heritage and market areas.",
        es: "Adecuado para determinadas zonas históricas y mercados.",
        pt: "Adequado para algumas áreas históricas e mercados."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Check Monument Schedules", es: "Comprobar Horarios", pt: "Verifique os Horários" },
      desc: {
        en: "Check monument opening days before planning your visit.",
        es: "Comprueba los días de apertura de los monumentos antes de planificar tu visita.",
        pt: "Verifique os dias de funcionamento dos monumentos antes de planejar sua visita."
      }
    },
    {
      title: { en: "Start Early", es: "Comenzar Temprano", pt: "Comece Cedo" },
      desc: {
        en: "Start sightseeing early to avoid peak crowds and daytime heat.",
        es: "Comienza las visitas temprano para evitar las multitudes y el calor del día.",
        pt: "Comece os passeios cedo para evitar multidões e o calor do dia."
      }
    },
    {
      title: { en: "Wear Comfortable Shoes", es: "Llevar Calzado Cómodo", pt: "Use Calçados Confortáveis" },
      desc: {
        en: "Wear comfortable shoes because major monuments involve considerable walking.",
        es: "Usa calzado cómodo porque los principales monumentos requieren bastante caminata.",
        pt: "Use calçados confortáveis, pois os principais monumentos envolvem bastante caminhada."
      }
    },
    {
      title: { en: "Carry Essentials", es: "Llevar lo Esencial", pt: "Leve Itens Essenciais" },
      desc: {
        en: "Carry water, sunscreen and a hat during outdoor sightseeing.",
        es: "Lleva agua, protector solar y sombrero durante las visitas al aire libre.",
        pt: "Leve água, protetor solar e chapéu durante os passeios ao ar livre."
      }
    },
    {
      title: { en: "Verify Souvenirs", es: "Verificar Artesanías", pt: "Verifique Artesanatos" },
      desc: {
        en: "Buy handicrafts from reputable shops and confirm prices before purchasing.",
        es: "Compra artesanías en tiendas de confianza y confirma los precios antes de comprar.",
        pt: "Compre artesanato em lojas confiáveis e confirme os preços antes de comprar."
      }
    }
  ],
  hotels: [
    {
      name: "The Oberoi Amarvilas",
      tier: "Luxury",
      desc: {
        en: "A luxury property near the Taj Mahal, ideal for travellers seeking a premium heritage experience.",
        es: "Propiedad de lujo cerca del Taj Mahal, ideal para viajeros que buscan una experiencia patrimonial premium.",
        pt: "Propriedade de luxo perto do Taj Mahal, ideal para viajantes que procuram uma experiência histórica premium."
      },
      image: ""
    },
    {
      name: "ITC Mughal",
      tier: "Luxury",
      desc: {
        en: "A luxury hotel inspired by Mughal design, offering extensive facilities and a relaxing stay.",
        es: "Hotel de lujo inspirado en el diseño mogol, con excelentes instalaciones y una estancia relajante.",
        pt: "Hotel de luxo inspirado no design mogol, com excelentes instalações e uma estadia relaxante."
      },
      image: ""
    },
    {
      name: "Taj Hotel & Convention Centre, Agra",
      tier: "Premium",
      desc: {
        en: "Modern premium accommodation with convenient access to the Taj Mahal area.",
        es: "Alojamiento moderno premium con fácil acceso a la zona del Taj Mahal.",
        pt: "Hospedagem moderna premium com fácil acesso à região do Taj Mahal."
      },
      image: ""
    },
    {
      name: "Radisson Hotel Agra",
      tier: "Mid-range",
      desc: {
        en: "Comfortable full-service hotel suitable for leisure travellers and families.",
        es: "Hotel confortable con servicios completos, adecuado para viajeros y familias.",
        pt: "Hotel confortável com serviços completos, adequado para viajantes e famílias."
      },
      image: ""
    },
    {
      name: "DoubleTree by Hilton Agra",
      tier: "Mid-range",
      desc: {
        en: "Modern hotel offering comfortable accommodation and convenient access to Agra's major attractions.",
        es: "Hotel moderno con alojamiento confortable y fácil acceso a las principales atracciones de Agra.",
        pt: "Hotel moderno com hospedagem confortável e fácil acesso às principais atrações de Agra."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Agra Petha, Mughlai Biryani, Bedai & Jalebi, Mughlai Korma and Dalmoth.",
    es: "Pruebe el petha de Agra, Mughlai biryani, Bedai con Jalebi, korma y Dalmoth.",
    pt: "Prove o petha de Agra, Mughlai biryani, Bedai com Jalebi, korma e Dalmoth."
  },
  localFoodDishes: [
    {
      name: { en: "Agra Petha", es: "Agra Petha", pt: "Agra Petha" },
      desc: {
        en: "A famous translucent sweet made from ash gourd and traditionally prepared in several flavours.",
        es: "Famoso dulce translúcido elaborado con calabaza de ceniza y disponible en varios sabores.",
        pt: "Famoso doce translúcido feito de abóbora-branca e preparado em vários sabores."
      }
    },
    {
      name: { en: "Mughlai Biryani", es: "Mughlai Biryani", pt: "Mughlai Biryani" },
      desc: {
        en: "Fragrant rice cooked with aromatic spices and meat or vegetables.",
        es: "Arroz aromático preparado con especias y carne o verduras.",
        pt: "Arroz aromático preparado com especiarias e carne ou vegetais."
      }
    },
    {
      name: { en: "Bedai & Jalebi", es: "Bedai y Jalebi", pt: "Bedai e Jalebi" },
      desc: {
        en: "A popular North Indian breakfast combining a savoury fried bread with sweet jalebi.",
        es: "Desayuno popular del norte de India que combina pan frito salado con jalebi dulce.",
        pt: "Café da manhã popular do norte da Índia que combina pão frito salgado com jalebi doce."
      }
    },
    {
      name: { en: "Mughlai Korma", es: "Mughlai Korma", pt: "Mughlai Korma" },
      desc: {
        en: "A rich, aromatic curry associated with the Mughal culinary tradition.",
        es: "Curry rico y aromático asociado con la tradición culinaria mogola.",
        pt: "Curry rico e aromático associado à tradição culinária mogol."
      }
    },
    {
      name: { en: "Dalmoth", es: "Dalmoth", pt: "Dalmoth" },
      desc: {
        en: "A crunchy and spicy local snack often enjoyed as a tea-time savoury.",
        es: "Aperitivo local crujiente y especiado, popular para acompañar el té.",
        pt: "Petisco local crocante e temperado, popular como acompanhamento do chá."
      }
    }
  ]
};

// Varanasi Updates
const varanasiDetails = {
  highlights: [
    {
      title: { en: "Ganges River & Ghats", es: "El Río Ganges y los Ghats", pt: "O Rio Ganges e os Ghats" },
      desc: {
        en: "Experience the sacred Ganges and the historic ghats that define Varanasi's spiritual landscape.",
        es: "Vive la experiencia del sagrado río Ganges y sus históricos ghats, que definen el paisaje espiritual de Varanasi.",
        pt: "Conheça o sagrado rio Ganges e os históricos ghats que definem a paisagem espiritual de Varanasi."
      }
    },
    {
      title: { en: "Ganga Aarti", es: "Ganga Aarti", pt: "Ganga Aarti" },
      desc: {
        en: "Witness the spectacular evening prayer ceremony performed along the river, accompanied by lamps, music and chanting.",
        es: "Contempla la espectacular ceremonia de oración vespertina junto al río, acompañada de lámparas, música y cantos.",
        pt: "Assista à espetacular cerimônia de oração ao entardecer às margens do rio, acompanhada por lamparinas, música e cânticos."
      }
    },
    {
      title: { en: "Kashi Vishwanath Temple", es: "Templo Kashi Vishwanath", pt: "Templo Kashi Vishwanath" },
      desc: {
        en: "Visit one of the most revered Hindu temples dedicated to Lord Shiva.",
        es: "Visita uno de los templos hindúes más venerados, dedicado al dios Shiva.",
        pt: "Visite um dos mais reverenciados templos hindus, dedicado ao deus Shiva."
      }
    },
    {
      title: { en: "Sarnath", es: "Sarnath", pt: "Sarnath" },
      desc: {
        en: "Explore Sarnath, the important Buddhist site where Buddha is traditionally said to have delivered his first sermon.",
        es: "Explora Sarnath, importante lugar budista donde tradicionalmente se considera que Buda dio su primer sermón.",
        pt: "Explore Sarnath, importante local budista onde tradicionalmente se acredita que Buda proferiu seu primeiro sermão."
      }
    },
    {
      title: { en: "Ancient Spiritual Culture", es: "Cultura Espiritual Ancestral", pt: "Cultura Espiritual Ancestral" },
      desc: {
        en: "Discover centuries-old traditions, music, rituals, temples, Sanskrit learning and spiritual practices.",
        es: "Descubre tradiciones centenarias, música, rituales, templos, aprendizaje del sánscrito y prácticas espirituales.",
        pt: "Descubra tradições centenárias, música, rituais, templos, estudos de sânscrito e práticas espirituais."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Take a Sunrise Boat Ride", es: "Paseo en Barco al Amanecer", pt: "Passeio de Barco no Nascer do Sol" },
      desc: {
        en: "Cruise along the Ganges and watch the ghats come alive in the soft morning light.",
        es: "Navega por el Ganges y observa cómo los ghats cobran vida con la suave luz de la mañana.",
        pt: "Navegue pelo Ganges e observe os ghats ganharem vida sob a suave luz da manhã."
      }
    },
    {
      name: { en: "Attend Ganga Aarti", es: "Asistir al Ganga Aarti", pt: "Assistir ao Ganga Aarti" },
      desc: {
        en: "Experience the powerful evening ritual on the banks of the Ganges.",
        es: "Vive el poderoso ritual vespertino a orillas del Ganges.",
        pt: "Vivencie o poderoso ritual do entardecer às margens do Ganges."
      }
    },
    {
      name: { en: "Explore the Ghats", es: "Explorar los Ghats", pt: "Explorar os Ghats" },
      desc: {
        en: "Walk along the riverfront and discover temples, shrines, historic buildings and local life.",
        es: "Camina por el río y descubre templos, santuarios, edificios históricos y vida local.",
        pt: "Caminhe às margens do rio e descubra templos, santuários, edifícios históricos e a vida local."
      }
    },
    {
      name: { en: "Visit Sarnath", es: "Visitar Sarnath", pt: "Visitar Sarnath" },
      desc: {
        en: "Explore Buddhist monuments, museums and archaeological remains.",
        es: "Explora monumentos budistas, museos y restos arqueológicos.",
        pt: "Explore monumentos budistas, museus e vestígios arqueológicos."
      }
    },
    {
      name: { en: "Explore Local Markets", es: "Explorar Mercados Locales", pt: "Explorar os Mercados Locais" },
      desc: {
        en: "Shop for Banarasi silk, handicrafts, religious items and traditional souvenirs.",
        es: "Compra seda Banarasi, artesanías, artículos religiosos y recuerdos tradicionales.",
        pt: "Compre seda Banarasi, artesanato, artigos religiosos e souvenirs tradicionais."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Sunrise Ganges Experience", es: "Experiencia del Ganges al Amanecer", pt: "Experiência do Ganges no Nascer do Sol" },
      desc: {
        en: "Watch the sunrise over the river while boats move quietly between the historic ghats.",
        es: "Contempla el amanecer sobre el río mientras las barcas recorren tranquilamente los ghats históricos.",
        pt: "Observe o nascer do sol sobre o rio enquanto os barcos percorrem tranquilamente os ghats históricos."
      }
    },
    {
      title: { en: "Ganga Aarti Experience", es: "Experiencia del Ganga Aarti", pt: "Experiência do Ganga Aarti" },
      desc: {
        en: "Experience one of India's most visually powerful evening spiritual ceremonies.",
        es: "Vive una de las ceremonias espirituales vespertinas más impresionantes de India.",
        pt: "Vivencie uma das cerimônias espirituais noturnas mais impressionantes da Índia."
      }
    },
    {
      title: { en: "Banarasi Silk Experience", es: "Experiencia de Seda Banarasi", pt: "Experiência com Seda Banarasi" },
      desc: {
        en: "Discover the craftsmanship behind Varanasi's famous silk weaving tradition.",
        es: "Descubre la artesanía detrás de la famosa tradición de tejidos de seda de Varanasi.",
        pt: "Conheça o artesanato por trás da famosa tradição de tecelagem de seda de Varanasi."
      }
    },
    {
      title: { en: "Spiritual Heritage Experience", es: "Experiencia del Patrimonio Espiritual", pt: "Experiência com Patrimônio Espiritual" },
      desc: {
        en: "Explore temples, rituals, music and traditions that have shaped Varanasi for centuries.",
        es: "Explora templos, rituales, música y tradiciones que han dado forma a Varanasi durante siglos.",
        pt: "Explore templos, rituais, música e tradições que moldaram Varanasi durante séculos."
      }
    },
    {
      title: { en: "Varanasi Food Experience", es: "Experiencia Culinaria de Varanasi", pt: "Experiência Culinária de Varanasi" },
      desc: {
        en: "Taste local street food, sweets, lassi and traditional vegetarian dishes.",
        es: "Prueba comida callejera, dulces, lassi y platos vegetarianos tradicionales.",
        pt: "Experimente comida de rua, doces, lassi e pratos vegetarianos tradicionais."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Varanasi is connected by Babatpur airport, and major rail routes from Delhi, Kolkata, and Mumbai.",
      es: "Varanasi cuenta con el aeropuerto de Babatpur y excelentes conexiones ferroviarias.",
      pt: "Varanasi possui o Aeroporto de Babatpur e excelentes conexões ferroviárias."
    },
    nearestAirport: "Lal Bahadur Shastri International Airport (VNS)",
    nearestRailway: "Varanasi Junction (BSB) / Deen Dayal Upadhyaya Junction (DDU)",
    transportOptions: "Auto-rickshaws, E-rickshaws, Taxis, Boats, Walking",
    distanceFromMajorCities: "Lucknow (300 km), Patna (250 km)",
    recommendedStay: "3 Days",
    avgTemp: "14°C - 39°C",
    currency: "INR",
    localLanguage: "Hindi, Bhojpuri & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Be careful along crowded ghats and narrow alleys. Avoid scams regarding cremation ghat visits.",
      es: "Tenga cuidado en los callejones concurridos. Evite estafas en los ghats de cremación.",
      pt: "Cuidado nas ruelas movimentadas. Evite golpes nos ghats de cremação."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Convenient for short journeys.",
        es: "Cómodo para trayectos cortos.",
        pt: "Conveniente para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "E-Rickshaw",
      title: { en: "E-Rickshaw", es: "E-Rickshaw", pt: "E-Rickshaw" },
      desc: {
        en: "Affordable option for local travel.",
        es: "Opción económica para desplazamientos locales.",
        pt: "Opção econômica para deslocamentos locais."
      },
      recommended: true
    },
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Useful for Sarnath and longer journeys.",
        es: "Útil para Sarnath y trayectos largos.",
        pt: "Útil para Sarnath e trajetos mais longos."
      },
      recommended: true
    },
    {
      transportType: "Boat",
      title: { en: "Boat", es: "Barco", pt: "Barco" },
      desc: {
        en: "Best for experiencing the Ganges and ghats.",
        es: "Ideal para vivir la experiencia del Ganges y los ghats.",
        pt: "Ideal para conhecer o Ganges e os ghats."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Best around the old city and ghats.",
        es: "Ideal en la ciudad antigua y los ghats.",
        pt: "Ideal na cidade antiga e nos ghats."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Dress Modestly", es: "Vestir con Modestia", pt: "Vista-se com Modéstia" },
      desc: {
        en: "Wear modest and comfortable clothing when visiting temples.",
        es: "Usa ropa modesta y cómoda al visitar templos.",
        pt: "Use roupas discretas e confortáveis ao visitar templos."
      }
    },
    {
      title: { en: "Follow Site Rules", es: "Seguir Normas del Sitio", pt: "Siga as Regras" },
      desc: {
        en: "Follow local instructions and photography rules at religious sites.",
        es: "Sigue las instrucciones locales y las normas de fotografía en lugares religiosos.",
        pt: "Siga as instruções locais e as regras de fotografia em locais religiosos."
      }
    },
    {
      title: { en: "Protect Belongings", es: "Proteger Pertenencias", pt: "Proteja seus Pertences" },
      desc: {
        en: "Keep your belongings secure in crowded areas.",
        es: "Mantén tus pertenencias seguras en zonas concurridas.",
        pt: "Mantenha seus pertences seguros em áreas movimentadas."
      }
    },
    {
      title: { en: "Book in Advance", es: "Reservar con Anticipación", pt: "Reserve com Antecedência" },
      desc: {
        en: "Book popular boat rides and accommodation in advance during festivals.",
        es: "Reserva paseos en barco y alojamiento con anticipación durante los festivales.",
        pt: "Reserve passeios de barco e hospedagem com antecedência durante os festivais."
      }
    },
    {
      title: { en: "Allow Extra Time", es: "Reservar Tiempo Extra", pt: "Reserve Tempo Extra" },
      desc: {
        en: "Allow extra time because traffic around the old city can be slow.",
        es: "Reserva tiempo adicional porque el tráfico en la ciudad antigua puede ser lento.",
        pt: "Reserve tempo extra, pois o trânsito na cidade antiga pode ser lento."
      }
    }
  ],
  hotels: [
    {
      name: "BrijRama Palace",
      tier: "Luxury",
      desc: {
        en: "Historic riverside palace stay overlooking the Ganges and offering a distinctive heritage atmosphere.",
        es: "Palacio histórico junto al río con vistas al Ganges y un ambiente patrimonial único.",
        pt: "Palácio histórico às margens do rio com vista para o Ganges e uma atmosfera histórica única."
      },
      image: ""
    },
    {
      name: "Taj Nadesar Palace",
      tier: "Luxury",
      desc: {
        en: "Luxury heritage property combining royal surroundings with premium hospitality.",
        es: "Propiedad histórica de lujo que combina un entorno real con hospitalidad premium.",
        pt: "Propriedade histórica de luxo que combina ambiente real com hospitalidade premium."
      },
      image: ""
    },
    {
      name: "Taj Ganges",
      tier: "Premium",
      desc: {
        en: "Comfortable premium hotel offering convenient access to Varanasi's major attractions.",
        es: "Hotel premium confortable con fácil acceso a las principales atracciones de Varanasi.",
        pt: "Hotel premium confortável com fácil acesso às principais atrações de Varanasi."
      },
      image: ""
    },
    {
      name: "Radisson Hotel Varanasi",
      tier: "Mid-range",
      desc: {
        en: "Full-service hotel suitable for families, couples and business or leisure travellers.",
        es: "Hotel con servicios completos, adecuado para familias, parejas y viajeros de ocio o negocios.",
        pt: "Hotel com serviços completos, adequado para famílias, casais e viajantes de lazer ou negócios."
      },
      image: ""
    },
    {
      name: "Ramada by Wyndham Varanasi",
      tier: "Mid-range",
      desc: {
        en: "Modern accommodation with comfortable rooms and convenient city access.",
        es: "Alojamiento moderno con habitaciones cómodas y fácil acceso a la ciudad.",
        pt: "Hospedagem moderna com quartos confortáveis e fácil acesso à cidade."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Kachori Sabzi, Banarasi Lassi, Tamatar Chaat, Banarasi Paan and Malaiyyo.",
    es: "Pruebe Kachori Sabzi, lassi de Varanasi, Tamatar Chaat, Banarasi Paan y Malaiyyo.",
    pt: "Prove Kachori Sabzi, lassi de Varanasi, Tamatar Chaat, Banarasi Paan e Malaiyyo."
  },
  localFoodDishes: [
    {
      name: { en: "Kachori Sabzi", es: "Kachori Sabzi", pt: "Kachori Sabzi" },
      desc: {
        en: "Crispy fried kachori served with a spicy and aromatic potato curry.",
        es: "Kachori crujiente servida con un curry de patata especiado y aromático.",
        pt: "Kachori crocante servida com curry de batata picante e aromático."
      }
    },
    {
      name: { en: "Banarasi Lassi", es: "Banarasi Lassi", pt: "Banarasi Lassi" },
      desc: {
        en: "Thick, creamy yogurt drink often topped with traditional flavours and ingredients.",
        es: "Bebida espesa y cremosa de yogur, a menudo acompañada de sabores e ingredientes tradicionales.",
        pt: "Bebida espessa e cremosa de iogurte, geralmente acompanhada de sabores e ingredientes tradicionais."
      }
    },
    {
      name: { en: "Tamatar Chaat", es: "Tamatar Chaat", pt: "Tamatar Chaat" },
      desc: {
        en: "Spicy and tangy tomato-based street food with regional flavours.",
        es: "Comida callejera de tomate, picante y ácida, con sabores regionales.",
        pt: "Comida de rua à base de tomate, picante e ácida, com sabores regionais."
      }
    },
    {
      name: { en: "Banarasi Paan", es: "Banarasi Paan", pt: "Banarasi Paan" },
      desc: {
        en: "A traditional betel-leaf preparation strongly associated with Varanasi's food culture.",
        es: "Preparación tradicional de hoja de betel estrechamente asociada con la cultura gastronómica de Varanasi.",
        pt: "Preparação tradicional de folha de betel fortemente associada à cultura gastronômica de Varanasi."
      }
    },
    {
      name: { en: "Malaiyyo", es: "Malaiyyo", pt: "Malaiyyo" },
      desc: {
        en: "A delicate seasonal milk-based dessert known for its light, airy texture.",
        es: "Delicado postre de leche de temporada conocido por su textura ligera y aireada.",
        pt: "Delicada sobremesa sazonal à base de leite, conhecida por sua textura leve e aerada."
      }
    }
  ]
};

// Lucknow Updates
const lucknowDetails = {
  highlights: [
    {
      title: { en: "Bara Imambara", es: "Bara Imambara", pt: "Bara Imambara" },
      desc: {
        en: "Explore Lucknow's grand historic complex, famous for its monumental architecture and remarkable central hall.",
        es: "Explora el magnífico complejo histórico de Lucknow, famoso por su arquitectura monumental y su impresionante salón central.",
        pt: "Explore o grandioso complexo histórico de Lucknow, famoso por sua arquitetura monumental e seu impressionante salão central."
      }
    },
    {
      title: { en: "Chota Imambara", es: "Chota Imambara", pt: "Chota Imambara" },
      desc: {
        en: "Admire the elegant architecture, ornate interiors and beautiful decorative details of this historic monument.",
        es: "Admira la elegante arquitectura, los interiores ornamentados y los hermosos detalles decorativos de este monumento histórico.",
        pt: "Admire a arquitetura elegante, os interiores ornamentados e os belos detalhes decorativos deste monumento histórico."
      }
    },
    {
      title: { en: "Rumi Darwaza", es: "Rumi Darwaza", pt: "Rumi Darwaza" },
      desc: {
        en: "Photograph one of Lucknow's most recognisable gateways and an important symbol of the city's Nawabi heritage.",
        es: "Fotografía una de las puertas más reconocibles de Lucknow y un importante símbolo de su patrimonio nawabi.",
        pt: "Fotografe um dos portões mais conhecidos de Lucknow e um importante símbolo de seu patrimônio nawabi."
      }
    },
    {
      title: { en: "Nawabi Culture", es: "Cultura Nawabi", pt: "Cultura Nawabi" },
      desc: {
        en: "Discover Lucknow's refined traditions of hospitality, poetry, music, dance, architecture and cuisine.",
        es: "Descubre las refinadas tradiciones de hospitalidad, poesía, música, danza, arquitectura y gastronomía de Lucknow.",
        pt: "Descubra as refinadas tradições de hospitalidade, poesia, música, dança, arquitetura e culinária de Lucknow."
      }
    },
    {
      title: { en: "Chikankari Craft", es: "Artesanía Chikankari", pt: "Trabalho Chikankari" },
      desc: {
        en: "Explore the delicate hand embroidery that has become one of Lucknow's most famous traditional crafts.",
        es: "Descubre el delicado bordado artesanal que se ha convertido en una de las artesanías más famosas de Lucknow.",
        pt: "Conheça o delicado bordado artesanal que se tornou um dos trabalhos tradicionais mais famosos de Lucknow."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Bara Imambara", es: "Visitar Bara Imambara", pt: "Visitar Bara Imambara" },
      desc: {
        en: "Explore the historic complex and its famous architectural spaces.",
        es: "Explora el complejo histórico y sus famosos laberintos y salones.",
        pt: "Explore o complexo histórico e seus famosos labirintos e salões."
      }
    },
    {
      name: { en: "See Rumi Darwaza", es: "Ver Rumi Darwaza", pt: "Ver Rumi Darwaza" },
      desc: {
        en: "Admire one of Lucknow's most iconic gateways.",
        es: "Admira una de las puertas de entrada más icónicas de Lucknow.",
        pt: "Admire um dos portões mais icônicos de Lucknow."
      }
    },
    {
      name: { en: "Explore Chota Imambara", es: "Explorar Chota Imambara", pt: "Explorar Chota Imambara" },
      desc: {
        en: "Discover its ornate interiors and historical significance.",
        es: "Descubre sus interiores decorados y su gran significado histórico.",
        pt: "Descubra seus interiores decorados e sua importância histórica."
      }
    },
    {
      name: { en: "Shop for Chikankari", es: "Comprar Chikankari", pt: "Comprar Chikankari" },
      desc: {
        en: "Browse traditional embroidered clothing and textiles in local markets.",
        es: "Compra ropa y textiles bordados tradicionales en los mercados locales.",
        pt: "Compre roupas e tecidos bordados tradicionais nos mercados locais."
      }
    },
    {
      name: { en: "Explore Old Lucknow", es: "Explorar el Viejo Lucknow", pt: "Explorar a Antiga Lucknow" },
      desc: {
        en: "Walk through historic streets, markets and food areas.",
        es: "Camina por calles históricas, mercados y zonas de comida tradicional.",
        pt: "Caminhe por ruas históricas, mercados e áreas de comida tradicional."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Nawabi Heritage Experience", es: "Experiencia Nawabi", pt: "Experiência Nawabi" },
      desc: {
        en: "Discover the refined culture and architectural legacy of Lucknow's Nawabi era.",
        es: "Descubre la refinada cultura y el legado arquitectónico de la época nawabi de Lucknow.",
        pt: "Conheça a cultura refinada e o legado arquitetônico da era nawabi de Lucknow."
      }
    },
    {
      title: { en: "Culinary Experience", es: "Experiencia Culinaria Awadhi", pt: "Experiência Culinária Awadhi" },
      desc: {
        en: "Explore Lucknow's famous Awadhi cuisine, kebabs, biryanis and traditional sweets.",
        es: "Descubre la famosa cocina Awadhi de Lucknow, sus kebabs, biryanis y dulces tradicionales.",
        pt: "Explore a famosa culinária Awadhi de Lucknow, seus kebabs, biryanis e doces tradicionais."
      }
    },
    {
      title: { en: "Chikankari Experience", es: "Experiencia de Chikankari", pt: "Experiência com Chikankari" },
      desc: {
        en: "Learn about the delicate embroidery techniques behind Lucknow's famous textile tradition.",
        es: "Conoce las técnicas de bordado detrás de la famosa tradición textil de Lucknow.",
        pt: "Conheça as técnicas de bordado por trás da famosa tradição têxtil de Lucknow."
      }
    },
    {
      title: { en: "Heritage Walk", es: "Paseo del Patrimonio", pt: "Caminhada pelo Patrimônio" },
      desc: {
        en: "Walk through historic neighbourhoods and discover monuments, markets and traditional architecture.",
        es: "Recorre barrios históricos y descubre monumentos, mercados y arquitectura tradicional.",
        pt: "Caminhe por bairros históricos e descubra monumentos, mercados e arquitetura tradicional."
      }
    },
    {
      title: { en: "Evening Food Experience", es: "Ruta de Comida Nocturna", pt: "Rota de Comida Noturna" },
      desc: {
        en: "Explore the city's food streets and taste authentic Awadhi flavours.",
        es: "Explora las calles gastronómicas de la ciudad y prueba los auténticos sabores Awadhi.",
        pt: "Explore as ruas gastronômicas da cidade e experimente os autênticos sabores Awadhi."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Lucknow is served by Chaudhary Charan Singh International Airport, with major rail and road hubs.",
      es: "Lucknow cuenta con aeropuerto internacional y excelentes conexiones ferroviarias y por autopista.",
      pt: "Lucknow possui aeroporto internacional e ótimas conexões rodoviárias e ferroviárias."
    },
    nearestAirport: "Chaudhary Charan Singh International Airport (LKO)",
    nearestRailway: "Lucknow Charbagh Railway Station (LKO)",
    transportOptions: "Metro, Taxis, Auto-rickshaws, E-rickshaws",
    distanceFromMajorCities: "Kanpur (90 km), Ayodhya (135 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "15°C - 38°C",
    currency: "INR",
    localLanguage: "Hindi, Urdu & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "A very safe city known for its polite citizens. Standard safety measures apply in busy markets.",
      es: "Una ciudad muy segura, conocida por la cortesía de sus habitantes.",
      pt: "Uma cidade muito segura, conhecida pela cortesia dos seus habitantes."
    }
  },
  gettingAround: [
    {
      transportType: "Metro",
      title: { en: "Metro", es: "Metro", pt: "Metrô" },
      desc: {
        en: "Useful for selected parts of the city.",
        es: "Útil para determinadas partes de la ciudad.",
        pt: "Útil para algumas regiões da cidade."
      },
      recommended: true
    },
    {
      transportType: "Taxi / Cab",
      title: { en: "Taxi / Cab", es: "Taxi / Cab", pt: "Táxi / Aplicativo" },
      desc: {
        en: "Comfortable for sightseeing.",
        es: "Cómodo para hacer turismo.",
        pt: "Confortável para passeios turísticos."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Convenient for short journeys.",
        es: "Cómodo para trayectos cortos.",
        pt: "Conveniente para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "E-Rickshaw",
      title: { en: "E-Rickshaw", es: "E-Rickshaw", pt: "E-Rickshaw" },
      desc: {
        en: "Affordable for local travel.",
        es: "Económico para desplazamientos locales.",
        pt: "Econômico para deslocamentos locais."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Best around selected heritage and market areas.",
        es: "Ideal para determinadas zonas históricas y mercados.",
        pt: "Ideal para algumas áreas históricas e mercados."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Dress Comfortably", es: "Vestir Cómodamente", pt: "Vista-se Confortavelmente" },
      desc: {
        en: "Dress comfortably for heritage walks and outdoor sightseeing.",
        es: "Viste cómodamente para los paseos históricos y las visitas al aire libre.",
        pt: "Vista-se confortavelmente para caminhadas históricas e passeios ao ar livre."
      }
    },
    {
      title: { en: "Try Awadhi Cuisine", es: "Probar Comida Awadhi", pt: "Prove Comida Awadhi" },
      desc: {
        en: "Try authentic Awadhi food at reputable local restaurants.",
        es: "Prueba la auténtica cocina Awadhi en restaurantes locales de confianza.",
        pt: "Experimente a autêntica culinária Awadhi em restaurantes locais confiáveis."
      }
    },
    {
      title: { en: "Compare Crafts Prices", es: "Comparar Precios", pt: "Compare Preços" },
      desc: {
        en: "Compare prices before buying Chikankari products.",
        es: "Compara los precios antes de comprar productos de chikankari.",
        pt: "Compare os preços antes de comprar produtos de chikankari."
      }
    },
    {
      title: { en: "Start Sightseeing Early", es: "Visitas Tempranas", pt: "Passeios Cedo" },
      desc: {
        en: "Start heritage sightseeing earlier in the day during warmer months.",
        es: "Comienza las visitas históricas temprano durante los meses más calurosos.",
        pt: "Comece os passeios históricos mais cedo durante os meses quentes."
      }
    },
    {
      title: { en: "Reserve Market Time", es: "Tiempo para Mercados", pt: "Tempo para Mercados" },
      desc: {
        en: "Keep some extra time for local markets and food stops.",
        es: "Reserva tiempo adicional para mercados locales y paradas gastronómicas.",
        pt: "Reserve tempo extra para mercados locais e paradas gastronômicas."
      }
    }
  ],
  hotels: [
    {
      name: "Taj Mahal Lucknow",
      tier: "Luxury",
      desc: {
        en: "A premium hotel in the city offering comfortable accommodation and refined hospitality.",
        es: "Hotel premium en la ciudad con alojamiento confortable y hospitalidad refinada.",
        pt: "Hotel premium na cidade com hospedagem confortável e hospitalidade refinada."
      },
      image: ""
    },
    {
      name: "Hyatt Regency Lucknow",
      tier: "Luxury",
      desc: {
        en: "Modern luxury accommodation with extensive facilities and convenient city access.",
        es: "Alojamiento moderno de lujo con excelentes instalaciones y fácil acceso a la ciudad.",
        pt: "Hospedagem moderna de luxo com excelentes instalações e fácil acesso à cidade."
      },
      image: ""
    },
    {
      name: "Renaissance Lucknow Hotel",
      tier: "Premium",
      desc: {
        en: "Premium city hotel with modern facilities and views over parts of Lucknow.",
        es: "Hotel urbano premium con instalaciones modernas y vistas sobre partes de Lucknow.",
        pt: "Hotel urbano premium com instalações modernas e vistas de partes de Lucknow."
      },
      image: ""
    },
    {
      name: "Novotel Lucknow Gomti Nagar",
      tier: "Mid-range",
      desc: {
        en: "Contemporary hotel suitable for business and leisure travellers.",
        es: "Hotel contemporáneo adecuado para viajeros de negocios y ocio.",
        pt: "Hotel contemporâneo adequado para viajantes de negócios e lazer."
      },
      image: ""
    },
    {
      name: "Clarks Avadh",
      tier: "Mid-range",
      desc: {
        en: "Established city hotel offering convenient access to central Lucknow.",
        es: "Hotel tradicional de la ciudad con fácil acceso al centro de Lucknow.",
        pt: "Hotel tradicional da cidade com fácil acesso ao centro de Lucknow."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Galouti Kebab, Lucknowi Biryani, Kakori Kebab, Basket Chaat and Kulfi.",
    es: "Pruebe Galouti Kebab, biryani de Lucknow, Kakori Kebab, Basket Chaat y kulfi.",
    pt: "Prove Galouti Kebab, biryani de Lucknow, Kakori Kebab, Basket Chaat e kulfi."
  },
  localFoodDishes: [
    {
      name: { en: "Galouti Kebab", es: "Galouti Kebab", pt: "Galouti Kebab" },
      desc: {
        en: "Delicately spiced, exceptionally soft kebab associated with Lucknow's Awadhi culinary tradition.",
        es: "Kebab muy suave y delicadamente especiado, asociado a la tradición culinaria Awadhi de Lucknow.",
        pt: "Kebab extremamente macio e delicadamente temperado, associado à tradição culinária Awadhi de Lucknow."
      }
    },
    {
      name: { en: "Lucknowi Biryani", es: "Lucknowi Biryani", pt: "Lucknowi Biryani" },
      desc: {
        en: "Fragrant rice dish prepared with aromatic spices and meat or vegetables.",
        es: "Plato de arroz aromático preparado con especias y carne o verduras.",
        pt: "Prato de arroz aromático preparado com especiarias e carne ou vegetais."
      }
    },
    {
      name: { en: "Kakori Kebab", es: "Kakori Kebab", pt: "Kakori Kebab" },
      desc: {
        en: "A delicate minced-meat kebab traditionally associated with the Kakori area near Lucknow.",
        es: "Kebab delicado de carne picada tradicionalmente asociado con la zona de Kakori, cerca de Lucknow.",
        pt: "Kebab delicado de carne moída tradicionalmente associado à região de Kakori, perto de Lucknow."
      }
    },
    {
      name: { en: "Basket Chaat", es: "Basket Chaat", pt: "Basket Chaat" },
      desc: {
        en: "A popular Lucknow street-food preparation combining crispy ingredients with chutneys and spices.",
        es: "Popular comida callejera de Lucknow que combina ingredientes crujientes con chutneys y especias.",
        pt: "Popular comida de rua de Lucknow que combina ingredientes crocantes com chutneys e especiarias."
      }
    },
    {
      name: { en: "Kulfi", es: "Kulfi", pt: "Kulfi" },
      desc: {
        en: "Traditional Indian frozen dessert available in several rich flavours.",
        es: "Postre helado tradicional indio disponible en varios sabores intensos.",
        pt: "Sobremesa congelada tradicional indiana disponível em vários sabores ricos."
      }
    }
  ]
};

// Ayodhya Updates
const ayodhyaDetails = {
  highlights: [
    {
      title: { en: "Shri Ram Janmabhoomi Mandir", es: "Shri Ram Janmabhoomi Mandir", pt: "Shri Ram Janmabhoomi Mandir" },
      desc: {
        en: "Visit the major pilgrimage landmark associated with the birthplace tradition of Lord Rama and experience Ayodhya's contemporary spiritual landscape.",
        es: "Visita el importante lugar de peregrinación asociado tradicionalmente con el nacimiento del dios Rama y descubre el paisaje espiritual contemporáneo de Ayodhya.",
        pt: "Visite o importante local de peregrinação tradicionalmente associado ao nascimento do Senhor Rama e conheça a paisagem espiritual contemporânea de Ayodhya."
      }
    },
    {
      title: { en: "Ram Ki Paidi", es: "Ram Ki Paidi", pt: "Ram Ki Paidi" },
      desc: {
        en: "Explore the scenic series of ghats along the Sarayu River, especially atmospheric around sunrise and evening.",
        es: "Explora la hermosa serie de ghats junto al río Sarayu, especialmente atractiva al amanecer y al atardecer.",
        pt: "Explore a bela sequência de ghats às margens do rio Sarayu, especialmente encantadora ao amanhecer e ao entardecer."
      }
    },
    {
      title: { en: "Hanuman Garhi", es: "Hanuman Garhi", pt: "Hanuman Garhi" },
      desc: {
        en: "Visit one of Ayodhya's important temple sites and experience its devotional atmosphere.",
        es: "Visita uno de los importantes templos de Ayodhya y experimenta su ambiente devocional.",
        pt: "Visite um dos importantes templos de Ayodhya e vivencie sua atmosfera devocional."
      }
    },
    {
      title: { en: "Kanak Bhawan", es: "Kanak Bhawan", pt: "Kanak Bhawan" },
      desc: {
        en: "Admire the colourful temple architecture and devotional traditions associated with Sita and Rama.",
        es: "Admira la colorida arquitectura del templo y las tradiciones devocionales relacionadas con Sita y Rama.",
        pt: "Admire a colorida arquitetura do templo e as tradições devocionais associadas a Sita e Rama."
      }
    },
    {
      title: { en: "Sarayu River", es: "Río Sarayu", pt: "Rio Sarayu" },
      desc: {
        en: "Experience the peaceful riverfront, evening lamps and spiritual atmosphere along the Sarayu.",
        es: "Disfruta del tranquilo paseo junto al río, las lámparas vespertinas y el ambiente espiritual del Sarayu.",
        pt: "Aprecie a tranquila região ribeirinha, as lamparinas ao entardecer e a atmosfera espiritual do Sarayu."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Ram Mandir", es: "Visitar el Ram Mandir", pt: "Visitar o Ram Mandir" },
      desc: {
        en: "Explore the temple complex while following all current visitor and security guidelines.",
        es: "Explora el complejo del templo siguiendo todas las normas actuales para visitantes y seguridad.",
        pt: "Explore o complexo do templo seguindo todas as orientações atuais de visitação e segurança."
      }
    },
    {
      name: { en: "Visit Hanuman Garhi", es: "Visitar Hanuman Garhi", pt: "Visitar Hanuman Garhi" },
      desc: {
        en: "Experience one of Ayodhya's important devotional sites.",
        es: "Visita uno de los principales lugares devocionales de Ayodhya.",
        pt: "Visite um dos principais locais de devoção de Ayodhya."
      }
    },
    {
      name: { en: "Explore Ram Ki Paidi", es: "Explorar Ram Ki Paidi", pt: "Explorar Ram Ki Paidi" },
      desc: {
        en: "Walk along the Sarayu ghats and enjoy the riverfront atmosphere.",
        es: "Camina por los ghats del Sarayu y disfruta del ambiente junto al río.",
        pt: "Caminhe pelos ghats do Sarayu e aproveite a atmosfera ribeirinha."
      }
    },
    {
      name: { en: "Visit Kanak Bhawan", es: "Visitar Kanak Bhawan", pt: "Visitar Kanak Bhawan" },
      desc: {
        en: "Admire its colourful architecture and devotional traditions.",
        es: "Admira su colorida arquitectura y sus tradiciones devocionales.",
        pt: "Admire sua arquitetura colorida e suas tradições devocionais."
      }
    },
    {
      name: { en: "Enjoy the Sarayu Evening", es: "Disfrutar del Atardecer en el Sarayu", pt: "Apreciar o Entardecer no Sarayu" },
      desc: {
        en: "Experience the peaceful riverfront atmosphere as the city lights begin to appear.",
        es: "Disfruta del ambiente tranquilo del río mientras comienzan a encenderse las luces de la ciudad.",
        pt: "Aprecie a atmosfera tranquila do rio enquanto as luzes da cidade começam a aparecer."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Spiritual Heritage Experience", es: "Experiencia del Patrimonio Espiritual", pt: "Experiência com Patrimônio Espiritual" },
      desc: {
        en: "Explore temples, pilgrimage traditions and sacred sites connected with Ayodhya's long religious history.",
        es: "Explora templos, tradiciones de peregrinación y lugares sagrados relacionados con la larga historia religiosa de Ayodhya.",
        pt: "Explore templos, tradições de peregrinação e locais sagrados ligados à longa história religiosa de Ayodhya."
      }
    },
    {
      title: { en: "Sarayu River Experience", es: "Experiencia del Río Sarayu", pt: "Experiência com o Rio Sarayu" },
      desc: {
        en: "Spend peaceful time beside the Sarayu and observe the city's devotional atmosphere.",
        es: "Pasa un momento tranquilo junto al Sarayu y observa el ambiente devocional de la ciudad.",
        pt: "Passe um momento tranquilo às margens do Sarayu e observe a atmosfera devocional da cidade."
      }
    },
    {
      title: { en: "Temple Trail Experience", es: "Ruta de los Templos", pt: "Rota dos Templos" },
      desc: {
        en: "Visit important temples across the city and discover their distinctive traditions and architecture.",
        es: "Visita los principales templos de la ciudad y descubre sus distintas tradiciones y arquitectura.",
        pt: "Visite os principais templos da cidade e descubra suas diferentes tradições e arquiteturas."
      }
    },
    {
      title: { en: "Evening Aarti Experience", es: "Experiencia del Aarti Vespertino", pt: "Experiência com Aarti ao Entardecer" },
      desc: {
        en: "Experience the devotional atmosphere of evening prayers and lamps along the riverfront.",
        es: "Vive el ambiente devocional de las oraciones vespertinas y las lámparas junto al río.",
        pt: "Vivencie a atmosfera devocional das orações e lamparinas ao entardecer às margens do rio."
      }
    },
    {
      title: { en: "Cultural Experience", es: "Experiencia Cultural", pt: "Experiência Cultural" },
      desc: {
        en: "Discover local traditions, festivals, devotional music, handicrafts and regional cuisine.",
        es: "Descubre tradiciones locales, festivales, música devocional, artesanías y gastronomía regional.",
        pt: "Descubra tradições locais, festivais, música devocional, artesanato e culinária regional."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Ayodhya has Maharishi Valmiki International Airport and direct trains from major North Indian stations.",
      es: "Ayodhya cuenta con el aeropuerto internacional Maharishi Valmiki y conexiones de tren directas.",
      pt: "Ayodhya conta com o Aeroporto Internacional Maharishi Valmiki e conexões de trem diretas."
    },
    nearestAirport: "Maharishi Valmiki International Airport (AYY)",
    nearestRailway: "Ayodhya Dham Junction (AY)",
    transportOptions: "Auto-rickshaws, E-rickshaws, Taxis, Walking",
    distanceFromMajorCities: "Lucknow (135 km), Varanasi (200 km)",
    recommendedStay: "2 Days",
    avgTemp: "14°C - 38°C",
    currency: "INR",
    localLanguage: "Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "A secure pilgrimage city. Standard security checks are active around Ram Janmabhoomi.",
      es: "Ciudad de peregrinación segura. Hay controles de seguridad activos.",
      pt: "Cidade de peregrinação segura. Controles de segurança ativos."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Convenient for short temple visits.",
        es: "Cómodo para visitar templos cercanos.",
        pt: "Conveniente para visitar templos próximos."
      },
      recommended: false
    },
    {
      transportType: "E-Rickshaw",
      title: { en: "E-Rickshaw", es: "E-Rickshaw", pt: "E-Rickshaw" },
      desc: {
        en: "Affordable option for local sightseeing.",
        es: "Opción económica para hacer turismo local.",
        pt: "Opção econômica para passeios locais."
      },
      recommended: true
    },
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Useful for airport transfers and visiting multiple sites.",
        es: "Útil para traslados al aeropuerto y visitas a varios lugares.",
        pt: "Útil para traslados do aeroporto e visitas a vários locais."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Convenient for families and multi-day itineraries.",
        es: "Conveniente para familias e itinerarios de varios días.",
        pt: "Conveniente para famílias e roteiros de vários dias."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal for exploring selected temple and market areas at a relaxed pace.",
        es: "Ideal para explorar determinadas zonas de templos y mercados tranquilamente.",
        pt: "Ideal para explorar algumas áreas de templos e mercados com tranquilidade."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Follow Guidelines", es: "Seguir Normas", pt: "Siga as Regras" },
      desc: {
        en: "Follow temple security and visitor guidelines carefully.",
        es: "Sigue cuidadosamente las normas de seguridad y visita de los templos.",
        pt: "Siga cuidadosamente as regras de segurança e visitação dos templos."
      }
    },
    {
      title: { en: "Dress Modestly", es: "Vestir con Modestia", pt: "Vista-se com Modéstia" },
      desc: {
        en: "Dress modestly when visiting religious sites.",
        es: "Viste de manera modesta al visitar lugares religiosos.",
        pt: "Vista-se de forma discreta ao visitar locais religiosos."
      }
    },
    {
      title: { en: "Allow Extra Time", es: "Reservar Tiempo Extra", pt: "Reserve Tempo Extra" },
      desc: {
        en: "Keep extra time for crowds during major religious festivals.",
        es: "Reserva tiempo adicional durante los grandes festivales religiosos debido a las multitudes.",
        pt: "Reserve tempo extra durante grandes festivais religiosos devido às multidões."
      }
    },
    {
      title: { en: "Carry Essentials", es: "Llevar lo Esencial", pt: "Itens Essenciais" },
      desc: {
        en: "Carry water and comfortable footwear for temple visits.",
        es: "Lleva agua y calzado cómodo para las visitas a templos.",
        pt: "Leve água e calçados confortáveis para visitar os templos."
      }
    },
    {
      title: { en: "Respect Local Customs", es: "Respetar Costumbres", pt: "Respeite os Costumes" },
      desc: {
        en: "Respect local religious customs and photography restrictions.",
        es: "Respeta las costumbres religiosas locales y las restricciones de fotografía.",
        pt: "Respeite os costumes religiosos locais e as restrições de fotografia."
      }
    }
  ],
  hotels: [
    {
      name: "Park Inn by Radisson Ayodhya",
      tier: "Mid-range",
      desc: {
        en: "Modern hotel option offering comfortable accommodation for pilgrims and leisure travellers.",
        es: "Hotel moderno con alojamiento confortable para peregrinos y viajeros de ocio.",
        pt: "Hotel moderno com hospedagem confortável para peregrinos e viajantes de lazer."
      },
      image: ""
    },
    {
      name: "Clarks Inn Express Ayodhya",
      tier: "Mid-range",
      desc: {
        en: "Contemporary accommodation suitable for short and extended stays.",
        es: "Alojamiento contemporáneo adecuado para estancias cortas y largas.",
        pt: "Hospedagem contemporânea adequada para estadias curtas e longas."
      },
      image: ""
    },
    {
      name: "Praveg Tent City Brahma Kund",
      tier: "Boutique",
      desc: {
        en: "A distinctive tented accommodation experience combining comfort with a unique destination atmosphere.",
        es: "Experiencia de alojamiento en tiendas que combina comodidad con un ambiente único.",
        pt: "Experiência de hospedagem em tendas que combina conforto com uma atmosfera diferenciada."
      },
      image: ""
    },
    {
      name: "Hotel Saket",
      tier: "Mid-range",
      desc: {
        en: "Established accommodation conveniently located near Ayodhya's railway area.",
        es: "Alojamiento tradicional convenientemente situado cerca de la zona ferroviaria de Ayodhya.",
        pt: "Hospedagem tradicional convenientemente localizada perto da área ferroviária de Ayodhya."
      },
      image: ""
    },
    {
      name: "Saryu Atithi Grah",
      tier: "Budget",
      desc: {
        en: "Government tourism accommodation near Saryu Ghat, suitable for travellers seeking a practical stay close to the riverfront.",
        es: "Alojamiento turístico gubernamental cerca de Saryu Ghat, adecuado para quienes buscan una estancia práctica cerca del río.",
        pt: "Hospedagem turística governamental perto de Saryu Ghat, adequada para quem procura uma estadia prática próxima ao rio."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Kachori Sabzi, Poori Sabzi, Jalebi, Lassi and Pedas.",
    es: "Pruebe Kachori Sabzi, Poori Sabzi, jalebi, lassi y pedas.",
    pt: "Prove Kachori Sabzi, Poori Sabzi, jalebi, lassi e pedas."
  },
  localFoodDishes: [
    {
      name: { en: "Kachori Sabzi", es: "Kachori Sabzi", pt: "Kachori Sabzi" },
      desc: {
        en: "Crispy kachori served with spiced potato curry, a popular North Indian breakfast.",
        es: "Kachori crujiente servida con un curry de patata especiado, un desayuno popular del norte de India.",
        pt: "Kachori crocante servida com curry de batata temperado, um popular café da manhã do norte da Índia."
      }
    },
    {
      name: { en: "Poori Sabzi", es: "Poori Sabzi", pt: "Poori Sabzi" },
      desc: {
        en: "Fried wheat bread served with a flavourful vegetable curry.",
        es: "Pan de trigo frito servido con un sabroso curry de verduras.",
        pt: "Pão de trigo frito servido com um saboroso curry de vegetais."
      }
    },
    {
      name: { en: "Jalebi", es: "Jalebi", pt: "Jalebi" },
      desc: {
        en: "Crisp spiral-shaped sweet soaked in fragrant sugar syrup.",
        es: "Dulce crujiente en forma de espiral bañado en un aromático almíbar de azúcar.",
        pt: "Doce crocante em formato de espiral mergulhado em uma aromática calda de açúcar."
      }
    },
    {
      name: { en: "Lassi", es: "Lassi", pt: "Lassi" },
      desc: {
        en: "Refreshing yogurt-based drink available in sweet and traditional variations.",
        es: "Refrescante bebida a base de yogur disponible en versiones dulces y tradicionales.",
        pt: "Refrescante bebida à base de iogurte disponível em versões doces e tradicionais."
      }
    },
    {
      name: { en: "Pedas", es: "Pedas", pt: "Pedas" },
      desc: {
        en: "Traditional milk-based sweets commonly enjoyed as offerings and local treats.",
        es: "Dulces tradicionales a base de leche que suelen disfrutarse como ofrendas y especialidades locales.",
        pt: "Doces tradicionais à base de leite, apreciados como oferendas e especialidades locais."
      }
    }
  ]
};

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  const upIdx = states.findIndex(s => s.slug === "uttar-pradesh");
  if (upIdx !== -1) {
    console.log("Updating Uttar Pradesh cities in local file...");
    const upState = states[upIdx];
    upState.cities = upState.cities || [];
    
    // Update function helper
    const updateCity = (slug, details) => {
      const cityIdx = upState.cities.findIndex(c => c.slug === slug);
      if (cityIdx !== -1) {
        upState.cities[cityIdx] = { ...upState.cities[cityIdx], ...details };
        console.log(`Updated city details: ${slug}`);
      } else {
        console.error(`City slug '${slug}' not found under Uttar Pradesh!`);
      }
    };

    updateCity("agra", agraDetails);
    updateCity("varanasi", varanasiDetails);
    updateCity("lucknow", lucknowDetails);
    updateCity("ayodhya", ayodhyaDetails);

    states[upIdx] = upState;
  } else {
    console.error("Uttar Pradesh state not found in states.json!");
  }

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for UP cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const docRef = doc(firestore, "states", "uttar-pradesh");
    setDoc(docRef, states[upIdx]).then(() => {
      console.log("🚀 SUCCESS: Remote Firestore 'uttar-pradesh' document successfully updated!");
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
