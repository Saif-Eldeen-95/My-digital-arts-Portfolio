import React from "react";
import "./Experience.css";
import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <p className="eyebrow">MY JOURNEY</p>

        <h2 className="section-title">
          Experience <span>&amp;</span> Activities.
        </h2>
      </div>

      <div className="timeline">
        {EXPERIENCE.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>

              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

              <div className="timeline-tools">
                {item.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
