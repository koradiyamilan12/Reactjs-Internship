const Form = () => {
  const handleBtnClick = (name) => {
    console.log("btn clicked", name);
  };

  const inputChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
  };
  return (
    <div>
      {/* onClick */}
      <button onClick={() => handleBtnClick("John")}>Click me</button>

      {/* onChange */}
      <input type="text" onChange={inputChangeHandler} />

      {/* onSubmit */}

      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

// sum()
