import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { NotebookBinderHoles, SidePanel, SiteHeader } from "@/components";
import { cn } from "@/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Sklyar",
  description: "Daniel Sklyar",
};

const Container = ({ children }: React.PropsWithChildren) => (
  <div
    className={cn(
      "print:grid-cols-[1fr]",
      "grid grid-cols-[1fr]",
      "md:grid-cols-[40px_3fr]",
      "resurgam:grid-cols-[4fr_1fr_8fr]"
    )}
  >
    {children}
  </div>
);

const ContentPanel = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col items-center min-h-screen min-w-[375px]">{children}</div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
