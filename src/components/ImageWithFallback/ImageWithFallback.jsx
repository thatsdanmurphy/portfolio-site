// src/components/ImageWithFallback/ImageWithFallback.jsx

import React from "react";
import "./ImageWithFallback.css";

export default function ImageWithFallback({
  src,
  alt = "",
  className = "",
  ratio = "3 / 2",
  variant = "default" // add this line
}) {
  if (!src) {
    return (
      <div
        className={`placeholder-image ${variant} ${className}`}
        style={{ aspectRatio: ratio }}
      />
    );
  }

  return <img src={src} alt={alt} className={className} />;
}
