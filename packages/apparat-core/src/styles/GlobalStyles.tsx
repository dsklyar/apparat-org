import { createGlobalStyle } from "styled-components";
import { GlobalStyles as TailwindStyles } from "twin.macro";

const LibraryStyles = createGlobalStyle``;

const GlobalStyles = () => (
  <>
    <TailwindStyles />
    <LibraryStyles />
  </>
);

export default GlobalStyles;
