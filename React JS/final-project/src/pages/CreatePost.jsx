import "./CreatePost.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { PostSchema } from "../schemas/PostSchema";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const initialValues = {
  image: null,
  title: "",
  description: "",
};

const CreatePost = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: PostSchema,
    initialValues,
    onSubmit: (values, action) => {
      const newPost = {
        id: uuidv4(),
        image: values.image,
        title: values.title,
        description: values.description,
      };

      const existingPosts =
        JSON.parse(localStorage.getItem("posts_data")) || [];

      const updatedPosts = [...existingPosts, newPost];

      localStorage.setItem("posts_data", JSON.stringify(updatedPosts));
      action.resetForm();
      toast.success("New Post Created✅");
      navigate("/");
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = formik;

  const handleImageChange = (e) => {
    const file = e.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue("image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="create-post-section">
      <form className="create-post-form" onSubmit={handleSubmit}>
        <h3 className="create-post-form-heading">Create Post</h3>
        <div className="form-wrapper">
          <label className="create-post-form-label" htmlFor="image">
            Image
          </label>
          <input
            className="create-post-form-input image-input"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </div>
        <div className="form-wrapper">
          <label className="create-post-form-label" htmlFor="title">
            Title
          </label>
          <input
            className="create-post-form-input"
            type="text"
            id="title"
            name="title"
            placeholder="Post Title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {errors.title && touched.title && (
            <small className="create-post-form-error">{errors.title}</small>
          )}
        </div>
        <div className="form-wrapper">
          <label className="create-post-form-label" htmlFor="description">
            Description
          </label>
          <textarea
            className="create-post-form-input"
            name="description"
            id="description"
            placeholder="Post Description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          ></textarea>
          {errors.description && touched.description && (
            <small className="create-post-form-error">
              {errors.description}
            </small>
          )}
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="create-post-form-btn">
            Create Post
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
