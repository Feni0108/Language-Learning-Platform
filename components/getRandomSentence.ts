import {DummyDatabaseSentence} from "@/DummyDatabaseSentence";
import {useState} from "react";
import {number, string} from "prop-types";
import word from "@/pages/dictionary/Word";


const MAX_ID = DummyDatabaseSentence.length;
const words: {id: number, word: string}[] = new Array();
const solutionOrder: number[] = new Array();


export const getRandomSentence = () => {
    const randomId = (Math.floor(Math.random() * (MAX_ID)));
    //const randomTranslate = (Math.floor(Math.random() * 2));
    const randomTranslate = 0;
    const [sentence, setSentence] = useState({sentence: "", words: []})
    if (randomTranslate === 0){
        const preWords = DummyDatabaseSentence[randomId].german_sentence.split(" ");
        const randowWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
        for (let i = 0; i<preWords.length; i++ ){
            preWords[i] = preWords[i].replace("/", " ");
            words.push({id:(i+1), word: preWords[i]});
            solutionOrder.push(i+1);
        }
        do {
            words.push({id:words.length+1, word: "dummy word"})
        } while (words.length = randowWords);
        return [words, solutionOrder, DummyDatabaseSentence[randomId].english_sentence];
    } else {
        const preWords = DummyDatabaseSentence[randomId].english_sentence.split(" ");
        const randowWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
        console.log(preWords)
    }



    return null;
}