
let words: {id: number, word: string, isVisible: boolean}[] = [];
let sentence: string = "";
let solution: string = "";


export const getRandomSentence = (sentences) => {
    const MAX_ID = sentences.length;
    createData(sentences, MAX_ID);
    return {words:words, original:sentence, solution:solution};
}
const createData = (sentences, MAX_ID) => {
    const randomId = (Math.floor(Math.random() * (MAX_ID)));
    const randomTranslate = (Math.floor(Math.random() * 2));
    if (randomTranslate === 0){
        const preWords = sentences[randomId].german_sentence.split(" ");
        splitSentence(preWords);
        sentence = sentences[randomId].english_sentence;
        solution = sentences[randomId].german_sentence;
    } else {
        const preWords = sentences[randomId].english_sentence.split(" ");
        splitSentence(preWords);
        sentence = sentences[randomId].german_sentence;
        solution = sentences[randomId].english_sentence;
    }
}

const splitSentence = (preWords) => {
    const randomWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
    words = [];
    for (let i = 0; i<preWords.length; i++ ){
        words.push({id:(i+1), word: preWords[i], isVisible:true});
    }
    do {
        words.push({id:words.length+1, word: "dummy word", isVisible:true})
    } while (words.length < randomWords);
}