import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ticket = req.body;

  if (req.method === "POST") {
    const result = await prisma.ticket.create({
      data: {
        ...ticket,
      },
    });

    return res.status(200).json(result);
  }

  if (req.method === "GET") {
    const tickets = await prisma.ticket.findMany();
    return res.json(tickets);
  }
}
