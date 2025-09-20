"use server";

import { timestamp } from "drizzle-orm/gel-core";
import z from "zod";
import { db } from "../../../lib/db";
import { video } from "../../../lib/db/schema";

export type VideoActionFormState = {
  errors?: {
    properties?: {
      userId?: string[];
      title?: string[];
      body?: string[];
      videoUrl?: string[];
    };
  };
  message?: string;
  success?: boolean;
  timestamp?: Date;
  redirectTo?: string;
};

export async function videoAction(
  prevstate: VideoActionFormState,
  formData: FormData
) {
  const videoSchema = z.object({
    userId: z.string().nonempty(),
    title: z.string().nonempty().min(1),
    body: z.string(),
    videoUrl: z.string().nonempty(),
  });

  const validateFields = videoSchema.safeParse({
    userId: formData.get("userId") as string,
    title: formData.get("title") as string,
    body: formData.get("body") as string,
    videoUrl: formData.get("videoUrl") as string,
  });

  if (!validateFields.success) {
    const tree = z.treeifyError(validateFields.error);
    return {
      errors: {
        properties: {
          userId: tree.properties?.userId?.errors,
          title: tree.properties?.title?.errors,
          body: tree.properties?.body?.errors,
          videoUrl: tree.properties?.videoUrl?.errors,
        },
      },
      message: "Validation Failed",
      success: false,
      timestamp: new Date(),
    };
  }
  const { title, body, videoUrl, userId } = validateFields.data;
  try {
    await db.insert(video).values({
      userId,
      title,
      body,
      videoUrl,
    });
    return {
      message: "Vide uploaded successfully!",
      success: true,
      timestamp: new Date(),
      redirectTo: "/complain",
    };
  } catch (error) {
    console.error("Error: ", error);
    return {
      message: "Something went wrong!",
      success: false,
      timestamp: new Date(),
    };
  }
}
