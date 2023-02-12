import tw, { styled } from "twin.macro";
import Image from "next/image";
import useArtifact from "../../hooks/useArtifact";
import { ArrowIcon } from "apparat-core";

const Container = styled.div`
  ${tw`h-full w-full p-8`}
`;

const CustomImage = styled(Image)`
  ${tw`object-cover block select-none`}
  image-rendering: pixelated;
`;

const CarouselContainer = styled.div`
  ${tw`w-full h-[75%] relative`}
`;

const Actions = styled.div`
  ${tw`flex flex-row items-center justify-between w-24 ml-auto mr-[12.5%]`}
`;

const ArrowButton = styled(ArrowIcon)<{ $type: "left" | "right" }>`
  ${tw`cursor-pointer select-none`}
  transform: ${({ $type }) =>
    $type === "left" ? "rotate(-90deg)" : "rotate(90deg)"}
`;

const Card = styled.div<{ $translate?: number }>`
  ${tw`h-[75%] w-[75%] bg-medium absolute top-[12.5%] left-[12.5%]`}
  border: 1px solid black;
  transform: ${({ $translate = 0 }) =>
    `translate(${$translate}rem, ${$translate}rem);`};
`;

let artifacts = [
  {
    key: "oslo",
    low: "/photos/oslo_low.jpg",
    high: "/photos/oslo_high.jpg",
    content: { title: "Oslo", description: "Long exposre taking in Oslo" },
  },
  {
    key: "bergen",
    low: "/photos/bergen_low.jpg",
    high: "/photos/bergen_high.jpg",
    content: { title: "Bergen", description: "Colourful Houses" },
  },
  {
    key: "stavanger",
    low: "/photos/stavanger_low.jpg",
    high: "/photos/stavanger_high.jpg",
    content: { title: "Stavanger", description: "Grafitti" },
  },
  {
    key: "pulpit_rock",
    low: "/photos/pulpit_rock_low.jpg",
    high: "/photos/pulpit_rock_high.jpg",
    content: { title: "Pulpit Rock", description: "Pulpit Rock" },
  },
  {
    key: "point_reys",
    low: "/photos/point_reyes_low.jpg",
    high: "/photos/point_reyes_high.jpg",
    content: { title: "Point Reyes", description: "Point Reyes" },
  },
];

export default function Page() {
  const { image, next, prev, type, onLoadingComplete } = useArtifact(
    artifacts,
    {
      iterateIndex: false,
    }
  );

  return (
    <Container>
      <CarouselContainer>
        {artifacts
          .filter(({ key }) => key !== image.key)
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
        <Card $translate={(artifacts.length - 1) * 0.5}>
          <CustomImage
            key={image.key}
            src={image[type]}
            alt={image.content.description}
            onLoadingComplete={() => onLoadingComplete()}
            fill
          />
        </Card>
      </CarouselContainer>
      <Actions>
        <ArrowButton $type="left" onClick={() => prev()} />
        <ArrowButton $type="right" onClick={() => next()} />
      </Actions>
    </Container>
  );
}
