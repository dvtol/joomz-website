import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  BarChart3,
  TrendingUp,
  Target,
  Users,
  Bell,
  Bot,
  ArrowRight,
} from "lucide-react";

const useCases = [
  {
    icon: ShoppingBag,
    text: "Connect your Shopify store and see orders, revenue and CLV in real time — per product category.",
  },
  {
    icon: BarChart3,
    text: "View your Google Ads, Meta and TikTok performance side by side in one unified dashboard.",
  },
  {
    icon: TrendingUp,
    text: "Joomz AI calculates your true ROAS per channel — corrected for Shopify returns.",
  },
  {
    icon: Target,
    text: "Detect which ads are becoming saturated and automatically receive a new creative proposal.",
  },
  {
    icon: Users,
    text: "Build customer segments based on purchase behavior and sync them as lookalikes to Meta and TikTok.",
  },
  {
    icon: Bell,
    text: "Get a Slack alert the moment a campaign exceeds your CPA target — before you waste budget.",
  },
  {
    icon: Bot,
    text: "Ask Joomz AI: 'Which channel drives my new customers?' — and get a data-backed answer.",
  },
];

export function Features() {
  return (
    <section id="platform" className="relative py-40 bg-[#0D0B1A]">
      {/* Subtle purple glow */}
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7B61FF]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 flex items-start gap-8">
          <span className="hidden lg:block text-[120px] font-black leading-none text-white/[0.03] select-none -mt-4">01</span>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-[#FC801D]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">What Joomz AI does</span>
            </div>
            <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.02em] text-white lg:text-5xl">
              Seven insights you can{" "}
              <span className="text-white/40">use today</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <p className="text-lg text-white/50 leading-relaxed max-w-md">
              Joomz AI connects your Shopify data with your ad platforms.
              No more spreadsheets — just fast, reliable decisions.
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 transition-all hover:border-white/35 hover:text-white"
              >
                Try Joomz AI for free
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="mt-16 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          {/* Right: numbered use-case list */}
          <ol className="flex flex-col gap-px">
            {useCases.map(({ icon: Icon, text }, i) => (
              <li
                key={i}
                className="group flex items-start gap-5 border-b border-white/[0.05] py-5 transition-all hover:border-white/10"
              >
                <span className="mt-0.5 w-7 shrink-0 text-[11px] font-bold text-white/20 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-white/25 group-hover:text-[#FC801D] transition-colors" />
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
