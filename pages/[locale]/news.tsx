import { Box, Icon, Link, Stack } from "@chakra-ui/react";
import EventSlide from "components/EventSlide";

import News from "components/News";
import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";

function news() {
  return (
    <>
      <EventSlide></EventSlide>
      <News></News>
    </>
  );
}

export default news;
