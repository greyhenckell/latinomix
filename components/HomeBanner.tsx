import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function HomeBanner() {
  return (
    <Stack
      w="full"
      id="banner"
      textAlign={"center"}
      align={"center"}
      spacing={{ base: 6 }}
      p={{ base: 8, md: 12 }}
    >
      <Heading>
        Dance with LatinoMix{" "}
        <Text as={"span"} color={"green.400"}>
          is easy
        </Text>
      </Heading>
      <Text color={"gray.500"} maxW={"6xl"}>
        Latinomix dance classes are all this! You will enjoy dancing to Latin
        rhythms, have fun and stay fit. In a happy and energetic LATINOMIX dance
        lesson, you will learn about different Latin dances in short steps
        (e.g., salsa, samba, bachata, merengue). The goal is to dance at least 2
        to 3 different dance styles / dancing lessons, and thus learn a variety
        of different Latin dances, with a good feeling..
      </Text>
      <Stack spacing={6} direction={"row"}>
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
      <Flex align="center">
        <Image
          height={{ sm: "24rem", lg: "28rem" }}
          mt={{ base: 12, sm: 16 }}
          src="imgs/homepage.jpeg"
        />
      </Flex>
    </Stack>
  );
}

export default HomeBanner;
