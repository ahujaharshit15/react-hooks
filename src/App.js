// ComponentB uses useContext Hook and ComponentC uses createContext() API to pass data without Props in order to use context.

import React, { createContext } from "react";
import "./App.css";
import ComponentA from "./ComponentA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <React.Fragment>
      <FirstName.Provider value={"Harshit"}>
        <LastName.Provider value={"Ahuja"}>
          <ComponentA />
        </LastName.Provider>
      </FirstName.Provider>
    </React.Fragment>
  );
};

export default App;
export { FirstName, LastName };
