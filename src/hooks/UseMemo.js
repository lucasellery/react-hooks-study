import { useCallback, useState, useMemo } from "react";

export default function UseMemo() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const total = useMemo(() => {
    console.log("runned useMemo");
    return counter * 1 * 4 * 5;
  }, [counter]);

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <h3>{total}</h3>
      <Button onClick={handlePlus} />

      <br />
      <br />
      <span>{name}</span>
      <input onChange={(e) => e.target.value} />
    </div>
  );
}

function Button({ onClick }) {
  return <button onClick={onClick}>+</button>;
}
