import { Box, Icon, Link, Stack } from "@chakra-ui/react";
import EventSlide from "components/EventSlide";
import Header from "components/Header";
import News from "components/News";
import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";

function news() {
  return (
    <>
      <Header Links={[{ name: "homepage", path: "/" }]}></Header>
      <EventSlide></EventSlide>
      <News></News>
    </>
  );
}

export default news;
