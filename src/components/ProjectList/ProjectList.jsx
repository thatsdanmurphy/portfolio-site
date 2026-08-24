import React from "react";
import "./ProjectList.css";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, i) => (
        <a
          key={i}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-list-item"
          aria-label={`Visit ${project.title}`}
        >
          <div className="project-list-image">
            {project.image && <img src={project.image} alt={project.title} />}
          </div>
          <div className="project-list-meta">
            <span className="project-list-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="project-list-title">{project.title}</p>
            {project.description && (
              <p className="project-list-description">{project.description}</p>
            )}
            <span className="project-list-url">
              {project.url.replace(/^https?:\/\//, "")} ↗
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
