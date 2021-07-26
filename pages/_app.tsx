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
        <meta name="title" property="og:title" content="Bonnie Peng" />
        <meta name="description" content="My personal website, made with <3" />
        <meta
          name="description"
          property="og:description"
          content="My personal website, made with <3"
        />
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/51338203260_9933f12f47_k.jpg"
        />
        <meta property="og:type" content="Website" />
        <meta name="author" content="Bonnie Peng" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
