import tw, { styled } from "twin.macro";
import Image from "next/image";
import useArtifact from "../../hooks/useArtifact";
import { ArrowIcon, Text, Weight } from "apparat-core";

const Container = styled.div`
  ${tw`h-full w-full p-8`}
  max-width: 1200px;
`;

const CustomImage = styled(Image)`
  ${tw`object-cover block select-none`}
  image-rendering: pixelated;
`;

const CarouselContainer = styled.div`
  ${tw`w-full h-[75%] relative`}
`;

const Actions = styled.div`
  ${tw`flex flex-row items-center justify-between w-24`}
`;

const ArrowButton = styled(ArrowIcon)<{ $type: "left" | "right" }>`
  ${tw`cursor-pointer select-none`}
  transform: ${({ $type }) =>
    $type === "left" ? "rotate(-90deg)" : "rotate(90deg)"}
`;

const Info = styled.div`
  ${tw`flex flex-col mr-4`}

  &.text-animation {
    animation-delay: 1s;
    animation: text-transition 1s;
    animation-fill-mode: forwards;
  }

  &.text-hidden {
    visibility: hidden;
  }

  @keyframes text-transition {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Section = styled.div`
  ${tw`flex flex-row justify-between  ml-[12.5%] mr-[12.5%]`}
`;

const Card = styled.div<{ $translate?: number }>`
  ${tw`h-[75%] w-[75%] bg-lighter absolute top-[12.5%] left-[12.5%]`}
  border: 1px solid black;
  transform: ${({ $translate = 0 }) =>
    `translate(${$translate}rem, ${$translate}rem);`};
`;

const artifacts = [
  {
    key: "oslo",
    low: "/photos/oslo_low.jpg",
    high: "/photos/oslo_high.jpg",
    content: { title: "Oslo", description: "Long exposure taken in Oslo" },
  },
  {
    key: "bergen",
    low: "/photos/bergen_low.jpg",
    high: "/photos/bergen_high.jpg",
    content: { title: "Bryggen", description: "Characteristic wooden houses of Bryggen" },
  },
  {
    key: "stavanger",
    low: "/photos/stavanger_low.jpg",
    high: "/photos/stavanger_high.jpg",
    content: { title: "Stavanger", description: "Graffiti near Stavanger petroleum museum" },
  },
  {
    key: "pulpit_rock",
    low: "/photos/pulpit_rock_low.jpg",
    high: "/photos/pulpit_rock_high.jpg",
    content: { title: "Pulpit Rock", description: "Best hike & view of Lysefjord and its surrounding mountains" },
  },
  {
    key: "point_reys",
    low: "/photos/point_reyes_low.jpg",
    high: "/photos/point_reyes_high.jpg",
    content: { title: "Point Reyes", description: "Drakes Beach and picturesque views" },
  },
  {
    key: "paris_airport",
    low: "/photos/paris_airport_low.jpg",
    high: "/photos/paris_airport_high.jpg",
    content: { title: "Airport Layovers", description: "Stuck in Charles de Gaulle airport" },
  },
  {
    key: "fjords",
    low: "/photos/fjords_low.jpg",
    high: "/photos/fjords_high.jpg",
    content: { title: "Norway Fjords", description: "Pit stop alongside the Aurlandsfjord" },
  },
];

export default function Page() {
  const { image, next, prev, type, onLoadingComplete } = useArtifact(
    artifacts,
    {
      iterateIndex: false,
    }
  );

  const animate = type === "high";
  const MAX_IMAGES = 5;

  return (
    <Container>
      <CarouselContainer>
        {artifacts
          .filter(
            ({ key }, artifactIndex) =>
              key !== image.key && artifactIndex < MAX_IMAGES
          )
          .map((artifact, index) => {
            return (
              <Card $translate={index * 0.5} key={artifact.key}>
                <CustomImage
                  key={artifact.key}
                  src={artifact.low}
                  alt={artifact.content.description}
                  fill
                />
              </Card>
            );
          })}
        <Card $translate={(MAX_IMAGES - 1) * 0.5}>
          <CustomImage
            key={image.key}
            src={image[type]}
            alt={image.content.description}
            onLoadingComplete={() => onLoadingComplete()}
            fill
          />
        </Card>
      </CarouselContainer>
      <Section>
        <Info className={animate ? "text-animation" : "text-hidden"}>
          <Text uppercase weight={Weight.Bold}>{image.content.title}</Text>
          <Text uppercase>{image.content.description}</Text>
        </Info>
        <Actions>
          <ArrowButton $type="left" onClick={() => prev()} />
          <ArrowButton $type="right" onClick={() => next()} />
        </Actions>
      </Section>
    </Container>
  );
}
