import {getOptions} from "@/components/getRandomWord";
import {getWordWithPictures} from "@/components/getRandomPictures";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
    const {gameName} = req.query;
    console.log(gameName);
    switch (gameName) {
        case "dictionary" : {
            const words = await prisma.dictionary.findMany();
            const fourWords = getOptions(words);
            console.log("invoke dictionary");
            return res.status(200).json({fourWords});
            break;
        }
        case "picture" : {
            const words = await prisma.dictionary.findMany();
            const fourWords = getWordWithPictures(words);
            console.log("invoke picture");
            return res.status(200).json({fourWords});
            break;
        }
        default : return null
    }



}