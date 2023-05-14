import {prisma} from "../../lib/prisma"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let message;


    if (req.method === "POST") {
        const userId = req.body.userId;
        const points = req.body.points;
        console.log(userId);
        console.log(points);
        try {
            const updatePoints = await prisma.leaderboard.update(
                {where: {
                        userId: userId,
                    },
                    data: {
                        totalPoints: points
                    }}
            );
            return res.status(200).send(updatePoints);
        } catch (e) {
            console.log("Here but not workng");
            return res.status(404).json({response: {message:  message}});
        }
    }
}
