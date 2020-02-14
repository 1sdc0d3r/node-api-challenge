import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Project = props => {
  const [project, setProject] = useState({
    actions: []
  });
  //* const id = props.params.id;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/projects/${id}`)
      .then(res => setProject(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>{project.name}</h1>
      <h3>Completed: {project.completed ? "true" : "false"}</h3>
      <p>Description: {project.description}</p>
      <div>
        {project.actions.map(e => (
          <div className="action">
            <p>Completed: {e.completed ? "true" : "false"}}</p>
            <p>{e.description}</p> <p>{e.notes}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
