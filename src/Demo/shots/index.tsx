import React from "react";
import { colors, fontFamily, heroGradient, sidebarGradient } from "../theme";
import { Btn, Chip, LogoMark } from "../primitives";

const TopNav: React.FC<{ dark?: boolean; active?: string }> = ({ dark, active }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 32px",
      borderBottom: dark ? "1px solid rgba(255,255,255,0.12)" : `1px solid ${colors.line}`,
    }}
  >
    <LogoMark dark={dark} />
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Chip light={!dark}>Ask AI · Beta</Chip>
      {active ? (
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#f1c0e0,#a48cd9)",
          }}
        />
      ) : null}
    </div>
  </div>
);

const Hero: React.FC<{ children: React.ReactNode; pad?: number }> = ({ children, pad = 48 }) => (
  <div
    style={{
      background: heroGradient,
      backgroundColor: colors.purple600,
      color: "#fff",
      padding: pad,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

const Sidebar: React.FC<{ items: string[]; active: number }> = ({ items, active }) => (
  <div
    style={{
      width: 190,
      background: colors.bg,
      borderRight: `1px solid ${colors.line}`,
      padding: "20px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 4,
    }}
  >
    {items.map((it, i) => (
      <div
        key={it}
        style={{
          fontFamily,
          fontSize: 13,
          fontWeight: 600,
          padding: "10px 12px",
          borderRadius: 8,
          color: i === active ? colors.purple600 : colors.inkMuted,
          background: i === active ? colors.purple100 : "transparent",
        }}
      >
        {it}
      </div>
    ))}
  </div>
);

const Field: React.FC<{ label: string; value: string; tag?: string }> = ({
  label,
  value,
  tag,
}) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ fontFamily, fontSize: 12, fontWeight: 600, color: colors.inkMuted, marginBottom: 6 }}>
      {label}
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        border: `1px solid ${colors.lineStrong}`,
        borderRadius: 8,
        padding: "11px 13px",
        fontFamily,
        fontSize: 14,
        color: colors.ink,
      }}
    >
      {value}
      {tag ? <Chip light>{tag}</Chip> : null}
    </div>
  </div>
);

// Shot 01 — Land on AICoaches.com
const Landing: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
    <TopNav active />
    <Hero pad={64}>
      <div style={{ fontFamily, fontWeight: 800, fontSize: 46, lineHeight: 1.08, maxWidth: 760 }}>
        Embrace AI as a strategic partner for business transformation.
      </div>
      <div style={{ fontFamily, fontSize: 16, opacity: 0.85, marginTop: 18, maxWidth: 620 }}>
        We help business leaders embed AI advisors, tools, and training so their
        organizations ship real AI use cases, upskill teams, and unlock enterprise value in 90
        days.
      </div>
      <div style={{ marginTop: 30 }}>
        <Btn variant="amber">Get started</Btn>
      </div>
    </Hero>
  </div>
);

// Shot 02 — Create an account
const SignUp: React.FC = () => (
  <div style={{ display: "flex", height: "100%" }}>
    <div
      style={{
        width: 380,
        background: sidebarGradient,
        color: "#fff",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ fontFamily, fontWeight: 800, fontSize: 32, lineHeight: 1.1 }}>
        Learn AI from the people who build with it.
      </div>
      <div style={{ fontFamily, fontSize: 14, opacity: 0.8, marginTop: 16 }}>
        Browse, book, and attend hands-on workshops led by working AI coaches.
      </div>
    </div>
    <div style={{ flex: 1, padding: 48, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontFamily, fontWeight: 800, fontSize: 28, color: colors.ink, marginBottom: 22 }}>
        Create your account
      </div>
      <Btn variant="ghost">Continue with Google</Btn>
      <div style={{ marginTop: 22 }}>
        <Field label="Full name" value="Jordan Lee" />
        <Field label="Email" value="jordan@company.com" tag="Email · no password" />
      </div>
      <div style={{ marginTop: 8 }}>
        <Btn>Send sign-in code →</Btn>
      </div>
    </div>
  </div>
);

