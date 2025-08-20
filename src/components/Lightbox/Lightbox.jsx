// Lightbox.jsx (Split-View Modal with Responsive Layout)
import React from "react";
import "./Lightbox.css";

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <XIcon />
        </button>
        <div className="lightbox-inner">
          <div className="lightbox-image-wrapper">
            <img src={image.src} alt={image.alt} />
          </div>
          <div className="lightbox-meta">
            <h4 className="lightbox-title">{image.alt}</h4>
            <p className="lightbox-caption">{image.caption}</p>
            <ul className="lightbox-details">
              <li><strong>Company:</strong> TBD</li>
              <li><strong>Industry:</strong> TBD</li>
              <li><strong>Problem:</strong> TBD</li>
              <li><strong>Solution:</strong> TBD</li>
              <li><strong>Impact:</strong> TBD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
