const { initializeApp } = require("firebase/app");
const { getFirestore, doc, getDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAQDmo-48Fn5-R_lt8uk6qjJZSsoYGVM9w",
  authDomain: "mh-india-trips.firebaseapp.com",
  projectId: "mh-india-trips",
  storageBucket: "mh-india-trips.firebasestorage.app",
  messagingSenderId: "733253901031",
  appId: "1:733253901031:web:b54eb084fcaaa120d66042",
};

const slugs = [
  "wildlife-photography-india",
  "understanding-indian-culture",
  "top-luxury-palace-hotels",
  "sustainable-travel-india",
  "south-vs-north-india"
];

async function inspectBlogDetails() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    for (const slug of slugs) {
      const docRef = doc(db, "blogs", slug);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const data = snapshot.data();
        console.log(`\n--- BLOG: ${slug} ---`);
        console.log("Keys available in Firestore document:", Object.keys(data));
        // Check if there are keys related to packages or other custom fields
        Object.keys(data).forEach(key => {
          if (!["content", "title", "excerpt", "seoTitle", "seoDescription", "featuredImage"].includes(key)) {
            console.log(`  ${key}:`, typeof data[key] === "object" ? JSON.stringify(data[key]).substring(0, 150) : data[key]);
          }
        });
      } else {
        console.log(`Blog document not found for slug: ${slug}`);
      }
    }
  } catch (err) {
    console.error("Error inspecting blog details:", err);
  }
}

inspectBlogDetails();
