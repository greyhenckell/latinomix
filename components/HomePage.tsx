import {
  Stack,
  Flex,
  Button,
  Link,
  Text,
  VStack,
  useBreakpointValue,
  chakra,
} from "@chakra-ui/react";
import { Journal } from "typing";

import AdultsSchedule from "components/AdultsSchedule";

interface Props {
  journals: Journal[];
}

export default function WithBackgroundImage({ journals }: Props) {
  return (
    <Flex
      id="bgphoto"
      w={"100%"}
      h={"85vh"}
      backgroundImage={
        //"url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        "linear-gradient(to top,rgba(255, 255, 255, 0.155),rgba(0, 0, 0, 0.25)), url(imgs/bg2.jpeg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"top"}
        px={useBreakpointValue({ base: 4, md: 6 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"6xl"} align={"flex-start"} spacing={9}>
          <chakra.h1
            mt={2}
            fontSize={24}
            fontFamily={"Odin Rounded"}
            //fontWeight={"bold"}
            color="gray.100"
          >
            Looking for Fun,Powerful,Energetic Dance? come to...
          </chakra.h1>

          <Text
            as="em"
            bgGradient="linear(to-r, #FFF5F5, #FF0080)"
            bgClip="text"
            fontFamily={"Georgia"}
            //fontWeight={"bold"}
            fontSize="6xl"
            textTransform={"uppercase"}
          >
            latinomix
          </Text>
          <Stack
            direction={"row"}
            py={useBreakpointValue({ base: 60, md: 40, lg: 4 })}
          >
            <Link href="/timetable">
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                more info!
              </Button>
            </Link>
            <Link href="/news">
              <Button
                bg={"whiteAlpha.700"}
                rounded={"full"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                news!
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
