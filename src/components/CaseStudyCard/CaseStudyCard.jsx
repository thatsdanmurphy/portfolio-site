import React, { useState } from "react";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import PasswordModal from "../PasswordModal/PasswordModal"; // 👈 import
import "./CaseStudyCard.css";

export default function CaseStudyCard({ title, description, imageSrc, alt, pdfLink, gated, password = "design123" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    if (gated) {
      setIsModalOpen(true);
    } else {
      window.open(pdfLink, "_blank");
    }
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    // Trigger download or open
    window.open(pdfLink, "_blank");
  };

  return (
    <>
      <div className="case-study-card">
        <div className="case-study-image-wrapper">
          <ImageWithFallback src={imageSrc} alt={alt} ratio="3 / 2" className="case-study-image" />
        </div>
        <div className="case-study-content">
          <h3 className="case-study-title">{title}</h3>
          <p className="case-study-description">{description}</p>
          <div className="case-study-meta">
            <a href={pdfLink} className="case-study-link" onClick={handleOpenModal}>
              View Case Study
            </a>
            {gated && <span className="case-study-note">Password required</span>}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <PasswordModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleSuccess}
          correctPassword={password}
        />
      )}
    </>
  );
}
