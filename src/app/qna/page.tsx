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
import QnaPage from "@/components/QNA";

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
    return <h1>No questions</h1>;
  }
  //
  return (
    <QnaPage
      userRecord={userRecord}
      questions={questions}
      // questions={questionsWithLikeCommentCount}
      currentUserId={userRecord.id}
    />
  );
}
