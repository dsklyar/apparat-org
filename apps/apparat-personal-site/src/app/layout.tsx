import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import {
  NotebookBinderHoles,
  SidePanel,
  SiteHeader,
  ContentPanel,
} from "@/components";
import { cn } from "@/utils";
import { FONTS_INJECT_STRING } from "@/configurations";
import { LayoutContextProvider } from "@/contexts";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FONTS_INJECT_STRING}>
        <LayoutContextProvider>
          <Container>
            <SidePanel />
            <NotebookBinderHoles />
            <ContentPanel>
              <SiteHeader />
              {children}
            </ContentPanel>
          </Container>
        </LayoutContextProvider>
      </body>
    </html>
  );
}
