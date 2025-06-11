import { createContext, useState } from "react";

export const ModeContext = createContext({
  mode: "dark",
  toggleMode: () => {},
});

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
