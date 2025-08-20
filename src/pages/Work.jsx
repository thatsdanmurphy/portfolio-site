import React from "react";
import { Helmet } from "react-helmet-async";
import Section from "../components/Section/Section";
import CaseStudyCard from "../components/CaseStudyCard/CaseStudyCard";
import "../components/CaseStudyCard/CaseStudyCard.css";
import project1Thumb from "../components/assets/project1-thumb.png";
import project2Thumb from "../components/assets/project2-thumb.png";
import GalleryStrip from "../components/GalleryStrip/GalleryStrip";
import ImpactSection from "../components/ImpactSection/ImpactSection";


export default function Work() {
  return (
        <>
      <Helmet>
  <title>Work · Dan Murphy</title>
  <meta name="description" content="Selected case studies and design explorations from Dan Murphy." />
  <link rel="canonical" href="https://danmurphy.work/work" />
</Helmet>
      <Section>
        <h1 className="visually-hidden">Selected Work by Dan Murphy</h1>
      <div className="case-study-list">
          <CaseStudyCard
  title="Self-Driving Delivery"
  description="Designing for 4,000+ UberEats deliveries via autonomous vehicle."
  imageSrc={project1Thumb}
  alt="Uber Eats Delivery Thumbnail"
  pdfLink="/pdfs/CS-AV-Delivery.pdf" // 👈 relative to public folder
  gated={true}
  password="danmurphydesign" // Optional: set your desired password
/>
          <CaseStudyCard
            title="Designing Fidelity for the Wrist"
            description="An early look at brokerage data on Apple Watch — pre-market release."
            imageSrc={project2Thumb}
            alt="Apple Watch Prototype Thumbnail"
            pdfLink="/pdfs/CS-Watch.pdf"
            gated={true}
            password="danmurphydesign"
          />
        </div>
      </Section>

      <GalleryStrip />

      <Section>
        <ImpactSection />
      </Section>
    </>
  );
}
