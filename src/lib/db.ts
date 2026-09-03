import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getFirestore, collection, getDocs, doc, setDoc, getDoc, 
  addDoc, updateDoc, deleteDoc 
} from "firebase/firestore";
import { 
  statesData, 
  foodsData, 
  blogsData, 
  testimonials as initialTestimonials, 
  tourPackages as initialTourPackages,
  StateData,
  FoodData,
  BlogData,
  TourPackage,
  Testimonial
} from "@/data/mockData";
import { additionalStates, additionalPackages, additionalFoods, additionalBlogs } from "@/data/additionalData";
// Load pre-built states data directly from filesystem at module init
import fs from "fs";
import path from "path";

// Read states.json synchronously at module initialization
let statesJsonArray: any[] = [];
let citiesJsonArray: any[] = [];
try {
  const statesFilePath = path.join(process.cwd(), "src", "data", "fallback", "states.json");
  if (fs.existsSync(statesFilePath)) {
    statesJsonArray = JSON.parse(fs.readFileSync(statesFilePath, "utf-8"));
  }
  const citiesFilePath = path.join(process.cwd(), "src", "data", "fallback", "cities.json");
  if (fs.existsSync(citiesFilePath)) {
    citiesJsonArray = JSON.parse(fs.readFileSync(citiesFilePath, "utf-8"));
  }
} catch (e) {
  // Fallback silently
}

// Use fallback JSON if available, otherwise fall back to mockData merge
const mergedStates: any[] = (statesJsonArray && statesJsonArray.length > 0) ? statesJsonArray : [...statesData, ...additionalStates];
const mergedCities: any[] = (citiesJsonArray && citiesJsonArray.length > 0) ? citiesJsonArray : [];
const mergedFoods = [...foodsData, ...additionalFoods];
const mergedBlogs = [...blogsData, ...additionalBlogs];
const mergedPackages = [...initialTourPackages, ...additionalPackages];

function cleanEmail(obj: any): any {
  if (!obj) return obj;
  if (typeof obj === "string") {
    return obj === "info@mhindiatrips.com" ? "mhindiatrips@gmail.com" : obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => cleanEmail(item));
  }
  if (typeof obj === "object") {
    const res: any = {};
    for (const key in obj) {
      res[key] = cleanEmail(obj[key]);
    }
    return res;
  }
  return obj;
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: any = null;
let firestore: any = null;
let useFirestore = false;

if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    firestore = getFirestore(app);
    useFirestore = true;
  } catch (e) {
    console.warn("Failed to initialize Firebase app in db.ts:", e);
    useFirestore = false;
  }
} else {
  useFirestore = false;
}

const FALLBACK_DIR = path.join(process.cwd(), "src", "data", "fallback");
try {
  if (!fs.existsSync(FALLBACK_DIR)) {
    fs.mkdirSync(FALLBACK_DIR, { recursive: true });
  }
} catch (e) {
  // fs might not be available on edge runtime (Netlify)
}

const getFilePath = (name: string) => path.join(FALLBACK_DIR, `${name}.json`);

const loadLocalData = (name: string, defaultData: any) => {
  try {
    const filePath = getFilePath(name);
    if (!fs.existsSync(filePath)) {
      // File doesn't exist - write default and return
      fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), "utf-8");
      return defaultData;
    }
    const raw = fs.readFileSync(filePath, "utf-8");
    const existing = JSON.parse(raw);
    return existing;
  } catch (e) {
    // fs operations might fail on serverless/edge — fall back to in-memory data
    return defaultData;
  }
};

