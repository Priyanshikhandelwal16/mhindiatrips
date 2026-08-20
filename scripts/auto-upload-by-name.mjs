import fs from "fs";
import path from "path";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Read .env.local
const envPath = path.join(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf8");
const env = {};
envContent.split("\n").forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || "";
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    }
    env[match[1]] = value;
  }
});

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(firebaseApp);

const statesPath = path.join(process.cwd(), "src", "data", "fallback", "states.json");
const states = JSON.parse(fs.readFileSync(statesPath, "utf-8"));

const publicImagesDir = path.join(process.cwd(), "public", "images");
const publicDir = path.join(process.cwd(), "public");
const localFiles = fs.existsSync(publicImagesDir) ? fs.readdirSync(publicImagesDir) : [];

// Normalization function for loose matching of names
function normalizeName(str) {
  if (!str) return "";
  let s = str.toLowerCase();
  
  // Common name variations
  s = s.replace(/alappuzha/g, "alleppey");
  s = s.replace(/bengaluru/g, "bangalore");
  s = s.replace(/varanasi/g, "varansi");
  s = s.replace(/banaras/g, "varansi");
  s = s.replace(/karanataka/g, "karnataka");
  
  // Common spelling variants
  s = s.replace(/z/g, "j");
  s = s.replace(/ee/g, "i");
  s = s.replace(/oo/g, "u");
  s = s.replace(/sh/g, "s");
  
  // Remove common words
  s = s.replace(/\s+/g, "");
  s = s.replace(/temple/g, "");
  s = s.replace(/fort/g, "");
  s = s.replace(/palace/g, "");
  s = s.replace(/hotel/g, "");
  s = s.replace(/resort/g, "");
  
  return s.replace(/[^a-z0-9]/g, "");
}

// Find local file matching name
function findLocalImage(name) {
  const normName = normalizeName(name);
  if (!normName) return null;
  
  for (const file of localFiles) {
    const fileBase = file.replace(/\.[^/.]+$/, "");
    if (normalizeName(fileBase) === normName) {
      return file;
    }
  }
  return null;
}

// Upload local file or base64 to Cloudinary
async function uploadToCloudinary(sourcePath) {
  try {
    const fileBuffer = fs.readFileSync(sourcePath);
    const base64Data = `data:image/jpeg;base64,${fileBuffer.toString("base64")}`;
    
    const formData = new FormData();
    formData.append("file", base64Data);
    formData.append("upload_preset", "mhindiatrips");
    formData.append("folder", "mhindiatrips");

    const res = await fetch("https://api.cloudinary.com/v1_1/irrjgm1b/image/upload", {
      method: "POST",
      body: formData
    });
    
    if (res.ok) {
      const data = await res.json();
      return data.secure_url;
    }
  } catch (err) {
    // Silent fail
  }
  return null;
}

// Upload remote URL to Cloudinary
async function uploadUrlToCloudinary(url) {
  try {
    const formData = new FormData();
    formData.append("file", url);
    formData.append("upload_preset", "mhindiatrips");
    formData.append("folder", "mhindiatrips");

    const res = await fetch("https://api.cloudinary.com/v1_1/irrjgm1b/image/upload", {
      method: "POST",
      body: formData
    });
    
    if (res.ok) {
      const data = await res.json();
      return data.secure_url;
    }
  } catch (err) {
    // Silent fail
  }
  return null;
}

// Search Bing Images for named item
async function searchBingImage(query) {
  try {
    const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });
    
    if (!res.ok) return null;
    
    const html = await res.text();
    const regex = /https:\/\/tse[0-9]\.mm\.bing\.net\/th\/id\/[a-zA-Z0-9._-]+/g;
    const matches = html.match(regex) || [];
    
    if (matches.length > 0) {
      return [...new Set(matches)][0];
    }
  } catch (err) {
    // Silent fail
  }
  return null;
}

