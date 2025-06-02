import "./Navbar.css";
import { FaCheck } from "react-icons/fa";
import { IoPartlySunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logout from "./Logout";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (typeof setDarkMode === "function") {
      const savedMode = JSON.parse(localStorage.getItem("darkMode"));
      if (typeof savedMode === "boolean") {
        setDarkMode(savedMode);
      }
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a className="logo" href="/">
          TODO
        </a>
        <FaCheck className="navbar-check-icon logo-icon" />
      </div>

      <div className="nav-items">
        <Link className="nav-item" to="/">
          Home
          <span className="underline"></span>
        </Link>
        <Link className="nav-item" to="/about">
          About
          <span className="underline"></span>
        </Link>
        <Link className="nav-item" to="/alltodos">
          All Todos
          <span className="underline"></span>
        </Link>
      </div>

      <div className="navbar-rightside">
        {darkMode ? (
          <IoPartlySunny
            className="sun-icon"
            onClick={() => setDarkMode(false)}
          />
        ) : (
          <BsMoonStarsFill
            className="moon-icon"
            onClick={() => setDarkMode(true)}
          />
        )}

        <button className="nav-btn" onClick={() => setLogout(!logout)}>
          Logout
        </button>
      </div>

      {logout && <Logout setLogout={setLogout} />}
    </nav>
  );
};

export default Navbar;
