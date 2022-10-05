import React from "react";

import {
  Box,
  Text,
  Stack,
  List,
  ListItem,
  Icon,
  Heading,
  Link,
  Flex,
  Divider,
} from "@chakra-ui/react";

import { FiArrowLeftCircle } from "react-icons/fi";

interface PriceItemProps {
  type: string;
  label: string;
  price: number;
  offer: boolean;
}

const PRICE_ITEMS: Array<PriceItemProps> = [
  {
    type: "Single",
    label: "T1",
    price: 15.0,
    offer: false,
  },
  {
    type: "Casual - 10 times",
    label: "T10",
    price: 120.0,
    offer: true,
  },
];

const PriceItemTier = ({
  type,
  label,
  price,
  offer = false,
}: PriceItemProps) => {
  const colorTextLight = offer ? "white" : "whiteAlpha.500";
  const bgColorLight = offer ? "yellow.700" : "gray.700";
  const discount = offer ? "(SALE)" : "";
  const FontWeight = offer ? 700 : 500;

  return (
    <ListItem maxW={"200px"} color="whiteAlpha.500" p={2}>
      {label} ({type})
      <Text
        color={colorTextLight}
        bgColor={bgColorLight}
        fontSize={"sm"}
        fontWeight={FontWeight}
        rounded={"full"}
      >
        € {price}
        {".00"} {discount}
      </Text>
    </ListItem>
  );
};

import AdultsSchedule from "components/AdultsSchedule";
import KidsSchedule from "components/KidsSchedule";

function timetable() {
  return (
    <>
      <Flex w="100%" m={2}>
        <Stack w="full" p={10} bg={"gray.700"} justify={{ lg: "center" }}>
          <Link href="/" color="orange.200" fontSize={20} alignItems="center">
            <Icon as={FiArrowLeftCircle} w={6} h={6} mr={2} />
            HomePage
          </Link>
          <Box>
            <Text
              fontFamily={"heading"}
              fontWeight={500}
              textTransform={"uppercase"}
              mb={3}
              fontSize={"xl"}
              color={"gray.500"}
            >
              Schedule 2022/2023
            </Text>
            <Heading color={"white"} fontSize={{ base: "2xl", md: "3xl" }}>
              LatinoMix - Classes
            </Heading>
          </Box>
        </Stack>

        <Box
          alignItems="center"
          justifyContent="center"
          w="full"
          bg="gray.700"
          p={3}
        >
          <Heading mt={8} as="h4" size="md" color="green.500">
            Prices
          </Heading>
          <List>
            {PRICE_ITEMS.map((pitem) => (
              <PriceItemTier
                key={pitem.type}
                type={pitem.type}
                label={pitem.label}
                price={pitem.price}
                offer={pitem.offer}
              ></PriceItemTier>
            ))}
          </List>
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          w="full"
          bg="gray.700"
          p={3}
        >
          <Heading mt={8} as="h1" size="sm" color="green.500">
            Payment Methods:
          </Heading>
          <List>
            <ListItem color={"gray.400"}>Cash: on-site</ListItem>
            <ListItem color={"orange.500"}>MobilePay: +358 44 3732360</ListItem>
            <ListItem color={"orange.500"}>ref: LM \"your_name\" </ListItem>
          </List>
        </Box>
      </Flex>
      {/* add Adults component*/}
      <AdultsSchedule></AdultsSchedule>
      {/* add kids component*/}
      <Divider orientation="horizontal" />
      <KidsSchedule></KidsSchedule>
    </>
  );
}

export default timetable;
