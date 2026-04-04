// components/NowCard/NowCard.jsx
import React from "react";
import BaseCard from "../BaseCard/BaseCard";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import "./NowCard.css";

export default function NowCard({ title, icon, items, alt }) {
  return (
    <BaseCard className="now-card">
      <div className="now-card-header">
        <ImageWithFallback
          src={icon}
          alt={alt}
          className="now-card-icon"
          ratio="1 / 1"
        />
        <h3 className="now-card-title">{title}</h3>
      </div>
      <ul className="now-card-list">
        {items.map((item, idx) => {
          const [bold, ...rest] = item.split(":");
          return (
            <li key={idx} className="now-card-item">
              {rest.length ? (
                <>
                  <strong>{bold.trim()}</strong>
                  <span>{rest.join(":".trim())}</span>
                </>
              ) : (
                <span>{item}</span>
              )}
            </li>
          );
        })}
      </ul>
    </BaseCard>
  );
}