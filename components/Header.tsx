import {
  Stack,
  Flex,
  Box,
  Link,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/button";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function Header() {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  return (
    <>
      <Flex align="center" fontSize={{ base: 20, md: 24, sm: 12 }}>
        <Heading ml="4" size="auto" fontWeight="semibold" color="cyan.400">
          LatinoMix
        </Heading>
        <Stack spacing={4} direction={"row"}>
          <Link
            color={linkColor}
            ml={6}
            p={2}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
            href="#news"
          >
            News
          </Link>
          <Link
            color={linkColor}
            p={2}
            href="/timetable"
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            Schedule{"&"}Prices
          </Link>

          <Link
            color={linkColor}
            p={2}
            href="/#about"
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            About Us
          </Link>
        </Stack>
        <Spacer></Spacer>
        <Link href="https://www.instagram.com/latinomixtanssi/" isExternal>
          <IconButton
            aria-label="instagram"
            icon={<FaInstagram />}
          ></IconButton>
        </Link>
        <Link
          href="https://www.facebook.com/groups/1106771543020827"
          isExternal
        >
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
