import React from "react";
import "./Services.css";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <section className="section services-section">
      <div className="section-heading">
        <p className="eyebrow">WHAT I DO</p>

        <h2 className="section-title">
          My <span>Services.</span>
        </h2>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <div className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
