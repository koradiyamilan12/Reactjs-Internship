import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Note from "../components/Note";
import { FaCheck } from "react-icons/fa";

const HomePage = () => {
  const savedMode = JSON.parse(localStorage.getItem("darkMode"));
  const [darkMode, setDarkMode] = useState(
    typeof savedMode === "boolean" ? savedMode : true
  );

  const [allTask, setAllTask] = useState(
    JSON.parse(localStorage.getItem("allTodos")) || []
  );

  const [editData, setEditData] = useState(null);

  const getData = (noteData) => {
    setAllTask([...allTask, { ...noteData, id: uuidv4() }]);
  };

  const deleteHandler = (id) => {
    const filteredData = allTask.filter((item) => item.id !== id);
    setAllTask(filteredData);
  };

  const editHandler = (id) => {
    const editData = allTask.find((item) => item.id === id);
    setEditData(editData);
  };

  const updateData = (updatedTasks) => {
    setAllTask(updatedTasks);
  };

  const completeHandler = (id) => {
    const completeData = allTask.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });
    setAllTask(completeData);
  };

  useEffect(() => {
    localStorage.setItem("allTodos", JSON.stringify(allTask));
  }, [allTask]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`container ${darkMode ? "darkmode" : "lightmode"}`}>
        <div
          className={`todo-container ${darkMode ? "darkmode" : "lightmode"}`}
        >
          <h1 className="main-heading">
            My Todos <FaCheck className="check-logo" />
          </h1>
          <Form
            getData={getData}
            editData={editData}
            setEditData={setEditData}
            allTask={allTask}
            updateData={updateData}
            setAllTask={setAllTask}
          />
          <div className="task-note-container">
            {allTask.length > 0 ? (
              allTask.map((note) => (
                <Note
                  key={note.id}
                  task={note.task}
                  id={note.id}
                  completed={note.complete}
                  deleteHandler={deleteHandler}
                  completeHandler={completeHandler}
                  editHandler={editHandler}
                />
              ))
            ) : (
              <p className="no-task-warning">No task added.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
