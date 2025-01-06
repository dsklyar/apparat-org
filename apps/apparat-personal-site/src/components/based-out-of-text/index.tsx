"use client";
import { JankyTransitionContainer, Text } from "@/components";
import { useCityAnimation } from "./use-city-animation";

export const BasedOutOfCityText = () => {
  const { copy, animation } = useCityAnimation();

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
