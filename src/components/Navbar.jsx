import React from "react";
import "./Navbar.css";
import { NAV_ITEMS } from "../data/navItems";

export default function Navbar({
  activeSection,
  scrolled,
  menuOpen,
  darkMode,
  setDarkMode,
  setMenuOpen,
  scrollTo,
}) {
  return (
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
  );
}
