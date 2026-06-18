import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

const bars = [
  { label: "Meta",    roas: "5.2×", color: "#FC801D", height: 162, delay: 0  },
  { label: "Google",  roas: "3.8×", color: "#3B82F6", height: 118, delay: 18 },
  { label: "TikTok",  roas: "2.9×", color: "#22C55E", height: 90,  delay: 36 },
  { label: "Shopify", roas: "4.5×", color: "#7B61FF", height: 140, delay: 54 },
];

const BAR_W   = 82;
const GAP     = 26;
const TOTAL_W = bars.length * BAR_W + (bars.length - 1) * GAP; // 404
const START_X = (560 - TOTAL_W) / 2;                           // 78
const BASELINE = 58;

export function PricingROASComposition() {
  const frame = useCurrentFrame();
  const { fps }  = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(145deg, #0c0a1a 0%, #0d0b1a 100%)",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Subtle horizontal grid lines */}
      {[0.33, 0.66, 1.0].map((ratio) => (
        <div
          key={ratio}
          style={{
            position: "absolute",
            left: 36,
            right: 36,
            bottom: BASELINE + 162 * ratio,
            height: 1,
            background: "rgba(255,255,255,0.045)",
          }}
        />
      ))}

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 28,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            height: 2,
            width: 22,
            background: "linear-gradient(to right, #7B61FF, #FC801D)",
            borderRadius: 1,
          }}
        />
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          ROAS per channel · Joomz AI
        </span>
      </div>

      {/* Bars */}
      {bars.map((bar, i) => {
        const x = START_X + i * (BAR_W + GAP);
        const f = frame - bar.delay;

        const progress =
          f < 0
            ? 0
            : spring({ frame: f, fps, config: { damping: 13, stiffness: 75 }, durationInFrames: 60 });

        const barH   = bar.height * progress;
        const opacity = f < 0 ? 0 : interpolate(f, [0, 12], [0, 1], { extrapolateRight: "clamp" });

        return (
          <div
            key={bar.label}
            style={{ position: "absolute", left: x, bottom: BASELINE, width: BAR_W, opacity }}
          >
            {/* Value label */}
            <div
              style={{
                position: "absolute",
                bottom: barH + 9,
                width: "100%",
                textAlign: "center",
                fontSize: 22,
                fontWeight: 900,
                color: bar.color,
                letterSpacing: "-0.02em",
                textShadow: `0 0 28px ${bar.color}55`,
              }}
            >
              {bar.roas}
            </div>

            {/* Bar fill */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: barH,
                background: `linear-gradient(to top, ${bar.color}55, ${bar.color}cc)`,
                borderRadius: "8px 8px 0 0",
                boxShadow: `0 0 28px ${bar.color}20`,
              }}
            />

            {/* Top glow line */}
            {barH > 4 && (
              <div
                style={{
                  position: "absolute",
                  bottom: barH - 2,
                  width: "100%",
                  height: 3,
                  background: bar.color,
                  borderRadius: 2,
                  boxShadow: `0 0 10px ${bar.color}, 0 0 22px ${bar.color}70`,
                }}
              />
            )}

            {/* X label */}
            <div
              style={{
                position: "absolute",
                bottom: -28,
                width: "100%",
                textAlign: "center",
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {bar.label}
            </div>
          </div>
        );
      })}

      {/* Baseline */}
      <div
        style={{
          position: "absolute",
          left: 32,
          right: 32,
          bottom: BASELINE,
          height: 1,
          background: "rgba(255,255,255,0.12)",
        }}
      />

      {/* Bottom tag */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 24,
          fontSize: 9,
          fontWeight: 600,
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.18)",
          textTransform: "uppercase",
        }}
      >
        Live · Joomz AI
      </div>
    </AbsoluteFill>
  );
}
