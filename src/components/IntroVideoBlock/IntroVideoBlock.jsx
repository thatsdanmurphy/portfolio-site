import React, { useRef, useEffect, useCallback } from "react";
import "./IntroVideoBlock.css";
import introWalk from "../assets/intro-walk.mp4";

export default function IntroVideoBlock({
  ariaLabel = "Intro video",
  startAt = 0,          // seconds to start playback
  holdAt = "end",       // "end" or a number (seconds) to park on
  restartOnClick = true // click/tap/Enter/Space to replay
}) {
  const videoRef = useRef(null);

  const restart = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    try { v.currentTime = Math.max(0, startAt); } catch {}
    v.play().catch(() => {});
  }, [startAt]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onLoaded = () => {
      if (startAt > 0) v.currentTime = Math.max(0, startAt);
      v.play().catch(() => {});
    };

    const onEnded = () => {
      // park on a specific moment (default = last frame)
      const eps = 0.05;
      const target =
        holdAt === "end"
          ? Math.max(0, (v.duration || 0) - eps)
          : Math.max(0, Math.min(Number(holdAt) || 0, (v.duration || 0) - eps));

      try { v.currentTime = target; } catch {}
      v.pause();
    };

    v.addEventListener("loadedmetadata", onLoaded, { once: true });
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, [startAt, holdAt]);

  const handleKeyDown = (e) => {
    if (!restartOnClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      restart();
    }
  };

  return (
    <section className="intro-video-block layout-container" aria-label={ariaLabel}>
      <div
        className="video-wrapper"
        {...(restartOnClick
          ? { role: "button", tabIndex: 0, onClick: restart, onKeyDown: handleKeyDown, "aria-label": "Replay intro video" }
          : {})}
      >
        <video
          ref={videoRef}
          className="intro-video"
          autoPlay
          muted
          playsInline
          preload="metadata"
        >
          <source src={introWalk} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
