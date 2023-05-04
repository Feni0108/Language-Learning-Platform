import {DummyDatabase} from "@/DummyDatabase";


//Creation of necessary variables
const MAX_ID = DummyDatabase.length
const originalWord: { id: number; original_word: string; isVisible: boolean; isSelected: boolean}[] = new Array();
const translatedWord: { id: number; translated_word: string, isVisible: boolean, isSelected: boolean}[] = new Array();

const getRandomWord = () => {
    const randomId = (Math.floor(Math.random() * (MAX_ID))+1)
    let newId = true;
    for(let i:number = 0; i<originalWord.length; i++) {
        if (originalWord[i].id === randomId){
            //This line only works if a larger database is available
            //With a small database infinite recursion may occur
            //In this case there is no need for newId-validation
            /*getRandomWord()*/
            newId = false;
        }
    }
    if (newId){
        originalWord.push({id:DummyDatabase[randomId-1].id, original_word:DummyDatabase[randomId-1].original_word, isVisible:true, isSelected:false})
        translatedWord.push({id:DummyDatabase[randomId-1].id, translated_word:DummyDatabase[randomId-1].translated_word, isVisible:true, isSelected:false})
    }

}

//Main function for retrieving the necessary variables
export const getOptions = () => {
    do {
        getRandomWord();
    } while (originalWord.length!==4)
    return [originalWord,getRandom(translatedWord)];



}

//Mixes the given array
const getRandom = (translatedWord: { id: number; translated_word: string }[]) => {
    for(let i = translatedWord.length-1; i>0; i--) {
        const j = Math.floor(Math.random() * (i+1))
        const temp = translatedWord[i];
        translatedWord[i] = translatedWord[j];
        translatedWord[j] = temp;
    }
    return translatedWord;
}