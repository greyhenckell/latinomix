import React from "react";

import type { GetServerSideProps } from "next";

import { useSession, getSession, signOut } from "next-auth/react";

import Unauth from "components/Unauth";
import TicketEdit from "components/modules/Tickets/TicketEdit";
import { Journal, Ticket, User } from "typing";

import prisma from "../../../lib/prisma";
import { useRouter } from "next/router";

import { Text, Stack, Box } from "@chakra-ui/react";

import { ReactNode } from "react";
import Header from "components/Header";
import ServiceEdit from "components/modules/Services/ServiceEdit";

interface TicketProps {
  tickets: Ticket[];
  journals: Journal[];
}

const Links = [
  { name: "Tickets", path: "#tickets" },
  { name: "Services", path: "#services" },
  { name: "News", path: "#news" },
];

export const getServerSideProps: GetServerSideProps = async () => {
  const [journals, tickets] = await Promise.all([
    prisma.danceDay.findMany(),
    prisma.ticket.findMany(),
  ]);

  return {
    props: {
      journals: journals,
      tickets: tickets,
    },
  };
};

function Login({ tickets, journals }: TicketProps) {
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
    if (name === "franckzinho") {
      //console.log("valid user");
      const imgProfile = session.user?.image || undefined;
      return (
        <Stack>
          <Header Links={Links}></Header>
          <Box>
            <button
              onClick={() => signOut()}
              type="button"
              className="btn btn-primary"
            >
              Sign Out
            </button>
          </Box>
          <Box id="tickets">
            <TicketEdit tickets={tickets} refreshData={refreshData} />
          </Box>
          <Box id="services">
            <ServiceEdit
              journals={journals}
              refreshData={refreshData}
            ></ServiceEdit>
          </Box>
        </Stack>
      );
    }
  }
}

export default Login;
