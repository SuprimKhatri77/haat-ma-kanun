"use server";

import z from "zod";
import { db } from "../../../lib/db";
import { comments } from "../../../lib/db/schema";
import { revalidatePath } from "next/cache";

export type CommentFormState = {
  errors?: {
    userId?: string;
    questionId?: string;
    body?: string;
  };
  message?: string;
  success?: boolean;
  timestamp?: Date;
};

export async function commentAction(
  prevState: CommentFormState,
  formData: FormData
) {
  const userId = formData.get("userId") as string;
  if (!userId) {
    return {
      errors: {
        userId: "Missing user ID",
      },
      message: "Missing user ID",
      success: false,
      timestamp: new Date(),
    };
  }
  const questionId = formData.get("questionId") as string;
  if (!questionId) {
    return {
      errors: {
        questionId: "Missing question ID",
      },
      message: "Missing question ID",
      success: false,
      timestamp: new Date(),
    };
  }

  const bodySchema = z.object({
    body: z.string().min(1).nonempty(),
  });
  const validateField = bodySchema.safeParse({
    body: formData.get("body"),
  });

  if (!validateField.success) {
    return {
      error: {
        body: z.treeifyError(validateField.error),
      },
      message: "Comment must be greater than or equal to 1 character",
      success: false,
      timestamp: new Date(),
    };
  }

  const { body } = validateField.data;
  try {
    await db.insert(comments).values({
      userId,
      questionId,
      body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    revalidatePath("/qna");
    return {
      message: "Comment added successfully!",
      success: true,
      timestamp: new Date(),
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
