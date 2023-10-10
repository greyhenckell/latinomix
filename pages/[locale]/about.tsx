import { Divider, Heading, Text } from "@chakra-ui/react";
import About from "components/About";
import Services from "components/Services";
import React from "react";

function about() {
  return (
    <>
      <Services></Services>
      <Divider orientation="horizontal" />
      <About></About>
    </>
  );
}

export default about;
