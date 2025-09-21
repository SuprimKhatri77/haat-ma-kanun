import Complain from "@/components/complain/Complain";
import React from "react";
import { db } from "../../../lib/db";
import { VideoWithRepost } from "../../../types/all-types";
import { ComplainHeroSection } from "@/components/complain/ComplainHeroSection";
import { auth } from "../../../server/lib/auth/auth";
import { headers } from "next/headers";
import { user } from "../../../lib/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function page() {
  const videos: VideoWithRepost[] = await db.query.video.findMany({
    with: {
      repostVideos: true,
    },
  });
  if (videos.length === 0) {
    return (
      <div>
        <h1>No videos found!</h1>
      </div>
    );
  }
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <main className="mt-20">
        <ComplainHeroSection />
        <Complain videos={videos} />
      </main>
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
    <main className="mt-20">
      <ComplainHeroSection userRecord={userRecord} />
      <Complain videos={videos} />
    </main>
  );
}
