import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>Welcome message</button>
    </div>
  );
};

export default Child;
