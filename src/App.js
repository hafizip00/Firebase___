import { useState } from "react";
import "./App.css";
import { storage } from "./firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function App() {
  const [data, setdata] = useState({});
  const handleInput = () => {
    console.log(data.name);
    const storageRef = ref(storage, data.name);
    const uploadTask = uploadBytesResumable(storageRef, data);
    uploadTask.on(
      "state_changed",
      (snap) => {
        const progress = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

  return (
    <div className="App">
      <input type="file" onChange={(event) => setdata(event.target.files[0])} />
      <button onClick={handleInput}>UPLOAD</button>
    </div>
  );
}

export default App;
