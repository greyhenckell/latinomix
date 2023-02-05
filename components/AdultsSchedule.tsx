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
import { Journal } from "typing";
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

interface Props {
  journals: Journal[];
}

function AdultsSchedule({ journals }: Props) {
  return (
    <Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {journals.map((item) => (
          <PriceWrapper key={item.id}>
            <Box
              py={4}
              px={6}
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
              {item.detailservice.map((serv) => (
                <Stack
                  key={serv.name}
                  py={2}
                  align={"flex-start'"}
                  justify={"center"}
                >
                  <Text
                    py={2}
                    fontSize={"2xl"}
                    fontWeight={600}
                    bgGradient={"linear(to-b, whiteAlpha.900, transparent)"}
                  >
                    {serv.name}
                  </Text>

                  <Text
                    color={"green.200"}
                    fontWeight={600}
                    fontSize={"1xl"}
                    bgGradient={"linear(to-b, blackAlpha.900, transparent)"}
                  >
                    {serv.start} -- {serv.end}
                  </Text>
                  <VStack bg={"gray.50"} py={2} borderBottomRadius={"xl"}>
                    <List textAlign="start" px={2} fontSize={"sm"}>
                      <ListItem>
                        <ListIcon as={FaHome} color="green.500" />
                        {serv.place}
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdPlace} color="green.500" />
                        {serv.address}
                      </ListItem>
                    </List>
                    {/*<Box w="80%" pt={7}>
                <Button w="full" colorScheme="red" variant="outline">
                  Join!
                </Button>
              </Box>*/}
                  </VStack>
                </Stack>
              ))}
            </Box>
          </PriceWrapper>
        ))}
      </Stack>
    </Box>
  );
}

export default AdultsSchedule;
