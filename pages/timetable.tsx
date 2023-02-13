import React from "react";

import {
  Box,
  Icon,
  IconProps,
  VStack,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FiArrowLeftCircle } from "react-icons/fi";

import AdultsSchedule from "components/AdultsSchedule";
import Header from "components/Header";
import KidsSchedule from "components/KidsSchedule";
import { Journal, Ticket } from "typing";
import TicketPage from "components/modules/Tickets/TicketPage";

import prisma from "lib/prisma";

import { useRouter } from "next/router";

interface Props {
  journals: Journal[];
  tickets: Ticket[];
}

export const getServerSideProps = async () => {
  const [journals, tickets] = await Promise.all([
    prisma.workDay.findMany(),
    prisma.ticket.findMany(),
  ]);

  return {
    props: {
      journals: journals,
      tickets: tickets,
    },
  };
};

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="1270px"
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

function Timetable({ journals, tickets }: Props) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <div>
      <Header Links={[{ name: "homepage", path: "/" }]}></Header>
      <VStack py={6}>
        <TicketPage tickets={tickets}></TicketPage>

        <Blur
          position={"absolute"}
          top={10}
          left={-70}
          style={{ filter: "blur(70px)" }}
        />

        <Divider orientation="horizontal" p={2} />

        <Box p={4}>
          <AdultsSchedule journals={journals}></AdultsSchedule>
          {/* add kids component*/}
          <Divider orientation="horizontal" />
          <KidsSchedule></KidsSchedule>
        </Box>
      </VStack>
    </div>
  );
}

export default Timetable;
