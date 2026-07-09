import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { colors, fontFamily, heroGradient } from "./theme";

export const IntroCard: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10, durationInFrames - 8, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 12], [20, 0], {
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
      <div style={{ textAlign: "center", transform: `translateY(${y}px)`, maxWidth: 1200 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 30,
          }}
        >
          <Img src={staticFile("brand/logo-icon.png")} style={{ height: 40 }} />
          <span
            style={{
              fontFamily,
              fontWeight: 800,
              fontSize: 26,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            AI Coaches
          </span>
        </div>
        <div
          style={{
            fontFamily,
            fontWeight: 800,
            fontSize: 68,
            color: "#fff",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          From first visit to first booking
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const OutroCard: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, durationInFrames], [0.96, 1], {
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
      <div style={{ textAlign: "center", transform: `scale(${scale})` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <Img src={staticFile("brand/logo-icon.png")} style={{ height: 52 }} />
          <span
            style={{
              fontFamily,
              fontWeight: 800,
              fontSize: 34,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            AI Coaches
          </span>
        </div>
        <div
          style={{
            fontFamily,
            fontSize: 22,
            color: "rgba(255,255,255,0.85)",
            marginTop: 22,
          }}
        >
          aicoaches.com
        </div>
      </div>
    </AbsoluteFill>
  );
};
