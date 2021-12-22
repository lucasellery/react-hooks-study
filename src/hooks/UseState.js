import "../styles.css";
import { useState } from "react";

export default function UseState() {
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>

      <button
        style={{
          border: "none",
          padding: "10px 20px",
          borderRadius: "16px",
          background: "#fc60a8",
          color: "#ffffff",
          textAlign: "center",
          cursor: "pointer",
          marginRight: "10px"
        }}
        onClick={handlePlus}
      >
        +
      </button>
      <button
        style={{
          border: "none",
          padding: "10px 20px",
          borderRadius: "16px",
          background: "#494368",
          color: "#ffffff",
          textAlign: "center",
          cursor: "pointer"
        }}
        onClick={handleMinus}
      >
        -
      </button>
    </div>
  );
}
