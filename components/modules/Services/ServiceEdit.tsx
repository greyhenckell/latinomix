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
  Select,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { Journal, Ticket } from "typing";
//import TicketsList from "./TicketsList";

import { useForm } from "react-hook-form";
import ServiceView from "./ServiceView";
import ServiceList from "./ServiceList";

interface Props {
  journals: Journal[];
  refreshData: () => void;
}

function ServiceEdit({ journals, refreshData }: Props) {
  const mydays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //submit ticket
  const onSubmit = async (data: any) => {
    try {
      const body = {
        day: data.servDay,
      };
      await fetch("/api/services", {
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
        <Box id="add_service" width="md">
          <Text fontSize="md" as="b" p={2}>
            New Services
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Select
                placeholder="Select Day"
                {...register("servDay", { required: true })}
              >
                {mydays.map((day) => (
                  <option key={day}>{day}</option>
                ))}
              </Select>
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
        <Box id="viewbox" p={8} width="md">
          <ServiceList
            journals={journals}
            refreshData={refreshData}
          ></ServiceList>
        </Box>
      </VStack>
    </>
  );
}

export default ServiceEdit;
