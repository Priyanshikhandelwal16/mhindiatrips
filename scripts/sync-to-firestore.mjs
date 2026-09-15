import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import fs from "fs";
import path from "path";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAQDmo-48Fn5-R_lt8uk6qjJZSsoYGVM9w",
  authDomain: "mh-india-trips.firebaseapp.com",
  projectId: "mh-india-trips",
  storageBucket: "mh-india-trips.firebasestorage.app",
  messagingSenderId: "733253901031",
  appId: "1:733253901031:web:b54eb084fcaaa120d66042"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FALLBACK_DIR = path.join(process.cwd(), "src", "data", "fallback");

async function syncCollection(name, keyField = "slug") {
  const filePath = path.join(FALLBACK_DIR, `${name}.json`);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${name}: file not found.`);
    return;
  }
  const items = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  if (!Array.isArray(items)) return;

  console.log(`Uploading ${items.length} items to Firestore collection '${name}'...`);
  let count = 0;
  for (const item of items) {
    if (!item || item.isDeleted === true) continue;
    const docId = item[keyField] || item.id || item.slug;
    if (!docId) continue;

    await setDoc(doc(db, name, docId), { ...item, isDeleted: false }, { merge: true });
    count++;
  }
  console.log(`✔ Successfully uploaded ${count} items to '${name}'!`);
}

async function main() {
  console.log("=================================================");
  console.log("STARTING LIVE DATA UPLOAD TO CLOUD FIRESTORE...");
  console.log("=================================================");

  try {
    await syncCollection("tour_packages", "slug");
    await syncCollection("outbound", "slug");
    await syncCollection("blogs", "slug");
    await syncCollection("states", "id");
    await syncCollection("foods", "slug");
    await syncCollection("testimonials", "id");
    await syncCollection("pages", "id");
    await syncCollection("settings", "id");

    console.log("=================================================");
    console.log("🎉 ALL LOCAL DATA FULLY SYNCED TO FIRESTORE CLOUD!");
    console.log("=================================================");
  } catch (err) {
    console.error("❌ Sync Error (Check Firebase Console Rules):", err.message || err);
  }
}

main();
