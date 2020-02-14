import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="projects">
      {projects.map(e => (
        <div>
          <Link to={`/projects/${e.id}`}>
            <h3>
              {e.name}: {e.completed ? "true" : "false"}
            </h3>
          </Link>
          <Link to={`/projects/${e.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
