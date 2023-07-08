import {getOptions} from "@/components/games/gameComponentBackend/getRandomWord";
import { getWordWithPictures} from "@/components/games/gameComponentBackend/getRandomPictures";
import prisma from "@/lib/prisma";
import {getRandomSentence} from "@/components/games/gameComponentBackend/getRandomSentence";
import {NextApiRequest, NextApiResponse} from "next";
import {Prisma} from ".prisma/client";
import EnumCategoryFilter = Prisma.EnumCategoryFilter;
import EnumLanguageFilter = Prisma.EnumLanguageFilter;
import * as stream from "stream";
import { Dictionary, DictionaryForHover, Sentence } from "@/components/games/gameComponentBackend/typeExports";
import { getToken } from "next-auth/jwt";


export default async function handler(req: NextApiRequest,
                                      res: NextApiResponse) {

    const {gameName, type} = req.query;
    console.log(req.query);
    const newType = type!.toString().toUpperCase() as EnumCategoryFilter;
    console.log(newType);
    const token = await getToken({ req });
    const newInt = token!.interfaceLanguage as EnumLanguageFilter;
    const newTarget = token!.targetLanguage as EnumLanguageFilter;

    switch (gameName) {
        case "dictionary" : {
            const original_words = await prisma.words.findMany({
                where: {
                    category: newType,
                    language: newInt,
                    isIndividual: true
                    },
                select: {
                    id: true,
                    word: true,
                    image: true
                }
                }) as Dictionary;
            const translated_words = await prisma.words.findMany({
                where: {
                    category: newType,
                    language: newTarget,
                    isIndividual: true
                },
                select: {
                    id: true,
                    word: true,
                    image: true
                }
            }) as Dictionary;
            const result = getOptions(original_words, translated_words);
            return res.status(200).json({result});
        }
        case "picture" : {
            const original_words = await prisma.words.findMany({
                where: {
                    category: newType,
                    language: newInt
                },
                select: {
                    id: true,
                    word: true,
                    image: true
                }
            }) as Dictionary;
            const translated_words = await prisma.words.findMany({
                where: {
                    category: newType,
                    language: newTarget
                },
                select: {
                    id: true,
                    word: true,
                    image: true
                }
            }) as Dictionary;
            const result = getWordWithPictures(original_words, translated_words);
            return res.status(200).json({result});
        }
        case "sentence" : {
            const original_sentence = await prisma.sentence.findMany({
                where: {
                    category: newType,
                    language: newInt
                },
                select: {
                    id: true,
                    sentence: true
                }
                }
            ) as Sentence;
            const translated_sentence = await prisma.sentence.findMany({
                    where: {
                        category: newType,
                        language: newTarget
                    },
                    select: {
                        id: true,
                        sentence: true
                    }
                }
            ) as Sentence;
            const original_words = await prisma.words.findMany({
                where: {
                    language: newInt
                },
                select: {
                    id: true,
                    word: true,
                    description: true,
                    isIndividual: true
                }
            }) as DictionaryForHover;
            const translated_words = await prisma.words.findMany({
                where: {
                    language: newTarget
                },
                select: {
                    id: true,
                    word: true,
                    description: true,
                    isIndividual: true
                }
            }) as DictionaryForHover;
            const result = getRandomSentence(original_sentence, translated_sentence, original_words, translated_words);
            return res.status(200).json({result});
        }
        case "pelmanism" : {
            const original_words = await prisma.words.findMany({
                where: {
                    category: newType,
                    language: newInt,
                    isIndividual: true
                },
                select: {
                    id: true,
                    word: true,
                    image: true
                }
            }) as Dictionary;
            const translated_words = await prisma.words.findMany({
                where: {
                    category: newType,
                    language: newTarget,
                    isIndividual: true
                },
                select: {
                    id: true,
                    word: true,
                    image: true
                }
            }) as Dictionary;
            const result = getOptions(original_words, translated_words);
            return res.status(200).json({result});
        }
        case "storyline" : {
            const storyline = await prisma.storyline.findMany({
                where: {
                    category: newType,
                    language: newTarget
                }
            });
            const randomId = Math.floor(Math.random() * storyline.length);
            const story = storyline[randomId];

            const options = story.options;
            const sentences = story.sentences;
            const solutions = story.solutions;
            const result = { sentences, options, solutions };
            return res.status(200).json({result});
        }
        default : return null
    }



}
