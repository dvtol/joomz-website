import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export function DashboardRevealComposition() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const metrics = [
    { label: "Shopify Revenue", value: "€48.290", color: "#7B61FF", delay: 0 },
    { label: "Meta ROAS", value: "5.2×", color: "#FC801D", delay: 15 },
    { label: "TikTok ROAS", value: "2.1×", color: "#22C55E", delay: 30 },
    { label: "Google ROAS", value: "3.8×", color: "#3B82F6", delay: 45 },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #0d0b1a 100%)",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        fontFamily: "Inter, sans-serif",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 900,
          marginBottom: 28,
          color: "#ffffff",
          letterSpacing: "-0.02em",
        }}
      >
        Live Metrics
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, width: "100%" }}>
        {metrics.map((m) => (
          <MetricRow key={m.label} frame={frame} fps={fps} metric={m} />
        ))}
      </div>
    </AbsoluteFill>
  );
}

function MetricRow({ frame, fps, metric }: { frame: number; fps: number; metric: any }) {
  const f = frame - metric.delay;
  if (f < 0) return <div style={{ opacity: 0, height: 50, marginBottom: 0 }} />;

  const spring_val = spring({
    frame: f,
    fps,
    config: { damping: 10, stiffness: 100 },
    durationInFrames: 50,
  });

  const opacity = interpolate(f, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(spring_val, [0, 1], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const s = interpolate(spring_val, [0, 1], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px) scale(${s})`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        marginBottom: 0,
        borderRadius: 12,
        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, ${metric.color}06 100%)`,
        border: `1.5px solid ${metric.color}40`,
        backdropFilter: "blur(12px)",
        width: "100%",
        boxSizing: "border-box",
        boxShadow: `0 8px 32px ${metric.color}12, inset 0 1px 0 ${metric.color}20`,
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: "rgba(255, 255, 255, 0.55)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {metric.label}
      </span>
      <span
        style={{
          fontSize: 28,
          fontWeight: 900,
          color: metric.color,
          textShadow: `0 0 30px ${metric.color}50, 0 0 60px ${metric.color}20`,
          letterSpacing: "-0.01em",
        }}
      >
        {metric.value}
      </span>
    </div>
  );
}
