import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectsData } from "./projectsData";
import "./project.css";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = ProjectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects-wrap">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
        <br></br>
        <br></br>
      <h1>My Projects</h1>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="projectSearch"
      />

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="tech-list">
              {project.tech.map((t, i) => (
                <span key={i} className="tech">
                  <img src={t.icon} alt={t.name} /> {t.name}
                </span>
              ))}
            </div>

            <div className="card-actions">
              <Link to={`/project/${project.id}`} className="btn-link">
                View Project
              </Link>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
