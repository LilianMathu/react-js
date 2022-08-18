import React from "react";
import "./styles.css";

const StyleSheets = (props) => {
  let className = props.test ? "test" : "";
  return (
    <div>
      <h1 className={`${className} test1`}>I'm brown</h1>
    </div>
  );
};

export default StyleSheets;
