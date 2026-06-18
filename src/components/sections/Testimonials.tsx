"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Joomz AI truly understands our business. It's not just a chatbot — it connects our Shopify data to our ads and acts like a senior growth manager who never sleeps.",
    name: "Nathalie de Vries",
    title: "Head of Growth",
    company: "BrandBoost",
    highlight: "3× more Shopify revenue in 6 months",
  },
  {
    quote:
      "Joomz AI shows us exactly which Meta and TikTok ads actually drive revenue. Our ROAS went from 2.1 to 5.8 in three months.",
    name: "Daan Willems",
    title: "Marketing Director",
    company: "Flexflow Agency",
    highlight: "ROAS from 2.1 → 5.8",
  },
  {
    quote:
      "Finally one dashboard for Shopify, Google Ads and Meta. Joomz AI connects everything and delivers insights you won't find anywhere else.",
    name: "Sara Koops",
    title: "CEO",
    company: "Trekkr DTC",
    highlight: "2× faster decisions",
  },
  {
    quote:
      "As an agency we manage 40+ Shopify accounts. Joomz AI scales our work without needing extra headcount.",
    name: "Thomas Lammers",
    title: "Agency Founder",
    company: "Veloce Media",
    highlight: "40+ accounts on autopilot",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section className="py-24 lg:py-32 border-y border-[#7B61FF]/15 bg-[#13111C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#FC801D] mb-4">
          What our customers say
        </p>
        <h2 className="text-center text-4xl font-extrabold text-white mb-16">
          Trusted by Shopify teams that see results
        </h2>

        <div className="relative mx-auto max-w-3xl text-center">
          <Quote className="mx-auto mb-6 h-10 w-10 text-[#7B61FF]/40" />

          <blockquote className="text-2xl font-medium text-white/90 leading-relaxed min-h-[120px]">
            "{active.quote}"
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FC801D]/10 border border-[#FC801D]/25 px-4 py-1.5 text-sm font-semibold text-[#FC801D]">
              {active.highlight}
            </div>
            <p className="mt-4 font-semibold text-white">{active.name}</p>
            <p className="text-sm text-white/40">
              {active.title} · {active.company}
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="border-[#7B61FF]/25 text-white/50 hover:bg-[#7B61FF]/10 hover:text-[#7B61FF] bg-transparent"
              onClick={() =>
                setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-[#7B61FF]"
                      : "w-2 bg-[#7B61FF]/20 hover:bg-[#7B61FF]/40"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="border-[#7B61FF]/25 text-white/50 hover:bg-[#7B61FF]/10 hover:text-[#7B61FF] bg-transparent"
              onClick={() =>
                setIndex((i) => (i + 1) % testimonials.length)
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
