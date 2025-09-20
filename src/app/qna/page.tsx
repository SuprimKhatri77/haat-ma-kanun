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
import { upsertStreamUser } from "@/config/stream";

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) redirect("/login");

  const [userRecord] = await db
    .select()
    .from(user)
    .where(eq(user.id, session.user.id));
  if (!userRecord) redirect("/sign-up");

  try {
    await upsertStreamUser({
      id: userRecord.id,
      name: userRecord.name ?? "Anonymous",
      image: userRecord.image,
      role: "user",
      email: userRecord.email ?? "",
    });
    console.log(`Successfully user upserted in stream for ${userRecord.name}`);
  } catch (error) {
    console.error("Stream upsert error:", error);
    return <div>Error upserting user in Stream</div>;
  }

  const questions = await db.query.question.findMany({
    with: { user: true, likes: true, comments: true },
  });

  if (questions.length === 0) return <div>No questions found.</div>;

  const questionsWithLikeCommentCount = questions.map((q) => ({
    ...q,
    likes: { count: q.likes.length },
    comments: { count: q.comments.length },
  }));

  return (
    <QnaPage
      userRecord={userRecord}
      questions={questions}
      // questions={questionsWithLikeCommentCount}
      currentUserId={userRecord.id}
    />
  );
}
