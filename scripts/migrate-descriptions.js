const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const statesPath = path.join(projectRoot, 'src', 'data', 'fallback', 'states.json');

// Read .env.local
const envPath = path.join(projectRoot, '.env.local');
if (!fs.existsSync(envPath)) {
  console.error("Missing .env.local at", envPath);
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    }
    env[match[1]] = value;
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

if (!fs.existsSync(statesPath)) {
  console.error("states.json not found!");
  process.exit(1);
}

const states = JSON.parse(fs.readFileSync(statesPath, 'utf8'));

let modifiedStates = [];

states.forEach((state) => {
  let stateModified = false;
  if (state.cities && Array.isArray(state.cities)) {
    state.cities.forEach((city) => {
      // 1. Sync tagline and shortDescription
      const taglineVal = city.tagline;
      const shortDescVal = city.shortDescription;

      const hasTagline = taglineVal && (taglineVal.en || taglineVal.es || taglineVal.pt);
      const hasShortDesc = shortDescVal && (shortDescVal.en || shortDescVal.es || shortDescVal.pt);

      if (hasTagline && !hasShortDesc) {
        city.shortDescription = { ...taglineVal };
        stateModified = true;
        console.log(`[${state.slug}] -> Copied tagline to shortDescription for: ${city.slug}`);
      } else if (!hasTagline && hasShortDesc) {
        city.tagline = { ...shortDescVal };
        stateModified = true;
        console.log(`[${state.slug}] -> Copied shortDescription to tagline for: ${city.slug}`);
      } else if (hasTagline && hasShortDesc) {
        // Ensure both languages are fully populated if one has more translations
        for (const lang of ['en', 'es', 'pt']) {
          if (taglineVal[lang] && !shortDescVal[lang]) {
            city.shortDescription[lang] = taglineVal[lang];
            stateModified = true;
          }
          if (shortDescVal[lang] && !taglineVal[lang]) {
            city.tagline[lang] = shortDescVal[lang];
            stateModified = true;
          }
        }
      }

      // 2. Sync overview and fullDescription
      const overviewVal = city.overview;
      const fullDescVal = city.fullDescription;

      const hasOverview = overviewVal && (overviewVal.en || overviewVal.es || overviewVal.pt);
      const hasFullDesc = fullDescVal && (fullDescVal.en || fullDescVal.es || fullDescVal.pt);

      if (hasOverview && !hasFullDesc) {
        city.fullDescription = { ...overviewVal };
        stateModified = true;
        console.log(`[${state.slug}] -> Copied overview to fullDescription for: ${city.slug}`);
      } else if (!hasOverview && hasFullDesc) {
        city.overview = { ...fullDescVal };
        stateModified = true;
        console.log(`[${state.slug}] -> Copied fullDescription to overview for: ${city.slug}`);
      } else if (hasOverview && hasFullDesc) {
        // Ensure both languages are fully populated if one has more translations
        for (const lang of ['en', 'es', 'pt']) {
          if (overviewVal[lang] && !fullDescVal[lang]) {
            city.fullDescription[lang] = overviewVal[lang];
            stateModified = true;
          }
          if (fullDescVal[lang] && !overviewVal[lang]) {
            city.overview[lang] = fullDescVal[lang];
            stateModified = true;
          }
        }
      }
    });
  }

  if (stateModified) {
    modifiedStates.push(state);
  }
});

// Save updated local states.json
fs.writeFileSync(statesPath, JSON.stringify(states, null, 2), 'utf8');
console.log(`\n✅ Local states.json updated. Total modified states: ${modifiedStates.length}`);

// Upload to Firestore
if (firebaseConfig.apiKey && modifiedStates.length > 0) {
  console.log("Connecting to Firestore to upload changes...");
  const { initializeApp } = require('firebase/app');
  const { getFirestore, doc, setDoc } = require('firebase/firestore');

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);

  const uploadPromises = modifiedStates.map((state) => {
    const docRef = doc(firestore, "states", state.slug);
    return setDoc(docRef, state).then(() => {
      console.log(`🚀 SUCCESS: Remote Firestore '${state.slug}' document updated!`);
    });
  });

  Promise.all(uploadPromises).then(() => {
    console.log("✅ All remote Firestore synchronization completed successfully!");
    process.exit(0);
  }).catch((err) => {
    console.error("❌ FAILED to upload to Firestore:", err);
    process.exit(1);
  });
} else {
  console.log("No remote updates needed or Firebase config missing.");
  process.exit(0);
}
