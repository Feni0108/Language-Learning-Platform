let originalWord: {id: number, word: string} | undefined
let wordsWithPictures: { id: number; word: string, image: string, isSelected: boolean}[] = [];


export type Dictionary = [
    {
        id: number,
        word: string,
        image: object,
        category: string;
    }
]


const getRandomWord = (original_words: Dictionary, translated_words: Dictionary, maxId: number) => {
    const randomId = (Math.floor(Math.random() * (maxId))+1)
    let newId = true;
    if (original_words[randomId-1].image === null) newId = false;
    for(let i:number = 0; i<wordsWithPictures.length; i++) {
        if (wordsWithPictures[i].id === original_words[randomId-1].id)
            newId = false;
    }
    if (newId){
        wordsWithPictures.push({id:original_words[randomId-1].id, word:original_words[randomId-1].word, image:original_words[randomId-1].image.toString(), isSelected:false})
        if (originalWord === undefined){
            originalWord = {id: translated_words[randomId-1].id, word:translated_words[randomId-1].word};
        }
    }


}

//Main function for retrieving the necessary variables
export const getWordWithPictures = (original_words: Dictionary, translated_words: Dictionary) => {
    const maxId = original_words.length;
    wordsWithPictures = [];
    originalWord = undefined;
    do {
        getRandomWord(original_words, translated_words, maxId);
    } while (wordsWithPictures.length !== 4)
    return [originalWord, getRandom(wordsWithPictures)];

}

//Mixes the given array
const getRandom = (wordsWithPictures: { id: number, word: string, image: string, isSelected: boolean }[]) => {
    for(let i = wordsWithPictures.length-1; i>0; i--) {
        const j = Math.floor(Math.random() * (i+1))
        const temp = wordsWithPictures[i];
        wordsWithPictures[i] = wordsWithPictures[j];
        wordsWithPictures[j] = temp;
    }
    return wordsWithPictures;
}