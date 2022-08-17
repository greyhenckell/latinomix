import { Flex, Box, Image, Heading, Link, Spacer } from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/button";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Header() {
  return (
    <>
      <Flex w="100%" mx="auto" mt="10">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          LatinoMix
        </Heading>
        <Box ml="50" mr="50">
          <Link ml="10">News</Link>
          <Link ml="10">TimeTable</Link>
          <Link ml="10">Prices</Link>
          <Link ml="10">About</Link>
        </Box>
        <Spacer></Spacer>

        <IconButton
          aria-label="instagram"
          ml={2}
          icon={<FaInstagram />}
          onClick={() =>
            (window.location.href =
              "https://www.instagram.com/latinomixtanssi/")
          }
        ></IconButton>

        <IconButton
          aria-label="facebook"
          ml={2}
          icon={<FaFacebook />}
          onClick={() =>
            (window.location.href =
              "https://www.facebook.com/groups/1106771543020827")
          }
        ></IconButton>

        <IconButton
          aria-label="youtube"
          ml={2}
          icon={<FaYoutube />}
          onClick={() =>
            (window.location.href =
              "https://www.youtube.com/channel/UCdvuh0Dm3VGkN8TqX94JD-w")
          }
        ></IconButton>
      </Flex>
    </>
  );
}

export default Header;
