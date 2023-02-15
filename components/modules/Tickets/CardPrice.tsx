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
  Circle,
  Badge,
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
  const bgColorLight = ticket.offer
    ? "linear(red.100 0%, orange.100 25%, yellow.100 50%)"
    : "gray.300";
  const boderWidthLight = ticket.offer ? "2px" : "0.5px";
  const borderColor = ticket.offer ? "gray.500" : "gray.200";

  //original price
  const originalPrice = ticket.offer ? `${ticket.price}` : "";

  const colorTextDark = ticket.offer ? "white" : "purple.500";
  const bgColorDark = ticket.offer ? "purple.400" : "gray.300";

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      textAlign="center"
      justify="center"
      spacing={{ base: 4, lg: 10 }}
      py={10}
    >
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: "center", lg: "flex-start" }}
        borderColor="gray.500"
        borderRadius={"md"}
        position="relative"
      >
        {ticket.offer && (
          <Box
            position="absolute"
            top="-16px"
            left="50%"
            style={{ transform: "translate(-50%)" }}
          >
            <Text
              textTransform="uppercase"
              bg="red.400"
              px={3}
              py={1}
              color="black"
              fontSize="sm"
              fontWeight="600"
              rounded="xl"
            >
              SALE!!!
            </Text>
          </Box>
        )}
        <Box py={4} px={12} bgColor="gray.100" bgGradient={bgColorLight}>
          <Text fontWeight="500" fontSize="2xl">
            {ticket.name}
          </Text>
          <HStack justifyContent="center">
            <Text
              fontSize="xl"
              textDecoration={"line-through"}
              color={"gray.600"}
              fontWeight="100"
            >
              {originalPrice}{" "}
            </Text>
            <Text fontSize="2xl" fontWeight="500">
              {" "}
              €{" "}
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              {" "}
              {ticket.finalprice}
            </Text>
          </HStack>
        </Box>
        <VStack bg="gray.90" py={4} borderBottomRadius={"xl"}>
          <List spacing={3} textAlign="start" px={12}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {ticket.description}
            </ListItem>
          </List>
          <Box w="80%" pt={7}>
            <Button w="full" colorScheme="blue" variant="outline">
              Lets Dance!
            </Button>
          </Box>
        </VStack>
      </Box>
    </Stack>
  );
};

import { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

function CardPrice({ ticket }: Props) {
  return (
    <>
      <PackageTier ticket={ticket}></PackageTier>
    </>
  );
}

export default CardPrice;
