import { Box, Icon, Link, Stack } from "@chakra-ui/react";
import EventSlide from "components/EventSlide";

import News from "components/News";
import prisma from "lib/prisma";
import React from "react";

import { News as NewsType } from "typing";

interface Props {
  news: NewsType[];
}

export const getServerSideProps = async () => {
  const news = await prisma.news.findMany();

  return {
    props: {
      news: news,
    },
  };
};

function news({ news }: Props) {
  return (
    <>
      <EventSlide></EventSlide>
      <News news={news}></News>
    </>
  );
}

export default news;
