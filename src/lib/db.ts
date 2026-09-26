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
import { outboundDestinations } from "@/data/outboundData";
import { getAdminFirestore } from "./firebase-admin";
import fs from "fs";
import path from "path";

// Static JSON imports for robust 100% serverless compatibility on Netlify
import blogsFallback from "@/data/fallback/blogs.json";
import citiesFallback from "@/data/fallback/cities.json";
import foodsFallback from "@/data/fallback/foods.json";
import inquiriesFallback from "@/data/fallback/inquiries.json";
import outboundFallback from "@/data/fallback/outbound.json";
import pagesFallback from "@/data/fallback/pages.json";
import settingsFallback from "@/data/fallback/settings.json";
import statesFallback from "@/data/fallback/states.json";
import testimonialsFallback from "@/data/fallback/testimonials.json";
import tourPackagesFallback from "@/data/fallback/tour_packages.json";
import nationalParksFallback from "@/data/fallback/national_parks.json";

let outboundCache: any[] = (outboundFallback && outboundFallback.length > 0) ? outboundFallback : outboundDestinations;
let nationalParksCache: any[] = (nationalParksFallback && nationalParksFallback.length > 0) ? nationalParksFallback : [];

const mergedStates: any[] = (statesFallback && statesFallback.length > 0) ? statesFallback : [...statesData, ...additionalStates];
const mergedCities: any[] = (citiesFallback && citiesFallback.length > 0) ? citiesFallback : [];
const mergedFoods = (foodsFallback && foodsFallback.length > 0) ? foodsFallback : [...foodsData, ...additionalFoods];
const mergedBlogs = (blogsFallback && blogsFallback.length > 0) ? blogsFallback : [...blogsData, ...additionalBlogs];
const mergedPackages = (tourPackagesFallback && tourPackagesFallback.length > 0) ? tourPackagesFallback : [...initialTourPackages, ...additionalPackages];

