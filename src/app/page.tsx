import Features from "@/components/Features";
import { HeroHeader } from "@/components/Header";
import HeroSection from "@/components/Hero";
import StatsSection from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
    
    <main className="mt-20">
      <HeroSection />
      <Features />
      <StatsSection />
      <Testimonials />
    </main>
    </>
  );
}
