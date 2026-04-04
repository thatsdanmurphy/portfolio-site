// src/components/QnACard/QnACard.jsx

import React from "react";
import "./QnACard.css";

export default function QnACard({ question, answer }) {
  return (
    <div className="qna-card">
      <h4 className="qna-question">{question}</h4>
      <p className="qna-answer">{answer}</p>
    </div>
  );
}
