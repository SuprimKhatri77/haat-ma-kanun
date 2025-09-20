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
  QuestionWithUserLike,
  QuestionWithUserLikeCommentCount,
} from "../../../types/all-types";
import { likeAction, LikeFormState } from "../../../server/actions/like/like";
import { useActionState } from "react";
import { authClient } from "../../../server/lib/auth/auth-client";

const PostCard = ({
  questions,
  qsnWithLike,
  currentUserId,
}: {
  questions: QuestionWithUserLikeCommentCount[];
  qsnWithLike: QuestionWithUserLike[];
  currentUserId: string;
}) => {
  // Helper: check if user has liked a specific question
  const hasLiked = (userId: string, questionId: string) => {
    return qsnWithLike.some((qsnWL) =>
      qsnWL.likes.some(
        (like) => like.userId === userId && like.questionId === questionId
      )
    );
  };

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

  return (
    questions.length > 0 &&
    questions.map((question) => {
      const isLiked = hasLiked(currentUserId, question.id);

      return (
        <div
          key={question.id}
          className="shadow-md rounded-lg p-4 mb-4 border stroke-1 stroke-white text-[#e1e1e1] max-w-[800px] w-full mx-auto"
        >
          {/* User info */}
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
              <p className="text-sm">
                {question.createdAt?.toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Question title & description */}
          <p className="mb-3">{question.title}</p>
          <div id="Body">{question.description}</div>

          {/* Interaction Buttons */}
          <div className="flex justify-between text-sm mt-3">
            <div className="flex gap-2 mt-1">
              <div className="bg-transparent flex items-center">
                {question.likes.count} Likes
                <form action={formAction}>
                  <Button
                    type="submit"
                    className="bg-transparent hover:bg-transparent hover:scale-115 cursor-pointer"
                  >
                    {isPending ? (
                      <Heart className="fill-red-500" />
                    ) : isLiked ? (
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

              <Button className="bg-transparent">
                {question.comments.count} Comments
                <div>
                  <MessageCircleIcon />
                </div>
              </Button>
            </div>

            <div className="flex gap-3 mt-1">
              <Button>
                <MailQuestionMarkIcon className="mr-2 h-4 w-4" />
                Answer
              </Button>
              <Button>
                <MessageSquareTextIcon className="mr-2 h-4 w-4" />
                Comment
              </Button>
              <Button>
                <MessageSquareWarningIcon className="mr-2 h-4 w-4" />
                Report
              </Button>
            </div>
          </div>

          {/* Answer box */}
          <div className="mt-4 flex">
            <Image
              src={"https://github.com/shadcn.png"}
              alt="Profile Picture"
              width={20}
              height={20}
              className="rounded-full mr-3 mt-1 size-8"
            />
            <Answer />
          </div>
        </div>
      );
    })
  );
};

export default PostCard;
