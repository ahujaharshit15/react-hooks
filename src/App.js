import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    alert("The value has been changed to " + num);
  }, [num]);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickButton2 = () => {
    setNum2(num2 + 1);
  };

  return (
    <div>
      <button onClick={onClickButton}>Click Me {num}</button>
      <br></br>
      <button onClick={onClickButton2}>Click Me {num2}</button>
    </div>
  );
}

export default App;
