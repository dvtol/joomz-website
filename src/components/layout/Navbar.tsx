"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Products", href: "#products" },
  { label: "Pricing",  href: "/pricing"  },
  { label: "Resources", href: "#resources" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0D0B1A]/85 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="text-lg font-black tracking-[0.12em] text-white uppercase">
            Joomz
          </span>
          <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium border-l border-white/15 pl-3">
            AI Platform
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="/login"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white"
          >
            Log in
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 hover:bg-white hover:text-[#0D0B1A]"
          >
            Get started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu fullscreen overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop — tap to close */}
          <div
            className="fixed inset-0 top-[72px] bg-black/40 backdrop-blur-sm lg:hidden z-40"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="relative z-50 border-t border-white/[0.06] bg-[#0D0B1A] px-6 pb-8 pt-6 lg:hidden shadow-2xl">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-4 border-t border-white/[0.06] pt-6">
                <a href="/login" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 hover:text-white">
                  Log in
                </a>
                <a href="#" className="inline-flex w-fit items-center rounded-full border border-white/20 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-white hover:text-[#0D0B1A] transition-all">
                  Get started
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
