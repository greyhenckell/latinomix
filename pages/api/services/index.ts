//import { PrismaClient } from "@prisma/client";

//const prisma = new PrismaClient();
import prisma from "../../../lib/prisma";

export default async function getjournals(req: any, res: any) {
  const journals = await prisma.workDay.findMany();
  return res.json(journals);
}
