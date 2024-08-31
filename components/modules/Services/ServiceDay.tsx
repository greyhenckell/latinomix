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
  Select,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

import { EditService } from "typing";

import { showServices } from "lib/api";

import ServiceView from "./ServiceView";
import AddService from "./AddService";

interface Props {
  refreshData: () => void;
}

function ServiceDay({ refreshData }: Props) {
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
    id: "",
    name: "",
    place: "",
    address: "",
    start_time: "",
    end_time: "",
    dance_type: "",
    duration: "",
    keys: "",
  });

  const handleServices = async () => {
    try {
      const response = await showServices(dayValue);
      setData(response);
    } catch (err: any) {
      console.log("error message fetching...", err.message);
    }
  };

  const { services, id }: any = data;

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
              mr={1}
              leftIcon={<Search2Icon />}
            >
              Show services
            </Button>
          </Flex>
          {dayValue && data && (
            <AddService
              currentday={dayValue}
              idDay={id}
              refreshData={refreshData}
            ></AddService>
          )}
        </Box>
        {serviceState === "view" && dayValue && data && (
          <Box id="viewbox" p={2} width="auto">
            {services.map((service: any) => (
              <ServiceView
                key={service.id}
                servUnique={service}
                refreshData={refreshData}
              />
            ))}
          </Box>
        )}
      </VStack>
    </>
  );
}

export default ServiceDay;
