"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, Repeat, User } from "lucide-react";
import { VideoWithRepost } from "../../../types/all-types";
import { toast } from "sonner";

export default function Complain({ videos }: { videos: VideoWithRepost[] }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Citizen Complaints</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-lg">{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <video
                src={video.videoUrl!}
                controls
                className="w-full rounded-xl mb-3"
              />
              <p className="text-sm text-neutral-300 mb-3">{video.body}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-neutral-400">
                  <User size={16} />
                  <span>Anonymous</span>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() =>
                      toast.success("Video Reposted Successfully!")
                    }
                  >
                    <Repeat size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
