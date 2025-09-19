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

export interface Question {
  id: string; // uuid
  userId: string; // references users.id
  title: string | null;
  description: string | null;
  language: "nepali" | "english"; // from languageEnum
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
    | "schedules"; // from questionCategoryEnum
  updatedAt: Date;
  createdAt: Date;
}

export default function MyQuery() {
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
          <p className="text-sm">{/* {timestamp} */}1 day ago</p>
        </div>
      </div>

      {/* Post Content */}
      <p className=" mb-3">{/* {content} */}</p>
      {/* {imageUrl && (
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
      )} */}
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
          <Button>
            <MailQuestionMarkIcon className="mr-2 h-4 w-4" />
            Answer
          </Button>
          <Button>
            0 Comments
            <div>
              <MessageCircleIcon />
            </div>
          </Button>
        </div>
      </div>
      {/* answers list */}
      <div className="mt-4 flex">
        <Image
          //  src={user.profilePicture}
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
}
