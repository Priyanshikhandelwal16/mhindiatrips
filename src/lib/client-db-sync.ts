import { firestore } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export async function syncClientFirestore(collectionName: string, docId: string, data: any, isDelete: boolean = false) {
  if (!firestore) return;
  try {
    const docRef = doc(firestore, collectionName, docId);
    if (isDelete) {
      await setDoc(docRef, { isDeleted: true, updatedAt: new Date().toISOString() }, { merge: true }).catch(err => {
        console.warn(`[Client Firestore Sync] Silent warning for ${collectionName}/${docId}:`, err?.message || err);
      });
    } else {
      await setDoc(docRef, { ...data, isDeleted: false, updatedAt: new Date().toISOString() }, { merge: true }).catch(err => {
        console.warn(`[Client Firestore Sync] Silent warning for ${collectionName}/${docId}:`, err?.message || err);
      });
    }
  } catch (e: any) {
    console.warn(`[Client Firestore Sync] ${collectionName}/${docId} error:`, e?.message || e);
  }
}

