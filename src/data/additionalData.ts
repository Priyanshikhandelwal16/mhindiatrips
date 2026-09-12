// Types are defined in mockData.ts - we use 'any' to avoid circular imports
type StateData = any;
type TourPackage = any;
type FoodData = any;
type BlogData = any;

// Helper mock city generator (same as mockData.ts)
const createMockCity = (stateSlug: string, citySlug: string, nameEn: string, nameEs: string, namePt: string, taglineEn: string, img: string) => ({
  slug: citySlug,
  title: { en: nameEn, es: nameEs, pt: namePt },
  tagline: { en: taglineEn, es: `Descubre la magia de ${nameEs}`, pt: `Descubra a magia de ${namePt}` },
  image: img,
  gallery: [],
  overview: { en: `A historical city in ${stateSlug} known for heritage.`, es: `Una ciudad histórica en ${stateSlug} conocida por su patrimonio.`, pt: `Uma cidade histórica em ${stateSlug} conhecida por seu patrimônio.` },
  history: { en: "A rich past dating back centuries.", es: "Un pasado rico que se remonta a siglos.", pt: "Um passado rico que remonta a séculos." },
  culture: { en: "Local arts, music and heritage crafts.", es: "Artes locales, música y artesanía.", pt: "Artes locais, música e artesanato." },
  attractions: [],
  thingsToDo: [{ en: "Sightseeing", es: "Visitas guiadas", pt: "Visitas guiadas" }],
  hotels: [],
  localFood: { en: "Traditional regional recipes.", es: "Recetas tradicionales de la región.", pt: "Receitas tradicionais da região." },
  shopping: { en: "Heritage bazaars and local markets.", es: "Bazar histórico y mercados locales.", pt: "Bazar histórico e mercados locais." },
  weather: { en: "Pleasant winters and warm summers.", es: "Inviernos agradables y veranos cálidos.", pt: "Invernos agradáveis e verões quentes." },
  bestTime: { en: "October to March", es: "De octubre a marzo", pt: "De outubro a março" },
  travelTips: [],
  nearbyPlaces: [],
  suggestedItinerary: { en: "A detailed 2-day guide.", es: "Una guía detallada de 2 días.", pt: "Um guia detalhado de 2 dias." },
  faqs: []
});


