import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Alltodos.css";
import ClipLoader from "react-spinners/ClipLoader";

const Alltodos = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiData = async () => {
    setIsLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (response.ok) {
      const data = await response.json();
      setData(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="alltodos-container">
        <div className="alltodos-warpper">
          <h2 className="alltodos-heading">List of ToDos</h2>
          <div className="line"></div>
          {isLoading && <ClipLoader className="loader" color="#36d7b7" size={100} />}
          {data.map((item) => (
            <div key={item.id} className="todo-desc">
              <div>{item.title}</div>
              <div
                className={
                  item.completed ? "status-completed" : "status-pending"
                }
              >
                {item.completed ? "Completed" : "Pending"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Alltodos;
