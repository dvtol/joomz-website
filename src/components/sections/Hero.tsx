import { ArrowRight } from "lucide-react";

// ── App store badge components ───────────────────────────────
function AppStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black/60 px-5 py-3 backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-black/80"
      aria-label="Download on the App Store"
    >
      {/* Apple logo */}
      <svg viewBox="0 0 24 24" className="h-6 w-6 flex-shrink-0 fill-white" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/60">Download on the</span>
        <span className="text-[14px] font-bold text-white">App Store</span>
      </div>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black/60 px-5 py-3 backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-black/80"
      aria-label="Get it on Google Play"
    >
      {/* Google Play logo */}
      <svg viewBox="0 0 24 24" className="h-6 w-6 flex-shrink-0" aria-hidden>
        <path d="M3.18 23.76c.3.17.64.24 1 .19l12.12-12.12L13 8.56 3.18 23.76z" fill="#EA4335"/>
        <path d="M20.47 10.37l-2.85-1.62L14.3 12l3.32 3.32 2.85-1.63c.81-.46.81-1.86 0-2.32z" fill="#FBBC04"/>
        <path d="M4.18.05C3.82 0 3.48.07 3.18.24L16.3 13.37l3.32-3.32L4.18.05z" fill="#4285F4"/>
        <path d="M3.18.24C2.37.7 2 1.58 2 2.5v19c0 .92.37 1.8 1.18 2.26L16.3 10.63 3.18.24z" fill="#34A853"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/60">Get it on</span>
        <span className="text-[14px] font-bold text-white">Google Play</span>
      </div>
    </a>
  );
}

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] [height:100dvh] flex items-center">

      {/* ── Video (overflow-hidden hier zodat scale-105 niet uitloopt) ── */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/1093662/1093662-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ── Cinematic overlays ──────────────────────────────────── */}
      {/* Vignette edges */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0D0B1A_100%)]" />
      {/* Bottom fade — naadloze overgang naar LogoMarquee */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#0D0B1A] to-transparent" />
      {/* Top fade */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0D0B1A]/60 to-transparent" />
      {/* Subtle dark tint */}
      <div aria-hidden className="absolute inset-0 bg-[#0D0B1A]/35" />

      {/* ── Letterbox: alleen bovenste balk (filmisch) ─────────── */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-[56px] bg-black z-10" />

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="animate-fade-in flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="h-px w-8 sm:w-12 bg-[#7B61FF] animate-line-grow" />
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
              E-Commerce Intelligence · Joomz AI
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in-up delay-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.0] tracking-[-0.03em] text-white"
            style={{ fontFeatureSettings: '"ss01" 1' }}
          >
            <span className="text-white">Amplifying Human Ingenuity.</span>
            <br />
            <span 
              className="bg-gradient-to-r from-[#7B61FF] via-[#E91E8C] to-[#FC801D] bg-clip-text text-transparent inline-block animate-fade-in-up delay-300"
              style={{ 
                fontFeatureSettings: '"ss01" 1',
                animation: 'fadeInUp 0.8s ease-out 0.6s both'
              }}
            >
              JOOMZ AI
            </span>
          </h1>

          {/* Divider */}
          <div className="animate-fade-in delay-300 mt-6 sm:mt-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

          {/* Sub */}
          <p className="animate-fade-in-up delay-300 mt-6 sm:mt-8 max-w-xl text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed font-normal">
            Connect Shopify, Google, Meta and TikTok Ads.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-500 mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex justify-center sm:justify-start items-center gap-2 rounded-full bg-white px-6 sm:px-7 py-3 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0D0B1A] transition-all duration-200 hover:bg-white/90 shadow-2xl"
            >
              Connect your Shopify
              <ArrowRight className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
            </a>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex justify-center sm:justify-start items-center gap-2 rounded-full border border-white/25 px-6 sm:px-7 py-3 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-white/80 transition-all duration-200 hover:border-white/50 hover:text-white"
            >
              Watch live demo
            </a>
          </div>

          {/* Social proof */}
          <p className="animate-fade-in delay-700 mt-6 sm:mt-8 text-[9px] sm:text-[11px] tracking-[0.1em] uppercase text-white/25">
            Trusted by{" "}
            <span className="text-white/50">1,800+ Shopify merchants</span>
            {" "}— no credit card required
          </p>

          {/* App store badges */}
          <div className="animate-fade-in delay-700 mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-16 right-4 sm:right-8 z-20 flex flex-col items-center gap-2 animate-fade-in delay-900 hidden sm:flex">
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/25 [writing-mode:vertical-lr]">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
