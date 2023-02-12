import { Text, Weight } from "apparat-core";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import useArtifact from "../hooks/useArtifact";

const Container = styled.div`
  ${tw`w-full h-full relative bg-lighter`}
`;

const CustomImage = styled(Image)`
  ${tw`object-cover cursor-pointer`}
  image-rendering: pixelated;
`;

const Description = styled.div`
  ${tw`flex flex-row absolute p-8 z-10`}
`;

const Transition = styled.div`
  ${tw`flex flex-col ml-4 select-none`}
  & > span {
    ${tw`text-white`}
  }

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

const Shape = styled.div`
  ${tw`h-12 w-12 shrink-0`}
  border: 0.5rem solid #ffffff;
`;

const artifacts = [
  {
    key: "image_1",
    low: "/image_1_low.jpg",
    high: "/image_1_high.jpg",
    content: { title: "Iceland", description: "Sometime in 2019" },
  },
  {
    key: "image_2",
    low: "/image_2_low.jpg",
    high: "/image_2_high.jpg",
    content: { title: "China", description: "Yellow mountains" },
  },
  {
    key: "image_3",
    low: "/image_3_low.jpg",
    high: "/image_3_high.jpg",
    content: { title: "China", description: "Month before pandemic" },
  },
];

interface IArtifactProps {}

const Artifact = ({}: IArtifactProps) => {
  const { image, next, type, onLoadingComplete } = useArtifact(artifacts, {
    low: 1,
    high: 10,
    iterateIndex: true,
  });
  const animate = type === "high";

  return (
    <Container>
      <CustomImage
        src={image[type]}
        alt={image.content.description}
        fill
        onClick={() => next()}
        onLoadingComplete={() => onLoadingComplete()}
      />
      <Description>
        <Shape />
        <Transition className={animate ? "text-animation" : "text-hidden"}>
          <Text uppercase weight={Weight.Bold}>
            {image.content.title}
          </Text>
          <Text uppercase weight={Weight.Bold}>
            {image.content.description}
          </Text>
        </Transition>
      </Description>
    </Container>
  );
};

export default Artifact;
