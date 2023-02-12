import tw, { styled } from "twin.macro";
import { ArrowIcon } from "@assets";
import { Text } from "@components";

const Container = styled.button`
  // Reset CSS
  ${tw`outline-none cursor-pointer border-none`}
  // Some sugar
  ${tw`inline-block px-2.5 py-2.5 shadow-sm hover:shadow-md active:shadow-sm`}
  // Positioning
  ${tw`flex flex-row items-center`}

  ${tw`border border-solid border-light`}

  background: none;
`;

const Icon = styled(ArrowIcon)`
  ${tw`h-4 w-4 ml-1`}
  transform: rotate(45deg);
`;

interface IButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, ...props }: IButtonProps) => {
  return (
    <Container {...props}>
      <Text uppercase>{text}</Text>
      <Icon />
    </Container>
  );
};

export default Button;
