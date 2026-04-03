// src/components/Nav/Nav.jsx
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const links = [
  { label: "About",     path: "/about" },
  { label: "Past Work", path: "/work"  },
  { label: "Now",       path: "/"      },
];

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="nav-links">
        {links.map((item) => {
          // Now is active on both "/" and "/now"
          const isActive = item.path === "/"
            ? location.pathname === "/" || location.pathname === "/now"
            : location.pathname === item.path;

          return (
            <li key={item.path}>
              <Link
                to={item.path}
                replace={location.pathname === item.path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
