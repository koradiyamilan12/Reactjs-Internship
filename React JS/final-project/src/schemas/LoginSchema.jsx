import * as Yup from "yup";

export const LoginSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  role: Yup.string().required("Please select a role"),
  number: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number"),
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^[0-9]{4}$/, "OTP must be 4 digits"),
});
