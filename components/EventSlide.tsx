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
      image:
        "/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1677014791/latinomix/DSC02503_z7vwfk.jpg",
    },
    {
      title: "LatinoMix - Tyhy Päivä",
      text: "Energetic dance class, suitable for all ages, fun to enjoy it together taking you to the depth of Latinoamerica rhythms.",
      image: "/v1677013826/latinomix/IMG_4210_bxldfz.heic",
    },
    {
      title: "Private Services as:",
      text: "Personal Dance class, Birthdays, shows, couple class, We make your party full of joy. Contact me latinomixtanssi@gmail.com and get a offer!!",
      image: "/v1677013821/latinomix/45601_rxbzjv.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
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
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            id="boxbox"
            key={index}
            height={"lg"}
            position="relative"
            //backgroundPosition="center"
            //backgroundRepeat="no-repeat"
            //backgroundSize="cover"
          >
            <Image
              src={card.image}
              alt="wellness"
              layout="fill"
              //width={600}
              //height={650}
              objectFit="cover"
              objectPosition={"center"}
              priority
            ></Image>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                id="desc"
                spacing={2}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="60%"
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
