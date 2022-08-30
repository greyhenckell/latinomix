import React from "react";

import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Container id="footer" p={10}>
        <Box py={10} w="full">
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Text fontWeight="semibold" color="cyan.400">
              LATINOMIX
            </Text>
          </Flex>
          <Text pt={6} fontSize={"sm"} textAlign={"center"}>
            © 2022 LatinoMix. All rights reserved
          </Text>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
