import React from "react";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
  Flex,
  Button,
  ListItem,
  HStack,
  VStack,
  ListIcon,
  List,
  IconProps,
  Badge,
  Icon,
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

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "15vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="670px"
      viewBox="0 0 728 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

const PackageTier = ({ ticket }: Props) => {
  const bgColorLight = ticket.offer
    ? "linear(red.100 0%, orange.100 25%, yellow.100 50%)"
    : "gray.300";

  //original price
  const originalPrice = ticket.offer ? `${ticket.price}` : "";

  //valid term
  const expiredText = ticket.offer ? "3 months valid" : "1 day valid";

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor="gray.500"
      borderRadius={"md"}
      position="relative"
    >
      <Blur
        position={"absolute"}
        top={10}
        left={-70}
        style={{ filter: "blur(70px)" }}
      />
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
            {expiredText}
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            <span>{expiredText}</span>
          </ListItem>
        </List>
        <Box w="80%" pt={7}>
          <Button w="full" colorScheme="blue" variant="outline">
            Lets Dance!
          </Button>
        </Box>
      </VStack>
    </Box>
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
