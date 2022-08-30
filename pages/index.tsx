import {
  Container,
  Flex,
  Stack,
  StackDivider,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import About from "components/About";
import Footer from "components/Footer";
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
      <Flex p="6" w="full">
        <VStack w="full" id="vstack" spacing="2">
          <Stack w="100%">
            <Header></Header>
          </Stack>
          <HomeBanner></HomeBanner>
          <News></News>
        </VStack>
      </Flex>
    </>
  );
};

export default Home;
