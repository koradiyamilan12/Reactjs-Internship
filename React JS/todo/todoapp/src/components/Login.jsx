import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmailIsRequired, setUserEmailIsRequired] = useState("");
  const [userPasswordIsRequired, setUserPasswordIsRequired] = useState("");

  const navigate = useNavigate();

  const loginData = JSON.parse(localStorage.getItem("userDetails")) || {};

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!userEmail) {
      setUserEmailIsRequired("Email is required.");
      return;
    } else if (!userPassword) {
      setUserPasswordIsRequired("Password is required.");
      return;
    } else if (userEmail !== loginData.email) {
      setUserEmailIsRequired("Email does not match.");
      return;
    } else if (userPassword !== loginData.password) {
      setUserPasswordIsRequired("Password is incorrect.");
      return;
    }
    const userLoginData = {
      userEmail,
      userPassword,
    };
    console.log(userLoginData);
    setUserEmail("");
    setUserPassword("");

    setUserEmailIsRequired("");
    setUserPasswordIsRequired("");

    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2 className="login-heading">LOGIN</h2>
        <h4 className="login-info">Welcome back !!</h4>
        <form onSubmit={formSubmitHandler}>
          <div className="login-form-filed">
            <label htmlFor="email">Email Address:</label>
            <input
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              value={userEmail}
              className="login-form-input"
              type="email"
              name="useremail"
              id="email"
              placeholder="john@doe.com"
              autoComplete="off"
            />
            <small className="empty-warning">{userEmailIsRequired}</small>
          </div>
          <div className="login-form-filed">
            <label htmlFor="password">Password:</label>
            <input
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              value={userPassword}
              className="login-form-input"
              name="userpassword"
              id="password"
              type="password"
              placeholder="Your Password"
              autoComplete="off"
            />
            <small className="empty-warning">{userPasswordIsRequired}</small>
          </div>
          <div className="login-form-btn-wrapper">
            <button className="login-form-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
