"use server";
import { and, eq } from "drizzle-orm";
import { db } from "../../../lib/db";
import { likes, user } from "../../../lib/db/schema";
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

export async function likeAction(
  prevState: LikeFormState,
  formData: FormData
): Promise<LikeFormState> {
  const userId = formData.get("userId") as string;
  const questionId = formData.get("questionId") as string;

  if (!userId) {
    return {
      errors: {
        // Fixed: was "error", should be "errors"
        userId: "Missing user ID",
      },
      message: "failed!",
      success: false,
      timestamp: new Date(),
    };
  }

  if (!questionId) {
    return {
      errors: {
        // Fixed: was "error", should be "errors"
        questionId: "Missing question ID", // Fixed: was userId, should be questionId
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
      // Unlike: remove the like
      await db
        .delete(likes)
        .where(and(eq(likes.userId, userId), eq(likes.questionId, questionId)));

      revalidatePath("/qna");
      return {
        message: "Like removed successfully!",
        success: true,
        timestamp: new Date(), // Fixed: was timeStamp, should be timestamp
      };
    } else {
      // Like: add the like
      await db.insert(likes).values({
        userId,
        questionId,
      });

      revalidatePath("/qna");
      return {
        message: "Liked successfully!",
        success: true,
        timestamp: new Date(), // Fixed: was timeStamp, should be timestamp
      };
    }
  } catch (error) {
    console.error("Error in likeAction:", error);
    return {
      message: "Something went wrong!",
      success: false,
      timestamp: new Date(),
    };
  }
}
