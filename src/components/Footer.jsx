import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Saif Eldeen Shady.
        <span> Made by Saif eldeen Shady.</span>
      </p>
    </footer>
  );
}
