import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  Easing,
} from "remotion";
import type { Shot } from "./shots";
import { computeStageRect } from "./shots";
import { Cursor } from "./Cursor";
import { colors, fontFamily, heroGradient } from "./theme";

export const ShotScene: React.FC<{ shot: Shot; shotNumber: number }> = ({
  shot,
  shotNumber,
}) => {
  const frame = useCurrentFrame();
  const durationInFrames = shot.durationInFrames;

  const entrance = interpolate(frame, [0, 9], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.6)),
  });
  const exit = interpolate(
    frame,
    [durationInFrames - 6, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const opacity = Math.min(entrance, exit);
  const scale = interpolate(entrance, [0, 1], [0.95, 1]);

  const chipOpacity = interpolate(
    frame,
    [0, 8, durationInFrames - 10, durationInFrames - 4],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const stage = computeStageRect(shot.nativeWidth, shot.nativeHeight);

  return (
    <AbsoluteFill style={{ background: heroGradient, backgroundColor: colors.purple600 }}>
      <Audio src={staticFile(shot.audio)} />
      <AbsoluteFill style={{ opacity, transform: `scale(${scale})` }}>
        <div
          style={{
            position: "absolute",
            left: stage.left,
            top: stage.top,
            width: stage.width,
            height: stage.height,
            borderRadius: 10,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          }}
        >
          <Img
            src={staticFile(shot.image)}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 36,
            right: 40,
            display: "flex",
            alignItems: "center",
            gap: 10,
            opacity: chipOpacity,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: colors.purple400,
              color: "#fff",
              fontFamily,
              fontWeight: 800,
              fontSize: 14,
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
              fontSize: 14,
              fontWeight: 700,
              color: "#fff",
              background: "rgba(10,8,22,0.55)",
              padding: "5px 12px",
              borderRadius: 999,
              letterSpacing: "0.01em",
            }}
          >
            {shot.phase}
          </div>
        </div>

        <Cursor from={shot.cursorFrom} to={shot.cursorTo} stage={stage} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
