"use client";

import type React from "react";

import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VideoUploader from "@/components/video-uploader";
import { Send } from "lucide-react";
import CustomVideoUploader from "./VideoUploader";
import {
  videoAction,
  VideoActionFormState,
} from "../../server/actions/video/video";
import { desc } from "drizzle-orm";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function PostVideoPage({ userId }: { userId: string }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");

  const initialState: VideoActionFormState = {
    errors: {},
    message: "",
    success: false,
    timestamp: new Date(),
    redirectTo: "",
  } as VideoActionFormState;
  const [state, formAction, isPending] = useActionState<
    VideoActionFormState,
    FormData
  >(videoAction, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.success && state.message) {
      toast(state.message);
      setTimeout(() => {
        router.push(state.redirectTo as string);
      }, 1200);
    }
    if (!state.success && state.message) {
      toast(state.message);
    }
  }, [state.message, state.success, state.timestamp]);

  return (
    <div className="min-h-screen bg-background py-8 px-4 mt-20 min-w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center w-full ">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Share Your Story
          </h1>
          <p className="text-muted-foreground text-lg">
            Upload your video and connect with the community
          </p>
        </div>

        <div className=" w-full">
          {/* Main Upload Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Create Your Post
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form action={formAction} className="space-y-6">
                  {/* Video Upload */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Upload Video
                    </label>
                    <CustomVideoUploader
                      currentVideo={currentVideoUrl}
                      onUploadComplete={(url: string) =>
                        setCurrentVideoUrl(url)
                      }
                    />
                  </div>
                  <input
                    type="hidden"
                    name="videoUrl"
                    value={currentVideoUrl}
                  />

                  {/* Title Input */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Video Title *
                    </label>
                    <Input
                      type="text"
                      placeholder="Give your video a catchy title..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="text-base"
                      maxLength={100}
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {title.length}/100 characters
                    </p>
                    <input type="hidden" name="title" value={title} />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <Textarea
                      placeholder="Tell your audience what this video is about..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[120px] text-base resize-none"
                      maxLength={500}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {description.length}/500 characters
                    </p>
                    <input type="hidden" name="body" value={description} />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={!currentVideoUrl || isPending}
                    className="w-full h-12 text-base font-semibold"
                  >
                    {isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Posting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Post Video
                      </>
                    )}
                  </Button>
                  <input type="hidden" name="userId" value={userId} />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