// Shot 03 — Take the welcome tour
const WelcomeTour: React.FC = () => (
  <div style={{ display: "flex", height: "100%", background: colors.bg }}>
    <Sidebar items={["Welcome", "Focus", "All set"]} active={0} />
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
      <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
        <div>
          <div style={{ fontFamily, fontWeight: 800, fontSize: 34, color: colors.ink, maxWidth: 300 }}>
            Let's get you started.
          </div>
          <div style={{ fontFamily, fontSize: 14, color: colors.inkMuted, marginTop: 12, maxWidth: 280 }}>
            Take a quick tour of how AI Coaches works — then we'll tailor your recommendations.
          </div>
          <div style={{ marginTop: 20 }}>
            <Btn>Next step →</Btn>
          </div>
        </div>
        <div
          style={{
            width: 420,
            height: 300,
            borderRadius: 16,
            background: sidebarGradient,
            display: "flex",
            alignItems: "flex-start",
            padding: 24,
          }}
        >
          <Chip solid>Animated welcome tour</Chip>
        </div>
      </div>
    </div>
  </div>
);

// Shot 04 — Set your focus
const FOCUS_AREAS = ["Prompt engineering", "Building AI workflows", "AI for marketing", "AI strategy & ops"];
const FocusStep: React.FC = () => (
  <div style={{ display: "flex", height: "100%", background: colors.bg }}>
    <Sidebar items={["Welcome", "Focus", "All set"]} active={1} />
    <div style={{ flex: 1, padding: 40 }}>
      <Chip light>Pick focus areas</Chip>
      <div style={{ fontFamily, fontWeight: 800, fontSize: 30, color: colors.ink, marginTop: 14 }}>
        Tell us what you're into.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 24, maxWidth: 560 }}>
        {FOCUS_AREAS.map((f, i) => (
          <div
            key={f}
            style={{
              fontFamily,
              fontSize: 14,
              fontWeight: 600,
              padding: "14px 16px",
              borderRadius: 10,
              border: `2px solid ${i < 2 ? colors.purple500 : colors.line}`,
              background: i < 2 ? colors.purple50 : "#fff",
              color: i < 2 ? colors.purple600 : colors.ink,
            }}
          >
            {f}
          </div>
        ))}
      </div>
      <div style={{ fontFamily, fontSize: 13, fontWeight: 700, color: colors.inkMuted, marginTop: 28, marginBottom: 10 }}>
        YOUR EXPERIENCE LEVEL
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {["New", "Some experience", "Advanced"].map((l, i) => (
          <Chip key={l} light={i === 1}>
            {l}
          </Chip>
        ))}
      </div>
    </div>
  </div>
);

// Shot 05 — Confirm your setup
const AllSet: React.FC = () => (
  <div style={{ display: "flex", height: "100%", background: colors.bg }}>
    <Sidebar items={["Welcome", "Focus", "All set"]} active={2} />
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 32,
          width: 460,
          boxShadow: "0 20px 50px -20px rgba(20,18,40,0.25)",
        }}
      >
        <div style={{ fontFamily, fontWeight: 800, fontSize: 24, color: colors.ink, marginBottom: 18 }}>
          You're all set, Jordan.
        </div>
        {[
          ["Focus areas", "Prompt engineering, Building AI workflows"],
          ["Experience", "Some experience"],
        ].map(([k, v]) => (
          <div
            key={k}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderTop: `1px solid ${colors.line}`,
              fontFamily,
              fontSize: 13,
            }}
          >
            <span style={{ color: colors.inkMuted }}>{k}</span>
            <span style={{ color: colors.ink, fontWeight: 600 }}>{v}</span>
          </div>
        ))}
        <div style={{ marginTop: 20 }}>
          <Btn>Go to dashboard</Btn>
        </div>
      </div>
    </div>
  </div>
);

