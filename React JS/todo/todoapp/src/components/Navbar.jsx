import "./Navbar.css";
import { FaCheck } from "react-icons/fa";
import { IoPartlySunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import Logout from "./Logout";
import { ModeContext } from "../context/mode-context";

const Navbar = () => {
  const [logout, setLogout] = useState(false);
  const { mode, toggleMode } = useContext(ModeContext);

  return (
    <nav className={`navbar`}>
      <div className="logo-container">
        <Link className={`logo`} to="/">
          TODO
        </Link>
        <FaCheck className="navbar-check-icon logo-icon" />
      </div>

      <div className="nav-items">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-active" : "nav-item";
          }}
          to="/"
        >
          Home
          <span className="underline"></span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-active" : "nav-item";
          }}
          to="/about"
        >
          About
          <span className="underline"></span>
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-active" : "nav-item";
          }}
          to="/alltodos"
        >
          All Todos
          <span className="underline"></span>
        </NavLink>
      </div>

      <div className="navbar-rightside">
        <div onClick={toggleMode}>
          {mode === "dark" ? (
            <IoPartlySunny className="sun-icon" />
          ) : (
            <BsMoonStarsFill className="moon-icon" />
          )}
        </div>

        <button
          className="nav-btn"
          onClick={() => {
            setLogout(!logout);
          }}
        >
          Logout
        </button>
      </div>

      {logout && <Logout setLogout={setLogout} />}
    </nav>
  );
};

export default Navbar;
