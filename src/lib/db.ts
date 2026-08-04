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

// Unified memory caches for data updates in admin
let inquiriesCache: any[] = [];
let blogsCache: BlogData[] = [...blogsData];
let statesCache: StateData[] = [...statesData];
let foodsCache: FoodData[] = [...foodsData];
let testimonialsCache: Testimonial[] = [...initialTestimonials];
let tourPackagesCache: TourPackage[] = [...initialTourPackages];

// Create simple local JSON storage for state persistence
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
inquiriesCache = loadLocalData("inquiries", []);
blogsCache = loadLocalData("blogs", blogsCache);
statesCache = loadLocalData("states", statesCache);
foodsCache = loadLocalData("foods", foodsCache);
testimonialsCache = loadLocalData("testimonials", testimonialsCache);
tourPackagesCache = loadLocalData("tour_packages", tourPackagesCache);

export const db = {
  inquiries: {
    findMany: async () => {
      inquiriesCache = loadLocalData("inquiries", inquiriesCache);
      return inquiriesCache;
    },
    create: async (data: any) => {
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
      const idx = inquiriesCache.findIndex(i => i.id === id);
      if (idx !== -1) {
        inquiriesCache[idx] = { ...inquiriesCache[idx], ...data };
        saveLocalData("inquiries", inquiriesCache);
        return inquiriesCache[idx];
      }
      return null;
    },
    delete: async (id: string) => {
      inquiriesCache = inquiriesCache.filter(i => i.id !== id);
      saveLocalData("inquiries", inquiriesCache);
      return { id };
    }
  },

  blogs: {
    findMany: async () => {
      blogsCache = loadLocalData("blogs", blogsCache);
      return blogsCache;
    },
    findUnique: async (slug: string) => {
      blogsCache = loadLocalData("blogs", blogsCache);
      return blogsCache.find(b => b.slug === slug) || null;
    },
    create: async (data: any) => {
      const newBlog: BlogData = {
        slug: data.slug || Math.random().toString(36).substring(2, 11),
        createdAt: new Date().toISOString().split("T")[0],
        readingTime: 5,
        author: "MHIndiaTrips Editor",
        ...data
      };
      blogsCache.push(newBlog);
      saveLocalData("blogs", blogsCache);
      return newBlog;
    },
    update: async (slug: string, data: any) => {
      const idx = blogsCache.findIndex(b => b.slug === slug);
      if (idx !== -1) {
        blogsCache[idx] = { ...blogsCache[idx], ...data };
        saveLocalData("blogs", blogsCache);
        return blogsCache[idx];
      }
      return null;
    },
    delete: async (slug: string) => {
      blogsCache = blogsCache.filter(b => b.slug !== slug);
      saveLocalData("blogs", blogsCache);
      return { slug };
    }
  },

  destinations: {
    findMany: async () => {
      statesCache = loadLocalData("states", statesCache);
      return statesCache;
    },
    findUnique: async (slug: string) => {
      statesCache = loadLocalData("states", statesCache);
      
      // Look for State
      const state = statesCache.find(s => s.slug === slug);
      if (state) return state;

      // Look for City inside any State
      for (const s of statesCache) {
        const city = s.cities.find(c => c.slug === slug);
        if (city) return city;
      }
      return null;
    },
    create: async (data: any) => {
      const newState: StateData = {
        slug: data.slug || Math.random().toString(36).substring(2, 11),
        cities: [],
        gallery: [],
        travelTips: [],
        faqs: [],
        ...data
      };
      statesCache.push(newState);
      saveLocalData("states", statesCache);
      return newState;
    },
    update: async (slug: string, data: any) => {
      const idx = statesCache.findIndex(s => s.slug === slug);
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
      foodsCache = loadLocalData("foods", foodsCache);
      return foodsCache;
    },
    findUnique: async (slug: string) => {
      foodsCache = loadLocalData("foods", foodsCache);
      return foodsCache.find(f => f.slug === slug) || null;
    },
    create: async (data: any) => {
      const newFood: FoodData = {
        slug: data.slug || Math.random().toString(36).substring(2, 11),
        gallery: [],
        ingredients: [],
        travelTips: [],
        bestRestaurants: [],
        faqs: [],
        ...data
      };
      foodsCache.push(newFood);
      saveLocalData("foods", foodsCache);
      return newFood;
    },
    update: async (slug: string, data: any) => {
      const idx = foodsCache.findIndex(f => f.slug === slug);
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
      testimonialsCache = loadLocalData("testimonials", testimonialsCache);
      return testimonialsCache;
    },
    create: async (data: any) => {
      const newTestimonial: Testimonial = {
        id: Math.random().toString(36).substring(2, 11),
        ...data
      };
      testimonialsCache.push(newTestimonial);
      saveLocalData("testimonials", testimonialsCache);
      return newTestimonial;
    }
  },

  tourPackages: {
    findMany: async () => {
      tourPackagesCache = loadLocalData("tour_packages", tourPackagesCache);
      return tourPackagesCache;
    },
    findUnique: async (slug: string) => {
      tourPackagesCache = loadLocalData("tour_packages", tourPackagesCache);
      return tourPackagesCache.find(p => p.slug === slug) || null;
    }
  }
};
