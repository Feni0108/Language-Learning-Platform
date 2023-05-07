import {DummyDatabase} from "@/DummyDatabase";

let words: {id: number, word: string, isVisible: boolean}[] = [];
let sentence: string = "";
let solution: string = "";


export const getRandomSentence = (sentences, dummyWords) => {
    const MAX_ID = sentences.length;
    createData(sentences, MAX_ID, dummyWords);
    return {words:getRandom(words), original:sentence, solution:solution};
}
const createData = (sentences, MAX_ID, dummyWords) => {
    const randomId = (Math.floor(Math.random() * (MAX_ID)));
    const randomTranslate = (Math.floor(Math.random() * 2));
    if (randomTranslate === 0){
        const preWords = sentences[randomId].german_sentence.split(" ");
        const randomWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
        splitSentence(preWords);
        getRandomWord(randomWords, dummyWords, "german");
        sentence = sentences[randomId].english_sentence;
        solution = sentences[randomId].german_sentence;
    } else {
        const preWords = sentences[randomId].english_sentence.split(" ");
        const randomWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
        splitSentence(preWords);
        getRandomWord(randomWords, dummyWords, "english");
        sentence = sentences[randomId].german_sentence;
        solution = sentences[randomId].english_sentence;
    }
}

const splitSentence = (preWords) => {
    words = [];
    for (let i = 0; i<preWords.length; i++ ){
        words.push({id:(i+1), word: preWords[i], isVisible:true});
    }
}
const getRandomWord = (length: number, dummyWords, type:string) => {

    while (words.length < length) {
        const randomId = (Math.floor(Math.random() * (dummyWords.length))+1)
        let newId = true;
        for(let i:number = 0; i<words.length; i++) {
            if (words[i].id === randomId){
                newId = false;
            }
        }
        if (newId){
            if (type === "german") {
                words.push({id: words.length + 1, word: dummyWords[randomId - 1].translated_word, isVisible: true})
            } else {
                words.push({id: words.length + 1, word: dummyWords[randomId - 1].original_word, isVisible: true})
            }
        }
    }
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
