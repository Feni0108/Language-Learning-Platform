import {prisma} from "../../lib/prisma"
import type { NextApiRequest, NextApiResponse } from 'next'
import {now} from "next-auth/client/_utils";
import {DateTime} from "next-auth/providers/kakao";


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

        const lastGame = await prisma.user.findUnique(
            {
                where: {
                    id: userId
                },
                select: {
                    lastGame: true,
                    leaderBoard: true
                }
            }
        );
        const date: Date = lastGame.lastGame;
        if (date.getMinutes() < new Date().getMinutes()) {
            try {
                const updateLastGame =
                    await prisma.user.update({
                    where : {
                        id: userId,
                    },
                    data: {
                        lastGame: new Date()
                    }
                });
                console.log(updateLastGame);
                const updatePoints = await prisma.leaderboard.update(
                    {
                        where: {
                            userId: userId,
                        },
                        data: {
                            totalPoints: points,
                            strike: lastGame.leaderBoard.strike+1
                        }
                    }
                );
                console.log(updatePoints);
                return res.status(200).send(updatePoints);
            } catch (e) {
                return res.status(404).json({response: {message: message}});
            }
        } else {
            try {
                const updatePoints = await prisma.leaderboard.update(
                    {
                        where: {
                            userId: userId,
                        },
                        data: {
                            totalPoints: points
                        }
                    }
                );
                return res.status(200).send(updatePoints);
            } catch (e) {
                return res.status(404).json({response: {message: message}});
            }
        }
    }
}
