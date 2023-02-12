import tw, { styled, css } from "twin.macro";
import { Text } from "apparat-core";

const Container = styled.main`
  ${tw`flex items-center ml-16 h-full`}

  & > div {
    ${tw`w-full lg:w-2/4`}
  }
`;

const SlideInText = styled(Text)`
  animation: 2s text-transition forwards;
  opacity: 0;
  transform: translateX(100%);

  @keyframes text-transition {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const Heading = styled(SlideInText)`
  ${tw`text-3xl`}
`

export default function Page() {
  return (
    <Container>
      <div>
        <Heading>
          I’m a Front End Developer based in San Francisco
        </Heading>
        <br />
        <br />
        <SlideInText>
          For the last six years, I’ve worked on a variety of applications
          focusing on bringing the best user experience and functionality
        </SlideInText>
        <br />
        <br />
        <SlideInText>
          My other interests include photography, music, learning languages, and
          backpacking
        </SlideInText>
      </div>
    </Container>
  );
}
