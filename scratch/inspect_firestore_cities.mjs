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

async function inspectCollection(name) {
  const querySnapshot = await getDocs(collection(db, name));
  console.log(`\n=== FIRESTORE COLLECTION '${name}' (${querySnapshot.size} docs) ===`);
  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    console.log(`ID: ${docSnap.id}, stateId: ${data.stateId}, updatedAt: ${data.updatedAt}, name: ${JSON.stringify(data.name)}`);
  });
}

async function main() {
  await inspectCollection("states");
  await inspectCollection("cities");
}

main().catch(console.error);
