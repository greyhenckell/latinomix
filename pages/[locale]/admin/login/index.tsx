import React from "react";

import type { GetServerSideProps } from "next";

import { useSession, signOut } from "next-auth/react";

import Unauth from "components/Unauth";
import TicketEdit from "components/modules/Tickets/TicketEdit";
import { Journal, Ticket, News } from "typing";

import prisma from "../../../../lib/prisma";
import { useRouter } from "next/router";

import { Stack, Box } from "@chakra-ui/react";

import ServiceDay from "components/modules/Services/ServiceDay";
import NewsAdd from "components/modules/News/NewsAdd";
import NewsView from "components/modules/News/NewsView";

interface TicketProps {
  tickets: Ticket[];
  journals: Journal[];
  news: News[];
}

const Links = [
  { name: "Tickets", path: "#tickets" },
  { name: "Services", path: "#services" },
  { name: "News", path: "#news" },
];

export const getServerSideProps: GetServerSideProps = async () => {
  const [journals, tickets, news] = await Promise.all([
    prisma.danceDay.findMany({
      include: {
        services: true,
      },
    }),
    prisma.ticket.findMany(),
    prisma.news.findMany(),
  ]);

  return {
    props: {
      journals: journals,
      tickets: tickets,
      news: news,
    },
  };
};

function Login({ tickets, journals, news }: TicketProps) {
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
            <ServiceDay refreshData={refreshData}></ServiceDay>
          </Box>
          <Box id="news" mx={4}>
            <NewsAdd refreshData={refreshData}></NewsAdd>
            <NewsView news={news} refreshData={refreshData}></NewsView>
          </Box>
        </Stack>
      );
    }
  }
}

export default Login;
