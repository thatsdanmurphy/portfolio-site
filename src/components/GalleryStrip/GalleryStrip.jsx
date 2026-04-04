// GalleryStrip.jsx — v1.5 (panel-approved captions, tightened for 2 lines)
import React, { useRef } from "react";
import "./GalleryStrip.css";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";

// thumbs
import crossPlatform from "../assets/work-gallery/cross-platform-ui-thumb.webp";
import mobileDetail from "../assets/work-gallery/mobile-detail-screen-thumb.webp";
import mapPickup from "../assets/work-gallery/map-pickup-ux-thumb.webp";
import storyboard from "../assets/work-gallery/storyboard-user-flow-1-thumb.webp";
import visualSketch from "../assets/work-gallery/visual-journey-sketch-thumb.webp";
import visionDeck from "../assets/work-gallery/vision-deck-thumb.webp";
import financialGoals from "../assets/work-gallery/financial-goals-flow-thumb.webp";
import ecommerce from "../assets/work-gallery/ecommerce-wireframe-thumb.webp";
import designSystem from "../assets/work-gallery/design-system-components-thumb.webp";

const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const galleryItems = [
  {
    src: crossPlatform,
    alt: "Cross-platform UI design",
    caption: "Cross-platform feature building across iOS and Android."
  },
  {
    src: mobileDetail,
    alt: "Motion-based prototypes",
    caption: "Motion-based prototypes speeding concept validation."
  },
  {
    src: mapPickup,
    alt: "Physical–digital mapping",
    caption: "Physical–digital world mapping to pinpoint interactions."
  },
  {
    src: storyboard,
    alt: "Storyboard for alignment",
    caption: "Storyboarding to align vision and capture user insights."
  },
  {
    src: visualSketch,
    alt: "Journey sketch",
    caption: "Journey sketches exploring digital interaction points."
  },
  {
    src: visionDeck,
    alt: "North Star deck",
    caption: "North Star vision aligning team direction and experience rebuild."
  },
  {
    src: financialGoals,
    alt: "Benefits selection flow",
    caption: "Multi-step benefits flow engaging, informing, reassuring."
  },
  {
    src: ecommerce,
    alt: "Mid-fidelity wireframe",
    caption: "Mid-fidelity wireframes for product-education pages."
  },
  {
    src: designSystem,
    alt: "Design system inventory",
    caption: "Component inventory aligning design and dev workflows."
  }
];

export default function GalleryStrip() {
  const wrapperRef = useRef(null);

  const scrollBy = (dir = 1) => {
    const el = wrapperRef.current;
    if (!el) return;
    const amount = Math.min(600, Math.round(el.clientWidth * 0.9));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="gallery-strip-section" aria-label="Artifact Samples">
      <div className="section-marker" aria-hidden="true">
        <span className="marker-line"></span>
        <span className="marker-icon">✷</span>
        <span className="marker-line"></span>
      </div>
      <h3 className="section-label">Artifact Samples</h3>

      <div className="gallery-strip-outer">
        <button
          className="gallery-nav gallery-nav-left"
          aria-label="Scroll gallery left"
          onClick={() => scrollBy(-1)}
        >
          <ArrowLeftIcon />
        </button>

        <div className="gallery-strip-wrapper" ref={wrapperRef}>
          <div className="gallery-strip">
            {galleryItems.map((item, i) => (
              <figure className="strip-item" key={i}>
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  ratio="1 / 1"
                  variant="gallery"
                />
                <figcaption className="gallery-caption">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <button
          className="gallery-nav gallery-nav-right"
          aria-label="Scroll gallery right"
          onClick={() => scrollBy(1)}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
}
