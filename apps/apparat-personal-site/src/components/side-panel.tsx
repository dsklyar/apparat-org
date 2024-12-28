"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils";
import useImages from "@/hooks/use-images";
import { ImageLoader, Text } from "@/components";
import LogoIcon from "@/assets/logo.svg";
import { usePathname } from "next/navigation";
import { RESURGAM, SIDE_PANEL_IMAGES } from "@/configurations";
import { useLayoutContext } from "@/contexts";

const TransitionContainer = ({
  children,
  shouldAnimate = false,
  hidden = false,
}: React.PropsWithChildren<{ shouldAnimate?: boolean; hidden?: boolean }>) => (
  <div
    className={cn(
      "flex flex-col ml-4",
      shouldAnimate ? "animate-fade-in" : "invisible",
      hidden && "hidden"
    )}
  >
    {children}
  </div>
);

export const SidePanel = () => {
  const pathname = usePathname();
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const { layoutExpanded } = useLayoutContext();
  const { image, preload, next, type, onLoad } = useImages(SIDE_PANEL_IMAGES, {
    low: 1,
    high: 10,
    iterateIndex: pathname !== "/resume" && pathname !== "/photos",
  });

  useEffect(() => {
    let timeout = null;
    if (layoutExpanded) {
      setShowDescription(false);
    } else {
      timeout = setTimeout(() => setShowDescription(true), 300);
    }
    return () => {
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [layoutExpanded]);

  return (
    <div
      className={cn(
        "fixed top-0",
        "hidden resurgam:block resurgam:min-h-screen resurgam:max-h-screen ",
        RESURGAM.SIDE_PANEL({ layoutExpanded })
      )}
    >
      <ImageLoader
        preload={preload}
        image={{
          ...image,
          alt: image.content.description,
        }}
        type={type}
        onClick={layoutExpanded ? undefined : next}
        onLoad={onLoad}
        fill
      />
      <div
        className={cn(
          "flex flex-row items-center p-8 z-10 select-none tracking-widest"
        )}
      >
        <LogoIcon className="z-10" />
        <TransitionContainer
          shouldAnimate={type === "high"}
          hidden={!showDescription}
        >
          <Text.Subheader uppercase bold className="text-white">
            {image.content.title}
          </Text.Subheader>
          <Text.Body uppercase className="text-white">
            {image.content.description}
          </Text.Body>
        </TransitionContainer>
      </div>
    </div>
  );
};
