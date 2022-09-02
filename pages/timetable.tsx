import React from "react";

import {
  Box,
  Text,
  Stack,
  List,
  ListItem,
  Button,
  useColorModeValue,
  Icon,
  Heading,
  Link,
  Spacer,
  Flex,
  VStack,
  ListIcon,
  Divider,
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

interface PriceItemProps {
  type: string;
  label: string;
  price: number;
  offer: boolean;
}

const PRICE_ITEMS: Array<PriceItemProps> = [
  {
    type: "Single",
    label: "T1",
    price: 15.0,
    offer: false,
  },
  {
    type: "Casual - 10 times",
    label: "T10",
    price: 120.0,
    offer: true,
  },
];

const PriceItemTier = ({
  type,
  label,
  price,
  offer = false,
}: PriceItemProps) => {
  const colorTextLight = offer ? "white" : "whiteAlpha.500";
  const bgColorLight = offer ? "yellow.700" : "gray.700";
  const discount = offer ? "(SALE)" : "";
  const FontWeight = offer ? 700 : 500;

  const colorTextDark = offer ? "white" : "yellow.500";
  const bgColorDark = offer ? "yellow.400" : "gray.300";
  return (
    <ListItem maxW={"200px"} color="whiteAlpha.500" p={2}>
      {label} ({type})
      <Text
        color={colorTextLight}
        bgColor={bgColorLight}
        fontSize={"sm"}
        fontWeight={FontWeight}
        rounded={"full"}
      >
        € {price}
        {".00"} {discount}
      </Text>
    </ListItem>
  );
};
const NAV_ITEMS: Array<NavItem> = [
  {
    day: "Tuesday",
    city: "Kirkkonummi",
    place: "Kirkkonummen Palvelukeskus",
    address: "Rajakuja 3, Kirkkonummi",
    services: [
      {
        service: "LatinoMix-Dance",

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
        service: "LatinoMix-Dance",

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
        service: "LatinoMix-EasyDance",

        time: "16:00-17:00",
      },
      {
        service: "LatinoMix-Dance",

        time: "17:00-18:00",
      },
    ],
  },
];

import { ReactNode } from "react";
import KidsSchedule from "components/KidsSchedule";
function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={"gray.200"}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

function timetable() {
  return (
    <>
      <Flex w="100%" m={2}>
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
              LatinoMix - Classes
            </Heading>
          </Box>
        </Stack>

        <Box
          alignItems="center"
          justifyContent="center"
          w="full"
          bg="gray.700"
          p={3}
        >
          <Heading mt={8} as="h4" size="md" color="green.500">
            Prices
          </Heading>
          <List>
            {PRICE_ITEMS.map((pitem) => (
              <PriceItemTier
                key={pitem.type}
                type={pitem.type}
                label={pitem.label}
                price={pitem.price}
                offer={pitem.offer}
              ></PriceItemTier>
            ))}
          </List>
        </Box>
      </Flex>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {NAV_ITEMS.map((item) => (
          <PriceWrapper key={item.day}>
            <Box py={4} px={12}>
              <Text
                p={2}
                color={"green.500"}
                rounded={"full"}
                fontSize={"sm"}
                fontWeight={500}
                bg={"green.50"}
              >
                {item.day}
              </Text>
              {item.services.map((serv) => (
                <Stack
                  key={serv.service}
                  align={"flex-start'"}
                  justify={"center"}
                >
                  <Text p={2} fontSize={"1xl"} fontWeight={600}>
                    {serv.service}
                  </Text>

                  <Text color={"gray.500"}>{serv.time}</Text>
                </Stack>
              ))}
            </Box>
            <VStack bg={"gray.50"} py={4} borderBottomRadius={"xl"}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaHome} color="green.500" />
                  {item.place}
                </ListItem>
                <ListItem>
                  <ListIcon as={MdPlace} color="green.500" />
                  {item.address}
                </ListItem>
              </List>
              {/*<Box w="80%" pt={7}>
                <Button w="full" colorScheme="red" variant="outline">
                  Join!
                </Button>
              </Box>*/}
            </VStack>
          </PriceWrapper>
        ))}
      </Stack>
      {/* add kids component*/}
      <Divider orientation="horizontal" />
      <KidsSchedule></KidsSchedule>
    </>
  );
}

export default timetable;
