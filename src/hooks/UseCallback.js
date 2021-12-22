import { useCallback, useState } from "react";

const fnCounter = new Set();

// Use when you need to pass a function to children components
// usar quando precisar passar uma função para componentes filhos
export default function UseCallback() {
  const [counter, setCounter] = useState(0);

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  fnCounter.add(handlePlus);
  console.log(fnCounter.size);

  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={handlePlus} />
    </div>
  );
}

function Button({ onClick }) {
  return <button onClick={onClick}>+</button>;
}
