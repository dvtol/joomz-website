import type { Metadata } from "next";
import { PricingPage } from "@/components/sections/PricingPage";

export const metadata: Metadata = {
  title: "Pricing — Joomz AI",
  description:
    "Simple, transparent pricing for every Shopify store size. Start free, upgrade when you grow. No credit card required.",
};

export default function Page() {
  return <PricingPage />;
}
