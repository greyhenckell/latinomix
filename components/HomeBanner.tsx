import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

import AdultsSchedule from "components/AdultsSchedule";
import { Journal } from "typing";

interface Props {
  journals: Journal[];
}

function HomeBanner({ journals }: Props) {
  return (
    <Stack
      w="full"
      id="banner"
      textAlign={"center"}
      align={"center"}
      spacing={{ base: 6 }}
      //direction={"row"}
      p={{ base: 8, md: 12 }}
      backgroundImage={"url(imgs/bgimage.jpeg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}

      //h={"100vh"}
    >
      <Heading
        fontWeight={400}
        color={"gray.600"}
        bgGradient={"linear(to-b, whiteAlpha.900, transparent)"}
      >
        Looking for Energy,Power and Flow?
        <Text
          fontWeight={800}
          as={"span"}
          color={"gray.900"}
          bgGradient={"linear(to-b, whiteAlpha.900, transparent)"}
        >
          {"  "} LatinoMix
        </Text>
      </Heading>
      <Text
        color={"gray.200"}
        maxW={"6xl"}
        as="em"
        fontSize={"1xl"}
        fontWeight={600}
        bgGradient={"linear(to-b, blackAlpha.600, transparent)"}
      >
        Latinomix dance classes are all this! You will enjoy dancing to Latin
        rhythms, have fun and stay fit. In a happy and energetic LATINOMIX dance
        lesson, you will learn about different Latin dances in short steps
        (e.g., salsa, samba, bachata, merengue). The goal is to dance at least 2
        to 3 different dance styles / dancing lessons, and thus learn a variety
        of different Latin dances, with a good feeling..
      </Text>
      <Stack spacing={6} direction={"row"}>
        <AdultsSchedule journals={journals} />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Link href="/timetable">
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            More Info!
          </Button>
        </Link>
      </Stack>

      {/*<Flex align="center">
        <Image
          height={{ sm: "24rem", lg: "28rem" }}
          mt={{ base: 12, sm: 16 }}
          src="imgs/homepage.jpeg"
  />
      </Flex>*/}
    </Stack>
  );
}

export default HomeBanner;
