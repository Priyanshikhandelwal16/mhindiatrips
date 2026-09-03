import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let adminFirestore: Firestore | null = null;
let initialized = false;

export function getAdminFirestore(): Firestore | null {
  if (initialized) return adminFirestore;
  initialized = true;

  try {
    if (getApps().length > 0) {
      adminFirestore = getFirestore(getApp());
      return adminFirestore;
    }

    const serviceAccountRaw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;
    const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

    let app;

    if (serviceAccountRaw) {
      const parsedAccount = JSON.parse(serviceAccountRaw);
      app = initializeApp({
        credential: cert(parsedAccount),
      });
    } else if (clientEmail && privateKeyRaw && projectId) {
      const privateKey = privateKeyRaw.replace(/\\n/g, "\n");
      app = initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });
    } else if (projectId) {
      // Default Application Credentials (GCP / Netlify Function environment)
      app = initializeApp({ projectId });
    } else {
      console.warn("[Firebase Admin] No Firebase Admin credentials found in env. Running in offline/local JSON fallback mode.");
      return null;
    }

    adminFirestore = getFirestore(app);
    return adminFirestore;
  } catch (err: any) {
    console.warn("[Firebase Admin] Failed to initialize Firebase Admin SDK:", err.message || err);
    adminFirestore = null;
    return null;
  }
}
