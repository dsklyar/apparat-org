import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { NotebookBinderHoles, SidePanel, SiteHeader } from "@/components";
import { cn } from "@/utils";
import { FONTS_INJECT_STRING } from "@/configurations";

export const metadata: Metadata = {
  title: "Daniel Sklyar",
  description: "Daniel Sklyar",
};

const Container = ({ children }: React.PropsWithChildren) => (
  <div
    className={cn(
      "font-[family-name:var(--font-geist-mono)]",
      "print:font-[family-name:var(--font-roboto)]"
    )}
  >
    {children}
  </div>
);

const ContentPanel = ({ children }: React.PropsWithChildren) => (
  <main
    className={cn(
      "min-w-[375px] resurgam:max-w-[65vw] ml-0 resurgam:ml-[35vw]",
      "flex flex-col items-center min-h-screen",
    )}
  >
    {children}
  </main>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FONTS_INJECT_STRING}>
        <Container>
          <SidePanel />
          <NotebookBinderHoles />
          <ContentPanel>
            <SiteHeader />
            {children}
          </ContentPanel>
        </Container>
      </body>
    </html>
  );
}
