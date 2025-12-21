// src/pages/Now.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Section from "../components/Section/Section";
import PageIntro from "../components/PageIntro/PageIntro";
import ImageWithFallback from "../components/ImageWithFallback/ImageWithFallback";
import canvasImage from "../components/assets/painting1-thumb.webp";
import learnIcon from "../components/assets/icons/learn.webp";
import readIcon from "../components/assets/icons/read.webp";
import makeIcon from "../components/assets/icons/make.webp";
import NowCard from "../components/NowCard/NowCard";

export default function Now() {
  const nowIntro = ["Here’s what I’m up to as of late."];

  return (
    <>
      <Helmet>
        <title>Now · Dan Murphy</title>
        <meta
          name="description"
          content="What Dan Murphy is focused on right now — current work, learning loops, and experiments."
        />
        <link rel="canonical" href="https://danmurphy.work/now" />

        {/* Optional social preview override (falls back to site defaults if omitted) */}
        <meta property="og:title" content="Now · Dan Murphy" />
        <meta
          property="og:description"
          content="Current focus, projects in motion, and what’s next."
        />
        <meta property="og:image" content="/og-image.png" />

        {/* Optional: make it lower-priority in search, but still indexable */}
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large"
        />
      </Helmet>

      <Section>
        <h1 className="visually-hidden">What Dan Murphy is Working on Now</h1>

        <div className="col-span-4 sm:col-span-6 md:col-span-8">
          <div className="page-header">
            <h2>Winter 25/26 Check-In</h2>
            <PageIntro paragraphs={nowIntro} centered />
          </div>

          {/* Now Cards */}
          <div className="case-study-list refined-layout">
            <NowCard
              title="Learning"
              icon={learnIcon}
              alt="red brain icon"
              items={[

                "Guitar: working through John Prine picking patterns and tunes. “How Lucky” is one I keep going back to.",
                "Staying curious: about new AI tools by actually building with them.",
                "Wood carving and small reliefs: I've been seeing other artists dive into this, and I've been starting to test it out."
              ]}
            />

            <NowCard
              title="Reading & Listening"
              icon={readIcon}
              alt="red icon with ear and mouth"
              items={[
                "Sirens Call + Amusing Ourselves to Death: Both heavy reflections on what digital life does on a community and individual level.",
                "Fahrenheit 451 + Brave New World: I’ve been finding a lot of inspiration in science fiction starting to inform how I think about digital design.",
              ]}
            />

            <NowCard
              title="Experiments"
              icon={makeIcon}
              alt="red hand icon"
              items={[
                "Soup season: I’m experimenting with recipes, but also the process — the smell in the kitchen, the pace, the comfort of it.",
                "Prototyping: Carrying on with an online thrift store concept with a literary connections."
              ]}
            />
          </div>

          {/* Section Divider */}
          <div className="section-marker standard-gap">
            <span className="marker-line" aria-hidden="true"></span>
            <span className="marker-icon" aria-hidden="true">
              ✷
            </span>
            <span className="marker-line" aria-hidden="true"></span>
          </div>

          {/* Art Block (no signup) */}
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
  Outside my design work, painting has been part of my life for a long time.
  I paint from observation, memory, and photographs. I love scenes of Boston, old vehicles, and
  classical pieces, often chasing adventures in color and light.
</p>

<p>
  If you want to see what I’ve been working on lately, it’s over at{" "}
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
      </Section>
    </>
  );
}
