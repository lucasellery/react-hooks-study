import "../styles.css";
import { useState, useLayoutEffect } from "react";

export default function UseLayoutEffect() {
  const [counter, setCounter] = useState(0);

  useLayoutEffect(() => {}, [counter]); // executa antes da aplicação toda

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button className="button" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}
