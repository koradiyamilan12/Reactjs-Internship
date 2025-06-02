import { Link } from "react-router-dom";
import "./Logout.css";

const Logout = ({ setLogout }) => {
  return (
    <>
      <div className="backdrop"></div>
      <div className="overlay-wrapper">
        <h4 className="overlay-heading">Are you sure you want to logout?</h4>
        <div className="btn-group">
          <Link
            onClick={() => {
              setLogout(false);
            }}
            className="btn-cancel"
          >
            Cancel
          </Link>
          <Link to="/login" className="btn-logout">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Logout;
