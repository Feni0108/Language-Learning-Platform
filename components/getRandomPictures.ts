//Creation of necessary variables

let originalWord: {id: number, word: string}
const wordsWithPictures: { id: number; word: string, image: string, isSelected: boolean}[] = [];



const getRandomWord = (allWords, maxId) => {
    const randomId = (Math.floor(Math.random() * (maxId))+1)
    let newId = true;
    if (allWords[randomId-1].image === null) newId = false;
    for(let i:number = 0; i<wordsWithPictures.length; i++) {
        if (wordsWithPictures[i].id === randomId) newId = false;
    }
    if (newId){
        wordsWithPictures.push({id:allWords[randomId-1].id, word:allWords[randomId-1].translated_word, image:allWords[randomId-1].image.toString(), isSelected:false})
        if (originalWord === undefined){
            originalWord = {id: allWords[randomId-1].id, word:allWords[randomId-1].original_word};
        }
    }


}

//Main function for retrieving the necessary variables
export const getWordWithPictures = (allWords) => {
    const maxId = allWords.length;
    do {
        getRandomWord(allWords, maxId);
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