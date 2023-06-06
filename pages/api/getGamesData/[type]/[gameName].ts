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

        default : return null
    }



}


/*let randomWords : number[] = [];
            while (randomWords.length < 4) {
                let card = Math.floor(Math.random() * words.length)+1;
                if (!randomWords.includes(card)) randomWords.push(card);
            }
            console.log("RANDOMWORDS")
            console.log(randomWords);
            const fourWords = await prisma.dictionary.findMany({
                where: {
                    id: { in: randomWords },
                },
            })
            console.log(fourWords);*/