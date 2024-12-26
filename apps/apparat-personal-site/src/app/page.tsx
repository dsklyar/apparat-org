import {
  BasedOutOfCityText,
  JankyTransitionContainer,
  Text,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center grow px-8">
      <div className="text-left  max-w-xs md:max-w-xl">
        <Text.SupaHeader className="flex flex-row items-center mb-4">
          Hi there
          <Image
            src="/images/gifs/waving-hand.gif"
            alt="hand wave"
            width={32}
            height={32}
            priority
            className="ml-2 mb-2 sm:w-[40px] sm:h-[40px]"
            unoptimized
          />
        </Text.SupaHeader>

        <JankyTransitionContainer
          shouldAnimate
          animationClassName="animate-slide-in-view"
        >
          <Text.Header>I am a Front End Developer based</Text.Header>
        </JankyTransitionContainer>
    
        <BasedOutOfCityText />

        <JankyTransitionContainer
          shouldAnimate
          animationClassName="animate-[fade-in_3s_ease-out_forwards]"
        >
          <Text.Subheader className="mb-4 mt-2 md:mt-4">
            For the last six years, I have worked on a variety of applications
            focusing on bringing the best user experience and functionality.
          </Text.Subheader>
          <Text.Subheader>
            My other interests include photography, music, learning languages
            and backpacking.
          </Text.Subheader>
        </JankyTransitionContainer>
      </div>
    </div>
  );
}
