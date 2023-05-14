import { prisma } from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let message;


    if (req.method === "POST") {
        const username = req.body.username;
        const password = req.body.password;
        try {
            const newUser = await prisma.user.create({
                data: {
                    username,
                    password,
                    leaderBoard: {
                        create: {}
                    }
                }});
            return res.status(200).send(newUser);
        } catch (e) {
            message = "Username already exists"
            return res.status(404).json({response: {message:  message}});
        }

    }
  }

