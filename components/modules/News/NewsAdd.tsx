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

import { News } from "typing";

import { useForm } from "react-hook-form";

interface Props {
  refreshData: () => void;
}

function NewsAdd({ refreshData }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //submit news
  const onSubmit = async (data: any) => {
    try {
      const body = {
        tagClass: data.newsTag,
        event_name: data.newsEventName,
        description: data.newsDescription,
        place: data.newsPlace,
        dressCode: data.newsDressCode,
        price: data.newsPrice,
        imageName: data.newsImageName,
      };
      await fetch("/api/news", {
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
            Add News
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Input
                placeholder="latinoMixGroup"
                type="text"
                {...register("newsTag", { required: true })}
              />
              <Input
                placeholder="newsTitle"
                type="text"
                {...register("newsEventName", { required: true })}
              />
              <Input
                placeholder="description(date)"
                type="text"
                {...register("newsDescription", { required: false })}
              />
              <Input
                placeholder="place"
                type="text"
                {...register("newsPlace", { required: true })}
              />
              <Input
                placeholder="dressCode"
                type="text"
                {...register("newsDressCode", { required: false })}
              />
              <Input
                placeholder="price"
                type="text"
                {...register("newsPrice", { required: true })}
              />
              <Input
                placeholder="imageName"
                type="text"
                {...register("newsImageName", { required: true })}
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
    </>
  );
}

export default NewsAdd;