function cleanEmail(obj: any): any {
  if (!obj) return obj;
  if (typeof obj === "string") {
    return obj === "mhindiatrips@gmail.com" ? "info@mhindiatrips.com" : obj;
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

if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY || process.env.FIREBASE_PRIVATE_KEY || process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
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

const isServerlessEnv = !!(process.env.NETLIFY || process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NODE_ENV === "production");

const FALLBACK_DIR = path.join(process.cwd(), "src", "data", "fallback");
if (!isServerlessEnv) {
  try {
    if (!fs.existsSync(FALLBACK_DIR)) {
      fs.mkdirSync(FALLBACK_DIR, { recursive: true });
    }
  } catch (e) {}
}

const getFilePath = (name: string) => path.join(FALLBACK_DIR, `${name}.json`);

const loadLocalData = (name: string, defaultData: any) => {
  try {
    const filePath = getFilePath(name);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      if (raw && raw.trim().length > 2) {
        return JSON.parse(raw);
      }
    }
  } catch (e) {}
  return defaultData;
};

const saveLocalData = (name: string, data: any) => {
  try {
    const filePath = getFilePath(name);
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const cleanData = Array.isArray(data) ? data.filter((item: any) => item && item.isDeleted !== true) : data;
    fs.writeFileSync(filePath, JSON.stringify(cleanData, null, 2), "utf-8");
  } catch (e) {}
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
    companyName: "MH India Trips",
    gstin: "08ACIFM3516H1Z7",
    phone: "+91 9314635830",
    email: "info@mhindiatrips.com",
    whatsapp: "919314635830",
    website: "https://mhindiatrips.com",
    address: "Jaipur & New Delhi, Rajasthan, India",
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
          title: { en: "Taj Mahal: Symbol of Eternal Love", es: "Taj Mahal: Símbolo del Amor Eterno", pt: "Taj Mahal: Símbolo do Amor Eterno" },
          desc: { en: "Experience the breathless beauty of the iconic marble mausoleum at sunrise in Agra.", es: "Experimente la belleza del icónico mausoleo de mármol al amanecer en Agra.", pt: "Experimente a beleza do icônico mausóleu de mármol ao amanhecer em Agra." },
          location: { en: "Taj Mahal, Agra, Uttar Pradesh", es: "Taj Mahal, Agra, Uttar Pradesh", pt: "Taj Mahal, Agra, Uttar Pradesh" },
          sub: { en: "MARVELS OF INDIA", es: "MARAVILLAS DE LA INDIA", pt: "MARAVILHAS DA ÍNDIA" },
          cta1Text: { en: "Explore Agra Destinations", es: "Explorar Destinos de Agra", pt: "Explorar Destinos de Agra" },
          cta1Link: "/destinations-in-india/uttar-pradesh",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/Jaipur.jpg",
          title: { en: "Amer Fort & Pink City Wonders of Jaipur", es: "Fuerte Amber y Maravillas de Jaipur", pt: "Forte Amber e Maravilhas de Jaipur" },
          desc: { en: "Explore grand hill forts, Hawa Mahal, and royal heritage in the capital of Rajasthan.", es: "Explore majestuosos fuertes en colinas, el Hawa Mahal y el patrimonio real de Rajastán.", pt: "Explore grandes fortes em colinas, Hawa Mahal e patrimônio real do Rajastão." },
          location: { en: "Jaipur, Rajasthan", es: "Jaipur, Rajastán", pt: "Jaipur, Rajastão" },
          sub: { en: "RAJASTHAN ROYAL PALACES", es: "PALACIOS REALES DE RAJASTHÁN", pt: "PALÁCIOS REAIS DO RAJASTÃO" },
          cta1Text: { en: "Explore Jaipur", es: "Explorar Jaipur", pt: "Explorar Jaipur" },
          cta1Link: "/destinations-in-india/rajasthan",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/Jaisalmer.jpg",
          title: { en: "Golden Dunes & Living Fort of Jaisalmer", es: "Dunas Doradas y Fuerte de Jaisalmer", pt: "Dunas Douradas e Forte de Jaisalmer" },
          desc: { en: "Sleep under starlit desert skies in luxury tented camps and explore the golden sandstone fortress.", es: "Duerma bajo las estrellas en campamentos de lujo y explore la fortaleza dorada de Rajastán.", pt: "Dorma sob o céu estrelado em acampamentos de luxo e explore a fortaleza dourada." },
          location: { en: "Jaisalmer, Rajasthan", es: "Jaisalmer, Rajastán", pt: "Jaisalmer, Rajastão" },
          sub: { en: "THAR DESERT SAFARIS", es: "SAFARIS EN EL DESIERTO DE THAR", pt: "SAFÁRIS NO DESERTO DE THAR" },
          cta1Text: { en: "Desert Tours", es: "Tours del Desierto", pt: "Tours do Deserto" },
          cta1Link: "/destinations-in-india/rajasthan",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/Udaipur.jpg",
          title: { en: "Udaipur: Venice of the East & Lake Pichola", es: "Udaipur: La Venecia del Este y Lago Pichola", pt: "Udaipur: Veneza do Leste e Lago Pichola" },
          desc: { en: "Sail across shimmering waters and stay in floating marble palaces under the stars.", es: "Navegue por aguas cristalinas y afíjese en palacios flotantes junto a las colinas Aravalli.", pt: "Navegue por águas cristalinas e fique em palácios flutuantes sob as colinas Aravalli." },
          location: { en: "Lake Pichola, Udaipur, Rajasthan", es: "Lago Pichola, Udaipur, Rajastán", pt: "Lago Pichola, Udaipur, Rajastão" },
          sub: { en: "ROMANTIC LAKE PALACES", es: "PALACIOS EN EL LAGO ROMÁNTICOS", pt: "PALÁCIOS NO LAGO ROMÂNTICOS" },
          cta1Text: { en: "Explore Udaipur Lakes", es: "Explorar Lagos de Udaipur", pt: "Explorar Lagos de Udaipur" },
          cta1Link: "/destinations-in-india/rajasthan",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/rajasthan_fort_sunset.png",
          title: { en: "Mehrangarh Fort & Blue City of Jodhpur", es: "Fuerte Mehrangarh y Ciudad Azul de Jodhpur", pt: "Forte Mehrangarh e Cidade Azul de Jodhpur" },
          desc: { en: "Marvel at the majestic fort perched above the blue-painted houses and traditional spice markets.", es: "Contemple el imponente castillo sobre la roca y pasee por los bazares de la Ciudad Azul.", pt: "Contemple o imponente castelo sobre a rocha e passeie pelos bazares da Cidade Azul." },
          location: { en: "Mehrangarh Fort, Jodhpur, Rajasthan", es: "Fuerte Mehrangarh, Jodhpur, Rajastán", pt: "Forte Mehrangarh, Jodhpur, Rajastão" },
          sub: { en: "HISTORIC FORTRESSES", es: "FORTALEZAS HISTÓRICAS", pt: "FORTALEZAS HISTÓRICAS" },
          cta1Text: { en: "Explore Rajasthan", es: "Explorar Rajastán", pt: "Explorar Rajastão" },
          cta1Link: "/destinations-in-india/rajasthan",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/kerala_backwaters_houseboat.png",
          title: { en: "Houseboat Cruises in Alleppey, Kerala", es: "Cruceros en Casa Flotante en Alleppey, Kerala", pt: "Cruzeiros em Casa Flutuante em Alleppey, Kerala" },
          desc: { en: "Cruise through emerald backwaters and rejuvenate with authentic Ayurvedic rituals.", es: "Deslízate por lagunas esmeralda rodeadas de palmeras y rejuvenezca con rituales ayurvédicos.", pt: "Navegue por lagoas de esmeralda e rejuvenesça com rituais ayurvédicos tradicionais." },
          location: { en: "Backwaters, Alleppey, Kerala", es: "Remansos, Alleppey, Kerala", pt: "Canais, Alleppey, Kerala" },
          sub: { en: "TROPICAL BACKWATERS", es: "REMANSOS TROPICALES", pt: "REMANSOS TROPICAIS" },
          cta1Text: { en: "Kerala Retreats", es: "Viajes a Kerala", pt: "Viagens para Kerala" },
          cta1Link: "/destinations-in-india/kerala",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/munnar.jpg",
          title: { en: "Misty Tea Hills of Munnar", es: "Plantaciones de Té y Colinas de Munnar", pt: "Plantações de Chá e Colinas de Munnar" },
          desc: { en: "Breathe the fresh mountain air of rolling tea estates and misty peaks in South India.", es: "Respire aire puro entre plantaciones de té verde y picos montañosos envueltos en niebla.", pt: "Respire ar puro entre plantações de chá verde e picos montanhosos enevoados." },
          location: { en: "Munnar Tea Estates, Kerala", es: "Plantaciones de Munnar, Kerala", pt: "Plantações de Munnar, Kerala" },
          sub: { en: "WESTERN GHATS TEA HILLS", es: "MONTAÑAS DE TÉ DE WESTERN GHATS", pt: "COLINAS DE CHÁ DOS GATES OCIDENTAIS" },
          cta1Text: { en: "Kerala Guides", es: "Guías de Kerala", pt: "Guias de Kerala" },
          cta1Link: "/destinations-in-india/kerala",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/varanasi_ghats_aarti.png",
          title: { en: "Spiritual Awakenings & Ganga Aarti in Varanasi", es: "Ceremonias Ganga Aarti en la Sagrada Varanasi", pt: "Cerimônias Ganga Aarti na Sagrada Varanasi" },
          desc: { en: "Witness the intense devotion of evening Ganga Aarti ceremonies by the ancient sacred ghats.", es: "Presencie sagrados rituales de lámparas y cantos devocionales en los antiguos ghats del río Ganges.", pt: "Testemunhe rituais sagrados de lâmpadas e cantos devocionais nos antigos ghats do rio Ganges." },
          location: { en: "Ganga Ghats, Varanasi, Uttar Pradesh", es: "Ghats del Ganges, Varanasi, Uttar Pradesh", pt: "Ghats do Ganges, Varanasi, Uttar Pradesh" },
          sub: { en: "SPIRITUAL RITUALS & FESTIVALS", es: "FESTIVALES Y RITUALES ESPIRITUALES", pt: "FESTIVAIS E RITUAIS ESPIRITUAIS" },
          cta1Text: { en: "Spiritual Itineraries", es: "Rutas Espirituales", pt: "Rotas Espirituais" },
          cta1Link: "/destinations-in-india/uttar-pradesh",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "https://images.unsplash.com/photo-1609828913642-c55f7659f710?w=1600&q=80",
          title: { en: "Great Rann Utsav: White Salt Desert Festival", es: "Rann Utsav: Festival del Desierto Blanco de Kutch", pt: "Rann Utsav: Festival do Deserto Branco de Kutch" },
          desc: { en: "Celebrate vibrant music, crafts, and full-moon nights on the endless white salt desert of Kutch.", es: "Disfrute de música folclórica, artesanías y noches de luna llena en el gran desierto de sal de Gujarat.", pt: "Desfrute de música folclórica, artesanato e noites de lua cheia no deserto de sal de Gujarat." },
          location: { en: "Rann of Kutch, Gujarat", es: "Rann de Kutch, Gujarat", pt: "Rann de Kutch, Gujarat" },
          sub: { en: "CULTURAL FESTIVALS", es: "FESTIVALES CULTURALES", pt: "FESTIVAIS CULTURAIS" },
          cta1Text: { en: "Explore Gujarat", es: "Explorar Gujarat", pt: "Explorar Gujarat" },
          cta1Link: "/destinations-in-india/gujarat",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1600&q=80",
          title: { en: "The Golden Temple: Crown Jewel of Amritsar", es: "El Templo Dorado: Joya Espiritual de Amritsar", pt: "O Templo Dourado: Joia Espiritual de Amritsar" },
          desc: { en: "Experience serene spirituality at Sri Harmandir Sahib surrounded by the sacred Amrit Sarovar pool.", es: "Sienta paz y armonía en Sri Harmandir Sahib rodeado por el estanque sagrado Amrit Sarovar.", pt: "Sinta paz e harmonia em Sri Harmandir Sahib cercado pelo lago sagrado Amrit Sarovar." },
          location: { en: "Amritsar, Punjab", es: "Amritsar, Punjab", pt: "Amritsar, Punjab" },
          sub: { en: "SACRED SHRINES", es: "SANTUARIOS SAGRADOS", pt: "SANTUÁRIOS SAGRADOS" },
          cta1Text: { en: "View Destinations", es: "Ver Destinos", pt: "Ver Destinos" },
          cta1Link: "/destinations",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=1600&q=80",
          title: { en: "Khajuraho UNESCO Sculptured Temples", es: "Templos Esculpidos de Khajuraho UNESCO", pt: "Templos Esculpidos de Khajuraho UNESCO" },
          desc: { en: "Admire exquisite medieval Nagara architecture and intricate stone carvings of Chandela period.", es: "Contemple la maestría artística medieval y las famosas esculturas en piedra del período Chandela.", pt: "Contemple a maestria artística medieval e as famosas esculturas em pedra do período Chandela." },
          location: { en: "Khajuraho, Madhya Pradesh", es: "Khajuraho, Madhya Pradesh", pt: "Khajuraho, Madhya Pradesh" },
          sub: { en: "UNESCO ARCHITECTURAL WONDERS", es: "ARQUITECTURA PATRIMONIAL UNESCO", pt: "ARQUITETURA PATRIMONIAL UNESCO" },
          cta1Text: { en: "Explore MP", es: "Explorar Madhya Pradesh", pt: "Explorar Madhya Pradesh" },
          cta1Link: "/destinations-in-india/madhya-pradesh",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/ranthambore_tiger_safari.png",
          title: { en: "Royal Bengal Tiger Safaris in Ranthambore", es: "Safaris del Tigre de Bengala en Ranthambore", pt: "Safáris do Tigre de Bengala em Ranthambore" },
          desc: { en: "Search for the majestic Royal Bengal Tiger in the ancient hunting grounds of Maharajas.", es: "Rastree tigres de Bengala salvajes en las antiguas reservas de caza rodeadas de ruinas históricas.", pt: "Rastreie tigres de Bengala selvagens nas antigas reservas de caça com ruínas históricas." },
          location: { en: "Ranthambore National Park, Rajasthan", es: "Parque Nacional Ranthambore, Rajastán", pt: "Parque Nacional Ranthambore, Rajastão" },
          sub: { en: "NATIONAL PARKS & SAFARIS", es: "PARQUES NACIONALES Y SAFARIS", pt: "PARQUES NACIONAIS E SAFÁRIS" },
          cta1Text: { en: "Wildlife Packages", es: "Tours de Naturaleza", pt: "Tours de Natureza" },
          cta1Link: "/packages?category=Wildlife",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=80",
          title: { en: "Jim Corbett National Park & Wilderness", es: "Parque Nacional Jim Corbett y Naturaleza", pt: "Parque Nacional Jim Corbett e Natureza" },
          desc: { en: "Explore India's oldest national park, home to wild Asian elephants, elusive leopards, and dense forests.", es: "Explore el parque nacional más antiguo de la India, hogar de elefantes salvajes, leopardos y densos bosques.", pt: "Explore o parque nacional mais antigo da Índia, lar de elefantes selvagens, leopardos e florestas." },
          location: { en: "Jim Corbett National Park, Uttarakhand", es: "Parque Nacional Jim Corbett, Uttarakhand", pt: "Parque Nacional Jim Corbett, Uttarakhand" },
          sub: { en: "HIMALAYAN WILDLIFE", es: "VIDA SILVESTRE DEL HIMALAYA", pt: "VIDA SELVAGEM DO HIMALAIA" },
          cta1Text: { en: "Safari Tours", es: "Tours de Safaris", pt: "Tours de Safáris" },
          cta1Link: "/packages?category=Wildlife",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&q=80",
          title: { en: "Gateway of India & Vibrant Mumbai", es: "Puerta de la India y la Vibrante Bombay", pt: "Portal da Índia e a Vibrante Mumbai" },
          desc: { en: "Discover the economic capital of India, iconic waterfront monuments, and colonial architecture.", es: "Descubra el corazón económico de la India, monumentos en el puerto y el encanto colonial británico.", pt: "Descubra o coração econômico da Índia, monumentos no porto e o charme colonial." },
          location: { en: "Mumbai, Maharashtra", es: "Bombay, Maharashtra", pt: "Mumbai, Maharashtra" },
          sub: { en: "MAHARASHTRA METROPOLIS", es: "METRÓPOLIS Y PATRIMONIO DE MAHARASHTRA", pt: "METRÓPOLE E PATRIMÔNIO DE MAHARASHTRA" },
          cta1Text: { en: "Explore Maharashtra", es: "Explorar Maharashtra", pt: "Explorar Maharashtra" },
          cta1Link: "/destinations-in-india/maharashtra",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=80",
          title: { en: "Meenakshi Amman Temple Towers of Madurai", es: "Torres del Templo Meenakshi en Madurai", pt: "Torres do Templo Meenakshi em Madurai" },
          desc: { en: "Marvel at towering colorful gopurams and thousands of sculpted deities in ancient Madurai.", es: "Maravíllese con las majestuosas gopurams de colores y esculturas sagradas en la antigua Madurai.", pt: "Maravilhe-se com as majestosas gopurams coloridas e esculturas sagradas na antiga Madurai." },
          location: { en: "Madurai, Tamil Nadu", es: "Madurai, Tamil Nadu", pt: "Madurai, Tamil Nadu" },
          sub: { en: "DRAVIDIAN TEMPLE TOWERS", es: "ARQUITECTURA DRAVÍDICA DEL SUR", pt: "ARQUITETURA DRAVÍDICA DO SUL" },
          cta1Text: { en: "View Destinations", es: "Ver Destinos", pt: "Ver Destinos" },
          cta1Link: "/destinations",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/goa 2.jpg",
          title: { en: "Golden Sands & Colonial Heritage of Goa", es: "Playas Doradas y Herencia Portuguesa de Goa", pt: "Praias Douradas e Herança Portuguesa de Goa" },
          desc: { en: "Relax on pristine tropical beaches and explore colonial Portuguese churches in Old Goa.", es: "Relájese en playas soleadas y explore iglesias de la UNESCO en la histórica Goa Velha.", pt: "Relaxe em praias ensolaradas e explore igrejas da UNESCO na histórica Goa Velha." },
          location: { en: "Baga & Old Goa, Goa", es: "Baga y Vieja Goa, Goa", pt: "Baga e Velha Goa, Goa" },
          sub: { en: "BEACH LUXURY & HERITAGE", es: "PARAÍSO COSTERO TROPICAL", pt: "PARAÍSO LITORÂNEO TROPICAL" },
          cta1Text: { en: "Explore Goa", es: "Explorar Goa", pt: "Explorar Goa" },
          cta1Link: "/destinations-in-india/goa",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
          title: { en: "Dubai: Futuristic Skylines & Desert Dunes", es: "Dubái: Rascacielos Futuristas y Dunas del Desierto", pt: "Dubai: Raciocínio Futurista e Dunas do Deserto" },
          desc: { en: "Witness Burj Khalifa, world-class luxury shopping, and thrilling desert dune safaris in Dubai.", es: "Experimente el Burj Khalifa, compras de lujo y safaris internacionales en las dunas doradas de Dubái.", pt: "Experimente o Burj Khalifa, compras de luxo e safáris internacionais nas dunas douradas de Dubai." },
          location: { en: "Dubai, United Arab Emirates", es: "Dubái, Emiratos Árabes Unidos", pt: "Dubai, Emirados Árabes Unidos" },
          sub: { en: "OUTBOUND LUXURY METROPOLIS", es: "DESTINOS INTERNACIONALES DE LUJO", pt: "DESTINOS INTERNACIONAIS DE LUXO" },
          cta1Text: { en: "Explore Dubai Destinations", es: "Explorar Destinos de Dubái", pt: "Explorar Destinos de Dubai" },
          cta1Link: "/international-trips",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80",
          title: { en: "Maldives Overwater Villas & Island Escapes", es: "Maldivas: Villas Privadas sobre Lagunas Turquesa", pt: "Maldivas: Villas Privadas sobre Lagoas Turquesa" },
          desc: { en: "Escape to private water bungalows suspended over vibrant coral reefs and turquoise lagoons.", es: "Escápese a bungalows de lujo sobre arrecifes de coral vivos y aguas cristalinas en las Maldivas.", pt: "Escape para bangalôs de luxo sobre recifes de coral e águas cristalinas nas Maldivas." },
          location: { en: "Maldives Islands", es: "Islas Maldivas", pt: "Ilhas Maldivas" },
          sub: { en: "OUTBOUND OVERWATER PARADISE", es: "PARAÍSO SOBRE EL AGUA", pt: "PARAÍSO SOBRE A ÁGUA" },
          cta1Text: { en: "Explore Maldives Islands", es: "Explorar Islas Maldivas", pt: "Explorar Ilhas Maldivas" },
          cta1Link: "/international-trips",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80",
          title: { en: "Bali Rice Terraces & Sacred Sea Temples", es: "Bali: Terrazas de Arroz de Ubud y Templos Sagrados", pt: "Bali: Terraços de Arroz de Ubud e Templos Sagrados" },
          desc: { en: "Explore emerald rice terraces, cliffside sunset temples, and luxury beach resorts in Bali.", es: "Explore exuberantes selvas en Ubud, templos acantilados al atardecer y resorts de lujo en Bali.", pt: "Explore florestas em Ubud, templos em falésias ao pôr do sol e resorts de luxo em Bali." },
          location: { en: "Ubud & Seminyak, Bali, Indonesia", es: "Ubud y Seminyak, Bali, Indonesia", pt: "Ubud e Seminyak, Bali, Indonésia" },
          sub: { en: "OUTBOUND TROPICAL SANCTUARIES", es: "SANTUARIOS TROPICALES INTERNACIONALES", pt: "SANTUÁRIOS TROPICAIS INTERNACIONAIS" },
          cta1Text: { en: "Explore Bali Destinations", es: "Explorar Destinos de Bali", pt: "Explorar Destinos de Bali" },
          cta1Link: "/international-trips",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        },
        {
          image: "/images/taj_mahal_sunrise.png",
          title: { en: "Thailand Islands, Phuket Beaches & Golden Temples", es: "Tailandia: Templos Dorados y Playas de Phuket", pt: "Tailândia: Templos Dourados e Praias de Phuket" },
          desc: { en: "Discover Bangkok's golden spires, Chiang Mai elephant sanctuaries, and tropical Phuket beaches.", es: "Descubra los palacios dorados de Bangkok, santuarios de elefantes en Chiang Mai y playas de Phuket.", pt: "Descubra palácios dourados de Bangkok, santuários de elefantes em Chiang Mai e praias de Phuket." },
          location: { en: "Phuket & Bangkok, Thailand", es: "Phuket y Bangkok, Tailandia", pt: "Phuket e Bangkok, Tailândia" },
          sub: { en: "OUTBOUND ISLAND ADVENTURE", es: "PLAYAS E ISLAS INTERNACIONALES", pt: "PRAIAS E ILHAS INTERNACIONAIS" },
          cta1Text: { en: "Thailand Tours", es: "Paquetes Tailandia", pt: "Pacotes Tailândia" },
          cta1Link: "/packages?category=Outbound",
          cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" },
          cta2Link: "/contact"
        }
      ],
      stats: [
        { value: 22, suffix: "", label: { en: "Years of experience", es: "Años de experiencia", pt: "Anos de experiência" } },
        { value: 97, suffix: "%", label: { en: "Retention rate", es: "Tasa de retención", pt: "Taxa de retenção" } },
        { value: 12, suffix: "k", label: { en: "Tours completed", es: "Tour completado", pt: "Tour completado" } },
        { value: 25, suffix: "k", label: { en: "Happy clients", es: "Cliente feliz", pt: "Cliente feliz" } }
      ],
      philosophy: {
        image: "/images/rajasthan_fort_sunset.png",
        title: { en: "Why Choose MH India Trips", es: "Por Qué Elegir MH India Trips", pt: "Por Que Escolher a MH India Trips" },
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
      heroSubtitle: { en: "OUR HERITAGE & LEGACY", es: "NUESTRO LEGADO Y PATRIMONIO", pt: "NOSSO PATRIMÔNIO E LEGADO" },
      heroTitle: { en: "Pioneers of Bespoke Luxury Travel in India", es: "Pioneros en Viajes Privados de Lujo en la India", pt: "Pioneiros em Viagens Privadas de Luxo na Índia" },
      heroDesc: { en: "Headquartered in Jaipur, Rajasthan, MH India Trips is an officially registered partnership firm (GSTIN: 08ACIFM3516H1Z7) crafting private, tailormade journeys with professional chauffeurs and hand-picked royal stays across PAN India.", es: "Con sede en Jaipur, Rajasthan, MH India Trips es una empresa de viajes registrada (GSTIN: 08ACIFM3516H1Z7) que diseña viajes privados a medida con choferes profesionales y hoteles palacio.", pt: "Sediada em Jaipur, Rajastão, a MH India Trips é uma empresa registrada (GSTIN: 08ACIFM3516H1Z7) que cria viagens sob medida com motoristas profissionais e hotéis palácio." },
      storyTitle: { en: "Founded in Jaipur — Born From a Passion for Authentic Hospitality", es: "Fundada en Jaipur — Pasión por la Hospitalidad Auténtica", pt: "Fundada em Jaipur — Paixão pela Hospitalidade Autêntica" },
      storyP1: { en: "Founded in Jaipur over two decades ago, MH India Trips was created to provide international and domestic travelers with an authentic, uncompromised way to explore India. Based in Khatipura Road, Hasanpura, Jaipur, our on-ground management team combines deep regional heritage knowledge with high-end luxury hospitality.", es: "Fundada en Jaipur hace más de dos décadas, MH India Trips nació para ofrecer a los viajeros una forma auténtica de explorar la India sin comprometer la comodidad. Con sede en Jaipur, nuestro equipo combina conocimientos culturales profundos con hospitalidad de lujo.", pt: "Fundada em Jaipur há mais de duas décadas, a MH India Trips nasceu para oferecer aos viajantes uma forma autêntica de explorar a Índia com máximo conforto. Nossa equipe combina conhecimento cultural profundo com hospitalidade de luxo." },
      storyP2: { en: "From private dinners inside 400-year-old desert forts in Jodhpur to seamless luxury SUV transfers with English-speaking chauffeurs and pre-reserved monument tickets, we handle every detail with surgical precision. We don't use rigid group itineraries; every trip is 100% tailor-made to your pace.", es: "Desde cenas privadas en fortalezas del desierto en Jodhpur hasta traslados en SUVs de lujo con choferes de habla inglesa y entradas reservadas, gestionamos cada detalle con precisión. No usamos tours rígidos en grupo; cada viaje es 100% a su medida.", pt: "De jantares privados em fortalezas no deserto em Jodhpur a traslados em SUVs de luxo com motoristas de fala inglesa e ingressos reservados, cuidamos de cada detalhe com precisão. Cada viagem é 100% sob medida." },
      missionTitle: { en: "Our Operational Mission", es: "Nuestra Misión Operativa", pt: "Nossa Missão Operacional" },
      missionText: { en: "To deliver 100% safe, transparent, and legally compliant private travel with zero hidden fees, verified ASI licensed guides, and 24/7 dedicated concierge desk access.", es: "Ofrecer viajes privados 100% seguros, transparentes y conformes a la ley con guías certificados y asistencia 24/7.", pt: "Oferecer viagens privadas 100% seguras, transparentes e conformes à lei com guias certificados e suporte 24/7." },
      visionTitle: { en: "Our Vision", es: "Nuestra Visión", pt: "Nossa Visão" },
      visionText: { en: "To remain the premier private travel designer for luxury travelers globally, recognized for royal heritage access, exceptional chauffeur standards, and authentic cultural encounters.", es: "Ser el diseñador de viajes privados líder en la India, reconocido por nuestro acceso a palacios reales y excelencia en servicio.", pt: "Ser o designer de viagens privadas líder na Índia, reconhecido pelo acesso a palácios reais e excelência em serviço." },
      whyChooseUsSub: { en: "THE MH INDIA TRIPS ADVANTAGE", es: "LA VENTAJA MH INDIA TRIPS", pt: "A VANTAGEM MH INDIA TRIPS" },
      whyChooseUsTitle: { en: "Why Choose MH India Trips", es: "¿Por Qué Elegir MH India Trips?", pt: "Por Que Escolher a MH India Trips?" },
      whyChooseUsDesc: { en: "Authentic, government-verified travel operations crafted without rigid groups or hidden surcharges.", es: "Operaciones de viaje auténticas y verificadas por el gobierno, sin grupos rígidos ni cargos ocultos.", pt: "Operações de viagem autênticas e verificadas pelo governo, sem grupos rígidos nem taxas ocultas." },
      whyPillars: [
        {
          title: { en: "100% Government Certified & GST Compliant", es: "100% Certificado por el Gobierno y GST", pt: "100% Certificado pelo Governo e GST" },
          desc: { en: "Officially registered partnership firm under Form GST REG-06 with active GSTIN 08ACIFM3516H1Z7. Official GST tax invoices issued for every booking.", es: "Empresa legalmente registrada con GSTIN 08ACIFM3516H1Z7. Emitimos facturas oficiales para todas las reservas.", pt: "Empresa legalmente registrada com GSTIN 08ACIFM3516H1Z7. Emitimos faturas oficiais para todas as reservas." }
        },
        {
          title: { en: "100% Private Fleet & Professional Chauffeurs", es: "Flota 100% Privada y Choferes Profesionales", pt: "Frota 100% Privada e Motoristas Profissionais" },
          desc: { en: "Dedicated English-speaking professional drivers with air-conditioned luxury SUVs (Innova Crysta, Fortuner) assigned exclusively to your group.", es: "Choferes profesionales de habla inglesa con vehículos SUV de lujo (Innova Crysta, Fortuner) asignados exclusivamente.", pt: "Motoristas profissionais de fala inglesa com veículos SUV de luxo atribuídos exclusivamente ao seu grupo." }
        },
        {
          title: { en: "Official ASI Licensed Local Heritage Guides", es: "Guías Oficiales Certificados por el Gobierno", pt: "Guias Oficiais Certificados pelo Governo" },
          desc: { en: "Government-certified local guides at Taj Mahal, Amber Fort, and heritage circuits to ensure authentic history without commercial shopping traps.", es: "Guías locales oficiales certificados en monumentos históricos para garantizar historia auténtica sin paradas comerciales obligatorias.", pt: "Guias locais oficiais certificados em monumentos históricos para garantir história autêntica sem paradas comerciais." }
        },
        {
          title: { en: "Hand-Curated Royal Palace & Heritage Stays", es: "Estancias Seleccionadas en Palacios Reales", pt: "Estadias Selecionadas em Palácios Reais" },
          desc: { en: "Pre-vetted bookings inside restored royal fortresses, authentic heritage Havelis, luxury wellness resorts, and private backwater houseboats.", es: "Reservas verificadas en palacios reales restaurados, havelis históricas, resorts de bienestar y casas flotantes privadas.", pt: "Reservas verificadas em palácios reais restaurados, havelis históricas, resorts de bem-estar e barcos privados." }
        },
        {
          title: { en: "24/7 Boots-on-Ground Operations Desk", es: "Mesa de Operaciones y Concierge 24/7", pt: "Central de Operações e Concierge 24/7" },
          desc: { en: "Direct WhatsApp connection line with your dedicated trip manager from your airport landing until your departure flight.", es: "Contacto directo por WhatsApp con su gestor de viaje dedicado desde su llegada al aeropuerto hasta su vuelo de regreso.", pt: "Contato direto por WhatsApp com seu gerente de viagem dedicado do desembarque ao voo de volta." }
        },
        {
          title: { en: "Transparent Pricing & Guaranteed Entry Permits", es: "Precios Transparentes y Permisos Garantizados", pt: "Preços Transparentes e Entradas Garantidas" },
          desc: { en: "All monument entry passes, toll taxes, fuel, driver allowances, and taxes included upfront with zero surprise surcharges.", es: "Entradas a monumentos, peajes, combustible y tasas incluidas por adelantado sin cargos sorpresa.", pt: "Ingressos de monumentos, pedágios, combustível e taxas incluídos antecipadamente sem custos surpresa." }
        }
      ],
      team: [
        { name: "Rahul Sharma", role: "Founder & Lead Travel Designer", img: "/images/team_rahul.png", desc: "Over 22 years of hands-on expertise curating ultra-luxury private safaris and royal palace stays across India." },
        { name: "Priya Patel", role: "Co-Founder & Senior Destination Specialist", img: "/images/team_priya.png", desc: "Specializes in Rajasthan heritage hospitality, Kerala wellness retreats, and seamless international outbound itineraries." }
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
      email: { en: "info@mhindiatrips.com", es: "info@mhindiatrips.com", pt: "info@mhindiatrips.com" },
      phone: { en: "+91 9314635830", es: "+91 9314635830", pt: "+91 9314635830" },
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
    id: "disclaimer",
    isCustom: false,
    title: { en: "Legal Disclaimer", es: "Aviso Legal", pt: "Aviso Legal" },
    heroImage: "",
    content: {
      body: { 
        en: "<p>The information provided on MH India Trips is for general travel information and planning purposes. All tour packages, monument timings, tariffs, and itineraries are subject to seasonal revisions, availability, and local government regulations.</p>", 
        es: "<p>La información proporcionada en MH India Trips tiene fines generales de información y planificación de viajes. Todos los paquetes, horarios de monumentos y tarifas están sujetos a disponibilidad y regulaciones locales.</p>", 
        pt: "<p>As informações fornecidas na MH India Trips destinam-se a fins de informação e planejamento de viagens. Todos os pacotes e horários estão sujeitos a disponibilidade e regulamentações locais.</p>" 
      },
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

function getFreshPagesCache(): any[] {
  const rawPagesCache = loadLocalData("pages", []);
  return [...defaultSystemPages.map(sp => {
    const existing = rawPagesCache.find((p: any) => p.id === sp.id);
    return existing ? { ...sp, ...existing, isCustom: false } : sp;
  }), ...rawPagesCache.filter((p: any) => !defaultSystemPages.some(sp => sp.id === p.id))];
}
let pagesCache = getFreshPagesCache();

let isFirestoreHealthy = true;

function withTimeout<T>(promise: Promise<T>, ms: number = 2000): Promise<T> {
  const timeoutMs = isServerlessEnv ? 600 : ms;
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error("FIRESTORE_TIMEOUT")), timeoutMs))
  ]);
}

