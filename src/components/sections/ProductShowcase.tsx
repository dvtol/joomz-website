"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { DashboardRevealPlayer } from "@/components/remotion/DashboardRevealPlayer";

const differences = [
  {
    number: "01",
    title: "Shopify + Ads at a glance.",
    description:
      "Connect your Shopify store and ad accounts. Joomz AI shows exactly which campaigns drive real revenue — not just clicks.",
  },
  {
    number: "02",
    title: "ROAS per channel, in real-time.",
    description:
      "Compare Google, Meta and TikTok next to your Shopify orders. See where your budget works and where it leaks.",
  },
  {
    number: "03",
    title: "Automatic optimization.",
    description:
      "Joomz AI detects underperforming ad sets and suggests budget shifts — or executes them directly on your instruction.",
  },
];

export function ProductShowcase() {
  return (
    <section id="products" className="relative py-16 sm:py-24 lg:py-32 xl:py-48 bg-[#0D0B1A] overflow-hidden">
      {/* Decorative background elements */}
      <div aria-hidden className="pointer-events-none absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-[#7B61FF]/10 blur-[120px] opacity-50 sm:opacity-100" />
      <div aria-hidden className="pointer-events-none absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-[#FC801D]/8 blur-[120px] opacity-50 sm:opacity-100" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top: Meet Joomz AI */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 w-fit">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#7B61FF] to-transparent" />
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#FC801D]">
                Meet Joomz AI
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-[-0.02em]">
                Your Shopify
                <br className="hidden sm:block" />
                &amp; ads data{" "}
                <span className="bg-gradient-to-r from-[#7B61FF] via-[#E91E8C] to-[#FC801D] bg-clip-text text-transparent">
                  finally connected
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed max-w-lg">
              Joomz AI connects your Shopify store with Google Ads, Meta Ads and TikTok Ads.
              See exactly what works, what it costs and what it returns — in real-time.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <Button
                className="bg-[#7B61FF] text-white hover:bg-[#6A50EE] shadow-lg shadow-[#7B61FF]/30 font-semibold uppercase tracking-wider text-xs sm:text-sm px-6 sm:px-8"
                size="lg"
              >
                See Joomz AI in action
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:border-white/40 hover:bg-white/5 font-semibold uppercase tracking-wider text-xs sm:text-sm px-6 sm:px-8"
                size="lg"
              >
                View demo
              </Button>
            </div>
          </div>

          {/* Remotion animated dashboard */}
          <div className="relative group mt-8 lg:mt-0">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/20 to-[#FC801D]/10 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative rounded-2xl sm:rounded-3xl border border-[#7B61FF]/30 bg-gradient-to-br from-[#13111C] to-[#0D0B1A]/50 backdrop-blur-xl p-4 sm:p-8 shadow-2xl overflow-hidden">
              {/* Accent gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#7B61FF]/10 to-transparent rounded-full blur-3xl" />
              
              <div className="relative space-y-3 sm:space-y-5">
                <div className="flex items-center gap-3 sm:gap-4 border-b border-white/10 pb-3 sm:pb-4">
                  <div className="flex gap-1.5 sm:gap-2">
                    <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#28C840]" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-white/50 font-mono font-medium ml-2 sm:ml-3 truncate">Joomz AI · live dashboard</span>
                  <div className="ml-auto h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-green-400 animate-pulse" />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <DashboardRevealPlayer />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Differences */}
        <div className="mt-16 sm:mt-24 lg:mt-32 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#FC801D] to-transparent" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Why Joomz AI
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {differences.map(({ number, title, description }) => (
              <div
                key={number}
                className="group relative rounded-2xl border border-[#7B61FF]/15 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 sm:p-8 hover:border-[#7B61FF]/40 hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/0 to-[#FC801D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-4xl sm:text-5xl font-black text-[#7B61FF]/15 leading-none">
                      {number}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle2 className="mt-0.5 h-5 sm:h-6 w-5 sm:w-6 shrink-0 text-[#FC801D]" />
                    <div className="space-y-1.5 sm:space-y-2">
                      <h3 className="font-bold text-white text-sm sm:text-lg">{title}</h3>
                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
