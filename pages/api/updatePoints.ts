import {prisma} from "../../lib/prisma"
import type { NextApiRequest, NextApiResponse } from 'next'
import {testDate} from "@/components/testDate";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let message;


    if (req.method === "POST") {
        const userId = req.body.userId;
        const points = req.body.points;
        const isProgressUpdate = req.body.isProgressUpdate;


        const lastGame = await prisma.user.findUnique(
            {
                where: {
                    id: userId
                },
                select: {
                    lastGame: true,
                    leaderBoard: true,
                    progress: true
                }
            }
        );
        let date: Date = new Date();
        if (lastGame.lastGame !== null){
            date = lastGame.lastGame;
        } else {
            date.setFullYear(date.getFullYear()-2);
        }
        if (!testDate(date, userId)) {
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
                if (isProgressUpdate) {
                    const updateLastGame =
                        await prisma.user.update({
                            where : {
                                id: userId,
                            },
                            data: {
                                progress: lastGame.progress+1
                            }
                        });
                }
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
                if (isProgressUpdate) {
                    const updateLastGame =
                        await prisma.user.update({
                            where : {
                                id: userId,
                            },
                            data: {
                                progress: lastGame.progress+1
                            }
                        });
                }

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