"use client";
import { cn } from "@/utils";
import { Text } from "./text";
import { usePathname } from "next/navigation";
import { StyledLink } from "./styled-link";
import { useLayoutContext } from "@/contexts";
import { RESURGAM } from "@/configurations";

export const SiteHeader = () => {
  const pathname = usePathname();
  const { layoutExpanded } = useLayoutContext();

  return (
    <header
      className={cn(
        "print:hidden",
        "flex gap-6 flex-wrap items-center z-20",
        "fixed w-full",
        "p-4 md:p-6",
        "border-b border-solid border-accent",
        "bg-background",
        RESURGAM.SITE_HEADER({ layoutExpanded })
      )}
    >
      <StyledLink
        showUnderline={pathname === "/"}
        href="/"
        rel="noopener noreferrer"
      >
        <Text.Body uppercase>home</Text.Body>
      </StyledLink>
      <StyledLink
        showUnderline={pathname === "/resume"}
        href="/resume"
        rel="noopener noreferrer"
      >
        <Text.Body uppercase>resume</Text.Body>
      </StyledLink>
      <StyledLink
        className="hidden sm:flex"
        showUnderline={pathname === "/photos"}
        href="/photos"
        rel="noopener noreferrer"
      >
        <Text.Body uppercase>photos</Text.Body>
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/danielsklyar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text.Body uppercase>linkedin →</Text.Body>
      </StyledLink>
      <Text.Body uppercase className="ml-auto select-none">
        2025
      </Text.Body>
    </header>
  );
};
