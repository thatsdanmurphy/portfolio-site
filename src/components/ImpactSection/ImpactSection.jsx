// Final ImpactSection.jsx with 6 curated static cards (tightened copy)
import React from "react";
import DetailCard from "../DetailCard/DetailCard";
import "./ImpactSection.css";

const impactItems = [
  {
    title: "Scaled AV Delivery from Pilot to Proof",
    detail:
      "Expanded from 2 to 10 merchants and 4,000+ orders, proving delivery as a strategic advantage.",
    label: "Leadership · AV Strategy · Expansion"
  },
  {
    title: "Boosted Login Completion by 15%",
    detail:
      "Simplified Fidelity’s login with Touch ID, raising completion rates 15% and App Store rating from 2.8 to 4.0.",
    label: "IC · Security UX · Growth"
  },
  {
    title: "Shaped Fidelity’s Financial Feed for Engagement",
    detail:
      "Supported early concepting and interaction design on a discovery hub that engaged 50% of users at launch and earned a Webby honorable mention.",
    label: "IC · Discovery UX · Engagement"
  },
  {
    title: "Cut Bounce Rate from 86% to Site Average",
    detail:
      "Simplified SharkNinja’s first-of-its-kind “build-your-own” flow, cutting bounce from 86% to site average and lifting conversion.",
    label: "IC · eCommerce UX · Conversion"
  },
  {
    title: "Built Early Design System Foundations",
    detail:
      "Codified UI components across Fidelity’s mobile ecosystem before design systems lived in Figma or Sketch, cutting handoff churn and ensuring parity across platforms.",
    label: "Design Systems · Collaboration"
  },
  {
    title: "Accelerated Onboarding with Designer Toolkit",
    detail:
      "Directed a team to codify flows, patterns, and starter artifacts, helping new designers contribute quickly during turnover.",
    label: "Leadership · Team Enablement"
  }
];

export default function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="section-marker">
        <span className="marker-line" aria-hidden="true"></span>
        <span className="marker-icon" aria-hidden="true">✷</span>
        <span className="marker-line" aria-hidden="true"></span>
      </div>
      <h3 className="section-label">Impact & Leadership</h3>
      <div className="impact-grid">
        {impactItems.map((item, index) => (
          <DetailCard
            key={index}
            title={item.title}
            text={item.detail}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
}
