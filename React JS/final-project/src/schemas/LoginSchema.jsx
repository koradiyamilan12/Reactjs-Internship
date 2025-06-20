import * as Yup from "yup";

export const LoginSchema = Yup.object({
  username: Yup.string().min(2).required("Enter your username"),
  number: Yup.number().min(2).required("Enter your mobile number"),
  otp: Yup.number().required("Enter OTP"),
});
