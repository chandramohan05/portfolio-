import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetaiils.css";

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) return <p>Project not found!</p>;

  return (
    <div className="project-detail">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
<br></br>
<br></br>
<br></br>
      <h1>{project.title}</h1>
      <p>{project.desc}</p>

      <h3>Challenges Faced</h3>
      <p>{project.challenges}</p>

      <h3>Team Size</h3>
      <ul>
        {project.team.map((member, i) => (
          <li key={i}>{member}</li>
        ))}
      </ul>

        <h3>Technologies Used</h3>
<div className="tech-list">
  {project.tech.map((t, i) => (
    <span key={i} className="tech">
      <img src={t.icon} alt={t.name} />
      {t.name}
    </span>
  ))}
</div>

      <h3>Screenshots</h3>
      <div className="screenshots">
        {project.screenshots.map((src, i) => (
          <img key={i} src={src} alt={`Screenshot ${i + 1}`} />
        ))}
      </div>

      <h3>GitHub</h3>
      <br></br>
      <br></br>
      <button>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        Git Hub
      </a>
      </button>
    </div>
  );
}

export default ProjectDetail;
