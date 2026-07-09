import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { colors, fontFamily } from "./theme";
import { Chip, NumBadge } from "./primitives";

export const CaptionBar: React.FC<{
  shotNumber: number;
  title: string;
  voiceover: string;
  onScreen: string;
}> = ({ shotNumber, title, voiceover, onScreen }) => {
  const frame = useCurrentFrame();
  const y = interpolate(frame, [0, 12], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: 90,
        bottom: 80,
        right: 90,
        display: "flex",
        alignItems: "center",
        gap: 22,
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <NumBadge n={shotNumber} />
      <div
        style={{
          background: "rgba(255,255,255,0.97)",
          borderRadius: 16,
          padding: "18px 28px",
          boxShadow: "0 20px 40px -14px rgba(20,18,40,0.35)",
          maxWidth: 900,
        }}
      >
        <div
          style={{
            fontFamily,
            fontWeight: 800,
            fontSize: 26,
            color: colors.ink,
            letterSpacing: "-0.02em",
            marginBottom: 6,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily,
            fontSize: 16,
            color: colors.inkMuted,
            marginBottom: 12,
            lineHeight: 1.4,
          }}
        >
          {voiceover}
        </div>
        <Chip light>{onScreen}</Chip>
      </div>
    </div>
  );
};
