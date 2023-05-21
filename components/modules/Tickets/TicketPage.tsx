import { InfoIcon } from "@chakra-ui/icons";
import {
  Heading,
  Icon,
  VStack,
  useBreakpointValue,
  Text,
  Stack,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Ticket } from "typing";
import CardPrice from "./CardPrice";

interface Props {
  tickets: Ticket[];
}

function TicketPage({ tickets }: Props) {
  return (
    <>
      <VStack width={"100%"} spacing={2}>
        <Heading
          pt={4}
          color={"gray.800"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        >
          Ready to Dance ?
          <Text
            as={"span"}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
          >
            !
          </Text>
        </Heading>
        <Text
          textAlign="center"
          color={"gray.500"}
          fontSize={{ base: "sm", sm: "md" }}
        >
          Choose the best plan for you:
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row", lg: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={5}
      >
        {tickets.map((ticket) => (
          <CardPrice key={ticket.id} ticket={ticket}></CardPrice>
        ))}
      </Stack>
      <Flex mt={5} py={2} justifyContent="center" color={"gray"}>
        <Text as="span" fontSize={{ base: "sm", sm: "md" }}>
          <InfoIcon />
          {"  "}Payment methods{" :"}
          <Text ml={2} my={1}>
            € Cash
          </Text>
          <Text ml={2} as="b">
            Mobilepay:+358 44 3732360
          </Text>
        </Text>
      </Flex>
    </>
  );
}

export default TicketPage;
