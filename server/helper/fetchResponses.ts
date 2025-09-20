"use server";

import { db } from "../../lib/db";
import { answers, comments } from "../../lib/db/schema";

export async function fetchResponses(questionId: string) {
  const advocateAnswers = await db.query.answers.findMany({
    where: (fields, { eq }) => eq(answers.questionId, questionId),
    with: {
      advocateProfile: {
        with: {
          user: true,
        },
      },
    },
    limit: 3,
  });
  if (advocateAnswers.length > 0) {
    return {
      type: "answer" as const,
      data: advocateAnswers.map((adv) => ({
        id: adv.id,
        body: adv.body,
        createdAt: adv.createdAt,
        user: {
          name: adv.advocateProfile.user.name,
          image: adv.advocateProfile.user.image,
        },
      })),
    };
  }

  const normalComments = await db.query.comments.findMany({
    where: (fields, { eq }) => eq(comments.questionId, questionId),
    with: {
      user: true,
    },
    limit: 3,
  });

  if (normalComments.length > 0) {
    return {
      type: "comment" as const,
      data: normalComments.map((com) => ({
        id: com.id,
        body: com.body,
        createdAt: com.createdAt,
        user: { name: com.user.name, image: com.user.image },
      })),
    };
  }
}
