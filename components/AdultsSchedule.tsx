import React from "react";

import {
  Flex,
  Box,
  List,
  Text,
  Stack,
  VStack,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { FaHome } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

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

function AdultsSchedule() {
  return (
    <Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {NAV_ITEMS.map((item) => (
          <PriceWrapper key={item.day}>
            <Box
              py={4}
              px={12}
              //bgGradient={"linear(to-b, blackAlpha.600, transparent)"}
            >
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
                  <Text
                    p={2}
                    fontSize={"1xl"}
                    fontWeight={600}
                    bgGradient={"linear(to-b, whiteAlpha.900, transparent)"}
                  >
                    {serv.service}
                  </Text>

                  <Text
                    color={"gray.100"}
                    fontWeight={400}
                    bgGradient={"linear(to-b, gray.600, transparent)"}
                  >
                    {serv.time}
                  </Text>
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
    </Box>
  );
}

export default AdultsSchedule;
