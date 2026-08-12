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
import fs from "fs";
import path from "path";

// Merge additional data
const mergedStates = [...statesData, ...additionalStates];
const mergedFoods = [...foodsData, ...additionalFoods];
const mergedBlogs = [...blogsData, ...additionalBlogs];
const mergedPackages = [...initialTourPackages, ...additionalPackages];

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
let foodsCache = loadLocalData("foods", mergedFoods);
let testimonialsCache = loadLocalData("testimonials", initialTestimonials);
let tourPackagesCache = loadLocalData("tour_packages", mergedPackages);

// Default system pages that every website has
const defaultSystemPages = [
  {
    id: "homepage",
    isCustom: false,
    title: { en: "Homepage", es: "Página Principal", pt: "Página Inicial" },
    heroImage: "/images/rajasthan_fort_sunset.png",
    content: {
      slides: [
        { image: "/images/taj_mahal_sunrise.png", title: { en: "Experience India in Absolute Luxury", es: "Viaje a India en Lujo Absoluto", pt: "Viaje para a Índia em Luxo Absoluto" }, desc: { en: "Curated itineraries featuring private guides, heritage palace hotels, and bespoke travel arrangements.", es: "Itinerarios a medida con guías privados, hoteles palacio y servicios exclusivos.", pt: "Itinerários à medida com guias privados, hotéis palácio e serviços exclusivos." }, location: { en: "Taj Mahal, Agra", es: "Taj Mahal, Agra", pt: "Taj Mahal, Agra" }, sub: { en: "BESPOKE PRIVATE TOURS", es: "TOURS PRIVADOS A MEDIDA", pt: "TOURS PRIVADOS SOB MEDIDA" }, cta1Text: { en: "See Our Packages", es: "Ver Paquetes", pt: "Ver Pacotes" }, cta1Link: "/packages", cta2Text: { en: "Inquire Now", es: "Consultar Ahora", pt: "Consultar Agora" }, cta2Link: "/contact" },
        { image: "/images/rajasthan_fort_sunset.png", title: { en: "The Royal Magic of Rajasthan", es: "La Magia Real de Rajastán", pt: "A Magia Real do Rajastão" }, desc: { en: "Explore desert dunes, medieval forts, and dine inside authentic royal lakeside palaces.", es: "Explore dunas de arena, fuertes medievales y cene dentro de auténticos palacios reales.", pt: "Explore dunas de areia, fortes medievais e jante dentro de autênticos palácios reais." }, location: { en: "Mehrangarh Fort, Jodhpur", es: "Fuerte Mehrangarh, Jodhpur", pt: "Forte Mehrangarh, Jodhpur" }, sub: { en: "HERITAGE PALACES", es: "PALACIOS HISTÓRICOS", pt: "PALÁCIOS HISTÓRICOS" }, cta1Text: { en: "Explore Rajasthan", es: "Explorar Rajastán", pt: "Explorar Rajastão" }, cta1Link: "/destinations/rajasthan", cta2Text: { en: "Royal Packages", es: "Paquetes Reales", pt: "Pacotes Reais" }, cta2Link: "/packages" },
        { image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200", title: { en: "Tropical Serenity in Kerala", es: "Serenidad Tropical en Kerala", pt: "Serenidade Tropical em Kerala" }, desc: { en: "Cruise through emerald backwaters and rejuvenate with authentic wellness Ayurvedic rituals.", es: "Navegue por canales de esmeralda y rejuvenezca con auténticos rituales ayurvédicos.", pt: "Navegue por canais de esmeralda e rejuvenesça com autênticos rituais ayurvédicos." }, location: { en: "Backwaters, Alleppey", es: "Remansos de Alleppey, Kerala", pt: "Canais de Alleppey, Kerala" }, sub: { en: "HOLISTIC RETREATS", es: "RETIROS HOLÍSTICOS", pt: "RETIROS HOLÍSTICOS" }, cta1Text: { en: "Kerala Retreats", es: "Kerala Retiros", pt: "Retiros Kerala" }, cta1Link: "/destinations/kerala", cta2Text: { en: "Plan My Trip", es: "Planear mi Viaje", pt: "Planear minha Viagem" }, cta2Link: "/contact" }
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
        title: { en: "Explore Diverse Horizons", es: "Explore Horizontes Diversos", pt: "Explore Horizontes Diversos" },
        desc: { en: "From the grand palaces of Rajasthan to the serene canals of Kerala, discover a tailored world.", es: "Desde los palacios de Rajasthan hasta los canales de Kerala.", pt: "Dos palácios do Rajastão aos canais de Kerala." }
      },
      packagesSection: {
        subtitle: { en: "Featured Journeys", es: "Viajes Destacados", pt: "Viagens Em Destaque" },
        title: { en: "Signature Travel Packages", es: "Paquetes de Viajes Exclusivos", pt: "Pacotes de Viagens Exclusivos" },
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
      email: { en: "info@mhindiatrips.com", es: "info@mhindiatrips.com", pt: "info@mhindiatrips.com" },
      phone: { en: "+91 98765 43210", es: "+91 98765 43210", pt: "+91 98765 43210" },
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
    id: "plan-your-trip",
    isCustom: false,
    title: { en: "Plan Your Trip", es: "Planifica tu Viaje", pt: "Planeje sua Viagem" },
    heroImage: "/images/rajasthan_fort_sunset.png",
    content: {
      heroTitle: { en: "Plan Your Perfect India Trip", es: "Planifica tu viaje perfecto a India", pt: "Planeje sua viagem perfeita à Índia" },
      heroSubtitle: { en: "Use our trip planner to build your dream itinerary", es: "Usa nuestro planificador de viajes", pt: "Use nosso planejador de viagens" },
    }
  },
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
    
    // Add missing
    for (const item of initialData) {
      const docId = item.slug || item.id;
      if (docId && !existingIds.has(docId)) {
        console.log(`Seeding missing document ${docId} in collection ${collectionName} in Firestore...`);
        await setDoc(doc(firestore, collectionName, docId), item);
      }
    }

    // Delete extras (clean up removed local entries from remote Firestore)
    const allowedIds = new Set(initialData.map(item => item.slug || item.id).filter(Boolean));
    for (const docSnap of snapshot.docs) {
      if (!allowedIds.has(docSnap.id)) {
        console.log(`Deleting extra document ${docSnap.id} from collection ${collectionName} in Firestore...`);
        try {
          await deleteDoc(doc(firestore, collectionName, docSnap.id));
        } catch (e: any) {
          console.warn(`Failed to delete extra document ${docSnap.id} in collection ${collectionName}:`, e.message || e);
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
      // Load latest cached JSON data
      blogsCache = loadLocalData("blogs", mergedBlogs);
      const localData = blogsCache;
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "blogs"));
            const firestoreData = snapshot.docs.map(d => d.data() as BlogData);
            // Merge: local data + any Firestore-only items (admin-created)
            const localSlugs = new Set(localData.map((b: any) => b.slug));
            const extraItems = firestoreData.filter((b: any) => !localSlugs.has(b.slug));
            return [...localData, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore blogs.findMany failed, falling back to local:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      return localData;
    },
    findUnique: async (slug: string) => {
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const docRef = doc(firestore, "blogs", slug);
            const snapshot = await getDoc(docRef);
            return snapshot.exists() ? snapshot.data() as BlogData : null;
          }
        } catch (e: any) {
          console.warn("Firestore blogs.findUnique failed, falling back to local JSON:", e.message || e);
        }
      }
      blogsCache = loadLocalData("blogs", blogsCache);
      return blogsCache.find((b: any) => b.slug === slug) || null;
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
          await deleteDoc(doc(firestore, "blogs", slug));
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

  destinations: {
    findMany: async () => {
      // Load latest cached JSON data
      statesCache = loadLocalData("states", mergedStates);
      const localData = statesCache;
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "states"));
            const firestoreData = snapshot.docs.map(d => d.data() as StateData);
            const localSlugs = new Set(localData.map((s: any) => s.slug));
            const extraItems = firestoreData.filter((s: any) => !localSlugs.has(s.slug));
            return [...localData, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore states.findMany failed, falling back to local:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      return localData;
    },
    findUnique: async (slug: string) => {
      const states = await db.destinations.findMany();
      // Look for State
      const state = states.find((s: any) => s.slug === slug);
      if (state) return state;
      // Look for City
      for (const s of states) {
        const city = s.cities?.find((c: any) => c.slug === slug);
        if (city) return city;
      }
      return null;
    },
    create: async (data: any) => {
      const slug = data.slug || Math.random().toString(36).substring(2, 11);
      const newState = {
        slug,
        cities: [],
        gallery: [],
        travelTips: [],
        faqs: [],
        ...data
      };
      if (useFirestore) {
        try {
          await setDoc(doc(firestore, "states", slug), newState);
          return newState;
        } catch (e: any) {
          console.warn("Firestore states.create failed, falling back to local JSON:", e.message || e);
        }
      }
      statesCache.push(newState);
      saveLocalData("states", statesCache);
      return newState;
    },
    update: async (slug: string, data: any) => {
      if (useFirestore) {
        try {
          const docRef = doc(firestore, "states", slug);
          await updateDoc(docRef, data);
          return { slug, ...data };
        } catch (e: any) {
          console.warn("Firestore states.update failed, falling back to local JSON:", e.message || e);
        }
      }
      const idx = statesCache.findIndex((s: any) => s.slug === slug);
      if (idx !== -1) {
        statesCache[idx] = { ...statesCache[idx], ...data };
        saveLocalData("states", statesCache);
        return statesCache[idx];
      }
      return null;
    },
    delete: async (slug: string) => {
      if (useFirestore) {
        try {
          await deleteDoc(doc(firestore, "states", slug));
          return { slug };
        } catch (e: any) {
          console.warn("Firestore states.delete failed, falling back to local JSON:", e.message || e);
        }
      }
      statesCache = statesCache.filter((s: any) => s.slug !== slug);
      saveLocalData("states", statesCache);
      return { slug };
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
            const localSlugs = new Set(localData.map((f: any) => f.slug));
            const extraItems = firestoreData.filter((f: any) => !localSlugs.has(f.slug));
            return [...localData, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore foods.findMany failed, falling back to local:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      return localData;
    },
    findUnique: async (slug: string) => {
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const docRef = doc(firestore, "foods", slug);
            const snapshot = await getDoc(docRef);
            return snapshot.exists() ? snapshot.data() as FoodData : null;
          }
        } catch (e: any) {
          console.warn("Firestore foods.findUnique failed, falling back to local JSON:", e.message || e);
        }
      }
      foodsCache = loadLocalData("foods", foodsCache);
      return foodsCache.find((f: any) => f.slug === slug) || null;
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
          await deleteDoc(doc(firestore, "foods", slug));
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
            const localIds = new Set(localData.map((t: any) => t.id));
            const extraItems = firestoreData.filter((t: any) => !localIds.has(t.id));
            return [...localData, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore testimonials.findMany failed, falling back to local:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      return localData;
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
          await deleteDoc(doc(firestore, "testimonials", id));
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
            const localSlugs = new Set(localData.map((p: any) => p.slug));
            const extraItems = firestoreData.filter((p: any) => !localSlugs.has(p.slug));
            return [...localData, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore tourPackages.findMany failed, falling back to local:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      return localData;
    },
    findUnique: async (slug: string) => {
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const docRef = doc(firestore, "tour_packages", slug);
            const snapshot = await getDoc(docRef);
            return snapshot.exists() ? snapshot.data() as TourPackage : null;
          }
        } catch (e: any) {
          console.warn("Firestore tourPackages.findUnique failed, falling back to local JSON:", e.message || e);
        }
      }
      tourPackagesCache = loadLocalData("tour_packages", tourPackagesCache);
      return tourPackagesCache.find((p: any) => p.slug === slug) || null;
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
          await deleteDoc(doc(firestore, "tour_packages", slug));
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
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "pages"));
            const firestoreData = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            const localIds = new Set(pagesCache.map((p: any) => p.id));
            const extraItems = firestoreData.filter((p: any) => !localIds.has(p.id));
            return [...pagesCache, ...extraItems];
          }
        } catch (e: any) {
          console.warn("Firestore pages.findMany failed, falling back to local:", e.message || e);
        }
      }
      pagesCache = loadLocalData("pages", pagesCache);
      return pagesCache;
    },
    findUnique: async (id: string) => {
      if (useFirestore) {
        try {
          checkSeeding();
          if (useFirestore) {
            const docRef = doc(firestore, "pages", id);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
              return { id: snapshot.id, ...snapshot.data() } as any;
            }
          }
        } catch (e: any) {
          console.warn("Firestore pages.findUnique failed, falling back to local:", e.message || e);
        }
      }
      pagesCache = loadLocalData("pages", pagesCache);
      return pagesCache.find((p: any) => p.id === id) || null;
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
          await deleteDoc(doc(firestore, "pages", id));
          return { id };
        } catch (e: any) {
          console.warn("Firestore pages.delete failed, falling back to local JSON:", e.message || e);
        }
      }
      pagesCache = pagesCache.filter((p: any) => p.id !== id);
      saveLocalData("pages", pagesCache);
      return { id };
    }
  }
};
