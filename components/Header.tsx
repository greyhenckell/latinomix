import { Flex, Box, Link, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/button";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Header() {
  return (
    <>
      <Flex minWidth="max-content" w="100%" mx="auto">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          LatinoMix
        </Heading>
        <Box ml="20" mr="50">
          <Link ml="10" href="#news">
            News
          </Link>
          <Link ml="10" href="/timetable">
            TimeTable
          </Link>
          <Link ml="10" href="/prices">
            Prices
          </Link>
          <Link ml="10" href="#about">
            About us
          </Link>
        </Box>
        <Spacer></Spacer>
        <Link href="https://www.instagram.com/latinomixtanssi/" isExternal>
          <IconButton
            aria-label="instagram"
            ml={2}
            icon={<FaInstagram />}
          ></IconButton>
        </Link>
        <Link href="https://www.facebook.com/groups/1106771543020827">
          <IconButton
            aria-label="facebook"
            ml={2}
            icon={<FaFacebook />}
          ></IconButton>
        </Link>
        <Link href="https://www.youtube.com/channel/UCdvuh0Dm3VGkN8TqX94JD-w">
          <IconButton
            aria-label="youtube"
            ml={2}
            icon={<FaYoutube />}
          ></IconButton>
        </Link>
      </Flex>
    </>
  );
}

export default Header;
