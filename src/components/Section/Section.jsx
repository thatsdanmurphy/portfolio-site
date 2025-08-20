// src/components/Section/Section.jsx
import React from "react";
import "./Section.css";

export default function Section({ children, spacing = "md", background = "none", as: Element = "section" }) {
  return (
    <Element className={`section section--${spacing} section--bg-${background}`}>
      <div className="layout-container">
        {children} {/* <-- no layout-grid here */}
      </div>
    </Element>
  );
}
