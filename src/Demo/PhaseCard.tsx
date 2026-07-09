import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors, fontFamily } from "./theme";
import { Chip } from "./primitives";

export const PhaseCard: React.FC<{
  index: number;
  total: number;
  name: string;
}> = ({ index, total, name }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10, 50, 60], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 10], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: colors.bg,
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <div style={{ transform: `translateY(${y}px)`, textAlign: "center" }}>
        <Chip light>
          Phase {index} of {total}
        </Chip>
        <div
          style={{
            fontFamily,
            fontWeight: 800,
            fontSize: 64,
            letterSpacing: "-0.03em",
            color: colors.ink,
            marginTop: 22,
          }}
        >
          {name}
        </div>
      </div>
    </AbsoluteFill>
  );
};
