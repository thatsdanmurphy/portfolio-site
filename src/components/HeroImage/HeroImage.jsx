// src/components/HeroImage/HeroImage.jsx
import React from "react";
import "./HeroImage.css";
import heroImage from "../assets/hero.webp"; // ✅ This is correct based on your folder structure

export default function HeroImage() {
  return (
    <div className="hero-image-container">
      <img src={heroImage} alt="Hero background" className="hero-image" />
    </div>
  );
}