const saveLocalData = (name: string, data: any) => {
  try {
    const filePath = getFilePath(name);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (e) {
    // Silently fail on serverless/edge where fs is not available
  }
};

// Initialize cache from local storage if available
let inquiriesCache = loadLocalData("inquiries", []);
let blogsCache = loadLocalData("blogs", mergedBlogs);
let statesCache = loadLocalData("states", mergedStates);
let citiesCache = loadLocalData("cities", mergedCities);
if (!statesCache || statesCache.length === 0) statesCache = mergedStates;
if (!citiesCache || citiesCache.length === 0) citiesCache = mergedCities;
let foodsCache = loadLocalData("foods", mergedFoods);
let testimonialsCache = loadLocalData("testimonials", initialTestimonials);
let tourPackagesCache = loadLocalData("tour_packages", mergedPackages);

// Initialize settings cache with default system contact and auth details
let settingsCache = loadLocalData("settings", [
  {
    id: "contact_details",
    phone: "+91 9829989187",
    email: "mhindiatrips@gmail.com",
    whatsapp: "919829989187",
    address: "New Delhi, India",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM IST"
  },
  {
    id: "admin_credentials",
    customPassword: ""
  }
]);


// Default system pages that every website has
const defaultSystemPages = [
  {
    id: "homepage",
    isCustom: false,
    title: { en: "Homepage", es: "Página Principal", pt: "Página Inicial" },
    heroImage: "/images/rajasthan_fort_sunset.png",
    content: {
      slides: [
        {
          image: "/images/taj_mahal_sunrise.png",
          title: { en: "Experience India in Absolute Luxury", es: "Viaje a India en Lujo Absoluto", pt: "Viaje para a Índia em Luxo Absoluto" },
          desc: { en: "Curated itineraries featuring private guides, heritage palace hotels, and bespoke travel arrangements.", es: "Itinerarios a medida con guías privados, hoteles palacio y servicios exclusivos.", pt: "Itinerários à medida com guias privados, hotéis palácio e serviços exclusivos." },
          location: { en: "Taj Mahal, Agra", es: "Taj Mahal, Agra", pt: "Taj Mahal, Agra" },
          sub: { en: "BESPOKE PRIVATE TOURS", es: "TOURS PRIVADOS A MEDIDA", pt: "TOURS PRIVADOS SOB MEDIDA" },
          cta1Text: { en: "See Our Packages", es: "Ver Paquetes", pt: "Ver Pacotes" },
          cta1Link: "/packages",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/rajasthan_fort_sunset.png",
          title: { en: "The Royal Magic of Rajasthan", es: "La Magia Real de Rajastán", pt: "A Magia Real do Rajastão" },
          desc: { en: "Explore desert dunes, medieval forts, and dine inside authentic royal lakeside palaces.", es: "Explore dunas de arena, fuertes medievales y cene dentro de auténticos palacios reales.", pt: "Explore dunas de areia, fortes medievais e jante dentro de autênticos palácios reais." },
          location: { en: "Mehrangarh Fort, Jodhpur", es: "Fuerte Mehrangarh, Jodhpur", pt: "Forte Mehrangarh, Jodhpur" },
          sub: { en: "HERITAGE PALACES", es: "PALACIOS HISTÓRICOS", pt: "PALÁCIOS HISTÓRICOS" },
          cta1Text: { en: "Explore Rajasthan", es: "Explorar Rajastán", pt: "Explorar Rajastão" },
          cta1Link: "/destinations/rajasthan",
          cta2Text: { en: "Royal Packages", es: "Paquetes Reales", pt: "Pacotes Reais" },
          cta2Link: "/packages"
        },
        {
          image: "/images/kerala_backwaters_houseboat.png",
          title: { en: "Tropical Serenity in Kerala", es: "Serenidad Tropical en Kerala", pt: "Serenidade Tropical em Kerala" },
          desc: { en: "Cruise through emerald backwaters and rejuvenate with authentic wellness Ayurvedic rituals.", es: "Navegue por canales de esmeralda y rejuvenezca con auténticos rituales ayurvédicos.", pt: "Navegue por canais de esmeralda e rejuveneça com autênticos rituais ayurvédicos." },
          location: { en: "Backwaters, Alleppey", es: "Remansos de Alleppey, Kerala", pt: "Canais de Alleppey, Kerala" },
          sub: { en: "HOLISTIC RETREATS", es: "RETIROS HOLÍSTICOS", pt: "RETIROS HOLÍSTICOS" },
          cta1Text: { en: "Kerala Retreats", es: "Kerala Retiros", pt: "Retiros Kerala" },
          cta1Link: "/destinations/kerala",
          cta2Text: { en: "Plan My Trip", es: "Planear mi Viaje", pt: "Planear minha Viagem" },
          cta2Link: "/contact"
        },
        {
          image: "/images/Jaipur.jpg",
          title: { en: "Pink City Wonders of Jaipur", es: "Maravillas de la Ciudad Rosa de Jaipur", pt: "Maravilhas da Cidade Rosa de Jaipur" },
          desc: { en: "Marvel at the astronomical Jantar Mantar and the beautiful honeycomb structure of Hawa Mahal.", es: "Maravíllate con el astronómico Jantar Mantar y la hermosa estructura de Hawa Mahal.", pt: "Maravilhe-se con el astronómico Jantar Mantar y la hermosa estructura de Hawa Mahal." },
          location: { en: "Hawa Mahal, Jaipur", es: "Hawa Mahal, Jaipur", pt: "Hawa Mahal, Jaipur" },
          sub: { en: "ROYAL ARCHITECTURE", es: "ARQUITECTURA REAL", pt: "ARQUITETURA REAL" },
          cta1Text: { en: "Explore Jaipur", es: "Explorar Jaipur", pt: "Explorar Jaipur" },
          cta1Link: "/destinations/rajasthan",
          cta2Text: { en: "Inquire Now", es: "Planear Ahora", pt: "Planejar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/Udaipur.jpg",
          title: { en: "Udaipur: Venice of the East", es: "Udaipur: La Venecia del Este", pt: "Udaipur: A Veneza do Oriente" },
          desc: { en: "Sail across shimmering Lake Pichola and stay in floating marble palaces under the stars.", es: "Navega por el reluciente lago Pichola y alójate en palacios de mármol flotantes.", pt: "Navegue pelo brilhante Lago Pichola e hospede-se em palácios de mármore flutuantes." },
          location: { en: "Lake Pichola, Udaipur", es: "Lago Pichola, Udaipur", pt: "Lago Pichola, Udaipur" },
          sub: { en: "ROMANTIC ESCAPES", es: "ESCAPADAS ROMÁNTICAS", pt: "ESCAPADAS ROMÂNTICAS" },
          cta1Text: { en: "See Packages", es: "Ver Paquetes", pt: "Ver Pacotes" },
          cta1Link: "/packages",
          cta2Text: { en: "Inquire Now", es: "Planear Ahora", pt: "Planejar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/varanasi.jpg",
          title: { en: "Spiritual Awakenings in Varanasi", es: "Despertar Espiritual en Varanasi", pt: "Despertar Espiritual em Varanasi" },
          desc: { en: "Witness the intense devotion of evening Ganga Aarti ceremonies by the sacred ghats.", es: "Presencie la intensa devoción de las ceremonias nocturnas de Ganga Aarti junto a los ghats.", pt: "Assista à intensa devoção das cerimônias noturnas de Ganga Aarti junto aos ghats." },
          location: { en: "Ganga Ghats, Varanasi", es: "Ghats del Ganges, Varanasi", pt: "Ghats do Ganges, Varanasi" },
          sub: { en: "SACRED PLACES", es: "LUGARES SAGRADOS", pt: "LUGARES SAGRADOS" },
          cta1Text: { en: "Spiritual Itineraries", es: "Itinerarios Espirituales", pt: "Roteiros Espirituais" },
          cta1Link: "/destinations/uttar-pradesh",
          cta2Text: { en: "Inquire Now", es: "Planear Ahora", pt: "Planejar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/goa.jpg",
          title: { en: "Golden Sands & Heritage of Goa", es: "Arenas Doradas y Patrimonio de Goa", pt: "Areias Douradas e Patrimônio de Goa" },
          desc: { en: "Relax on pristine tropical beaches and explore colonial Portuguese churches in old Goa.", es: "Relájese en playas tropicales y explore las iglesias coloniales portuguesas en el viejo Goa.", pt: "Relaxe em praias tropicais e explore as igrejas coloniais portuguesas na antiga Goa." },
          location: { en: "Baga & Old Goa, Goa", es: "Playas e Historia, Goa", pt: "Praias e História, Goa" },
          sub: { en: "BEACH LUXURY", es: "LUJO DE PLAYA", pt: "LUXO DE PRAIA" },
          cta1Text: { en: "Explore Goa", es: "Explorar Goa", pt: "Explorar Goa" },
          cta1Link: "/destinations/goa",
          cta2Text: { en: "Plan Itinerary", es: "Planear Viaje", pt: "Planejar Roteiro" },
          cta2Link: "/contact"
        },
        {
          image: "/images/munnar.jpg",
          title: { en: "Misty Tea Hills of Munnar", es: "Colinas de Té de Munnar", pt: "Colinas de Chá de Munnar" },
          desc: { en: "Breathe the fresh mountain air of rolling tea estates and misty peaks in South India.", es: "Respire el aire fresco de la montaña en las plantaciones de té en el sur de la India.", pt: "Respire o ar fresco da montanha nas plantações de chá no sul da Índia." },
          location: { en: "Munnar Tea Estates, Kerala", es: "Plantaciones de Munnar, Kerala", pt: "Plantações de Munnar, Kerala" },
          sub: { en: "HIMALAYAS & HILLS", es: "MONTAÑAS Y COLINAS", pt: "MONTANHAS E COLINAS" },
          cta1Text: { en: "Kerala Guides", es: "Guías de Kerala", pt: "Guias de Kerala" },
          cta1Link: "/destinations/kerala",
          cta2Text: { en: "Inquire Now", es: "Planear Ahora", pt: "Planejar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/ranthambore.jpg",
          title: { en: "Tiger Safaris in Ranthambore", es: "Safari de Tigres en Ranthambore", pt: "Safáris de Tigre em Ranthambore" },
          desc: { en: "Search for the majestic Royal Bengal Tiger in the ancient hunting grounds of Maharajas.", es: "Busque al tigre de Bengala en los antiguos campos de caza de los Maharajás.", pt: "Procure o tigre de Bengala nos antigos campos de caça dos Maharajas." },
          location: { en: "National Park, Ranthambore", es: "Parque Ranthambore, Rajasthan", pt: "Parque Ranthambore, Rajastão" },
          sub: { en: "WILDLIFE ADVENTURES", es: "SAFARIS SALVAJES", pt: "SAFÁRIS SELVAGENS" },
          cta1Text: { en: "Wildlife Packages", es: "Paquetes de Vida Silvestre", pt: "Pacotes de Vida Selvagem" },
          cta1Link: "/packages",
          cta2Text: { en: "Inquire Now", es: "Planear Ahora", pt: "Planejar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/andaman islands.jpg",
          title: { en: "Andaman Islands: Tropical Blue Havens", es: "Islas Andamán: Paraíso Azul Tropical", pt: "Ilhas Andaman: Paraíso Azul Tropical" },
          desc: { en: "Swim in turquoise waters and dive into the pristine marine life and coral reefs of Havelock.", es: "Nade en aguas turquesas y explore los arrecifes de coral en la isla Havelock.", pt: "Nade em águas turquesas e explore os recifes de coral na ilha Havelock." },
          location: { en: "Radhanagar Beach, Havelock", es: "Playa Radhanagar, Havelock", pt: "Praia Radhanagar, Havelock" },
          sub: { en: "ISLAND GETAWAYS", es: "ESCAPADAS DE ISLAS", pt: "ESCAPADAS EM ILHAS" },
          cta1Text: { en: "Island Tours", es: "Tours de Islas", pt: "Tours nas Ilhas" },
          cta1Link: "/packages",
          cta2Text: { en: "Inquire Now", es: "Planear Ahora", pt: "Planejar Agora" },
          cta2Link: "/contact"
        }
      ],
      stats: [
        { value: 12, suffix: "", label: { en: "Years of experience", es: "Años de experiencia", pt: "Anos de experiência" } },
        { value: 97, suffix: "%", label: { en: "Retention rate", es: "Tasa de retención", pt: "Taxa de retenção" } },
        { value: 2400, suffix: "+", label: { en: "Happy travelers served", es: "Viajeros satisfechos", pt: "Viajantes satisfeitos" } },
        { value: 15, suffix: "+", label: { en: "Indian states covered", es: "Estados indios cubiertos", pt: "Estados indianos cobertos" } }
      ],
      philosophy: {
        image: "/images/rajasthan_fort_sunset.png",
        title: { en: "Why Travelers Choose MH India Trips", es: "Por Qué Elegir MH India Trips", pt: "Por Que Escolher a MH India Trips" },
        subtitle: { en: "Our Philosophy", es: "Nuestra Filosofía", pt: "Nossa Filosofia" }
      },
      howItWorks: [
        { title: { en: "Select or Customize", es: "Seleccione o Personalice", pt: "Selecione ou Personalize" }, desc: { en: "Browse our signature routes or share your bucket-list regions with our specialist desk.", es: "Examine nuestras rutas exclusivas o comparta sus regiones deseadas.", pt: "Examine nossas rotas exclusivas ou compartilhe suas regiões desejadas." } },
        { title: { en: "Co-Design with an Advisor", es: "Co-diseñe con un Asesor", pt: "Co-planeje com um Consultor" }, desc: { en: "Your dedicated destination expert builds the details: hotel classes, private vehicles, and local guides.", es: "Un especialista diseña sus detalles: hoteles, vehículos y guías.", pt: "Um especialista planeja seus detalhes: hotéis, veículos e guias." } },
        { title: { en: "Board & Travel in Peace", es: "Viaje con Tranquilidad", pt: "Viaje com Tranquilidade" }, desc: { en: "Our on-ground ops desk coordinates all logistics, including professional drivers and 24/7 concierge.", es: "Nuestro equipo gestiona toda la logística con choferes y asistencia 24/7.", pt: "Nossa equipe gere toda a logística com motoristas e assistência 24/7." } }
      ],
      inclusions: [
        { title: { en: "Private Professional Chauffeur", es: "Chofer Profesional Privado", pt: "Motorista Profissional Privado" }, desc: { en: "Air-conditioned luxury SUVs with verified drivers.", es: "SUVs premium con choferes verificados.", pt: "SUVs premium com motoristas verificados." }, icon: "car" },
        { title: { en: "Licensed Local Guides", es: "Guías Certificados", pt: "Guias Certificados" }, desc: { en: "Government-certified guides at every heritage site.", es: "Guías oficiales en cada monumento.", pt: "Guias oficiais em cada monumento." }, icon: "compass" },
        { title: { en: "Boutique & Heritage Stays", es: "Hoteles de Patrimonio", pt: "Hotéis de Patrimônio" }, desc: { en: "Hand-curated bookings in restored royal palaces.", es: "Estancias en palacios restaurados.", pt: "Estadías em palácios restaurados." }, icon: "hotel" },
        { title: { en: "24/7 Concierge Support", es: "Soporte 24/7", pt: "Suporte 24/7" }, desc: { en: "Direct WhatsApp line to our operations desk.", es: "Contacto directo por WhatsApp.", pt: "Contacto direto por WhatsApp." }, icon: "headset" }
      ],
      foodSection: {
        image: "/images/indian_cuisine_feast.png",
        title: { en: "Flavor Journeys", es: "Viajes de Sabor", pt: "Viagens de Sabor" },
        subtitle: { en: "Culinary Heritage", es: "Patrimonio Culinario", pt: "Patrimônio Culinário" },
        desc: { en: "Taste the heritage of royal Mughal kitchens and aromatic local street spices.", es: "Saboree el patrimonio de las cocinas reales mogoles.", pt: "Saboreie o patrimônio das cozinhas reais mogóis." }
      },
      ctaBanner: {
        title: { en: "Begin Your Private Passage", es: "Comience Su Viaje Privado", pt: "Comece Sua Viagem Privada" },
        subtitle: { en: "Speak to a luxury travel advisor to draft your tailored itinerary.", es: "Hable con un asesor de viajes de lujo.", pt: "Fale com um consultor de viagens de luxo." },
        btnText: { en: "Inquire Now", es: "Planificar Ahora", pt: "Planejar Agora" }
      },
      faqs: [
        { q: { en: "Is it safe to travel to India?", es: "¿Es seguro viajar a la India?", pt: "É seguro viajar para a Índia?" }, a: { en: "Yes, India is generally safe for tourists. Our expert guides ensure your comfort and security at all times.", es: "Sí, generalmente segura para turistas.", pt: "Sim, geralmente segura para turistas." } },
        { q: { en: "What is the best time to visit India?", es: "¿Cuál es la mejor época?", pt: "Qual é a melhor época?" }, a: { en: "October to March is ideal for most regions. South India can be visited year-round.", es: "Octubre a marzo es ideal.", pt: "Outubro a março é ideal." } },
        { q: { en: "Do I need a visa for India?", es: "¿Necesito visa?", pt: "Preciso de visto?" }, a: { en: "Yes, most nationalities require a visa. The e-Visa online is processed within 72 hours.", es: "Sí, la mayoría necesitan visa.", pt: "Sim, a maioria precisa de visto." } },
        { q: { en: "Can I customize my travel package?", es: "¿Puedo personalizar mi viaje?", pt: "Posso personalizar?" }, a: { en: "Absolutely. Every detail is tailormade — route, duration, hotels, and activities.", es: "Por supuesto, todo se personaliza.", pt: "Certamente, tudo é personalizado." } },
        { q: { en: "How is local transportation managed?", es: "¿Cómo es el transporte?", pt: "Como é o transporte?" }, a: { en: "We provide private luxury SUVs with experienced English-speaking drivers.", es: "Vehículos privados de lujo con conductores.", pt: "Veículos de luxo com motoristas." } }
      ],
      destinationsSection: {
        subtitle: { en: "Custom Destinations", es: "Destinos Personalizados", pt: "Destinos Personalizados" },
        title: { en: "Destinations in India", es: "Destinos en India", pt: "Destinos na Índia" },
        desc: { en: "From the grand palaces of Rajasthan to the serene canals of Kerala, discover a tailored world.", es: "Desde los palacios de Rajasthan hasta los canales de Kerala.", pt: "Dos palácios do Rajastão aos canais de Kerala." }
      },
      packagesSection: {
        subtitle: { en: "Featured Journeys", es: "Viajes Destacados", pt: "Viagens Em Destaque" },
        title: { en: "Travel Packages", es: "Paquetes de Viaje", pt: "Pacotes de Viagem" },
        desc: { en: "Elite itineraries hand-designed by our specialist destination managers.", es: "Itinerarios de élite diseñados por especialistas.", pt: "Itinerários de elite desenhados por especialistas." }
      },
      testimonialsSection: {
        subtitle: { en: "Traveler Whispers", es: "Ecos de Viajeros", pt: "Sussurros de Viajantes" },
        title: { en: "What Our Guests Say", es: "Lo Que Dicen Nuestros Huéspedes", pt: "O Que Dizem Nossos Hóspedes" }
      },
      blogsSection: {
        subtitle: { en: "Travel Inspiration", es: "Inspiración de Viaje", pt: "Inspiração de Viagem" },
        title: { en: "Travel Blogs", es: "Blogs de Viaje", pt: "Blogs de Viagem" },
        desc: { en: "Curated stories, travel guides, and cultural insights from India's most enchanting destinations.", es: "Historias, guías y perspectivas culturales.", pt: "Histórias, guias e perspectivas culturais." }
      },
      monumentsSection: {
        btnText: { en: "View All Monuments", es: "Ver Todos los Monumentos", pt: "Ver Todos os Monumentos" }
      }
    }
  },
  {
    id: "about",
    isCustom: false,
    title: { en: "About Us", es: "Sobre Nosotros", pt: "Sobre Nós" },
    heroImage: "/images/kerala_backwaters_houseboat.png",
    content: {
      heroTitle: { en: "About MH India Trips", es: "Sobre MH India Trips", pt: "Sobre MH India Trips" },
      heroSubtitle: { en: "Your Trusted India Travel Partner", es: "Tu socio de viajes de confianza en India", pt: "Seu parceiro de viagem confiável na Índia" },
      missionTitle: { en: "Our Mission", es: "Nuestra Misión", pt: "Nossa Missão" },
      missionText: { en: "To create transformative travel experiences that connect discerning travelers with the authentic soul of India.", es: "Crear experiencias de viaje transformadoras.", pt: "Criar experiências de viagem transformadoras." },
      team: [
        { name: "Rahul Sharma", role: "Founder & Lead Travel Designer", img: "/images/team_rahul.png" },
        { name: "Priya Kapoor", role: "Senior Destination Expert", img: "/images/team_priya.png" },
        { name: "Vikram Singh", role: "Heritage & Culture Specialist", img: "/images/team_vikram.png" },
        { name: "Anita Desai", role: "Client Relations Manager", img: "/images/team_anita.png" }
      ]
    }
  },
  {
    id: "contact",
    isCustom: false,
    title: { en: "Contact Us", es: "Contáctenos", pt: "Fale Conosco" },
    heroImage: "/images/Jaipur.jpg",
    content: {
      heroTitle: { en: "Get In Touch", es: "Ponte en Contacto", pt: "Entre em Contato" },
      heroSubtitle: { en: "Plan your dream India journey", es: "Planifica tu viaje soñado a India", pt: "Planeje sua viagem dos sonhos à Índia" },
      addressLine: { en: "New Delhi, India", es: "Nueva Delhi, India", pt: "Nova Delhi, Índia" },
      email: { en: "mhindiatrips@gmail.com", es: "mhindiatrips@gmail.com", pt: "mhindiatrips@gmail.com" },
      phone: { en: "+91 9829989187", es: "+91 9829989187", pt: "+91 9829989187" },
    }
  },
  {
    id: "faq",
    isCustom: false,
    title: { en: "FAQ", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes" },
    heroImage: "/images/rajasthan.jpg",
    content: {
      heroTitle: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes" },
      heroSubtitle: { en: "Everything you need to know before visiting India", es: "Todo lo que necesitas saber antes de visitar India", pt: "Tudo o que precisa saber antes de visitar a Índia" },
    }
  },
  {
    id: "gallery",
    isCustom: false,
    title: { en: "Gallery", es: "Galería", pt: "Galeria" },
    heroImage: "/images/udaipur.jpg",
    content: {
      heroTitle: { en: "India Through Our Lens", es: "India a través de nuestro lente", pt: "Índia através das nossas lentes" },
      heroSubtitle: { en: "A visual journey across the subcontinent", es: "Un viaje visual por el subcontinente", pt: "Uma jornada visual pelo subcontinente" },
      images: [
        { src: "/images/taj_mahal_sunrise.png", alt: "Taj Mahal", span: "col-span-2 row-span-2" },
        { src: "/images/rajasthan_fort_sunset.png", alt: "Jaipur Palace", span: "col-span-1 row-span-1" },
        { src: "/images/kerala_backwaters_houseboat.png", alt: "Kerala Backwaters", span: "col-span-1 row-span-2" },
        { src: "/images/varanasi_ghats_aarti.png", alt: "Varanasi Ghats", span: "col-span-1 row-span-1" },
        { src: "/images/luxury_palace_train.png", alt: "Luxury Palace Train", span: "col-span-1 row-span-1" },
        { src: "/images/ranthambore_tiger_safari.png", alt: "Ranthambore Tiger Safari", span: "col-span-2 row-span-1" },
        { src: "/images/indian_cuisine_feast.png", alt: "Indian Cuisine Feast", span: "col-span-1 row-span-1" },
        { src: "/images/rajasthan_fort_sunset.png", alt: "Rajasthan Fort", span: "col-span-1 row-span-1" }
      ]
    }
  },
  {
    id: "monuments",
    isCustom: false,
    title: { en: "Monuments", es: "Monumentos", pt: "Monumentos" },
    heroImage: "/images/rajasthan_fort_sunset.png",
    content: {
      heroSub: { en: "Heritage & Architecture", es: "Patrimonio y Arquitectura", pt: "Patrimônio e Arquitetura" },
      heroTitle: { en: "Iconic Monuments of India", es: "Monumentos Icónicos de la India", pt: "Monumentos Icônicos da Índia" },
      heroDesc: { en: "Discover centuries-old palaces, grand Mughal forts, ancient temples, and UNESCO World Heritage sites.", es: "Descubra palacios centenarios, grandes fuertes mogoles y sitios del Patrimonio Mundial.", pt: "Descubra palácios centenários, grandes fortes mogóis e locais do Patrimônio Mundial." },
      featuredMonuments: [
        { name: "Taj Mahal", city: "Agra", state: "Uttar Pradesh", era: "1632 AD", image: "/images/taj_mahal_sunrise.png", desc: "A UNESCO World Heritage ivory-white marble mausoleum, widely considered the finest example of Mughal architecture and one of the New Seven Wonders of the World." },
        { name: "Amber Fort", city: "Jaipur", state: "Rajasthan", era: "1592 AD", image: "/images/Jaipur.jpg", desc: "A majestic sandstone and marble fortress perched on a hillside, featuring stunning mirror work, elephant rides, and panoramic views of Maota Lake." },
        { name: "Mehrangarh Fort", city: "Jodhpur", state: "Rajasthan", era: "1459 AD", image: "/images/rajasthan_fort_sunset.png", desc: "One of India's largest forts towering 125 meters above the Blue City, with intricate carvings, expansive courtyards, and a museum of royal artifacts." },
        { name: "Hawa Mahal", city: "Jaipur", state: "Rajasthan", era: "1799 AD", image: "/images/Jaipur.jpg", desc: "The iconic Palace of Winds with 953 small windows designed for royal women to observe street festivals without being seen from outside." },
        { name: "Mysore Palace", city: "Mysore", state: "Karnataka", era: "1912 AD", image: "/images/karanataka.jpg", desc: "A grand Indo-Saracenic palace illuminated by 97,000 lights on Sundays and public holidays, home to the Wadiyar royal family's treasures." },
        { name: "Hampi Ruins", city: "Hampi", state: "Karnataka", era: "14th Century", image: "/images/hampi-ruins.jpg", desc: "The sprawling UNESCO ruins of the Vijayanagara Empire, featuring over 1,600 surviving monuments including temples, royal enclosures, and market streets." }
      ]
    }
  },
  {
    id: "privacy",
    isCustom: false,
    title: { en: "Privacy Policy", es: "Política de Privacidad", pt: "Política de Privacidade" },
    heroImage: "",
    content: {
      body: { en: "<p>Your privacy is important to us. This policy explains how we collect and use your data.</p>", es: "<p>Su privacidad es importante para nosotros.</p>", pt: "<p>A sua privacidade é importante para nós.</p>" },
    }
  },
  {
    id: "terms",
    isCustom: false,
    title: { en: "Terms & Conditions", es: "Términos y Condiciones", pt: "Termos e Condições" },
    heroImage: "",
    content: {
      body: { en: "<p>These terms govern your use of MH India Trips services.</p>", es: "<p>Estos términos rigen el uso de los servicios de MH India Trips.</p>", pt: "<p>Estes termos regem a utilização dos serviços da MH India Trips.</p>" },
    }
  },
  {
    id: "attractions",
    isCustom: false,
    title: { en: "Attractions", es: "Atracciones", pt: "Atrações" },
    heroImage: "/images/rajasthan_fort_sunset.png",
    content: {
      heroTitle: { en: "Top Attractions in India", es: "Principales Atracciones en la India", pt: "Principais Atrações na Índia" },
      heroSubtitle: { en: "Explore India's most breathtaking sites, temples, and palaces", es: "Explore los sitios, templos y palacios más impresionantes de la India", pt: "Explore os locais, templos e palácios mais impressionantes da Índia" },
      featuredAttractions: [
        { name: "Taj Mahal", city: "Agra", state: "Uttar Pradesh", image: "/images/taj_mahal_sunrise.png", desc: "The legendary white marble monument of love, a UNESCO World Heritage site and global icon." },
        { name: "Amber Fort", city: "Jaipur", state: "Rajasthan", image: "/images/Jaipur.jpg", desc: "A magnificent hilltop fortress featuring detailed royal palace halls, courts, and lake views." },
        { name: "Mehrangarh Fort", city: "Jodhpur", state: "Rajasthan", image: "/images/rajasthan_fort_sunset.png", desc: "A massive fort overlooking the Blue City, housing royal relics, courtyards, and palace galleries." },
        { name: "Kerala Backwaters", city: "Alleppey", state: "Kerala", image: "/images/kerala_backwaters_houseboat.png", desc: "A serene network of canals, lakes, and rivers traversed by traditional luxury houseboats." },
        { name: "Ranthambore Tiger Reserve", city: "Sawai Madhopur", state: "Rajasthan", image: "/images/ranthambore_tiger_safari.png", desc: "A world-renowned wildlife sanctuary, home to the Royal Bengal Tigers and ancient fortress ruins." },
        { name: "Hampi Ruins", city: "Hampi", state: "Karnataka", image: "/images/hampi-ruins.jpg", desc: "The ancient capital of the Vijayanagara Empire, showcasing dramatic boulder landscapes and temples." }
      ]
    }
  },
  {
    id: "blog",
    isCustom: false,
    title: { en: "Travel Blog", es: "Blog de Viajes", pt: "Blog de Viagens" },
    heroImage: "/images/varanasi_ghats_aarti.png",
    content: {
      heroTitle: { en: "Stories & Insights", es: "Historias e Ideas", pt: "Histórias e Inspirações" },
      heroSubtitle: { en: "Expert tips, cultural insights, and luxury travel secrets", es: "Consejos de expertos, ideas culturales y secretos de viajes de lujo", pt: "Dicas de especialistas, insights culturais e segredos de viagem" }
    }
  },
  {
    id: "destinations",
    isCustom: false,
    title: { en: "Destinations Catalog", es: "Catálogo de Destinos", pt: "Catálogo de Destinos" },
    heroImage: "/images/rajasthan_fort_sunset.png",
    content: {
      heroTitle: { en: "Explore India's Regions", es: "Explore las Regiones de la India", pt: "Explore as Regiões da Índia" },
      heroSubtitle: { en: "From the grand palaces of Rajasthan to the serene canals of Kerala", es: "Desde los grandes palacios de Rajastán hasta los canales de Kerala", pt: "Dos grandes palácios do Rajastão aos canais de Kerala" }
    }
  },
  {
    id: "packages",
    isCustom: false,
    title: { en: "Travel Packages Catalog", es: "Catálogo de Paquetes", pt: "Catálogo de Pacotes" },
    heroImage: "/images/luxury_palace_train.png",
    content: {
      heroTitle: { en: "Travel Packages", es: "Paquetes de Viaje", pt: "Pacotes de Viagem" },
      heroSubtitle: { en: "Elite itineraries hand-designed by our specialist managers", es: "Itinerarios de élite diseñados a mano por nuestros expertos", pt: "Roteiros de elite desenhados por nossos especialistas" }
    }
  },
  {
    id: "food",
    isCustom: false,
    title: { en: "Food Guide", es: "Guía de Comida", pt: "Guia Gastronômico" },
    heroImage: "/images/indian_cuisine_feast.png",
    content: {
      heroTitle: { en: "Taste of India Culinary Guide", es: "Guía Culinaria Sabor de la India", pt: "Guia Culinário Sabor da Índia" },
      heroSubtitle: { en: "Explore the rich culinary heritage and regional flavors of India", es: "Explore el rico patrimonio culinario y sabores de la India", pt: "Explore o rico patrimônio culinário e sabores da Índia" }
    }
  },
  {
    id: "travel-info-visa-entry-requirements",
    isCustom: false,
    title: { en: "Travel Info: Visa & Entry Requirements", es: "Guía de Viaje: Visa y Entrada", pt: "Guia de Viagem: Visto e Entrada" },
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format",
    content: {
      heroTitle: { en: "Visa & Entry Requirements", es: "Visa y Requisitos de Entrada", pt: "Visto e Requisitos de Entrada" },
      heroSubtitle: { en: "Everything you need to enter India seamlessly", es: "Todo lo necesario para entrar a India", pt: "Tudo que precisa para entrar na Índia" },
      sections: [
        {
          heading: { en: "e-Visa Overview", es: "Resumen de e-Visa", pt: "Visão Geral do e-Visto" },
          content: { en: "India offers an electronic visa (e-Visa) system for citizens of 150+ countries. The e-Tourist Visa allows stays of up to 90 days for tourism, sightseeing, and casual visits. Applications are processed online within 72 hours, and the visa is valid for 1 year from the date of issue with double entry permitted.", es: "India ofrece un sistema de visa electrónica para ciudadanos de más de 150 países. La e-Visa turística permite estancias de hasta 90 días.", pt: "A Índia oferece um sistema de visto eletrônico para cidadãos de mais de 150 países." }
        },
        {
          heading: { en: "Required Documents", es: "Documentos Necesarios", pt: "Documentos Necessários" },
          bullets: { en: ["Valid passport with 6+ months validity", "Recent passport-size photo (white background)", "Return flight ticket confirmation", "Hotel booking or tour itinerary", "Sufficient funds proof (bank statement)"], es: ["Pasaporte válido con 6+ meses de validez", "Foto reciente tamaño pasaporte", "Confirmación de vuelo de regreso", "Reserva de hotel o itinerario", "Prueba de fondos suficientes"], pt: ["Passaporte válido com 6+ meses de validade", "Foto recente tamanho passaporte", "Confirmação de voo de regresso", "Reserva de hotel ou roteiro", "Prova de fundos suficientes"] }
        },
        {
          heading: { en: "Processing Time & Fees", es: "Tiempo de Procesamiento", pt: "Tempo de Processamento" },
          content: { en: "Standard processing takes 3-5 business days. Urgent processing is available within 24-48 hours. Visa fees range from $25-80 depending on nationality and duration. We recommend applying at least 2 weeks before your travel date. MH India Trips provides complimentary visa assistance for all booked guests.", es: "El procesamiento estándar toma 3-5 días hábiles. Las tarifas varían de $25-80.", pt: "O processamento padrão leva 3-5 dias úteis. As taxas variam de $25-80." }
        },
        {
          heading: { en: "Airport Arrival Tips", es: "Consejos de Llegada", pt: "Dicas de Chegada" },
          content: { en: "Upon arrival at Delhi, Mumbai, or any major airport, proceed to the e-Visa immigration counter. Keep a printed copy of your e-Visa approval. Immigration typically takes 15-30 minutes. Our private chauffeurs will be waiting at the arrivals hall with a personalized name board. All MH India Trips guests receive VIP airport fast-track assistance.", es: "Al llegar a Delhi, Mumbai o cualquier aeropuerto principal, diríjase al mostrador de e-Visa.", pt: "Ao chegar em Delhi, Mumbai ou qualquer aeropuerto principal, dirija-se ao balcão de e-Visto." }
        }
      ]
    }
  },
  {
    id: "travel-info-best-time-climate",
    isCustom: false,
    title: { en: "Travel Info: Best Time & Climate", es: "Guía de Viaje: Mejor época y clima", pt: "Guia de Viagem: Melhor época e clima" },
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format",
    content: {
      heroTitle: { en: "Best Time to Visit & Climate", es: "Mejor Época para Visitar", pt: "Melhor Época para Visitar" },
      heroSubtitle: { en: "Season-by-season guide to India's diverse climates", es: "Guía estación por estación del clima de India", pt: "Guia estação por estação do clima da Índia" },
      sections: [
        {
          heading: { en: "Peak Season (October - March)", es: "Temporada Alta (Octubre - Marzo)", pt: "Alta Temporada (Outubro - Março)" },
          content: { en: "The ideal time for most of India. Pleasant temperatures (15-30°C), clear skies, and minimal rainfall. Perfect for Rajasthan, Kerala, Goa, Delhi, Agra, and most heritage destinations. December-January can be cool in the north (5-15°C). This is wedding season, so book accommodations and flights well in advance.", es: "El momento ideal para la mayor parte de India. Temperaturas agradables, cielos despejados.", pt: "O momento ideal para a maior parte da Índia. Temperaturas agradáveis, céus limpos." }
        },
        {
          heading: { en: "Shoulder Season (April - June)", es: "Temporada Media (Abril - Junio)", pt: "Meia Temporada (Abril - Junho)" },
          content: { en: "Hot in plains (35-45°C) but excellent for Himalayan hill stations like Shimla, Manali, Darjeeling, and Ladakh. Less crowded, better hotel rates. Ideal for mountain retreats and tea plantation tours. Southern India remains manageable with beach destinations.", es: "Caluroso en las llanuras pero excelente para estaciones de montaña del Himalaya.", pt: "Quente nas planícies mas excelente para estações de montanha do Himalaia." }
        },
        {
          heading: { en: "Monsoon Season (July - September)", es: "Temporada de Monzón (Julio - Septiembre)", pt: "Temporada de Monção (Julho - Setembro)" },
          content: { en: "Lush green landscapes, Ayurvedic rejuvenation season in Kerala, and dramatic waterfalls. Rajasthan gets refreshing rains. Avoid coastal areas and hill roads during heavy rains. Best for: Kerala Ayurveda retreats, Rajasthan photography, Meghalaya living root bridges.", es: "Paisajes verdes exuberantes, temporada de Ayurveda en Kerala.", pt: "Paisagens verdes exuberantes, temporada de Ayurveda em Kerala." }
        },
        {
          heading: { en: "Regional Climate Guide", es: "Guía Climática Regional", pt: "Guía Climática Regional" },
          bullets: { en: ["North India (Delhi, Agra, Rajasthan): Best Oct-Mar, hot Apr-Jun", "South India (Kerala, Karnataka, Tamil Nadu): Year-round, peak Nov-Mar", "Himalayas (Ladakh, Himachal, Uttarakhand): May-Oct for trekking", "East India (Kolkata, Darjeeling, NE States): Oct-Mar ideal", "Goa & Beaches: Nov-Feb peak, monsoon Jul-Sep for quiet beauty"], es: ["Norte: Oct-Mar ideal", "Sur: Todo el año, pico Nov-Mar", "Himalaya: May-Oct para senderismo", "Este: Oct-Mar ideal", "Goa y Playas: Nov-Feb pico"], pt: ["Norte: Out-Mar ideal", "Sul: Todo o ano, pico Nov-Mar", "Himalaia: Mai-Out para trekking", "Leste: Out-Mar ideal", "Goa e Praias: Nov-Fev pico"] }
        }
      ]
    }
  },
  {
    id: "travel-info-solo-female-travel",
    isCustom: false,
    title: { en: "Travel Info: Solo Female Safety", es: "Guía de Viaje: Mujer sola por India", pt: "Guia de Viagem: Mulher sozinha na Índia" },
    heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format",
    content: {
      heroTitle: { en: "Solo Female Travel Safety", es: "Viaje de Mujer Sola por India", pt: "Viagem de Mulher Sozinha na Índia" },
      heroSubtitle: { en: "India welcomes solo women travelers with warmth and safety", es: "India da la bienvenida a mujeres viajeras solas", pt: "A Índia dá as boas-vindas a mulheres viajantes sozinhas" },
      sections: [
        {
          heading: { en: "Safety With MH India Trips", es: "Seguridad con MH India Trips", pt: "Segurança con MH India Trips" },
          content: { en: "All our solo female travelers receive a dedicated female guide option, verified male drivers with background checks, 24/7 emergency concierge hotline, GPS-tracked vehicles, and vetted luxury hotel accommodations. We've safely hosted 500+ solo female travelers from 40+ countries with zero safety incidents.", es: "Todas nuestras viajeras solas reciben guía femenina dedicada, conductores verificados, línea de emergencia 24/7.", pt: "Todas as nossas viajantes sozinhas recebem guia feminina dedicada, motoristas verificados, linha de emergência 24/7." }
        },
        {
          heading: { en: "Dress Code & Cultural Tips", es: "Código de Vestimenta", pt: "Código de Vestimenta" },
          content: { en: "India is generally conservative. We recommend covering shoulders and knees at temples and rural areas. In cities like Delhi and Mumbai, western clothing is perfectly fine. Carry a light scarf for temple visits. Our guides will always advise on appropriate attire for each location.", es: "India es generalmente conservadora. Recomendamos cubrir hombros y rodillas en templos.", pt: "A Índia é geralmente conservadora. Recomendamos cobrir ombros e joelhos em templos." }
        },
        {
          heading: { en: "Recommended Destinations for Solo Women", es: "Destinos Recomendados", pt: "Destinos Recomendados" },
          bullets: { en: ["Kerala - Peaceful backwaters and wellness retreats", "Rajasthan - Palace stays with dedicated female staff", "Goa - Safe beach culture with international community", "Himachal Pradesh - Mountain retreats and yoga centers", "Udaipur - Romantic lake city with boutique hotels"], es: ["Kerala - Retiros de bienestar", "Rajastán - Palacios con personal femenino", "Goa - Cultura playera segura", "Himachal Pradesh - Retiros de montaña", "Udaipur - Ciudad romántica del lago"], pt: ["Kerala - Retiros de bem-estar", "Rajastão - Palácios com staff feminino", "Goa - Cultura praiana segura", "Himachal Pradesh - Retiros de montanha", "Udaipur - Cidade romântica do lago"] }
        },
        {
          heading: { en: "Emergency Contacts & Support", es: "Contactos de Emergencia", pt: "Contactos de Emergência" },
          content: { en: "Emergency police: 100 | Women helpline: 1091 | Tourist police: 1363. All MH India Trips guests receive our 24/7 WhatsApp concierge number. Our local team is always within 30-minute reach in all operating cities.", es: "Policía de emergencia: 100 | Línea de mujeres: 1091 | Policía turística: 1363.", pt: "Polícia de emergência: 100 | Linha feminina: 1091 | Polícia turística: 1363." }
        }
      ]
    }
  },
  {
    id: "travel-info-vaccinations-health",
    isCustom: false,
    title: { en: "Travel Info: Vaccines & Health", es: "Guía de Viaje: Vacunas y salud", pt: "Guia de Viagem: Vacinação e saúde" },
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format",
    content: {
      heroTitle: { en: "Vaccinations & Health Advice", es: "Vacunas y Salud", pt: "Vacinação e Saúde" },
      heroSubtitle: { en: "Stay healthy throughout your India journey", es: "Mantente saludable durante tu viaje a India", pt: "Mantenha-se saudável durante sua viagem à Índia" },
      sections: [
        {
          heading: { en: "Recommended Vaccinations", es: "Vacunas Recomendadas", pt: "Vacinas Recomendadas" },
          bullets: { en: ["Hepatitis A & B (strongly recommended)", "Typhoid fever vaccine", "Tetanus-Diphtheria booster if needed", "Japanese Encephalitis (for rural/extended stays)", "Rabies (if planning wildlife activities)", "COVID-19 (latest booster recommended)"], es: ["Hepatitis A y B", "Vacuna contra fiebre tifoidea", "Refuerzo tétanos-difteria", "Encefalitis japonesa (estancias rurales)", "Rabia (actividades con vida silvestre)", "COVID-19 (refuerzo recomendado)"], pt: ["Hepatite A e B", "Vacina contra febre tifóide", "Reforço tétano-difteria", "Encefalite japonesa (estadias rurais)", "Raiva (atividades com vida selvagem)", "COVID-19 (reforço recomendado)"] }
        },
        {
          heading: { en: "Medicine Kit Essentials", es: "Kit Médico Esencial", pt: "Kit Médico Essencial" },
          content: { en: "Carry: anti-diarrheal (Imodium), rehydration salts, antihistamines, sunscreen SPF50+, insect repellent (DEET-based), hand sanitizer, water purification tablets, and any personal prescriptions. Pharmacies are widely available in India and most medicines are affordable over-the-counter.", es: "Lleve: antidiarreico, sales de rehidratación, antihistamínicos, protector solar SPF50+, repelente de insectos.", pt: "Leve: antidiarreico, sais de reidratação, anti-histamínicos, protetor solar SPF50+, repelente de insetos." }
        },
        {
          heading: { en: "Food & Water Safety", es: "Seguridad Alimentaria", pt: "Segurança Alimentar" },
          content: { en: "Drink only bottled or filtered water (our hotels provide complimentary purified water). Street food is an experience but stick to freshly cooked hot items. All MH India Trips restaurant recommendations are vetted for hygiene standards. We provide filtered water bottles in all private vehicles.", es: "Beba solo agua embotellada o filtrada. La comida callejera debe estar recién cocinada.", pt: "Beba apenas água engarrafada ou filtrada. A comida de rua deve estar recém cozinhada." }
        },
        {
          heading: { en: "Travel Insurance", es: "Seguro de Viaje", pt: "Seguro de Viagem" },
          content: { en: "We strongly recommend comprehensive travel insurance covering medical emergencies, trip cancellation, and baggage loss. India has excellent private hospitals in all major cities. MH India Trips maintains partnerships with top hospitals for priority access if needed.", es: "Recomendamos seguro de viaje completo que cubra emergencias médicas.", pt: "Recomendamos seguro de viagem completo que cubra emergências médicas." }
        }
      ]
    }
  },
  {
    id: "travel-info-packing-currency",
    isCustom: false,
    title: { en: "Travel Info: Packing & Currency Guide", es: "Guía de Viaje: Equipaje y moneda", pt: "Guia de Viagem: Mala e moeda" },
    heroImage: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1200&auto=format",
    content: {
      heroTitle: { en: "Packing List & Currency Tips", es: "Packing List & Currency Tips", pt: "Packing List & Currency Tips" },
      heroSubtitle: { en: "Pack smart for every Indian season and region", es: "Empaque inteligente para cada temporada", pt: "Faça as malas de forma inteligente para cada temporada" },
      sections: [
        {
          heading: { en: "Essential Packing List", es: "Lista Esencial", pt: "Lista Essencial" },
          bullets: { en: ["Light cotton clothing (layerable for temperature changes)", "Comfortable walking shoes and sandals", "Light scarf/shawl for temple visits", "Sunglasses, hat, and SPF50 sunscreen", "Power adapter (Type C/D, 230V)", "Reusable water bottle with filter", "Small daypack for excursions", "Light rain jacket (all seasons)", "Camera with extra memory cards"], es: ["Ropa ligera de algodón", "Zapatos cómodos y sandalias", "Pañuelo/chal para templos", "Gafas de sol, sombrero y protector solar", "Adaptador de corriente", "Botella de agua reutilizable", "Mochila pequeña para excursiones", "Chaqueta impermeable ligera", "Cámara con tarjetas extra"], pt: ["Roupa leve de algodão", "Sapatos confortáveis e sandálias", "Lenço/xale para templos", "Óculos de sol, chapéu e protetor solar", "Adaptador de corrente", "Garrafa de água reutilizável", "Mochila pequena para excursões", "Jaqueta impermeável leve", "Câmera com cartões extra"] }
        },
        {
          heading: { en: "Season-Specific Additions", es: "Adiciones por Temporada", pt: "Adições por Temporada" },
          content: { en: "Winter (Nov-Feb): Warm layers, thermal wear for North India mornings. Summer (Mar-Jun): Extra light fabrics, cooling towel. Monsoon (Jul-Sep): Waterproof bag covers, quick-dry clothing, umbrella. Hill stations: Warm fleece/jacket regardless of season.", es: "Invierno: Capas cálidas para el Norte. Verano: Telas extra ligeras. Monzón: Ropa impermeable.", pt: "Inverno: Camadas quentes para o Norte. Verão: Tecidos extra leves. Monção: Roupa impermeável." }
        },
        {
          heading: { en: "Indian Rupee & Currency Exchange", es: "Rupia India y Cambio de Moneda", pt: "Rúpia Indiana e Câmbio" },
          content: { en: "Currency: Indian Rupee (INR/₹). 1 USD ≈ 83 INR (approx). Exchange at airport or authorized dealers. ATMs available everywhere. Visa/Mastercard widely accepted in cities and hotels. Carry small denominations (₹100-500) for tips and local markets. UPI payments (Google Pay) are universal in India. MH India Trips handles all major payments digitally.", es: "Moneda: Rupia India (INR). 1 USD ≈ 83 INR. Cajeros en todas partes. Visa/Mastercard aceptados.", pt: "Moeda: Rúpia Indiana (INR). 1 USD ≈ 83 INR. Caixas eletrônicos em toda parte. Visa/Mastercard aceitos." }
        },
        {
          heading: { en: "Tipping Guidelines", es: "Guía de Propinas", pt: "Guia de Gorjetas" },
          content: { en: "Tipping is appreciated but not mandatory. Suggested: Hotel porter ₹100-200, restaurant 10% of bill, private driver ₹500-1000/day, guide ₹1000-2000/day, spa therapist 10-15%. MH India Trips provides tipping guidelines specific to your itinerary.", es: "Las propinas se aprecian pero no son obligatorias. Sugerido: Portero ₹100-200, restaurante 10%.", pt: "As gorjetas são apreciadas mas não obrigatórias. Sugerido: Porteiro ₹100-200, restaurante 10%." }
        }
      ]
    }
  }
];

// Merge system pages into pagesCache ensuring system pages always exist
const rawPagesCache = loadLocalData("pages", []);
const existingPageIds = new Set(rawPagesCache.map((p: any) => p.id));
const missingSystemPages = defaultSystemPages.filter(p => !existingPageIds.has(p.id));
let pagesCache = [...defaultSystemPages.map(sp => {
  // If page exists in stored data, merge stored data over defaults (user edits take priority)
  const existing = rawPagesCache.find((p: any) => p.id === sp.id);
  return existing ? { ...sp, ...existing, isCustom: false } : sp;
}), ...rawPagesCache.filter((p: any) => !defaultSystemPages.some(sp => sp.id === p.id))];

// Save merged pages if there were missing system pages
if (missingSystemPages.length > 0) {
  saveLocalData("pages", pagesCache);
}

// Simple check to seed Firestore collection if it has fewer items than source
async function ensureSeeded(collectionName: string, initialData: any[]) {
  if (!useFirestore) return;
  try {
    const colRef = collection(firestore, collectionName);
    const snapshot = await getDocs(colRef);
    const existingIds = new Set(snapshot.docs.map(d => d.id));
    
    for (const item of initialData) {
      const docId = (item.id && typeof item.id === "string") ? item.id : (item.slug && typeof item.slug === "string" ? item.slug : "");
      if (docId && !existingIds.has(docId)) {
        console.log(`Document ${docId} is missing in ${collectionName}. Seeding it...`);
        await setDoc(doc(firestore, collectionName, docId), item);
      } else if (docId === "contact_details" && collectionName === "settings") {
        const existingDoc = snapshot.docs.find(d => d.id === docId);
        const existingData = existingDoc?.data();
        if (existingData && (existingData.phone !== item.phone || existingData.whatsapp !== item.whatsapp)) {
          console.log(`Updating Firestore contact_details document with new phone number...`);
          await setDoc(doc(firestore, collectionName, docId), item, { merge: true });
        }
      }
    }
  } catch (err: any) {
    console.warn(`Firestore seeding error on ${collectionName}:`, err.message || err);
    if (err.message && (err.message.includes("PERMISSION_DENIED") || err.message.includes("disabled"))) {
      useFirestore = false;
    }
  }
}

// Perform background seeding check
let seedingPromise: Promise<any> | null = null;
let isSeeded = false;
function checkSeeding() {
  if (!useFirestore || isSeeded) return;
  if (!seedingPromise) {
    console.log("Starting Firestore database seeding check in background...");
    seedingPromise = Promise.all([
      ensureSeeded("blogs", blogsCache),
      ensureSeeded("states", statesCache),
      ensureSeeded("foods", foodsCache),
      ensureSeeded("testimonials", testimonialsCache),
      ensureSeeded("tour_packages", tourPackagesCache),
      ensureSeeded("pages", pagesCache),
      ensureSeeded("settings", settingsCache),
    ]).then(() => {
      isSeeded = true;
      console.log("Firestore database seeding check completed successfully.");
    }).catch(err => {
      console.warn("Firestore database seeding check failed:", err.message || err);
      seedingPromise = null;
    });
  }
}

export const db = {
  inquiries: {
    findMany: async () => {
      if (useFirestore) {
        try {
          const snapshot = await getDocs(collection(firestore, "inquiries"));
          return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        } catch (e: any) {
          console.warn("Firestore inquiries.findMany failed, falling back to local JSON:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      inquiriesCache = loadLocalData("inquiries", inquiriesCache);
      return inquiriesCache;
    },
    create: async (data: any) => {
      if (useFirestore) {
        try {
          const docRef = await addDoc(collection(firestore, "inquiries"), {
            status: "NEW",
            createdAt: new Date().toISOString(),
            ...data
          });
          return { id: docRef.id, ...data };
        } catch (e: any) {
          console.warn("Firestore inquiries.create failed, falling back to local JSON:", e.message || e);
        }
      }
      const newInquiry = {
        id: Math.random().toString(36).substring(2, 11),
        status: "NEW",
        createdAt: new Date().toISOString(),
        ...data
      };
      inquiriesCache.push(newInquiry);
      saveLocalData("inquiries", inquiriesCache);
      return newInquiry;
    },
    update: async (id: string, data: any) => {
      if (useFirestore) {
        try {
          const docRef = doc(firestore, "inquiries", id);
          await updateDoc(docRef, data);
          return { id, ...data };
        } catch (e: any) {
          console.warn("Firestore inquiries.update failed, falling back to local JSON:", e.message || e);
        }
      }
      const idx = inquiriesCache.findIndex((i: any) => i.id === id);
      if (idx !== -1) {
        inquiriesCache[idx] = { ...inquiriesCache[idx], ...data };
        saveLocalData("inquiries", inquiriesCache);
        return inquiriesCache[idx];
      }
      return null;
    },
    delete: async (id: string) => {
      if (useFirestore) {
        try {
          await deleteDoc(doc(firestore, "inquiries", id));
          return { id };
        } catch (e: any) {
          console.warn("Firestore inquiries.delete failed, falling back to local JSON:", e.message || e);
        }
      }
      inquiriesCache = inquiriesCache.filter((i: any) => i.id !== id);
      saveLocalData("inquiries", inquiriesCache);
      return { id };
    }
  },

  blogs: {
    findMany: async () => {
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "blogs"));
            return snapshot.docs
              .map(d => d.data() as BlogData)
              .filter((b: any) => b.isDeleted !== true);
          }
        } catch (e: any) {
          console.warn("Firestore blogs.findMany failed, falling back to local:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      // Firestore not available — fall back to local JSON cache
      blogsCache = loadLocalData("blogs", mergedBlogs);
      return blogsCache.filter((b: any) => b.isDeleted !== true);
    },
    findUnique: async (slug: string) => {
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const docRef = doc(firestore, "blogs", slug);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
              const data = snapshot.data() as any;
              return data.isDeleted !== true ? data as BlogData : null;
            }
            return null;
          }
        } catch (e: any) {
          console.warn("Firestore blogs.findUnique failed, falling back to local JSON:", e.message || e);
        }
      }
      blogsCache = loadLocalData("blogs", blogsCache);
      return blogsCache.find((b: any) => b.slug === slug && b.isDeleted !== true) || null;
    },
    create: async (data: any) => {
      const slug = data.slug || Math.random().toString(36).substring(2, 11);
      const newBlog = {
        slug,
        createdAt: new Date().toISOString().split("T")[0],
        readingTime: 5,
        author: "MHIndiaTrips Editor",
        ...data
      };
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "blogs", slug), newBlog);
          return newBlog;
        } catch (e: any) {
          console.warn("Firestore blogs.create failed, falling back to local JSON:", e.message || e);
        }
      }
      blogsCache.push(newBlog);
      saveLocalData("blogs", blogsCache);
      return newBlog;
    },
    update: async (slug: string, data: any) => {
      if (useFirestore) {
        try {
          const docRef = doc(firestore, "blogs", slug);
          await updateDoc(docRef, data);
          return { slug, ...data };
        } catch (e: any) {
          console.warn("Firestore blogs.update failed, falling back to local JSON:", e.message || e);
        }
      }
      const idx = blogsCache.findIndex((b: any) => b.slug === slug);
      if (idx !== -1) {
        blogsCache[idx] = { ...blogsCache[idx], ...data };
        saveLocalData("blogs", blogsCache);
        return blogsCache[idx];
      }
      return null;
    },
    delete: async (slug: string) => {
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "blogs", slug), { isDeleted: true }, { merge: true });
          return { slug };
        } catch (e: any) {
          console.warn("Firestore blogs.delete failed, falling back to local JSON:", e.message || e);
        }
      }
      blogsCache = blogsCache.filter((b: any) => b.slug !== slug);
      saveLocalData("blogs", blogsCache);
      return { slug };
    }
  },

  states: {
    findMany: async () => {
      try {
        const freshPath = path.join(process.cwd(), "src", "data", "fallback", "states.json");
        if (fs.existsSync(freshPath)) {
          const freshRaw = fs.readFileSync(freshPath, "utf-8");
          if (freshRaw && freshRaw.length > 50) {
            const freshData = JSON.parse(freshRaw);
            if (Array.isArray(freshData)) {
              statesCache = freshData;
            }
          }
        }
      } catch (e: any) {
        console.warn("[db] states.findMany file read error:", e.message);
      }

      // Filter out any undefined state objects
      let localData = statesCache.filter((s: any) => s && s.id && s.id !== "undefined");
      if (localData.length !== statesCache.length) {
        statesCache = localData;
        saveLocalData("states", statesCache);
      }

      if (useFirestore) {
        try {
          const snapshot = await getDocs(collection(firestore, "states"));
          const firestoreData = snapshot.docs.map(d => d.data() as any);
          
          // Delete from Firestore if "undefined" document exists
          if (firestoreData.some(s => !s.id || s.id === "undefined")) {
            try {
              await deleteDoc(doc(firestore, "states", "undefined"));
            } catch (fsErr) {
              console.warn("Firestore failed to delete undefined state doc:", fsErr);
            }
          }

          const cleanFirestoreData = firestoreData.filter(s => s && s.id && s.id !== "undefined");
          const firestoreMap = new Map(cleanFirestoreData.map((s: any) => [s.id, s]));
          const merged = localData
            .map((s: any) => firestoreMap.has(s.id) ? firestoreMap.get(s.id) : s)
            .filter((s: any) => s.isDeleted !== true);
          const localIds = new Set(localData.map((s: any) => s.id));
          const extraItems = cleanFirestoreData.filter((s: any) => !localIds.has(s.id) && s.isDeleted !== true);
          return [...merged, ...extraItems].sort((a: any, b: any) => (a.displayOrder || 0) - (b.displayOrder || 0));
        } catch (e: any) {
          console.warn("Firestore states.findMany failed, falling back to local:", e.message || e);
        }
      }
      return localData.filter((s: any) => s.isDeleted !== true).sort((a: any, b: any) => (a.displayOrder || 0) - (b.displayOrder || 0));
    },
    findUnique: async (id: string) => {
      const allStates = await db.states.findMany();
      if (!id) return null;
      const target = String(id).toLowerCase().trim();
      return allStates.find((s: any) => {
        if (!s) return false;
        const sId = String(s.id || "").toLowerCase();
        const slugEn = String(s.slug?.en || s.slug || "").toLowerCase();
        const slugEs = String(s.slug?.es || s.slug || "").toLowerCase();
        const slugPt = String(s.slug?.pt || s.slug || "").toLowerCase();
        return sId === target || slugEn === target || slugEs === target || slugPt === target;
      }) || null;
    },
    create: async (data: any) => {
      const id = data.id || Math.random().toString(36).substring(2, 11);
      const newState = {
        id,
        isPublished: true,
        displayOrder: 0,
        ...data
      };
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "states", id), newState);
        } catch (e: any) {
          console.warn("Firestore states.create failed:", e.message || e);
        }
      }
      statesCache.push(newState);
      saveLocalData("states", statesCache);
      return newState;
    },
    update: async (id: string, data: any) => {
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "states", id), { ...data, id }, { merge: true });
        } catch (e: any) {
          console.warn("Firestore states.update failed:", e.message || e);
        }
      }
      const localIdx = statesCache.findIndex((s: any) => s.id === id);
      if (localIdx !== -1) {
        statesCache[localIdx] = { ...statesCache[localIdx], ...data, id };
        saveLocalData("states", statesCache);
        return statesCache[localIdx];
      }
      return null;
    },
    delete: async (id: string) => {
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "states", id), { isDeleted: true }, { merge: true });
        } catch (e: any) {
          console.warn("Firestore states.delete failed:", e.message || e);
        }
      }
      statesCache = statesCache.filter((s: any) => s.id !== id);
      saveLocalData("states", statesCache);
      return { id };
    }
  },

  cities: {
    findMany: async () => {
      try {
        const freshPath = path.join(process.cwd(), "src", "data", "fallback", "cities.json");
        if (fs.existsSync(freshPath)) {
          const freshRaw = fs.readFileSync(freshPath, "utf-8");
          if (freshRaw && freshRaw.length > 50) {
            const freshData = JSON.parse(freshRaw);
            if (Array.isArray(freshData)) {
              citiesCache = freshData;
            }
          }
        }
      } catch (e: any) {
        console.warn("[db] cities.findMany file read error:", e.message);
      }

      // Filter out any undefined city objects
      let localData = citiesCache.filter((c: any) => c && c.id && c.id !== "undefined" && c.stateId && c.stateId !== "undefined");
      if (localData.length !== citiesCache.length) {
        citiesCache = localData;
        saveLocalData("cities", citiesCache);
      }

      if (useFirestore) {
        try {
          const snapshot = await getDocs(collection(firestore, "cities"));
          const firestoreData = snapshot.docs.map(d => d.data() as any);

          // Delete from Firestore if "undefined" document exists
          if (firestoreData.some(c => !c.id || c.id === "undefined")) {
            try {
              await deleteDoc(doc(firestore, "cities", "undefined"));
            } catch (fsErr) {
              console.warn("Firestore failed to delete undefined city doc:", fsErr);
            }
          }

          const cleanFirestoreData = firestoreData.filter(c => c && c.id && c.id !== "undefined" && c.stateId && c.stateId !== "undefined");
          const firestoreMap = new Map(cleanFirestoreData.map((c: any) => [c.id, c]));
          const merged = localData
            .map((c: any) => firestoreMap.has(c.id) ? firestoreMap.get(c.id) : c)
            .filter((c: any) => c.isDeleted !== true);
          const localIds = new Set(localData.map((c: any) => c.id));
          const extraItems = cleanFirestoreData.filter((c: any) => !localIds.has(c.id) && c.isDeleted !== true);
          return [...merged, ...extraItems].sort((a: any, b: any) => (a.displayOrder || 0) - (b.displayOrder || 0));
        } catch (e: any) {
          console.warn("Firestore cities.findMany failed, falling back to local:", e.message || e);
        }
      }
      return localData.filter((c: any) => c.isDeleted !== true).sort((a: any, b: any) => (a.displayOrder || 0) - (b.displayOrder || 0));
    },
    findUnique: async (id: string) => {
      const allCities = await db.cities.findMany();
      if (!id) return null;
      const target = String(id).toLowerCase().trim();
      return allCities.find((c: any) => {
        if (!c) return false;
        const cId = String(c.id || "").toLowerCase();
        const slugEn = String(c.slug?.en || c.slug || "").toLowerCase();
        const slugEs = String(c.slug?.es || c.slug || "").toLowerCase();
        const slugPt = String(c.slug?.pt || c.slug || "").toLowerCase();
        return cId === target || slugEn === target || slugEs === target || slugPt === target;
      }) || null;
    },
    findByState: async (stateId: string) => {
      const allCities = await db.cities.findMany();
      return allCities.filter((c: any) => c.stateId === stateId);
    },
    create: async (data: any) => {
      const id = data.id || Math.random().toString(36).substring(2, 11);
      const newCity = {
        id,
        isPublished: true,
        displayOrder: 0,
        gallery: [],
        relatedPackages: [],
        ...data
      };
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "cities", id), newCity);
        } catch (e: any) {
          console.warn("Firestore cities.create failed:", e.message || e);
        }
      }
      citiesCache.push(newCity);
      saveLocalData("cities", citiesCache);
      return newCity;
    },
    update: async (id: string, data: any) => {
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "cities", id), { ...data, id }, { merge: true });
        } catch (e: any) {
          console.warn("Firestore cities.update failed:", e.message || e);
        }
      }
      const localIdx = citiesCache.findIndex((c: any) => c.id === id);
      if (localIdx !== -1) {
        citiesCache[localIdx] = { ...citiesCache[localIdx], ...data, id };
        saveLocalData("cities", citiesCache);
        return citiesCache[localIdx];
      }
      return null;
    },
    delete: async (id: string) => {
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "cities", id), { isDeleted: true }, { merge: true });
        } catch (e: any) {
          console.warn("Firestore cities.delete failed:", e.message || e);
        }
      }
      citiesCache = citiesCache.filter((c: any) => c.id !== id);
      saveLocalData("cities", citiesCache);
      return { id };
    }
  },

  foods: {
    findMany: async () => {
      // Load latest cached JSON data
      foodsCache = loadLocalData("foods", mergedFoods);
      const localData = foodsCache;
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "foods"));
            const firestoreData = snapshot.docs.map(d => d.data() as FoodData);
            const firestoreMap = new Map(firestoreData.map((f: any) => [f.slug, f]));
            const merged = localData
              .map((f: any) => firestoreMap.has(f.slug) ? firestoreMap.get(f.slug) : f)
              .filter((f: any) => f.isDeleted !== true);
            const localSlugs = new Set(localData.map((f: any) => f.slug));
            const extraItems = firestoreData.filter((f: any) => !localSlugs.has(f.slug) && f.isDeleted !== true);
            return [...merged, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore foods.findMany failed, falling back to local:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      return localData.filter((f: any) => f.isDeleted !== true);
    },
    findUnique: async (slug: string) => {
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const docRef = doc(firestore, "foods", slug);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
              const data = snapshot.data() as any;
              return data.isDeleted !== true ? data as FoodData : null;
            }
            return null;
          }
        } catch (e: any) {
          console.warn("Firestore foods.findUnique failed, falling back to local JSON:", e.message || e);
        }
      }
      foodsCache = loadLocalData("foods", foodsCache);
      return foodsCache.find((f: any) => f.slug === slug && f.isDeleted !== true) || null;
    },
    create: async (data: any) => {
      const slug = data.slug || Math.random().toString(36).substring(2, 11);
      const newFood = {
        slug,
        gallery: [],
        ingredients: [],
        travelTips: [],
        bestRestaurants: [],
        faqs: [],
        ...data
      };
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "foods", slug), newFood);
          return newFood;
        } catch (e: any) {
          console.warn("Firestore foods.create failed, falling back to local JSON:", e.message || e);
        }
      }
      foodsCache.push(newFood);
      saveLocalData("foods", foodsCache);
      return newFood;
    },
    update: async (slug: string, data: any) => {
      if (useFirestore) {
        try {
          const docRef = doc(firestore, "foods", slug);
          await updateDoc(docRef, data);
          return { slug, ...data };
        } catch (e: any) {
          console.warn("Firestore foods.update failed, falling back to local JSON:", e.message || e);
        }
      }
      const idx = foodsCache.findIndex((f: any) => f.slug === slug);
      if (idx !== -1) {
        foodsCache[idx] = { ...foodsCache[idx], ...data };
        saveLocalData("foods", foodsCache);
        return foodsCache[idx];
      }
      return null;
    },
    delete: async (slug: string) => {
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "foods", slug), { isDeleted: true }, { merge: true });
          return { slug };
        } catch (e: any) {
          console.warn("Firestore foods.delete failed, falling back to local JSON:", e.message || e);
        }
      }
      foodsCache = foodsCache.filter((f: any) => f.slug !== slug);
      saveLocalData("foods", foodsCache);
      return { slug };
    }
  },

  testimonials: {
    findMany: async () => {
      // Load latest cached JSON data
      testimonialsCache = loadLocalData("testimonials", initialTestimonials);
      const localData = testimonialsCache;
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "testimonials"));
            const firestoreData = snapshot.docs.map(d => d.data() as Testimonial);
            const firestoreMap = new Map(firestoreData.map((t: any) => [t.id, t]));
            const merged = localData
              .map((t: any) => firestoreMap.has(t.id) ? firestoreMap.get(t.id) : t)
              .filter((t: any) => t.isDeleted !== true);
            const localIds = new Set(localData.map((t: any) => t.id));
            const extraItems = firestoreData.filter((t: any) => !localIds.has(t.id) && t.isDeleted !== true);
            return [...merged, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore testimonials.findMany failed, falling back to local:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      return localData.filter((t: any) => t.isDeleted !== true);
    },
    create: async (data: any) => {
      const id = data.id || Math.random().toString(36).substring(2, 11);
      const newTestimonial = {
        id,
        ...data
      };
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "testimonials", id), newTestimonial);
          return newTestimonial;
        } catch (e: any) {
          console.warn("Firestore testimonials.create failed, falling back to local JSON:", e.message || e);
        }
      }
      testimonialsCache.push(newTestimonial);
      saveLocalData("testimonials", testimonialsCache);
      return newTestimonial;
    },
    update: async (id: string, data: any) => {
      if (useFirestore) {
        try {
          const docRef = doc(firestore, "testimonials", id);
          await updateDoc(docRef, data);
          return { id, ...data };
        } catch (e: any) {
          console.warn("Firestore testimonials.update failed, falling back to local JSON:", e.message || e);
        }
      }
      const idx = testimonialsCache.findIndex((t: any) => t.id === id);
      if (idx !== -1) {
        testimonialsCache[idx] = { ...testimonialsCache[idx], ...data };
        saveLocalData("testimonials", testimonialsCache);
        return testimonialsCache[idx];
      }
      return null;
    },
    delete: async (id: string) => {
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "testimonials", id), { isDeleted: true }, { merge: true });
          return { id };
        } catch (e: any) {
          console.warn("Firestore testimonials.delete failed, falling back to local JSON:", e.message || e);
        }
      }
      testimonialsCache = testimonialsCache.filter((t: any) => t.id !== id);
      saveLocalData("testimonials", testimonialsCache);
      return { id };
    }
  },

  tourPackages: {
    findMany: async () => {
      // Load latest cached JSON data
      tourPackagesCache = loadLocalData("tour_packages", mergedPackages);
      const localData = tourPackagesCache;
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "tour_packages"));
            const firestoreData = snapshot.docs.map(d => d.data() as TourPackage);
            const firestoreMap = new Map(firestoreData.map((p: any) => [p.slug, p]));
            const merged = localData
              .map((p: any) => firestoreMap.has(p.slug) ? firestoreMap.get(p.slug) : p)
              .filter((p: any) => p.isDeleted !== true);
            const localSlugs = new Set(localData.map((p: any) => p.slug));
            const extraItems = firestoreData.filter((p: any) => !localSlugs.has(p.slug) && p.isDeleted !== true);
            return [...merged, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore tourPackages.findMany failed, falling back to local:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      return localData.filter((p: any) => p.isDeleted !== true);
    },
    findUnique: async (slug: string) => {
      let res = null;
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const docRef = doc(firestore, "tour_packages", slug);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
              const data = snapshot.data() as any;
              if (data.isDeleted !== true) {
                res = data as TourPackage;
              } else {
                return null;
              }
            }
          }
        } catch (e: any) {
          console.warn("Firestore tourPackages.findUnique failed, falling back to local JSON:", e.message || e);
        }
      }
      if (!res) {
        tourPackagesCache = loadLocalData("tour_packages", tourPackagesCache);
        res = tourPackagesCache.find((p: any) => p.slug === slug && p.isDeleted !== true) || null;
      }
      return res;
    },
    create: async (data: any) => {
      const slug = data.slug || Math.random().toString(36).substring(2, 11);
      const newPkg = {
        slug,
        highlights: [],
        ...data
      };
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "tour_packages", slug), newPkg);
          return newPkg;
        } catch (e: any) {
          console.warn("Firestore tourPackages.create failed, falling back to local JSON:", e.message || e);
        }
      }
      tourPackagesCache.push(newPkg);
      saveLocalData("tour_packages", tourPackagesCache);
      return newPkg;
    },
    update: async (slug: string, data: any) => {
      if (useFirestore) {
        try {
          const docRef = doc(firestore, "tour_packages", slug);
          await updateDoc(docRef, data);
          return { slug, ...data };
        } catch (e: any) {
          console.warn("Firestore tourPackages.update failed, falling back to local JSON:", e.message || e);
        }
      }
      const idx = tourPackagesCache.findIndex((p: any) => p.slug === slug);
      if (idx !== -1) {
        tourPackagesCache[idx] = { ...tourPackagesCache[idx], ...data };
        saveLocalData("tour_packages", tourPackagesCache);
        return tourPackagesCache[idx];
      }
      return null;
    },
    delete: async (slug: string) => {
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "tour_packages", slug), { isDeleted: true }, { merge: true });
          return { slug };
        } catch (e: any) {
          console.warn("Firestore tourPackages.delete failed, falling back to local JSON:", e.message || e);
        }
      }
      tourPackagesCache = tourPackagesCache.filter((p: any) => p.slug !== slug);
      saveLocalData("tour_packages", tourPackagesCache);
      return { slug };
    }
  },
  pages: {
    findMany: async () => {
      let res = pagesCache;
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "pages"));
            const firestoreData = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            const firestoreMap = new Map(firestoreData.map((p: any) => [p.id, p]));
            const merged = pagesCache
              .map((p: any) => firestoreMap.has(p.id) ? firestoreMap.get(p.id) : p)
              .filter((p: any) => p.isDeleted !== true);
            const localIds = new Set(pagesCache.map((p: any) => p.id));
            const extraItems = firestoreData.filter((p: any) => !localIds.has(p.id) && p.isDeleted !== true);
            res = [...merged, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore pages.findMany failed, falling back to local:", e.message || e);
        }
      }
      if (res === pagesCache) {
        pagesCache = loadLocalData("pages", pagesCache);
        res = pagesCache.filter((p: any) => p.isDeleted !== true);
      }
      return cleanEmail(res);
    },
    findUnique: async (id: string) => {
      let res = null;
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const docRef = doc(firestore, "pages", id);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
              const data = { id: snapshot.id, ...snapshot.data() } as any;
              if (data.isDeleted !== true) {
                res = data;
              } else {
                return null;
              }
            }
          }
        } catch (e: any) {
          console.warn("Firestore pages.findUnique failed, falling back to local:", e.message || e);
        }
      }
      if (!res) {
        pagesCache = loadLocalData("pages", pagesCache);
        res = pagesCache.find((p: any) => p.id === id && p.isDeleted !== true) || null;
      }
      return cleanEmail(res);
    },
    create: async (data: any) => {
      const id = data.id || Math.random().toString(36).substring(2, 11);
      const newPage = {
        id,
        isCustom: true,
        title: { en: "", es: "", pt: "" },
        content: {},
        ...data
      };
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "pages", id), newPage);
          return newPage;
        } catch (e: any) {
          console.warn("Firestore pages.create failed, falling back to local JSON:", e.message || e);
        }
      }
      pagesCache.push(newPage);
      saveLocalData("pages", pagesCache);
      return newPage;
    },
    update: async (id: string, data: any) => {
      if (useFirestore) {
        try {
          const docRef = doc(firestore, "pages", id);
          await updateDoc(docRef, data);
          return { id, ...data };
        } catch (e: any) {
          console.warn("Firestore pages.update failed, falling back to local JSON:", e.message || e);
        }
      }
      const idx = pagesCache.findIndex((p: any) => p.id === id);
      if (idx !== -1) {
        pagesCache[idx] = { ...pagesCache[idx], ...data };
        saveLocalData("pages", pagesCache);
        return pagesCache[idx];
      }
      return null;
    },
    delete: async (id: string) => {
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "pages", id), { isDeleted: true }, { merge: true });
          return { id };
        } catch (e: any) {
          console.warn("Firestore pages.delete failed, falling back to local JSON:", e.message || e);
        }
      }
      pagesCache = pagesCache.filter((p: any) => p.id !== id);
      saveLocalData("pages", pagesCache);
      return { id };
    }
  },

  settings: {
    findMany: async () => {
      settingsCache = loadLocalData("settings", settingsCache);
      const localData = settingsCache;
      let res = localData;
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "settings"));
            const firestoreData = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            const firestoreMap = new Map(firestoreData.map((s: any) => [s.id, s]));
            const merged = localData.map((s: any) => firestoreMap.has(s.id) ? firestoreMap.get(s.id) : s);
            const localIds = new Set(localData.map((s: any) => s.id));
            const extraItems = firestoreData.filter((s: any) => !localIds.has(s.id));
            res = [...merged, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore settings.findMany failed, falling back to local:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      return cleanEmail(res);
    },
    findUnique: async (id: string) => {
      let res = null;
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const docRef = doc(firestore, "settings", id);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
              res = { id: snapshot.id, ...snapshot.data() } as any;
            }
          }
        } catch (e: any) {
          console.warn("Firestore settings.findUnique failed, falling back to local JSON:", e.message || e);
        }
      }
      if (!res) {
        settingsCache = loadLocalData("settings", settingsCache);
        res = settingsCache.find((s: any) => s.id === id) || null;
      }
      return cleanEmail(res);
    },
    update: async (id: string, data: any) => {
      if (useFirestore) {
        try {
          const docRef = doc(firestore, "settings", id);
          await setDoc(docRef, data, { merge: true });
          return { id, ...data };
        } catch (e: any) {
          console.warn("Firestore settings.update failed, falling back to local JSON:", e.message || e);
        }
      }
      const all = await db.settings.findMany();
      const idx = all.findIndex((s: any) => s.id === id);
      if (idx !== -1) {
        all[idx] = { ...all[idx], ...data };
        saveLocalData("settings", all);
        settingsCache = all;
        return all[idx];
      } else {
        const newRecord = { id, ...data };
        all.push(newRecord);
        saveLocalData("settings", all);
        settingsCache = all;
        return newRecord;
      }
    }
  }
};
