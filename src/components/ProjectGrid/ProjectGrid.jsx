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
            {project.image && <img src={project.image} alt={project.title} />}
          </div>
          <div className="project-grid-meta">
            <p className="project-grid-title">{project.title}</p>
            {project.description && (
              <p className="project-grid-description">{project.description}</p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
