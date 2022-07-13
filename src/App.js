import "./App.css";
import { app, database } from "./firebase.config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

function App() {
  const collecctionref = collection(database, "Users");
  const [data, setdata] = useState({});
  const submithandle = async () => {
    const Auth = getAuth();
    // const gProvider = new GoogleAuthProvider();
    // createUserWithEmailAndPassword(Auth, data.email, data.password)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    // });

    try {
      const res = await getDocs(collecctionref);
      console.log(res.docs);
      console.log(res.docs.map((i) => i.data()));

      // INSERTION
      // const response = await addDoc(collecctionref, { data });
      // console.log(response);

      // AUTHS
      // const res = await signInWithPopup(Auth, gProvider);
      // console.log(res);
      // const response = await createUserWithEmailAndPassword(
      //   Auth,
      //   data.email,
      //   data.password
      // );
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h1>Firebase Tutorial Real time</h1>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(event) => setdata({ ...data, email: event.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(event) => setdata({ ...data, password: event.target.value })}
      />
      <button onClick={submithandle}>Sign in</button>
    </div>
  );
}

export default App;
