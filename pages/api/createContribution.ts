import { prisma } from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function saveNewWord(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let message;

  if (req.method === "POST") {
    const word = req.body.word;
    const language = req.body.language;
    const description = req.body.description;
    const category = req.body.category;
    const vote = 0;
    const userId = req.body.userId;

    console.log(word, language, description, category, userId);

    try {
      const newWord = await prisma.contribution.create({
        data: {
          word,
          language,
          description,
          category,
          vote,
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
      return res.status(200).send(newWord);
    } catch (e) {
      message = "Word already exists";
      return res.status(404).json({ response: { message: message } });
    }
  }
}
