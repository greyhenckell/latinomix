import {
  Box,
  Stack,
  StackDivider,
  VStack,
  Image,
  Divider,
  Flex,
} from "@chakra-ui/react";
import AdultsSchedule from "components/AdultsSchedule";

import Header from "components/Header";
import HomeBanner from "components/HomeBanner";
import HomePage from "components/HomePage";
import prisma from "lib/prisma";

import Head from "next/head";
import React from "react";
import { Journal } from "typing";

import { useState, useEffect } from "react";

interface Props {
  journals: Journal[];
}

export const getServerSideProps = async () => {
  const journals = await prisma.danceDay.findMany({
    include: {
      services: true,
    },
  });

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
        //w="full"
        id="vstack"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={2}
        align="stretch"
        //p={1}
        //bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Box>
          <Flex
            w={"100%"}
            backgroundColor={isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent"}
            position={isScrolled ? "sticky" : "static"}
            top="0"
            zIndex={isScrolled ? "999" : "auto"}
          >
            <Header Links={Links}></Header>
          </Flex>

          {/* Space to account for the sticky header */}
          <Box height={isScrolled ? "45px" : "0"} />
          <HomePage journals={journals}></HomePage>

          <AdultsSchedule journals={journals} />
        </Box>
      </VStack>
    </>
  );
};

export default Home;
