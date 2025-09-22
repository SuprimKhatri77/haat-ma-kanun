"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { MessageSquareReplyIcon, Upload, User } from "lucide-react";
import QuestionForm from "./QuestionForm";
import { UserSelectType } from "../../../lib/db/schema";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function QnaHeader({
  userRecord,
}: {
  readonly userRecord: UserSelectType;
}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="border-1 border-[#dadada] text-[#dadada] flex justify-center items-center mx-auto max-w-[800px] p-6 w-full gap-8 rounded-2xl">
        <div id="Logo" className="">
          {userRecord.image ? (
            <Avatar className="w-12 h-12">
              <AvatarImage
                className="size-10 object-cover object-center rounded-full"
                src={
                  userRecord.image ||
                  "https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
                }
              />
              <AvatarFallback>{userRecord.name}</AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              <AvatarImage
                src={
                  "https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
                }
              />
              <AvatarFallback>{userRecord.name}</AvatarFallback>
            </Avatar>
          )}
        </div>
        <div className="grow flex gap-4 flex-col">
          <div className="border-1 border-[#ffffff] rounded-2xl">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="placeholder:pl-4 pl-4 py-2 px-2 w-full placeholder:bg-transparent  rounded-2xl text-[#dadada] focus:outline-none"
            />
          </div>
          <div
            id="AAP"
            className="flex justify-around gap-4 space-4 items-center"
          >
            <div>
              <Button className="ml-2" onClick={handleClick}>
                Post <Upload className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <Button className="ml-2">
                Answer <MessageSquareReplyIcon className="h-4 w-4" />
              </Button>
            </div>
            <div>
              Post
              <Button size="icon" className="ml-2">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {open && <QuestionForm onOpen={setOpen} />}
    </>
  );
}
