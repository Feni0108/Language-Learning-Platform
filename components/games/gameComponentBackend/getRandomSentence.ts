
let words: {id: number, word: string, isVisible: boolean}[] = [];
let sentence: { word:string, hover: string[] }[] = [];
let solution: string = "";


export const getRandomSentence = (sentences, dictionary) => {
    const MAX_ID = sentences.length;
    createData(sentences, MAX_ID, dictionary);
    return {words:getRandom(words), original:sentence, solution:solution};
}
const createData = (sentences, MAX_ID, dictionary) => {
    const randomId = (Math.floor(Math.random() * (MAX_ID)));
    const randomTranslate = (Math.floor(Math.random() * 2));
    if (randomTranslate === 0){
        const preWords = sentences[randomId].german_sentence.split(" ");
        const randomWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
        splitSentence(preWords);
        getRandomWord(randomWords, dictionary, "german");
        fillHover(sentences[randomId].english_sentence, "english", dictionary);
        solution = sentences[randomId].german_sentence;
    } else {
        const preWords = sentences[randomId].english_sentence.split(" ");
        const randomWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
        splitSentence(preWords);
        getRandomWord(randomWords, dictionary, "english");
        fillHover(sentences[randomId].german_sentence, "german", dictionary);
        solution = sentences[randomId].english_sentence;
    }
}

const splitSentence = (preWords) => {
    words = [];
    for (let i = 0; i<preWords.length; i++ ){
        words.push({id:(i+1), word: preWords[i], isVisible:true});
    }
}
const getRandomWord = (length: number, dictionary, type:string) => {

    while (words.length < length) {
        const randomId = (Math.floor(Math.random() * (dictionary.length))+1)
        let newId = true;
        for(let i:number = 0; i<words.length; i++) {
            if (words[i].id === randomId ||
            words[i].word === dictionary[randomId - 1].translated_word ||
            words[i].word === dictionary[randomId - 1].original_word){
                newId = false;
            }
        }
        if (newId){
            if (type === "german") {
                words.push({id: words.length + 1, word: dictionary[randomId - 1].translated_word, isVisible: true})
            } else {
                words.push({id: words.length + 1, word: dictionary[randomId - 1].original_word, isVisible: true})
            }
        }
    }
}

const fillHover = (originalSentence: string, type: string, dictionary) => {
    sentence = [];
    const originalWords = originalSentence.split(" ");
    originalWords.map((word) => {
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
    );
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
