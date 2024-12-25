import { cn } from "@/utils";

type JankyTransitionContainerProps = React.PropsWithChildren<{
  shouldAnimate?: boolean;
  scaledDelay?: number;
  animationClassName?: string;
  className?: string;
}>;

export const JankyTransitionContainer = ({
  children,
  shouldAnimate = false,
  scaledDelay,
  animationClassName,
  className,
}: JankyTransitionContainerProps) => (
  <div className={cn("overflow-hidden", className)}>
    <p
      className={cn(
        "flex flex-col overflow-hidden",
        shouldAnimate ? animationClassName : "invisible"
      )}
      style={{
        ...(scaledDelay ? { animationDelay: `${scaledDelay * 0.025}s` } : {}),
      }}
    >
      {children}
    </p>
  </div>
);
