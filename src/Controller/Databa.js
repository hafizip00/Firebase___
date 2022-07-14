import { app, database } from "../firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const collecctionref = collection(database, "Users");

export const Authenticate = async (data) => {
  const Auth = getAuth();
  const gProvider = new GoogleAuthProvider();
  // createUserWithEmailAndPassword(Auth, data.email, data.password)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  // });

  try {
    //AUTHS
    const res = await signInWithPopup(Auth, gProvider);
    console.log(res);
    const response = await createUserWithEmailAndPassword(
      Auth,
      data.email,
      data.password
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const Insertion = async (data) => {
  try {
    // INSERTION
    const response = await addDoc(collecctionref, {
      email: data.email,
      password: data.password,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (key, email, password) => {
  // UPDATE DOCS
  try {
    const docToupdate = await doc(database, "Users", key);
    const res = await updateDoc(docToupdate, {
      email: email,
      password: password,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  //   GET DATA
  try {
    const res = await getDocs(collecctionref);
    console.log(res.docs);
    console.log(res.docs.map((i) => i.data()));
  } catch (error) {
    console.log(error);
  }
};

export const deleteDocument = async (key) => {
  try {
    //Deletions
    const docToDelete = await doc(database, "Users", key);
    const res = await deleteDoc(docToDelete);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
