import { useEffect, useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [requiredFields, setRequiredFields] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || []
  );

  const formSubmitHandler = (e) => {
    e.preventDefault();

    let errors = {};

    if (formData.username === "") errors.username = "Username is required";
    if (formData.email === "") errors.email = "Email Address is required";
    if (formData.password === "") errors.password = "Password is required";
    if (formData.confirmPassword === "")
      errors.confirmPassword = "Confirm password is required";

    if (Object.keys(errors).length > 0) {
      setRequiredFields(errors);
      return;
    }

    setRegisterData(formData);

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setRequiredFields({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(registerData));
  }, [registerData]);

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h2 className="register-heading">Register</h2>
        <h4 className="register-info">Let's create new account</h4>
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
            <small className="empty-warning">
              {requiredFields.nameIsRequired}
            </small>
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
            <small className="empty-warning">
              {requiredFields.emailIsRequired}
            </small>
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
            <small className="empty-warning">
              {requiredFields.passwordIsRequired}
            </small>
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
              {requiredFields.confirmPasswordIsRequired}
            </small>
          </div>
          <div className="register-form-btn-wrapper">
            <button className="register-form-btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
