import React from "react";
import { Journal, Ticket, Service, EditService } from "typing";

interface Props {
  servUnique: EditService;
  refreshData: () => void;
}

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useEffect } from "react";

import { useForm } from "react-hook-form";

function ServiceView({ servUnique, refreshData }: Props) {
  //console.log("EDIT", danceday);
  const [serviceState, setServiceState] = useState<"view" | "edit">("view");
  const [editingServiceId, setEditingServiceId] = useState("");

  const editService = async (itemData: any) => {
    try {
      const body = {
        /*name: itemData.serviceName,
        place: itemData.servicePlace,
        address: itemData.serviceAddress,
        start_time: itemData.serviceStartTime,
        end_time: itemData.serviceEndTime,
        dance_type: itemData.serviceDanceType,
        duration: itemData.serviceDuration,*/
        ...itemData,
      };

      await fetch(`/api/services/${servUnique.id}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });

      refreshData();
      setServiceState("view");
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteItem(item: any) {
    try {
      fetch(`/api/services/${servUnique.id}`, {
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm();

  useEffect(() => {
    setFocus("name");
    setFocus("place");
    setFocus("address");
    setFocus("start_time");
    setFocus("end_time");
    setFocus("dance_type");
    setFocus("duration");
    setFocus("keys");
  }, [setFocus, serviceState]);

  const cancelEdit = () => {
    setServiceState("view");
    reset();
  };

  return (
    <>
      {serviceState === "view" && (
        <Stack direction="row" my={2}>
          <Text>{servUnique.name}</Text>
          <Text>| {servUnique.place}</Text>
          <Text>| {servUnique.start_time}</Text>
          <Button size={"sm"} onClick={() => setServiceState("edit")}>
            <EditIcon name="Edit" />
          </Button>
          <Button size={"sm"} onClick={() => deleteItem(servUnique.id)}>
            <DeleteIcon />
          </Button>
        </Stack>
      )}
      {serviceState === "edit" && (
        <>
          <form onSubmit={handleSubmit(editService)}>
            <Box py={4}>
              <Text>Name:</Text>
              <Input
                type="text"
                defaultValue={servUnique.name}
                {...register("name", { required: true })}
              ></Input>
              <p>Place:</p>
              <Input
                type="text"
                defaultValue={servUnique.place}
                {...register("place", { required: true })}
              ></Input>
              <p>Adress:</p>
              <Input
                type="text"
                defaultValue={servUnique.address}
                {...register("address", { required: true })}
              ></Input>
              <Text>Start time:</Text>
              <Input
                type="text"
                defaultValue={servUnique.start_time}
                {...register("start_time", { required: true })}
              ></Input>
              <Input
                type="text"
                defaultValue={servUnique.end_time}
                {...register("end_time", { required: true })}
              ></Input>
              <p>DanceType:</p>
              <Input
                type="text"
                defaultValue={servUnique.dance_type}
                {...register("dance_type", { required: true })}
              ></Input>
              <Input
                type="text"
                defaultValue={servUnique.duration}
                {...register("duration", { required: false })}
              ></Input>
              <Input
                type="text"
                defaultValue={servUnique.keys}
                {...register("keys", { required: false })}
              ></Input>
              <Button type="submit" role="submit">
                <CheckIcon name="Check" />
              </Button>
              <Button px={4} className="icon-button" onClick={cancelEdit}>
                <CloseIcon name="Cancel" />
              </Button>
            </Box>
          </form>
        </>
      )}
    </>
  );
}

export default ServiceView;
