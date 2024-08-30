import React, { useState } from "react";

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
import { AddIcon, CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

import { EditService } from "typing";

import { showServices, fetchService } from "lib/api";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

import ServiceView from "./ServiceView";
import ServiceList from "./ServiceList";

function ServiceDay() {
  const mydays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [dayValue, setDayValue] = useState("");
  const [serviceState, setServiceState] = useState<"view" | "edit">("view");

  const [data, setData] = useState({ services: [] });
  const [dataServ, setDataServ] = useState<EditService>({
    name: "",
    place: "",
    address: "",
    start_time: "",
    end_time: "",
    dance_type: "",
    duration: "",
    description: "",
  });

  const handleServices = async () => {
    try {
      const response = await showServices(dayValue);
      setData(response);
    } catch (err: any) {
      console.log("error message fetching...", err.message);
    }
  };

  const { services }: any = data;

  const handleService = async (data: string) => {
    try {
      const responseServ = await fetchService(data);
      setDataServ(responseServ);
    } catch (err: any) {
      console.log("error fetching service unique", err.message);
    }
  };

  console.log("serv fetch unique: ", dataServ);

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
  }, [setFocus, serviceState]);

  const cancelEdit = () => {
    setServiceState("view");
    reset();
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
            Edit Schedule per Day
          </Text>

          <Stack spacing={2}>
            <Select
              placeholder="Select Day"
              value={dayValue}
              onChange={(e) => {
                setDayValue(e.target.value);
              }}
            >
              {mydays.map((day) => (
                <option key={day}>{day}</option>
              ))}
            </Select>
          </Stack>
          <Flex py={2}>
            <Button
              type="submit"
              onClick={handleServices}
              py={1}
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Show schedule
            </Button>
          </Flex>
        </Box>
        {serviceState === "view" && dayValue && data && (
          <Box id="viewbox" p={2} width="auto">
            {services.map((index: any) => (
              <Stack key={index.id} direction="row" py={4} m={1}>
                <Text>{index.name}</Text>
                <Text>| {index.place}</Text>
                <Text>| {index.start_time}</Text>
                <Button
                  size={"sm"}
                  ml={6}
                  onClick={() => {
                    handleService(index.id);
                    setServiceState("edit");
                  }}
                >
                  <EditIcon name="Edit" />
                </Button>
              </Stack>
            ))}
          </Box>
        )}

        {serviceState === "edit" && (
          <div>
            <Text fontSize="lg" as="b">
              Editing... {dataServ.name}
            </Text>
            <form>
              <Box py={4}>
                <div>
                  <Input
                    type="text"
                    defaultValue={dataServ.name}
                    {...register("name", { required: true })}
                  ></Input>
                  <Input
                    type="text"
                    defaultValue={dataServ.place}
                    {...register("place", { required: true })}
                  ></Input>
                  <Input
                    type="text"
                    defaultValue={dataServ.address}
                    {...register("address", { required: true })}
                  ></Input>
                  <Input
                    type="text"
                    defaultValue={dataServ.start_time}
                    {...register("start_time", { required: true })}
                  ></Input>
                  <Input
                    type="text"
                    defaultValue={dataServ.end_time}
                    {...register("end_time", { required: true })}
                  ></Input>
                  <Input
                    type="text"
                    defaultValue={dataServ.dance_type}
                    {...register("dance_type", { required: true })}
                  ></Input>
                  <Input
                    type="text"
                    defaultValue={dataServ.duration}
                    {...register("duration", { required: true })}
                  ></Input>
                  <Checkbox spacing="1rem" {...register("activeServcice")}>
                    Active
                  </Checkbox>
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
      </VStack>
    </>
  );
}

export default ServiceDay;
