import Features from "@/components/Features";
// import { HeroHeader } from "@/components/Header";
import HeroSection from "@/components/Hero";
import StatsSection from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { auth } from "../../server/lib/auth/auth";
import { headers } from "next/headers";
import { db } from "../../lib/db";
import { user } from "../../lib/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
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
