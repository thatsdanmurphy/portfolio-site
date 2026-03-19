// src/pages/Now.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Section from "../components/Section/Section";
import CaseStudyCard from "../components/CaseStudyCard/CaseStudyCard";
import "../components/CaseStudyCard/CaseStudyCard.css";
import PageIntro from "../components/PageIntro/PageIntro";
import ImageWithFallback from "../components/ImageWithFallback/ImageWithFallback";
import canvasImage from "../components/assets/painting1-thumb.webp";
import TNWthumb from "../components/assets/TNWthumb.png";
import "./Now.css";

export default function Now() {
  const nowIntro = ["Here’s what I’m up to lately."];

  return (
    <>
      <Helmet>
        <title>These Days · Dan Murphy</title>
        <meta
          name="description"
          content="What Dan Murphy is building, reading, and working through these days."
        />
        <link rel="canonical" href="https://www.danmurphy.work/now" />
        <meta property="og:title" content="These Days · Dan Murphy" />
        <meta
          property="og:description"
          content="Projects in motion, books in the background, and what’s currently holding my attention."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large"
        />
      </Helmet>

      <Section>
        <h1 className="visually-hidden">
          What Dan Murphy is focused on these days
        </h1>

        <div className="col-span-4 sm:col-span-6 md:col-span-8">
          <div className="now-inner">
            <div className="page-header">
              <h2>Spring 2026</h2>
              <PageIntro paragraphs={nowIntro} centered />
            </div>

            <div className="now-page">
              <section className="now-group">
                <p className="now-label">Projects in motion</p>

                <div className="case-study-list">
                  <CaseStudyCard
                    title="The Number Wall"
                    description="A living archive of legendary sports numbers: Exploring who actually defined a number."
                    imageSrc={TNWthumb}
                    alt="The Number Wall thumbnail"
                    pdfLink="https://thenumberwall.com"
                    linkLabel="View Site"
                  />
                </div>

              </section>

              <section className="now-group">
                <p className="now-label">In the background</p>

                <div className="now-text-block">
                  <p>
                    <strong>Guitar:</strong> Working on memorization across lyrics, chords and strumming. If I get a few tunes together, I might muster up the courage for an open mic.
                  </p>

                  <p>
                    <strong>Cardboard sculptures:</strong> Started with a couple snow days with the kids. And now I'm on a new adventures. Inspired by the work of Wayne White.
                  </p>
                </div>
              </section>

              <div className="section-marker standard-gap">
  <span className="marker-line" aria-hidden="true"></span>
  <span className="marker-icon" aria-hidden="true">
    ✷
  </span>
  <span className="marker-line" aria-hidden="true"></span>
</div>

              <div className="art-signup-block">
                <h3 className="section-label">I paint too</h3>

                <div className="art-signup-inner">
                  <div className="art-signup-content">
                    <div className="signup-image">
                      <ImageWithFallback
                        src={canvasImage}
                        alt="Backside of canvas with crossbar"
                        ratio="4 / 3"
                        variant="gallery"
                      />
                    </div>

                    <div className="signup-text">
                      <div className="signup-text-inner">
                        <p>
                          Outside my design work, painting has been part of my
                          life for a long time. I paint from observation,
                          memory, and photographs. I love scenes of Boston, old
                          vehicles, and classical pieces, often chasing
                          adventures in color and light.
                        </p>

                        <p>
                          If you want to see what I’ve been working on lately,
                          it’s over at{" "}
                          <a
                            href="https://danmurphy.studio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="art-link"
                          >
                            danmurphy.studio
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}