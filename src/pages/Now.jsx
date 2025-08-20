// src/pages/Now.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Section from "../components/Section/Section";
import PageIntro from "../components/PageIntro/PageIntro";
import ImageWithFallback from "../components/ImageWithFallback/ImageWithFallback";
import MessageModal from "../components/MessageModal/MessageModal";
import canvasImage from "../components/assets/painting1-thumb.webp";
import learnIcon from "../components/assets/icons/learn.webp";
import readIcon from "../components/assets/icons/read.webp";
import makeIcon from "../components/assets/icons/make.webp";
import NowCard from "../components/NowCard/NowCard";

export default function Now() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // NEW

function handleSubmit() {
  setJustSubmitted(true);
  setIsSending(true); // NEW
}

function handleIframeLoad() {
  if (justSubmitted) {
    setIsSubmitted(true);
    setJustSubmitted(false);
    setIsSending(false); // NEW
  }
}

  const nowIntro = [
    "Here’s what I’m up to as of late."
  ];

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
       <meta property="og:description" content="Current focus, projects in motion, and what’s next." />
       <meta property="og:image" content="/og-image.png" />

        {/* Optional: make it lower‑priority in search, but still indexable */}
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large" />
      </Helmet>
    <Section>
      <h1 className="visually-hidden">What Dan Murphy is Working on Now</h1>
      <div className="col-span-4 sm:col-span-6 md:col-span-8">
        <div className="page-header">
          <h2>Summer 2025 Check-In</h2>
          <PageIntro paragraphs={nowIntro} centered />
        </div>

        {/* Now Cards */}
        <div className="case-study-list refined-layout">
          <NowCard
            title="Learning"
            icon={learnIcon}
            alt="red brain icon"
            items={[
              "Exploring outcomes of past analog revolutions like how trains led to things like map printing and mass labeling, considering how that translates to today.",
              "Working with AI as a partner, prototyping, experimenting, and keeping an eye on what others are digging into.",
              "Practicing Backstreets on guitar. The phrasing in the lyrics is tricky!"
            ]}
          />

          <NowCard
            title="Reading & Listening"
            icon={readIcon}
            alt="red icon with ear and mouth"
            items={[
              "The Nineties: I like cultural reflections. This is one I was actually part of. Wild to see how people used to accept things as fact in a converation without a screen nearby.",
              "Reading Range: carrying the reminder that depth comes from moving wide, not fast.",
              "Following AI Daily Briefing: keeping track of what's going on in the space."
            ]}
          />

          <NowCard
            title="Experiments"
            icon={makeIcon}
            alt="red hand icon"
            items={[
              "Obscure themed dinner parties: part sensory experiment, part artist showcase.",
              "Rebuilt this site from scratch: moved off Squarespace and learned a lot doing it solo.",
              "Expanding my music collection: wandering into new pockets and older corners.",
              "Fishing with my dad and kids: fixing up an old fishing rod and getting outside."
            ]}
          />
        </div>

        {/* Section Divider */}
        <div className="section-marker standard-gap">
          <span className="marker-line" aria-hidden="true"></span>
          <span className="marker-icon" aria-hidden="true">✷</span>
          <span className="marker-line" aria-hidden="true"></span>
        </div>

 {/* Art Signup Block */}
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
          <p>I’m currently stitching together a home for my paintings elsewhere.</p>
          <p>
            If you’re curious, drop your email below. I’ll send a quarterly update with new work
            and stories from the studio.
          </p>

          <form
  className="email-signup-form"
  action="https://docs.google.com/forms/d/e/1FAIpQLSdpkl_2kaH31rXVw0Qo9VOGeGzhiZDpDGMeFmWlykSpWUi1Ew/formResponse"
  method="POST"
  target="hidden_iframe"
  acceptCharset="utf-8"
  onSubmit={handleSubmit}
>
  <input
    type="email"
    name="entry.673783367" /* ← your confirmed entry id */
    placeholder="Your email"
    aria-label="Email address"
    autoComplete="email"
    required
  />
  <input type="hidden" name="fvv" value="1" />
  <input type="hidden" name="pageHistory" value="0" />
  <input type="hidden" name="fbzx" value="956782806872920349" />
  <button type="submit" disabled={isSending}>
    {isSending ? "Sending…" : "Notify Me"}
  </button>
</form>

{/* keep the target iframe OUTSIDE the form */}
<iframe
  name="hidden_iframe"
  title="hidden_iframe"
  style={{ display: "none" }}
  onLoad={handleIframeLoad}
/>

{/* a11y: announce success to screen readers instantly */}
<div aria-live="polite" className="visually-hidden">
  {isSubmitted ? "You're on the list." : ""}
</div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Modal Confirmation */}
{isSubmitted && (
  <MessageModal isOpen={isSubmitted} onClose={() => setIsSubmitted(false)}>
    <h2>You're on the list!</h2>
    <p className="modal-intro">
      Thanks for signing up. You'll hear from me next time I send a studio update.
    </p>
  </MessageModal>
)}
</div> {/* closes: col-span wrapper */}
</Section>
</>
);
}