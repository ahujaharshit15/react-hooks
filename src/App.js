import React, { useReducer } from "react";
import "./App.css";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "Increase") {
    return state + 1;
  }
  if (action.type === "Decrease") {
    return state - 1;
  }
  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increase" });
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "Decrease" });
        }}
      >
        Decrease
      </button>
    </React.Fragment>
  );
};

export default App;
