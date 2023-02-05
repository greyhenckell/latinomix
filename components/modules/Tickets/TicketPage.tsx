import {
  Heading,
  Icon,
  IconProps,
  VStack,
  useBreakpointValue,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Ticket } from "typing";

interface Props {
  tickets: Ticket[];
  refreshData: () => void;
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

function TicketPage({ tickets, refreshData }: Props) {
  return (
    <>
      <VStack spacing={4}>
        <Heading
          pt={4}
          color={"gray.800"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        >
          Ready to Dance ?
          <Text
            as={"span"}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
          >
            !
          </Text>
        </Heading>
        <Text
          textAlign="center"
          color={"gray.500"}
          fontSize={{ base: "sm", sm: "md" }}
        >
          Choose your plan tailored to your need.
          <Text fontSize={{ base: "sm", sm: "md" }} as="b">
            No ticket expiration!
          </Text>
        </Text>

        {tickets.map((ticket) => (
          <Stack key={ticket.id} pt={10} align={"center"} borderColor="white">
            <Text
              color={"gray.500"}
              fontSize={"md"}
              textTransform={"uppercase"}
              fontWeight={800}
            >
              {ticket.name}
            </Text>
            <Heading
              fontSize={"xs"}
              fontFamily={"body"}
              fontWeight={200}
              textTransform={"lowercase"}
            >
              {ticket.description}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                {ticket.finalprice}
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                {ticket.price}
              </Text>
            </Stack>
          </Stack>
        ))}
      </VStack>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </>
  );
}

export default TicketPage;
