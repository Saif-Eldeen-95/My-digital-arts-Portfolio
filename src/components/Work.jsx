import React from "react";
import "./Work.css";
import { VIDEO_PROJECTS } from "../data/videoProjects";
import { DESIGN_PROJECTS } from "../data/designProjects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="section work-section">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>

        <h2 className="section-title">
          Creative <span>Work.</span>
        </h2>

        <p className="section-intro">
          A collection of my work across video editing, graphic design,
          content creation, and photography.
        </p>
      </div>

      {/* Video Editing */}
      <div className="work-category">
        <div className="category-heading">
          <span>01</span>

          <div>
            <p>CREATIVE WORK</p>
            <h3>Video Editing</h3>
          </div>
        </div>

        <div className="projects-grid">
          {VIDEO_PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              visualLabel="VIDEO"
              showVisualMeta={false}
            />
          ))}
        </div>
      </div>

      {/* Graphic Design */}
      <div className="work-category">
        <div className="category-heading">
          <span>02</span>

          <div>
            <p>VISUAL DESIGN</p>
            <h3>Graphic Design</h3>
          </div>
        </div>

        <div className="projects-grid">
          {DESIGN_PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              visualLabel="DESIGN"
              visualClassName="project-visual--design"
              showVisualMeta={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
