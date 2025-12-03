import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBbNJwOiVspd5qfhlpZ-aVMaq7PUEUw_vQ",
  authDomain: "robosoccer2025.firebaseapp.com",
  databaseURL: "https://robosoccer2025-default-rtdb.firebaseio.com",
  projectId: "robosoccer2025",
  storageBucket: "robosoccer2025.firebasestorage.app",
  messagingSenderId: "464775927137",
  appId: "1:464775927137:web:c3e922b0a4a99f9ae72120",
  measurementId: "G-H0HBD3PK8L",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;
