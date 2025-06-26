import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { useContext } from "react";
import { ModeContext } from "../context/mode-context";

const Logout = ({ setLogout }) => {
  const { mode } = useContext(ModeContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    navigate("/login");
  };

  return (
    <>
      <div className="backdrop"></div>
      <div
        className={`overlay-wrapper ${
          mode === "dark" ? "darkmode" : "lightmode"
        }`}
      >
        <h4 className="overlay-heading">Are you sure you want to logout?</h4>
        <div className="btn-group">
          <button onClick={() => setLogout(false)} className="btn-cancel">
            Cancel
          </button>
          <button onClick={logoutHandler} className="btn-logout">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
