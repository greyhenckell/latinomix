import { useFormControlStyles } from "@chakra-ui/react";
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newsId = req.query.id as string;
  if (req.method === "PUT") {
    const newsBody = JSON.parse(req.body);

    const result = await prisma.news.update({
      where: { id: newsId },
      data: newsBody,
    });

    res.json(result);
  }
  if (req.method === "DELETE") {
    const newsDeleted = await prisma.news.delete({
      where: { id: newsId },
    });

    return res.json(newsDeleted);
  }
}
