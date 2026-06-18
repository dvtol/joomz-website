import { ArrowRight } from "lucide-react";

const footerLinks = {
  Platform: ["Overview", "Shopify Integration", "Ads Integrations", "API Docs", "Status"],
  Products: ["Joomz AI", "ROAS Dashboard", "Budget Optimizer", "Automations", "Reports"],
  Company: ["About us", "Blog", "Careers", "Partners", "Press"],
  Support: ["Help Center", "Community", "Contact", "Privacy", "Terms"],
};

export function Footer() {
  return (
    <footer className="bg-[#08060F]">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block">
              <span className="text-base font-black tracking-[0.15em] text-white uppercase">Joomz</span>
            </a>
            <p className="mt-4 text-xs text-white/25 leading-relaxed tracking-wide max-w-[160px]">
              AI that gets work done,<br />not just gives insights.
            </p>
            <address className="mt-5 not-italic">
              <p className="text-xs text-white/25 leading-relaxed">
                Buitenveldertselaan 150<br />
                1081AB Amsterdam
              </p>
            </address>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 transition-colors hover:text-white/60"
            >
              Get started free <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-white/30 transition-colors hover:text-white/70"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-8 sm:flex-row">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © {new Date().getFullYear()} Joomz B.V. · Amsterdam
          </p>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] uppercase tracking-[0.15em] text-white/20 hover:text-white/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
