import "./Footer.css";
import { useContext } from "react";
import { ModeContext } from "../context/mode-context";

const Footer = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div>
      <p className={`footer ${mode === "dark" ? "darkmode" : "lightmode"}`}>
        Made with ❤️ in India 
      </p>
    </div>
  );
};

export default Footer;
