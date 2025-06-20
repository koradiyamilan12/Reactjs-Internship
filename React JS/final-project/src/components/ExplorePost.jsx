import "./ExplorePost.css";
import useFetchData from "../hooks/useFetchData";
import PostCard from "./PostCard";
import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const ExplorePost = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="explore-post-section">
      <h2 className="explore-post-heading">Explore Posts</h2>
      <form className="search-box">
        <input
          type="text"
          placeholder="Search by title..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /><IoSearchOutline className="search-icon" />
        {/* <button className="search-btn">Search</button> */}
      </form>
      <div className="posts-container">
        {isLoading && (
          <HashLoader className="loader" color="#000000" size={200} />
        )}
        {filteredPosts.length > 0 ? filteredPosts.map((item) => (
          <PostCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.body}
          />
        )) : <small className="post-not-found">Post Not Found</small>}
      </div>
    </section>
  );
};

export default ExplorePost;
