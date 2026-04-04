// src/components/PageTitle/PageTitle.jsx
import React from "react";
import "./PageTitle.css";

export default function PageTitle({ title, as = "h1", align = "center", fullTitle }) {
  const Tag = as;

  return (
    <Tag className={`page-title align-${align}`} aria-label={fullTitle || title}>
      {title}
      {fullTitle && <span className="visually-hidden"> — {fullTitle.replace(title, "").trim()}</span>}
    </Tag>
  );
}