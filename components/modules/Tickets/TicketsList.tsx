import React, { useEffect, useState } from "react";
import { Ticket } from "typing";

import TicketView from "./TicketView";

interface TicketsProps {
  tickets: Ticket[];
  refreshData: () => void;
}

import { useForm } from "react-hook-form";

function TicketsList({ tickets, refreshData }: TicketsProps) {
  const {
    formState: { errors },
    setFocus,
  } = useForm();

  return (
    <>
      <div>
        {tickets.map((ticket) => (
          <TicketView
            key={ticket.id}
            ticket={ticket}
            refreshData={refreshData}
          ></TicketView>
        ))}
      </div>
    </>
  );
}

export default TicketsList;
