import React, { useEffect, useState } from "react";
import "./styles/global.css";
import "./styles/buttons.css";
import "./styles/section.css";

import { NAV_ITEMS } from "./data/navItems";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        // Watch a thin band around the vertical middle of the viewport
        // instead of a fixed visibility ratio, so long sections (like "work")
        // still get marked active correctly.
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
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
      <Navbar
        activeSection={activeSection}
        scrolled={scrolled}
        menuOpen={menuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      <Hero scrollTo={scrollTo} />

      <Services />

      <Work />

      <Experience />

      <Tools />

      <Education />

      <Contact />

      <Footer />
    </div>
  );
}
