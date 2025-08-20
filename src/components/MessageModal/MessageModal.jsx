import React from "react";
import "./MessageModal.css";

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function MessageModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <XIcon />
        </button>
        <div className="modal-body">
          {children}
          <div className="modal-buttons">
            <button type="button" className="confirm" onClick={onClose}>
              Great!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
