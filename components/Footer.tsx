import React from "react";

import { Box, Text, Flex, Container } from "@chakra-ui/react";

function Footer() {
  return (
    <Box py={10} w="full">
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: "gray.200",
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: "gray.200",
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
  );
}

export default Footer;
