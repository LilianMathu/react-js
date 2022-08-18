import React from "react";

const heading = {
  fontSize: "100px",
  textTransform: "uppercase",
  color: "pink",
};

const Inline = () => {
  return (
    <div>
      <h2 style={heading}>This is an inline style</h2>
    </div>
  );
};

export default Inline;
