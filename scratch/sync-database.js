const fs = require('fs');
const path = require('path');
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
const envData = fs.readFileSync(envPath, 'utf8');
const env = {};
envData.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)\s*$/);
  if (match) {
    let val = match[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.substring(1, val.length - 1);
    }
    env[match[1]] = val;
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

console.log("Initializing Firebase with project id:", firebaseConfig.projectId);
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

async function syncCollection(name, key = 'id') {
  const filePath = path.join(__dirname, '..', 'src', 'data', 'fallback', `${name}.json`);
  if (!fs.existsSync(filePath)) {
    console.warn(`File ${filePath} not found, skipping sync.`);
    return;
  }
  const items = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log(`Syncing ${items.length} items to Firestore collection "${name}"...`);
  
  for (const item of items) {
    const docId = item[key];
    if (docId) {
      const docRef = doc(firestore, name, docId);
      await setDoc(docRef, item);
      console.log(`  - Synced ${docId}`);
    }
  }
}

async function run() {
  try {
    // 1. Sync updated pages
    await syncCollection('pages', 'id');
    // 2. Sync tour packages
    await syncCollection('tour_packages', 'slug');
    console.log("Firestore sync completed successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Firestore sync failed:", err);
    process.exit(1);
  }
}

run();
