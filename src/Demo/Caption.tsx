import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { fontFamily } from "./theme";

const START_FRAME = 10;

export const Caption: React.FC<{ text: string; durationInFrames: number }> = ({
  text,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const words = text.split(" ");

  const endFrame = durationInFrames - 14;
  const activeWindow = Math.max(endFrame - START_FRAME, 1);
  const perWord = activeWindow / words.length;

  const containerOpacity = interpolate(
    frame,
    [0, START_FRAME, durationInFrames - 10, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 64,
        display: "flex",
        justifyContent: "center",
        opacity: containerOpacity,
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          padding: "20px 40px",
          borderRadius: 20,
          background: "rgba(10, 8, 22, 0.62)",
          backdropFilter: "blur(6px)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0 12px",
        }}
      >
        {words.map((word, i) => {
          const wordStart = START_FRAME + i * perWord;
          const active = frame >= wordStart;
          const justActivated = interpolate(
            frame,
            [wordStart, wordStart + 6],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          return (
            <span
              key={i}
              style={{
                fontFamily,
                fontSize: 40,
                fontWeight: 800,
                letterSpacing: "-0.01em",
                color: active ? "#ffffff" : "rgba(255,255,255,0.42)",
                transform: `translateY(${active ? (1 - justActivated) * 6 : 0}px)`,
                textShadow: active
                  ? "0 2px 14px rgba(139,92,246,0.55)"
                  : "none",
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
