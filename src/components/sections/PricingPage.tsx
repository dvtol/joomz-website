"use client";

import {
  useState,
} from "react";
import {
  CheckCircle2, X, ArrowRight, Zap, TrendingUp,
  Building2, Gift, ChevronDown, ChevronUp, Minus, Plus,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingROASPlayer } from "@/components/remotion/PricingROASPlayer";
import { PricingStatsPlayer } from "@/components/remotion/PricingStatsPlayer";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const plans = [
  {
    id: "free",
    name: "Free",
    Icon: Gift,
    monthlyPrice: 0,
    annualPrice: 0,
    description: "See your store performance at a glance — free, forever.",
    cta: "Start for free",
    ctaFilled: false,
    recommended: false,
    color: "rgba(255,255,255,0.5)",
    features: [
      "1 Shopify store",
      "1 ad platform",
      "Basic ROAS dashboard",
      "7-day data history",
      "Email support",
    ],
    missing: [
      "Multi-touch attribution",
      "Joomz AI",
      "Budget optimizer",
      "Slack alerts",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    Icon: Zap,
    monthlyPrice: 89,
    annualPrice: 74,
    description: "Full attribution and AI insights for growing Shopify brands.",
    cta: "Start 14-day trial",
    ctaFilled: false,
    recommended: false,
    color: "#3B82F6",
    features: [
      "1 Shopify store",
      "All 3 ad platforms",
      "Full ROAS attribution",
      "30-day data history",
      "Joomz AI chat (limited)",
      "Priority email support",
    ],
    missing: [
      "Budget optimizer",
      "Slack alerts",
      "White-label reports",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    Icon: TrendingUp,
    monthlyPrice: 249,
    annualPrice: 199,
    description: "The full Joomz AI platform — for teams that move fast.",
    cta: "Start 14-day trial",
    ctaFilled: true,
    recommended: true,
    color: "#7B61FF",
    features: [
      "2 Shopify stores",
      "Unlimited ad platforms",
      "Multi-touch attribution",
      "90-day data history",
      "Full Joomz AI access",
      "Budget optimizer",
      "Slack alerts",
      "Custom reports",
      "Live chat support",
    ],
    missing: [
      "White-label reports",
      "API access",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    Icon: Building2,
    monthlyPrice: 549,
    annualPrice: 449,
    description: "Unlimited stores, white-label, API — for serious agencies.",
    cta: "Book a demo",
    ctaFilled: false,
    recommended: false,
    color: "#FC801D",
    features: [
      "Unlimited Shopify stores",
      "Unlimited ad platforms",
      "MTA + Marketing Mix Model",
      "Unlimited data history",
      "Joomz AI full + API access",
      "Budget optimizer + auto-actions",
      "Slack alerts",
      "White-label reports",
      "Dedicated success manager",
    ],
    missing: [],
  },
];

type CellVal = boolean | string;

const featureCategories = [
  {
    name: "Dashboard & Data",
    features: [
      { name: "Shopify stores",        values: ["1",       "1",       "2",       "Unlimited"] as CellVal[] },
      { name: "Ad platforms",          values: ["1",       "3",       "All",     "All"]       as CellVal[] },
      { name: "Data retention",        values: ["7 days",  "30 days", "90 days", "Unlimited"] as CellVal[] },
      { name: "Real-time updates",     values: [true,      true,      true,      true]        as CellVal[] },
    ],
  },
  {
    name: "Attribution",
    features: [
      { name: "ROAS dashboard",           values: [true,  true,    true,    true]    as CellVal[] },
      { name: "Multi-touch attribution",  values: [false, true,    true,    true]    as CellVal[] },
      { name: "Marketing Mix Modeling",   values: [false, false,   false,   true]    as CellVal[] },
      { name: "Custom attribution windows", values: [false, "Basic", "Full", "Full"] as CellVal[] },
    ],
  },
  {
    name: "Joomz AI",
    features: [
      { name: "AI chat assistant",    values: [false, "Limited", "Full",  "Full + API"] as CellVal[] },
      { name: "Budget optimizer",     values: [false, false,     true,    true]         as CellVal[] },
      { name: "Automated ad actions", values: [false, false,     false,   true]         as CellVal[] },
      { name: "API access",           values: [false, false,     false,   true]         as CellVal[] },
    ],
  },
  {
    name: "Alerts & Reports",
    features: [
      { name: "Email alerts",         values: [false, true,  true,  true]  as CellVal[] },
      { name: "Slack integration",    values: [false, false, true,  true]  as CellVal[] },
      { name: "Custom dashboards",    values: [false, false, true,  true]  as CellVal[] },
      { name: "White-label reports",  values: [false, false, false, true]  as CellVal[] },
    ],
  },
  {
    name: "Support",
    features: [
      { name: "Email support",      values: [true, "Priority", false, false] as CellVal[] },
      { name: "Live chat",          values: [false, false, true,  true]  as CellVal[] },
      { name: "Dedicated CSM",      values: [false, false, false, true]  as CellVal[] },
      { name: "Custom onboarding",  values: [false, false, false, true]  as CellVal[] },
    ],
  },
];

const planColors = ["rgba(255,255,255,0.5)", "#3B82F6", "#7B61FF", "#FC801D"];

const faqs = [
  {
    q: "How does Joomz pricing work?",
    a: "Joomz is a flat-rate monthly or annual subscription. You pick a plan based on your needs — stores, ad platforms and AI features. No hidden fees, no GMV-based pricing. Annual billing saves you 17% (equivalent to 2 months free).",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade immediately and downgrade at the end of your billing cycle. Annual plans lock in the discounted rate for 12 months — if you grow, you keep your price.",
  },
  {
    q: "What is included in the 14-day free trial?",
    a: "All Starter and Growth trial accounts get full access to every feature in that plan for 14 days, no credit card required. You can connect your real Shopify store and ad platforms to see live data immediately.",
  },
  {
    q: "Which ad platforms does Joomz support?",
    a: "Joomz integrates with Google Ads, Meta Ads (Facebook & Instagram), TikTok Ads, Klaviyo, Pinterest Ads, Snapchat Ads and Stripe out of the box. More integrations are added every quarter.",
  },
  {
    q: "Is my Shopify and ad data safe?",
    a: "Yes. Joomz connects via official OAuth API integrations — we never store your passwords. All data is encrypted in transit and at rest. Your data is never sold or shared with third parties.",
  },
  {
    q: "What is Joomz AI exactly?",
    a: "Joomz AI is the built-in AI assistant trained on e-commerce and marketing data. It understands your Shopify store, your ad performance and your ROAS per channel. Ask it anything: 'Which channel drove the most orders last week?' — and get a clear, data-backed answer in seconds.",
  },
  {
    q: "Does the Agency plan support multiple clients?",
    a: "Yes. The Agency plan gives you unlimited Shopify stores, white-label reports (your logo, your branding), API access for custom integrations, and a dedicated success manager. It's designed specifically for agencies managing 5+ clients.",
  },
  {
    q: "How long does setup take?",
    a: "Most brands connect Shopify and their first ad platform in under 15 minutes. No code required — just click-to-connect OAuth. Your first ROAS dashboard is live before your coffee is ready.",
  },
];

// ─────────────────────────────────────────────
// SUB COMPONENTS
// ─────────────────────────────────────────────

function BillingToggle({
  billing,
  onChange,
}: {
  billing: "monthly" | "annual";
  onChange: (v: "monthly" | "annual") => void;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#13111C] p-1">
      {(["monthly", "annual"] as const).map((opt) => {
        const active = billing === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
              active
                ? "bg-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/25"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {opt === "monthly" ? "Monthly" : "Annual"}
            {opt === "annual" && (
              <span
                className={`rounded-full px-1.5 py-0.5 text-[9px] font-black tracking-wider transition-colors ${
                  active ? "bg-[#FC801D] text-white" : "bg-[#FC801D]/20 text-[#FC801D]"
                }`}
              >
                −17%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function CellValue({ val, color }: { val: CellVal; color: string }) {
  if (val === true)
    return (
      <div className="flex justify-center">
        <CheckCircle2 className="h-4.5 w-4.5" style={{ color }} />
      </div>
    );
  if (val === false)
    return (
      <div className="flex justify-center">
        <Minus className="h-4 w-4 text-white/15" />
      </div>
    );
  return (
    <div className="text-center text-xs font-semibold text-white/60">{val}</div>
  );
}

// ─────────────────────────────────────────────
// FAQ ITEM
// ─────────────────────────────────────────────

function FaqItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-xl border bg-[#13111C] px-6 transition-colors ${
        open ? "border-white/[0.12]" : "border-white/[0.07] hover:border-white/[0.10]"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-white/80 hover:text-white transition-colors"
      >
        <span>{faq.q}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-white/40" />
        ) : (
          <Plus className="h-4 w-4 shrink-0 text-white/30" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-sm text-white/50 leading-relaxed">{faq.a}</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [tableOpen, setTableOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0B1A] text-white">
      <Navbar />

      <main>
        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
          {/* bg glows */}
          <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7B61FF]/8 blur-[120px]" />
          <div aria-hidden className="pointer-events-none absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-[#FC801D]/8 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              {/* Left — copy */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3">
                  <div className="h-px w-10 bg-gradient-to-r from-[#7B61FF] to-transparent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FC801D]">
                    Pricing
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
                  Simple pricing.
                  <br />
                  <span className="bg-gradient-to-r from-[#7B61FF] via-[#E91E8C] to-[#FC801D] bg-clip-text text-transparent">
                    Serious ROI.
                  </span>
                </h1>

                <p className="max-w-md text-base text-white/55 leading-relaxed sm:text-lg">
                  Connect Shopify, Google, Meta and TikTok — and see at a glance
                  which euros generate real orders. No hidden fees, no GMV-based pricing.
                </p>

                <BillingToggle billing={billing} onChange={setBilling} />

                {billing === "annual" && (
                  <p className="text-xs text-[#22C55E] font-semibold tracking-wide">
                    ✓ Annual billing · save up to €1,200 per year
                  </p>
                )}
              </div>

              {/* Right — Remotion chart */}
              <div className="relative group lg:mt-0 mt-4">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7B61FF]/20 to-[#FC801D]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#7B61FF]/30 bg-gradient-to-br from-[#13111C] to-[#0D0B1A]/60 p-4 sm:p-7 shadow-2xl">
                  <div aria-hidden className="absolute top-0 right-0 h-40 w-40 rounded-full bg-gradient-to-bl from-[#7B61FF]/12 to-transparent blur-3xl" />
                  {/* window chrome */}
                  <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <span className="ml-2 font-mono text-[10px] text-white/40">
                      Joomz AI · channel ROAS
                    </span>
                    <div className="ml-auto h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <PricingROASPlayer />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. PRICING CARDS ─────────────────────────────────── */}
        <section className="relative pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => {
                const price =
                  billing === "annual" ? plan.annualPrice : plan.monthlyPrice;
                const saving = (plan.monthlyPrice - plan.annualPrice) * 12;

                return (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                      plan.recommended
                        ? "border-[#7B61FF]/55 bg-gradient-to-br from-[#7B61FF]/10 to-[#13111C] shadow-2xl shadow-[#7B61FF]/15"
                        : "border-white/[0.08] bg-[#13111C] hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
                    }`}
                  >
                    {/* Most popular badge */}
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#7B61FF] to-[#E91E8C] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-[#7B61FF]/35">
                        ⭐ Most popular
                      </div>
                    )}

                    {/* Plan header */}
                    <div className="mb-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl"
                          style={{
                            background: `${plan.color}15`,
                            border: `1px solid ${plan.color}30`,
                          }}
                        >
                          <plan.Icon className="h-5 w-5" style={{ color: plan.color }} />
                        </div>
                        <div>
                          <p className="text-base font-black text-white">{plan.name}</p>
                          {billing === "annual" && saving > 0 && (
                            <p className="text-[10px] font-bold text-[#22C55E]">
                              Save €{saving}/yr
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-black text-white">
                          {plan.monthlyPrice === 0 ? "Free" : `€${price}`}
                        </span>
                        {plan.monthlyPrice > 0 && (
                          <span className="text-sm text-white/35">/mo</span>
                        )}
                      </div>

                      {billing === "annual" && plan.monthlyPrice > 0 && (
                        <p className="text-[10px] text-white/25">
                          Billed €{plan.annualPrice * 12} per year
                        </p>
                      )}

                      <p className="text-sm text-white/50 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <a
                      href="#"
                      className={`mb-7 flex items-center justify-center gap-2 rounded-full py-3 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                        plan.ctaFilled
                          ? "bg-[#7B61FF] text-white hover:bg-[#6A50EE] shadow-lg shadow-[#7B61FF]/25"
                          : plan.id === "agency"
                          ? "border border-[#FC801D]/50 text-[#FC801D] hover:bg-[#FC801D]/10"
                          : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>

                    {/* Divider */}
                    <div className="mb-5 h-px bg-white/[0.06]" />

                    {/* Features */}
                    <div className="flex-1 space-y-3">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: plan.color }}
                          />
                          <span className="text-sm text-white/65 leading-snug">{f}</span>
                        </div>
                      ))}
                      {plan.missing.map((f) => (
                        <div key={f} className="flex items-start gap-3 opacity-35">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                          <span className="text-sm text-white/40 leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust strip */}
            <p className="mt-12 text-center text-[11px] uppercase tracking-[0.2em] text-white/20">
              Trusted by{" "}
              <span className="text-white/40">1,800+ Shopify merchants</span>
              {" "}· No credit card required · Cancel any time
            </p>
          </div>
        </section>

        {/* ── 3. RESULTS STRIP ────────────────────────────────── */}
        <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#13111C] py-20 sm:py-28">
          <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-[#7B61FF]/8 blur-[110px]" />
          <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 w-[400px] h-[400px] rounded-full bg-[#FC801D]/6 blur-[100px]" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-[#7B61FF] to-transparent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                Real results
              </span>
            </div>

            <h2 className="mb-3 text-3xl font-black tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
              What Joomz AI
              <span className="text-white/30"> customers achieve</span>
            </h2>
            <p className="mb-10 max-w-xl text-base text-white/45 leading-relaxed">
              Average results across 1,800+ Shopify merchants in the first 90 days.
            </p>

            {/* Remotion stats */}
            <PricingStatsPlayer />

            {/* Testimonial */}
            <div className="mt-12 border-t border-white/[0.06] pt-10">
              <blockquote className="max-w-2xl text-base text-white/45 italic leading-relaxed sm:text-lg">
                "Joomz AI pays for itself in the first week. We cut wasted ad spend by
                €8,400 in 30 days — and our ROAS went from 2.1 to 5.2."
              </blockquote>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                Daan Willems · Marketing Director, Flexflow Agency
              </p>
              <a
                href="#"
                className="group mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/35 hover:text-white/70 transition-colors"
              >
                View case study
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. FEATURE COMPARISON TABLE ─────────────────────── */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-[#FC801D] to-transparent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                    Feature comparison
                  </span>
                </div>
                <h2 className="text-3xl font-black tracking-[-0.02em] text-white sm:text-4xl">
                  Everything you get
                </h2>
              </div>
              <button
                onClick={() => setTableOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white/50 transition-all hover:border-white/35 hover:text-white"
              >
                {tableOpen ? "Hide comparison" : "See detailed comparison"}
                {tableOpen ? (
                  <ChevronUp className="h-3.5 w-3.5" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            {tableOpen && (
              <div className="overflow-x-auto rounded-2xl border border-white/[0.07]">
                <table className="w-full min-w-[700px] border-collapse">
                  {/* Header */}
                  <thead>
                    <tr className="border-b border-white/[0.07] bg-[#13111C]">
                      <th className="p-5 text-left text-xs font-bold uppercase tracking-widest text-white/25 w-56">
                        Feature
                      </th>
                      {plans.map((plan, i) => (
                        <th
                          key={plan.id}
                          className="p-5 text-center"
                          style={{ width: "calc((100% - 224px) / 4)" }}
                        >
                          <div className="flex flex-col items-center gap-1">
                            <span
                              className="text-sm font-black"
                              style={{ color: planColors[i] }}
                            >
                              {plan.name}
                            </span>
                            {plan.recommended && (
                              <span className="rounded-full bg-[#7B61FF]/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#7B61FF]">
                                Popular
                              </span>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody>
                    {featureCategories.map((cat) => (
                      <>
                        {/* Category header row */}
                        <tr key={cat.name} className="bg-[#0D0B1A]/60">
                          <td
                            colSpan={5}
                            className="px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25"
                          >
                            {cat.name}
                          </td>
                        </tr>

                        {/* Feature rows */}
                        {cat.features.map((feat, fi) => (
                          <tr
                            key={feat.name}
                            className={`border-b border-white/[0.04] transition-colors hover:bg-white/[0.02] ${
                              fi % 2 === 0 ? "bg-[#13111C]/30" : "bg-transparent"
                            }`}
                          >
                            <td className="px-5 py-3.5 text-sm text-white/55">
                              {feat.name}
                            </td>
                            {feat.values.map((val, vi) => (
                              <td key={vi} className="px-5 py-3.5">
                                <CellValue val={val} color={planColors[vi]} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* quick preview when collapsed */}
            {!tableOpen && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {plans.map((plan, i) => (
                  <div
                    key={plan.id}
                    className="rounded-xl border border-white/[0.07] bg-[#13111C] p-4 space-y-1.5"
                  >
                    <p className="text-xs font-black" style={{ color: planColors[i] }}>
                      {plan.name}
                    </p>
                    {plan.features.slice(0, 4).map((f) => (
                      <p key={f} className="text-[11px] text-white/40 leading-snug">
                        · {f}
                      </p>
                    ))}
                    {plan.features.length > 4 && (
                      <p className="text-[10px] text-white/25">
                        + {plan.features.length - 4} more…
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── 5. FAQ ───────────────────────────────────────────── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28 bg-[#0D0B1A]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-[#FC801D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">FAQ</span>
                <div className="h-px w-8 bg-[#FC801D]" />
              </div>
              <h2 className="text-3xl font-black tracking-[-0.02em] text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-sm text-white/40">
                Can't find what you're looking for?{" "}
                <a href="#" className="text-[#7B61FF] hover:text-[#9B81FF] transition-colors">
                  Chat with us →
                </a>
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CTA ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-white/[0.06] py-32 sm:py-40">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-[#7B61FF]/8 blur-[120px]" />
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[400px] rounded-full bg-[#FC801D]/6 blur-[80px]" />

          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-white/15" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                Start today
              </span>
              <div className="h-px w-10 bg-white/15" />
            </div>

            <h2 className="text-4xl font-black leading-[1.0] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Ready to double your{" "}
              <span className="bg-gradient-to-r from-[#7B61FF] to-[#FC801D] bg-clip-text text-transparent">
                Shopify ROAS?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base text-white/40 leading-relaxed">
              Join 1,800+ e-commerce teams. Start free or book a 20-minute walkthrough
              — no credit card required.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] text-[#0D0B1A] shadow-2xl transition-all hover:bg-white/90"
              >
                Start for free
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] text-white/60 transition-all hover:border-white/40 hover:text-white"
              >
                Book a demo
              </a>
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.15em] text-white/20">
              14-day free trial · No credit card · Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
