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
const localFiles = fs.existsSync(publicImagesDir) ? fs.readdirSync(publicImagesDir) : [];

console.log(`Loaded ${states.length} states from states.json`);
console.log(`Found ${localFiles.length} files in public/images/`);

// Normalization function for loose matching of names
function normalizeName(str) {
  if (!str) return "";
  let s = str.toLowerCase();
  
  // Common name variations
  s = s.replace(/alappuzha/g, "alleppey");
  s = s.replace(/bengaluru/g, "bangalore");
  s = s.replace(/varanasi/g, "varansi"); // match user spelling
  s = s.replace(/banaras/g, "varansi");
  s = s.replace(/karanataka/g, "karnataka");
  
  // Common spelling variants (j vs z, ee vs i, oo vs u, sh vs s)
  s = s.replace(/z/g, "j");
  s = s.replace(/ee/g, "i");
  s = s.replace(/oo/g, "u");
  s = s.replace(/sh/g, "s");
  
  // Remove common words that might differ
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
    const fileBase = file.replace(/\.[^/.]+$/, ""); // strip extension
    if (normalizeName(fileBase) === normName) {
      return file;
    }
  }
  return null;
}

// Search stock image fallback from Unsplash napi
async function searchStockImage(query) {
  try {
    // Unsplash napi is keyless and public
    const res = await fetch(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=3`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        return data.results[0].urls?.regular;
      }
    }
  } catch (err) {
    console.error(`  - Failed to search stock image for "${query}":`, err.message);
  }
  return null;
}

// Upload base64 or remote URL to Cloudinary
async function uploadToCloudinary(source, isUrl = false) {
  try {
    const formData = new FormData();
    if (isUrl) {
      formData.append("file", source);
    } else {
      // Source is local path, read and encode to base64
      const fileBuffer = fs.readFileSync(source);
      const base64Data = `data:image/jpeg;base64,${fileBuffer.toString("base64")}`;
      formData.append("file", base64Data);
    }
    formData.append("upload_preset", "mhindiatrips");
    formData.append("folder", "mhindiatrips");

    const res = await fetch("https://api.cloudinary.com/v1_1/irrjgm1b/image/upload", {
      method: "POST",
      body: formData
    });
    
    if (res.ok) {
      const data = await res.json();
      return data.secure_url;
    } else {
      const errText = await res.text();
      console.error("  - Cloudinary upload error status:", res.status, errText);
    }
  } catch (err) {
    console.error("  - Cloudinary upload exception:", err.message);
  }
  return null;
}

// Main execution function
async function runUploader() {
  const excludeStates = ["rajasthan", "goa", "kerala"];
  
  let totalUploaded = 0;
  let totalSkipped = 0;
  let totalFailed = 0;
  
  for (let sIdx = 0; sIdx < states.length; sIdx++) {
    const state = states[sIdx];
    
    if (excludeStates.includes(state.slug)) {
      console.log(`Skipping state: ${state.slug.toUpperCase()} (already completed by user)`);
      continue;
    }
    
    console.log(`\n========================================`);
    console.log(`PROCESSING STATE: ${state.slug.toUpperCase()}`);
    console.log(`========================================`);
    
    const stateName = state.title?.en || state.title || "";
    let stateModified = false;
    
    // 1. Process State Image
    if (!state.image || state.image === "" || state.image.includes("fallback") || state.image.includes("himachal pradesh") || state.image.startsWith("/images/")) {
      const localFile = findLocalImage(stateName) || findLocalImage(state.slug);
      if (localFile) {
        console.log(`Found local image for state ${stateName}: ${localFile}`);
        const cUrl = await uploadToCloudinary(path.join(publicImagesDir, localFile), false);
        if (cUrl) {
          state.image = cUrl;
          stateModified = true;
          totalUploaded++;
          console.log(`-> Uploaded state image: ${cUrl}`);
        } else {
          totalFailed++;
        }
      } else {
        console.log(`No local image for state ${stateName}. Searching stock...`);
        const stockUrl = await searchStockImage(`${stateName} landmark tourism India`);
        if (stockUrl) {
          const cUrl = await uploadToCloudinary(stockUrl, true);
          if (cUrl) {
            state.image = cUrl;
            stateModified = true;
            totalUploaded++;
            console.log(`-> Fetched and uploaded state stock image: ${cUrl}`);
          } else {
            totalFailed++;
          }
        }
      }
    } else {
      totalSkipped++;
    }
    
    // 2. Process Cities
    if (state.cities) {
      for (let cIdx = 0; cIdx < state.cities.length; cIdx++) {
        const city = state.cities[cIdx];
        const cityName = city.name?.en || city.name || city.title?.en || city.title || "";
        console.log(`\n  Processing City: ${cityName}`);
        
        // City Image
        if (!city.image || city.image === "" || city.image.includes("fallback") || city.image.startsWith("/images/")) {
          const localFile = findLocalImage(cityName) || findLocalImage(city.slug);
          if (localFile) {
            console.log(`  Found local image for city ${cityName}: ${localFile}`);
            const cUrl = await uploadToCloudinary(path.join(publicImagesDir, localFile), false);
            if (cUrl) {
              city.image = cUrl;
              stateModified = true;
              totalUploaded++;
              console.log(`  -> Uploaded city image: ${cUrl}`);
            } else {
              totalFailed++;
            }
          } else {
            console.log(`  No local image for city ${cityName}. Searching stock...`);
            const stockUrl = await searchStockImage(`${cityName} city tourism ${stateName}`);
            if (stockUrl) {
              const cUrl = await uploadToCloudinary(stockUrl, true);
              if (cUrl) {
                city.image = cUrl;
                stateModified = true;
                totalUploaded++;
                console.log(`  -> Fetched and uploaded city stock image: ${cUrl}`);
              } else {
                totalFailed++;
              }
            }
          }
        } else {
          totalSkipped++;
        }
        
        // City Attractions
        if (city.attractions) {
          for (let aIdx = 0; aIdx < city.attractions.length; aIdx++) {
            const attr = city.attractions[aIdx];
            const attrName = attr.name?.en || attr.name || "";
            
            if (!attr.image || attr.image === "" || attr.image.includes("fallback") || attr.image.startsWith("/images/")) {
              const localFile = findLocalImage(attrName);
              if (localFile) {
                console.log(`    Found local image for attraction "${attrName}": ${localFile}`);
                const cUrl = await uploadToCloudinary(path.join(publicImagesDir, localFile), false);
                if (cUrl) {
                  attr.image = cUrl;
                  stateModified = true;
                  totalUploaded++;
                  console.log(`    -> Uploaded attraction image: ${cUrl}`);
                } else {
                  totalFailed++;
                }
              } else {
                console.log(`    No local image for attraction "${attrName}". Searching stock...`);
                const stockUrl = await searchStockImage(`${attrName} ${cityName} India`);
                if (stockUrl) {
                  const cUrl = await uploadToCloudinary(stockUrl, true);
                  if (cUrl) {
                    attr.image = cUrl;
                    stateModified = true;
                    totalUploaded++;
                    console.log(`    -> Fetched and uploaded attraction stock image: ${cUrl}`);
                  } else {
                    totalFailed++;
                  }
                }
              }
            } else {
              totalSkipped++;
            }
          }
        }
        
        // City Local Foods
        if (city.localFoodDishes) {
          for (let fIdx = 0; fIdx < city.localFoodDishes.length; fIdx++) {
            const food = city.localFoodDishes[fIdx];
            const foodName = food.name?.en || food.name || "";
            
            if (!food.image || food.image === "" || food.image.includes("fallback") || food.image.startsWith("/images/")) {
              const localFile = findLocalImage(foodName);
              if (localFile) {
                console.log(`    Found local image for food "${foodName}": ${localFile}`);
                const cUrl = await uploadToCloudinary(path.join(publicImagesDir, localFile), false);
                if (cUrl) {
                  food.image = cUrl;
                  stateModified = true;
                  totalUploaded++;
                  console.log(`    -> Uploaded food image: ${cUrl}`);
                } else {
                  totalFailed++;
                }
              } else {
                console.log(`    No local image for food "${foodName}". Searching stock...`);
                const stockUrl = await searchStockImage(`${foodName} Indian food cuisine`);
                if (stockUrl) {
                  const cUrl = await uploadToCloudinary(stockUrl, true);
                  if (cUrl) {
                    food.image = cUrl;
                    stateModified = true;
                    totalUploaded++;
                    console.log(`    -> Fetched and uploaded food stock image: ${cUrl}`);
                  } else {
                    totalFailed++;
                  }
                }
              }
            } else {
              totalSkipped++;
            }
          }
        }
        
        // City Hotels
        if (city.hotels) {
          for (let hIdx = 0; hIdx < city.hotels.length; hIdx++) {
            const hotel = city.hotels[hIdx];
            const hotelName = hotel.name?.en || hotel.name || "";
            
            if (!hotel.image || hotel.image === "" || hotel.image.includes("fallback") || hotel.image.startsWith("/images/")) {
              const localFile = findLocalImage(hotelName);
              if (localFile) {
                console.log(`    Found local image for hotel "${hotelName}": ${localFile}`);
                const cUrl = await uploadToCloudinary(path.join(publicImagesDir, localFile), false);
                if (cUrl) {
                  hotel.image = cUrl;
                  stateModified = true;
                  totalUploaded++;
                  console.log(`    -> Uploaded hotel image: ${cUrl}`);
                } else {
                  totalFailed++;
                }
              } else {
                console.log(`    No local image for hotel "${hotelName}". Searching stock...`);
                const stockUrl = await searchStockImage(`${hotelName} luxury hotel lobby exterior India`);
                if (stockUrl) {
                  const cUrl = await uploadToCloudinary(stockUrl, true);
                  if (cUrl) {
                    hotel.image = cUrl;
                    stateModified = true;
                    totalUploaded++;
                    console.log(`    -> Fetched and uploaded hotel stock image: ${cUrl}`);
                  } else {
                    totalFailed++;
                  }
                }
              }
            } else {
              totalSkipped++;
            }
          }
        }
        
      }
    }
    
    // Save state changes
    if (stateModified) {
      console.log(`Saving updated state "${state.slug}" locally and to Firestore...`);
      fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), "utf-8");
      
      try {
        await setDoc(doc(firestoreDb, "states", state.slug), state);
        console.log(`Firestore document "states/${state.slug}" successfully updated!`);
      } catch (fErr) {
        console.error(`Firestore save error for ${state.slug}:`, fErr.message);
      }
    }
  }
  
  console.log("\n========================================");
  console.log("AUTO-UPLOADER RUN COMPLETE");
  console.log(`Uploaded: ${totalUploaded}`);
  console.log(`Skipped (already Cloudinary): ${totalSkipped}`);
  console.log(`Failed: ${totalFailed}`);
  console.log("========================================");
}

runUploader();
