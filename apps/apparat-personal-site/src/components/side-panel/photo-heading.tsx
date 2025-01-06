"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils";
import { Text } from "@/components";
import LogoIcon from "@/assets/logo.svg";
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

type PhotoHeadingProps = {
  title: string;
  description: string;
  shouldAnimate?: boolean;
}

export const PhotoHeading = ({ title, description, shouldAnimate }: PhotoHeadingProps) => {
  const [showDescription, setShowDescription] = useState<boolean>(true);
  const { layoutExpanded } = useLayoutContext();

  useEffect(() => {
    let timeout = null;
    if (layoutExpanded) {
      setShowDescription(false);
    } else {
      timeout = setTimeout(() => setShowDescription(true), 500);
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
        "flex flex-row items-center p-8 z-10 select-none tracking-widest"
      )}
    >
      <LogoIcon className="z-10" />
      <TransitionContainer
        shouldAnimate={shouldAnimate}
        hidden={!showDescription}
      >
        <Text.Subheader uppercase bold className="text-white">
          {title}
        </Text.Subheader>
        <Text.Body uppercase className="text-white">
          {description}
        </Text.Body>
      </TransitionContainer>
    </div>
  );
};
