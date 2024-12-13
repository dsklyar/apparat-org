"use client";
import React from "react";
import { cn } from "@/utils";
import useImages from "@/hooks/use-images";
import { ImageLoader, Text } from "@/components";
import LogoIcon from "../assets/logo.svg";
import { usePathname } from "next/navigation";

const artifacts = [
  {
    key: "image_1",
    low: "/images/heros/image_1_low.jpg",
    high: "/images/heros/image_1_high.jpg",
    content: { title: "Iceland", description: "Sometime in 2019" },
  },
  {
    key: "image_2",
    low: "/images/heros/image_2_low.jpg",
    high: "/images/heros/image_2_high.jpg",
    content: { title: "China", description: "Yellow mountains" },
  },
  {
    key: "image_3",
    low: "/images/heros/image_3_low.jpg",
    high: "/images/heros/image_3_high.jpg",
    content: { title: "China", description: "Month before pandemic" },
  },
];

const DescriptionContainer = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-row items-center absolute p-8 z-10 select-none tracking-widest">
    {children}
  </div>
);

const TransitionContainer = ({
  children,
  shouldAnimate = false,
}: React.PropsWithChildren<{ shouldAnimate?: boolean }>) => (
  <div
    className={cn(
      "flex flex-col ml-4",
      shouldAnimate ? "animate-fade-in" : "invisible"
    )}
  >
    {children}
  </div>
);

export const SidePanel = () => {
  const pathname = usePathname();
  const { image, next, type, onLoad } = useImages(artifacts, {
    low: 1,
    high: 10,
    iterateIndex: pathname !== "/resume" && pathname !== "/photos",
  });



  return (
    <div className="hidden resurgam:block sticky resurgam:min-h-screen resurgam:max-h-screen top-0">
      <ImageLoader
        image={{
          ...image,
          alt: image.content.description,
        }}
        type={type}
        next={next}
        onLoad={onLoad}
        fill
      />
      <DescriptionContainer>
        <LogoIcon/>
        <TransitionContainer shouldAnimate={type === "high"}>
          <Text.Subheader uppercase bold className="text-white">
            {image.content.title}
          </Text.Subheader>
          <Text.Body uppercase className="text-white">
            {image.content.description}
          </Text.Body>
        </TransitionContainer>
      </DescriptionContainer>
    </div>
  );
};
