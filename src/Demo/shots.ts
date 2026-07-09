export type CursorPoint = { x: number; y: number };

export type Shot = {
  id: string;
  phase: string;
  image: string;
  script: string;
  nativeWidth: number;
  nativeHeight: number;
  cursorFrom: CursorPoint;
  cursorTo: CursorPoint;
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

const FPS = 30;

// `script` is the voiceover line for this shot (see VOICEOVER_SCRIPT.md for
// the full read-aloud script). Duration is estimated from a natural
// speaking pace so the cut feels right even before real VO is recorded;
// swap in real audio later and these numbers can be nudged to match it.
export const durationForScript = (script: string) => {
  const words = script.trim().split(/\s+/).length;
  const frames = Math.round((words / 2.8) * FPS) + 20;
  return Math.max(70, Math.min(120, frames));
};

export const SHOTS: Shot[] = [
  {
    id: "landing",
    phase: "Discover",
    image: "shots/shot-01.png",
    script: "Meet AI Coaches — live, hands-on workshops.",
    nativeWidth: 908,
    nativeHeight: 540,
    cursorFrom: { x: 0.15, y: 0.9 },
    cursorTo: { x: 0.806, y: 0.067 },
  },
  {
    id: "signup",
    phase: "Sign up",
    image: "shots/shot-02.png",
    script: "Sign up in seconds, with just an email.",
    nativeWidth: 924,
    nativeHeight: 616,
    cursorFrom: { x: 0.85, y: 0.9 },
    cursorTo: { x: 0.64, y: 0.659 },
  },
  {
    id: "tour",
    phase: "Onboard",
    image: "shots/shot-03.png",
    script: "A quick tour shows how booking works.",
    nativeWidth: 1280,
    nativeHeight: 860,
    cursorFrom: { x: 0.15, y: 0.15 },
    cursorTo: { x: 0.818, y: 0.903 },
  },
  {
    id: "focus",
    phase: "Onboard",
    image: "shots/shot-04.png",
    script: "Pick your focus areas, and experience level.",
    nativeWidth: 1280,
    nativeHeight: 860,
    cursorFrom: { x: 0.85, y: 0.2 },
    cursorTo: { x: 0.671, y: 0.326 },
  },
  {
    id: "allset",
    phase: "Onboard",
    image: "shots/shot-05.png",
    script: "All set — the dashboard is ready.",
    nativeWidth: 1280,
    nativeHeight: 860,
    cursorFrom: { x: 0.2, y: 0.85 },
    cursorTo: { x: 0.8, y: 0.903 },
  },
  {
    id: "dashtour",
    phase: "Learn the dashboard",
    image: "shots/shot-06.png",
    script: "A spotlight tour shows you around.",
    nativeWidth: 1280,
    nativeHeight: 860,
    cursorFrom: { x: 0.6, y: 0.5 },
    cursorTo: { x: 0.096, y: 0.145 },
  },
  {
    id: "workshops",
    phase: "Browse & request",
    image: "shots/shot-07.png",
    script: "Browse the full workshop catalog.",
    nativeWidth: 907,
    nativeHeight: 540,
    cursorFrom: { x: 0.9, y: 0.15 },
    cursorTo: { x: 0.153, y: 0.859 },
  },
  {
    id: "workshops-grid",
    phase: "Browse & request",
    image: "shots/shot-07b.png",
    script: "Real sessions, real hosts, real dates.",
    nativeWidth: 1032,
    nativeHeight: 380,
    cursorFrom: { x: 0.85, y: 0.85 },
    cursorTo: { x: 0.186, y: 0.355 },
  },
  {
    id: "events",
    phase: "Browse & request",
    image: "shots/shot-08.png",
    script: "See every upcoming public session.",
    nativeWidth: 907,
    nativeHeight: 540,
    cursorFrom: { x: 0.15, y: 0.2 },
    cursorTo: { x: 0.892, y: 0.787 },
  },
  {
    id: "schedule",
    phase: "Browse & request",
    image: "shots/shot-09.png",
    script: "Need something private? Request a session.",
    nativeWidth: 924,
    nativeHeight: 540,
    cursorFrom: { x: 0.85, y: 0.85 },
    cursorTo: { x: 0.892, y: 0.237 },
  },
  {
    id: "booking",
    phase: "Book",
    image: "shots/shot-10.png",
    script: "Pick a session, and check out fast.",
    nativeWidth: 1423,
    nativeHeight: 843,
    cursorFrom: { x: 0.12, y: 0.9 },
    cursorTo: { x: 0.73, y: 0.95 },
  },
  {
    id: "confirm",
    phase: "Book",
    image: "shots/shot-11.png",
    script: "Booked! Confirmation lands instantly.",
    nativeWidth: 1423,
    nativeHeight: 843,
    cursorFrom: { x: 0.88, y: 0.12 },
    cursorTo: { x: 0.73, y: 0.654 },
  },
  {
    id: "invoice",
    phase: "Book",
    image: "shots/shot-12.png",
    script: "The invoice is ready right away.",
    nativeWidth: 907,
    nativeHeight: 540,
    cursorFrom: { x: 0.15, y: 0.88 },
    cursorTo: { x: 0.858, y: 0.265 },
  },
  {
    id: "mybookings",
    phase: "Manage",
    image: "shots/shot-13.png",
    script: "It shows up in My Bookings.",
    nativeWidth: 908,
    nativeHeight: 1064,
    cursorFrom: { x: 0.85, y: 0.9 },
    cursorTo: { x: 0.248, y: 0.289 },
  },
  {
    id: "bookingdetails",
    phase: "Manage",
    image: "shots/shot-14.png",
    script: "Every booking has its own page.",
    nativeWidth: 924,
    nativeHeight: 540,
    cursorFrom: { x: 0.1, y: 0.12 },
    cursorTo: { x: 0.852, y: 0.228 },
  },
  {
    id: "calendar",
    phase: "Manage",
    image: "shots/shot-15.png",
    script: "The whole schedule, in one calendar.",
    nativeWidth: 924,
    nativeHeight: 540,
    cursorFrom: { x: 0.9, y: 0.88 },
    cursorTo: { x: 0.336, y: 0.744 },
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
