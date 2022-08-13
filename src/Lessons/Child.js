import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.handleClick("child")}>
        Welcome message
      </button>
    </div>
  );
};

export default Child;
