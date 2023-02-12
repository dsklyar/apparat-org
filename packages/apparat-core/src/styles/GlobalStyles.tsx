import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  /* @tailwind base;
  @tailwind components;
  @tailwind utilities; */
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap');
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
