import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors } from "./theme";
import { BrowserFrame } from "./primitives";
import { CaptionBar } from "./CaptionBar";
import type { Shot } from "./shots";

export const ShotScene: React.FC<{ shot: Shot }> = ({ shot }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 15], [0.97, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const { Content } = shot;

  return (
    <AbsoluteFill style={{ background: colors.bg }}>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 60,
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        <BrowserFrame url={shot.url} width={1540} height={800}>
          <Content />
        </BrowserFrame>
      </AbsoluteFill>
      <CaptionBar
        shotNumber={shot.id}
        title={shot.title}
        voiceover={shot.voiceover}
        onScreen={shot.onScreen}
      />
    </AbsoluteFill>
  );
};
