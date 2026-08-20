import fs from "fs";
import path from "path";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

async function check() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log("Fetching states from Firestore...");
    const snapshot = await getDocs(collection(db, "states"));
    console.log("Total states in Firestore:", snapshot.size);
    
    const checkStates = ["rajasthan", "goa", "kerala"];
    
    snapshot.forEach(doc => {
      const state = doc.data();
      if (checkStates.includes(state.slug)) {
        console.log(`\n=== STATE: ${state.slug.toUpperCase()} ===`);
        console.log(`State Image: ${state.image}`);
        if (state.cities) {
          console.log(`Cities (${state.cities.length}):`);
          for (const city of state.cities) {
            console.log(`  - City: ${city.slug}`);
            console.log(`    City Image: ${city.image}`);
            if (city.attractions) {
              console.log(`    Attractions:`, city.attractions.map(a => ({ name: a.name?.en, image: a.image })));
            }
            if (city.localFoodDishes) {
              console.log(`    Local Food:`, city.localFoodDishes.map(f => ({ name: f.name?.en, image: f.image })));
            }
            if (city.hotels) {
              console.log(`    Hotels:`, city.hotels.map(h => ({ name: h.name?.en, image: h.image })));
            }
          }
        }
      }
    });
  } catch (err) {
    console.error("Error connecting to Firestore:", err);
  }
}

check();
