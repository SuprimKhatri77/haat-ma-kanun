import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { HeartIcon, HeartOffIcon } from "lucide-react";
import Answer from "./Answer";

export default function AnswerProfileWithAnswer() {
  return (
    <>
      <hr className="mt-2" />
      <div className="flex items-center mb-3 mt-2">
        <Image
          //   src={user.profilePicture}
          src={"https://github.com/shadcn.png"}
          alt={"Profile Picture"}
          width={20}
          height={20}
          className="rounded-full mr-3 size-8 mb-auto"
        />

        <div>
          <p className="font-semibold">
            {/* {user.name} */}
            Shadcn <span>Date</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            quam voluptas molestias nihil praesentium voluptates expedita itaque
            dolores tempora minus.
          </p>
          <div className="flex gap-2 mt-2">
            <div>
              <Button className="bg-transparent">
                <HeartIcon />
              </Button>
              <Button className="bg-transparent">
                <HeartOffIcon />
              </Button>
            </div>
            <Button className="bg-transparent">Reply</Button>
          </div>
          {/* <Answer /> */}
        </div>
      </div>
    </>
  );
}
