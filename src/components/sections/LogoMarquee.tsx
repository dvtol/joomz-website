"use client";

// Logo Marquee: directe koppelingen met platformen — wit, groot, zichtbaar
const logos = [
  { name: "Shopify", icon: "🛍" },
  { name: "Google Ads", icon: "🔵" },
  { name: "Meta Ads", icon: "📘" },
  { name: "TikTok Ads", icon: "🎵" },
  { name: "Klaviyo", icon: "📧" },
  { name: "Pinterest Ads", icon: "📌" },
  { name: "Snapchat Ads", icon: "👻" },
  { name: "Stripe", icon: "💳" },
  { name: "WooCommerce", icon: "🛒" },
];

export function LogoMarquee() {
  const doubled = [...logos, ...logos];

  return (
    <section className="pt-0 pb-10 border-y border-[#7B61FF]/15 bg-[#13111C]">
      <p className="text-center text-xs text-white/30 mb-7 mt-6 tracking-widest uppercase font-medium">
        Direct integrations with your platforms
      </p>
      <div className="relative flex overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#13111C] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#13111C] to-transparent z-10" />

        <div className="flex animate-marquee gap-12 whitespace-nowrap items-center">
          {doubled.map((logo, i) => (
            <span
              key={`${logo.name}-${i}`}
              className="inline-flex items-center gap-2.5 px-5 py-2 text-base font-semibold text-white/80 tracking-wide hover:text-white transition-colors cursor-default select-none"
            >
              <span className="text-lg leading-none">{logo.icon}</span>
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
