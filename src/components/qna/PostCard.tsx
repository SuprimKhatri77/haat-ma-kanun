"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Heart,
  MailQuestionMarkIcon,
  MessageCircleIcon,
  MessageSquareTextIcon,
  MessageSquareWarningIcon,
} from "lucide-react";
import Answer from "./Answer";
import {
  QuestionWithUserLikeAndComment,
  QuestionWithUserLikeCommentCount,
} from "../../../types/all-types";
import { likeAction, LikeFormState } from "../../../server/actions/like/like";
import { useActionState, useState } from "react";
import { UserSelectType } from "../../../lib/db/schema";
import CommentPage from "./Comment";

const PostCard = ({
  questions,
  qsnWithLike,
  currentUserId,
  userRecord,
}: {
  questions: QuestionWithUserLikeCommentCount[];
  qsnWithLike: QuestionWithUserLikeAndComment[];
  currentUserId: string;
  userRecord: UserSelectType;
}) => {
  const initialState: LikeFormState = {
    errors: {},
    message: "",
    timestamp: new Date(),
    success: false,
  };
  const [state, formAction, isPending] = useActionState<
    LikeFormState,
    FormData
  >(likeAction, initialState);

  const [clickedQuestionId, setClickedQuestionId] = useState<string>("");
  const [showComments, setShowComments] = useState<string | null>(null);

  const hasLiked = (userId: string, questionId: string) => {
    return qsnWithLike.some((qsnWL) =>
      qsnWL.likes.some(
        (like) => like.userId === userId && like.questionId === questionId
      )
    );
  };

  return (
    questions.length > 0 &&
    questions.map((question) => {
      const isLiked = hasLiked(currentUserId, question.id);

      return (
        <div
          key={question.id}
          className="shadow-md  rounded-lg p-4 mb-4 border stroke-1 stroke-white text-[#e1e1e1] max-w-[800px] w-full mx-auto"
        >
          <div className="flex items-center mb-3">
            <Image
              src={
                question.user.image ||
                "https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
              }
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">{question.user.name}</p>
              {question.createdAt && (
                <p className="text-sm">
                  {new Date(question.createdAt).toLocaleString()}
                </p>
              )}
            </div>
          </div>

          <p className="mb-3">{question.title}</p>
          <div id="Body">{question.description}</div>

          <div className="flex justify-between text-sm mt-3">
            <div className="flex gap-2 mt-1">
              <div className="bg-transparent flex items-center gap-1">
                <p>
                  {isLiked && isPending && clickedQuestionId === question.id
                    ? question.likes.count - 1
                    : !isLiked && isPending && clickedQuestionId === question.id
                    ? question.likes.count + 1
                    : question.likes.count}
                </p>
                Likes
                <form action={formAction}>
                  <Button
                    type="submit"
                    onClick={() => setClickedQuestionId(question.id)}
                    className="bg-transparent hover:bg-transparent hover:scale-115 cursor-pointer"
                  >
                    {isPending &&
                    clickedQuestionId === question.id &&
                    !isLiked ? (
                      <Heart className="fill-red-500" />
                    ) : isLiked &&
                      !(isPending && clickedQuestionId === question.id) ? (
                      <Heart className="fill-red-500" />
                    ) : (
                      <Heart />
                    )}
                  </Button>
                  <input
                    type="hidden"
                    name="userId"
                    value={currentUserId}
                    required
                  />
                  <input
                    type="hidden"
                    name="questionId"
                    value={question.id}
                    required
                  />
                </form>
              </div>

              <Button
                className="bg-transparent hover:bg-transparent"
                onClick={() =>
                  setShowComments(
                    showComments === question.id ? null : question.id
                  )
                }
              >
                {question.comments.count} Comments
                <div>
                  <MessageCircleIcon />
                </div>
              </Button>
            </div>

            <div className="flex gap-3 mt-1">
              {question.user.role === "advocate" &&
                question.userId !== currentUserId && (
                  <Button>
                    <MailQuestionMarkIcon className="mr-2 h-4 w-4" />
                    Answer
                  </Button>
                )}

              {question.userId !== currentUserId && (
                <Button>
                  <MessageSquareWarningIcon className="mr-2 h-4 w-4" />
                  Report
                </Button>
              )}
            </div>
          </div>
          {showComments === question.id && userRecord.role === "advocate" && (
            <Answer userRecord={userRecord} questionId={question.id} />
          )}
          {showComments === question.id && userRecord.role === "user" && (
            <CommentPage userRecord={userRecord} questionId={question.id} />
          )}
        </div>
      );
    })
  );
};

export default PostCard;
