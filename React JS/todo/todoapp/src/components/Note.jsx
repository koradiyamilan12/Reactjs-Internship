import "./Note.css";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Note = ({
  task,
  id,
  deleteHandler,
  editHandler,
  completeHandler,
  completed,
}) => {
  const navigate = useNavigate();
  return (
    <div className="note">
      <div>
        <h4 className={`task-titel ${completed ? "note-complete" : ""}`}>
          {task}
        </h4>
      </div>
      <div className="btn-container">
        <button className="checkBtn" onClick={() => completeHandler(id)}>
          <FaCheck className="checkIcon" />
        </button>
        <button className="editBtn" onClick={() => editHandler(id)}>
          <FaEdit className="editIcon" />
        </button>
        <button className="deleteBtn" onClick={() => deleteHandler(id)}>
          <MdDelete className="deleteIcon" />
        </button>
        <button className="moreBtn" onClick={() => navigate(`/todo/${id}`)}>
          <FaArrowRight className="leftarrowIcon" />
        </button>
      </div>
    </div>
  );
};

export default Note;
