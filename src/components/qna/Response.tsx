import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { HeartIcon, HeartOffIcon } from "lucide-react";
import Answer from "./Answer";

export default function Response({
  type,
  body,
  createdAt,
  user,
}: {
  type: "answer" | "comment";
  body: string;
  createdAt: Date;
  user: { name: string; image: string };
}) {
  return (
    <>
      <hr className="mt-2" />
      <div className="flex items-center mb-3 mt-2 gap-3">
        <Image
          src={
            user.image ||
            "https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
          }
          alt={"Profile Picture"}
          width={20}
          height={20}
          className="rounded-full mr-3 size-8 mb-auto"
        />

        <div>
          <p className="font-semibold">
            <span>{user.name}</span>
          </p>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
}
