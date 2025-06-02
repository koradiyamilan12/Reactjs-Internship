import "./Form.css";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";

const initialValues = {
  fname: "",
  lname: "",
  pnumber: "",
  birthdate: "",
  birthplace: "",
  address1: "",
  address2: "",
  profileimage: "",
};

const Form = ({ formData, getData, editUserId, setEditUserId }) => {
  const userToEdit = editUserId
    ? formData.find((item) => item.id === editUserId)
    : initialValues;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: userToEdit || initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      getData(values);
      action.resetForm();
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = formik;

  return (
    <div className="form-container">
      <h1 className="form-heading">Registration Form</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-field-wrapper">
          <div>
            <label className="form-label" htmlFor="fname">
              First Name
            </label>
            <input
              className="form-input"
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fname && touched.fname && (
              <small className="form-error">{errors.fname}</small>
            )}
          </div>
          <div>
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              className="form-input"
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              value={values.lname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lname && touched.lname && (
              <small className="form-error">{errors.lname}</small>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="pnumber" className="form-label">
            Phone Number
          </label>
          <input
            className="form-input"
            type="tel"
            name="pnumber"
            id="pnumber"
            placeholder="Phone Number"
            value={values.pnumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.pnumber && touched.pnumber && (
            <small className="form-error">{errors.pnumber}</small>
          )}
        </div>
        <div className="form-field-wrapper">
          <div>
            <label htmlFor="birthdate" className="form-label">
              Birth Date
            </label>
            <input
              className="form-input"
              type="date"
              name="birthdate"
              id="birthdate"
              value={values.birthdate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.birthdate && touched.birthdate && (
              <small className="form-error">{errors.birthdate}</small>
            )}
          </div>
          <div>
            <label htmlFor="birthplace" className="form-label">
              Birth Place
            </label>
            <input
              className="form-input"
              type="text"
              name="birthplace"
              id="birthplace"
              placeholder="Birth Place"
              value={values.birthplace}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.birthplace && touched.birthplace && (
              <small className="form-error">{errors.birthplace}</small>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="address1" className="form-label">
            Address
          </label>
          <textarea
            className="form-textarea"
            name="address1"
            id="address1"
            placeholder="Address line 1"
            value={values.address1}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.address1 && touched.address1 && (
            <small className="form-error">{errors.address1}</small>
          )}
          <textarea
            className="form-textarea"
            name="address2"
            id="address2"
            placeholder="Address line 2"
            value={values.address2}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.address2 && touched.address2 && (
            <small className="form-error">{errors.address2}</small>
          )}
        </div>
        <div>
          <label className="form-label" htmlFor="profileimage">
            Upload a profile picture
          </label>
          <input
            type="file"
            className="form-file-input"
            name="profileimage"
            id="profileimage"
          />
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="form-btn">
            {editUserId ? "Update" : "Submit"}
          </button>
          {editUserId && (
            <button
              type="button"
              className="form-btn cancel-btn"
              onClick={() => {
                resetForm();
                setEditUserId(null);
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
