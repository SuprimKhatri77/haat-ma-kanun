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
import Answer from "../qna/Answer";
import {
  QuestionWithUserLikeAndComment,
  QuestionWithUserLikeCommentCount,
} from "../../../types/all-types";
import { useState } from "react";

export interface Question {
  id: string;
  userId: string;
  title: string | null;
  description: string | null;
  language: "nepali" | "english";
  category:
    | "preliminary"
    | "citizenship"
    | "fundamental-rights-and-duties"
    | "directive-principles-policies-and-obligations-of-the-state"
    | "structure-of-the-state-and-distribution-of-state-power"
    | "president-and-vice-president"
    | "federal-legislature"
    | "federal-executive"
    | "federal-legislature-procedure"
    | "federal-financial-procedures"
    | "judiciary"
    | "attorney-general"
    | "state-legislature"
    | "state-executive"
    | "state-legislative-procedure"
    | "state-financial-procedure"
    | "state-judiciary"
    | "local-executive"
    | "local-legislature"
    | "interrelations-between-federation-state-and-local-level"
    | "political-parties"
    | "emergency-power"
    | "constitutional-bodies"
    | "provision-regarding-national-security"
    | "provision-regarding-public-service"
    | "election-commission"
    | "local-commissions"
    | "provision-regarding-finance-property-and-revenue"
    | "inter-governmental-relations"
    | "provision-regarding-amendment-of-constitution"
    | "miscellaneous"
    | "transitional-provisions"
    | "definitions-and-interpretation"
    | "short-title-commencement-and-repeal"
    | "schedules";
  updatedAt: Date;
  createdAt: Date;
}

export default function MyQuery({
  questions,
}: {
  questions: QuestionWithUserLikeCommentCount[];
}) {
  return questions.map((question) => {
    return (
      <div
        key={question.id}
        className="shadow-md rounded-lg p-4 mb-4 border stroke-1 stroke-white text-[#e1e1e1] max-w-[800px] w-full mx-auto  z-100"
      >
        <div className="flex items-center mb-3">
          <Image
            src={
              question.user.image ||
              "https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
            }
            alt={"Profile Picture"}
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

        <div id="Body">{question.description}</div>

        <div className="flex justify-between text-sm mt-3">
          <div className="flex gap-2 mt-1">
            <Button className="bg-transparent">
              {question.likes.count} Likes
              <div>
                <Heart />
              </div>
            </Button>

            <Button>
              {question.comments.count} Comments
              <div>
                <MessageCircleIcon />
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  });
}
