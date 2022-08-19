import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

function News() {
  return (
    <Container id="news" maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.100", "gray.700")}
            />
          }
        >
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Coming Soon!
          </Text>
          <Stack>
            <Heading>Raittikarnevaaleille Leppavaaran</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Welcome to LatinoMix show at Estrada-Dance school in Leppavaara
            </Text>

            <Stack>
              <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
              ></Flex>
              <Text fontWeight={600}>place: Leppavaara</Text>
              <Text fontWeight={600}>datetime: 2022-09-03 12:00</Text>
            </Stack>
          </Stack>
          <Stack>
            <Heading>Master Class - Zumba</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Welcome to Fiesta Summer 2022
            </Text>

            <Stack>
              <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
              ></Flex>
              <Text fontWeight={600}>place: Kivenlahti</Text>
              <Text fontWeight={600}>datetime: 2022-08-27 15:00</Text>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default News;
