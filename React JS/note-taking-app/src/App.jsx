import Navbar from "./components/Navbar";
import Form from "./components/Form";
import NoteCard from "./components/NoteCard";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [allNotes, setAllNotes] = useState([]);

  const getData = (noteData) => {
    // console.log(noteData);
    setAllNotes([...allNotes, { ...noteData, id: uuidv4() }]);
  };

  const deleteHandler = (id) => {
    // console.log(id);
    const filteredData = allNotes.filter((item) => item.id !== id);
    // console.log({ filteredData });
    setAllNotes(filteredData);
  };

  // console.log(allNotes);
  return (
    <>
      <Navbar />
      <Form getData={getData} />
      <h2 className="main-note-heading">Notes</h2>
      <div className="notes-container">
        {allNotes.length > 0 ? (
          allNotes.map((note, index) => {
            return (
              <NoteCard
                key={index}
                title={note.title}
                desc={note.desc}
                color={note.color}
                id={note.id}
                deleteHandler={deleteHandler}
              />
            );
          })
        ) : (
          <div className="no-notes-container">
            <p className="no-notes">No notes created yet.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default App;

// parent to child - props
// child to parent - function
