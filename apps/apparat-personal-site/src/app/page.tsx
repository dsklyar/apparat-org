import { Text } from "@/components";
import { cn } from "@/utils";

const TransitionContainer = ({
  children,
  shouldAnimate = false,
}: React.PropsWithChildren<{ shouldAnimate?: boolean }>) => (
  <div
    className={cn(
      "flex flex-col",
      shouldAnimate ? "animate-fade-in" : "invisible"
    )}
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <main className="flex justify-center items-center grow px-8">
      <div className="text-center sm:text-left max-w-2xl">
        <Text.Header className="text-white mb-6">
          I am a Front End Developer based in San Francisco
        </Text.Header>
        <TransitionContainer shouldAnimate>
          <Text.Subheader className="text-white mb-4">
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
