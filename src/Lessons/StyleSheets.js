import React from "react";
import "./styles.css";

const StyleSheets = (props) => {
  let className = props.test ? "test" : "test1";
  return (
    <div>
      <h1 className={className}>I'm brown</h1>
    </div>
  );
};

export default StyleSheets;
