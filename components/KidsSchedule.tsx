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

import { FaHome, FaRegClock } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

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

function KidsSchedule({ journals }: Props) {
  //console.log(journals);
  const kids_jornal = journals.flatMap((item) =>
    item.services
      .filter((serv) => serv.dance_type === "kids")
      .map((serv) => ({ ...serv, day: item.day }))
  );

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      textAlign="center"
      justify="center"
      spacing={{ base: 4, lg: 10 }}
      py={10}
    >
      {kids_jornal.map((item) => (
        <PriceWrapper key={item.id}>
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

            <Stack key={item.name} align={"flex-start'"} justify={"center"}>
              <Text color="black" p={2} fontSize={"xl"} fontWeight={300}>
                {item.name}
              </Text>

              <Text color={"black"}>
                {item.start_time} - {item.end_time}
              </Text>
              <VStack
                bgGradient={"linear(to-t, gray.100, transparent)"}
                py={2}
                borderBottomRadius={"2xl"}
                borderBottomColor={"black"}
              >
                <List
                  textAlign="start"
                  px={1}
                  fontSize={"16px"}
                  fontWeight="bold"
                >
                  <ListItem>
                    <ListIcon as={FaHome} color="green.500" />
                    {item.place}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdPlace} color="green.500" />
                    {item.address}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaRegClock} color="green.500" />
                    {item.duration}
                  </ListItem>
                </List>
              </VStack>
            </Stack>
          </Box>
          <VStack
            bgGradient={"linear(to-b, gray.100, transparent)"}
            py={4}
            borderBottomRadius={"xl"}
          ></VStack>
        </PriceWrapper>
      ))}
    </Stack>
  );
}

export default KidsSchedule;
