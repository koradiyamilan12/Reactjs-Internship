import "./PostCard.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostCard = ({ id, title, image, description, setData }) => {
  const { role } = JSON.parse(localStorage.getItem("login_data"));
  const navigate = useNavigate();

  const clickableCardHandler = () => {
    if (setData) {
      navigate(`/post/${id}`);
    }
  };

  const handlerReadMore = () => {
    navigate(`/post/${id}`);
  };

  const handlerDelete = (idToDelete) => {
    const storedPosts = JSON.parse(localStorage.getItem("posts_data")) || [];
    const updatedPosts = storedPosts.filter((post) => post.id !== idToDelete);

    localStorage.setItem("posts_data", JSON.stringify(updatedPosts));
    setData(updatedPosts);
    toast.error("Post Deleted🗑️");
  };

  const randomImage = `https://picsum.photos/seed/${id}/300/200`;

  return (
    <div className="card">
      <div onClick={clickableCardHandler}>
        <div>
          <img
            className="card-image"
            src={`${image || randomImage}`}
            alt="Post Image"
          />
        </div>
        <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">
            {description.length > 120 ? (
              <>
                {description.slice(0, 120)}...
                <small onClick={handlerReadMore}>Read More</small>
              </>
            ) : (
              description
            )}
          </p>
        </div>
      </div>
      <div className="icon-wrapper">
        {role === "admin" && setData && (
          <>
            <button
              onClick={() => navigate(`/post/${id}`)}
              className="card-edit-btn"
            >
              <FaEdit className="edit-icon" />
            </button>
            <button
              className="card-delete-btn"
              onClick={() => handlerDelete(id)}
            >
              <MdDeleteForever className="delete-icon" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PostCard;
