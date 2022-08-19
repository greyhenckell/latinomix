import React from "react";
import { ReactElement } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Layout from "components/Layout";

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default App;
