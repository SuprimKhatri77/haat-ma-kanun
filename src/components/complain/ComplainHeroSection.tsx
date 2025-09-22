import { ArrowDownRight, Star, Upload } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CarouselComplain } from "./Carousel";
import Link from "next/link";
import { UserSelectType } from "../../../lib/db/schema";

interface Hero3Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text?: string;
      url?: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
    rating?: number;
  };
  userRecord?: UserSelectType;
}

const ComplainHeroSection = ({
  heading = "Exposing Criminals With Lawyers",
  description = "The best way to get a lawyer for your legal needs",
  userRecord,
  buttons = {
    ...(!userRecord
      ? {
          primary: {
            text: "Sign in",
            url: "https://www.shadcnblocks.com",
          },
        }
      : {}),
    secondary: {
      text: "Upload Video",
      url: "/post-video",
    },
  },
  reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: Hero3Props) => {
  return (
    <section className="bg-black text-white px-6 min-h-screen mx-auto max-w-[900px] w-full">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20 mt-32">
        <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
            {heading}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            {description}
          </p>
          <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="inline-flex items-center -space-x-4">
              {reviews.avatars.map((avatar, index) => (
                <Avatar key={index} className="size-12 border">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="mr-1 font-semibold">
                  {reviews.rating?.toFixed(1)}
                </span>
              </div>
              <p className="text-muted-foreground text-left font-medium">
                from {reviews.count}+ reviews
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button asChild className="w-full sm:w-auto">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons.secondary && (
              <Button
                asChild
                variant="outline"
                className="text-black hover:text-white hover:bg-[#111111] transition-colors duration-300 ease-linear"
              >
                <Link href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <Upload className="size-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <CarouselComplain />
        </div>
      </div>
    </section>
  );
};

export { ComplainHeroSection };