// Shot 06 — Get the lay of the land (dashboard spotlight tour)
const DashboardTour: React.FC = () => (
  <div style={{ display: "flex", height: "100%", background: colors.bg }}>
    <Sidebar items={["Dashboard", "Browse workshops", "My bookings", "Schedule requests"]} active={1} />
    <div style={{ flex: 1, padding: 32, position: "relative" }}>
      <div style={{ fontFamily, fontWeight: 800, fontSize: 24, color: colors.ink }}>Dashboard</div>
      <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
        {[
          ["12", "Workshops attended"],
          ["3", "Upcoming"],
          ["$1,240", "Total spend"],
        ].map(([n, l]) => (
          <div
            key={l}
            style={{
              flex: 1,
              background: "#fff",
              border: `1px solid ${colors.line}`,
              borderRadius: 10,
              padding: 16,
            }}
          >
            <div style={{ fontFamily, fontWeight: 800, fontSize: 22, color: colors.purple600 }}>{n}</div>
            <div style={{ fontFamily, fontSize: 12, color: colors.inkMuted, marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ fontFamily, fontSize: 13, fontWeight: 700, color: colors.inkMuted, marginTop: 24, marginBottom: 10 }}>
        RECOMMENDED FOR YOU
      </div>
      <div style={{ display: "flex", gap: 14 }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ flex: 1, height: 80, borderRadius: 10, background: colors.bgTint }} />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: 205,
          top: 68,
          background: colors.purple600,
          color: "#fff",
          borderRadius: 10,
          padding: "10px 16px",
          fontFamily,
          fontSize: 13,
          fontWeight: 700,
          boxShadow: "0 10px 24px -8px rgba(109,40,217,0.6)",
        }}
      >
        Spotlight tour · Browse workshops
      </div>
    </div>
  </div>
);

// Shot 07 — Browse the workshops
const WorkshopsOverview: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
    <TopNav active />
    <Hero>
      <Chip solid>Flagship workshop</Chip>
      <div style={{ fontFamily, fontWeight: 800, fontSize: 38, marginTop: 16, maxWidth: 700, lineHeight: 1.1 }}>
        The AI Sweet Spot for C-Suite, Leaders & Executives
      </div>
      <div style={{ fontFamily, fontSize: 14, opacity: 0.85, marginTop: 12, maxWidth: 560 }}>
        The comprehensive AI strategy and implementation workshop for senior leadership teams.
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
        <Btn variant="amber">Browse all workshops</Btn>
        <Btn variant="ghostLight">Book a private workshop</Btn>
      </div>
    </Hero>
  </div>
);

// Shot 08 — Check what's coming up
const UpcomingEvents: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
    <TopNav active />
    <Hero>
      <div style={{ fontFamily, fontWeight: 800, fontSize: 36 }}>Upcoming Public Events</div>
      <div style={{ fontFamily, fontSize: 14, opacity: 0.85, marginTop: 10, maxWidth: 480 }}>
        Register for scheduled open-enrollment sessions. Virtual and in-person options available.
      </div>
      <div
        style={{
          marginTop: 26,
          background: "#fff",
          borderRadius: 12,
          padding: 20,
          width: 420,
          color: colors.ink,
        }}
      >
        <Chip light>Seats filling fast</Chip>
        <div style={{ fontFamily, fontWeight: 700, fontSize: 17, marginTop: 10 }}>
          AI Sweet Spot · Next Cohort
        </div>
        <div style={{ fontFamily, fontSize: 13, color: colors.inkMuted, marginTop: 6 }}>
          June 27, 2026 · 09:00 EDT · Full day · 7 hours live
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
          <div style={{ fontFamily, fontWeight: 800, fontSize: 22 }}>$349 / seat</div>
          <Btn small>Register now</Btn>
        </div>
      </div>
    </Hero>
  </div>
);

