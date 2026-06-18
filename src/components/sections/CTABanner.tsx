import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative bg-[#0D0B1A]">
      {/* Full-width cinematic divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative py-40 px-6 lg:px-8 overflow-hidden">
        {/* Glow */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#7B61FF]/8 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-[#FC801D]/6 blur-[80px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-white/15" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">Ready to start?</span>
            <div className="h-px w-12 bg-white/15" />
          </div>

          <h2 className="text-5xl font-black leading-[1.0] tracking-[-0.03em] text-white lg:text-6xl">
            Double your{" "}
            <span className="bg-gradient-to-r from-[#7B61FF] to-[#FC801D] bg-clip-text text-transparent">
              Shopify revenue
            </span>
            {" "}with smarter ads
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/40 leading-relaxed">
            Join 2,400+ e-commerce teams.
            No credit card required — live in 5 minutes.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] text-[#0D0B1A] transition-all hover:bg-white/90 shadow-2xl"
            >
              Book a free demo
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] text-white/60 transition-all hover:border-white/30 hover:text-white"
            >
              View all features
            </a>
          </div>

          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
      </div>
    </section>
  );
}
