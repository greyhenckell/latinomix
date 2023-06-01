import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Service } from "typing";

import { useState, useEffect } from "react";

interface Props {
  currentday: String;
  dayId: String;
  services: Service[];
  refreshData: () => void;
}

function AddService({ currentday, dayId, services, refreshData }: Props) {
  const [serviceState, setServiceState] = useState<"view" | "edit">("view");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm();

  useEffect(() => {
    setFocus("servName");
  }, [setFocus, serviceState]);

  //submit serice detail
  async function deleteService(id: string) {
    try {
      fetch(`/api/services/${id}`, {
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

  const onSubmit = async (data: any) => {
    try {
      const body = {
        danceDayId: dayId,
        name: data.servName,
        place: data.servPlace,
        address: data.servAddress,
        start_time: data.servStartTime,
        end_time: data.servEndTime,
        dance_type: data.servDanceType,
        description: data.servDescription,
        duration: data.servDuration,
        keys: data.servKeys,
      };
      await fetch(`/api/services/${dayId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      //refreshData();
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
        <Box id="add_service_on_day" width="md">
          <Text fontSize="md" as="b" p={2}>
            Add service for {currentday}
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Input
                placeholder="name"
                type="text"
                {...register("servName", { required: true })}
              />
              <Input
                placeholder="place"
                type="text"
                {...register("servPlace")}
              />
              <Input
                placeholder="address"
                type="text"
                {...register("servAddress")}
              />
              <Input
                placeholder="start_time"
                type="text"
                {...register("servStartTime")}
              />
              <Input
                placeholder="end_time"
                type="text"
                {...register("servEndTime")}
              />
              <Input
                placeholder="dance_type"
                type="text"
                {...register("servDanceType")}
              />
              <Input
                placeholder="description"
                type="text"
                {...register("servDescription")}
              />
              <Input
                placeholder="duration"
                type="text"
                {...register("servDuration")}
              />
              <Input
                placeholder="key1|key2"
                type="text"
                {...register("servKeys")}
              />
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
      </VStack>
      {serviceState === "view" && (
        <Stack>
          {services.map((service) => (
            <Box
              key={service.id}
              borderColor="black"
              borderWidth="2px"
              width="40%"
            >
              <Text>
                {service.name}- {service.place}
              </Text>
              <button onClick={() => deleteService(service.id)}>
                <DeleteIcon />
              </button>
            </Box>
          ))}
        </Stack>
      )}
    </>
  );
}

export default AddService;
