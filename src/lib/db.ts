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
    // If default data has more items, merge new ones in (dev additions)
    if (Array.isArray(defaultData) && Array.isArray(existing) && defaultData.length > existing.length) {
      const existingSlugs = new Set(existing.map((item: any) => item.slug || item.id));
      const newItems = defaultData.filter((item: any) => !existingSlugs.has(item.slug || item.id));
      const merged = [...existing, ...newItems];
      fs.writeFileSync(filePath, JSON.stringify(merged, null, 2), "utf-8");
      return merged;
    }
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
      heroTitle: { en: "Discover India's Timeless Beauty", es: "Descubre la belleza atemporal de India", pt: "Descubra a beleza atemporal da Índia" },
      heroSubtitle: { en: "Luxury Private Tours", es: "Tours Privados de Lujo", pt: "Tours Privados de Luxo" },
      philosophyTitle: { en: "Our Philosophy", es: "Nuestra Filosofía", pt: "Nossa Filosofia" },
      philosophyText: { en: "We craft bespoke journeys that reveal the soul of India — from palace heritage to hidden temples.", es: "Creamos viajes a medida que revelan el alma de India.", pt: "Criamos viagens sob medida que revelam a alma da Índia." },
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
    }
  },
  {
    id: "monuments",
    isCustom: false,
    title: { en: "Monuments", es: "Monumentos", pt: "Monumentos" },
    heroImage: "/images/taj mahal.jpg",
    content: {
      heroTitle: { en: "India's Iconic Monuments", es: "Monumentos Icónicos de India", pt: "Monumentos Icônicos da Índia" },
      heroSubtitle: { en: "Timeless heritage wonders waiting to be explored", es: "Maravillas del patrimonio atemporales esperando ser exploradas", pt: "Maravilhas patrimoniais atemporais à espera de serem exploradas" },
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
    if (snapshot.size < initialData.length) {
      console.log(`Seeding collection ${collectionName} in Firestore (${snapshot.size} < ${initialData.length})...`);
      const existingIds = new Set(snapshot.docs.map(d => d.id));
      for (const item of initialData) {
        const docId = item.slug || item.id || Math.random().toString(36).substring(2, 11);
        if (!existingIds.has(docId)) {
          await setDoc(doc(firestore, collectionName, docId), item);
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
function checkSeeding() {
  if (!useFirestore) return Promise.resolve();
  if (!seedingPromise) {
    seedingPromise = Promise.all([
      ensureSeeded("blogs", mergedBlogs),
      ensureSeeded("states", mergedStates),
      ensureSeeded("foods", mergedFoods),
      ensureSeeded("testimonials", initialTestimonials),
      ensureSeeded("tour_packages", mergedPackages),
      ensureSeeded("pages", pagesCache),
    ]);
  }
  return seedingPromise;
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
      // Always start with merged local data to guarantee all content shows
      const localData = mergedBlogs;
      if (useFirestore) {
        try {
          await checkSeeding();
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
          await checkSeeding();
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
      const localData = mergedStates;
      if (useFirestore) {
        try {
          await checkSeeding();
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
    }
  },

  foods: {
    findMany: async () => {
      const localData = mergedFoods;
      if (useFirestore) {
        try {
          await checkSeeding();
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
          await checkSeeding();
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
    }
  },

  testimonials: {
    findMany: async () => {
      const localData = initialTestimonials;
      if (useFirestore) {
        try {
          await checkSeeding();
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
      const id = Math.random().toString(36).substring(2, 11);
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
    }
  },

  tourPackages: {
    findMany: async () => {
      const localData = mergedPackages;
      if (useFirestore) {
        try {
          await checkSeeding();
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
          await checkSeeding();
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
          await checkSeeding();
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
          await checkSeeding();
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
