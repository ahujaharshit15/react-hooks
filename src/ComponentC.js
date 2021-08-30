import React from "react";
import { FirstName, LastName } from "./App";

const ComponentC = () => {
  return (
    <React.Fragment>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <LastName.Consumer>
              {(lName) => {
                return (
                  <h1>
                    My Name is {fName} {lName}.
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </React.Fragment>
  );
};

export default ComponentC;
