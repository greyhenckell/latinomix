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
    const { id }: any = req.query;
    console.log("fetching id: ", id);
    const service = await prisma.service.findUnique({
      where: {
        id: id,
      },
      select: {
        name: true,
        place: true,
        address: true,
        start_time: true,
        end_time: true,
        dance_type: true,
        duration: true,
        description: true,
      },
    });
    if (service) {
      console.log(service);
      return res.json(service);
    }
    console.log("not service");
  }
}
