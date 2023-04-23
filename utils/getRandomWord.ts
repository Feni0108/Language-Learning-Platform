import {DummyDatabase} from "@/DummyDatabase";



const MAX_ID = DummyDatabase.length
let notThisOne: number[] = new Array();

const getRandomWord = () => {
    const randomId = (Math.floor(Math.random() * (MAX_ID))+1)
    let newId = true;
    for(let i:number = 0; i<notThisOne.length; i++) {
        if (notThisOne[i] === randomId){
            newId = false;
        }
    }
    if (newId){
        notThisOne.push(randomId);
    }

}

export const getOptions = () => {
    do {
        getRandomWord();
    } while (notThisOne.length!==4)
    const originalWord: { id: number; original_word: string}[] = getOriginalWords();
    const translatedWord: { id: number; translated_word: string}[] = getRandomTranslateWords();
    return [originalWord,translatedWord];



}

function getOriginalWords() {
    return [{
        id:DummyDatabase[notThisOne[0]-1].id,
        original_word:DummyDatabase[notThisOne[0]-1].original_word
    },
        {
            id:DummyDatabase[notThisOne[1]-1].id,
            original_word:DummyDatabase[notThisOne[1]-1].original_word
        },
        {
            id:DummyDatabase[notThisOne[2]-1].id,
            original_word:DummyDatabase[notThisOne[2]-1].original_word
        },
        {
            id:DummyDatabase[notThisOne[3]-1].id,
            original_word:DummyDatabase[notThisOne[3]-1].original_word
        }];
}

const getRandomTranslateWords = () => {
    let newNumberOrder = notThisOne;
    for(let i = newNumberOrder.length-1; i>0; i--) {
        const j = Math.floor(Math.random() * (i+1))
        const temp = newNumberOrder[i];
        newNumberOrder[i] = newNumberOrder[j];
        newNumberOrder[j] = temp;
    }
    const translatedWord: { id: number; translated_word: string}[] =
        [{
            id:DummyDatabase[newNumberOrder[0]-1].id,
            translated_word:DummyDatabase[newNumberOrder[0]-1].translated_word
        },
            {
                id:DummyDatabase[newNumberOrder[1]-1].id,
                translated_word:DummyDatabase[newNumberOrder[1]-1].translated_word
            },
            {
                id:DummyDatabase[newNumberOrder[2]-1].id,
                translated_word:DummyDatabase[newNumberOrder[2]-1].translated_word
            },
            {
                id:DummyDatabase[newNumberOrder[3]-1].id,
                translated_word:DummyDatabase[newNumberOrder[3]-1].translated_word
            }];
    return translatedWord;
}