import {
  Heading,
  Icon,
  VStack,
  useBreakpointValue,
  Text,
  Stack,
  Box,
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
      <VStack spacing={2}>
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
          Choose your plan tailored to your need.
          <Text fontSize={{ base: "sm", sm: "md" }} as="b">
            No ticket expiration!
          </Text>
        </Text>

        {tickets.map((ticket) => (
          <CardPrice key={ticket.id} ticket={ticket}></CardPrice>
        ))}
      </VStack>
    </>
  );
}

export default TicketPage;
