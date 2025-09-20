"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomProfileUploaderProps {
  currentImage?: string;
  onUploadComplete: (url: string) => void;
  imageUploadName: string;
  className?: string;
}

export default function CustomProfileUploader({
  currentImage,
  onUploadComplete,
  imageUploadName,
  className,
}: CustomProfileUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | undefined>(currentImage);
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
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      <Button
        type="button"
        variant="outline"
        onClick={handleButtonClick}
        disabled={isUploading}
        className="w-full h-24 border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors bg-transparent"
      >
        <div className="flex flex-col items-center gap-2">
          {isUploading ? (
            <>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <span className="text-sm">Uploading...</span>
            </>
          ) : preview ? (
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full object-contain rounded"
            />
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                <ImageIcon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{imageUploadName}</span>
              <span className="text-xs text-muted-foreground">
                Click to browse files
              </span>
            </>
          )}
        </div>
      </Button>
    </div>
  );
}
