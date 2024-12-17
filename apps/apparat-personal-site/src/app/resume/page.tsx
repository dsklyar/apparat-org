"use client";
import React, { Children } from "react";
import Image from "next/image";
import useSWR from "swr";
import { Text } from "@/components";
import { cn } from "@/utils";
import Link from "next/link";
import ArrowIcon from "@/assets/arrow.svg";

type ContentData = {
  content: any;
  type?: any;
};

type CellProps = {
  hasBorder?: boolean;
  className?: string;
};

const Cell = ({
  hasBorder = false,
  children,
  className,
}: React.PropsWithChildren<CellProps>) => (
  <div
    className={cn(
      "mb-4 break-before-column",
      hasBorder && "border-b border-solid border-[#c4c4c480]",
      className
    )}
  >
    {children}
  </div>
);

type EntryProps = {
  title: React.ReactElement;
  content: React.ReactElement;
  hasBorder?: boolean;
  className?: string | [string, string];
};

const Entry = ({
  title,
  content,
  hasBorder,
  className,
}: React.PropsWithChildren<EntryProps>) => (
  <>
    <Cell
      className={Array.isArray(className) ? className[0] : className}
      hasBorder={hasBorder}
    >
      {title}
    </Cell>
    <Cell
      className={Array.isArray(className) ? className[1] : className}
      hasBorder={hasBorder}
    >
      {content}
    </Cell>
  </>
);

const Grid = {
  Cell,
  Entry,
};

type ExperienceProps = {
  title?: string;
  company?: string;
  duration?: string;
  durationSub?: string;
  image?: string;
  paragraphs?: string[];
  fixed?: boolean;
  headingClassName?: string;
};

const Experience = ({
  image,
  title,
  company,
  duration,
  durationSub,
  paragraphs,
  headingClassName,
  // TODO: Basically, in print option the space is lost betweend CLoudera and Datacoral experiences so will need to remove margin from list item and add it to the experience div like here with fixed flag
  fixed,
}: ExperienceProps) => (
  <div className={fixed ? "mb-4" : ""}>
    <div
      className={cn(
        "flex flex-col md:flex-row justify-between mb-4",
        headingClassName
      )}
    >
      <div className="flex flex-row items-center">
        {image && (
          <Image
            className="mr-2"
            src={image}
            height={40}
            width={40}
            alt={image}
          />
        )}
        <div>
          <Text.Body bold className="block">
            {title}
          </Text.Body>
          <Text.Body italic className="text-[#D1D1D1]">
            {company}
          </Text.Body>
        </div>
      </div>
      <div className="flex flex-col">
        <Text.Body className="font-medium mt-4 md:mt-0">{duration}</Text.Body>
        {durationSub && (
          <Text.Body italic className="md:self-end">
            {durationSub}
          </Text.Body>
        )}
      </div>
    </div>
    {paragraphs && (
      <div>
        <ul className="list-none p-0 m-0">
          {paragraphs.map((paragraph: any, i: number) => (
            <li key={i} className="mb-4">
              <Text.Body>{paragraph}</Text.Body>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const genLinkProps = (type: "email" | "link", value: string) => {
  return {
    href:
      type === "email"
        ? `mailto:${value}`
        : type === "link"
          ? `https://${value}`
          : value,
    target: "_blank",
    rel: "noopener noreferrer",
  };
};

const Heading = ({ content }: ContentData) => (
  <Grid.Entry
    hasBorder
    // TODO: fix magical numbers
    className="md:sticky top-[89px] bg-[#0a0a0a] md:z-10"
    title={
      <div className={cn("flex items-center h-full", "justify-normal")}>
        <Image
          className="rounded-full flex items-center"
          src="/images/profile.jpeg"
          width={96}
          height={96}
          alt="Profile Image"
        />

        {/* Show Name & title when in tablet mode here, this way the grid stacks */}
        <div className="md:hidden ml-4">
          <Text.Header className="block">{content.name}</Text.Header>
          <Text.Subheader>{content.title}</Text.Subheader>
        </div>
      </div>
    }
    content={
      <div
        className={cn(
          "flex justify-between gap-4 h-full",
          "flex-col md:flex-row",
          "items-start md:items-center"
        )}
      >
        {/* Hide Name & title when in tablet mode here, this way the grid stacks*/}
        <div className="hidden md:block">
          <Text.Header className="block">{content.name}</Text.Header>
          <Text.Subheader>{content.title}</Text.Subheader>
        </div>

        <ul className="md:mb-0 mb-4">
          {content.contact.map(({ content, type }: ContentData, i: number) => (
            <li key={i} className="flex flex-row items-center">
              <Link
                className="items-center gap-2 hover:underline hover:underline-offset-4"
                {...genLinkProps(type, content)}
              >
                {content}
              </Link>
              <ArrowIcon className={cn("rotate-45 scale-75 text-sm", "print:hidden")} />
            </li>
          ))}
        </ul>
      </div>
    }
  />
);

const Skills = ({ content }: ContentData) => (
  <Grid.Entry
    title={<Text.Body bold>Skills</Text.Body>}
    content={
      <Text.Body className="mb-4">{content.skills.join(", ")}</Text.Body>
    }
  />
);

const Experiences = ({ content: experiences }: ContentData) => (
  <Grid.Entry
    hasBorder
    title={<Text.Body bold>Experiences</Text.Body>}
    content={
      <>
        {experiences.map((experience: any, i: number) => (
          <Experience
            key={i}
            {...experience}
            headingClassName="md:sticky bg-[#0a0a0a] z-9 top-[233px] pb-2"
          />
        ))}
      </>
    }
  />
);

const Education = ({ content: education }: ContentData) => (
  <Grid.Entry
    title={<Text.Body bold>Education</Text.Body>}
    content={<Experience {...education} />}
  />
);

const Container = ({ children }: React.PropsWithChildren) => (
  <main
    className={cn(
      "lg:w-[80%] max-w-[10in] flex flex-column pt-[89px] px-8",
      "print:pt-0 print:w-[8.6in]"
    )}
  >
    {children}
  </main>
);

const Content = ({ children }: React.PropsWithChildren) => (
  <div className="grid grid-rows-[160px_auto] md:grid-cols-[20%_1fr] grid-cols-[1fr]">
    {children}
  </div>
);

const Loading = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-column items-center justify-center tracking-widest">
    {children}
  </div>
);

export default function Resume() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/resume", fetcher);

  if (!data) {
    return (
      <>
        <br />
        <Loading>
          <Text.Body uppercase>one moment...</Text.Body>
        </Loading>
      </>
    );
  }

  const content = JSON.parse(data);
  const { experiences, education } = content;

  return (
    <Container>
      <Content>
        <Heading content={content} />
        <Skills content={content} />
        <Experiences content={experiences} />
        <Education content={education} />
      </Content>
    </Container>
  );
}
