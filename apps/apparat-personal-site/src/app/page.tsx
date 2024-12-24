import { JankyTransitionContainer, Text } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center grow px-8">
      <div className="text-left max-w-2xl">
        <Text.SupaHeader className="flex flex-row items-center mb-6">
          Hi there
          <Image
            src="/images/gifs/waving-hand.gif"
            alt="hand wave"
            width={40}
            height={40}
            priority
            className="ml-2 mb-2 sm:w-[56px] sm:h-[56px]"
          />
        </Text.SupaHeader>

        <JankyTransitionContainer
          shouldAnimate
          animationClassName="animate-slide-up"
        >
          <Text.Header>I am a Front End Developer based in</Text.Header>
        </JankyTransitionContainer>

        <JankyTransitionContainer
          shouldAnimate
          animationClassName="animate-slide-up"
          scaledDelay={10}
        >
          <Text.Header>San Francisco</Text.Header>
        </JankyTransitionContainer>

        <JankyTransitionContainer
          shouldAnimate
          animationClassName="animate-[fade-in_3s_ease-out_forwards]"
        >
          <Text.Subheader className="mb-4 mt-6">
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
