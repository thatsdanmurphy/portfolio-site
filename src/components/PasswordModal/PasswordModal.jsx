// PasswordModal.jsx
import { useState, useRef, useEffect } from "react";
import "./PasswordModal.css";

// Inline SVG fallback components
const EyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.47 21.47 0 0 1 5.17-6.88" />
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function PasswordModal({ onClose, onSuccess, correctPassword }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (input === correctPassword) {
      onSuccess();
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <XIcon />
        </button>
        <h2>Enter Password</h2>
        <p className="modal-intro">
          Access to this case study is limited. Enter your password to continue.
        </p>
        <div className="input-wrapper">
          <input
            ref={inputRef}
            type={showPassword ? "text" : "password"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            placeholder="Password"
          />
          <button
            type="button"
            className="eye-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label="Toggle password visibility"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {error && <p className="error" style={{ marginTop: '0.5rem' }}>Incorrect password. Please try again.</p>}
        <p className="micro-note">
          Don’t have the password? Email me at <strong>dmurphy.dpm@gmail.com</strong> and I’ll send it over.
        </p>
        <div className="modal-buttons">
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Download Case Study</button>
        </div>
      </div>
    </div>
  );
}
