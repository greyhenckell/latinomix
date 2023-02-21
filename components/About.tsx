import React from "react";
import Image from "next/image";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

function About() {
  return (
    <>
      <Stack p={4}>
        <Center>
          {" "}
          <Stack
            id="about"
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "540px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            bg={"white"}
            boxShadow={"2xl"}
            padding={4}
          >
            {" "}
            <Box height={100} flex={1} bg="blue.200">
              {" "}
              <Image
                alt="about latinomix"
                objectFit="cover"
                width={700}
                height={700}
                layout="responsive"
                objectPosition={"center"}
                src="/v1677013821/latinomix/49725_pdaose.jpg"
              />{" "}
            </Box>{" "}
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              {" "}
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {" "}
                Jorge Pacheco{" "}
              </Heading>{" "}
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                {" "}
                @latinomixtanssi{" "}
              </Text>{" "}
              <Text textAlign={"center"} color={"gray.700"} px={3}>
                {" "}
                Dancer, musician, PM for work or{" "}
                <Link
                  href="https://www.instagram.com/latinomixtanssi/"
                  isExternal
                  color={"blue.200"}
                  fontWeight={600}
                >
                  {" "}
                  Follow{" "}
                </Link>{" "}
                me in your social networks{" "}
              </Text>{" "}
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                {" "}
                <Badge px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
                  {" "}
                  #Salsa{" "}
                </Badge>{" "}
                <Badge px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
                  {" "}
                  #Bachata{" "}
                </Badge>{" "}
                <Badge px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
                  {" "}
                  #Merengue{" "}
                </Badge>{" "}
                <Badge px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
                  {" "}
                  #Samba and +{" "}
                </Badge>{" "}
              </Stack>{" "}
              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                {" "}
                <Flex padding={2} alignItems={"center"}>
                  <Link
                    href="https://www.facebook.com/groups/1106771543020827"
                    isExternal
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{ bg: "gray.200" }}
                    >
                      {" "}
                      Contact me{" "}
                    </Button>
                  </Link>{" "}
                </Flex>
              </Stack>{" "}
            </Stack>{" "}
          </Stack>{" "}
        </Center>
      </Stack>
    </>
  );
}

export default About;
