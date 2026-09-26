import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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

async function pullCollectionToLocal(name) {
  console.log(`Fetching '${name}' from Cloud Firestore...`);
  const querySnapshot = await getDocs(collection(db, name));
  const docs = [];
  querySnapshot.forEach(docSnap => {
    docs.push(docSnap.data());
  });
  
  // Sort if displayOrder exists
  docs.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
  
  const filePath = path.join(FALLBACK_DIR, `${name}.json`);
  fs.writeFileSync(filePath, JSON.stringify(docs, null, 2), "utf-8");
  console.log(`✔ Successfully pulled ${docs.length} items from Firestore into local ${name}.json!`);
}

async function main() {
  await pullCollectionToLocal("states");
  await pullCollectionToLocal("cities");
}

main().catch(console.error);
