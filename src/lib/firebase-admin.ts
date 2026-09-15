let adminFirestore: any = null;
let initialized = false;

export function getAdminFirestore(): any {
  if (initialized) return adminFirestore;
  initialized = true;

  try {
    const serviceAccountRaw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;
    const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

    // In local dev mode without Firebase Admin credentials, skip loading admin SDK to prevent 5s timeouts per collection
    if (!serviceAccountRaw && (!clientEmail || !privateKeyRaw)) {
      return null;
    }

    // Dynamic require so Turbopack SSR does not load optional telemetry dependencies when unneeded
    const { initializeApp, getApps, getApp, cert } = require("firebase-admin/app");
    const { getFirestore } = require("firebase-admin/firestore");

    let app;
    if (getApps().length > 0) {
      app = getApp();
    } else if (serviceAccountRaw) {
      const parsedAccount = JSON.parse(serviceAccountRaw);
      app = initializeApp({ credential: cert(parsedAccount) });
    } else if (clientEmail && privateKeyRaw && projectId) {
      const privateKey = privateKeyRaw.replace(/\\n/g, "\n");
      app = initializeApp({
        credential: cert({ projectId, clientEmail, privateKey })
      });
    } else if (projectId) {
      try {
        app = initializeApp({ projectId });
      } catch (e) {
        adminFirestore = null;
        return null;
      }
    } else {
      adminFirestore = null;
      return null;
    }

    if (app) {
      adminFirestore = getFirestore(app);
    }
    return adminFirestore;
  } catch (err: any) {
    console.warn("[Firebase Admin] Failed to initialize Firebase Admin SDK:", err.message || err);
    adminFirestore = null;
    return null;
  }
}