async function fetchCollectionDocs(colName: string): Promise<any[] | null> {
  const adminDb = getAdminFirestore();
  if (adminDb) {
    try {
      const snapshot: any = await withTimeout(adminDb.collection(colName).get(), 5000);
      return snapshot.docs.map((d: any) => ({ id: d.id, ...d.data() }));
    } catch (e: any) {
      console.warn(`[db] Admin SDK collection(${colName}).get() fallback to local JSON:`, e.message || e);
    }
  }
  if (useFirestore && firestore) {
    try {
      const snapshot: any = await withTimeout(getDocs(collection(firestore, colName)), 5000);
      return snapshot.docs.map((d: any) => ({ id: d.id, ...d.data() }));
    } catch (e: any) {
      console.warn(`[db] Web SDK collection(${colName}).get() error or timeout, falling back:`, e.message || e);
    }
  }
  return null;
}

async function writeDoc(colName: string, docId: string, data: any, merge: boolean = false): Promise<boolean> {
  const adminDb = getAdminFirestore();
  if (adminDb) {
    try {
      await adminDb.collection(colName).doc(docId).set(data, { merge });
      return true;
    } catch (e: any) {
      console.warn(`[db] Admin SDK doc(${colName}/${docId}).set() error:`, e.message || e);
    }
  }
  if (useFirestore && firestore) {
    try {
      await withTimeout(setDoc(doc(firestore, colName, docId), data, { merge }));
      return true;
    } catch (e: any) {
      console.warn(`[db] Web SDK doc(${colName}/${docId}).set() error or timeout, falling back:`, e.message || e);
      if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("TIMEOUT") || e.message.includes("disabled"))) {
        useFirestore = false;
      }
    }
  }
  return false;
}

