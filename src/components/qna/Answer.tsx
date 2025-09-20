import { ArrowDownSquareIcon } from "lucide-react";
import React from "react";
import AnswerProfileWithAnswer from "./AnswerProfileWithAnswer";
import Image from "next/image";

export default function Answer() {
  return (
    <div className=" border-[#ffffff] rounded-2xl grow">
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
      <input
        type="text"
        placeholder="Search"
        className="placeholder:pl-4 py-2 pl-4 px-2 w-full placeholder:bg-transparent border-1  rounded-2xl text-[#dadada] focus:outline-none"
      />

      <div id="answers" className="">
        <AnswerProfileWithAnswer />
      </div>
    </div>
  );
}
