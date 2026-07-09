import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { IntroCard, OutroCard } from "./BookendCard";
import { ShotScene } from "./ShotScene";
import { SHOTS } from "./shots";

export const INTRO_DURATION = 94;
export const OUTRO_DURATION = 45;

export const DEMO_DURATION_IN_FRAMES =
  INTRO_DURATION +
  SHOTS.reduce((total, shot) => total + shot.durationInFrames, 0) +
  OUTRO_DURATION;

export const Demo: React.FC = () => {
  let cursor = INTRO_DURATION;

  const blocks = SHOTS.map((shot, i) => {
    const from = cursor;
    cursor += shot.durationInFrames;
    return { shot, from, shotNumber: i + 1 };
  });

  const outroFrom = cursor;

  return (
    <AbsoluteFill>
      <Sequence durationInFrames={INTRO_DURATION}>
        <IntroCard durationInFrames={INTRO_DURATION} />
      </Sequence>
      {blocks.map(({ shot, from, shotNumber }) => (
        <Sequence key={shot.id} from={from} durationInFrames={shot.durationInFrames}>
          <ShotScene shot={shot} shotNumber={shotNumber} />
        </Sequence>
      ))}
      <Sequence from={outroFrom} durationInFrames={OUTRO_DURATION}>
        <OutroCard durationInFrames={OUTRO_DURATION} />
      </Sequence>
    </AbsoluteFill>
  );
};
