// src/pages/Now.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Section from "../components/Section/Section";
import PageIntro from "../components/PageIntro/PageIntro";
import ImageWithFallback from "../components/ImageWithFallback/ImageWithFallback";
import ProjectList from "../components/ProjectList/ProjectList";
import canvasImage from "../components/assets/painting1-thumb.webp";
import "./Now.css";

const projects = [
  {
    title: "The Number Wall",
    url: "https://thenumberwall.com",
    image: "/tnw.gif",
    description: "A living archive of legendary sports numbers, exploring who actually defined one.",
  },
  {
    title: "This Is Your Attention",
    url: "https://thisisyourattention.com",
    image: "/attention.png",
    description: "A live calculation of what your attention is worth to the platforms currently holding it.",
  },
  {
    title: "A Proper Home on the Internet",
    url: "https://danmurphy.services",
    image: "/ProperHome.png",
    description: "Design, build, and hosting for fractional professionals and small businesses.",
  },
];

export default function Now() {
  const nowIntro = ["Here’s what I’m up to lately."];

  return (
    <>
      <Helmet>
        <title>Now · Dan Murphy</title>
        <meta
          name="description"
          content="What Dan Murphy is building, reading, and working through these days."
        />
        <link rel="canonical" href="https://www.danmurphy.work/" />
        <meta property="og:title" content="Now · Dan Murphy" />
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

        <div className="now-inner">
          <div className="page-header">
            <h2>Spring 2026</h2>
            <PageIntro paragraphs={nowIntro} centered />
          </div>

          <ProjectList projects={projects} />

          <div className="now-page">
            <section className="now-group">
              <p className="now-label">In the background</p>
              <div className="now-text-block">
                <p>
                  <strong>Guitar:</strong> Working on memorization across lyrics, chords and strumming. If I get a few tunes together, I might muster up the courage for an open mic.
                </p>
                <p>
                  <strong>Cardboard sculptures:</strong> Started with a couple snow days with the kids. And now I’m on new adventures. Inspired by the work of Wayne White.
                </p>
              </div>
            </section>

            <div className="section-marker standard-gap">
              <span className="marker-line" aria-hidden="true"></span>
              <span className="marker-icon" aria-hidden="true">✷</span>
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
      </Section>
    </>
  );
}