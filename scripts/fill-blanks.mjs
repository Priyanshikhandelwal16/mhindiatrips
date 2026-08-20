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

// Fallback source URLs from Unsplash
const fallbackSources = {
  hotel: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800", // luxury heritage building
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800", // luxury hotel bedroom
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800", // luxury beach resort
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800"  // luxury pool resort
  ],
  food: [
    "https://images.unsplash.com/photo-1585938338392-50a59970d8ee?q=80&w=800", // colorful indian curry
    "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=800", // samosas street food
    "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800"  // rich indian thali
  ],
  attraction: [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800", // Taj Mahal
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800", // Hampi temple
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800"  // Indian palace gate
  ],
  city: [
    "https://images.unsplash.com/photo-1590050752117-238cb061295a?q=80&w=800", // Scenic river/landscape
    "https://images.unsplash.com/photo-1506461883276-594a12b11cc3?q=80&w=800", // Munnar tea hills
    "https://images.unsplash.com/photo-1598325413403-c46ad844ae9a?q=80&w=800"  // Blue city street
  ],
  state: [
    "https://images.unsplash.com/photo-1590050752117-238cb061295a?q=80&w=800",
    "https://images.unsplash.com/photo-1506461883276-594a12b11cc3?q=80&w=800",
    "https://images.unsplash.com/photo-1598325413403-c46ad844ae9a?q=80&w=800"
  ]
};

// Upload remote URL to Cloudinary
async function uploadToCloudinary(url) {
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
    console.error(`Error uploading ${url}:`, err.message);
  }
  return null;
}

async function run() {
  console.log("Pre-uploading fallback images to Cloudinary...");
  const fallbacks = { hotel: [], food: [], attraction: [], city: [], state: [] };
  
  for (const type of Object.keys(fallbackSources)) {
    for (const url of fallbackSources[type]) {
      const cUrl = await uploadToCloudinary(url);
      if (cUrl) {
        fallbacks[type].push(cUrl);
      } else {
        // Fallback to original url if Cloudinary fails
        fallbacks[type].push(url);
      }
    }
  }
  
  console.log("Fallback Cloudinary URLs prepared.");
  
  let filledStates = 0;
  let filledCities = 0;
  let filledAttractions = 0;
  let filledFoods = 0;
  let filledHotels = 0;
  
  // Indexes for cycling fallbacks
  let hIdx = 0;
  let fIdx = 0;
  let aIdx = 0;
  let cIdx = 0;
  let sIdx = 0;
  
  for (const state of states) {
    let modified = false;
    
    if (!state.image || state.image.trim() === "" || state.image.includes("fallback")) {
      state.image = fallbacks.state[sIdx % fallbacks.state.length];
      sIdx++;
      modified = true;
      filledStates++;
    }
    
    if (state.cities) {
      for (const city of state.cities) {
        if (!city.image || city.image.trim() === "" || city.image.includes("fallback")) {
          city.image = fallbacks.city[cIdx % fallbacks.city.length];
          cIdx++;
          modified = true;
          filledCities++;
        }
        
        if (city.attractions) {
          for (const attr of city.attractions) {
            if (!attr.image || attr.image.trim() === "" || attr.image.includes("fallback")) {
              attr.image = fallbacks.attraction[aIdx % fallbacks.attraction.length];
              aIdx++;
              modified = true;
              filledAttractions++;
            }
          }
        }
        
        if (city.localFoodDishes) {
          for (const food of city.localFoodDishes) {
            if (!food.image || food.image.trim() === "" || food.image.includes("fallback")) {
              food.image = fallbacks.food[fIdx % fallbacks.food.length];
              fIdx++;
              modified = true;
              filledFoods++;
            }
          }
        }
        
        if (city.hotels) {
          for (const hotel of city.hotels) {
            if (!hotel.image || hotel.image.trim() === "" || hotel.image.includes("fallback")) {
              hotel.image = fallbacks.hotel[hIdx % fallbacks.hotel.length];
              hIdx++;
              modified = true;
              filledHotels++;
            }
          }
        }
      }
    }
    
    if (modified) {
      console.log(`Saving filled state changes for ${state.slug} locally and to Firestore...`);
      fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), "utf-8");
      
      try {
        await setDoc(doc(firestoreDb, "states", state.slug), state);
        console.log(`Firestore states/${state.slug} successfully updated!`);
      } catch (err) {
        console.error(`Error saving states/${state.slug} in Firestore:`, err.message);
      }
    }
  }
  
  console.log("\n--- FILL BLANKS COMPLETE ---");
  console.log(`Filled States: ${filledStates}`);
  console.log(`Filled Cities: ${filledCities}`);
  console.log(`Filled Attractions: ${filledAttractions}`);
  console.log(`Filled Foods: ${filledFoods}`);
  console.log(`Filled Hotels: ${filledHotels}`);
}

run();
