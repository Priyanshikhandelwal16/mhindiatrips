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

export interface TourHighlight {
  title: LocalizedString;
  desc: LocalizedString;
  icon?: string;
  image?: string;
  displayOrder?: number;
  isActive?: boolean;
}

export interface TourAddon {
  name: LocalizedString;
  desc: LocalizedString;
  price: string;
  currency: string;
  duration?: string;
  image?: string;
  isActive?: boolean;
}

export interface GalleryImage {
  url: string;
  title?: string;
  alt?: string;
  caption?: string;
  displayOrder?: number;
}

export interface AttractionData {
  slug: string;
  name: LocalizedString;
  desc: LocalizedString;
  history?: LocalizedString;
  architecture?: LocalizedString;
  timings?: LocalizedString;
  info?: LocalizedString;
  image: string;
  gallery?: string[];
  faqs?: { q: LocalizedString; a: LocalizedString }[];
  location?: string;
  openingHours?: string;
  recommendedDuration?: string;
  entryFee?: string;
  isUNESCO?: boolean;
  isFeatured?: boolean;
  displayOrder?: number;
}

export interface HotelData {
  name: string;
  tier: string; // Luxury, Premium, Mid-range, Budget, Boutique, Heritage
  desc: LocalizedString;
  image: string;
  location?: string;
  priceRange?: string;
  url?: string;
  isFeatured?: boolean;
}

export interface CityActivity {
  name: LocalizedString;
  desc: LocalizedString;
  image?: string;
  duration?: string;
  price?: string;
  bestTime?: string;
  difficulty?: string;
  isFeatured?: boolean;
  displayOrder?: number;
}

export interface CityData {
  slug: string;
  title: LocalizedString;
  tagline: LocalizedString;
  image: string;
  gallery?: (string | GalleryImage)[];
  overview: LocalizedString;
  history: LocalizedString;
  culture: LocalizedString;
  attractions: AttractionData[];
  thingsToDo: (LocalizedString | CityActivity)[];
  hotels: HotelData[];
  localFood: LocalizedString;
  shopping: LocalizedString;
  weather: LocalizedString;
  bestTime: LocalizedString;
  travelTips: (LocalizedString | any)[];
  nearbyPlaces: { name: string; distance: string }[];
  suggestedItinerary: LocalizedString;
  faqs: { q: LocalizedString; a: LocalizedString }[];
  
  parentState: string;
  country?: string;
  destinationType?: string;
  shortDescription?: LocalizedString;
  fullDescription?: LocalizedString;
  featuredImage?: string;
  isFeatured?: boolean;
  status?: string; // draft, published, unpublished
  hero?: {
    image: string;
    title: LocalizedString;
    subtitle: LocalizedString;
    description: LocalizedString;
    ctaText: LocalizedString;
    ctaLink: string;
  };
  highlights?: TourHighlight[];
  experiences?: {
    title: LocalizedString;
    desc: LocalizedString;
    image?: string;
    duration?: string;
    location?: string;
    price?: string;
    bookingAvailable?: boolean;
    isFeatured?: boolean;
  }[];
  bestTimeToVisit?: {
    bestTime: LocalizedString;
    peakSeason?: string;
    shoulderSeason?: string;
    offSeason?: string;
    weatherDesc?: LocalizedString;
    monthlyInfo?: {
      month: string;
      weather?: string;
      temp?: string;
      crowd?: string;
      recommended?: boolean;
      desc?: string;
    }[];
  };
  travelInfo?: {
    howToReach?: LocalizedString;
    nearestAirport?: string;
    nearestRailway?: string;
    transportOptions?: string;
    distanceFromMajorCities?: string;
    recommendedStay?: string;
    avgTemp?: string;
    currency?: string;
    localLanguage?: string;
    timeZone?: string;
    safetyInfo?: LocalizedString;
  };
  gettingAround?: {
    transportType: string;
    title: LocalizedString;
    desc: LocalizedString;
    image?: string;
    priceRange?: string;
    recommended?: boolean;
  }[];
  localFoodDishes?: {
    name: LocalizedString;
    desc: LocalizedString;
    image?: string;
    isVeg?: boolean;
    recommended?: boolean;
    whereToTry?: string;
    displayOrder?: number;
  }[];
  relatedTours?: string[];
  tags?: string[];
  statistics?: {
    recommendedDays?: string;
    annualVisitors?: string;
    bestSeason?: string;
    avgTemp?: string;
    airportDistance?: string;
    delhiDistance?: string;
  };
  seo?: {
    title: LocalizedString;
    description: LocalizedString;
    keywords: LocalizedString;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
    indexRule?: string; // index, noindex
    followRule?: string; // follow, nofollow
  };
}

export interface StateData {
  slug: string;
  title: LocalizedString;
  tagline: LocalizedString;
  region: "North" | "South" | "East" | "West" | "Central" | "North East" | "Islands";
  image: string;
  gallery: (string | GalleryImage)[];
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
  
  country?: string;
  parentDestination?: string;
  destinationType?: string;
  shortDescription?: LocalizedString;
  fullDescription?: LocalizedString;
  featuredImage?: string;
  isFeatured?: boolean;
  status?: string;
  hero?: {
    image: string;
    title: LocalizedString;
    subtitle: LocalizedString;
    description: LocalizedString;
    ctaText: LocalizedString;
    ctaLink: string;
  };
  highlights?: TourHighlight[];
  experiences?: any[];
  bestTimeToVisit?: any;
  travelInfo?: any;
  gettingAround?: any[];
  localFoodDishes?: any[];
  relatedTours?: string[];
  tags?: string[];
  statistics?: any;
  seo?: any;
}

export interface TourPackage {
  slug: string;
  title: LocalizedString;
  tagline: LocalizedString;
  category: string;
  durationDays: number;
  image: string;
  gallery: (string | GalleryImage)[];
  highlights: (LocalizedString | TourHighlight)[];
  itinerary: {
    day: number;
    title: LocalizedString;
    desc: LocalizedString;
    location?: string;
    activities?: (LocalizedString | string)[];
    sightseeing?: string;
    meals?: string;
    overnight?: string;
    hotel?: string;
    travelDistance?: string;
    travelTime?: string;
    image?: string;
    optionalExperiences?: string;
  }[];
  includedExperiences: LocalizedString[];
  travelTips: LocalizedString[];
  faqs: { q: LocalizedString; a: LocalizedString }[];
  
