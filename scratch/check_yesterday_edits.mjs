import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

async function checkYesterday() {
  const citySnaps = await getDocs(collection(db, "cities"));
  console.log("=== CITIES UPDATED ON 2026-09-25 ===");
  citySnaps.forEach(docSnap => {
    const d = docSnap.data();
    if (d.updatedAt && d.updatedAt.startsWith("2026-09-25")) {
      console.log(`City: ${docSnap.id} (${d.stateId}) - updatedAt: ${d.updatedAt}`);
    }
  });

  const stateSnaps = await getDocs(collection(db, "states"));
  console.log("=== STATES UPDATED ON 2026-09-25 ===");
  stateSnaps.forEach(docSnap => {
    const d = docSnap.data();
    if (d.updatedAt && d.updatedAt.startsWith("2026-09-25")) {
      console.log(`State: ${docSnap.id} - updatedAt: ${d.updatedAt}`);
    }
  });
}

checkYesterday().catch(console.error);
