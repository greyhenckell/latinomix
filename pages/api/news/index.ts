import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const newsCreation = req.body;
    const result = await prisma.news.create({
      data: newsCreation,
    });

    return res.status(200).json(result);
  }

  if (req.method === "GET") {
    const newsRequested = await prisma.news.findMany();
    if (newsRequested) {
      return res.json(newsRequested);
    }
    console.log("not tickets");
  }
}
