import {DummyDatabaseSentence} from "@/DummyDatabaseSentence";
import {useState} from "react";
;


const MAX_ID = DummyDatabaseSentence.length;
const words: {id: number, word: string}[] = new Array();
const solutionOrder: number[] = new Array();
let word: string = "";


export const getRandomSentence = () => {
    createData();
    return [words,solutionOrder,word];
}
const createData = () => {
    const randomId = (Math.floor(Math.random() * (MAX_ID)));
    //if (randomTranslate === 0){
        const preWords = DummyDatabaseSentence[randomId].german_sentence.split(" ");
        const randomWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
        for (let i = 0; i<preWords.length; i++ ){
            preWords[i] = preWords[i].replace("/", " ");
            words.push({id:(i+1), word: preWords[i]});
            solutionOrder.push(i+1);
        }
        do {
            words.push({id:words.length+1, word: "dummy word"})
        } while (words.length < randomWords);
        word = DummyDatabaseSentence[randomId].english_sentence;
    /*} else {
        const preWords = DummyDatabaseSentence[randomId].english_sentence.split(" ");
        const randowWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
        console.log(preWords)
    }*/
}