import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("Enter your first name"),
  lname: Yup.string().min(2).max(25).required("Enter your last name"),
  pnumber: Yup.number().min(10).required("Enter your phone number"),
  birthdate: Yup.date().required("Enter your birth date"),
  birthplace: Yup.string().min(4).max(40).required("Enter your birth place"),
  address1: Yup.string().min(10).max(100).required("Enter your address line 1"),
  address2: Yup.string().min(10).max(100).required("Enter your address line 2"),
});
