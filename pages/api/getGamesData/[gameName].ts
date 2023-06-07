import {getOptions} from "@/components/getRandomWord";
import {getWordWithPictures} from "@/components/getRandomPictures";
import prisma from "@/lib/prisma";
import {getRandomSentence} from "@/components/getRandomSentence";

export default async function handler(req, res) {
    const {gameName} = req.query;
    switch (gameName) {
        case "dictionary" : {
            const words = await prisma.dictionary.findMany();
            const fourWordsFinally = getOptions(words);
            return res.status(200).json({fourWordsFinally});
        }
        case "picture" : {
            const words = await prisma.dictionary.findMany();
            const fourWordsFinally = getWordWithPictures(words);
            console.log("invoke picture");
            return res.status(200).json({fourWordsFinally});
        }
        case "sentence" : {
            const sentences = await prisma.sentence.findMany();
            const dictionary = await prisma.dictionary.findMany();
            const fourWordsFinally = getRandomSentence(sentences, dictionary);
            return res.status(200).json({fourWordsFinally});
        }
        case "pelmanism" : {
            const words = await prisma.dictionary.findMany();
            const fourWordsFinally = getOptions(words);
            return res.status(200).json({fourWordsFinally});
        }

        default : return null
    }



}
