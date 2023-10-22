import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Divider,
} from "@chakra-ui/react";

import React, { ReactElement } from "react";

import { FaHome } from "react-icons/fa";

import { BiCloset, BiEuro } from "react-icons/bi";

import { News as NewsType } from "typing";

import Image from "next/image";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

interface NewsItem {
  news: NewsType[];
}

interface IMGProps {
  img: string;
}

import { getCloudinaryImageUrl } from "../utils";

const ImageCloud = ({ img }: IMGProps) => {
  const imgUrl = getCloudinaryImageUrl(img);

  return (
    <>
      {imgUrl ? (
        <Image
          src={imgUrl}
          height={500}
          width={500}
          alt="latinomix events"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <p>loading image...</p>
      )}
    </>
  );
};

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function NewsComponent({ news }: NewsItem) {
  return (
    <Container maxW={"5xl"} py={2} id="news">
      {news.map((newsitem) => (
        <SimpleGrid
          key={newsitem.id}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          mt={10}
        >
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={"blue.50"}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              {newsitem.tagClass}
            </Text>
            <Heading>{newsitem.event_name}</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              {newsitem.description}
            </Text>
            <Stack
              spacing={4}
              divider={<StackDivider borderColor={"gray.100"} />}
            >
              <Feature
                icon={<Icon as={FaHome} color={"yellow.500"} w={5} h={5} />}
                iconBg={"yellow.100"}
                text={newsitem.place}
              />
              <Feature
                icon={<Icon as={BiCloset} color={"green.500"} w={5} h={5} />}
                iconBg={"green.100"}
                text={newsitem.dressCode}
              />
              <Feature
                icon={<Icon as={BiEuro} color={"purple.500"} w={5} h={5} />}
                iconBg={"purple.100"}
                text={newsitem.price}
              />
            </Stack>
          </Stack>
          <Flex>
            <ImageCloud img={newsitem.imageName} />
          </Flex>
        </SimpleGrid>
      ))}
    </Container>
  );
}
