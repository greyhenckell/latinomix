import { Box, Icon, Link } from "@chakra-ui/react";
import News from "components/News";
import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";

function news() {
  return (
    <>
      <Box p={4}>
        <Link href="/" color="orange.400" fontSize={15} alignItems="center">
          <Icon as={FiArrowLeftCircle} w={6} h={6} mr={2} />
          HomePage
        </Link>
      </Box>
      <News></News>
    </>
  );
}

export default news;
