const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");
const fs = require("fs");
const path = require("path");

const firebaseConfig = {
  apiKey: "AIzaSyAQDmo-48Fn5-R_lt8uk6qjJZSsoYGVM9w",
  authDomain: "mh-india-trips.firebaseapp.com",
  projectId: "mh-india-trips",
  storageBucket: "mh-india-trips.firebasestorage.app",
  messagingSenderId: "733253901031",
  appId: "1:733253901031:web:b54eb084fcaaa120d66042",
};

const FALLBACK_DIR = path.join(__dirname, "..", "src", "data", "fallback");

async function syncCollection(db, collectionName, fileName) {
  try {
    console.log(`Fetching collection "${collectionName}" from Firestore...`);
    const snapshot = await getDocs(collection(db, collectionName));
    const data = snapshot.docs.map(doc => {
      // Include document ID as 'id' or 'slug' if not present
      const docData = doc.data();
      if (!docData.id && !docData.slug) {
        return { id: doc.id, ...docData };
      }
      return docData;
    });
    
    const filePath = path.join(FALLBACK_DIR, `${fileName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`Successfully synced ${data.length} items to local fallback file: ${fileName}.json`);
  } catch (err) {
    console.error(`Error syncing collection "${collectionName}":`, err.message || err);
  }
}

async function syncAll() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    // Ensure fallback directory exists
    if (!fs.existsSync(FALLBACK_DIR)) {
      fs.mkdirSync(FALLBACK_DIR, { recursive: true });
    }
    
    console.log("Starting full database sync from Firestore to local fallbacks...");
    
    await syncCollection(db, "blogs", "blogs");
    await syncCollection(db, "states", "states");
    await syncCollection(db, "cities", "cities");
    await syncCollection(db, "foods", "foods");
    await syncCollection(db, "testimonials", "testimonials");
    await syncCollection(db, "tour_packages", "tour_packages");
    await syncCollection(db, "pages", "pages");
    await syncCollection(db, "settings", "settings");
    
    console.log("\nDATABASE SYNC COMPLETE!");
  } catch (err) {
    console.error("Sync initialization failed:", err);
  }
}

syncAll();
