import Head from "next/head";
import "../styles/globals.scss";
import "../styles/customTimeline.css";

import { AppProps } from "next/app";
import React from "react";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <title>Bonnie Peng</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
