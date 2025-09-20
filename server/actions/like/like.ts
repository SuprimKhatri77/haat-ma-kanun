"use server";

import { and, eq } from "drizzle-orm";
import { db } from "../../../lib/db";
import { likes, user } from "../../../lib/db/schema";
import { timeStamp } from "console";
import { revalidatePath } from "next/cache";

export type LikeFormState = {
  errors?: {
    userId?: string;
    questionId?: string;
  };
  message?: string;
  success?: boolean;
  timestamp?: Date;
};

export async function likeAction(prevState: LikeFormState, formData: FormData) {
  const userId = formData.get("userId") as string;
  const questionId = formData.get("questionId") as string;
  if (!userId) {
    return {
      error: {
        userId: "Missing user ID",
      },
      message: "failed!",
      success: false,
      timestamp: new Date(),
    };
  }
  //   const [userRecord] = await db.select().from(user).where(eq(user.id, userId));
  if (!questionId) {
    return {
      error: {
        userId: "Missing question ID",
      },
      message: "failed!",
      success: false,
      timestamp: new Date(),
    };
  }
  try {
    const [likeRecord] = await db
      .select()
      .from(likes)
      .where(and(eq(likes.userId, userId), eq(likes.questionId, questionId)));
    if (likeRecord) {
      await db
        .delete(likes)
        .where(and(eq(likes.userId, userId), eq(likes.questionId, questionId)));
      revalidatePath("/qna");
      return {
        message: "liked removed successfully!",
        success: true,
        timeStamp: new Date(),
      };
    } else {
      await db.insert(likes).values({
        userId,
        questionId,
      });
      revalidatePath("/qna");
      return {
        message: "liked successfully!",
        success: true,
        timeStamp: new Date(),
      };
    }
  } catch (error) {
    console.error("Error: ", error);
    return {
      message: "Something went wrong!",
      success: false,
      timestamp: new Date(),
    };
  }
}
