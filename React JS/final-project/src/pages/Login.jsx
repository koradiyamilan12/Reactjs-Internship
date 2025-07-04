import "./Login.css";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/LoginSchema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialValues = {
  username: "",
  role: "",
  number: "",
  otp: "",
};

const Login = () => {
  const [generatedOtp, setGeneratedOtp] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      if (values.otp.toString() !== generatedOtp) {
        toast.error("Incorrect OTP ❌");
        return;
      }

      localStorage.setItem("login_data", JSON.stringify(values));
      action.resetForm();
      toast.success("Successfully logged in ✅");
      navigate("/");
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  const handleGenerateOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    alert(`Your OTP is: ${newOtp}`);
  };

  return (
    <section className="login-section">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="form-heading">Login</h2>

        <div className="form-container">
          <label className="form-label" htmlFor="uname">
            Username
          </label>
          <input
            className="form-input"
            type="text"
            id="uname"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {errors.username && touched.username && (
            <small className="form-errors">{errors.username}</small>
          )}
        </div>

        <div
          className="radio-wrapper"
          role="group"
          aria-labelledby="role-group"
        >
          <label className="form-label" htmlFor="user">
            User
          </label>
          <input
            className="form-radio-input"
            type="radio"
            id="user"
            name="role"
            value="user"
            checked={values.role === "user"}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="admin">
            Admin
          </label>
          <input
            className="form-radio-input"
            type="radio"
            id="admin"
            name="role"
            value="admin"
            checked={values.role === "admin"}
            onChange={handleChange}
          />
          {errors.role && touched.role && (
            <small className="form-errors">{errors.role}</small>
          )}
        </div>

        <div>
          <label className="form-label" htmlFor="mnumber">
            Mobile number
          </label>
          <input
            className="form-input"
            type="number"
            id="mnumber"
            name="number"
            value={values.number}
            placeholder="Mobile Number"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.number && touched.number && (
            <small className="form-errors">{errors.number}</small>
          )}
        </div>

        <div>
          <label className="form-label" htmlFor="otp">
            OTP
          </label>
          <div className="otp-container">
            <input
              className="form-input"
              type="number"
              id="otp"
              name="otp"
              value={values.otp}
              placeholder="Enter OTP"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button
              type="button"
              className="otp-generate-btn"
              onClick={handleGenerateOtp}
            >
              Generate OTP
            </button>
          </div>
          {errors.otp && touched.otp && (
            <small className="form-errors">{errors.otp}</small>
          )}
        </div>

        <div className="btn-wrapper">
          <button type="submit" className="login-form-btn">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
