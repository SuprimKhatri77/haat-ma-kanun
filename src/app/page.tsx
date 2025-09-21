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
