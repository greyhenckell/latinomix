import {
  Container,
  Flex,
  Box,
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
        <title>Classes | LatinoMixTanssi | Espoo</title>
        <meta
          name="keywords"
          content="dance | espoo | latinomix | latin style"
        />
        <meta
          name="description"
          content="Do you need extra energy boost, Latinomix-tanssitunnit ovat kaikkea tätä! Saat nauttia lattarirytmeistä, pitää hauskaa ja samalla kuntoilla "
        />
        <meta property="og:title" content="Latinomix tanssi|LatinoMix dance" />
        <meta
          property="og:description"
          content="Come to dance! salsa reggaeton bachata merengue samba, no dance level required with Latinomix"
        />
        <meta property="og:url" content="https://latinomixtanssi.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <VStack
        w="full"
        id="vstack"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={6}
        align="stretch"
        p={4}
        //bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Box>
          <Header></Header>
          <HomeBanner></HomeBanner>
        </Box>
      </VStack>
    </>
  );
};

export default Home;
