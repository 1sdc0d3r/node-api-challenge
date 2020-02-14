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
        <Link to={`/projects/${e.id}`}>
          <h3>
            {e.name}: {e.completed}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
