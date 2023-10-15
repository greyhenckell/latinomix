import React from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

import { getCloudinaryImageUrl } from "../utils";

const ImageCloud = ({ src }: { src: string | null }) => {
  return (
    <>{src ? <Image src={src} alt="" w={"sm"} /> : <p>loading image...</p>}</>
  );
};

function About() {
  const imageTag = getCloudinaryImageUrl("latinomix/IMG_2819_ri0xw1");
  const { t } = useTranslation();
  return (
    <>
      <Box m={2}>
        <Stack id="stack-img_title" alignItems={"center"}>
          <Box w={"sm"} p={1}>
            <ImageCloud src={imageTag} />
          </Box>
          <Stack alignItems="center">
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              Jorge Pacheco
            </Heading>
            <Text fontWeight={200} color={"gray.500"} size="sm" mb={2}>
              {t("about.title")}
            </Text>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              @latinomixtanssi
            </Text>
            <Text fontWeight={300} color={"gray.500"} size="sm" mb={4}>
              latinomixtanssi@gmail.com
            </Text>
          </Stack>
          <Box>
            <Stack alignItems="center" direction={"column"}>
              <Badge
                variant="solid"
                fontSize={"0.55em"}
                px={1}
                py={1}
                bg={"purple.400"}
              >
                #Salsa #Bachata #Merengue #Samba
              </Badge>

              <Badge
                variant="solid"
                fontSize={"0.55em"}
                px={1}
                py={1}
                bg={"purple.400"}
              >
                #show&Events #CoupleDance
              </Badge>
              <Link
                href="https://www.facebook.com/Latinomixtanssi.fi"
                isExternal
              >
                <Button
                  my={4}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{ bg: "gray.400" }}
                >
                  {" "}
                  Contact me{" "}
                </Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default About;
