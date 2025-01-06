"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/utils";

type ImageLoaderProps = {
  type: "low" | "high";
  image: {
    high: string;
    low: string;
    alt: string;
  };
  preload?: string;
  fill?: boolean;
  onLoad?: () => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ImageLoader = ({
  image,
  type,
  onLoad,
  onClick,
  fill = false,
  preload,
  className,
  style,
  ...props
}: ImageLoaderProps) => {
  const lowResShown = type === "low";
  return (
    <div className={className} style={style}>
      <Image
        {...props}
        src={image.high}
        alt={image.alt}
        onClick={() => onClick?.()}
        onLoad={() => onLoad?.()}
        className={cn(
          "object-cover",
          !!onClick && "cursor-pointer",
          lowResShown && "invisible absolute"
        )}
        fill={fill}
        unselectable="on"
        priority
      />
      <Image
        {...props}
        src={lowResShown ? image.low : (preload ?? image.low)}
        alt={image.alt}
        className={cn(
          "object-cover cursor-fancy",
          !lowResShown && "hidden absolute"
        )}
        style={{ imageRendering: "pixelated" }}
        fill={fill}
        priority
      />
    </div>
  );
};
