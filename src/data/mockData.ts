export interface LocalizedString {
  en: string;
  es: string;
  pt: string;
}

export interface LocalizedList {
  en: string[];
  es: string[];
  pt: string[];
}

export interface AttractionData {
  slug: string;
  name: LocalizedString;
  desc: LocalizedString;
  history: LocalizedString;
  architecture: LocalizedString;
  timings: LocalizedString;
  info: LocalizedString;
  image: string;
  gallery: string[];
  faqs: { q: LocalizedString; a: LocalizedString }[];
}

export interface HotelData {
  name: string;
  tier: "Luxury" | "Heritage" | "Boutique";
  desc: LocalizedString;
  image: string;
}

export interface CityData {
  slug: string;
  title: LocalizedString;
  tagline: LocalizedString;
  image: string;
  gallery: string[];
  overview: LocalizedString;
  history: LocalizedString;
  culture: LocalizedString;
  attractions: AttractionData[];
  thingsToDo: LocalizedString[];
  hotels: HotelData[];
  localFood: LocalizedString;
  shopping: LocalizedString;
  weather: LocalizedString;
  bestTime: LocalizedString;
  travelTips: LocalizedString[];
  nearbyPlaces: { name: string; distance: string }[];
  suggestedItinerary: LocalizedString;
  faqs: { q: LocalizedString; a: LocalizedString }[];
}

export interface StateData {
  slug: string;
  title: LocalizedString;
  tagline: LocalizedString;
  region: "North" | "South" | "East" | "West" | "Central" | "North East" | "Islands";
  image: string;
  gallery: string[];
  description: LocalizedString;
  history: LocalizedString;
  culture: LocalizedString;
  localFood?: LocalizedString;
  bestTime: LocalizedString;
  travelTips: { en: string; es: string; pt: string }[];
  faqs: { q: LocalizedString; a: LocalizedString }[];
  cities: CityData[];
  wildlife?: LocalizedString;
  adventure?: LocalizedString;
  festivals?: LocalizedString;
}

export interface TourPackage {
  slug: string;
  title: LocalizedString;
  tagline: LocalizedString;
  category: string;
  durationDays: number;
  image: string;
  gallery: string[];
  highlights: LocalizedString[];
  itinerary: { day: number; title: LocalizedString; desc: LocalizedString }[];
  includedExperiences: LocalizedString[];
  travelTips: LocalizedString[];
  faqs: { q: LocalizedString; a: LocalizedString }[];
}

export interface ExperienceData {
  slug: string;
  title: LocalizedString;
  desc: LocalizedString;
  image: string;
  gallery: string[];
  bestDestinations: LocalizedString[];
  bestSeason: LocalizedString;
  safetyTips: LocalizedString[];
}

export interface FoodData {
  slug: string;
  title: LocalizedString;
  category: string;
  image: string;
  gallery: string[];
  history: LocalizedString;
  ingredients: LocalizedString[];
  origin: LocalizedString;
  region: string;
  bestCities: LocalizedString[];
  bestRestaurants: { name: string; city: string }[];
  travelTips: LocalizedString[];
  faqs: { q: LocalizedString; a: LocalizedString }[];
}

export interface FestivalData {
  slug: string;
  title: LocalizedString;
  tagline: LocalizedString;
  image: string;
  gallery: string[];
  history: LocalizedString;
  significance: LocalizedString;
  bestPlaces: LocalizedString[];
  travelTips: LocalizedString[];
  faqs: { q: LocalizedString; a: LocalizedString }[];
}

export interface BlogData {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  featuredImage: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: number;
  createdAt: string;
  seoTitle: LocalizedString;
  seoDescription: LocalizedString;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: LocalizedString;
  stars: number;
}

