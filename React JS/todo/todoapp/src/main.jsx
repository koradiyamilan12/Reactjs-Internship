// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ModeContextProvider } from "./context/mode-context.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ModeContextProvider>
    <App />
  </ModeContextProvider>
  // </StrictMode>
);
