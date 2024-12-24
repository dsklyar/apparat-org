"use client";
import { cn } from "@/utils";
import { Text } from "./text";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SiteHeader = () => {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        "print:hidden",
        "flex gap-6 flex-wrap items-center z-20",
        "fixed w-full resurgam:w-[65vw]",
        "p-4 md:p-6",
        "border-b border-solid border-accent",
        "bg-background"
      )}
    >
      <Link
        className={cn(
          "flex items-center gap-2 hover:underline hover:underline-offset-4",
          pathname === "/" && "underline underline-offset-4"
        )}
        href="/"
        rel="noopener noreferrer"
      >
        <Text.Body uppercase>home</Text.Body>
      </Link>
      <Link
        className={cn(
          "flex items-center gap-2 hover:underline hover:underline-offset-4",
          pathname === "/resume" && "underline underline-offset-4"
        )}
        href="/resume"
        rel="noopener noreferrer"
      >
        <Text.Body uppercase>resume</Text.Body>
      </Link>
      <Link
        className={cn(
          "hidden sm:flex items-center gap-2 hover:underline hover:underline-offset-4",
          pathname === "/photos" && "underline underline-offset-4"
        )}
        href="/photos"
        rel="noopener noreferrer"
      >
        <Text.Body uppercase>photos</Text.Body>
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/danielsklyar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text.Body uppercase>linkedin →</Text.Body>
      </Link>
      <Text.Body uppercase className="ml-auto select-none">
        2025
      </Text.Body>
    </header>
  );
};
