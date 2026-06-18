import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  spring,
} from "remotion";

const stats = [
  { label: "Avg. ROAS uplift", from: 1.0, to: 5.2,  prefix: "",  suffix: "×", decimals: 1, color: "#7B61FF", delay: 0  },
  { label: "Revenue / mo avg",  from: 0,   to: 48290, prefix: "€", suffix: "",  decimals: 0, color: "#FC801D", delay: 22 },
  { label: "Merchants active",  from: 0,   to: 1847,  prefix: "",  suffix: "+", decimals: 0, color: "#22C55E", delay: 44 },
];

export function PricingStatsComposition() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: "transparent",
        padding: "16px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: 16 }}>
        {stats.map((s) => (
          <StatCard key={s.label} {...s} fps={fps} frame={frame} />
        ))}
      </div>
    </AbsoluteFill>
  );
}

function StatCard({
  label, from, to, prefix, suffix, decimals, delay, fps, frame, color,
}: any) {
  const f = frame - delay;
  if (f < 0) return <div style={{ opacity: 0, flex: 1 }} />;

  const progress  = spring({ frame: f, fps, config: { damping: 24, stiffness: 80 }, durationInFrames: 60 });
  const current   = from + (to - from) * progress;
  const opacity   = interpolate(f, [0, 15], [0, 1],   { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const translateY= interpolate(f, [0, 25], [20, 0],  { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const formatted = decimals > 0
    ? current.toFixed(decimals)
    : Math.floor(current).toLocaleString("nl-NL");

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        background: `linear-gradient(135deg, rgba(255,255,255,0.055) 0%, ${color}0a 100%)`,
        border: `1px solid ${color}28`,
        borderRadius: 14,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 7,
        flex: 1,
        boxShadow: `0 6px 24px rgba(0,0,0,0.3), inset 0 1px 0 ${color}18`,
      }}
    >
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 36,
          fontWeight: 900,
          color,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          textShadow: `0 0 28px ${color}45`,
        }}
      >
        {prefix}{formatted}{suffix}
      </span>
    </div>
  );
}
