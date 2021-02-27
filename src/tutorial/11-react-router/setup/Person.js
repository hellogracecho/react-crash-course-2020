import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  // useParams(); // returns id in string type
  const [name, setName] = useState("default name");
  const { id } = useParams(); // ** have to match  path="/person/:id"

  useEffect(() => {
    const thePerson = data.find((person) => person.id === parseInt(id));
    setName(thePerson.name);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default Person;
