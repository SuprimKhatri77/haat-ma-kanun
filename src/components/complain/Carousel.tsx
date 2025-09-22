import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselComplain() {
  const images = [
    {
      src: "/carousel/image1.jpeg",
      alt: "image1",
    },
    {
      src: "/carousel/image2.jpeg",
      alt: "image2",
    },
    {
      src: "/carousel/image3.jpeg",
      alt: "image3",
    },
  ];
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="bg-transparent">
                <CardContent className="flex aspect-square items-center justify-center  text-black">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={220}
                    height={390}
                    className="object-cover w-full h-full object-center"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-black" />
      <CarouselNext className="bg-black" />
    </Carousel>
  );
}
