import { cn } from "@/utils";

export const JankyTransitionContainer = ({
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