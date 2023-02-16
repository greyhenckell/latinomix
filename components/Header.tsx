import { ReactNode } from "react";

import {
  Stack,
  Flex,
  Box,
  Link,
  Heading,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

interface Ilink {
  name: string;
  path: string;
}

interface LinkProps {
  Links: Ilink[];
}

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Link
    px={4}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.400",
    }}
    href={path}
  >
    {children}
  </Link>
);

function Header({ Links }: LinkProps) {
  const linkColor = "gray.600";
  const linkHoverColor = "gray.800";

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"gray.100"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={4} alignItems={"center"}>
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
              spacing={2}
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
