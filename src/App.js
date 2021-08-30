
import React from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [state, setState] = useState(true);

  const changeFunction = () => {
    setState(!state);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{state ? "Harshit Ahuja" : "Tihsrah Ajuha"}</p>
        <button className="btn" onClick={changeFunction}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
