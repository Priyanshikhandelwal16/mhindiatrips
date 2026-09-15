import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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

async function inspect() {
  console.log("--- TOUR PACKAGES IN FIRESTORE ---");
  const pkgsSnap = await getDocs(collection(db, "tour_packages"));
  console.log(`Total packages in Firestore: ${pkgsSnap.docs.length}`);
  pkgsSnap.docs.forEach(doc => {
    const data = doc.data();
    console.log(`- ID: ${doc.id} | Slug: ${data.slug} | Title: ${data.title?.en || data.title} | isDeleted: ${data.isDeleted} | updatedAt: ${data.updatedAt}`);
  });

  console.log("\n--- OUTBOUND IN FIRESTORE ---");
  const outSnap = await getDocs(collection(db, "outbound"));
  console.log(`Total outbound in Firestore: ${outSnap.docs.length}`);
  outSnap.docs.forEach(doc => {
    const data = doc.data();
    console.log(`- ID: ${doc.id} | Slug: ${data.slug} | Title: ${data.title?.en || data.title} | isDeleted: ${data.isDeleted} | updatedAt: ${data.updatedAt}`);
  });
}

inspect().catch(console.error);
