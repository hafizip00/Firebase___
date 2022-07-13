import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDroDpLSx1j54QIl-YJjelE2D6afzlVYgA",
  authDomain: "fir-learning-9c94c.firebaseapp.com",
  projectId: "fir-learning-9c94c",
  storageBucket: "fir-learning-9c94c.appspot.com",
  messagingSenderId: "206413207950",
  appId: "1:206413207950:web:ed029ec5ffb34c91dc2cdf",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
