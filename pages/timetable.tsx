import React from "react";

import {
  Box,
  Text,
  List,
  chakra,
  ListItem,
  Icon,
  Heading,
  Link,
  VStack,
  Grid,
  Container,
  Flex,
  GridItem,
  Image,
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
    type: "Casual - x10",
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
  const colorTextLight = offer ? "white" : "black";
  const bgColorLight = offer ? "orange.600" : "gray.200";
  const discount = offer ? "(SALE)" : "";
  const FontWeight = offer ? 700 : 400;

  return (
    <ListItem maxW={"200px"} p={2}>
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
      <Box p={4}>
        <Link href="/" color="orange.400" fontSize={15} alignItems="center">
          <Icon as={FiArrowLeftCircle} w={6} h={6} mr={2} />
          HomePage
        </Link>
      </Box>
      <Box
        as={Container}
        maxW="7xl"
        p={4}
        bgGradient={"linear(to-b, blackAlpha.400, transparent 50%)"}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                LatinoMix - schedule 2022/2023
              </chakra.h2>
              <Heading mt={1} as="h1" size="sm" color="green.500">
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
              <Heading mt={2} as="h1" size="sm" color="green.500">
                Payment Methods:
              </Heading>
              <List>
                <ListItem color={"gray.400"}>Cash: on-site</ListItem>
                <ListItem color={"orange.500"}>
                  MobilePay: +358 44 3732360
                </ListItem>
                <ListItem color={"orange.500"}>ref: LM name </ListItem>
              </List>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex align="center" p={2}>
              <Box objectFit="cover" alignContent="center">
                <Image
                  src="imgs/lm_timetable.jpeg"
                  boxSize="300px"
                  //borderRadius="50%"
                ></Image>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "8", sm: "12", md: "16" }}
        ></Grid>
      </Box>

      <Box p={4}>
        <AdultsSchedule></AdultsSchedule>
        {/* add kids component*/}
        <Divider orientation="horizontal" />
        <KidsSchedule></KidsSchedule>
      </Box>
    </>
  );
}

export default timetable;
