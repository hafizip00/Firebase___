import React from "react";
import { useState } from "react";
const Input = () => {
  const [data, setdata] = useState({});
  const submithandle = () => {
    // Insertion(data)
    // getData();
    // update("F17m0CbczVQx3eAFGUUC", "jkl@gmail.com", "Pakistan");
    // deleteDocument("F17m0CbczVQx3eAFGUUC");
  };
  return (
    <div>
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
};

export default Input;
