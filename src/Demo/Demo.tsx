import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { IntroCard, OutroCard } from "./BookendCard";
import { PhaseCard } from "./PhaseCard";
import { ShotScene } from "./ShotScene";
import { PHASES, SHOTS } from "./shots";

export const INTRO_DURATION = 120;
export const PHASE_DURATION = 60;
export const SHOT_DURATION = 180;
export const OUTRO_DURATION = 120;

export const DEMO_DURATION_IN_FRAMES =
  INTRO_DURATION +
  PHASES.length * PHASE_DURATION +
  SHOTS.length * SHOT_DURATION +
  OUTRO_DURATION;

export const Demo: React.FC = () => {
  let cursor = 0;
  const introFrom = cursor;
  cursor += INTRO_DURATION;

  const phaseBlocks = PHASES.map((phase, phaseIndex) => {
    const phaseFrom = cursor;
    cursor += PHASE_DURATION;
    const shots = SHOTS.filter((s) => s.phase === phase).map((shot) => {
      const shotFrom = cursor;
      cursor += SHOT_DURATION;
      return { shot, from: shotFrom };
    });
    return { phase, phaseIndex, from: phaseFrom, shots };
  });

  const outroFrom = cursor;

  return (
    <AbsoluteFill>
      <Sequence from={introFrom} durationInFrames={INTRO_DURATION}>
        <IntroCard />
      </Sequence>
      {phaseBlocks.map((block) => (
        <React.Fragment key={block.phase}>
          <Sequence from={block.from} durationInFrames={PHASE_DURATION}>
            <PhaseCard index={block.phaseIndex + 1} total={PHASES.length} name={block.phase} />
          </Sequence>
          {block.shots.map(({ shot, from }) => (
            <Sequence key={shot.id} from={from} durationInFrames={SHOT_DURATION}>
              <ShotScene shot={shot} />
            </Sequence>
          ))}
        </React.Fragment>
      ))}
      <Sequence from={outroFrom} durationInFrames={OUTRO_DURATION}>
        <OutroCard />
      </Sequence>
    </AbsoluteFill>
  );
};
