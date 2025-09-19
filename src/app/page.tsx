import Features from "@/components/Features";
import { HeroHeader } from "@/components/Header";
import HeroSection from "@/components/Hero";
import StatsSection from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="mt-20">
      <HeroSection />
      <Features />
      <StatsSection />
      <Testimonials />
    </main>
  );
}
