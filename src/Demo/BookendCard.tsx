import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors, fontFamily, heroGradient } from "./theme";
import { Chip, LogoMark } from "./primitives";

export const IntroCard: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15, 105, 120], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 15], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: heroGradient,
        backgroundColor: colors.purple600,
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <div style={{ textAlign: "center", transform: `translateY(${y}px)`, maxWidth: 1100 }}>
        <Chip solid>Video storyboard · User journey</Chip>
        <div
          style={{
            fontFamily,
            fontWeight: 800,
            fontSize: 72,
            color: "#fff",
            marginTop: 24,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          From first visit to first booking
        </div>
        <div
          style={{
            fontFamily,
            fontSize: 20,
            color: "rgba(255,255,255,0.85)",
            marginTop: 22,
          }}
        >
          A walkthrough of the AI Coaches experience — from landing page to a fully managed
          booking.
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const OutroCard: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: heroGradient,
        backgroundColor: colors.purple600,
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ transform: "scale(2)", display: "inline-block" }}>
          <LogoMark dark size={22} />
        </div>
        <div
          style={{
            fontFamily,
            fontSize: 20,
            color: "rgba(255,255,255,0.85)",
            marginTop: 26,
          }}
        >
          aicoaches.com
        </div>
      </div>
    </AbsoluteFill>
  );
};
