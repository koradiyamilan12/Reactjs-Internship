import "./TestForm.css";

const TestForm = () => {
  const inputChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.value = ""; // empty value
    console.log(event.target.value); // print value
  };

  const btnClickHandler = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          onChange={inputChangeHandler}
          type="text"
          placeholder="Enter Username"
          className="formInput"
          name="username"
        />
        <br />
        <br />
        <button onClick={btnClickHandler} className="formBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TestForm;
