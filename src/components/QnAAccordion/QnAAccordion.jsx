import React, { useState } from "react";
import "./QnAAccordion.css";

export default function QnAAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="qna-section">
      <div className="qna-accordion">
        {items.map((item, index) => (
          <div className={`qna-item ${openIndex === index ? "open" : ""}`} key={index}>
            <div
              className="qna-question"
              onClick={() => toggleIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleIndex(index)}
            >
              <div className="qna-toggle-icon-wrapper">
  <span className={`icon-line horizontal ${openIndex === index ? "open" : ""}`} />
  <span className={`icon-line vertical ${openIndex === index ? "open" : ""}`} />
</div>
              <span className="qna-label">{item.question}</span>
            </div>
            {openIndex === index && (
              <div className="qna-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
