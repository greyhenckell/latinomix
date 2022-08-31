import { ReactNode } from "react";

import {
  Stack,
  Flex,
  Box,
  Link,
  Heading,
  useColorModeValue,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

interface LinkProps {
  name: string;
  path: string;
}

const Links: Array<LinkProps> = [
  { name: "News", path: "#news" },
  { name: "Schedule&Prices", path: "/schedule" },
  { name: "About Us", path: "/about" },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={path}
  >
    {children}
  </Link>
);

function Header() {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading
                ml="4"
                size="auto"
                fontWeight="semibold"
                color="cyan.400"
              >
                LatinoMix
              </Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
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
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Header;
