import { useCurrentFrame, useVideoConfig, interpolate, Easing, AbsoluteFill, spring } from "remotion";

export function StatsCounterComposition() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stats = [
    { label: "Shopify Revenue", from: 0, to: 48290, prefix: "€", suffix: "", decimals: 0, delay: 0 },
    { label: "Meta ROAS", from: 0, to: 5.2, prefix: "", suffix: "×", decimals: 1, delay: 15 },
    { label: "TikTok ROAS", from: 0, to: 2.9, prefix: "", suffix: "×", decimals: 1, delay: 30 },
  ];

  const lineWidth = interpolate(frame, [0, 40], [0, 100], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  return (
    <AbsoluteFill style={{ background: "transparent", padding: "20px 28px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ height: 2, width: `${lineWidth}%`, background: "linear-gradient(to right, #FC801D, #FC801D 80%, transparent)", maxWidth: 40, borderRadius: 1 }} />
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {stats.map((s) => (
          <StatCard key={s.label} {...s} fps={fps} frame={frame} />
        ))}
      </div>

      <div style={{ height: 1, background: "linear-gradient(to right, rgba(123,97,255,0.3), transparent)", marginTop: 8, width: `${lineWidth}%`, maxWidth: "100%", borderRadius: 1 }} />
    </AbsoluteFill>
  );
}

function StatCard({ label, from, to, prefix, suffix, decimals, delay, fps, frame }: any) {
  const f = frame - delay;
  if (f < 0) return <div style={{ opacity: 0, flex: 1 }} />;

  const progress = spring({ frame: f, fps, config: { damping: 24, stiffness: 80, mass: 1 }, durationInFrames: 60 });
  const current = from + (to - from) * progress;
  const opacity = interpolate(f, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const translateY = interpolate(f, [0, 25], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const formatted = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString("nl-NL");

  return (
    <div style={{ opacity, transform: `translateY(${translateY}px)`, background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 6, flex: 1, backdropFilter: "blur(10px)", boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" }}>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}>{label}</span>
      <span style={{ fontSize: 32, fontWeight: 900, color: "#ffffff", fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em", lineHeight: 1, textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>{prefix}{formatted}{suffix}</span>
    </div>
  );
}
