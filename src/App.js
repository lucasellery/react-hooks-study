import "./styles.css";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/customHooks/useFetch";

export default function App() {
  const [loading, response] = useFetch(
    "https://api.github.com/users/lucasellery"
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(JSON.stringify(response));

  return (
    <div className="App">
      {/* {JSON.stringify(response.login)} */}
      <h2>{JSON.stringify(response.login)}</h2>
    </div>
  );
}
