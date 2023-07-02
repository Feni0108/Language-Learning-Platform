import {prisma} from "../../../lib/prisma";
import type {NextApiRequest, NextApiResponse} from "next";

export default async function vote(req: NextApiRequest, res: NextApiResponse) {
  let message;

  const contributionId: number = req.body.contributionId;
  const userId: string = req.body.userId;

  console.log(contributionId, userId);

  if (req.method === "POST") {
    try {
      const existingVote = await prisma.votesOnContribution.findFirst({
        where: {
          contributionId: contributionId,
          userId: userId,
        },
      });

      if (existingVote) {
        // User has already voted, deduct a point
        const updateContributions = await prisma.contribution.update({
          where: {
            id: contributionId,
          },
          data: {
            vote: {decrement: 1},
          },
        });

        return res.status(200).send(updateContributions);
      } else {
        // User hasn't voted, increment the vote count and create a new vote entry
        const updateContributions = await prisma.contribution.update({
          where: {
            id: contributionId,
          },
          data: {
            vote: {increment: 1},
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
      }
    } catch (error) {
      message = "Contribution cannot be updated!";
      return res.status(404).json({response: {message: message}});
    }
  }
}