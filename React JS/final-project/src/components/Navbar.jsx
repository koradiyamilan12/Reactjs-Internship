import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logout from "./Logout";
import logo from "../assets/logo.png";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../app/theme/themeSlice";

const Navbar = () => {
  const { role } = JSON.parse(localStorage.getItem("login_data")) || {};
  const [logout, setLogout] = useState(false);

  const darkmode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <header>
      <nav className="navbar">
        <Link to={"/"} className="logo-wrapper">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="nav-item">Final Project</h2>
        </Link>
        <div>
          {role === "admin" ? (
            <NavLink className="nav-item" to={"/create-post"}>
              Create Post
            </NavLink>
          ) : null}
          {logout && <Logout setLogout={setLogout} />}
        </div>
        <div className="navbar-btn-wrapper">
          <button
            className="theme-toggle-btn"
            onClick={() => dispatch(toggleTheme())}
          >
            {darkmode ? <FiSun size={25} /> : <FiMoon size={25} />}
          </button>
          <button className="navbar-btn" onClick={() => setLogout(!logout)}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
