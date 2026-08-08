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
import fs from "fs";
import path from "path";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Hybrid local JSON storage fallback configuration
let useFirestore = true;

const FALLBACK_DIR = path.join(process.cwd(), "src", "data", "fallback");
if (!fs.existsSync(FALLBACK_DIR)) {
  fs.mkdirSync(FALLBACK_DIR, { recursive: true });
}

const getFilePath = (name: string) => path.join(FALLBACK_DIR, `${name}.json`);

const loadLocalData = (name: string, defaultData: any) => {
  const filePath = getFilePath(name);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), "utf-8");
    return defaultData;
  }
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading JSON file " + name, e);
    return defaultData;
  }
};

const saveLocalData = (name: string, data: any) => {
  const filePath = getFilePath(name);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (e) {
    console.error("Error writing JSON file " + name, e);
  }
};

// Initialize cache from local storage if available
let inquiriesCache = loadLocalData("inquiries", []);
let blogsCache = loadLocalData("blogs", blogsData);
let statesCache = loadLocalData("states", statesData);
let foodsCache = loadLocalData("foods", foodsData);
let testimonialsCache = loadLocalData("testimonials", initialTestimonials);
let tourPackagesCache = loadLocalData("tour_packages", initialTourPackages);

// Simple check to seed Firestore collection if it is empty
async function ensureSeeded(collectionName: string, initialData: any[]) {
  if (!useFirestore) return;
  try {
    const colRef = collection(firestore, collectionName);
    const snapshot = await getDocs(colRef);
    if (snapshot.empty) {
      console.log(`Seeding collection ${collectionName} in Firestore...`);
      for (const item of initialData) {
        const docId = item.slug || item.id || Math.random().toString(36).substring(2, 11);
        await setDoc(doc(firestore, collectionName, docId), item);
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
      ensureSeeded("blogs", blogsData),
      ensureSeeded("states", statesData),
      ensureSeeded("foods", foodsData),
      ensureSeeded("testimonials", initialTestimonials),
      ensureSeeded("tour_packages", initialTourPackages),
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
      if (useFirestore) {
        try {
          await checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "blogs"));
            return snapshot.docs.map(d => d.data() as BlogData);
          }
        } catch (e: any) {
          console.warn("Firestore blogs.findMany failed, falling back to local JSON:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      blogsCache = loadLocalData("blogs", blogsCache);
      return blogsCache;
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
      if (useFirestore) {
        try {
          await checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "states"));
            return snapshot.docs.map(d => d.data() as StateData);
          }
        } catch (e: any) {
          console.warn("Firestore states.findMany failed, falling back to local JSON:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      statesCache = loadLocalData("states", statesCache);
      return statesCache;
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
      if (useFirestore) {
        try {
          await checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "foods"));
            return snapshot.docs.map(d => d.data() as FoodData);
          }
        } catch (e: any) {
          console.warn("Firestore foods.findMany failed, falling back to local JSON:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      foodsCache = loadLocalData("foods", foodsCache);
      return foodsCache;
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
      if (useFirestore) {
        try {
          await checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "testimonials"));
            return snapshot.docs.map(d => d.data() as Testimonial);
          }
        } catch (e: any) {
          console.warn("Firestore testimonials.findMany failed, falling back to local JSON:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      testimonialsCache = loadLocalData("testimonials", testimonialsCache);
      return testimonialsCache;
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
      if (useFirestore) {
        try {
          await checkSeeding();
          if (useFirestore) {
            const snapshot = await getDocs(collection(firestore, "tour_packages"));
            return snapshot.docs.map(d => d.data() as TourPackage);
          }
        } catch (e: any) {
          console.warn("Firestore tourPackages.findMany failed, falling back to local JSON:", e.message || e);
          if (e.message && (e.message.includes("PERMISSION_DENIED") || e.message.includes("disabled"))) {
            useFirestore = false;
          }
        }
      }
      tourPackagesCache = loadLocalData("tour_packages", tourPackagesCache);
      return tourPackagesCache;
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
  }
};
