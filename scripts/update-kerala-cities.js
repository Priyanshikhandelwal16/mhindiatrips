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

// Munnar Details
const munnarDetails = {
  overview: {
    en: "Munnar is one of Kerala's most beautiful hill destinations, surrounded by rolling tea plantations, mist-covered mountains, lush forests and cool mountain air. Located in the Western Ghats, the region is known for its scenic landscapes, tea gardens, waterfalls and rich biodiversity. Munnar is ideal for travellers looking for a peaceful escape, romantic getaway, nature adventure or a closer connection with Kerala's highland culture.",
    es: "Munnar es uno de los destinos de montaña más hermosos de Kerala, rodeado de plantaciones de té, montañas cubiertas de niebla, bosques verdes y un agradable clima de montaña. Situado en los Ghats Occidentales, es conocido por sus paisajes, jardines de té, cascadas y rica biodiversidad. Munnar es ideal para quienes buscan una escapada tranquila, una experiencia romántica, aventura en la naturaleza o una conexión más cercana con la cultura de las tierras altas de Kerala.",
    pt: "Munnar é um dos destinos de montanha mais bonitos de Kerala, cercado por plantações de chá, montanhas cobertas de neblina, florestas verdes e um agradável clima de montanha. Localizada nos Gates Ocidentais, a região é conhecida por suas paisagens, jardins de chá, cachoeiras e rica biodiversidade. Munnar é ideal para quem procura uma escapada tranquila, uma viagem romântica, aventura na natureza ou uma conexão mais próxima com a cultura das montanhas de Kerala."
  },
  highlights: [
    {
      title: { en: "Endless Tea Plantations", es: "Plantaciones de Té Infinitas", pt: "Plantações de Chá Infinitas" },
      desc: {
        en: "Munnar's rolling tea estates create some of Kerala's most recognisable landscapes, with green hills stretching across the horizon.",
        es: "Las extensas plantaciones de té de Munnar crean algunos de los paisajes más reconocibles de Kerala, con colinas verdes que se extienden hasta el horizonte.",
        pt: "As extensas plantações de chá de Munnar criam algumas das paisagens mais características de Kerala, com colinas verdes que se estendem até o horizonte."
      }
    },
    {
      title: { en: "Misty Western Ghats", es: "Ghats Occidentales Cubiertos de Niebla", pt: "Gates Ocidentais Cobertos de Neblina" },
      desc: {
        en: "Experience peaceful mountain scenery, cool temperatures and mist drifting across the hills, especially during the early morning.",
        es: "Disfruta de paisajes montañosos, temperaturas frescas y niebla recorriendo las colinas, especialmente durante las primeras horas de la mañana.",
        pt: "Aprecie paisagens montanhosas, temperaturas agradáveis e neblina cobrindo as colinas, especialmente nas primeiras horas da manhã."
      }
    },
    {
      title: { en: "Eravikulam National Park", es: "Parque Nacional Eravikulam", pt: "Parque Nacional Eravikulam" },
      desc: {
        en: "Explore one of Kerala's important protected areas, known for its mountain ecosystem, grasslands and rich wildlife.",
        es: "Explora una de las importantes áreas protegidas de Kerala, conocida por sus ecosistemas de montaña, praderas y rica fauna.",
        pt: "Explore uma das importantes áreas protegidas de Kerala, conhecida por seus ecossistemas montanhosos, campos e rica vida selvagem."
      }
    },
    {
      title: { en: "Mattupetty Dam & Landscapes", es: "Mattupetty y Paisajes de Montaña", pt: "Mattupetty e Paisagens de Montanha" },
      desc: {
        en: "Discover Mattupetty's lake, surrounding hills and scenic viewpoints, offering excellent opportunities for photography and relaxation.",
        es: "Descubre el lago Mattupetty, las colinas circundantes y sus miradores, ideales para la fotografía y la relajación.",
        pt: "Descubra o Lago Mattupetty, as colinas ao redor e seus mirantes, perfeitos para fotografia e momentos de relaxamento."
      }
    },
    {
      title: { en: "Waterfalls & Natural Beauty", es: "Cascadas y Belleza Natural", pt: "Cachoeiras e Beleza Natural" },
      desc: {
        en: "Explore waterfalls, forests and peaceful countryside around Munnar for a refreshing escape into nature.",
        es: "Explora cascadas, bosques y tranquilos paisajes rurales alrededor de Munnar para disfrutar de una escapada refrescante en la naturaleza.",
        pt: "Explore cachoeiras, florestas e paisagens rurais tranquilas ao redor de Munnar para uma experiência refrescante em meio à natureza."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Explore Tea Gardens", es: "Explorar Jardines de Té", pt: "Explorar Jardins de Chá" },
      desc: {
        en: "Walk through scenic tea plantations and learn about Kerala's tea-growing traditions.",
        es: "Camina por las pintorescas plantaciones de té y descubre las tradiciones del cultivo de té en Kerala.",
        pt: "Caminhe pelas belas plantações de chá e conheça as tradições de cultivo de chá de Kerala."
      }
    },
    {
      name: { en: "Visit Eravikulam National Park", es: "Visitar el Parque Nacional Eravikulam", pt: "Visitar o Parque Nacional Eravikulam" },
      desc: {
        en: "Explore the mountain landscapes and biodiversity of this protected area near Munnar.",
        es: "Explora los paisajes montañosos y la biodiversidad de esta área protegida cerca de Munnar.",
        pt: "Explore as paisagens montanhosas e a biodiversidade desta área protegida perto de Munnar."
      }
    },
    {
      name: { en: "Visit Mattupetty Dam", es: "Visitar la Presa de Mattupetty", pt: "Visitar a Represa de Mattupetty" },
      desc: {
        en: "Enjoy the lake, mountain scenery and peaceful surroundings around Mattupetty Dam.",
        es: "Disfruta del lago, las montañas y el entorno tranquilo de la presa de Mattupetty.",
        pt: "Aprecie o lago, as montanhas e o ambiente tranquilo ao redor da Represa de Mattupetty."
      }
    },
    {
      name: { en: "Explore Tea Museum", es: "Explorar el Museo del Té", pt: "Explorar o Museu do Chá" },
      desc: {
        en: "Learn about the history, production and traditions of tea in the Munnar region.",
        es: "Conoce la historia, producción y tradiciones del té en la región de Munnar.",
        pt: "Conheça a história, produção e tradições do chá na região de Munnar."
      }
    },
    {
      name: { en: "Visit Top Station", es: "Visitar Top Station", pt: "Visitar Top Station" },
      desc: {
        en: "Enjoy panoramic views across the Western Ghats from one of Munnar's most scenic viewpoints.",
        es: "Disfruta de vistas panorámicas de los Ghats Occidentales desde uno de los miradores más espectaculares de Munnar.",
        pt: "Aprecie vistas panorâmicas dos Gates Ocidentais a partir de um dos mirantes mais bonitos de Munnar."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Tea Plantation Experience", es: "Experiencia en las Plantaciones de Té", pt: "Experiência nas Plantações de Chá" },
      desc: {
        en: "Walk through tea estates and discover how tea is cultivated and processed while enjoying spectacular mountain views.",
        es: "Recorre las plantaciones de té y descubre cómo se cultiva y procesa el té mientras disfrutas de impresionantes vistas de las montañas.",
        pt: "Caminhe pelas plantações de chá e descubra como o chá é cultivado e processado enquanto aprecia as montanhas."
      }
    },
    {
      title: { en: "Romantic Mountain Escape", es: "Escapada Romántica a la Montaña", pt: "Escapada Romântica na Montanha" },
      desc: {
        en: "Enjoy misty mornings, scenic viewpoints, cosy stays and peaceful landscapes for a memorable couple's getaway.",
        es: "Disfruta de mañanas con niebla, miradores, alojamientos acogedores y paisajes tranquilos en una escapada romántica.",
        pt: "Desfrute de manhãs com neblina, mirantes, hospedagens aconchegantes e paisagens tranquilas em uma viagem romântica."
      }
    },
    {
      title: { en: "Nature & Wildlife Experience", es: "Experiencia de Naturaleza y Vida Silvestre", pt: "Experiência de Natureza e Vida Selvagem" },
      desc: {
        en: "Discover Munnar's forests, mountain ecosystems and diverse wildlife through guided nature excursions.",
        es: "Descubre los bosques, ecosistemas montañosos y fauna de Munnar mediante excursiones guiadas por la naturaleza.",
        pt: "Descubra as florestas, ecossistemas montanhosos e vida selvagem de Munnar através de excursões guiadas."
      }
    },
    {
      title: { en: "Kerala Wellness Experience", es: "Experiencia de Bienestar de Kerala", pt: "Experiência de Bem-estar de Kerala" },
      desc: {
        en: "Combine Munnar's peaceful mountain environment with Ayurvedic wellness, relaxation and traditional Kerala therapies.",
        es: "Combina el tranquilo entorno montañoso de Munnar con bienestar ayurvédico, relajación y terapias tradicionales de Kerala.",
        pt: "Combine o ambiente tranquilo das montanhas de Munnar com bem-estar ayurvédico, relaxamento e terapias tradicionais de Kerala."
      }
    },
    {
      title: { en: "Mountain Photography Experience", es: "Experiencia de Fotografía de Montaña", pt: "Experiência Fotográfica na Montanha" },
      desc: {
        en: "Capture tea plantations, misty valleys, waterfalls and dramatic Western Ghats landscapes.",
        es: "Fotografía plantaciones de té, valles cubiertos de niebla, cascadas y espectaculares paisajes de los Ghats Occidentales.",
        pt: "Fotografe plantações de chá, vales cobertos de neblina, cachoeiras e paisagens dramáticas dos Gates Ocidentais."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Munnar is a hill station reached via road transfer from Cochin Airport, taking around 4 hours.",
      es: "El transporte por carretera desde el aeropuerto de Cochin es la opción más práctica.",
      pt: "O transporte rodoviário a partir do aeroporto de Cochin é a maneira mais prática."
    },
    nearestAirport: "Cochin International Airport (COK) / Madurai Airport (IXM)",
    nearestRailway: "Aluva Railway Station / Ernakulam Junction (ERS)",
    transportOptions: "Private Cars, Taxis, Guided Tour Vehicles, Local Buses",
    distanceFromMajorCities: "Kochi (130 km), Madurai (160 km)",
    recommendedStay: "2-3 Days",
    avgTemp: "15°C - 25°C",
    currency: "INR",
    localLanguage: "Malayalam, Tamil & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Highly safe hill town. Take care on winding ghat roads.",
      es: "Ciudad de montaña muy segura. Conduzca con precaución.",
      pt: "Cidade de montanha muito segura. Conduza com cuidado."
    }
  },
  gettingAround: [
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "The most comfortable option for exploring Munnar and nearby attractions at your own pace.",
        es: "La opción más cómoda para explorar Munnar y sus atracciones a su propio ritmo.",
        pt: "A opção mais confortável para explorar Munnar e suas atrações no seu próprio ritmo."
      },
      recommended: true
    },
    {
      transportType: "Taxi",
      title: { en: "Taxi", es: "Taxi", pt: "Táxi" },
      desc: {
        en: "Convenient for point-to-point sightseeing and day excursions.",
        es: "Cómodo para visitas y excursiones de un día.",
        pt: "Conveniente para passeios e excursões de um dia."
      },
      recommended: true
    },
    {
      transportType: "Guided Tour Vehicle",
      title: { en: "Guided Tour Vehicle", es: "Vehículo de Excursión Guiada", pt: "Veículo de Excursão Guiada" },
      desc: {
        en: "Useful for travellers who want organised sightseeing with local guidance.",
        es: "Útil para viajeros que desean visitas organizadas con guía local.",
        pt: "Útil para viajantes que desejam visitas organizadas com guia local."
      },
      recommended: true
    },
    {
      transportType: "Local Bus",
      title: { en: "Local Bus", es: "Autobús Local", pt: "Ônibus Local" },
      desc: {
        en: "An economical option for travelling between Munnar and nearby towns.",
        es: "Una opción económica para viajar entre ciudades.",
        pt: "Uma opção econômica para viajar entre cidades."
      },
      recommended: false
    },
    {
      transportType: "Walking",
      title: { en: "Walking", es: "Caminar", pt: "Caminhada" },
      desc: {
        en: "Ideal for exploring tea plantations, local markets and selected attractions around central Munnar.",
        es: "Ideal para explorar las plantaciones de té, mercados locales y el centro.",
        pt: "Ideal para explorar plantações de chá, mercados locais e a região central."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Warm Clothing", es: "Ropa de Abrigo", pt: "Roupas Quentes" },
      desc: {
        en: "Carry light warm clothing because temperatures can become cool, especially in the mornings and evenings.",
        es: "Llevar ropa ligera de abrigo, ya que las temperaturas pueden bajar por la mañana y por la noche.",
        pt: "Leve roupas leves e quentes, pois as temperaturas podem cair pela manhã e à noite."
      }
    },
    {
      title: { en: "Comfortable Shoes", es: "Calzado Cómodo", pt: "Calçados Confortáveis" },
      desc: {
        en: "Wear comfortable shoes for tea plantations, viewpoints and nature walks.",
        es: "Usa calzado cómodo para plantaciones de té, miradores y caminatas.",
        pt: "Use calçados confortáveis para plantações de chá, mirantes e caminhadas."
      }
    },
    {
      title: { en: "Rain Protection", es: "Protección de Lluvia", pt: "Proteção contra Chuva" },
      desc: {
        en: "Carry rain protection during monsoon and changing-weather periods.",
        es: "Lleva protección para la lluvia durante el monzón y clima cambiante.",
        pt: "Leve proteção contra a chuva durante o período de monções e mudanças climáticas."
      }
    },
    {
      title: { en: "Early Sightseeing", es: "Visitas Tempranas", pt: "Passeios Cedo" },
      desc: {
        en: "Start sightseeing early for clearer mountain views and fewer crowds.",
        es: "Comienza las visitas temprano para disfrutar de mejores vistas y menos visitantes.",
        pt: "Comece os passeios cedo para ter melhores vistas das montanhas e menos multidões."
      }
    },
    {
      title: { en: "Respect Wildlife", es: "Respetar la Fauna", pt: "Respeite a Vida Selvagem" },
      desc: {
        en: "Respect wildlife and avoid disturbing animals or leaving waste in natural areas.",
        es: "Respeta la fauna y evita molestar a los animales o dejar residuos.",
        pt: "Respeite a vida selvagem e evite perturbar os animais ou deixar resíduos."
      }
    }
  ],
  hotels: [
    {
      name: "Luxury Mountain Resorts",
      tier: "Luxury",
      desc: {
        en: "Ideal for travellers seeking panoramic views, premium facilities and peaceful surroundings.",
        es: "Resorts de montaña de lujo — Para vistas panorámicas y servicios premium.",
        pt: "Resorts de montanha de luxo — Para vistas panorâmicas e serviços premium."
      },
      image: ""
    },
    {
      name: "Tea Estate Resorts",
      tier: "Luxury",
      desc: {
        en: "Stay among working tea plantations for an immersive Munnar experience.",
        es: "Resorts en plantaciones de té — Para una experiencia inmersiva.",
        pt: "Resorts em plantações de chá — Para uma experiência imersiva."
      },
      image: ""
    },
    {
      name: "Boutique Mountain Hotels",
      tier: "Boutique",
      desc: {
        en: "Comfortable option for couples and travellers looking for stylish and peaceful accommodation.",
        es: "Hoteles boutique de montaña — Ideales para parejas.",
        pt: "Hotéis boutique de montanha — Ideais para casais."
      },
      image: ""
    },
    {
      name: "Family-Friendly Hotels",
      tier: "Mid-range",
      desc: {
        en: "Convenient properties offering comfortable rooms and easy access to major attractions.",
        es: "Hoteles para familias — Cómodos y bien ubicados.",
        pt: "Hotéis para famílias — Confortáveis e bem localizados."
      },
      image: ""
    },
    {
      name: "Nature Retreats",
      tier: "Boutique",
      desc: {
        en: "Peaceful stays surrounded by forests, plantations and mountain landscapes.",
        es: "Retiros en la naturaleza — Rodeados de bosques y paisajes montañosos.",
        pt: "Refúgios na natureza — Cercados por florestas e paisagens montanhosas."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Appam with Vegetable Stew, Puttu & Kadala Curry, Kerala Sadya, Kerala Parotta and Pazham Pori.",
    es: "Pruebe Appam con estofado de verduras, Puttu con curry de garbanzos, Sadya de Kerala y Pazham Pori.",
    pt: "Prove Appam com ensopado de vegetais, Puttu com curry de grão-de-bico, Sadya de Kerala e Pazham Pori."
  },
  localFoodDishes: [
    {
      name: { en: "Appam with Vegetable Stew", es: "Appam con Estofado de Verduras", pt: "Appam com Ensopado de Vegetais" },
      desc: {
        en: "Soft rice pancakes served with a creamy coconut-based vegetable stew.",
        es: "Panqueques suaves de arroz servidos con un cremoso estofado de verduras con coco.",
        pt: "Panqueques macias de arroz servidas com um cremoso ensopado de vegetais com coco."
      }
    },
    {
      name: { en: "Puttu & Kadala Curry", es: "Puttu y Kadala Curry", pt: "Puttu e Kadala Curry" },
      desc: {
        en: "Steamed rice and coconut cylinders served with a flavourful black chickpea curry.",
        es: "Cilindros de arroz y coco al vapor acompañados de un sabroso curry de garbanzos negros.",
        pt: "Cilindros de arroz e coco cozidos no vapor servidos com um saboroso curry de grão-de-bico preto."
      }
    },
    {
      name: { en: "Kerala Sadya", es: "Kerala Sadya", pt: "Kerala Sadya" },
      desc: {
        en: "A traditional vegetarian feast served with rice, curries, vegetables, pickles and desserts.",
        es: "Un banquete vegetariano tradicional servido con arroz, currys, verduras, encurtidos y postres.",
        pt: "Um tradicional banquete vegetariano servido com arroz, curries, vegetais, picles e sobremesas."
      }
    },
    {
      name: { en: "Kerala Parotta with Curry", es: "Kerala Parotta con Curry", pt: "Kerala Parotta com Curry" },
      desc: {
        en: "Layered flatbread served with flavorful vegetable or meat-based Kerala curries.",
        es: "Pan plano en capas servido con sabrosos currys de verduras o carne de Kerala.",
        pt: "Pão achatado em camadas servido com saborosos curries de vegetais ou carne de Kerala."
      }
    },
    {
      name: { en: "Pazham Pori", es: "Pazham Pori", pt: "Pazham Pori" },
      desc: {
        en: "Crispy banana fritters, a popular Kerala snack often enjoyed with tea.",
        es: "Buñuelos crujientes de plátano, un popular aperitivo de Kerala que suele acompañarse con té.",
        pt: "Bolinhos crocantes de banana, um popular lanche de Kerala geralmente acompanhado de chá."
      }
    }
  ]
};

// Alleppey Details
const alleppeyDetails = {
  overview: {
    en: "Alleppey, officially known as Alappuzha, is Kerala's iconic backwater destination, famous for its peaceful waterways, lush paddy fields, coconut palms and traditional houseboat experiences. Often described as the gateway to Kerala's backwaters, Alleppey offers a slower and more immersive way to experience the state's natural beauty and village life. A stay on a traditional houseboat allows travellers to glide through narrow canals, watch everyday life along the waterways and enjoy freshly prepared Kerala cuisine surrounded by tropical landscapes.",
    es: "Alleppey, oficialmente conocida como Alappuzha, es el destino más emblemático de los backwaters de Kerala, famoso por sus tranquilos canales, arrozales verdes, palmeras de coco y tradicionales casas flotantes. Considerada una puerta de entrada a los backwaters de Kerala, ofrece una forma relajada e inmersiva de descubrir la naturaleza y la vida rural del estado.",
    pt: "Alleppey, oficialmente conhecida como Alappuzha, é o destino mais famoso dos backwaters de Kerala, conhecido por seus tranquilos canais, campos de arroz, coqueiros e tradicionais casas-barco. Considerada uma porta de entrada para os backwaters de Kerala, oferece uma maneira tranquila e imersiva de conhecer a natureza e a vida rural do estado."
  },
  highlights: [
    {
      title: { en: "Kerala Houseboat Experience", es: "Experiencia en Casa Flotante", pt: "Experiência de Houseboat em Kerala" },
      desc: {
        en: "Stay aboard a traditional Kettuvallam houseboat and cruise through Kerala's beautiful backwaters.",
        es: "Alójate en una tradicional casa flotante Kettuvallam y navega por los hermosos backwaters de Kerala.",
        pt: "Hospede-se em uma tradicional casa-barco Kettuvallam e navegue pelos belos backwaters de Kerala."
      }
    },
    {
      title: { en: "Scenic Backwaters", es: "Backwaters Pintorescos", pt: "Canais e Lagoas dos Backwaters" },
      desc: {
        en: "Cruise through peaceful canals surrounded by coconut palms, villages, rice fields and tropical greenery.",
        es: "Navega por tranquilos canales rodeados de palmeras, pueblos, arrozales y vegetación tropical.",
        pt: "Navegue por canais tranquilos cercados por coqueiros, vilarejos, campos de arroz e vegetação tropical."
      }
    },
    {
      title: { en: "Traditional Village Life", es: "Vida Rural Tradicional", pt: "Vida Rural Tradicional" },
      desc: {
        en: "Observe local life along the waterways, including fishing, farming, traditional homes and daily village activities.",
        es: "Observa la vida local a lo largo de los canales, incluyendo pesca, agricultura, casas tradicionales y actividades cotidianas.",
        pt: "Observe a vida local ao longo dos canais, incluindo pesca, agricultura, casas tradicionais e atividades diárias."
      }
    },
    {
      title: { en: "Vembanad Lake", es: "Lago Vembanad", pt: "Lago Vembanad" },
      desc: {
        en: "Explore the expansive Vembanad Lake, one of Kerala's most important backwater landscapes.",
        es: "Explora el extenso lago Vembanad, uno de los paisajes de backwaters más importantes de Kerala.",
        pt: "Explore o extenso Lago Vembanad, uma das paisagens de backwaters mais importantes de Kerala."
      }
    },
    {
      title: { en: "Tropical Coastal Beauty", es: "Belleza Costera Tropical", pt: "Beleza Costeira Tropical" },
      desc: {
        en: "Enjoy Kerala's lush tropical scenery, coconut groves, waterways and peaceful coastal atmosphere.",
        es: "Disfruta de los exuberantes paisajes tropicales, cocoteros, canales y la tranquila atmósfera costera de Kerala.",
        pt: "Aprecie as paisagens tropicais exuberantes, coqueiros, canais e a tranquila atmosfera costeira de Kerala."
      }
    }
  ],
  thingsToDo: [
    {
      name: { en: "Stay on a Houseboat", es: "Alojarse en una Casa Flotante", pt: "Hospedar-se em um Houseboat" },
      desc: {
        en: "Spend a night or day cruising through the backwaters on a traditional Kerala houseboat.",
        es: "Pasa un día o una noche navegando por los backwaters en una tradicional casa flotante de Kerala.",
        pt: "Passe um dia ou uma noite navegando pelos backwaters em uma tradicional casa-barco de Kerala."
      }
    },
    {
      name: { en: "Cruise the Backwaters", es: "Navegar por los Backwaters", pt: "Navegar pelos Backwaters" },
      desc: {
        en: "Explore narrow canals, lagoons, villages and scenic waterways by boat.",
        es: "Explora canales estrechos, lagunas, pueblos y vías fluviales en barco.",
        pt: "Explore canais estreitos, lagoas, vilarejos e vias navegáveis de barco."
      }
    },
    {
      name: { en: "Explore Alappuzha Beach", es: "Explorar la Playa de Alappuzha", pt: "Conhecer a Praia de Alappuzha" },
      desc: {
        en: "Relax by the Arabian Sea and enjoy the beach, coastal scenery and famous pier.",
        es: "Relájate junto al mar Arábigo y disfruta de la playa, el paisaje costero y su famoso muelle.",
        pt: "Relaxe junto ao Mar Arábico e aproveite a praia, a paisagem costeira e o famoso píer."
      }
    },
    {
      name: { en: "Visit Local Villages", es: "Visitar Aldeas Locales", pt: "Visitar Vilarejos Locais" },
      desc: {
        en: "Discover traditional homes, farming communities and everyday life around the backwaters.",
        es: "Descubre casas tradicionales, comunidades agrícolas y la vida cotidiana alrededor de los backwaters.",
        pt: "Conheça casas tradicionais, comunidades agrícolas e a vida cotidiana ao redor dos backwaters."
      }
    },
    {
      name: { en: "Enjoy a Kerala Culinary Experience", es: "Experiencia Gastronómica de Kerala", pt: "Experiência Gastronômica de Kerala" },
      desc: {
        en: "Taste freshly prepared seafood and traditional Kerala dishes while enjoying the tropical surroundings.",
        es: "Prueba mariscos frescos y platos tradicionales de Kerala mientras disfrutas del entorno tropical.",
        pt: "Experimente frutos do mar frescos e pratos tradicionais de Kerala enquanto aprecia o ambiente tropical."
      }
    }
  ],
  experiences: [
    {
      title: { en: "Luxury Houseboat Experience", es: "Experiencia de Casa Flotante de Lujo", pt: "Experiência de Houseboat de Luxo" },
      desc: {
        en: "Enjoy a private houseboat journey with comfortable rooms, traditional meals and peaceful backwater views.",
        es: "Disfruta de un viaje privado en casa flotante con habitaciones cómodas, comidas tradicionales y vistas tranquilas de los backwaters.",
        pt: "Desfrute de uma viagem privada em uma casa-barco com quartos confortáveis, refeições tradicionais e vistas tranquilas dos backwaters."
      }
    },
    {
      title: { en: "Romantic Backwater Experience", es: "Experiencia Romántica en los Backwaters", pt: "Experiência Romântica nos Backwaters" },
      desc: {
        en: "Enjoy sunset cruises, candlelit dinners and peaceful waterways for a memorable romantic escape.",
        es: "Disfruta de cruceros al atardecer, cenas románticas y tranquilos canales en una escapada inolvidable.",
        pt: "Desfrute de passeios ao pôr do sol, jantares românticos e canais tranquilos em uma viagem inesquecível."
      }
    },
    {
      title: { en: "Village Life Experience", es: "Experiencia de la Vida Rural", pt: "Experiência de Vida nos Vilarejos" },
      desc: {
        en: "Discover the authentic rhythm of Kerala's rural communities and traditional waterways.",
        es: "Descubre el ritmo auténtico de las comunidades rurales de Kerala y sus vías fluviales tradicionales.",
        pt: "Descubra o ritmo autêntico das comunidades rurais de Kerala e seus canais tradicionais."
      }
    },
    {
      title: { en: "Kerala Wellness Experience", es: "Experiencia de Bienestar de Kerala", pt: "Experiência de Bem-estar de Kerala" },
      desc: {
        en: "Combine your backwater stay with Ayurveda, traditional wellness treatments and peaceful relaxation.",
        es: "Combina tu estancia en los backwaters con Ayurveda, tratamientos tradicionales de bienestar y relajación.",
        pt: "Combine sua estadia nos backwaters com Ayurveda, tratamentos tradicionais de bem-estar e relaxamento."
      }
    },
    {
      title: { en: "Backwater Photography Experience", es: "Experiencia Fotográfica de los Backwaters", pt: "Experiência Fotográfica nos Backwaters" },
      desc: {
        en: "Capture houseboats, coconut palms, village life, waterways and colourful sunsets.",
        es: "Fotografía casas flotantes, palmeras, vida rural, canales y coloridos atardeceres.",
        pt: "Fotografe casas-barco, coqueiros, vida rural, canais e pores do sol coloridos."
      }
    }
  ],
  travelInfo: {
    howToReach: {
      en: "Alleppey is connected by rail from Kochi/Trivandrum and road highways.",
      es: "Alleppey está bien conectada con Kochi y otros destinos de Kerala.",
      pt: "Alleppey possui boas conexões com Kochi e outros destinos de Kerala."
    },
    nearestAirport: "Cochin International Airport (COK)",
    nearestRailway: "Alappuzha Railway Station (ALLP)",
    transportOptions: "Houseboats, Shikara Boats, Taxis, Private Cars, Local Buses",
    distanceFromMajorCities: "Kochi (60 km), Trivandrum (150 km)",
    recommendedStay: "1-2 Days",
    avgTemp: "22°C - 33°C",
    currency: "INR",
    localLanguage: "Malayalam & English",
    timeZone: "IST (UTC+5:30)",
    safetyInfo: {
      en: "Standard water safety rules apply on boats. Ensure life jackets are available.",
      es: "Siga las normas de seguridad del agua.",
      pt: "Siga as regras de segurança na água."
    }
  },
  gettingAround: [
    {
      transportType: "Houseboat",
      title: { en: "Houseboat", es: "Casa Flotante", pt: "Houseboat" },
      desc: {
        en: "The signature way to experience the backwaters and surrounding villages.",
        es: "La forma clásica de experimentar los backwaters y los pueblos.",
        pt: "A maneira clássica de vivenciar os backwaters e os vilarejos."
      },
      recommended: true
    },
    {
      transportType: "Shikara / Small Boat",
      title: { en: "Shikara / Small Boat", es: "Shikara / Barco Pequeño", pt: "Shikara / Barco Pequeno" },
      desc: {
        en: "Ideal for exploring narrow canals that larger houseboats cannot access.",
        es: "Ideal para explorar canales estrechos a los que los barcos grandes no pueden acceder.",
        pt: "Ideal para explorar canais estreitos que os barcos maiores não conseguem acessar."
      },
      recommended: true
    },
    {
      transportType: "Private Car",
      title: { en: "Private Car", es: "Coche Privado", pt: "Carro Particular" },
      desc: {
        en: "Convenient for airport transfers, beaches and nearby destinations.",
        es: "Conveniente para traslados, playas y destinos cercanos.",
        pt: "Conveniente para traslados, praias e destinos próximos."
      },
      recommended: true
    },
    {
      transportType: "Taxi / App-Based Cab",
      title: { en: "Taxi / App-Based Cab", es: "Taxi / Cab", pt: "Táxi / Aplicativo" },
      desc: {
        en: "Useful for point-to-point travel within Alappuzha and surrounding areas.",
        es: "Útil para traslados dentro de Alappuzha y alrededores.",
        pt: "Útil para deslocamentos dentro de Alappuzha e arredores."
      },
      recommended: false
    },
    {
      transportType: "Local Bus / Auto-Rickshaw",
      title: { en: "Local Bus / Auto-Rickshaw", es: "Autobús Local / Rickshaw", pt: "Ônibus Local / Autorriquixá" },
      desc: {
        en: "Affordable options for short-distance travel around the town.",
        es: "Opciones económicas para desplazamientos locales.",
        pt: "Opções econômicas para deslocamentos locais."
      },
      recommended: false
    }
  ],
  travelTips: [
    {
      title: { en: "Book Early", es: "Reservar Temprano", pt: "Reserve Cedo" },
      desc: {
        en: "Book your houseboat in advance, especially during peak travel periods.",
        es: "Reserva tu casa flotante con anticipación, especialmente durante la temporada alta.",
        pt: "Reserve sua casa-barco com antecedência, especialmente durante a alta temporada."
      }
    },
    {
      title: { en: "Choose Reputable Operator", es: "Operador de Confianza", pt: "Operadora Confiável" },
      desc: {
        en: "Choose a reputable houseboat operator and confirm inclusions before booking.",
        es: "Elige un operador de confianza y confirma los servicios incluidos antes de reservar.",
        pt: "Escolha uma operadora confiável e confirme os serviços incluídos antes de reservar."
      }
    },
    {
      title: { en: "Insect & Sun Protection", es: "Repelente y Sol", pt: "Repelente e Sol" },
      desc: {
        en: "Carry mosquito repellent, sunscreen and light breathable clothing.",
        es: "Lleva repelente de mosquitos, protector solar y ropa ligera y transpirable.",
        pt: "Leve repelente de mosquitos, protetor solar e roupas leves e respiráveis."
      }
    },
    {
      title: { en: "Respect Local Life", es: "Respetar la Vida Local", pt: "Respeite a Vida Local" },
      desc: {
        en: "Respect local communities and avoid littering in the waterways.",
        es: "Respeta a las comunidades locales y evita tirar basura en los canales.",
        pt: "Respeite as comunidades locais e evite jogar lixo nos canais."
      }
    },
    {
      title: { en: "Sunset & Overnight Choice", es: "Mejor Duración", pt: "Melhor Duração" },
      desc: {
        en: "A sunset or overnight cruise offers a more immersive backwater experience than a very short daytime trip.",
        es: "Un crucero al atardecer o una noche a bordo ofrece una experiencia más completa que una excursión diurna muy corta.",
        pt: "Um passeio ao pôr do sol ou uma noite a bordo oferece uma experiência mais completa do que uma excursão diurna muito curta."
      }
    }
  ],
  hotels: [
    {
      name: "Luxury Houseboats",
      tier: "Luxury",
      desc: {
        en: "The ultimate Alleppey experience, offering private rooms, meals and backwater cruising.",
        es: "Casas flotantes de lujo — Para la experiencia clásica de Alleppey.",
        pt: "Casas-barco de luxo — Para a experiência clássica de Alleppey."
      },
      image: ""
    },
    {
      name: "Premium Backwater Resorts",
      tier: "Luxury",
      desc: {
        en: "Ideal for travellers seeking comfort, pools, wellness facilities and scenic waterways.",
        es: "Resorts premium junto a los backwaters — Para comodidad y bienestar.",
        pt: "Resorts premium nos backwaters — Para conforto e bem-estar."
      },
      image: ""
    },
    {
      name: "Boutique Heritage Properties",
      tier: "Boutique",
      desc: {
        en: "Charming accommodation combining traditional Kerala architecture with modern comfort.",
        es: "Propiedades boutique patrimoniales — Arquitectura tradicional con comodidades modernas.",
        pt: "Propriedades boutique históricas — Arquitetura tradicional com conforto moderno."
      },
      image: ""
    },
    {
      name: "Beachside Hotels",
      tier: "Mid-range",
      desc: {
        en: "A good option for travellers who want to combine backwaters with an Arabian Sea experience.",
        es: "Hoteles junto a la playa — Para combinar backwaters y costa.",
        pt: "Hotéis à beira-mar — Para combinar backwaters e litoral."
      },
      image: ""
    },
    {
      name: "Homestays",
      tier: "Budget",
      desc: {
        en: "Ideal for experiencing authentic local hospitality, home-cooked food and village life.",
        es: "Homestays — Para experimentar la hospitalidad y gastronomía local.",
        pt: "Homestays — Para vivenciar a hospitalidade e culinária local."
      },
      image: ""
    }
  ],
  localFood: {
    en: "Try Karimeen Pollichathu, Appam with Stew, Kerala Sadya, Kerala Fish Curry and Puttu.",
    es: "Pruebe Karimeen Pollichathu, Appam con estofado, Kerala Sadya, curry de pescado y Puttu.",
    pt: "Prove Karimeen Pollichathu, Appam com ensopado, Kerala Sadya, curry de peixe e Puttu."
  },
  localFoodDishes: [
    {
      name: { en: "Karimeen Pollichathu", es: "Karimeen Pollichathu", pt: "Karimeen Pollichathu" },
      desc: {
        en: "Pearl spot fish marinated with spices, wrapped in banana leaf and traditionally cooked.",
        es: "Pescado perca-perla marinado con especias, envuelto en hoja de plátano y cocinado de forma tradicional.",
        pt: "Peixe perca-pérola marinado com especiarias, envolto em folha de bananeira e preparado tradicionalmente."
      }
    },
    {
      name: { en: "Appam with Stew", es: "Appam con Estofado", pt: "Appam com Ensopado" },
      desc: {
        en: "Soft fermented rice pancakes served with a fragrant coconut-based stew.",
        es: "Panqueques de arroz fermentado servidos con un aromático estofado a base de coco.",
        pt: "Panqueques de arroz fermentado servidas com um aromático ensopado à base de coco."
      }
    },
    {
      name: { en: "Kerala Sadya", es: "Kerala Sadya", pt: "Kerala Sadya" },
      desc: {
        en: "A traditional vegetarian feast served with rice, curries, vegetables, pickles and desserts.",
        es: "Un banquete vegetariano tradicional servido con arroz, currys, verduras, encurtidos y postres.",
        pt: "Um tradicional banquete vegetariano servido com arroz, curries, vegetais, picles e sobremesas."
      }
    },
    {
      name: { en: "Kerala Fish Curry", es: "Kerala Fish Curry", pt: "Kerala Fish Curry" },
      desc: {
        en: "A traditional fish curry prepared with spices, coconut and the distinctive flavours of Kerala.",
        es: "Un curry tradicional de pescado preparado con especias, coco y los sabores característicos de Kerala.",
        pt: "Um tradicional curry de peixe preparado com especiarias, coco e os sabores característicos de Kerala."
      }
    },
    {
      name: { en: "Puttu & Kadala Curry", es: "Puttu y Kadala Curry", pt: "Puttu e Kadala Curry" },
      desc: {
        en: "Steamed rice and coconut served with a rich black chickpea curry.",
        es: "Arroz y coco al vapor servidos con un rico curry de garbanzos negros.",
        pt: "Arroz e coco cozidos no vapor servidos com um rico curry de grão-de-bico preto."
      }
    }
  ]
};

if (fs.existsSync(statesPath)) {
  const fileContent = fs.readFileSync(statesPath, 'utf8');
  const states = JSON.parse(fileContent);

  const keralaIdx = states.findIndex(s => s.slug === "kerala");
  if (keralaIdx !== -1) {
    console.log("Updating Kerala cities in local file...");
    const keralaState = states[keralaIdx];
    keralaState.cities = keralaState.cities || [];
    
    // Update function helper
    const updateCity = (slug, details) => {
      const cityIdx = keralaState.cities.findIndex(c => c.slug === slug);
      if (cityIdx !== -1) {
        keralaState.cities[cityIdx] = { ...keralaState.cities[cityIdx], ...details };
        console.log(`Updated city details: ${slug}`);
      } else {
        console.error(`City slug '${slug}' not found under Kerala!`);
      }
    };

    updateCity("munnar", munnarDetails);
    updateCity("alleppey-alappuzha", alleppeyDetails);

    states[keralaIdx] = keralaState;
  } else {
    console.error("Kerala state not found in states.json!");
  }

  // Save local changes
  fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
  console.log("✅ Local states.json successfully updated for Kerala cities!");

  // Step 3: Push changes to remote Firestore
  if (firebaseConfig.apiKey) {
    console.log("Connecting to Firestore to upload changes...");
    const { initializeApp } = require('firebase/app');
    const { getFirestore, doc, setDoc } = require('firebase/firestore');
    
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const docRef = doc(firestore, "states", "kerala");
    setDoc(docRef, states[keralaIdx]).then(() => {
      console.log("🚀 SUCCESS: Remote Firestore 'kerala' document successfully updated!");
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
