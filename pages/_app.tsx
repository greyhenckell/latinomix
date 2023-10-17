import React from "react";

import { Box, ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";

import { IntlProvider } from "next-intl";

// Import your i18n configuration (next-intl.config.js)
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

import "slick-carousel/slick/slick.css";

import Footer from "components/Footer";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import Header from "components/Header";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fi" }];
}

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  //scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Listen for scroll events and update the state
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <I18nextProvider i18n={i18n}>
            <IntlProvider
              locale={pageProps.locale}
              messages={pageProps.message}
            >
              <Flex
                id="flexscroll"
                minWidth={"100%"}
                backgroundColor={
                  isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent"
                }
                position={isScrolled ? "sticky" : "static"}
                top="0"
                zIndex={isScrolled ? "999" : "auto"}
              >
                <Header></Header>
              </Flex>
              {/* Space to account for the sticky header */}
              <Box height={isScrolled ? "45px" : "0"} />
              <Component {...pageProps} />
              <Footer></Footer>
            </IntlProvider>
          </I18nextProvider>
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}
export default App;
