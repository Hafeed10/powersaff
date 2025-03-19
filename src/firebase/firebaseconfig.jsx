import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyChA85gTZI9165y034gP4ZQDU4FFIZexgs",
  authDomain: "power-saff.firebaseapp.com",
  projectId: "power-saff",
  storageBucket: "power-saff.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "1022136145724",
  appId: "1:1022136145724:web:9a7eab839e88dc81473039",
  measurementId: "G-N2TBPECPK2"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize Storage

export { fireDB, auth, storage };
