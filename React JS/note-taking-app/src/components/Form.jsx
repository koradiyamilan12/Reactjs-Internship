import { useState } from "react";
import "./Form.css";

const Form = ({ getData }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("#bebebe");
  const [warn, setWarn] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "" || desc === "") {
      setWarn("All fields are mandatory");
      return;
    }
    const data = {
      title,
      desc,
      color,
    };
    getData(data);
    setTitle("");
    setDesc("");
    setColor("#bebebe");
    setWarn("");
  };

  const inputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const textareaChangeHandler = (event) => {
    setDesc(event.target.value);
  };

  const colorChangeHandler = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Create Note</h1>
      <form onSubmit={formSubmitHandler}>
        <h3 className="warn">{warn}</h3>
        <div className="form-field">
          <label htmlFor="">Note Title</label>
          <br />
          <input
            onChange={inputChangeHandler}
            type="text"
            value={title}
            placeholder="Enter Title..."
            className="form-title-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="">Note Description</label>
          <br />
          <textarea
            onChange={textareaChangeHandler}
            value={desc}
            rows={3}
            name=""
            id=""
            placeholder="Enter Description..."
            className="form-textarea-input"
          ></textarea>
        </div>
        <div className="form-field">
          <label htmlFor="">Notes Color</label>
          <br />
          <input
            onChange={colorChangeHandler}
            value={color}
            type="color"
            name=""
            id=""
            className="form-color"
          />
        </div>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
