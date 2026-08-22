import React from "react";
import "./Hero.css";
import meImage from "../assets/me.png";

export default function Hero({ scrollTo }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">CREATIVE PROFESSIONAL</p>

        <h1 className="hero-title">
          Saif Eldeen
          <br />
          <span>Shady.</span>
        </h1>

        <h2 className="hero-role">
          Video Editor <b>|</b> Graphic Designer <b>|</b> Content Creator
        </h2>

        <p className="hero-description">
          I create engaging visual content and turn ideas into stories
          through video editing, graphic design, content creation, and
          photography.
        </p>

        <div className="hero-actions">
          <button className="btn btn--primary" onClick={() => scrollTo("work")}>
            View My Work
          </button>

          <button className="btn btn--secondary" onClick={() => scrollTo("contact")}>
            Let's Work Together
          </button>
        </div>
      </div>

      <img src={meImage} alt="me" />
    </section>
  );
}
