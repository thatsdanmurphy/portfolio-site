import React from "react";
import QnACard from "../QnACard/QnACard";
import "./QnASection.css"; // optional

export default function QnASection({ label = "Some Things I Think About", items = [] }) {
  return (
    <section className="qna-section">
      <h3 className="section-label">{label}</h3>
      <div className="qna-card-group">
        {items.map((item, index) => (
          <QnACard key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
