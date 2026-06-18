"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { ArrowRight, Eye, EyeOff, Zap } from "lucide-react";

// ── Google SVG icon ──────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// ── Animated metric ticker on the left panel ─────────────────
const metrics = [
  { label: "Shopify Revenue", value: "€48.290", color: "#7B61FF" },
  { label: "Meta ROAS",        value: "5.2×",    color: "#FC801D" },
  { label: "TikTok ROAS",      value: "2.9×",    color: "#22C55E" },
  { label: "Google ROAS",      value: "3.8×",    color: "#3B82F6" },
];

function MetricCard({
  label,
  value,
  color,
  delay,
}: {
  label: string;
  value: string;
  color: string;
  delay: string;
}) {
  return (
    <div
      className="flex items-center justify-between rounded-xl border px-5 py-3.5 animate-fade-in-up"
      style={{
        borderColor: `${color}30`,
        background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, ${color}08 100%)`,
        animationDelay: delay,
      }}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white/45">
        {label}
      </span>
      <span
        className="text-2xl font-black leading-none tracking-tight"
        style={{ color, textShadow: `0 0 20px ${color}50` }}
      >
        {value}
      </span>
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────
export function LoginPage() {
  const [email, setEmail]           = useState("");
  const [password, setPassword]     = useState("");
  const [showPw, setShowPw]         = useState(false);
  const [loading, setLoading]       = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError]           = useState<string | null>(null);

  async function handleGoogleSignIn() {
    setGoogleLoading(true);
    setError(null);
    try {
      await signIn("google", { callbackUrl: "/" });
      // redirect happens automatically — no need to setLoading(false)
    } catch {
      setError("Google sign-in failed. Please try again.");
      setGoogleLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Wire up credentials provider here when backend is ready
    setTimeout(() => setLoading(false), 1500);
  }

  return (
    <div className="flex min-h-screen bg-[#0D0B1A]">

      {/* ── LEFT — brand panel ────────────────────────────── */}
      <div className="relative hidden lg:flex lg:w-[52%] flex-col justify-between overflow-hidden bg-[#0a0812] px-16 py-16">

        {/* Background glows */}
        <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#7B61FF]/12 blur-[130px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-[#FC801D]/10 blur-[120px]" />

        {/* Subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(123,97,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(123,97,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              background: "linear-gradient(135deg, #7B61FF 0%, #0d1b4b 60%, #FC801D 100%)",
              boxShadow: "0 0 0 1px rgba(123,97,255,0.4), 0 6px 24px rgba(123,97,255,0.3)",
            }}
          >
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-black tracking-[0.1em] text-white uppercase">
              Joomz
            </span>
            <span className="ml-2 text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium">
              AI Platform
            </span>
          </div>
        </div>

        {/* Centre copy */}
        <div className="relative space-y-12">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-[#7B61FF] to-transparent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                Live dashboard
              </span>
            </div>
            <h2 className="text-4xl font-black leading-[1.1] tracking-[-0.02em] text-white xl:text-5xl">
              Your e-commerce
              <br />
              <span className="bg-gradient-to-r from-[#7B61FF] via-[#E91E8C] to-[#FC801D] bg-clip-text text-transparent">
                data at a glance.
              </span>
            </h2>
            <p className="max-w-sm text-sm text-white/45 leading-relaxed">
              Connect Shopify, Google, Meta and TikTok Ads. See exactly which
              euros drive real orders — in real-time.
            </p>
          </div>

          {/* Metric cards */}
          <div className="space-y-3">
            {metrics.map((m, i) => (
              <MetricCard
                key={m.label}
                {...m}
                delay={`${0.1 + i * 0.12}s`}
              />
            ))}
          </div>

          {/* Bottom line decoration */}
          <div className="h-px w-full bg-gradient-to-r from-[#7B61FF]/30 via-[#FC801D]/20 to-transparent" />
        </div>

        {/* Footer strip */}
        <div className="relative flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/18">
            © 2026 Joomz B.V. · Amsterdam
          </p>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] uppercase tracking-[0.15em] text-white/20 transition-colors hover:text-white/50"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT — form panel ────────────────────────────── */}
      <div className="flex flex-1 flex-col">

        {/* Mobile logo */}
        <div className="flex items-center justify-between px-6 pt-8 lg:hidden">
          <a href="/" className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, #7B61FF 0%, #0d1b4b 60%, #FC801D 100%)",
              }}
            >
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-base font-black tracking-[0.1em] text-white uppercase">
              Joomz
            </span>
          </a>
          <a
            href="#"
            className="text-[11px] font-semibold uppercase tracking-wider text-white/40 hover:text-white transition-colors"
          >
            Create account
          </a>
        </div>

        {/* Form area */}
        <div className="flex flex-1 items-center justify-center px-6 py-16 sm:px-12">
          <div className="w-full max-w-[400px] space-y-8">

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl font-black tracking-[-0.01em] text-white sm:text-3xl">
                Log in to your account
              </h1>
              <p className="text-sm text-white/40">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-semibold text-[#7B61FF] transition-colors hover:text-[#9B81FF]"
                >
                  Sign up free
                </a>
              </p>
            </div>

            {/* Google SSO button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleLoading || loading}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.08] hover:text-white active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {googleLoading ? (
                <svg
                  className="h-4 w-4 animate-spin text-white/60"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              ) : (
                <GoogleIcon />
              )}
              {googleLoading ? "Redirecting to Google…" : "Continue with Google"}
            </button>

            {/* Error banner */}
            {error && (
              <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-400">
                {error}
              </p>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/[0.08]" />
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/25">
                or
              </span>
              <div className="h-px flex-1 bg-white/[0.08]" />
            </div>

            {/* Email + password form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/40"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-200 focus:border-[#7B61FF]/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(123,97,255,0.15)]"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/40"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-[11px] font-semibold text-white/35 transition-colors hover:text-white/70"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPw ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 pr-12 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-200 focus:border-[#7B61FF]/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(123,97,255,0.15)]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 transition-colors hover:text-white/60"
                    aria-label={showPw ? "Hide password" : "Show password"}
                  >
                    {showPw ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 active:scale-[0.99] disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, #7B61FF 0%, #5a42f5 100%)",
                  boxShadow:
                    "0 0 0 1px rgba(123,97,255,0.35), 0 8px 24px rgba(123,97,255,0.3)",
                }}
              >
                {loading ? (
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* SSO link */}
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/25 transition-colors hover:text-white/60"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 118 0v4" />
                </svg>
                Log in with SSO
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip desktop right */}
        <div className="hidden border-t border-white/[0.05] px-12 py-5 lg:flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/18">
            Secure · SSL encrypted · SOC 2 Type 2
          </p>
          <a
            href="/"
            className="text-[10px] uppercase tracking-[0.15em] text-white/20 transition-colors hover:text-white/50"
          >
            ← Back to joomz.ai
          </a>
        </div>
      </div>
    </div>
  );
}
