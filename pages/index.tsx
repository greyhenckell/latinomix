import { Flex } from "@chakra-ui/react";
import Header from "components/Header";
import HomeBanner from "components/HomeBanner";

import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>LatinoMix</title>
      </Head>
      <main>
        <Header></Header>
        <section>
          <HomeBanner></HomeBanner>
        </section>
      </main>
    </>
  );
};

export default Home;
