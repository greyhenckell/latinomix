import React from "react";

import { signOut } from "next-auth/react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Input,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
import { Ticket, User } from "typing";
import TicketsList from "./modules/Tickets/TicketsList";

import { useForm } from "react-hook-form";

const Links = ["Tickets", "Services", "News"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

interface Props {
  name: string | null;
  image: string | undefined;
  tickets: Ticket[];
  refreshData: () => void;
}

function EditService({ name, image, tickets, refreshData }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //submit ticket
  const onSubmit = async (data: any) => {
    try {
      const body = {
        name: data.ticketName,
        description: data.ticketDescription,
        price: parseFloat(data.ticketPrice),
        discount: parseFloat(data.ticketDiscount),
        finalprice:
          parseFloat(data.ticketPrice) *
          (1 - parseFloat(data.ticketDiscount) / 100),
      };
      await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      refreshData();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

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
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Box mr={4}>Welcome {name}</Box>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={image} />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>

                <MenuDivider />
                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <VStack
        align="stretch"
        p={6}
        spacing={4}
        divider={<StackDivider borderColor="black" />}
      >
        <Box id="add_ticket" width="md">
          <Text fontSize="md" as="b" p={2}>
            New Tickets
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Input
                placeholder="name"
                type="text"
                {...register("ticketName", { required: true })}
              />
              <Input
                placeholder="description"
                type="text"
                {...register("ticketDescription")}
              />
              <Input
                placeholder="price"
                type="number"
                {...register("ticketPrice", { required: true })}
              />
              <Input
                placeholder="discount"
                type="number"
                {...register("ticketDiscount", { required: true })}
              />
            </Stack>
            <Flex py={2}>
              <Button
                py={1}
                variant={"solid"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
                type="submit"
                role="submit"
                leftIcon={<AddIcon />}
              >
                Add
              </Button>
            </Flex>
          </form>
        </Box>

        <Box p={8} width="md">
          <TicketsList
            tickets={tickets}
            refreshData={refreshData}
          ></TicketsList>
        </Box>
      </VStack>
    </>
  );
}

export default EditService;
