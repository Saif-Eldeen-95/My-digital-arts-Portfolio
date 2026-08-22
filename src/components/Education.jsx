import React from "react";
import "./Education.css";
import { CERTIFICATES } from "../data/certificates";

export default function Education() {
  return (
    <section className="section education-section">
      <div className="education-grid">
        <div>
          <p className="eyebrow">EDUCATION</p>

          <h2 className="section-title">
            Academic <span>Background.</span>
          </h2>
          <br />
          <div className="education-card">
            <span>2023 — Present</span>

            <h3>Faculty of Engineering</h3>

            <p>Alexandria University</p>

            <strong>GPA: 3.44</strong>
          </div>
        </div>

        <div>
          <p className="eyebrow">CERTIFICATES</p>

          <h2 className="section-title">
            Continuous <span>Learning.</span>
          </h2>

          <div className="certificates">
            {CERTIFICATES.map((certificate) => (
              <div className="certificate-card" key={certificate.title}>
                <span>{certificate.date}</span>

                <h3>{certificate.title}</h3>

                <p>{certificate.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
