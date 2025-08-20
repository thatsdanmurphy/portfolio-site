// src/components/SubtitleRotator/SubtitleRotator.jsx
import React from "react";
import "./SubtitleRotator.css";

export default function SubtitleRotator() {
  const subtitles = [
    "Making early ideas real to drive adoption.",
    "Formerly Motional, Fidelity, Accenture.",
    "Always designing, often painting."
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % subtitles.length);
    }, 2500); // rotate every 2.5 seconds
    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <div className="subtitle-rotator">
      <p>{subtitles[index]}</p>
    </div>
  );
}