async function run() {
  console.log("Analyzing states and preparing named search queue...");
  
  const queue = [];
  const modifiedStates = new Set();
  const keepUserStates = ["goa", "kerala"]; // Keep custom user Cloudinary uploads in Goa and Kerala
  
  for (const state of states) {
    const stateName = state.title?.en || state.title || "";
    const isExcluded = keepUserStates.includes(state.slug);
    
    // Helper to queue an image field
    const queueImageField = (obj, fieldName, name, query, currentImage) => {
      // 1. If it's a local path (/images/...) and the file exists in public/images, upload it!
      if (currentImage && currentImage.startsWith("/images/")) {
        const fullPath = path.join(publicDir, currentImage);
        if (fs.existsSync(fullPath)) {
          queue.push({
            type: "local_upload",
            stateSlug: state.slug,
            obj,
            fieldName,
            localPath: fullPath,
            query: `Local upload: ${currentImage}`
          });
          return;
        }
      }
      
      // 2. Check if a local matching file exists in public/images
      const localFile = findLocalImage(name);
      if (localFile) {
        queue.push({
          type: "local_upload",
          stateSlug: state.slug,
          obj,
          fieldName,
          localPath: path.join(publicImagesDir, localFile),
          query: `Local match: ${localFile}`
        });
        return;
      }
      
      // 3. For Goa and Kerala, keep existing Cloudinary URLs. For other states, search by name!
      if (isExcluded && currentImage && currentImage.startsWith("https://res.cloudinary.com")) {
        // Skip - keep user custom upload
        return;
      }
      
      // Queue search task
      queue.push({
        type: "search",
        stateSlug: state.slug,
        obj,
        fieldName,
        query
      });
    };
    
    // State image
    queueImageField(state, "image", stateName, `${stateName} landmark tourism India`, state.image);
    
    // Cities
    if (state.cities) {
      for (const city of state.cities) {
        const cityName = city.name?.en || city.name || city.title?.en || city.title || "";
        
        // City image
        queueImageField(city, "image", cityName, `${cityName} city landmarks tourism ${stateName}`, city.image);
        
        // Attractions
        if (city.attractions) {
          for (const attr of city.attractions) {
            const attrName = attr.name?.en || attr.name || "";
            queueImageField(attr, "image", attrName, `${attrName} ${cityName} ${stateName} India`, attr.image);
          }
        }
        
        // Foods
        if (city.localFoodDishes) {
          for (const food of city.localFoodDishes) {
            const foodName = food.name?.en || food.name || "";
            queueImageField(food, "image", foodName, `${foodName} traditional Indian food dish ${cityName}`, food.image);
          }
        }
        
        // Hotels
        if (city.hotels) {
          for (const hotel of city.hotels) {
            const hotelName = hotel.name?.en || hotel.name || "";
            queueImageField(hotel, "image", hotelName, `${hotelName} luxury hotel lobby exterior ${cityName} India`, hotel.image);
          }
        }
      }
    }
  }
  
  console.log(`\nTotal tasks in execution queue: ${queue.length}`);
  
  let completed = 0;
  let successCount = 0;
  const CONCURRENCY = 8;
  
  async function worker(workerId) {
    while (queue.length > 0) {
      const task = queue.shift();
      if (!task) break;
      
      const taskNum = ++completed;
      console.log(`[Worker ${workerId}] Task ${taskNum}/${queue.length + completed}: Processing "${task.query}"`);
      
      try {
        if (task.type === "local_upload") {
          const cUrl = await uploadToCloudinary(task.localPath);
          if (cUrl) {
            task.obj[task.fieldName] = cUrl;
            modifiedStates.add(task.stateSlug);
            successCount++;
            console.log(`  -> SUCCESS! Uploaded local file to Cloudinary: ${cUrl}`);
          }
        } else {
          // Search task
          const searchUrl = await searchBingImage(task.query);
          if (searchUrl) {
            const cUrl = await uploadUrlToCloudinary(searchUrl);
            if (cUrl) {
              task.obj[task.fieldName] = cUrl;
              modifiedStates.add(task.stateSlug);
              successCount++;
              console.log(`  -> SUCCESS! Set specific stock image: ${cUrl}`);
            }
          }
        }
      } catch (err) {
        console.error(`  -> Task error:`, err.message);
      }
      await new Promise(r => setTimeout(r, 100));
    }
  }
  
  console.log(`Starting concurrent execution with ${CONCURRENCY} workers...`);
  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1)));
  
  // Save modifications locally
  if (modifiedStates.size > 0) {
    console.log("\nSaving modified data to states.json...");
    fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), "utf-8");
    
    console.log("Syncing modified states to Firestore...");
    for (const slug of modifiedStates) {
      const stateObj = states.find(s => s.slug === slug);
      if (stateObj) {
        try {
          await setDoc(doc(firestoreDb, "states", slug), stateObj);
          console.log(`Firestore document states/${slug} updated successfully!`);
        } catch (err) {
          console.error(`Error saving states/${slug} to Firestore:`, err.message);
        }
      }
    }
  }
  
  console.log("\n========================================");
  console.log("SPECIFIC BY-NAME CONCURRENT UPLOADER COMPLETE");
  console.log(`Total tasks executed: ${completed}`);
  console.log(`Total success uploads: ${successCount}`);
  console.log("========================================");
}

run();
