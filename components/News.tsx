import {
  Container,
  SimpleGrid,
  Image,
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
import { MdPlace } from "react-icons/md";
import { BiCloset, BiEuro } from "react-icons/bi";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

interface NewsItem {
  id: number;
  day: string;
  city: string;
  place: string;
  event_name: String;
  address: string;
  price: string;
  dresscode: string;
  class: string;
  description: string;
  img: string;
}

const NEWS_ITEMS: Array<NewsItem> = [
  {
    id: 1,
    day: "Sunday",
    city: "Espoo",
    event_name: "Pikkujoulut ft. La sexta Flecha",
    place: "Matinkylän Pirtti",
    address: "Keskipäivänkuja 4, Espoo",
    price: "20.00 / 2 Liput",
    dresscode: "Smart Casual",
    class: "LatinoMix-Fitness",
    description: "16:00 -  ",
    img: "imgs/lm_joulu.jpeg",
  },
];

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

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={2} id="news">
      {NEWS_ITEMS.map((newsitem) => (
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
              {newsitem.class}
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
                text={newsitem.dresscode}
              />
              <Feature
                icon={<Icon as={BiEuro} color={"purple.500"} w={5} h={5} />}
                iconBg={"purple.100"}
                text={newsitem.price}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={newsitem.img}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      ))}
    </Container>
  );
}
