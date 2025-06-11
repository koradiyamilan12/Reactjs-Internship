import React from "react";

const ChildButton = React.memo(({ onClick }) => {
  console.log("ChildButton rendered");
  return (
    <div>
      <button onClick={onClick}>Click Child Button</button>
    </div>
  );
});

export default ChildButton;
