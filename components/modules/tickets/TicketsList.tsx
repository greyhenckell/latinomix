import React, { useEffect, useState } from "react";
import { Ticket } from "typing";

import TicketView from "./TicketView";

interface TicketsProps {
  tickets: Ticket[];
  refreshData: () => void;
}

import { useForm } from "react-hook-form";
import { SmallAddIcon } from "@chakra-ui/icons";
import { Button, Input } from "@chakra-ui/react";

function TicketsList({ tickets, refreshData }: TicketsProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5">
          <Input type="text" {...register("taskName", { required: true })} />
          <Input type="hidden" {...register("projectId")} />
          <div>
            <Button
              type="submit"
              role="submit"
              className="text-white hover:text-persianBlue bg-persianBlue hover:bg-goldenTainoi rounded-full w-[57px] h-[57px] flex justify-center items-center"
            >
              <SmallAddIcon name="Plus" />
            </Button>
          </div>
        </form>
      </div>
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
