import { Flex, Stack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import About from "components/About";
import Header from "components/Header";
import HomeBanner from "components/HomeBanner";
import News from "components/News";

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
          <Stack
            spacing={3}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.400", "gray.900")}
              />
            }
          >
            <HomeBanner></HomeBanner>
            <News></News>
            <About></About>
          </Stack>
        </section>
      </main>
    </>
  );
};

export default Home;
