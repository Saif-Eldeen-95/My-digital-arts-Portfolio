import React, { useEffect, useState } from "react";
import "./App.css";

/* =========================
   Navigation
========================= */

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

/* =========================
   Portfolio Data
   Replace title / description /
   tools / link with your real data
========================= */

const VIDEO_PROJECTS = [
  {
    title: "Video Project 01",
    description:
      "A video editing project focused on visual storytelling, pacing, and engaging transitions.",
    tools: ["DaVinci Resolve", "CapCut"],
    link: "#",
  },
  {
    title: "Video Project 02",
    description:
      "A creative video project combining editing, motion, music, and visual effects.",
    tools: ["DaVinci Resolve", "VN"],
    link: "#",
  },
  {
    title: "Video Project 03",
    description:
      "A social media video created with a focus on engaging visuals and storytelling.",
    tools: ["CapCut", "DaVinci Resolve"],
    link: "#",
  },
];

const DESIGN_PROJECTS = [
  {
    title: "Design Project 01",
    description:
      "A graphic design project created for digital communication and visual impact.",
    tools: ["Canva"],
    link: "#",
  },
  {
    title: "Design Project 02",
    description:
      "A creative visual design project developed around a clear and modern visual identity.",
    tools: ["Canva"],
    link: "#",
  },
  {
    title: "Design Project 03",
    description:
      "A collection of visual assets designed for digital and social media use.",
    tools: ["Canva"],
    link: "#",
  },
];

/* =========================
   Experience
========================= */

const EXPERIENCE = [
  {
    date: "Jun 2026 — Present",
    role: "Video Editor",
    company: "NASA Space Apps",
    description:
      "Covered events including NASA Space Apps Challenge and Summer Training.",
    tools: ["DaVinci Resolve", "Canva", "CapCut", "VN", "Video Guro"],
  },
  {
    date: "Mar 2025 — Present",
    role: "Media Volunteer",
    company: "UCCD — Faculty of Engineering",
    description:
      "Worked on event coverage including JOBFAIR 2025 and Career Axis#4 2026, with responsibilities in video editing, graphic design, and photography.",
    tools: ["DaVinci Resolve", "Canva", "CapCut", "VN", "Video Guro"],
  },
  {
    date: "Aug 2023 — Jul 2024",
    role: "Video Editor & Content Creator",
    company: "FPS — ElFath Private School",
    description:
      "Project-based freelance work creating and editing digital content, managing social media pages, and coordinating with team members.",
    tools: ["Video Editing", "Content Creation", "Social Media"],
  },
  {
    date: "Sep 2018 — Jun 2022",
    role: "Content Creator & Video Editor",
    company: "My YouTube Channel",
    description:
      "Produced and edited original video content independently over multiple years.",
    tools: ["Video Editing", "Content Creation"],
  },
];

/* =========================
   Services
========================= */

const SERVICES = [
  {
    number: "01",
    title: "Video Editing",
    description:
      "Turning raw footage into engaging videos through editing, pacing, transitions, and visual storytelling.",
  },
  {
    number: "02",
    title: "Graphic Design",
    description:
      "Creating clean and engaging visual designs for digital communication and social media.",
  },
  {
    number: "03",
    title: "Content Creation",
    description:
      "Developing original digital content designed to communicate ideas and connect with audiences.",
  },
  {
    number: "04",
    title: "Photography",
    description:
      "Capturing events and moments through creative compositions and visual storytelling.",
  },
];

/* =========================
   Tools
========================= */

const TOOLS = [
  {
    name: "DaVinci Resolve",
    level: 50,
    icon: "🎬",
    category: "Video Editing"
  },
  {
    name: "Canva",
    level: 80,
    icon: "🎨",
    category: "Graphic Design"
  },
  {
    name: "CapCut",
    level: 80,
    icon: "✂️",
    category: "Video Editing"
  },
  {
    name: "VN",
    level: 80,
    icon: "📱",
    category: "Mobile Editing"
  },
  {
    name: "Video Guro",
    level: 90,
    icon: "🎥",
    category: "Video Production"
  },
];

/* =========================
   Certificates
========================= */

const CERTIFICATES = [
  {
    title: "B2 In English",
    organization: "Real Soft House",
    date: "May 2026",
  },
  {
    title: "Marketing & Sales",
    organization: "SBS — Shabab Betsad Shabab",
    date: "Aug 2026",
  },
];

/* =========================
   App
========================= */

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="page">

      {/* =========================
          Navbar
      ========================= */}

      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="nav-inner">
          <button className="logo" onClick={() => scrollTo("home")}>
            Saif<span>.creative</span>
          </button>

          <nav className="nav-links-desktop">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? "nav-link--active" : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode((value) => !value)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              className="burger-btn"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
            >
              <span className={`burger-line ${menuOpen ? "burger-line--top" : ""}`} />
              <span className={`burger-line ${menuOpen ? "burger-line--mid" : ""}`} />
              <span className={`burger-line ${menuOpen ? "burger-line--bottom" : ""}`} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="nav-links-mobile">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`nav-link-mobile ${activeSection === item.id ? "nav-link--active" : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>
      
      {/* =========================
          Hero
      ========================= */}

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
            <button
              className="btn btn--primary"
              onClick={() => scrollTo("work")}
            >
              View My Work
            </button>

            <button
              className="btn btn--secondary"
              onClick={() => scrollTo("contact")}
            >
              Let's Work Together
            </button>
          </div>
        </div>

        <img src="../assets/me.png" alt="me" />
      </section>

      {/* =========================
          Services
      ========================= */}

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

      {/* =========================
          Work
      ========================= */}

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
              <a href={project.link} className="project-card" key={index}>
                <div className="project-visual">
                  <span>VIDEO</span>
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
              <a href={project.link} className="project-card" key={index}>
                <div className="project-visual project-visual--design">
                  <span>DESIGN</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          Experience
      ========================= */}

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

      {/* =========================
           Tools
      ========================= */}

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
                style={{ '--level': `${tool.level}%` }}
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

      {/* =========================
          Education & Certificates
      ========================= */}

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

      {/* =========================
          Contact
      ========================= */}

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
            <input
              className="input"
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              className="input"
              type="email"
              placeholder="Your Email"
              required
            />

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

      {/* =========================
          Footer
      ========================= */}

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Saif Eldeen Shady.
          <span> Made by Saif eldeen Shady.</span>
        </p>
      </footer>
    </div>
  );
}