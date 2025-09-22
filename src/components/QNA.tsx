import { UserSelectType } from "../../lib/db/schema";
import {
  QuestionWithUserLikeAndComment,
  QuestionWithUserLikeCommentCount,
} from "../../types/all-types";
import PostCard from "./qna/PostCard";
import QnaHeader from "./qna/QnaHeader";

export default function QnaPage({
  questions,
  //   qsnWithLike,
  currentUserId,
  userRecord,
}: {
  readonly questions: QuestionWithUserLikeAndComment[];
  //   qsnWithLike: QuestionWithUserLikeAndComment[];
  readonly currentUserId: string;
  readonly userRecord: UserSelectType;
}) {
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
      <QnaHeader userRecord={userRecord} />
      <div className="mt-6">
        <PostCard
          questions={questionsWithLikeCommentCount}
          qsnWithLike={questions}
          currentUserId={currentUserId}
          userRecord={userRecord}
        />
      </div>
    </main>
  );
}
