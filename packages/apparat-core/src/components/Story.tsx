import tw, { styled } from "twin.macro";
import { ArrowIcon } from "@assets";

const Container = styled.div`
  ${tw`h-[24rem] w-[32rem] relative`}
  transform: translate(-.5rem, -.5rem);
`;

const LeftArrow = styled(ArrowIcon)`
  ${tw`ml-[8rem] cursor-pointer`}
  transform: rotate(-90deg);
`;

const RightArrow = styled(ArrowIcon)`
  ${tw`mr-[8rem] cursor-pointer`}
  transform: rotate(90deg);
`;

const Actions = styled.div`
  ${tw`w-[32rem] flex flex-row justify-between pt-5`}
  /* border: 1px solid black; */
`;

const Card = styled.div<{ $translate?: number }>`
  ${tw`h-[24rem] w-[32rem] bg-medium absolute top-0`}
  border: 1px solid black;
  transform: ${({ $translate = 0 }) =>
    `translate(${$translate}rem, ${$translate}rem);`};
`;

interface IStoryProps {
  renderVia: () => JSX.Element;
}

export const Story = ({ renderVia }: IStoryProps) => {
  return (
    <div>
      <Container>
        <Card $translate={0}></Card>
        <Card $translate={0.5}></Card>
        <Card $translate={1}></Card>
      </Container>
      <Actions>
        <LeftArrow />
        <RightArrow />
      </Actions>
    </div>
  );
};

export default Story;
