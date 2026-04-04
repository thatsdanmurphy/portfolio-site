// src/components/PageIntro/PageIntro.jsx
import React from "react";
import "./PageIntro.css";

export default function PageIntro({ paragraphs, centered }) {
  return (
    <div className={`page-intro ${centered ? "centered" : ""}`}>
      {paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
}