async function addDocToCollection(colName: string, data: any): Promise<string | null> {
  const adminDb = getAdminFirestore();
  if (adminDb) {
    try {
      const ref = await adminDb.collection(colName).add(data);
      return ref.id;
    } catch (e: any) {
      console.warn(`[db] Admin SDK collection(${colName}).add() error:`, e.message || e);
    }
  }
  if (useFirestore && firestore) {
    try {
      const ref = await withTimeout(addDoc(collection(firestore, colName), data));
      return ref.id;
    } catch (e: any) {
      console.warn(`[db] Web SDK collection(${colName}).add() error or timeout, falling back:`, e.message || e);
      if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("TIMEOUT") || e.message.includes("disabled"))) {
        useFirestore = false;
      }
    }
  }
  return null;
}

async function deleteDocFromCollection(colName: string, docId: string): Promise<boolean> {
  const adminDb = getAdminFirestore();
  if (adminDb) {
    try {
      await adminDb.collection(colName).doc(docId).delete();
      return true;
    } catch (e: any) {
      console.warn(`[db] Admin SDK doc(${colName}/${docId}).delete() error:`, e.message || e);
    }
  }
  if (useFirestore && firestore) {
    try {
      await withTimeout(deleteDoc(doc(firestore, colName, docId)));
      return true;
    } catch (e: any) {
      console.warn(`[db] Web SDK doc(${colName}/${docId}).delete() error or timeout, falling back:`, e.message || e);
      if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("TIMEOUT") || e.message.includes("disabled"))) {
        useFirestore = false;
      }
    }
  }
  return false;
}

