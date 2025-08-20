import React, { useState } from "react";
import "./WorkGallery.css";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import Lightbox from "../Lightbox/Lightbox";

// 🖼️ Import all thumbnails (used as full images for now)
import crossPlatformThumb from "../assets/work-gallery/cross-platform-ui-thumb.jpg";
import mobileDetailThumb from "../assets/work-gallery/mobile-detail-screen-thumb.jpg";
import mapPickupThumb from "../assets/work-gallery/map-pickup-ux-thumb.jpg";
import storyboardThumb from "../assets/work-gallery/storyboard-user-flow-1-thumb.jpg";
import visualJourneyThumb from "../assets/work-gallery/visual-journey-sketch-thumb.jpg";
import visionDeckThumb from "../assets/work-gallery/vision-deck-thumb.jpg";
import financialGoalsThumb from "../assets/work-gallery/financial-goals-flow-thumb.jpg";
import ecommerceWireframeThumb from "../assets/work-gallery/ecommerce-wireframe-thumb.jpg";
import designSystemThumb from "../assets/work-gallery/design-system-components-thumb.jpg";

export default function WorkGallery() {
  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    image: null,
    caption: "",
  });

  const openLightbox = (src, caption) => {
    setLightboxData({ isOpen: true, image: src, caption });
  };

  const closeLightbox = () => {
    setLightboxData({ ...lightboxData, isOpen: false });
  };

  const galleryItems = [
    {
      src: crossPlatformThumb,
      alt: "Cross-platform mobile UI",
      caption: "Responsive UI showcasing login and transaction flow across platforms.",
    },
    {
      src: mobileDetailThumb,
      alt: "Mobile detail screen",
      caption: "High-res detail view showing personalized recommendations.",
    },
    {
      src: mapPickupThumb,
      alt: "Map pickup flow",
      caption: "Pin-drop interface for autonomous vehicle pickup locations.",
    },
    {
      src: storyboardThumb,
      alt: "Storyboard user journey",
      caption: "Illustrated storyboard aligning stakeholders around user needs.",
    },
    {
      src: visualJourneyThumb,
      alt: "Visual journey sketch",
      caption: "Sketch mapping emotional beats across a product experience.",
    },
    {
      src: visionDeckThumb,
      alt: "Vision deck layout",
      caption: "Slide from strategic vision deck used for internal storytelling.",
    },
    {
      src: financialGoalsThumb,
      alt: "Financial goals UI flow",
      caption: "Goal-setting flow that surfaced key milestones and savings paths.",
    },
    {
      src: ecommerceWireframeThumb,
      alt: "E-commerce wireframe",
      caption: "Lo-fi wireframe for category exploration and checkout optimization.",
    },
    {
      src: designSystemThumb,
      alt: "Design system UI components",
      caption: "Atomic UI library that drove visual consistency and dev velocity.",
    },
  ];

  return (
    <section className="work-gallery-section">
      <div className="section-marker">
        <span className="marker-line" aria-hidden="true"></span>
        <span className="marker-icon" aria-hidden="true">✷</span>
        <span className="marker-line" aria-hidden="true"></span>
      </div>
      <h3 className="section-label">Proof of Craft</h3>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(item.src, item.caption)}
          >
            <ImageWithFallback
              src={item.src}
              alt={item.alt}
              ratio="4 / 3"
              variant="gallery"
            />
            <p className="gallery-caption">{item.caption}</p>
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={lightboxData.isOpen}
        image={lightboxData.image}
        caption={lightboxData.caption}
        onClose={closeLightbox}
      />
    </section>
  );
}
