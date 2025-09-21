"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, Repeat, User, FlagIcon } from "lucide-react";
import { VideoWithRepost } from "../../../types/all-types";
import { toast } from "sonner";

export default function Complain({ videos }: { videos: VideoWithRepost[] }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Citizens Complaints
      </h1>

      <div className="grid grid-cols-1 max-w-[800px] gap-6 justify-items-center align-middle m-auto md:grid-cols-2">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="bg-neutral-900 flex justify-between border-neutral-800 min-w-[350px] border-2 rounded-2xl"
          >
            <CardHeader className="flex justify-between">
              <CardTitle className="text-lg text-white">
                {video.title}
              </CardTitle>
              {/* put it inside tooltip */}
              <FlagIcon className="text-white hover:text-gray-400 transition duration-300 ease-in hover:cursor-pointer" />
            </CardHeader>
            <CardContent>
              <video
                src={video.videoUrl!}
                controls
                className="w-full rounded-xl mb-3 max-h-[400px]"
              />
              <p className="text-sm text-neutral-300 mb-3">{video.body}</p>

              <div className="flex items-center justify-between">
                {/* User Info */}
                <div className="flex items-center gap-2 text-neutral-400">
                  <User size={16} />
                  <span>Anonymous</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* Repost Button with Tooltip */}
                  <Tooltip>
                    <TooltipTrigger asChild>
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
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-800">
                      <p>Repost</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Like Button (optional example) */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() =>
                          toast.success("Video Liked Successfully!")
                        }
                      >
                        <ThumbsUp size={16} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-800">
                      <p>Like</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
