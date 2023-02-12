import { GlobalStyles } from "apparat-core";
import type { AppProps } from "next/app";
import Head from "next/head";
import tw, { styled } from "twin.macro";
import { useElementSize } from "usehooks-ts";
import Artifact from "../components/Artifact";
import Header from "../components/Header";
import Layout from "../components/Layout";

const ContentPanel = styled.div<{ $offset: number }>`
  ${tw`h-full w-full`}
  padding-top: ${({ $offset }) => `${$offset || 0}px`};
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [contentRef, { width }] = useElementSize();
  const [headerRef, { height }] = useElementSize();

  return (
    <>
      <Head>
        <title>Daniel Sklyar</title>
      </Head>
      <GlobalStyles />
      <Layout
        sideElement={<Artifact />}
        contentElement={
          <>
            <Header ref={headerRef} width={width} />
            <ContentPanel ref={contentRef} $offset={height}>
              <Component {...pageProps} />
            </ContentPanel>
          </>
        }
      />
    </>
  );
}

export default MyApp;
