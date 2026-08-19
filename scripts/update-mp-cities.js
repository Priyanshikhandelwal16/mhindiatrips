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

// 1. BHOPAL DETAILS
const bhopalDetails = {
  tagline: {
    en: "Bhopal, the capital of Madhya Pradesh, is a beautiful city of lakes known for its rich history, museums, grand mosques, green landscapes and vibrant cultural heritage.",
    es: "Bhopal, la capital de Madhya Pradesh, es una hermosa ciudad de lagos conocida por su rica historia, museos, grandes mezquitas, paisajes verdes y patrimonio cultural.",
    pt: "Bhopal, capital de Madhya Pradesh, é uma bela cidade de lagos conhecida por sua rica história, museus, grandiosas mesquitas, paisagens verdes e patrimônio cultural."
  },
  overview: {
    en: "Bhopal combines historic architecture, beautiful lakes and a rich cultural heritage with the energy of a modern Indian city. The Upper Lake and Lower Lake are central to the city's identity, while attractions such as the Taj-ul-Masajid, Tribal Museum, Gauhar Mahal and Van Vihar National Park offer diverse experiences. Bhopal is also a convenient base for exploring nearby heritage sites such as Sanchi and Bhimbetka.",
    es: "Bhopal combina arquitectura histórica, hermosos lagos y un rico patrimonio cultural con la energía de una ciudad india moderna. El Lago Superior y el Lago Inferior son elementos centrales de la ciudad, mientras que lugares como Taj-ul-Masajid, Tribal Museum, Gauhar Mahal y Van Vihar National Park ofrecen experiencias variadas. Bhopal también es una excelente base para explorar Sanchi y Bhimbetka.",
    pt: "Bhopal combina arquitetura histórica, belos lagos e rico patrimônio cultural com a energia de uma cidade indiana moderna. O Upper Lake e o Lower Lake são elementos centrais da cidade, enquanto atrações como Taj-ul-Masajid, Tribal Museum, Gauhar Mahal e Van Vihar National Park oferecem experiências variadas. Bhopal também é uma excelente base para explorar Sanchi e Bhimbetka."
  },
  highlights: [
    {
      title: { en: "Upper Lake", es: "Lago Superior", pt: "Upper Lake" },
      desc: {
        en: "Scenic lake and iconic symbol of Bhopal.",
        es: "Hermoso lago e ícono representativo de Bhopal.",
        pt: "Belo lago e ícone representativo de Bhopal."
      }
    },
    {
      title: { en: "Taj-ul-Masajid", es: "Taj-ul-Masajid", pt: "Taj-ul-Masajid" },
      desc: {
        en: "One of India's grand historic mosques.",
        es: "Una de las mezquitas históricas más grandiosas de India.",
        pt: "Uma das mesquitas históricas mais grandiosas da Índia."
      }
    },
    {
      title: { en: "Tribal Museum", es: "Museo Tribal", pt: "Museu Tribal" },
      desc: {
        en: "A fascinating introduction to Madhya Pradesh's tribal cultures.",
        es: "Una introducción fascinante a las culturas tribales de Madhya Pradesh.",
        pt: "Uma introdução fascinante às culturas tribais de Madhya Pradesh."
      }
    },
    {
      title: { en: "Van Vihar National Park", es: "Parque Nacional Van Vihar", pt: "Parque Nacional Van Vihar" },
      desc: {
        en: "Urban wildlife and nature destination.",
        es: "Destino urbano de naturaleza y vida silvestre.",
        pt: "Destino urbano de natureza e vida selvagem."
      }
    },
    {
      title: { en: "Bhimbetka Caves", es: "Cuevas de Bhimbetka", pt: "Cavernas de Bhimbetka" },
      desc: {
        en: "Ancient rock shelters and prehistoric paintings nearby.",
        es: "Antiguos refugios rocosos y pinturas prehistóricas cercanas.",
        pt: "Antigos abrigos rochosos e pinturas pré-históricas próximas."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Sunset around Upper Lake", es: "Atardecer en el Lago Superior", pt: "Pôr do sol no Upper Lake" },
      desc: {
        en: "Enjoy a beautiful and peaceful sunset around Upper Lake.",
        es: "Disfruta de un atardecer hermoso y tranquilo en el Lago Superior.",
        pt: "Desfrute de um pôr do sol lindo e tranquilo no Upper Lake."
      }
    },
    {
      name: { en: "Visit Taj-ul-Masajid", es: "Visitar Taj-ul-Masajid", pt: "Visitar Taj-ul-Masajid" },
      desc: {
        en: "Visit Taj-ul-Masajid, one of India's grandest and most historic mosques.",
        es: "Visita la gran mezquita de Taj-ul-Masajid.",
        pt: "Visite a grande mesquita de Taj-ul-Masajid."
      }
    },
    {
      name: { en: "Explore Tribal Museum", es: "Explorar el Museo Tribal", pt: "Explorar o Museu Tribal" },
      desc: {
        en: "Explore the Tribal Museum to discover local folklore, art, and traditions.",
        es: "Explora el Museo Tribal para conocer el arte y folclor local.",
        pt: "Explore o Museu Tribal para conhecer a arte e o folclore local."
      }
    },
    {
      name: { en: "Visit Van Vihar National Park", es: "Visitar el Parque Nacional Van Vihar", pt: "Visitar o Parque Nacional Van Vihar" },
      desc: {
        en: "Enjoy wildlife trails and scenic nature inside the park limits.",
        es: "Disfruta de la vida silvestre y la naturaleza en el parque.",
        pt: "Aproveite a vida selvagem e a natureza dentro do parque."
      }
    },
    {
      name: { en: "Sanchi or Bhimbetka Excursion", es: "Excursión a Sanchi o Bhimbetka", pt: "Passeio a Sanchi ou Bhimbetka" },
      desc: {
        en: "Take a scenic day trip to the ancient Buddhist stupas of Sanchi or the rock shelters of Bhimbetka.",
        es: "Haz una excursión a las estupas de Sanchi o los refugios de Bhimbetka.",
        pt: "Faça um passeio às estupas de Sanchi ou abrigos de Bhimbetka."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Raja Bhoj Airport in Bhopal connects with domestic flights. Bhopal Junction is well connected with major railway lines and highway road transits.",
      es: "Bhopal es accesible por avión, tren y carretera.",
      pt: "Bhopal é acessível por avião, trem e estrada."
    },
    nearestAirport: "Raja Bhoj Airport (BHO)",
    nearestRailway: "Bhopal Junction (BPL)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Indore (190 km), Ujjain (190 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "12°C - 33°C",
    currency: "INR",
    localLanguage: "Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe capital city. Follow instructions at nature parks.",
      es: "Capital muy segura.",
      pt: "Capital muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "Convenient app cab services inside Bhopal city limits.",
        es: "Taxis cómodos dentro de la ciudad.",
        pt: "Táxis confortáveis dentro da cidade."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short routes between markets and central lakeside spots.",
        es: "Útil para distancias cortas.",
        pt: "Útil para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Economical municipal bus transport across suburban areas.",
        es: "Servicio de autobús urbano.",
        pt: "Serviço de ônibus urbano."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Highly recommended for visiting Sanchi, Vidisha and Bhimbetka caves.",
        es: "Recomendado para excursiones lejanas.",
        pt: "Recomendado para passeios mais distantes."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal around selected heritage lanes and local bazaar blocks.",
        es: "Ideal en bazares y zonas históricas del centro.",
        pt: "Ideal em bazares e áreas históricas centrais."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Sun Protection", es: "Protección Solar", pt: "Proteção Solar" },
      desc: {
        en: "Carry sun protection during summer.",
        es: "Lleva protección solar durante el verano.",
        pt: "Leve proteção solar durante o verão."
      }
    },
    {
      title: { en: "Dress Code", es: "Respeto en Templos", pt: "Respeito nos Templos" },
      desc: {
        en: "Dress respectfully when visiting religious monuments.",
        es: "Viste con respeto al visitar monumentos religiosos.",
        pt: "Vista-se com respeito ao visitar monumentos religiosos."
      }
    },
    {
      title: { en: "Early Sightseeing", es: "Comienzo Temprano", pt: "Comece Cedo" },
      desc: {
        en: "Start outdoor sightseeing early during warmer months.",
        es: "Comienza las visitas temprano durante los meses calurosos.",
        pt: "Comece os passeios cedo durante os meses quentes."
      }
    },
    {
      title: { en: "Day Trips Timing", es: "Tiempo para Excursiones", pt: "Tempo para Passeios" },
      desc: {
        en: "Keep a full day if visiting Bhimbetka and Sanchi.",
        es: "Reserva un día completo si vas a visitar Bhimbetka y Sanchi.",
        pt: "Reserve um dia inteiro se for visitar Bhimbetka e Sanchi."
      }
    },
    {
      title: { en: "Bhopali Food", es: "Comida Local", pt: "Comida Local" },
      desc: {
        en: "Try local Bhopali cuisine in traditional food areas.",
        es: "Prueba la gastronomía típica de Bhopal.",
        pt: "Prove a culinária típica de Bhopal."
      }
    }
  ],
  hotels: [
    {
      name: "Jehan Numa Palace",
      tier: "Luxury",
      desc: {
        en: "Heritage luxury hotel offering royal stays and gardens.",
        es: "Hotel histórico de lujo con servicios reales y jardines.",
        pt: "Hotel histórico de luxo com serviços reais e jardins."
      },
      image: ""
    },
    {
      name: "Jehan Numa Retreat",
      tier: "Luxury",
      desc: {
        en: "Peaceful premium accommodation next to Van Vihar.",
        es: "Alojamiento premium y tranquilo cerca de Van Vihar.",
        pt: "Hospedagem premium e tranquila perto de Van Vihar."
      },
      image: ""
    },
    {
      name: "Courtyard by Marriott Bhopal",
      tier: "Premium",
      desc: {
        en: "Modern premium hotel located in DB City Mall complex.",
        es: "Hotel moderno premium en el centro de la ciudad.",
        pt: "Hotel moderno premium no centro da cidade."
      },
      image: ""
    },
    {
      name: "Noor-Us-Sabah Palace",
      tier: "Luxury",
      desc: {
        en: "Heritage-style luxury stay overlooking Bhopal lakes.",
        es: "Hotel palaciego clásico con vistas a los lagos.",
        pt: "Hotel palaciano clássico com vista para os lagos."
      },
      image: ""
    },
    {
      name: "The Fern Residency Bhopal",
      tier: "Mid-range",
      desc: {
        en: "Comfortable modern option with eco-friendly services.",
        es: "Alojamiento moderno con servicios ecológicos.",
        pt: "Hospedagem moderna com serviços ecológicos."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Poha, Jalebi, Bhopali Gosht Korma, Bhopali Keema and Bhopali Paan.",
    es: "Pruebe Poha, Jalebi, Bhopali Gosht Korma, Bhopali Keema y Bhopali Paan.",
    pt: "Prove Poha, Jalebi, Bhopali Gosht Korma, Bhopali Keema e Bhopali Paan."
  },
  localFoodDishes: [
    {
      name: { en: "Poha", es: "Poha", pt: "Poha" },
      desc: {
        en: "Flattened rice cooked with spices, onions, mustard seeds and curry leaves.",
        es: "Arroz aplanado cocinado con especias y cebolla.",
        pt: "Arroz aplanado cozido com especiarias e cebola."
      }
    },
    {
      name: { en: "Jalebi", es: "Jalebi", pt: "Jalebi" },
      desc: {
        en: "Crispy deep-fried flour spirals soaked in sweet sugar syrup.",
        es: "Espirales crujientes fritas y bañadas en almíbar dulce.",
        pt: "Espirais crocantes fritas e mergulhadas em calda de açúcar doce."
      }
    },
    {
      name: { en: "Bhopali Gosht Korma", es: "Bhopali Gosht Korma", pt: "Bhopali Gosht Korma" },
      desc: {
        en: "Spiced mutton curry cooked slowly in a rich Mughlai-style gravy.",
        es: "Curry de cordero cocinado a fuego lento con salsa especiada.",
        pt: "Curry de carneiro cozido lentamente em molho temperado."
      }
    },
    {
      name: { en: "Bhopali Keema", es: "Bhopali Keema", pt: "Bhopali Keema" },
      desc: {
        en: "Minced meat cooked with local spices, herbs and traditional techniques.",
        es: "Carne picada cocinada con especias y hierbas locales.",
        pt: "Carne moída cozida com especiarias e ervas locais."
      }
    },
    {
      name: { en: "Bhopali Paan", es: "Bhopali Paan", pt: "Bhopali Paan" },
      desc: {
        en: "Betel leaf wrapped with sweet mixtures, nuts and traditional spices.",
        es: "Hoja de betel rellena con mezclas dulces y frutos secos.",
        pt: "Folha de betel recheada com misturas doces e frutos secos."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally the most comfortable period for sightseeing and exploring nearby heritage attractions.",
    es: "De octubre a marzo suele ser el período más cómodo para hacer turismo y visitar los lugares históricos cercanos.",
    pt: "De outubro a março geralmente é o período mais confortável para passeios e visitas aos locais históricos próximos."
  },
  faqs: [
    {
      q: { en: "What is Bhopal famous for?", es: "¿Por qué es famoso Bhopal?", pt: "Pelo que Bhopal é famoso?" },
      a: {
        en: "Bhopal is famous for its lakes, historic monuments, museums and cultural heritage.",
        es: "Bhopal es famoso por sus lagos, monumentos históricos, museos y patrimonio cultural.",
        pt: "Bhopal é famoso por seus lagos, monumentos históricos, museus e patrimônio cultural."
      }
    },
    {
      q: { en: "How many days are enough for Bhopal?", es: "¿Cuántos días son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are suitable for exploring Bhopal and its main attractions.",
        es: "2–3 días son adecuados para explorar Bhopal y sus principales atracciones.",
        pt: "2–3 dias são adequados para conhecer Bhopal e suas principais atrações."
      }
    },
    {
      q: { en: "Is Bhopal good for families?", es: "¿Es adecuada para familias?", pt: "Bhopal é adequada para famílias?" },
      a: {
        en: "Yes, the city has museums, lakes, parks and cultural attractions suitable for families.",
        es: "Sí, cuenta con museos, lagos, parques y atracciones culturales.",
        pt: "Sim, possui museus, lagos, parques e atrações culturais."
      }
    },
    {
      q: { en: "Can Sanchi be visited from Bhopal?", es: "¿Se puede visitar Sanchi?", pt: "É possível visitar Sanchi?" },
      a: {
        en: "Yes, Sanchi is a convenient day-trip option from Bhopal.",
        es: "Sí, Sanchi es una buena opción para una excursión de un día desde Bhopal.",
        pt: "Sim, Sanchi é uma boa opção para um passeio de um dia."
      }
    },
    {
      q: { en: "What food is Bhopal famous for?", es: "¿Qué comida típica tiene Bhopal?", pt: "Qual a comida típica de Bhopal?" },
      a: {
        en: "Bhopal is known for poha, jalebi, Bhopali meat dishes and paan.",
        es: "Es conocido por poha, jalebi, platos de carne al estilo Bhopali y paan.",
        pt: "É conhecido por poha, jalebi, pratos de carne ao estilo Bhopali e paan."
      }
    }
  ]
};

// 2. INDORE DETAILS
const indoreDetails = {
  tagline: {
    en: "Indore is the commercial and culinary capital of Madhya Pradesh, famous for its vibrant food culture, historic markets, royal heritage and lively urban atmosphere.",
    es: "Indore es la capital comercial y gastronómica de Madhya Pradesh, famosa por su vibrante cultura culinaria, mercados históricos, patrimonio real y animada vida urbana.",
    pt: "Indore é a capital comercial e gastronômica de Madhya Pradesh, famosa por sua vibrante cultura culinária, mercados históricos, patrimônio real e atmosfera urbana movimentada."
  },
  overview: {
    en: "Indore offers an exciting mix of history, architecture, shopping and food. The city is strongly associated with the heritage of the Holkar dynasty, whose legacy can be seen at Rajwada Palace and Lal Bagh Palace. Sarafa Bazaar and Chappan Dukan are major highlights for food lovers, offering a wide variety of local snacks and sweets. Indore also makes a convenient base for exploring nearby destinations such as Mandu and Maheshwar.",
    es: "Indore ofrece una fascinante combinación de historia, arquitectura, compras y gastronomía. La ciudad está profundamente vinculada a la dinastía Holkar, cuyo legado puede verse en Rajwada Palace y Lal Bagh Palace. Sarafa Bazaar y Chappan Dukan son lugares imprescindibles para los amantes de la comida. Indore también es una buena base para explorar Mandu y Maheshwar.",
    pt: "Indore oferece uma combinação fascinante de história, arquitetura, compras e gastronomia. A cidade está profundamente ligada à dinastia Holkar, cujo legado pode ser visto no Rajwada Palace e no Lal Bagh Palace. Sarafa Bazaar e Chappan Dukan são atrações imperdíveis para os amantes da gastronomia. Indore também é uma excelente base para explorar Mandu e Maheshwar."
  },
  highlights: [
    {
      title: { en: "Rajwada Palace", es: "Palacio Rajwada", pt: "Palácio Rajwada" },
      desc: {
        en: "Historic 7-story palace seat of the Holkars displaying Maratha style.",
        es: "Palacio histórico de 7 pisos de la dinastía Holkar.",
        pt: "Palácio histórico de 7 andares da dinastia Holkar."
      }
    },
    {
      title: { en: "Sarafa Bazaar", es: "Sarafa Bazaar", pt: "Sarafa Bazaar" },
      desc: {
        en: "Vibrant night food market offering famous street food snacks.",
        es: "Mercado nocturno de comida famosa.",
        pt: "Mercado noturno de comida famosa."
      }
    },
    {
      title: { en: "Chappan Dukan", es: "Chappan Dukan", pt: "Chappan Dukan" },
      desc: {
        en: "A famous street filled with 56 popular local food stalls.",
        es: "Calle famosa con 56 puestos de comida local.",
        pt: "Rua famosa com 56 barracas de comida local."
      }
    },
    {
      title: { en: "Lal Bagh Palace", es: "Palacio Lal Bagh", pt: "Palácio Lal Bagh" },
      desc: {
        en: "Magnificent palace built by Holkar rulers showcasing European-style architecture.",
        es: "Magnífico palacio de estilo europeo de la dinastía Holkar.",
        pt: "Magnífico palácio em estilo europeu da dinastia Holkar."
      }
    },
    {
      title: { en: "Kanch Mandir", es: "Templo Kanch Mandir", pt: "Templo Kanch Mandir" },
      desc: {
        en: "Unique Jain temple made entirely of glass and mirrors.",
        es: "Templo jainista decorado enteramente con vidrio y espejos.",
        pt: "Templo jainista decorado inteiramente com vidro e espelhos."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Rajwada Palace", es: "Explorar el Palacio Rajwada", pt: "Explorar o Palácio Rajwada" },
      desc: {
        en: "Explore the historic palace building combining Maratha and French style.",
        es: "Explora el palacio que combina estilos Maratha y francés.",
        pt: "Explore o palácio que combina estilos Maratha e francês."
      }
    },
    {
      name: { en: "Sarafa Bazaar Food Tour", es: "Comida en Sarafa Bazaar", pt: "Comida no Sarafa Bazaar" },
      desc: {
        en: "Try delicious local snacks in the night street market at Sarafa Bazaar.",
        es: "Prueba la comida callejera en el mercado nocturno de Sarafa.",
        pt: "Experimente a comida de rua no mercado noturno de Sarafa."
      }
    },
    {
      name: { en: "Explore Chappan Dukan", es: "Explorar Chappan Dukan", pt: "Explorar Chappan Dukan" },
      desc: {
        en: "Taste a wide variety of Indori snacks and sweets at the famous Chappan Dukan streets.",
        es: "Prueba bocadillos locales en los 56 puestos de Chappan Dukan.",
        pt: "Experimente petiscos locais nas 56 barracas de Chappan Dukan."
      }
    },
    {
      name: { en: "Visit Lal Bagh Palace", es: "Visitar el Palacio Lal Bagh", pt: "Visitar o Palácio Lal Bagh" },
      desc: {
        en: "Visit the magnificent palace and admire the royal interiors and gardens.",
        es: "Visita el palacio y admira los lujosos interiores reales.",
        pt: "Visite o palácio e admire os luxuosos interiores reais."
      }
    },
    {
      name: { en: "Mandu or Maheshwar Day Trip", es: "Excursión a Mandu o Maheshwar", pt: "Passeio a Mandu ou Maheshwar" },
      desc: {
        en: "Take a scenic day trip to the historic monuments of Mandu or the temples of Maheshwar.",
        es: "Haz una excursión a las ruinas de Mandu o templos de Maheshwar.",
        pt: "Faça um passeio às ruínas de Mandu ou templos de Maheshwar."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Devi Ahilyabai Holkar International Airport provides domestic and selected international flights. Indore railway junction has regular train connectivities.",
      es: "Indore es accesible por avión, tren y carretera.",
      pt: "Indore é acessível por avião, trem e estrada."
    },
    nearestAirport: "Devi Ahilyabai Holkar Airport (IDR)",
    nearestRailway: "Indore Junction (INDB)",
    transportOptions: "Buses, Taxis, Auto-rickshaws",
    distanceFromMajorCities: "Bhopal (190 km), Ujjain (55 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "14°C - 34°C",
    currency: "INR",
    localLanguage: "Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe commercial city. Follow road rules during high traffic.",
      es: "Ciudad comercial muy segura.",
      pt: "Cidade comercial muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "Convenient app cab services inside Indore city limits.",
        es: "Taxis cómodos dentro de la ciudad.",
        pt: "Táxis confortáveis dentro da cidade."
      },
      recommended: true
    },
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short routes around markets and food streets.",
        es: "Útil para distancias cortas.",
        pt: "Útil para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "City Bus",
      title: { en: "City Bus", es: "Autobús Urbano", pt: "Ônibus Urbano" },
      desc: {
        en: "Municipal city bus services covering main routes.",
        es: "Servicios de autobuses municipales.",
        pt: "Serviços de ônibus municipais."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Highly recommended for day trips to Mandu, Maheshwar or Omkareshwar.",
        es: "Recomendado para excursiones de un día.",
        pt: "Recomendado para passeios de um dia."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal within food markets and central bazaar quarters.",
        es: "Ideal en zonas gastronómicas y bazares.",
        pt: "Ideal em áreas gastronômicas e bazares."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Sarafa Night", es: "Comida Nocturna", pt: "Comida Noturna" },
      desc: {
        en: "Visit Sarafa Bazaar in the evening for its famous food scene.",
        es: "Visita Sarafa por la noche para disfrutar de la comida callejera.",
        pt: "Visite o Sarafa à noite para desfrutar da comida de rua."
      }
    },
    {
      title: { en: "Early Sightseeing", es: "Visitas Tempranas", pt: "Passeios Cedo" },
      desc: {
        en: "Start heritage sightseeing early to beat the daytime traffic.",
        es: "Comienza las visitas a los monumentos temprano.",
        pt: "Comece os passeios aos monumentos cedo."
      }
    },
    {
      title: { en: "Cash", es: "Efectivo", pt: "Dinheiro" },
      desc: {
        en: "Keep cash for smaller food stalls.",
        es: "Lleva efectivo para los puestos de comida más pequeños.",
        pt: "Leve dinheiro para as barracas de comida menores."
      }
    },
    {
      title: { en: "Small Snacks", es: "Varios Bocados", pt: "Vários Petiscos" },
      desc: {
        en: "Try multiple local snacks rather than one large meal.",
        es: "Prueba varios bocados locales en lugar de una comida grande.",
        pt: "Experimente vários petiscos locais em vez de uma refeição grande."
      }
    },
    {
      title: { en: "Day Trips Car", es: "Carro para Excursiones", pt: "Carro para Passeios" },
      desc: {
        en: "Use a private car for nearby day trips.",
        es: "Utiliza un coche privado para las excursiones cercanas.",
        pt: "Use um carro particular para os passeios próximos."
      }
    }
  ],
  hotels: [
    {
      name: "Indore Marriott Hotel",
      tier: "Luxury",
      desc: {
        en: "Premium modern hotel with comfortable rooms and multiple dining venues.",
        es: "Hotel moderno premium con excelentes habitaciones y restaurantes.",
        pt: "Hotel moderno premium com excelentes quartos e restaurantes."
      },
      image: ""
    },
    {
      name: "Sayaji Indore",
      tier: "Luxury",
      desc: {
        en: "Popular luxury accommodation offering upscale dining and stays.",
        es: "Alojamiento popular de lujo con restaurantes de categoría.",
        pt: "Hospedagem popular de luxo com restaurantes de alto padrão."
      },
      image: ""
    },
    {
      name: "Sheraton Grand Palace Indore",
      tier: "Luxury",
      desc: {
        en: "Premium hotel built with heritage architectural style.",
        es: "Hotel premium con estilo arquitectónico clásico.",
        pt: "Hotel premium com estilo arquitetônico clássico."
      },
      image: ""
    },
    {
      name: "Radisson Blu Hotel Indore",
      tier: "Luxury",
      desc: {
        en: "Modern luxury option located in Vijay Nagar business hub.",
        es: "Alojamiento moderno y lujoso en el centro comercial.",
        pt: "Hospedagem moderna e luxuosa no centro comercial."
      },
      image: ""
    },
    {
      name: "The Park Indore",
      tier: "Premium",
      desc: {
        en: "Contemporary premium hotel offering stylish rooms and facilities.",
        es: "Hotel contemporáneo premium con habitaciones de diseño.",
        pt: "Hotel contemporâneo premium com quartos de design."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Poha Jalebi, Indori Sev, Bhutte Ka Kees, Sabudana Khichdi and Garadu.",
    es: "Pruebe Poha Jalebi, Indori Sev, Bhutte Ka Kees, Sabudana Khichdi y Garadu.",
    pt: "Prove Poha Jalebi, Indori Sev, Bhutte Ka Kees, Sabudana Khichdi e Garadu."
  },
  localFoodDishes: [
    {
      name: { en: "Poha Jalebi", es: "Poha Jalebi", pt: "Poha Jalebi" },
      desc: {
        en: "Classic breakfast combination of spiced flattened rice and sweet jalebi.",
        es: "Combinación de desayuno de arroz aplanado y jalebi dulce.",
        pt: "Combinação de café da manhã de arroz aplanado e jalebi doce."
      }
    },
    {
      name: { en: "Indori Sev", es: "Indori Sev", pt: "Indori Sev" },
      desc: {
        en: "Famous crispy chickpea flour snack prepared with special spices.",
        es: "Famoso aperitivo crujiente hecho de harina de garbanzo y especias.",
        pt: "Famoso petisco crocante feito de farinha de grão-de-bico e especiarias."
      }
    },
    {
      name: { en: "Bhutte Ka Kees", es: "Bhutte Ka Kees", pt: "Bhutte Ka Kees" },
      desc: {
        en: "Grated corn cooked with milk, spices, mustard seeds and coconut garnish.",
        es: "Maíz rallado cocinado con leche y especias.",
        pt: "Milho ralado cozido com leite e especiarias."
      }
    },
    {
      name: { en: "Sabudana Khichdi", es: "Sabudana Khichdi", pt: "Sabudana Khichdi" },
      desc: {
        en: "Sago pearls cooked with roasted peanuts, potatoes and green chillies.",
        es: "Plato de perlas de sagú cocinadas con patatas y cacahuetes.",
        pt: "Prato de sagu cozido com batatas e amendoim."
      }
    },
    {
      name: { en: "Garadu", es: "Garadu", pt: "Garadu" },
      desc: {
        en: "Deep-fried yam chunks tossed in special spicy masala and lemon juice.",
        es: "Trozos de ñame fritos sazonados con masala picante.",
        pt: "Pedaços de inhame fritos temperados com masala picante."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally the best period for comfortable sightseeing and food exploration.",
    es: "De octubre a marzo suele ser la mejor época para hacer turismo cómodamente y disfrutar de la gastronomía.",
    pt: "De outubro a março geralmente é a melhor época para passeios confortáveis e experiências gastronômicas."
  },
  faqs: [
    {
      q: { en: "What is Indore famous for?", es: "¿Por qué es famosa Indore?", pt: "Pelo que Indore é famosa?" },
      a: {
        en: "Indore is famous for its street food, Rajwada Palace, Holkar heritage and lively markets.",
        es: "Indore es famoso por su comida callejera, Rajwada Palace, patrimonio Holkar y mercados.",
        pt: "Indore é famoso por sua comida de rua, Rajwada Palace, patrimônio Holkar e mercados."
      }
    },
    {
      q: { en: "How many days are enough for Indore?", es: "¿Cuántos days son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are ideal for exploring the city's major highlights.",
        es: "2–3 días son ideales para conocer la ciudad.",
        pt: "2–3 dias são ideais para conhecer a cidade."
      }
    },
    {
      q: { en: "Is Indore famous for street food?", es: "¿Es famosa por la comida callejera?", pt: "É famosa pela comida de rua?" },
      a: {
        en: "Yes, Sarafa Bazaar and Chappan Dukan are especially popular food destinations.",
        es: "Sí, Sarafa Bazaar y Chappan Dukan son especialmente populares.",
        pt: "Sim, Sarafa Bazaar e Chappan Dukan são especialmente populares."
      }
    },
    {
      q: { en: "Is Indore good for families?", es: "¿Es adecuada para familias?", pt: "Indore é adequada para famílias?" },
      a: {
        en: "Yes, families can enjoy heritage sites, markets, food and nearby attractions.",
        es: "Sí, las familias pueden disfrutar de lugares históricos, mercados, gastronomía y atracciones cercanas.",
        pt: "Sim, famílias podem aproveitar locais históricos, mercados, gastronomia e atrações próximas."
      }
    },
    {
      q: { en: "Which destinations can be visited from Indore?", es: "¿Qué destinos se pueden visitar?", pt: "Quais destinos podem ser visitados?" },
      a: {
        en: "Mandu, Maheshwar and Omkareshwar are popular additions to an Indore itinerary.",
        es: "Mandu, Maheshwar y Omkareshwar son opciones populares.",
        pt: "Mandu, Maheshwar e Omkareshwar são opções populares."
      }
    }
  ]
};

// 3. KHAJURAHO DETAILS
const khajurahoDetails = {
  tagline: {
    en: "Khajuraho is a world-famous heritage destination in Madhya Pradesh, renowned for its beautifully carved temples, intricate sculptures, ancient architecture and UNESCO World Heritage status.",
    es: "Khajuraho es un destino patrimonial mundialmente famoso de Madhya Pradesh, conocido por sus templos exquisitamente tallados, esculturas detalladas, arquitectura antigua y reconocimiento como Patrimonio Mundial de la UNESCO.",
    pt: "Khajuraho é um destino histórico mundialmente famoso em Madhya Pradesh, conhecido por seus templos ricamente esculpidos, esculturas detalhadas, arquitetura antiga e reconhecimento como Patrimônio Mundial da UNESCO."
  },
  overview: {
    en: "Khajuraho is best known for its magnificent group of medieval Hindu and Jain temples built during the Chandela period. The temples are celebrated for their intricate carvings depicting deities, mythology, everyday life, music and human relationships. Beyond the Western Group of Temples, visitors can explore the Eastern and Southern Groups, museums and nearby natural attractions. Khajuraho is ideal for history lovers, architecture enthusiasts, photographers and cultural travellers.",
    es: "Khajuraho es conocido principalmente por su magnífico conjunto de templos medievales hindúes y jainistas construidos durante el período Chandela. Los templos destacan por sus intrincadas esculturas que representan deidades, mitología, vida cotidiana, música y relaciones humanas. Además del Grupo Occidental, los visitantes pueden explorar los grupos Oriental y Meridional, museos y atracciones naturales cercanas.",
    pt: "Khajuraho é conhecido principalmente por seu magnífico conjunto de templos hindus e jainistas medievais construídos durante o período Chandela. Os templos são famosos por suas esculturas detalhadas que representam divindades, mitologia, vida cotidiana, música e relações humanas. Além do Grupo Ocidental, os visitantes podem explorar os Grupos Oriental e Sul, museus e atrações naturais próximas."
  },
  highlights: [
    {
      title: { en: "Western Group of Temples", es: "Grupo Occidental de Templos", pt: "Western Group of Temples" },
      desc: {
        en: "The most famous and well-preserved complex housing major Khajuraho temples.",
        es: "El complejo más famoso y mejor conservado de Khajuraho.",
        pt: "O complexo mais famoso e bem preservado de Khajuraho."
      }
    },
    {
      title: { en: "Kandariya Mahadeva Temple", es: "Templo Kandariya Mahadeva", pt: "Templo Kandariya Mahadeva" },
      desc: {
        en: "Magnificent temple celebrated for its grand architecture and intricate sculptures.",
        es: "Templo magnífico famoso por su arquitectura y esculturas.",
        pt: "Templo magnífico famoso por sua arquitetura e esculturas."
      }
    },
    {
      title: { en: "Lakshmana Temple", es: "Templo Lakshmana", pt: "Templo Lakshmana" },
      desc: {
        en: "Ancient Vishnu temple displaying detailed carvings of historical life.",
        es: "Antiguo templo de Vishnu con esculturas de la vida histórica.",
        pt: "Antigo templo de Vishnu com esculturas da vida histórica."
      }
    },
    {
      title: { en: "Eastern Group of Temples", es: "Grupo Oriental de Templos", pt: "Eastern Group of Temples" },
      desc: {
        en: "Important heritage cluster containing both Hindu and Jain temples.",
        es: "Grupo de templos que incluye santuarios hindúes y jainistas.",
        pt: "Grupo de templos que inclui santuários hindus e jainistas."
      }
    },
    {
      title: { en: "Khajuraho Dance Festival", es: "Festival de Danza de Khajuraho", pt: "Festival de Dança de Khajuraho" },
      desc: {
        en: "Famous annual classical dance festival set against illuminated temples.",
        es: "Famoso festival anual de danza clásica frente a los templos.",
        pt: "Famoso festival anual de dança clássica frente aos templos."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Western Group of Temples", es: "Explorar el Grupo Occidental", pt: "Explorar o Western Group of Temples" },
      desc: {
        en: "Explore the main temple complex to admire the unique medieval architecture.",
        es: "Explora el complejo principal y admira la arquitectura medieval única.",
        pt: "Explore o complexo principal e admire a arquitetura medieval única."
      }
    },
    {
      name: { en: "Visit Kandariya Mahadeva Temple", es: "Visitar el Templo Kandariya Mahadeva", pt: "Visitar o Templo Kandariya Mahadeva" },
      desc: {
        en: "Visit the grandest temple of the complex dedicated to Lord Shiva.",
        es: "Visita el templo más grande dedicado al Señor Shiva.",
        pt: "Visite o maior templo dedicado ao Senhor Shiva."
      }
    },
    {
      name: { en: "Discover Jain Temples", es: "Descubrir los Templos Jainistas", pt: "Descobrir os Templos Jainistas" },
      desc: {
        en: "Explore the Eastern Group to see Parshvanatha and Adinatha Jain temples.",
        es: "Explora el Grupo Oriental con templos de Parshvanatha y Adinatha.",
        pt: "Explore o Grupo Oriental com templos de Parshvanatha e Adinatha."
      }
    },
    {
      name: { en: "Visit Archaeological Museum", es: "Visitar el Museo Arqueológico", pt: "Visitar o Museu Arqueológico" },
      desc: {
        en: "Discover historical sculptures and collections preserved by the ASI.",
        es: "Descubre esculturas históricas y colecciones del museo.",
        pt: "Descubra esculturas históricas e coleções do museu."
      }
    },
    {
      name: { en: "Attend Dance Festival", es: "Asistir al Festival de Danza", pt: "Assistir ao Festival de Dança" },
      desc: {
        en: "Attend the famous Khajuraho classical dance festival if your visit matches the schedule.",
        es: "Asiste al famoso festival de danza clásica si coincide con tu viaje.",
        pt: "Assista ao famoso festival de dança clássica se coincidir com sua viagem."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Khajuraho Airport operates regional flights. Khajuraho rail link connects with selected destinations, and road transit connects with Jhansi and Satna.",
      es: "Khajuraho es accesible por avión, tren y carretera.",
      pt: "Khajuraho é acessível por avião, trem e estrada."
    },
    nearestAirport: "Khajuraho Airport (HJR)",
    nearestRailway: "Khajuraho Railway Station (KURJ)",
    transportOptions: "Auto-rickshaws, Cycle-rickshaws, Taxis, Private Cars",
    distanceFromMajorCities: "Jhansi (175 km), Satna (115 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "10°C - 33°C",
    currency: "INR",
    localLanguage: "Bundeli, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe heritage village. Follow guidelines for conservation inside complexes.",
      es: "Pueblo histórico muy seguro.",
      pt: "Vila histórica muito segura."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Useful for short local transfers between temple groups.",
        es: "Útil para distancias cortas.",
        pt: "Útil para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Convenient for sightseeing routes and nearby nature excursions.",
        es: "Cómodo para visitas turísticas y traslados.",
        pt: "Conveniente para passeios e transfers."
      },
      recommended: true
    },
    {
      transportType: "Cycle-Rickshaw",
      title: { en: "Cycle-Rickshaw", es: "Bici-Rickshaw", pt: "Bici-riquixá" },
      desc: {
        en: "Traditional slow option for short local distances.",
        es: "Opción tradicional lenta para trayectos cortos.",
        pt: "Opção tradicional lenta para trajetos curtos."
      },
      recommended: false
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Recommended for day trips to Panna National Park and Raneh Falls.",
        es: "Recomendado para visitar Panna y cascadas.",
        pt: "Recomendado para visitar Panna e cachoeiras."
      },
      recommended: true
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Excellent way to explore the spacious garden layouts of individual temple groups.",
        es: "La mejor opción para recorrer los jardines de los templos.",
        pt: "A melhor opção para caminhar pelos jardins dos templos."
      },
      recommended: true
    }
  ],
  travelTips: [
    {
      title: { en: "Early Start", es: "Visitas Tempranas", pt: "Visitas Cedo" },
      desc: {
        en: "Start temple visits early to avoid heat.",
        es: "Comienza las visitas a los templos temprano para evitar el calor.",
        pt: "Comece as visitas aos templos cedo para evitar o calor."
      }
    },
    {
      title: { en: "Footwear", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Wear comfortable walking shoes.",
        es: "Usa calzado cómodo para caminar.",
        pt: "Use calçados confortáveis para caminhar."
      }
    },
    {
      title: { en: "Sun Protection", es: "Sol y Agua", pt: "Sol e Água" },
      desc: {
        en: "Carry water and sun protection.",
        es: "Lleva agua y protección solar.",
        pt: "Leve água e proteção solar."
      }
    },
    {
      title: { en: "Preservation", es: "Conservación", pt: "Conservação" },
      desc: {
        en: "Respect monument preservation rules.",
        es: "Respeta las reglas de conservación de los monumentos.",
        pt: "Respeite as regras de conservação dos monumentos."
      }
    },
    {
      title: { en: "Guides", es: "Guías Autorizados", pt: "Guias Credenciados" },
      desc: {
        en: "Hire an authorised guide for detailed historical context.",
        es: "Contrata un guía autorizado para conocer el contexto histórico.",
        pt: "Contrate um guia credenciado para conhecer o contexto histórico."
      }
    }
  ],
  hotels: [
    {
      name: "The Lalit Temple View Khajuraho",
      tier: "Luxury",
      desc: {
        en: "Premium hotel near the Western Group temples offering spacious rooms.",
        es: "Hotel premium cerca del grupo occidental de templos.",
        pt: "Hotel premium perto do grupo ocidental de templos."
      },
      image: ""
    },
    {
      name: "Ramada by Wyndham Khajuraho",
      tier: "Premium",
      desc: {
        en: "Comfortable resort-style stay with garden settings and pool.",
        es: "Alojamiento cómodo estilo resort con piscina.",
        pt: "Hospedagem confortável em estilo resort com piscina."
      },
      image: ""
    },
    {
      name: "Radisson Jass Hotel Khajuraho",
      tier: "Luxury",
      desc: {
        en: "Premium accommodation offering high-end amenities and dining.",
        es: "Alojamiento de categoría superior con excelentes servicios.",
        pt: "Hospedagem de categoria superior com excelentes serviços."
      },
      image: ""
    },
    {
      name: "Clarks Khajuraho",
      tier: "Premium",
      desc: {
        en: "Comfortable hotel surrounded by greenery and large lawns.",
        es: "Cómodo hotel rodeado de zonas verdes.",
        pt: "Hospedagem confortável cercada por áreas verdes."
      },
      image: ""
    },
    {
      name: "Hotel Chandela",
      tier: "Premium",
      desc: {
        en: "Convenient heritage destination accommodation with classic interiors.",
        es: "Alojamiento conveniente con estilo clásico.",
        pt: "Hospedagem conveniente com estilo clássico."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Dal Bafla, Poha, Bhutte Ka Kees, Sabudana Khichdi and Malpua.",
    es: "Pruebe Dal Bafla, Poha, Bhutte Ka Kees, Sabudana Khichdi y Malpua.",
    pt: "Prove Dal Bafla, Poha, Bhutte Ka Kees, Sabudana Khichdi e Malpua."
  },
  localFoodDishes: [
    {
      name: { en: "Dal Bafla", es: "Dal Bafla", pt: "Dal Bafla" },
      desc: {
        en: "Boiled and baked wheat flour dough balls served with thick spiced dal.",
        es: "Bolas de harina hervidas y horneadas servidas con dal especiado.",
        pt: "Bolas de farinha cozidas e assadas servidas com dal temperado."
      }
    },
    {
      name: { en: "Poha", es: "Poha", pt: "Poha" },
      desc: {
        en: "Flattened rice cooked with spices, onions and curry leaves.",
        es: "Arroz aplanado cocinado con especias y cebolla.",
        pt: "Arroz aplanado cozido com especiarias e cebola."
      }
    },
    {
      name: { en: "Bhutte Ka Kees", es: "Bhutte Ka Kees", pt: "Bhutte Ka Kees" },
      desc: {
        en: "Grated corn cooked with milk, spices, mustard seeds and coconut garnish.",
        es: "Maíz rallado cocinado con leche y especias.",
        pt: "Milho ralado cozido com leite e especiarias."
      }
    },
    {
      name: { en: "Sabudana Khichdi", es: "Sabudana Khichdi", pt: "Sabudana Khichdi" },
      desc: {
        en: "Sago pearls cooked with roasted peanuts, potatoes and green chillies.",
        es: "Plato de perlas de sagú cocinadas con patatas y cacahuetes.",
        pt: "Prato de sagu cozido com batatas e amendoim."
      }
    },
    {
      name: { en: "Malpua", es: "Malpua", pt: "Malpua" },
      desc: {
        en: "Traditional sweet pancakes fried and dipped in sugar syrup.",
        es: "Panqueques dulces tradicionales fritos y bañados en almíbar.",
        pt: "Panquecas doces tradicionais fritas e mergulhadas em calda."
      }
    }
  ],
  bestTime: {
    en: "October to March is the most comfortable period for exploring the temples and outdoor heritage sites.",
    es: "De octubre a marzo es el período más cómodo para explorar los templos y lugares históricos al aire libre.",
    pt: "De outubro a março é o período mais confortável para explorar os templos e locais históricos ao ar livre."
  },
  faqs: [
    {
      q: { en: "What is Khajuraho famous for?", es: "¿Por qué es famoso Khajuraho?", pt: "Pelo que Khajuraho é famoso?" },
      a: {
        en: "Khajuraho is famous for its intricately carved UNESCO-listed temples.",
        es: "Khajuraho es famoso por sus templos declarados Patrimonio Mundial de la UNESCO y sus intrincadas esculturas.",
        pt: "Khajuraho é famoso por seus templos reconhecidos pela UNESCO e suas esculturas detalhadas."
      }
    },
    {
      q: { en: "How many days are enough for Khajuraho?", es: "¿Cuántos days son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are suitable for exploring the major temple groups.",
        es: "2–3 días son adecuados para explorar los principales grupos de templos.",
        pt: "2–3 dias são adequados para explorar os principais grupos de templos."
      }
    },
    {
      q: { en: "Is Khajuraho suitable for families?", es: "¿Es adecuada para familias?", pt: "Khajuraho é adequada para famílias?" },
      a: {
        en: "Yes, families interested in history, architecture and culture can enjoy Khajuraho.",
        es: "Sí, las familias interesadas en historia, arquitectura y cultura pueden disfrutarlo.",
        pt: "Sim, famílias interessadas em história, arquitetura e cultura podem aproveitar o destino."
      }
    },
    {
      q: { en: "What is the best temple group to visit?", es: "¿Qué grupo de templos visitar?", pt: "Qual o melhor grupo de templos?" },
      a: {
        en: "The Western Group is the most famous and contains several of Khajuraho's major temples.",
        es: "El Grupo Occidental es el más famoso y contiene varios de los principales templos de Khajuraho.",
        pt: "O Grupo Ocidental é o mais famoso e reúne vários dos principais templos de Khajuraho."
      }
    },
    {
      q: { en: "Can Khajuraho be combined with Panna?", es: "¿Se puede combinar con Panna?", pt: "Pode ser combinada com Panna?" },
      a: {
        en: "Yes, Panna National Park is a popular addition to a Khajuraho itinerary.",
        es: "Sí, el Parque Nacional de Panna es una buena incorporación al itinerario.",
        pt: "Sim, o Parque Nacional de Panna é uma ótima adição ao roteiro."
      }
    }
  ]
};

// 4. UJJAIN DETAILS
const ujjainDetails = {
  tagline: {
    en: "Ujjain is one of India's most sacred ancient cities, famous for the Mahakaleshwar Jyotirlinga, spiritual traditions, temples, the Shipra River and the Kumbh Mela.",
    es: "Ujjain es una de las ciudades antiguas más sagradas de India, famosa por Mahakaleshwar Jyotirlinga, sus tradiciones espirituales, templos, el río Shipra y Kumbh Mela.",
    pt: "Ujjain é uma das cidades antigas mais sagradas da Índia, famosa pelo Mahakaleshwar Jyotirlinga, tradições espirituais, templos, rio Shipra e Kumbh Mela."
  },
  overview: {
    en: "Ujjain is an ancient pilgrimage city situated on the banks of the Shipra River and is one of India's most important Hindu religious centres. The city is home to the Mahakaleshwar Jyotirlinga and numerous historic temples. Ujjain is also one of the four traditional sites of the Kumbh Mela, making it a major destination for pilgrims. Visitors can explore Mahakaleshwar Temple, Kal Bhairav Temple, Ram Ghat, Harsiddhi Temple and other spiritual landmarks while experiencing the city's centuries-old religious traditions.",
    es: "Ujjain es una antigua ciudad de peregrinación situada a orillas del río Shipra y uno de los centros religiosos hindúes más importantes de India. La ciudad alberga el Mahakaleshwar Jyotirlinga y numerosos templos históricos. Ujjain también es uno de los cuatro lugares tradicionales del Kumbh Mela, convirtiéndola en un importante destino de peregrinación.",
    pt: "Ujjain é uma antiga cidade de peregrinação localizada às margens do rio Shipra e um dos mais importantes centros religiosos hindus da Índia. A cidade abriga o Mahakaleshwar Jyotirlinga e vários templos históricos. Ujjain também é um dos quatro locais tradicionais do Kumbh Mela, tornando-se um importante destino de peregrinação."
  },
  highlights: [
    {
      title: { en: "Mahakaleshwar Jyotirlinga", es: "Mahakaleshwar Jyotirlinga", pt: "Mahakaleshwar Jyotirlinga" },
      desc: {
        en: "Sacred temple housing one of the twelve self-manifested Jyotirlingas.",
        es: "Templo sagrado que alberga uno de los doce Jyotirlingas.",
        pt: "Templo sagrado que abriga um dos doze Jyotirlingas."
      }
    },
    {
      title: { en: "Ram Ghat", es: "Ram Ghat", pt: "Ram Ghat" },
      desc: {
        en: "Historic steps along the Shipra River for spiritual bathing and prayers.",
        es: "Riberas históricas del río Shipra para rezos y baños sagrados.",
        pt: "Margens históricas do rio Shipra para orações e banhos sagrados."
      }
    },
    {
      title: { en: "Harsiddhi Temple", es: "Templo Harsiddhi", pt: "Templo Harsiddhi" },
      desc: {
        en: "Famous ancient Shakti Peeth temple dedicated to Goddess Harsiddhi.",
        es: "Famoso templo clásico dedicado a la Diosa Harsiddhi.",
        pt: "Famoso templo clássico dedicado à Deusa Harsiddhi."
      }
    },
    {
      title: { en: "Kal Bhairav Temple", es: "Templo Kal Bhairav", pt: "Templo Kal Bhairav" },
      desc: {
        en: "Historic Shiva temple known for unique traditional offerings.",
        es: "Templo histórico de Shiva conocido por sus ofrendas especiales.",
        pt: "Templo histórico de Shiva conhecido por suas oferendas especiais."
      }
    },
    {
      title: { en: "Shipra River", es: "Río Shipra", pt: "Rio Shipra" },
      desc: {
        en: "Holy river hosting the Kumbh Mela festivals and evening prayers.",
        es: "Río sagrado donde se celebra el Kumbh Mela.",
        pt: "Rio sagrado onde se celebra o Kumbh Mela."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Visit Mahakaleshwar Temple", es: "Visitar el Templo Mahakaleshwar", pt: "Visitar o Templo Mahakaleshwar" },
      desc: {
        en: "Visit the sacred temple to see the Jyotirlinga and experience traditional prayers.",
        es: "Visita el templo sagrado y vive las oraciones tradicionales.",
        pt: "Visite o templo sagrado e vivencie as orações tradicionais."
      }
    },
    {
      name: { en: "Spiritual at Ram Ghat", es: "Actividades en Ram Ghat", pt: "Atividades no Ram Ghat" },
      desc: {
        en: "Attend spiritual prayers and evening aarti steps along the Shipra River.",
        es: "Asiste a rezos y la aarti al atardecer en Ram Ghat.",
        pt: "Assista a orações e à aarti ao entardecer no Ram Ghat."
      }
    },
    {
      name: { en: "Visit Harsiddhi Temple", es: "Visitar el Templo Harsiddhi", pt: "Visitar o Templo Harsiddhi" },
      desc: {
        en: "Explore the ancient temple complex, especially beautiful during evening lightings.",
        es: "Explora el templo clásico que destaca con la iluminación nocturna.",
        pt: "Explore o templo clássico que se destaca com a iluminação noturna."
      }
    },
    {
      name: { en: "Explore Kal Bhairav Temple", es: "Explorar el Templo Kal Bhairav", pt: "Explorar o Templo Kal Bhairav" },
      desc: {
        en: "Visit this unique temple and learn about traditional local beliefs.",
        es: "Visita este templo singular y conoce las creencias locales.",
        pt: "Visite este templo singular e conheça as crenças locais."
      }
    },
    {
      name: { en: "Evening Temple Atmosphere", es: "Ambiente Nocturno de Templos", pt: "Atmosfera Noturna dos Templos" },
      desc: {
        en: "Experience the spiritual and peaceful atmosphere of the city's evening temples.",
        es: "Vive la atmósfera espiritual y pacífica de los templos al atardecer.",
        pt: "Vivencie a atmosfera espiritual e pacífica dos templos ao anoitecer."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Indore Airport (55 km away) provides major air connectivity. Ujjain rail junction links with extensive trains, and road transits connect with Indore and Bhopal.",
      es: "Ujjain es accesible por el aeropuerto de Indore, tren o carretera.",
      pt: "Ujjain é acessível pelo aeroporto de Indore, trem ou estrada."
    },
    nearestAirport: "Devi Ahilyabai Holkar Airport (IDR) in Indore",
    nearestRailway: "Ujjain Junction (UJN)",
    transportOptions: "Auto-rickshaws, Taxis, Buses",
    distanceFromMajorCities: "Indore (55 km), Bhopal (190 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "14°C - 34°C",
    currency: "INR",
    localLanguage: "Malvi, Hindi & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Very safe spiritual center. Follow rules at bathing pools and crowded temple queues.",
      es: "Centro espiritual muy seguro.",
      pt: "Centro espiritual muito seguro."
    }
  },
  gettingAround: [
    {
      transportType: "Auto-Rickshaw",
      title: { en: "Auto-Rickshaw", es: "Auto-Rickshaw", pt: "Autorriquixá" },
      desc: {
        en: "Convenient for short local routes between temples and ghats.",
        es: "Los rickshaws son útiles para distancias cortas.",
        pt: "Autorriquixás são úteis para trajetos curtos."
      },
      recommended: true
    },
    {
      transportType: "Local Taxi",
      title: { en: "Local Taxi", es: "Taxi Local", pt: "Táxi Local" },
      desc: {
        en: "Convenient for sightseeing routes around the outskirts.",
        es: "Cómodo para visitas turísticas locales.",
        pt: "Conveniente para passeios turísticos locais."
      },
      recommended: true
    },
    {
      transportType: "App Taxi",
      title: { en: "App Taxi", es: "Taxis por Aplicación", pt: "Táxis por Aplicativo" },
      desc: {
        en: "App-based cabs where available inside city limits.",
        es: "Taxis por aplicación cómodos.",
        pt: "Táxis por aplicativo confortáveis."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "Local municipal bus service connecting key spots.",
        es: "Autobuses locales que cubren la ciudad.",
        pt: "Ônibus locais que cobrem a cidade."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Excellent way to explore central temple corridors and riverside ghat steps.",
        es: "Ideal para recorrer los templos y los ghats.",
        pt: "Ideal para explorar os templos e os ghats."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Temple Rules", es: "Normas de Templos", pt: "Regras dos Templos" },
      desc: {
        en: "Check official temple arrangements before visiting.",
        es: "Verifica las normas del templo antes de tu visita.",
        pt: "Verifique as regras do templo antes de sua visita."
      }
    },
    {
      title: { en: "Dress Code", es: "Vestimenta", pt: "Vestimenta" },
      desc: {
        en: "Dress respectfully at religious sites.",
        es: "Viste con respeto en los lugares religiosos.",
        pt: "Vista-se com respeito nos locais religiosos."
      }
    },
    {
      title: { en: "Festival Crowds", es: "Multitudes", pt: "Multidões" },
      desc: {
        en: "Expect crowds during festivals and major religious occasions.",
        es: "Anticipa multitudes durante grandes festivales.",
        pt: "Antecipe multidões durante grandes festivais."
      }
    },
    {
      title: { en: "Early Start", es: "Visitas Tempranas", pt: "Passeios Cedo" },
      desc: {
        en: "Start temple visits early in the day.",
        es: "Comienza las visitas a los templos temprano.",
        pt: "Comece os passeios aos templos cedo."
      }
    },
    {
      title: { en: "Queue Buffer", es: "Tiempo para Filas", pt: "Tempo de Fila" },
      desc: {
        en: "Keep extra time for queues and security procedures.",
        es: "Reserva tiempo adicional por las filas y seguridad.",
        pt: "Reserve um tempo extra devido a filas e segurança."
      }
    }
  ],
  hotels: [
    {
      name: "Rudraksh Club & Resort",
      tier: "Premium",
      desc: {
        en: "Comfortable resort-style accommodation along the Shipra River layout.",
        es: "Alojamiento cómodo estilo resort junto al río.",
        pt: "Hospedagem confortável em estilo resort à beira do rio."
      },
      image: ""
    },
    {
      name: "Anjushree Hotel",
      tier: "Premium",
      desc: {
        en: "Premium city stay offering modern rooms, dining and pool.",
        es: "Alojamiento urbano premium con servicios modernos.",
        pt: "Hospedagem urbana premium com serviços modernos."
      },
      image: ""
    },
    {
      name: "Hotel Mittal Paradise",
      tier: "Mid-range",
      desc: {
        en: "Convenient accommodation for pilgrims located close to temples.",
        es: "Alojamiento conveniente para peregrinos cerca de los templos.",
        pt: "Hospedagem conveniente para peregrinos perto dos templos."
      },
      image: ""
    },
    {
      name: "Hotel Abika Elite",
      tier: "Premium",
      desc: {
        en: "Modern city hotel with comfortable rooms and travel desk services.",
        es: "Hotel moderno urbano con cómodas habitaciones.",
        pt: "Hotel moderno urbano com quartos confortáveis."
      },
      image: ""
    },
    {
      name: "Hotel Atharva",
      tier: "Mid-range",
      desc: {
        en: "Practical accommodation near major attractions and junctions.",
        es: "Alojamiento práctico cerca de los monumentos principales.",
        pt: "Hospedagem prática perto dos principais monumentos."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Poha, Jalebi, Sabudana Khichdi, Dal Bafla and Kachori.",
    es: "Pruebe Poha, Jalebi, Sabudana Khichdi, Dal Bafla y Kachori.",
    pt: "Prove Poha, Jalebi, Sabudana Khichdi, Dal Bafla e Kachori."
  },
  localFoodDishes: [
    {
      name: { en: "Poha", es: "Poha", pt: "Poha" },
      desc: {
        en: "Flattened rice cooked with spices, mustard seeds and curry leaves.",
        es: "Arroz aplanado cocinado con especias y cebolla.",
        pt: "Arroz aplanado cozido com especiarias e cebola."
      }
    },
    {
      name: { en: "Jalebi", es: "Jalebi", pt: "Jalebi" },
      desc: {
        en: "Sweet crispy deep-fried flour spirals dipped in sugar syrup.",
        es: "Espirales crujientes fritas y bañadas en almíbar dulce.",
        pt: "Espirais crocantes fritas e mergulhadas em calda doce."
      }
    },
    {
      name: { en: "Sabudana Khichdi", es: "Sabudana Khichdi", pt: "Sabudana Khichdi" },
      desc: {
        en: "Sago pearls cooked with peanuts, potatoes and green chillies.",
        es: "Plato de perlas de sagú cocinadas con patatas y cacahuetes.",
        pt: "Prato de sagu cozido com batatas e amendoim."
      }
    },
    {
      name: { en: "Dal Bafla", es: "Dal Bafla", pt: "Dal Bafla" },
      desc: {
        en: "Boiled and baked wheat dough balls served with thick spiced lentil dal.",
        es: "Bolas de harina horneadas servidas con dal de lentejas.",
        pt: "Bolas de farinha assadas servidas com dal de lentilhas."
      }
    },
    {
      name: { en: "Kachori", es: "Kachori", pt: "Kachori" },
      desc: {
        en: "Crispy fried pastry filled with spiced lentils or onion mixture.",
        es: "Pastel crujiente relleno de lentejas o cebolla especiada.",
        pt: "Pastel crocante recheado de lentilhas ou cebola temperada."
      }
    }
  ],
  bestTime: {
    en: "October to March is generally comfortable for sightseeing and pilgrimage. Major religious festivals can bring very large crowds, so plan accordingly.",
    es: "De octubre a marzo suele ser cómodo para hacer turismo y peregrinación. Los grandes festivales religiosos pueden atraer multitudes, por lo que conviene planificar con anticipación.",
    pt: "De outubro a março geralmente é confortável para passeios e peregrinação. Grandes festivais religiosos podem atrair multidões, por isso é importante planejar com antecedência."
  },
  faqs: [
    {
      q: { en: "What is Ujjain famous for?", es: "¿Por qué es famoso Ujjain?", pt: "Pelo que Ujjain é famoso?" },
      a: {
        en: "Ujjain is famous for Mahakaleshwar Jyotirlinga, ancient temples, Ram Ghat and the Kumbh Mela.",
        es: "Ujjain es famoso por Mahakaleshwar Jyotirlinga, sus antiguos templos, Ram Ghat y Kumbh Mela.",
        pt: "Ujjain é famoso pelo Mahakaleshwar Jyotirlinga, antigos templos, Ram Ghat e Kumbh Mela."
      }
    },
    {
      q: { en: "How many days are enough for Ujjain?", es: "¿Cuántos days son suficientes?", pt: "Quantos dias são suficientes?" },
      a: {
        en: "2–3 days are generally enough for the major temples and spiritual attractions.",
        es: "2–3 días suelen ser suficientes para conocer los principales templos y lugares espirituales.",
        pt: "2–3 dias geralmente são suficientes para conhecer os principais templos e locais espirituais."
      }
    },
    {
      q: { en: "Is Ujjain good for families?", es: "¿Es adecuada para familias?", pt: "Ujjain é adequada para famílias?" },
      a: {
        en: "Yes, families can visit temples, ghats and cultural attractions while experiencing the city's spiritual heritage.",
        es: "Sí, las familias pueden visitar templos, ghats y lugares culturales.",
        pt: "Sim, famílias podem visitar templos, ghats e atrações culturais."
      }
    },
    {
      q: { en: "When is Ujjain most crowded?", es: "¿Cuándo está más concurrida?", pt: "Quando fica mais movimentada?" },
      a: {
        en: "The city becomes especially crowded during major Hindu festivals and important pilgrimage periods.",
        es: "La ciudad está especialmente concurrida durante grandes festivales hindúes y períodos importantes de peregrinación.",
        pt: "A cidade fica especialmente movimentada durante grandes festivais hindus e períodos importantes de peregrinação."
      }
    },
    {
      q: { en: "Can Ujjain and Indore be visited together?", es: "¿Se pueden visitar Ujjain e Indore juntos?", pt: "É possível visitar Ujjain e Indore juntos?" },
      a: {
        en: "Yes, Ujjain and Indore are well suited to a combined Madhya Pradesh itinerary.",
        es: "Sí, ambos destinos se combinan fácilmente en un itinerario por Madhya Pradesh.",
        pt: "Sim, os dois destinos combinam muito bem em um roteiro por Madhya Pradesh."
      }
    }
  ]
};

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  const mpIdx = states.findIndex(s => s.slug === "madhya-pradesh");
  if (mpIdx !== -1) {
    console.log("Updating Madhya Pradesh cities in local file...");
    const mpState = states[mpIdx];
    mpState.cities = mpState.cities || [];
    
    // Update function helper
    const updateCity = (slug, details) => {
      const cityIdx = mpState.cities.findIndex(c => c.slug === slug);
      if (cityIdx !== -1) {
        mpState.cities[cityIdx] = { ...mpState.cities[cityIdx], ...details };
        console.log(`Updated city details: ${slug}`);
      } else {
        console.error(`City slug '${slug}' not found under Madhya Pradesh!`);
      }
    };

    updateCity("bhopal", bhopalDetails);
    updateCity("indore", indoreDetails);
    updateCity("khajuraho", khajurahoDetails);
    updateCity("ujjain", ujjainDetails);

    states[mpIdx] = mpState;
  } else {
    console.error("Madhya Pradesh state not found in states.json!");
  }

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for Madhya Pradesh cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const docRef = doc(firestore, "states", "madhya-pradesh");
    setDoc(docRef, states[mpIdx]).then(() => {
      console.log("🚀 SUCCESS: Remote Firestore 'madhya-pradesh' document successfully updated!");
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
