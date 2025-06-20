import "./PostDetail.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { PostSchema } from "../schemas/PostSchema";
import { toast } from "react-toastify";

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const allPosts = JSON.parse(localStorage.getItem("posts_data")) || [];

  const [post, setPost] = useState(null);
  const { role } = JSON.parse(localStorage.getItem("login_data"));

  useEffect(() => {
    const foundPost = allPosts.find((item) => item.id === postId);
    setPost(foundPost);
  }, [postId]);

  const postImage = `https://picsum.photos/seed/${postId}/300/200`;

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: PostSchema,
    initialValues: {
      title: post?.title || "",
      description: post?.description || "",
      image: null,
    },
    onSubmit: (values) => {
      const updatedPosts = allPosts.map((item) =>
        item.id === postId
          ? {
              ...item,
              title: values.title,
              description: values.description,
              image: values.image
                ? URL.createObjectURL(values.image)
                : item.image,
            }
          : item
      );

      localStorage.setItem("posts_data", JSON.stringify(updatedPosts));
      toast.success("Post Updated✅");
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

  const cancelHandler = () => {
    navigate("/");
  };

  return (
    <section className="post-detail-wrapper">
      <div className="post-preview">
        <img
          className="post-preview-image"
          src={
            values.image
              ? URL.createObjectURL(values.image)
              : post?.image || postImage
          }
          alt="Post Preview"
          width={200}
        />
        <h3 className="post-preview-title">{values.title}</h3>
        <p className="post-preview-description">{values.description}</p>
      </div>
      {role === "admin" ? (
        <form onSubmit={handleSubmit} className="post-detail-form">
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => {
                setFieldValue("image", e.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
            />
            {errors.image && touched.image && (
              <small className="form-error">{errors.image}</small>
            )}
          </div>

          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title && (
              <small className="form-error">{errors.title}</small>
            )}
          </div>

          <div>
            <label htmlFor="desc">Description</label>
            <textarea
              id="desc"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.description && touched.description && (
              <small className="form-error">{errors.description}</small>
            )}
          </div>

          <div className="post-detail-btn-wrapper">
            <button type="button" onClick={cancelHandler}>
              Cancel
            </button>
            <button type="submit">Update</button>
          </div>
        </form>
      ) : null}
    </section>
  );
};

export default PostDetail;
