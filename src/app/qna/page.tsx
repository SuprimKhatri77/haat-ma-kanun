import React from "react";
import { db } from "../../../lib/db";
import { QuestionWithUserLikeAndComment } from "../../../types/all-types";
import { eq } from "drizzle-orm";
import { auth } from "../../../server/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { question, user } from "../../../lib/db/schema";
import QnaPage from "@/components/QNA";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

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

  try {
    const streamUser: StreamUserForUpsert = {
      id: userRecord.id,
      name: userRecord.name ?? undefined,
      role: "user",
      email: userRecord.email ?? undefined,
    };

    await upsertStreamUser(streamUser);

    console.log(
      `✅ Successfully user upserted in Stream for ${userRecord.name}`
    );
  } catch (error) {
    console.error("❌ Error upserting user in Stream:", error);
  }

  return (
    <QnaPage
      userRecord={userRecord}
      questions={questions}
      currentUserId={userRecord.id}
    />
  );
}
