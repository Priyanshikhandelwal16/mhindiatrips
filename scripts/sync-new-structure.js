const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const statesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'states.json');
const citiesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'cities.json');

// Read .env.local
const envPath = path.join(projectRoot, '.env.local');
if (!fs.existsSync(envPath)) {
  console.error("Missing .env.local at", envPath);
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || '';
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

if (!firebaseConfig.apiKey) {
  console.log("Firebase API Key is missing. Skipping Firestore sync.");
  process.exit(0);
}

const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, collection, getDocs, deleteDoc } = require('firebase/firestore');

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

async function syncCollections() {
  try {
    // 1. Sync States
    console.log("Reading local states.json...");
    const states = JSON.parse(fs.readFileSync(statesPath, 'utf8'));
    console.log(`Syncing ${states.length} states to Firestore...`);
    for (const state of states) {
      const docRef = doc(firestore, "states", state.id);
      await setDoc(docRef, state);
      console.log(`  Uploaded state: ${state.id}`);
    }

    // 2. Clear old cities in Firestore first (optional but clean)
    console.log("Checking Firestore cities...");
    const citiesSnapshot = await getDocs(collection(firestore, "cities"));
    console.log(`Deleting ${citiesSnapshot.size} existing cities from Firestore...`);
    for (const docSnap of citiesSnapshot.docs) {
      await deleteDoc(doc(firestore, "cities", docSnap.id));
    }

    // 3. Sync New Flat Cities
    console.log("Reading local cities.json...");
    const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));
    console.log(`Syncing ${cities.length} cities to Firestore...`);
    for (const city of cities) {
      const docRef = doc(firestore, "cities", city.id);
      await setDoc(docRef, city);
      console.log(`  Uploaded city: ${city.id}`);
    }

    console.log("🚀 Firestore Sync completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Firestore Sync failed:", error);
    process.exit(1);
  }
}

syncCollections();
