import React, { useState, useEffect } from "react";
import "./ProjectList.css";

function ProjectImage({ image, images, title }) {
  const allImages = images || (image ? [image] : []);
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (allImages.length <= 1) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % allImages.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [allImages.length]);

  if (!allImages.length) return null;

  return (
    <img
      src={allImages[current]}
      alt={title}
      className={`project-list-img ${fading ? "fading" : ""}`}
    />
  );
}

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
            <ProjectImage
              image={project.image}
              images={project.images}
              title={project.title}
            />
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
