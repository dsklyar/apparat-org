import tw, { styled } from "twin.macro";

export enum Weight {
  Bold = "bold",
  Default = "default",
  Light = "Light",
}

const Container = styled.span<{ $uppercase: boolean; $weight: Weight }>`
  ${({ $uppercase }) => ($uppercase ? tw`uppercase` : null)}
  ${({ $weight }) => {
    switch ($weight) {
      case Weight.Light:
        return tw`font-light`;
      case Weight.Bold:
        return tw`font-bold`;
      case Weight.Default:
      default:
        return tw`font-normal`;
    }
  }}
  ${tw`text-dark text-base`}
`;

interface ITextProps {
  uppercase?: boolean;
  weight?: Weight;
}

export const Text = ({
  uppercase = false,
  weight = Weight.Default,
  children,
  ...props
}: React.PropsWithChildren<ITextProps>) => {
  return (
    <Container $uppercase={uppercase} $weight={weight} {...props}>
      {children}
    </Container>
  );
};

export default Text;
