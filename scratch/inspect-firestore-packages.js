const fs = require('fs');
const path = require('path');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

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

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

async function inspect() {
  try {
    const colRef = collection(firestore, "tour_packages");
    const snapshot = await getDocs(colRef);
    console.log(`Found ${snapshot.docs.length} documents in Firestore:`);
    snapshot.docs.forEach((doc, idx) => {
      const data = doc.data();
      console.log(`${idx + 1}: docId=${doc.id}, slug=${data.slug}, title=${data.title?.en || data.title}`);
    });
    process.exit(0);
  } catch (err) {
    console.error("Firestore query failed:", err);
    process.exit(1);
  }
}

inspect();
