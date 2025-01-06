import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";

const abstract = ["in Concord", "in San Francisco", "in Arlington"];

export const useCityAnimation = () => {
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