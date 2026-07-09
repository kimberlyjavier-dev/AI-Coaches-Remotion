import React from "react";
import { colors, fontFamily } from "./theme";

export const Chip: React.FC<{
  children: React.ReactNode;
  solid?: boolean;
  light?: boolean;
}> = ({ children, solid, light }) => (
  <span
    style={{
      fontFamily,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "5px 12px",
      borderRadius: 999,
      background: solid
        ? "rgba(255,255,255,0.95)"
        : light
          ? colors.purple100
          : "rgba(255,255,255,0.14)",
      color: solid || light ? colors.purple500 : "#fff",
      border: solid || light ? "none" : "1px solid rgba(255,255,255,0.2)",
      display: "inline-block",
    }}
  >
    {children}
  </span>
);

export const NumBadge: React.FC<{ n: number }> = ({ n }) => (
  <div
    style={{
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: colors.purple500,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily,
      fontWeight: 800,
      fontSize: 18,
      boxShadow: "0 6px 16px -4px rgba(109,40,217,0.6)",
      border: "3px solid #fff",
    }}
  >
    {n}
  </div>
);

export const Btn: React.FC<{
  children: React.ReactNode;
  variant?: "primary" | "amber" | "ghostLight" | "ghost";
  small?: boolean;
}> = ({ children, variant = "primary", small }) => {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: colors.purple500, color: "#fff" },
    amber: { background: "#f5a623", color: "#2d1c00" },
    ghostLight: {
      background: "rgba(255,255,255,0.12)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.3)",
    },
    ghost: {
      background: "#fff",
      color: colors.ink,
      border: `1px solid ${colors.lineStrong}`,
    },
  };
  return (
    <span
      style={{
        fontFamily,
        display: "inline-flex",
        alignItems: "center",
        padding: small ? "9px 16px" : "13px 22px",
        borderRadius: 8,
        fontSize: small ? 13 : 15,
        fontWeight: 700,
        whiteSpace: "nowrap",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
};

export const BrowserFrame: React.FC<{
  url: string;
  width: number;
  height: number;
  children: React.ReactNode;
}> = ({ url, width, height, children }) => (
  <div
    style={{
      width,
      height,
      borderRadius: 14,
      background: "#fff",
      boxShadow: "0 40px 90px -20px rgba(20,18,40,0.45), 0 0 0 1px rgba(20,18,40,0.06)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        height: 44,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "0 16px",
        borderBottom: `1px solid ${colors.line}`,
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", gap: 6 }}>
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ec6a5e" }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#f4bf4f" }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#61c454" }} />
      </div>
      <div
        style={{
          fontFamily,
          marginLeft: 12,
          fontSize: 12.5,
          color: colors.inkSoft,
          background: colors.bgTint,
          borderRadius: 999,
          padding: "4px 14px",
        }}
      >
        {url}
      </div>
    </div>
    <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>{children}</div>
  </div>
);

export const LogoMark: React.FC<{ dark?: boolean; size?: number }> = ({
  dark,
  size = 16,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `conic-gradient(from 45deg, ${colors.purple500}, ${colors.purple300}, ${colors.purple500})`,
        WebkitMask:
          "radial-gradient(closest-side, transparent 28%, #000 32% 60%, transparent 64%)",
        mask: "radial-gradient(closest-side, transparent 28%, #000 32% 60%, transparent 64%)",
      }}
    />
    <span
      style={{
        fontFamily,
        fontWeight: 700,
        fontSize: size,
        color: dark ? "#fff" : colors.ink,
      }}
    >
      AI Coaches
    </span>
  </div>
);
