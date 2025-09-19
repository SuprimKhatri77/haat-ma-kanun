import { ArrowDownSquareIcon } from "lucide-react";
import React from "react";
import AnswerProfileWithAnswer from "./AnswerProfileWithAnswer";

export default function Answer() {
  return (
    <div className=" border-[#ffffff] rounded-2xl grow">
      <input
        type="text"
        placeholder="Search"
        className="placeholder:pl-4 py-2 px-2 w-full placeholder:bg-transparent border-1  rounded-2xl text-[#dadada] focus:outline-none"
      />
      <div id="headings" className="flex justify-between px-4 mt-3">
        <span>Answers</span>
        <span className="flex gap-2">
          Recommended <ArrowDownSquareIcon></ArrowDownSquareIcon>
        </span>
      </div>
      <div id="answers">
        {/* AnswerProfileWithAnswer component */}
        <AnswerProfileWithAnswer />
      </div>
    </div>
  );
}
