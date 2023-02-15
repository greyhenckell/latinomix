import React from "react";

import {
  Box,
  Flex,
  Button,
  Stack,
  Text,
  Input,
  VStack,
  StackDivider,
  Checkbox,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { Ticket } from "typing";
import TicketsList from "./TicketsList";

import { useForm } from "react-hook-form";

interface Props {
  tickets: Ticket[];
  refreshData: () => void;
}

function TicketEdit({ tickets, refreshData }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //submit ticket
  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const body = {
        name: data.ticketName,
        description: data.ticketDescription,
        price: parseFloat(data.ticketPrice),
        discount: parseFloat(data.ticketDiscount),
        finalprice:
          parseFloat(data.ticketPrice) *
          (1 - parseFloat(data.ticketDiscount) / 100),
        offer: data.ticketOffer,
      };
      await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      refreshData();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <VStack
        align="stretch"
        p={6}
        spacing={4}
        divider={<StackDivider borderColor="black" />}
      >
        <Box id="add_ticket" width="md">
          <Text fontSize="md" as="b" p={2}>
            New Tickets
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Input
                placeholder="name"
                type="text"
                {...register("ticketName", { required: true })}
              />
              <Input
                placeholder="description"
                type="text"
                {...register("ticketDescription")}
              />
              <Input
                placeholder="price"
                type="number"
                {...register("ticketPrice", { required: true })}
              />
              <Input
                placeholder="discount"
                type="number"
                {...register("ticketDiscount", { required: true })}
              />
              <Checkbox {...register("ticketOffer", { required: true })}>
                Offer
              </Checkbox>
            </Stack>
            <Flex py={2}>
              <Button
                py={1}
                variant={"solid"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
                type="submit"
                role="submit"
                leftIcon={<AddIcon />}
              >
                Add
              </Button>
            </Flex>
          </form>
        </Box>

        <Box p={8} width="md">
          <TicketsList
            tickets={tickets}
            refreshData={refreshData}
          ></TicketsList>
        </Box>
      </VStack>
    </>
  );
}

export default TicketEdit;
