import { useFormControlStyles } from "@chakra-ui/react";
import type { NextApiRequest, NextApiResponse } from "next";
import { Journal, Service } from "typing";

import prisma from "../../../lib/prisma";

interface Props {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //UPDATE
  const serviceId = req.query.id as string;
  if (req.method === "PUT") {
    const data = JSON.parse(req.body);
    const result = await prisma.service.update({
      where: { id: serviceId },
      data: data,
    });

    res.json(result);
  }

  //console.log(serviceId);
  if (req.method === "POST") {
    const mybody = req.body;
    //console.log("post", mybody);
    const result = await prisma.service.create({
      data: {
        ...mybody,
      },
    });

    res.json(result);
  }
  if (req.method === "DELETE") {
    const result = await prisma.service.delete({
      where: { id: serviceId },
    });

    res.json(result);
  }
}
