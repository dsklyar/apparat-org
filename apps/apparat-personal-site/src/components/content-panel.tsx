"use client";
import { RESURGAM } from "@/configurations";
import { useLayoutContext } from "@/contexts";
import { cn } from "@/utils";

export const ContentPanel = ({ children }: React.PropsWithChildren) => {
  const { layoutExpanded } = useLayoutContext();

  return (
    <main
      className={cn(
        "flex flex-col items-center min-h-screen",
        "min-w-[375px] ml-0",
        RESURGAM.CONTENT_PANEL({ layoutExpanded })
      )}
    >
      {children}
    </main>
  );
};
