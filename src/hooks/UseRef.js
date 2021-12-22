import { useRef } from "react";

export default function UseRef() {
  console.log("rendered");

  const number = useRef(0);
  const inputRef = useRef(null);

  function handleSetValue() {
    const newNumber = Math.round(Math.random() * (10 - 1) + 1);
    number.current = newNumber;
  }

  function handlePrintValue() {
    // alert(number.current);
    console.log(inputRef.current.value);
    alert(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} />
      <button
        style={{
          border: "none",
          padding: "10px 20px",
          borderRadius: "16px",
          background: "#494368",
          color: "#ffffff",
          textAlign: "center",
          cursor: "pointer",
          marginLeft: "10px"
        }}
        onClick={handlePrintValue}
      >
        Print name
      </button>
    </div>
  );
}
