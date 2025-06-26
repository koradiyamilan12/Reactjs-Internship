import "./CreatedPost.css";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";

const CreatedPost = () => {
  const [createdPosts, setCreatedPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts_data")) || [];
    setCreatedPosts(storedPosts);
  }, []);

  return (
    <section className="created-post-section">
      <h2 className="explore-post-heading">Created Post</h2>
      <div className="posts-container">
        {createdPosts.length === 0 && (
          <p className="no-post-created">No post added.</p>
        )}
        {createdPosts.map((item) => (
          <PostCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            setData={setCreatedPosts}
          />
        ))}
      </div>
    </section>
  );
};

export default CreatedPost;
