import React from "react";

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Icon,
  Heading,
  Link,
  Spacer,
  Flex,
} from "@chakra-ui/react";

import { FaHome } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FiArrowLeftCircle } from "react-icons/fi";

interface Services {
  service: string;

  time: string;
}

interface NavItem {
  day: string;
  place: string;
  address: string;
  city: string;
  services: Array<Services>;
}

interface PriceItem {
  type: string;
  label: string;
  price: number;
}

const PRICE_ITEMS: Array<PriceItem> = [
  {
    type: "Single",
    label: "T1",
    price: 15.0,
  },
  {
    type: "Casual - 10 times",
    label: "T10",
    price: 120.0,
  },
  {
    type: "Usual - 30 times",
    label: "T30",
    price: 300.0,
  },
];

const NAV_ITEMS: Array<NavItem> = [
  {
    day: "Tuesday",
    city: "Kirkkonummi",
    place: "Palvelukeskus SportHall",
    address: "Kaenkuja 3, Kirkkonummi",
    services: [
      {
        service: "LatinoMix-Fitness",

        time: "18:00-19:00",
      },
    ],
  },

  {
    day: "Thursday",
    city: "Espoo",
    place: "Matinkylän Pirtti",
    address: "Keskipäivänkuja 4, Espoo",
    services: [
      {
        service: "LatinoMix-Fitness",

        time: "18:00-19:00",
      },
    ],
  },

  {
    day: "Sunday",
    city: "Espoo",
    place: "Matinkylän Pirtti",
    address: "Keskipäivänkuja 4, Espoo",
    services: [
      {
        service: "LatinoMix-Flow",

        time: "16:00-17:00",
      },
      {
        service: "LatinoMix-Fitness",

        time: "17:00-18:00",
      },
    ],
  },
];

function timetable() {
  return (
    <>
      <Flex w="100%">
        <Stack w="full" p={10} bg={"gray.700"} justify={{ lg: "center" }}>
          <Link href="/" color="orange.200" fontSize={20} alignItems="center">
            <Icon as={FiArrowLeftCircle} w={6} h={6} mr={2} />
            HomePage
          </Link>
          <Box>
            <Text
              fontFamily={"heading"}
              fontWeight={500}
              textTransform={"uppercase"}
              mb={3}
              fontSize={"xl"}
              color={"gray.500"}
            >
              Schedule 2022/2023
            </Text>
            <Heading color={"white"} fontSize={{ base: "2xl", md: "3xl" }}>
              LatinoMix - Adults
            </Heading>
          </Box>
        </Stack>
        <Spacer></Spacer>
        <Box w="sm" bg="gray.700" p={3}>
          <Heading as="h4" size="md" color="green.500">
            Prices
          </Heading>
          <List>
            {PRICE_ITEMS.map((pitem) => (
              <ListItem color="whiteAlpha.500" key={pitem.type} p={2}>
                {pitem.label} ({pitem.type})
                <Text color="white" fontWeight="600">
                  € {pitem.price}
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
      <Center py={6}>
        {NAV_ITEMS.map((navItem) => (
          <Box
            key={navItem.day}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
            ml="3"
          >
            <Stack
              textAlign={"center"}
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align={"center"}
            >
              <Text
                fontSize={"sm"}
                fontWeight={500}
                bg={useColorModeValue("green.50", "green.900")}
                p={2}
                px={3}
                color={"green.500"}
                rounded={"full"}
              >
                {navItem.day}
              </Text>
              {navItem.services.map((serv) => (
                <Stack
                  key={serv.service}
                  align={"flex-start'"}
                  justify={"center"}
                >
                  <Text p={2} w="full" fontSize={"0.5xl"} fontWeight={200}>
                    {serv.service}
                  </Text>

                  <Text color={"gray.500"}>{serv.time}</Text>
                </Stack>
              ))}
            </Stack>

            <Box
              alignItems="center"
              bg={useColorModeValue("gray.50", "gray.900")}
              px={6}
              py={10}
            >
              <List spacing={3}>
                <ListItem p={4}>
                  <Icon mr={4} as={FaHome} color="green.400" />
                  {navItem.place}
                </ListItem>
                <ListItem p={4}>
                  <Icon mr={4} as={MdPlace} color="green.400" />
                  {navItem.address}
                </ListItem>
              </List>

              <Button
                mt={10}
                w={"full"}
                bg={"green.400"}
                color={"white"}
                rounded={"xl"}
                boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
              >
                Ready2Dance!
              </Button>
            </Box>
          </Box>
        ))}
      </Center>
    </>
  );
}

export default timetable;
