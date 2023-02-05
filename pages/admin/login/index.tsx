import React from "react";

import type { GetServerSideProps } from "next";

import { useSession, getSession } from "next-auth/react";

import Unauth from "components/Unauth";
import EditService from "components/EditService";
import { Ticket, User } from "typing";

import prisma from "../../../lib/prisma";
import { useRouter } from "next/router";

interface TicketProps {
  tickets: Ticket[];
}

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
        <p>Welcome to edit LatinoMix</p>
        <Unauth></Unauth>
      </div>
    );
  }

  if (session) {
    const name = session.user?.name || null;
    const image = session.user?.image || undefined;
    return (
      <EditService
        name={name}
        image={image}
        tickets={tickets}
        refreshData={refreshData}
      />
    );
  }
}

export default Login;
