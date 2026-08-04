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

// ----------------------------------------------------
// STATE DATA (seed defaults - overridden by src/data/fallback/states.json)
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
    cities: []
  }
];

// ----------------------------------------------------
// TOUR PACKAGES (seed defaults - overridden by tour_packages.json)
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
  }
];

// ----------------------------------------------------
// CUISINES & FOODS (seed defaults - overridden by foods.json)
// ----------------------------------------------------
export const foodsData: FoodData[] = [
  {
    slug: "butter-chicken",
    title: { en: "Butter Chicken (Murgh Makhani)", es: "Pollo a la Mantequilla", pt: "Frango na Manteiga" },
    category: "North Indian",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800",
    gallery: [],
    history: { en: "Created in Delhi in the 1950s.", es: "Creado en Delhi en los años 1950.", pt: "Criado em Deli nos anos 1950." },
    ingredients: [{ en: "Tandoori chicken", es: "Pollo tandoori", pt: "Frango tandoori" }],
    origin: { en: "New Delhi, India", es: "Nueva Delhi, India", pt: "Nova Deli, Índia" },
    region: "North India",
    bestCities: [{ en: "New Delhi", es: "Nueva Delhi", pt: "Nova Deli" }],
    bestRestaurants: [{ name: "Moti Mahal", city: "New Delhi" }],
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
// TRAVEL BLOGS DATA (seed defaults - overridden by blogs.json)
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
  }
];

// ----------------------------------------------------
// TESTIMONIALS (seed defaults - overridden by testimonials.json)
// ----------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Alvaro Gomez",
    location: "Madrid, Spain",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    quote: { en: "The best travel experience of our lives!", es: "¡La mejor experiencia de viaje de nuestras vidas!", pt: "A melhor experiência de viagem de nossas vidas!" },
    stars: 5
  },
  {
    id: "test-2",
    name: "Clara Santos",
    location: "Lisbon, Portugal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    quote: { en: "South India was spectacular.", es: "El sur de la India fue espectacular.", pt: "O sul da Índia foi espetacular." },
    stars: 5
  }
];
