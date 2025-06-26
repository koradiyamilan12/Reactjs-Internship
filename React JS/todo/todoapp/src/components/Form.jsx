import "./Form.css";
import { useEffect, useState } from "react";

const Form = ({ getData, editData, setEditData, allTask, updateData }) => {

  const [task, setTask] = useState("");
  
  useEffect(() => {
    if (editData && editData.task) {
      setTask(editData.task);
    }
  }, [editData]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (task === "") {
      return;
    }
    const taskData = {
      task,
    };
    getData(taskData);
    setTask("");

    if (editData) {
      const index = allTask.findIndex((t) => t.id === editData.id);
      const updatedTasks = [...allTask];
      updatedTasks[index] = { ...editData, task };
      updateData(updatedTasks);
      setEditData(null);
    }
    setTask("");
  };

  const inputChangeHandler = (event) => {
    setTask(event.target.value);
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <input
        className="task-input"
        onChange={inputChangeHandler}
        type="text"
        value={task || ""}
        id="task"
        name="task-name"
        placeholder="Enter your task..."
      />
      <button className="task-add-btn">{editData ? "Update" : "Add"}</button>
    </form>
  );
};

export default Form;
