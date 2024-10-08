import { Link, Stack } from "@chakra-ui/react";
import AddService from "components/modules/Services/AddService";
import { safeJson } from "lib/formatHelpers";
import prisma from "lib/prisma";
import { GetServerSideProps } from "next";
import services from "pages/api/services";
import React from "react";
import { Journal } from "typing";

import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id) {
    return {
      props: {},
    };
  }

  let dayselected = await prisma.danceDay.findUnique({
    where: {
      id: String(params.id),
    },
    include: {
      services: true,
    },
  });

  dayselected = safeJson(dayselected);

  return {
    props: { dayselected: dayselected },
  };
};

interface Props {
  dayselected: Journal;
}

function index({ dayselected }: Props) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  console.log("dayselect", dayselected);
  return (
    <Stack>
      <Link href="/admin/login">go to Admin</Link>
      <div>Add new services to</div>
    </Stack>
  );
}

export default index;
