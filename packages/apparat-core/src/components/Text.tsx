import tw, { styled } from "twin.macro";

export const Text = styled.span<{
  size?: "small" | "s" | "medium" | "m" | "large" | "l" | "jumbo" | "j";
  uppercase?: boolean;
}>`
  ${tw`text-default`}
  ${({ uppercase = false }) => uppercase && tw`uppercase`}
  ${({ size = "small" }) => {
    switch (size) {
      case "m":
      case "medium":
        return tw`text-2xl`;
      case "l":
      case "large":
        return tw`text-3xl`;
      case "j":
      case "jumbo":
        return tw`text-4xl`;
      case "s":
      case "small":
      default:
        return tw`text-base`;
    }
  }}
`;

export default Text;
