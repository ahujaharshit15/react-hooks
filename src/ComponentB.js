// used with useContext Hook

import React, { useContext } from "react";
import { FirstName, LastName } from "./App";

import ComponentC from "./ComponentC";

const ComponentB = () => {
const fName = useContext(FirstName);
const lName = useContext(LastName);

  return <h1> My name is {fName} {lName}. </h1>
};

export default ComponentB;
