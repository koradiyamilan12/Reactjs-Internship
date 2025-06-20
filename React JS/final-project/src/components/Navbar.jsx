import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logout from "./Logout";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { role } = JSON.parse(localStorage.getItem("login_data"));
  const [logout, setLogout] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="logo" />
          <Link to={"/"} className="nav-item">
            Final Project
          </Link>
        </div>
        <div>
          {role === "admin" ? (
            <NavLink className="nav-item" to={"/create-post"}>
              Create Post
            </NavLink>
          ) : null}
          {logout && <Logout setLogout={setLogout} />}
        </div>
        <div>
          <button className="navbar-btn" onClick={() => setLogout(!logout)}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
