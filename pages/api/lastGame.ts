import prisma from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";
import {testDate} from "@/components/testDate";

type LastGame = {lastGame: Date | null};


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method === "POST") {
        const id = req.body.userId;
                const lastGame = await prisma.user.findUnique(
                    {
                        where: {
                            id: id
                        },
                        select: {
                            lastGame: true,
                        }
                    }
                ) as LastGame;
                return res.status(200).send(testDate(lastGame.lastGame, id));
    }
}
