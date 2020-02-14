import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Link,
  Route
} from "react-router-dom";
import ProjectList from "./components/ProjectList";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
      <Switch>
        <Route path="/projects/:id" component={Project} />
        <Route path="/projects" component={ProjectList} />
      </Switch>
    </Router>
  );
}

export default App;
