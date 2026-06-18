"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const faqData = {
  "Joomz AI": [
    {
      q: "What exactly is Joomz AI?",
      a: "Joomz AI is the AI brain of Joomz — an autonomous assistant built specifically for Shopify merchants and marketing teams. It connects your Shopify store to your ad platforms (Google, Meta, TikTok) and gives you real-time insight into what's working.",
    },
    {
      q: "What can Joomz AI actually do?",
      a: "Connect Shopify data with Google Ads, Meta Ads and TikTok Ads. Compare ROAS per channel. Detect underperforming campaigns. Automatically redistribute budgets. Send weekly ROAS reports. Make predictions per product category.",
    },
    {
      q: "Do I need to learn how to prompt well?",
      a: "No. Joomz AI works with plain language. Say 'which ads drive my Shopify orders?' and you get a clear answer right away. No AI expertise required.",
    },
    {
      q: "Does Joomz AI make changes autonomously?",
      a: "Only if you want it to. For most actions, Joomz AI proposes a change and asks for approval. You can also set thresholds for fully automatic management.",
    },
    {
      q: "Is my data safe?",
      a: "Yes. Joomz connects via secure API integrations. All actions are logged, you retain full control. Your data is never used to train AI models or shared with other customers.",
    },
  ],
  Platform: [
    {
      q: "Which tools does Joomz integrate with?",
      a: "Joomz integrates with Shopify, Meta Ads, Google Ads, TikTok Ads, Klaviyo, Stripe, Pinterest Ads, Snapchat Ads, WooCommerce and more. See the full integrations page for an up-to-date list.",
    },
    {
      q: "Is there an API available?",
      a: "Yes. Joomz offers a full REST API and webhooks for custom integrations. Documentation is available for developers.",
    },
    {
      q: "Does Joomz support multiple Shopify stores?",
      a: "Yes. You can manage multiple Shopify stores and ad accounts from one dashboard. Ideal for agencies running multiple client accounts.",
    },
  ],
  Pricing: [
    {
      q: "How much does Joomz cost?",
      a: "Joomz starts with a free plan for small teams. Paid plans start from €89/month and scale with your Shopify revenue and ad spend. See our pricing page for a full overview.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes. All paid plans include a 14-day free trial. No credit card required to get started.",
    },
  ],
};

export function FAQ() {
  return (
    <section className="-mt-[150px] py-24 lg:py-32 bg-[#0D0B1A]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#FC801D] mb-4">
          FAQ
        </p>
        <h2 className="text-center text-4xl font-extrabold mb-8">
          <span className="text-white/40">Frequently asked </span>
          <span className="text-white">Questions</span>
        </h2>

        <Tabs defaultValue="Joomz AI">
          <TabsList className="mb-8 flex w-full bg-[#13111C] border border-[#7B61FF]/20">
            {Object.keys(faqData).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="flex-1 data-[state=active]:bg-[#7B61FF] data-[state=active]:text-white text-white/40"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(faqData).map(([tab, items]) => (
            <TabsContent key={tab} value={tab}>
              <Accordion className="space-y-3">
                {items.map(({ q, a }, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="rounded-xl border border-[#7B61FF]/15 bg-[#13111C] px-5 hover:border-[#7B61FF]/35 transition-colors"
                  >
                    <AccordionTrigger className="text-white hover:text-[#A78BFA] text-left py-5 font-semibold">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/50 pb-5 leading-relaxed">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
