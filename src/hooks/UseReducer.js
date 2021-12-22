import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1
      };

    case "minus":
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1
      };
    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handlePlus() {
    dispatch({
      type: "plus"
    });
  }

  function handleMinus() {
    dispatch({
      type: "minus"
    });
  }

  return (
    <div>
      <h1>{state.counter}</h1>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}
