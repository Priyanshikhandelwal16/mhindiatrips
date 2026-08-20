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

const publicDir = path.join(process.cwd(), "public");

// Upload file to Cloudinary
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
    console.error(`Error uploading ${sourcePath}:`, err.message);
  }
  return null;
}

// Search stock image fallback from Unsplash napi
async function searchStockImage(query) {
  try {
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
    console.error(`Error searching stock for "${query}":`, err.message);
  }
  return null;
}

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
    console.error(`Error uploading URL ${url}:`, err.message);
  }
  return null;
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
  const excludeStates = ["rajasthan", "goa", "kerala"];
  let totalUploaded = 0;
  
  for (const state of states) {
    if (excludeStates.includes(state.slug)) continue;
    
    let modified = false;
    const stateName = state.title?.en || state.title || "";
    
    // Process State Image
    if (state.image && state.image.startsWith("/images/")) {
      const fullPath = path.join(publicDir, state.image);
      if (fs.existsSync(fullPath)) {
        console.log(`Uploading local state image: ${state.image}`);
        const cUrl = await uploadToCloudinary(fullPath);
        if (cUrl) {
          state.image = cUrl;
          modified = true;
          totalUploaded++;
          await sleep(500);
        }
      }
    }
    
    // Process Cities
    if (state.cities) {
      for (const city of state.cities) {
        const cityName = city.name?.en || city.name || "";
        
        if (city.image && city.image.startsWith("/images/")) {
          const fullPath = path.join(publicDir, city.image);
          if (fs.existsSync(fullPath)) {
            console.log(`Uploading local city image: ${city.image} for ${cityName}`);
            const cUrl = await uploadToCloudinary(fullPath);
            if (cUrl) {
              city.image = cUrl;
              modified = true;
              totalUploaded++;
              await sleep(500);
            }
          } else {
            // Local file doesn't exist, search stock
            console.log(`Local file ${city.image} not found. Searching stock for city: ${cityName}`);
            const stockUrl = await searchStockImage(`${cityName} city tourism ${stateName}`);
            if (stockUrl) {
              const cUrl = await uploadUrlToCloudinary(stockUrl);
              if (cUrl) {
                city.image = cUrl;
                modified = true;
                totalUploaded++;
                console.log(`-> Set city image to Cloudinary stock URL: ${cUrl}`);
                await sleep(500);
              }
            }
          }
        }
        
        // Attractions
        if (city.attractions) {
          for (const attr of city.attractions) {
            const attrName = attr.name?.en || attr.name || "";
            if (attr.image && attr.image.startsWith("/images/")) {
              const fullPath = path.join(publicDir, attr.image);
              if (fs.existsSync(fullPath)) {
                console.log(`Uploading local attraction image: ${attr.image} for ${attrName}`);
                const cUrl = await uploadToCloudinary(fullPath);
                if (cUrl) {
                  attr.image = cUrl;
                  modified = true;
                  totalUploaded++;
                  await sleep(500);
                }
              } else {
                console.log(`Local file ${attr.image} not found. Searching stock for attraction: ${attrName}`);
                const stockUrl = await searchStockImage(`${attrName} ${cityName} India`);
                if (stockUrl) {
                  const cUrl = await uploadUrlToCloudinary(stockUrl);
                  if (cUrl) {
                    attr.image = cUrl;
                    modified = true;
                    totalUploaded++;
                    console.log(`-> Set attraction image to Cloudinary stock URL: ${cUrl}`);
                    await sleep(500);
                  }
                }
              }
            }
          }
        }
        
        // Food
        if (city.localFoodDishes) {
          for (const food of city.localFoodDishes) {
            const foodName = food.name?.en || food.name || "";
            if (food.image && food.image.startsWith("/images/")) {
              const fullPath = path.join(publicDir, food.image);
              if (fs.existsSync(fullPath)) {
                console.log(`Uploading local food image: ${food.image} for ${foodName}`);
                const cUrl = await uploadToCloudinary(fullPath);
                if (cUrl) {
                  food.image = cUrl;
                  modified = true;
                  totalUploaded++;
                  await sleep(500);
                }
              }
            }
          }
        }
        
        // Hotels
        if (city.hotels) {
          for (const hotel of city.hotels) {
            const hotelName = hotel.name?.en || hotel.name || "";
            if (hotel.image && hotel.image.startsWith("/images/")) {
              const fullPath = path.join(publicDir, hotel.image);
              if (fs.existsSync(fullPath)) {
                console.log(`Uploading local hotel image: ${hotel.image} for ${hotelName}`);
                const cUrl = await uploadToCloudinary(fullPath);
                if (cUrl) {
                  hotel.image = cUrl;
                  modified = true;
                  totalUploaded++;
                  await sleep(500);
                }
              }
            }
          }
        }
      }
    }
    
    if (modified) {
      console.log(`Saving state changes for ${state.slug} locally and in Firestore...`);
      fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), "utf-8");
      try {
        await setDoc(doc(firestoreDb, "states", state.slug), state);
        console.log(`Firestore document states/${state.slug} successfully updated!`);
      } catch (err) {
        console.error(`Error saving states/${state.slug} in Firestore:`, err.message);
      }
    }
  }
  
  console.log(`\nUpload and sync completed! Total images processed: ${totalUploaded}`);
}

run();
