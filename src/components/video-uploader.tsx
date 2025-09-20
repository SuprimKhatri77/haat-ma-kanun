"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoUploaderProps {
  currentVideo?: string;
  onUploadComplete: (url: string) => void;
  className?: string;
}

export default function VideoUploader({
  currentVideo,
  onUploadComplete,
  className,
}: VideoUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | undefined>(currentVideo);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Show temporary preview
    const tempPreview = URL.createObjectURL(file);
    setPreview(tempPreview);

    setIsUploading(true);

    try {
      // Upload to your server or UploadThing
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      const uploadedUrl = data.url; // Permanent URL from server/UploadThing

      // Call parent callback with permanent URL
      onUploadComplete(uploadedUrl);

      // Update preview to permanent URL
      setPreview(uploadedUrl);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("w-full", className)}>
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      <Button
        type="button"
        variant="outline"
        onClick={handleButtonClick}
        disabled={isUploading}
        className="w-full h-48 border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors bg-transparent"
      >
        <div className="flex flex-col items-center gap-3">
          {isUploading ? (
            <>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="text-sm font-medium">Uploading video...</span>
            </>
          ) : preview ? (
            <div className="flex flex-col items-center gap-2">
              <video
                src={preview}
                className="h-32 w-auto object-contain rounded"
                controls
                muted
              />
              <span className="text-xs text-muted-foreground">
                Click to change video
              </span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Upload className="h-6 w-6" />
                <VideoIcon className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium">Upload Your Video</span>
              <span className="text-sm text-muted-foreground">
                Click to browse or drag and drop
              </span>
              <span className="text-xs text-muted-foreground">
                MP4, MOV, AVI up to 100MB
              </span>
            </>
          )}
        </div>
      </Button>
    </div>
  );
}
