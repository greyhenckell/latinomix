import React from "react";

import {
  Box,
  Text,
  Stack,
  List,
  ListItem,
  VStack,
  ListIcon,
} from "@chakra-ui/react";

import { FaHome } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

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
    day: "Wednesday",
    city: "Espoo",
    place: "Perkkaan Koulu",
    address: "Majurinkatu 8 , Espoo",
    services: [
      {
        service: "LatinoMix-Kids",

        time: "14:15-15:00",
      },
    ],
  },
];

function KidsSchedule() {
  return (
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
  );
}

export default KidsSchedule;
