const fs = require('fs');
const path = require('path');

// 1. STATES
const states = [
  {
    id: "rajasthan",
    displayOrder: 1,
    name: { en: "Rajasthan", es: "Turismo En Rajasthan", pt: "Turismo no Rajastão" },
    slug: { en: "rajasthan", es: "rajasthan", pt: "rajasthan" },
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "Welcome to Rajasthan, the Land of Kings, where magnificent forts, royal palaces, desert dunes and living heritage come together.",
      es: "Bienvenido a Rajasthan, la Tierra de los Reyes, con fortalezas reales, palacios, dunas del desierto y patrimonio vivo.",
      pt: "Bem-vindo ao Rajastão, a Terra dos Reis, com fortalezas reais, palácios, dunas desérticas e patrimônio vivo."
    },
    seoTitle: { en: "Rajasthan Travel Guide | Royal Palaces, Forts & Desert Tours", es: "Guía de Viaje de Rajasthan | Palacios y Fortalezas", pt: "Guia de Viagem do Rajastão | Palácios e Fortalezas" },
    seoDesc: { en: "Discover Rajasthan with royal palaces, desert safaris, Jaipur, Udaipur, Jodhpur and Jaisalmer.", es: "Descubra Rajasthan con sus palacios, safaris por el desierto y ciudades reales.", pt: "Descubra o Rajastão com palácios reais, safáris desérticos e cidades históricas." }
  },
  {
    id: "kerala",
    displayOrder: 2,
    name: { en: "Kerala", es: "Viaje A Kerala", pt: "Viagem para Kerala" },
    slug: { en: "kerala", es: "kerala", pt: "kerala" },
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "God's Own Country, famed for emerald backwaters, luxury houseboats, misty tea hills in Munnar, Ayurvedic wellness and spice gardens.",
      es: "El propio país de Dios, famoso por sus backwaters esmeralda, casas flotantes, colinas de té en Munnar y Ayurveda.",
      pt: "A própria terra de Deus, famosa por backwaters esmeralda, casas-barco de luxo, colinas de chá em Munnar e Ayurveda."
    },
    seoTitle: { en: "Kerala Travel Guide | Backwaters, Ayurveda & Houseboats", es: "Guía de Viaje de Kerala | Backwaters y Ayurveda", pt: "Guia de Viagem de Kerala | Backwaters e Ayurveda" },
    seoDesc: { en: "Explore Kerala's tropical backwaters, Munnar tea hills, Alleppey houseboats and Kochi heritage.", es: "Explore los backwaters de Kerala, colinas de Munnar y casas flotantes de Alleppey.", pt: "Explore os backwaters de Kerala, colinas de Munnar e casas-barco de Alleppey." }
  },
  {
    id: "uttar-pradesh",
    displayOrder: 3,
    name: { en: "Uttar Pradesh", es: "Turismo En Uttar Pradesh", pt: "Turismo em Uttar Pradesh" },
    slug: { en: "uttar-pradesh", es: "uttar-pradesh", pt: "uttar-pradesh" },
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "Heartland of Indian heritage and spirituality, housing the Taj Mahal in Agra, sacred ghats of Varanasi and royal Nawabi cuisine in Lucknow.",
      es: "El corazón de la historia y espiritualidad india, hogar del Taj Mahal en Agra, ghats sagrados de Varanasi y gastronomía Nawabi de Lucknow.",
      pt: "O coração do patrimônio e espiritualidade da Índia, lar do Taj Mahal em Agra, ghats sagrados de Varanasi e culinária de Lucknow."
    },
    seoTitle: { en: "Uttar Pradesh Travel Guide | Taj Mahal, Varanasi & Lucknow", es: "Guía de Viaje de Uttar Pradesh | Taj Mahal y Varanasi", pt: "Guia de Viagem de Uttar Pradesh | Taj Mahal e Varanasi" },
    seoDesc: { en: "Discover Uttar Pradesh: Taj Mahal, Agra Fort, Varanasi spiritual Aarti and Lucknow Nawabi heritage.", es: "Descubra Uttar Pradesh: Taj Mahal, Fuerte de Agra, ceremonias en Varanasi y Lucknow.", pt: "Descubra Uttar Pradesh: Taj Mahal, Forte de Agra, cerimônias em Varanasi e Lucknow." }
  },
  {
    id: "madhya-pradesh",
    displayOrder: 4,
    name: { en: "Madhya Pradesh", es: "Turismo En Madhya Pradesh", pt: "Turismo em Madhya Pradesh" },
    slug: { en: "madhya-pradesh", es: "madhya-pradesh", pt: "madhya-pradesh" },
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "The tiger heart of India featuring UNESCO Khajuraho temples, Orchha palaces, Gwalior Fort, Sanchi Stupa and dense tiger reserves.",
      es: "El corazón de los tigres en India, con los templos de Khajuraho, palacios de Orchha, fuerte de Gwalior y reservas de vida silvestre.",
      pt: "O coração dos tigres na Índia, com templos de Khajuraho, palácios de Orchha, forte de Gwalior e reservas de vida selvagem."
    },
    seoTitle: { en: "Madhya Pradesh Travel Guide | Khajuraho, Orchha & Tiger Safaris", es: "Guía de Viaje de Madhya Pradesh | Khajuraho y Safaris", pt: "Guia de Viagem de Madhya Pradesh | Khajuraho e Safáris" },
    seoDesc: { en: "Explore Madhya Pradesh: Khajuraho erotic stone sculptures, Orchha heritage, Gwalior and tiger safaris in Kanha.", es: "Explore Madhya Pradesh: templos de Khajuraho, palacios de Orchha y safaris de tigres.", pt: "Explore Madhya Pradesh: templos de Khajuraho, palácios de Orchha e safáris de tigres." }
  },
  {
    id: "maharashtra",
    displayOrder: 5,
    name: { en: "Maharashtra", es: "Viaje A Maharashtra", pt: "Viagem para Maharashtra" },
    slug: { en: "maharashtra", es: "maharashtra", pt: "maharashtra" },
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "From cosmopolitan Mumbai and UNESCO Ajanta-Ellora caves to green Western Ghats hill stations and historic Maratha fortresses.",
      es: "Desde la cosmopolita Mumbai y las cuevas de Ajanta-Ellora hasta las estaciones de montaña de los Ghats Occidentales y fortalezas Maratha.",
      pt: "Da cosmopolita Mumbai e cavernas de Ajanta-Ellora às estâncias de montanha dos Ghats Ocidentais e fortalezas Maratha."
    },
    seoTitle: { en: "Maharashtra Travel Guide | Mumbai, Ajanta Ellora Caves & Ghats", es: "Guía de Viaje de Maharashtra | Mumbai y Cuevas Ajanta", pt: "Guia de Viagem de Maharashtra | Mumbai e Cavernas Ajanta" },
    seoDesc: { en: "Discover Maharashtra: Gateway of India in Mumbai, rock-cut Ajanta & Ellora caves, Pune and Konkan coast.", es: "Descubra Maharashtra: Puerta de la India en Mumbai, cuevas de Ajanta y Ellora y la costa de Konkan.", pt: "Descubra Maharashtra: Portal da Índia em Mumbai, cavernas de Ajanta e Ellora e a costa de Konkan." }
  },
  {
    id: "tamil-nadu",
    displayOrder: 6,
    name: { en: "Tamil Nadu", es: "Turismo En Tamil Nadu", pt: "Turismo em Tamil Nadu" },
    slug: { en: "tamil-nadu", es: "tamil-nadu", pt: "tamil-nadu" },
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "Land of soaring Dravidian temple gopurams, ancient Mahabalipuram shore temples, Madurai Meenakshi, and cool Nilgiri tea hills.",
      es: "Tierra de gopurams dravídicos, templos costeros de Mahabalipuram, templo Meenakshi en Madurai y colinas de té de Nilgiri.",
      pt: "Terra de gopurams dravidianos, templos à beira-mar de Mahabalipuram, templo Meenakshi em Madurai e colinas de chá."
    },
    seoTitle: { en: "Tamil Nadu Travel Guide | Dravidian Temples, Madurai & Ooty", es: "Guía de Viaje de Tamil Nadu | Templos Dravídicos", pt: "Guia de Viagem de Tamil Nadu | Templos Dravidianos" },
    seoDesc: { en: "Explore Tamil Nadu's architectural masterpieces: Madurai Meenakshi, Thanjavur Brihadeeswarar, Mahabalipuram & Ooty.", es: "Explore las joyas arquitectónicas de Tamil Nadu: Madurai, Thanjavur, Mahabalipuram y Ooty.", pt: "Explore as joias arquitetônicas de Tamil Nadu: Madurai, Thanjavur, Mahabalipuram e Ooty." }
  },
  {
    id: "goa",
    displayOrder: 7,
    name: { en: "Goa", es: "Viaje A Goa", pt: "Viagem para Goa" },
    slug: { en: "goa", es: "goa", pt: "goa" },
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "Tropical coastal paradise with pristine golden sand beaches, UNESCO Portuguese churches, spice plantations and vibrant beach nightlife.",
      es: "Paraíso costero tropical con playas de arena dorada, iglesias portuguesas Patrimonio de la Humanidad y plantaciones de especias.",
      pt: "Paraíso tropical litorâneo com praias de areia dourada, igrejas portuguesas Patrimônio Mundial e plantações de especiarias."
    },
    seoTitle: { en: "Goa Travel Guide | Golden Beaches, Churches & Water Sports", es: "Guía de Viaje de Goa | Playas e Iglesias Portuguesas", pt: "Guia de Viagem de Goa | Praias e Igrejas Portuguesas" },
    seoDesc: { en: "Discover Goa: Baga beach, Old Goa Basilica of Bom Jesus, Panaji Latin Quarter and Dudhsagar waterfalls.", es: "Descubra Goa: playa de Baga, Basílica del Bom Jesus en Old Goa y cascadas de Dudhsagar.", pt: "Descubra Goa: praia de Baga, Basílica do Bom Jesus em Old Goa e cachoeiras de Dudhsagar." }
  },
  {
    id: "himachal-pradesh",
    displayOrder: 8,
    name: { en: "Himachal Pradesh", es: "Turismo En Himachal Pradesh", pt: "Turismo em Himachal Pradesh" },
    slug: { en: "himachal-pradesh", es: "himachal-pradesh", pt: "himachal-pradesh" },
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "Land of snow-capped Himalayan peaks, pine-forested valleys, colonial Shimla, adventure sports in Manali and Tibetan culture in Dharamshala.",
      es: "Tierra de cumbres nevadas del Himalaya, valles arbolados, la colonial Shimla, deportes de aventura en Manali y cultura tibetana.",
      pt: "Terra de picos nevados do Himalaia, vales arborizados, a colonial Shimla, esportes de aventura em Manali e cultura tibetana."
    },
    seoTitle: { en: "Himachal Pradesh Travel Guide | Shimla, Manali & Dharamshala", es: "Guía de Viaje de Himachal Pradesh | Shimla y Manali", pt: "Guia de Viagem de Himachal Pradesh | Shimla e Manali" },
    seoDesc: { en: "Explore Himachal Pradesh: Solang Valley Manali, Mall Road Shimla, Dalai Lama temple in Dharamshala & Spiti.", es: "Explore Himachal Pradesh: Valle de Solang en Manali, Mall Road en Shimla y templo del Dalai Lama en Dharamshala.", pt: "Explore Himachal Pradesh: Vale de Solang em Manali, Mall Road em Shimla e templo do Dalai Lama em Dharamshala." }
  },
  {
    id: "uttarakhand",
    displayOrder: 9,
    name: { en: "Uttarakhand", es: "Turismo En Uttarakhand", pt: "Turismo em Uttarakhand" },
    slug: { en: "uttarakhand", es: "uttarakhand", pt: "uttarakhand" },
    image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "Devbhoomi (Land of Gods), birthplace of Yoga in Rishikesh, sacred Ganges Aarti in Haridwar, hill lakes of Nainital and Corbett wild tigers.",
      es: "Tierra de los Dioses, cuna del Yoga en Rishikesh, sagrada ceremonia Aarti en Haridwar, lagos de Nainital y tigres en Jim Corbett.",
      pt: "Terra dos Deuses, berço do Yoga em Rishikesh, sagrada cerimônia Aarti em Haridwar, lagos de Nainital e tigres em Jim Corbett."
    },
    seoTitle: { en: "Uttarakhand Travel Guide | Rishikesh Yoga, Haridwar & Nainital", es: "Guía de Viaje de Uttarakhand | Rishikesh y Haridwar", pt: "Guia de Viagem de Uttarakhand | Rishikesh e Haridwar" },
    seoDesc: { en: "Discover Uttarakhand: Laxman Jhula Rishikesh, Har Ki Pauri Haridwar, Naini Lake and Jim Corbett National Park.", es: "Descubra Uttarakhand: Laxman Jhula en Rishikesh, Har Ki Pauri en Haridwar y el lago Naini en Nainital.", pt: "Descubra Uttarakhand: Laxman Jhula em Rishikesh, Har Ki Pauri em Haridwar e o lago Naini em Nainital." }
  },
  {
    id: "karnataka",
    displayOrder: 10,
    name: { en: "Karnataka", es: "Turismo En Karnataka", pt: "Turismo em Karnataka" },
    slug: { en: "karnataka", es: "karnataka", pt: "karnataka" },
    image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "Blend of technological innovation and ancient heritage, featuring UNESCO ruins of Hampi, royal Mysuru Palace, coffee plantations of Coorg and beaches of Gokarna.",
      es: "Combinación de innovación y patrimonio antiguo, con las ruinas de Hampi, el Palacio de Mysuru, plantaciones de café en Coorg y playas de Gokarna.",
      pt: "Mistura de inovação e patrimônio antigo, com as ruínas de Hampi, o Palácio de Mysuru, plantações de café em Coorg e praias de Gokarna."
    },
    seoTitle: { en: "Karnataka Travel Guide | Hampi Ruins, Mysuru Palace & Coorg", es: "Guía de Viaje de Karnataka | Ruinas de Hampi y Mysuru", pt: "Guia de Viagem de Karnataka | Ruínas de Hampi e Mysuru" },
    seoDesc: { en: "Explore Karnataka: Vijayanagara empire ruins in Hampi, illuminated Mysore Palace, coffee hills of Coorg & Gokarna.", es: "Explore Karnataka: ruinas del imperio Vijayanagara en Hampi, Palacio de Mysore e colinas de café en Coorg.", pt: "Explore Karnataka: ruínas do império Vijayanagara em Hampi, Palácio de Mysore e colinas de café em Coorg." }
  },
  {
    id: "gujarat",
    displayOrder: 11,
    name: { en: "Gujarat", es: "Turismo En Gujarat", pt: "Turismo em Gujarat" },
    slug: { en: "gujarat", es: "gujarat", pt: "gujarat" },
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "Home of Asiatic Lions in Gir, the magical white salt desert of Rann of Kutch, sacred Dwarka, and Sabarmati Ashram in UNESCO Ahmedabad.",
      es: "Hogar de leones asiáticos en Gir, el mágico desierto blanco de Kutch, la sagrada Dwarka y el Ashram de Sabarmati en Ahmedabad.",
      pt: "Lar dos leões asiáticos em Gir, o mágico deserto branco de Kutch, a sagrada Dwarka e o Ashram de Sabarmati em Ahmedabad."
    },
    seoTitle: { en: "Gujarat Travel Guide | Asiatic Lions, Rann of Kutch & Dwarka", es: "Guía de Viaje de Gujarat | Leones Asiáticos y Rann de Kutch", pt: "Guia de Viagem de Gujarat | Leões Asiáticos e Rann de Kutch" },
    seoDesc: { en: "Discover Gujarat: Gir Asiatic Lions, White Rann of Kutch, Statue of Unity, Somnath temple & Dwarka.", es: "Descubra Gujarat: leones asiáticos de Gir, desierto blanco de Kutch, Estatua de la Unidad y templo de Somnath.", pt: "Descubra Gujarat: leões asiáticos de Gir, deserto branco de Kutch, Estátua da Unidade e templo de Somnath." }
  },
  {
    id: "west-bengal",
    displayOrder: 12,
    name: { en: "West Bengal", es: "Turismo En Bengala Occidental", pt: "Turismo em Bengala Ocidental" },
    slug: { en: "west-bengal", es: "west-bengal", pt: "west-bengal" },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "Cultural hub of East India, encompassing colonial architecture in Kolkata, misty tea estates in Darjeeling and swimming tigers in Sundarbans mangroves.",
      es: "Centro cultural del este de la India, con arquitectura colonial en Kolkata, plantaciones de té en Darjeeling y tigres en los manglares de Sundarbans.",
      pt: "Centro cultural do leste da Índia, com arquitetura colonial em Kolkata, plantações de chá em Darjeeling e tigres nos manguezais de Sundarbans."
    },
    seoTitle: { en: "West Bengal Travel Guide | Kolkata, Darjeeling & Sundarbans", es: "Guía de Viaje de Bengala Occidental | Kolkata y Darjeeling", pt: "Guia de Viagem de Bengala Ocidental | Kolkata e Darjeeling" },
    seoDesc: { en: "Explore West Bengal: Victoria Memorial Kolkata, Darjeeling Himalayan Railway toy train & Sundarbans mangrove tigers.", es: "Explore Bengala Occidental: Victoria Memorial en Kolkata, tren de juguete en Darjeeling y los manglares de Sundarbans.", pt: "Explore Bengala Ocidental: Victoria Memorial em Kolkata, trem de brinquedo em Darjeeling e os manguezais de Sundarbans." }
  },
  {
    id: "delhi",
    displayOrder: 13,
    name: { en: "Delhi", es: "Turismo En Delhi", pt: "Turismo em Delhi" },
    slug: { en: "delhi", es: "delhi", pt: "delhi" },
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
    isPublished: true,
    isDeleted: false,
    description: {
      en: "India's capital territory where ancient empires meet modern democracy, boasting Red Fort, Qutub Minar, Humayun Tomb and Chandni Chowk bazaars.",
      es: "La capital de India donde antiguos imperios se encuentran con la democracia moderna, con el Fuerte Rojo, Qutub Minar y Chandni Chowk.",
      pt: "A capital da Índia onde antigos impérios encontram a democracia moderna, com o Forte Vermelho, Qutub Minar e Chandni Chowk."
    },
    seoTitle: { en: "Delhi Travel Guide | Red Fort, Qutub Minar & Historic Bazaars", es: "Guía de Viaje de Delhi | Fuerte Rojo y Qutub Minar", pt: "Guia de Viagem de Delhi | Forte Vermelho e Qutub Minar" },
    seoDesc: { en: "Discover Delhi: UNESCO Red Fort, Qutub Minar, India Gate, Lotus Temple, Humayun's Tomb and Chandni Chowk food tours.", es: "Descubra Delhi: Fuerte Rojo, Qutub Minar, Puerta de la India, Templo del Loto y gastronomía en Chandni Chowk.", pt: "Descubra Delhi: Forte Vermelho, Qutub Minar, Portal da Índia, Templo do Lótus e gastronomia em Chandni Chowk." }
  }
];

fs.writeFileSync(path.join(process.cwd(), "src", "data", "fallback", "states.json"), JSON.stringify(states, null, 2));
console.log("Updated states.json successfully with", states.length, "states.");
