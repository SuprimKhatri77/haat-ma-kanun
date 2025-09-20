import PostCard from "@/components/qna/PostCard";
import QnaHeader from "@/components/qna/QnaHeader";
import React from "react";
import { db } from "../../../lib/db";
import {
  QuestionWithUserLikeAndComment,
  QuestionWithUserLikeCommentCount,
} from "../../../types/all-types";
import { eq, sql } from "drizzle-orm";
import { auth } from "../../../server/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { user } from "../../../lib/db/schema";

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return redirect("/login");
  }
  const [userRecord] = await db
    .select()
    .from(user)
    .where(eq(user.id, session.user.id));
  if (!userRecord) {
    return redirect("/sign-up");
  }
  const questions: QuestionWithUserLikeAndComment[] =
    await db.query.question.findMany({
      with: {
        user: true,
        likes: true,
        comments: true,
      },
    });
  if (questions.length === 0) {
    return [];
  }
  const questionsWithLikeCommentCount: QuestionWithUserLikeCommentCount[] =
    questions.map((q) => ({
      ...q,
      likes: {
        count: q.likes.length,
      },
      comments: {
        count: q.comments.length,
      },
    }));

  return (
    <main className="mt-20">
      <QnaHeader />
      <div className="mt-6">
        <PostCard
          questions={questionsWithLikeCommentCount}
          qsnWithLike={questions}
          currentUserId={userRecord.id}
        />
      </div>
    </main>
  );
}
