// "use server";

// import { db } from "../../lib/db";
// import { QuestionWithUser } from "../../types/all-types";

// export async function getAllQuestions() {
//   const questions: QuestionWithUser[] = await db.query.question.findMany({
//     with: {
//       user: true,
//     },
//   });
//   return questions;
// }
