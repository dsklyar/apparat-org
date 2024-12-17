import { Text } from "@/components";
import { cn } from "@/utils";

const TransitionContainer = ({
  children,
  shouldAnimate = false,
  type = "animate-fade-in",
  scaledDelay,
}: React.PropsWithChildren<{
  shouldAnimate?: boolean;
  type?: "animate-fade-in" | "animate-slide-up";
  scaledDelay?: number;
}>) => (
  <div className="overflow-hidden">
    <p
      className={cn(
        "flex flex-col overflow-hidden",
        shouldAnimate ? type : "invisible"
      )}
      style={{
        ...(scaledDelay ? { animationDelay: `${scaledDelay * 0.025}s` } : {}),
      }}
    >
      {children}
    </p>
  </div>
);

export default function Home() {
  return (
    <main className="flex justify-center items-center grow px-8">
      <div className="text-center sm:text-left max-w-2xl">
        <TransitionContainer shouldAnimate type="animate-slide-up">
          <Text.Header className="text-white">
            I am a Front End Developer based in
          </Text.Header>
        </TransitionContainer>

        <TransitionContainer shouldAnimate type="animate-slide-up" scaledDelay={10}>
          <Text.Header className="text-white">San Francisco</Text.Header>
        </TransitionContainer>

        <TransitionContainer shouldAnimate>
          <Text.Subheader className="text-white mb-4 mt-6">
            For the last six years, I have worked on a variety of applications
            focusing on bringing the best user experience and functionality.
          </Text.Subheader>
          <Text.Subheader className="text-white">
            My other interests include photography, music, learning languages,
            and backpacking.
          </Text.Subheader>
        </TransitionContainer>
      </div>
    </main>
  );
}
