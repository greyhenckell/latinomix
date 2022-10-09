import React from "react";
import { ReactElement } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";

import Footer from "components/Footer";

import Script from "next/script";

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Footer></Footer>
      </ChakraProvider>
    </>
  );
}
export default App;
