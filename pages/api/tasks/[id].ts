import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;

  switch (method) {
    case "GET":
      try {
        const response = await prisma.service.findUnique({
          where: { id: Number(query.id) },
        });

        return res.status(200).json(response);
      } catch (error) {
        console.log(error);
      }
    case "PUT":
      const { title, description } = body;
      try {
        const response = await prisma.service.update({
          where: { id: Number(query.id) },
          data: {
            name: title,
            description: description,
          },
        });
        return res.json(response);
      } catch (err) {
        console.log(err);
      }

    case "DELETE":
      try {
        const response = await prisma.service.delete({
          where: { id: Number(query.id) },
        });
        return res.status(200).json(response);
      } catch (err) {
        console.log(err);
      }

    default:
      return res.status(400).json({ reason: "Task not found" });
  }
};
