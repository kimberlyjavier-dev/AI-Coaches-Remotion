import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import type { Shot } from "./shots";
import { Cursor } from "./Cursor";
import { Caption } from "./Caption";
import { colors, fontFamily } from "./theme";

export const ShotScene: React.FC<{ shot: Shot; durationInFrames: number; shotNumber: number }> = ({
  shot,
  durationInFrames,
  shotNumber,
}) => {
  const frame = useCurrentFrame();

  const sceneOpacity = interpolate(
    frame,
    [0, 8, durationInFrames - 8, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const zoom = interpolate(frame, [0, durationInFrames], [1, 1.055], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const chipOpacity = interpolate(frame, [0, 10, durationInFrames - 20, durationInFrames - 10], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0816", opacity: sceneOpacity }}>
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <Img
          src={staticFile(shot.image)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: shot.focal,
            transform: `scale(${zoom})`,
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.0) 58%, rgba(5,3,14,0.78) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 176,
          left: 48,
          display: "flex",
          alignItems: "center",
          gap: 10,
          opacity: chipOpacity,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: colors.purple400,
            color: "#fff",
            fontFamily,
            fontWeight: 800,
            fontSize: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 14px rgba(109,40,217,0.5)",
          }}
        >
          {shotNumber}
        </div>
        <div
          style={{
            fontFamily,
            fontSize: 15,
            fontWeight: 700,
            color: "#fff",
            background: "rgba(10,8,22,0.55)",
            padding: "6px 14px",
            borderRadius: 999,
            letterSpacing: "0.01em",
          }}
        >
          {shot.phase}
        </div>
      </div>

      <Cursor from={shot.cursorFrom} to={shot.cursorTo} />
      <Caption text={shot.caption} durationInFrames={durationInFrames} />
    </AbsoluteFill>
  );
};
