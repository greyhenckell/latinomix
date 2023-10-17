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
  Heading,
} from "@chakra-ui/react";
import { Journal } from "typing";

import { useTranslation } from "react-i18next";

interface Props {
  journals: Journal[];
}

export default function WithBackgroundImage({ journals }: Props) {
  const { t } = useTranslation();
  return (
    <Box
      id="bgphoto"
      backgroundImage={"imgs/bgImage.jpg"}
      backgroundSize="cover"
      backgroundPosition="center"
      w={"100%"}
    >
      <Flex
        minHeight="100vh"
        align="center"
        justify="center"
        direction="column"
        backgroundColor="rgba(0, 0, 0, 0.3)"
      >
        <VStack spacing={4}>
          <Heading
            as="h3"
            p={4}
            fontSize={{ base: 18, md: 24 }}
            fontFamily={"Odin Rounded"}
            fontWeight={"bold"}
            color="gray.100"
          >
            {t("homepage.welcome")}
          </Heading>

          <Heading
            as="h1"
            bgGradient="linear(to-l, #FFF5F5, #FF0080)"
            bgClip={"text"}
            fontFamily={"Didot"}
            //fontWeight={"bold"}
            fontSize={{ base: "6xl", md: "8xl" }}
            textTransform={"uppercase"}
            px={2}
            mt={6}
          >
            latinomix
          </Heading>
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
                {t("homepage.info")}
              </Button>
            </Link>
            <Link href="/news">
              <Button
                bg={"whiteAlpha.700"}
                rounded={"full"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                {t("homepage.news")}
              </Button>
            </Link>
          </Stack>
        </VStack>
      </Flex>
    </Box>
  );
}
