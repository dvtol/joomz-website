"use client";

import { useEffect, useState, useRef } from "react";

// ── Animated stat counter ─────────────────────────────────────
function useCountUp(to: number, decimals: number, duration = 1800, delay = 0) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(parseFloat((to * eased).toFixed(decimals)));
        if (t < 1) requestAnimationFrame(step);
        else setValue(to);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [to, decimals, duration, delay]);

  return value;
}

const stats = [
  { label: "Shopify Revenue", prefix: "€", to: 48290, suffix: "", decimals: 0, delay: 0, change: "+18%", changeColor: "#4ade80" },
  { label: "Meta ROAS", prefix: "", to: 5.2, suffix: "×", decimals: 1, delay: 200, change: "+0.8×", changeColor: "#4ade80" },
  { label: "TikTok ROAS", prefix: "", to: 2.9, suffix: "×", decimals: 1, delay: 400, change: "–0.3×", changeColor: "#f87171" },
];

function StatCard({ label, prefix, to, suffix, decimals, delay, change, changeColor }: typeof stats[0]) {
  const value = useCountUp(to, decimals, 1600, delay);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const formatted = decimals > 0
    ? value.toFixed(decimals)
    : Math.floor(value).toLocaleString("en-US");

  return (
    <div
      style={{
        flex: 1,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 12,
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
        {label}
      </span>
      <span style={{ fontSize: 26, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
        {prefix}{formatted}{suffix}
      </span>
      <span style={{ fontSize: 11, fontWeight: 600, color: changeColor }}>
        {change}
      </span>
    </div>
  );
}

export function AnimatedStatsPlayer() {
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLineWidth(100), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: "#13111C", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          height: 1,
          background: "#FC801D",
          width: `${lineWidth * 0.4}px`,
          maxWidth: 40,
          transition: "width 0.8s ease",
        }} />
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
          Live Dashboard
        </span>
      </div>

      {/* Stat cards */}
      <div style={{ display: "flex", gap: 10 }}>
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        height: 1,
        background: "linear-gradient(to right, rgba(123,97,255,0.5), transparent)",
        width: `${lineWidth}%`,
        transition: "width 1.2s ease",
      }} />
    </div>
  );
}

// ── Animated chat dashboard ───────────────────────────────────
const messages = [
  {
    type: "info" as const,
    text: '🛒 TikTok campaign "Summer Drop" — CPA 41% above target.',
    delay: 400,
  },
  {
    type: "suggestion" as const,
    text: "✅ Proposal: shift budget from TikTok to Meta top-3 creatives. Execute?",
    delay: 1400,
  },
  {
    type: "success" as const,
    text: "✓ Done. Budget adjusted. Shopify orders already rising.",
    delay: 2600,
  },
];

const msgStyles = {
  info: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.7)",
  },
  suggestion: {
    background: "rgba(123,97,255,0.13)",
    border: "1px solid rgba(123,97,255,0.35)",
    color: "#C4B5FD",
  },
  success: {
    background: "rgba(34,197,94,0.1)",
    border: "1px solid rgba(34,197,94,0.28)",
    color: "#86efac",
  },
};

function ChatMsg({ text, type, delay }: typeof messages[0]) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        ...msgStyles[type],
        borderRadius: 10,
        padding: "11px 16px",
        fontSize: 12,
        lineHeight: 1.6,
        fontFamily: "monospace",
        fontWeight: 500,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
      }}
    >
      {text}
    </div>
  );
}

export function AnimatedDashboardPlayer() {
  const [dotPulse, setDotPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setDotPulse((v) => !v), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Stats row */}
      <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
        {[
          { label: "Shopify Revenue", to: 48290, prefix: "€", suffix: "", decimals: 0, delay: 0, change: "+18%", changeColor: "#4ade80" },
          { label: "Meta ROAS", to: 5.2, prefix: "", suffix: "×", decimals: 1, delay: 200, change: "+0.8×", changeColor: "#4ade80" },
          { label: "TikTok ROAS", to: 2.9, prefix: "", suffix: "×", decimals: 1, delay: 400, change: "–0.3×", changeColor: "#f87171" },
        ].map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Chat messages */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {messages.map((m) => (
          <ChatMsg key={m.delay} {...m} />
        ))}
      </div>
    </div>
  );
}
