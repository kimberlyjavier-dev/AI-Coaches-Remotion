export type CursorPoint = { x: number; y: number };

export type Shot = {
  id: string;
  phase: string;
  image: string;
  audio: string;
  nativeWidth: number;
  nativeHeight: number;
  cursorFrom: CursorPoint;
  cursorTo: CursorPoint;
  durationInFrames: number;
};

export const PHASES = [
  "Discover",
  "Sign up",
  "Onboard",
  "Learn the dashboard",
  "Browse & request",
  "Book",
  "Manage",
];

// Frame counts are audio-driven: measured narration length (espeak-ng
// placeholder) + a short lead-in/tail so cuts don't clip the voice.
export const SHOTS: Shot[] = [
  {
    id: "landing",
    phase: "Discover",
    image: "shots/shot-01.png",
    audio: "audio/shot-01.wav",
    nativeWidth: 908,
    nativeHeight: 540,
    cursorFrom: { x: 0.15, y: 0.9 },
    cursorTo: { x: 0.806, y: 0.067 },
    durationInFrames: 136,
  },
  {
    id: "signup",
    phase: "Sign up",
    image: "shots/shot-02.png",
    audio: "audio/shot-02.wav",
    nativeWidth: 924,
    nativeHeight: 616,
    cursorFrom: { x: 0.85, y: 0.9 },
    cursorTo: { x: 0.64, y: 0.659 },
    durationInFrames: 94,
  },
  {
    id: "tour",
    phase: "Onboard",
    image: "shots/shot-03.png",
    audio: "audio/shot-03.wav",
    nativeWidth: 1280,
    nativeHeight: 860,
    cursorFrom: { x: 0.15, y: 0.15 },
    cursorTo: { x: 0.818, y: 0.903 },
    durationInFrames: 88,
  },
  {
    id: "focus",
    phase: "Onboard",
    image: "shots/shot-04.png",
    audio: "audio/shot-04.wav",
    nativeWidth: 1280,
    nativeHeight: 860,
    cursorFrom: { x: 0.85, y: 0.2 },
    cursorTo: { x: 0.521, y: 0.209 },
    durationInFrames: 108,
  },
  {
    id: "allset",
    phase: "Onboard",
    image: "shots/shot-05.png",
    audio: "audio/shot-05.wav",
    nativeWidth: 1280,
    nativeHeight: 860,
    cursorFrom: { x: 0.2, y: 0.85 },
    cursorTo: { x: 0.8, y: 0.903 },
    durationInFrames: 83,
  },
  {
    id: "dashtour",
    phase: "Learn the dashboard",
    image: "shots/shot-06.png",
    audio: "audio/shot-06.wav",
    nativeWidth: 1280,
    nativeHeight: 860,
    cursorFrom: { x: 0.6, y: 0.5 },
    cursorTo: { x: 0.096, y: 0.145 },
    durationInFrames: 80,
  },
  {
    id: "workshops",
    phase: "Browse & request",
    image: "shots/shot-07.png",
    audio: "audio/shot-07.wav",
    nativeWidth: 907,
    nativeHeight: 540,
    cursorFrom: { x: 0.9, y: 0.15 },
    cursorTo: { x: 0.153, y: 0.859 },
    durationInFrames: 83,
  },
  {
    id: "events",
    phase: "Browse & request",
    image: "shots/shot-08.png",
    audio: "audio/shot-08.wav",
    nativeWidth: 907,
    nativeHeight: 540,
    cursorFrom: { x: 0.15, y: 0.2 },
    cursorTo: { x: 0.892, y: 0.787 },
    durationInFrames: 86,
  },
  {
    id: "schedule",
    phase: "Browse & request",
    image: "shots/shot-09.png",
    audio: "audio/shot-09.wav",
    nativeWidth: 924,
    nativeHeight: 540,
    cursorFrom: { x: 0.85, y: 0.85 },
    cursorTo: { x: 0.892, y: 0.237 },
    durationInFrames: 108,
  },
  {
    id: "booking",
    phase: "Book",
    image: "shots/shot-10.png",
    audio: "audio/shot-10.wav",
    nativeWidth: 1423,
    nativeHeight: 843,
    cursorFrom: { x: 0.12, y: 0.9 },
    cursorTo: { x: 0.73, y: 0.95 },
    durationInFrames: 90,
  },
  {
    id: "confirm",
    phase: "Book",
    image: "shots/shot-11.png",
    audio: "audio/shot-11.wav",
    nativeWidth: 1423,
    nativeHeight: 843,
    cursorFrom: { x: 0.88, y: 0.12 },
    cursorTo: { x: 0.73, y: 0.654 },
    durationInFrames: 101,
  },
  {
    id: "invoice",
    phase: "Book",
    image: "shots/shot-12.png",
    audio: "audio/shot-12.wav",
    nativeWidth: 907,
    nativeHeight: 540,
    cursorFrom: { x: 0.15, y: 0.88 },
    cursorTo: { x: 0.858, y: 0.265 },
    durationInFrames: 74,
  },
  {
    id: "mybookings",
    phase: "Manage",
    image: "shots/shot-13.png",
    audio: "audio/shot-13.wav",
    nativeWidth: 908,
    nativeHeight: 1064,
    cursorFrom: { x: 0.85, y: 0.9 },
    cursorTo: { x: 0.248, y: 0.289 },
    durationInFrames: 70,
  },
  {
    id: "bookingdetails",
    phase: "Manage",
    image: "shots/shot-14.png",
    audio: "audio/shot-14.wav",
    nativeWidth: 924,
    nativeHeight: 540,
    cursorFrom: { x: 0.1, y: 0.12 },
    cursorTo: { x: 0.852, y: 0.228 },
    durationInFrames: 80,
  },
  {
    id: "calendar",
    phase: "Manage",
    image: "shots/shot-15.png",
    audio: "audio/shot-15.wav",
    nativeWidth: 924,
    nativeHeight: 540,
    cursorFrom: { x: 0.9, y: 0.88 },
    cursorTo: { x: 0.336, y: 0.744 },
    durationInFrames: 87,
  },
];

// Canvas is 1920x1080. The stage box is where screenshots are contained
// (never cropped) so they stay crisp; upscale is capped to avoid blur.
export const CANVAS_WIDTH = 1920;
export const CANVAS_HEIGHT = 1080;
export const STAGE_WIDTH = 1760;
export const STAGE_HEIGHT = 900;
export const MAX_UPSCALE = 1.4;

export const computeStageRect = (nativeWidth: number, nativeHeight: number) => {
  const scale = Math.min(
    STAGE_WIDTH / nativeWidth,
    STAGE_HEIGHT / nativeHeight,
    MAX_UPSCALE
  );
  const width = nativeWidth * scale;
  const height = nativeHeight * scale;
  const left = (CANVAS_WIDTH - width) / 2;
  const top = (CANVAS_HEIGHT - height) / 2;
  return { left, top, width, height };
};
