import React from "react";

const ListRendering = () => {
  const persons = [
    {
      name: "Lilian",
      age: 20,
      married: false,
      skills: {
        frontend: "react",
        database: "mongo",
        serverside: "express/node",
      },
    },
    {
      name: "Mathu",
      age: 50,
      married: true,
      skills: {
        frontend: "vue",
        database: "mysql",
        serverside: "express/node",
      },
    },
  ];

  const personList = persons.map((person) => {
    return (
      <h4>
        My name is {person.name}. I am {person.age} years old. My skills include{" "}
        {person.skills.frontend}, {person.skills.database},{" "}
        {person.skills.serverside}
      </h4>
    );
  });

  return <div>{personList}</div>;
};

export default ListRendering;
