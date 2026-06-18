import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Stats } from "@/components/sections/Stats";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0B1A] text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <Testimonials />
        <ProductShowcase />
        <Stats />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
