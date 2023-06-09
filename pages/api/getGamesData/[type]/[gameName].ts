import {getOptions} from "@/components/getRandomWord";
import {getWordWithPictures} from "@/components/getRandomPictures";
import prisma from "@/lib/prisma";
import {getRandomSentence} from "@/components/getRandomSentence";
export default async function handler(req, res) {
    const {gameName, type} = req.query;
    const newType = type.toUpperCase();
    switch (gameName) {
        case "dictionary" : {
            const words = await prisma.dictionary.findMany({
                where: {
                    category: newType
                }
                }
            );
            const fourWordsFinally = getOptions(words);
            return res.status(200).json({fourWordsFinally});
        }
        case "picture" : {
            const words = await prisma.dictionary.findMany({
                    where: {
                        category: newType
                    }
                }
            );
            const fourWordsFinally = getWordWithPictures(words);
            return res.status(200).json({fourWordsFinally});
        }
        case "sentence" : {
            const sentences = await prisma.sentence.findMany();
            const dictionary = await prisma.dictionary.findMany();
            const fourWordsFinally = getRandomSentence(sentences, dictionary);
            return res.status(200).json({fourWordsFinally});
        }
        case "pelmanism" : {
            const words = await prisma.dictionary.findMany({
                    where: {
                        category: newType
                    }
                }
            );
            const fourWordsFinally = getOptions(words);
            return res.status(200).json({fourWordsFinally});
        }
        case "storyline" : {
            const storyline = await prisma.storyline.findMany();
            const randomId = Math.floor(Math.random() * storyline.length);
            const story = storyline[randomId];

            const options = story.options.split(";");
            const sentences = story.sentences.split(";");
            const solutions = story.solutions.split(";");
            const fourWordsFinally = { sentences, options, solutions };
            return res.status(200).json({fourWordsFinally});
        };
        default : return null
    }



}
