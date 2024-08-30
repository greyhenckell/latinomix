import type { NextApiRequest, NextApiResponse } from "next";
import { Journal } from "typing";

import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("api", req.body);
    const danceDay = req.body;
    const result = await prisma.danceDay.create({
      data: danceDay,
    });

    return res.status(200).json(result);
  }

  if (req.method === "GET") {
    const { day }: any = req.query;
    console.log("fetching: ", day);
    const journals = await prisma.danceDay.findUnique({
      where: {
        day: day,
      },
      select: {
        services: true,
      },
    });
    if (journals) {
      console.log(journals);
      return res.json(journals);
    }
    console.log("not journals");
  }
}
