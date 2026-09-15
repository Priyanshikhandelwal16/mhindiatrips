import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const FALLBACK_DIR = path.join(process.cwd(), "src", "data", "fallback");

async function syncCollectionToDisk(colName, fileName) {
  try {
    const snap = await getDocs(collection(db, colName));
    const items = snap.docs
      .map(d => ({ id: d.id, ...d.data() }))
      .filter(item => item && item.isDeleted !== true);

    const filePath = path.join(FALLBACK_DIR, `${fileName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(items, null, 2), "utf-8");
    console.log(`Synced ${colName} -> ${fileName}.json: ${items.length} active documents saved.`);
  } catch (err) {
    console.error(`Error syncing ${colName}:`, err.message || err);
  }
}

async function main() {
  console.log("Syncing Cloud Firestore live data to local fallback disk files...");
  await syncCollectionToDisk("tour_packages", "tour_packages");
  await syncCollectionToDisk("outbound", "outbound");
  await syncCollectionToDisk("blogs", "blogs");
  await syncCollectionToDisk("states", "states");
  await syncCollectionToDisk("cities", "cities");
  await syncCollectionToDisk("foods", "foods");
  await syncCollectionToDisk("testimonials", "testimonials");
  await syncCollectionToDisk("pages", "pages");
  await syncCollectionToDisk("settings", "settings");
  console.log("Disk fallback files are now 100% in sync with Firestore!");
}

main().catch(console.error);