// Shot 09 — Request a custom session
const ScheduleRequests: React.FC = () => (
  <div style={{ display: "flex", height: "100%", background: colors.bg }}>
    <Sidebar items={["Dashboard", "Browse workshops", "Bookings", "Schedule requests"]} active={3} />
    <div style={{ flex: 1, padding: 36 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily, fontWeight: 800, fontSize: 24, color: colors.ink }}>Schedule Requests</div>
        <Btn small>Request a session</Btn>
      </div>
      <div style={{ marginTop: 22, borderTop: `1px solid ${colors.line}` }}>
        {[
          ["AI governance & safety", "Aug 28, 2026", "Hybrid · Makati", "40"],
          ["Building RAG applications", "Sep 3, 2026", "Manila, PH", "12"],
        ].map((row) => (
          <div
            key={row[0]}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              padding: "16px 4px",
              borderBottom: `1px solid ${colors.line}`,
              fontFamily,
              fontSize: 13.5,
              color: colors.ink,
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: 600 }}>{row[0]}</span>
            <span style={{ color: colors.inkMuted }}>{row[1]}</span>
            <span style={{ color: colors.inkMuted }}>{row[2]}</span>
            <span style={{ color: colors.inkMuted }}>{row[3]} participants</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Shot 10 — Reserve a seat / Shot 11 — You're booked
const WorkshopBooking: React.FC<{ booked?: boolean }> = ({ booked }) => (
  <div style={{ display: "flex", height: "100%" }}>
    <div style={{ flex: 1, background: heroGradient, backgroundColor: colors.purple600, color: "#fff", padding: 44 }}>
      <Chip solid>2 seats available</Chip>
      <div style={{ fontFamily, fontWeight: 800, fontSize: 32, marginTop: 16, maxWidth: 380 }}>
        AI Agent Mastery for Sales
      </div>
      <div style={{ fontFamily, fontSize: 14, opacity: 0.85, marginTop: 10, maxWidth: 360 }}>
        Equip sales teams with AI tools to automate prospecting and improve forecasting.
      </div>
      <div style={{ fontFamily, fontWeight: 800, fontSize: 30, marginTop: 22 }}>$189.00</div>
    </div>
    <div style={{ width: 360, padding: 32, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {booked ? (
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: colors.purple50,
              color: colors.purple500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              fontFamily,
              fontWeight: 800,
              fontSize: 26,
            }}
          >
            ✓
          </div>
          <div style={{ fontFamily, fontWeight: 800, fontSize: 20, color: colors.ink }}>You're booked</div>
          <div style={{ fontFamily, fontSize: 13, color: colors.inkMuted, marginTop: 8 }}>
            June 29, 2026 · 8:00 AM · 1 seat reserved
          </div>
          <div style={{ marginTop: 18 }}>
            <Btn small>View my bookings</Btn>
          </div>
        </div>
      ) : (
        <>
          <div style={{ fontFamily, fontWeight: 800, fontSize: 20, color: colors.ink, marginBottom: 16 }}>
            Reserve a seat
          </div>
          <Field label="Full name" value="Jordan Lee" />
          <Field label="Number of seats" value="1" />
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily, fontSize: 14, fontWeight: 700, margin: "14px 0" }}>
            <span>Total</span>
            <span>$189.00</span>
          </div>
          <Btn>Complete payment</Btn>
        </>
      )}
    </div>
  </div>
);