// Merge collection data using timestamp comparison and isDeleted checks
function mergeCollectionData(localList: any[], firestoreList: any[] | null, idKey: (item: any) => string): any[] {
  const localData = Array.isArray(localList) ? localList : [];
  if (!firestoreList || firestoreList.length === 0) {
    return localData.filter((item: any) => item && item.isDeleted !== true);
  }

  const firestoreMap = new Map(firestoreList.map((item: any) => [idKey(item), item]));

  const merged = localData
    .map((localItem: any) => {
      if (!localItem) return null;
      if (localItem.isDeleted === true) return null;
      const key = idKey(localItem);
      if (firestoreMap.has(key)) {
        const fsDoc = firestoreMap.get(key);
        if (fsDoc.isDeleted === true) return null;
        if (localItem.updatedAt && fsDoc.updatedAt && localItem.updatedAt > fsDoc.updatedAt) {
          return { ...fsDoc, ...localItem };
        }
        return { ...localItem, ...fsDoc };
      }
      return localItem;
    })
    .filter((item: any) => item && item.isDeleted !== true);

  const localKeys = new Set(localData.map((item: any) => idKey(item)));
  const extraItems = firestoreList.filter((item: any) => item && !localKeys.has(idKey(item)) && item.isDeleted !== true);

  return [...merged, ...extraItems];
}

