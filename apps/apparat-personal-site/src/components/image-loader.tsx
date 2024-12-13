"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/utils";

interface IImageLoaderProps {
  type: "low" | "high";
  image: {
    high: string;
    low: string;
    alt: string;
  };
  fill?: boolean;
  onLoad?: () => void;
  next?: () => void;
}

export const ImageLoader = ({
  image,
  type,
  onLoad,
  next,
  fill = false,
  ...props
}: IImageLoaderProps) => {
  const lowResShown = type === "low";
  return (
    <>
      <Image
        {...props}
        src={image.high}
        alt={image.alt}
        onClick={() => next?.()}
        onLoad={() => onLoad?.()}
        className={cn(
          "object-cover",
          !!next && "cursor-pointer",
          lowResShown && "invisible absolute"
        )}
        fill={fill}
        unoptimized
        unselectable="on"
      />
      <Image
        {...props}
        src={image.low}
        alt={image.alt}
        className={cn("object-cover cursor-fancy", !lowResShown && "hidden absolute")}
        style={{ imageRendering: "pixelated" }}
        fill={fill}
      />
    </>
  );
};
