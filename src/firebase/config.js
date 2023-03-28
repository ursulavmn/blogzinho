import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAzE28yqWTGW6vO_gnlRwM1YgH7QDOHdz8",
  authDomain: "blogzinho-d3683.firebaseapp.com",
  projectId: "blogzinho-d3683",
  storageBucket: "blogzinho-d3683.appspot.com",
  messagingSenderId: "1069175409333",
  appId: "1:1069175409333:web:ddd661d85d5c2bf5528cfc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db };