// src/pages/404.jsx
import React from "react";
import "./404.css";

export default function NotFound() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Not found, but you’re still in good company.</p>
        <a href="/" className="notfound-button">Back Home</a>
      </div>
    </div>
  );
}
