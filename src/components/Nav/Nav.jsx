// src/components/Nav/Nav.jsx
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const location = useLocation();
  const links = ["About", "Work", "Now"];

  return (
    <nav className="nav">
      <ul className="nav-links">
        {links.map((label) => {
          const slug = label.toLowerCase();
          const path = slug === "about" ? "/" : `/${slug}`;
          const isActive = location.pathname === path;

          return (
            <li key={slug}>
              <Link
                to={path}
                replace={location.pathname === path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
