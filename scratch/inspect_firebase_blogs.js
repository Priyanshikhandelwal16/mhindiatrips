const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAQDmo-48Fn5-R_lt8uk6qjJZSsoYGVM9w",
  authDomain: "mh-india-trips.firebaseapp.com",
  projectId: "mh-india-trips",
  storageBucket: "mh-india-trips.firebasestorage.app",
  messagingSenderId: "733253901031",
  appId: "1:733253901031:web:b54eb084fcaaa120d66042",
};

async function inspectBlogs() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    console.log("Firebase initialized successfully. Fetching blogs...");
    
    const snapshot = await getDocs(collection(db, "blogs"));
    console.log(`TOTAL BLOGS RETRIEVED FROM FIRESTORE: ${snapshot.docs.length}`);
    
    snapshot.docs.forEach((doc, idx) => {
      const data = doc.data();
      console.log(`\n--- BLOG ${idx+1} [Doc ID: ${doc.id}] ---`);
      console.log("Slug:", data.slug);
      console.log("Category:", data.category);
      console.log("Is Deleted:", data.isDeleted);
      console.log("Title keys/type:", typeof data.title, data.title ? (typeof data.title === "object" ? Object.keys(data.title) : "string") : "null");
      console.log("Excerpt keys/type:", typeof data.excerpt, data.excerpt ? (typeof data.excerpt === "object" ? Object.keys(data.excerpt) : "string") : "null");
      console.log("Content keys/type:", typeof data.content, data.content ? (typeof data.content === "object" ? Object.keys(data.content) : "string") : "null");
      
      if (data.content) {
        if (typeof data.content === "object") {
          Object.keys(data.content).forEach(lang => {
            const val = data.content[lang] || "";
            console.log(`  Content [${lang}]: length=${val.length}, preview="${val.substring(0, 100).replace(/\n/g, ' ')}..."`);
          });
        } else {
          console.log(`  Content (string): length=${String(data.content).length}, preview="${String(data.content).substring(0, 100).replace(/\n/g, ' ')}..."`);
        }
      }
    });
    
  } catch (err) {
    console.error("Failed to fetch from Firestore:", err);
  }
}

inspectBlogs();
