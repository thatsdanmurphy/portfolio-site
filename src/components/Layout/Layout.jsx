// src/components/Layout/Layout.jsx
import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import PageTitle from "../PageTitle/PageTitle";
import SubtitleRotator from "../SubtitleRotator/SubtitleRotator";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

export default function Layout({ content, children }) {
  const location = useLocation();

  // If we’re on the 404 page, don’t show header/footer
  const is404 = location.pathname === "/404" || children.type?.name === "NotFound";

  return (
    <div className="page-wrapper">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {!is404 && (
        <header className="site-header layout-container" role="banner">
          <HeroImage />
          <PageTitle
            title={content.page_title || "Dan Murphy"}
            seoTitle="Dan Murphy — Principal Product Designer, Prototyping"
            as="h1"
          />
          <SubtitleRotator
            subtitles={content.subtitle_rotator?.split(" | ") || []}
          />
          <Nav />
        </header>
      )}

      <main id="main-content">
        {children}
      </main>

      {!is404 && <Footer />}
    </div>
  );
}
