import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-heading">
        <p className="eyebrow">LET'S WORK TOGETHER</p>

        <h2 className="contact-title">
          Have a project
          <br />
          <span>in mind?</span>
        </h2>

        <p>
          I'm open to freelance projects, collaborations, and creative
          opportunities. Let's turn your idea into something memorable.
        </p>
      </div>

      <div className="contact-content">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();

            alert(
              "Message sent! Connect this form to a real email service later."
            );
          }}
        >
          <input className="input" type="text" placeholder="Your Name" required />

          <input className="input" type="email" placeholder="Your Email" required />

          <textarea
            className="textarea"
            placeholder="Tell me about your project..."
            rows="6"
            required
          />

          <button className="btn btn--primary" type="submit">
            Send Message →
          </button>
        </form>

        <div className="contact-info">
          <div>
            <span>Email</span>

            <a href="mailto:engsaifeldeen95@gmail.com">
              engsaifeldeen95@gmail.com
            </a>
          </div>

          <div>
            <span>Phone</span>

            <a href="tel:01063043451">01063043451</a>
          </div>

          <div>
            <span>Location</span>

            <p>Alexandria, Egypt</p>
          </div>

          <div className="socials">
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
