import React from "react";
import tw, { styled } from "twin.macro";
import useSWR from "swr";
import Image from "next/image";
import { Text } from "apparat-core";

const DefaultText = styled.div<{ bold?: boolean; italic?: boolean }>`
  ${tw`text-dark`}
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: ${({ bold = false }) => (bold ? 700 : 400)};
  font-style: ${({ italic = false }) => (italic ? "italic" : "normal")};
`;

const HeaderText = styled.div<{ bold?: boolean; italic?: boolean }>`
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  font-weight: ${({ bold = false }) => (bold ? 700 : 400)};
  font-style: ${({ italic = false }) => (italic ? "italic" : "normal")};
`;

const SubheaderText = styled.div<{ bold?: boolean; italic?: boolean }>`
  ${tw`text-dark`}
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: ${({ bold = false }) => (bold ? 700 : 400)};
  font-style: ${({ italic = false }) => (italic ? "italic" : "normal")};
`;

// const HeadingContent = styled(({ name, title, contact, ...args }) => (
//   <div {...args}>
//     <div>
//       <HeaderText>{name}</HeaderText>
//       <SubheaderText>{title}</SubheaderText>
//     </div>

//     <ul>
//       {contact.map(({ content }, i) => (
//         <li key={i}>
//           <DefaultText>{content}</DefaultText>
//         </li>
//       ))}
//     </ul>
//   </div>
// ))`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   height: 100%;

//   & > ul {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//   }
// `;

const HeadingImage = styled(({ ...args }) => (
  <div {...args}>
    <Image src="/profile.jpeg" width={96} height={96} alt="Profile Image" />
  </div>
))`
  display: flex;
  align-items: center;
  height: 100%;

  & > img {
    border-radius: 50%;
  }
`;

// const Heading = ({ ...props }) => (
//   <GridEntry
//     bordered
//     title={<HeadingImage />}
//     content={<HeadingContent {...props} />}
//   />
// );

const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 160px auto;
  height: 80%;
  width: 100%;
`;

const Container = styled.div`
  ${tw`flex flex-col lg:w-[8.5in]`}
  /* height: 100vh; */
  /* width: 100vw; */
  /* height: 11in; */
  /* width: 8.5in; */

  & > ${Content} {
    padding: 48px;
  }
`;

const ExperienceTitle = styled(
  ({ title, company, duration, image, ...args }) => (
    <div {...args}>
      <div className="title-container">
        {false && (
          <Image src={`/icons/${image}`} height={32} width={32} alt={image} />
        )}
        <div>
          <DefaultText bold>{title}</DefaultText>
          <DefaultText italic>{company}</DefaultText>
        </div>
      </div>
      <DefaultText>{duration}</DefaultText>
    </div>
  )
)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div.title-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > img {
      margin-right: 8px;
      image-rendering: pixelated;
    }
  }
`;

const ExperienceContent = styled(({ paragraphs, ...args }) => (
  <div {...args}>
    <ul>
      {paragraphs.map((paragraph: any, i: number) => (
        <li key={i}>
          <DefaultText>{paragraph}</DefaultText>
        </li>
      ))}
    </ul>
  </div>
))`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 16px;
    }
  }
`;

const Dot = styled.div`
  background-color: black;
  height: 8px;
  width: 8px;
  border-radius: 50%;
`;

const Experience = styled(({ experience, ...args }) => {
  const { title, company, duration, paragraphs, image } = experience || {};
  return (
    <div {...args}>
      <ExperienceTitle
        title={title}
        company={company}
        duration={duration}
        image={image}
      />
      {paragraphs && <ExperienceContent paragraphs={paragraphs} />}
    </div>
  );
})`
  & > ${ExperienceTitle} {
    margin-bottom: 16px;
  }
`;

const GridCell = styled.div<{ border?: boolean }>`
  margin-bottom: 16px;
  page-break-before: auto;
  ${({ border = false }) =>
    border ? "border-bottom: 1px solid #c4c4c480" : null}
`;

const GridEntry = ({
  title,
  content,
  bordered = false,
}: {
  title: JSX.Element;
  content: JSX.Element;
  bordered?: boolean;
}): JSX.Element => (
  <>
    <GridCell border={bordered}>{title}</GridCell>
    <GridCell border={bordered}>{content}</GridCell>
  </>
);

const Loading = styled.div`
  ${tw`flex h-full w-full items-center justify-center`}
`;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Resume() {
  // There are a lot of underwater stones (unknown unknonws)
  const { data: content, error } = useSWR("/api/resume-content", fetcher);

  if (!content) {
    return (
      <Loading>
        <Text uppercase>one moment...</Text>
      </Loading>
    );
  }

  const { experiences, education, skills } = JSON.parse(content);
  return (
    <Container>
      <Content>
        {/* <Heading {...props} /> */}
        <GridEntry
          title={<DefaultText bold>Skills</DefaultText>}
          content={<DefaultText>{skills.join(", ")}</DefaultText>}
        />
        <GridEntry
          title={<DefaultText bold>Experiences</DefaultText>}
          content={
            <>
              {experiences.map((experience: any, i: number) => (
                <Experience key={i} experience={experience} />
              ))}
            </>
          }
        />
        <GridEntry
          title={<DefaultText bold>Education</DefaultText>}
          content={<Experience experience={education} />}
        />
      </Content>
    </Container>
  );
}
