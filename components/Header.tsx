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

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

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

function Header() {
  const Links = [
    { name: "news", path: "/news" },
    { name: "schedule", path: "/timetable" },
    { name: "about", path: "/about" },
  ];

  const linkColor = "gray.600";
  const linkHoverColor = "gray.800";

  const { t } = useTranslation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box id="boxHeader" bg={"gray.100"} px={4} w="full">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={4} alignItems={"center"}>
            <Box ml="1" fontWeight="semibold" color="cyan.400">
              <Link href="/">LatinoMix</Link>
            </Box>

            <HStack
              as={"nav"}
              spacing={1}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink path="/news">{t("header.news")}</NavLink>
              <NavLink path="/timetable">{t("header.schedule")}</NavLink>
              <NavLink path="/about">{t("header.about")}</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <LanguageSwitcher />
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
                ml={0.2}
                icon={<FaFacebook />}
              ></IconButton>
            </Link>
            <Link href="https://www.youtube.com/channel/UCdvuh0Dm3VGkN8TqX94JD-w">
              <IconButton
                aria-label="youtube"
                ml={0.1}
                icon={<FaYoutube />}
              ></IconButton>
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={2} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={2}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {t(`header.${link.name}`)}
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
