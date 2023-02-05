import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ticket = req.body;

  const result = await prisma.ticket.create({
    data: {
      ...ticket,
    },
  });

  return res.status(200).json(result);
}
