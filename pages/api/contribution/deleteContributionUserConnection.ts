import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function deleteVote(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let message;

  const contributionId: number = req.body.contributionId;
  const userId: string = req.body.userId;

  if (req.method === "POST") {
    try {
      const deleteRelation = await prisma.votesOnContribution.delete({
        where: {
          contributionId_userId: {
            contributionId: contributionId,
            userId: userId,
          },
        },
      });
      return res.status(200).send(deleteRelation);
    } catch (error) {
      message = "Relation can not be deleted";
      return res.status(404).json({ response: { message: message } });
    }
  }
}
