import type { Metadata } from "next";
import { LoginPage } from "@/components/sections/LoginPage";

export const metadata: Metadata = {
  title: "Log in — Joomz AI",
  description: "Log in to your Joomz AI dashboard. Connect Shopify, Google, Meta and TikTok Ads in one place.",
};

export default function Page() {
  return <LoginPage />;
}
