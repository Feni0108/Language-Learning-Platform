import { prisma } from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function saveNewWord(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let message;

  const contributionId: number = req.body.contributionId;
  const userId: string = req.body.userId;

  console.log(contributionId, userId);

  if (req.method === "POST") {
    try {
      const updateContributions = await prisma.contribution.update({
        where: {
          id: contributionId,
        },
        data: {
          vote: { increment: 1 },
          votes: {
            create: [
              {
                user: {
                  connect: {
                    id: userId,
                  },
                },
              },
            ],
          },
        },
      });
      return res.status(200).send(updateContributions);
    } catch (error) {
      message = "Contribution can not be updated!";
      return res.status(404).json({ response: { message: message } });
    }
  }
}
