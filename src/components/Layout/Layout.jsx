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
    <div className="layout-container">
      <a href="#main-content" className="skip-link">
  Skip to main content
</a>
      <div className="layout-grid">
        <div className="col-span-4 sm:col-span-8 md:col-span-12">
          {!is404 && (
            <section
              className="hero-block"
              role="region"
              aria-label="Intro section"
            >
              <HeroImage />
              <PageTitle
                title={content.page_title || "Dan Murphy"}
                seoTitle="Dan Murphy — Principal Product Designer, Prototyping"
                as="h1"
              />
              <SubtitleRotator
                subtitles={content.subtitle_rotator?.split(" | ") || []}
              />
              <Nav
                links={content.nav_links?.split(" | ") || []}
                current={
                  window.location.pathname === "/work" ? "work" : "about"
                }
              />
            </section>
          )}

          {/* Main content */}
          <main id="main-content">
          {children}
          </main>

          {!is404 && <Footer />}
        </div>
      </div>
    </div>
  );
}
