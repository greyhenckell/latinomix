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

import { useTranslation } from "react-i18next";

import { FaHome, FaRegClock } from "react-icons/fa";
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
  const { t } = useTranslation();
  //const { id, day, services } = journals;
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
    <Box
      id="schedule"
      mt={2}
      px={2}
      //w={"full"}
      //h={"full"}
      backgroundImage={
        //"url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        "linear-gradient(rgba(255, 255, 255, 0.691),rgba(255, 255, 255, 0.221))  ,url(imgs/lm_timetable.jpeg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Stack
        id="calendar"
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {journals.map(
          (item) =>
            Boolean(item.services.length) && (
              <PriceWrapper key={item.day}>
                <Box
                  py={4}
                  px={6}
                  //bgGradient={"linear(to-b, blackAlpha.600, transparent)"}
                >
                  <Text
                    p={2}
                    color={"green.600"}
                    rounded={"full"}
                    fontSize={"sm"}
                    fontWeight={500}
                    bg={"green.100"}
                  >
                    {t(`schedule.${item.day}`)}
                  </Text>
                  {item.services.map(
                    (serv) =>
                      serv.keys === "active" &&
                      serv.dance_type === "adults" && (
                        <Stack
                          key={serv.start_time}
                          py={2}
                          align={"flex-start'"}
                          justify={"center"}
                        >
                          <Text
                            color={"black"}
                            py={2}
                            fontSize={"xl"}
                            fontWeight={600}
                            //bgGradient={"linear(to-b, whiteAlpha.300, transparent)"}
                          >
                            {serv.name}
                          </Text>

                          <Text
                            color={"white"}
                            fontWeight={600}
                            fontSize={"1xl"}
                            bgGradient={
                              "linear(to-b, blackAlpha.900, transparent)"
                            }
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
                              <ListItem>
                                <ListIcon as={FaRegClock} color="green.500" />
                                {serv.duration}
                              </ListItem>
                            </List>
                          </VStack>
                        </Stack>
                      )
                  )}
                </Box>
              </PriceWrapper>
            )
        )}
      </Stack>
    </Box>
  );
}

export default AdultsSchedule;
