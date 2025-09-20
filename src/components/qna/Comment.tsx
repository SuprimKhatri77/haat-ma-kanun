"use client";
import { ArrowDownSquareIcon, SendHorizonal } from "lucide-react";
import React, { useActionState, useEffect, useState } from "react";
import Response from "./Response";
import Image from "next/image";
import { UserSelectType } from "../../../lib/db/schema";
import { Button } from "../ui/button";
import {
  commentAction,
  CommentFormState,
} from "../../../server/actions/comment/comment";
import Loader from "../Loader";
import { toast } from "sonner";
import { fetchResponses } from "../../../server/helper/fetchResponses";

export default function CommentPage({
  userRecord,
  questionId,
}: {
  userRecord: UserSelectType;
  questionId: string;
}) {
  const initialState: CommentFormState = {
    errors: {},
    message: "",
    success: false,
    timestamp: new Date(),
  };
  const [state, formAction, isPending] = useActionState<
    CommentFormState,
    FormData
  >(commentAction, initialState);
  const [type, setType] = useState<"answer" | "comment" | undefined>("comment");
  const [comment, setComment] = useState<string>("");
  const [response, setResponse] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetchResponses(questionId);
      if (!response) return;
      setType(response?.type);
      setResponse(response.data);
    })();
  }, [questionId, state]);

  useEffect(() => {
    if (state.success && state.message) {
      toast(state.message);
    }
    if (!state.success && state.message) {
      toast(state.message);
    }
  }, [state.success, state.message, state.timestamp]);
  return (
    <div className=" border-[#ffffff] rounded-2xl grow">
      <div className="mt-4 flex">
        {userRecord.image ? (
          <Image
            src={
              userRecord.image ||
              "https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
            }
            alt="Profile Picture"
            width={20}
            height={20}
            className="rounded-full mr-3 mt-1 size-8"
          />
        ) : (
          <Image
            src={
              "https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
            }
            alt="Profile Picture"
            width={20}
            height={20}
            className="rounded-full mr-3 mt-1 size-8"
          />
        )}
        <form className="w-full relative" action={formAction}>
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
            className="placeholder:pl-4 py-2 px-2 w-full placeholder:bg-transparent border-1 rounded-2xl text-[#dadada] focus:outline-none"
          />
          <Button
            variant="default"
            type="submit"
            className="absolute top-1 right-5 cursor-pointer hover:scale-120 transition-all duration-300 bg-transparent hover:bg-transparent inline"
            disabled={isPending || !comment}
          >
            {isPending ? <Loader /> : <SendHorizonal size={20} />}
          </Button>
          <input type="hidden" name="body" value={comment} required />
          <input type="hidden" name="userId" value={userRecord.id as string} />
          <input type="hidden" name="questionId" value={questionId as string} />
        </form>
      </div>
      <div id="answers" className="">
        {response.map((res) => (
          <Response
            key={res.id}
            type={res.type}
            body={res.body}
            user={res.user}
            createdAt={res.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
