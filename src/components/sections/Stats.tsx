"use client";

import { ArrowRight } from "lucide-react";
import { StatsCounterPlayer } from "@/components/remotion/StatsCounterPlayer";

const updates = [
  {
    badge: "New",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
    title: "Smart Budget Optimizer",
    description:
      "Joomz AI automatically redistributes your ad budget based on real-time ROAS data — every day, on autopilot.",
    cta: "Read more",
  },
  {
    badge: "Beta",
    badgeColor: "bg-[#FC801D]/10 text-[#FC801D] border-[#FC801D]/30",
    title: "Predictive Segmentation",
    description:
      "Predict which Shopify customers have the highest LTV and automatically build lookalike audiences on every channel.",
    cta: "Join the beta",
  },
  {
    badge: "Coming soon",
    badgeColor: "bg-white/5 text-white/40 border-white/10",
    title: "Joomz Creative Studio",
    description:
      "Generate on-brand advertising creatives based on your best-performing Shopify content — including variants per platform.",
    cta: "Join waitlist",
  },
];

export function Stats() {
  return (
    <section className="relative pt-0 pb-24 sm:pb-32 lg:pb-48 bg-[#0D0B1A] overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#FC801D]/8 blur-[120px] opacity-50 sm:opacity-100" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-[#7B61FF]/6 blur-[120px] opacity-50 sm:opacity-100" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Key metrics removed — simplified Stats section */}

        {/* Section header */}
        <div className="inline-flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16">
          <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-gradient-to-r from-[#7B61FF] to-transparent rounded-full" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/40">New on the platform</span>
        </div>

        {/* Update cards — cinematic glass */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {updates.map(({ badge, badgeColor, title, description, cta }) => (
            <div
              key={title}
              className="group relative flex flex-col gap-4 sm:gap-5 lg:gap-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-md p-6 sm:p-7 lg:p-8 hover:border-white/[0.15] hover:bg-white/[0.08] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/0 to-[#FC801D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative space-y-4 sm:space-y-5">
                <span className={`w-fit rounded-full border px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] ${badgeColor}`}>
                  {badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white/95 leading-snug">{title}</h3>
                <p className="text-xs sm:text-sm text-white/45 leading-relaxed flex-1">{description}</p>
                <a
                  href="#"
                  className="mt-auto pt-2 inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-white/40 hover:text-white/80 transition-colors duration-300 group"
                >
                  {cta} 
                  <ArrowRight className="h-3 sm:h-3.5 w-3 sm:w-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
