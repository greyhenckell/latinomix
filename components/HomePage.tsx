import {
  Stack,
  Flex,
  Button,
  Link,
  Text,
  VStack,
  Image,
  useBreakpointValue,
  chakra,
  Box,
  AspectRatio,
} from "@chakra-ui/react";
import { Journal } from "typing";

import AdultsSchedule from "components/AdultsSchedule";

interface Props {
  journals: Journal[];
}

export default function WithBackgroundImage({ journals }: Props) {
  return (
    <Box
      id="bgphoto"
      backgroundImage={"imgs/bgImage.jpg"}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Flex
        minHeight="100vh"
        align="center"
        justify="center"
        direction="column"
        backgroundColor="rgba(0, 0, 0, 0.3)"
      >
        <VStack spacing={4}>
          <chakra.h1
            p={4}
            fontSize={24}
            fontFamily={"Odin Rounded"}
            fontWeight={"bold"}
            color="gray.100"
          >
            Looking for Fun,Powerful,Energetic Dance? come to...
          </chakra.h1>

          <Text
            as="em"
            bgGradient="linear(to-l, #FFF5F5, #FF0080)"
            bgClip="text"
            fontFamily={"Georgia"}
            fontWeight={"bold"}
            fontSize="6xl"
            textTransform={"uppercase"}
            px={2}
            mt={6}
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
        </VStack>
      </Flex>
    </Box>
  );
}
