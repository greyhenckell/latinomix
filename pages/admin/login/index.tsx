import React from "react";

import type { GetServerSideProps } from "next";

import { useSession, getSession, signOut } from "next-auth/react";

import Unauth from "components/Unauth";
import TicketEdit from "components/modules/Tickets/TicketEdit";
import { Ticket, User } from "typing";

import prisma from "../../../lib/prisma";
import { useRouter } from "next/router";

import { useColorModeValue, Link, Stack, Box } from "@chakra-ui/react";

import { ReactNode } from "react";
import Header from "components/Header";

interface TicketProps {
  tickets: Ticket[];
}

const Links = [
  { name: "Tickets", path: "#tickets" },
  { name: "Services", path: "#services" },
  { name: "News", path: "#news" },
];

export const getServerSideProps: GetServerSideProps = async () => {
  const tickets = await prisma.ticket.findMany();
  return {
    props: {
      tickets,
    },
  };
};

function Login({ tickets }: TicketProps) {
  const { data: session, status } = useSession();

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <p>Login to edit LatinoMix</p>
        <Unauth></Unauth>
      </div>
    );
  }

  if (session) {
    const name = session.user?.name || null;
    const imgProfile = session.user?.image || undefined;
    return (
      <Stack>
        <Header Links={Links}></Header>
        <Box id="tickets">
          <TicketEdit tickets={tickets} refreshData={refreshData} />
        </Box>
      </Stack>
    );
  }
}

export default Login;
