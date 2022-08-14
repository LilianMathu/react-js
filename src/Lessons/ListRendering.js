import React from "react";

const ListRendering = () => {
  const names = ["Lilian", "Adele", "Mathu"];
  const nameList = names.map((name) => <p>{name}</p>);
  return <div>{nameList}</div>;
};

export default ListRendering;
