import React from "react";
import { Ticket } from "typing";

interface Props {
  ticket: Ticket;
  refreshData: () => void;
}

import { Box, Button, Input, Text } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useEffect } from "react";

import { useForm } from "react-hook-form";

function TicketView({ ticket, refreshData }: Props) {
  const [ticketState, setTicketState] = useState<"view" | "edit">("view");

  const editTicket = async (data: any) => {
    try {
      const body = {
        name: data.ticketName,
        description: data.ticketDescription,
        price: parseFloat(data.ticketPrice),
      };
      await fetch(`/api/tickets/${ticket.id}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      refreshData();
      setTicketState("view");
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm();

  useEffect(() => {
    setFocus("ticketName");
    setFocus("ticketDescription");
    setFocus("ticketPrice");
  }, [setFocus, ticketState]);

  const cancelEdit = () => {
    setTicketState("view");
    reset();
  };

  async function deleteTicket(id: string) {
    try {
      fetch(`http://localhost:3000/api/tickets/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }).then(() => {
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {ticketState === "view" && (
        <div>
          <Text> {ticket.name}</Text>
          <Text>{ticket.description}</Text>
          <Text>{ticket.price}</Text>
          <button
            className="icon-button"
            onClick={() => setTicketState("edit")}
          >
            {" "}
            <EditIcon name="Edit" />{" "}
          </button>

          <button onClick={() => deleteTicket(ticket.id)}>
            <DeleteIcon />
          </button>
        </div>
      )}
      {ticketState === "edit" && (
        <div>
          <form onSubmit={handleSubmit(editTicket)}>
            <Box py={4}>
              <div>
                <Input
                  type="text"
                  defaultValue={ticket.name}
                  {...register("ticketName", { required: true })}
                ></Input>
                <Input
                  type="text"
                  defaultValue={ticket.description}
                  {...register("ticketDescription")}
                ></Input>
                <Input
                  type="text"
                  defaultValue={ticket.price}
                  {...register("ticketPrice")}
                ></Input>
              </div>
              <Button type="submit" role="submit">
                <CheckIcon name="Check" />
              </Button>
              <Button px={4} className="icon-button" onClick={cancelEdit}>
                <CloseIcon name="Cancel" />
              </Button>
            </Box>
          </form>
        </div>
      )}
    </>
  );
}

export default TicketView;
