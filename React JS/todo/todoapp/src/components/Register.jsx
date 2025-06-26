import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [requiredFields, setRequiredFields] = useState({});

  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("registerDetails"));
    return Array.isArray(savedData) ? savedData : [];
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    let errors = {};

    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email Address is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.confirmPassword)
      errors.confirmPassword = "Confirm password is required";
    else if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    if (Object.keys(errors).length > 0) {
      setRequiredFields(errors);
      return;
    }

    setRegisterData((prev) => [...prev, formData]);

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setRequiredFields({});

    navigate("/login");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  useEffect(() => {
    localStorage.setItem("registerDetails", JSON.stringify(registerData));
  }, [registerData]);

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h2 className="register-heading">Register</h2>
        <h4 className="register-info">Let's create a new account</h4>
        <form onSubmit={formSubmitHandler}>
          <div className="register-form-filed">
            <label htmlFor="uname">Username: </label>
            <input
              className="register-form-input"
              value={formData.username}
              onChange={inputChangeHandler}
              type="text"
              id="uname"
              name="username"
              placeholder="Enter Username"
              autoComplete="username"
            />
            <small className="empty-warning">{requiredFields.username}</small>
          </div>
          <div className="register-form-filed">
            <label htmlFor="em">Email Address:</label>
            <input
              className="register-form-input"
              value={formData.email}
              onChange={inputChangeHandler}
              type="email"
              id="em"
              name="email"
              placeholder="Enter Email"
              autoComplete="email"
            />
            <small className="empty-warning">{requiredFields.email}</small>
          </div>
          <div className="register-form-filed">
            <label htmlFor="ps">Password:</label>
            <input
              className="register-form-input"
              value={formData.password}
              onChange={inputChangeHandler}
              type="password"
              id="ps"
              name="password"
              placeholder="Enter Password"
            />
            <small className="empty-warning">{requiredFields.password}</small>
          </div>
          <div className="register-form-filed">
            <label htmlFor="cps">Confirm Password:</label>
            <input
              className="register-form-input"
              value={formData.confirmPassword}
              onChange={inputChangeHandler}
              type="password"
              id="cps"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
            />
            <small className="empty-warning">
              {requiredFields.confirmPassword}
            </small>
          </div>
          <div className="register-form-btn-wrapper">
            <button className="register-form-btn" type="submit">
              Register
            </button>
          </div>
        </form>
        <p className="login-link">
          already have an account?
          <span className="login" onClick={loginHandler}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