// Helper mock city generator
const createMockCity = (stateSlug: string, citySlug: string, nameEn: string, nameEs: string, namePt: string, taglineEn: string, img: string): CityData => ({
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

// ----------------------------------------------------
// STATE DATA (6 Cards)
// ----------------------------------------------------
export const statesData: StateData[] = [
  {
    slug: "rajasthan",
    title: { en: "Rajasthan", es: "Rajastán", pt: "Rajastão" },
    tagline: { en: "Imperial Forts, Heritage Palaces & Sand Dunes", es: "Fuertes Imperiales, Palacios Históricos y Dunas de Arena", pt: "Fortes Imperiais, Palácios Históricos e Dunas de Areia" },
    region: "West",
    image: "/images/rajasthan-camels.jpg",
    gallery: [],
    description: { en: "The Land of Kings. Explore desert dunes, mighty forts and heritage palaces.", es: "La tierra de los reyes. Dunas, fuertes y palacios.", pt: "A terra dos reis. Dunas, fortes e palácios." },
    history: { en: "Ruled by Rajput clans for centuries.", es: "Gobernado por clanes Rajput.", pt: "Governado por clãs Rajput." },
    culture: { en: "Folk dances, miniature painting and textile printing.", es: "Danzas folclóricas y pintura en miniatura.", pt: "Danças folclóricas e pintura em miniatura." },
    localFood: { en: "Dal Baati Churma, Laal Maas and Ghewar.", es: "Dal Baati Churma y Laal Maas.", pt: "Dal Baati Churma e Laal Maas." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("rajasthan", "jaipur", "Jaipur", "Jaipur", "Jaipur", "The Pink City of Maharajas", "/images/rajasthan_fort_sunset.png")]
  },
  {
    slug: "kerala",
    title: { en: "Kerala", es: "Kerala", pt: "Kerala" },
    tagline: { en: "God's Own Country, Backwaters & Ayurvedic Wellness", es: "El propio país de Dios, canales y ayurveda", pt: "O próprio país de Deus, canais e ayurveda" },
    region: "South",
    image: "/images/kerala 2.jpg",
    gallery: [],
    description: { en: "An emerald paradise of coconut plantations, spice hills and quiet backwater canals.", es: "Un paraíso esmeralda de plantaciones de coco y colinas de especias.", pt: "Um paraíso esmeralda de plantações de coco e colinas de especiarias." },
    history: { en: "A global spice trade hub for Phoenicians, Romans and Arabs.", es: "Un centro de comercio de especias desde la antigüedad.", pt: "Um centro de comércio de especiarias desde a antiguidade." },
    culture: { en: "Kathakali dance-drama, Kalaripayattu martial art, and temple festivals.", es: "Danza Kathakali y arte marcial Kalaripayattu.", pt: "Dança Kathakali e arte marcial Kalaripayattu." },
    localFood: { en: "Karimeen Pollichathu, Idiyappam with curry and payasam.", es: "Frutos de mar con coco y arroz puttu.", pt: "Frutos do mar com coco e arroz puttu." },
    bestTime: { en: "September to March.", es: "De septiembre a marzo.", pt: "De setembro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("kerala", "kochi", "Kochi", "Kochi", "Kochi", "The Historic Spice Port Route", "/images/kerala_backwaters_houseboat.png")]
  },
  {
    slug: "goa",
    title: { en: "Goa", es: "Goa", pt: "Goa" },
    tagline: { en: "Sun-Kissed Beaches, Portuguese Architecture & Spices", es: "Playas Soleadas, Arquitectura Portuguesa y Especias", pt: "Praias Ensolaradas, Arquitetura Portuguesa e Especiarias" },
    region: "West",
    image: "/images/goa 2.jpg",
    gallery: [],
    description: { en: "A blend of Indian culture and Portuguese heritage on golden coastlines.", es: "Una fusión de cultura india y herencia portuguesa.", pt: "Uma fusão da cultura indiana e herança portuguesa." },
    history: { en: "A Portuguese colony for over 450 years.", es: "Colonia portuguesa durante más de 450 años.", pt: "Colônia portuguesa por mais de 450 anos." },
    culture: { en: "Famous for Goan carnival, church feasts, and beach vibes.", es: "Famoso por el carnaval y fiestas patronales.", pt: "Famoso pelo carnaval e festas de igrejas." },
    localFood: { en: "Goan Fish Curry, Pork Vindaloo, Bebinca dessert.", es: "Vindaloo y curry de pescado goan.", pt: "Vindaloo e curry de peixe goano." },
    bestTime: { en: "November to February.", es: "De noviembre a febrero.", pt: "De novembro a fevereiro." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("goa", "panaji", "Panaji", "Panaji", "Panaji", "Portuguese Heritage Capital", "/images/goa.jpg")]
  },
  {
    slug: "uttar-pradesh",
    title: { en: "Uttar Pradesh", es: "Uttar Pradesh", pt: "Uttar Pradesh" },
    tagline: { en: "The Taj Mahal, Spiritual Ghats & Sacred River Banks", es: "El Taj Mahal, Ghats Espirituales y Ríos Sagrados", pt: "O Taj Mahal, Ghats Espirituais e Rios Sagrados" },
    region: "North",
    image: "/images/uttar pradesh.jpg",
    gallery: [],
    description: { en: "The spiritual heartland of India, housing the Taj Mahal and ancient Varanasi.", es: "El corazón espiritual, hogar de Agra y Varanasi.", pt: "O coração espiritual, lar de Agra e Varanasi." },
    history: { en: "The epicentre of the Mughal Empire and ancient Vedic civilisations.", es: "Epicentro del imperio mogol y cultura védica.", pt: "Epicentro do império mogol e cultura védica." },
    culture: { en: "Kathak classical dance, Banarasi silk weavers and Ganga Aarti ceremonies.", es: "Ceremonias en el Ganges y tejidos de seda.", pt: "Cerimônias no Ganges e tecidos de seda." },
    localFood: { en: "Petha sweet, Awadhi Biryani and Kebabs.", es: "Biryani aromático y dulces tradicionales.", pt: "Biryani aromático e doces tradicionais." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("uttar-pradesh", "varanasi", "Varanasi", "Varanasi", "Varanasi", "The Ancient Sacred City of Light", "/images/varanasi_ghats_aarti.png")]
  },
  {
    slug: "himachal-pradesh",
    title: { en: "Himachal Pradesh", es: "Himachal Pradesh", pt: "Himachal Pradesh" },
    tagline: { en: "Snowy Mountain Peaks, Pine Forests & Valleys", es: "Picos Nevados, Bosques de Pinos y Valles", pt: "Picos Nevados, Florestas de Pinheiros e Vales" },
    region: "North",
    image: "/images/himachal pradesh.jpg",
    gallery: [],
    description: { en: "A majestic Himalayan sanctuary of hill stations, apple orchards and monasteries.", es: "Un santuario del Himalaya con vistas nevadas.", pt: "Um santuário do Himalaia com vistas nevadas." },
    history: { en: "Former summer capital of British India and homeland of Tibetan monks.", es: "Antigua capital de verano británica.", pt: "Antiga capital de verão britânica." },
    culture: { en: "Himachali shawls, wood carvings and Buddhist chanting.", es: "Tejidos tradicionales y cultura budista.", pt: "Tecidos tradicionais e cultura budista." },
    localFood: { en: "Siddu bread, Madra chickpeas and Trout fish.", es: "Platos montañeses y pan casero siddu.", pt: "Pratos montanheses e pão caseiro siddu." },
    bestTime: { en: "March to June & September to December.", es: "De marzo a junio y septiembre a diciembre.", pt: "De março a junho e setembro a dezembro." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("himachal-pradesh", "shimla", "Shimla", "Shimla", "Shimla", "Summer Hill Station Capital", "/images/himachal pradesh.jpg")]
  },
  {
    slug: "maharashtra",
    title: { en: "Maharashtra", es: "Maharashtra", pt: "Maharashtra" },
    tagline: { en: "Ancient Rock Caves, Hill Stations & Dynamic Mumbai", es: "Cuevas Antiguas, Colinas y el Dinámico Mumbai", pt: "Cavernas Antigas, Colinas e o Dinâmico Mumbai" },
    region: "West",
    image: "/images/maharashtra.jpg",
    gallery: [],
    description: { en: "A massive state featuring the Ajanta-Ellora world heritage caves and bustling Mumbai.", es: "Hogar de las cuevas patrimonio mundial y Mumbai.", pt: "Lar das cavernas patrimônio mundial e Mumbai." },
    history: { en: "The territory of the great Maratha Empire under Shivaji.", es: "Cuna del gran imperio guerrero Maratha.", pt: "Berço do grande império guerreiro Maratha." },
    culture: { en: "Lavani folk dance, Warli paintings and Ganesh Chaturthi festival.", es: "Pinturas Warli y festivales dinámicos.", pt: "Pinturas Warli e festivais dinâmicos." },
    localFood: { en: "Misal Pav, Vada Pav and Puran Poli dessert.", es: "Bocadillos picantes y postres locales.", pt: "Lanches condimentados e sobremesas locais." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("maharashtra", "mumbai", "Mumbai", "Mumbai", "Mumbai", "City of Dreams & Gateway of India", "/images/maharashtra.jpg")]
  },
  {
    slug: "madhya-pradesh",
    title: { en: "Madhya Pradesh", es: "Madhya Pradesh", pt: "Madhya Pradesh" },
    tagline: { en: "The Heart of India, Wildlife Tigers & Khajuraho Temples", es: "El Corazón de la India, Tigres de Bengala y Templos de Khajuraho", pt: "O Coração da Índia, Tigres de Bengala e Templos de Khajuraho" },
    region: "Central",
    image: "/images/madhya pradesh.jpg",
    gallery: [],
    description: { en: "Central India's heartland, featuring massive tiger reserves and legendary UNESCO heritage temples.", es: "El corazón de la India central, que cuenta con reservas de tigres y templos históricos de la UNESCO.", pt: "O coração da Índia central, com reservas de tigres e templos históricos da UNESCO." },
    history: { en: "Ruled by Chandela dynasty and Maurya empires.", es: "Gobernado por la dinastía Chandela y los imperios Maurya.", pt: "Governado pela dinastia Chandela e os impérios Maurya." },
    culture: { en: "Tribal arts, ancient stone sculptures, and heritage music festivals.", es: "Arte tribal, antiguas esculturas de piedra y festivales de música.", pt: "Arte tribal, antiga escultura de pedra e festivais de música." },
    localFood: { en: "Poha, Bhutte ka Kees, and Mawa Bati.", es: "Poha y Bhutte ka Kees tradicional.", pt: "Poha e Bhutte ka Kees tradicional." },
    bestTime: { en: "October to April.", es: "De octubre a abril.", pt: "De outubro a abril." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("madhya-pradesh", "khajuraho", "Khajuraho", "Khajuraho", "Khajuraho", "Ancient UNESCO Erotic Sculptured Temples", "/images/madhya pradesh.jpg")]
  },
  {
    slug: "tamil-nadu",
    title: { en: "Tamil Nadu", es: "Tamil Nadu", pt: "Tamil Nadu" },
    tagline: { en: "Dravidian Architectural Giants, Temples & Coastline", es: "Gigantes de la Arquitectura Dravidiana y Templos", pt: "Gigantes da Arquitetura Dravidiana e Templos" },
    region: "South",
    image: "/images/ooty.jpg",
    gallery: [],
    description: { en: "The home of ancient Tamil culture, towering temple gopurams, and historical shore temples.", es: "El hogar de la antigua cultura tamil, imponentes templos gopurams y playas de la costa.", pt: "O lar da antiga cultura tamil, imponentes templos gopurams e praias da costa." },
    history: { en: "Ruled by the Chola, Chera, and Pandya dynasties for thousands of years.", es: "Gobernado por las dinastías Chola, Chera y Pandya.", pt: "Governado pelas dinastias Chola, Chera e Pandya." },
    culture: { en: "Classical Bharatanatyam dance, Carnatic music, and silk weaving.", es: "Danza clásica Bharatanatyam y música Carnática.", pt: "Dança clássica Bharatanatyam e música Carnática." },
    localFood: { en: "Idli, Sambhar, Chettinad Chicken, and Filter Coffee.", es: "Idli, Sambhar y Pollo Chettinad.", pt: "Idli, Sambhar e Frango Chettinad." },
    bestTime: { en: "November to March.", es: "De noviembre a marzo.", pt: "De novembro a março." },
    travelTips: [],
    faqs: [],
    cities: [createMockCity("tamil-nadu", "madurai", "Madurai", "Madurai", "Madurai", "The Athens of the East & Meenakshi Temple", "/images/ooty.jpg")]
  }
];

// ----------------------------------------------------
// TOUR PACKAGES (6 Cards)
// ----------------------------------------------------
export const tourPackages: TourPackage[] = [
  {
    slug: "golden-triangle-luxury",
    title: { en: "Imperial Golden Triangle Journey", es: "Viaje Imperial del Triángulo de Oro", pt: "Viagem Imperial do Triângulo de Ouro" },
    tagline: { en: "The Classic Luxury Showcase of Delhi, Agra & Jaipur", es: "La Clásica Aventura de Lujo de Delhi, Agra y Jaipur", pt: "O Clássico Roteiro de Luxo de Deli, Agra e Jaipur" },
    category: "Luxury Tours",
    durationDays: 7,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800",
    gallery: [],
    highlights: [
      { en: "Private sunrise access to the Taj Mahal", es: "Acceso privado al Taj Mahal al amanecer", pt: "Acesso privado ao Taj Mahal ao amanhecer" },
      { en: "Stay in Oberoi & Taj royal palace suites", es: "Alojamiento en suites de palacios reales", pt: "Hospedagem em suítes de palácios reais" },
      { en: "Private chauffeur luxury car transfers", es: "Traslados privados en coche de lujo con chofer", pt: "Traspasos privados em carro de luxo com motorista" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in New Delhi", es: "Llegada a Nueva Delhi", pt: "Chegada a Nova Deli" }, desc: { en: "VIP welcome, transfer to luxury hotel.", es: "Bienvenida VIP, traslado al hotel.", pt: "Boas-vindas VIP, traslado para o hotel." } }
    ],
    includedExperiences: [
      { en: "Professional guides in all languages", es: "Guías profesionales bilingües", pt: "Guias profissionais bilíngues" }
    ],
    travelTips: [],
    faqs: []
  },
  {
    slug: "kerala-ayurveda-wellness",
    title: { en: "Kerala Ayurveda & Wellness retreat", es: "Retiro de Bienestar y Ayurveda en Kerala", pt: "Retiro de Bem-Estar e Ayurveda em Kerala" },
    tagline: { en: "Rejuvenating Body & Soul in the Coconut Paradise", es: "Rejuvenece Cuerpo y Alma en el Paraíso de los Cocos", pt: "Rejuvenesça Corpo e Alma no Paraíso dos Cocos" },
    category: "Wellness Tours",
    durationDays: 9,
    image: "/images/kerala_backwaters_houseboat.png",
    gallery: [],
    highlights: [
      { en: "Daily consultation with Ayurvedic doctors", es: "Consulta diaria con médicos ayurvédicos", pt: "Consulta diária com médicos ayurvédicos" },
      { en: "Private houseboat stay along Backwaters", es: "Estadía privada en casa bote por los canales", pt: "Hospedagem privada em casa barco nos canais" },
      { en: "Daily private meditation and yoga sessions", es: "Sesiones diarias privadas de yoga y meditación", pt: "Sessões diárias privadas de ioga e meditação" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Kochi Port", es: "Llegada al Puerto de Kochi", pt: "Chegada ao Porto de Kochi" }, desc: { en: "Check-in to a luxury wellness eco-resort.", es: "Check-in en un eco-resort de bienestar de lujo.", pt: "Check-in em um resort ecológico de bem-estar de luxo." } }
    ],
    includedExperiences: [
      { en: "Full board healthy Ayurvedic organic meals", es: "Pensión completa con alimentos ayurvédicos", pt: "Pensão completa com alimentos ayurvédicos" }
    ],
    travelTips: [],
    faqs: []
  },
  {
    slug: "wildlife-ranthambore-safari",
    title: { en: "Wildlife & Royal Tiger Safaris", es: "Aventura de Vida Silvestre y Safari de Tigres", pt: "Aventura de Vida Selvagem e Safári de Tigres" },
    tagline: { en: "Encounter Majestic Bengal Tigers in Ancient Forests", es: "Encuentre Tigres de Bengala en Bosques Antiguos", pt: "Encontre Tigres de Bengala em Florestas Antigas" },
    category: "Wildlife Safaris",
    durationDays: 8,
    image: "/images/ranthambore_tiger_safari.png",
    gallery: [],
    highlights: [
      { en: "4 private customized jeep game drives", es: "4 safaris en jeep privado personalizado", pt: "4 safaris de jipe privado personalizado" },
      { en: "Luxury wilderness glamping resort stay", es: "Estancia en campamento de lujo tipo glamping", pt: "Estadia em acampamento de luxo tipo glamping" },
      { en: "Explore Ranthambore high forest fort ruins", es: "Exploración de las ruinas del fuerte forestal", pt: "Exploração das ruínas do forte florestal" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival at Ranthambore Camp", es: "Llegada al Campamento Ranthambore", pt: "Chegada ao Acampamento Ranthambore" }, desc: { en: "Welcome ceremony at luxury jungle camp.", es: "Ceremonia de bienvenida en el campamento.", pt: "Cerimônia de boas-vindas no acampamento." } }
    ],
    includedExperiences: [
      { en: "Expert naturalist accompaniment", es: "Acompañamiento de un naturalista experto", pt: "Acompanhamento de um naturalista perito" }
    ],
    travelTips: [],
    faqs: []
  },
  {
    slug: "rajasthan-royal-heritage",
    title: { en: "Rajasthan Heritage & Royal Palaces Tour", es: "Patrimonio de Rajastán y Palacios Reales", pt: "Patrimônio do Rajastão e Palácios Reais" },
    tagline: { en: "The Ultimate Grand Tour of Rajput Royalty & Dunes", es: "El Gran Tour de la Realeza Rajput y Dunas de Arena", pt: "O Grande Tour da Realeza Rajput e Dunas de Areia" },
    category: "Heritage Tours",
    durationDays: 12,
    image: "/images/rajasthan_fort_sunset.png",
    gallery: [],
    highlights: [
      { en: "Stay in actual heritage palace suites", es: "Estancia en suites de antiguos palacios reales", pt: "Hospedagem em suítes de antigos palácios reais" },
      { en: "Private sand dunes sundowner camel ride", es: "Paseo en camello al atardecer en dunas", pt: "Passeio de camelo ao entardecer nas dunas" },
      { en: "Private traditional sitar recital evening", es: "Recital privado de música de sitar tradicional", pt: "Recital privado de música sitar tradicional" }
    ],
    itinerary: [
      { day: 1, title: { en: "Welcome in Udaipur Lake City", es: "Bienvenida en Udaipur Ciudad de Lagos", pt: "Boas-vindas em Udaipur Cidade dos Lagos" }, desc: { en: "VIP boat check-in to historic lake palace hotel.", es: "Check-in en barco VIP al hotel palacio del lago.", pt: "Check-in em barco VIP ao hotel palácio do lago." } }
    ],
    includedExperiences: [
      { en: "Exclusive access to palace museums", es: "Acceso exclusivo a museos de palacios", pt: "Acesso exclusivo a museus de palácios" }
    ],
    travelTips: [],
    faqs: []
  },
  {
    slug: "south-india-temples",
    title: { en: "South India Monuments & Temples", es: "Monumentos e Templos del Sur de la India", pt: "Monumentos e Templos do Sul da Índia" },
    tagline: { en: "Architectural Marvels of Hampi, Mysore & Madurai", es: "Maravillas Arquitectónicas del Sur de la India", pt: "Maravilhas Arquitetônicas do Sul da Índia" },
    category: "Heritage Tours",
    durationDays: 10,
    image: "/images/hampi-ruins.jpg",
    gallery: [],
    highlights: [
      { en: "Private walking tours of UNESCO Hampi ruins", es: "Tour a pie privado por las ruinas de Hampi", pt: "Tour a pé privado pelas ruínas de Hampi" },
      { en: "VIP entry to Madurai Meenakshi Temple", es: "Entrada VIP al Templo Meenakshi de Madurai", pt: "Entrada VIP no Templo Meenakshi de Madurai" },
      { en: "Stay in historic colonial-era bungalows", es: "Estancia en bungalows coloniales históricos", pt: "Estadia em bangalôs coloniais históricos" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Bangalore Garden City", es: "Llegada a Bangalore Ciudad Jardín", pt: "Chegada a Bangalore Cidade Jardim" }, desc: { en: "VIP pickup and transfer to Taj West End.", es: "Recogida VIP y traslado al hotel.", pt: "Coleta VIP e traslado para o hotel." } }
    ],
    includedExperiences: [
      { en: "Expert architecture historians guides", es: "Guías historiadores de arte expertos", pt: "Guias historiadores de arte peritos" }
    ],
    travelTips: [],
    faqs: []
  },
  {
    slug: "goa-beach-luxury",
    title: { en: "Goa Luxury Beach Vacation", es: "Vacaciones de Lujo en las Playas de Goa", pt: "Férias de Luxo nas Praias de Goa" },
    tagline: { en: "Pure Coastal Indulgence, Yacht Cruises & Villas", es: "Pura Indulgencia Costera, Yate Privado y Villas", pt: "Pura Indulgência Costeira, Iate Privado e Villas" },
    category: "Beach Vacations",
    durationDays: 6,
    image: "/images/goa.jpg",
    gallery: [],
    highlights: [
      { en: "Sunset cruise on private luxury yacht", es: "Crucero privado en yate de lujo al atardecer", pt: "Cruzeiro privado em iate de luxo ao entardecer" },
      { en: "Stay in 5-star beachfront luxury villa", es: "Alojamiento en villa frente al mar de 5 estrellas", pt: "Hospedagem em villa em frente ao mar de 5 estrelas" },
      { en: "Private spice plantation tour and lunch", es: "Visita y almuerzo privado en plantación", pt: "Visita e almoço privado em plantação de especiarias" }
    ],
    itinerary: [
      { day: 1, title: { en: "Welcome in Goa Airport", es: "Bienvenida en el Aeropuerto de Goa", pt: "Boas-vindas no Aeroporto de Goa" }, desc: { en: "VIP Mercedes transfer to beachside resort.", es: "Traslado en Mercedes VIP al resort de playa.", pt: "Traslado em Mercedes VIP para o resort de praia." } }
    ],
    includedExperiences: [
      { en: "Private chef seafood dinner evening", es: "Cena de mariscos preparada por chef privado", pt: "Jantar de frutos do mar feito por chef privado" }
    ],
    travelTips: [],
    faqs: []
  },
  {
    slug: "gujarat-heritage-safari",
    title: { en: "Royal Gujarat & Heritage Safari", es: "Gujarat Real y Safari de Patrimonio", pt: "Gujarat Real e Safári de Patrimônio" },
    tagline: { en: "Encounter Asiatic Lions, Rann of Kutch & Textile Arts", es: "Leones Asiáticos, el Desierto Blanco y Arte Textil", pt: "Leões Asiáticos, o Deserto Branco e Arte Têxtil" },
    category: "Heritage Tours",
    durationDays: 9,
    image: "/images/gujarat.jpg",
    gallery: [],
    highlights: [
      { en: "Gir Forest Asiatic Lion private safaris", es: "Safari privado de leones en el bosque de Gir", pt: "Safári privado de leões na floresta de Gir" },
      { en: "Stay in luxury tents at White Rann of Kutch", es: "Hospedaje en carpas de lujo en el Rann de Kutch", pt: "Hospedagem em tendas de luxo no Rann de Kutch" },
      { en: "Explore stepwells and heritage wood mansions", es: "Exploración de antiguos aljibes y mansiones", pt: "Exploração de antigos poços e mansões de madeira" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Ahmedabad Heritage City", es: "Llegada a Ahmedabad Ciudad de Patrimonio", pt: "Chegada a Ahmedabad Cidade de Patrimônio" }, desc: { en: "Transfer to heritage hotel, visit Sabarmati Ashram.", es: "Traslado al hotel, visita al Ashram de Sabarmati.", pt: "Traslado para o hotel, visita ao Ashram de Sabarmati." } }
    ],
    includedExperiences: [
      { en: "Private local artisan textile workshops", es: "Talleres textiles con artesanos locales", pt: "Oficinas têxteis com artesãos locais" }
    ],
    travelTips: [],
    faqs: []
  },
  {
    slug: "ladakh-himalayan-escape",
    title: { en: "Himalayan Escape & Scenic Ladakh Tour", es: "Escapada al Himalaya y Tour de Ladakh", pt: "Escapada ao Himalaia e Tour de Ladakh" },
    tagline: { en: "Breathtaking Mountain Lakes & High Altitude Passes", es: "Lagos de Montaña y Hermosos Monasterios", pt: "Lagos de Montanha e Belos Mosteiros" },
    category: "Adventure Tours",
    durationDays: 8,
    image: "/images/himachal pradesh.jpg",
    gallery: [],
    highlights: [
      { en: "Private excursion to Pangong Tso Lake", es: "Excursión privada al lago Pangong Tso", pt: "Excursão privada ao lago Pangong Tso" },
      { en: "Explore Nubra Valley on double-humped camels", es: "Paseo en camello por el valle de Nubra", pt: "Passeio de camelo pelo vale de Nubra" },
      { en: "Visit ancient cliffside Thiksey Monastery", es: "Visita al monasterio histórico de Thiksey", pt: "Visita ao mosteiro histórico de Thiksey" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in Leh Airport (3,500m)", es: "Llegada al Aeropuerto de Leh", pt: "Chegada ao Aeropuerto de Leh" }, desc: { en: "Acclimatization day at a premium resort.", es: "Día de aclimatación en resort de primera clase.", pt: "Dia de aclimatação em resort de primeira classe." } }
    ],
    includedExperiences: [
      { en: "Professional mountain rescue concierge line", es: "Línea de conserje de rescate de montaña profesional", pt: "Linha de concierge de resgate de montanha profissional" }
    ],
    travelTips: [],
    faqs: []
  }
];

// ----------------------------------------------------
// CUISINES & FOODS (6 Cards)
// ----------------------------------------------------
export const foodsData: FoodData[] = [
  {
    slug: "butter-chicken",
    title: { en: "Butter Chicken (Murgh Makhani)", es: "Pollo a la Mantequilla", pt: "Frango na Manteiga" },
    category: "North Indian",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800",
    gallery: [],
    history: { en: "Created in Delhi in the 1950s.", es: "Creado en Delhi en los años 1950.", pt: "Criado em Deli nos anos 1950." },
    ingredients: [{ en: "Tandoori chicken", es: "Pollo tandoori", pt: "Frango tandoori" }, { en: "Butter, tomato & heavy cream", es: "Mantequilla, tomate y crema", pt: "Manteiga, tomate e creme" }],
    origin: { en: "New Delhi, India", es: "Nueva Delhi, India", pt: "Nova Deli, Índia" },
    region: "North India",
    bestCities: [{ en: "New Delhi", es: "Nueva Delhi", pt: "Nova Deli" }],
    bestRestaurants: [{ name: "Moti Mahal", city: "New Delhi" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "masala-dosa",
    title: { en: "Masala Dosa", es: "Masala Dosa", pt: "Masala Dosa" },
    category: "South Indian",
    image: "/images/masala dosa.jpg",
    gallery: [],
    history: { en: "Originating in Karnataka, a staple breakfast for centuries.", es: "Originario de Karnataka, un desayuno básico durante siglos.", pt: "Originário de Karnataka, um café da manhã básico por séculos." },
    ingredients: [{ en: "Fermented rice batter", es: "Masa de arroz fermentado", pt: "Massa de arroz fermentado" }, { en: "Spiced potato filling", es: "Relleno de papa condimentada", pt: "Recheio de batata temperada" }],
    origin: { en: "Udupi, Karnataka", es: "Udupi, Karnataka", pt: "Udupi, Karnataka" },
    region: "South India",
    bestCities: [{ en: "Bangalore", es: "Bangalore", pt: "Bangalore" }, { en: "Chennai", es: "Chennai", pt: "Chennai" }],
    bestRestaurants: [{ name: "MTR", city: "Bangalore" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "dal-baati-churma",
    title: { en: "Dal Baati Churma", es: "Dal Baati Churma", pt: "Dal Baati Churma" },
    category: "West Indian",
    image: "/images/churma bati.jpg",
    gallery: [],
    history: { en: "The iconic traditional culinary dish of Rajput warriors.", es: "El plato tradicional icónico de los guerreros Rajput.", pt: "O prato tradicional icônico dos guerreiros Rajput." },
    ingredients: [{ en: "Baked wheat balls (Baati)", es: "Bolas de trigo horneadas (Baati)", pt: "Bolas de trigo assadas (Baati)" }, { en: "Five-lentil soup (Dal)", es: "Sopa de cinco lentejas (Dal)", pt: "Sopa de cinco lentilhas (Dal)" }, { en: "Sweet crushed wheat (Churma)", es: "Trigo triturado dulce (Churma)", pt: "Trigo triturado doce (Churma)" }],
    origin: { en: "Mewar Region, Rajasthan", es: "Región de Mewar, Rajastán", pt: "Região de Mewar, Rajastão" },
    region: "West India",
    bestCities: [{ en: "Jaipur", es: "Jaipur", pt: "Jaipur" }, { en: "Udaipur", es: "Udaipur", pt: "Udaipur" }],
    bestRestaurants: [{ name: "Chokhi Dhani", city: "Jaipur" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "goan-fish-curry",
    title: { en: "Goan Fish Curry", es: "Curry de Pescado Goan", pt: "Caril de Peixe Goano" },
    category: "Coastal Indian",
    image: "/images/goan fish curry.jpg",
    gallery: [],
    history: { en: "A delicious blend of local coconut spices and Portuguese influence.", es: "Una fusión de especias de coco locales e influencia portuguesa.", pt: "Uma fusão de especiarias de coco locais e influência portuguesa." },
    ingredients: [{ en: "Fresh fish (Kingfish or Pomfret)", es: "Pescado fresco", pt: "Peixe fresco" }, { en: "Coconut milk & tamarind", es: "Leche de coco y tamarindo", pt: "Leite de coco e tamarindo" }],
    origin: { en: "Goa, India", es: "Goa, India", pt: "Goa, Índia" },
    region: "Coastal India",
    bestCities: [{ en: "Panaji", es: "Panaji", pt: "Panaji" }, { en: "Margao", es: "Margao", pt: "Margao" }],
    bestRestaurants: [{ name: "Fisherman's Wharf", city: "Panaji" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "chhole-bhature",
    title: { en: "Chhole Bhature", es: "Chhole Bhature", pt: "Chhole Bhature" },
    category: "North Indian",
    image: "/images/chhole bhature.jpg",
    gallery: [],
    history: { en: "A beloved Punjabi street food staple, popularized post-independence.", es: "Una comida callejera favorita de origen punjabi.", pt: "Uma comida de rua favorita de origem punjabi." },
    ingredients: [{ en: "Spicy chickpeas (Chhole)", es: "Garbanzos condimentados (Chhole)", pt: "Grão-de-bico temperado (Chhole)" }, { en: "Fluffy fried bread (Bhature)", es: "Pan frito inflado (Bhature)", pt: "Pão frito inflado (Bhature)" }],
    origin: { en: "Punjab / New Delhi", es: "Punjab / Nueva Delhi", pt: "Punjab / Nova Deli" },
    region: "North India",
    bestCities: [{ en: "New Delhi", es: "Nueva Delhi", pt: "Nova Deli" }, { en: "Amritsar", es: "Amritsar", pt: "Amritsar" }],
    bestRestaurants: [{ name: "Sita Ram Diwan Chand", city: "New Delhi" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "puttu-kadala",
    title: { en: "Puttu & Kadala Curry", es: "Puttu y Kadala Curry", pt: "Puttu e Kadala Curry" },
    category: "South Indian",
    image: "/images/puttu kadala curry.jpg",
    gallery: [],
    history: { en: "The signature morning breakfast recipe of Kerala houseboats.", es: "La receta de desayuno característica de las casas barco en Kerala.", pt: "A receita de café da manhã característica das casas barco em Kerala." },
    ingredients: [{ en: "Steamed rice cake rolls (Puttu)", es: "Pastel de arroz al vapor (Puttu)", pt: "Bolo de arroz ao vapor (Puttu)" }, { en: "Black chickpeas gravy (Kadala)", es: "Guiso de garbanzos negros (Kadala)", pt: "Guisado de grão-de-bico preto (Kadala)" }],
    origin: { en: "Kerala, India", es: "Kerala, India", pt: "Kerala, Índia" },
    region: "South India",
    bestCities: [{ en: "Kochi", es: "Kochi", pt: "Kochi" }, { en: "Trivandrum", es: "Trivandrum", pt: "Trivandrum" }],
    bestRestaurants: [{ name: "Paragon Restaurant", city: "Kochi" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "awadhi-biryani",
    title: { en: "Awadhi Dum Biryani", es: "Biryani Dum Awadhi", pt: "Dum Biryani Awadhi" },
    category: "Mughlai Specialty",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800",
    gallery: [],
    history: { en: "The royal dish created in the Nawabi kitchens of Lucknow.", es: "El plato real creado en las cocinas de Lucknow.", pt: "O prato real criado nas cozinhas de Lucknow." },
    ingredients: [{ en: "Basmati rice", es: "Arroz basmati", pt: "Arroz basmati" }, { en: "Saffron, cardamoms, and marinated meat", es: "Azafrán, cardamomo y carne marinada", pt: "Açafrão, cardamomo e carne marinada" }],
    origin: { en: "Lucknow, Uttar Pradesh", es: "Lucknow, Uttar Pradesh", pt: "Lucknow, Uttar Pradesh" },
    region: "North India",
    bestCities: [{ en: "Lucknow", es: "Lucknow", pt: "Lucknow" }],
    bestRestaurants: [{ name: "Tunday Kababi", city: "Lucknow" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "samosa-delight",
    title: { en: "Classic Vegetable Samosa", es: "Samosa Vegetal Clásica", pt: "Samosa de Vegetais Clássica" },
    category: "Indian Street Snack",
    image: "/images/momos.jpg",
    gallery: [],
    history: { en: "Introduced to India during the Delhi Sultanate from Central Asia.", es: "Introducido en la India durante el Sultanato de Delhi.", pt: "Introduzido na Índia durante o Sultanato de Deli." },
    ingredients: [{ en: "Crispy pastry wrapper", es: "Hojaldre crujiente", pt: "Massa folhada crocante" }, { en: "Spiced potato & green peas filling", es: "Relleno de papa y guisantes con especias", pt: "Recheio de batata e ervilha com especiarias" }],
    origin: { en: "Middle East / North India", es: "Medio Oriente / Norte de la India", pt: "Médio Oriente / Norte da Índia" },
    region: "All India",
    bestCities: [{ en: "Mumbai", es: "Mumbai", pt: "Mumbai" }, { en: "New Delhi", es: "Nueva Delhi", pt: "Nova Deli" }],
    bestRestaurants: [{ name: "Tewari Bros", city: "Mumbai" }],
    travelTips: [],
    faqs: []
  },
  {
    slug: "rogan-josh",
    title: { en: "Kashmiri Rogan Josh", es: "Rogan Josh Cachemir", pt: "Rogan Josh Caxemira" },
    category: "Traditional Kashmiri",
    image: "/images/laal maas.jpg",
    gallery: [],
    history: { en: "An authentic Persian culinary gem introduced to Kashmir by Mughals.", es: "Una auténtica joya persa introducida en Cachemira.", pt: "Uma autêntica joia persa introduzida na Caxemira." },
    ingredients: [{ en: "Tender lamb / mutton pieces", es: "Carne tierna de cordero", pt: "Carne macia de cordeiro" }, { en: "Kashmiri red chilies, ginger & yogurt", es: "Chiles rojos, jengibre y yogur", pt: "Pimentas vermelhas, gengibre e iogurte" }],
    origin: { en: "Kashmir Valley, India", es: "Valle de Cachemira, India", pt: "Vale de Caxemira, Índia" },
    region: "North India",
    bestCities: [{ en: "Srinagar", es: "Srinagar", pt: "Srinagar" }],
    bestRestaurants: [{ name: "Mughal Darbar", city: "Srinagar" }],
    travelTips: [],
    faqs: []
  }
];

// ----------------------------------------------------
// FESTIVALS (seed defaults)
// ----------------------------------------------------
export const festivalsData: FestivalData[] = [
  {
    slug: "diwali",
    title: { en: "Diwali", es: "Diwali", pt: "Diwali" },
    tagline: { en: "The Grand Festival of Lights & Prosperity", es: "El Gran Festival de las Luces", pt: "O Grande Festival das Luzes" },
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1200",
    gallery: [],
    history: { en: "Celebrates the return of Lord Rama to Ayodhya.", es: "Celebra el regreso de Lord Rama a Ayodhya.", pt: "Celebra o retorno de Lord Rama a Ayodhya." },
    significance: { en: "Victory of light over darkness.", es: "Victoria de la luz sobre la oscuridad.", pt: "Vitória da luz sobre a escuridão." },
    bestPlaces: [{ en: "Ayodhya", es: "Ayodhya", pt: "Ayodhya" }],
    travelTips: [],
    faqs: []
  }
];

// ----------------------------------------------------
// TRAVEL BLOGS DATA (6 Cards)
// ----------------------------------------------------
export const blogsData: BlogData[] = [
  {
    slug: "essential-india-travel-tips",
    title: { en: "First Time in India: 10 Essential Travel Tips", es: "Primera Vez en la India: 10 Consejos", pt: "Primeira Vez na Índia: 10 Conselhos" },
    excerpt: { en: "A premium travel checklist for your first journey.", es: "Una lista de viaje premium.", pt: "Uma lista de viagem premium." },
    content: { en: "Traveling to India is a sensory awakening.", es: "Viajar a la India es un despertar sensorial.", pt: "Viajar para a Índia é um despertar sensorial." },
    featuredImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
    author: "Elena Rodriguez",
    category: "Travel Guides",
    tags: ["India Guides", "Luxury Travel"],
    readingTime: 6,
    createdAt: "2026-05-12",
    seoTitle: { en: "First Time India Travel Guide | MHIndiaTrips", es: "Guía de Viaje a la India | MHIndiaTrips", pt: "Guia de Viagem para a Índia | MHIndiaTrips" },
    seoDescription: { en: "Professional travel tips for a memorable India tour.", es: "Consejos profesionales para un viaje a la India.", pt: "Conselhos profissionais para uma viagem à Índia." }
  },
  {
    slug: "solo-female-travel-india",
    title: { en: "Solo Female Travel in India: Practical Safety Guide", es: "Viajar Sola en la India: Guía Práctica de Seguridad", pt: "Viajar Sozinha na Índia: Guia Prático de Segurança" },
    excerpt: { en: "Important considerations and safety tips for solo women travelers.", es: "Consideraciones importantes de seguridad para mujeres.", pt: "Considerações importantes de segurança para mulheres." },
    content: { en: "Exploring India alone is incredibly empowering.", es: "Explorar la India sola es increíblemente empoderador.", pt: "Explorar a Índia sozinha é incrivelmente empoderador." },
    featuredImage: "/images/team_anita.png",
    author: "Anita Sharma",
    category: "Safety & Tips",
    tags: ["Solo Travel", "Safety Guide"],
    readingTime: 8,
    createdAt: "2026-06-01",
    seoTitle: { en: "Solo Female Travel Safety Guide India", es: "Guía de Seguridad para Viajar Sola", pt: "Guia de Segurança para Viajar Sozinha" },
    seoDescription: { en: "Expert concierge tips and recommendations for women travel.", es: "Consejos de expertos para mujeres que viajan solas.", pt: "Conselhos de peritos para mulheres que viajam sozinhas." }
  },
  {
    slug: "best-time-to-visit-india",
    title: { en: "Best Time to Visit India: Region-by-Region Guide", es: "Mejor Época para Visitar la India: Guía Regional", pt: "Melhor Época para Visitar a Índia: Guia Regional" },
    excerpt: { en: "Choose the perfect month for your custom private tour.", es: "Elija el mes perfecto para su recorrido privado.", pt: "Escolha o mês perfeito para a sua viagem privada." },
    content: { en: "With varying climates, timing is everything.", es: "Con climas tan diversos, el tiempo lo es todo.", pt: "Com climas tão diversos, o tempo é tudo." },
    featuredImage: "/images/taj_mahal_sunrise.png",
    author: "Priya Patel",
    category: "Planning Guides",
    tags: ["Weather Guide", "Seasons"],
    readingTime: 5,
    createdAt: "2026-06-15",
    seoTitle: { en: "When to Visit India | Best Weather Guides", es: "Cuándo viajar a la India | Mejor Clima", pt: "Quando viajar para a Índia | Melhor Clima" },
    seoDescription: { en: "Learn about monsoon, winter, and summer tourism months.", es: "Infórmese sobre los meses de monzón, invierno y verano.", pt: "Informe-se sobre os meses de monção, inverno e verão." }
  },
  {
    slug: "understanding-indian-culture",
    title: { en: "Understanding Indian Culture & Traditions", es: "Entendiendo la Cultura y Tradiciones de la India", pt: "Entendendo a Cultura e Tradições da Índia" },
    excerpt: { en: "A guide to local etiquette, dress codes, and greetings.", es: "Una guía de etiqueta local, vestimenta y saludos.", pt: "Um guia de etiqueta local, vestimentas e saudações." },
    content: { en: "India's culture is a tapestry of deep heritage.", es: "La cultura de la India es un tapiz de herencia profunda.", pt: "A cultura da Índia é uma tapeçaria de herança profunda." },
    featuredImage: "/images/varanasi_ghats_aarti.png",
    author: "Rajesh Kumar",
    category: "Culture & Arts",
    tags: ["Culture", "Etiquette"],
    readingTime: 7,
    createdAt: "2026-07-02",
    seoTitle: { en: "India Cultural Etiquette Travel Guide", es: "Guía de Etiqueta Cultural en la India", pt: "Guia de Etiqueta Cultural na Índia" },
    seoDescription: { en: "Essential cultural rules for international tourists.", es: "Reglas culturales esenciales para turistas internacionales.", pt: "Regras culturais essenciais para turistas internacionais." }
  },
  {
    slug: "south-vs-north-india",
    title: { en: "North vs South India: Differences in Experience", es: "Norte vs Sur de la India: Diferencias", pt: "Norte vs Sul da Índia: Diferenças" },
    excerpt: { en: "Compare the landscapes, food, and culture of the two regions.", es: "Compare los paisajes, comida y cultura de ambas regiones.", pt: "Compare as paisagens, comida e cultura de ambas as regiões." },
    content: { en: "Choosing between North and South India is a delightful dilemma.", es: "Elegir entre el norte y el sur de la India es un dilema encantador.", pt: "Escolher entre o norte e o sul da Índia é um dilema adorável." },
    featuredImage: "/images/kerala 3.jpg",
    author: "Elena Rodriguez",
    category: "Travel Guides",
    tags: ["North India", "South India"],
    readingTime: 9,
    createdAt: "2026-07-20",
    seoTitle: { en: "North vs South India Travel Comparison Guide", es: "Comparación de Viaje: Norte vs Sur", pt: "Comparação de Viagem: Norte vs Sul" },
    seoDescription: { en: "Find out which region fits your travel dreams.", es: "Descubra qué región se adapta a sus sueños de viaje.", pt: "Descubra qual região se adapta aos seus sonhos de viagem." }
  },
  {
    slug: "luxury-trains-india",
    title: { en: "Luxury Trains of India: The Ultimate Railway Guides", es: "Trenes de Lujo en la India: Guía de Ferrocarriles", pt: "Trens de Luxo na Índia: Guia de Ferrovias" },
    excerpt: { en: "Travel like a Maharaja inside palace cabins on wheels.", es: "Viaje como un Maharaja dentro de cabinas palacio.", pt: "Viaje como um Maharaja dentro de cabines palácio." },
    content: { en: "Train travel in India can be an ultra-luxury affair.", es: "El viaje en tren en la India puede ser un asunto de ultra lujo.", pt: "A viagem de trem na Índia pode ser um caso de ultra luxo." },
    featuredImage: "/images/luxury_palace_train.png",
    author: "Priya Patel",
    category: "Luxury Travel",
    tags: ["Luxury Trains", "Maharaja Express"],
    readingTime: 6,
    createdAt: "2026-08-01",
    seoTitle: { en: "Luxury Railway Palace Trains Guide India", es: "Guía de Trenes de Lujo de la India", pt: "Guia de Trens de Luxo da Índia" },
    seoDescription: { en: "Experience Maharajas Express and Palace on Wheels.", es: "Experimente el Maharajas Express y el Palace on Wheels.", pt: "Experimente o Maharajas Express e o Palace on Wheels." }
  },
  {
    slug: "cultural-festivals-india-calendar",
    title: { en: "Festivals of India: A Cultural Calendar of Colors", es: "Festivales de la India: Calendario Cultural de Colores", pt: "Festivais da Índia: Calendário Cultural de Cores" },
    excerpt: { en: "A complete guide to experiencing Diwali, Holi, and temple festivals.", es: "Una guía completa para vivir Diwali y Holi.", pt: "Um guia completo para vivenciar Diwali e Holi." },
    content: { en: "Indian festivals are massive celebrations of community, spirituality, and art.", es: "Los festivales indios son enormes celebraciones de espiritualidad.", pt: "Os festivais indianos são grandes celebrações de espiritualidade." },
    featuredImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800",
    author: "Rajesh Kumar",
    category: "Cultural Guides",
    tags: ["Festivals", "Diwali", "Holi"],
    readingTime: 7,
    createdAt: "2026-08-05",
    seoTitle: { en: "India Festivals Calendar & Travel Tips", es: "Calendario de Festivales de la India", pt: "Calendário de Festivais da Índia" },
    seoDescription: { en: "Explore cultural holidays and regional rituals in India.", es: "Explore las fiestas culturales en la India.", pt: "Explore os feriados culturais na Índia." }
  },
  {
    slug: "top-luxury-palace-hotels",
    title: { en: "Top 5 Luxury Palace Hotels in India for Royalty Stays", es: "Los 5 Mejores Hoteles Palacio de Lujo en India", pt: "Os 5 Melhores Hotéis Palácio de Luxo na Índia" },
    excerpt: { en: "Live like a King inside authentic Taj and Oberoi heritage properties.", es: "Viva como un rey en auténticos palacios reales.", pt: "Viva como um rey en auténticos palacios reales." },
    content: { en: "India has masterfully restored medieval forts and royal residences into hotels.", es: "La India ha restaurado fortalezas y residencias reales.", pt: "A Índia restaurou fortalezas e residências reais." },
    featuredImage: "/images/rajasthan_fort_sunset.png",
    author: "Elena Rodriguez",
    category: "Luxury Travel",
    tags: ["Hotels", "Heritage Palace", "Taj Hotels"],
    readingTime: 5,
    createdAt: "2026-08-09",
    seoTitle: { en: "Best Heritage Palace Hotels in India | MHIndiaTrips", es: "Mejores Hoteles Palacio en India", pt: "Melhores Hotéis Palácio na Índia" },
    seoDescription: { en: "Stay in Taj Lake Palace, Rambagh Palace, and Umaid Bhawan.", es: "Alójese en Taj Lake Palace y Rambagh Palace.", pt: "Hospede-se no Taj Lake Palace e Rambagh Palace." }
  }
];

// ----------------------------------------------------
// TESTIMONIALS (6 Cards)
// ----------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Alvaro Gomez",
    location: "Madrid, Spain",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    quote: { en: "The best travel experience of our lives! The private guides and luxury chauffeur cars made our Rajasthan journey absolutely perfect.", es: "¡La mejor experiencia de viaje de nuestras vidas! Los guías privados y los coches de lujo hicieron que nuestro viaje por Rajastán fuera perfecto.", pt: "A melhor experiência de viagem de nossas vidas! Os guias privados e os carros de luxo tornaram a nossa viagem pelo Rajastão perfeita." },
    stars: 5
  },
  {
    id: "test-2",
    name: "Clara Santos",
    location: "Lisbon, Portugal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    quote: { en: "South India and the backwaters of Kerala were spectacular. The Ayurvedic wellness treatments and custom hotels exceeded our expectations.", es: "El sur de la India y los canales de Kerala fueron espectaculares. Los tratamientos de ayurveda superaron nuestras expectativas.", pt: "O sul da Índia e os canais de Kerala foram espetaculares. Os tratamentos de ayurveda superaram as nossas expectativas." },
    stars: 5
  },
  {
    id: "test-3",
    name: "Sarah & Family",
    location: "London, United Kingdom",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    quote: { en: "Traveling with children can be hectic, but MH India Trips made it seamless. The private vehicle was comfortable, and our driver was fantastic.", es: "Viajar con niños puede ser agitado, pero MH India Trips lo hizo impecable. El vehículo privado fue muy cómodo.", pt: "Viajar com crianças pode ser agitado, mas a MH India Trips tornou tudo impecável. O veículo privado era muito confortável." },
    stars: 5
  },
  {
    id: "test-4",
    name: "Jean-Pierre & Marie",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    quote: { en: "A truly royal experience. We stayed in actual palace suites and had private sunrise tours of the Taj Mahal. Outstanding service!", es: "Una experiencia verdaderamente real. Nos alojamos en suites de palacios y tuvimos tours privados al Taj Mahal.", pt: "Uma experiência verdadeiramente real. Hospedamo-nos em suítes de palácios e tivemos tours privados ao Taj Mahal." },
    stars: 5
  },
  {
    id: "test-5",
    name: "Ana Maria Silva",
    location: "São Paulo, Brazil",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    quote: { en: "Incredible attention to detail. Every single guide spoke fluent Spanish/Portuguese, and the local cuisine recommendations were superb.", es: "Increíble atención al detalle. Cada guía hablaba español con fluidez y las recomendaciones de comida local fueron excelentes.", pt: "Incrível atenção aos detalhes. Cada guia falava espanhol fluentemente e as recomendações de comida local foram excelentes." },
    stars: 5
  },
  {
    id: "test-6",
    name: "David Miller",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    quote: { en: "Their Ranthambore wildlife safari organization was top-notch. We spotted a tiger on our first game drive! Highly recommended concierge.", es: "La organización del safari en Ranthambore fue excelente. ¡Vimos un tigre en nuestro primer safari!", pt: "A organização do safári em Ranthambore foi excelente. Vimos um tigre no nosso primeiro safári! Muito recomendado." },
    stars: 5
  }
];
