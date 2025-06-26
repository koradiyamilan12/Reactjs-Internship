import "./ExplorePost.css";
import useFetchData from "../hooks/useFetchData";
import PostCard from "./PostCard";
import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const ExplorePost = () => {
  const { data, isLoading } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;
  const { darkMode } = useTheme();

  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postPerPage);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="explore-post-section">
      <h2 className="explore-post-heading">Explore Posts</h2>

      <form className="search-box">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search by title..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <IoSearchOutline className="search-icon" />
      </form>

      <div className="posts-container">
        {isLoading ? (
          <HashLoader
            className="loader"
            color={darkMode ? "white" : "black"}
            size={200}
          />
        ) : currentPosts.length > 0 ? (
          currentPosts.map((item) => (
            <PostCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.body}
            />
          ))
        ) : (
          <small className="post-not-found">Post Not Found</small>
        )}
      </div>

      {!isLoading && filteredPosts.length > 0 && (
        <div className="pagination-container">
          <button
            className="pagination-btn"
            onClick={goToPrev}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            <GrLinkPrevious className="pagination-icon" />
          </button>

          <span className="pagination-count">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="pagination-btn"
            onClick={goToNext}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            <GrLinkNext className="pagination-icon" />
          </button>
        </div>
      )}
    </section>
  );
};

export default ExplorePost;
