import { useState } from "react";
import "./App.css";
import { FileUploading } from "./Controller/FileStorage";

function App() {
  const [data, setdata] = useState({});
  const handleInput = () => {
    FileUploading(data);
  };

  return (
    <div className="App">
      <input type="file" onChange={(event) => setdata(event.target.files[0])} />
      <button onClick={handleInput}>UPLOAD</button>
    </div>
  );
}

export default App;
