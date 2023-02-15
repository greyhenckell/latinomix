import React from "react";

import {
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

import { ReactNode } from "react";
import { Journal } from "typing";
function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      width="100%"
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
  //console.log(journals);
  const sorter = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  journals.sort((a, b) => sorter.indexOf(a.day) - sorter.indexOf(b.day));

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
          <PriceWrapper key={item.day}>
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
              {item.services.map((serv) => (
                <Stack
                  key={serv.start_time}
                  py={2}
                  align={"flex-start'"}
                  justify={"center"}
                >
                  <Text
                    color={"white"}
                    py={2}
                    fontSize={"2xl"}
                    fontWeight={400}
                    //bgGradient={"linear(to-b, whiteAlpha.300, transparent)"}
                  >
                    {serv.name}
                  </Text>

                  <Text
                    color={"white"}
                    fontWeight={600}
                    fontSize={"1xl"}
                    //bgGradient={"linear(to-b, blackAlpha.900, transparent)"}
                  >
                    {serv.start_time} -- {serv.end_time}
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
