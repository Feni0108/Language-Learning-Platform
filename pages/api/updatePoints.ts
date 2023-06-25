import {prisma} from "../../lib/prisma"
import type { NextApiRequest, NextApiResponse } from 'next'
import {testDate} from "@/components/testDate";
import { getSession } from "next-auth/react";
import { Language } from "@prisma/client";

type LastGame = {
    lastGame : Date | null,
    leaderBoard: {
        id: number,
        userId: string,
        totalPoints: number,
        strike: number,
    }
    };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    let message;


    if (req.method === "POST") {
        const userId = req.body.userId;
        const points = req.body.points;
        const isProgressUpdate = req.body.isProgressUpdate;
        const targetLanguage = req.body.targetLanguage;
        const interfaceLanguage = req.body.interfaceLanguage;

        const lastGame = await prisma.user.findUnique(
            {
                where: {
                    id: userId
                },
                select: {
                    lastGame: true,
                    leaderBoard: true,
                }
            }
        ) as LastGame;
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
                    console.log(isProgressUpdate);
                    const updateLastGame =
                        await prisma.user.update({
                            where : {
                                id: userId,
                            },
                            data: {
                                actualProgress: {increment: 1}
                            }
                        });
                    const updateProgressTable = await prisma.userProgress.update({
                        where: {
                            userId_interfaceLanguage_targetLanguage: {userId, interfaceLanguage, targetLanguage}
                        },
                        data: {
                            progress: {increment: 1}
                        }
                    })
                    console.log(updateProgressTable);
                }
                const updatePoints = await prisma.leaderboard.update(
                    {
                        where: {
                            userId: userId,
                        },
                        data: {
                            totalPoints: points,
                            strike: {increment: 1}
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
                                actualProgress: {increment: 1}
                            }
                        });
                    const updateProgressTable = await prisma.userProgress.update({
                        where: {
                            userId_interfaceLanguage_targetLanguage: {userId, interfaceLanguage, targetLanguage}
                        },
                        data: {
                            progress: {increment: 1}
                        }
                    })
                    console.log(updateProgressTable);
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