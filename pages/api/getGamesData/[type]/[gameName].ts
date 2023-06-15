import {getOptions} from "@/components/games/gameComponentBackend/getRandomWord";
import {Dictionary, getWordWithPictures} from "@/components/games/gameComponentBackend/getRandomPictures";
import prisma from "@/lib/prisma";
import {getRandomSentence, Sentence} from "@/components/games/gameComponentBackend/getRandomSentence";
import {NextApiRequest, NextApiResponse} from "next";
import {Prisma} from ".prisma/client";
import EnumCategoryFilter = Prisma.EnumCategoryFilter;

export default async function handler(req: NextApiRequest,
                                      res: NextApiResponse) {

    const {gameName, type} = req.query;
    const newType = type!.toString().toUpperCase() as EnumCategoryFilter;
    switch (gameName) {
        case "dictionary" : {
            const words = await prisma.dictionary.findMany({
                where: {
                    category: newType
                }
                }
            ) as Dictionary;
            const result = getOptions(words);
            return res.status(200).json({result});
        }
        case "picture" : {
            const words = await prisma.dictionary.findMany({
                    where: {
                        category: newType
                    }
                }
            ) as Dictionary;
            const result = getWordWithPictures(words);
            return res.status(200).json({result});
        }
        case "sentence" : {
            const sentences = await prisma.sentence.findMany() as Sentence;
            const dictionary = await prisma.dictionary.findMany() as Dictionary;
            const result = getRandomSentence(sentences, dictionary);
            return res.status(200).json({result});
        }
        case "pelmanism" : {
            const words = await prisma.dictionary.findMany({
                    where: {
                        category: newType
                    }
                }
            ) as Dictionary;
            const result = getOptions(words);
            return res.status(200).json({result});
        }
        case "storyline" : {
            const storyline = await prisma.storyline.findMany();
            const randomId = Math.floor(Math.random() * storyline.length);
            const story = storyline[randomId];

            const options = story.options.split(";");
            const sentences = story.sentences.split(";");
            const solutions = story.solutions.split(";");
            const result = { sentences, options, solutions };
            return res.status(200).json({result});
        }
        default : return null
    }



}
