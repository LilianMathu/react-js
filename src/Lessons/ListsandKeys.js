import React from "react";

const ListsandKeys = () => {
  const people = [
    {
      id: 1,
      name: "Lilian",
      skills: {
        frontend: "React",
        Backend: "Node",
        Others: "Quality Assurance",
      },
    },
    {
      id: 2,
      name: "Mathu",
      skills: {
        frontend: "Vue",
        backend: "PHP",
        others: "Project Management",
      },
    },
  ];
  const peopleList = people.map((person) => {
    return (
      <li key={person.id}>
        I am {person["name"]} and I have {person.skills.backend} skills{" "}
      </li>
    );
  });
  return <div>{peopleList}</div>;
};

export default ListsandKeys;
