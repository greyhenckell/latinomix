import React from "react";
import { Journal, Ticket, Service } from "typing";

interface Props {
  danceday: Journal;
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

function ServiceView({ danceday, refreshData }: Props) {
  //console.log("EDIT", danceday);
  const [serviceState, setServiceState] = useState<"view" | "edit">("view");
  const [editingServiceId, setEditingServiceId] = useState("");

  const filterServiceId = danceday.services.find(
    (item) => item.id === editingServiceId
  );

  const editService = async (itemData: any) => {
    try {
      const body = {
        name: itemData.serviceName,
        place: itemData.servicePlace,
        address: itemData.serviceAddress,
        start_time: itemData.serviceStartTime,
        end_time: itemData.serviceEndTime,
        dance_type: itemData.serviceDanceType,
        duration: itemData.serviceDuration,
      };

      await fetch(`/api/services/${filterServiceId?.id}`, {
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
      fetch(`/api/services/${item}`, {
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
    setFocus("serviceName");
    setFocus("servicePlace");
    setFocus("serviceAddress");
    setFocus("serviceStartTime");
    setFocus("serviceEndTime");
    setFocus("serviceDanceType");
    setFocus("serviceDuration");
  }, [setFocus, serviceState]);

  const cancelEdit = () => {
    setServiceState("view");
    reset();
  };

  return (
    <>
      {serviceState === "view" && (
        <Stack direction="row" my={4}>
          <Text my={6}>{danceday.day}</Text>
          {danceday.services.map((serviceDay) => (
            <Flex
              //minWidth={"100px"}
              w="auto"
              key={serviceDay.id}
              direction={"column"}
              border={"1px"}
              mx={6}
            >
              <Text>{serviceDay.name}</Text>
              <Text>{serviceDay.place}</Text>
              <Text>{serviceDay.start_time}</Text>
              <button
                className="icon-button"
                onClick={() => {
                  setEditingServiceId(serviceDay.id);
                  setServiceState("edit");
                }}
              >
                {" "}
                <EditIcon name="Edit" />{" "}
              </button>
              <button onClick={() => deleteItem(serviceDay.id)}>
                <DeleteIcon />
              </button>
            </Flex>
          ))}
        </Stack>
      )}
      {serviceState === "edit" && (
        <>
          <Text>
            Editing:{danceday.day}-{filterServiceId?.name}
          </Text>
          <form onSubmit={handleSubmit(editService)}>
            <Box py={4}>
              <Input
                type="text"
                defaultValue={filterServiceId?.name}
                {...register("serviceName", { required: true })}
              ></Input>
              <p>Place:</p>
              <Input
                type="text"
                defaultValue={filterServiceId?.place}
                {...register("servicePlace", { required: true })}
              ></Input>
              <p>Adress:</p>
              <Input
                type="text"
                defaultValue={filterServiceId?.address}
                {...register("serviceAddress", { required: true })}
              ></Input>
              <Input
                type="text"
                defaultValue={filterServiceId?.start_time}
                {...register("serviceStartTime", { required: true })}
              ></Input>
              <Input
                type="text"
                defaultValue={filterServiceId?.end_time}
                {...register("serviceEndTime", { required: true })}
              ></Input>
              <p>DanceType:</p>
              <Input
                type="text"
                defaultValue={filterServiceId?.dance_type}
                {...register("serviceDanceType", { required: true })}
              ></Input>
              <Input
                type="text"
                defaultValue={filterServiceId?.duration}
                {...register("serviceDuration", { required: false })}
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
