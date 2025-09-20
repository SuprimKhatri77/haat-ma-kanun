"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, Repeat, User } from "lucide-react";

type VideoData = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  uploader: string;
  level: "Local" | "Province" | "Federal";
  supports: number;
  reposts: number;
};

const dummyVideos: VideoData[] = [
  {
    id: 1,
    title: "Bribery Case at Local Office",
    description:
      "Citizen recorded evidence of bribe demand at ward office. Submitted anonymously.",
    videoUrl: "/sample1.mp4",
    uploader: "Anonymous",
    level: "Local",
    supports: 42,
    reposts: 12,
  },
  {
    id: 2,
    title: "Misuse of Funds in Province Project",
    description:
      "Construction budget misused. Citizen provides video proof of halted work.",
    videoUrl: "/sample2.mp4",
    uploader: "Anonymous",
    level: "Province",
    supports: 30,
    reposts: 9,
  },
];

export default function Complain() {
  const [videos, setVideos] = useState(dummyVideos);

  const handleSupport = (id: number) => {
    setVideos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, supports: v.supports + 1 } : v))
    );
  };

  const handleRepost = (id: number) => {
    setVideos((prev) =>
      prev.map((v) => (v.id === id ? { ...v, reposts: v.reposts + 1 } : v))
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Citizen Complaints</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-lg">{video.title}</CardTitle>
              <p className="text-sm text-neutral-400">{video.level} Level</p>
            </CardHeader>
            <CardContent>
              <video
                src={video.videoUrl}
                controls
                className="w-full rounded-xl mb-3"
              />
              <p className="text-sm text-neutral-300 mb-3">
                {video.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-neutral-400">
                  <User size={16} />
                  <span>{video.uploader}</span>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1"
                    onClick={() => handleSupport(video.id)}
                  >
                    <ThumbsUp size={16} /> {video.supports}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1"
                    onClick={() => handleRepost(video.id)}
                  >
                    <Repeat size={16} /> {video.reposts}
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
