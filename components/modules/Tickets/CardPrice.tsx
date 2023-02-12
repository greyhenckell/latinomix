import React from "react";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
  ListItem,
  HStack,
  VStack,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { Ticket } from "typing";

const IMAGE =
  "https://res.cloudinary.com/dgkcfmvwf/image/upload/v1675716342/latinomix/tent_tickets_g5keaw.png";

interface Props {
  ticket: Ticket;
}

interface offerProps {
  offer: boolean;
}

const PackageTier = ({ ticket }: Props) => {
  const colorTextLight = ticket.offer ? "white" : "purple.600";
  const bgColorLight = ticket.offer ? "purple.200" : "gray.300";
  const boderWidthLight = ticket.offer ? "5px" : "1px";

  const colorTextDark = ticket.offer ? "white" : "purple.500";
  const bgColorDark = ticket.offer ? "purple.400" : "gray.300";

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth={boderWidthLight}
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.600", "gray.500")}
      borderRadius={"xl"}
    >
      <Box py={4} px={12} bgColor={bgColorLight}>
        <Text fontWeight="500" fontSize="2xl">
          {ticket.name}
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="3xl" fontWeight="600">
            €
          </Text>
          <Text fontSize="5xl" fontWeight="900">
            {ticket.finalprice}
          </Text>
        </HStack>
      </Box>
      <VStack
        bg={useColorModeValue("gray.50", "gray.700")}
        py={4}
        borderBottomRadius={"xl"}
      >
        <List spacing={3} textAlign="start" px={12}>
          <ListItem textTransform="lowercase">
            <ListIcon as={FaCheckCircle} color="green.500" />
            {ticket.description}
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            no ticket expiration
          </ListItem>
        </List>
      </VStack>
    </Box>
  );
};

import { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";
function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

function CardPrice({ ticket }: Props) {
  return (
    <>
      <PackageTier ticket={ticket}></PackageTier>
    </>
  );
}

export default CardPrice;