// Shot 12 — Get the receipt
const Invoice: React.FC = () => (
  <div style={{ height: "100%", background: colors.bg, padding: 44 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <LogoMark />
      <Btn small variant="ghost">Download PDF</Btn>
    </div>
    <div style={{ background: "#fff", borderRadius: 14, padding: 32, marginTop: 24, boxShadow: "0 1px 2px rgba(20,18,40,0.05)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontFamily, fontWeight: 800, fontSize: 26, color: colors.ink, letterSpacing: "0.02em" }}>
          INVOICE
        </div>
        <Chip light>Paid</Chip>
      </div>
      <div style={{ display: "flex", gap: 60, marginTop: 26, fontFamily, fontSize: 13 }}>
        <div>
          <div style={{ color: colors.inkSoft, fontSize: 11, textTransform: "uppercase", marginBottom: 4 }}>
            Billed to
          </div>
          <div style={{ color: colors.ink, fontWeight: 600 }}>Kim Javier</div>
        </div>
        <div>
          <div style={{ color: colors.inkSoft, fontSize: 11, textTransform: "uppercase", marginBottom: 4 }}>
            Payment status
          </div>
          <div style={{ color: colors.good, fontWeight: 700 }}>Paid in full</div>
        </div>
      </div>
      <div style={{ marginTop: 26, borderTop: `1px solid ${colors.line}`, paddingTop: 16, display: "flex", justifyContent: "space-between", fontFamily, fontSize: 14 }}>
        <span style={{ color: colors.inkMuted }}>AI Agent Mastery for Sales · 1 seat</span>
        <span style={{ fontWeight: 700, color: colors.ink }}>$189.00</span>
      </div>
    </div>
  </div>
);

// Shot 13 — See it in My Bookings
const MyBookings: React.FC = () => (
  <div style={{ display: "flex", height: "100%", background: colors.bg }}>
    <Sidebar items={["Dashboard", "Browse workshops", "My bookings", "Schedule requests"]} active={2} />
    <div style={{ flex: 1, padding: 32 }}>
      <div style={{ fontFamily, fontWeight: 800, fontSize: 24, color: colors.ink }}>My Bookings</div>
      <div style={{ fontFamily, fontSize: 13, color: colors.inkMuted, marginTop: 4 }}>June 2026</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8, marginTop: 20 }}>
        {Array.from({ length: 21 }, (_, i) => {
          const day = i + 1;
          const hasEvent = day === 20 || day === 23;
          return (
            <div
              key={day}
              style={{
                height: 52,
                borderRadius: 8,
                background: hasEvent ? colors.purple50 : "#fff",
                border: `1px solid ${colors.line}`,
                fontFamily,
                fontSize: 11,
                color: hasEvent ? colors.purple600 : colors.inkSoft,
                padding: 6,
                fontWeight: hasEvent ? 700 : 500,
              }}
            >
              {day}
              {hasEvent && (
                <div style={{ fontSize: 9, marginTop: 4 }}>Workshop</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

// Shot 14 — Open the booking
const BookingDetails: React.FC = () => (
  <div style={{ display: "flex", height: "100%", background: colors.bg }}>
    <Sidebar items={["Dashboard", "Browse workshops", "My bookings", "Schedule requests"]} active={2} />
    <div style={{ flex: 1, padding: 36 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontFamily, fontSize: 13, color: colors.inkSoft, marginBottom: 8 }}>
            ← Back to bookings
          </div>
          <div style={{ fontFamily, fontWeight: 800, fontSize: 24, color: colors.ink }}>
            Pricing Strategy 1:1 Session
          </div>
        </div>
        <Btn small variant="ghost">Add to calendar</Btn>
      </div>
      <div style={{ display: "flex", gap: 24, marginTop: 22, fontFamily, fontSize: 13, fontWeight: 700, color: colors.inkMuted, borderBottom: `1px solid ${colors.line}`, paddingBottom: 12 }}>
        <span style={{ color: colors.purple600 }}>Details</span>
        <span>Seats · 1</span>
        <span>Payments</span>
      </div>
      <div
        style={{
          marginTop: 22,
          background: colors.purple50,
          borderRadius: 12,
          padding: 24,
          maxWidth: 420,
        }}
      >
        <div style={{ fontFamily, fontWeight: 700, fontSize: 16, color: colors.ink }}>
          Pricing Strategy 1:1 Session
        </div>
        <div style={{ fontFamily, fontSize: 13, color: colors.inkMuted, marginTop: 8 }}>Total amount</div>
        <div style={{ fontFamily, fontWeight: 800, fontSize: 24, color: colors.purple600, marginTop: 2 }}>
          Free
        </div>
      </div>
    </div>
  </div>
);

// Shot 15 — See your whole schedule
const CalendarMonth: React.FC = () => (
  <div style={{ display: "flex", height: "100%", background: colors.bg }}>
    <Sidebar items={["Workshops", "Coaching", "Strategy", "Webinar"]} active={-1} />
    <div style={{ flex: 1, padding: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily, fontWeight: 800, fontSize: 22, color: colors.ink }}>May 2026</div>
        <Btn small>+ New event</Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, marginTop: 18 }}>
        {Array.from({ length: 28 }, (_, i) => {
          const day = i + 1;
          const events = [4, 12, 19, 26].includes(day)
            ? ["#8a5cff"]
            : [9, 15, 22].includes(day)
              ? ["#f59e0b"]
              : [];
          return (
            <div
              key={day}
              style={{
                height: 46,
                borderRadius: 6,
                background: "#fff",
                border: `1px solid ${colors.line}`,
                fontFamily,
                fontSize: 10.5,
                color: colors.inkSoft,
                padding: 4,
              }}
            >
              {day}
              {events.map((c) => (
                <div
                  key={c}
                  style={{ height: 4, borderRadius: 2, background: c, marginTop: 3 }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export type Shot = {
  id: number;
  phase: string;
  url: string;
  title: string;
  voiceover: string;
  onScreen: string;
  Content: React.FC;
};

export const SHOTS: Shot[] = [
  {
    id: 1,
    phase: "Discover",
    url: "aicoaches.com",
    title: "Land on AICoaches.com",
    voiceover: "A visitor arrives and meets the pitch — live, hands-on AI workshops led by working coaches.",
    onScreen: "Hero + “Get started”",
    Content: Landing,
  },
  {
    id: 2,
    phase: "Sign up",
    url: "aicoaches.com/signup",
    title: "Create an account",
    voiceover: "They tap Get started and sign up with just an email — a one-time sign-in code, no password to remember.",
    onScreen: "Create your account",
    Content: SignUp,
  },
  {
    id: 3,
    phase: "Onboard",
    url: "Onboarding · Welcome tour",
    title: "Take the welcome tour",
    voiceover: "A short, animated tour shows how booking a workshop works before any forms appear.",
    onScreen: "Step 1 · Welcome tour",
    Content: WelcomeTour,
  },
  {
    id: 4,
    phase: "Onboard",
    url: "Onboarding · Your focus",
    title: "Set your focus",
    voiceover: "They choose focus areas and an experience level so recommendations match what they want to learn.",
    onScreen: "Step 2 · Your focus",
    Content: FocusStep,
  },
  {
    id: 5,
    phase: "Onboard",
    url: "Onboarding · All set",
    title: "Confirm your setup",
    voiceover: "A quick summary confirms their focus and level — the workspace is ready to go.",
    onScreen: "Step 3 · All set",
    Content: AllSet,
  },
  {
    id: 6,
    phase: "Learn the dashboard",
    url: "Dashboard · Guided tour",
    title: "Get the lay of the land",
    voiceover: "A spotlight tour points out where to browse workshops, find bookings, and manage the account.",
    onScreen: "Browse · Bookings · Account",
    Content: DashboardTour,
  },
  {
    id: 7,
    phase: "Browse & request",
    url: "aicoaches.com/workshops",
    title: "Browse the workshops",
    voiceover: "They explore the full catalog — the flagship program up top, then every public workshop by topic and level.",
    onScreen: "Workshops overview",
    Content: WorkshopsOverview,
  },
  {
    id: 8,
    phase: "Browse & request",
    url: "aicoaches.com/events",
    title: "Check what's coming up",
    voiceover: "Upcoming Events lists every scheduled open-enrollment session — dates, format, and how many seats are left.",
    onScreen: "Upcoming public events",
    Content: UpcomingEvents,
  },
  {
    id: 9,
    phase: "Browse & request",
    url: "aicoaches.com/schedule-requests",
    title: "Request a custom session",
    voiceover: "Need something private? They submit a schedule request and track its status right alongside their bookings.",
    onScreen: "Schedule requests",
    Content: ScheduleRequests,
  },
  {
    id: 10,
    phase: "Book",
    url: "aicoaches.com/workshop",
    title: "Reserve a seat",
    voiceover: "They open a recommended workshop, pick a session, and check out in a single form.",
    onScreen: "Book a session now",
    Content: () => <WorkshopBooking />,
  },
  {
    id: 11,
    phase: "Book",
    url: "aicoaches.com/workshop",
    title: "You're booked",
    voiceover: "Payment goes through and a confirmation lands instantly — a calendar invite is on its way.",
    onScreen: "Confirmation + calendar invite",
    Content: () => <WorkshopBooking booked />,
  },
  {
    id: 12,
    phase: "Book",
    url: "aicoaches.com/invoice",
    title: "Get the receipt",
    voiceover: "A clean, printable invoice is ready the moment payment clears — download or print it for expenses.",
    onScreen: "Invoice · Paid",
    Content: Invoice,
  },
  {
    id: 13,
    phase: "Manage",
    url: "aicoaches.com/my-bookings",
    title: "See it in My Bookings",
    voiceover: "The new session appears in My Bookings — every workshop in one calendar view, with what's up next.",
    onScreen: "My Bookings · Up next",
    Content: MyBookings,
  },
  {
    id: 14,
    phase: "Manage",
    url: "aicoaches.com/my-bookings/booking",
    title: "Open the booking",
    voiceover: "Each booking has its own page — seats, payments, and a one-tap add-to-calendar, all in one place.",
    onScreen: "Booking details",
    Content: BookingDetails,
  },
  {
    id: 15,
    phase: "Manage",
    url: "aicoaches.com/calendar",
    title: "See your whole schedule",
    voiceover: "The calendar pulls every booked workshop, coaching call, and webinar into one month view they can filter and search.",
    onScreen: "Calendar · Month view",
    Content: CalendarMonth,
  },
];

export const PHASES = [
  "Discover",
  "Sign up",
  "Onboard",
  "Learn the dashboard",
  "Browse & request",
  "Book",
  "Manage",
];
