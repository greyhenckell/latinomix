import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { day }: any = req.query;
    console.log("fetching: ", day);
    const journals = await prisma.danceDay.findUnique({
      where: {
        day: day,
      },
      select: {
        services: true,
        id: true,
      },
    });
    if (journals) {
      console.log(journals);
      return res.json(journals);
    }
    console.log("day not found - creating day");
    await prisma.danceDay.create({
      data: {
        day: day,
      },
    });
  }
}
