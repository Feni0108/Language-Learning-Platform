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
        let date: Date = new Date();
        if (lastGame.lastGame !== null){
            date = lastGame.lastGame;
        } else {
            date.setMinutes(date.getMinutes()-1);
        }



        if (date.getMinutes() < new Date().getMinutes() ) {
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
                const updateLastGame =
                    await prisma.user.update({
                        where : {
                            id: userId,
                        },
                        data: {
                            lastGame: new Date()
                        }
                    });

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
