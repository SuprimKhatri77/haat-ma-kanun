import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "aos/dist/aos.css";

import "./globals.css";
import { HeroHeader } from "@/components/Header";
import FooterSection from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import ChatBot from "@/components/OpenAiChatBot/ChatBot";
import { user } from "../../lib/db/schema";
import { eq } from "drizzle-orm";
import { db } from "../../lib/db";
import { redirect } from "next/navigation";
import { auth } from "../../server/lib/auth/auth";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haat ma kanun",
  description: "A legal Platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        >
          <HeroHeader />
          <ChatBot />
          {children}
          <FooterSection />
          <Toaster />
        </body>
      </html>
    );
  }

  const [userRecord] = await db
    .select()
    .from(user)
    .where(eq(user.id, session.user.id));
  if (!userRecord) {
    return redirect("/sign-up");
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <HeroHeader userRecord={userRecord} />
        <ChatBot />
        {children}
        <FooterSection />
        <Toaster />
      </body>
    </html>
  );
}
