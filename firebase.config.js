import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database"
function initializeAppIfNecessary() {
  try {
    return getApp();
  } catch (any) {
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_PUBLIC_API_KEY,
        authDomain: import.meta.env.VITE_PUBLIC_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PUBLIC_PROJECT_ID,
        storageBucket: import.meta.env.VITE_PUBLIC_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_PUBLIC_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_PUBLIC_APP_ID,
        measurementId: import.meta.env.VITE_PUBLIC_MEASUREMENT_ID,
        databaseURL: import.meta.env.VITE_PUBLIC_DATABASE_URL,
      };
      
    return initializeApp(firebaseConfig);
  }
}

const app = initializeAppIfNecessary();

export const db = getDatabase();
