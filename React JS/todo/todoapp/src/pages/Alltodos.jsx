import { useContext } from "react";
import "./Alltodos.css";
import ClipLoader from "react-spinners/ClipLoader";
import { ModeContext } from "../context/mode-context";
import useFetchData from "../hooks/useFetchData";

const Alltodos = () => {
  const { mode } = useContext(ModeContext);

  const { data, isLoading } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos"
  );

  console.log(data)

  return (
    <>
      <div
        className={`alltodos-container ${
          mode === "dark" ? "darkmode" : "lightmode"
        }`}
      >
        <div className="alltodos-warpper">
          <h2 className="alltodos-heading">List of ToDos</h2>
          <div className="line"></div>
          {isLoading && (
            <ClipLoader className="loader" color="#36d7b7" size={100} />
          )}
          {data.map((item) => (
            <div
              key={item.id}
              className={`todo-desc ${
                mode === "dark" ? "darkmodedesc" : "lightmodedesc"
              }`}
            >
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
