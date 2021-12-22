import "../styles.css";
import { useState, useEffect } from "react";

export default function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // IIFE = Immediataly Invoked Function Expression
    // (async () => {})();
    console.log("rodou");

    return () => console.log("will unmount");
  }, []);

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
          background: "#494368",
          color: "#ffffff",
          textAlign: "center",
          cursor: "pointer",
          marginRight: "10px"
        }}
        onClick={handleMinus}
      >
        -
      </button>
      <button
        style={{
          border: "none",
          padding: "10px 20px",
          borderRadius: "16px",
          background: "#fc60a8",
          color: "#ffffff",
          textAlign: "center",
          cursor: "pointer"
        }}
        onClick={handlePlus}
      >
        +
      </button>

      <br />

      <span>{name}</span>
      <br />
      <input
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}
