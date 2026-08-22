import React from "react";
import "./Tools.css";
import { TOOLS } from "../data/tools";

export default function Tools() {
  return (
    <section className="tools-section">
      <div className="tools-inner">
        <div>
          <p className="eyebrow">MY TOOLKIT</p>

          <h2>
            Tools I <span>use.</span>
          </h2>

          <p className="tools-description">
            I work with industry-standard tools to bring creative ideas to life.
            Each tool in my kit is chosen for its ability to deliver professional
            results across video editing, design, and content creation.
          </p>

          <div className="tools-stats">
            <div className="tool-stat">
              <strong>5+</strong>
              <span>Professional Tools</span>
            </div>
            <div className="tool-stat">
              <strong>4+</strong>
              <span>Years Experience</span>
            </div>
            <div className="tool-stat">
              <strong>100+</strong>
              <span>Projects Completed</span>
            </div>
          </div>
        </div>

        <div className="tools-list">
          {TOOLS.map((tool, index) => (
            <div
              className="tool-item"
              key={tool.name}
              style={{ "--level": `${tool.level}%` }}
            >
              <span>0{index + 1}</span>
              <strong>{tool.name}</strong>
              <small className="tool-category">{tool.category}</small>
              <div className="proficiency"></div>
              <div className="tool-icon">{tool.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
