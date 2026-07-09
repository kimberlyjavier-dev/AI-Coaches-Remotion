import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";
import type { CursorPoint } from "./shots";

const MOVE_START = 4;
const MOVE_END = 16;
const CLICK_FRAME = 20;

export const Cursor: React.FC<{
  from: CursorPoint;
  to: CursorPoint;
  stage: { left: number; top: number; width: number; height: number };
}> = ({ from, to, stage }) => {
  const frame = useCurrentFrame();

  const fx = interpolate(frame, [MOVE_START, MOVE_END], [from.x, to.x], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const fy = interpolate(frame, [MOVE_START, MOVE_END], [from.y, to.y], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const x = stage.left + fx * stage.width;
  const y = stage.top + fy * stage.height;

  const opacity = interpolate(frame, [0, MOVE_START], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const clickScale = interpolate(
    frame,
    [CLICK_FRAME - 3, CLICK_FRAME, CLICK_FRAME + 7],
    [1, 0.8, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const rippleProgress = interpolate(frame, [CLICK_FRAME, CLICK_FRAME + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rippleOpacity = interpolate(frame, [CLICK_FRAME, CLICK_FRAME + 14], [0.6, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        opacity,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "3px solid #fff",
          transform: `translate(-50%, -50%) scale(${1 + rippleProgress * 1.5})`,
          opacity: rippleOpacity,
        }}
      />
      <svg
        width="28"
        height="36"
        viewBox="0 0 30 38"
        style={{
          transform: `scale(${clickScale})`,
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
        }}
      >
        <path
          d="M2 2 L2 30 L9.5 23.5 L14 33.5 L18.5 31.5 L14 21.5 L24 21.5 Z"
          fill="#ffffff"
          stroke="#15122b"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
