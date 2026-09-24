const fs = require('fs');
const path = require('path');

const citiesPath = path.join(process.cwd(), "src", "data", "fallback", "cities.json");
let existingCities = [];
if (fs.existsSync(citiesPath)) {
  existingCities = JSON.parse(fs.readFileSync(citiesPath, "utf-8"));
}

// Preserve Rajasthan cities from existing list
const rajasthanCities = existingCities.filter(c => c.stateId === "rajasthan");

// Generate full non-Rajasthan cities list with complete 3-language details & tourist places
const newNonRajasthanCities = [

  // ----------------------------------------------------
  // UTTAR PRADESH CITIES
  // ----------------------------------------------------
  {
    id: "agra",
    stateId: "uttar-pradesh",
    isPublished: true,
    displayOrder: 1,
    name: { en: "Agra", es: "Agra", pt: "Agra" },
    slug: { en: "agra", es: "agra", pt: "agra" },
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80",
    description: {
      en: "Home of the Taj Mahal, Agra Fort & magnificent Mughal heritage along the Yamuna River.",
      es: "Hogar del Taj Mahal, el Fuerte de Agra y el magnífico patrimonio mogol a orillas del río Yamuna.",
      pt: "Lar do Taj Mahal, do Forte de Agra e do magnífico patrimônio mogol às margens do rio Yamuna."
    },
    seoTitle: { en: "Agra Travel Guide | Taj Mahal & Agra Fort", es: "Guía de Viaje de Agra | Taj Mahal y Fuerte de Agra", pt: "Guia de Viagem de Agra | Taj Mahal e Forte de Agra" },
    seoDesc: { en: "Plan your trip to Agra: Taj Mahal sunrise, Agra Fort, Fatehpur Sikri and Mughal food.", es: "Planifique su viaje a Agra: amanecer en el Taj Mahal, Fuerte de Agra y Fatehpur Sikri.", pt: "Planeje sua viagem para Agra: nascer do sol no Taj Mahal, Forte de Agra e Fatehpur Sikri." },
    seoKeywords: { en: "Agra travel, Taj Mahal tour, Agra Fort", es: "Viaje a Agra, Taj Mahal tour, Fuerte de Agra", pt: "Viagem para Agra, Taj Mahal tour, Forte de Agra" },
    touristPlaces: [
      {
        name: { en: "Taj Mahal", es: "Taj Mahal", pt: "Taj Mahal" },
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80",
        description: { en: "Iconic white marble mausoleum built by Shah Jahan, a UNESCO World Heritage site and wonder of the world.", es: "Emblemático mausoleo de mármol blanco construido por Shah Jahan, Patrimonio de la Humanidad.", pt: "Emblemático mausoléu de mármore branco construído por Shah Jahan, Patrimônio Mundial." }
      },
      {
        name: { en: "Agra Fort", es: "Fuerte de Agra", pt: "Forte de Agra" },
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80",
        description: { en: "Massive red sandstone fortress that served as the main residence of Mughal emperors.", es: "Enorme fortaleza de arenisca roja que sirvió como residencia de emperadores mogoles.", pt: "Enorme fortaleza de arenito vermelho que serviu como residência de imperadores mogóis." }
      },
      {
        name: { en: "Fatehpur Sikri", es: "Fatehpur Sikri", pt: "Fatehpur Sikri" },
        image: "https://images.unsplash.com/photo-1588083949474-77b4ee541ced?w=900&q=80",
        description: { en: "The historic deserted red sandstone capital built by Emperor Akbar featuring Buland Darwaza.", es: "La histórica capital de arenisca roja construida por el emperador Akbar.", pt: "A histórica capital de arenito vermelho construída pelo imperador Akbar." }
      },
      {
        name: { en: "Mehtab Bagh", es: "Mehtab Bagh", pt: "Mehtab Bagh" },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
        description: { en: "Moonlight garden complex offering breathtaking sunset views of the Taj Mahal across the Yamuna River.", es: "Jardín con vistas espectaculares al Taj Mahal durante el atardecer.", pt: "Jardim com vistas impressionantes do Taj Mahal durante o pôr do sol." }
      }
    ]
  },
  {
    id: "varanasi",
    stateId: "uttar-pradesh",
    isPublished: true,
    displayOrder: 2,
    name: { en: "Varanasi", es: "Varanasi", pt: "Varanasi" },
    slug: { en: "varanasi", es: "varanasi", pt: "varanasi" },
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&q=80",
    description: {
      en: "Spiritual capital of India, famous for sacred Ganges river ghats, Kashi Vishwanath temple, and evening Ganga Aarti.",
      es: "Capital espiritual de India, famosa por sus ghats sagrados en el río Ganges, el templo Kashi Vishwanath y el Ganga Aarti.",
      pt: "Capital espiritual da Índia, famosa por seus ghats sagrados no rio Ganges, templo Kashi Vishwanath e Ganga Aarti."
    },
    seoTitle: { en: "Varanasi Travel Guide | Ganges Ghats & Kashi Vishwanath", es: "Guía de Viaje de Varanasi | Ghats del Ganges", pt: "Guia de Viagem de Varanasi | Ghats do Ganges" },
    seoDesc: { en: "Experience spiritual Varanasi: Ganges boat ride, Dashashwamedh Aarti, Kashi Vishwanath and Sarnath.", es: "Viva la Varanasi espiritual: paseo en barco por el Ganges, ceremonia Aarti y Sarnath.", pt: "Viva a Varanasi espiritual: passeio de barco pelo Ganges, cerimônia Aarti e Sarnath." },
    seoKeywords: { en: "Varanasi travel, Ganges ghats, Kashi Vishwanath", es: "Viaje a Varanasi, ghats del Ganges", pt: "Viagem para Varanasi, ghats do Ganges" },
    touristPlaces: [
      {
        name: { en: "Dashashwamedh Ghat & Ganga Aarti", es: "Dashashwamedh Ghat y Ganga Aarti", pt: "Dashashwamedh Ghat e Ganga Aarti" },
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&q=80",
        description: { en: "The main ghat where brass lamps and chanting illuminate the sacred Ganges during evening Ganga Aarti.", es: "El ghat principal donde lámparas de latón y cánticos iluminan el Ganges durante la ceremonia nocturna.", pt: "O principal ghat onde lâmpadas de latão e cânticos iluminam o Ganges durante a cerimônia noturna." }
      },
      {
        name: { en: "Kashi Vishwanath Temple", es: "Templo Kashi Vishwanath", pt: "Templo Kashi Vishwanath" },
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=900&q=80",
        description: { en: "One of the most sacred Hindu temples dedicated to Lord Shiva featuring golden spires.", es: "Uno de los templos hindúes más sagrados dedicado al Señor Shiva.", pt: "Um dos templos hindus mais sagrados dedicado ao Senhor Shiva." }
      },
      {
        name: { en: "Sarnath", es: "Sarnath", pt: "Sarnath" },
        image: "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?w=900&q=80",
        description: { en: "Revered Buddhist pilgrimage site where Lord Buddha gave his first sermon after enlightenment.", es: "Lugar de peregrinación budista donde Buda dio su primer sermón.", pt: "Local de peregrinação budista onde Buda deu seu primeiro sermão." }
      }
    ]
  },
  {
    id: "lucknow",
    stateId: "uttar-pradesh",
    isPublished: true,
    displayOrder: 3,
    name: { en: "Lucknow", es: "Lucknow", pt: "Lucknow" },
    slug: { en: "lucknow", es: "lucknow", pt: "lucknow" },
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=900&q=80",
    description: {
      en: "City of Nawabs, celebrated for architectural wonders like Bara Imambara, Chikankari embroidery & Galouti Kebabs.",
      es: "La ciudad de los Nawabs, famosa por el Bara Imambara, el bordado Chikankari y los Kebabs Galouti.",
      pt: "A cidade dos Nawabs, famosa pelo Bara Imambara, bordado Chikankari e Kebabs Galouti."
    },
    seoTitle: { en: "Lucknow Travel Guide | Bara Imambara & Nawabi Cuisine", es: "Guía de Viaje de Lucknow | Bara Imambara", pt: "Guia de Viagem de Lucknow | Bara Imambara" },
    seoDesc: { en: "Explore Lucknow: Bara Imambara labyrinth, Rumi Darwaza, Hazratganj shopping and Awadhi cuisine.", es: "Explore Lucknow: laberinto del Bara Imambara, Rumi Darwaza y gastronomía de Awadh.", pt: "Explore Lucknow: labirinto do Bara Imambara, Rumi Darwaza e culinária Awadhi." },
    seoKeywords: { en: "Lucknow travel, Bara Imambara, Awadhi food", es: "Viaje a Lucknow, Bara Imambara", pt: "Viagem para Lucknow, Bara Imambara" },
    touristPlaces: [
      {
        name: { en: "Bara Imambara & Bhool Bhulaiya", es: "Bara Imambara y Laberinto", pt: "Bara Imambara e Labirinto" },
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=900&q=80",
        description: { en: "Architectural masterpiece built by Nawab Asaf-ud-Daula featuring a massive arched hall and intricate labyrinth.", es: "Obra maestra arquitectónica con un gran salón abovedado y un fascinante laberinto.", pt: "Obra-prima arquitetônica com um grande salão abobadado e um fascinante labirinto." }
      },
      {
        name: { en: "Rumi Darwaza", es: "Rumi Darwaza", pt: "Rumi Darwaza" },
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=900&q=80",
        description: { en: "Grand 60-foot Turkish gateway built in Awadhi architectural style, an iconic landmark of Lucknow.", es: "Imponente puerta de 60 pies de estilo Awadhi, símbolo de Lucknow.", pt: "Imponente portal de 60 pés de estilo Awadhi, símbolo de Lucknow." }
      }
    ]
  },

  // ----------------------------------------------------
  // KERALA CITIES
  // ----------------------------------------------------
  {
    id: "kochi",
    stateId: "kerala",
    isPublished: true,
    displayOrder: 1,
    name: { en: "Kochi", es: "Kochi", pt: "Kochi" },
    slug: { en: "kochi", es: "kochi", pt: "kochi" },
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
    description: {
      en: "Historic port city featuring Chinese Fishing Nets, colonial Fort Kochi, Portuguese palaces & Jew Town spices.",
      es: "Histórica ciudad portuaria con redes de pesca chinas, colonial Fort Kochi, palacios portugueses y especias.",
      pt: "Histórica cidade portuária com redes de pesca chinesas, colonial Fort Kochi, palácios portugueses e especiarias."
    },
    seoTitle: { en: "Kochi Travel Guide | Fort Kochi & Chinese Fishing Nets", es: "Guía de Viaje de Kochi | Fort Kochi", pt: "Guia de Viagem de Kochi | Fort Kochi" },
    seoDesc: { en: "Discover Kochi: Fort Kochi heritage walk, Mattancherry Palace, Jew Town synagogue and Kathakali dance.", es: "Descubra Kochi: patrimonio de Fort Kochi, Palacio Mattancherry y danza Kathakali.", pt: "Descubra Kochi: patrimônio de Fort Kochi, Palácio Mattancherry e dança Kathakali." },
    seoKeywords: { en: "Kochi travel, Fort Kochi, Kerala port", es: "Viaje a Kochi, Fort Kochi", pt: "Viagem para Kochi, Fort Kochi" },
    touristPlaces: [
      {
        name: { en: "Chinese Fishing Nets", es: "Redes de Pesca Chinas", pt: "Redes de Pesca Chinesas" },
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80",
        description: { en: "Fixed land installations operated by cantilevered weights along the Fort Kochi waterfront.", es: "Instalaciones mecánicas de pesca a lo largo del paseo marítimo de Fort Kochi.", pt: "Instalações mecânicas de pesca ao longo da orla de Fort Kochi." }
      },
      {
        name: { en: "Mattancherry Dutch Palace", es: "Palacio Holandés de Mattancherry", pt: "Palácio Holandês de Mattancherry" },
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&q=80",
        description: { en: "Portuguese-built palace gifted to the Raja of Kochi, featuring vibrant Ramayana mural paintings.", es: "Palacio construido por portugueses con murales detallados del Ramayana.", pt: "Palácio construído por portugueses com murais detalhados do Ramayana." }
      }
    ]
  },
  {
    id: "alleppey",
    stateId: "kerala",
    isPublished: true,
    displayOrder: 2,
    name: { en: "Alleppey", es: "Alleppey", pt: "Alleppey" },
    slug: { en: "alleppey", es: "alleppey", pt: "alleppey" },
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&q=80",
    description: {
      en: "Venice of the East, famous for overnight backwater cruises on luxury Kettuvallam houseboats.",
      es: "La Venecia del Este, famosa por cruceros en casas flotantes Kettuvallam por los backwaters.",
      pt: "A Veneza do Leste, famosa por cruzeiros em casas-barco Kettuvallam pelos backwaters."
    },
    seoTitle: { en: "Alleppey Travel Guide | Houseboat Cruises & Backwaters", es: "Guía de Viaje de Alleppey | Casas Flotantes", pt: "Guia de Viagem de Alleppey | Casas-barco" },
    seoDesc: { en: "Book luxury Alleppey houseboat cruises, explore backwater canals, Marari beach and Punnamada lake.", es: "Reserve cruceros en casas flotantes en Alleppey y explore los canales de los backwaters.", pt: "Reserve cruzeiros em casas-barco em Alleppey e explore os canais dos backwaters." },
    seoKeywords: { en: "Alleppey houseboat, Kerala backwaters", es: "Casa flotante Alleppey, backwaters Kerala", pt: "Casa-barco Alleppey, backwaters Kerala" },
    touristPlaces: [
      {
        name: { en: "Alleppey Backwaters Houseboat Cruise", es: "Crucero en Casa Flotante por Backwaters", pt: "Cruzeiro em Casa-barco pelos Backwaters" },
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=900&q=80",
        description: { en: "Unforgettable navigation through palm-shaded canals, paddy fields and serene lagoons.", es: "Navegación inolvidable por canales rodeados de palmeras y campos de arroz.", pt: "Navegação inesquecível por canais cercados por palmeiras e campos de arroz." }
      },
      {
        name: { en: "Marari Beach", es: "Playa Marari", pt: "Praia Marari" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: { en: "Tranquil fishing village beach with coconut groves and peaceful golden sands.", es: "Tranquila playa rodeada de cocoteros y arenas doradas.", pt: "Tranquila praia cercada por coqueiros e areias douradas." }
      }
    ]
  },
  {
    id: "munnar",
    stateId: "kerala",
    isPublished: true,
    displayOrder: 3,
    name: { en: "Munnar", es: "Munnar", pt: "Munnar" },
    slug: { en: "munnar", es: "munnar", pt: "munnar" },
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=900&q=80",
    description: {
      en: "Picturesque hill station surrounded by rolling tea plantations, misty valleys, and Eravikulam endangered wildlife.",
      es: "Pintoresca estación de montaña rodeada de plantaciones de té, valles con niebla y vida silvestre.",
      pt: "Pintoresca estância de montanha cercada por plantações de chá, vales com neblina e vida selvagem."
    },
    seoTitle: { en: "Munnar Travel Guide | Tea Gardens & Misty Mountains", es: "Guía de Viaje de Munnar | Plantaciones de Té", pt: "Guia de Viagem de Munnar | Plantações de Chá" },
    seoDesc: { en: "Explore Munnar hill station: Eravikulam National Park, tea museum, Mattupetty dam & Anamudi peak.", es: "Explore Munnar: Parque Nacional Eravikulam, museo del té y la cumbre Anamudi.", pt: "Explore Munnar: Parque Nacional Eravikulam, museu do chá e o pico Anamudi." },
    seoKeywords: { en: "Munnar tea gardens, Kerala hill station", es: "Munnar plantaciones de té", pt: "Munnar plantações de chá" },
    touristPlaces: [
      {
        name: { en: "Eravikulam National Park", es: "Parque Nacional Eravikulam", pt: "Parque Nacional Eravikulam" },
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=900&q=80",
        description: { en: "Sanctuary protecting the endangered Nilgiri Tahr mountain goat amidst rolling high-altitude grasslands.", es: "Santuario que protege a la cabra montés Nilgiri Tahr en peligro de extinción.", pt: "Santuário que protege a cabra da montanha Nilgiri Tahr em extinção." }
      },
      {
        name: { en: "Tata Tea Museum & Estates", es: "Museo y Plantaciones de Té Tata", pt: "Museu e Plantações de Chá Tata" },
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=900&q=80",
        description: { en: "Experience tea plucking, historic machinery and tasting fresh Ceylon & Assam black tea varieties.", es: "Conozca la recolección de té, maquinaria histórica y deguste variedades frescas.", pt: "Conheça a colheita de chá, máquinas históricas e deguste variedades frescas." }
      }
    ]
  },

  // ----------------------------------------------------
  // MADHYA PRADESH CITIES
  // ----------------------------------------------------
  {
    id: "khajuraho",
    stateId: "madhya-pradesh",
    isPublished: true,
    displayOrder: 1,
    name: { en: "Khajuraho", es: "Khajuraho", pt: "Khajuraho" },
    slug: { en: "khajuraho", es: "khajuraho", pt: "khajuraho" },
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&q=80",
    description: {
      en: "UNESCO World Heritage site world-renowned for intricate Nagara-style erotic stone carvings and ancient Chandela temples.",
      es: "Sitio Patrimonio de la Humanidad famoso mundialmente por sus esculturas eróticas en piedra y templos Chandela.",
      pt: "Patrimônio Mundial famoso no mundo inteiro por suas esculturas eróticas em pedra e templos Chandela."
    },
    seoTitle: { en: "Khajuraho Travel Guide | UNESCO Temples & Sculptures", es: "Guía de Viaje de Khajuraho | Templos UNESCO", pt: "Guia de Viagem de Khajuraho | Templos UNESCO" },
    seoDesc: { en: "Discover Khajuraho: Kandariya Mahadeva temple, Eastern & Western temple groups, light and sound show.", es: "Descubra Khajuraho: templo Kandariya Mahadeva, grupos de templos del Este y Oeste.", pt: "Descubra Khajuraho: templo Kandariya Mahadeva, grupos de templos do Leste e Oeste." },
    seoKeywords: { en: "Khajuraho temples, UNESCO Madhya Pradesh", es: "Khajuraho templos UNESCO", pt: "Khajuraho templos UNESCO" },
    touristPlaces: [
      {
        name: { en: "Kandariya Mahadeva Temple", es: "Templo Kandariya Mahadeva", pt: "Templo Kandariya Mahadeva" },
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&q=80",
        description: { en: "Largest and most ornate Hindu temple in the Khajuraho Western Group built around 1030 AD.", es: "El templo hindú más grande y decorado del grupo occidental de Khajuraho.", pt: "O maior e mais ornamentado templo hindu do grupo ocidental de Khajuraho." }
      },
      {
        name: { en: "Lakshmana Temple", es: "Templo Lakshmana", pt: "Templo Lakshmana" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: { en: "Exquisitely preserved temple dedicated to Lord Vishnu featuring fine carvings of musicians, dancers and deities.", es: "Templo magníficamente conservado dedicado al Señor Vishnu con finos grabados.", pt: "Templo bem preservado dedicado ao Senhor Vishnu com finos entalhes." }
      }
    ]
  },
  {
    id: "orchha",
    stateId: "madhya-pradesh",
    isPublished: true,
    displayOrder: 2,
    name: { en: "Orchha", es: "Orchha", pt: "Orchha" },
    slug: { en: "orchha", es: "orchha", pt: "orchha" },
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
    description: {
      en: "Medieval Bundela capital on the Betwa River featuring fort palaces, cenotaphs (chhatris) and Chaturbhuj temple.",
      es: "Capital medieval Bundela a orillas del río Betwa, con palacios fortificados, cenotafios y el templo Chaturbhuj.",
      pt: "Capital medieval Bundela às margens do rio Betwa, com palácios fortificados, cenotáfios e o templo Chaturbhuj."
    },
    seoTitle: { en: "Orchha Travel Guide | Jahangir Mahal & Betwa River Chhatris", es: "Guía de Viaje de Orchha | Jahangir Mahal", pt: "Guia de Viagem de Orchha | Jahangir Mahal" },
    seoDesc: { en: "Explore Orchha: Jahangir Mahal, Ram Raja Temple, Betwa river rafting and cenotaphs.", es: "Explore Orchha: Jahangir Mahal, templo Ram Raja y los cenotafios junto al río Betwa.", pt: "Explore Orchha: Jahangir Mahal, templo Ram Raja e os cenotáfios junto ao rio Betwa." },
    seoKeywords: { en: "Orchha fort, Jahangir Mahal Madhya Pradesh", es: "Orchha fuerte Jahangir Mahal", pt: "Orchha forte Jahangir Mahal" },
    touristPlaces: [
      {
        name: { en: "Jahangir Mahal & Raja Mahal", es: "Jahangir Mahal y Raja Mahal", pt: "Jahangir Mahal e Raja Mahal" },
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
        description: { en: "Palace citadel showcasing Bundela architectural brilliance with domed towers, balconies and courtyard frescoes.", es: "Palacio de arquitectura Bundela con torres abovedadas y frescos en los patios.", pt: "Palácio de arquitetura Bundela com torres abobadadas e afrescos nos pátios." }
      },
      {
        name: { en: "Orchha Chhatris (Cenotaphs)", es: "Cenotafios de Orchha (Chhatris)", pt: "Cenotáfios de Orchha (Chhatris)" },
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&q=80",
        description: { en: "14 royal memorials positioned along the scenic Kanchan Ghats of the Betwa River.", es: "14 monumentos conmemorativos reales situados a lo largo del río Betwa.", pt: "14 memoriais reais situados ao longo do rio Betwa." }
      }
    ]
  },

  // ----------------------------------------------------
  // MAHARASHTRA CITIES
  // ----------------------------------------------------
  {
    id: "mumbai",
    stateId: "maharashtra",
    isPublished: true,
    displayOrder: 1,
    name: { en: "Mumbai", es: "Mumbai", pt: "Mumbai" },
    slug: { en: "mumbai", es: "mumbai", pt: "mumbai" },
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&q=80",
    description: {
      en: "Financial capital and heart of Bollywood, home to Gateway of India, Marine Drive, Victorian architecture & Elephanta caves.",
      es: "Capital financiera y corazón de Bollywood, hogar de la Puerta de la India, Marine Drive y las cuevas de Elefanta.",
      pt: "Capital financeira e coração de Bollywood, lar do Portal da Índia, Marine Drive e cavernas de Elefanta."
    },
    seoTitle: { en: "Mumbai Travel Guide | Gateway of India & Marine Drive", es: "Guía de Viaje de Mumbai | Puerta de la India", pt: "Guia de Viagem de Mumbai | Portal da Índia" },
    seoDesc: { en: "Discover Mumbai: Gateway of India, Marine Drive Queens Necklace, Colaba Causeway & Elephanta caves.", es: "Descubra Mumbai: Puerta de la India, paseo marítimo Marine Drive y cuevas de Elefanta.", pt: "Descubra Mumbai: Portal da Índia, orla Marine Drive e cavernas de Elefanta." },
    seoKeywords: { en: "Mumbai travel, Gateway of India, Bollywood city", es: "Viaje a Mumbai, Puerta de la India", pt: "Viagem para Mumbai, Portal da Índia" },
    touristPlaces: [
      {
        name: { en: "Gateway of India", es: "Puerta de la India", pt: "Portal da Índia" },
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&q=80",
        description: { en: "Grand Indo-Saracenic basalt arch overlooking the Arabian Sea, built to commemorate King George V's visit.", es: "Imponente arco triunfal frente al Mar Arábigo, construido para conmemorar la visita del Rey Jorge V.", pt: "Imponente arco triunfal em frente ao Mar Arábico, construído para comemorar a visita do Rei Jorge V." }
      },
      {
        name: { en: "Marine Drive (Queen's Necklace)", es: "Marine Drive (Collar de la Reina)", pt: "Marine Drive (Colar da Rainha)" },
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900&q=80",
        description: { en: "3.6 km long promenade along South Mumbai bay that glitters like a pearl necklace at night.", es: "Paseo marítimo de 3.6 km que deslumbrante por la noche como un collar de perlas.", pt: "Orla marítima de 3.6 km que brilha à noite como um colar de pérolas." }
      },
      {
        name: { en: "Elephanta Caves UNESCO", es: "Cuevas de Elefanta UNESCO", pt: "Cavernas de Elefanta UNESCO" },
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&q=80",
        description: { en: "Island rock-cut cave temples dedicated to Lord Shiva featuring the magnificent 20-foot Trimurti sculpture.", es: "Templos excavados en roca en una isla dedicados al Señor Shiva con la escultura Trimurti.", pt: "Templos em cavernas em uma ilha dedicados ao Senhor Shiva com a escultura Trimurti." }
      }
    ]
  },
  {
    id: "aurangabad",
    stateId: "maharashtra",
    isPublished: true,
    displayOrder: 2,
    name: { en: "Aurangabad (Chhatrapati Sambhaji Nagar)", es: "Aurangabad", pt: "Aurangabad" },
    slug: { en: "aurangabad", es: "aurangabad", pt: "aurangabad" },
    image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
    description: {
      en: "Gateway to UNESCO World Heritage rock-cut Ajanta & Ellora caves, Daulatabad Fort & Bibi Ka Maqbara.",
      es: "Puerta de entrada a las cuevas de Ajanta y Ellora Patrimonio de la Humanidad, el fuerte Daulatabad y Bibi Ka Maqbara.",
      pt: "Portal de entrada para as cavernas de Ajanta e Ellora Patrimônio Mundial, o forte Daulatabad e Bibi Ka Maqbara."
    },
    seoTitle: { en: "Aurangabad Travel Guide | Ajanta Ellora Caves & Bibi Ka Maqbara", es: "Guía de Viaje de Aurangabad | Cuevas de Ajanta y Ellora", pt: "Guia de Viagem de Aurangabad | Cavernas de Ajanta e Ellora" },
    seoDesc: { en: "Explore Aurangabad: UNESCO Ajanta murals, Ellora Kailash monolithic temple, Daulatabad fort & Bibi Ka Maqbara.", es: "Explore Aurangabad: pinturas de Ajanta, templo Kailash en Ellora y Bibi Ka Maqbara.", pt: "Explore Aurangabad: pinturas de Ajanta, templo Kailash em Ellora e Bibi Ka Maqbara." },
    seoKeywords: { en: "Ajanta Ellora caves, Aurangabad travel", es: "Cuevas Ajanta Ellora, Aurangabad", pt: "Cavernas Ajanta Ellora, Aurangabad" },
    touristPlaces: [
      {
        name: { en: "Ellora Caves & Kailash Temple", es: "Cuevas de Ellora y Templo Kailash", pt: "Cavernas de Ellora e Templo Kailash" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: { en: "World's largest single monolithic rock excavation (Cave 16 - Kailasa temple carved top-down from cliff).", es: "La excavación monolítica en roca más grande del mundo (Templo Kailash esculpido de arriba a abajo).", pt: "A maior escavação monolítica em rocha do mundo (Templo Kailash esculpido de cima para baixo)." }
      },
      {
        name: { en: "Ajanta Caves Buddhist Murals", es: "Cuevas de Ajanta y Murales Budistas", pt: "Cavernas de Ajanta e Murais Budistas" },
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&q=80",
        description: { en: "30 rock-cut Buddhist cave monuments famous for ancient fresco paintings depicting Jataka tales.", es: "30 cuevas budistas famosas por sus frescos antiguos que representan cuentos Jataka.", pt: "30 cavernas budistas famosas por seus afrescos antigos que representam contos Jataka." }
      }
    ]
  },

  // ----------------------------------------------------
  // TAMIL NADU CITIES
  // ----------------------------------------------------
  {
    id: "madurai",
    stateId: "tamil-nadu",
    isPublished: true,
    displayOrder: 1,
    name: { en: "Madurai", es: "Madurai", pt: "Madurai" },
    slug: { en: "madurai", es: "madurai", pt: "madurai" },
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
    description: {
      en: "Athens of the East, one of India's oldest continuously inhabited cities, world-famous for Meenakshi Amman temple.",
      es: "La Atenas del Este, una de las ciudades habitadas más antiguas de India, famosa por el templo Meenakshi Amman.",
      pt: "A Atenas do Leste, uma das cidades habitadas mais antigas da Índia, famosa pelo templo Meenakshi Amman."
    },
    seoTitle: { en: "Madurai Travel Guide | Meenakshi Amman Temple & Nayakkar Palace", es: "Guía de Viaje de Madurai | Templo Meenakshi", pt: "Guia de Viagem de Madurai | Templo Meenakshi" },
    seoDesc: { en: "Explore Madurai: Meenakshi temple gopurams, Thirumalai Nayakkar Palace and South Indian food.", es: "Explore Madurai: gopurams del templo Meenakshi y el Palacio Thirumalai Nayakkar.", pt: "Explore Madurai: gopurams do templo Meenakshi e o Palácio Thirumalai Nayakkar." },
    seoKeywords: { en: "Madurai Meenakshi temple, Tamil Nadu culture", es: "Templo Madurai Meenakshi", pt: "Templo Madurai Meenakshi" },
    touristPlaces: [
      {
        name: { en: "Meenakshi Amman Temple", es: "Templo Meenakshi Amman", pt: "Templo Meenakshi Amman" },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
        description: { en: "Architectural wonder featuring 14 towering gopurams decorated with thousands of colorful sculpted deities.", es: "Maravilla arquitectónica con 14 gopurams gigantes decorados con miles de esculturas coloridas.", pt: "Maravilha arquitetônica com 14 gopurams gigantes decorados com milhares de esculturas coloridas." }
      },
      {
        name: { en: "Thirumalai Nayakkar Palace", es: "Palacio Thirumalai Nayakkar", pt: "Palácio Thirumalai Nayakkar" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: { en: "17th-century palace constructed in Dravidian-Italian style featuring giant white pillars and court arches.", es: "Palacio del siglo XVII de estilo dravídico-italiano con pilares blancos gigantes.", pt: "Palácio do século XVII em estilo dravidiano-italiano com pilares brancos gigantes." }
      }
    ]
  },
  {
    id: "mahabalipuram",
    stateId: "tamil-nadu",
    isPublished: true,
    displayOrder: 2,
    name: { en: "Mahabalipuram (Mamallapuram)", es: "Mahabalipuram", pt: "Mahabalipuram" },
    slug: { en: "mahabalipuram", es: "mahabalipuram", pt: "mahabalipuram" },
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
    description: {
      en: "UNESCO coastal heritage town renowned for 7th-century Pallava Shore Temple, Pancha Rathas and Krishna's Butter Ball.",
      es: "Ciudad costera Patrimonio de la Humanidad famosa por el Templo de la Orilla Pallava y Pancha Rathas.",
      pt: "Cidade litorânea Patrimônio Mundial famosa pelo Templo da Orla Pallava e Pancha Rathas."
    },
    seoTitle: { en: "Mahabalipuram Travel Guide | Shore Temple & Pancha Rathas", es: "Guía de Viaje de Mahabalipuram | Templo de la Orilla", pt: "Guia de Viagem de Mahabalipuram | Templo da Orla" },
    seoDesc: { en: "Discover UNESCO Mahabalipuram: Shore Temple along the ocean, Pancha Rathas monoliths & Arjuna's Penance.", es: "Descubra Mahabalipuram: Templo de la Orilla junto al océano y los monolitos de Pancha Rathas.", pt: "Descubra Mahabalipuram: Templo da Orla junto ao oceano e os monólitos de Pancha Rathas." },
    seoKeywords: { en: "Mahabalipuram Shore temple, UNESCO Tamil Nadu", es: "Templo de la Orilla Mahabalipuram", pt: "Templo da Orla Mahabalipuram" },
    touristPlaces: [
      {
        name: { en: "Shore Temple", es: "Templo de la Orilla", pt: "Templo da Orla" },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
        description: { en: "Structural granite temple built on the Bay of Bengal coast during the reign of Narasimhavarman II.", es: "Templo de granito construido a orillas de la Bahía de Bengala en el siglo VIII.", pt: "Templo de granito construído às margens da Baía de Bengala no século VIII." }
      },
      {
        name: { en: "Pancha Rathas (Five Rathas)", es: "Pancha Rathas (Cinco Carros)", pt: "Pancha Rathas (Cinco Carruagens)" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: { en: "Five monolithic rock-cut temple structures named after the Pandavas carved out of single granite rocks.", es: "Cinco templos monolíticos tallados en rocas de granito individuales.", pt: "Cinco templos monolíticos esculpidos em rochas de granito individuais." }
      }
    ]
  },

  // ----------------------------------------------------
  // GUJARAT CITIES
  // ----------------------------------------------------
  {
    id: "ahmedabad",
    stateId: "gujarat",
    isPublished: true,
    displayOrder: 1,
    name: { en: "Ahmedabad", es: "Ahmedabad", pt: "Ahmedabad" },
    slug: { en: "ahmedabad", es: "ahmedabad", pt: "ahmedabad" },
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80",
    description: {
      en: "India's first UNESCO World Heritage City, home to Sabarmati Ashram, intricate stepwells & Sidi Saiyyed Jali.",
      es: "La primera Ciudad Patrimonio de la Humanidad de India, hogar del Ashram Sabarmati y el pozo escalonado de Adalaj.",
      pt: "A primeira Cidade Patrimônio Mundial da Índia, lar do Ashram Sabarmati e poço escalonado de Adalaj."
    },
    seoTitle: { en: "Ahmedabad Travel Guide | Sabarmati Ashram & UNESCO Pols", es: "Guía de Viaje de Ahmedabad | Sabarmati Ashram", pt: "Guia de Viagem de Ahmedabad | Sabarmati Ashram" },
    seoDesc: { en: "Explore Ahmedabad: Mahatma Gandhi Sabarmati Ashram, Adalaj stepwell, Kankaria lake & Gujarati thali.", es: "Explore Ahmedabad: Sabarmati Ashram de Mahatma Gandhi, pozo de Adalaj y gastronomía.", pt: "Explore Ahmedabad: Sabarmati Ashram de Mahatma Gandhi, poço de Adalaj e gastronomia." },
    seoKeywords: { en: "Ahmedabad travel, Sabarmati Ashram", es: "Viaje a Ahmedabad, Sabarmati Ashram", pt: "Viagem para Ahmedabad, Sabarmati Ashram" },
    touristPlaces: [
      {
        name: { en: "Sabarmati Ashram (Gandhi Ashram)", es: "Sabarmati Ashram (Ashram de Gandhi)", pt: "Sabarmati Ashram (Ashram de Gandhi)" },
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80",
        description: { en: "Tranquil headquarters of Mahatma Gandhi during the Indian independence movement along Sabarmati river.", es: "Tranquila sede de Mahatma Gandhi durante el movimiento de independencia a orillas del río Sabarmati.", pt: "Tranquila sede de Mahatma Gandhi durante o movimento de independência às margens do rio Sabarmati." }
      },
      {
        name: { en: "Adalaj Stepwell (Adalaj ni Vav)", es: "Pozo Escalonado de Adalaj", pt: "Poço Escalonado de Adalaj" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: { en: "5-story deep subterranean Solanki-style stepwell decorated with elaborate Islamic and Solanki carvings.", es: "Pozo subterráneo de 5 pisos de profundidad decorado con elaborados tallados.", pt: "Poço subterrâneo de 5 andares de profundidade decorado com elaborados entalhes." }
      }
    ]
  },
  {
    id: "rann-of-kutch",
    stateId: "gujarat",
    isPublished: true,
    displayOrder: 2,
    name: { en: "Rann of Kutch", es: "Rann de Kutch", pt: "Rann de Kutch" },
    slug: { en: "rann-of-kutch", es: "rann-de-kutch", pt: "rann-de-kutch" },
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80",
    description: {
      en: "World's largest salt desert, home to the vibrant Rann Utsav festival, full moon white sands & Kutch handicrafts.",
      es: "El desierto de sal más grande del mundo, hogar del festival Rann Utsav y arenas blancas bajo la luna llena.",
      pt: "O maior deserto de sal do mundo, lar do festival Rann Utsav e areias brancas sob a lua cheia."
    },
    seoTitle: { en: "Rann of Kutch Travel Guide | White Salt Desert & Rann Utsav", es: "Guía de Viaje de Rann de Kutch | Desierto Blanco", pt: "Guia de Viagem de Rann de Kutch | Deserto Branco" },
    seoDesc: { en: "Experience Rann of Kutch: Full moon white desert, Rann Utsav tent city, Kalo Dungar & Kutchi embroidery.", es: "Viva el Rann de Kutch: desierto blanco en luna llena, festival Rann Utsav y artesanías.", pt: "Viva o Rann de Kutch: deserto branco na lua cheia, festival Rann Utsav e artesanatos." },
    seoKeywords: { en: "Rann of Kutch white desert, Rann Utsav Gujarat", es: "Desierto blanco de Kutch, Rann Utsav", pt: "Deserto branco de Kutch, Rann Utsav" },
    touristPlaces: [
      {
        name: { en: "Great Rann White Salt Desert", es: "Gran Desierto Blanco de Sal de Rann", pt: "Grande Deserto Branco de Sal de Rann" },
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=900&q=80",
        description: { en: "Vast expanse of cracked white salt marsh glistening magically during sunset and full moon nights.", es: "Vasta extensión de marisma de sal blanca que brilla bajo el sol poniente y la luna llena.", pt: "Vasta extensão de pântano de sal branco que brilha sob o sol poente e a lua cheia." }
      },
      {
        name: { en: "Kalo Dungar (Black Hill)", es: "Kalo Dungar (Colina Negra)", pt: "Kalo Dungar (Colina Negra)" },
        image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=900&q=80",
        description: { en: "Highest point in Kutch offering panoramic 360-degree views of the white desert meeting the sky.", es: "El punto más alto de Kutch con vistas panorámicas de 360 grados del desierto blanco.", pt: "O ponto mais alto de Kutch com vistas panorâmicas de 360 graus do deserto branco." }
      }
    ]
  },

  // ----------------------------------------------------
  // WEST BENGAL CITIES
  // ----------------------------------------------------
  {
    id: "kolkata",
    stateId: "west-bengal",
    isPublished: true,
    displayOrder: 1,
    name: { en: "Kolkata", es: "Kolkata", pt: "Kolkata" },
    slug: { en: "kolkata", es: "kolkata", pt: "kolkata" },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    description: {
      en: "City of Joy, cultural capital of India featuring Victoria Memorial, Howrah Bridge, yellow taxis & Durga Puja.",
      es: "La Ciudad de la Alegría, capital cultural con el Victoria Memorial, el puente Howrah y taxis amarillos.",
      pt: "A Cidade da Alegria, capital cultural com o Victoria Memorial, a ponte Howrah e táxis amarelos."
    },
    seoTitle: { en: "Kolkata Travel Guide | Victoria Memorial & Howrah Bridge", es: "Guía de Viaje de Kolkata | Victoria Memorial", pt: "Guia de Viagem de Kolkata | Victoria Memorial" },
    seoDesc: { en: "Discover Kolkata: Victoria Memorial marble palace, iconic Howrah cantilever bridge, Dakshineswar & sweets.", es: "Descubra Kolkata: palacio Victoria Memorial, puente Howrah y templos.", pt: "Descubra Kolkata: palácio Victoria Memorial, ponte Howrah e templos." },
    seoKeywords: { en: "Kolkata travel, Victoria Memorial, Howrah Bridge", es: "Viaje a Kolkata, Victoria Memorial", pt: "Viagem para Kolkata, Victoria Memorial" },
    touristPlaces: [
      {
        name: { en: "Victoria Memorial", es: "Victoria Memorial", pt: "Victoria Memorial" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: { en: "Grand white Makrana marble monument dedicated to Queen Victoria, surrounded by lush gardens and fountains.", es: "Imponente monumento de mármol blanco rodeado de hermosos jardines y fuentes.", pt: "Imponente monumento de mármore branco cercado por lindos jardins e fontes." }
      },
      {
        name: { en: "Howrah Bridge (Rabindra Setu)", es: "Puente Howrah (Rabindra Setu)", pt: "Ponte Howrah (Rabindra Setu)" },
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80",
        description: { en: "World-famous cantilever bridge over the Hooghly River connecting Kolkata with Howrah without nuts or bolts.", es: "Famoso puente voladizo sobre el río Hooghly que conecta Kolkata y Howrah.", pt: "Famosa ponte em balanço sobre o rio Hooghly conectando Kolkata e Howrah." }
      }
    ]
  },
  {
    id: "darjeeling",
    stateId: "west-bengal",
    isPublished: true,
    displayOrder: 2,
    name: { en: "Darjeeling", es: "Darjeeling", pt: "Darjeeling" },
    slug: { en: "darjeeling", es: "darjeeling", pt: "darjeeling" },
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=900&q=80",
    description: {
      en: "Queen of the Hills in Bengal, famed for Kanchenjunga mountain views, UNESCO Toy Train & aromatic Darjeeling tea.",
      es: "La Reina de las Colinas en Bengala, famosa por las vistas del Kanchenjunga y el tren de juguete UNESCO.",
      pt: "A Rainha das Colinas em Bengala, famosa pelas vistas do Kanchenjunga e pelo trem de brinquedo UNESCO."
    },
    seoTitle: { en: "Darjeeling Travel Guide | Tiger Hill Sunrise & Toy Train", es: "Guía de Viaje de Darjeeling | Tiger Hill", pt: "Guia de Viagem de Darjeeling | Tiger Hill" },
    seoDesc: { en: "Plan Darjeeling trip: Tiger Hill Kanchenjunga sunrise, Darjeeling Himalayan Railway toy train & tea estates.", es: "Planifique su viaje a Darjeeling: amanecer en Tiger Hill sobre el Kanchenjunga y tren de juguete.", pt: "Planeje sua viagem para Darjeeling: nascer do sol em Tiger Hill sobre o Kanchenjunga e trem de brinquedo." },
    seoKeywords: { en: "Darjeeling tea estates, Kanchenjunga view", es: "Darjeeling té, Kanchenjunga", pt: "Darjeeling chá, Kanchenjunga" },
    touristPlaces: [
      {
        name: { en: "Tiger Hill Sunrise Point", es: "Mirador de Amanecer Tiger Hill", pt: "Mirante do Nascer do Sol Tiger Hill" },
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=900&q=80",
        description: { en: "Famous vantage point offering spectacular sunrise views over Mount Kanchenjunga and Mount Everest.", es: "Famoso mirador con espectaculares vistas del amanecer sobre el monte Kanchenjunga.", pt: "Famoso mirante com espetaculares vistas do nascer do sol sobre o monte Kanchenjunga." }
      },
      {
        name: { en: "Darjeeling Himalayan Railway (Toy Train)", es: "Tren de Juguete de Darjeeling", pt: "Trem de Brinquedo de Darjeeling" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: { en: "UNESCO World Heritage narrow-gauge steam railway winding through mountain loops and tea gardens.", es: "Ferrocarril de vapor de vía estrecha Patrimonio de la Humanidad entre plantaciones de té.", pt: "Ferrovia a vapor de bitola estreita Patrimônio Mundial entre plantações de chá." }
      }
    ]
  },

  // ----------------------------------------------------
  // GOA CITIES
  // ----------------------------------------------------
  {
    id: "north-goa",
    stateId: "goa",
    isPublished: true,
    displayOrder: 1,
    name: { en: "North Goa", es: "Norte de Goa", pt: "Norte de Goa" },
    slug: { en: "north-goa", es: "norte-de-goa", pt: "norte-de-goa" },
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
    description: {
      en: "Vibrant beach hub featuring Baga, Calangute, Anjuna flea market, water sports & historic Fort Aguada.",
      es: "Vibrante centro de playas con Baga, Calangute, mercado de Anjuna, deportes acuáticos y el Fuerte Aguada.",
      pt: "Vibrante centro de praias com Baga, Calangute, mercado de Anjuna, esportes aquáticos e o Forte Aguada."
    },
    seoTitle: { en: "North Goa Travel Guide | Baga Beach & Fort Aguada", es: "Guía de Viaje del Norte de Goa | Playa Baga", pt: "Guia de Viagem do Norte de Goa | Praia Baga" },
    seoDesc: { en: "Explore North Goa: Baga beach nightlife, Aguada lighthouse, Chapora fort and Anjuna night markets.", es: "Explore el Norte de Goa: vida nocturna en Baga, faro de Aguada y fuerte Chapora.", pt: "Explore o Norte de Goa: vida noturna em Baga, farol de Aguada e forte Chapora." },
    seoKeywords: { en: "North Goa beaches, Baga beach", es: "Norte de Goa playas, Baga playa", pt: "Norte de Goa praias, Baga praia" },
    touristPlaces: [
      {
        name: { en: "Baga & Calangute Beaches", es: "Playas de Baga y Calangute", pt: "Praias de Baga e Calangute" },
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=80",
        description: { en: "Famous stretch of golden sands known for parasailing, beach shacks and lively sunset music.", es: "Famosa franja de arena dorada conocida por deportes acuáticos y chiringuitos.", pt: "Famosa faixa de areia dourada conhecida por esportes aquáticos e quiosques." }
      },
      {
        name: { en: "Fort Aguada & Lighthouse", es: "Fuerte Aguada y Faro", pt: "Forte Aguada e Farol" },
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        description: { en: "17th-century Portuguese fortress overlooking the Arabian Sea built to defend against enemy ships.", es: "Fortaleza portuguesa del siglo XVII con vistas panorámicas al Mar Arábigo.", pt: "Fortaleza portuguesa do século XVII com vistas panorâmicas para o Mar Arábico." }
      }
    ]
  },
  {
    id: "south-goa",
    stateId: "goa",
    isPublished: true,
    displayOrder: 2,
    name: { en: "South Goa", es: "Sur de Goa", pt: "Sul de Goa" },
    slug: { en: "south-goa", es: "sur-de-goa", pt: "sul-de-goa" },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    description: {
      en: "Serene paradise featuring crescent Palolem beach, luxury beachfront resorts, Dudhsagar waterfalls and heritage Portuguese mansions.",
      es: "Sereno paraíso con la playa de Palolem, resorts de lujo, cascadas de Dudhsagar y mansiones portuguesas.",
      pt: "Sereno paraíso com a praia de Palolem, resorts de luxo, cachoeiras de Dudhsagar e mansões portuguesas."
    },
    seoTitle: { en: "South Goa Travel Guide | Palolem Beach & Dudhsagar Waterfalls", es: "Guía de Viaje del Sur de Goa | Playa Palolem", pt: "Guia de Viagem do Sul de Goa | Praia Palolem" },
    seoDesc: { en: "Discover peaceful South Goa: Palolem crescent bay, Colva beach, Dudhsagar falls safari and luxury resorts.", es: "Descubra el tranquilo Sur de Goa: bahía de Palolem, playa de Colva y cascadas de Dudhsagar.", pt: "Descubra o tranquilo Sul de Goa: baía de Palolem, praia de Colva e cachoeiras de Dudhsagar." },
    seoKeywords: { en: "South Goa resort, Palolem beach", es: "Sur de Goa playa Palolem", pt: "Sul de Goa praia Palolem" },
    touristPlaces: [
      {
        name: { en: "Palolem Beach", es: "Playa Palolem", pt: "Praia Palolem" },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        description: { en: "Pristine crescent-shaped bay shaded by coconut palms with calm turquoise waters.", es: "Prístina bahía en forma de media luna rodeada de palmeras de coco.", pt: "Prístina baía em forma de meia-lua cercada por coqueiros." }
      },
      {
        name: { en: "Dudhsagar Waterfalls", es: "Cascadas de Dudhsagar", pt: "Cachoeiras de Dudhsagar" },
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
        description: { en: "Four-tiered spectacular milky waterfall located inside Bhagwan Mahavir Wildlife Sanctuary.", es: "Espectacular cascada de cuatro niveles rodeada de frondosa selva.", pt: "Espectacular cachoeira de quatro níveis cercada por floresta densa." }
      }
    ]
  },

  // ----------------------------------------------------
  // HIMACHAL PRADESH CITIES
  // ----------------------------------------------------
  {
    id: "shimla",
    stateId: "himachal-pradesh",
    isPublished: true,
    displayOrder: 1,
    name: { en: "Shimla", es: "Shimla", pt: "Shimla" },
    slug: { en: "shimla", es: "shimla", pt: "shimla" },
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
    description: {
      en: "Queen of the Hills, former British summer capital featuring historic Mall Road, Ridge promenade & Jakhoo Temple.",
      es: "La reina de las colinas, antigua capital de verano británica con la histórica Mall Road y Jakhoo Temple.",
      pt: "A rainha das colinas, antiga capital de verão britânica com a histórica Mall Road e Jakhoo Temple."
    },
    seoTitle: { en: "Shimla Travel Guide | Mall Road, Kufri & Toy Train", es: "Guía de Viaje de Shimla | Mall Road", pt: "Guia de Viagem de Shimla | Mall Road" },
    seoDesc: { en: "Plan Shimla vacation: Mall Road, Jakhoo Hanuman temple, Kufri snow hill and Kalka toy train.", es: "Planifique vacaciones en Shimla: Mall Road, templo Jakhoo y tren de juguete de Kalka.", pt: "Planeje férias em Shimla: Mall Road, templo Jakhoo e trem de brinquedo de Kalka." },
    seoKeywords: { en: "Shimla travel, Kufri snow", es: "Viaje a Shimla, Kufri", pt: "Viagem para Shimla, Kufri" },
    touristPlaces: [
      {
        name: { en: "Mall Road & The Ridge", es: "Mall Road y The Ridge", pt: "Mall Road e The Ridge" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: { en: "Pedestrian shopping boulevard lined with colonial architecture, shops and Christ Church.", es: "Bulevar peatonal con arquitectura colonial, tiendas y la Iglesia de Cristo.", pt: "Boulevard de compras de pedestres com arquitetura colonial e a Igreja de Cristo." }
      },
      {
        name: { en: "Jakhoo Hill & Temple", es: "Colina y Templo Jakhoo", pt: "Colina e Templo Jakhoo" },
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=900&q=80",
        description: { en: "Highest peak in Shimla hosting a giant 108-foot statue of Lord Hanuman amidst pine trees.", es: "Pico más alto de Shimla con una estatua gigante de 108 pies del Señor Hanuman.", pt: "Pico mais alto de Shimla com uma estátua gigante de 108 pés do Senhor Hanuman." }
      }
    ]
  },
  {
    id: "manali",
    stateId: "himachal-pradesh",
    isPublished: true,
    displayOrder: 2,
    name: { en: "Manali", es: "Manali", pt: "Manali" },
    slug: { en: "manali", es: "manali", pt: "manali" },
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
    description: {
      en: "Himalayan adventure haven featuring snow-covered Solang Valley, Hadimba wooden temple, and Rohtang Pass.",
      es: "Paraíso de aventura en el Himalaya con el valle de Solang cubierto de nieve, el templo Hadimba y Rohtang Pass.",
      pt: "Paraíso de aventura no Himalaia com o vale de Solang coberto de neve, o templo Hadimba e Rohtang Pass."
    },
    seoTitle: { en: "Manali Travel Guide | Solang Valley Snow & Hadimba Temple", es: "Guía de Viaje de Manali | Valle de Solang", pt: "Guia de Viagem de Manali | Vale de Solang" },
    seoDesc: { en: "Explore Manali: Solang Valley skiing & paragliding, Hadimba temple, Atal Tunnel and Rohtang Pass.", es: "Explore Manali: esquí y parapente en el Valle de Solang, templo Hadimba y Rohtang Pass.", pt: "Explore Manali: esqui e paragliding no Vale de Solang, templo Hadimba e Rohtang Pass." },
    seoKeywords: { en: "Manali travel, Solang valley snow", es: "Viaje a Manali, Valle de Solang", pt: "Viagem para Manali, Vale de Solang" },
    touristPlaces: [
      {
        name: { en: "Solang Valley Adventure Park", es: "Parque de Aventura del Valle de Solang", pt: "Parque de Aventura do Vale de Solang" },
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80",
        description: { en: "Famous adventure sports hub for paragliding, skiing, zorbing and snow scooter rides.", es: "Famoso centro de deportes de aventura como parapente, esquí y motos de nieve.", pt: "Famoso centro de esportes de aventura como paragliding, esqui e motos de neve." }
      },
      {
        name: { en: "Hadimba Temple", es: "Templo Hadimba", pt: "Templo Hadimba" },
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
        description: { en: "Ancient 16th-century wooden pagoda temple built in a dense cedar forest.", es: "Antiguo templo pagoda de madera del siglo XVI en un denso bosque de cedros.", pt: "Antigo templo pagode de madeira do século XVI em uma densa floresta de cedros." }
      }
    ]
  },

  // ----------------------------------------------------
  // UTTARAKHAND CITIES
  // ----------------------------------------------------
  {
    id: "rishikesh",
    stateId: "uttarakhand",
    isPublished: true,
    displayOrder: 1,
    name: { en: "Rishikesh", es: "Rishikesh", pt: "Rishikesh" },
    slug: { en: "rishikesh", es: "rishikesh", pt: "rishikesh" },
    image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=900&q=80",
    description: {
      en: "Yoga Capital of the World along the emerald Ganges, famed for Laxman Jhula, Ganga Aarti & white water rafting.",
      es: "Capital Mundial del Yoga a orillas del Ganges esmeralda, famosa por Laxman Jhula y rafting.",
      pt: "Capital Mundial do Yoga às margens do Ganges esmeralda, famosa por Laxman Jhula e rafting."
    },
    seoTitle: { en: "Rishikesh Travel Guide | Yoga Ashrams & White Water Rafting", es: "Guía de Viaje de Rishikesh | Yoga y Rafting", pt: "Guia de Viagem de Rishikesh | Yoga e Rafting" },
    seoDesc: { en: "Discover Rishikesh: Laxman Jhula bridge, Parmarth Niketan Ganga Aarti, Beatles Ashram & rafting.", es: "Descubra Rishikesh: puente Laxman Jhula, ceremonia Ganga Aarti y rafting en Shivpuri.", pt: "Descubra Rishikesh: ponte Laxman Jhula, cerimônia Ganga Aarti e rafting em Shivpuri." },
    seoKeywords: { en: "Rishikesh yoga, Ganges rafting", es: "Rishikesh yoga, rafting en Ganges", pt: "Rishikesh yoga, rafting no Ganges" },
    touristPlaces: [
      {
        name: { en: "Laxman Jhula & Ram Jhula", es: "Laxman Jhula y Ram Jhula", pt: "Laxman Jhula e Ram Jhula" },
        image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=900&q=80",
        description: { en: "Iconic suspension bridges spanning the holy Ganges river surrounded by temples and ashrams.", es: "Emblemáticos puentes colgantes sobre el sagrado río Ganges rodeados de templos.", pt: "Emblemáticas pontes pênseis sobre o sagrado rio Ganges cercadas por templos." }
      },
      {
        name: { en: "Parmarth Niketan Ganga Aarti", es: "Parmarth Niketan Ganga Aarti", pt: "Parmarth Niketan Ganga Aarti" },
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&q=80",
        description: { en: "Soul-stirring evening ritual of lights, chants and fire offerings along the banks of the Ganges.", es: "Conmovedor ritual nocturno de luces y cánticos a orillas del Ganges.", pt: "Emocionante ritual noturno de luzes e cânticos às margens do Ganges." }
      }
    ]
  },
  {
    id: "nainital",
    stateId: "uttarakhand",
    isPublished: true,
    displayOrder: 2,
    name: { en: "Nainital", es: "Nainital", pt: "Nainital" },
    slug: { en: "nainital", es: "nainital", pt: "nainital" },
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=900&q=80",
    description: {
      en: "Charming Lake District of India centered around eye-shaped emerald Naini Lake and surrounding Kumaon hills.",
      es: "Encantador distrito de lagos centrado en el esmeralda lago Naini y las colinas de Kumaon.",
      pt: "Encantador distrito de lagos centrado no esmeralda lago Naini e nas colinas de Kumaon."
    },
    seoTitle: { en: "Nainital Travel Guide | Naini Lake Boating & Snow View", es: "Guía de Viaje de Nainital | Lago Naini", pt: "Guia de Viagem de Nainital | Lago Naini" },
    seoDesc: { en: "Plan Nainital holiday: Naini Lake boating, Naina Devi temple, Snow View cable car & Mall Road.", es: "Planifique vacaciones en Nainital: paseos en barco por el lago Naini y teleférico Snow View.", pt: "Planeje férias em Nainital: passeios de barco pelo lago Naini e teleférico Snow View." },
    seoKeywords: { en: "Nainital lake boating, Kumaon hills", es: "Nainital lago barco", pt: "Nainital lago barco" },
    touristPlaces: [
      {
        name: { en: "Naini Lake Boating", es: "Paseos en Barco por el Lago Naini", pt: "Passeios de Barco pelo Lago Naini" },
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=900&q=80",
        description: { en: "Beautiful eye-shaped mountain lake surrounded by seven lush green peaks.", es: "Hermoso lago de montaña rodeado por siete picos verdes.", pt: "Lindo lago de montanha cercado por sete picos verdes." }
      },
      {
        name: { en: "Naina Devi Temple", es: "Templo Naina Devi", pt: "Templo Naina Devi" },
        image: "https://images.unsplash.com/photo-1547970810-dc0eac378882?w=900&q=80",
        description: { en: "Sacred Shakti Peeth temple situated on the northern shore of Naini Lake.", es: "Sagrado templo Shakti Peeth situado en la orilla norte del lago Naini.", pt: "Sagrado templo Shakti Peeth situado na margem norte do lago Naini." }
      }
    ]
  },

  // ----------------------------------------------------
  // KARNATAKA CITIES
  // ----------------------------------------------------
  {
    id: "hampi",
    stateId: "karnataka",
    isPublished: true,
    displayOrder: 1,
    name: { en: "Hampi", es: "Hampi", pt: "Hampi" },
    slug: { en: "hampi", es: "hampi", pt: "hampi" },
    image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
    description: {
      en: "UNESCO World Heritage boulder-strewn landscape housing ancient ruins of Vijayanagara Empire & Stone Chariot.",
      es: "Paisaje Patrimonio de la Humanidad repleto de rocas y ruinas del imperio Vijayanagara y el Carro de Piedra.",
      pt: "Paisagem Patrimônio Mundial repleta de rochas e ruínas do império Vijayanagara e a Carruagem de Pedra."
    },
    seoTitle: { en: "Hampi Travel Guide | Stone Chariot & Vijayanagara Ruins", es: "Guía de Viaje de Hampi | Carro de Piedra", pt: "Guia de Viagem de Hampi | Carruagem de Pedra" },
    seoDesc: { en: "Explore UNESCO Hampi: Virupaksha temple, Vittala stone chariot, Lotus Mahal and Coracle boat ride.", es: "Explore la Hampi Patrimonio de la Humanidad: templo Virupaksha y carro de piedra de Vittala.", pt: "Explore a Hampi Patrimônio Mundial: templo Virupaksha e carruagem de pedra de Vittala." },
    seoKeywords: { en: "Hampi ruins, Vijayanagara temple", es: "Hampi ruinas Vijayanagara", pt: "Hampi ruínas Vijayanagara" },
    touristPlaces: [
      {
        name: { en: "Vittala Temple & Stone Chariot", es: "Templo Vittala y Carro de Piedra", pt: "Templo Vittala e Carruagem de Pedra" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: { en: "Architectural wonder featuring the iconic Stone Chariot and musical carved pillars.", es: "Maravilla arquitectónica con el icónico carro de piedra y pilares musicales.", pt: "Maravilha arquitetônica com a icônica carruagem de pedra e pilares musicais." }
      },
      {
        name: { en: "Virupaksha Temple", es: "Templo Virupaksha", pt: "Templo Virupaksha" },
        image: "https://images.unsplash.com/photo-1600100397608-f09074bfa564?w=900&q=80",
        description: { en: "Active 7th-century Dravidian temple complex dedicated to Lord Shiva with a 50-meter gopuram.", es: "Activo complejo de templos del siglo VII dedicado al Señor Shiva con un gopuram de 50 metros.", pt: "Ativo complexo de templos do século VII dedicado ao Senhor Shiva com um gopuram de 50 metros." }
      }
    ]
  },
  {
    id: "coorg",
    stateId: "karnataka",
    isPublished: true,
    displayOrder: 2,
    name: { en: "Coorg", es: "Coorg", pt: "Coorg" },
    slug: { en: "coorg", es: "coorg", pt: "coorg" },
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=900&q=80",
    description: {
      en: "Scotland of India, famous for aromatic coffee plantations, mist-covered hills, Abbey Falls and Dubare elephants.",
      es: "La Escocia de India, famosa por sus plantaciones de café, cascadas de Abbey y campamento de elefantes.",
      pt: "A Escócia da Índia, famosa por suas plantações de café, cachoeiras de Abbey e acampamento de elefantes."
    },
    seoTitle: { en: "Coorg Travel Guide | Coffee Estates & Abbey Falls", es: "Guía de Viaje de Coorg | Plantaciones de Café", pt: "Guia de Viagem de Coorg | Plantações de Café" },
    seoDesc: { en: "Discover Coorg: Abbey waterfalls, Raja's seat sunset, Dubare elephant camp & Namdroling monastery.", es: "Descubra Coorg: cascadas de Abbey, mirador Raja's Seat y campamento de elefantes en Dubare.", pt: "Descubra Coorg: cachoeiras de Abbey, mirante Raja's Seat e acampamento de elefantes em Dubare." },
    seoKeywords: { en: "Coorg coffee plantations, Abbey falls", es: "Coorg café plantaciones", pt: "Coorg café plantações" },
    touristPlaces: [
      {
        name: { en: "Abbey Waterfalls", es: "Cascadas de Abbey", pt: "Cachoeiras de Abbey" },
        image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=900&q=80",
        description: { en: "Spectacular cascade tucked inside private spice plantations and coffee estates.", es: "Espectacular cascada escondida dentro de plantaciones privadas de café y especias.", pt: "Espectacular cachoeira escondida dentro de plantações privadas de café e especiarias." }
      },
      {
        name: { en: "Dubare Elephant Camp", es: "Campamento de Elefantes de Dubare", pt: "Acampamento de Elefantes de Dubare" },
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80",
        description: { en: "Interactive elephant training camp along the banks of the Kaveri River.", es: "Campamento interactivo de elefantes a orillas del río Kaveri.", pt: "Acampamento interativo de elefantes às margens do rio Kaveri." }
      }
    ]
  },

  // ----------------------------------------------------
  // DELHI CITY
  // ----------------------------------------------------
  {
    id: "new-delhi",
    stateId: "delhi",
    isPublished: true,
    displayOrder: 1,
    name: { en: "New Delhi", es: "Nueva Delhi", pt: "Nova Delhi" },
    slug: { en: "new-delhi", es: "nueva-delhi", pt: "nova-delhi" },
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
    description: {
      en: "Capital metropolis blending UNESCO Red Fort, Qutub Minar, Humayun Tomb, Lotus Temple & Chandni Chowk bazaars.",
      es: "Metrópoli capital que combina el Fuerte Rojo, Qutub Minar, la Tumba de Humayun y los bazares de Chandni Chowk.",
      pt: "Metrópole capital que combina o Forte Vermelho, Qutub Minar, o Túmulo de Humayun e os bazares de Chandni Chowk."
    },
    seoTitle: { en: "New Delhi Travel Guide | Red Fort, Qutub Minar & Bazaars", es: "Guía de Viaje de Nueva Delhi | Fuerte Rojo y Qutub Minar", pt: "Guia de Viagem de Nova Delhi | Forte Vermelho e Qutub Minar" },
    seoDesc: { en: "Explore Delhi: UNESCO monuments, India Gate, Humayun Tomb, Akshardham & Old Delhi street food.", es: "Explore Delhi: monumentos UNESCO, Puerta de la India, Tumba de Humayun y gastronomía.", pt: "Explore Delhi: monumentos UNESCO, Portal da Índia, Túmulo de Humayun e gastronomia." },
    seoKeywords: { en: "Delhi travel, Red fort, Qutub Minar", es: "Viaje a Delhi, Fuerte Rojo", pt: "Viagem para Delhi, Forte Vermelho" },
    touristPlaces: [
      {
        name: { en: "Red Fort (Lal Qila)", es: "Fuerte Rojo (Lal Qila)", pt: "Forte Vermelho (Lal Qila)" },
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
        description: { en: "Massive 17th-century red sandstone Mughal fortress that served as the palace fort of Shahjahanabad.", es: "Enorme fortaleza de arenisca roja del siglo XVII construida por el emperador Shah Jahan.", pt: "Enorme fortaleza de arenito vermelho do século XVII construída pelo imperador Shah Jahan." }
      },
      {
        name: { en: "Qutub Minar UNESCO Complex", es: "Complejo Qutub Minar", pt: "Complexo Qutub Minar" },
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80",
        description: { en: "World's tallest brick minaret standing at 73 meters built by Qutb-ud-din Aibak.", es: "El minarete de ladrillo más alto del mundo con 73 metros de altura.", pt: "O minarete de tijolos mais alto do mundo com 73 metros de altura." }
      },
      {
        name: { en: "Humayun's Tomb", es: "Tumba de Humayun", pt: "Túmulo de Humayun" },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80",
        description: { en: "UNESCO garden tomb that inspired the Taj Mahal architecture with red sandstone and white marble dome.", es: "Tumba jardín Patrimonio de la Humanidad que inspiró la arquitectura del Taj Mahal.", pt: "Túmulo jardim Patrimônio Mundial que inspirou a arquitetura do Taj Mahal." }
      }
    ]
  }

];

// Combine Rajasthan cities + new Non-Rajasthan cities
const finalCitiesList = [...rajasthanCities, ...newNonRajasthanCities];

fs.writeFileSync(path.join(process.cwd(), "src", "data", "fallback", "cities.json"), JSON.stringify(finalCitiesList, null, 2));
console.log(`Successfully compiled cities.json with ${finalCitiesList.length} total cities across all states!`);
