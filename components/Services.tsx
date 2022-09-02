import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  Link,
  Icon,
} from "@chakra-ui/react";

import { FiArrowLeftCircle } from "react-icons/fi";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={"white"}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: "white",
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text textAlign={"center"} color={"gray.600"} fontSize={"sm"}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} name={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={"gray.600"}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

function Services() {
  return (
    <Box bg={"gray.100"}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack
          w="full"
          p={10}
          bg={"gray.700"}
          justify={{ lg: "center" }}
          borderRadius={10}
        >
          <Link href="/" color="orange.200" fontSize={20} alignItems="center">
            <Icon as={FiArrowLeftCircle} w={6} h={6} mr={2} />
            HomePage
          </Link>
        </Stack>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Main Services</Heading>
          <Text>
            Beside Latinomix Dance, we are working hard to provide customized
            service for you, being adaptable for different dance levels.
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>LatinoMix-EasyDance</TestimonialHeading>
              <TestimonialText>
                In the dance class, basic steps are practiced, e.g. salsa,
                merengue, bachata, reggaeton, samba and chachacha. In the dance
                class, we start from the very beginning and do a lot of
                repetitions in a good mood. Latinomix easy Dance is open to
                everyone interested in Latin dances! Welcome to dance and have
                fun
              </TestimonialText>
            </TestimonialContent>
            {/*<TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={""}
              title={""}
            />*/}
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>LatinoMix-Kids</TestimonialHeading>
              <TestimonialText>
                Latinomix dance classes teach different Latin dance styles such
                as salsa, bachata, reggueton, samba etc. The latest Finnish hits
                also find their place in dance classes. There are also rhythmic
                exercises in play through games and games, so that Latin rhythms
                become familiar. It is good to have comfortable, elastic
                sportswear and slippers or indoor shoes that allow you to
                workout for an hour. Of course, you can also dance barefoot. The
                dance lesson takes 45 minutes. The payment includes group
                accident insurance.
              </TestimonialText>
            </TestimonialContent>
            {/*<TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Jorge Pacheco"}
              title={"Founder at LatinoMIx"}
            />*/}
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>LatinoMix-Couple</TestimonialHeading>
              <TestimonialText>
                from Basic to Medium level in couple dance
              </TestimonialText>
            </TestimonialContent>
            {/*<TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={""}
              title={""}
            />*/}
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>LatinoMix-Private</TestimonialHeading>
              <TestimonialText>
                Get ready to dance and enjoy with the best latin music and learn
                to dance salsa, merengue, bachata, regueton , cha cha cha, solo
                , couple or in groups. We will start and go from the very
                beginning to up. Easy fun and quick to learn.
              </TestimonialText>
            </TestimonialContent>
            {/*<TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={""}
              title={""}
            />*/}
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}

export default Services;
