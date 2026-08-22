import React from "react";

export default function ProjectCard({ project, index, visualLabel, visualClassName = "" }) {
  return (
    <a href={project.link} className="project-card">
      <div className={`project-visual ${visualClassName}`}>
        <span>{visualLabel}</span>
        <strong>0{index + 1}</strong>
      </div>

      <div className="project-content">
        <div className="project-tags">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <h4>{project.title}</h4>

        <p>{project.description}</p>

        <span className="project-link">View Project →</span>
      </div>
    </a>
  );
}
