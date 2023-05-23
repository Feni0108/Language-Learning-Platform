import {getOptions} from "@/components/getRandomWord";
import {getWordWithPictures} from "@/components/getRandomPictures";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
    const {gameName} = req.query;
    switch (gameName) {
        case "dictionary" : {
            const words = await prisma.dictionary.findMany();
            const fourWords = getOptions(words);
            return res.status(200).json({fourWords});

        }
        case "picture" : {
            const words = await prisma.dictionary.findMany();
            const fourWords = getWordWithPictures(words);
            return res.status(200).json({fourWords});
        }
    }



}