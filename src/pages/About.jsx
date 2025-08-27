import React from "react";
import { Helmet } from "react-helmet-async";
import PageIntro from "../components/PageIntro/PageIntro";
import Section from "../components/Section/Section";
import QnAAccordion from "../components/QnAAccordion/QnAAccordion";
import IntroVideoBlock from "../components/IntroVideoBlock/IntroVideoBlock";
import qnaItems from "../content/qnaItems";

export default function About() {
  const aboutIntro = [
    "I’m Dan Murphy, a principal product designer who works where humans meet technology. For over 10 years, I’ve led design for mobile apps, wearables, and autonomous vehicles at Accenture, Walmart, Fidelity, and Motional. I work fluidly from rough sketches and prototypes to systems that scale. Off screen, I paint, play music, and cook with the same energy I bring into design work.",
    "I focus on clarity and craft, going from uncovering problems with teams to shaping ideas through prototypes and motion. My work spans early discovery, design systems, and commercialization, always with a focus on making tech feel intuitive and human."
  ];

  return (
    <>
      <Helmet>
        <title>Dan Murphy · Product Designer</title>
        <meta
          name="description"
          content="Designing intuitive and impactful experiences across mobile, web, and emerging platforms."
        />
        <link rel="canonical" href="https://danmurphy.work/" />
      </Helmet>

      <Section>
        <h1 className="visually-hidden">About Dan Murphy</h1>

        {/* Intro copy */}
        <div className="col-span-4 sm:col-span-6 md:col-span-8">
          <PageIntro paragraphs={aboutIntro} />
        </div>

        {/* New video block right under intro */}
        <div className="col-span-4 sm:col-span-6 md:col-span-8">
          <IntroVideoBlock
            ariaLabel="Dan walking — ambient, silent loop"
            poster="/assets/intro-walk-poster.jpg"
            sources={[
              { src: "/assets/intro-walk-720.mp4", media: "(max-width: 768px)" },
              { src: "/assets/intro-walk-1080.mp4" }
            ]}
          />
        </div>

        {/* Q&A header then accordion */}
        <div className="col-span-4 sm:col-span-6 md:col-span-8">
                <div className="section-marker">
        <span className="marker-line" aria-hidden="true"></span>
        <span className="marker-icon" aria-hidden="true">✷</span>
        <span className="marker-line" aria-hidden="true"></span>
      </div>
          <h2 className="section-label">Questions</h2>
          <QnAAccordion items={qnaItems} />
        </div>
      </Section>
    </>
  );
}
