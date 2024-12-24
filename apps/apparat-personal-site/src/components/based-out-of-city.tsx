"use client";
import { JankyTransitionContainer, Text } from "@/components";
import { useEffect, useRef, useState } from "react";
import { useInterval } from "usehooks-ts";

const abstract = ["Concord", "San Francisco", "Arlington"];

const useCity = () => {
  const animationActive = useRef<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [shownIndex, setShowIndex] = useState<number>(0);
  const [animation, setAnimation] = useState<
    "animate-slide-in-view" | "animate-slide-out-of-view"
  >("animate-slide-in-view");

  useInterval(() => {
    setIndex((prev) => (abstract.length - 1 === prev ? 0 : prev + 1));
  }, 4000);

  useEffect(() => {
    setIndex(0);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation("animate-slide-in-view");
      setShowIndex(index);
    }, 1000);

    return () => {
      setAnimation("animate-slide-out-of-view");
      clearTimeout(timeout);
    };
  }, [index]);

  return {
    index: shownIndex,
    copy: abstract[shownIndex],
    animation,
  };
};

export const BasedOutOfCityText = () => {
  const { copy, animation } = useCity();

  return (
    <JankyTransitionContainer
      shouldAnimate
      animationClassName={animation}
      scaledDelay={10}
    >
      <Text.Header>{copy}</Text.Header>
    </JankyTransitionContainer>
  );
};
