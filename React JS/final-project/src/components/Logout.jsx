import { toast } from "react-toastify";
import "./Logout.css";
import { useNavigate } from "react-router-dom";

const Logout = ({ setLogout }) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("login_data");
    toast.success("Successfully logged out✅");
    navigate("/login");
  };
  return (
    <>
      <div className="backdrop"></div>
      <div className="overlay-wrapper">
        <h3 className="overlay-heading">Are you sure you want to logout?</h3>
        <div className="btn-group">
          <button className="btn-cancel" onClick={() => setLogout(false)}>
            Cancel
          </button>
          <button className="btn-logout" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
