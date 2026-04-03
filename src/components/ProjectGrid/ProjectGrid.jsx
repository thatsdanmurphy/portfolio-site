import React from "react";
import "./ProjectGrid.css";

export default function ProjectGrid({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project, i) => (
        <a
          key={i}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-grid-item"
          aria-label={project.title}
        >
          <div className="project-grid-image">
            <img src={project.image} alt={project.title} />
          </div>
          <p className="project-grid-label">{project.title}</p>
        </a>
      ))}
    </div>
  );
}
