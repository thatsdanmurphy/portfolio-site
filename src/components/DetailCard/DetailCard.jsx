import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import "./DetailCard.css";

export default function DetailCard({ title, text, label, icon, children }) {
  return (
    <BaseCard className="detail-card">
      <div className="detail-header">
        {icon && <span className="detail-icon" aria-hidden="true">{icon}</span>}
        {label && <span className="detail-label">{label}</span>}
      </div>
      {title && <h4 className="detail-title">{title}</h4>}
      {(text || children) && (
        <div className="detail-text">
          {text ? <p>{text}</p> : children}
        </div>
      )}
    </BaseCard>
  );
}
