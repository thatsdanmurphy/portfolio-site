import "./BaseCard.css";

export default function BaseCard({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}
