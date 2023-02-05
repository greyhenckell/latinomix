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
import { Journal, Ticket } from "typing";
import TicketPage from "components/modules/Tickets/TicketPage";

import { useRouter } from "next/router";

interface Props {
  journals: Journal[];
  tickets: Ticket[];
}

export const getServerSideProps = async () => {
  const [journals, tickets] = await Promise.all([
    fetch("http://localhost:3000/api/services").then((res) => res.json()),
    fetch("http://localhost:3000/api/tickets").then((res) => res.json()),
  ]);

  return {
    props: {
      journals: journals,
      tickets: tickets,
    },
  };
};

function timetable({ journals, tickets }: Props) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <>
      <Box p={4}>
        <Link href="/" color="gray.800" fontSize={15} alignItems="center">
          <Icon as={FiArrowLeftCircle} w={6} h={6} mr={2} />
          HomePage
        </Link>
      </Box>

      <TicketPage tickets={tickets} refreshData={refreshData}></TicketPage>

      <Divider orientation="horizontal" p={2} />

      <Box p={4}>
        <AdultsSchedule journals={journals}></AdultsSchedule>
        {/* add kids component*/}
        <Divider orientation="horizontal" />
        <KidsSchedule></KidsSchedule>
      </Box>
    </>
  );
}

export default timetable;
