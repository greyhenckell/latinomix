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

import { getCloudinaryImageUrl } from "../utils";

const ImageCloud = ({ src }: { src: string | null }) => {
  return (
    <>
      {src ? (
        <Image src={src} alt="" rounded={"md"} style={{ objectFit: "cover" }} />
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

export default function SplitWithImage() {
  const NEWS_ITEMS = [
    {
      id: 1,
      day: "Tue-Thu-Sun",
      city: "Espoo",
      event_name: "Autumn/Winter classes 23-24",
      place: "Palvelukeskus ja Pirtii",
      address: "",
      price: "15€ or lippu",
      dresscode: "check schedule in the homepage",
      class: "LatinoMix-Dance",
      description: "Autumn/Winter",
      img: getCloudinaryImageUrl("latinomix/mbuyyh5e5cia39mr2xea"),
    },
    {
      id: 2,
      day: "Thu",
      city: "Espoo",
      event_name: "Happy Thursdays",
      place: "Matinkylan Pirtii",
      address: "",
      price: "20€ or (1+1/2)lippu",
      dresscode: "your favorite",
      class: "LatinoMix-Easy&Dance",
      description: "90min class",
      img: getCloudinaryImageUrl("latinomix/xojgkcoyp1raaxxikcnu"),
    },
    {
      id: 3,
      day: "Thu",
      city: "Espoo",
      event_name: "Lights Dance",
      place: "Opinmäki Suurpelto",
      address: "lillhemtintie 1",
      price: "20€ Adults, 10€ kids(<10yo Free)",
      dresscode: "your favorite costume",
      class: "LatinoMix",
      description: "costume party",
      img: getCloudinaryImageUrl("latinomix/l9ilxuqmy9vmhnqdeyyr"),
    },
  ];

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
            <ImageCloud src={newsitem.img} />
          </Flex>
        </SimpleGrid>
      ))}
    </Container>
  );
}
