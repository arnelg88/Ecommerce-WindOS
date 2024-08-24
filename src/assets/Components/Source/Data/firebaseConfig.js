import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7H7253zV_FQe-f7oxJaJL2o4GODhYBxo",
  authDomain: "dataproducts-4872b.firebaseapp.com",
  projectId: "dataproducts-4872b",
  storageBucket: "dataproducts-4872b.appspot.com",
  messagingSenderId: "441463037675",
  appId: "1:441463037675:web:082c676b0a9ab5fcb1a8ae"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
