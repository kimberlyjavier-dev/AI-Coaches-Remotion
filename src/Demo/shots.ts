export type CursorPoint = { x: number; y: number };

export type Shot = {
  id: string;
  phase: string;
  phaseIndex: number;
  image: string;
  caption: string;
  cursorFrom: CursorPoint;
  cursorTo: CursorPoint;
  focal: string;
};

const FPS = 30;

export const wordCount = (s: string) => s.trim().split(/\s+/).length;

export const durationForCaption = (caption: string) => {
  const words = wordCount(caption);
  const frames = Math.round((words / 2.7) * FPS) + 24;
  return Math.max(96, Math.min(150, frames));
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

export const SHOTS: Shot[] = [
  {
    id: "landing",
    phase: "Discover",
    phaseIndex: 0,
    image: "shots/shot-01.png",
    caption: "A visitor arrives and meets the pitch — live, hands-on AI workshops led by working coaches.",
    cursorFrom: { x: 12, y: 88 },
    cursorTo: { x: 50, y: 62 },
    focal: "center 40%",
  },
  {
    id: "signup",
    phase: "Sign up",
    phaseIndex: 1,
    image: "shots/shot-02.png",
    caption: "They tap Get started and sign up with just an email — no password to remember.",
    cursorFrom: { x: 88, y: 90 },
    cursorTo: { x: 50, y: 66 },
    focal: "center",
  },
  {
    id: "tour",
    phase: "Onboard",
    phaseIndex: 2,
    image: "shots/shot-03.png",
    caption: "A short, animated tour shows how booking a workshop works before any forms appear.",
    cursorFrom: { x: 15, y: 15 },
    cursorTo: { x: 72, y: 82 },
    focal: "center",
  },
  {
    id: "focus",
    phase: "Onboard",
    phaseIndex: 2,
    image: "shots/shot-04.png",
    caption: "They choose focus areas and an experience level to personalize things.",
    cursorFrom: { x: 85, y: 20 },
    cursorTo: { x: 38, y: 55 },
    focal: "center",
  },
  {
    id: "allset",
    phase: "Onboard",
    phaseIndex: 2,
    image: "shots/shot-05.png",
    caption: "A quick summary confirms their focus and level — and they're in.",
    cursorFrom: { x: 20, y: 85 },
    cursorTo: { x: 70, y: 80 },
    focal: "center",
  },
  {
    id: "dashtour",
    phase: "Learn the dashboard",
    phaseIndex: 3,
    image: "shots/shot-06.png",
    caption: "A spotlight tour points out where to browse workshops, find bookings, and manage the account.",
    cursorFrom: { x: 10, y: 50 },
    cursorTo: { x: 28, y: 30 },
    focal: "left center",
  },
  {
    id: "workshops",
    phase: "Browse & request",
    phaseIndex: 4,
    image: "shots/shot-07.png",
    caption: "They explore the full catalog of live, hands-on AI workshops.",
    cursorFrom: { x: 90, y: 15 },
    cursorTo: { x: 45, y: 55 },
    focal: "top",
  },
  {
    id: "events",
    phase: "Browse & request",
    phaseIndex: 4,
    image: "shots/shot-08.png",
    caption: "Upcoming Events lists every scheduled, open-enrollment session.",
    cursorFrom: { x: 15, y: 20 },
    cursorTo: { x: 60, y: 60 },
    focal: "top",
  },
  {
    id: "schedule",
    phase: "Browse & request",
    phaseIndex: 4,
    image: "shots/shot-09.png",
    caption: "Need something private? Teams can request a custom session.",
    cursorFrom: { x: 85, y: 85 },
    cursorTo: { x: 55, y: 50 },
    focal: "center",
  },
  {
    id: "booking",
    phase: "Book",
    phaseIndex: 5,
    image: "shots/shot-10.png",
    caption: "They open a recommended workshop, pick a session, and check out in a single form.",
    cursorFrom: { x: 12, y: 90 },
    cursorTo: { x: 78, y: 72 },
    focal: "center",
  },
  {
    id: "confirm",
    phase: "Book",
    phaseIndex: 5,
    image: "shots/shot-11.png",
    caption: "Payment goes through and a confirmation lands instantly.",
    cursorFrom: { x: 88, y: 12 },
    cursorTo: { x: 50, y: 50 },
    focal: "center",
  },
  {
    id: "invoice",
    phase: "Book",
    phaseIndex: 5,
    image: "shots/shot-12.png",
    caption: "A clean, printable invoice is ready right away.",
    cursorFrom: { x: 15, y: 88 },
    cursorTo: { x: 82, y: 20 },
    focal: "top",
  },
  {
    id: "mybookings",
    phase: "Manage",
    phaseIndex: 6,
    image: "shots/shot-13.png",
    caption: "The new session shows up right away in My Bookings.",
    cursorFrom: { x: 85, y: 90 },
    cursorTo: { x: 50, y: 32 },
    focal: "top",
  },
  {
    id: "bookingdetails",
    phase: "Manage",
    phaseIndex: 6,
    image: "shots/shot-14.png",
    caption: "Each booking gets its own page with everything they need.",
    cursorFrom: { x: 10, y: 12 },
    cursorTo: { x: 60, y: 60 },
    focal: "center",
  },
  {
    id: "calendar",
    phase: "Manage",
    phaseIndex: 6,
    image: "shots/shot-15.png",
    caption: "Their calendar pulls in every booked workshop, all in one view.",
    cursorFrom: { x: 90, y: 88 },
    cursorTo: { x: 45, y: 45 },
    focal: "center",
  },
];
