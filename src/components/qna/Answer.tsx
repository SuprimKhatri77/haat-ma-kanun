import { ArrowDownSquareIcon, SendHorizonal } from "lucide-react";
import React, { useState } from "react";
import AnswerProfileWithAnswer from "./AnswerProfileWithAnswer";
import Image from "next/image";
import { UserSelectType } from "../../../lib/db/schema";
import { Button } from "../ui/button";

export default function Answer({
  userRecord,
  questionId,
}: {
  userRecord: UserSelectType;
  questionId: string;
}) {
  const [answer, setAnswer] = useState<string>("");
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
        <form className="w-full relative" action="">
          <input
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Comment"
            className="placeholder:pl-4 py-2 px-2 w-full placeholder:bg-transparent border-1 rounded-2xl text-[#dadada] focus:outline-none"
          />
          <Button
            variant="default"
            type="submit"
            className="absolute top-1 right-5 cursor-pointer hover:scale-120 transition-all duration-300 bg-transparent hover:bg-transparent inline"
          >
            <SendHorizonal size={20} />
          </Button>
        </form>
      </div>
      <div id="answers" className="">
        <AnswerProfileWithAnswer />
      </div>
    </div>
  );
}
