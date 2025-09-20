import Complain from "@/components/complain/Complain";
import React from "react";
import { db } from "../../../lib/db";

export default async function page() {
  const videos = await db.query.video.findMany({
    with: {
      repostVideos: true,
    },
  });
  return (
    <main className="mt-20">
      <Complain />
    </main>
  );
}
