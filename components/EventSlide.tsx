import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { getCloudinaryImageUrl } from "../utils";

import "slick-carousel/slick/slick.css";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function EventSlide() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "80%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "LatinoMix - WellNess",
      text: "Energy for everyday life. A class is guaranteed to resfresh the minds of your rutine.",
      image: getCloudinaryImageUrl("latinomix/22694_mvf84b"),
    },
    {
      title: "LatinoMix - Tyhy Päivä",
      text: "Energetic dance class, suitable for all ages, fun to enjoy it together taking you to the depth of Latinoamerica rhythms.",
      image: getCloudinaryImageUrl("latinomix/lm_easydance_ull9ae"),
    },
    {
      title: "LatinoMix- Shows and Events",
      text: "Personal Dance class, Birthdays, shows, couple class, We make your party full of joy. Contact me latinomixtanssi@gmail.com and get a offer!!",
      image: getCloudinaryImageUrl("latinomix/lipulaiva"),
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"800px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        //charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        bgColor={"gray.900"}
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" color="white" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        bgColor={"gray.900"}
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" color="white" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            id="boxbox"
            key={index}
            height={"4.5xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={card.image ? card.image : ""}
            py={40}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                id="desc"
                spacing={2}
                w={"full"}
                maxW={"xl"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  bgGradient={"linear(to-b, blackAlpha.700, transparent)"}
                  color={"white"}
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                >
                  {card.title}
                </Heading>

                <Text
                  bgGradient={"linear(to-r, blackAlpha.900, transparent)"}
                  fontSize={{ base: "md", lg: "lg" }}
                  color="white"
                >
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default EventSlide;