  durationNights?: number;
  startingLocation?: string;
  endingLocation?: string;
  tourType?: string; // Private Tour, Group Tour, etc.
  travelStyle?: string; // Luxury, Premium, etc.
  bestFor?: string;
  groupSize?: string;
  difficultyLevel?: string;
  description?: LocalizedString;
  exclusions?: LocalizedString[];
  addons?: TourAddon[];
  pricing?: {
    startingPrice?: number;
    pricePerPerson?: number;
    currency?: string; // EUR, USD, GBP, INR
    priceType?: string;
    discountPrice?: number;
    discountPercent?: number;
    seasonalDiscountNote?: string;
    saleBadge?: string;
    groupPricing?: string;
    priceIncludes?: string;
    priceExcludes?: string;
    enquireForPrice?: boolean;
  };
  travelInfo?: {
    startingPoint?: string;
    endingPoint?: string;
    duration?: string;
    transportation?: string;
    accommodation?: string;
    tourType?: string;
    bestTime?: string;
    groupSize?: string;
    languages?: string;
    suitableFor?: string;
    destinations?: string[];
  };
  policies?: {
    cancellation?: LocalizedString;
    refund?: LocalizedString;
    bookingTerms?: LocalizedString;
    importantNotes?: LocalizedString;
    visaInfo?: LocalizedString;
    insuranceInfo?: LocalizedString;
    terms?: LocalizedString;
  };
  seo?: {
    title?: LocalizedString;
    description?: LocalizedString;
    keywords?: LocalizedString;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
    indexRule?: string;
    followRule?: string;
  };
  status?: string; // draft, published, unpublished
  isFeatured?: boolean;
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
  image?: string;
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
  parentState: stateSlug,
  country: "India",
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
    country: "India",
    parentDestination: "india",
    image: "/images/rajasthan-camels.jpg",
    gallery: [],
    description: { en: "The Land of Kings. Explore desert dunes, mighty forts and heritage palaces.", es: "La tierra de los reyes. Dunas, fuertes y palacios.", pt: "A terra dos reis. Dunas, fortes e palácios." },
    history: { en: "Ruled by Rajput clans for centuries.", es: "Gobernado por clanes Rajput.", pt: "Governado por clãs Rajput." },
    culture: { en: "Folk dances, miniature painting and textile printing.", es: "Danzas folclóricas y pintura en miniatura.", pt: "Danças folclóricas e pintura em miniatura." },
    localFood: { en: "Dal Baati Churma, Laal Maas and Ghewar.", es: "Dal Baati Churma y Laal Maas.", pt: "Dal Baati Churma e Laal Maas." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [
      {
        slug: "jaipur",
        title: { en: "Jaipur", es: "Jaipur", pt: "Jaipur" },
        parentState: "rajasthan",
        country: "India",
        tagline: { en: "The Pink City of Maharajas", es: "La Ciudad Rosa de los Maharajás", pt: "A Cidade Rosa dos Marajás" },
        image: "/images/rajasthan_fort_sunset.png",
        gallery: [],
        overview: { en: "Capital of Rajasthan, known for its pink-painted old city walls, grand palaces, and bustling bazaars. A UNESCO World Heritage City since 2019.", es: "Capital de Rajastán, conocida por sus murallas pintadas de rosa, palacios grandiosos y bazares bulliciosos.", pt: "Capital do Rajastão, conhecida por suas muralhas pintadas de rosa, palácios grandiosos e bazares movimentados." },
        history: { en: "Founded in 1727 by Maharaja Sawai Jai Singh II, one of the first planned cities in India.", es: "Fundada en 1727 por el Maharajá Sawai Jai Singh II.", pt: "Fundada em 1727 pelo Marajá Sawai Jai Singh II." },
        culture: { en: "Famous for block printing, blue pottery, gemstone cutting, and Kathak dance performances.", es: "Famoso por la impresión en bloques, cerámica azul y corte de gemas.", pt: "Famoso por impressão em bloco, cerâmica azul e corte de pedras preciosas." },
        attractions: [
          { slug: "amber-fort", name: { en: "Amber Fort", es: "Fuerte Amber", pt: "Forte Amber" }, desc: { en: "A majestic hilltop fortress with stunning mirror work, elephant rides, and panoramic views of Maota Lake. Built in 1592 by Raja Man Singh.", es: "Una fortaleza majestuosa en la cima de una colina con impresionantes trabajos de espejo.", pt: "Uma fortaleza majestosa no topo de uma colina com impressionantes trabalhos de espelho." }, history: { en: "Built in 1592 by Raja Man Singh I as the royal residence of Kachwaha Rajputs.", es: "Construido en 1592 por Raja Man Singh I.", pt: "Construído em 1592 por Raja Man Singh I." }, architecture: { en: "A blend of Hindu and Mughal architecture with red sandstone and white marble.", es: "Una mezcla de arquitectura hindú y mogol.", pt: "Uma mistura de arquitetura hindu e mogol." }, timings: { en: "8:00 AM to 5:30 PM daily", es: "8:00 AM a 5:30 PM diario", pt: "8:00 às 17:30 diariamente" }, info: { en: "Allow 2-3 hours. Hire a guide at the entrance for best experience.", es: "Reserve 2-3 horas. Contrate un guía.", pt: "Reserve 2-3 horas. Contrate um guia." }, image: "/images/Jaipur.jpg", gallery: [], faqs: [] },
          { slug: "hawa-mahal", name: { en: "Hawa Mahal", es: "Hawa Mahal", pt: "Hawa Mahal" }, desc: { en: "The iconic Palace of Winds with 953 small windows, built in 1799 for royal women to observe street life.", es: "El icónico Palacio de los Vientos con 953 ventanas pequeñas.", pt: "O icônico Palácio dos Ventos com 953 pequenas janelas." }, history: { en: "Constructed in 1799 by Maharaja Sawai Pratap Singh in the form of Lord Krishna's crown.", es: "Construido en 1799 por el Maharajá Sawai Pratap Singh.", pt: "Construído em 1799 pelo Marajá Sawai Pratap Singh." }, architecture: { en: "Five-story pyramidal structure made of pink sandstone with honeycomb design.", es: "Estructura piramidal de cinco pisos en arenisca rosa.", pt: "Estrutura piramidal de cinco andares em arenito rosa." }, timings: { en: "9:00 AM to 5:00 PM daily", es: "9:00 AM a 5:00 PM diario", pt: "9:00 às 17:00 diariamente" }, info: { en: "Best photographed from the street at sunrise. Entry is from the back.", es: "Mejor fotografiado al amanecer desde la calle.", pt: "Melhor fotografado ao amanhecer da rua." }, image: "/images/Jaipur.jpg", gallery: [], faqs: [] },
          { slug: "city-palace", name: { en: "City Palace", es: "Palacio de la Ciudad", pt: "Palácio da Cidade" }, desc: { en: "A sprawling palace complex that blends Rajput and Mughal architecture, still partially occupied by the royal family.", es: "Un amplio complejo palaciego que mezcla arquitectura Rajput y Mogol.", pt: "Um amplo complexo palaciano que mistura arquitetura Rajput e Mogol." }, history: { en: "Built over centuries starting from 1727 by successive Maharajas.", es: "Construido durante siglos a partir de 1727.", pt: "Construído ao longo de séculos a partir de 1727." }, architecture: { en: "Mix of Rajasthani and Mughal architecture with ornate gateways and courtyards.", es: "Mezcla de arquitectura rajasthaní y mogol.", pt: "Mistura de arquitetura rajastã e mogol." }, timings: { en: "9:30 AM to 5:00 PM daily", es: "9:30 AM a 5:00 PM diario", pt: "9:30 às 17:00 diariamente" }, info: { en: "Audio guide available. Photography allowed in most areas.", es: "Audioguía disponible. Fotografía permitida.", pt: "Audioguia disponível. Fotografia permitida." }, image: "/images/Jaipur.jpg", gallery: [], faqs: [] },
          { slug: "jantar-mantar", name: { en: "Jantar Mantar", es: "Jantar Mantar", pt: "Jantar Mantar" }, desc: { en: "A UNESCO World Heritage astronomical observation site with the world's largest stone sundial.", es: "Un sitio UNESCO de observación astronómica con el reloj solar más grande del mundo.", pt: "Um local UNESCO de observação astronômica com o maior relógio solar do mundo." }, history: { en: "Built in 1734 by Maharaja Sawai Jai Singh II who was passionate about astronomy.", es: "Construido en 1734 por el Maharajá astrónomo.", pt: "Construído em 1734 pelo Marajá astrônomo." }, architecture: { en: "Collection of 19 astronomical instruments built in stone and brass.", es: "Colección de 19 instrumentos astronómicos.", pt: "Coleção de 19 instrumentos astronômicos." }, timings: { en: "9:00 AM to 4:30 PM daily", es: "9:00 AM a 4:30 PM diario", pt: "9:00 às 16:30 diariamente" }, info: { en: "Hire a guide to understand the instruments properly.", es: "Contrate un guía para entender los instrumentos.", pt: "Contrate um guia para entender os instrumentos." }, image: "/images/Jaipur.jpg", gallery: [], faqs: [] }
        ],
        thingsToDo: [{ en: "Hot air balloon ride at sunrise", es: "Paseo en globo al amanecer", pt: "Passeio de balão ao amanhecer" }, { en: "Block printing workshop", es: "Taller de impresión en bloque", pt: "Oficina de impressão em bloco" }, { en: "Evening light show at Amber Fort", es: "Show de luces en Fuerte Amber", pt: "Show de luzes no Forte Amber" }],
        hotels: [{ name: "Rambagh Palace", tier: "Luxury" as const, desc: { en: "Former royal residence turned luxury hotel.", es: "Antigua residencia real convertida en hotel.", pt: "Antiga residência real convertida em hotel." }, image: "" }],
        localFood: { en: "Dal Baati Churma, Pyaaz Kachori, Ghewar, Laal Maas, Rajasthani Thali.", es: "Dal Baati Churma, Pyaaz Kachori, Ghewar.", pt: "Dal Baati Churma, Pyaaz Kachori, Ghewar." },
        shopping: { en: "Johari Bazaar for gems, Bapu Bazaar for textiles, Tripolia Bazaar for bangles.", es: "Johari Bazaar para gemas, Bapu Bazaar para textiles.", pt: "Johari Bazaar para gemas, Bapu Bazaar para têxteis." },
        weather: { en: "Hot summers (40°C+), pleasant winters (8-25°C). Best Oct-Mar.", es: "Veranos calurosos, inviernos agradables.", pt: "Verões quentes, invernos agradáveis." },
        bestTime: { en: "October to March (peak: November-February)", es: "De octubre a marzo", pt: "De outubro a março" },
        travelTips: [{ en: "Buy a composite ticket for multiple monuments.", es: "Compre un boleto compuesto para varios monumentos.", pt: "Compre um bilhete composto para vários monumentos." }],
        nearbyPlaces: [{ name: "Pushkar", distance: "145 km" }, { name: "Ajmer", distance: "135 km" }],
        suggestedItinerary: { en: "Day 1: Amber Fort + Jaigarh. Day 2: City Palace, Hawa Mahal, Jantar Mantar. Day 3: Nahargarh sunset, bazaar shopping.", es: "Día 1: Fuerte Amber. Día 2: Palacio, Hawa Mahal. Día 3: Nahargarh.", pt: "Dia 1: Forte Amber. Dia 2: Palácio, Hawa Mahal. Dia 3: Nahargarh." },
        faqs: [{ q: { en: "How many days for Jaipur?", es: "¿Cuántos días para Jaipur?", pt: "Quantos dias para Jaipur?" }, a: { en: "2-3 days ideal. 4 days if including day trips to Pushkar/Ajmer.", es: "2-3 días ideales.", pt: "2-3 dias ideais." } }]
      },
      {
        slug: "udaipur",
        title: { en: "Udaipur", es: "Udaipur", pt: "Udaipur" },
        parentState: "rajasthan",
        country: "India",
        tagline: { en: "The City of Lakes & Romance", es: "La Ciudad de los Lagos y el Romance", pt: "A Cidade dos Lagos e Romance" },
        image: "/images/rajasthan_fort_sunset.png",
        gallery: [],
        overview: { en: "Known as the Venice of the East, Udaipur is set around beautiful lakes and features stunning white marble palaces. One of India's most romantic cities.", es: "Conocida como la Venecia del Este, Udaipur está rodeada de lagos hermosos y palacios de mármol blanco.", pt: "Conhecida como a Veneza do Oriente, Udaipur é cercada por lagos bonitos e palácios de mármore branco." },
        history: { en: "Founded in 1559 by Maharana Udai Singh II after the fall of Chittorgarh.", es: "Fundada en 1559 por Maharana Udai Singh II.", pt: "Fundada em 1559 por Maharana Udai Singh II." },
        culture: { en: "Mewar school of miniature painting, puppet shows, and folk music evenings.", es: "Escuela de pintura en miniatura Mewar y espectáculos de marionetas.", pt: "Escola de pintura em miniatura Mewar e espetáculos de marionetas." },
        attractions: [
          { slug: "city-palace-udaipur", name: { en: "City Palace Udaipur", es: "Palacio de Udaipur", pt: "Palácio de Udaipur" }, desc: { en: "A massive palace complex overlooking Lake Pichola, built over 400 years by 22 Mewar rulers.", es: "Un enorme complejo palaciego con vista al lago Pichola.", pt: "Um enorme complexo palaciano com vista para o Lago Pichola." }, history: { en: "Construction began in 1559.", es: "Construcción iniciada en 1559.", pt: "Construção iniciada em 1559." }, architecture: { en: "Blend of medieval, European and Chinese architecture.", es: "Mezcla de arquitectura medieval, europea y china.", pt: "Mistura de arquitetura medieval, europeia e chinesa." }, timings: { en: "9:30 AM to 5:30 PM", es: "9:30 AM a 5:30 PM", pt: "9:30 às 17:30" }, info: { en: "Don't miss the Crystal Gallery and sunset views.", es: "No se pierda la Galería de Cristal.", pt: "Não perca a Galeria de Cristal." }, image: "/images/rajasthan_fort_sunset.png", gallery: [], faqs: [] },
          { slug: "lake-pichola", name: { en: "Lake Pichola", es: "Lago Pichola", pt: "Lago Pichola" }, desc: { en: "An artificial freshwater lake created in 1362, surrounded by palaces, temples, and bathing ghats.", es: "Un lago artificial de agua dulce creado en 1362.", pt: "Um lago artificial de água doce criado em 1362." }, history: { en: "Created in 1362 by a tribal man named Pichhu Banjara.", es: "Creado en 1362.", pt: "Criado em 1362." }, architecture: { en: "Features Jag Mandir and Lake Palace on islands.", es: "Con Jag Mandir y Lake Palace en islas.", pt: "Com Jag Mandir e Lake Palace em ilhas." }, timings: { en: "Boat rides from 10 AM to sunset", es: "Paseos en barco de 10 AM al atardecer", pt: "Passeios de barco das 10h ao pôr do sol" }, info: { en: "Sunset boat ride is a must-do experience.", es: "El paseo en barco al atardecer es imprescindible.", pt: "O passeio de barco ao pôr do sol é imperdível." }, image: "/images/rajasthan_fort_sunset.png", gallery: [], faqs: [] }
        ],
        thingsToDo: [{ en: "Sunset boat ride on Lake Pichola", es: "Paseo al atardecer en el lago", pt: "Passeio ao pôr do sol no lago" }, { en: "Dinner at rooftop restaurant overlooking the lake", es: "Cena en terraza con vista al lago", pt: "Jantar em terraço com vista para o lago" }],
        hotels: [{ name: "Taj Lake Palace", tier: "Luxury" as const, desc: { en: "A floating palace hotel on Lake Pichola.", es: "Un hotel palacio flotante.", pt: "Um hotel palácio flutuante." }, image: "" }],
        localFood: { en: "Dal Baati Churma, Gatte ki Sabzi, Kachori.", es: "Dal Baati Churma, Gatte ki Sabzi.", pt: "Dal Baati Churma, Gatte ki Sabzi." },
        shopping: { en: "Hathi Pol for paintings, Bada Bazaar for silver jewelry.", es: "Hathi Pol para pinturas.", pt: "Hathi Pol para pinturas." },
        weather: { en: "Pleasant year-round due to lakes. Best Oct-Mar.", es: "Agradable todo el año.", pt: "Agradável o ano todo." },
        bestTime: { en: "September to March", es: "De septiembre a marzo", pt: "De setembro a março" },
        travelTips: [],
        nearbyPlaces: [{ name: "Chittorgarh", distance: "112 km" }, { name: "Kumbhalgarh", distance: "84 km" }],
        suggestedItinerary: { en: "Day 1: City Palace & Lake Pichola sunset. Day 2: Saheliyon ki Bari, Jagdish Temple, evening puppet show.", es: "Día 1: Palacio y lago. Día 2: Jardines y templos.", pt: "Dia 1: Palácio e lago. Dia 2: Jardins e templos." },
        faqs: []
      },
      {
        slug: "jodhpur",
        title: { en: "Jodhpur", es: "Jodhpur", pt: "Jodhpur" },
        parentState: "rajasthan",
        country: "India",
        tagline: { en: "The Blue City & Mehrangarh Fortress", es: "La Ciudad Azul y la Fortaleza Mehrangarh", pt: "A Cidade Azul e a Fortaleza Mehrangarh" },
        image: "/images/jodhpur.jpg",
        gallery: [],
        overview: { en: "Known as the Blue City for its indigo-washed houses, dominated by the imposing Mehrangarh Fort. Gateway to the Thar Desert.", es: "Conocida como la Ciudad Azul por sus casas pintadas de añil, dominada por el imponente Fuerte Mehrangarh.", pt: "Conhecida como a Cidade Azul por suas casas pintadas de anil, dominada pelo imponente Forte Mehrangarh." },
        history: { en: "Founded in 1459 by Rao Jodha, a Rajput chief of the Rathore clan.", es: "Fundada en 1459 por Rao Jodha.", pt: "Fundada em 1459 por Rao Jodha." },
        culture: { en: "Marwari music, Rajasthani folk art, and vibrant textile markets.", es: "Música Marwari y mercados textiles.", pt: "Música Marwari e mercados têxteis." },
        attractions: [
          { slug: "mehrangarh-fort", name: { en: "Mehrangarh Fort", es: "Fuerte Mehrangarh", pt: "Forte Mehrangarh" }, desc: { en: "One of India's largest forts, rising 125 meters above the city with extraordinary carved panels and expansive courtyards.", es: "Uno de los fuertes más grandes de la India, a 125 metros sobre la ciudad.", pt: "Um dos maiores fortes da Índia, a 125 metros acima da cidade." }, history: { en: "Built in 1459 by Rao Jodha.", es: "Construido en 1459.", pt: "Construído em 1459." }, architecture: { en: "Massive stone walls with intricate lattice work and carved balconies.", es: "Muros masivos con celosías intrincadas.", pt: "Muros massivos com treliças intrincadas." }, timings: { en: "9:00 AM to 5:00 PM", es: "9:00 AM a 5:00 PM", pt: "9:00 às 17:00" }, info: { en: "Allow 3-4 hours. The zipline across the fort walls is thrilling.", es: "Reserve 3-4 horas. La tirolesa es emocionante.", pt: "Reserve 3-4 horas. A tirolesa é emocionante." }, image: "/images/jodhpur.jpg", gallery: [], faqs: [] }
        ],
        thingsToDo: [{ en: "Zip-lining across Mehrangarh ramparts", es: "Tirolesa en las murallas", pt: "Tirolesa nas muralhas" }, { en: "Blue City heritage walking tour", es: "Tour a pie por la Ciudad Azul", pt: "Tour a pé pela Cidade Azul" }],
        hotels: [],
        localFood: { en: "Mirchi Bada, Mawa Kachori, Makhaniya Lassi.", es: "Mirchi Bada, Mawa Kachori.", pt: "Mirchi Bada, Mawa Kachori." },
        shopping: { en: "Clock Tower market for spices, Nai Sarak for bandhani textiles.", es: "Mercado del reloj para especias.", pt: "Mercado do relógio para especiarias." },
        weather: { en: "Extremely hot summers, pleasant winters.", es: "Veranos muy calurosos, inviernos agradables.", pt: "Verões muito quentes, invernos agradáveis." },
        bestTime: { en: "October to March", es: "De octubre a marzo", pt: "De outubro a março" },
        travelTips: [],
        nearbyPlaces: [{ name: "Jaisalmer", distance: "285 km" }, { name: "Bikaner", distance: "245 km" }],
        suggestedItinerary: { en: "Day 1: Mehrangarh Fort, Jaswant Thada. Day 2: Blue City walk, Clock Tower, desert village excursion.", es: "Día 1: Fuerte. Día 2: Ciudad Azul.", pt: "Dia 1: Forte. Dia 2: Cidade Azul." },
        faqs: []
      },
      {
        slug: "jaisalmer",
        title: { en: "Jaisalmer", es: "Jaisalmer", pt: "Jaisalmer" },
        parentState: "rajasthan",
        country: "India",
        tagline: { en: "The Golden City & Living Desert Fort", es: "La Ciudad Dorada y Fuerte del Desierto", pt: "A Cidade Dourada e Forte do Deserto" },
        image: "/images/jaisalmer.jpg",
        gallery: [],
        overview: { en: "A golden sandstone city rising from the Thar Desert, home to one of the world's few living forts where people still reside inside the ancient walls.", es: "Una ciudad de arenisca dorada que se eleva del desierto de Thar.", pt: "Uma cidade de arenito dourado que se ergue do deserto de Thar." },
        history: { en: "Founded in 1156 by Rawal Jaisal on the ancient Silk Route.", es: "Fundada en 1156 en la antigua Ruta de la Seda.", pt: "Fundada em 1156 na antiga Rota da Seda." },
        culture: { en: "Desert folk music, puppet shows, and camel leather crafts.", es: "Música folclórica del desierto y artesanía de cuero.", pt: "Música folclórica do deserto e artesanato de couro." },
        attractions: [
          { slug: "jaisalmer-fort", name: { en: "Jaisalmer Fort (Sonar Quila)", es: "Fuerte de Jaisalmer", pt: "Forte de Jaisalmer" }, desc: { en: "A UNESCO World Heritage living fort where 3,000+ people still live within its walls. Built entirely of golden sandstone.", es: "Un fuerte viviente UNESCO donde más de 3,000 personas aún viven.", pt: "Um forte vivo UNESCO onde mais de 3.000 pessoas ainda vivem." }, history: { en: "Built in 1156 AD by Bhati Rajput ruler Rawal Jaisal.", es: "Construido en 1156.", pt: "Construído em 1156." }, architecture: { en: "Honey-colored sandstone with intricate Jain temple carvings.", es: "Arenisca color miel con intrincados templos jainistas.", pt: "Arenito cor de mel com intrincados templos jainistas." }, timings: { en: "6:00 AM to 6:00 PM", es: "6:00 AM a 6:00 PM", pt: "6:00 às 18:00" }, info: { en: "Walk through the narrow lanes at sunrise for magical golden light.", es: "Camine al amanecer para la luz dorada.", pt: "Caminhe ao amanhecer para a luz dourada." }, image: "/images/jaisalmer.jpg", gallery: [], faqs: [] }
        ],
        thingsToDo: [{ en: "Overnight desert camp with camel safari", es: "Campamento nocturno en el desierto", pt: "Acampamento noturno no deserto" }, { en: "Sand dune sunset with folk music", es: "Atardecer en dunas con música", pt: "Pôr do sol nas dunas com música" }],
        hotels: [],
        localFood: { en: "Ker Sangri, Dal Makhani with Baati, desert truffles.", es: "Ker Sangri, Dal Makhani.", pt: "Ker Sangri, Dal Makhani." },
        shopping: { en: "Fort market for embroidered textiles and camel leather goods.", es: "Mercado del fuerte para textiles.", pt: "Mercado do forte para têxteis." },
        weather: { en: "Extreme heat in summer, cool desert nights in winter.", es: "Calor extremo en verano.", pt: "Calor extremo no verão." },
        bestTime: { en: "October to March", es: "De octubre a marzo", pt: "De outubro a março" },
        travelTips: [],
        nearbyPlaces: [{ name: "Sam Sand Dunes", distance: "42 km" }, { name: "Kuldhara Ghost Village", distance: "18 km" }],
        suggestedItinerary: { en: "Day 1: Fort, Patwon ki Haveli. Day 2: Sam Dunes camel safari & overnight camp.", es: "Día 1: Fuerte. Día 2: Safari y campamento.", pt: "Dia 1: Forte. Dia 2: Safári e acampamento." },
        faqs: []
      }
    ]
  },
  {
    slug: "kerala",
    title: { en: "Kerala", es: "Kerala", pt: "Kerala" },
    tagline: { en: "God's Own Country, Backwaters & Ayurvedic Wellness", es: "El propio país de Dios, canales y ayurveda", pt: "O próprio país de Deus, canais e ayurveda" },
    region: "South",
    country: "India",
    parentDestination: "india",
    image: "/images/kerala 2.jpg",
    gallery: [],
    description: { en: "An emerald paradise of coconut plantations, spice hills and quiet backwater canals.", es: "Un paraíso esmeralda de plantaciones de coco y colinas de especias.", pt: "Um paraíso esmeralda de plantações de coco e colinas de especiarias." },
    history: { en: "A global spice trade hub for Phoenicians, Romans and Arabs.", es: "Un centro de comercio de especias desde la antigüedad.", pt: "Um centro de comércio de especiarias desde a antiguidade." },
    culture: { en: "Kathakali dance-drama, Kalaripayattu martial art, and temple festivals.", es: "Danza Kathakali y arte marcial Kalaripayattu.", pt: "Dança Kathakali e arte marcial Kalaripayattu." },
    localFood: { en: "Karimeen Pollichathu, Idiyappam with curry and payasam.", es: "Frutos de mar con coco y arroz puttu.", pt: "Frutos do mar com coco e arroz puttu." },
    bestTime: { en: "September to March.", es: "De septiembre a marzo.", pt: "De setembro a março." },
    travelTips: [],
    faqs: [],
    cities: [
      {
        slug: "kochi",
        title: { en: "Kochi", es: "Kochi", pt: "Kochi" },
        parentState: "kerala",
        country: "India",
        tagline: { en: "The Historic Spice Port Route", es: "La Ruta Histórica del Puerto de Especias", pt: "A Rota Histórica do Porto de Especiarias" },
        image: "/images/kerala_backwaters_houseboat.png",
        gallery: [],
        overview: { en: "A charming port city blending Chinese fishing nets, Portuguese churches, Dutch palaces, and Jewish heritage along the Arabian Sea coast.", es: "Una encantadora ciudad portuaria con redes de pesca chinas e iglesias portuguesas.", pt: "Uma encantadora cidade portuária com redes de pesca chinesas e igrejas portuguesas." },
        history: { en: "A major spice trading port since the 14th century, visited by Portuguese, Dutch, and British.", es: "Un puerto de especias desde el siglo XIV.", pt: "Um porto de especiarias desde o século XIV." },
        culture: { en: "Kathakali dance, Kochi-Muziris Biennale art festival, and Chinese fishing nets.", es: "Danza Kathakali y festival de arte Biennale.", pt: "Dança Kathakali e festival de arte Biennale." },
        attractions: [
          { slug: "chinese-fishing-nets", name: { en: "Chinese Fishing Nets", es: "Redes de Pesca Chinas", pt: "Redes de Pesca Chinesas" }, desc: { en: "Iconic cantilevered fishing nets along Fort Kochi beach, used for over 500 years. Buy fresh catch and get it cooked at nearby stalls.", es: "Redes de pesca icónicas usadas por más de 500 años.", pt: "Redes de pesca icônicas usadas há mais de 500 anos." }, history: { en: "Introduced by Chinese explorer Zheng He in the 14th century.", es: "Introducidas por el explorador chino Zheng He.", pt: "Introduzidas pelo explorador chinês Zheng He." }, architecture: { en: "Wooden cantilever structures with stone counterweights.", es: "Estructuras de madera en voladizo.", pt: "Estruturas de madeira em balanço." }, timings: { en: "Best at sunrise and sunset", es: "Mejor al amanecer y atardecer", pt: "Melhor ao amanhecer e pôr do sol" }, info: { en: "Fishermen will let you help operate the nets.", es: "Los pescadores le dejarán ayudar.", pt: "Os pescadores deixarão você ajudar." }, image: "/images/kochi.jpg", gallery: [], faqs: [] },
          { slug: "fort-kochi", name: { en: "Fort Kochi", es: "Fort Kochi", pt: "Fort Kochi" }, desc: { en: "A heritage precinct with colonial-era bungalows, street art, cozy cafes, and the oldest European church in India (St. Francis Church).", es: "Un barrio patrimonial con bungalows coloniales y arte callejero.", pt: "Um bairro patrimonial com bangalôs coloniais e arte de rua." }, history: { en: "Portuguese arrived in 1500, followed by Dutch and British.", es: "Los portugueses llegaron en 1500.", pt: "Os portugueses chegaram em 1500." }, architecture: { en: "Mix of Portuguese, Dutch, and British colonial styles.", es: "Mezcla de estilos coloniales.", pt: "Mistura de estilos coloniais." }, timings: { en: "Open area, visit anytime", es: "Zona abierta", pt: "Zona aberta" }, info: { en: "Best explored on foot or bicycle.", es: "Mejor explorar a pie o en bicicleta.", pt: "Melhor explorar a pé ou de bicicleta." }, image: "/images/kochi.jpg", gallery: [], faqs: [] }
        ],
        thingsToDo: [{ en: "Kathakali dance performance", es: "Espectáculo de danza Kathakali", pt: "Espetáculo de dança Kathakali" }, { en: "Spice market walking tour", es: "Tour por el mercado de especias", pt: "Tour pelo mercado de especiarias" }],
        hotels: [],
        localFood: { en: "Kerala Fish Curry, Appam with Stew, Puttu & Kadala.", es: "Curry de pescado de Kerala, Appam.", pt: "Caril de peixe de Kerala, Appam." },
        shopping: { en: "Jew Town for antiques and spices, Lulu Mall for modern shopping.", es: "Jew Town para antigüedades.", pt: "Jew Town para antiguidades." },
        weather: { en: "Tropical. Hot and humid. Monsoon June-September.", es: "Tropical, cálido y húmedo.", pt: "Tropical, quente e úmido." },
        bestTime: { en: "October to March", es: "De octubre a marzo", pt: "De outubro a março" },
        travelTips: [{ en: "Take a ferry between Fort Kochi and Ernakulam — beautiful views.", es: "Tome un ferry entre Fort Kochi y Ernakulam.", pt: "Pegue uma balsa entre Fort Kochi e Ernakulam." }],
        nearbyPlaces: [{ name: "Alleppey Backwaters", distance: "53 km" }, { name: "Munnar", distance: "130 km" }],
        suggestedItinerary: { en: "Day 1: Fort Kochi, Chinese Nets, Kathakali. Day 2: Spice market, Jewish Quarter, sunset cruise.", es: "Día 1: Fort Kochi. Día 2: Mercado de especias.", pt: "Dia 1: Fort Kochi. Dia 2: Mercado de especiarias." },
        faqs: []
      },
      {
        slug: "alleppey",
        title: { en: "Alleppey (Alappuzha)", es: "Alleppey", pt: "Alleppey" },
        parentState: "kerala",
        country: "India",
        tagline: { en: "Venice of the East — Backwater Paradise", es: "La Venecia del Este — Paraíso de Canales", pt: "A Veneza do Oriente — Paraíso dos Canais" },
        image: "/images/alleppye.jpg",
        gallery: [],
        overview: { en: "Famous for its palm-fringed backwater canals, luxury houseboats, coir villages, and rice paddy landscapes. The heart of Kerala's backwater experience.", es: "Famosa por sus canales, casas flotantes de lujo y paisajes de arrozales.", pt: "Famosa por seus canais, casas flutuantes de luxo e paisagens de arrozais." },
        history: { en: "A major port and coir production center since ancient times.", es: "Un importante puerto desde la antigüedad.", pt: "Um importante porto desde a antiguidade." },
        culture: { en: "Snake boat races (Nehru Trophy), coir weaving, and toddy tapping.", es: "Carreras de barcos serpiente y artesanía de coco.", pt: "Corridas de barcos serpente e artesanato de coco." },
        attractions: [],
        thingsToDo: [{ en: "Overnight luxury houseboat cruise", es: "Crucero nocturno en casa flotante", pt: "Cruzeiro noturno em casa flutuante" }, { en: "Village canoe tour through narrow canals", es: "Tour en canoa por los canales", pt: "Tour de canoa pelos canais" }],
        hotels: [],
        localFood: { en: "Karimeen Pollichathu, Toddy Shop meals, Kerala Sadhya.", es: "Karimeen Pollichathu, comidas locales.", pt: "Karimeen Pollichathu, refeições locais." },
        shopping: { en: "Coir products, handloom fabrics, and fresh spices.", es: "Productos de coco y especias.", pt: "Produtos de coco e especiarias." },
        weather: { en: "Tropical humidity year-round. Monsoon rains June-August.", es: "Humedad tropical todo el año.", pt: "Umidade tropical o ano todo." },
        bestTime: { en: "September to March (August for boat races)", es: "De septiembre a marzo", pt: "De setembro a março" },
        travelTips: [{ en: "Book houseboats in advance during peak season (Dec-Jan).", es: "Reserve las casas flotantes con anticipación.", pt: "Reserve as casas flutuantes com antecedência." }],
        nearbyPlaces: [{ name: "Kumarakom", distance: "30 km" }, { name: "Kochi", distance: "53 km" }],
        suggestedItinerary: { en: "Day 1: Board houseboat, cruise through backwaters, sunset on deck. Day 2: Village canoe tour, return.", es: "Día 1: Casa flotante. Día 2: Tour en canoa.", pt: "Dia 1: Casa flutuante. Dia 2: Tour de canoa." },
        faqs: []
      },
      {
        slug: "munnar",
        title: { en: "Munnar", es: "Munnar", pt: "Munnar" },
        parentState: "kerala",
        country: "India",
        tagline: { en: "Misty Tea Plantations in the Western Ghats", es: "Plantaciones de Té Brumosas en los Ghats Occidentales", pt: "Plantações de Chá Enevoadas nos Ghats Ocidentais" },
        image: "/images/kerala 3.jpg",
        gallery: [],
        overview: { en: "A stunning hill station at 1,600m altitude, carpeted with emerald tea estates, spice gardens, and misty mountain peaks. South India's premier hill retreat.", es: "Una hermosa estación de montaña a 1.600m con plantaciones de té esmeralda.", pt: "Uma bela estação de montanha a 1.600m com plantações de chá esmeralda." },
        history: { en: "Developed as a hill station by the British in the late 1800s for tea cultivation.", es: "Desarrollada como estación de montaña por los británicos.", pt: "Desenvolvida como estação de montanha pelos britânicos." },
        culture: { en: "Tea plantation heritage, Eravikulam wildlife, and tribal communities.", es: "Patrimonio de plantaciones de té y vida silvestre.", pt: "Patrimônio de plantações de chá e vida selvagem." },
        attractions: [],
        thingsToDo: [{ en: "Tea estate walk with expert taster", es: "Paseo por plantación de té", pt: "Passeio por plantação de chá" }, { en: "Trek to Anamudi Peak (South India's highest)", es: "Trekking al Pico Anamudi", pt: "Trekking ao Pico Anamudi" }],
        hotels: [],
        localFood: { en: "Cardamom tea, Kerala Porotta, fresh mountain honey.", es: "Té de cardamomo y miel de montaña.", pt: "Chá de cardamomo e mel de montanha." },
        shopping: { en: "Fresh teas, cardamom, pepper, and homemade chocolates.", es: "Tés frescos y especias.", pt: "Chás frescos e especiarias." },
        weather: { en: "Cool year-round (10-25°C). Foggy mornings common.", es: "Fresco todo el año (10-25°C).", pt: "Fresco o ano todo (10-25°C)." },
        bestTime: { en: "September to May (avoid heavy monsoon Jun-Aug)", es: "De septiembre a mayo", pt: "De setembro a maio" },
        travelTips: [{ en: "Carry warm layers — mornings can be cold even in summer.", es: "Lleve ropa de abrigo.", pt: "Leve roupas quentes." }],
        nearbyPlaces: [{ name: "Thekkady", distance: "90 km" }, { name: "Kochi", distance: "130 km" }],
        suggestedItinerary: { en: "Day 1: Tea museum, tea estate walk. Day 2: Eravikulam National Park, Top Station views.", es: "Día 1: Museo del té. Día 2: Parque Nacional.", pt: "Dia 1: Museu do chá. Dia 2: Parque Nacional." },
        faqs: []
      }
    ]
  },
  {
    slug: "goa",
    title: { en: "Goa", es: "Goa", pt: "Goa" },
    tagline: { en: "Sun-Kissed Beaches, Portuguese Architecture & Spices", es: "Playas Soleadas, Arquitectura Portuguesa y Especias", pt: "Praias Ensolaradas, Arquitetura Portuguesa e Especiarias" },
    region: "West",
    country: "India",
    parentDestination: "india",
    image: "/images/goa 2.jpg",
    gallery: [],
    description: { en: "A blend of Indian culture and Portuguese heritage on golden coastlines.", es: "Una fusión de cultura india y herencia portuguesa.", pt: "Uma fusão da cultura indiana e herança portuguesa." },
    history: { en: "A Portuguese colony for over 450 years.", es: "Colonia portuguesa durante más de 450 años.", pt: "Colônia portuguesa por mais de 450 anos." },
    culture: { en: "Famous for Goan carnival, church feasts, and beach vibes.", es: "Famoso por el carnaval y fiestas patronales.", pt: "Famoso pelo carnaval e festas de igrejas." },
    localFood: { en: "Goan Fish Curry, Pork Vindaloo, Bebinca dessert.", es: "Vindaloo y curry de pescado goan.", pt: "Vindaloo e curry de peixe goano." },
    bestTime: { en: "November to February.", es: "De noviembre a febrero.", pt: "De novembro a fevereiro." },
    travelTips: [],
    faqs: [],
    cities: [
      {
        slug: "panaji",
        title: { en: "Panaji (Panjim)", es: "Panaji", pt: "Panaji" },
        parentState: "goa",
        country: "India",
        tagline: { en: "Portuguese Heritage Capital of Goa", es: "Capital del Patrimonio Portugués de Goa", pt: "Capital do Patrimônio Português de Goa" },
        image: "/images/goa.jpg",
        gallery: [],
        overview: { en: "The charming capital of Goa with Portuguese-era colorful houses in Fontainhas, riverside casinos, and heritage churches. A blend of Indian and European culture.", es: "La encantadora capital de Goa con casas portuguesas coloridas.", pt: "A encantadora capital de Goa com casas portuguesas coloridas." },
        history: { en: "Portuguese colonial capital from the 16th century. Became Indian in 1961.", es: "Capital colonial portuguesa desde el siglo XVI.", pt: "Capital colonial portuguesa desde o século XVI." },
        culture: { en: "Goan carnival, fado music influence, and Catholic feast traditions.", es: "Carnaval goanés y tradiciones católicas.", pt: "Carnaval goense e tradições católicas." },
        attractions: [
          { slug: "fontainhas", name: { en: "Fontainhas Latin Quarter", es: "Barrio Latino Fontainhas", pt: "Bairro Latino Fontainhas" }, desc: { en: "India's only surviving Portuguese Latin Quarter with pastel-colored villas, narrow cobbled lanes, art galleries, and cozy bakeries.", es: "El único barrio latino portugués de la India con villas de colores pastel.", pt: "O único bairro latino português da Índia com vilas em tons pastel." }, history: { en: "Established in the 18th century by Portuguese settlers.", es: "Establecido en el siglo XVIII.", pt: "Estabelecido no século XVIII." }, architecture: { en: "Portuguese colonial with colorful facades and tile roofs.", es: "Colonial portugués con fachadas coloridas.", pt: "Colonial português com fachadas coloridas." }, timings: { en: "Open area — visit anytime", es: "Zona abierta", pt: "Zona aberta" }, info: { en: "Best explored on foot. Visit early morning for best photos.", es: "Mejor explorar a pie por la mañana.", pt: "Melhor explorar a pé de manhã." }, image: "/images/goa.jpg", gallery: [], faqs: [] },
          { slug: "basilica-bom-jesus", name: { en: "Basilica of Bom Jesus", es: "Basílica de Bom Jesus", pt: "Basílica de Bom Jesus" }, desc: { en: "A UNESCO World Heritage church housing the mortal remains of St. Francis Xavier. One of the oldest churches in India (1605).", es: "Una iglesia UNESCO con los restos de San Francisco Xavier.", pt: "Uma igreja UNESCO com os restos de São Francisco Xavier." }, history: { en: "Completed in 1605. Contains relics of St. Francis Xavier.", es: "Completada en 1605.", pt: "Concluída em 1605." }, architecture: { en: "Baroque architecture with Corinthian columns and gilded altars.", es: "Arquitectura barroca con columnas corintias.", pt: "Arquitetura barroca com colunas coríntias." }, timings: { en: "9:00 AM to 6:30 PM (Mon-Sat), 10:30 AM to 6:30 PM (Sun)", es: "9:00 AM a 6:30 PM", pt: "9:00 às 18:30" }, info: { en: "Photography not allowed inside. Free entry.", es: "No se permiten fotos dentro.", pt: "Fotos não permitidas dentro." }, image: "/images/goa.jpg", gallery: [], faqs: [] }
        ],
        thingsToDo: [{ en: "Heritage walk through Fontainhas", es: "Paseo patrimonial por Fontainhas", pt: "Passeio patrimonial por Fontainhas" }, { en: "Sunset cruise on Mandovi River", es: "Crucero al atardecer en el río Mandovi", pt: "Cruzeiro ao pôr do sol no rio Mandovi" }],
        hotels: [],
        localFood: { en: "Goan Fish Curry Rice, Pork Vindaloo, Bebinca, Feni.", es: "Curry de pescado goanés, Vindaloo.", pt: "Caril de peixe goense, Vindaloo." },
        shopping: { en: "Mapusa Friday Market for spices, cashews, and feni.", es: "Mercado de Mapusa para especias.", pt: "Mercado de Mapusa para especiarias." },
        weather: { en: "Tropical. Hot (32-35°C) and humid. Monsoon Jun-Sep.", es: "Tropical, cálido y húmedo.", pt: "Tropical, quente e úmido." },
        bestTime: { en: "November to February", es: "De noviembre a febrero", pt: "De novembro a fevereiro" },
        travelTips: [{ en: "Rent a scooter to explore — most affordable and flexible way.", es: "Alquile una scooter para explorar.", pt: "Alugue uma scooter para explorar." }],
        nearbyPlaces: [{ name: "Old Goa Churches", distance: "10 km" }, { name: "Calangute Beach", distance: "15 km" }],
        suggestedItinerary: { en: "Day 1: Fontainhas, Basilica Bom Jesus, Mandovi cruise. Day 2: North Goa beaches. Day 3: South Goa beach retreat.", es: "Día 1: Fontainhas. Día 2: Playas del norte. Día 3: Sur de Goa.", pt: "Dia 1: Fontainhas. Dia 2: Praias do norte. Dia 3: Sul de Goa." },
        faqs: []
      }
    ]
  },
  {
    slug: "uttar-pradesh",
    title: { en: "Uttar Pradesh", es: "Uttar Pradesh", pt: "Uttar Pradesh" },
    tagline: { en: "The Taj Mahal, Spiritual Ghats & Sacred River Banks", es: "El Taj Mahal, Ghats Espirituales y Ríos Sagrados", pt: "O Taj Mahal, Ghats Espirituais e Rios Sagrados" },
    region: "North",
    country: "India",
    parentDestination: "india",
    image: "/images/uttar pradesh.jpg",
    gallery: [],
    description: { en: "The spiritual heartland of India, housing the Taj Mahal and ancient Varanasi.", es: "El corazón espiritual, hogar de Agra y Varanasi.", pt: "O coração espiritual, lar de Agra e Varanasi." },
    history: { en: "The epicentre of the Mughal Empire and ancient Vedic civilisations.", es: "Epicentro del imperio mogol y cultura védica.", pt: "Epicentro do império mogol e cultura védica." },
    culture: { en: "Kathak classical dance, Banarasi silk weavers and Ganga Aarti ceremonies.", es: "Ceremonias en el Ganges y tejidos de seda.", pt: "Cerimônias no Ganges e tecidos de seda." },
    localFood: { en: "Petha sweet, Awadhi Biryani and Kebabs.", es: "Biryani aromático y dulces tradicionales.", pt: "Biryani aromático e doces tradicionais." },
    bestTime: { en: "October to March.", es: "De octubre a marzo.", pt: "De outubro a março." },
    travelTips: [],
    faqs: [],
    cities: [
      {
        slug: "varanasi",
        title: { en: "Varanasi", es: "Varanasi", pt: "Varanasi" },
        parentState: "uttar-pradesh",
        country: "India",
        tagline: { en: "The Eternal City of Light & Spiritual Capital", es: "La Ciudad Eterna de la Luz", pt: "A Cidade Eterna da Luz" },
        image: "/images/varanasi_ghats_aarti.png",
        gallery: [],
        overview: { en: "One of the world's oldest continuously inhabited cities (3,000+ years). The holiest city in Hinduism, famous for its ghats along the sacred Ganges, ancient temples, and the mesmerizing Ganga Aarti ceremony.", es: "Una de las ciudades más antiguas del mundo. La ciudad más sagrada del hinduismo.", pt: "Uma das cidades mais antigas do mundo. A cidade mais sagrada do hinduísmo." },
        history: { en: "Believed to be founded by Lord Shiva 5,000 years ago. Continuous habitation since 1100 BCE.", es: "Fundada por Lord Shiva hace 5.000 años.", pt: "Fundada por Lord Shiva há 5.000 anos." },
        culture: { en: "Banarasi silk weaving, classical music gharanas, Ganga Aarti rituals, and ancient wrestling traditions.", es: "Tejido de seda Banarasi y rituales del Ganges.", pt: "Tecelagem de seda Banarasi e rituais do Ganges." },
        attractions: [
          { slug: "dashashwamedh-ghat", name: { en: "Dashashwamedh Ghat", es: "Ghat Dashashwamedh", pt: "Ghat Dashashwamedh" }, desc: { en: "The main ghat of Varanasi where the spectacular Ganga Aarti fire ceremony takes place every evening with thousands of lamps, chanting, and incense.", es: "El ghat principal donde se realiza la ceremonia Ganga Aarti cada noche.", pt: "O ghat principal onde a cerimônia Ganga Aarti acontece todas as noites." }, history: { en: "Said to be created by Lord Brahma. Site of an ancient 10-horse sacrifice.", es: "Creado por Lord Brahma según la tradición.", pt: "Criado por Lord Brahma segundo a tradição." }, architecture: { en: "Stone stepped ghat descending to the Ganges.", es: "Ghat de piedra descendiendo al Ganges.", pt: "Ghat de pedra descendo ao Ganges." }, timings: { en: "Ganga Aarti: 6:30 PM - 7:30 PM daily", es: "Ganga Aarti: 6:30 PM - 7:30 PM", pt: "Ganga Aarti: 18:30 - 19:30" }, info: { en: "Arrive 30 mins early for front row. Boat viewing also available.", es: "Llegue 30 min antes. Vista desde barco disponible.", pt: "Chegue 30 min antes. Vista de barco disponível." }, image: "/images/varanasi_ghats_aarti.png", gallery: [], faqs: [] },
          { slug: "kashi-vishwanath", name: { en: "Kashi Vishwanath Temple", es: "Templo Kashi Vishwanath", pt: "Templo Kashi Vishwanath" }, desc: { en: "One of the 12 Jyotirlingas and the most sacred Shiva temple in India, recently renovated with the grand Kashi Vishwanath Corridor.", es: "Uno de los 12 Jyotirlingas, el templo de Shiva más sagrado de la India.", pt: "Um dos 12 Jyotirlingas, o templo de Shiva mais sagrado da Índia." }, history: { en: "Original temple dates to 11th century. Rebuilt multiple times. Current structure from 1780.", es: "Templo original del siglo XI.", pt: "Templo original do século XI." }, architecture: { en: "Gold-plated dome (800 kg gold) with ornate stone carvings.", es: "Cúpula dorada con 800 kg de oro.", pt: "Cúpula dourada com 800 kg de ouro." }, timings: { en: "3:00 AM to 11:00 PM (various prayer timings)", es: "3:00 AM a 11:00 PM", pt: "3:00 às 23:00" }, info: { en: "Dress modestly. Electronics not allowed inside. Free entry.", es: "Vístase con modestia. Sin electrónicos.", pt: "Vista-se com modéstia. Eletrônicos não permitidos." }, image: "/images/varanasi_ghats_aarti.png", gallery: [], faqs: [] }
        ],
        thingsToDo: [{ en: "Dawn boat ride on the Ganges", es: "Paseo en barco al amanecer", pt: "Passeio de barco ao amanhecer" }, { en: "Silk weaving workshop visit", es: "Visita a taller de seda", pt: "Visita a oficina de seda" }, { en: "Walk through ancient narrow lanes", es: "Caminar por los callejones antiguos", pt: "Caminhar pelos becos antigos" }],
        hotels: [],
        localFood: { en: "Banarasi Paan, Thandai, Kachori-Sabzi, Malaiyo, Tamatar Chaat.", es: "Banarasi Paan, Thandai, Kachori.", pt: "Banarasi Paan, Thandai, Kachori." },
        shopping: { en: "Banarasi silk sarees, brassware, wooden toys from Vishwanath Gali.", es: "Sarees de seda Banarasi.", pt: "Sarees de seda Banarasi." },
        weather: { en: "Very hot summers (45°C+), cold winters (5-15°C), humid monsoon.", es: "Veranos muy calurosos, inviernos fríos.", pt: "Verões muito quentes, invernos frios." },
        bestTime: { en: "October to March (especially during Dev Deepawali in November)", es: "De octubre a marzo", pt: "De outubro a março" },
        travelTips: [{ en: "Hire a local guide for the ghat walks — lanes are labyrinthine.", es: "Contrate un guía local para los ghats.", pt: "Contrate um guia local para os ghats." }],
        nearbyPlaces: [{ name: "Sarnath", distance: "10 km" }, { name: "Allahabad (Prayagraj)", distance: "120 km" }],
        suggestedItinerary: { en: "Day 1: Evening Ganga Aarti at Dashashwamedh. Day 2: Sunrise boat ride, Kashi Vishwanath, Sarnath. Day 3: Silk weaving, old city food walk.", es: "Día 1: Ganga Aarti. Día 2: Paseo en barco. Día 3: Seda y comida.", pt: "Dia 1: Ganga Aarti. Dia 2: Passeio de barco. Dia 3: Seda e comida." },
        faqs: []
      }
    ]
  },
  {
    slug: "himachal-pradesh",
    title: { en: "Himachal Pradesh", es: "Himachal Pradesh", pt: "Himachal Pradesh" },
    tagline: { en: "Snowy Mountain Peaks, Pine Forests & Valleys", es: "Picos Nevados, Bosques de Pinos y Valles", pt: "Picos Nevados, Florestas de Pinheiros e Vales" },
    region: "North",
    country: "India",
    parentDestination: "india",
    image: "/images/himachal pradesh.jpg",
    gallery: [],
    description: { en: "A majestic Himalayan sanctuary of hill stations, apple orchards and monasteries.", es: "Un santuario del Himalaya con vistas nevadas.", pt: "Um santuário do Himalaia com vistas nevadas." },
    history: { en: "Former summer capital of British India and homeland of Tibetan monks.", es: "Antigua capital de verano británica.", pt: "Antiga capital de verão britânica." },
    culture: { en: "Himachali shawls, wood carvings and Buddhist chanting.", es: "Tejidos tradicionales y cultura budista.", pt: "Tecidos tradicionais e cultura budista." },
    localFood: { en: "Siddu bread, Madra chickpeas and Trout fish.", es: "Platos montañeses y pan casero siddu.", pt: "Pratos montanheses e pão caseiro siddu." },
    bestTime: { en: "March to June & September to December.", es: "De marzo a junio y septiembre a diciembre.", pt: "De março a junho e setembro a dezembro." },
    travelTips: [],
    faqs: [],
    cities: [
      {
        slug: "shimla",
        title: { en: "Shimla", es: "Shimla", pt: "Shimla" },
        parentState: "himachal-pradesh",
        country: "India",
        tagline: { en: "The Queen of Hill Stations", es: "La Reina de las Estaciones de Montaña", pt: "A Rainha das Estações de Montanha" },
        image: "/images/himachal pradesh.jpg",
        gallery: [],
        overview: { en: "Former summer capital of British India, set amidst pine forests with colonial architecture, a famous Mall Road, and the iconic toy train heritage railway.", es: "Antigua capital de verano de la India británica con arquitectura colonial.", pt: "Antiga capital de verão da Índia britânica com arquitetura colonial." },
        history: { en: "Became the summer capital of British India in 1864. The Shimla Agreement was signed here in 1972.", es: "Capital de verano de la India británica desde 1864.", pt: "Capital de verão da Índia britânica desde 1864." },
        culture: { en: "Colonial heritage, Himachali folk music, and apple orchards.", es: "Patrimonio colonial y huertos de manzanas.", pt: "Patrimônio colonial e pomares de maçãs." },
        attractions: [
          { slug: "mall-road-shimla", name: { en: "Mall Road & Ridge", es: "Mall Road y Ridge", pt: "Mall Road e Ridge" }, desc: { en: "The main promenade of Shimla with colonial-era buildings, shops, cafes, and stunning mountain views. Car-free zone for leisurely walks.", es: "El paseo principal con edificios coloniales y vistas a las montañas.", pt: "O passeio principal com edifícios coloniais e vistas às montanhas." }, history: { en: "Developed during British era as the social center.", es: "Desarrollado durante la era británica.", pt: "Desenvolvido durante a era britânica." }, architecture: { en: "Tudor and neo-Gothic colonial buildings.", es: "Edificios coloniales Tudor y neogóticos.", pt: "Edifícios coloniais Tudor e neogóticos." }, timings: { en: "Open 24 hours (shops 10 AM - 9 PM)", es: "Abierto 24 horas", pt: "Aberto 24 horas" }, info: { en: "Visit Christ Church at sunset for spectacular views.", es: "Visite la iglesia al atardecer.", pt: "Visite a igreja ao pôr do sol." }, image: "/images/himachal pradesh.jpg", gallery: [], faqs: [] }
        ],
        thingsToDo: [{ en: "Heritage toy train ride (UNESCO)", es: "Paseo en tren de juguete UNESCO", pt: "Passeio no trem de brinquedo UNESCO" }, { en: "Ice skating in winter at natural rink", es: "Patinaje sobre hielo en invierno", pt: "Patinação no gelo no inverno" }],
        hotels: [],
        localFood: { en: "Tudkiya Bhath, Madra, Siddu bread, Babru.", es: "Tudkiya Bhath, Madra, pan Siddu.", pt: "Tudkiya Bhath, Madra, pão Siddu." },
        shopping: { en: "Lakkar Bazaar for wooden crafts, Mall Road for shawls.", es: "Lakkar Bazaar para artesanía de madera.", pt: "Lakkar Bazaar para artesanato de madeira." },
        weather: { en: "Cold winters (0-10°C with snowfall), mild summers (15-25°C).", es: "Inviernos fríos con nieve.", pt: "Invernos frios com neve." },
        bestTime: { en: "March to June (summer), December-February (snow)", es: "Marzo a junio o diciembre a febrero", pt: "Março a junho ou dezembro a fevereiro" },
        travelTips: [{ en: "Book toy train tickets well in advance.", es: "Reserve los boletos del tren con anticipación.", pt: "Reserve os bilhetes do trem com antecedência." }],
        nearbyPlaces: [{ name: "Kufri", distance: "16 km" }, { name: "Manali", distance: "250 km" }],
        suggestedItinerary: { en: "Day 1: Mall Road, Ridge, Christ Church. Day 2: Toy train to Kalka, Jakhu Temple.", es: "Día 1: Mall Road. Día 2: Tren de juguete.", pt: "Dia 1: Mall Road. Dia 2: Trem de brinquedo." },
        faqs: []
      },
      {
        slug: "manali",
        title: { en: "Manali", es: "Manali", pt: "Manali" },
        parentState: "himachal-pradesh",
        country: "India",
        tagline: { en: "Adventure Capital of the Himalayas", es: "Capital de la Aventura del Himalaya", pt: "Capital da Aventura do Himalaia" },
        image: "/images/himachal pradesh.jpg",
        gallery: [],
        overview: { en: "A stunning mountain town at 2,050m in the Kullu Valley, gateway to Rohtang Pass and Ladakh. Famous for adventure sports, hot springs, and apple orchards.", es: "Una impresionante ciudad de montaña a 2.050m en el Valle de Kullu.", pt: "Uma impressionante cidade de montanha a 2.050m no Vale de Kullu." },
        history: { en: "Named after Manu, the Hindu sage said to have recreated human life here after a flood.", es: "Nombrada en honor al sabio hindú Manu.", pt: "Nomeada em homenagem ao sábio hindu Manu." },
        culture: { en: "Kullu shawls, Tibetan monasteries, and mountain folk traditions.", es: "Chales de Kullu y monasterios tibetanos.", pt: "Xales de Kullu e mosteiros tibetanos." },
        attractions: [
          { slug: "rohtang-pass", name: { en: "Rohtang Pass", es: "Paso Rohtang", pt: "Passo Rohtang" }, desc: { en: "A high mountain pass at 3,978m offering breathtaking views of glaciers, snow peaks, and the Lahaul Valley beyond. Open only May-October.", es: "Un paso de montaña a 3.978m con vistas impresionantes.", pt: "Um passo de montanha a 3.978m com vistas deslumbrantes." }, history: { en: "Ancient trade route between Kullu and Lahaul-Spiti.", es: "Antigua ruta comercial.", pt: "Antiga rota comercial." }, architecture: { en: "Natural mountain pass.", es: "Paso de montaña natural.", pt: "Passo de montanha natural." }, timings: { en: "Permits required. Open May-October only.", es: "Se requieren permisos. Abierto mayo-octubre.", pt: "Permissões necessárias. Aberto maio-outubro." }, info: { en: "Book permits online 1 day in advance. Carry warm clothing.", es: "Reserve permisos en línea. Lleve ropa de abrigo.", pt: "Reserve licenças online. Leve roupas quentes." }, image: "/images/himachal pradesh.jpg", gallery: [], faqs: [] }
        ],
        thingsToDo: [{ en: "River rafting on Beas River", es: "Rafting en el río Beas", pt: "Rafting no rio Beas" }, { en: "Paragliding in Solang Valley", es: "Parapente en el Valle Solang", pt: "Parapente no Vale Solang" }, { en: "Trek to Jogini Waterfall", es: "Trekking a la cascada Jogini", pt: "Trekking à cascata Jogini" }],
        hotels: [],
        localFood: { en: "Siddu, Trout fish, Dham feast, Babru.", es: "Siddu, trucha, festín Dham.", pt: "Siddu, truta, festim Dham." },
        shopping: { en: "Kullu shawls, Tibetan handicrafts, dried fruits.", es: "Chales de Kullu y artesanía tibetana.", pt: "Xales de Kullu e artesanato tibetano." },
        weather: { en: "Cold throughout (winters -5°C to 10°C, summers 10-25°C). Heavy snow Dec-Feb.", es: "Frío todo el año con nieve.", pt: "Frio o ano todo com neve." },
        bestTime: { en: "March-June (summer), December-February (snow adventures)", es: "Marzo a junio o diciembre a febrero", pt: "Março a junho ou dezembro a fevereiro" },
        travelTips: [{ en: "Acclimatize before heading to Rohtang. Altitude sickness possible.", es: "Aclimátese antes de ir a Rohtang.", pt: "Aclimate-se antes de ir a Rohtang." }],
        nearbyPlaces: [{ name: "Solang Valley", distance: "13 km" }, { name: "Kullu", distance: "40 km" }],
        suggestedItinerary: { en: "Day 1: Old Manali, Hadimba Temple, Mall Road. Day 2: Solang Valley activities. Day 3: Rohtang Pass excursion.", es: "Día 1: Viejo Manali. Día 2: Valle Solang. Día 3: Rohtang.", pt: "Dia 1: Velho Manali. Dia 2: Vale Solang. Dia 3: Rohtang." },
        faqs: []
      }
    ]
  },
  {
    slug: "maharashtra",
    title: { en: "Maharashtra", es: "Maharashtra", pt: "Maharashtra" },
    tagline: { en: "Ancient Rock Caves, Hill Stations & Dynamic Mumbai", es: "Cuevas Antiguas, Colinas y el Dinámico Mumbai", pt: "Cavernas Antigas, Colinas e o Dinâmico Mumbai" },
    region: "West",
    country: "India",
    parentDestination: "india",
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
    country: "India",
    parentDestination: "india",
    image: "/images/Western Group of Temples.jpg",
    gallery: [],
    description: { en: "Central India's heartland, featuring massive tiger reserves and legendary UNESCO heritage temples.", es: "El corazón de la India central, que cuenta con reservas de tigres y templos históricos de la UNESCO.", pt: "O coração da Índia central, com reservas de tigres e templos históricos da UNESCO." },
    history: { en: "Ruled by Chandela dynasty and Maurya empires.", es: "Gobernado por la dinastía Chandela y los imperios Maurya.", pt: "Governado pela dinastia Chandela e os impérios Maurya." },
    culture: { en: "Tribal arts, ancient stone sculptures, and heritage music festivals.", es: "Arte tribal, antiguas esculturas de piedra y festivales de música.", pt: "Arte tribal, antiga escultura de pedra e festivais de música." },
    localFood: { en: "Poha, Bhutte ka Kees, and Mawa Bati.", es: "Poha y Bhutte ka Kees tradicional.", pt: "Poha e Bhutte ka Kees tradicional." },
    bestTime: { en: "October to April.", es: "De octubre a abril.", pt: "De outubro a abril." },
    travelTips: [],
    faqs: [],
    cities: [
      createMockCity("madhya-pradesh", "khajuraho", "Khajuraho", "Khajuraho", "Khajuraho", "Ancient UNESCO Erotic Sculptured Temples", "/images/Western Group of Temples.jpg"),
      createMockCity("madhya-pradesh", "bhopal", "Bhopal", "Bhopal", "Bhopal", "City of Lakes & Heritage", "/images/madhya pradesh.jpg"),
      createMockCity("madhya-pradesh", "indore", "Indore", "Indore", "Indore", "Food Capital & Holkar Heritage", "/images/madhya pradesh.jpg"),
      createMockCity("madhya-pradesh", "omkareshwar", "Omkareshwar", "Omkareshwar", "Omkareshwar", "Sacred Island Sanctuary & Jyotirlinga", "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&q=80"),
      createMockCity("madhya-pradesh", "pachmarhi", "Pachmarhi", "Pachmarhi", "Pachmarhi", "Queen of Satpura Hill Station", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80")
    ]
  },
  {
    slug: "tamil-nadu",
    title: { en: "Tamil Nadu", es: "Tamil Nadu", pt: "Tamil Nadu" },
    tagline: { en: "Dravidian Architectural Giants, Temples & Coastline", es: "Gigantes de la Arquitectura Dravidiana y Templos", pt: "Gigantes da Arquitetura Dravidiana e Templos" },
    region: "South",
    country: "India",
    parentDestination: "india",
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
    travelInfo: {
      startingPoint: "New Delhi",
      endingPoint: "New Delhi",
      duration: "7 Days / 6 Nights",
      transportation: "Private luxury SUV with English-speaking driver",
      accommodation: "5-star & boutique palace hotels",
      tourType: "Private Tour",
      bestTime: "October to March",
      groupSize: "2-8 travelers",
      languages: "English, Spanish, Portuguese",
      suitableFor: "Luxury, Family, Honeymoon, Photography",
      destinations: ["rajasthan", "uttar-pradesh"]
    },
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
    slug: "kerala-ayurveda-wellness-retreat",
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
    travelInfo: {
      startingPoint: "Cochin",
      endingPoint: "Cochin",
      duration: "9 Days / 8 Nights",
      transportation: "Private car with driver, houseboat, and domestic flights",
      accommodation: "Boutique resorts, luxury houseboat, Ayurvedic wellness retreats",
      tourType: "Private Tour",
      bestTime: "September to March",
      groupSize: "2-6 travelers",
      languages: "English, Spanish, Portuguese",
      suitableFor: "Wellness, Honeymoon, Luxury",
      destinations: ["kerala"]
    },
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
    slug: "wildlife-royal-tiger-safaris",
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
    slug: "rajasthan-heritage-royal-palaces-tour",
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
    travelInfo: {
      startingPoint: "Udaipur",
      endingPoint: "Jaipur",
      duration: "12 Days / 11 Nights",
      transportation: "Private luxury SUV with driver, internal flights",
      accommodation: "Heritage palace hotels & luxury desert camps",
      tourType: "Private Tour",
      bestTime: "October to March",
      groupSize: "2-6 travelers",
      languages: "English, Spanish, Portuguese",
      suitableFor: "Heritage, Luxury, Honeymoon, Family",
      destinations: ["rajasthan"]
    },
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
    slug: "south-india-monuments-temples",
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
    slug: "goa-luxury-beach-vacation",
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
    slug: "royal-gujarat-heritage-safari",
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
    slug: "himalayan-escape-scenic-ladakh-tour",
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
  },
  {
    slug: "golden-triangle-royal-rajasthan-combo",
    title: { en: "Golden Triangle + Royal Rajasthan Combo", es: "Triángulo de Oro + Rajastán Real Combo", pt: "Triângulo de Ouro + Rajastão Real Combo" },
    tagline: { en: "Delhi, Agra, Jaipur, Jodhpur, Udaipur — The Grand India Circuit", es: "Delhi, Agra, Jaipur, Jodhpur, Udaipur — El Gran Circuito de India", pt: "Delhi, Agra, Jaipur, Jodhpur, Udaipur — O Grande Circuito da Índia" },
    category: "Luxury Tours",
    durationDays: 12,
    image: "/images/rajasthan_fort_sunset.png",
    gallery: [],
    highlights: [
      { en: "Private sunrise Taj Mahal access in Agra", es: "Acceso privado al amanecer en el Taj Mahal", pt: "Acesso privado ao amanhecer no Taj Mahal" },
      { en: "Royal heritage palace hotel stays in Jaipur & Udaipur", es: "Hospedaje en palacios reales en Jaipur y Udaipur", pt: "Hospedagem em palácios reais em Jaipur e Udaipur" },
      { en: "Mehrangarh Fort private heritage tour in Jodhpur", es: "Tour privado al Fuerte Mehrangarh en Jodhpur", pt: "Tour privado ao Forte Mehrangarh em Jodhpur" },
      { en: "Sunset camel ride in Jaisalmer sand dunes", es: "Paseo en camello al atardecer en Jaisalmer", pt: "Passeio de camelo ao entardecer em Jaisalmer" }
    ],
    travelInfo: {
      startingPoint: "New Delhi",
      endingPoint: "Jaipur",
      duration: "12 Days / 11 Nights",
      transportation: "Private luxury SUV, heritage hotel transfers",
      accommodation: "Heritage palaces, luxury tents, 5-star hotels",
      tourType: "Private Tour",
      bestTime: "October to March",
      groupSize: "2-6 travelers",
      languages: "English, Spanish, Portuguese",
      suitableFor: "Luxury, Heritage, Honeymoon",
      destinations: ["rajasthan", "uttar-pradesh"]
    },
    itinerary: [
      { day: 1, title: { en: "Arrival in New Delhi — VIP Welcome", es: "Llegada a Nueva Delhi — Bienvenida VIP", pt: "Chegada a Nova Deli — Boas-vindas VIP" }, desc: { en: "Private airport pickup in luxury vehicle, check into 5-star heritage hotel.", es: "Recogida privada en aeropuerto, hotel de 5 estrellas.", pt: "Coleta privada no aeroporto, hotel de 5 estrelas." } },
      { day: 2, title: { en: "Old Delhi & New Delhi Heritage Immersion", es: "Delhi Vieja y Nueva Delhi", pt: "Velho Delhi e Nova Delhi" }, desc: { en: "Private tour of Humayun's Tomb, Qutub Minar, Chandni Chowk spice market.", es: "Tour privado por los monumentos históricos de Delhi.", pt: "Tour privado pelos monumentos históricos de Delhi." } },
      { day: 3, title: { en: "Agra — Taj Mahal Sunrise Experience", es: "Agra — Amanecer en el Taj Mahal", pt: "Agra — Amanhecer no Taj Mahal" }, desc: { en: "Pre-dawn private access to Taj Mahal for sunrise photography. Visit Agra Fort.", es: "Acceso privado al amanecer en el Taj Mahal.", pt: "Acesso privado ao amanhecer no Taj Mahal." } },
      { day: 4, title: { en: "Jaipur — Pink City Arrival", es: "Jaipur — Ciudad Rosada", pt: "Jaipur — Cidade Rosa" }, desc: { en: "Private transfer to Jaipur. Check into heritage palace hotel.", es: "Traslado a Jaipur. Hotel palacio histórico.", pt: "Traslado para Jaipur. Hotel palácio histórico." } },
      { day: 5, title: { en: "Jaipur — Amber Fort & City Palace", es: "Jaipur — Fuerte Amber y Palacio Real", pt: "Jaipur — Forte Amber e Palácio Real" }, desc: { en: "Private guided tour of Amber Fort, City Palace, and Hawa Mahal.", es: "Tour privado del Fuerte Amber y el Palacio Real.", pt: "Tour privado do Forte Amber e Palácio Real." } }
    ],
    includedExperiences: [
      { en: "VIP luxury vehicle with private chauffeur throughout", es: "Vehículo de lujo VIP con chofer privado", pt: "Veículo de luxo VIP com motorista privado" },
      { en: "Expert English/Spanish/Portuguese speaking guides", es: "Guías expertos en inglés/español/portugués", pt: "Guias especialistas em inglês/espanhol/português" },
      { en: "Heritage palace & luxury 5-star hotel accommodations", es: "Alojamiento en palacios históricos y hoteles de 5 estrellas", pt: "Acomodação em palácios históricos e hotéis de 5 estrelas" }
    ],
    travelTips: [],
    faqs: []
  },
  {
    slug: "north-india-grand-heritage-spiritual-tour",
    title: { en: "North India Grand Heritage & Spiritual Tour", es: "Gran Tour de Patrimonio y Espiritualidad del Norte de India", pt: "Grande Tour de Patrimônio e Espiritualidade do Norte da Índia" },
    tagline: { en: "Delhi, Varanasi, Khajuraho, Orchha, Agra & Jaipur", es: "Delhi, Varanasi, Khajuraho, Orchha, Agra y Jaipur", pt: "Delhi, Varanasi, Khajuraho, Orchha, Agra e Jaipur" },
    category: "Heritage Tours",
    durationDays: 14,
    image: "/images/varanasi_ghats_aarti.png",
    gallery: [],
    highlights: [
      { en: "Dawn boat ride on the sacred River Ganges in Varanasi", es: "Paseo en barco al amanecer en el sagrado río Ganges", pt: "Passeio de barco ao amanhecer no sagrado Rio Ganges" },
      { en: "Attend the mesmerizing Ganga Aarti ceremony at sunset", es: "Asistir a la magnífica ceremonia del Ganga Aarti", pt: "Assistir à magnífica cerimônia do Ganga Aarti" },
      { en: "UNESCO Khajuraho temple complex private walking tour", es: "Tour privado por el complejo de templos de Khajuraho", pt: "Tour privado pelo complexo de templos de Khajuraho" },
      { en: "Medieval Orchha Fort & River island tour", es: "Fuerte medieval de Orchha y tour por la isla del río", pt: "Forte medieval de Orchha e tour pela ilha do rio" }
    ],
    itinerary: [
      { day: 1, title: { en: "Arrival in New Delhi", es: "Llegada a Nueva Delhi", pt: "Chegada a Nova Deli" }, desc: { en: "VIP welcome and private transfer to 5-star hotel.", es: "Bienvenida VIP y traslado privado al hotel.", pt: "Boas-vindas VIP e traslado privado para o hotel." } }
    ],
    includedExperiences: [
      { en: "Private Ganga Aarti ceremony front-row access", es: "Acceso de primera fila a la ceremonia Ganga Aarti", pt: "Acesso de primeira fila à cerimônia Ganga Aarti" },
      { en: "Silk weaving workshop in Varanasi", es: "Taller de tejido de seda en Varanasi", pt: "Oficina de tecelagem de seda em Varanasi" }
    ],
    travelTips: [],
    faqs: []
  },
  {
    slug: "india-honeymoon-luxury-experience",
    title: { en: "India Honeymoon Luxury Experience", es: "Experiencia de Luna de Miel de Lujo en India", pt: "Experiência de Lua de Mel de Luxo na Índia" },
    tagline: { en: "Taj Mahal, Palace Hotels, Kerala Houseboat & Goa Beach Villa", es: "Taj Mahal, Hoteles Palacio, Casa Flotante en Kerala y Villa en Goa", pt: "Taj Mahal, Hotéis Palácio, Casa Flutuante em Kerala e Vila em Goa" },
    category: "Luxury Tours",
    durationDays: 10,
    image: "/images/taj_mahal_sunrise.png",
    gallery: [],
    highlights: [
      { en: "Candlelit Taj Mahal private dinner arrangement", es: "Cena privada con velas frente al Taj Mahal", pt: "Jantar privado com velas em frente ao Taj Mahal" },
      { en: "Suite at Taj Lake Palace on Lake Pichola, Udaipur", es: "Suite en el Taj Lake Palace en el lago Pichola", pt: "Suite no Taj Lake Palace no Lago Pichola" },
      { en: "Kerala luxury houseboat private canal cruise", es: "Crucero privado en casa flotante de lujo en Kerala", pt: "Cruzeiro privado em casa flutuante de luxo em Kerala" },
      { en: "Goa beachfront luxury villa with private pool", es: "Villa de lujo frente al mar en Goa con piscina privada", pt: "Villa de luxo frente ao mar em Goa com piscina privada" }
    ],
    travelInfo: {
      startingPoint: "New Delhi",
      endingPoint: "Goa",
      duration: "10 Days / 9 Nights",
      transportation: "Private car, domestic flights, luxury transfers",
      accommodation: "Palace hotels, houseboat, beach villa",
      tourType: "Private Tour",
      bestTime: "October to March",
      groupSize: "2 travelers",
      languages: "English, Spanish, Portuguese",
      suitableFor: "Honeymoon, Luxury, Romantic",
      destinations: ["rajasthan", "kerala", "goa"]
    },
    itinerary: [
      { day: 1, title: { en: "Delhi — Romantic Arrival", es: "Delhi — Llegada Romántica", pt: "Delhi — Chegada Romântica" }, desc: { en: "Luxury suite with rose petal welcome and champagne.", es: "Suite de lujo con bienvenida de pétalos de rosa y champán.", pt: "Suite de luxo com boas-vindas com pétalas de rosa e champanhe." } }
    ],
    includedExperiences: [
      { en: "Sunset helicopter ride over Taj Mahal", es: "Paseo en helicóptero al atardecer sobre el Taj Mahal", pt: "Passeio de helicóptero ao entardecer sobre o Taj Mahal" },
      { en: "Couples Ayurvedic spa ritual package", es: "Ritual de spa ayurvédico para parejas", pt: "Ritual de spa ayurvédico para casais" }
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

