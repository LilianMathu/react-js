import React from "react";

const People = (props) => {
  return (
    <div>
      <h1>This is {props.name}</h1>
      {props.children}
    </div>
  );
};

export default People;
