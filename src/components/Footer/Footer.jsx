// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import matchesImage from "../assets/matches.webp";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Contact / Primary CTA */}
      <div className="footer-contact">
        <div className="contact-visual">
          <img src={matchesImage} alt="Burned matches — maybe one left" />
        </div>
        <h3 className="section-label">Need a Light?</h3>
        <p className="body-text">
          Interested in working together?
          <br />
          Email me at{" "}
          <a href="mailto:dmurphy.dpm@gmail.com" className="email-link">
            dmurphy.dpm@gmail.com
          </a>.
        </p>
      </div>

      {/* Copyright + Tagline + Resume (inline, mono) */}
<div className="footer-bottom">
<p className="footer-fine">
  © {new Date().getFullYear()} Dan Murphy
  <br />
  Built with care and a little AI
</p>

</div>
    </footer>
  );
}
