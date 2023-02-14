import type { NextApiRequest, NextApiResponse } from "next";
import { Journal } from "typing";

import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const danceDay = req.body;
  console.log("api", req.body);
  if (req.method === "POST") {
    const result = await prisma.danceDay.create({
      data: danceDay,
    });

    return res.status(200).json(result);
  }

  if (req.method === "GET") {
    const journals = await prisma.danceDay.findMany();
    if (journals) {
      return res.json(journals);
    }
    console.log("not journals");
  }
}
