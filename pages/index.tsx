import { Box, StackDivider, VStack } from "@chakra-ui/react";

import Header from "components/Header";
import HomeBanner from "components/HomeBanner";
import prisma from "lib/prisma";

import Head from "next/head";
import React from "react";
import { Journal } from "typing";

interface Props {
  journals: Journal[];
}

export const getServerSideProps = async () => {
  const journals = await prisma.workDay.findMany();

  return {
    props: {
      journals: journals,
    },
  };
};

const Links = [
  { name: "News", path: "/news" },
  { name: "Schedule&Prices", path: "/timetable" },
  { name: "About Us", path: "/about" },
];

const Home = ({ journals }: Props) => {
  return (
    <>
      <Head>
        <title>LatinoMixTanssi-Espoo</title>
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
          <Header Links={Links}></Header>
          <HomeBanner journals={journals} />
        </Box>
      </VStack>
    </>
  );
};

export default Home;
