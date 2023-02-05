import { useFormControlStyles } from "@chakra-ui/react";
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ticketId = req.query.id as string;
  console.log(ticketId);

  if (req.method === "PUT") {
    const { name, description, price } = JSON.parse(req.body);

    const result = await prisma.ticket.update({
      where: { id: ticketId },
      data: {
        name,
        description,
        price,
      },
    });

    res.json(result);
  }
  if (req.method === "DELETE") {
    const ticket = await prisma.ticket.delete({
      where: { id: ticketId },
    });

    return res.json(ticket);
  }
}
