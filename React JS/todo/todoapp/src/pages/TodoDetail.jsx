import './TodoDetail.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const TodoDetail = () => {
  const { todoId } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
    const allTasks = JSON.parse(localStorage.getItem("allTodos")) || [];
    const foundTask = allTasks.find((item) => item.id === todoId);
    setTask(foundTask);
  }, [todoId]);

  return (
    <>
       <div className="todo-detail-container">
        <div>TodoDetail - {todoId}</div>
        {task ? (
          <h2 className="todo-details-heading">{task.task}</h2>
        ) : (
          <h2>Task not found</h2>
        )}
      </div>
    </>
  );
};

export default TodoDetail;
