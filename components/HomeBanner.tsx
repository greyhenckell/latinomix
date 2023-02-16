import {
  Button,
  useBreakpointValue,
  Link,
  Stack,
  Text,
  Flex,
  VStack,
  chakra,
} from "@chakra-ui/react";
import React from "react";

import AdultsSchedule from "components/AdultsSchedule";
import { Journal } from "typing";

interface Props {
  journals: Journal[];
}

function HomeBanner({ journals }: Props) {
  return (
    <Flex
      w="full"
      id="banner"
      textAlign={"center"}
      align={"center"}
      //spacing={{ base: 6 }}
      //direction={"row"}
      //p={{ base: 8, md: 12 }}
      backgroundImage={"url(imgs/bgimage.jpeg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      //h={"100vh"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          alignItems={"center"}
          maxW={"2xl"}
          align={"flex-start"}
          spacing={6}
        >
          <chakra.h1
            fontSize={22}
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            color="gray.700"
          >
            Looking for Fun,Powerful,Energetic Dance? come to...
          </chakra.h1>

          <Text
            bgGradient="linear(to-r, #7928CA, #FF0080)"
            bgClip="text"
            //fontFamily={"Work Sans"}
            //fontWeight={"bold"}
            fontSize="6xl"
            textTransform={"uppercase"}

            //color={"blue.200"}
          >
            latinomix
          </Text>

          <Text
            color={"white"}
            maxW={"6xl"}
            //as="em"
            lineHeight={1.2}
            fontSize={"1xl"}
            fontWeight={600}
            //bgGradient={"linear(to-b, blackAlpha.600, transparent)"}
          >
            Latinomix dance classes are all this! You will enjoy dancing to
            Latin rhythms, have fun and stay fit. In a happy and energetic
            LATINOMIX dance lesson, you will learn about different Latin dances
            in short steps (e.g., salsa, samba, bachata, merengue). The goal is
            to dance at least 2 to 3 different dance styles / dancing lessons,
            and thus learn a variety of different Latin dances, with a good
            feeling..
          </Text>
          <Stack spacing={4} direction={"row"}>
            <AdultsSchedule journals={journals} />
          </Stack>
          <Stack pb={4}>
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
        </Stack>
      </VStack>
    </Flex>
  );
}

export default HomeBanner;
