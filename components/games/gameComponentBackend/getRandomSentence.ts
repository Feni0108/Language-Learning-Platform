import {Dictionary} from "@/components/games/gameComponentBackend/getRandomPictures";

let words: {id: number, word: string, isVisible: boolean}[] = [];
let sentence: { word:string}[] = [];
//let sentence: { word:string, hover: string[] }[] = [];
let solution: string = "";

export type Sentence = [
    {
        id: number,
        sentence: string
    }
]
export const getRandomSentence = (original_sentence: Sentence, translated_sentence: Sentence) => {
    const MAX_ID = original_sentence.length;
    createData(original_sentence, translated_sentence, MAX_ID);
    return {words:getRandom(words), original:sentence, solution:solution};
}
const createData = (original_sentence: Sentence, translated_sentence: Sentence, MAX_ID:number) => {
    const randomId = (Math.floor(Math.random() * (MAX_ID)));
    const randomTranslate = (Math.floor(Math.random() * 2));
    if (randomTranslate === 0){
        const preWords:string[] = original_sentence[randomId].sentence.split(" ");
        const randomWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
        splitSentence(preWords);
        //getRandomWord(randomWords, dictionary, "german"); - original sentence!!!
        fillHover(translated_sentence[randomId].sentence);
        // - parallel sencence, dictionary neeeded!
        solution = original_sentence[randomId].sentence;
    } else {
        const preWords:string[] = translated_sentence[randomId].sentence.split(" ");
        const randomWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
        splitSentence(preWords);
        //getRandomWord(randomWords, dictionary, "english");
        fillHover(original_sentence[randomId].sentence);
        //fillHover(sentences[randomId].german_sentence, "german", dictionary);
        solution = translated_sentence[randomId].sentence;
    }
}

const splitSentence = (preWords:string[]) => {
    words = [];
    for (let i = 0; i<preWords.length; i++ ){
        words.push({id:(i+1), word: preWords[i], isVisible:true});
    }
}
const getRandomWord = (length: number, dictionary:Dictionary, type:string) => {

    while (words.length < length) {
        const randomId = (Math.floor(Math.random() * (dictionary.length))+1)
        let newId = true;
        for(let i:number = 0; i<words.length; i++) {
            if (words[i].id === randomId
                // ||
            //words[i].word === dictionary[randomId - 1].translated_word ||
            //words[i].word === dictionary[randomId - 1].original_word
                ){
                newId = false;
            }
        }
        if (newId){
            if (type === "german") {
                //words.push({id: words.length + 1, word: dictionary[randomId - 1].translated_word, isVisible: true})
            } else {
                //words.push({id: words.length + 1, word: dictionary[randomId - 1].original_word, isVisible: true})
            }
        }
    }
}

const fillHover = (originalSentence: string) => {
    sentence = [];
    const originalWords = originalSentence.split(" ");
    /*originalWords.map((word) => {
        if (type === "english") {
            let hover:string[] = []
            dictionary.map((dicWord) => {
                if (dicWord.original_word === word){
                    hover.push(dicWord.translated_word);
                }
            })
            sentence.push({word,hover});
        } else if (type === "german"){
            let hover:string[] = []
            dictionary.map((dicWord) => {
                if (dicWord.translated_word === word){
                    hover.push(dicWord.original_word);
                }
            })
            sentence.push({word,hover});
        }
    }
    );*/
    originalWords.map((word) => {
        sentence.push({word});
    });
    }
const getRandom = (wordArray: { id: number; word: string; isVisible: boolean }[]) => {
    for(let i = wordArray.length-1; i>0; i--) {
        const j = Math.floor(Math.random() * (i+1))
        const temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
    }
    return wordArray;
}
