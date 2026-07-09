import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";
import type { CursorPoint } from "./shots";

const MOVE_START = 6;
const MOVE_END = 34;
const CLICK_FRAME = 40;

export const Cursor: React.FC<{ from: CursorPoint; to: CursorPoint }> = ({ from, to }) => {
  const frame = useCurrentFrame();

  const x = interpolate(frame, [MOVE_START, MOVE_END], [from.x, to.x], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const y = interpolate(frame, [MOVE_START, MOVE_END], [from.y, to.y], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const opacity = interpolate(frame, [0, MOVE_START], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const clickScale = interpolate(
    frame,
    [CLICK_FRAME - 4, CLICK_FRAME, CLICK_FRAME + 10],
    [1, 0.82, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const rippleProgress = interpolate(frame, [CLICK_FRAME, CLICK_FRAME + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rippleOpacity = interpolate(frame, [CLICK_FRAME, CLICK_FRAME + 18], [0.55, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-8%, -8%)",
        opacity,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 34,
          height: 34,
          borderRadius: "50%",
          border: "3px solid #fff",
          transform: `translate(-50%, -50%) scale(${1 + rippleProgress * 1.6})`,
          opacity: rippleOpacity,
        }}
      />
      <svg
        width="30"
        height="38"
        viewBox="0 0 30 38"
        style={{
          transform: `scale(${clickScale})`,
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.45))",
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
