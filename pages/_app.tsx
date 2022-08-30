import React from "react";
import { ReactElement } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import Footer from "components/Footer";

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Footer></Footer>
    </ChakraProvider>
  );
}
export default App;
