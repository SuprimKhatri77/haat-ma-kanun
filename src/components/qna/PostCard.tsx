// components/PostCard.jsx
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

const PostCard = ({
  user,
  timestamp,
  content,
  imageUrl,
  likes,
  comments,
}: {
  user: { name: string; profilePicture: string };
  timestamp: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
}) => {
  return (
    <div className="shadow-md rounded-lg p-4 mb-4 border stroke-1 stroke-white text-[#e1e1e1] max-w-[800px] w-full mx-auto">
      {/* Header: User Info and Timestamp */}
      <div className="flex items-center mb-3">
        <Image
          //   src={user.profilePicture}
          src={"https://github.com/shadcn.png"}
          alt={"Profile Picture"}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />

        <div>
          <p className="font-semibold">
            {/* {user.name} */}
            Shadcn
          </p>
          <p className="text-sm">{timestamp}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className=" mb-3">{content}</p>
      {imageUrl && (
        <div className="mb-3">
          <Image
            // src={imageUrl}
            src={"https://github.com/shadcn.png"}
            alt="Post Image"
            width={600} // Adjust as needed
            height={400} // Adjust as needed
            layout="responsive"
            className="rounded-md"
          />
        </div>
      )}
      <div id="Body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam
        nostrum impedit. Eveniet non esse sequi voluptas aspernatur itaque rem!
      </div>

      {/* Interaction Buttons (simplified) */}
      <div className="flex justify-between text-sm mt-3">
        <div className="flex gap-2 mt-1">
          <Button className="bg-transparent">
            {/* {likes} */}0 Likes
            <div>
              <Heart />
            </div>
          </Button>
          <Button className="bg-transparent">
            0 Comments
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
      {/* answers list */}
      <div className="mt-4 flex">
        <Image
          //   src={user.profilePicture}
          src={"https://github.com/shadcn.png"}
          alt={"Profile Picture"}
          width={20}
          height={20}
          className="rounded-full mr-3 mt-1 size-8"
        />{" "}
        <Answer />
      </div>
    </div>
  );
};

export default PostCard;
