import { GlobalStyles } from "apparat-core";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Artifact, Layout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Daniel Sklyar</title>
      </Head>
      <GlobalStyles />
      <Layout
        sideElement={<Artifact />}
        contentElement={<Component {...pageProps} />}
      />
    </>
  );
}

export default MyApp;
