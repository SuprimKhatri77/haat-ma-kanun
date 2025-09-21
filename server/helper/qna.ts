import { db } from "../../lib/db";
import { likes, comments, question } from "../../lib/db/schema";
import { QuestionWithUserLikeCommentCount } from "../../types/all-types";
import { eq, inArray, sql } from "drizzle-orm";

export async function getQuestionsWithCounts(
  userId: string,
  limit = 10,
  offset = 0
) {
  const questions = await db.query.question.findMany({
    limit,
    offset,
    with: { user: true },
  });

  const questionIds = questions.map((q) => q.id);

  if (questionIds.length === 0) return [];

  const likesCounts = await db
    .select({ questionId: likes.questionId, count: sql<number>`count(*)` })
    .from(likes)
    .where(inArray(likes.questionId, questionIds))
    .groupBy(likes.questionId);

  const commentsCounts = await db
    .select({ questionId: comments.questionId, count: sql<number>`count(*)` })
    .from(comments)
    .where(inArray(comments.questionId, questionIds))
    .groupBy(comments.questionId);

  const userLikes = await db
    .select({ questionId: likes.questionId })
    .from(likes)
    .where(eq(likes.userId, userId));
  // .where(inArray(likes.questionId, questionIds));

  const results: QuestionWithUserLikeCommentCount[] = questions.map((q) => {
    const likeObj = likesCounts.find((l) => l.questionId === q.id);
    const commentObj = commentsCounts.find((c) => c.questionId === q.id);
    const hasLiked = userLikes.some((ul) => ul.questionId === q.id);

    return {
      ...q,
      likes: { count: likeObj?.count ?? 0 },
      comments: { count: commentObj?.count ?? 0 },
      hasLiked,
    };
  });

  return results;
}
