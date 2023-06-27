import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function voteDown(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let message;

  const contributionId: number = req.body.contributionId;
  const userId: string = req.body.userId;

  if (req.method === "POST") {
    try {
      const updateContributions = await prisma.contribution.update({
        where: {
          id: contributionId,
        },
        data: {
          vote: { decrement: 1 },
        },
      });
      return res.status(200).send(updateContributions);
    } catch (error) {
      message = "Voting down doesn't work";
      return res.status(404).json({ response: { message: message } });
    }
  }
}
