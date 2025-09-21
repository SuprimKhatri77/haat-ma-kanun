import MyQuery from "@/components/my-queries/page";
import { auth } from "../../../server/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "../../../lib/db";
import { user } from "../../../auth-schema";
import { eq } from "drizzle-orm";
import {
  QuestionWithUserLikeComment,
  QuestionWithUserLikeCommentCount,
} from "../../../types/all-types";
import { question } from "../../../lib/db/schema";

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
  const questions: QuestionWithUserLikeComment[] =
    await db.query.question.findMany({
      where: eq(question.userId, userRecord.id),
      with: {
        user: true,
        likes: true,
        comments: true,
      },
    });
  if (!questions) {
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
    <main className="mt-40">
      <MyQuery questions={questionsWithLikeCommentCount} />
    </main>
  );
}
