import React from "react";
import tw, { styled  } from "twin.macro";
import useSWR from "swr";
import Image from "next/image";

// const content = {
//   name: "Daniel Sklyar",
//   title: "Senior Software Engineer",
//   contact: [
//     { type: "email", content: "cs.daniel.sklyar@gmail.com" },
//     { type: "linkedin", content: "linkedin.com/in/danielsklyar" },
//     { type: "github", content: "github.com/dsklyar" },
//   ],
//   skills: [
//     "HTML5",
//     "CSS3",
//     "TypeScript",
//     "JavaScript",
//     "ReactJS",
//     "NextJS",
//     "Styled-Components",
//     "Tailwind CSS",
//     "RechartsJS",
//     "D3",
//     "Storybook",
//     "React-Window",
//     "Reduxjs",
//     "BabylonJS",
//     "Nodejs",
//     "Express",
//     "GraphQL",
//     "Jest",
//     "Cypress",
//     "ESLint",
//     "Prettier",
//     "Webpack",
//     "Figma",
//     "Zeplin",
//     "Jira",
//     "Confluence",
//   ],
//   experiences: [
//     {
//       title: "Senior Software Engineer",
//       company: "Cloudera, San Francisco CA",
//       duration: "June 2021 - Decmeber 2022",
//       image: "cloudera.png",
//       paragraphs: [
//         "Worked on the frontend client of Cloudera’s Studio application. Participated in product feature ideation, expanded/mentored Studio’s UI team and collaborated with Cloudera’s engineering teams to deliver results in a fast paced development cycle.",
//         "Significantly contributed to redesign effort of existing Datacoral’s application to match Cloudera's UX design system, rebuilt majority of existing pages/flows using styled-components and tailwind-css.",
//         "Built an internal frontend library abstracting authentication, add connector flow CRUD and connector/transformation monitoring into easy to use services using typescript. Used jest to implement 90% coverage on all of the services. Created & maintained documentation for library integration.",
//         "Led design and built Studio application’s multi tab workspace feature, goal of which was to provide the user ability to view multiple artifact types in their respective tabs such as connectors, transformations and visualizations. Implemented reusable hook pattern to easily extend and support for new tab types, built-in tab session restore, and tab CRUD operations.",
//       ],
//     },
//     {
//       title: "Member of Technical Team",
//       company: "Datacoral Inc, San Francisco CA",
//       duration: "September 2020 - June 2021",
//       image: "datacoral.png",
//       paragraphs: [
//         "Worked on the frontend client of Datacoral’s application. Participated in refactoring effort of existing UI codebase, wrote unit/integration tests using jest/cypress and owned responsibility for building major features.",
//         "Created and maintained a library of reusable components for designer/engineering staff to improve developing efficiency, component testing and UI/UX documentation using storybook.",
//         "Built application’s self-serve customer onboarding flow UI incorporating AWS partner solutions, customer and company-hosted options.",
//         "Participated in design and built the majority of application’s add connector flow UI supporting over 10 connector types, OAuth authentication and restoring progress from draft state.",
//       ],
//     },
//     {
//       title: "Software Engineer",
//       company: "Outward Inc, San Jose CA",
//       duration: "March 2018 - August 2019",
//       image: "outward.png",
//       paragraphs: [
//         "Led migration of Bassett’s furniture 3D visualizer application to utilize React.js framework with Redux.js for state management using TypeScript. Integrated application’s Redux state with Babylon.js WebGL engine rendering pipeline.",
//         "Owned majority responsibility in building Bassett’s Expertsite designer site which integrated with Bassett’s live catalog, CMS and Outward’s visualizing solutions. Presented weekly progress demos to the customer.",
//         "Implemented UI features such as product search and search filters, configuration saving and loading, cross-application navigation menu. Worked directly with the UI/UX team to deliver features on short timelines.",
//       ],
//     },
//     {
//       title: "Software Engineer",
//       company: "Optiscan Biomedical Corp, Hayward CA",
//       duration: "September 2015 - January 2018",
//       image: "optiscan.png",
//       paragraphs: [
//         "Created a multi-window application for the laboratory to log and maintain a record of blood donors, blood draws and users using NodeJS and C#.",
//         "Integrated with in house database/authentication solution to register donors and assign user roles, calculate donor’s next availability to prevent overdraw, edit and update blood draw results, and search and view users/donors based on specific parameters using NodeJS.",
//       ],
//     },
//     {
//       title: "Software Intern",
//       company: "Optiscan Biomedical Corp, Hayward CA",
//       duration: "June 2015 - August 2015",
//       image: "optiscan.png",
//       paragraphs: [
//         "Assisted in the database design, the purpose of which was to create an organized and streamlined approach to storing and viewing laboratory records previously held in multiple excel & physical files.",
//       ],
//     },
//   ],
//   education: {
//     title: "University of California, Merced",
//     company: "B.S. Computer Science and Engineering",
//     duration: "September 2013 - December 2017",
//   },
// };

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

const HeadingContent = styled(({ name, title, contact, ...args }) => (
  <div {...args}>
    <div>
      <HeaderText>{name}</HeaderText>
      <SubheaderText>{title}</SubheaderText>
    </div>

    <ul>
      {contact.map(({ content }, i) => (
        <li key={i}>
          <DefaultText>{content}</DefaultText>
        </li>
      ))}
    </ul>
  </div>
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

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

const Heading = ({ ...props }) => (
  <GridEntry
    bordered
    title={<HeadingImage />}
    content={<HeadingContent {...props} />}
  />
);

const Content = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 160px auto;
  height: 80%;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Resume() {
  // There are a lot of underwater stones (unknown unknonws)
  const { data: content, error } = useSWR("/api/resume-content", fetcher);

  if (!content) {
    return <span>Loading</span>;
  }
  console.log(JSON.parse(content))

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
};

