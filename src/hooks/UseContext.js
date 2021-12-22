import { createContext, useContext } from "react";

const ThemeContext = createContext();

export default function UseContext() {
  return (
    <ThemeContext.Provider value={{ mode: "light" }}>
      <Button />
    </ThemeContext.Provider>
  );
}

function Button() {
  const theme = useContext(ThemeContext);
  return <button>{theme.mode}</button>;
}
