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
        "flex gap-6 flex-wrap items-center z-10",
        "fixed",
        "p-4 md:p-8",
        "min-w-full md:min-w-[calc(100%-4rem)] resurgam:min-w-[1024px]",
        "border-b border-solid border-[#c4c4c480]",
        "bg-[#0a0a0a]"
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
      <Text.Body uppercase className="ml-auto">
        2025
      </Text.Body>
    </header>
  );
};
