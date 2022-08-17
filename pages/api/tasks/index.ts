import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const response = await prisma.service.findMany();

        return res.status(200).json(response);
      } catch (error) {
        console.log(error);
      }

    case "POST":
      const { title, description } = body;
      const newservice = await prisma.service.create({
        data: { name: title, description: description },
      });
      console.log(newservice);
      return res.status(200).json("posting");
    default:
      return res.status(400).json({ reason: "invalid" });
  }
};
