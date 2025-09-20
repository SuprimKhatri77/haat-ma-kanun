import Complain from "@/components/complain/Complain";
import React from "react";
import { db } from "../../../lib/db";
import { VideoWithRepost } from "../../../types/all-types";
import { ComplainHeroSection } from "@/components/complain/ComplainHeroSection";

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
  return (
    <main className="mt-20">
      <ComplainHeroSection />
      <Complain videos={videos} />
    </main>
  );
}
