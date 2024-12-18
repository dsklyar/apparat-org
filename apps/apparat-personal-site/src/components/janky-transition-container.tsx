import { cn } from "@/utils";

export const JankyTransitionContainer = ({
	children,
	shouldAnimate = false,
	scaledDelay,
	animationClassName
}: React.PropsWithChildren<{
	shouldAnimate?: boolean;
	scaledDelay?: number;
	animationClassName?: string;
}>) => (
	<div className="overflow-hidden">
		<p
			className={cn(
				"flex flex-col overflow-hidden",
				shouldAnimate ? animationClassName : "invisible",
			)}
			style={{
				...(scaledDelay ? { animationDelay: `${scaledDelay * 0.025}s` } : {}),
			}}
		>
			{children}
		</p>
	</div>
);