import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { IntroCard, OutroCard } from "./BookendCard";
import { ShotScene } from "./ShotScene";
import { SHOTS, durationForCaption } from "./shots";

export const INTRO_DURATION = 60;
export const OUTRO_DURATION = 60;

const shotDurations = SHOTS.map((s) => durationForCaption(s.caption));

export const DEMO_DURATION_IN_FRAMES =
  INTRO_DURATION + shotDurations.reduce((a, b) => a + b, 0) + OUTRO_DURATION;

export const Demo: React.FC = () => {
  let cursor = INTRO_DURATION;

  const blocks = SHOTS.map((shot, i) => {
    const from = cursor;
    const durationInFrames = shotDurations[i];
    cursor += durationInFrames;
    return { shot, from, durationInFrames, shotNumber: i + 1 };
  });

  const outroFrom = cursor;

  return (
    <AbsoluteFill>
      <Sequence durationInFrames={INTRO_DURATION}>
        <IntroCard durationInFrames={INTRO_DURATION} />
      </Sequence>
      {blocks.map(({ shot, from, durationInFrames, shotNumber }) => (
        <Sequence key={shot.id} from={from} durationInFrames={durationInFrames}>
          <ShotScene shot={shot} durationInFrames={durationInFrames} shotNumber={shotNumber} />
        </Sequence>
      ))}
      <Sequence from={outroFrom} durationInFrames={OUTRO_DURATION}>
        <OutroCard durationInFrames={OUTRO_DURATION} />
      </Sequence>
    </AbsoluteFill>
  );
};
