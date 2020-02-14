import React, { useEffect, useState } from "react";
import axios from "axios";

const EditForm = props => {
  const id = props.match.params.id;
  const [project, setProject] = useState({
    id: 0,
    name: "",
    description: "",
    completed: false,
    actions: []
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/projects/${id}`)
      .then(res => setProject(res.data))
      .catch(err => console.log(err));
  }, []);

  const onSubmit = evt => {
    evt.preventDefault();
    axios
      .put(`http://localhost:8000/api/projects/${id}`)
      .then(res => setProject(res.data))
      .catch(err => console.log(err));
  };

  const onChange = evt => {
    evt.preventDefault();
    setProject({
      [evt.target.name]: [evt.target.value]
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          name="name"
          value={project.name}
        />
        <input
          type="text"
          onChange={onChange}
          name="description"
          value={project.description}
        />
        <input
          type="text"
          onChange={onChange}
          name="name"
          value={project.name}
        />
        <button
          onClick={() =>
            setProject({ ...project, completed: !project.completed })
          }
        >
          Mark: {!project.completed ? "Complete" : "Not Complete"}
        </button>
        <input type="submit" />
      </form>
    </>
  );
};

export default EditForm;
