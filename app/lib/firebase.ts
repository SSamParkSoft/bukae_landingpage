import {
  initializeApp,
  getApps,
  getApp,
  type FirebaseApp,
} from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

function getFirebaseApp(): FirebaseApp | null {
  if (getApps().length > 0) {
    return getApp();
  }
  const hasConfig = Object.values(firebaseConfig).every(Boolean);
  if (!hasConfig) {
    return null;
  }
  return initializeApp(firebaseConfig);
}

export const app = getFirebaseApp();

/** Firebase Storage 인스턴스 (서버/클라이언트 공용) */
export function getFirebaseStorage(): FirebaseStorage | null {
  return app ? getStorage(app) : null;
}

/** Firestore 인스턴스 (서버/클라이언트 공용) */
export function getFirestoreDb(): Firestore | null {
  return app ? getFirestore(app) : null;
}

/** 브라우저에서만 Analytics 인스턴스 반환 (Next.js SSR 대응) */
export function getFirebaseAnalytics(): Analytics | null {
  if (typeof window === "undefined" || !app) return null;
  return getAnalytics(app);
}