export const db = {
  inquiries: {
    findMany: async () => {
      const docs = await fetchCollectionDocs("inquiries");
      if (docs) {
        return docs;
      }
      inquiriesCache = loadLocalData("inquiries", inquiriesCache);
      return inquiriesCache;
    },
    create: async (data: any) => {
      const payload = {
        status: "NEW",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...data
      };
      const createdId = await addDocToCollection("inquiries", payload);
      if (createdId) {
        return { id: createdId, ...payload };
      }
      const newInquiry = {
        id: Math.random().toString(36).substring(2, 11),
        ...payload
      };
      inquiriesCache.push(newInquiry);
      saveLocalData("inquiries", inquiriesCache);
      return newInquiry;
    },
    update: async (id: string, data: any) => {
      const payload = { ...data, updatedAt: new Date().toISOString() };
      const success = await writeDoc("inquiries", id, payload, true);
      if (success) {
        return { id, ...payload };
      }
      const idx = inquiriesCache.findIndex((i: any) => i.id === id);
      if (idx !== -1) {
        inquiriesCache[idx] = { ...inquiriesCache[idx], ...payload };
        saveLocalData("inquiries", inquiriesCache);
        return inquiriesCache[idx];
      }
      return null;
    },
    delete: async (id: string) => {
      await deleteDocFromCollection("inquiries", id);
      inquiriesCache = inquiriesCache.filter((i: any) => i.id !== id);
      saveLocalData("inquiries", inquiriesCache);
      return { id };
    }
  },

  blogs: {
    findMany: async () => {
      try {
        const freshPath = path.join(process.cwd(), "src", "data", "fallback", "blogs.json");
        if (fs.existsSync(freshPath)) {
          const freshRaw = fs.readFileSync(freshPath, "utf-8");
          if (freshRaw && freshRaw.length > 50) {
            const freshData = JSON.parse(freshRaw);
            if (Array.isArray(freshData)) {
              blogsCache = freshData;
            }
          }
        }
      } catch (e: any) {
        console.warn("[db] blogs.findMany file read error:", e.message);
      }

      const localData = blogsCache && blogsCache.length > 0 ? blogsCache : mergedBlogs;
      const firestoreData = await fetchCollectionDocs("blogs");
      return mergeCollectionData(localData, firestoreData, (b: any) => b.slug || b.id);
    },
    findUnique: async (slug: string) => {
      const allBlogs = await db.blogs.findMany();
      if (!slug) return null;
      const targetSlug = decodeURIComponent(slug).toLowerCase().trim();
      return allBlogs.find((b: any) => 
        b.slug === slug || 
        (b.slug && b.slug.toLowerCase().trim() === targetSlug)
      ) || null;
    },
    create: async (data: any) => {
      const slug = data.slug || Math.random().toString(36).substring(2, 11);
      const newBlog = {
        slug,
        createdAt: new Date().toISOString().split("T")[0],
        updatedAt: new Date().toISOString(),
        readingTime: 5,
        author: "MHIndiaTrips Editor",
        isDeleted: false,
        ...data
      };
      await writeDoc("blogs", slug, newBlog);
      const existingIdx = blogsCache.findIndex((b: any) => b.slug === slug || b.id === slug);
      if (existingIdx >= 0) {
        blogsCache[existingIdx] = { ...blogsCache[existingIdx], ...newBlog };
      } else {
        blogsCache.push(newBlog);
      }
      saveLocalData("blogs", blogsCache);
      return newBlog;
    },
    update: async (slug: string, data: any) => {
      const payload = { ...data, updatedAt: new Date().toISOString(), isDeleted: false };
      await writeDoc("blogs", slug, payload, true);
      blogsCache = loadLocalData("blogs", blogsCache);
      const idx = blogsCache.findIndex((b: any) => b.slug === slug || b.id === slug);
      let updatedBlog;
      if (idx !== -1) {
        blogsCache[idx] = { ...blogsCache[idx], ...payload };
        updatedBlog = blogsCache[idx];
      } else {
        updatedBlog = { slug, ...payload };
        blogsCache.push(updatedBlog);
      }
      saveLocalData("blogs", blogsCache);
      return updatedBlog;
    },
    delete: async (slug: string) => {
      const payload = { isDeleted: true, updatedAt: new Date().toISOString() };
      await writeDoc("blogs", slug, payload, true);
      const idx = blogsCache.findIndex((b: any) => b.slug === slug || b.id === slug);
      if (idx !== -1) {
        blogsCache[idx] = { ...blogsCache[idx], ...payload };
      } else {
        blogsCache.push({ slug, id: slug, ...payload });
      }
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

      let localData = statesCache.filter((s: any) => s && s.id && s.id !== "undefined");
      if (localData.length !== statesCache.length) {
        statesCache = localData;
        saveLocalData("states", statesCache);
      }

      const firestoreData = await fetchCollectionDocs("states");
      const cleanFirestoreData = firestoreData ? firestoreData.filter((s: any) => s && s.id && s.id !== "undefined") : null;
      const res = mergeCollectionData(localData, cleanFirestoreData, (s: any) => s.id || s.slug);
      return res.sort((a: any, b: any) => (a.displayOrder || 0) - (b.displayOrder || 0));
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
        updatedAt: new Date().toISOString(),
        isDeleted: false,
        ...data
      };
      await writeDoc("states", id, newState);
      const existingIdx = statesCache.findIndex((s: any) => s.id === id || s.slug === id);
      if (existingIdx >= 0) {
        statesCache[existingIdx] = { ...statesCache[existingIdx], ...newState };
      } else {
        statesCache.push(newState);
      }
      saveLocalData("states", statesCache);
      return newState;
    },
    update: async (id: string, data: any) => {
      const payload = { ...data, id, updatedAt: new Date().toISOString(), isDeleted: false };
      await writeDoc("states", id, payload, true);
      statesCache = loadLocalData("states", statesCache);
      const localIdx = statesCache.findIndex((s: any) => s.id === id || s.slug === id || s.slug?.en === id);
      let updatedState;
      if (localIdx !== -1) {
        statesCache[localIdx] = { ...statesCache[localIdx], ...payload };
        updatedState = statesCache[localIdx];
      } else {
        updatedState = { id, ...payload };
        statesCache.push(updatedState);
      }
      saveLocalData("states", statesCache);
      return updatedState;
    },
    delete: async (id: string) => {
      const payload = { isDeleted: true, updatedAt: new Date().toISOString() };
      await writeDoc("states", id, payload, true);
      const idx = statesCache.findIndex((s: any) => s.id === id || s.slug === id);
      if (idx !== -1) {
        statesCache[idx] = { ...statesCache[idx], ...payload };
      } else {
        statesCache.push({ id, slug: id, ...payload });
      }
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

      let localData = citiesCache.filter((c: any) => c && c.id && c.id !== "undefined" && c.stateId && c.stateId !== "undefined");
      if (localData.length !== citiesCache.length) {
        citiesCache = localData;
        saveLocalData("cities", citiesCache);
      }

      const firestoreData = await fetchCollectionDocs("cities");
      const cleanFirestoreData = firestoreData ? firestoreData.filter((c: any) => c && c.id && c.id !== "undefined" && c.stateId && c.stateId !== "undefined") : null;
      const res = mergeCollectionData(localData, cleanFirestoreData, (c: any) => c.id || c.slug);
      return res.sort((a: any, b: any) => (a.displayOrder || 0) - (b.displayOrder || 0));
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
        updatedAt: new Date().toISOString(),
        isDeleted: false,
        ...data
      };
      await writeDoc("cities", id, newCity);
      const existingIdx = citiesCache.findIndex((c: any) => c.id === id || c.slug === id);
      if (existingIdx >= 0) {
        citiesCache[existingIdx] = { ...citiesCache[existingIdx], ...newCity };
      } else {
        citiesCache.push(newCity);
      }
      saveLocalData("cities", citiesCache);
      return newCity;
    },
    update: async (id: string, data: any) => {
      const payload = { ...data, id, updatedAt: new Date().toISOString(), isDeleted: false };
      await writeDoc("cities", id, payload, true);
      citiesCache = loadLocalData("cities", citiesCache);
      const localIdx = citiesCache.findIndex((c: any) => c.id === id || c.slug === id || c.slug?.en === id);
      let updatedCity;
      if (localIdx !== -1) {
        citiesCache[localIdx] = { ...citiesCache[localIdx], ...payload };
        updatedCity = citiesCache[localIdx];
      } else {
        updatedCity = { id, ...payload };
        citiesCache.push(updatedCity);
      }
      saveLocalData("cities", citiesCache);
      return updatedCity;
    },
    delete: async (id: string) => {
      const payload = { isDeleted: true, updatedAt: new Date().toISOString() };
      await writeDoc("cities", id, payload, true);
      const idx = citiesCache.findIndex((c: any) => c.id === id || c.slug === id);
      if (idx !== -1) {
        citiesCache[idx] = { ...citiesCache[idx], ...payload };
      } else {
        citiesCache.push({ id, slug: id, ...payload });
      }
      saveLocalData("cities", citiesCache);
      return { id };
    }
  },

  foods: {
    findMany: async () => {
      foodsCache = loadLocalData("foods", mergedFoods);
      const localData = foodsCache;
      const firestoreData = await fetchCollectionDocs("foods");
      return mergeCollectionData(localData, firestoreData, (f: any) => f.slug || f.id);
    },
    findUnique: async (slug: string) => {
      const allFoods = await db.foods.findMany();
      return allFoods.find((f: any) => f.slug === slug || f.id === slug) || null;
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
        updatedAt: new Date().toISOString(),
        isDeleted: false,
        ...data
      };
      await writeDoc("foods", slug, newFood);
      const existingIdx = foodsCache.findIndex((f: any) => f.slug === slug || f.id === slug);
      if (existingIdx >= 0) {
        foodsCache[existingIdx] = { ...foodsCache[existingIdx], ...newFood };
      } else {
        foodsCache.push(newFood);
      }
      saveLocalData("foods", foodsCache);
      return newFood;
    },
    update: async (slug: string, data: any) => {
      const payload = { ...data, updatedAt: new Date().toISOString(), isDeleted: false };
      await writeDoc("foods", slug, payload, true);
      foodsCache = loadLocalData("foods", foodsCache);
      const idx = foodsCache.findIndex((f: any) => f.slug === slug || f.id === slug);
      let updatedFood;
      if (idx !== -1) {
        foodsCache[idx] = { ...foodsCache[idx], ...payload };
        updatedFood = foodsCache[idx];
      } else {
        updatedFood = { slug, ...payload };
        foodsCache.push(updatedFood);
      }
      saveLocalData("foods", foodsCache);
      return updatedFood;
    },
    delete: async (slug: string) => {
      const payload = { isDeleted: true, updatedAt: new Date().toISOString() };
      await writeDoc("foods", slug, payload, true);
      const idx = foodsCache.findIndex((f: any) => f.slug === slug || f.id === slug);
      if (idx !== -1) {
        foodsCache[idx] = { ...foodsCache[idx], ...payload };
      } else {
        foodsCache.push({ slug, id: slug, ...payload });
      }
      saveLocalData("foods", foodsCache);
      return { slug };
    }
  },

  testimonials: {
    findMany: async () => {
      testimonialsCache = loadLocalData("testimonials", initialTestimonials);
      const localData = testimonialsCache;
      const firestoreData = await fetchCollectionDocs("testimonials");
      return mergeCollectionData(localData, firestoreData, (t: any) => t.id);
    },
    create: async (data: any) => {
      const id = data.id || Math.random().toString(36).substring(2, 11);
      const newTestimonial = {
        id,
        updatedAt: new Date().toISOString(),
        isDeleted: false,
        ...data
      };
      await writeDoc("testimonials", id, newTestimonial);
      const existingIdx = testimonialsCache.findIndex((t: any) => t.id === id);
      if (existingIdx >= 0) {
        testimonialsCache[existingIdx] = { ...testimonialsCache[existingIdx], ...newTestimonial };
      } else {
        testimonialsCache.push(newTestimonial);
      }
      saveLocalData("testimonials", testimonialsCache);
      return newTestimonial;
    },
    update: async (id: string, data: any) => {
      const payload = { ...data, updatedAt: new Date().toISOString(), isDeleted: false };
      await writeDoc("testimonials", id, payload, true);
      testimonialsCache = loadLocalData("testimonials", testimonialsCache);
      const idx = testimonialsCache.findIndex((t: any) => t.id === id);
      let updatedItem;
      if (idx !== -1) {
        testimonialsCache[idx] = { ...testimonialsCache[idx], ...payload };
        updatedItem = testimonialsCache[idx];
      } else {
        updatedItem = { id, ...payload };
        testimonialsCache.push(updatedItem);
      }
      saveLocalData("testimonials", testimonialsCache);
      return updatedItem;
    },
    delete: async (id: string) => {
      const payload = { isDeleted: true, updatedAt: new Date().toISOString() };
      await writeDoc("testimonials", id, payload, true);
      const idx = testimonialsCache.findIndex((t: any) => t.id === id);
      if (idx !== -1) {
        testimonialsCache[idx] = { ...testimonialsCache[idx], ...payload };
      } else {
        testimonialsCache.push({ id, ...payload });
      }
      saveLocalData("testimonials", testimonialsCache);
      return { id };
    }
  },

  tourPackages: {
    findMany: async () => {
      try {
        const freshPath = path.join(process.cwd(), "src", "data", "fallback", "tour_packages.json");
        if (fs.existsSync(freshPath)) {
          const freshRaw = fs.readFileSync(freshPath, "utf-8");
          if (freshRaw && freshRaw.length > 50) {
            const freshData = JSON.parse(freshRaw);
            if (Array.isArray(freshData)) {
              tourPackagesCache = freshData;
            }
          }
        }
      } catch (e: any) {
        console.warn("[db] tourPackages.findMany file read error:", e.message);
      }

      const localData = Array.isArray(tourPackagesCache) ? tourPackagesCache : [];
      const firestoreData = await fetchCollectionDocs("tour_packages");
      return mergeCollectionData(localData, firestoreData, (p: any) => p.slug || p.id);
    },
    findUnique: async (slug: string) => {
      const allPkgs = await db.tourPackages.findMany();
      return allPkgs.find((p: any) => p.slug === slug || p.id === slug) || null;
    },
    create: async (data: any) => {
      const slug = data.slug || data.id || Math.random().toString(36).substring(2, 11);
      const newPkg = {
        id: slug,
        slug,
        highlights: [],
        updatedAt: new Date().toISOString(),
        isDeleted: false,
        ...data
      };
      await writeDoc("tour_packages", slug, newPkg);
      const existingIdx = tourPackagesCache.findIndex((p: any) => p.slug === slug || p.id === slug);
      if (existingIdx >= 0) {
        tourPackagesCache[existingIdx] = { ...tourPackagesCache[existingIdx], ...newPkg };
      } else {
        tourPackagesCache.push(newPkg);
      }
      saveLocalData("tour_packages", tourPackagesCache);
      return newPkg;
    },
    update: async (slug: string, data: any) => {
      const payload = { ...data, updatedAt: new Date().toISOString(), isDeleted: false };
      await writeDoc("tour_packages", slug, payload, true);
      const idx = tourPackagesCache.findIndex((p: any) => p.slug === slug || p.id === slug);
      if (idx !== -1) {
        tourPackagesCache[idx] = { ...tourPackagesCache[idx], ...payload };
        saveLocalData("tour_packages", tourPackagesCache);
        return tourPackagesCache[idx];
      }
      const newPkg = { id: slug, slug, ...payload };
      tourPackagesCache.push(newPkg);
      saveLocalData("tour_packages", tourPackagesCache);
      return newPkg;
    },
    delete: async (slug: string) => {
      const payload = { isDeleted: true, updatedAt: new Date().toISOString() };
      await writeDoc("tour_packages", slug, payload, true);
      const idx = tourPackagesCache.findIndex((p: any) => p.slug === slug || p.id === slug);
      if (idx !== -1) {
        tourPackagesCache[idx] = { ...tourPackagesCache[idx], ...payload };
      } else {
        tourPackagesCache.push({ id: slug, slug, ...payload });
      }
      saveLocalData("tour_packages", tourPackagesCache);
      return { slug };
    }
  },
  pages: {
    findMany: async () => {
      pagesCache = getFreshPagesCache();
      const firestoreData = await fetchCollectionDocs("pages");
      const res = mergeCollectionData(pagesCache, firestoreData, (p: any) => p.id);
      return cleanEmail(res);
    },
    findUnique: async (id: string) => {
      const allPages = await db.pages.findMany();
      return allPages.find((p: any) => p.id === id) || null;
    },
    create: async (data: any) => {
      const id = data.id || Math.random().toString(36).substring(2, 11);
      const newPage = {
        id,
        isCustom: true,
        title: { en: "", es: "", pt: "" },
        content: {},
        updatedAt: new Date().toISOString(),
        isDeleted: false,
        ...data
      };
      await writeDoc("pages", id, newPage);
      pagesCache = getFreshPagesCache();
      const existingIdx = pagesCache.findIndex((p: any) => p.id === id);
      if (existingIdx >= 0) {
        pagesCache[existingIdx] = { ...pagesCache[existingIdx], ...newPage };
      } else {
        pagesCache.push(newPage);
      }
      saveLocalData("pages", pagesCache);
      return newPage;
    },
    update: async (id: string, data: any) => {
      const payload = { ...data, updatedAt: new Date().toISOString(), isDeleted: false };
      await writeDoc("pages", id, payload, true);
      pagesCache = getFreshPagesCache();
      const idx = pagesCache.findIndex((p: any) => p.id === id);
      let updatedPage;
      if (idx !== -1) {
        pagesCache[idx] = { ...pagesCache[idx], ...payload };
        updatedPage = pagesCache[idx];
      } else {
        updatedPage = { id, isCustom: true, ...payload };
        pagesCache.push(updatedPage);
      }
      saveLocalData("pages", pagesCache);
      return updatedPage;
    },
    delete: async (id: string) => {
      const payload = { isDeleted: true, updatedAt: new Date().toISOString() };
      await writeDoc("pages", id, payload, true);
      pagesCache = getFreshPagesCache();
      const idx = pagesCache.findIndex((p: any) => p.id === id);
      if (idx !== -1) {
        pagesCache[idx] = { ...pagesCache[idx], ...payload };
      } else {
        pagesCache.push({ id, ...payload });
      }
      saveLocalData("pages", pagesCache);
      return { id };
    }
  },

  settings: {
    findMany: async () => {
      settingsCache = loadLocalData("settings", settingsCache);
      const localData = settingsCache;
      const firestoreData = await fetchCollectionDocs("settings");
      const res = mergeCollectionData(localData, firestoreData, (s: any) => s.id);
      return cleanEmail(res);
    },
    findUnique: async (id: string) => {
      const allSettings = await db.settings.findMany();
      const res = allSettings.find((s: any) => s.id === id) || null;
      return cleanEmail(res);
    },
    update: async (id: string, data: any) => {
      const payload = { ...data, updatedAt: new Date().toISOString() };
      await writeDoc("settings", id, payload, true);
      const all = await db.settings.findMany();
      const idx = all.findIndex((s: any) => s.id === id);
      if (idx !== -1) {
        all[idx] = { ...all[idx], ...payload };
        saveLocalData("settings", all);
        settingsCache = all;
        return all[idx];
      } else {
        const newRecord = { id, ...payload };
        all.push(newRecord);
        saveLocalData("settings", all);
        settingsCache = all;
        return newRecord;
      }
    }
  },

  outbound: {
    findMany: async () => {
      outboundCache = loadLocalData("outbound", outboundCache || outboundDestinations);
      const firestoreData = await fetchCollectionDocs("outbound");
      const res = mergeCollectionData(outboundCache, firestoreData, (o: any) => o.slug || o.id);
      return cleanEmail(res);
    },
    findUnique: async (slug: string) => {
      const all = await db.outbound.findMany();
      return all.find((o: any) => o.slug === slug || o.id === slug) || null;
    },
    create: async (data: any) => {
      const slug = data.slug || data.title?.en?.toLowerCase().replace(/\s+/g, '-') || Math.random().toString(36).substring(2, 9);
      const newItem = { slug, updatedAt: new Date().toISOString(), isDeleted: false, ...data };
      await writeDoc("outbound", slug, newItem);
      const existingIdx = outboundCache.findIndex((o: any) => o.slug === slug || o.id === slug);
      if (existingIdx >= 0) {
        outboundCache[existingIdx] = { ...outboundCache[existingIdx], ...newItem };
      } else {
        outboundCache.push(newItem);
      }
      saveLocalData("outbound", outboundCache);
      return newItem;
    },
    update: async (slug: string, data: any) => {
      const payload = { ...data, updatedAt: new Date().toISOString(), isDeleted: false };
      await writeDoc("outbound", slug, payload, true);
      outboundCache = loadLocalData("outbound", outboundCache);
      const idx = outboundCache.findIndex((o: any) => o.slug === slug || o.id === slug);
      let updatedItem;
      if (idx !== -1) {
        outboundCache[idx] = { ...outboundCache[idx], ...payload };
        updatedItem = outboundCache[idx];
      } else {
        updatedItem = { slug, ...payload };
        outboundCache.push(updatedItem);
      }
      saveLocalData("outbound", outboundCache);
      return updatedItem;
    },
    delete: async (slug: string) => {
      const payload = { isDeleted: true, updatedAt: new Date().toISOString() };
      await writeDoc("outbound", slug, payload, true);
      const idx = outboundCache.findIndex((o: any) => o.slug === slug || o.id === slug);
      if (idx !== -1) {
        outboundCache[idx] = { ...outboundCache[idx], ...payload };
      } else {
        outboundCache.push({ slug, id: slug, ...payload });
      }
      saveLocalData("outbound", outboundCache);
      return { slug };
    }
  },
  nationalParks: {
    findMany: async () => {
      nationalParksCache = loadLocalData("national_parks", nationalParksCache || []);
      const firestoreData = await fetchCollectionDocs("national_parks");
      const res = mergeCollectionData(nationalParksCache, firestoreData, (p: any) => p.id || p.slug);
      return cleanEmail(res);
    },
    findUnique: async (id: string) => {
      const all = await db.nationalParks.findMany();
      return all.find((p: any) => p.id === id || p.slug === id) || null;
    },
    create: async (data: any) => {
      const id = data.id || data.slug || Math.random().toString(36).substring(2, 9);
      const newItem = { id, slug: id, updatedAt: new Date().toISOString(), isDeleted: false, ...data };
      await writeDoc("national_parks", id, newItem);
      const existingIdx = nationalParksCache.findIndex((p: any) => p.id === id || p.slug === id);
      if (existingIdx >= 0) {
        nationalParksCache[existingIdx] = { ...nationalParksCache[existingIdx], ...newItem };
      } else {
        nationalParksCache.push(newItem);
      }
      saveLocalData("national_parks", nationalParksCache);
      return newItem;
    },
    update: async (id: string, data: any) => {
      const payload = { ...data, updatedAt: new Date().toISOString(), isDeleted: false };
      await writeDoc("national_parks", id, payload, true);
      nationalParksCache = loadLocalData("national_parks", nationalParksCache);
      const idx = nationalParksCache.findIndex((p: any) => p.id === id || p.slug === id);
      let updatedItem;
      if (idx !== -1) {
        nationalParksCache[idx] = { ...nationalParksCache[idx], ...payload };
        updatedItem = nationalParksCache[idx];
      } else {
        updatedItem = { id, slug: id, ...payload };
        nationalParksCache.push(updatedItem);
      }
      saveLocalData("national_parks", nationalParksCache);
      return updatedItem;
    },
    delete: async (id: string) => {
      const payload = { isDeleted: true, updatedAt: new Date().toISOString() };
      await writeDoc("national_parks", id, payload, true);
      const idx = nationalParksCache.findIndex((p: any) => p.id === id || p.slug === id);
      if (idx !== -1) {
        nationalParksCache[idx] = { ...nationalParksCache[idx], ...payload };
      } else {
        nationalParksCache.push({ id, slug: id, ...payload });
      }
      saveLocalData("national_parks", nationalParksCache);
      return { id };
    }
  }
};


