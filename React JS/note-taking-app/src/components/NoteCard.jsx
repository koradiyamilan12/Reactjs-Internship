import { useState } from "react";
import "./NoteCard.css";

const NoteCard = ({ title, desc, color, id, deleteHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = desc.split(" ");
  const shortDesc = words.slice(0, 20).join(" ");

  const now = new Date();
  const DateTime = now.toString();

  return (
    <div className="notes-card" style={{ backgroundColor: color }}>
      <h3 className="note-heading">{title}</h3>
      <p className="note-desc">
        {isExpanded ? desc : shortDesc}
        {words.length > 20 && (
          <span
            className="expanded-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        )}
      </p>
      <p className="date-time">{DateTime}</p>
      <button className="note-btn" onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </div>
  );
};

export default NoteCard;
