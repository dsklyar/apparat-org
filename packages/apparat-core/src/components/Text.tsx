import { CSSProp } from "styled-components";
import tw, { styled } from "twin.macro";

const Container = styled.span`
  ${tw`text-dark text-base`}
`;

interface ITextProps {
  uppercase?: boolean;
  className?: CSSProp<any>;
}

export const Text = ({
  uppercase = false,
  children,
  className,
}: React.PropsWithChildren<ITextProps>) => {
  return (
    <Container css={[uppercase && tw`uppercase`, className]}>
      {children}
    </Container>
  );
};

export const Jumbo = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<ITextProps>) => (
  <Text className={[tw`text-4xl`, className]} {...props}>
    {children}
  </Text>
);

export const Large = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<ITextProps>) => (
  <Text className={[tw`text-3xl`, className]} {...props}>
    {children}
  </Text>
);

export const Medium = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<ITextProps>) => (
  <Text className={[tw`text-2xl`, className]} {...props}>
    {children}
  </Text>
);

export default Text;