// ============================================================
// ADDITIONAL DESTINATIONS (15 more states)
// ============================================================
export const additionalStates: StateData[] = [
  {
    slug: "karnataka",
    title: { en: "Karnataka", es: "Karnataka", pt: "Karnataka" },
    tagline: { en: "Ancient Ruins of Hampi, Coffee Plantations & Coastal Temples", es: "Ruinas Antiguas de Hampi, Plantaciones de Café y Templos Costeros", pt: "Ruinas Antigas de Hampi, Plantaçoes de Café e Templos Costeiros" },
    region: "South",
    image: "/images/karanataka.jpg",
    gallery: [],
    description: { en: "From the dramatic boulder landscape of UNESCO Hampi to the misty coffee hills of Coorg, Karnataka blends royal history with natural wonders.", es: "Desde el paisaje de rocas de Hampi hasta las colinas de café de Coorg, Karnataka mezcla historia real con maravillas naturales.", pt: "Desde a paisagem de pedras de Hampi até as colinas de café de Coorg, Karnataka mistura história real com maravilhas naturais." },
    history: { en: "Home to the Vijayanagara Empire, one of the richest kingdoms in world history.", es: "Hogar del Imperio Vijayanagara, uno de los reinos más ricos de la historia.", pt: "Lar do Império Vijayanagara, um dos reinos mais ricos da história." },
    culture: { en: "Yakshagana folk theater, Mysore paintings, and sandalwood crafts.", es: "Teatro folclórico Yakshagana y pinturas de Mysore.", pt: "Teatro folclórico Yakshagana e pinturas de Mysore." },
    localFood: { en: "Bisi Bele Bath, Mysore Masala Dosa, and Filter Coffee.", es: "Bisi Bele Bath y Dosa de Mysore.", pt: "Bisi Bele Bath e Dosa de Mysore." },
    bestTime: { en: "October to February.", es: "De octubre a febrero.", pt: "De outubro a fevereiro." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("karnataka", "mysore", "Mysore", "Mysore", "Mysore", "City of Royal Palaces & Sandalwood", "/images/karanataka.jpg")]
  },
  {
    slug: "punjab",
    title: { en: "Punjab", es: "Punjab", pt: "Punjab" },
    tagline: { en: "Golden Temple, Vibrant Culture & Hearty Cuisine", es: "Templo Dorado, Cultura Vibrante y Cocina Generosa", pt: "Templo Dourado, Cultura Vibrante e Culinária Generosa" },
    region: "North",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800",
    gallery: [],
    description: { en: "The land of five rivers, famous for the Golden Temple of Amritsar, Bhangra dance, and the most generous hospitality in India.", es: "La tierra de los cinco ríos, famosa por el Templo Dorado y la hospitalidad generosa.", pt: "A terra dos cinco rios, famosa pelo Templo Dourado e hospitalidade generosa." },
    history: { en: "Heartland of Sikh warriors and the Mughal-Sikh empire conflicts.", es: "Cuna de los guerreros Sikh y el imperio Mogol.", pt: "Berço dos guerreiros Sikh e do império Mogol." },
    culture: { en: "Bhangra and Giddha folk dances, Phulkari embroidery, and Punjabi music.", es: "Danzas Bhangra y Giddha, bordado Phulkari.", pt: "Danças Bhangra e Giddha, bordado Phulkari." },
    localFood: { en: "Butter Chicken, Sarson Ka Saag, Makki Ki Roti, Lassi.", es: "Pollo con mantequilla y Sarson Ka Saag.", pt: "Frango com manteiga e Sarson Ka Saag." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("punjab", "amritsar", "Amritsar", "Amritsar", "Amritsar", "The Sacred Golden Temple City", "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800")]
  },
  {
    slug: "west-bengal",
    title: { en: "West Bengal", es: "Bengala Occidental", pt: "Bengala Ocidental" },
    tagline: { en: "Cultural Capital Kolkata, Darjeeling Tea Hills & Sundarbans", es: "Capital Cultural Calcuta, Colinas de Darjeeling y Sundarbans", pt: "Capital Cultural Calcutá, Colinas de Darjeeling e Sundarbans" },
    region: "East",
    image: "/images/west bengal.jpg",
    gallery: [],
    description: { en: "A literary and artistic powerhouse. From colonial Kolkata to misty Darjeeling tea estates and the Royal Bengal Tiger territory of the Sundarbans.", es: "Una potencia literaria y artística. Desde la colonial Calcuta hasta las plantaciones de Darjeeling.", pt: "Uma potência literária e artística. Desde a colonial Calcutá até as plantações de Darjeeling." },
    history: { en: "The seat of British India's capital and the Bengal Renaissance.", es: "Sede de la capital de la India Británica.", pt: "Sede da capital da Índia Britânica." },
    culture: { en: "Durga Puja festival, Rabindra Sangeet music, and Bengali cinema.", es: "Festival Durga Puja y música Rabindra Sangeet.", pt: "Festival Durga Puja e música Rabindra Sangeet." },
    localFood: { en: "Rasgulla, Macher Jhol, Sandesh, Mishti Doi.", es: "Rasgulla y curry de pescado bengalí.", pt: "Rasgulla e curry de peixe bengali." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("west-bengal", "kolkata", "Kolkata", "Calcuta", "Calcutá", "The City of Joy & Cultural Capital", "/images/west bengal.jpg")]
  },
  {
    slug: "odisha",
    title: { en: "Odisha", es: "Odisha", pt: "Odisha" },
    tagline: { en: "Sun Temple of Konark, Tribal Art & Pristine Coastline", es: "Templo del Sol de Konark, Arte Tribal y Costa Virgen", pt: "Templo do Sol de Konark, Arte Tribal e Costa Virgem" },
    region: "East",
    image: "/images/odisha.jpg",
    gallery: [],
    description: { en: "Home to the Sun Temple of Konark, ancient Jagannath Temple, and one of India's longest undiscovered coastlines with pristine white sand beaches.", es: "Hogar del Templo del Sol de Konark y uno de las costas más vírgenes de la India.", pt: "Lar do Templo do Sol de Konark e uma das costas mais inexploradas da Índia." },
    history: { en: "The ancient Kalinga empire and site of Emperor Ashoka's transformation.", es: "El antiguo imperio Kalinga y la transformación del emperador Ashoka.", pt: "O antigo império Kalinga e a transformação do imperador Ashoka." },
    culture: { en: "Odissi classical dance, Pattachitra painting, and Rath Yatra festival.", es: "Danza Odissi y pintura Pattachitra.", pt: "Dança Odissi e pintura Pattachitra." },
    localFood: { en: "Dalma, Chhena Poda, Machha Besara fish curry.", es: "Dalma y curry de pescado local.", pt: "Dalma e curry de peixe local." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("odisha", "bhubaneswar", "Bhubaneswar", "Bhubaneswar", "Bhubaneswar", "Temple City of India", "/images/odisha.jpg")]
  },
  {
    slug: "gujarat",
    title: { en: "Gujarat", es: "Gujarat", pt: "Gujarat" },
    tagline: { en: "Asiatic Lions, White Desert Rann & Textile Heritage", es: "Leones Asiáticos, Desierto Blanco y Patrimonio Textil", pt: "Leões Asiáticos, Deserto Branco e Patrimônio Têxtil" },
    region: "West",
    image: "/images/gujarat.jpg",
    gallery: [],
    description: { en: "The last home of Asiatic lions, the surreal White Desert of Kutch, ancient stepwells, and one of India's richest textile and craft traditions.", es: "El último hogar de los leones asiáticos y el surrealista desierto blanco de Kutch.", pt: "O último lar dos leões asiáticos e o surreal Deserto Branco de Kutch." },
    history: { en: "Birthplace of Mahatma Gandhi and ancient Indus Valley trade port.", es: "Lugar de nacimiento de Mahatma Gandhi.", pt: "Local de nascimento de Mahatma Gandhi." },
    culture: { en: "Garba and Dandiya Raas dances, Patola silk weaving, and Rann Utsav festival.", es: "Danzas Garba y Dandiya, tejidos Patola.", pt: "Danças Garba e Dandiya, tecelagem Patola." },
    localFood: { en: "Dhokla, Gujarati Thali, Undhiyu, Khandvi.", es: "Dhokla y Thali Gujarati.", pt: "Dhokla e Thali Gujarati." },
    bestTime: { en: "November to February.", es: "De noviembre a febrero.", pt: "De novembro a fevereiro." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("gujarat", "ahmedabad", "Ahmedabad", "Ahmedabad", "Ahmedabad", "UNESCO Heritage City & Gandhi Ashram", "/images/gujarat.jpg")]
  },
  {
    slug: "assam",
    title: { en: "Assam", es: "Assam", pt: "Assam" },
    tagline: { en: "One-Horned Rhinos, Tea Gardens & River Brahmaputra", es: "Rinocerontes, Jardines de Té y Río Brahmaputra", pt: "Rinocerontes, Jardins de Chá e Rio Brahmaputra" },
    region: "North East",
    image: "/images/assam.jpg",
    gallery: [],
    description: { en: "The gateway to Northeast India, home to the mighty Brahmaputra river, Kaziranga's one-horned rhinos, and rolling tea garden estates.", es: "La puerta al noreste de la India, con rinocerontes de un cuerno y jardines de té.", pt: "A porta para o nordeste da Índia, com rinocerontes de um chifre e jardins de chá." },
    history: { en: "Ruled by the Ahom dynasty for 600 years, the longest ruling dynasty in India.", es: "Gobernado por la dinastía Ahom durante 600 años.", pt: "Governado pela dinastia Ahom durante 600 anos." },
    culture: { en: "Bihu folk dance, Assamese silk Muga weaving, and river boat racing.", es: "Danza Bihu y tejido de seda Muga.", pt: "Dança Bihu e tecelagem de seda Muga." },
    localFood: { en: "Duck curry, bamboo shoot dishes, and Assam tea with pitha sweets.", es: "Curry de pato y platos de bambú.", pt: "Curry de pato e pratos de bambu." },
    bestTime: { en: "November to April.", es: "De noviembre a abril.", pt: "De novembro a abril." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("assam", "guwahati", "Guwahati", "Guwahati", "Guwahati", "Gateway to Northeast India", "/images/assam.jpg")]
  },
  {
    slug: "andaman-islands",
    title: { en: "Andaman & Nicobar Islands", es: "Islas Andamán y Nicobar", pt: "Ilhas Andaman e Nicobar" },
    tagline: { en: "Turquoise Waters, Coral Reefs & Pristine Tropical Beaches", es: "Aguas Turquesas, Arrecifes de Coral y Playas Tropicales", pt: "Águas Turquesas, Recifes de Coral e Praias Tropicais" },
    region: "Islands",
    image: "/images/andaman islands.jpg",
    gallery: [],
    description: { en: "India's tropical island paradise in the Bay of Bengal. Crystal-clear waters, vibrant coral reefs, mangrove forests, and some of Asia's most untouched beaches.", es: "El paraíso tropical de la India en el Golfo de Bengala con playas vírgenes.", pt: "O paraíso tropical da Índia na Baía de Bengala com praias intocadas." },
    history: { en: "Home to indigenous Sentinelese tribes and the historic Cellular Jail.", es: "Hogar de tribus indígenas y la histórica Cárcel Celular.", pt: "Lar de tribos indígenas e da histórica Prisão Celular." },
    culture: { en: "Indigenous tribal heritage, colonial history, and marine biodiversity.", es: "Patrimonio tribal y biodiversidad marina.", pt: "Patrimônio tribal e biodiversidade marinha." },
    localFood: { en: "Fresh seafood, coconut-based curries, and tropical fruit.", es: "Mariscos frescos y curries de coco.", pt: "Frutos do mar frescos e curries de coco." },
    bestTime: { en: "October to May.", es: "De octubre a mayo.", pt: "De outubro a maio." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("andaman-islands", "port-blair", "Port Blair", "Port Blair", "Port Blair", "Gateway to Pristine Island Paradise", "/images/andaman islands.jpg")]
  },
  {
    slug: "uttarakhand",
    title: { en: "Uttarakhand", es: "Uttarakhand", pt: "Uttarakhand" },
    tagline: { en: "Land of the Gods, Rishikesh Yoga & Himalayan Treks", es: "Tierra de los Dioses, Yoga en Rishikesh y Trekking", pt: "Terra dos Deuses, Yoga em Rishikesh e Trekking" },
    region: "North",
    image: "/images/uttarakhand.jpg",
    gallery: [],
    description: { en: "The spiritual Himalayan state featuring sacred Char Dham pilgrimage, Rishikesh yoga capital, Jim Corbett tiger reserve, and spectacular mountain treks.", es: "El estado espiritual del Himalaya con peregrinación sagrada y yoga en Rishikesh.", pt: "O estado espiritual do Himalaia com peregrinação sagrada e yoga em Rishikesh." },
    history: { en: "Ancient seat of Vedic learning and meditation ashrams.", es: "Antiguo centro de aprendizaje védico.", pt: "Antigo centro de aprendizado védico." },
    culture: { en: "Ganga Aarti at Haridwar, yoga traditions, and Garhwali folk music.", es: "Ganga Aarti en Haridwar y tradiciones de yoga.", pt: "Ganga Aarti em Haridwar e tradições de yoga." },
    localFood: { en: "Kafuli, Aloo Ke Gutke, Bal Mithai, and Gahat Dal.", es: "Kafuli y platos montañeses.", pt: "Kafuli e pratos montanheses." },
    bestTime: { en: "March to June & September to November.", es: "De marzo a junio y septiembre a noviembre.", pt: "De março a junho e setembro a novembro." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("uttarakhand", "rishikesh", "Rishikesh", "Rishikesh", "Rishikesh", "Yoga Capital of the World", "/images/uttarakhand.jpg")]
  },
  {
    slug: "sikkim",
    title: { en: "Sikkim", es: "Sikkim", pt: "Sikkim" },
    tagline: { en: "Kanchenjunga Views, Buddhist Monasteries & Organic Paradise", es: "Vistas del Kanchenjunga, Monasterios Budistas y Paraíso Orgánico", pt: "Vistas do Kanchenjunga, Mosteiros Budistas e Paraíso Orgânico" },
    region: "North East",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
    gallery: [],
    description: { en: "India's cleanest and first fully organic state. Snow-capped Kanchenjunga, ancient Buddhist monasteries, alpine meadows, and colorful rhododendron forests.", es: "El estado más limpio de la India con vistas al Kanchenjunga y monasterios budistas.", pt: "O estado mais limpo da Índia com vistas ao Kanchenjunga e mosteiros budistas." },
    history: { en: "A former Buddhist kingdom merged with India in 1975.", es: "Un antiguo reino budista unido a la India en 1975.", pt: "Um antigo reino budista unido à Índia em 1975." },
    culture: { en: "Tibetan Buddhist monasteries, mask dances, and Lepcha tribal heritage.", es: "Monasterios budistas tibetanos y danzas de máscara.", pt: "Mosteiros budistas tibetanos e danças de máscara." },
    localFood: { en: "Momos, Thukpa noodle soup, Gundruk, and Tongba millet beer.", es: "Momos y sopa Thukpa.", pt: "Momos e sopa Thukpa." },
    bestTime: { en: "March to June & September to December.", es: "De marzo a junio y septiembre a diciembre.", pt: "De março a junho e setembro a dezembro." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("sikkim", "gangtok", "Gangtok", "Gangtok", "Gangtok", "Mountain Capital with Kanchenjunga Views", "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800")]
  },
  {
    slug: "telangana",
    title: { en: "Telangana", es: "Telangana", pt: "Telangana" },
    tagline: { en: "Hyderabad's Charminar, Biryani Capital & Golconda Fort", es: "Charminar de Hyderabad, Capital del Biryani y Fuerte Golconda", pt: "Charminar de Hyderabad, Capital do Biryani e Forte Golconda" },
    region: "South",
    image: "/images/telangana.jpg",
    gallery: [],
    description: { en: "The Nizam's royal city of Hyderabad blends Mughal grandeur with modern tech culture. Famous for Charminar, Golconda diamonds, and the world's best biryani.", es: "La ciudad real de los Nizam combina grandeza mogol con cultura tecnológica moderna.", pt: "A cidade real dos Nizam combina grandeza mogol com cultura tecnológica moderna." },
    history: { en: "Seat of the wealthy Nizam dynasty and the diamond trade capital.", es: "Sede de la rica dinastía Nizam y capital del comercio de diamantes.", pt: "Sede da rica dinastia Nizam e capital do comércio de diamantes." },
    culture: { en: "Pearl and bangle markets, Qawwali music, and Deccan paintings.", es: "Mercados de perlas y música Qawwali.", pt: "Mercados de pérolas e música Qawwali." },
    localFood: { en: "Hyderabadi Biryani, Haleem, Double Ka Meetha, and Irani Chai.", es: "Biryani de Hyderabad y Haleem.", pt: "Biryani de Hyderabad e Haleem." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("telangana", "hyderabad", "Hyderabad", "Hyderabad", "Hyderabad", "City of Pearls & Biryani Capital", "/images/telangana.jpg")]
  },
  {
    slug: "ladakh",
    title: { en: "Ladakh", es: "Ladakh", pt: "Ladakh" },
    tagline: { en: "Moonland Landscapes, Pangong Lake & Ancient Monasteries", es: "Paisajes Lunares, Lago Pangong y Monasterios Antiguos", pt: "Paisagens Lunares, Lago Pangong e Mosteiros Antigos" },
    region: "North",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800",
    gallery: [],
    description: { en: "The land of high passes and dramatic barren landscapes. Crystal-blue Pangong Lake, Nubra Valley sand dunes, and 1000-year-old Buddhist monasteries perched on cliffs.", es: "La tierra de los pasos altos con paisajes desérticos dramáticos y lagos de cristal azul.", pt: "A terra dos passes altos com paisagens desérticas dramáticas e lagos de cristal azul." },
    history: { en: "An ancient kingdom on the Silk Route, blending Tibetan and Indian cultures.", es: "Un antiguo reino en la Ruta de la Seda.", pt: "Um antigo reino na Rota da Seda." },
    culture: { en: "Tibetan Buddhist traditions, Hemis festival, and Ladakhi folk music.", es: "Tradiciones budistas tibetanas y festival Hemis.", pt: "Tradições budistas tibetanas e festival Hemis." },
    localFood: { en: "Thukpa, Skyu pasta, butter tea, and apricot jam.", es: "Thukpa y té con mantequilla.", pt: "Thukpa e chá com manteiga." },
    bestTime: { en: "June to September.", es: "De junio a septiembre.", pt: "De junho a setembro." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("ladakh", "leh", "Leh", "Leh", "Leh", "Gateway to the Roof of the World", "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800")]
  },
  {
    slug: "meghalaya",
    title: { en: "Meghalaya", es: "Meghalaya", pt: "Meghalaya" },
    tagline: { en: "Living Root Bridges, Wettest Place on Earth & Crystal Caves", es: "Puentes de Raíces Vivas, Lugar Más Lluvioso y Cuevas de Cristal", pt: "Pontes de Raízes Vivas, Lugar Mais Chuvoso e Cavernas de Cristal" },
    region: "North East",
    image: "/images/meghalaya.jpg",
    gallery: [],
    description: { en: "The Abode of Clouds with ancient living root bridges, the wettest place on Earth at Cherrapunji, crystal-clear river pools, and dramatic cliff-edge viewpoints.", es: "La Morada de las Nubes con puentes de raíces y el lugar más lluvioso del mundo.", pt: "A Morada das Nuvens com pontes de raízes e o lugar mais chuvoso do mundo." },
    history: { en: "Home to the matrilineal Khasi tribe, one of few surviving matriarchal societies.", es: "Hogar de la tribu matrilineal Khasi.", pt: "Lar da tribo matrilinear Khasi." },
    culture: { en: "Khasi tribal heritage, bamboo crafts, and Nongkrem dance festival.", es: "Patrimonio tribal Khasi y artesanía de bambú.", pt: "Patrimônio tribal Khasi e artesanato de bambu." },
    localFood: { en: "Jadoh rice, Doh Khleh pork salad, and Ki Kpu rice beer.", es: "Arroz Jadoh y ensalada de cerdo.", pt: "Arroz Jadoh e salada de porco." },
    bestTime: { en: "October to April.", es: "De octubre a abril.", pt: "De outubro a abril." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("meghalaya", "shillong", "Shillong", "Shillong", "Shillong", "Scotland of the East & Music Capital", "/images/meghalaya.jpg")]
  },
  {
    slug: "bihar",
    title: { en: "Bihar", es: "Bihar", pt: "Bihar" },
    tagline: { en: "Birthplace of Buddhism, Nalanda University & Ancient Wisdom", es: "Cuna del Budismo, Universidad de Nalanda y Sabiduría Antigua", pt: "Berço do Budismo, Universidade de Nalanda e Sabedoria Antiga" },
    region: "East",
    image: "/images/bihar.jpg",
    gallery: [],
    description: { en: "The cradle of civilization where Buddha attained enlightenment. Home to the ancient Nalanda University ruins and the sacred Mahabodhi Temple at Bodh Gaya.", es: "La cuna de la civilización donde Buda alcanzó la iluminación.", pt: "O berço da civilização onde Buda atingiu a iluminação." },
    history: { en: "Seat of the Maurya and Gupta empires, India's greatest ancient dynasties.", es: "Sede de los imperios Maurya y Gupta.", pt: "Sede dos impérios Maurya e Gupta." },
    culture: { en: "Madhubani painting, Chhath Puja sun worship, and Buddhist pilgrimage.", es: "Pintura Madhubani y peregrinación budista.", pt: "Pintura Madhubani e peregrinação budista." },
    localFood: { en: "Litti Chokha, Sattu Paratha, and Khaja sweet.", es: "Litti Chokha y Sattu Paratha.", pt: "Litti Chokha e Sattu Paratha." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("bihar", "bodh-gaya", "Bodh Gaya", "Bodh Gaya", "Bodh Gaya", "Where Buddha Attained Enlightenment", "/images/bihar.jpg")]
  },
  {
    slug: "andhra-pradesh",
    title: { en: "Andhra Pradesh", es: "Andhra Pradesh", pt: "Andhra Pradesh" },
    tagline: { en: "Tirupati Temple, Araku Valley & Spicy Coastal Cuisine", es: "Templo de Tirupati, Valle de Araku y Cocina Costera Picante", pt: "Templo de Tirupati, Vale de Araku e Culinária Costeira Picante" },
    region: "South",
    image: "/images/andhra pradesh.jpg",
    gallery: [],
    description: { en: "Home to the world's richest and most visited Hindu temple at Tirupati, the scenic Araku Valley coffee hills, and India's spiciest culinary traditions.", es: "Hogar del templo hindú más visitado del mundo y la cocina más picante de India.", pt: "Lar do templo hindu mais visitado do mundo e a culinária mais picante da Índia." },
    history: { en: "Seat of the Satavahana dynasty and ancient Buddhist stupas at Amaravati.", es: "Sede de la dinastía Satavahana y estupas budistas.", pt: "Sede da dinastia Satavahana e estupas budistas." },
    culture: { en: "Kuchipudi classical dance, Kalamkari textile art, and Kondapalli toys.", es: "Danza Kuchipudi y arte textil Kalamkari.", pt: "Dança Kuchipudi e arte têxtil Kalamkari." },
    localFood: { en: "Hyderabadi Biryani, Gongura Pachadi, Pesarattu, Pulihora.", es: "Biryani y Pesarattu.", pt: "Biryani e Pesarattu." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("andhra-pradesh", "tirupati", "Tirupati", "Tirupati", "Tirupati", "World's Most Visited Pilgrimage City", "/images/andhra pradesh.jpg")]
  },
  {
    slug: "chhattisgarh",
    title: { en: "Chhattisgarh", es: "Chhattisgarh", pt: "Chhattisgarh" },
    tagline: { en: "Tribal Heartland, Waterfalls & Unexplored Forests", es: "Corazón Tribal, Cascadas y Bosques Inexplorados", pt: "Coração Tribal, Cascatas e Florestas Inexploradas" },
    region: "Central",
    image: "https://images.unsplash.com/photo-1477584308802-e9c37c0f1676?q=80&w=800",
    gallery: [],
    description: { en: "India's best-kept secret. Dense sal forests, thundering Chitrakote waterfall (India's Niagara), ancient cave paintings, and vibrant tribal cultures untouched by time.", es: "El secreto mejor guardado de la India con cascadas y culturas tribales.", pt: "O segredo mais bem guardado da Índia com cascatas e culturas tribais." },
    history: { en: "Ancient Dakshin Kosala kingdom and prehistoric cave art sites.", es: "Antiguo reino Dakshin Kosala y arte rupestre.", pt: "Antigo reino Dakshin Kosala e arte rupestre." },
    culture: { en: "Gond and Bastar tribal art, Dhokra metal casting, and weekly haats.", es: "Arte tribal Gond y Bastar y fundición Dhokra.", pt: "Arte tribal Gond e Bastar e fundição Dhokra." },
    localFood: { en: "Red rice dishes, wild mushroom curries, and mahua flower treats.", es: "Arroz rojo y curry de champiñones silvestres.", pt: "Arroz vermelho e curry de cogumelos silvestres." },
    bestTime: { en: "November to March.", es: "De noviembre a marzo.", pt: "De novembro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("chhattisgarh", "jagdalpur", "Jagdalpur", "Jagdalpur", "Jagdalpur", "Gateway to Bastar Tribal Country", "https://images.unsplash.com/photo-1477584308802-e9c37c0f1676?q=80&w=800")]
  }
];


// ============================================================
// ADDITIONAL TOUR PACKAGES (12 more)
// ============================================================
export const additionalPackages: TourPackage[] = [
  {
    slug: "thailand-tropical-islands-temples-luxury-tour",
    title: { en: "Thailand Tropical Islands & Golden Temples Safari", es: "Tailandia Islas Tropicales y Templos Dorados", pt: "Tailândia Ilhas Tropicais e Templos Dourados" },
    tagline: { en: "Bangkok Grand Palace, Chiang Mai Sanctuaries & Phuket Island Cruises", es: "Gran Palacio de Bangkok, Santuarios de Chiang Mai y Cruceros en Phuket", pt: "Grande Palácio de Bangkok, Santuários de Chiang Mai e Cruzeiros em Phuket" },
    category: "Outbound",
    durationDays: 7,
    durationNights: 6,
    startingLocation: "Bangkok",
    endingLocation: "Phuket",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1506665531195-3566fe2b4dfa?w=1200&q=80",
    gallery: [],
    pricing: {
      startingPrice: 1299,
      pricePerPerson: 1039,
      currency: "USD",
      discountPercent: 20,
      discountPrice: 1039,
      seasonalDiscountNote: "December Off-Season Special 20% Off",
      saleBadge: "20% OFF - December Special",
      priceIncludes: "Private transfers, 5-star island resorts, internal flight, English-speaking guide, daily breakfast & speed-boat tour.",
      priceExcludes: "International airfare, visa fees, personal expense & tipping."
    },
    travelInfo: {
      startingPoint: "Bangkok Airport (BKK)",
      endingPoint: "Phuket Airport (HKT)",
      duration: "7 Days / 6 Nights",
      transportation: "Private Luxury Van & Speedboat",
      accommodation: "5-Star Beach Resorts & Boutique Villas",
      tourType: "Private Outbound Tour",
      bestTime: "November to April",
      languages: "English, Spanish, Portuguese"
    },
    policies: {
      cancellation: {
        en: "Free cancellation up to 30 days before departure. 50% refund within 15-29 days. Non-refundable within 14 days.",
        es: "Cancelación gratuita hasta 30 días antes de la salida. 50% de reembolso entre 15-29 días.",
        pt: "Cancelamento gratuito até 30 dias antes da partida."
      }
    },
    highlights: [
      { en: "Private boat tour to Phi Phi Islands & Maya Bay", es: "Tour privado en barco a las Islas Phi Phi", pt: "Passeio privado de barco às Ilhas Phi Phi" },
      { en: "Guided tour of Bangkok Grand Palace & Reclining Buddha", es: "Visita guiada al Gran Palacio de Bangkok", pt: "Visita guiada ao Grande Palácio de Bangkok" },
      { en: "Ethical Elephant Sanctuary day experience in Chiang Mai", es: "Día en el santuario ético de elefantes en Chiang Mai", pt: "Dia no santuário ético de elefantes em Chiang Mai" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Bangkok & Sunset Chao Phraya Cruise", es: "Llegada a Bangkok y Crucero", pt: "Chegada a Bangkok e Cruzeiro" }, desc: { en: "Welcome to Thailand! Transfer to luxury hotel by the river and enjoy an evening dinner cruise.", es: "¡Bienvenidos a Tailandia! Traslado al hotel de lujo.", pt: "Bem-vindo à Tailândia! Traslado para o hotel de luxo." } },
      { day: 2, title: { en: "Bangkok Temples & Floating Market", es: "Templos de Bangkok y Mercado Flotante", pt: "Templos de Bangkok e Mercado Flutuante" }, desc: { en: "Visit Wat Phra Kaew, Grand Palace, and Damnoen Saduak floating market.", es: "Visita al Gran Palacio y mercado flotante.", pt: "Visita ao Grande Palácio e mercado flutuante." } },
      { day: 3, title: { en: "Fly to Phuket & Beach Resort Check-in", es: "Vuelo a Phuket y Check-in en Resort", pt: "Voo para Phuket e Check-in no Resort" }, desc: { en: "Flight to Phuket. Relax on pristine Andaman Sea beaches.", es: "Vuelo a Phuket y descanso en la playa.", pt: "Voo para Phuket e relaxamento na praia." } }
    ],
    includedExperiences: [{ en: "Private speed-boat island cruise & snorkeling equipment", es: "Paseo privado en lancha rápida y equipo de snorkel", pt: "Passeio privado de barco e equipamento de mergulho" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "bali-indonesia-island-paradise-tour",
    title: { en: "Bali & Nusa Penida Luxury Island Escape", es: "Bali y Nusa Penida Escape de Lujo", pt: "Bali e Nusa Penida Escape de Luxo" },
    tagline: { en: "Ubud Rainforest Villas, Uluwatu Sunset Temples & Crystal Bay Snorkeling", es: "Villas en Ubud, Atardecer en Uluwatu y Snorkel en Nusa Penida", pt: "Villas em Ubud, Pôr do Sol em Uluwatu e Mergulho em Nusa Penida" },
    category: "Outbound",
    durationDays: 8,
    durationNights: 7,
    startingLocation: "Denpasar (Bali)",
    endingLocation: "Denpasar (Bali)",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
    gallery: [],
    pricing: {
      startingPrice: 1499,
      pricePerPerson: 1274,
      currency: "USD",
      discountPercent: 15,
      discountPrice: 1274,
      seasonalDiscountNote: "Early Bird 15% Off Outbound Offer",
      saleBadge: "15% OFF - Early Bird",
      priceIncludes: "Private chauffeur transfers, pool villa resort stays, Nusa Penida yacht trip & entrance tickets.",
      priceExcludes: "International flights & personal expenses."
    },
    travelInfo: {
      startingPoint: "Ngurah Rai International Airport (DPS)",
      endingPoint: "Ngurah Rai International Airport (DPS)",
      duration: "8 Days / 7 Nights",
      transportation: "Private SUV & Luxury Speedboat",
      accommodation: "5-Star Jungle Pool Villas & Beachfront Resorts",
      tourType: "Private Outbound Tour",
      bestTime: "April to October",
      languages: "English, Spanish, Portuguese"
    },
    policies: {
      cancellation: {
        en: "Free cancellation up to 30 days before travel.",
        es: "Cancelación gratuita hasta 30 días antes del viaje.",
        pt: "Cancelamento gratuito até 30 dias antes da viagem."
      }
    },
    highlights: [
      { en: "Stay in private infinity pool villa overlooking Ubud jungle", es: "Estancia en villa privada con piscina en Ubud", pt: "Estadia em villa privada com piscina em Ubud" },
      { en: "Uluwatu cliffside sunset temple & Kecak fire dance performance", es: "Templo Uluwatu al atardecer y danza Kecak", pt: "Templo Uluwatu ao pôr do sol e dança Kecak" },
      { en: "Day cruise to Nusa Penida: Kelingking T-Rex Beach & Angel's Billabong", es: "Crucero a Nusa Penida y playa Kelingking", pt: "Cruzeiro para Nusa Penida e praia Kelingking" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Bali & Ubud Jungle Resort Welcome", es: "Llegada a Bali y Traslado a Ubud", pt: "Chegada a Bali e Traslado para Ubud" }, desc: { en: "Arrival at Denpasar Airport, meet private driver and transfer to luxury Ubud resort.", es: "Llegada a Bali y traslado al resort de lujo en Ubud.", pt: "Chegada a Bali e traslado para o resort de luxo em Ubud." } }
    ],
    includedExperiences: [{ en: "Floating breakfast in private pool villa", es: "Desayuno flotante en piscina privada", pt: "Café da manhã flutuante na piscina privada" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "maldives-overwater-palace-luxury-retreat",
    title: { en: "Maldives Overwater Palace & Coral Reef Retreat", es: "Maldivas Palacio Sobre el Agua y Arrecifes de Coral", pt: "Maldivas Palácio Sobre a Água e Recifes de Coral" },
    tagline: { en: "Private Ocean Villa, Turquoise Lagoons & Sunset Dolphin Cruises", es: "Villa Privada Sobre el Océano, Lagunas Turquesas y Delfines al Atardecer", pt: "Villa Privada Sobre o Oceano, Lagoas Turquesas e Golfinhos ao Pôr do Sol" },
    category: "Outbound",
    durationDays: 5,
    durationNights: 4,
    startingLocation: "Male (Maldives)",
    endingLocation: "Male (Maldives)",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
    gallery: [],
    pricing: {
      startingPrice: 2499,
      pricePerPerson: 2499,
      currency: "USD",
      discountPercent: 0,
      priceIncludes: "Seaplane airport transfers, Overwater Villa with glass floor, all-inclusive luxury dining & sunset dolphin boat tour.",
      priceExcludes: "International flights."
    },
    travelInfo: {
      startingPoint: "Velana International Airport, Male (MLE)",
      endingPoint: "Velana International Airport, Male (MLE)",
      duration: "5 Days / 4 Nights",
      transportation: "Luxury Seaplane & Speedboat",
      accommodation: "5-Star Overwater Pool Villa",
      tourType: "Private Outbound Tour",
      bestTime: "November to April",
      languages: "English, Spanish, Portuguese"
    },
    policies: {
      cancellation: {
        en: "Free cancellation up to 30 days before departure.",
        es: "Cancelación gratuita hasta 30 días antes de la salida.",
        pt: "Cancelamento gratuito até 30 dias antes da partida."
      }
    },
    highlights: [
      { en: "Overwater bungalow with direct ocean stairs & glass floor panel", es: "Bungalow sobre el agua con acceso directo al océano", pt: "Bungalow sobre a água com acesso direto ao oceano" },
      { en: "Guided snorkeling with manta rays and sea turtles", es: "Snorkel guiado con mantarrayas y tortugas marinas", pt: "Mergulho guiado com arraias e tartarugas marinhas" },
      { en: "Romantic candlelight beach dinner under the stars", es: "Cena romántica a la luz de las velas en la playa", pt: "Jantar romântico na praia sob as estrelas" }
    ],
    itinerary: [
      { day: 1, title: { en: "Seaplane Transfer to Private Island Resort", es: "Traslado en Hidroavión a la Isla Privada", pt: "Traslado de Hidroavião para a Ilha Privada" }, desc: { en: "Scenic seaplane flight over turquoise atolls. Check in to Overwater Villa.", es: "Vuelo escénico en hidroavión sobre atolones.", pt: "Voo cênico de hidroavião sobre atóis." } }
    ],
    includedExperiences: [{ en: "Sunset dolphin cruise with champagne", es: "Crucero de delfines al atardecer con champán", pt: "Cruzeiro de golfinhos ao pôr do sol com champanhe" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "sri-lanka-heritage-wildlife-beach-odyssey",
    title: { en: "Sri Lanka Cultural Heritage & Wildlife Safari", es: "Sri Lanka Patrimonio Cultural y Safari de Vida Silvestre", pt: "Sri Lanka Patrimônio Cultural e Safári de Vida Selvagem" },
    tagline: { en: "Sigiriya Fortress Rock, Ella Tea Country Train & Yala Leopard Safaris", es: "Roca de Sigiriya, Tren del Té en Ella y Safari de Leopardos en Yala", pt: "Rocha de Sigiriya, Trem do Chá em Ella e Safári de Leopardos em Yala" },
    category: "Outbound",
    durationDays: 9,
    durationNights: 8,
    startingLocation: "Colombo",
    endingLocation: "Colombo",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=1200&q=80",
    gallery: [],
    pricing: {
      startingPrice: 1399,
      pricePerPerson: 1399,
      currency: "USD",
      discountPercent: 0,
      priceIncludes: "Private SUV chauffeur, boutique tea bungalow & beach resort stays, scenic Ella train tickets & Yala safari 4x4.",
      priceExcludes: "International flights."
    },
    travelInfo: {
      startingPoint: "Bandaranaike International Airport (CMB)",
      endingPoint: "Bandaranaike International Airport (CMB)",
      duration: "9 Days / 8 Nights",
      transportation: "Private SUV & Heritage Train",
      accommodation: "Heritage Colonial Bungalows & Beach Resorts",
      tourType: "Private Outbound Tour",
      bestTime: "December to April",
      languages: "English, Spanish, Portuguese"
    },
    policies: { cancellation: { en: "Free cancellation up to 30 days before departure.", es: "Cancelación gratuita 30 días antes.", pt: "Cancelamento gratuito 30 dias antes." } },
    highlights: [
      { en: "Climb UNESCO Sigiriya Lion Rock Fortress", es: "Escalada a la Fortaleza de la Roca del León en Sigiriya", pt: "Escalada à Fortaleza da Rocha do Leão em Sigiriya" },
      { en: "Scenic train journey through misty Nuwara Eliya tea hills", es: "Paseo panorámico en tren por las colinas de té", pt: "Passeio panorâmico de trem pelas colinas de chá" },
      { en: "4x4 jeep safari in Yala National Park searching for leopards", es: "Safari en jeep 4x4 en el Parque Nacional Yala", pt: "Safári em jeep 4x4 no Parque Nacional Yala" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival in Colombo & Transfer to Negombo", es: "Llegada a Colombo", pt: "Chegada a Colombo" }, desc: { en: "Welcome to Sri Lanka! Relaxation at coastal resort.", es: "¡Bienvenidos a Sri Lanka! Descanso junto al mar.", pt: "Bem-vindo ao Sri Lanka!" } }],
    includedExperiences: [{ en: "Traditional Ceylon tea tasting class in Nuwara Eliya", es: "Cata de té de Ceilán tradicional", pt: "Degustação de chá de Ceilão tradicional" }],
    travelTips: [], faqs: []
  },
  {
    slug: "nepal-himalayas-everest-vista-tour",
    title: { en: "Nepal & Himalayas Everest Mountain Vista Tour", es: "Nepal y Vistas del Everest en el Himalaya", pt: "Nepal e Vistas do Everest no Himalaia" },
    tagline: { en: "Kathmandu UNESCO Durbar Squares, Mt. Everest Mountain Flight & Pokhara Lakes", es: "Plazas Durbar de Katmandú, Vuelo de Montaña al Everest y Lagos de Pokhara", pt: "Praças Durbar de Catmandu, Voo de Montanha ao Everest e Lagos de Pokhara" },
    category: "Outbound",
    durationDays: 6,
    durationNights: 5,
    startingLocation: "Kathmandu",
    endingLocation: "Kathmandu",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
    gallery: [],
    pricing: {
      startingPrice: 1199,
      pricePerPerson: 1199,
      currency: "USD",
      discountPercent: 0,
      priceIncludes: "Private chauffeur, 5-star mountain view resorts, Everest scenic mountain flight & temple entry fees.",
      priceExcludes: "International flights."
    },
    travelInfo: {
      startingPoint: "Tribhuvan International Airport, Kathmandu (KTM)",
      endingPoint: "Tribhuvan International Airport, Kathmandu (KTM)",
      duration: "6 Days / 5 Nights",
      transportation: "Private SUV & Scenic Mountain Flight",
      accommodation: "5-Star Heritage & Mountain View Resorts",
      tourType: "Private Outbound Tour",
      bestTime: "October to December & March to May",
      languages: "English, Spanish, Portuguese"
    },
    policies: { cancellation: { en: "Free cancellation up to 30 days before departure.", es: "Cancelación gratuita 30 días antes.", pt: "Cancelamento gratuito 30 dias antes." } },
    highlights: [
      { en: "Panoramic Mountain Flight close to Mount Everest peak", es: "Vuelo panorámico de montaña al monte Everest", pt: "Voo panorâmico de montanha ao monte Everest" },
      { en: "Boating on Phewa Lake in Pokhara with Annapurna reflection", es: "Paseo en barco en el lago Phewa en Pokhara", pt: "Passeio de barco no lago Phewa em Pokhara" },
      { en: "Guided tour of Bhaktapur & Patan Durbar Squares", es: "Visita guiada a las plazas Durbar de Bhaktapur y Patan", pt: "Visita guiada às praças Durbar de Bhaktapur e Patan" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival in Kathmandu & Thamel Welcome", es: "Llegada a Katmandú", pt: "Chegada a Catmandu" }, desc: { en: "Transfer to luxury heritage hotel in Kathmandu.", es: "Traslado al hotel de lujo en Katmandú.", pt: "Traslado para o hotel de luxo em Catmandu." } }],
    includedExperiences: [{ en: "Buddhist singing bowl healing meditation session", es: "Sesión de meditación con cuencos tibetanos", pt: "Sessão de meditação com taças tibetanas" }],
    travelTips: [], faqs: []
  },
  {
    slug: "bhutan-thunder-dragon-spiritual-safari",
    title: { en: "Bhutan: Kingdom of Happiness & Tiger's Nest Safari", es: "Bután: Reino de la Felicidad y Nido del Tigre", pt: "Butão: Reino da Felicidade e Ninho do Tigre" },
    tagline: { en: "Paro Taktsang Monastery, Punakha Dzong Fortress & Traditional Hot Stone Baths", es: "Monasterio Taktsang Nido del Tigre, Fortaleza Punakha Dzong y Baños Tradicionales", pt: "Monastério Taktsang Ninho do Tigre, Fortaleza Punakha Dzong e Banhos Tradicionais" },
    category: "Outbound",
    durationDays: 7,
    durationNights: 6,
    startingLocation: "Paro (Bhutan)",
    endingLocation: "Paro (Bhutan)",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=1200&q=80",
    gallery: [],
    pricing: {
      startingPrice: 1899,
      pricePerPerson: 1899,
      currency: "USD",
      discountPercent: 0,
      priceIncludes: "Sustainable Development Fee (SDF), private guide, SUV, luxury lodge stays, all meals & Tiger's Nest entry.",
      priceExcludes: "International flight to Paro."
    },
    travelInfo: {
      startingPoint: "Paro International Airport (PBH)",
      endingPoint: "Paro International Airport (PBH)",
      duration: "7 Days / 6 Nights",
      transportation: "Private Luxury SUV",
      accommodation: "5-Star Bhutanese Heritage Lodges",
      tourType: "Private Outbound Tour",
      bestTime: "September to November & March to May",
      languages: "English, Spanish, Portuguese"
    },
    policies: { cancellation: { en: "Free cancellation up to 30 days before departure.", es: "Cancelación gratuita 30 días antes.", pt: "Cancelamento gratuito 30 dias antes." } },
    highlights: [
      { en: "Hike to the iconic Tiger's Nest (Paro Taktsang) cliffside monastery", es: "Caminata al emblemático monasterio Nido del Tigre", pt: "Caminhada ao emblemático monastério Ninho do Tigre" },
      { en: "Visit Punakha Dzong at the confluence of Pho Chhu & Mo Chhu rivers", es: "Visita a Punakha Dzong entre ríos sagrados", pt: "Visita a Punakha Dzong entre rios sagrados" },
      { en: "Traditional Bhutanese Hot Stone Herbal Bath & Archery lesson", es: "Baño herbal de piedras calientes y tiro con arco", pt: "Banho herbal de pedras quentes e tiro com arco" }
    ],
    itinerary: [{ day: 1, title: { en: "Fly into Paro Valley & Scenic Lodge Check-in", es: "Llegada al Valle de Paro", pt: "Chegada ao Vale de Paro" }, desc: { en: "Breathtaking flight over Mount Everest and Himalayan peaks into Paro.", es: "Vuelo espectacular sobre el Everest hacia Paro.", pt: "Voo espetacular sobre o Everest para Paro." } }],
    includedExperiences: [{ en: "Private Bhutanese archery demonstration & cultural dress tryout", es: "Demostración privada de tiro con arco y traje tradicional", pt: "Demonstração privada de tiro com arco e trajes tradicionais" }],
    travelTips: [], faqs: []
  },
  {
    slug: "laos-luang-prabang-heritage-mekong-escape",
    title: { en: "Laos: Luang Prabang Heritage & Mekong Cruise", es: "Laos: Patrimonio de Luang Prabang y Crucero por el Mekong", pt: "Laos: Patrimônio de Luang Prabang e Cruzeiro pelo Mekong" },
    tagline: { en: "UNESCO Temple Monks, Kuang Si Waterfalls & Mekong Sunset River Cruise", es: "Templos UNESCO de Luang Prabang, Cascadas Kuang Si y Crucero por el Mekong", pt: "Templos UNESCO de Luang Prabang, Cachoeiras Kuang Si e Cruzeiro pelo Mekong" },
    routeSubtitle: { en: "Luang Prabang - Pak Ou Caves - Kuang Si Falls - Vang Vieng - Vientiane", es: "Luang Prabang - Cuevas Pak Ou - Cascadas Kuang Si - Vang Vieng - Vientiane", pt: "Luang Prabang - Cavernas Pak Ou - Cachoeiras Kuang Si - Vang Vieng - Vientiane" },
    seasonalDiscountNote: { en: "Special seasonal discounts apply for bookings from May to October.", es: "Descuentos especiales de temporada aplican para reservas de Mayo a Octubre.", pt: "Descontos especiais de temporada se aplicam para reservas de Maio a Outubro." },
    category: "Outbound",
    country: "Laos",
    durationDays: 6,
    durationNights: 5,
    startingLocation: "Luang Prabang (Laos)",
    endingLocation: "Vientiane (Laos)",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=1200&q=80",
    gallery: [],
    pricing: { startingPrice: 1250, pricePerPerson: 1250, currency: "USD", discountPercent: 0, priceIncludes: "Boutique hotel stays, private guide, Mekong cruise & waterfall tickets.", priceExcludes: "International flights." },
    travelInfo: { startingPoint: "Luang Prabang Airport (LPQ)", endingPoint: "Wattay Airport Vientiane (VTE)", duration: "6 Days / 5 Nights", transportation: "Private SUV & Private Mekong Boat", accommodation: "Luxury Boutique Heritage Hotels", tourType: "Private Outbound Tour", bestTime: "November to March" },
    policies: { cancellation: { en: "Free cancellation up to 30 days before departure.", es: "Cancelación gratuita 30 días antes.", pt: "Cancelamento gratuito 30 dias antes." }, importantNotes: { en: "Respect monk alms-giving ritual protocols.", es: "Respetar el protocolo del ritual de limosna de los monjes.", pt: "Respeitar o protocolo do ritual dos monges." } },
    highlights: [
      { en: "Dawn Alms Giving Ceremony (Tak Bat) with Buddhist monks in Luang Prabang", es: "Ceremonia matutina de limosnas con monjes budistas", pt: "Cerimônia matinal de esmolas com monges budistas" },
      { en: "Swim in turquoise pools of Kuang Si Waterfalls", es: "Nadar en las piscinas turquesa de las cascadas Kuang Si", pt: "Nadar nas piscinas turquesa das cachoeiras Kuang Si" },
      { en: "Sunset cruise on the sacred Mekong River with Lao cuisine", es: "Crucero al atardecer en el río Mekong con cena laosiana", pt: "Cruzeiro ao pôr do sol no rio Mekong com jantar laosiano" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Luang Prabang & Sunset Mount Phousi", es: "Llegada a Luang Prabang", pt: "Chegada a Luang Prabang" }, desc: { en: "Transfer to boutique heritage hotel. Climb Mount Phousi for 360-degree sunset views.", es: "Traslado al hotel de lujo. Subida al Monte Phousi para ver el atardecer.", pt: "Traslado ao hotel de luxo. Subida ao Monte Phousi." }, morning: "Arrival at Luang Prabang International Airport and private transfer to luxury boutique hotel.", afternoon: "Guided walk through UNESCO colonial streets and climb 328 steps up Mount Phousi.", hotel: "Luang Prabang Heritage Resort" },
      { day: 2, title: { en: "Tak Bat Monks Alms & Kuang Si Waterfalls", es: "Monjes Tak Bat y Cascadas Kuang Si", pt: "Monges Tak Bat e Cachoeiras Kuang Si" }, desc: { en: "Witness quiet morning alms ritual followed by turquoise Kuang Si Waterfalls.", es: "Presencie el ritual matutino de los monjes y visite las cascadas Kuang Si.", pt: "Testemunhe o ritual matinal dos monges e visite Kuang Si." }, morning: "Dawn procession of saffron-robed monks (Tak Bat) & morning market stroll.", afternoon: "Drive to Kuang Si Waterfalls, swim in natural pools, and visit Bear Rescue Center.", hotel: "Luang Prabang Heritage Resort" }
    ],
    includedExperiences: [{ en: "Private Mekong River sunset boat cruise", es: "Crucero privado en barco por el Mekong al atardecer", pt: "Cruzeiro privado de barco pelo Mekong ao pôr do sol" }],
    exclusions: [{ en: "International flights", es: "Vuelos internacionales", pt: "Voos internacionais" }],
    travelTips: [], faqs: []
  },
  {
    slug: "bali-tropical-paradise-ubud-seminyak",
    title: { en: "Indonesia: Bali Tropical Paradise & Ubud Cultural Sanctuary", es: "Indonesia: Paraíso Tropical de Bali y Santuario Cultural de Ubud", pt: "Indonésia: Paraíso Tropical de Bali e Santuário Cultural de Ubud" },
    tagline: { en: "Tegallalang Rice Terraces, Uluwatu Temple Sunset & Luxury Beach Villa", es: "Terrazas de Arroz Tegallalang, Atardecer en Templo Uluwatu y Villa de Lujo", pt: "Terraços de Arroz Tegallalang, Pôr do Sol em Uluwatu e Vila de Luxo" },
    routeSubtitle: { en: "Denpasar - Ubud - Tegallalang - Tanha Lot - Uluwatu - Seminyak", es: "Denpasar - Ubud - Tegallalang - Tanah Lot - Uluwatu - Seminyak", pt: "Denpasar - Ubud - Tegallalang - Tanah Lot - Uluwatu - Seminyak" },
    seasonalDiscountNote: { en: "Special peak season rates apply from December 20 to January 10.", es: "Estos precios no son válidos para el período del 20 de Diciembre hasta el 10 de Enero (temporada alta).", pt: "Estes preços não são válidos para o período de 20 de Dezembro a 10 de Janeiro (alta temporada)." },
    category: "Outbound",
    country: "Indonesia",
    durationDays: 7,
    durationNights: 6,
    startingLocation: "Bali / Denpasar (Indonesia)",
    endingLocation: "Bali / Denpasar (Indonesia)",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
    gallery: [],
    pricing: { startingPrice: 1450, pricePerPerson: 1450, currency: "USD", discountPercent: 0, priceIncludes: "Private pool villa, chauffeur, temple entry fees, Kepak Kecak dance tickets & spa session.", priceExcludes: "International flights." },
    travelInfo: { startingPoint: "Ngurah Rai International Airport Denpasar (DPS)", endingPoint: "Ngurah Rai International Airport Denpasar (DPS)", duration: "7 Days / 6 Nights", transportation: "Private SUV Chauffeur", accommodation: "Luxury Private Pool Villa in Ubud & Beach Resort in Seminyak", tourType: "Private Outbound Tour", bestTime: "April to October" },
    policies: { cancellation: { en: "Free cancellation up to 30 days before departure.", es: "Cancelación gratuita 30 días antes.", pt: "Cancelamento gratuito 30 dias antes." } },
    highlights: [
      { en: "Emerald Tegallalang Rice Terraces walk & jungle swing", es: "Paseo por las terrazas de arroz Tegallalang y columpio en la selva", pt: "Caminhada pelos terraços de arroz Tegallalang e balanço na selva" },
      { en: "Cliffside Uluwatu Temple & traditional Kecak Fire Dance at sunset", es: "Templo Uluwatu en el acantilado y danza del fuego Kecak al atardecer", pt: "Templo Uluwatu na falésia e dança do fogo Kecak ao pôr do sol" },
      { en: "Private Balinese flower bath & luxury spa massage", es: "Baño de flores balinés privado y masaje en spa de lujo", pt: "Banho de flores balinês privado e massagem de luxo" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Bali & Check-in to Private Ubud Pool Villa", es: "Llegada a Bali y Villa en Ubud", pt: "Chegada a Bali e Vila em Ubud" }, desc: { en: "Private airport reception and transfer to luxury Ubud forest pool villa.", es: "Recepción privada en el aeropuerto y traslado a villa con piscina en Ubud.", pt: "Recepção privada e traslado para vila de luxo em Ubud." }, morning: "Arrival at Denpasar International Airport (DPS) and VIP greeting.", afternoon: "Check-in to private pool villa overlooking Ayung River valley.", hotel: "Ubud Luxury Pool Villa" },
      { day: 2, title: { en: "Tegallalang Rice Terraces & Tirta Empul Holy Water Temple", es: "Terrazas de Arroz y Templo Tirta Empul", pt: "Terraços de Arroz e Templo Tirta Empul" }, desc: { en: "Explore emerald rice terraces and experience sacred Balinese water purification.", es: "Explore las terrazas de arroz y purificación en templo de agua sagrada.", pt: "Explore os terraços de arroz e purificação em templo sagrado." }, morning: "Morning walk through Tegallalang rice fields & coffee plantation tasting.", afternoon: "Purification ritual at Tirta Empul water temple & Sacred Monkey Forest sanctuary.", hotel: "Ubud Luxury Pool Villa" }
    ],
    includedExperiences: [{ en: "Couples Balinese holistic aromatherapy spa package", es: "Paquete de spa holístico aromaterapéutico balinés", pt: "Pacote de spa holístico aromaterápico balinês" }],
    exclusions: [{ en: "International flights", es: "Vuelos internacionales", pt: "Voos internacionais" }],
    travelTips: [], faqs: []
  },
  {
    slug: "malaysia-kuala-lumpur-langkawi-getaway",
    title: { en: "Malaysia: Kuala Lumpur Towers & Langkawi Island Beach Retreat", es: "Malasia: Torres de Kuala Lumpur y Playas de la Isla Langkawi", pt: "Malásia: Torres de Kuala Lumpur e Praias da Ilha Langkawi" },
    tagline: { en: "Petronas Twin Towers, Batu Caves Rainbow Steps & Langkawi Luxury Beach Resort", es: "Torres Gemelas Petronas, Cuevas Batu y Resort de Lujo en Langkawi", pt: "Torres Gêmeas Petronas, Cavernas Batu e Resort de Luxo em Langkawi" },
    routeSubtitle: { en: "Kuala Lumpur - Batu Caves - Genting Highlands - Langkawi Island", es: "Kuala Lumpur - Cuevas Batu - Genting Highlands - Isla Langkawi", pt: "Kuala Lumpur - Cavernas Batu - Genting Highlands - Ilha Langkawi" },
    seasonalDiscountNote: { en: "Prices are subject to peak holiday surcharges from Dec 20 to Jan 5.", es: "Estos precios no son válidos para el período del 20 de Diciembre hasta el 05 de Enero.", pt: "Estes preços não são válidos para o período de 20 de Dezembro a 05 de Janeiro." },
    category: "Outbound",
    country: "Malaysia",
    durationDays: 6,
    durationNights: 5,
    startingLocation: "Kuala Lumpur (Malaysia)",
    endingLocation: "Langkawi (Malaysia)",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80",
    gallery: [],
    pricing: { startingPrice: 1180, pricePerPerson: 1180, currency: "USD", discountPercent: 0, priceIncludes: "5-star hotels, domestic flight to Langkawi, private guide & transfers.", priceExcludes: "International flights." },
    travelInfo: { startingPoint: "Kuala Lumpur International Airport (KUL)", endingPoint: "Langkawi Airport (LGK)", duration: "6 Days / 5 Nights", transportation: "Private Car & Flight to Langkawi", accommodation: "5-Star Petronas View Hotel KL & Luxury Beach Resort Langkawi", tourType: "Private Outbound Tour", bestTime: "Year Round" },
    policies: { cancellation: { en: "Free cancellation up to 30 days before departure.", es: "Cancelación gratuita 30 días antes.", pt: "Cancelamento gratuito 30 dias antes." } },
    highlights: [
      { en: "Skybridge walk at the iconic Petronas Twin Towers in Kuala Lumpur", es: "Paseo por la pasarela de las Torres Gemelas Petronas", pt: "Passeio pela passarela das Torres Gêmeas Petronas" },
      { en: "Climb the 272 rainbow steps at sacred Hindu Batu Caves", es: "Subida a los 272 escalones arcoíris de las Sagradas Cuevas Batu", pt: "Subida dos 272 degraus arco-íris das Cavernas Batu" },
      { en: "Langkawi SkyCab cable car & SkyBridge suspended high over rainforest", es: "Teleférico SkyCab de Langkawi y puente suspendido en la selva", pt: "Teleférico SkyCab de Langkawi e ponte suspensa na selva" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Kuala Lumpur & Petronas Twin Towers Skybridge", es: "Llegada a Kuala Lumpur", pt: "Chegada a Kuala Lumpur" }, desc: { en: "Transfer to luxury city hotel overlooking Petronas Twin Towers.", es: "Traslado al hotel de lujo frente a las Torres Gemelas.", pt: "Traslado ao hotel de luxo frente às Torres Gêmeas." }, morning: "Arrival at KLIA airport and chauffeur transfer to 5-star city hotel.", afternoon: "VIP access to Petronas Twin Towers Skybridge & Observatory Deck.", hotel: "Grand Hyatt Kuala Lumpur" },
      { day: 2, title: { en: "Batu Caves Rainbow Steps & Fly to Langkawi Island", es: "Cuevas Batu y Vuelo a Langkawi", pt: "Cavernas Batu e Voo para Langkawi" }, desc: { en: "Visit rainbow steps at Batu Caves then take a short flight to tropical Langkawi.", es: "Visite las escaleras arcoíris de Batu Caves y vuele a Langkawi.", pt: "Visite os degraus arco-íris de Batu Caves e voe para Langkawi." }, morning: "Guided tour of Batu Caves shrine & Lord Murugan giant golden statue.", afternoon: "Domestic flight to Langkawi island & beach resort check-in.", hotel: "The Ritz-Carlton Langkawi" }
    ],
    includedExperiences: [{ en: "Sunset catamaran sailing cruise around Langkawi archipelagos", es: "Crucero en catamarán al atardecer por el archipiélago de Langkawi", pt: "Cruzeiro em catamarã ao pôr do sol pelo arquipélago de Langkawi" }],
    exclusions: [{ en: "International flights", es: "Vuelos internacionales", pt: "Voos internacionais" }],
    travelTips: [], faqs: []
  },
  {
    slug: "singapore-futuristic-city-sentosa-retreat",
    title: { en: "Singapore: Futuristic Gardens, Marina Bay & Sentosa Escape", es: "Singapur: Jardines Futuristas, Marina Bay y Escapada a Sentosa", pt: "Singapura: Jardins Futuristas, Marina Bay e Sentosa" },
    tagline: { en: "Gardens by the Bay Supertrees, Marina Bay Sands SkyPark & Universal Sentosa", es: "Superárboles de Gardens by the Bay, Marina Bay Sands y Isla Sentosa", pt: "Superárvores de Gardens by the Bay, Marina Bay Sands e Ilha Sentosa" },
    routeSubtitle: { en: "Singapore City - Gardens by the Bay - Marina Bay Sands - Sentosa Island", es: "Singapur Ciudad - Gardens by the Bay - Marina Bay Sands - Isla Sentosa", pt: "Singapura Cidade - Gardens by the Bay - Marina Bay Sands - Ilha Sentosa" },
    seasonalDiscountNote: { en: "Peak pricing notice: Surcharges apply from Dec 20 to Jan 5 and F1 Grand Prix week.", es: "Estos precios no son válidos para el período del 20 de Diciembre hasta el 05 de Enero.", pt: "Estes preços não são válidos para o período de 20 de Dezembro a 05 de Janeiro." },
    category: "Outbound",
    country: "Singapore",
    durationDays: 5,
    durationNights: 4,
    startingLocation: "Singapore",
    endingLocation: "Singapore",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80",
    gallery: [],
    pricing: { startingPrice: 1590, pricePerPerson: 1590, currency: "USD", discountPercent: 0, priceIncludes: "5-star hotel, private airport transfers, Gardens by the Bay dome tickets & Night Safari entry.", priceExcludes: "International flights." },
    travelInfo: { startingPoint: "Singapore Changi Airport (SIN)", endingPoint: "Singapore Changi Airport (SIN)", duration: "5 Days / 4 Nights", transportation: "Private Luxury Chauffeur", accommodation: "5-Star Marina Bay Hotel", tourType: "Private Outbound Tour", bestTime: "Year Round" },
    policies: { cancellation: { en: "Free cancellation up to 30 days before departure.", es: "Cancelación gratuita 30 días antes.", pt: "Cancelamento gratuito 30 dias antes." } },
    highlights: [
      { en: "Illuminated Supertree Grove sound & light show at Gardens by the Bay", es: "Espectáculo de luz y sonido en los Superárboles de Gardens by the Bay", pt: "Show de luz e som nas Superárvores de Gardens by the Bay" },
      { en: "Panoramas from Marina Bay Sands SkyPark Observation Deck", es: "Vistas panorámicas desde el mirador SkyPark de Marina Bay Sands", pt: "Vistas panorâmicas do mirante SkyPark de Marina Bay Sands" },
      { en: "Private VIP tram experience at Singapore Night Safari", es: "Tranvía VIP privado en el famoso Night Safari de Singapur", pt: "Bonde VIP privado no famoso Night Safari de Singapura" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival at Changi Airport & Jewel Rain Vortex", es: "Llegada a Singapur y cascada Jewel", pt: "Chegada a Singapura e cascata Jewel" }, desc: { en: "Changi Airport Jewel waterfall tour and transfer to Marina Bay hotel.", es: "Llegada a Singapur, recorrido por Jewel y hotel en Marina Bay.", pt: "Chegada a Singapura, tour por Jewel e hotel em Marina Bay." }, morning: "Land at world-best Changi Airport and view the 40m indoor Rain Vortex waterfall.", afternoon: "Chauffeur transfer to luxury 5-star hotel and evening cocktail at rooftop lounge.", hotel: "Marina Bay Sands / The Fullerton Hotel" },
      { day: 2, title: { en: "Gardens by the Bay Domes & Supertree Light Show", es: "Jardines de la Bahía y Espectáculo Nocturno", pt: "Gardens by the Bay e Show Noturno" }, desc: { en: "Cloud Forest indoor waterfall dome and evening Supertree light show.", es: "Domo Cloud Forest con cascada interior y show de luces.", pt: "Domo Cloud Forest com cascata interior e show de luzes." }, morning: "Visit Flower Dome & Cloud Forest featuring the world's tallest indoor waterfall.", afternoon: "Evening walk on OCBC Skyway & witness Garden Rhapsody light show.", hotel: "Marina Bay Sands / The Fullerton Hotel" }
    ],
    includedExperiences: [{ en: "Singapore River scenic bumboat cruise through Clarke Quay", es: "Paseo en barco tradicional por el río Singapur en Clarke Quay", pt: "Passeio em barco tradicional pelo rio Singapura em Clarke Quay" }],
    exclusions: [{ en: "International flights", es: "Vuelos internacionales", pt: "Voos internacionais" }],
    travelTips: [], faqs: []
  },
  {
    slug: "thailand-golden-temples-phuket-islands",
    title: { en: "Thailand: Golden Temples of Bangkok & Phuket Island Beaches", es: "Tailandia: Templos Dorados de Bangkok y Playas de Phuket", pt: "Tailândia: Templos Dourados de Bangkok e Praias de Phuket" },
    tagline: { en: "Grand Palace Emerald Buddha, Longtail Boat River Tour & Phi Phi Islands Cruise", es: "Gran Palacio Buda de Esmeralda, Barco de Cola Larga y Crucero por las Islas Phi Phi", pt: "Grande Palácio Buda de Esmeralda, Barco Cauda Longa e Cruzeiro pelas Ilhas Phi Phi" },
    routeSubtitle: { en: "Bangkok - Grand Palace - Ayutthaya - Phuket - Phi Phi Islands - James Bond Island", es: "Bangkok - Gran Palacio - Ayutthaya - Phuket - Islas Phi Phi - Isla James Bond", pt: "Bangkok - Grande Palácio - Ayutthaya - Phuket - Ilhas Phi Phi - Ilha James Bond" },
    seasonalDiscountNote: { en: "These rates are valid except peak Christmas & New Year dates (Dec 20 to Jan 5).", es: "Estos precios no son válidos para el período del 20 de Diciembre hasta el 05 de Enero.", pt: "Estes preços não são válidos para o período de 20 de Dezembro a 05 de Janeiro." },
    category: "Outbound",
    country: "Thailand",
    durationDays: 8,
    durationNights: 7,
    startingLocation: "Bangkok (Thailand)",
    endingLocation: "Phuket (Thailand)",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1506665531195-3566fe294677?w=1200&q=80",
    gallery: [],
    pricing: { startingPrice: 1320, pricePerPerson: 1320, currency: "USD", discountPercent: 0, priceIncludes: "5-star hotels, domestic flight to Phuket, private guide, Phi Phi speedboat & temple tickets.", priceExcludes: "International flights." },
    travelInfo: { startingPoint: "Suvarnabhumi Airport Bangkok (BKK)", endingPoint: "Phuket International Airport (HKT)", duration: "8 Days / 7 Nights", transportation: "Private Chauffeur, Domestic Flight & Speedboat", accommodation: "5-Star Bangkok City Hotel & Luxury Ocean View Resort Phuket", tourType: "Private Outbound Tour", bestTime: "November to April" },
    policies: { cancellation: { en: "Free cancellation up to 30 days before departure.", es: "Cancelación gratuita 30 días antes.", pt: "Cancelamento gratuito 30 dias antes." } },
    highlights: [
      { en: "Grand Palace & Emerald Buddha Temple (Wat Phra Kaew) guided tour", es: "Visita al Gran Palacio y Templo del Buda de Esmeralda", pt: "Visita ao Grande Palácio e Templo do Buda de Esmeralda" },
      { en: "Longtail boat cruise along Chao Phraya river and Bangkok canals (klongs)", es: "Paseo en barco de cola larga por el río Chao Phraya y los canales de Bangkok", pt: "Passeio em barco cauda longa pelo rio Chao Phraya e canais de Bangkok" },
      { en: "Private catamaran speedboat trip to Maya Bay & Phi Phi Islands", es: "Excursión privada en lancha rápida a Maya Bay y las Islas Phi Phi", pt: "Excursão privada de lancha rápida a Maya Bay e Ilhas Phi Phi" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Bangkok & Chao Phraya River Sunset", es: "Llegada a Bangkok", pt: "Chegada a Bangkok" }, desc: { en: "Transfer to riverside 5-star hotel in Bangkok.", es: "Traslado al hotel de 5 estrellas junto al río en Bangkok.", pt: "Traslado ao hotel 5 estrelas junto ao rio em Bangkok." }, morning: "VIP greeting at Suvarnabhumi International Airport (BKK).", afternoon: "Check-in to riverside hotel and evening dinner cruise on Chao Phraya River.", hotel: "Mandarin Oriental / Anantara Riverside Bangkok" },
      { day: 2, title: { en: "Grand Palace, Wat Pho Reclining Buddha & Floating Market", es: "Gran Palacio y Buda Reclinado", pt: "Grande Palácio e Buda Reclinado" }, desc: { en: "Explore Bangkok's most sacred golden temples and canal life.", es: "Explore los templos dorados más sagrados de Bangkok.", pt: "Explore os templos dourados mais sagrados de Bangkok." }, morning: "Guided walk through Grand Palace, Emerald Buddha & Wat Pho's 46m Reclining Buddha.", afternoon: "Traditional longtail boat cruise through Thonburi canals & Wat Arun dawn temple.", hotel: "Mandarin Oriental / Anantara Riverside Bangkok" }
    ],
    includedExperiences: [{ en: "Full-day Phi Phi Islands speedboat tour with buffet lunch & snorkeling", es: "Excursión de día entero a las Islas Phi Phi con almuerzo y esnórquel", pt: "Excursão de dia inteiro às Ilhas Phi Phi com almoço e mergulho" }],
    exclusions: [{ en: "International flights", es: "Vuelos internacionales", pt: "Voos internacionais" }],
    travelTips: [], faqs: []
  },
  {
    slug: "maldives-luxury-water-villa-overwater-escape",
    title: { en: "Maldives: Luxury Overwater Villa & Marine Paradise Retreat", es: "Maldivas: Villa Sobre el Agua de Lujo y Paraíso Marino", pt: "Maldivas: Vila Sobre a Água de Luxo e Paraíso Marinho" },
    tagline: { en: "Private Pool Overwater Villa, Sunset Dolphin Cruise & Turquoise Lagoon", es: "Villa Sobre el Agua con Piscina Privada, Crucero con Delfines y Laguna Turquesa", pt: "Vila Sobre a Água com Piscina Privada, Cruzeiro com Golfinhos e Lagoa Turquesa" },
    routeSubtitle: { en: "Malé - North Malé Atoll - Luxury Private Island Resort - Coral Reefs", es: "Malé - Atolón de Malé Norte - Resort de Isla Privada - Arrecifes de Coral", pt: "Malé - Atol de Malé Norte - Resort de Ilha Privada - Recifes de Coral" },
    seasonalDiscountNote: { en: "These prices are not valid for the period from December 20 to January 10 (festive peak season).", es: "Estos precios no son válidos para el período del 20 de Diciembre hasta el 10 de Enero, ya que es temporada alta y los precios varían.", pt: "Estes preços não são válidos para o período de 20 de Dezembro a 10 de Janeiro (alta temporada)." },
    category: "Outbound",
    country: "Maldives",
    durationDays: 5,
    durationNights: 4,
    startingLocation: "Malé / Maldives",
    endingLocation: "Malé / Maldives",
    tourType: "Private International Tour",
    travelStyle: "Luxury Outbound",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
    gallery: [],
    pricing: { startingPrice: 2200, pricePerPerson: 2200, currency: "USD", discountPercent: 0, priceIncludes: "5-star overwater villa, speedboat / seaplane transfer, half board dining & dolphin cruise.", priceExcludes: "International flights." },
    travelInfo: { startingPoint: "Velana International Airport Malé (MLE)", endingPoint: "Velana International Airport Malé (MLE)", duration: "5 Days / 4 Nights", transportation: "Luxury Speedboat or Seaplane Flight", accommodation: "5-Star Water Villa with Private Infinity Pool", tourType: "Private Outbound Tour", bestTime: "November to April" },
    policies: { cancellation: { en: "Free cancellation up to 30 days before departure.", es: "Cancelación gratuita 30 días antes.", pt: "Cancelamento gratuito 30 dias antes." } },
    highlights: [
      { en: "Stay in a luxury overwater villa with direct ladder into the ocean lagoon", es: "Estancia en villa sobre el agua de lujo con acceso directo a la laguna", pt: "Estadia em vila sobre a água de luxo com acesso direto à lagoa" },
      { en: "Sunset luxury yacht cruise searching for wild spinner dolphins", es: "Crucero en yate al atardecer para avistar delfines giradores", pt: "Cruzeiro em iate ao pôr do sol para avistar golfinhos" },
      { en: "Guided house-reef snorkeling with sea turtles & gentle manta rays", es: "Esnórquel guiado en el arrecife con tortugas marinas y mantarrayas", pt: "Mergulho guiado no recife com tartarugas marinhas e raias-manta" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Malé & Seaplane / Speedboat to Private Island", es: "Llegada a Malé y Traslado al Resort", pt: "Chegada a Malé e Traslado ao Resort" }, desc: { en: "Scenic seaplane transfer over turquoise atolls to your private island resort.", es: "Vuelo panorámico en hidroavión sobre atolones hacia su resort de isla privada.", pt: "Voo panorâmico em hidroavião sobre atóis para seu resort privado." }, morning: "Arrival at Velana International Airport (MLE) and escort to private resort lounge.", afternoon: "Seaplane flight over coral atolls and check-in to luxury Overwater Villa.", hotel: "Luxury 5-Star Maldives Overwater Resort" },
      { day: 2, title: { en: "Lagoon Relaxation & Sunset Dolphin Yacht Cruise", es: "Relajación en la Laguna y Crucero con Delfines", pt: "Relaxamento na Lagoa e Cruzeiro com Golfinhos" }, desc: { en: "Relax in your private pool and embark on a sunset dolphin cruise.", es: "Relájese en su piscina privada y embárquese en un crucero de atardecer.", pt: "Relaxe na sua piscina privada e embarque em um cruzeiro ao pôr do sol." }, morning: "Floating breakfast in private villa pool and lagoon snorkeling.", afternoon: "Board traditional wooden Dhoni or luxury yacht for sunset dolphin cruise.", hotel: "Luxury 5-Star Maldives Overwater Resort" }
    ],
    includedExperiences: [{ en: "Complimentary floating breakfast served in private villa pool", es: "Desayuno flotante de cortesía servido en la piscina de la villa", pt: "Café da manhã flutuante de cortesia servido na piscina da vila" }],
    exclusions: [{ en: "International flights", es: "Vuelos internacionales", pt: "Voos internacionais" }],
    travelTips: [], faqs: []
  },
  {
    slug: "spiritual-india-varanasi-bodh-gaya-pilgrimage",
    title: { en: "Spiritual India: Varanasi & Bodh Gaya Pilgrimage", es: "India Espiritual: Peregrinación a Varanasi y Bodh Gaya", pt: "Índia Espiritual: Peregrinação a Varanasi e Bodh Gaya" },
    tagline: { en: "Sacred Ganges Ceremonies, Meditation & Buddhist Enlightenment Trail", es: "Ceremonias Sagradas del Ganges y Sendero de la Iluminación Budista", pt: "Cerimônias Sagradas do Ganges e Trilha da Iluminação Budista" },
    category: "Spiritual Tours",
    durationDays: 7,
    image: "/images/varanasi_ghats_aarti.png",
    gallery: [],
    highlights: [
      { en: "Dawn boat ride on the sacred Ganges river", es: "Paseo en barco al amanecer en el Ganges", pt: "Passeio de barco ao amanhecer no Ganges" },
      { en: "Private Ganga Aarti ceremony front-row viewing", es: "Vista de primera fila de la ceremonia Ganga Aarti", pt: "Vista de primeira fila da cerimônia Ganga Aarti" },
      { en: "Meditation session at Mahabodhi Temple, Bodh Gaya", es: "Sesión de meditación en el Templo Mahabodhi", pt: "Sessão de meditação no Templo Mahabodhi" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival in Varanasi", es: "Llegada a Varanasi", pt: "Chegada a Varanasi" }, desc: { en: "Transfer to heritage hotel by the ghats.", es: "Traslado al hotel junto a los ghats.", pt: "Traslado para o hotel junto aos ghats." } }],
    includedExperiences: [{ en: "Sanskrit chanting class and yoga session", es: "Clase de cánticos en sánscrito y yoga", pt: "Aula de cânticos em sânscrito e yoga" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "northeast-india-hidden-gems-explorer",
    title: { en: "Northeast India Hidden Gems Explorer", es: "Explorador de Gemas Ocultas del Noreste", pt: "Explorador de Joias Ocultas do Nordeste" },
    tagline: { en: "Meghalaya Root Bridges, Assam Tea & Kaziranga Rhinos", es: "Puentes de Raíces, Té de Assam y Rinocerontes de Kaziranga", pt: "Pontes de Raízes, Chá de Assam e Rinocerontes de Kaziranga" },
    category: "Adventure Tours",
    durationDays: 10,
    image: "/images/meghalaya.jpg",
    gallery: [],
    highlights: [
      { en: "Trek to the Double Decker Living Root Bridge", es: "Caminata al Puente de Raíces de Dos Pisos", pt: "Caminhada à Ponte de Raízes de Dois Andares" },
      { en: "Kaziranga National Park rhino safari", es: "Safari de rinocerontes en Kaziranga", pt: "Safári de rinocerontes em Kaziranga" },
      { en: "Tea estate walk and tasting in Jorhat", es: "Paseo y degustación en plantación de té", pt: "Passeio e degustação em plantação de chá" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival in Guwahati", es: "Llegada a Guwahati", pt: "Chegada a Guwahati" }, desc: { en: "Welcome dinner with traditional Assamese cuisine.", es: "Cena de bienvenida con cocina tradicional de Assam.", pt: "Jantar de boas-vindas com culinária tradicional de Assam." } }],
    includedExperiences: [{ en: "Local tribal village homestay experience", es: "Experiencia de hospedaje en aldea tribal", pt: "Experiência de hospedagem em aldeia tribal" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "karnataka-heritage-coffee-country",
    title: { en: "Karnataka Heritage & Coffee Country", es: "Patrimonio de Karnataka y País del Café", pt: "Patrimônio de Karnataka e País do Café" },
    tagline: { en: "UNESCO Hampi Ruins, Mysore Palace & Coorg Coffee Estates", es: "Ruinas de Hampi, Palacio de Mysore y Fincas de Café de Coorg", pt: "Ruínas de Hampi, Palácio de Mysore e Fazendas de Café de Coorg" },
    category: "Heritage Tours",
    durationDays: 8,
    image: "/images/hampi-ruins.jpg",
    gallery: [],
    highlights: [
      { en: "Private sunrise tour of Hampi boulder temples", es: "Tour privado al amanecer por los templos de Hampi", pt: "Tour privado ao amanhecer pelos templos de Hampi" },
      { en: "Mysore Palace illumination evening viewing", es: "Vista nocturna de la iluminación del Palacio de Mysore", pt: "Vista noturna da iluminação do Palácio de Mysore" },
      { en: "Coffee plantation stay and cupping experience", es: "Estancia en plantación y degustación de café", pt: "Estadia em plantação e degustação de café" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival in Bangalore", es: "Llegada a Bangalore", pt: "Chegada a Bangalore" }, desc: { en: "Transfer to boutique hotel, evening at MG Road.", es: "Traslado al hotel boutique.", pt: "Traslado para hotel boutique." } }],
    includedExperiences: [{ en: "Silk saree weaving demonstration in Mysore", es: "Demostración de tejido de seda en Mysore", pt: "Demonstração de tecelagem de seda em Mysore" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "andaman-islands-tropical-escape",
    title: { en: "Andaman Islands Tropical Escape", es: "Escapada Tropical a las Islas Andamán", pt: "Escapada Tropical às Ilhas Andaman" },
    tagline: { en: "Crystal Waters, Scuba Diving & Private Beach Resorts", es: "Aguas Cristalinas, Buceo y Resorts de Playa Privada", pt: "Águas Cristalinas, Mergulho e Resorts de Praia Privada" },
    category: "Beach Vacations",
    durationDays: 7,
    image: "/images/andaman islands.jpg",
    gallery: [],
    highlights: [
      { en: "Private speedboat to Havelock Island beaches", es: "Lancha privada a las playas de Havelock", pt: "Lancha privada para as praias de Havelock" },
      { en: "Scuba diving at pristine coral reefs", es: "Buceo en arrecifes de coral vírgenes", pt: "Mergulho em recifes de coral virgem" },
      { en: "Bioluminescent beach night kayaking", es: "Kayak nocturno en playa bioluminiscente", pt: "Caiaque noturno em praia bioluminescente" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival in Port Blair", es: "Llegada a Port Blair", pt: "Chegada a Port Blair" }, desc: { en: "Cellular Jail light show and seafood dinner.", es: "Show de luces en la Cárcel Celular.", pt: "Show de luzes na Prisão Celular." } }],
    includedExperiences: [{ en: "Glass-bottom boat coral viewing", es: "Vista de coral en barco de fondo de cristal", pt: "Vista de coral em barco de fundo de vidro" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "punjab-cultural-golden-temple-experience",
    title: { en: "Punjab Cultural & Golden Temple Experience", es: "Experiencia Cultural de Punjab y Templo Dorado", pt: "Experiência Cultural de Punjab e Templo Dourado" },
    tagline: { en: "Golden Temple, Wagah Border Ceremony & Punjabi Feasts", es: "Templo Dorado, Ceremonia de Wagah y Festines Punjabis", pt: "Templo Dourado, Cerimônia de Wagah e Banquetes Punjabis" },
    category: "Cultural Tours",
    durationDays: 5,
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800",
    gallery: [],
    highlights: [
      { en: "Golden Temple sunrise visit and langar meal", es: "Visita al amanecer al Templo Dorado", pt: "Visita ao amanhecer ao Templo Dourado" },
      { en: "Wagah Border flag lowering ceremony", es: "Ceremonia de arriar la bandera en Wagah", pt: "Cerimônia de baixar a bandeira em Wagah" },
      { en: "Traditional Punjabi cooking class and feast", es: "Clase de cocina punjabi y festín", pt: "Aula de culinária punjabi e banquete" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival in Amritsar", es: "Llegada a Amritsar", pt: "Chegada a Amritsar" }, desc: { en: "Evening Golden Temple visit for Palki Sahib ceremony.", es: "Visita nocturna al Templo Dorado.", pt: "Visita noturna ao Templo Dourado." } }],
    includedExperiences: [{ en: "Heritage walk through old Amritsar bazaars", es: "Paseo histórico por los bazares de Amritsar", pt: "Passeio histórico pelos bazares de Amritsar" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "uttarakhand-yoga-himalayan-adventure",
    title: { en: "Uttarakhand Yoga & Himalayan Adventure", es: "Yoga en Uttarakhand y Aventura en el Himalaya", pt: "Yoga em Uttarakhand e Aventura no Himalaia" },
    tagline: { en: "Rishikesh Yoga, White Water Rafting & Mountain Meditation", es: "Yoga en Rishikesh, Rafting y Meditación en las Montañas", pt: "Yoga em Rishikesh, Rafting e Meditação nas Montanhas" },
    category: "Wellness Tours",
    durationDays: 7,
    image: "/images/uttarakhand.jpg",
    gallery: [],
    highlights: [
      { en: "Private yoga sessions with certified gurus", es: "Sesiones privadas de yoga con gurús certificados", pt: "Sessões privadas de yoga com gurus certificados" },
      { en: "White water rafting on the Ganges", es: "Rafting en aguas bravas en el Ganges", pt: "Rafting em águas bravas no Ganges" },
      { en: "Sunrise meditation at hilltop ashrams", es: "Meditación al amanecer en ashrams de montaña", pt: "Meditação ao amanhecer em ashrams de montanha" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival in Rishikesh", es: "Llegada a Rishikesh", pt: "Chegada a Rishikesh" }, desc: { en: "Check-in to riverside yoga retreat resort.", es: "Check-in en resort de yoga junto al río.", pt: "Check-in em resort de yoga à beira do rio." } }],
    includedExperiences: [{ en: "Ganga Aarti fire ceremony at Triveni Ghat", es: "Ceremonia Ganga Aarti en Triveni Ghat", pt: "Cerimônia Ganga Aarti em Triveni Ghat" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "sikkim-darjeeling-himalayan-heights",
    title: { en: "Sikkim & Darjeeling Himalayan Heights", es: "Alturas del Himalaya de Sikkim y Darjeeling", pt: "Alturas do Himalaia de Sikkim e Darjeeling" },
    tagline: { en: "Kanchenjunga Sunrise, Tea Estates & Buddhist Monasteries", es: "Amanecer en Kanchenjunga, Plantaciones de Té y Monasterios", pt: "Amanhecer no Kanchenjunga, Plantações de Chá e Mosteiros" },
    category: "Mountain Tours",
    durationDays: 9,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
    gallery: [],
    highlights: [
      { en: "Kanchenjunga sunrise from Tiger Hill", es: "Amanecer del Kanchenjunga desde Tiger Hill", pt: "Amanhecer do Kanchenjunga de Tiger Hill" },
      { en: "Darjeeling Heritage Railway toy train ride", es: "Paseo en el tren de juguete de Darjeeling", pt: "Passeio no trem de brinquedo de Darjeeling" },
      { en: "Visit ancient Rumtek and Pemayangtse monasteries", es: "Visita a los monasterios Rumtek y Pemayangtse", pt: "Visita aos mosteiros Rumtek e Pemayangtse" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival in Bagdogra Airport", es: "Llegada al Aeropuerto de Bagdogra", pt: "Chegada ao Aeroporto de Bagdogra" }, desc: { en: "Scenic drive to Darjeeling through tea gardens.", es: "Paseo panorámico a Darjeeling.", pt: "Passeio panorâmico a Darjeeling." } }],
    includedExperiences: [{ en: "Private tea estate tour with master taster", es: "Tour privado de plantación de té", pt: "Tour privado de plantação de chá" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "complete-south-india-cultural-circuit",
    title: { en: "Complete South India Cultural Circuit", es: "Circuito Cultural Completo del Sur de India", pt: "Circuito Cultural Completo do Sul da Índia" },
    tagline: { en: "Kerala, Tamil Nadu, Karnataka — Temples, Backwaters & Spices", es: "Kerala, Tamil Nadu, Karnataka — Templos, Canales y Especias", pt: "Kerala, Tamil Nadu, Karnataka — Templos, Canais e Especiarias" },
    category: "Cultural Tours",
    durationDays: 14,
    image: "/images/kerala 3.jpg",
    gallery: [],
    highlights: [
      { en: "Alleppey luxury houseboat overnight cruise", es: "Crucero nocturno de lujo en Alleppey", pt: "Cruzeiro noturno de luxo em Alleppey" },
      { en: "Madurai Meenakshi Temple private evening tour", es: "Tour privado nocturno del Templo Meenakshi", pt: "Tour privado noturno do Templo Meenakshi" },
      { en: "Mysore silk market shopping with local guide", es: "Compras en el mercado de seda de Mysore", pt: "Compras no mercado de seda de Mysore" },
      { en: "Munnar tea estate stay with plantation walks", es: "Estancia en plantación de té de Munnar", pt: "Estadia em plantação de chá de Munnar" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival in Kochi", es: "Llegada a Kochi", pt: "Chegada a Kochi" }, desc: { en: "Check-in to heritage hotel in Fort Kochi.", es: "Check-in en hotel histórico en Fort Kochi.", pt: "Check-in em hotel histórico em Fort Kochi." } }],
    includedExperiences: [{ en: "Kathakali dance performance and backstage tour", es: "Espectáculo de danza Kathakali y tour backstage", pt: "Espetáculo de dança Kathakali e tour backstage" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "grand-indian-culinary-trail",
    title: { en: "Grand Indian Culinary Trail", es: "Gran Ruta Culinaria de la India", pt: "Grande Rota Culinária da Índia" },
    tagline: { en: "Delhi Street Food, Lucknow Kebabs, Hyderabad Biryani & Goan Seafood", es: "Comida Callejera de Delhi, Kebabs de Lucknow, Biryani y Mariscos de Goa", pt: "Comida de Rua de Delhi, Kebabs de Lucknow, Biryani e Frutos do Mar de Goa" },
    category: "Food & Culinary",
    durationDays: 11,
    image: "/images/indian_cuisine_feast.png",
    gallery: [],
    highlights: [
      { en: "Old Delhi guided street food crawl with 12 tastings", es: "Recorrido guiado de comida callejera en Delhi", pt: "Roteiro guiado de comida de rua em Delhi" },
      { en: "Private cooking class with Lucknow master chef", es: "Clase de cocina privada con chef de Lucknow", pt: "Aula de culinária privada com chef de Lucknow" },
      { en: "Hyderabadi biryani masterclass experience", es: "Masterclass de biryani de Hyderabad", pt: "Masterclass de biryani de Hyderabad" },
      { en: "Fresh catch to plate seafood experience in Goa", es: "Experiencia de mariscos frescos en Goa", pt: "Experiência de frutos do mar frescos em Goa" }
    ],
    itinerary: [{ day: 1, title: { en: "Delhi — Spice Market & Street Food", es: "Delhi — Mercado de Especias", pt: "Delhi — Mercado de Especiarias" }, desc: { en: "Evening food walk through Chandni Chowk.", es: "Paseo gastronómico por Chandni Chowk.", pt: "Passeio gastronômico por Chandni Chowk." } }],
    includedExperiences: [{ en: "Farm-to-table organic cooking in Kerala", es: "Cocina orgánica de la granja a la mesa en Kerala", pt: "Culinária orgânica da fazenda à mesa em Kerala" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "india-luxury-palace-hotel-circuit",
    title: { en: "India Luxury Palace Hotel Circuit", es: "Circuito de Hoteles Palacio de Lujo de India", pt: "Circuito de Hotéis Palácio de Luxo da Índia" },
    tagline: { en: "Stay in Taj, Oberoi & Heritage Royal Palaces Across India", es: "Estancia en Palacios Reales Taj y Oberoi por toda India", pt: "Estadia em Palácios Reais Taj e Oberoi por toda a Índia" },
    category: "Luxury Tours",
    durationDays: 12,
    image: "/images/rajasthan_fort_sunset.png",
    gallery: [],
    highlights: [
      { en: "3 nights at Taj Lake Palace floating on Lake Pichola", es: "3 noches en Taj Lake Palace flotando en el Lago Pichola", pt: "3 noites no Taj Lake Palace flutuando no Lago Pichola" },
      { en: "Royal dinner at Umaid Bhawan Palace, Jodhpur", es: "Cena real en Umaid Bhawan Palace, Jodhpur", pt: "Jantar real no Umaid Bhawan Palace, Jodhpur" },
      { en: "Private elephant polo match at heritage resort", es: "Partido privado de polo de elefantes", pt: "Partida privada de polo de elefantes" }
    ],
    itinerary: [{ day: 1, title: { en: "Arrival at Udaipur Lake Palace", es: "Llegada al Palacio del Lago en Udaipur", pt: "Chegada ao Palácio do Lago em Udaipur" }, desc: { en: "Boat transfer to Taj Lake Palace, champagne welcome.", es: "Traslado en barco al Taj Lake Palace.", pt: "Traslado de barco ao Taj Lake Palace." } }],
    includedExperiences: [{ en: "Butler service and royal treatment throughout", es: "Servicio de mayordomo y trato real", pt: "Serviço de mordomo e tratamento real" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "india-photography-expedition",
    title: { en: "India Photography Expedition", es: "Expedición Fotográfica por India", pt: "Expedição Fotográfica pela Índia" },
    tagline: { en: "Capture Rajasthan Colors, Varanasi Ghats & Kerala Landscapes", es: "Capture los Colores de Rajastán, los Ghats de Varanasi y Kerala", pt: "Capture as Cores do Rajastão, os Ghats de Varanasi e Kerala" },
    category: "Special Interest",
    durationDays: 10,
    image: "/images/varanasi_ghats_aarti.png",
    gallery: [],
    highlights: [
      { en: "Professional photography guide throughout", es: "Guía fotográfico profesional durante todo el viaje", pt: "Guia fotográfico profissional durante toda a viagem" },
      { en: "Golden hour access to iconic monument locations", es: "Acceso a hora dorada en monumentos icónicos", pt: "Acesso à hora dourada em monumentos icônicos" },
      { en: "Portrait sessions with colorful local artisans", es: "Sesiones de retrato con artesanos locales", pt: "Sessões de retrato com artesãos locais" }
    ],
    itinerary: [{ day: 1, title: { en: "Delhi — Blue Hour at Humayun's Tomb", es: "Delhi — Hora Azul en la Tumba de Humayun", pt: "Delhi — Hora Azul no Túmulo de Humayun" }, desc: { en: "Evening photography session at historic monuments.", es: "Sesión fotográfica nocturna en monumentos.", pt: "Sessão fotográfica noturna em monumentos." } }],
    includedExperiences: [{ en: "Post-processing workshop with local photographer", es: "Taller de posproducción fotográfica", pt: "Oficina de pós-produção fotográfica" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "india-family-adventure-package",
    title: { en: "India Family Adventure Package", es: "Paquete de Aventura Familiar en India", pt: "Pacote de Aventura Familiar na Índia" },
    tagline: { en: "Kid-Friendly Experiences, Wildlife Safaris & Cultural Fun", es: "Experiencias para Niños, Safaris y Diversión Cultural", pt: "Experiências para Crianças, Safáris e Diversão Cultural" },
    category: "Family Tours",
    durationDays: 10,
    image: "/images/ranthambore_tiger_safari.png",
    gallery: [],
    highlights: [
      { en: "Ranthambore tiger safari with child-friendly naturalist", es: "Safari de tigres con naturalista para niños", pt: "Safári de tigres com naturalista para crianças" },
      { en: "Jaipur puppet show and block printing workshop", es: "Espectáculo de marionetas y taller de estampado", pt: "Espetáculo de marionetas e oficina de estampagem" },
      { en: "Kerala houseboat with kids' fishing activity", es: "Casa-barco en Kerala con actividad de pesca", pt: "Casa-barco em Kerala com atividade de pesca" }
    ],
    itinerary: [{ day: 1, title: { en: "Delhi — Fun Family Welcome", es: "Delhi — Bienvenida Familiar", pt: "Delhi — Boas-vindas Familiar" }, desc: { en: "Interactive Delhi treasure hunt and tuk-tuk ride.", es: "Búsqueda del tesoro interactiva en Delhi.", pt: "Caça ao tesouro interativa em Delhi." } }],
    includedExperiences: [{ en: "Child-friendly meals and flexible scheduling", es: "Comidas para niños y horarios flexibles", pt: "Refeições para crianças e horários flexíveis" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "rajasthan-khajuraho-varanasi-luxury-journey",
    title: {
      en: "Rajasthan Heritage, Khajuraho & Varanasi Journey",
      es: "Viaje a Rajasthan con Varanasi",
      pt: "Viagem ao Rajastão, Khajuraho e Varanasi"
    },
    tagline: {
      en: "Discover the royal treasures of Rajasthan, the erotic temples of Khajuraho, and the eternal spirituality of Varanasi",
      es: "Descubre los tesoros reales de Rajasthan, los templos eróticos de Khajuraho y la espiritualidad eterna de Varanasi",
      pt: "Descubra os tesouros reais do Rajastão, os templos eróticos de Khajuraho e a espiritualidade eterna de Varanasi"
    },
    category: "Rajasthan Tours",
    durationDays: 18,
    image: "/images/varanasi_ghats_aarti.png",
    gallery: [],
    highlights: [
      {
        en: "Visit the mystical Taj Mahal at sunrise",
        es: "Visita el místico Taj Mahal al amanecer",
        pt: "Visite o místico Taj Mahal ao amanhecer"
      },
      {
        en: "Explore the famous open-air art gallery havelis of Mandawa and Nawalgarh in Shekhawati",
        es: "Explora las famosas havelis de arte al aire libre de Mandawa y Nawalgarh en Shekhawati",
        pt: "Explore as famosas havelis de arte ao ar livre de Mandawa e Nawalgarh em Shekhawati"
      },
      {
        en: "Camel ride across the Sam Sand Dunes in Jaisalmer",
        es: "Paseo en camello por las dunas de Sam en Jaisalmer",
        pt: "Passeio de camelo pelas dunas de areia de Sam em Jaisalmer"
      },
      {
        en: "Explore the carved Jain temples of Ranakpur and erotic temples of Khajuraho",
        es: "Explora los templos jainistas tallados de Ranakpur y los eróticos de Khajuraho",
        pt: "Explore os templos jainistas entalhados de Ranakpur e templos eróticos de Khajuraho"
      },
      {
        en: "Sunrise boat cruise on the sacred Ganges River in Varanasi",
        es: "Paseo en barco al amanecer por el sagrado río Ganges en Varanasi",
        pt: "Cruzeiro de barco ao amanhecer no sagrado Rio Gange em Varanasi"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: {
          en: "Arrival in Delhi",
          es: "Delhi: Llegada a Delhi",
          pt: "Chegada a Deli"
        },
        desc: {
          en: "Welcome to India! Upon arrival, we will greet you at the airport. Our driver will hold a sign with your name. We will transfer you to your hotel, where we will deliver the necessary travel documents (hotel vouchers, domestic flight tickets, and train tickets if booked). Overnight in Delhi.",
          es: "¡Bienvenidos a la India! A su llegada le recibiremos en el aeropuerto, les esperará nuestro chofer con un cartel con su nombre. Le llevaremos a su hotel, dónde le entregaremos los documentos necesarios para su viaje, (reservas de hotel, billetes de avión interno y tren (si lo ha contratado en su viaje)). Noche en Delhi.",
          pt: "Bem-vindo à Índia! À chegada, iremos recebê-lo no aeroporto, o nosso motorista esperará com uma placa com o seu nome. Levamo-lo ao seu hotel, onde entregaremos os documentos de viagem necessários (vouchers de hotel, bilhetes de voo doméstico e de comboio, se contratados). Noite em Deli."
        }
      },
      {
        day: 2,
        title: {
          en: "Delhi Sightseeing",
          es: "Delhi",
          pt: "Deli"
        },
        desc: {
          en: "After breakfast, we begin with a guided tour of New Delhi: India Gate, President's House, Humayun's Tomb, Qutub Minar, and Laxmi Narayan Temple. After lunch, visit Old Delhi: Jama Masjid, Red Fort, and Gandhi Memorial. Overnight in Delhi.",
          es: "Después del desayuno, empezamos con una visita guiada por la ciudad nueva (New Delhi): India Gate, President’s Viajes India House, Humayun’s Tomb, Qutab Minar (la más grande torre en piedra tallada en India) y Laxmi Narayan Temple. Después de la comida visitaremos la antigua Delhi (Old Delhi): Jama Masjid (una de las más grandes mezquitas en Asia, se puede visitar desde fuera), Red Fort (fuerte que se construyó durante los años 1638 hasta 1648 cuando la cultura Mughal estaba en alza y desde dónde el fuerte se puede ver el rio Jamuna) y Gandhi Memorial. Noche en Delhi.",
          pt: "Após o pequeno-almoço, começamos com uma visita guiada por Nova Deli: Porta da Índia, Casa do Presidente, Túmulo de Humayun, Qutub Minar e Templo Laxmi Narayan. Após o almoço, visita a Velha Deli: Jama Masjid, Forte Vermelho e Memorial de Gandhi. Noite em Deli."
        }
      },
      {
        day: 3,
        title: {
          en: "Delhi to Mandawa & Nawalgarh (Shekhawati Art Heritage)",
          es: "Delhi – Mandawa y Nawalgarh (Herencia Shekhawati): Por carretera",
          pt: "Deli para Mandawa e Nawalgarh"
        },
        desc: {
          en: "After breakfast, drive to Mandawa and Nawalgarh in the Shekhawati region. Famous as the open-air art gallery of Rajasthan, explore grand merchant havelis adorned with exquisite hand-painted frescoes and medieval fort architecture. Overnight in a restored heritage haveli.",
          es: "Después del desayuno, ruta hacia Mandawa y Nawalgarh en Shekhawati. Conocida como la galería de arte al aire libre de Rajasthan, visite sus majestuosas havelis de comerciantes decoradas con hermosos frescos pintados a mano. Noche en una haveli histórica.",
          pt: "Após o pequeno-almoço, viagem de carro para Mandawa e Nawalgarh na região de Shekhawati. Famosa como a galeria de arte ao ar livre do Rajastão, explore imponentes havelis decoradas com afrescos."
        }
      },
      {
        day: 4,
        title: {
          en: "Mandawa to Bikaner",
          es: "Mandawa – Bikaner: Por carretera",
          pt: "Mandawa para Bikaner"
        },
        desc: {
          en: "Early morning after breakfast, we head to Bikaner. Upon arrival, check in at your hotel. Afterwards, visit the imposing Junagarh Fort, built between 1588 and 1593 by Maharaja Rai Singh. Then, visit the camel breeding farm to see different breeds and witness camel milking (where you can try camel milk, ice cream, or coffee). If time permits, visit the famous Karni Mata Rat Temple in Deshnok. Overnight at the hotel.",
          es: "Por la mañana temprano, después del desayuno, nos dirigiremos hacia Bikaner. Al llegar, realizaremos el registro en su hotel. Posteriormente, visitaremos la imponente fortaleza de Junagarh, construida entre 1588 y 1593 por el Maharajá Jai Singh. A continuación, nos trasladaremos a la granja de cría de camellos, donde tendrás la oportunidad de observar distintas razas de camellos y presenciar el proceso de ordeño. Alojamiento en el hotel.",
          pt: "De manhã cedo após o pequeno-almoço, seguimos para Bikaner. À chegada, check-in no hotel. Depois, visita ao imponente Forte de Junagarh. Em seguida, visita à quinta de criação de camelos (onde poderá provar o leite de camelo). Noite no hotel."
        }
      },
      {
        day: 5,
        title: {
          en: "Bikaner to Jaisalmer Desert Escape",
          es: "Bikaner – Jaisalmer: Por carretera",
          pt: "Bikaner para Jaisalmer"
        },
        desc: {
          en: "In the morning after breakfast, depart for Jaisalmer, the Golden City. Upon arrival, check-in at the hotel. Later, go on an excursion to Sam Sand Dunes, where you will enjoy a 30-minute camel ride. Watch the magnificent sunset over the dunes and experience traditional desert folk music and dance. Overnight in Jaisalmer.",
          es: "Por la mañana, después del desayuno, partiremos hacia Jaisalmer. Al llegar, haremos el registro en el hotel. Más tarde, realizaremos una excursión a Sam (Sand Dunes), donde disfrutarás de un paseo en camello de unos 30 minutos. En el desierto podrás contemplar la magnífica puesta de sol y disfrutar del ambiente local con cantos y danzas tradicionales. Noche en el alojamiento.",
          pt: "De manhã após o pequeno-almoço, partimos para Jaisalmer. À chegada, check-in no hotel. Mais tarde, excursão às Dunas de Sam com passeio de camelo de 30 minutos, pôr do sol e música tradicional no deserto. Noite no alojamento."
        }
      },
      {
        day: 6,
        title: {
          en: "Jaisalmer Golden City Exploration",
          es: "Jaisalmer",
          pt: "Jaisalmer"
        },
        desc: {
          en: "After breakfast, enjoy a full-day tour of the Golden City, Jaisalmer. Start at the artificial Gadisar Lake, visit the inside of the living Jaisalmer Fort, Jain temples, and beautifully carved Havelis (mansions). Enjoy free time to shop in the fort's local bazaars. Overnight in Jaisalmer.",
          es: "Después del desayuno visita durante todo el día de la ciudad de Oro, Jaisalmer. Empezaremos la visita en el lago artificial de Gadisar, visitáremos la zona de la fortaleza que rodea toda una ciudad dentro de la ciudad. Visitáremos diferentes atracciones, cómo los templos jainistas y los edificios tallados. Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, visita de dia inteiro à Cidade Dourada de Jaisalmer: Lago Gadisar, Forte de Jaisalmer, templos jainistas e antigas mansões (Havelis) entalhadas. Noite no alojamento."
        }
      },
      {
        day: 7,
        title: {
          en: "Jaisalmer to Jodhpur Blue City Tour",
          es: "Jaisalmer – Jodhpur: Por carretera",
          pt: "Jaisalmer para Jodhpur"
        },
        desc: {
          en: "In the morning after breakfast, head to Jodhpur. Upon arrival, check in at the hotel. Visit the majestic Mehrangarh Fort towering over the Blue City. Enjoy views of the blue houses from the top. Later, visit the Jaswant Thada memorial and stroll around the Clock Tower and the local bazaars. Overnight in Jodhpur.",
          es: "Por la mañana, después del desayuno, nos dirigiremos a Jodhpur. Al llegar, haremos el registro en el hotel. Visitaremos el majestuoso Mehrangarh Fort, disfrutaremos de una impresionante vista de la ciudad azul. Por la tarde, visitaremos la Torre del Reloj, el bullicioso centro comercial de la plaza. Noche en el alojamiento.",
          pt: "De manhã após o pequeno-almoço, seguimos para Jodhpur. À chegada, check-in no hotel. Visita ao majestoso Forte Mehrangarh com vistas da cidade azul, Jaswant Thada e Torre do Relógio. Noite no alojamento."
        }
      },
      {
        day: 8,
        title: {
          en: "Jodhpur to Udaipur via Ranakpur Temples",
          es: "Jodhpur – Udaipur: Por carretera",
          pt: "Jodhpur para Udaipur"
        },
        desc: {
          en: "In the morning after breakfast, drive to Udaipur. En route, visit Ranakpur to explore the 15th-century Jain temple, the largest in the world, with 1,444 uniquely carved pillars. Continue to Udaipur. In the evening, enjoy a boat cruise on Lake Pichola, capturing views of the Lake Palace and Jagmandir. Overnight in Udaipur.",
          es: "Por la mañana, después del desayuno, nos dirigiremos a Udaipur. En la ruta visitaremos Ranakpur, donde exploraremos los templos jainistas del siglo XV, destacando el templo jainista más grande del mundo con 1.444 pilares tallados. Por la tarde, daremos un paseo en barca por el lago Pichhola. Noche en el alojamiento.",
          pt: "De manhã após o pequeno-almoço, seguimos para Udaipur. No caminho, visita ao impressionante Templo Jainista de Ranakpur com 1.444 pilares esculpidos. Cruzeiro ao entardecer no Lago Pichola em Udaipur. Noite no alojamento."
        }
      },
      {
        day: 9,
        title: {
          en: "Udaipur Lake City Sightseeing",
          es: "Udaipur",
          pt: "Udaipur"
        },
        desc: {
          en: "After breakfast, spend the day exploring Udaipur, the 'Venice of the East'. Visit the City Palace with its marble and peacock-decorated rooms, Saheliyon-ki-Bari (the Garden of Maidens), and the Jagdish Temple. Walk around local streets and markets. Overnight in Udaipur.",
          es: "Después del desayuno, dedicaremos todo el día a una visita turística por Udaipur. Comenzaremos en el City Palace, continuaremos con la visita a Saheliyon Ki Bari, unos jardines preciosos, y al templo de Jagdish, ubicado en el centro de la ciudad. Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, visita de dia inteiro a Udaipur: Palácio da Cidade com quartos decorados, Saheliyon-ki-Bari (Jardim das Damas) e Templo Jagdish. Noite no alojamento."
        }
      },
      {
        day: 10,
        title: {
          en: "Udaipur to Pushkar Holy Lake",
          es: "Udaipur – Pushkar: Por carretera",
          pt: "Udaipur para Pushkar"
        },
        desc: {
          en: "In the morning after breakfast, head to Pushkar. Upon arrival, check-in at the hotel. Visit Pushkar, one of Rajasthan's holiest towns. Explore the unique Brahma Temple and walk along the sacred Pushkar Lake ghats. Capture a stunning sunset by the lake. Overnight in Pushkar.",
          es: "Por la mañana, después del desayuno, nos dirigiremos a Pushkar. Al llegar, haremos el registro en el hotel. Por la tarde, visitaremos esta ciudad sagrada, incluyendo el templo de Brahma y los ghats que rodean el lago sagrado. Noche en el alojamiento.",
          pt: "De manhã após o pequeno-almoço, seguimos para Pushkar. À chegada, check-in no hotel. Visita ao Templo de Brahma, lago sagrado e ghats. Pôr do sol às margens do lago. Noite no alojamento."
        }
      },
      {
        day: 11,
        title: {
          en: "Pushkar to Jaipur Pink City Tour",
          es: "Pushkar – Jaipur: Por carretera",
          pt: "Pushkar para Jaipur"
        },
        desc: {
          en: "In the morning after breakfast, drive to Jaipur, the Pink City. Upon arrival, check-in at the hotel. In the evening, explore local markets and color-splashed bazaars, and visit the beautiful marble Birla Temple. Overnight in Jaipur.",
          es: "Por la mañana después del desayuno iremos hasta Jaipur. Llegaremos a la preciosa Ciudad Rosada. Por la tarde, paseo por las calles y los coloridos bazares, y visitaremos el templo de Birla para conocer la vida religiosa de Jaipur. Noche en el alojamiento.",
          pt: "De manhã após o pequeno-almoço, seguimos para Jaipur, a Cidade Rosa. À noite, passeio pelos bazares tradicionais e visita ao Templo de mármol Birla. Noite no alojamento."
        }
      },
      {
        day: 12,
        title: {
          en: "Jaipur Forts & Palaces",
          es: "Jaipur",
          pt: "Jaipur"
        },
        desc: {
          en: "After breakfast, explore Jaipur's historic sites. Ride up to Amber Fort, and visit the City Palace ( Chandra Mahal, Shri Govind temple), the Jantar Mantar astronomical observatory, and snap pictures of the iconic Hawa Mahal (Palace of the Winds). Overnight in Jaipur.",
          es: "Después del desayuno visitaremos la Fortaleza de Amber, el Palacio de la Ciudad, el observatorio astronómico Jantar Mantar y la fachada de Hawa Mahal (Palacio de los Vientos). Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, visita de dia inteiro: Forte Amber, Palácio da Cidade, observatório Jantar Mantar e Palácio dos Ventos (Hawa Mahal). Noite no alojamento."
        }
      },
      {
        day: 13,
        title: {
          en: "Jaipur to Agra via Fatehpur Sikri",
          es: "Jaipur – Agra: Por carretera",
          pt: "Jaipur para Agra"
        },
        desc: {
          en: "After breakfast, depart for Agra. En route, stop to tour the abandoned Mughal capital city of Fatehpur Sikri. Continue to Agra, check in at your hotel, and proceed to visit the world-famous white marble Taj Mahal. Overnight in Agra.",
          es: "Después del desayuno, viaje hacia Agra. Durante el camino, visitaremos la antigua ciudad mogol Fatehpur Sikri. Llegada a su hotel y visita al espectacular Taj Mahal. Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, viagem para Agra. No caminho, visita à cidade imperial abandonada Fatehpur Sikri. À chegada, check-in no hotel e visita ao espetacular Taj Mahal. Noite no alojamento."
        }
      },
      {
        day: 14,
        title: {
          en: "Agra to Orcha via Gwalior Fort",
          es: "Agra – Gwalior – Orcha: Por carretera",
          pt: "Agra para Orcha"
        },
        desc: {
          en: "Enjoy breakfast. Drive to Orcha, stopping en route in Gwalior to see its magnificent hilltop fort, Man Mandir, and the Sas Bahu temples. Arrive in Orcha, check in, and visit the Jahangir Mahal, Raj Mahal, and the Chaturbhuj Temple. Overnight in Orcha.",
          es: "Desayuno. Por la mañana nos dirigiremos a Orcha, haciendo una parada en Gwalior para visitar su impresionante fortaleza. Continuaremos hacia Orcha. Visitaremos el Jahangir Mahal, el Raj Mahal y el Templo de Chaturbhuj. Noche en el alojamiento.",
          pt: "Pequeno-almoço. Viagem para Orcha com paragem em Gwalior para visitar o Forte e templos. À chegada a Orcha, visita ao Jahangir Mahal, Raj Mahal e Templo Chaturbhuj. Noite no alojamento."
        }
      },
      {
        day: 15,
        title: {
          en: "Orcha to Khajuraho Erotic Temples",
          es: "Orcha-Khajuraho: Por carretera",
          pt: "Orcha para Khajuraho"
        },
        desc: {
          en: "After breakfast, travel by road to Khajuraho. Upon arrival, check-in at the hotel. Later, explore the world-famous UNESCO-listed erotically carved Western and Eastern groups of temples, including the Lakshmana and Kandariya-Mahadeva temples. Overnight in Khajuraho.",
          es: "Después del desayuno, nos dirigiremos a Khajuraho. Al llegar, haremos el registro en el hotel. Más tarde, visitaremos los templos eróticos de Khajuraho, incluyendo los grupos Western y Eastern. Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, viagem para Khajuraho. Visita aos famosos templos eróticos de Khajuraho (grupos Ocidental e Oriental). Noite no alojamento."
        }
      },
      {
        day: 16,
        title: {
          en: "Khajuraho to Varanasi Flight",
          es: "Khajuraho-Varanasi (Vuelo)",
          pt: "Voo para Varanasi"
        },
        desc: {
          en: "Spend the morning at leisure in Khajuraho before transfer to the airport for your flight to Varanasi, India's holiest city. Upon arrival, transfer to the hotel. In the evening, attend the mystical Ganga Aarti ceremony on the Ganges river ghats and walk through local streets. Overnight in Varanasi.",
          es: "Por la mañana, tiempo libre en Khajuraho hasta tomar el vuelo interno hacia Varanasi. A la llegada, traslado al hotel. Más tarde, visita a la ceremonia Aarti en los ghats por la tarde y paseo por las calles. Noche en el alojamiento.",
          pt: "Manhã livre em Khajuraho. Voo doméstico para Varanasi, a cidade mais sagrada da Índia. À noite, assistência à cerimônia espiritual Ganga Aarti nos ghats do Rio Ganges. Noite no alojamento."
        }
      },
      {
        day: 17,
        title: {
          en: "Varanasi Ganges Boat Cruise & Sarnath",
          es: "Varanasi",
          pt: "Varanasi"
        },
        desc: {
          en: "Early morning boat ride on the Ganges River to witness Hindu rituals and prayer along the ghats. Visit the Bharat Mata, Durga, and Tulsi Manas temples. In the afternoon, head to Sarnath where Buddha gave his first sermon. Overnight in Varanasi.",
          es: "Después del desayuno, por la mañana temprano, realizaremos un paseo en barca por el río Ganges para observar los rituales en los ghats. Visitaremos templos como Durga y nos dirigiremos a Sarnath. Noche en el alojamiento.",
          pt: "Passeio de barco ao amanhecer no Ganges para ver os rituais sagrados. Visita aos templos de Varanasi e Sarnath, onde Buda deu o seu primeiro sermão. Noite no alojamento."
        }
      },
      {
        day: 18,
        title: {
          en: "Varanasi to Delhi & Departure Flight",
          es: "Varanasi – New Delhi – Salida (Vuelo)",
          pt: "Varanasi para Deli & Partida"
        },
        desc: {
          en: "Transfer to Varanasi airport for your flight back to Delhi. Upon arrival in Delhi, transfer to the international terminal (terminal 3) for your flight back home. End of our services.",
          es: "A la hora indicada traslado al aeropuerto de Varanasi y viaje en avión a Delhi. Al llegar al aeropuerto de Delhi deberá tomar el autobús interno hacia la terminal de salidas internacionales para su vuelo de regreso. Fin de nuestros servicios.",
          pt: "Transporte para o aeroporto de Varanasi e voo de regresso a Deli. Ligação com o terminal internacional para o seu voo de regresso. Fim dos nossos serviços."
        }
      }
    ],
    includedExperiences: [
      {
        en: "Authentic rural homestay with a local family in Hudeel",
        es: "Hospedaje rural auténtico con una familia local en Hudeel",
        pt: "Estadia rural autêntica com uma família local em Hudeel"
      },
      {
        en: "Camel ride in Sam Sand Dunes of Jaisalmer",
        es: "Paseo en camello por las dunas de arena de Sam en Jaisalmer",
        pt: "Passeio de camelo nas dunas de areia de Sam em Jaisalmer"
      },
      {
        en: "Lake Pichola boat cruise in Udaipur",
        es: "Paseo en barco por el lago Pichola en Udaipur",
        pt: "Passeio de barco no lago Pichola em Udaipur"
      },
      {
        en: "Private sunset view of the Taj Mahal in Agra",
        es: "Vista privada al atardecer del Taj Mahal en Agra",
        pt: "Vista privada do pôr do sol do Taj Mahal em Agra"
      },
      {
        en: "Sunrise boat ride on the sacred Ganges in Varanasi",
        es: "Paseo en barco al amanecer en el Ganges sagrado en Varanasi",
        pt: "Passeio de barco ao amanhecer no Ganges sagrado em Varanasi"
      }
    ],
    travelTips: [],
    faqs: [],
    startingLocation: "Delhi, India",
    endingLocation: "Delhi, India",
    tourType: "Private Heritage, Culture & Spiritual Tour",
    travelStyle: "Heritage, Culture, Spiritual, Rural & Local Family Experience",
    groupSize: "2–12 Travellers",
    difficultyLevel: "Easy to Moderate",
    status: "published",
    isFeatured: true,
    seo: {
      metaTitle: {
        en: "Rajasthan Heritage, Khajuraho & Varanasi Journey | 18 Days",
        es: "Viaje a Rajasthan con Varanasi y Khajuraho | 18 Días",
        pt: "Viagem ao Rajastão, Khajuraho e Varanasi | 18 Dias"
      },
      description: {
        en: "Discover Delhi, Shekhawati, Bikaner, Jaisalmer, Jodhpur, Udaipur, Pushkar, Jaipur, Agra, Gwalior, Orcha, Khajuraho and Varanasi in an 18-day private tour.",
        es: "Explore Delhi, Shekhawati, Bikaner, Jaisalmer, Jodhpur, Udaipur, Pushkar, Jaipur, Agra, Gwalior, Orcha, Khajuraho y Varanasi en un viaje privado de 18 días.",
        pt: "Explore Deli, Shekhawati, Bikaner, Jaisalmer, Jodhpur, Udaipur, Pushkar, Jaipur, Agra, Gwalior, Orcha, Khajuraho e Varanasi em um tour privado de 18 dias."
      },
      keywords: {
        en: "Rajasthan tour, Khajuraho tour, Varanasi tour, India heritage tour, 18 days India itinerary, Delhi Agra Jaipur, Khajuraho erotic temples, Ganges boat ride, Varanasi Sarnath, India private tour",
        es: "viaje Rajasthan, viaje Varanasi, viaje Khajuraho, viaje India 18 dias, itinerario India, triangulo de oro, templos eroticos Khajuraho, paseo barca Ganges, viaje privado India",
        pt: "viagem Rajastão, viagem Varanasi, viagem Khajuraho, viagem Índia 18 dias, roteiro Índia, triângulo de ouro, templos eróticos Khajuraho, passeio barco Ganges, viagem privada Índia"
      },
      ogTitle: "Rajasthan Heritage, Khajuraho & Varanasi Journey | 18 Days Private Tour",
      ogDescription: "Discover Delhi, Shekhawati, Bikaner, Jaisalmer, Jodhpur, Udaipur, Pushkar, Jaipur, Agra, Gwalior, Orcha, Khajuraho and Varanasi in an 18-day private tour.",
      canonicalUrl: "/packages/rajasthan-khajuraho-varanasi-luxury-journey",
      indexRule: "index",
      followRule: "follow"
    }
  },
  {
    slug: "india-goa-beach-monuments-tour",
    title: {
      en: "India Monuments & Goa Beaches Tour",
      es: "Viaje a India con Goa",
      pt: "Viagem à Índia com Goa"
    },
    tagline: {
      en: "Discover the Golden Triangle, cosmopolitan Mumbai, and relax on the paradise beaches of Goa",
      es: "Descubre el Triángulo de Oro, la cosmopolita Mumbai y relájate en las paradisíacas playas de Goa",
      pt: "Descubra o Triângulo de Ouro, a cosmopolita Mumbai e relaxe nas praias paradisíacas de Goa"
    },
    category: "Beach Vacations",
    durationDays: 14,
    image: "/images/andaman islands.jpg",
    gallery: [],
    highlights: [
      {
        en: "Visit the majestic monuments of the Golden Triangle: Delhi, Agra, and Jaipur",
        es: "Visita los majestuosos monumentos del Triángulo de Oro: Delhi, Agra y Jaipur",
        pt: "Visite os majestosos monumentos do Triângulo de Ouro: Deli, Agra e Jaipur"
      },
      {
        en: "Marvel at the iconic Taj Mahal and Agra Fort",
        es: "Contempla el emblemático Taj Mahal y la Fortaleza de Agra",
        pt: "Contemple o icônico Taj Mahal e o Forte de Agra"
      },
      {
        en: "Explore the vibrant and cosmopolitan city of Mumbai",
        es: "Explora la vibrante y cosmopolita ciudad de Mumbai",
        pt: "Explore a vibrante e cosmopolita cidade de Mumbai"
      },
      {
        en: "Enjoy leisure days relaxing on the paradise beaches of Goa",
        es: "Disfruta de días libres de relax y playa en las costas paradisíacas de Goa",
        pt: "Desfrute de dias livres de relaxamento nas praias paradisíacas de Goa"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: {
          en: "Arrival in Delhi",
          es: "Delhi: Llegada a Delhi",
          pt: "Chegada a Deli"
        },
        desc: {
          en: "Welcome to India! Upon arrival, we will greet you at the airport. Our driver will hold a sign with your name. We will transfer you to your hotel, where we will deliver the necessary travel documents (hotel vouchers, domestic flight tickets, and train tickets if booked). Overnight in Delhi.",
          es: "¡Bienvenidos a la India! A su llegada le recibiremos en el aeropuerto, les esperará nuestro chofer con un cartel con su nombre. Le llevaremos a su hotel, donde le entregaremos los documentos necesarios para su viaje (reservas de hotel, billetes de avión interno y tren (si lo han contratado en su viaje)). Noche en Delhi.",
          pt: "Bem-vindo à Índia! À chegada, iremos recebê-lo no aeroporto, o nosso motorista esperará com uma placa com o seu nome. Levamo-lo ao seu hotel, onde entregaremos os documentos de viagem necessários (vouchers de hotel, bilhetes de voo doméstico e de comboio, se contratados). Noite em Deli."
        }
      },
      {
        day: 2,
        title: {
          en: "Delhi Sightseeing",
          es: "Delhi",
          pt: "Deli"
        },
        desc: {
          en: "After breakfast, we begin with a guided tour of New Delhi: India Gate, President's House, Humayun's Tomb, Qutub Minar, and Laxmi Narayan Temple. After lunch, visit Old Delhi: Jama Masjid, Red Fort, and Gandhi Memorial. Overnight in Delhi.",
          es: "Después del desayuno, empezamos con una visita guiada por la ciudad nueva (New Delhi): India Gate, President’s Viajes India House, Humayun’s Tomb, Qutab Minar (la más grande torre en piedra tallada en India) y Laxmi Narayan Temple. Después de la comida visitaremos la antigua Delhi (Old Delhi): Jama Masjid (una de las más grandes mezquitas en Asia, se puede visitar desde fuera), Red Fort (fuerte que se construyó durante los años 1638 hasta 1648 cuando la cultura Mughal estaba en alza y desde dónde el fuerte se puede ver el río Jamuna) y Gandhi Memorial. Noche en Delhi.",
          pt: "Após o pequeno-almoço, começamos com uma visita guiada por Nova Deli: Porta da Índia, Casa do Presidente, Túmulo de Humayun, Qutub Minar e Templo Laxmi Narayan. Após o almoço, visita a Velha Deli: Jama Masjid, Forte Vermelho e Memorial de Gandhi. Noite em Deli."
        }
      },
      {
        day: 3,
        title: {
          en: "Delhi to Jaipur",
          es: "Delhi –Jaipur: Por carretera",
          pt: "Deli para Jaipur"
        },
        desc: {
          en: "In the morning after breakfast, we drive to Jaipur, the Pink City. Upon arrival, check-in at the hotel. In the evening, explore local markets and color-splashed bazaars, and visit the beautiful marble Birla Temple. Overnight in Jaipur.",
          es: "Por la mañana después del desayuno iremos hasta Jaipur. Llegaremos a la preciosa Ciudad Rosada de la India (Pink city). Llegada a su hotel. Por la tarde, paseo por las calles y los coloridos bazares. Visitaremos el templo de Birla para conocer la vida religiosa de Jaipur. Noche en el alojamiento.",
          pt: "De manhã após o pequeno-almoço, seguimos para Jaipur, a Cidade Rosa. À noite, passeio pelos bazares tradicionais e visita ao Templo de mármol Birla. Noite no alojamento."
        }
      },
      {
        day: 4,
        title: {
          en: "Jaipur Forts & Palaces",
          es: "Jaipur",
          pt: "Jaipur"
        },
        desc: {
          en: "After breakfast, explore Jaipur's historic sites. Ride up to Amber Fort, and visit the City Palace (Chandra Mahal, Shri Govind temple), the Jantar Mantar astronomical observatory, and snap pictures of the iconic Hawa Mahal (Palace of the Winds). Overnight in Jaipur.",
          es: "Después del desayuno visitaremos la Fortaleza de Amber, el Palacio de la Ciudad, el observatorio astronómico Jantar Mantar y la fachada de Hawa Mahal (Palacio de los Vientos). Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, visita de dia inteiro: Forte Amber, Palácio da Cidade, observatório Jantar Mantar e Palácio dos Ventos (Hawa Mahal). Noite no alojamento."
        }
      },
      {
        day: 5,
        title: {
          en: "Jaipur to Agra via Fatehpur Sikri",
          es: "Jaipur – Agra: Por carretera",
          pt: "Jaipur para Agra"
        },
        desc: {
          en: "After breakfast, depart for Agra. En route, stop to tour the abandoned Mughal capital city of Fatehpur Sikri. Continue to Agra, check in at your hotel, and proceed to enjoy free time. Overnight in Agra.",
          es: "Después del desayuno, viaje hacia Agra. Durante el camino, visitaremos la antigua ciudad mogol Fatehpur Sikri. Llegada a su hotel. Tiempo libre. Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, viagem para Agra. No caminho, visita à cidade imperial abandonada Fatehpur Sikri. À chegada, check-in no hotel e tempo livre. Noite no alojamento."
        }
      },
      {
        day: 6,
        title: {
          en: "Agra - Taj Mahal & Agra Fort",
          es: "Agra: Taj Mahal y Fortaleza",
          pt: "Agra: Taj Mahal e Forte"
        },
        desc: {
          en: "After breakfast, visit the spectacular Taj Mahal and the Agra Fort. Night at the accommodation.",
          es: "Después del desayuno, visita al espectacular Taj Mahal y la Fortaleza de Agra. Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, visita ao espetacular Taj Mahal e ao Forte de Agra. Noite no alojamento."
        }
      },
      {
        day: 7,
        title: {
          en: "Agra to Delhi",
          es: "Agra-New Delhi: Por carretera",
          pt: "Agra para Deli"
        },
        desc: {
          en: "After breakfast, we drive back to Delhi and enjoy free time. Night in Delhi.",
          es: "Después del desayuno iremos hasta Delhi y disfrutaremos de tiempo libre. Noche en Delhi.",
          pt: "Após o pequeno-almoço, voltamos para Deli e desfrutamos de tempo livre. Noite em Deli."
        }
      },
      {
        day: 8,
        title: {
          en: "Delhi to Mumbai Flight",
          es: "New Delhi-Mumbai (vuelo)",
          pt: "Voo para Mumbai"
        },
        desc: {
          en: "After breakfast, transfer to Delhi airport for your flight to Mumbai. Upon arrival, we will greet you and transfer you to your hotel. Free time to explore Mumbai. Overnight in Mumbai.",
          es: "Después del desayuno iremos hasta el aeropuerto de Delhi para coger un vuelo para Mumbai. Llegada a Mumbai. A su llegada lo recibiremos y lo llevaremos hasta su hotel. Tiempo libre en Mumbai. Noche en Mumbai.",
          pt: "Após o pequeno-almoço, transporte para o aeroporto de Deli para voar para Mumbai. À chegada, receção e transporte para o hotel. Tempo livre em Mumbai. Noite em Mumbai."
        }
      },
      {
        day: 9,
        title: {
          en: "Mumbai Elephanta Caves & City Sightseeing",
          es: "Mumbai",
          pt: "Mumbai"
        },
        desc: {
          en: "After breakfast, visit the famous Elephanta Caves by boat. Then explore the Gateway of India, Flora Fountain, Marine Drive, and Crawford Market. Free time in Mumbai. Overnight in Mumbai.",
          es: "Después del desayuno visitaremos las cuevas de elefante, donde cogeremos un barco para hacer la visita. Después visitaremos la Puerta de la India, Flora Fountain, Marine Drive y Crawford Market. Tiempo libre en Mumbai. Noche en Mumbai.",
          pt: "Após o pequeno-almoço, visita de barco às cavernas de Elefanta. Depois, visita ao Portal da Índia, Fonte Flora, Marine Drive e Mercado Crawford. Tempo livre. Noite em Mumbai."
        }
      },
      {
        day: 10,
        title: {
          en: "Mumbai to Goa Flight",
          es: "Mumbai – Goa (Vuelo)",
          pt: "Voo para Goa"
        },
        desc: {
          en: "At the designated time, transfer to Mumbai airport and fly to Goa. Upon arrival, check-in at your hotel. Free time in Goa. Overnight in Goa.",
          es: "A la hora indicada, traslado al aeropuerto de Mumbai y viaje en avión a Goa. A su llegada lo recibiremos y lo llevaremos hasta su hotel. Tiempo libre en Goa. Noche en Goa.",
          pt: "Na hora indicada, transporte para o aeroporto de Mumbai e voo para Goa. À chegada, receção e transporte para o hotel. Tempo livre em Goa. Noite em Goa."
        }
      },
      {
        day: 11,
        title: {
          en: "Goa Beach Leisure",
          es: "Goa",
          pt: "Goa"
        },
        desc: {
          en: "Free day in Goa to enjoy its beautiful sandy beaches and tranquility. Overnight in Goa.",
          es: "Día libre en Goa para poder disfrutar de sus playas y tranquilidad. Noche en Goa.",
          pt: "Dia livre em Goa para desfrutar de suas praias de areia branca e tranquilidade. Noite em Goa."
        }
      },
      {
        day: 12,
        title: {
          en: "Goa Beach Relaxation",
          es: "Día libre en las Playas de Goa",
          pt: "Praias de Goa"
        },
        desc: {
          en: "Free day in Goa to relax on the Arabian Sea beaches or explore old colonial Portuguese Goa. Night in Goa.",
          es: "Día libre en Goa para relajarse en las playas del mar Arábigo o explorar Goa vieja. Noche en Goa.",
          pt: "Dia livre em Goa para relaxar nas praias ou explorar a velha Goa colonial portuguesa. Noite em Goa."
        }
      },
      {
        day: 13,
        title: {
          en: "Goa Beach Activities",
          es: "Día de relax y actividades acuáticas",
          pt: "Relaxamento e Atividades em Goa"
        },
        desc: {
          en: "Free day in Goa to enjoy the beaches, beautiful sunsets, and water sports. Night in Goa.",
          es: "Día libre en Goa para disfrutar de las playas, puestas de sol y deportes acuáticos. Noche en Goa.",
          pt: "Dia livre em Goa para desfrutar das praias, do pôr do sol e atividades aquáticas. Noite em Goa."
        }
      },
      {
        day: 14,
        title: {
          en: "Goa to Delhi & Departure",
          es: "Goa – New Delhi – Salida (vuelo)",
          pt: "Goa para Deli & Partida"
        },
        desc: {
          en: "At the designated time, transfer to Goa airport and fly back to Delhi. Upon arrival in Delhi, transfer to the international terminal to catch your flight back home. End of our services.",
          es: "A la hora indicada, traslado al aeropuerto de Goa y viaje en avión a Delhi. Al llegar al aeropuerto de Delhi, deberá tomar un autobús del aeropuerto que le llevará a la terminal de salidas internacionales para su vuelo de regreso. Fin de nuestros servicios.",
          pt: "Na hora indicada, transporte para o aeroporto de Goa e voo de regresso a Deli. Ligação com o terminal de saídas internacionais para o seu voo de regresso. Fim dos nossos serviços."
        }
      }
    ],
    includedExperiences: [
      {
        en: "Elephant (or Jeep) ride up to Amber Fort in Jaipur",
        es: "Paseo en elefante (o Jeep) hasta la Fortaleza de Amber en Jaipur",
        pt: "Passeio de elefante (ou jipe) até o Forte Amber em Jaipur"
      },
      {
        en: "Boat ride in Mumbai to visit the historic Elephanta Caves",
        es: "Paseo en barco en Mumbai para visitar las históricas cuevas de Elefanta",
        pt: "Passeio de barco em Mumbai para visitar as históricas cavernas de Elefanta"
      },
      {
        en: "Included domestic flights: Delhi-Mumbai, Mumbai-Goa, and Goa-Delhi",
        es: "Vuelos internos incluidos: Delhi-Mumbai, Mumbai-Goa y Goa-Delhi",
        pt: "Voos domésticos incluídos: Deli-Mumbai, Mumbai-Goa e Goa-Deli"
      },
      {
        en: "Private transfers in all destinations with english/spanish speaking drivers",
        es: "Asistencia y traslados privados en todos los destinos con chofer de habla inglesa/española",
        pt: "Transportes privados em todos os destinos com motorista falante de inglês/espanhol"
      }
    ],
    travelTips: [],
    faqs: [],
    startingLocation: "Delhi, India",
    endingLocation: "Delhi, India",
    tourType: "Private Cultural, City & Beach Holiday",
    travelStyle: "Culture, Sightseeing, City Life & Beach Relaxation",
    groupSize: "2–12 Travellers",
    difficultyLevel: "Easy",
    status: "published",
    isFeatured: true,
    seo: {
      metaTitle: {
        en: "India Monuments & Goa Beaches Tour | 14 Days",
        es: "Viaje a India con Goa y Mumbai | 14 Días",
        pt: "Viagem à Índia com Goa e Mumbai | 14 Dias"
      },
      description: {
        en: "Discover Delhi, Jaipur, Agra, Mumbai and Goa in a 14-day private tour with domestic flights, heritage monuments, and beach relaxation.",
        es: "Explore Delhi, Jaipur, Agra, Mumbai y las playas de Goa en un viaje privado de 14 días con vuelos internos y traslados incluidos.",
        pt: "Explore Deli, Jaipur, Agra, Mumbai e as praias de Goa em um tour privado de 14 dias com voos domésticos incluídos."
      },
      keywords: {
        en: "India Goa tour, Delhi Jaipur Agra Goa, Mumbai Goa vacation, India beach holiday, Golden Triangle with Goa, India private tour 14 days, Elephanta caves Mumbai",
        es: "viaje India Goa, triangulo de oro con Goa, viaje Mumbai Goa, vacaciones playa India, itinerario India 14 dias, cuevas Elefanta Mumbai, viaje privado India",
        pt: "viagem Índia Goa, triângulo de ouro com Goa, viagem Mumbai Goa, férias praia Índia, roteiro Índia 14 dias, cavernas Elefanta Mumbai, viagem privada Índia"
      },
      ogTitle: "India Monuments & Goa Beaches Tour | 14 Days Private Holiday",
      ogDescription: "Discover Delhi, Jaipur, Agra, Mumbai and Goa in a 14-day private tour with domestic flights, heritage monuments, and beach relaxation.",
      canonicalUrl: "/packages/india-goa-beach-monuments-tour",
      indexRule: "index",
      followRule: "follow"
    }
  },
  {
    slug: "india-nepal-golden-triangle-kathmandu-tour",
    title: {
      en: "India & Nepal: Golden Triangle, Varanasi & Kathmandu",
      es: "Viaje a India y Nepal",
      pt: "Viagem à Índia e Nepal"
    },
    tagline: {
      en: "Discover the spiritual essence of India and the mystical beauty of the Himalayas in Nepal",
      es: "Descubre la esencia espiritual de la India y la belleza mística de los Himalayas en Nepal",
      pt: "Descubra a essência espiritual da Índia e a beleza mística dos Himalaias no Nepal"
    },
    category: "Spiritual Tours",
    durationDays: 13,
    image: "/images/varanasi_ghats_aarti.png",
    gallery: [],
    highlights: [
      {
        en: "Explore the imperial monuments of Delhi, Agra, and Jaipur",
        es: "Explora los monumentos imperiales de Delhi, Agra y Jaipur",
        pt: "Explore os monumentos imperiais de Deli, Agra e Jaipur"
      },
      {
        en: "Visit the erotic temples of Khajuraho and historic forts of Gwalior and Orcha",
        es: "Visita los templos eróticos de Khajuraho y las fortalezas históricas de Gwalior y Orcha",
        pt: "Visite os templos eróticos de Khajuraho e fortes históricos de Gwalior e Orcha"
      },
      {
        en: "Sunrise boat cruise and Aarti ceremony on the sacred Ganges in Varanasi",
        es: "Paseo en barco al amanecer y ceremonia Aarti en los ghats sagrados de Varanasi",
        pt: "Passeio de barco ao amanhecer e cerimônia Aarti nos ghats sagrados de Varanasi"
      },
      {
        en: "Discover the Buddhist stupas of Swayambhunath and Pashupatinath in Kathmandu",
        es: "Descubre los templos y estupas budistas de Swayambhunath y Pashupatinath en el valle de Katmandú",
        pt: "Descubra os templos e estupas budistas de Swayambhunath e Pashupatinath em Kathmandu"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: {
          en: "Arrival in Delhi",
          es: "Delhi: Llegada a Delhi",
          pt: "Chegada a Deli"
        },
        desc: {
          en: "Welcome to India! Upon arrival, we will greet you at the airport. Our driver will hold a sign with your name. We will transfer you to your hotel, where we will deliver the necessary travel documents (hotel vouchers, domestic flight tickets, and train tickets if booked). Overnight in Delhi.",
          es: "¡Bienvenidos a la India! A su llegada le recibiremos en el aeropuerto, les esperará nuestro chofer con un cartel con su nombre. Le llevaremos a su hotel, dónde le entregaremos los documentos necesarios para su viaje, (reservas de hotel, billetes de avión interno y tren (si lo ha contratado en su viaje)). Noche en Delhi.",
          pt: "Bem-vindo à Índia! À chegada, iremos recebê-lo no aeroporto, o nosso motorista esperará com uma placa com o seu nome. Levamo-lo ao seu hotel, onde entregaremos os documentos de viagem necessários (vouchers de hotel, bilhetes de voo doméstico e de comboio, se contratados). Noite em Deli."
        }
      },
      {
        day: 2,
        title: {
          en: "Delhi Sightseeing",
          es: "Delhi",
          pt: "Deli"
        },
        desc: {
          en: "After breakfast, we begin with a guided tour of New Delhi: India Gate, President's House, Humayun's Tomb, Qutub Minar, and Laxmi Narayan Temple. After lunch, visit Old Delhi: Jama Masjid, Red Fort, and Gandhi Memorial. Overnight in Delhi.",
          es: "Después del desayuno, empezamos con una visita guiada por la ciudad nueva (New Delhi): India Gate, President’s Viajes India House, Humayun’s Tomb, Qutab Minar (la más grande torre en piedra tallada en India) y Laxmi Narayan Temple. Después de la comida visitaremos la antigua Delhi (Old Delhi): Jama Masjid (una de las más grandes mezquitas en Asia, se puede visitar desde fuera), Red Fort (fuerte que se construyó durante los años 1638 hasta 1648 cuando la cultura Mughal estaba en alza y desde dónde el fuerte se puede ver el rio Jamuna) y Gandhi Memorial. Noche en Delhi.",
          pt: "Após o pequeno-almoço, começamos com uma visita guiada por Nova Deli: Porta da Índia, Casa do Presidente, Túmulo de Humayun, Qutub Minar e Templo Laxmi Narayan. Após o almoço, visita a Velha Deli: Jama Masjid, Forte Vermelho e Memorial de Gandhi. Noite em Deli."
        }
      },
      {
        day: 3,
        title: {
          en: "Delhi to Jaipur",
          es: "Delhi – Jaipur: Por carretera",
          pt: "Deli para Jaipur"
        },
        desc: {
          en: "In the morning, after breakfast, we drive to Jaipur, the Pink City. Upon arrival, check-in at the hotel. In the evening, explore local markets and color-splashed bazaars, and visit the beautiful marble Birla Temple. Overnight in Jaipur.",
          es: "Por la mañana, después del desayuno, iremos hasta Jaipur. Llegaremos a la preciosa Ciudad Rosada de la India (Pink city). Llegada a su hotel. Por la tarde, paseo por las calles y los coloridos bazares. Visitaremos el templo de Birla para conocer la vida religiosa de Jaipur. Noche en el alojamiento.",
          pt: "De manhã, após o pequeno-almoço, seguimos para Jaipur, a Cidade Rosa. À noite, passeio pelos bazares tradicionais e visita ao Templo de mármol Birla. Noite no alojamento."
        }
      },
      {
        day: 4,
        title: {
          en: "Jaipur Forts & Palaces",
          es: "Jaipur",
          pt: "Jaipur"
        },
        desc: {
          en: "After breakfast, explore Jaipur's historic sites. Ride up to Amber Fort, and visit the City Palace (Chandra Mahal, Shri Govind temple), the Jantar Mantar astronomical observatory, and snap pictures of the iconic Hawa Mahal (Palace of the Winds). Overnight in Jaipur.",
          es: "Después del desayuno visitaremos la Fortaleza de Amber, el Palacio de la Ciudad, el observatorio astronómico Jantar Mantar y la fachada de Hawa Mahal (Palacio de los Vientos). Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, visita de dia inteiro: Forte Amber, Palácio da Cidade, observatório Jantar Mantar e Palácio dos Ventos (Hawa Mahal). Noite no alojamento."
        }
      },
      {
        day: 5,
        title: {
          en: "Jaipur to Agra via Fatehpur Sikri",
          es: "Jaipur – Agra: Por carretera",
          pt: "Jaipur para Agra"
        },
        desc: {
          en: "After breakfast, depart for Agra. En route, stop to tour the abandoned Mughal capital city of Fatehpur Sikri. Continue to Agra, check in at your hotel, and proceed to enjoy a visit to the spectacular Taj Mahal. Overnight in Agra.",
          es: "Después del desayuno, viaje hacia Agra. Durante el camino, visitaremos la antigua ciudad mogol Fatehpur Sikri. Llegada a su hotel y visita al espectacular Taj Mahal. Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, viagem para Agra. No caminho, visita à cidade imperial abandonada Fatehpur Sikri. À chegada, check-in no hotel e visita ao espetacular Taj Mahal. Noite no alojamento."
        }
      },
      {
        day: 6,
        title: {
          en: "Agra to Orcha via Gwalior Fort",
          es: "Agra – Gwalior – Orcha",
          pt: "Agra para Orcha"
        },
        desc: {
          en: "Enjoy breakfast. Drive to Orcha, stopping en route in Gwalior to see its magnificent hilltop fort, Man Mandir, and the Sas Bahu temples. Arrive in Orcha, check in, and visit the Jahangir Mahal, Raj Mahal, and the Chaturbhuj Temple. Overnight in Orcha.",
          es: "Desayuno. Por la mañana nos dirigiremos a Orcha, haciendo una parada en Gwalior para visitar su impresionante fortaleza, el Hombre Mandir y los templos Sas Bahu. Continuaremos hacia Orcha. A la llegada, registro en el hotel y visitas. Noche en el alojamiento.",
          pt: "Pequeno-almoço. Viagem para Orcha com paragem em Gwalior para visitar o Forte e templos. À chegada a Orcha, visita ao Jahangir Mahal, Raj Mahal e Templo Chaturbhuj. Noite no alojamento."
        }
      },
      {
        day: 7,
        title: {
          en: "Orcha to Khajuraho Erotic Temples",
          es: "Orcha – Khajuraho: Por carretera",
          pt: "Orcha para Khajuraho"
        },
        desc: {
          en: "After breakfast, travel by road to Khajuraho. Upon arrival, check-in at the hotel. Later, explore the world-famous UNESCO-listed erotically carved Western and Eastern groups of temples, including the Lakshmana and Kandariya-Mahadeva temples. Overnight in Khajuraho.",
          es: "Después del desayuno, nos dirigiremos a Khajuraho. A la llegada, registro en el hotel. Más tarde, visitaremos los templos eróticos de Khajuraho, incluyendo los grupos Western y Eastern, destacando los templos Kandariya-Mahadeva y Lakshmana. Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, viagem para Khajuraho. Visita aos famosos templos eróticos de Khajuraho (grupos Ocidental e Oriental). Noite no alojamento."
        }
      },
      {
        day: 8,
        title: {
          en: "Khajuraho to Varanasi Flight",
          es: "Khajuraho – Varanasi (Vuelo)",
          pt: "Voo para Varanasi"
        },
        desc: {
          en: "Spend the morning at leisure in Khajuraho before transfer to the airport for your flight to Varanasi. Upon arrival, transfer to the hotel. In the evening, attend the mystical Ganga Aarti ceremony on the Ganges river ghats and walk through local streets. Overnight in Varanasi.",
          es: "Por la mañana, tiempo libre en Khajuraho hasta tomar el vuelo interno hacia Varanasi. A la llegada, traslado al hotel. Más tarde, visita a la ceremonia Aarti en los ghats por la tarde y paseo por las calles. Noche en el alojamiento.",
          pt: "Manhã livre em Khajuraho. Voo doméstico para Varanasi, a cidade mais sagrada da Índia. À noite, assistência à cerimônia espiritual Ganga Aarti nos ghats do Rio Ganges. Noite no alojamento."
        }
      },
      {
        day: 9,
        title: {
          en: "Varanasi Ganges Boat Cruise & Sarnath",
          es: "Varanasi",
          pt: "Varanasi"
        },
        desc: {
          en: "Early morning boat ride on the Ganges River to witness Hindu rituals and prayer along the ghats. Visit the Bharat Mata, Durga, and Tulsi Manas temples. In the afternoon, head to Sarnath where Buddha gave his first sermon. Overnight in Varanasi.",
          es: "Después del desayuno, por la mañana temprano, realizaremos un paseo en barca por el río Ganges para observar los rituales en los ghats. Visitaremos templos y nos dirigiremos a Sarnath. Noche en el alojamiento.",
          pt: "Passeio de barco ao amanhecer no Ganges para ver os rituais sagrados. Visita aos templos de Varanasi e Sarnath, onde Buda deu o seu primeiro sermão. Noite no alojamento."
        }
      },
      {
        day: 10,
        title: {
          en: "Varanasi to Kathmandu Flight",
          es: "Varanasi-New Delhi-Kathmandú",
          pt: "Voo para Kathmandu"
        },
        desc: {
          en: "Early morning transfer to Varanasi airport, fly to New Delhi, and catch a connecting flight to Kathmandu, Nepal. Upon arrival, transfer to your hotel. Free time. Overnight in Kathmandu.",
          es: "Por la mañana temprano iremos al aeropuerto de Varanasi, tomaremos un vuelo a New Delhi y desde New Delhi otro vuelo hacia Kathmandu. Llegada a kathamandu. Traslado al hotel. Tiempo libre. Alojamiento.",
          pt: "De manhã cedo, transporte para o aeroporto de Varanasi, voo para Nova Deli e ligação para Kathmandu. À chegada, transporte para o hotel. Noite em Kathmandu."
        }
      },
      {
        day: 11,
        title: {
          en: "Swayambhunath Stupa & Kathmandu",
          es: "Kathmandú",
          pt: "Kathmandu"
        },
        desc: {
          en: "Breakfast. Enjoy a sightseeing tour of the city including the ancient Buddhist stupa of Swayambhunath, located on a hill west of the city, offering panoramic views of the Kathmandu valley. Overnight in Kathmandu.",
          es: "Desayuno. Recorrido por la ciudad que incluye la antigua estupa budista de Swayambhunath, ubicada en lo alto de una colina al oeste de la ciudad. Tiempo libre y noche en el alojamiento.",
          pt: "Pequeno-almoço. Tour na cidade incluindo a antiga estupa budista de Swayambhunath, localizada no topo de uma colina com vista panorâmica. Noite no alojamento."
        }
      },
      {
        day: 12,
        title: {
          en: "Pashupatinath Temple & Kathmandu Valley",
          es: "Kathmandú",
          pt: "Kathmandu"
        },
        desc: {
          en: "Breakfast. Visit Pashupatinath, one of the most sacred Hindu temples dedicated to Lord Shiva. Enjoy free time to stroll through the markets. Overnight in Kathmandu.",
          es: "Desayuno. Visitaremos Pashupatinath, uno de los templos hindúes más sagrados, dedicado al dios Shiva. Tiempo libre y noche en el alojamiento.",
          pt: "Pequeno-almoço. Visita a Pashupatinath, um dos templos hindus mais sagrados, dedicado ao Deus Shiva. Tempo livre. Noite no alojamento."
        }
      },
      {
        day: 13,
        title: {
          en: "Kathmandu to Delhi & Departure",
          es: "Kathmandú – New Delhi (Vuelo)",
          pt: "Kathmandu para Deli & Partida"
        },
        desc: {
          en: "At the designated time, transfer to Kathmandu airport and fly back to Delhi for your onward connecting flight back home. End of our services.",
          es: "A la hora indicada, traslado al aeropuerto de Kathmandú y vuelo a Delhi. Fin de nuestro servicio.",
          pt: "Na hora indicada, transporte para o aeroporto de Kathmandu e voo para Deli. Fim dos nossos serviços."
        }
      }
    ],
    includedExperiences: [
      {
        en: "Classic elephant or Jeep ride up to Amber Fort in Jaipur",
        es: "Clásica subida a la Fortaleza de Amber en elefante (o Jeep) en Jaipur",
        pt: "Passeio de elefante ou jipe até o Forte Amber em Jaipur"
      },
      {
        en: "Ganges boat ride in Varanasi to witness daily morning rituals",
        es: "Paseo en barco por el río Ganges en Varanasi para presenciar los rituales locales",
        pt: "Passeio de barco no Ganges em Varanasi para presenciar os rituais"
      },
      {
        en: "Visit to the sacred Swayambhunath temple (Monkey Temple) in Kathmandu",
        es: "Visita a la sagrada estupa Swayambhunath (Templo de los Monos) en Katmandú",
        pt: "Visita ao templo sagrado de Swayambhunath (Templo dos Macacos) em Kathmandu"
      },
      {
        en: "All domestic and international flights between India and Nepal",
        es: "Vuelos internos e internacionales: Khajuraho-Varanasi, Varanasi-Katmandú y Katmandú-Delhi",
        pt: "Todos os voos domésticos e internacionais entre a Índia e o Nepal"
      }
    ],
    travelTips: [],
    faqs: [],
    startingLocation: "Delhi, India",
    endingLocation: "Delhi, India",
    tourType: "Private Multi-Country Cultural & Spiritual Tour",
    travelStyle: "Heritage, Culture, Spiritual & Himalayan Exploration",
    groupSize: "2–12 Travellers",
    difficultyLevel: "Easy to Moderate",
    status: "published",
    isFeatured: true,
    seo: {
      metaTitle: {
        en: "India & Nepal: Golden Triangle, Varanasi & Kathmandu | 13 Days",
        es: "Viaje a India y Nepal con Varanasi | 13 Días",
        pt: "Viagem à Índia e Nepal com Varanasi | 13 Dias"
      },
      description: {
        en: "Discover Delhi, Jaipur, Agra, Gwalior, Orcha, Khajuraho, Varanasi and Kathmandu in a 13-day private multi-country India and Nepal tour.",
        es: "Explore Delhi, Jaipur, Agra, Gwalior, Orcha, Khajuraho, Varanasi y Katmandú en un viaje privado multi-país de 13 días.",
        pt: "Explore Deli, Jaipur, Agra, Gwalior, Orcha, Khajuraho, Varanasi e Kathmandu em um tour privado de 13 dias."
      },
      keywords: {
        en: "India Nepal tour, Golden Triangle with Nepal, Varanasi Kathmandu tour, Khajuraho Varanasi Kathmandu, India Nepal package, Kathmandu valley tour, Ganges river boat ride, Swayambhunath stupa",
        es: "viaje India Nepal, triangulo de oro con Nepal, viaje Varanasi Katmandu, Khajuraho Varanasi Katmandu, viaje combinado India Nepal, estupa Swayambhunath",
        pt: "viagem Índia Nepal, triângulo de ouro com Nepal, viagem Varanasi Kathmandu, Khajuraho Varanasi Kathmandu, viagem combinada Índia Nepal, estupa Swayambhunath"
      },
      ogTitle: "India & Nepal: Golden Triangle, Varanasi & Kathmandu | 13 Days Private Tour",
      ogDescription: "Discover Delhi, Jaipur, Agra, Gwalior, Orcha, Khajuraho, Varanasi and Kathmandu in a 13-day private multi-country India and Nepal tour.",
      canonicalUrl: "/packages/india-nepal-golden-triangle-kathmandu-tour",
      indexRule: "index",
      followRule: "follow"
    }
  },
  {
    slug: "rajasthan-varanasi-imperial-luxury-tour",
    title: {
      en: "Rajasthan & Varanasi Imperial Journey",
      es: "Rajasthan y Varanasi Imperial",
      pt: "Rajasthan e Varanasi Imperial"
    },
    tagline: {
      en: "The ultimate circuit through the palaces and deserts of Rajasthan, combined with the eternal spirituality of Varanasi",
      es: "El circuito definitivo por los palacios y desiertos del Rajasthan combinando la espiritualidad eterna de Varanasi",
      pt: "O circuito definitivo pelos palácios e desertos do Rajastão, combinado com a espiritualidade eterna de Varanasi"
    },
    category: "Rajasthan Tours",
    durationDays: 16,
    image: "/images/rajasthan_fort_sunset.png",
    gallery: [],
    highlights: [
      {
        en: "Complete tour of the royal forts and palaces of Rajasthan",
        es: "Visita completa de las fortalezas y palacios reales del Rajasthan",
        pt: "Visita completa das fortalezas e palácios reais do Rajastão"
      },
      {
        en: "Camel safari and desert camping in the Jaisalmer sand dunes",
        es: "Safari en camello y campamento en las dunas de Jaisalmer",
        pt: "Safári de camelo e acampamento nas dunas de areia de Jaisalmer"
      },
      {
        en: "Guided sunrise visit to the iconic Taj Mahal",
        es: "Visita al Taj Mahal al amanecer",
        pt: "Visita guiada ao Taj Mahal ao amanhecer"
      },
      {
        en: "Ganges boat cruise and evening Aarti ceremony on Varanasi ghats",
        es: "Ceremonia Aarti al atardecer en el río Ganges en Varanasi",
        pt: "Cruzeiro de barco no Ganges e cerimônia noturna Aarti nos ghats de Varanasi"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: {
          en: "Arrival in Delhi",
          es: "Llegada a Delhi",
          pt: "Chegada a Deli"
        },
        desc: {
          en: "Arrival at Delhi International Airport. Meet and greet at airport and transfer to hotel. Overnight in Delhi.",
          es: "Llegada al Aeropuerto Internacional de Delhi, vibrante capital que combina modernidad y tradición milenaria. Recepción y traslado al hotel. Según el horario de llegada, breve introducción panorámica para comenzar a sentir la energía de la ciudad. Noche en Delhi.",
          pt: "Chegada ao Aeroporto Internacional de Deli. Receção e transporte para o hotel. Noite em Deli."
        }
      },
      {
        day: 2,
        title: {
          en: "Delhi Sightseeing: Mughal & Colonial History",
          es: "Delhi – Historia Mogol y Colonial",
          pt: "Deli: História Mogol e Colonial"
        },
        desc: {
          en: "Breakfast and full day sightseeing of Delhi. Visit Old Delhi (Jama Masjid, Chandni Chowk) and New Delhi (India Gate, Parliament, Qutub Minar, Lotus Temple). Overnight.",
          es: "Desayuno y visita completa de la ciudad. En Old Delhi exploraremos Jama Masjid y recorreremos el bullicioso mercado de Chandni Chowk en rickshaw. En New Delhi visitaremos la Puerta de la India, el Parlamento, el Qutub Minar y el Templo de Loto. Un día que revela las distintas capas históricas del país. Alojamiento.",
          pt: "Pequeno-almoço e visita guiada de Deli: Jama Masjid, Chandni Chowk, Porta da Índia, Parlamento, Qutub Minar e Templo de Lótus. Alojamiento."
        }
      },
      {
        day: 3,
        title: {
          en: "Delhi to Mandawa Heritage Tour",
          es: "Delhi – Mandawa",
          pt: "Deli para Mandawa"
        },
        desc: {
          en: "Drive to Mandawa in the Shekhawati region, famous for its 18th-century painted havelis. Stroll the streets discovering mercantile mansions. Overnight.",
          es: "Salida hacia Mandawa, en la región de Shekhawati, famosa por sus havelis decoradas con frescos del siglo XVIII. Paseo por sus calles tranquilas descubriendo antiguas mansiones mercantiles con pinturas murales que narran escenas mitológicas y coloniales. Alojamiento en hotel heritage.",
          pt: "Viagem para Mandawa, famosa pelas suas antigas mansões (Havelis) decoradas com frescos do século XVIII. Alojamento."
        }
      },
      {
        day: 4,
        title: {
          en: "Mandawa to Bikaner Desert Fort",
          es: "Mandawa – Bikaner",
          pt: "Mandawa para Bikaner"
        },
        desc: {
          en: "Travel to Bikaner, a desert city founded in the 15th century. Visit the unconquered Junagarh Fort, old town, and local market. Overnight.",
          es: "Viaje hacia Bikaner, ciudad desértica fundada en el siglo XV. Visita del Fuerte Junagarh, impresionante fortaleza que nunca fue conquistada. Recorrido por el casco antiguo y mercado local. Opcional visita al Templo de las Ratas en Deshnok. Alojamiento.",
          pt: "Viagem para Bikaner. Visita ao Forte Junagarh, centro histórico e mercados tradicionais. Alojamento."
        }
      },
      {
        day: 5,
        title: {
          en: "Bikaner to Jaisalmer: The Golden City",
          es: "Bikaner – Jaisalmer",
          pt: "Bikaner para Jaisalmer"
        },
        desc: {
          en: "Scenic route to Jaisalmer, the Golden City rising from the Thar Desert sand dunes. Check-in and free time. Overnight.",
          es: "Ruta hacia Jaisalmer, la “Ciudad Dorada”, que emerge entre las dunas del desierto de Thar. Llegada y tiempo libre para disfrutar del ambiente medieval. Alojamiento.",
          pt: "Rota para Jaisalmer, a Cidade Dourada no meio do deserto de Thar. Check-in e tempo livre. Alojamento."
        }
      },
      {
        day: 6,
        title: {
          en: "Jaisalmer Fort & Sam Sand Dunes",
          es: "Jaisalmer – Fortaleza y Dunas",
          pt: "Jaisalmer: Forte e Dunas"
        },
        desc: {
          en: "Explore the living Jaisalmer Fort, Havelis, and Gadisar Lake. In the afternoon, camel safari in the Sam Sand Dunes with cultural show. Overnight in desert camp or hotel.",
          es: "Visita del Fuerte Viviente de Jaisalmer, uno de los pocos fuertes habitados del mundo. Exploración de havelis ricamente decoradas y del lago Gadisar. Por la tarde, excursión a las dunas de Sam para disfrutar de un safari en camello al atardecer y espectáculo cultural bajo las estrellas. Noche en campamento o hotel.",
          pt: "Visita ao Forte habitado de Jaisalmer, Havelis e Lago Gadisar. À tarde, safári de camelo e show cultural nas dunas de Sam. Noite em acampamento ou hotel."
        }
      },
      {
        day: 7,
        title: {
          en: "Jaisalmer to Jodhpur: The Blue City",
          es: "Jaisalmer – Jodhpur",
          pt: "Jaisalmer para Jodhpur"
        },
        desc: {
          en: "Depart for Jodhpur, the Blue City. Visit Mehrangarh Fort, Jaswant Thada memorial, and the colorful Clock Tower markets. Overnight.",
          es: "Salida hacia Jodhpur, conocida como la “Ciudad Azul”. Visita del imponente Fuerte Mehrangarh, con vistas panorámicas espectaculares, y del mausoleo Jaswant Thada. Paseo por el mercado tradicional alrededor de la Torre del Reloj. Alojamiento.",
          pt: "Viagem para Jodhpur, a Cidade Azul. Visita ao Forte Mehrangarh, Jaswant Thada e mercado tradicional da Torre do Relógio. Alojamento."
        }
      },
      {
        day: 8,
        title: {
          en: "Jodhpur to Udaipur via Ranakpur",
          es: "Jodhpur – Ranakpur – Udaipur",
          pt: "Jodhpur para Udaipur"
        },
        desc: {
          en: "Drive to Udaipur with a stop at Ranakpur Jain temples, famous for its 1,444 uniquely carved marble pillars. Arrive in Udaipur. Overnight.",
          es: "Traslado hacia Udaipur con parada en los Templos Jainistas de Ranakpur, famosos por sus 1.444 columnas talladas, todas diferentes. Llegada a Udaipur, la ciudad más romántica de Rajasthan. Alojamiento.",
          pt: "Viagem para Udaipur, parando nos tempos jainistas de Ranakpur com 1.444 colunas talladas. Chegada a Udaipur. Alojamento."
        }
      },
      {
        day: 9,
        title: {
          en: "Udaipur: City Palace & Lake Pichola Cruise",
          es: "Udaipur – Ciudad de los Lagos",
          pt: "Udaipur: Cidade dos Lagos"
        },
        desc: {
          en: "Visit City Palace, Saheliyon-ki-Bari gardens, and Jagdish Temple. In the afternoon, boat cruise on Lake Pichola with views of the Lake Palace. Overnight.",
          es: "Visita del majestuoso Palacio de la Ciudad, el Jardín Saheliyon-ki-Bari y el Templo Jagdish. Por la tarde, paseo en barco por el Lago Pichola con vistas al Palacio Lake Palace y Jag Mandir. Alojamiento.",
          pt: "Visita ao Palácio da Cidade, Saheliyon-ki-Bari e Templo Jagdish. À tarde, cruzeiro de barco no Lago Pichola. Alojamento."
        }
      },
      {
        day: 10,
        title: {
          en: "Udaipur to Pushkar Holy Lake",
          es: "Udaipur – Pushkar",
          pt: "Udaipur para Pushkar"
        },
        desc: {
          en: "Drive to Pushkar, a sacred town by the lake. Stroll along the holy lake ghats and visit the rare Brahma Temple. Overnight.",
          es: "Salida hacia Pushkar, ciudad sagrada a orillas de su lago. Paseo por los ghats y visita al único templo dedicado al dios Brahma en la India. Ambiente espiritual y mercados bohemios. Alojamiento.",
          pt: "Viagem para Pushkar. Passeio pelos ghats do lago sagrado, visita ao Templo de Brahma e mercados locais. Alojamento."
        }
      },
      {
        day: 11,
        title: {
          en: "Pushkar to Jaipur: The Pink City",
          es: "Pushkar – Jaipur",
          pt: "Pushkar para Jaipur"
        },
        desc: {
          en: "Drive to Jaipur, the Pink City. Arrive and enjoy leisure time to explore the textile and jewelry markets. Overnight.",
          es: "Viaje hacia Jaipur, la famosa “Ciudad Rosa”. Llegada y tiempo libre para explorar bazares de textiles, joyas y artesanías. Alojamiento.",
          pt: "Viagem para Jaipur, a Cidade Rosa. Tempo livre para explorar os mercados tradicionais. Alojamento."
        }
      },
      {
        day: 12,
        title: {
          en: "Jaipur: Amber Fort & Royal Palaces",
          es: "Jaipur – Palacios y Astronomía",
          pt: "Jaipur: Palácios e Astronomia"
        },
        desc: {
          en: "Excursion to Amber Fort by Jeep, visit City Palace, Jantar Mantar observatory, and photo stop at Hawa Mahal. Overnight.",
          es: "Excursión al Fuerte Amber con subida en jeep. Visita del Palacio de la Ciudad, el observatorio astronómico Jantar Mantar y parada fotográfica en el Hawa Mahal (Palacio de los Vientos). Una jornada dedicada al esplendor real rajput. Alojamiento.",
          pt: "Excursão ao Forte Amber em jipe, Palácio da Cidade, observatório Jantar Mantar e paragem de fotos no Hawa Mahal. Alojamento."
        }
      },
      {
        day: 13,
        title: {
          en: "Jaipur to Agra via Fatehpur Sikri",
          es: "Jaipur – Fatehpur Sikri – Agra",
          pt: "Jaipur para Agra"
        },
        desc: {
          en: "Travel to Agra, stopping en route at the ancient abandoned Mughal city of Fatehpur Sikri. Check-in and relax in Agra. Overnight.",
          es: "Salida hacia Agra con parada en Fatehpur Sikri, ciudad mogol llamada abandonada. Llegada a Agra y descanso. Alojamiento.",
          pt: "Viagem para Agra com paragem em Fatehpur Sikri, cidade imperial abandonada. Chegada a Agra e descanso. Alojamento."
        }
      },
      {
        day: 14,
        title: {
          en: "Taj Mahal Sunrise & Flight to Varanasi",
          es: "Agra – Taj Mahal y Vuelo a Varanasi",
          pt: "Agra: Taj Mahal e Voo para Varanasi"
        },
        desc: {
          en: "Visit the Taj Mahal at sunrise, tour the Agra Fort. In the afternoon, fly to Varanasi, India's spiritual capital. Check-in and overnight.",
          es: "Visita al amanecer del Taj Mahal, símbolo eterno del amor. Continuación con el Fuerte de Agra. Por la tarde, traslado al aeropuerto para vuelo hacia Varanasi. Llegada y alojamiento.",
          pt: "Visita ao amanhecer do Taj Mahal, Forte de Agra. À tarde, voo doméstico para Varanasi. Chegada e alojamento."
        }
      },
      {
        day: 15,
        title: {
          en: "Varanasi: Ganges Sunrise Cruise & Sarnath",
          es: "Varanasi – Espiritualidad en el Ganges",
          pt: "Varanasi: Ganges e Sarnath"
        },
        desc: {
          en: "Sunrise boat ride on the Ganges River, visit Sarnath (Buddhist sermon site). In the evening, attend the Aarti ceremony on the ghats. Overnight.",
          es: "Al amanecer, paseo en barco por el río Ganges observando rituales de purificación. Visita de templos y excursión a Sarnath, lugar donde Buda dio su primer sermón. Por la tarde, ceremonia Aarti en los ghats, experiencia profundamente espiritual. Alojamiento.",
          pt: "Passeio de barco ao amanhecer no Ganges, visita a templos e Sarnath. À noite, assistência à cerimônia Aarti nos ghats. Alojamento."
        }
      },
      {
        day: 16,
        title: {
          en: "Varanasi to Delhi & Departure",
          es: "Varanasi – New Delhi (Salida)",
          pt: "Varanasi para Deli & Partida"
        },
        desc: {
          en: "Transfer to Varanasi airport for flight back to Delhi and connect with your onward international departure flight. End of services.",
          es: "Traslado al aeropuerto para vuelo a Delhi y conexión con vuelo internacional. Fin de nuestros servicios.",
          pt: "Transporte para o aeroporto para voo para Deli e ligação com o voo de regresso internacional. Fim dos serviços."
        }
      }
    ],
    includedExperiences: [
      {
        en: "Camel safari and cultural dinner in Jaisalmer dunes",
        es: "Safari en camello por las dunas del desierto con cena cultural en Jaisalmer",
        pt: "Safári de camelo e acampamento nas dunas de areia de Jaisalmer"
      },
      {
        en: "Private boat ride on the beautiful Lake Pichola in Udaipur",
        es: "Paseo en barco por el Lago Pichola en Udaipur",
        pt: "Passeio de barco privado no sagrado lago Pichola em Udaipur"
      },
      {
        en: "Traditional rickshaw ride through the markets of Old Delhi",
        es: "Recorrido por Chandni Chowk en rickshaw en Delhi",
        pt: "Passeio tradicional de riquixá pelos mercados de Velha Deli"
      },
      {
        en: "Guided sunset/sunrise tour of the Taj Mahal in Agra",
        es: "Visita al Taj Mahal al amanecer en Agra",
        pt: "Visita guiada ao Taj Mahal ao amanhecer"
      }
    ],
    travelTips: [],
    faqs: [],
    startingLocation: "Delhi, India",
    endingLocation: "Delhi, India",
    tourType: "Private Luxury Heritage & Spiritual Tour",
    travelStyle: "Heritage, Culture, Deserts, Palaces & Ganges Spirituality",
    groupSize: "2–12 Travellers",
    difficultyLevel: "Easy to Moderate",
    status: "published",
    isFeatured: true,
    seo: {
      metaTitle: {
        en: "Rajasthan & Varanasi Imperial Journey | 16 Days",
        es: "Rajasthan y Varanasi Imperial | 16 Días",
        pt: "Rajasthan e Varanasi Imperial | 16 Dias"
      },
      description: {
        en: "Discover Delhi, Mandawa, Bikaner, Jaisalmer, Jodhpur, Udaipur, Pushkar, Jaipur, Agra and Varanasi in a 16-day private luxury tour.",
        es: "Explore Delhi, Mandawa, Bikaner, Jaisalmer, Jodhpur, Udaipur, Pushkar, Jaipur, Agra y Varanasi en un viaje de 16 días.",
        pt: "Explore Deli, Mandawa, Bikaner, Jaisalmer, Jodhpur, Udaipur, Pushkar, Jaipur, Agra e Varanasi em um tour de 16 dias."
      },
      keywords: {
        en: "Rajasthan tour, Varanasi tour, Mandawa havelis, Jaisalmer dunes safari, Jodhpur blue city, Udaipur lake Pichola, Taj Mahal sunrise, Varanasi ganges boat ride, India private tour",
        es: "viaje Rajasthan, viaje Varanasi, desierto Jaisalmer, paseo barca Udaipur, Taj Mahal amanecer, ceremonia aarti Ganges, viaje privado India 16 dias",
        pt: "viagem Rajastão, viagem Varanasi, deserto Jaisalmer, passeio barco Udaipur, Taj Mahal amanhecer, cerimônia aarti Ganges, viagem privada Índia 16 dias"
      },
      ogTitle: "Rajasthan & Varanasi Imperial Journey | 16 Days Private Tour",
      ogDescription: "Discover Delhi, Mandawa, Bikaner, Jaisalmer, Jodhpur, Udaipur, Pushkar, Jaipur, Agra and Varanasi in a 16-day private luxury tour.",
      canonicalUrl: "/packages/rajasthan-varanasi-imperial-luxury-tour",
      indexRule: "index",
      followRule: "follow"
    }
  },
  {
    slug: "south-india-temples-backwaters-cultural-tour",
    title: {
      en: "South India Highlights: Temples & Backwaters",
      es: "Viaje Sur de la India",
      pt: "Viagem ao Sul da Índia: Templos e Remansos"
    },
    tagline: {
      en: "Discover the tropical charm of the south: historical temples of Tamil Nadu and backwaters of Kerala",
      es: "Descubre el encanto tropical del sur: templos históricos de Tamil Nadu y los remansos de Kerala",
      pt: "Descubra o charme tropical do sul: templos históricos de Tamil Nadu e os canais de Kerala"
    },
    category: "South India",
    durationDays: 15,
    image: "/images/andaman islands.jpg",
    gallery: [],
    highlights: [
      {
        en: "Visit the iconic heritage temples of Kanchipuram, Tanjore, and Madurai",
        es: "Visita a los emblemáticos templos patrimonio de Kanchipuram, Tanjore y Madurai",
        pt: "Visite os templos patrimoniais de Kanchipuram, Tanjore e Madurai"
      },
      {
        en: "Overnight cruise on a traditional luxury houseboat in the Alleppey backwaters",
        es: "Estadía y crucero nocturno a bordo de una tradicional casa-barco (Houseboat) en Alleppey",
        pt: "Cruzeiro noturno em um tradicional barco-casa (houseboat) em Alleppey"
      },
      {
        en: "Relax on the golden beaches of Kovalam and explore colonial French Pondicherry and Kochi",
        es: "Relájate en las playas doradas de Kovalam y la influencia colonial de Pondicherry y Cochin",
        pt: "Relaxe nas praias de Kovalam e explore as influências coloniais de Pondicherry e Cochin"
      },
      {
        en: "Explore Munnar's sprawling tea estates and Periyar wildlife sanctuary in Thekkady",
        es: "Explora las plantaciones de té en las colinas de Munnar y la reserva natural en Thekkady",
        pt: "Explore as plantações de chá em Munnar e o santuário de vida selvagem em Thekkady"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: {
          en: "Arrival in Chennai",
          es: "Llegada a Chennai",
          pt: "Chegada a Chennai"
        },
        desc: {
          en: "Arrival in Chennai. Greeted at the airport by our driver and transfer to hotel. Visit Kapaleeswarar and Parthasarathy temples if time permits. Overnight in Chennai.",
          es: "Llegada a Chennai: ¡Bienvenidos a la India! A su llegada, nuestro chofer le estará esperando en el aeropuerto con un cartel con su nombre y le trasladará a su hotel. Después, realizaremos una visita al Kapaleeswara Temple, Parthasarathy Temple y a la fortaleza de St. George (si el tiempo lo permite). Noche en Chennai.",
          pt: "Chegada a Chennai. Receção no aeroporto e transporte para o hotel. Visitas de templos conforme horário de chegada. Alojamento em Chennai."
        }
      },
      {
        day: 2,
        title: {
          en: "Chennai to Mahabalipuram via Kanchipuram",
          es: "Chennai – Kanchipuram – Mahabalipuram",
          pt: "Chennai para Mahabalipuram"
        },
        desc: {
          en: "After breakfast, drive to Mahabalipuram. En route, visit Kanchipuram temples (Kailasanatha, Ekambareshwarar, Vaikunda Perumal). Visit Shore Temple and Arjuna's Penance in Mahabalipuram. Overnight in Mahabalipuram.",
          es: "Después del desayuno, conduciremos hasta Mahabalipuram. En el camino, visitaremos Kanchipuram, donde veremos el Kailasanatha Temple, el Ekambareshwarar Temple y el Vaikunda Perumal Temple. Luego, continuaremos hacia Shore Temple y Arjuna’s Penance. Noche en Mahabalipuram.",
          pt: "Após o pequeno-almoço, viagem para Mahabalipuram parando nos templos de Kanchipuram. Visita ao Shore Temple em Mahabalipuram. Alojamento em Mahabalipuram."
        }
      },
      {
        day: 3,
        title: {
          en: "Mahabalipuram to Pondicherry (French Town)",
          es: "Mahabalipuram – Pondicherry",
          pt: "Mahabalipuram para Pondicherry"
        },
        desc: {
          en: "After breakfast, drive to Pondicherry, a former French colony. Visit Sri Aurobindo Ashram, Pondicherry Museum, and Manakula Vinayagar Temple. Overnight in Pondicherry.",
          es: "Después del desayuno, conduciremos hasta Pondicherry (el pueblo francés). Pondicherry, que fue una colonia francesa, se estableció a principios del siglo XVIII. Llegada al hotel y visita al Sri Aurobindo Ashram y al Templo de Manakula Vinayagar. Noche en Pondicherry.",
          pt: "Após o pequeno-almoço, viagem para Pondicherry. Visita ao Sri Aurobindo Ashram, Museu de Pondicherry e Templo Manakula Vinayagar. Alojamento em Pondicherry."
        }
      },
      {
        day: 4,
        title: {
          en: "Pondicherry to Tanjore Heritage Sites",
          es: "Pondicherry – Tanjore: Por carretera",
          pt: "Pondicherry para Tanjore"
        },
        desc: {
          en: "Drive to Tanjore, passing through Chidambaram, Gangaikondacholapuram, and Darasuram temples. Afternoon city sightseeing of Tanjore. Overnight in Tanjore.",
          es: "Después del desayuno, nos dirigiremos a Tanjore, pasando por Chidambaram, Gangaikondacholapuram y los templos de Darasuram. Tanjore alcanzó su fama durante la última parte del reino Chola. Llegada al hotel y visita por la tarde. Alojamiento en Tanjore.",
          pt: "Viagem para Tanjore, passando por Chidambaram, Gangaikondacholapuram e Darasuram. Visita da cidade à tarde. Alojamento em Tanjore."
        }
      },
      {
        day: 5,
        title: {
          en: "Tanjore Temples & Palaces",
          es: "Tanjore",
          pt: "Tanjore"
        },
        desc: {
          en: "After breakfast, visit the magnificent UNESCO-listed Brihadeeswara Temple, Tanjore Palace, observation towers, and the art gallery. Overnight in Tanjore.",
          es: "Después del desayuno, visita al templo Brahadeeswara, los amplios salones del Palacio de Tanjore, las torres de observación y el arsenal. Noche en Tanjore.",
          pt: "Após o pequeno-almoço, visita ao templo Brihadeeshwara, Palácio de Tanjore e galeria de arte. Alojamento em Tanjore."
        }
      },
      {
        day: 6,
        title: {
          en: "Tanjore to Trichy & Rock Fort",
          es: "Tanjore – Trichy",
          pt: "Tanjore para Trichy"
        },
        desc: {
          en: "After breakfast, drive to Trichy on the banks of Kaveri river. Visit the famous Rock Fort Temple built high on a rock by the Nayaks of Madurai. Overnight in Trichy.",
          es: "Después del desayuno, nos dirigiremos a Trichy. Llegada al hotel. Trichy, situada a orillas del río Kaveri, alberga la Roca. Visita al famoso Rock Fort, construido por los Nayaks de Madurai. Noche en Trichy.",
          pt: "Após o pequeno-almoço, viagem para Trichy. Visita ao templo do Forte da Rocha (Rock Fort). Alojamento em Trichy."
        }
      },
      {
        day: 7,
        title: {
          en: "Trichy to Madurai via Chettinad Palace",
          es: "Trichy – Chettinad – Madurai",
          pt: "Trichy para Madurai"
        },
        desc: {
          en: "Drive to Chettinad to visit Chettinad Palace, famous for local heritage homes. Continue to Madurai. Visit Sri Meenakshi Amman Temple and Nayak Palace. Overnight in Madurai.",
          es: "Después del desayuno, nos dirigiremos a Chettinad para visitar el Chettinad Palace. Luego, continuaremos hacia Madurai y llegada al hotel. Visita al Sri Meenakshi Amman Temple y al Nayak Palace. Noche en Madurai.",
          pt: "Viagem para Chettinad para visitar o Palácio Chettinad. Continuação para Madurai. Visita ao Templo Meenakshi e Palácio Nayak. Alojamento em Madurai."
        }
      },
      {
        day: 8,
        title: {
          en: "Madurai to Kovalam Beach Resort",
          es: "Madurai – Kovalam",
          pt: "Madurai para Kovalam"
        },
        desc: {
          en: "After breakfast, drive to Kovalam, stopping en route to visit the Padmanabhapuram Teak Palace. Check-in at the beach resort and relax. Overnight in Kovalam.",
          es: "Después del desayuno, nos dirigiremos a Kovalam, realizando una visita en ruta al Padmanabhapuram Teak Palace. A la llegada a Kovalam, traslado al hotel. Resto del día libre para disfrutar de sus playas. Noche en Kovalam.",
          pt: "Após o pequeno-almoço, viagem para Kovalam, visitando no caminho o Palácio de Madeira Padmanabhapuram. Alojamento em Kovalam."
        }
      },
      {
        day: 9,
        title: {
          en: "Kovalam Beach Relaxation & Ayurveda",
          es: "Kovalam",
          pt: "Kovalam"
        },
        desc: {
          en: "Free day to relax on the sandy beaches of Kovalam. Enjoy Ayurvedic massages (optional), swimming, and fresh seafood by the Arabian Sea. Overnight in Kovalam.",
          es: "Día libre de relax en Kovalam. Pueden pasear por las playas y darse un baño, o contratar uno de los famosos masajes ayurvédicos (Shirodhara y/o Abhyangam). Noche en Kovalam.",
          pt: "Dia livre em Kovalam para desfrutar da praia, tratamentos ayurvédicos e gastronomia local de frutos do mar. Alojamento em Kovalam."
        }
      },
      {
        day: 10,
        title: {
          en: "Kovalam to Alleppey Houseboat Cruise",
          es: "Kovalam – Alleppey",
          pt: "Kovalam para Alleppey"
        },
        desc: {
          en: "Drive to Alleppey to board a traditional luxury houseboat at 12:30 PM. Cruise through the backwaters and Vembanad Lake. Lunch and dinner on board. Overnight on Houseboat.",
          es: "Después del desayuno, nos dirigiremos a Alleppey a bordo de una houseboat a las 12:30 pm. Realizaremos un crucero por los canales del lago Vembanad para conocer la tradicional Kerala. Noche en Houseboat.",
          pt: "Viagem para Alleppey para embarque num barco-casa tradicional (houseboat) às 12:30. Cruzeiro pelos remansos. Refeições incluídas a bordo. Alojamento em barco-casa."
        }
      },
      {
        day: 11,
        title: {
          en: "Alleppey to Thekkady (Periyar)",
          es: "Thekkady",
          pt: "Thekkady"
        },
        desc: {
          en: "Disembark from houseboat at 9:00 AM and drive to Thekkady. Check-in at the hotel. Spend the rest of the day exploring the local spice markets. Overnight in Thekkady.",
          es: "Desembarcaremos del houseboat a las 9:00 am y nos dirigiremos hacia Thekkady. Llegada al hotel. Resto del día libre en Thekkady, donde podrán pasear por las calles de la ciudad. Noche en Thekkady.",
          pt: "Desembarque do barco-casa e viagem para Thekkady. Check-in no hotel e tempo livre nos mercados locais. Alojamento em Thekkady."
        }
      },
      {
        day: 12,
        title: {
          en: "Periyar Wildlife Sanctuary Cruise",
          es: "Thekkady",
          pt: "Thekkady"
        },
        desc: {
          en: "Morning boat ride on Periyar Lake inside the national park to observe wildlife like elephants, gaurs, and birds in their natural habitat. Overnight in Thekkady.",
          es: "Por la mañana, realizaremos un paseo en barca por el lago para ver las plantaciones de especies de Kerala en su hábitat natural. Noche en Thekkady.",
          pt: "Passeio de barco no lago Periyar para avistar animais selvagens e visitar plantações de especiarias. Alojamento em Thekkady."
        }
      },
      {
        day: 13,
        title: {
          en: "Thekkady to Munnar Tea Estates",
          es: "Thekkady – Munnar",
          pt: "Thekkady para Munnar"
        },
        desc: {
          en: "Drive to Munnar, a beautiful hill station. Visit Mattupetty Dam, Tea Museum, and see the rare Nilgiri Tahr mountain goats. Overnight in Munnar.",
          es: "Después del desayuno, nos dirigiremos a Munnar. Llegada al hotel y, a continuación, visita al Nilgiri Thar, Mattupetty Dam y al Museo del Té. Noche en Munnar.",
          pt: "Viagem para Munnar. Visita à barragem Mattupetty, Museu do Chá e mirantes panorâmicos. Alojamento em Munnar."
        }
      },
      {
        day: 14,
        title: {
          en: "Munnar to Cochin & Kathakali Show",
          es: "Munnar – Cochin",
          pt: "Munnar para Cochin"
        },
        desc: {
          en: "Drive to Cochin. Guided tour of Fort Cochin including St. Francis Church, Jewish Synagogue, Dutch Palace, and attend a classical Kathakali dance show. Overnight in Cochin.",
          es: "Después del desayuno, nos dirigiremos a Cochin. Llegada al hotel y, a continuación, tour por la Fortaleza de Fort Cochin, visitando la Sinagoga, la Iglesia de San Francisco, el Palacio Mattancherry y una representación de danza Kathakali. Noche en Cochin.",
          pt: "Viagem para Cochin. Visita a Fort Cochin: Sinagoga Judaica, Igreja de São Francisco, Palácio Holandês e show de dança Kathakali. Alojamento em Cochin."
        }
      },
      {
        day: 15,
        title: {
          en: "Cochin to Chennai Flight & Departure",
          es: "Cochin – Chennai",
          pt: "Cochin para Chennai"
        },
        desc: {
          en: "Transfer to Cochin airport for your flight back to Chennai and onward flight connections. End of our services.",
          es: "A la hora indicada, los trasladaremos al aeropuerto de Cochin para tomar su vuelo hacia Chennai. Fin de nuestros servicios.",
          pt: "Transporte para o aeroporto de Cochin para voo com destino a Chennai. Fim dos nossos serviços."
        }
      }
    ],
    includedExperiences: [
      {
        en: "Private cruise and overnight stay in a traditional Kerala Houseboat",
        es: "Paseo en bote y estadía en una tradicional casabarco (Houseboat) de Kerala",
        pt: "Passeio e estadia em um tradicional barco-casa (Houseboat) em Kerala"
      },
      {
        en: "Traditional rejuvenating Ayurvedic massage session in Kovalam",
        es: "Masaje ayurvédico rejuvenecedor tradicional en Kovalam",
        pt: "Massagem ayurvédica tradicional em Kovalam"
      },
      {
        en: "Classical Kathakali dance cultural performance in Cochin",
        es: "Espectáculo cultural de danza Kathakali clásica en Cochin",
        pt: "Apresentação cultural de dança clássica Kathakali em Cochin"
      },
      {
        en: "Boat cruise on Periyar Lake in Thekkady to spot wild elephants",
        es: "Paseo en barca por el lago Periyar en Thekkady para ver vida silvestre",
        pt: "Passeio de barco no lago Periyar em Thekkady para ver vida selvagem"
      }
    ],
    travelTips: [],
    faqs: [],
    startingLocation: "Chennai, India",
    endingLocation: "Chennai, India",
    tourType: "Private Cultural, Temple & Nature Holiday",
    travelStyle: "Heritage Temples, Coastal Towns, Backwaters & Tea Plantations",
    groupSize: "2–12 Travellers",
    difficultyLevel: "Easy",
    status: "published",
    isFeatured: true,
    seo: {
      metaTitle: {
        en: "South India Highlights: Temples & Backwaters | 15 Days",
        es: "Viaje Sur de la India con Remansos y Templos | 15 Días",
        pt: "Viagem ao Sul da Índia: Templos e Remansos | 15 Dias"
      },
      description: {
        en: "Discover Chennai, Mahabalipuram, Pondicherry, Tanjore, Trichy, Madurai, Kovalam, Alleppey backwaters, Periyar, Munnar and Kochi in a 15-day private tour.",
        es: "Explore Chennai, Mahabalipuram, Pondicherry, Tanjore, Trichy, Madurai, Kovalam, Alleppey, Thekkady, Munnar y Cochin en un viaje de 15 días.",
        pt: "Explore Chennai, Mahabalipuram, Pondicherry, Tanjore, Trichy, Madurai, Kovalam, Alleppey, Thekkady, Munnar e Cochin em um tour de 15 dias."
      },
      keywords: {
        en: "South India tour, Kerala backwaters, Tamil nadu temples, Madurai Meenakshi temple, Tanjore Brihadeeshwara, Kovalam beach, Munnar tea plantation, Periyar elephant safari, Alleppey houseboat",
        es: "viaje sur India, templos tamil nadu, casa barco Alleppey, playas Kovalam, plantacion te Munnar, parque nacional Periyar, viaje privado India 15 dias",
        pt: "viagem sul da India, templos tamil nadu, barco casa Alleppey, praias Kovalam, plantacao cha Munnar, parque nacional Periyar, viagem privada India 15 dias"
      },
      ogTitle: "South India Highlights: Temples & Backwaters | 15 Days Private Tour",
      ogDescription: "Discover Chennai, Mahabalipuram, Pondicherry, Tanjore, Trichy, Madurai, Kovalam, Alleppey backwaters, Periyar, Munnar and Kochi in a 15-day private tour.",
      canonicalUrl: "/packages/south-india-temples-backwaters-cultural-tour",
      indexRule: "index",
      followRule: "follow"
    }
  },
  {
    slug: "rajasthan-desert-essence-10-days-tour",
    title: {
      en: "Rajasthan Desert Essence Tour",
      es: "Viajes Rajasthan",
      pt: "Viagem ao Rajastão Essência do Deserto"
    },
    tagline: {
      en: "Discover the soul of Rajasthan in 10 days: majestic forts, sacred lakes, and authentic rural life",
      es: "Descubre el alma de Rajastán en 10 días: fuertes majestuosos, lagos sagrados y la vida rural auténtica",
      pt: "Descubra a alma do Rajastão em 10 dias: fortes majestosos, lagos sagrados e vida rural autêntica"
    },
    category: "Rajasthan Tours",
    durationDays: 10,
    image: "/images/taj_mahal_sunrise.png",
    gallery: [],
    highlights: [
      {
        en: "Visit the iconic Taj Mahal in Agra and the Golden Triangle forts",
        es: "Visita el emblemático Taj Mahal en Agra y las fortalezas del Triángulo de Oro",
        pt: "Visite o icônico Taj Mahal em Agra e os fortes do Triângulo de Ouro"
      },
      {
        en: "Explore the sacred temples of Pushkar and the mighty Mehrangarh Fort in Jodhpur",
        es: "Explora los templos sagrados de Pushkar y el imponente Fuerte Mehrangarh en Jodhpur",
        pt: "Explore os templos sagrados de Pushkar e o impontente Forte Mehrangarh em Jodhpur"
      },
      {
        en: "Discover the camel breeding farm and Junagarh Fort in Bikaner",
        es: "Conoce la granja de cría de camellos y el Fuerte Junagarh en Bikaner",
        pt: "Conheça a fazenda de criação de camelos e o Forte Junagarh em Bikaner"
      },
      {
        en: "Experience real India with a local family homestay in Hudeel (Shekhawati)",
        es: "Experimenta la India real conviviendo con una familia local en Hudeel (Shekhawati)",
        pt: "Experimente a Índia real hospedando-se com uma família local em Hudeel"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: {
          en: "Arrival in Delhi",
          es: "Delhi: Llegada a Delhi",
          pt: "Chegada a Deli"
        },
        desc: {
          en: "Welcome to India! Upon arrival, we will greet you at the airport. Our driver will hold a sign with your name. Transfer to hotel. Overnight in Delhi.",
          es: "¡Bienvenidos a la India! A su llegada le recibiremos en el aeropuerto, les esperará nuestro chofer con un cartel con su nombre. Le llevaremos a su hotel, dónde le entregaremos los documentos necesarios para su viaje, (reservas de hotel, billetes de avión interno y tren (si lo ha contratado en su viaje)). Noche en Delhi.",
          pt: "Bem-vindo à Índia! À chegada, receção no aeroporto pelo nosso motorista e transporte para o hotel. Noite em Deli."
        }
      },
      {
        day: 2,
        title: {
          en: "Delhi Sightseeing: Old & New Delhi",
          es: "Delhi",
          pt: "Deli"
        },
        desc: {
          en: "After breakfast, embark on a full day guided tour of Old and New Delhi, exploring Jama Masjid, Red Fort, Qutub Minar, and India Gate. Overnight in Delhi.",
          es: "Después del desayuno, empezamos con una visita guiada por la ciudad nueva (New Delhi): India Gate, President’s Viajes India House, Humayun’s Tomb, Qutab Minar (la más grande torre en piedra tallada en India) y Laxmi Narayan Temple. Después de la comida visitaremos la antigua Delhi (Old Delhi): Jama Masjid, Red Fort y Gandhi Memorial. Noche en Delhi.",
          pt: "Após o pequeno-almoço, visita guiada por Nova Deli e Velha Deli, incluindo Jama Masjid, Forte Vermelho, Qutub Minar e Porta da Índia. Noite em Deli."
        }
      },
      {
        day: 3,
        title: {
          en: "Delhi to Agra & Taj Mahal",
          es: "Delhi – Agra: Por carretera",
          pt: "Deli para Agra"
        },
        desc: {
          en: "After breakfast, travel to Agra. Upon arrival, check-in at the hotel. Visit the spectacular Taj Mahal, one of the Seven Wonders of the World. Overnight in Agra.",
          es: "Después del desayuno, viaje hacia Agra. Llegada a su hotel. Visita al espectacular Taj Mahal. Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, viagem para Agra. À chegada, check-in no hotel e visita ao espetacular Taj Mahal. Noite no alojamento."
        }
      },
      {
        day: 4,
        title: {
          en: "Agra to Jaipur via Fatehpur Sikri",
          es: "Agra – Fatehpur Sikri – Jaipur: Por carretera",
          pt: "Agra para Jaipur"
        },
        desc: {
          en: "Morning drive to Jaipur, stopping en route at the ancient abandoned Mughal city of Fatehpur Sikri. Arrive in Jaipur and explore colorful bazaars. Overnight in Jaipur.",
          es: "Por la mañana, después del desayuno, nos dirigiremos a Jaipur, con una parada en la antigua ciudad mogol de Fatehpur Sikri. A la llegada, check-in en el hotel. Por la tarde, paseo por las calles y los coloridos bazares de la Ciudad Rosada. Visitaremos el templo de Birla. Noche en el alojamiento.",
          pt: "De manhã, viagem para Jaipur com paragem em Forte de Fatehpur Sikri. À chegada, check-in e passeio pelos bazares tradicionais. Noite no alojamento."
        }
      },
      {
        day: 5,
        title: {
          en: "Jaipur: Amber Fort & Palaces",
          es: "Jaipur",
          pt: "Jaipur"
        },
        desc: {
          en: "After breakfast, explore Amber Fort, City Palace, Jantar Mantar observatory, and snap photos of the Palace of the Winds (Hawa Mahal). Overnight in Jaipur.",
          es: "Después del desayuno visitaremos la Fortaleza de Amber (subida en elefante), el Palacio de la Ciudad, el observatorio astronómico Jantar Mantar y la fachada de Hawa Mahal. Noche en el alojamiento.",
          pt: "Após o pequeno-almoço, visita ao Forte Amber, Palácio da Cidade, observatório Jantar Mantar e Palácio dos Ventos. Noite no alojamento."
        }
      },
      {
        day: 6,
        title: {
          en: "Jaipur to Pushkar Holy Town",
          es: "Jaipur – Pushkar: Por carretera",
          pt: "Jaipur para Pushkar"
        },
        desc: {
          en: "After breakfast, drive to Pushkar. Visit the rare temple of Brahma, stroll along the sacred lake ghats, and watch a beautiful sunset. Overnight in Pushkar.",
          es: "Por la mañana, después del desayuno, nos dirigiremos a Pushkar. A la llegada, check-in en el hotel. Por la tarde, visita al templo de Brahma y paseo por los Ghats del lago sagrado al atardecer. Noche en el alojamiento.",
          pt: "De manhã, viagem para Pushkar. Visita ao Templo de Brahma, passeio pelos ghats sagrados do lago e pôr do sol. Noite no alojamento."
        }
      },
      {
        day: 7,
        title: {
          en: "Pushkar to Jodhpur: The Blue City",
          es: "Pushkar – Jodhpur",
          pt: "Pushkar para Jodhpur"
        },
        desc: {
          en: "Drive to Jodhpur, the Blue City. Visit the magnificent hilltop Mehrangarh Fort, Jaswant Thada memorial, and the bustling Clock Tower market. Overnight in Jodhpur.",
          es: "Por la mañana, después del desayuno, nos dirigiremos a Jodhpur. A la llegada, check-in en el hotel. Visitaremos el majestuoso Mehrangarh Fort y Jaswant Thada. Por la tarde, exploraremos la Torre del Reloj. Noche en el alojamiento.",
          pt: "Viagem para Jodhpur. Visita ao monumental Forte Mehrangarh, Jaswant Thada e mercado tradicional da Torre do Relógio. Noite no alojamento."
        }
      },
      {
        day: 8,
        title: {
          en: "Jodhpur to Bikaner Fort & Camel Farm",
          es: "Jodhpur – Bikaner: Por carretera",
          pt: "Jodhpur para Bikaner"
        },
        desc: {
          en: "Morning drive to Bikaner. Visit Junagarh Fort, camel breeding farm (with optional camel milk tasting), and Karni Mata rat temple in Deshnok. Overnight in Bikaner.",
          es: "Por la mañana temprano, después del desayuno, nos dirigiremos a Bikaner. Visitaremos la fortaleza de Junagarh, la granja de cría de camellos y el templo de las ratas (Karni Mata) en Deshnok. Noche en el alojamiento.",
          pt: "Viagem para Bikaner. Visita ao Forte Junagarh, fazenda de camelos e Templo das Ratazanas (Karni Mata) em Deshnok. Noite no alojamento."
        }
      },
      {
        day: 9,
        title: {
          en: "Bikaner to Hudeel Rural Village",
          es: "Bikaner – Hudeel: Por carretera",
          pt: "Bikaner para Hudeel"
        },
        desc: {
          en: "Drive to Hudeel, a rural village in the Shekhawati region. Experience authentic village life, visit Karni Kot temple in the desert, and enjoy home hospitality with a local family. Overnight in Hudeel.",
          es: "Después del desayuno, ruta hacia Hudeel. Al llegar al alojamiento de nuestros familiares, tiempo libre. Visitaremos el templo Karni Kot en el desierto y el típico pueblo rural para conocer costumbres. Noche en el alojamiento.",
          pt: "Viagem para Hudeel, uma aldeia rural em Shekhawati. Convivência com uma família local, visita ao templo de Karni Kot no deserto. Noite em Hudeel."
        }
      },
      {
        day: 10,
        title: {
          en: "Hudeel to Delhi & Departure",
          es: "Hudeel – New Delhi – Salida: Por carretera",
          pt: "Hudeel para Deli & Partida"
        },
        desc: {
          en: "At the designated time, drive back to New Delhi airport for your flight back home. End of our services.",
          es: "A la hora indicada, nos dirigiremos a Nueva Delhi. A la llegada al aeropuerto, podrá tomar su vuelo de regreso a su país. Fin de nuestros servicios.",
          pt: "Na hora indicada, viagem de regresso a Nova Deli para ligação com o voo de regresso internacional. Fim dos nossos serviços."
        }
      }
    ],
    includedExperiences: [
      {
        en: "Authentic rural homestay with a local family in Hudeel",
        es: "Estadía de convivencia rural auténtica con una familia local en Hudeel",
        pt: "Estadia rural autêntica com uma família local em Hudeel"
      },
      {
        en: "Camel ride in Sam Sand Dunes of Jaisalmer or desert temple hike",
        es: "Paseo de safari corto en camello y templo de Karni Kot en el desierto",
        pt: "Passeio de camelo e visita ao Templo Karni Kot no deserto"
      },
      {
        en: "Traditional Jeep or elephant ride up to Amber Fort in Jaipur",
        es: "Paseo tradicional en jeep o lomos de elefante en la Fortaleza de Amber en Jaipur",
        pt: "Passeio de jipe ou elefante no Forte Amber em Jaipur"
      },
      {
        en: "Traditional camel milk tasting at Bikaner camel farm",
        es: "Degustación tradicional en la granja de camellos de Bikaner",
        pt: "Degustação tradicional de leite de camelo em Bikaner"
      }
    ],
    travelTips: [],
    faqs: [],
    startingLocation: "Delhi, India",
    endingLocation: "Delhi, India",
    tourType: "Private Cultural & Rural Experience",
    travelStyle: "Forts, Palaces, Sacred Lakes, Deserts & Authentic Rural Homestay",
    groupSize: "2–12 Travellers",
    difficultyLevel: "Easy",
    status: "published",
    isFeatured: true,
    seo: {
      metaTitle: {
        en: "Rajasthan Desert Essence Tour | 10 Days",
        es: "Viajes Rajasthan Esencia del Desierto | 10 Días",
        pt: "Viagem ao Rajastão Essência do Deserto | 10 Dias"
      },
      description: {
        en: "Explore Delhi, Agra, Jaipur, Pushkar, Jodhpur, Bikaner, and Hudeel village on a 10-day private tour with Taj Mahal and local homestay.",
        es: "Explore Delhi, Agra, Jaipur, Pushkar, Jodhpur, Bikaner y el pueblo rural de Hudeel en un viaje de 10 días.",
        pt: "Explore Deli, Agra, Jaipur, Pushkar, Jodhpur, Bikaner e a aldeia rural de Hudeel em um tour de 10 dias."
      },
      keywords: {
        en: "Rajasthan tour, desert safari, Jodhpur blue city, Taj Mahal, Pushkar lake, Brahma temple, Bikaner camel farm, Hudeel village, India private tour 10 days",
        es: "viaje Rajasthan, desierto India, viaje 10 dias India, fuerte Jodhpur, lago Pushkar, granja camellos Bikaner, pueblo rural Hudeel, viaje privado India",
        pt: "viagem Rajastão, deserto Índia, viagem 10 dias Índia, forte Jodhpur, lago Pushkar, fazenda camelos Bikaner, aldeia rural Hudeel, viagem privada Índia"
      },
      ogTitle: "Rajasthan Desert Essence Tour | 10 Days Private Experience",
      ogDescription: "Explore Delhi, Agra, Jaipur, Pushkar, Jodhpur, Bikaner, and Hudeel village on a 10-day private tour with Taj Mahal and local homestay.",
      canonicalUrl: "/packages/rajasthan-desert-essence-10-days-tour",
      indexRule: "index",
      followRule: "follow"
    }
  }
];


// ============================================================
// ADDITIONAL FOODS (12 more)
// ============================================================
export const additionalFoods: FoodData[] = [
  {
    slug: "hyderabadi-biryani",
    title: { en: "Hyderabadi Dum Biryani", es: "Biryani Dum de Hyderabad", pt: "Dum Biryani de Hyderabad" },
    category: "Mughlai Specialty",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800",
    gallery: [],
    history: { en: "Created in the royal kitchens of the Nizam of Hyderabad, a slow-cooked masterpiece.", es: "Creado en las cocinas reales del Nizam de Hyderabad.", pt: "Criado nas cozinhas reais do Nizam de Hyderabad." },
    ingredients: [{ en: "Basmati rice, saffron, marinated goat meat", es: "Arroz basmati, azafrán, carne de cabra marinada", pt: "Arroz basmati, açafrão, carne de cabra marinada" }],
    origin: { en: "Hyderabad, Telangana", es: "Hyderabad, Telangana", pt: "Hyderabad, Telangana" },
    region: "South India",
    bestCities: [{ en: "Hyderabad", es: "Hyderabad", pt: "Hyderabad" }],
    bestRestaurants: [{ name: "Paradise Biryani", city: "Hyderabad" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "pav-bhaji",
    title: { en: "Pav Bhaji", es: "Pav Bhaji", pt: "Pav Bhaji" },
    category: "Mumbai Street Food",
    image: "/images/pav bhaji.jpg",
    gallery: [],
    history: { en: "Born on the streets of Mumbai as a quick meal for textile mill workers in the 1850s.", es: "Nacido en las calles de Mumbai como comida rápida en los años 1850.", pt: "Nascido nas ruas de Mumbai como refeição rápida nos anos 1850." },
    ingredients: [{ en: "Mashed mixed vegetables with butter", es: "Puré de verduras mixtas con mantequilla", pt: "Purê de vegetais mistos com manteiga" }, { en: "Toasted buttered bread rolls (Pav)", es: "Panecillos tostados con mantequilla", pt: "Pãezinhos torrados com manteiga" }],
    origin: { en: "Mumbai, Maharashtra", es: "Mumbai, Maharashtra", pt: "Mumbai, Maharashtra" },
    region: "West India",
    bestCities: [{ en: "Mumbai", es: "Mumbai", pt: "Mumbai" }],
    bestRestaurants: [{ name: "Sardar Refreshments", city: "Mumbai" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "tandoori-chicken",
    title: { en: "Tandoori Chicken", es: "Pollo Tandoori", pt: "Frango Tandoori" },
    category: "North Indian",
    image: "/images/tandoori chicken.jpg",
    gallery: [],
    history: { en: "Originated in Peshawar, popularized at Moti Mahal restaurant in Delhi post-1947.", es: "Originado en Peshawar, popularizado en Delhi después de 1947.", pt: "Originado em Peshawar, popularizado em Delhi após 1947." },
    ingredients: [{ en: "Whole chicken marinated in yogurt & spices", es: "Pollo entero marinado en yogur y especias", pt: "Frango inteiro marinado em iogurte e especiarias" }, { en: "Cooked in cylindrical clay tandoor oven", es: "Cocinado en horno de barro tandoor", pt: "Cozido em forno de barro tandoor" }],
    origin: { en: "Delhi / Punjab", es: "Delhi / Punjab", pt: "Delhi / Punjab" },
    region: "North India",
    bestCities: [{ en: "New Delhi", es: "Nueva Delhi", pt: "Nova Deli" }, { en: "Amritsar", es: "Amritsar", pt: "Amritsar" }],
    bestRestaurants: [{ name: "Moti Mahal Delux", city: "New Delhi" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "vada-pav",
    title: { en: "Vada Pav", es: "Vada Pav", pt: "Vada Pav" },
    category: "Mumbai Street Food",
    image: "/images/vada pav.jpg",
    gallery: [],
    history: { en: "Mumbai's iconic vegetarian burger, created in the 1960s outside Dadar station.", es: "La hamburguesa vegetariana icónica de Mumbai.", pt: "O hambúrguer vegetariano icônico de Mumbai." },
    ingredients: [{ en: "Spiced potato fritter (Vada)", es: "Croqueta de papa condimentada", pt: "Croquete de batata temperada" }, { en: "Bread bun with garlic & green chutneys", es: "Pan con chutneys de ajo y verde", pt: "Pão com chutneys de alho e verde" }],
    origin: { en: "Mumbai, Maharashtra", es: "Mumbai, Maharashtra", pt: "Mumbai, Maharashtra" },
    region: "West India",
    bestCities: [{ en: "Mumbai", es: "Mumbai", pt: "Mumbai" }],
    bestRestaurants: [{ name: "Ashok Vada Pav", city: "Mumbai" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "laal-maas",
    title: { en: "Laal Maas", es: "Laal Maas", pt: "Laal Maas" },
    category: "Rajasthani Specialty",
    image: "/images/laal maas.jpg",
    gallery: [],
    history: { en: "A fiery red mutton curry from the warrior kitchens of Rajput royalty.", es: "Un curry rojo intenso de cordero de la cocina guerrera Rajput.", pt: "Um curry vermelho intenso de cordeiro da cozinha guerreira Rajput." },
    ingredients: [{ en: "Mutton with Mathania red chilies", es: "Carne de cordero con chiles rojos Mathania", pt: "Carne de cordeiro com pimentas vermelhas Mathania" }, { en: "Yogurt, garlic and whole spices", es: "Yogur, ajo y especias enteras", pt: "Iogurte, alho e especiarias inteiras" }],
    origin: { en: "Jodhpur, Rajasthan", es: "Jodhpur, Rajastán", pt: "Jodhpur, Rajastão" },
    region: "West India",
    bestCities: [{ en: "Jodhpur", es: "Jodhpur", pt: "Jodhpur" }, { en: "Jaipur", es: "Jaipur", pt: "Jaipur" }],
    bestRestaurants: [{ name: "Handi Restaurant", city: "Jaipur" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "idli-sambhar",
    title: { en: "Idli & Sambhar", es: "Idli y Sambhar", pt: "Idli e Sambhar" },
    category: "South Indian",
    image: "/images/idli sambhar.jpg",
    gallery: [],
    history: { en: "A staple South Indian breakfast for over 1000 years, perfected in Tamil Nadu and Karnataka.", es: "Un desayuno básico del sur de la India por más de 1000 años.", pt: "Um café da manhã básico do sul da Índia por mais de 1000 anos." },
    ingredients: [{ en: "Steamed rice & urad dal cakes (Idli)", es: "Tortas de arroz al vapor (Idli)", pt: "Bolos de arroz ao vapor (Idli)" }, { en: "Lentil vegetable stew (Sambhar)", es: "Guiso de lentejas y verduras (Sambhar)", pt: "Guisado de lentilhas e vegetais (Sambhar)" }],
    origin: { en: "Tamil Nadu & Karnataka", es: "Tamil Nadu y Karnataka", pt: "Tamil Nadu e Karnataka" },
    region: "South India",
    bestCities: [{ en: "Chennai", es: "Chennai", pt: "Chennai" }, { en: "Bangalore", es: "Bangalore", pt: "Bangalore" }],
    bestRestaurants: [{ name: "Murugan Idli Shop", city: "Chennai" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "kerala-fish-curry",
    title: { en: "Kerala Fish Curry (Meen Curry)", es: "Curry de Pescado de Kerala", pt: "Caril de Peixe de Kerala" },
    category: "Coastal Indian",
    image: "/images/kerala fish curry.jpg",
    gallery: [],
    history: { en: "A staple coastal dish of Kerala, cooked in clay pots with kokum and coconut.", es: "Un plato costero básico de Kerala cocinado en ollas de barro.", pt: "Um prato costeiro básico de Kerala cozido em panelas de barro." },
    ingredients: [{ en: "Fresh fish with raw mango or kokum", es: "Pescado fresco con mango crudo o kokum", pt: "Peixe fresco com manga crua ou kokum" }, { en: "Coconut milk, curry leaves & mustard seeds", es: "Leche de coco y hojas de curry", pt: "Leite de coco e folhas de caril" }],
    origin: { en: "Kerala, India", es: "Kerala, India", pt: "Kerala, Índia" },
    region: "South India",
    bestCities: [{ en: "Kochi", es: "Kochi", pt: "Kochi" }, { en: "Alleppey", es: "Alleppey", pt: "Alleppey" }],
    bestRestaurants: [{ name: "Kayees Biryani", city: "Kochi" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "dhokla",
    title: { en: "Dhokla", es: "Dhokla", pt: "Dhokla" },
    category: "Gujarati Snack",
    image: "/images/dhokla.jpg",
    gallery: [],
    history: { en: "An ancient Gujarati steamed snack, mentioned in texts from the 16th century.", es: "Un antiguo aperitivo al vapor de Gujarat del siglo XVI.", pt: "Um antigo lanche ao vapor de Gujarat do século XVI." },
    ingredients: [{ en: "Fermented chickpea flour batter", es: "Masa fermentada de harina de garbanzo", pt: "Massa fermentada de farinha de grão-de-bico" }, { en: "Tempered with mustard seeds & green chilies", es: "Aderezado con semillas de mostaza", pt: "Temperado com sementes de mostarda" }],
    origin: { en: "Gujarat, India", es: "Gujarat, India", pt: "Gujarat, Índia" },
    region: "West India",
    bestCities: [{ en: "Ahmedabad", es: "Ahmedabad", pt: "Ahmedabad" }, { en: "Surat", es: "Surat", pt: "Surat" }],
    bestRestaurants: [{ name: "Das Khaman", city: "Ahmedabad" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "momos",
    title: { en: "Himalayan Momos", es: "Momos del Himalaya", pt: "Momos do Himalaia" },
    category: "Himalayan Street Food",
    image: "/images/momos.jpg",
    gallery: [],
    history: { en: "Tibetan dumplings that became India's favorite street food in the Himalayan regions.", es: "Dumplings tibetanos que se convirtieron en comida callejera favorita.", pt: "Dumplings tibetanos que se tornaram comida de rua favorita." },
    ingredients: [{ en: "Thin wheat flour wrappers", es: "Envoltorios finos de harina de trigo", pt: "Invólucros finos de farinha de trigo" }, { en: "Minced meat or vegetables filling", es: "Relleno de carne picada o verduras", pt: "Recheio de carne picada ou vegetais" }],
    origin: { en: "Tibet / Northeast India", es: "Tibet / Noreste de India", pt: "Tibet / Nordeste da Índia" },
    region: "North & Northeast India",
    bestCities: [{ en: "Darjeeling", es: "Darjeeling", pt: "Darjeeling" }, { en: "Delhi", es: "Delhi", pt: "Delhi" }],
    bestRestaurants: [{ name: "Dolma Aunty Momos", city: "Delhi" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "dal-makhani",
    title: { en: "Dal Makhani", es: "Dal Makhani", pt: "Dal Makhani" },
    category: "Punjabi Specialty",
    image: "/images/dal makhani.jpg",
    gallery: [],
    history: { en: "A rich, creamy black lentil dish slow-cooked overnight in Punjabi dhabas.", es: "Un plato cremoso de lentejas negras cocinado a fuego lento.", pt: "Um prato cremoso de lentilhas pretas cozido lentamente." },
    ingredients: [{ en: "Black urad dal & kidney beans", es: "Lentejas negras y frijoles", pt: "Lentilhas pretas e feijão" }, { en: "Butter, cream, and tomato gravy", es: "Mantequilla, crema y salsa de tomate", pt: "Manteiga, creme e molho de tomate" }],
    origin: { en: "Punjab, India", es: "Punjab, India", pt: "Punjab, Índia" },
    region: "North India",
    bestCities: [{ en: "New Delhi", es: "Nueva Delhi", pt: "Nova Deli" }, { en: "Amritsar", es: "Amritsar", pt: "Amritsar" }],
    bestRestaurants: [{ name: "Moti Mahal", city: "New Delhi" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "rasgulla",
    title: { en: "Rasgulla", es: "Rasgulla", pt: "Rasgulla" },
    category: "Bengali Sweet",
    image: "/images/rasgulla.jpg",
    gallery: [],
    history: { en: "A spongy white sweet from Bengal, soaked in sugar syrup, dating to the 19th century.", es: "Un dulce esponjoso de Bengala empapado en jarabe de azúcar.", pt: "Um doce esponjoso de Bengala embebido em xarope de açúcar." },
    ingredients: [{ en: "Fresh chhena cheese balls", es: "Bolitas de queso chhena fresco", pt: "Bolinhas de queijo chhena fresco" }, { en: "Light sugar syrup with cardamom", es: "Jarabe de azúcar ligero con cardamomo", pt: "Xarope de açúcar leve com cardamomo" }],
    origin: { en: "Kolkata, West Bengal", es: "Calcuta, Bengala Occidental", pt: "Calcutá, Bengala Ocidental" },
    region: "East India",
    bestCities: [{ en: "Kolkata", es: "Calcuta", pt: "Calcutá" }],
    bestRestaurants: [{ name: "K.C. Das", city: "Kolkata" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "chettinad-chicken",
    title: { en: "Chettinad Chicken", es: "Pollo Chettinad", pt: "Frango Chettinad" },
    category: "South Indian",
    image: "/images/ooty.jpg",
    gallery: [],
    history: { en: "A fiery, aromatic chicken curry from the Chettinad region of Tamil Nadu.", es: "Un curry de pollo picante y aromático de la región Chettinad.", pt: "Um curry de frango picante e aromático da região Chettinad." },
    ingredients: [{ en: "Chicken with fresh-ground spice paste", es: "Pollo con pasta de especias recién molida", pt: "Frango com pasta de especiarias recém-moída" }, { en: "Star anise, kalpasi, and black pepper", es: "Anís estrellado, kalpasi y pimienta negra", pt: "Anis estrelado, kalpasi e pimenta preta" }],
    origin: { en: "Karaikudi, Tamil Nadu", es: "Karaikudi, Tamil Nadu", pt: "Karaikudi, Tamil Nadu" },
    region: "South India",
    bestCities: [{ en: "Karaikudi", es: "Karaikudi", pt: "Karaikudi" }, { en: "Chennai", es: "Chennai", pt: "Chennai" }],
    bestRestaurants: [{ name: "The Bangala", city: "Karaikudi" }],
    travelTips: [],
    faqs: []
  }
];


// ============================================================
// ADDITIONAL BLOGS (12 more)
// ============================================================
export const additionalBlogs: BlogData[] = [
  {
    slug: "hidden-gems-northeast-india",
    title: { en: "10 Hidden Gems of Northeast India You Must Visit", es: "10 Joyas Ocultas del Noreste de la India", pt: "10 Joias Ocultas do Nordeste da Índia" },
    excerpt: { en: "Discover untouched landscapes, tribal cultures and living root bridges.", es: "Descubra paisajes vírgenes y culturas tribales.", pt: "Descubra paisagens intocadas e culturas tribais." },
    content: { en: "Northeast India remains one of the country's least explored regions.", es: "El noreste de India sigue siendo una de las regiones menos exploradas.", pt: "O nordeste da Índia continua sendo uma das regiões menos exploradas." },
    featuredImage: "/images/meghalaya.jpg",
    author: "Priya Patel",
    category: "Travel Guides",
    tags: ["Northeast India", "Hidden Gems", "Adventure"],
    readingTime: 8,
    createdAt: "2026-06-20",
    seoTitle: { en: "Hidden Gems Northeast India Travel Guide", es: "Joyas Ocultas del Noreste de India", pt: "Joias Ocultas do Nordeste da Índia" },
    seoDescription: { en: "Explore unexplored destinations in Northeast India.", es: "Explore destinos inexplorados en el noreste.", pt: "Explore destinos inexplorados no nordeste." }
  },
  {
    slug: "ayurveda-wellness-guide-kerala",
    title: { en: "Complete Guide to Ayurveda & Wellness in Kerala", es: "Guía Completa de Ayurveda y Bienestar en Kerala", pt: "Guia Completo de Ayurveda e Bem-Estar em Kerala" },
    excerpt: { en: "Everything you need to know about authentic Ayurvedic treatments.", es: "Todo sobre tratamientos ayurvédicos auténticos.", pt: "Tudo sobre tratamentos ayurvédicos autênticos." },
    content: { en: "Kerala has been the world capital of Ayurveda for centuries.", es: "Kerala ha sido la capital mundial del Ayurveda.", pt: "Kerala tem sido a capital mundial do Ayurveda." },
    featuredImage: "/images/kerala 2.jpg",
    author: "Anita Sharma",
    category: "Wellness & Health",
    tags: ["Ayurveda", "Kerala", "Wellness"],
    readingTime: 10,
    createdAt: "2026-07-05",
    seoTitle: { en: "Ayurveda Kerala Wellness Guide", es: "Guía Ayurveda Kerala", pt: "Guia Ayurveda Kerala" },
    seoDescription: { en: "Plan your Ayurvedic wellness retreat in Kerala.", es: "Planifique su retiro de bienestar.", pt: "Planeje seu retiro de bem-estar." }
  },
  {
    slug: "indian-street-food-guide",
    title: { en: "The Ultimate Indian Street Food Guide: City by City", es: "Guía Definitiva de Comida Callejera India por Ciudad", pt: "Guia Definitivo de Comida de Rua Indiana por Cidade" },
    excerpt: { en: "From Delhi's Chandni Chowk to Mumbai's Juhu Beach stalls.", es: "Desde Chandni Chowk hasta los puestos de Juhu Beach.", pt: "Desde Chandni Chowk até as barracas de Juhu Beach." },
    content: { en: "India's street food scene is unmatched globally.", es: "La comida callejera de la India no tiene rival.", pt: "A comida de rua da Índia não tem rival." },
    featuredImage: "/images/indian_cuisine_feast.png",
    author: "Rajesh Kumar",
    category: "Indian Food",
    tags: ["Street Food", "Food Guide", "Indian Cuisine"],
    readingTime: 9,
    createdAt: "2026-07-12",
    seoTitle: { en: "Indian Street Food City Guide", es: "Guía de Comida Callejera India", pt: "Guia de Comida de Rua Indiana" },
    seoDescription: { en: "Best street food destinations across India.", es: "Mejores destinos de comida callejera.", pt: "Melhores destinos de comida de rua." }
  },
  {
    slug: "rajasthan-royal-palaces-guide",
    title: { en: "Rajasthan's Royal Palaces: A Complete Heritage Guide", es: "Palacios Reales de Rajastán: Guía del Patrimonio", pt: "Palácios Reais do Rajastão: Guia do Patrimônio" },
    excerpt: { en: "Explore converted palace hotels and hidden royal forts.", es: "Explore palacios convertidos en hoteles y fuertes ocultos.", pt: "Explore palácios convertidos em hotéis e fortes ocultos." },
    content: { en: "Rajasthan has the highest concentration of heritage palace hotels.", es: "Rajastán tiene la mayor concentración de palacios históricos.", pt: "O Rajastão tem a maior concentração de palácios históricos." },
    featuredImage: "/images/rajasthan_fort_sunset.png",
    author: "Elena Rodriguez",
    category: "Heritage & History",
    tags: ["Rajasthan", "Palaces", "Heritage Hotels"],
    readingTime: 7,
    createdAt: "2026-07-18",
    seoTitle: { en: "Rajasthan Palace Hotels Heritage Guide", es: "Guía de Palacios de Rajastán", pt: "Guia de Palácios do Rajastão" },
    seoDescription: { en: "Stay in authentic Rajasthani royal palaces.", es: "Alójese en palacios reales auténticos.", pt: "Hospede-se em palácios reais autênticos." }
  },
  {
    slug: "wildlife-photography-india",
    title: { en: "Wildlife Photography in India: Best Parks & Tips", es: "Fotografía de Vida Silvestre en India: Mejores Parques", pt: "Fotografia de Vida Selvagem na Índia: Melhores Parques" },
    excerpt: { en: "Capture Bengal tigers, one-horned rhinos and exotic birds.", es: "Fotografíe tigres, rinocerontes y aves exóticas.", pt: "Fotografe tigres, rinocerontes e aves exóticas." },
    content: { en: "India is home to over 100 national parks and 500 wildlife sanctuaries.", es: "India tiene más de 100 parques nacionales.", pt: "A Índia tem mais de 100 parques nacionais." },
    featuredImage: "/images/ranthambore_tiger_safari.png",
    author: "Rajesh Kumar",
    category: "Wildlife & Nature",
    tags: ["Wildlife", "Photography", "Tiger Safari"],
    readingTime: 8,
    createdAt: "2026-07-25",
    seoTitle: { en: "India Wildlife Photography Guide", es: "Guía de Fotografía de Vida Silvestre", pt: "Guia de Fotografia de Vida Selvagem" },
    seoDescription: { en: "Best national parks for wildlife photography.", es: "Mejores parques para fotografía de vida silvestre.", pt: "Melhores parques para fotografia de vida selvagem." }
  },
  {
    slug: "budget-vs-luxury-india-travel",
    title: { en: "Budget vs Luxury: How to Plan Your India Trip", es: "Presupuesto vs Lujo: Cómo Planificar su Viaje a India", pt: "Orçamento vs Luxo: Como Planejar sua Viagem à Índia" },
    excerpt: { en: "Compare travel styles and find the perfect balance for your budget.", es: "Compare estilos de viaje y encuentre el equilibrio perfecto.", pt: "Compare estilos de viagem e encontre o equilíbrio perfeito." },
    content: { en: "India caters to every budget, from backpackers to ultra-luxury.", es: "India satisface todos los presupuestos.", pt: "A Índia atende todos os orçamentos." },
    featuredImage: "/images/taj_mahal_sunrise.png",
    author: "Priya Patel",
    category: "Planning Guides",
    tags: ["Budget Travel", "Luxury", "Planning"],
    readingTime: 6,
    createdAt: "2026-08-02",
    seoTitle: { en: "India Travel Budget Planning Guide", es: "Guía de Presupuesto para India", pt: "Guia de Orçamento para a Índia" },
    seoDescription: { en: "Plan your India trip based on your budget.", es: "Planifique su viaje según su presupuesto.", pt: "Planeje sua viagem de acordo com seu orçamento." }
  },
  {
    slug: "monsoon-travel-india",
    title: { en: "Monsoon Travel in India: Best Rainy Season Destinations", es: "Viajes en Monzón: Mejores Destinos de Temporada Lluviosa", pt: "Viagens na Monção: Melhores Destinos da Estação Chuvosa" },
    excerpt: { en: "Why monsoon is the best time for Kerala Ayurveda and lush green landscapes.", es: "Por qué el monzón es la mejor época para el Ayurveda de Kerala.", pt: "Por que a monção é a melhor época para o Ayurveda de Kerala." },
    content: { en: "The Indian monsoon transforms landscapes into emerald masterpieces.", es: "El monzón indio transforma los paisajes en obras maestras esmeralda.", pt: "A monção indiana transforma as paisagens em obras-primas esmeralda." },
    featuredImage: "/images/kerala 3.jpg",
    author: "Anita Sharma",
    category: "Seasonal Guides",
    tags: ["Monsoon", "Rainy Season", "Kerala"],
    readingTime: 5,
    createdAt: "2026-08-08",
    seoTitle: { en: "India Monsoon Travel Guide", es: "Guía de Viaje en Monzón", pt: "Guia de Viagem na Monção" },
    seoDescription: { en: "Best destinations during Indian monsoon season.", es: "Mejores destinos durante el monzón.", pt: "Melhores destinos durante a monção." }
  },
  {
    slug: "yoga-retreats-india-guide",
    title: { en: "Top Yoga Retreats in India: From Rishikesh to Goa", es: "Mejores Retiros de Yoga: De Rishikesh a Goa", pt: "Melhores Retiros de Yoga: De Rishikesh a Goa" },
    excerpt: { en: "Find your perfect yoga retreat from ashrams to luxury wellness resorts.", es: "Encuentre su retiro de yoga perfecto.", pt: "Encontre seu retiro de yoga perfeito." },
    content: { en: "India is the birthplace of yoga and offers retreats for every level.", es: "India es la cuna del yoga y ofrece retiros para todos los niveles.", pt: "A Índia é o berço do yoga e oferece retiros para todos os níveis." },
    featuredImage: "/images/uttarakhand.jpg",
    author: "Priya Patel",
    category: "Wellness & Health",
    tags: ["Yoga", "Retreats", "Rishikesh"],
    readingTime: 7,
    createdAt: "2026-08-12",
    seoTitle: { en: "Best Yoga Retreats India Guide", es: "Mejores Retiros de Yoga India", pt: "Melhores Retiros de Yoga Índia" },
    seoDescription: { en: "Find yoga retreats across India.", es: "Encuentre retiros de yoga en India.", pt: "Encontre retiros de yoga na Índia." }
  },
  {
    slug: "golden-triangle-itinerary",
    title: { en: "Perfect 7-Day Golden Triangle Itinerary", es: "Itinerario Perfecto de 7 Días del Triángulo de Oro", pt: "Itinerário Perfeito de 7 Dias do Triângulo de Ouro" },
    excerpt: { en: "Day-by-day guide to Delhi, Agra and Jaipur with insider tips.", es: "Guía día a día para Delhi, Agra y Jaipur.", pt: "Guia dia a dia para Delhi, Agra e Jaipur." },
    content: { en: "The Golden Triangle is India's most iconic tourist route.", es: "El Triángulo de Oro es la ruta turística más icónica.", pt: "O Triângulo de Ouro é a rota turística mais icônica." },
    featuredImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
    author: "Elena Rodriguez",
    category: "Itineraries",
    tags: ["Golden Triangle", "Delhi", "Agra", "Jaipur"],
    readingTime: 10,
    createdAt: "2026-08-15",
    seoTitle: { en: "Golden Triangle 7 Day Itinerary India", es: "Itinerario 7 Días Triángulo de Oro", pt: "Itinerário 7 Dias Triângulo de Ouro" },
    seoDescription: { en: "Plan your perfect Golden Triangle route.", es: "Planifique su ruta del Triángulo de Oro.", pt: "Planeje sua rota do Triângulo de Ouro." }
  },
  {
    slug: "india-honeymoon-destinations",
    title: { en: "12 Most Romantic Honeymoon Destinations in India", es: "12 Destinos Más Románticos para Luna de Miel en India", pt: "12 Destinos Mais Românticos para Lua de Mel na Índia" },
    excerpt: { en: "From Kashmir houseboats to Andaman sunsets and Udaipur palaces.", es: "Desde houseboats en Cachemira hasta atardeceres en Andamán.", pt: "Desde houseboats em Caxemira até pôr-do-sol em Andaman." },
    content: { en: "India offers some of the most romantic settings in the world.", es: "India ofrece algunos de los entornos más románticos.", pt: "A Índia oferece alguns dos cenários mais românticos." },
    featuredImage: "/images/kerala_backwaters_houseboat.png",
    author: "Anita Sharma",
    category: "Romance & Honeymoon",
    tags: ["Honeymoon", "Romantic", "Couples"],
    readingTime: 8,
    createdAt: "2026-08-18",
    seoTitle: { en: "Best Honeymoon Destinations India", es: "Mejores Destinos Luna de Miel India", pt: "Melhores Destinos Lua de Mel Índia" },
    seoDescription: { en: "Plan a romantic honeymoon in India.", es: "Planifique una luna de miel romántica.", pt: "Planeje uma lua de mel romântica." }
  },
  {
    slug: "heritage-railways-india",
    title: { en: "India's Heritage Railways: Scenic Train Journeys", es: "Ferrocarriles Históricos de India: Viajes Escénicos", pt: "Ferrovias Históricas da Índia: Viagens Cénicas" },
    excerpt: { en: "Ride the Darjeeling Toy Train, Nilgiri Mountain Railway and more.", es: "Viaje en el Toy Train de Darjeeling y el Ferrocarril de Nilgiri.", pt: "Viaje no Toy Train de Darjeeling e na Ferrovia de Nilgiri." },
    content: { en: "India's heritage railways are UNESCO World Heritage experiences.", es: "Los ferrocarriles históricos de India son Patrimonio Mundial.", pt: "As ferrovias históricas da Índia são Patrimônio Mundial." },
    featuredImage: "/images/himachal pradesh.jpg",
    author: "Rajesh Kumar",
    category: "Transport & Routes",
    tags: ["Railways", "Heritage", "Scenic Routes"],
    readingTime: 6,
    createdAt: "2026-08-22",
    seoTitle: { en: "India Heritage Railway Travel Guide", es: "Guía de Ferrocarriles Históricos India", pt: "Guia de Ferrovias Históricas Índia" },
    seoDescription: { en: "Experience UNESCO heritage train journeys.", es: "Experiencia de trenes históricos UNESCO.", pt: "Experiência de trens históricos UNESCO." }
  },
  {
    slug: "sustainable-travel-india",
    title: { en: "Sustainable & Responsible Travel in India", es: "Viaje Sostenible y Responsable en India", pt: "Viagem Sustentável e Responsável na Índia" },
    excerpt: { en: "How to travel India responsibly while supporting local communities.", es: "Cómo viajar por India apoyando comunidades locales.", pt: "Como viajar pela Índia apoiando comunidades locais." },
    content: { en: "Sustainable tourism is vital for preserving India's heritage.", es: "El turismo sostenible es vital para preservar el patrimonio.", pt: "O turismo sustentável é vital para preservar o patrimônio." },
    featuredImage: "/images/kerala 2.jpg",
    author: "Elena Rodriguez",
    category: "Responsible Travel",
    tags: ["Sustainable", "Eco-Tourism", "Community"],
    readingTime: 7,
    createdAt: "2026-08-25",
    seoTitle: { en: "Sustainable Travel India Guide", es: "Guía de Viaje Sostenible India", pt: "Guia de Viagem Sustentável Índia" },
    seoDescription: { en: "Travel India responsibly and sustainably.", es: "Viaje por India de forma responsable.", pt: "Viaje pela Índia de forma responsável." }
  }
];
